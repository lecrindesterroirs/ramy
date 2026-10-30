/*
  Les comptes clients, vus du site (30/10/2026).

  Décision de Ramy : les comptes et l'historique vivent dans L'OS, qui expose
  au site des routes dédiées authentifiées par sa table api_keys. Le site
  n'obtient jamais la clé service-role, donc jamais la base entière.

  Ce fichier est la SEULE porte entre le site et ces routes. Tout le reste du
  site — écrans, tunnel, panier — passe par lui et ignore d'où viennent les
  données. Le jour où le schéma de l'OS bouge, il n'y a que ce fichier à
  reprendre.

  Côté serveur uniquement : la clé d'API ne doit jamais atteindre le navigateur.

  BOUCHON DE DÉVELOPPEMENT. Tant que les routes de l'OS n'existent pas (brief
  du 30/10), un faux service prend le relais : il garde les comptes en mémoire
  et repart à zéro à chaque redémarrage du serveur. Il permet de construire et
  d'essayer les écrans sans attendre, et il disparaît dès que OS_API_URL et
  OS_API_KEY sont posées.
*/

import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'crypto'

const url = () => process.env.OS_API_URL || ''
const cle = () => process.env.OS_API_KEY || ''
export const osPret = () => Boolean(url() && cle())

async function appel(chemin, { methode = 'POST', corps, jeton, ip } = {}) {
  const entetes = { 'x-api-key': cle(), 'content-type': 'application/json' }
  if (jeton) entetes.authorization = `Bearer ${jeton}`
  /*
    L'IP du visiteur, pour que la limite de débit de l'OS compte par personne
    et non par serveur : sans elle, tous les clients partagent un seul
    compteur et un seul acharné les bloque tous. Un en-tête se forge, donc
    l'OS ne s'y fie pas seul — il bloque aussi le compte au bout de huit
    essais.
  */
  if (ip) entetes['x-visiteur-ip'] = ip
  const res = await fetch(`${url().replace(/\/$/, '')}/api/site${chemin}`, {
    method: methode,
    headers: entetes,
    body: corps ? JSON.stringify(corps) : undefined,
  })
  const txt = await res.text()
  let json = null
  try { json = txt ? JSON.parse(txt) : null } catch {}
  return { ok: res.ok, statut: res.status, donnees: json }
}

/* ═══════════ le bouchon ═══════════ */

/*
  Accroché au processus et non au module : en développement, chaque route
  charge sa propre copie des modules, et un compte créé par /inscription
  n'existait pas pour /connexion. Avec globalThis, les routes partagent le
  même bouchon.
*/
const faux = globalThis.__lecrinComptesBouchon || (globalThis.__lecrinComptesBouchon = {
  comptes: new Map(),      // email → { hash, sel, profil }
  sessions: new Map(),     // jeton → email
  reinit: new Map(),       // jeton → email
})

const hacher = (motDePasse, sel) => scryptSync(motDePasse, sel, 32).toString('hex')
const jetonNeuf = () => randomBytes(24).toString('base64url')

function bouchonInscrire({ email, motDePasse, nom, societe, telephone }) {
  if (!faux.comptes.has(email)) {
    const sel = randomBytes(16).toString('hex')
    faux.comptes.set(email, {
      sel,
      hash: hacher(motDePasse, sel),
      profil: {
        email, nom: nom || '', societe: societe || '', telephone: telephone || '',
        livraison: { adresse: '', cp: '', ville: '', acces: '' },
        facturation: { entite: '', adresse: '', cp: '', ville: '', pays: 'FR', email: '', reference: '' },
      },
    })
  }
  // Réponse identique que l'adresse existe ou non : voir le brief.
  return { ok: true }
}

function bouchonConnexion({ email, motDePasse }) {
  const c = faux.comptes.get(email)
  if (!c) return { ok: false }
  const a = Buffer.from(hacher(motDePasse, c.sel)), b = Buffer.from(c.hash)
  if (a.length !== b.length || !timingSafeEqual(a, b)) return { ok: false }
  const jeton = jetonNeuf()
  faux.sessions.set(jeton, email)
  return { ok: true, jeton, expire: Date.now() + 30 * 86400000, profil: c.profil }
}

const bouchonEmail = (jeton) => faux.sessions.get(jeton) || null

/* ═══════════ l'interface, la seule que le reste du site connaît ═══════════ */

export async function inscrire(champs, ip) {
  if (!osPret()) return bouchonInscrire(champs)
  const r = await appel('/compte/inscrire', { corps: champs, ip })
  return r.donnees || { ok: r.ok }
}

/*
  Le clic sur le lien du mail. Le jeton part en POST vers l'OS : une route
  d'API appelée en GET laisserait le jeton dans les journaux du serveur et
  dans l'en-tête Referer de la page suivante.
*/
export async function confirmer(jeton, ip) {
  if (!osPret()) {
    // Le bouchon n'envoie pas de mail : il n'a rien à confirmer.
    return { ok: true, bouchon: true }
  }
  const r = await appel('/compte/confirmer', { corps: { jeton }, ip })
  return r.donnees || { ok: r.ok }
}

export async function connecter({ email, motDePasse }, ip) {
  if (!osPret()) return bouchonConnexion({ email, motDePasse })
  const r = await appel('/compte/connexion', { corps: { email, motDePasse }, ip })
  return r.ok ? r.donnees : { ok: false, ...(r.donnees || {}) }
}

export async function deconnecter(jeton) {
  if (!osPret()) { faux.sessions.delete(jeton); return { ok: true } }
  await appel('/compte/deconnexion', { jeton })
  return { ok: true }
}

export async function profil(jeton) {
  if (!osPret()) {
    const email = bouchonEmail(jeton)
    return email ? faux.comptes.get(email).profil : null
  }
  const r = await appel('/compte/moi', { methode: 'GET', jeton })
  return r.ok ? r.donnees : null
}

export async function majProfil(jeton, champs) {
  if (!osPret()) {
    const email = bouchonEmail(jeton)
    if (!email) return null
    const c = faux.comptes.get(email)
    c.profil = { ...c.profil, ...champs }
    return c.profil
  }
  const r = await appel('/compte/moi', { methode: 'PATCH', jeton, corps: champs })
  return r.ok ? r.donnees : null
}

export async function commandes(jeton) {
  if (!osPret()) {
    // Le bouchon ne connaît aucune commande : la page le dit franchement
    // plutôt que d'inventer un historique.
    return bouchonEmail(jeton) ? [] : null
  }
  const r = await appel('/compte/commandes', { methode: 'GET', jeton })
  return r.ok ? (r.donnees?.commandes ?? []) : null
}

export async function demanderReinitialisation(email, ip) {
  if (!osPret()) {
    if (faux.comptes.has(email)) faux.reinit.set(jetonNeuf(), email)
    return { ok: true }   // toujours, même pour une adresse inconnue
  }
  await appel('/compte/oubli', { corps: { email }, ip })
  return { ok: true }
}

export async function reinitialiser({ jeton, motDePasse }, ip) {
  if (!osPret()) {
    const email = faux.reinit.get(jeton)
    if (!email) return { ok: false }
    faux.reinit.delete(jeton)
    const sel = randomBytes(16).toString('hex')
    const c = faux.comptes.get(email)
    c.sel = sel; c.hash = hacher(motDePasse, sel)
    return { ok: true }
  }
  const r = await appel('/compte/reinitialiser', { corps: { jeton, motDePasse }, ip })
  return r.donnees || { ok: r.ok }
}

/*
  L'IP du visiteur, telle que VERCEL la pose — jamais le x-forwarded-for du
  navigateur, qui s'écrit à volonté : une IP choisie par l'appelant ferait de
  la limite de débit une décoration. Relecture de la session OS du 30/10.
*/
export const ipDe = (request) =>
  request.headers.get('x-vercel-forwarded-for') ||
  request.headers.get('x-real-ip') || ''

/* Empreinte d'un email, pour les journaux : jamais l'adresse en clair. */
export const empreinte = (email) =>
  createHash('sha256').update(String(email || '').toLowerCase()).digest('hex').slice(0, 12)
