import { ogImages } from '../../../lib/og'
import { articles } from '../../../lib/journalData'

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

/* Titres et descriptions raccourcis (titre <= 60 car., description <= 155 car.)
   pour les articles dont le texte de lib/journalData.js dépasse la taille d'un
   résultat Google. N'est appliqué que si le texte d'origine est trop long : un
   metaTitle ou un extrait déjà court prime. Le H1 de la page reste le titre complet. */
const TITRES_COURTS = {
  'recette-cake-marbre-maison': 'Recette du cake marbré maison et nos cakes à partager',
  'recette-granola-maison': 'Granola maison croustillant : la recette et notre bar',
  'comparatif-traiteur-entreprise-paris': "Quel traiteur d'entreprise à Paris ? Le comparatif 2026",
  'plateau-repas-entreprise-commander': "Plateau repas d'entreprise : conseils pour bien commander",
  'petit-dejeuner-journee-presse-entreprise': 'Petit-déjeuner journée presse : le format qui marque',
  'dejeuner-entreprise-guide-complet': "Déjeuner d'entreprise : formats, budget et menus",
  'budget-cocktail-entreprise-paris': "Budget cocktail d'entreprise à Paris : combien ça coûte",
  'cocktail-inauguration-entreprise': "Cocktail d'inauguration d'entreprise : organisation, budget",
}

const DESCRIPTIONS_COURTES = {
  'cocktail-entreprise-halal-paris': "Un cocktail d'entreprise halal à Paris coûte de 29,90 à 51,90 € HT par personne. Formules, budget de 20 à 100 personnes, points à vérifier.",
  'evenement-entreprise-halal-guide': "Séminaire ou événement d'entreprise halal à Paris : formats, prix de départ et questions à poser au traiteur pour bien l'organiser.",
  'galette-des-rois-entreprise-paris': "La galette des rois d'entreprise, premier moment de cohésion de l'année : comment l'organiser, combien en commander, quel traiteur à Paris.",
  'gouter-noel-entreprise-paris': "Le goûter de Noël d'entreprise : produits, quantités, budget. Le guide complet pour organiser le vôtre à Paris.",
  'gouter-entreprise-bureau': 'Cookies, viennoiseries, jus, brochettes de fruits : idées de goûter en entreprise et guide pratique pour vos équipes.',
  'idees-pauses-gourmandes-bureau': "Le distributeur automatique n'a jamais soudé une équipe. Cinq idées de pauses gourmandes pour faire de 16h un rituel attendu.",
  'petit-dejeuner-entreprise-paris': "Petit-déjeuner d'entreprise à Paris dès 8 € HT par personne en formule classique, de 12 à 16 € HT en complet. Budget, composition, quantités.",
  'cocktail-entreprise-50-personnes': "Cocktail d'entreprise pour 50 personnes : 400 à 800 pièces, de 1 495 à 2 595 € HT selon le format. Menu, boissons et budget détaillé.",
  'idees-pieces-cocktail-entreprise': "16 idées de pièces cocktail salées et sucrées, menus de 8, 12 ou 16 pièces et 5 animations pour marquer votre événement d'entreprise.",
  'cocktail-entreprise-sans-alcool': "Que servir à un cocktail d'entreprise sans alcool ? Pétillant 0 %, jus, mocktails : boissons, quantités et budget de 20 à 100 personnes.",
  'petit-dejeuner-halal-entreprise-paris': "Petit-déjeuner d'entreprise halal dès 8 € HT par personne. Quantités et budget pour 10 à 50 personnes, options sans gluten et vegan.",
  'cocktail-dinatoire-entreprise-paris': "Le cocktail dînatoire d'entreprise remplace le dîner : 16 à 18 pièces par personne, de 40,90 à 51,90 € HT. Menu type et budget de 20 à 100 personnes.",
  'cocktail-entreprise-100-personnes': "Cocktail d'entreprise pour 100 personnes : 1 200 à 1 600 pièces et 4 points de buffet. Quantités, organisation et budget ligne par ligne.",
  'cocktail-inauguration-entreprise': "Inauguration de bureaux, lancement, emménagement : quel format de cocktail, comment dérouler la soirée, quel budget pour 40, 80 ou 150 invités.",
  // « Mado » ne figure ni dans un titre ni dans une meta.
  'meilleures-madeleines-paris': "Notre sélection des meilleures madeleines de Paris, de Gilles Marchal au Ritz, et celle que nous servons chez L'Écrin.",
}

export async function generateMetadata({ params }) {
  const article = articles.find(a => a.slug === params.slug)
  if (!article) return {}
  // metaTitle : titre court (<= 60 car.) pour le SERP, le titre long restant
  // affiché en H1 sur la page. Sans override, on garde le titre de l'article.
  const titreBrut = article.metaTitle || article.titre
  const titre = titreBrut.length > 60 && TITRES_COURTS[params.slug] ? TITRES_COURTS[params.slug] : titreBrut
  const description = (article.extrait.length > 155 || /\bmado\b/i.test(article.extrait)) && DESCRIPTIONS_COURTES[params.slug]
    ? DESCRIPTIONS_COURTES[params.slug]
    : article.extrait
  return {
    title: titre,
    description,
    alternates: { canonical: `/journal/${params.slug}` },
    openGraph: {
      images: ogImages(article.img),
      title: `${article.titre} | L'Écrin Traiteur`,
      description,
    },
  }
}

export default function Layout({ children }) {
  return children
}
