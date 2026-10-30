/*
  Ce que le navigateur retient du client, pour ne pas lui faire retaper deux
  fois les mêmes informations (30/10/2026).

  Demandé par Ramy : quelqu'un qui a déjà demandé un devis sur le site ne
  devrait pas ressaisir sa société, son email et son adresse pour commander.

  CE QUE ÇA COUVRE, ET CE QUE ÇA NE COUVRE PAS. Tout se passe dans le
  navigateur du client : ses propres réponses, gardées sur son appareil, pour
  lui. Rien ne part sur un serveur, rien n'est partagé. Donc :
  - même navigateur, même appareil : le tunnel se pré-remplit tout seul ;
  - autre appareil, ou reconnaissance par l'email : cela demanderait de lire
    la base de l'OS, ce qui reste une décision ouverte (voir la section 9 du
    cahier des charges).

  À SIGNALER À RAMY : conserver ces champs est un confort, pas une nécessité
  technique du service. Le bandeau cookies du site devrait donc le mentionner
  dans les usages fonctionnels. Le panier, lui, est indispensable au service
  et n'appelle pas de consentement.
*/

const CLE = 'lecrin-client-v1'

/* Les seuls champs retenus : de quoi remplir un formulaire, rien de plus. */
const CHAMPS = ['societe', 'contactNom', 'contactTel', 'email', 'adresse', 'cp', 'ville']

const dispo = () => typeof window !== 'undefined'

export function lireSouvenir() {
  if (!dispo()) return {}
  try {
    const o = JSON.parse(window.localStorage.getItem(CLE) || 'null')
    if (!o || typeof o !== 'object') return {}
    return Object.fromEntries(CHAMPS.filter(c => o[c]).map(c => [c, String(o[c])]))
  } catch {
    return {}
  }
}

/* N'enregistre que ce qui est renseigné ; ne vide jamais ce qui existe. */
export function retenirClient(champs = {}) {
  if (!dispo()) return
  const avant = lireSouvenir()
  const apres = { ...avant }
  for (const c of CHAMPS) {
    const v = String(champs[c] ?? '').trim()
    if (v) apres[c] = v
  }
  try { window.localStorage.setItem(CLE, JSON.stringify(apres)) } catch {}
}

/*
  Depuis un formulaire de devis, dont les champs ne portent pas les mêmes noms
  que ceux du tunnel. C'est le pont entre « j'ai demandé un prix » et « je
  commande » : le client ne retape rien.
*/
export function retenirDepuisDevis(form = {}) {
  retenirClient({
    societe: form.societe,
    contactNom: form.nom,
    contactTel: form.telephone,
    email: form.email,
    ville: form.ville,
  })
}

export function oublierClient() {
  if (dispo()) { try { window.localStorage.removeItem(CLE) } catch {} }
}

/*
  Complète un brouillon avec ce qu'on sait déjà, SANS jamais écraser ce que le
  client vient de saisir : le souvenir ne sert qu'à remplir les trous.
*/
export function completer(brouillon = {}) {
  const su = lireSouvenir()
  const out = { ...brouillon }
  let touche = false
  for (const [c, v] of Object.entries(su)) {
    if (!String(out[c] ?? '').trim()) { out[c] = v; touche = true }
  }
  return { brouillon: out, complete: touche }
}
