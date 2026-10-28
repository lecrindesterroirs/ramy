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
  // 28/10/2026 : titres de 61 caractères ramenés à 60 ou moins
  'combien-viennoiseries-par-personne': "Mini-viennoiseries par personne : tableau de 10 à 100",
  'petit-dejeuner-recurrent-hebdomadaire-entreprise-prix': "Petit-déjeuner hebdomadaire au bureau : prix, mode d'emploi",
  'traiteur-sante-laboratoire-medtech-paris': "Traiteur laboratoire, santé, medtech Paris : staff, pauses",
}

// 28/10/2026 : « 2026 » dans le titre des guides de prix (les tarifs cités sont ceux d'octobre 2026). Le H1 ne change pas.
const TITRES_ANNEE = {
  'budget-traiteur-entreprise-paris': "Budget traiteur entreprise à Paris 2026 : prix par personne",
  'budget-cocktail-entreprise-paris': "Budget cocktail d'entreprise à Paris 2026 : combien ça coûte",
  'budget-repas-noel-entreprise': "Budget repas de Noël en entreprise 2026 : par personne",
  'budget-seminaire-entreprise-par-personne-paris': "Budget séminaire d'entreprise par personne à Paris 2026",
  'prix-plateau-repas-entreprise-paris-comparatif': "Prix plateau repas d'entreprise à Paris 2026 : 8 traiteurs",
  'cocktail-dinatoire-pas-cher-entreprise-budget': "Cocktail dînatoire pas cher 2026 : prix et économies",
  'petit-dejeuner-pour-20-personnes-quantites-budget': "Petit-déjeuner pour 20 personnes : quantités et budget 2026",
  'petit-dejeuner-pour-30-personnes-quantites-budget': "Petit-déjeuner pour 30 personnes : quantités et budget 2026",
  'petit-dejeuner-pour-50-personnes-quantites-budget': "Petit-déjeuner pour 50 personnes : quantités et budget 2026",
  'cocktail-dinatoire-pour-20-personnes-quantites-budget': "Cocktail dînatoire pour 20 personnes : pièces et budget 2026",
  'cocktail-dinatoire-pour-30-personnes-quantites-budget': "Cocktail dînatoire pour 30 personnes : pièces et budget 2026",
  'cocktail-dinatoire-50-personnes-quantites-budget': "Cocktail dînatoire pour 50 personnes : pièces et budget 2026",
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
  // 28/10/2026 (2) : descriptions de 53 articles ramenées sous 155 caractères
  'pot-de-depart-petit-dejeuner-entreprise-budget': "Un pot de départ de 10h à 11h : 189 € HT en Classique pour 20 personnes, livraison comprise, le complet sur devis. Quantités et variante sans café.",
  'combien-maitres-hotel-evenement-entreprise': "Cocktail, buffet ou repas assis : combien de maîtres d'hôtel prévoir selon le nombre d'invités, ce qu'ils font et combien coûte le service à Paris.",
  'composition-florale-evenement-entreprise-prix': "Combien de centres de table, quelle hauteur, quel budget pour un buffet, un cocktail ou un accueil : les repères chiffrés pour fleurir un événement.",
  'questions-poser-traiteur-avant-signer-devis': "Prix, quantités, livraison, régimes, allergènes, assurance, annulation : les questions à poser à un traiteur avant de signer, avec nos réponses.",
  'bar-mocktails-barman-evenement-entreprise': "Un bar à cocktails sans alcool pour un afterwork ou une soirée d'entreprise : combien de barmans selon les invités, le budget à Paris et que servir.",
  'traiteur-personnel-materiel-fleurs-un-seul-prestataire': "Un seul prestataire pour la nourriture, le service, la vaisselle et les fleurs, ou chacun séparément : avantages, limites et ce que propose L'Écrin.",
  'allergenes-traiteur-buffet-plateaux-obligations': "Les 14 allergènes à déclarer, comment informer pour un buffet ou des plateaux livrés, et ce que le traiteur doit fournir avant et à la livraison.",
  'vaisselle-jetable-reutilisable-traiteur-loi': "Plastique interdit, vaisselle réemployable dès 20 personnes servies sur place, cas des plateaux livrés : ce que dit la loi AGEC et quoi choisir.",
  'meilleurs-yaourts-petit-dejeuner-entreprise-paris': "Où trouver de bons yaourts à Paris pour un petit-déjeuner d'entreprise : comment les reconnaître, les crèmeries sur place et combien en prévoir.",
  'meilleurs-croissants-pains-au-chocolat-paris-entreprise': "Les croissants primés à Paris en 2026, comment reconnaître un bon croissant et combien en commander pour une réunion d'équipe.",
  'meilleures-chouquettes-paris-reunion-entreprise': "Où trouver de bonnes chouquettes à Paris, comment les reconnaître et combien en prévoir par personne pour une réunion de 10, 20 ou 50 personnes.",
  'meilleure-babka-paris-petit-dejeuner-entreprise': "Les adresses de babka reconnues à Paris, comment la choisir, combien en prévoir et comment la servir à un petit-déjeuner d'entreprise.",
  'meilleurs-cookies-paris-entreprise': "Où trouver les meilleurs cookies de Paris, comment reconnaître un bon cookie et combien en commander pour une réunion d'équipe de 10, 20 ou 50 personnes.",
  'meilleurs-macarons-paris-evenement-entreprise': "Notre sélection des meilleurs macarons de Paris, les critères d'un bon macaron et le budget pour 10, 20 ou 50 invités.",
  'cakes-maison-petit-dejeuner-gouter-entreprise': "Marbré, citron, pistache, carrot cake ou banana bread sans gluten : quel cake choisir, combien en prévoir par personne et les meilleures adresses.",
  'patisseries-personnalisees-logo-entreprise-paris': "Macarons, madeleines, cookies ou number cake à vos couleurs : ce qui se personnalise, les délais, le budget pour 10, 20 ou 50 personnes.",
  'meilleur-the-cafe-reunion-entreprise-paris': "Les maisons de thé et torréfacteurs de Paris, comment reconnaître un bon café de réunion et combien de thermos commander pour 10, 20 ou 50 personnes.",
  'meilleures-crepes-paris-entreprise': "Les crêperies de Paris qui comptent, comment reconnaître une bonne crêpe et combien en commander pour 10, 20 ou 50 personnes.",
  'meilleures-patisseries-gouter-entreprise-paris': "Les adresses de pâtisseries de Paris pour un goûter d'entreprise et ce que L'Écrin livre pour un goûter de 10, 20 ou 50 personnes.",
  'meilleures-lunch-box-reunion-entreprise-paris': "Nos cinq lunch box, ce qui fait une bonne box de réunion et le budget pour 10, 20 et 50 personnes.",
  'meilleurs-sandwichs-reunion-afterwork-entreprise-paris': "Clubs, mini-baguettes ou wraps : quel sandwich choisir pour une réunion ou un afterwork, et combien en commander pour 10, 20 ou 50 personnes.",
  'meilleur-plateau-saumon-fume-gravlax-reception-entreprise-paris': "Les maisons de saumon reconnues à Paris, comment lire l'étiquette d'un saumon fumé et combien en prévoir pour une réception de 10, 20 ou 50 personnes.",
  'plateau-asiatique-sushi-afterwork-entreprise-paris': "Makis, spring rolls, gyozas, yakitori : où commander un plateau asiatique pour un afterwork à Paris, combien de pièces et quel budget de 10 à 50.",
  'traiteur-entreprise-100-personnes': "Pour 100 personnes : petit-déjeuner Classique 829 € HT, plateaux repas dès 2 919 € HT, cocktail de 3 352,50 à 5 552,50 € HT, séminaire 5 048 € HT.",
  'conseils-reserver-traiteur-entreprise': "Délai, effectif, régimes, allergies, devis, accès, vaisselle, facture : les 10 points à régler avant de réserver un traiteur d'entreprise.",
  'traiteur-cabinet-avocats-paris': "Petit-déjeuner client dès 8 € HT par personne, plateaux repas de 28,90 à 30,90 € HT, cocktail dès 29,90 € HT : les formats d'un cabinet d'avocats.",
  'traiteur-cabinet-conseil-paris': "Petit-déjeuner d'équipe dès 8 € HT par personne, plateaux repas pour les comités, séminaire d'une journée : les formats d'un cabinet de conseil.",
  'traiteur-agence-evenementielle-paris': "Cocktails de 8, 12 ou 16 pièces, animations, maîtres d'hôtel, vaisselle : ce que L'Écrin livre aux agences, avec un budget pour 100 et 200 invités.",
  'traiteur-banque-assurance-finance-paris': "Petit-déjeuner de comité dès 8 € HT par personne, plateaux de réunion, cocktail clients dès 29,90 € HT, livraison à La Défense : les formats d'une banque.",
  'traiteur-sante-laboratoire-medtech-paris': "Petit-déjeuner de staff dès 6h30 à partir de 8 € HT par personne, plateaux pour les formations, cocktail scientifique : les formats d'un laboratoire.",
  'traiteur-immobilier-btp-paris': "Cocktail d'inauguration dès 29,90 € HT, petit-déjeuner de chantier dès 6h30 à partir de 8 € HT par personne, portes ouvertes : les formats d'un promoteur.",
  'cocktail-dinatoire-80-personnes-entreprise-paris': "Pour 80 personnes, un cocktail dînatoire livré au bureau revient à 55,60 € HT par personne chez L'Écrin, boissons et livraison comprises.",
  'cocktail-noel-entreprise-paris': "Cocktail de Noël pour 30, 50 ou 100 personnes : pièces, boissons sans alcool et budget livré. 2 245,50 € HT pour 50 personnes en 12 pièces.",
  'prix-plateau-repas-entreprise-paris-comparatif': "Combien coûte un plateau repas d'entreprise à Paris ? Prix, minimum et délai relevés le 24/10/2026 chez 8 traiteurs, et un exemple pour 20 personnes.",
  'petit-dejeuner-entreprise-paris-demain-matin': "Un petit-déjeuner pour demain matin ? Commande jusqu'à la veille 10h, livraison dès 6h30. Quantités pour 30 personnes, 269 € HT en Classique livrée.",
  'quel-traiteur-inauguration-bureaux-paris': "Choisir son traiteur pour inaugurer des bureaux à Paris : les critères et le budget livré pour 50, 100 et 150 invités, dès 29,90 € HT par personne.",
  'quel-traiteur-cocktail-noel-entreprise-paris': "Choisir son traiteur de Noël à Paris : les critères, les dates de décembre 2026 et les délais de commande, dès 29,90 € HT par personne.",
  'idees-evenement-entreprise-100-personnes-traiteur': "Six idées de restauration pour un événement de 100 personnes à Paris, du petit-déjeuner d'accueil au cocktail dînatoire, avec le budget livré.",
  'traiteur-lancement-produit-soiree-clients-paris': "Lancement de produit, soirée clients, réception de partenaires : le format, les critères de choix et le budget livré pour 40, 80 et 120 invités.",
  'quel-traiteur-animation-culinaire-evenement-paris': "Choisir son traiteur pour une animation culinaire d'entreprise à Paris : 27 animations par moment, plancher de 600 € HT, un exemple chiffré.",
  'petit-dejeuner-reunion-client-haut-de-gamme-paris': "Porcelaine, maître d'hôtel à 250 € HT pour 6 heures, installation avant l'arrivée : ce qu'un traiteur doit fournir pour une réunion client, et le budget.",
  'quel-traiteur-petit-dejeuner-entreprise-paris': "Heure de livraison, heure limite de commande, quantités, budget de 10 à 50 personnes : choisir un traiteur de petit-déjeuner à Paris, dès 8 € HT.",
  'traiteur-pause-gourmande-gouter-entreprise-paris': "Dès 6 € HT par personne : budget de 10 à 50 personnes, prix des pâtisseries, quantités et critères pour choisir un traiteur de goûter d'entreprise.",
  'commander-madeleines-reunion-entreprise-paris': "Coffrets de 10, 20 ou 50 madeleines de 24,90 à 119 € HT, livrés dès 6h30 : combien en prévoir, budget avec café pour 10 et 30 personnes.",
  'quel-traiteur-petit-dejeuner-entreprise-la-defense': "Badges, accueil des tours, heure de livraison, budget de 10 à 50 personnes dès 8 € HT : choisir un traiteur de petit-déjeuner à La Défense.",
  'traiteur-journee-seminaire-complete-paris': "Accueil, déjeuner et pauses chez un seul traiteur : 42,90 € HT de produits par personne, deux livraisons comprises pour 20, 50 et 100 personnes.",
  'traiteur-regimes-halal-vegetarien-vegan-sans-gluten-paris': "Halal et sans porc sur le salé, trois plateaux végétariens à 28,90 € HT, vegan et sans gluten sur demande, dans une seule commande.",
  'meilleur-traiteur-entreprise-paris-criteres': "Prix publiés, délai, livraison, régimes, avis, facture : six critères vérifiables pour choisir un traiteur d'entreprise à Paris, et nos réponses.",
  'cafe-ou-the-entreprise-reunion-quelle-proportion': "La proportion de café et de thé pour une réunion ou un petit-déjeuner, thermos par thermos, avec le budget pour 10, 20, 30, 50 et 100 personnes.",
  'thermos-cafe-the-accessoires-regimes-tasses-sucre-lait': "Ce qui est dans le thermos, ce qui s'ajoute (tasses, sucre), ce que contiennent café, thé et chocolat chaud pour les régimes, et que préciser au devis.",
  'combien-de-temps-cafe-chaud-thermos-reunion': "Le café en thermos reste chaud 6 heures, jusqu'à 8 heures après la livraison : à quelle heure le faire livrer et que faire pour une journée entière.",
  'que-servir-evenement-entreprise-afterwork-pot-de-depart-seminaire': "Afterwork, pot de départ, séminaire, accueil client, cocktail : que servir, combien prévoir et quel budget par personne, avec un exemple pour 20 personnes.",
  'comment-organiser-buffet-entreprise-retroplanning-quantites-budget': "Les 6 étapes pour organiser un buffet d'entreprise, le rétroplanning de J-7 au jour J, les quantités, le budget pour 20 personnes et les erreurs à éviter.",
}

export async function generateMetadata({ params }) {
  const article = articles.find(a => a.slug === params.slug)
  if (!article) return {}
  // metaTitle : titre court (<= 60 car.) pour le SERP, le titre long restant
  // affiché en H1 sur la page. Sans override, on garde le titre de l'article.
  const titreBrut = article.metaTitle || article.titre
  const titreCourt = titreBrut.length > 60 && TITRES_COURTS[params.slug] ? TITRES_COURTS[params.slug] : titreBrut
  const titre = TITRES_ANNEE[params.slug] || titreCourt
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
