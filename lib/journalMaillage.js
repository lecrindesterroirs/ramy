// Maillage interne du journal : 6 liens « À lire aussi » par article (28/10/2026).
//
// Pourquoi : les 3 liens historiques (grappes de lib/guidesMaillage.js + même catégorie) retombent toujours sur
// les mêmes guides vitrine ; 121 articles sur 197 recevaient moins de 5 liens entrants (mesure du 28/10/2026).
// Ici : 3 liens historiques inchangés, puis 3 liens vers des articles proches par le sujet (mots rares du titre
// et de l'adresse, pondérés par leur rareté), attribués d'abord aux articles les moins liés : chacun reçoit des
// liens de ses voisins les plus proches jusqu'à 5 liens entrants, puis les places restantes vont aux plus proches.
// Aucun lien sans mot commun significatif : mieux vaut un lien de moins qu'un lien hors sujet.
// Le plan est calculé une fois pour tout le journal (même résultat à chaque rendu).

import { grappesCommunes, estGuide } from './guidesMaillage'

const normaliser = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

// Mots trop fréquents ou sans sujet : ignorés même s'ils sont longs.
const VIDES = new Set([
  'entreprise', 'entreprises', 'paris', 'traiteur', 'bureau', 'bureaux', 'france', 'guide', 'comment', 'combien',
  'quel', 'quels', 'quelle', 'quelles', 'pour', 'avec', 'dans', 'sans', 'plus', 'tout', 'tous', 'votre', 'vos',
  'cette', 'sont', 'leur', 'leurs', 'faire', 'avant', 'apres', 'idees', 'quoi', 'prix',
])

const mots = (a) => new Set(
  normaliser(`${a.slug.replace(/-/g, ' ')} ${a.titre || ''}`)
    .split(/[^a-z0-9]+/)
    .filter((m) => m.length >= 4 && !VIDES.has(m) && !/^\d+$/.test(m)),
)

const tirage = (a, b) => {
  let h = 5381
  const s = `${a}|${b}`
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0
  return h / 4294967296
}

const liensDuTexte = (a) => new Set([...(a.contenu || '').matchAll(/href="\/journal\/([a-z0-9-]+)"/g)].map((x) => x[1]))

// Les 3 liens historiques : grappes thématiques d'abord, puis même catégorie, guides vitrine en tête à poids égal.
export function liensHistoriques(article, articles) {
  const score = (a) => grappesCommunes(article.slug, a.slug) * 2 + (a.categorie === article.categorie ? 1 : 0) + (estGuide(a.slug) ? 1.5 : 0)
  return [...articles]
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => score(b) - score(a))
    .slice(0, 3)
}

const OBJECTIF = 5 // liens entrants visés pour chaque article
const SEUIL_CIBLE = 2.2 // proximité minimale pour un lien attribué à un article peu lié
const SEUIL_RESTE = 2 // proximité minimale pour les places restantes

// Liens écrits à la main (28/10/2026) : pour chaque article resté sous 5 liens entrants, les articles du même sujet
// qui doivent le citer. Appliqués avant le calcul automatique ; une source en porte au plus 3 (les 3 places « proches »).
const LIENS_MANUELS = {
  'snacks-collations-bureau-quoi-livrer-budget': ['gouter-entreprise-bureau', 'idees-pauses-gourmandes-bureau', 'traiteur-pause-gourmande-gouter-entreprise-paris', 'livraison-fruits-bureau-entreprise'],
  'traiteur-agence-evenementielle-paris': ['maitre-d-hotel-buffet-entreprise-combien-prix', 'animation-culinaire-entreprise-paris', 'traiteur-lancement-produit-soiree-clients-paris', 'combien-maitres-hotel-evenement-entreprise'],
  'traiteur-ouvert-juillet-aout-paris': ['combien-temps-avance-commander-traiteur', 'traiteur-afterwork-pot-depart-entreprise-paris', 'petit-dejeuner-hebdomadaire-bureau-budget-annuel-retour-au-bureau', 'conseils-reserver-traiteur-entreprise'],
  'traiteur-rse-paris': ['vaisselle-jetable-reutilisable-traiteur-loi', 'alimentation-fidelisation-talents-entreprise', 'meilleur-traiteur-entreprise-paris-criteres', 'bien-etre-bureau-alimentation'],
  'alimentation-fidelisation-talents-entreprise': ['bien-etre-bureau-alimentation', 'bien-manger-bureau-concentration-engagement', 'petit-dejeuner-productivite-science', 'traiteur-rse-paris'],
  'bien-manger-bureau-concentration-engagement': ['petit-dejeuner-sain-bureau', 'petit-dejeuner-productivite-science', 'alimentation-fidelisation-talents-entreprise', 'bien-etre-bureau-alimentation'],
  'devis-traiteur-ce-qui-est-inclus': ['questions-poser-traiteur-avant-signer-devis', 'conseils-reserver-traiteur-entreprise', 'meilleur-traiteur-entreprise-paris-criteres', 'location-materiel-reception-entreprise-quantites-prix'],
  'quel-traiteur-inauguration-bureaux-paris': ['cocktail-inauguration-entreprise', 'organiser-inauguration-entreprise-deroule-budget-traiteur', 'traiteur-immobilier-btp-paris'],
  'traiteur-immobilier-btp-paris': ['cocktail-inauguration-entreprise', 'traiteur-lancement-produit-soiree-clients-paris', 'organiser-inauguration-entreprise-deroule-budget-traiteur'],
  'traiteur-sante-laboratoire-medtech-paris': ['restauration-journee-formation-entreprise-budget-25-personnes', 'traiteur-cabinet-conseil-paris', 'traiteur-banque-assurance-finance-paris', 'restauration-stand-salon-professionnel-lunch-box-plateaux'],
  'bonbonniere-octobre-rose-entreprise': ['octobre-rose-entreprise-paris', 'gouter-octobre-rose-entreprise-paris', 'seminaire-octobre-rose-entreprise-paris'],
  'dejeuner-equipe-20-personnes-livre-bureau-paris': ['idees-dejeuner-bureau-formats-budget', 'plateau-repas-entreprise-commander', 'combien-plateaux-repas-commander-reunion-entreprise', 'dejeuner-entreprise-guide-complet'],
  'jus-alain-milliat-entreprise-paris': ['boissons-petit-dejeuner-entreprise', 'meilleurs-yaourts-petit-dejeuner-entreprise-paris', 'de-quoi-se-compose-petit-dejeuner-entreprise', 'combien-boissons-par-personne-reunion-seminaire-cocktail'],
  'recette-cookies-pepites-chocolat': ['meilleurs-cookies-paris-entreprise', 'recette-macarons-maison', 'recette-cake-marbre-maison'],
  'alcool-pot-entreprise-code-du-travail': ['cocktail-sans-alcool-entreprise-fin-annee', 'cocktail-entreprise-sans-alcool', 'bar-mocktails-barman-evenement-entreprise', 'organiser-pot-de-depart-entreprise-budget-quantites'],
  'barometre-traiteur-entreprise-paris-2026': ['comparatif-traiteur-entreprise-paris', 'budget-traiteur-entreprise-paris', 'prix-plateau-repas-entreprise-paris-comparatif', 'questions-poser-traiteur-avant-signer-devis'],
  'buffet-halal-entreprise-paris-exemple-chiffre-30-personnes': ['traiteur-halal-entreprise-paris', 'evenement-entreprise-halal-guide', 'buffet-a-partager-ou-cocktail-entreprise-paris', 'menu-inclusif-entreprise-halal-vegetarien-sans-gluten'],
  'cadeaux-gourmands-clients-salaries-idees-par-budget': ['budget-fin-annee-entreprise-comment-utiliser', 'patisseries-personnalisees-logo-entreprise-paris', 'meilleurs-macarons-paris-evenement-entreprise', 'cadeaux-gourmands-entreprise-fin-annee-paris'],
  'commander-madeleines-reunion-entreprise-paris': ['meilleures-madeleines-paris', 'combien-desserts-par-personne-buffet-cocktail-gouter', 'petit-dejeuner-pour-30-personnes-quantites-budget', 'cafe-ou-the-entreprise-reunion-quelle-proportion'],
  'conseils-reserver-traiteur-entreprise': ['combien-temps-avance-commander-traiteur', 'questions-poser-traiteur-avant-signer-devis', 'devis-traiteur-ce-qui-est-inclus', 'plateau-repas-entreprise-commander'],
  'meilleur-panettone-paris-fetes-entreprise': ['menu-noel-livre-entreprise-paris', 'soiree-fin-annee-entreprise-paris', 'cadeaux-gourmands-entreprise-fin-annee-paris', 'petit-dejeuner-noel-bureau-entreprise'],
  'meilleures-madeleines-paris': ['commander-madeleines-reunion-entreprise-paris', 'cakes-maison-petit-dejeuner-gouter-entreprise', 'de-quoi-se-compose-petit-dejeuner-entreprise', 'meilleures-chouquettes-paris-reunion-entreprise'],
  'meilleurs-cookies-paris-entreprise': ['recette-cookies-pepites-chocolat', 'idees-pauses-gourmandes-bureau', 'meilleurs-macarons-paris-evenement-entreprise', 'meilleures-crepes-paris-entreprise'],
  'meilleurs-croissants-pains-au-chocolat-paris-entreprise': ['combien-viennoiseries-par-personne', 'pourquoi-mini-viennoiseries-petit-dejeuner-entreprise', 'petit-dejeuner-entreprise-paris', 'meilleur-traiteur-petit-dejeuner-paris-comment-choisir'],
  'quel-traiteur-cocktail-noel-entreprise-paris': ['cocktail-noel-entreprise-paris', 'budget-repas-noel-entreprise', 'soiree-fin-annee-entreprise-paris', 'menu-noel-livre-entreprise-paris'],
  'recette-cake-marbre-maison': ['cakes-maison-petit-dejeuner-gouter-entreprise', 'recette-macarons-maison', 'recette-granola-maison', 'gouter-entreprise-bureau'],
  'recette-granola-maison': ['petit-dejeuner-sain-bureau', 'recette-cake-marbre-maison', 'boissons-petit-dejeuner-entreprise', 'idees-petit-dejeuner-bureau-par-budget'],
  'recette-macarons-maison': ['combien-macarons-commander-entreprise', 'meilleurs-macarons-paris-evenement-entreprise', 'recette-cake-marbre-maison', 'recette-cookies-pepites-chocolat'],
  'traiteur-banque-assurance-finance-paris': ['traiteur-puteaux-la-defense-guide-complet', 'traiteur-gennevilliers-la-defense-ouest-guide-complet', 'quel-traiteur-petit-dejeuner-entreprise-la-defense', 'traiteur-cabinet-avocats-paris'],
  'traiteur-cabinet-conseil-paris': ['organiser-seminaire-entreprise-programme-journee-restauration', 'budget-seminaire-entreprise-par-personne-paris', 'traiteur-seminaire-entreprise-paris', 'traiteur-cabinet-avocats-paris'],
}

let plan = null
function calculer(articles) {
  const bySlug = new Map(articles.map((a) => [a.slug, a]))
  const m = new Map()
  const df = new Map()
  for (const a of articles) {
    const w = mots(a)
    m.set(a.slug, w)
    for (const x of w) df.set(x, (df.get(x) || 0) + 1)
  }
  const N = articles.length
  const idf = (x) => Math.log(N / (df.get(x) || 1))
  const sim = (a, b) => {
    let s = 0
    const mb = m.get(b)
    for (const x of m.get(a)) if (mb.has(x)) s += idf(x)
    return s
  }

  // Liens déjà présents : dans les textes et dans les 3 liens historiques.
  const deja = new Map() // source -> Set(cibles)
  const recu = new Map() // cible -> nombre de liens entrants
  const noter = (src, cible) => {
    if (!deja.has(src)) deja.set(src, new Set())
    if (deja.get(src).has(cible) || src === cible) return false
    deja.get(src).add(cible)
    recu.set(cible, (recu.get(cible) || 0) + 1)
    return true
  }
  for (const a of articles) {
    for (const c of liensDuTexte(a)) if (bySlug.has(c)) noter(a.slug, c)
    for (const h of liensHistoriques(a, articles)) noter(a.slug, h.slug)
  }

  const extra = new Map(articles.map((a) => [a.slug, []]))
  const place = (src) => extra.get(src).length < 3

  // 0. Liens écrits à la main.
  for (const [cible, sources] of Object.entries(LIENS_MANUELS)) {
    if (!bySlug.has(cible)) continue
    for (const src of sources) {
      if (!bySlug.has(src) || !place(src)) continue
      if (noter(src, cible)) extra.get(src).push(cible)
    }
  }

  // 1. Les articles peu liés reçoivent des liens de leurs voisins les plus proches.
  for (let tour = 0; tour < OBJECTIF; tour++) {
    const cibles = articles.map((a) => a.slug).filter((s) => (recu.get(s) || 0) < OBJECTIF).sort((x, y) => (recu.get(x) || 0) - (recu.get(y) || 0))
    let progres = false
    for (const cible of cibles) {
      if ((recu.get(cible) || 0) >= OBJECTIF) continue
      const source = articles
        .filter((a) => a.slug !== cible && place(a.slug) && !(deja.get(a.slug) || new Set()).has(cible))
        .map((a) => ({ a, s: sim(a.slug, cible) }))
        .filter((x) => x.s >= SEUIL_CIBLE)
        .sort((x, y) => (y.s + tirage(y.a.slug, cible) * 1.2) - (x.s + tirage(x.a.slug, cible) * 1.2))[0]
      if (!source) continue
      noter(source.a.slug, cible)
      extra.get(source.a.slug).push(cible)
      progres = true
    }
    if (!progres) break
  }

  // 2. Les places restantes : les articles les plus proches, en préférant ceux qui ont le moins de liens.
  for (const a of articles) {
    if (!place(a.slug)) continue
    const candidats = articles
      .filter((b) => b.slug !== a.slug && !deja.get(a.slug).has(b.slug))
      .map((b) => ({ b, s: sim(a.slug, b.slug) }))
      .filter((x) => x.s >= SEUIL_RESTE)
      .sort((x, y) => (y.s - (recu.get(y.b.slug) || 0) * 0.15 + tirage(a.slug, y.b.slug)) - (x.s - (recu.get(x.b.slug) || 0) * 0.15 + tirage(a.slug, x.b.slug)))
    for (const x of candidats) {
      if (!place(a.slug)) break
      noter(a.slug, x.b.slug)
      extra.get(a.slug).push(x.b.slug)
    }
  }
  return { n: N, extra, bySlug }
}

// Jusqu'à trois articles proches par le sujet à ajouter aux liens historiques de `article`.
export function articlesProches(article, articles) {
  if (!plan || plan.n !== articles.length) plan = calculer(articles)
  return (plan.extra.get(article.slug) || []).map((s) => plan.bySlug.get(s)).filter(Boolean)
}
