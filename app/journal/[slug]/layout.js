import { alternatesPour } from '../../../lib/i18n'
import { enSlugs } from '../../../lib/en/journal'
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
  'petit-dejeuner-entreprise-paris': "Petit-déjeuner d'entreprise à Paris dès 6,50 € HT par personne (viennoiseries et café), 8 € HT en formule classique. Budget, composition, quantités.",
  'cocktail-entreprise-50-personnes': "Cocktail d'entreprise pour 50 personnes : 400 à 800 pièces, de 1 495 à 2 595 € HT selon le format. Menu, boissons et budget détaillé.",
  'idees-pieces-cocktail-entreprise': "16 idées de pièces cocktail salées et sucrées, menus de 8, 12 ou 16 pièces et 5 animations pour marquer votre événement d'entreprise.",
  'cocktail-entreprise-sans-alcool': "Que servir à un cocktail d'entreprise sans alcool ? Pétillant 0 %, jus, mocktails : boissons, quantités et budget de 20 à 100 personnes.",
  'petit-dejeuner-halal-entreprise-paris': "Petit-déjeuner d'entreprise halal dès 8 € HT par personne. Quantités et budget pour 10 à 50 personnes, options sans gluten et vegan.",
  'cocktail-dinatoire-entreprise-paris': "Le cocktail dînatoire d'entreprise remplace le dîner : 16 à 18 pièces par personne, de 40,90 à 51,90 € HT. Menu type et budget de 20 à 100 personnes.",
  'cocktail-entreprise-100-personnes': "Cocktail d'entreprise pour 100 personnes : 1 200 à 1 600 pièces et 4 points de buffet. Quantités, organisation et budget ligne par ligne.",
  'cocktail-inauguration-entreprise': "Inauguration de bureaux, lancement, emménagement : quel format de cocktail, comment dérouler la soirée, quel budget pour 40, 80 ou 150 invités.",
  // « Mado » ne figure ni dans un titre ni dans une meta.
  'meilleures-madeleines-paris': "Notre sélection des meilleures madeleines de Paris, de Gilles Marchal au Ritz, et celle que nous servons chez L'Écrin.",
  // 28/10/2026 : descriptions des articles les plus vus ramenées sous 155 caractères (elles étaient coupées dans Google)
  'animation-culinaire-entreprise-paris': "10 idées d'animations culinaires pour un événement d'entreprise : barista, crêpes minute, découpe de saumon, mini burgers, mocktails, et leur budget.",
  'meilleurs-plateaux-repas-entreprise-paris': "Ce qui fait un bon plateau repas d'entreprise à Paris : fraîcheur, chaîne du froid, allergènes, prix. Nos six plateaux et le budget pour 10 à 50 personnes.",
  'combien-prevoir-par-personne-traiteur-entreprise': "Quantités par personne et prix HT en un tableau : petit-déjeuner, plateaux repas, cocktail, buffet froid, desserts, boissons. De 8 à 51,90 € HT.",
  'meilleurs-fromagers-charcuterie-halal-aperitif-entreprise-paris': "Charcuterie de bœuf halal, fromages affinés : les fromagers MOF de Paris, bien choisir sa charcuterie, et le budget d'un apéritif de 10 à 50 personnes.",
  'devis-traiteur-ce-qui-est-inclus': "Livraison, vaisselle, nappes, service, reprise : ce qui est compris ou facturé à part dans un devis de traiteur, et les lignes à vérifier avant de signer.",
  'location-materiel-reception-entreprise-quantites-prix': "Mange-debout, tables, nappes, vaisselle, verres : combien en louer pour 50 ou 100 invités, les prix en Île-de-France et ce qu'il faut vérifier au devis.",
  'meilleurs-plateaux-repas-vegetariens-vegan-entreprise-paris': "La Solaire, La Provençale, La Potagère : nos trois plateaux végétariens, ce qui change pour un convive vegan, combien en prévoir et le budget de 10 à 50.",
  'mini-burgers-afterwork-cocktail-entreprise-paris': "Mini burgers en afterwork ou en cocktail d'entreprise : ce qui fait un bon mini burger, combien en prévoir par personne, et le budget de 10 à 50 personnes.",
  'combien-temps-avance-commander-traiteur': "La veille pour un petit-déjeuner ou des plateaux, 48 heures dès 50 personnes, davantage avec service et matériel : les délais de commande d'un traiteur.",
  'plateau-repas-halal-paris-reunion-entreprise': "Halal, sans porc, sans alcool, sans supplément : ce qu'il faut demander à un traiteur avant de commander des plateaux repas halal, et le budget de 10 à 50.",
  'alcool-pot-entreprise-code-du-travail': "Vin, bière, champagne : ce que le Code du travail autorise au travail, la responsabilité de l'employeur, les conseils de l'INRS, et un pot sans alcool.",
  'meilleur-buffet-mediterraneen-mezze-entreprise-paris': "Les adresses de mezze reconnues à Paris, notre buffet Le Méditerranéen à 37,50 € HT par personne, et le budget pour 10, 20 ou 50 personnes.",
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
    // hreflang : déclaré seulement si le guide existe vraiment en anglais.
    // Un hreflang qui pointe vers une 404 est pire que pas de hreflang.
    alternates: alternatesPour(`/journal/${params.slug}`, { en: enSlugs().includes(params.slug) }),
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
