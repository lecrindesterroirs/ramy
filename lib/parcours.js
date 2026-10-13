/*
  Parcours de la carte : mémorise, le temps de la visite (sessionStorage), les
  fiches produit que le visiteur a regardées. Le formulaire de devis s'en sert
  pour proposer ces produits en un clic, au lieu de laisser le visiteur faire
  des allers-retours entre la carte et un formulaire vide.
  Rien ne part au serveur tant que le visiteur n'a pas envoyé sa demande.
*/
const CLE = 'lecrin-parcours'
const MAX = 8

// Catégorie de la carte → occasion du formulaire de devis (app/devis/page.js).
const OCCASION = {
  'petits-dejeuners-et-pauses': 'petit-dejeuner',
  'boissons': 'petit-dejeuner',
  'plateaux-repas': 'plateaux-repas',
  'lunch-box': 'plateaux-repas',
  'cocktails': 'cocktail-buffet',
  'plateaux-aperitifs': 'cocktail-buffet',
  'a-partager': 'cocktail-buffet',
  'pauses-gourmandes': 'gouter',
  'animations-culinaires': 'evenement-sur-mesure',
  'receptions-sur-mesure': 'evenement-sur-mesure',
}

// '/creations/<categorie>/<fiche>' → { categorie, fiche } (fiche absente sur une page catégorie).
export function lireChemin(chemin) {
  const m = (chemin || '').match(/^\/creations\/([^/]+)(?:\/([^/]+))?\/?$/)
  return m ? { categorie: m[1], fiche: m[2] || null } : null
}

export function occasionPour(categorie) {
  return OCCASION[categorie] || ''
}

export function lireParcours() {
  try {
    const liste = JSON.parse(window.sessionStorage.getItem(CLE) || '[]')
    return Array.isArray(liste) ? liste : []
  } catch (e) {
    return []
  }
}

// Ajoute une fiche en tête de liste (la plus récente d'abord), sans doublon.
export function noterFiche(chemin, nom) {
  const lu = lireChemin(chemin)
  if (!lu?.fiche || !nom) return
  try {
    const reste = lireParcours().filter(f => f.chemin !== chemin)
    const liste = [{ chemin, categorie: lu.categorie, nom }, ...reste].slice(0, MAX)
    window.sessionStorage.setItem(CLE, JSON.stringify(liste))
  } catch (e) { /* mode privé : pas de mémoire, le formulaire reste vide */ }
}
