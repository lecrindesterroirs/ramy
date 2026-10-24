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

// Occasion pré-choisie dans le formulaire court (components/DevisRapide.js),
// d'après la page de la carte où se trouve le visiteur.
const PRESTATION_RAPIDE = {
  'petits-dejeuners-et-pauses': 'Petit-déjeuner',
  'boissons': 'Petit-déjeuner',
  'plateaux-repas': 'Plateaux repas',
  'lunch-box': 'Plateaux repas',
  'cocktails': 'Cocktail / Buffet',
  'plateaux-aperitifs': 'Cocktail / Buffet',
  'a-partager': 'Cocktail / Buffet',
  'pauses-gourmandes': 'Goûter',
  'personnalisation': 'Personnalisation',
  'coffrets-cadeaux': 'Personnalisation',
  'animations-culinaires': 'Événement sur mesure',
  'receptions-sur-mesure': 'Événement sur mesure',
}

export function prestationRapidePour(chemin) {
  return PRESTATION_RAPIDE[lireChemin(chemin)?.categorie] || ''
}

/*
  Occasion pré-choisie dans le formulaire court d'un article du journal,
  d'après son adresse et son titre (FR comme EN). Vide si rien ne ressort :
  le visiteur choisit lui-même. Ajouté le 24/10/2026 : les articles menaient
  à /devis par un simple lien (1 demande pour 284 sessions).
*/
export function prestationPourArticle(slug = '', titre = '') {
  const t = `${slug} ${titre}`.toLowerCase()
  const trouvees = [
    [/petit-?d[ée]j|breakfast|viennoiser/, 'Petit-déjeuner'],
    [/plateau|lunch|d[ée]jeuner/, 'Plateaux repas'],
    [/cocktail|ap[ée]ritif|d[îi]natoire|buffet|canap/, 'Cocktail / Buffet'],
    [/go[uû]ter|afternoon/, 'Goûter'],
    [/s[ée]minaire|offsite/, 'Séminaire'],
    [/animation|atelier|workshop/, 'Événement sur mesure'],
  ].filter(([re]) => re.test(t)).map(([, v]) => v)
  // Un titre qui couvre plusieurs prestations (« du petit-déjeuner au cocktail ») ne pré-choisit rien
  return trouvees.length === 1 ? trouvees[0] : ''
}
