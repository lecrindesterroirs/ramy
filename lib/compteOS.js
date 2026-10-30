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

async function appel(chemin, { methode = 'POST', corps, jeton } = {}) {
  const entetes = { 'x-api-key': cle(), 'content-type': 'application/json' }
  if (jeton) entetes.authorization = `Bearer ${jeton}`
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

export async function inscrire(champs) {
  if (!osPret()) return bouchonInscrire(champs)
  const r = await appel('/compte/inscrire', { corps: champs })
  return r.donnees || { ok: r.ok }
}

export async function connecter({ email, motDePasse }) {
  if (!osPret()) return bouchonConnexion({ email, motDePasse })
  const r = await appel('/compte/connexion', { corps: { email, motDePasse } })
  return r.ok ? r.donnees : { ok: false }
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
  return r.ok ? r.donnees : null
}

export async function demanderReinitialisation(email) {
  if (!osPret()) {
    if (faux.comptes.has(email)) faux.reinit.set(jetonNeuf(), email)
    return { ok: true }   // toujours, même pour une adresse inconnue
  }
  await appel('/compte/oubli', { corps: { email } })
  return { ok: true }
}

export async function reinitialiser({ jeton, motDePasse }) {
  if (!osPret()) {
    const email = faux.reinit.get(jeton)
    if (!email) return { ok: false }
    faux.reinit.delete(jeton)
    const sel = randomBytes(16).toString('hex')
    const c = faux.comptes.get(email)
    c.sel = sel; c.hash = hacher(motDePasse, sel)
    return { ok: true }
  }
  const r = await appel('/compte/reinitialiser', { corps: { jeton, motDePasse } })
  return r.donnees || { ok: r.ok }
}

/* Empreinte d'un email, pour les journaux : jamais l'adresse en clair. */
export const empreinte = (email) =>
  createHash('sha256').update(String(email || '').toLowerCase()).digest('hex').slice(0, 12)
