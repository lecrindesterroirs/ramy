/*
  Panier de commande (29/10/2026). Volontairement minuscule : pas de contexte
  React, pas de provider à poser dans le layout. Le panier vit dans
  localStorage et prévient les composants par un évènement, donc un bouton
  « + » peut être posé sur n'importe quelle carte produit sans rien recâbler.

  Aucune donnée ne part au serveur tant que le client n'envoie pas sa commande.

  La clé porte un numéro de version : un panier de mai 2026 traîne peut-être
  encore dans le navigateur d'un visiteur, avec une autre forme de ligne.
*/

const CLE = 'lecrin-panier-v2'
const EVT = 'lecrin:panier'

const dispo = () => typeof window !== 'undefined'

/*
  Deux coffrets de madeleines aux parfums différents sont deux lignes. La clé
  d'une ligne est donc l'identifiant du produit ET ses options.
*/
export const cleLigne = (l) => `${l.id}|${JSON.stringify(l.options || null)}`

export function lirePanier() {
  if (!dispo()) return []
  try {
    const brut = window.localStorage.getItem(CLE)
    const lignes = brut ? JSON.parse(brut) : []
    if (!Array.isArray(lignes)) return []
    return lignes.filter(l => l && typeof l.id === 'string' && Number(l.qte) > 0)
  } catch {
    // Navigation privée, stockage bloqué, JSON abîmé : le panier repart vide
    // plutôt que de casser la page.
    return []
  }
}

function ecrire(lignes) {
  if (!dispo()) return lignes
  try {
    window.localStorage.setItem(CLE, JSON.stringify(lignes))
  } catch { /* stockage indisponible : le panier ne survit pas au rechargement */ }
  window.dispatchEvent(new CustomEvent(EVT, { detail: lignes }))
  return lignes
}

/* produit : { id, nom, prix, qte?, img?, famille?, qteTexte?, parfums?, options? } */
export function ajouterAuPanier(produit, qte = 1) {
  const lignes = lirePanier()
  const k = cleLigne(produit)
  const i = lignes.findIndex(l => cleLigne(l) === k)
  if (i >= 0) lignes[i] = { ...lignes[i], qte: lignes[i].qte + qte }
  else lignes.push({ ...produit, qte })
  return ecrire(lignes)
}

export function changerQuantite(cle, qte) {
  return ecrire(
    lirePanier()
      .map(l => (cleLigne(l) === cle ? { ...l, qte } : l))
      .filter(l => l.qte > 0)
  )
}

export function retirerDuPanier(cle) {
  return changerQuantite(cle, 0)
}

/* Les parfums d'un coffret Mado : [{ id, qte }]. */
export function changerOptions(cle, options) {
  const lignes = lirePanier()
  const i = lignes.findIndex(l => cleLigne(l) === cle)
  if (i < 0) return lignes
  lignes[i] = { ...lignes[i], options }
  return ecrire(lignes)
}

export function viderPanier() {
  return ecrire([])
}

export function quantiteDe(id, lignes = lirePanier()) {
  return lignes.filter(l => l.id === id).reduce((n, l) => n + l.qte, 0)
}

export function nombreArticles(lignes = lirePanier()) {
  return lignes.reduce((n, l) => n + Number(l.qte || 0), 0)
}

export function totalLignes(lignes = lirePanier()) {
  return lignes.reduce((t, l) => t + (Number(l.prix) || 0) * Number(l.qte || 0), 0)
}

/* S'abonner aux changements : renvoie la fonction de désabonnement. */
export function surChangement(fn) {
  if (!dispo()) return () => {}
  const h = (e) => fn(Array.isArray(e.detail) ? e.detail : lirePanier())
  window.addEventListener(EVT, h)
  const s = () => fn(lirePanier())   // panier modifié dans un autre onglet
  window.addEventListener('storage', s)
  return () => { window.removeEventListener(EVT, h); window.removeEventListener('storage', s) }
}
