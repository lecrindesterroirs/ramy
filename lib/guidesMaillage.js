// Maillage interne : quels guides du journal afficher sur quelles pages, et quels
// articles se recommandent entre eux. Source unique, utilisée par
// components/GuidesPratiques.js (pages offre, villes, occasions, halal) et par la
// page article du journal (« À lire aussi »).

const G = {
  'cocktail-dinatoire-pas-cher-entreprise-budget': { titre: 'Cocktail dînatoire pas cher : combien ça coûte et où économiser', meta: 'Budget' },
  'idees-petit-dejeuner-bureau-par-budget': { titre: 'Idées de petit-déjeuner au bureau : 15 idées par budget et par effectif', meta: 'Idées et budget' },
  'idees-dejeuner-bureau-formats-budget': { titre: 'Idées de déjeuner au bureau : 10 formats et leur budget par personne', meta: 'Idées et budget' },
  'idees-afterwork-entreprise-formats-budget': { titre: "Idées d'afterwork en entreprise : 12 formats et budget par personne", meta: 'Idées et budget' },
  'buffet-froid-entreprise-quantites-par-personne': { titre: "Buffet froid d'entreprise : quantités par personne", meta: 'Quantités' },
  'combien-desserts-par-personne-buffet-cocktail-gouter': { titre: 'Combien de desserts par personne : mignardises, verrines, gâteaux ?', meta: 'Quantités' },
  'organiser-seminaire-entreprise-programme-journee-restauration': { titre: "Organiser un séminaire : le programme d'une journée avec la restauration", meta: 'Organisation' },
  'organiser-inauguration-entreprise-deroule-budget-traiteur': { titre: "Organiser une inauguration d'entreprise : déroulé, budget et invités", meta: 'Organisation' },
  'pot-de-depart-retraite-buffet-budget-cagnotte': { titre: 'Pot de départ à la retraite : buffet, budget et part de cagnotte', meta: 'Organisation' },
  'modeles-invitation-pot-petit-dejeuner-afterwork-entreprise': { titre: "Modèles d'invitation pour un pot, un petit-déjeuner ou un afterwork", meta: 'Modèles à copier' },
  'cadeaux-gourmands-clients-salaries-idees-par-budget': { titre: 'Cadeaux gourmands pour clients et salariés : 12 idées par budget', meta: 'Idées et budget' },
  'gouter-entreprise-bureau': { titre: 'Goûter d’entreprise : idées, produits et budget pour la pause de 16h', meta: 'Idées et budget' },
}

const T = {
  cocktail: 'cocktail-dinatoire-pas-cher-entreprise-budget',
  pdj: 'idees-petit-dejeuner-bureau-par-budget',
  dej: 'idees-dejeuner-bureau-formats-budget',
  after: 'idees-afterwork-entreprise-formats-budget',
  froid: 'buffet-froid-entreprise-quantites-par-personne',
  desserts: 'combien-desserts-par-personne-buffet-cocktail-gouter',
  seminaire: 'organiser-seminaire-entreprise-programme-journee-restauration',
  inaug: 'organiser-inauguration-entreprise-deroule-budget-traiteur',
  retraite: 'pot-de-depart-retraite-buffet-budget-cagnotte',
  invit: 'modeles-invitation-pot-petit-dejeuner-afterwork-entreprise',
  cadeaux: 'cadeaux-gourmands-clients-salaries-idees-par-budget',
  gouter: 'gouter-entreprise-bureau',
}

// Règles par chemin : la première qui correspond gagne (chemin exact ou préfixe).
const REGLES = [
  ['/occasions/afterwork-entreprise', [T.after, T.invit, T.cocktail, T.retraite]],
  ['/occasions/cocktail-entreprise', [T.cocktail, T.inaug, T.desserts, T.froid]],
  ['/occasions/seminaire-entreprise', [T.seminaire, T.dej, T.pdj, T.froid]],
  ['/occasions/journee-formation', [T.seminaire, T.dej, T.pdj, T.froid]],
  ['/occasions/team-building', [T.seminaire, T.after, T.dej, T.cocktail]],
  ['/occasions/petit-dejeuner-codir', [T.pdj, T.invit, T.seminaire, T.gouter]],
  ['/occasions/petit-dejeuner-entreprise', [T.pdj, T.invit, T.seminaire, T.gouter]],
  ['/occasions/gouter-entreprise', [T.desserts, T.gouter, T.invit, T.after]],
  ['/occasions/dejeuner-entreprise', [T.dej, T.froid, T.cocktail, T.desserts]],
  ['/occasions/accueil-client', [T.inaug, T.cadeaux, T.cocktail, T.pdj]],
  ['/petit-dejeuner-entreprise', [T.pdj, T.invit, T.seminaire, T.gouter]],
  ['/plateaux-repas-entreprise', [T.dej, T.froid, T.seminaire, T.cocktail]],
  ['/traiteur-halal', [T.froid, T.cocktail, T.dej, T.retraite]],
  ['/traiteur-eco-responsable', [T.dej, T.froid, T.seminaire, T.pdj]],
  ['/creations/cocktails', [T.cocktail, T.inaug, T.retraite, T.desserts]],
  ['/creations/pauses-gourmandes', [T.desserts, T.gouter, T.pdj, T.invit]],
  ['/creations/petits-dejeuners-et-pauses', [T.pdj, T.invit, T.desserts, T.seminaire]],
  ['/creations/plateaux-repas', [T.dej, T.froid, T.seminaire, T.desserts]],
  ['/creations/lunch-box', [T.dej, T.froid, T.seminaire, T.desserts]],
  ['/creations/a-partager', [T.froid, T.cocktail, T.after, T.desserts]],
  ['/creations/plateaux-aperitifs', [T.froid, T.cocktail, T.after, T.desserts]],
  ['/creations/coffrets-cadeaux', [T.cadeaux, T.gouter, T.pdj, T.desserts]],
  ['/creations/animations-culinaires', [T.inaug, T.after, T.seminaire, T.cocktail]],
]

// Pages villes : 4 guides sur 8, décalés d'une ville à l'autre (évite 45 blocs identiques).
const VILLE_POOL = [T.cocktail, T.pdj, T.dej, T.seminaire, T.froid, T.after, T.inaug, T.desserts]
const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7)

export function guidesPour(pathname) {
  const p = (pathname || '').replace(/\/+$/, '') || '/'
  let slugs = null
  const regle = REGLES.find(([prefixe]) => p === prefixe || p.startsWith(prefixe + '/'))
  if (regle) slugs = regle[1]
  else if (p === '/traiteur' || p.startsWith('/traiteur/')) {
    const d = hash(p) % VILLE_POOL.length
    slugs = [0, 1, 2, 3].map(i => VILLE_POOL[(d + i) % VILLE_POOL.length])
  }
  if (!slugs) return []
  return slugs.map(s => ({ href: `/journal/${s}`, title: G[s].titre, meta: G[s].meta }))
}

// Grappes thématiques du journal : deux articles d'une même grappe se recommandent.
const GRAPPES = [
  // cocktails, réceptions, pots
  [T.cocktail, T.inaug, T.retraite, T.desserts, T.after, T.invit, T.froid,
    'cocktail-inauguration-entreprise', 'organiser-pot-de-depart-entreprise-budget-quantites',
    'traiteur-afterwork-pot-depart-entreprise-paris', 'budget-cocktail-entreprise-paris',
    'cocktail-dinatoire-entreprise-paris', 'combien-pieces-cocktail-par-personne-entreprise',
    'idees-pieces-cocktail-entreprise', 'buffet-a-partager-ou-cocktail-entreprise-paris'],
  // petit-déjeuner et pauses
  [T.pdj, T.invit, T.gouter, T.desserts,
    'petit-dejeuner-entreprise-paris', 'petit-dejeuner-entreprise-conseils',
    'budget-petit-dejeuner-equipe-personnes', 'boissons-petit-dejeuner-entreprise',
    'combien-viennoiseries-par-personne', 'petit-dejeuner-sain-bureau'],
  // déjeuner, buffets, séminaires
  [T.dej, T.froid, T.seminaire, T.desserts,
    'dejeuner-entreprise-guide-complet', 'buffet-entreprise-guide-complet-paris',
    'combien-plateaux-repas-commander-reunion-entreprise', 'plateau-repas-entreprise-commander',
    'budget-seminaire-entreprise-par-personne-paris', 'traiteur-seminaire-entreprise-paris',
    'combien-boissons-par-personne-reunion-seminaire-cocktail', 'budget-traiteur-entreprise-paris'],
  // paires évidentes : un guide neuf et l'article ancien du même sujet
  [T.inaug, 'cocktail-inauguration-entreprise'],
  [T.retraite, 'organiser-pot-de-depart-entreprise-budget-quantites'],
  [T.cocktail, 'budget-cocktail-entreprise-paris', 'cocktail-dinatoire-entreprise-paris'],
  [T.pdj, 'petit-dejeuner-entreprise-paris', 'budget-petit-dejeuner-equipe-personnes'],
  [T.seminaire, 'budget-seminaire-entreprise-par-personne-paris', 'traiteur-seminaire-entreprise-paris'],
  [T.gouter, T.desserts, 'gouter-anniversaire-entreprise-paris'],
  // cadeaux et fin d'année
  [T.cadeaux, 'cadeaux-gourmands-entreprise-fin-annee-paris', 'budget-fin-annee-entreprise-comment-utiliser'],
]

// Nombre de grappes partagées entre deux articles (sert à classer les « À lire aussi »).
export function grappesCommunes(a, b) {
  return GRAPPES.reduce((n, g) => n + (g.includes(a) && g.includes(b) ? 1 : 0), 0)
}

// Les guides « vitrine » (liste G) passent devant les articles de même poids.
export const estGuide = (slug) => Object.prototype.hasOwnProperty.call(G, slug)
