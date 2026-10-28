/*
  Événements saisonniers : textes français. CÔTÉ SERVEUR SEULEMENT (le
  sitemap et les pages serveur l'importent ; un composant 'use client' lit
  evenementsIndex.js, sans texte).

  Aucun montant écrit à la main : les prix viennent de lib/prixEntree.js et
  lib/calculsPrix.js, par gabarit. Aucune date écrite à la main non plus :
  {{date}}, {{conseil}} et {{annee}} sont remplacés au rendu par la prochaine
  édition, calculée par lib/evenementsCalendrier.js depuis la règle de
  evenementsIndex.js.

  Champs :
  - nom, ctaNom (tournure « le Dry January »), mois (libellé de saison)
  - h1, seoTitle (title absolu, 60 car. au plus), metaDescription (155 au plus)
  - img, imgAlt, imgPos : photos de L'Écrin uniquement
  - descCourt (chapô), desc et differentiateur (rangée « signature »)
  - enBref : phrase propre à l'événement, en tête du bloc « En bref » ; la
    page y ajoute la date, le prix de départ, l'exemple et le délai, calculés
  - prestations : formats proposés (clés de lib/evenementsPrix.js), le premier
    sert au formulaire de devis ; exemples : tableau chiffré
  - horsCatalogue : ce qui n'a pas de fiche produit, affiché « sur demande »,
    sans prix ni lien (liste à faire confirmer par Ramy)
  - halal : vrai seulement quand l'offre est salée (règle : pas de mention
    halal sur les desserts)
  - faq : questions propres à l'événement ; la page ajoute les questions
    communes (date, budget, délai, dernière minute)
  - articles : guides du Journal ; occasions : pages occasion liées
  - maj : date de dernière mise à jour du texte (page, balisage, sitemap)
  - bilan (Octobre Rose) : montant reversé, publié quand Ramy le donne
*/
import { PDJ_DES, PAUSE_DES, LUNCHBOX_DES, PLATEAU_DES, MINIMUM, euroFr } from '../../../lib/prixEntree'
import { FORMULES, LIV } from '../../../lib/calculsPrix'
import { EVENEMENTS_INDEX } from './evenementsIndex'

/* « 8 € HT » */
const px = (x) => `${euroFr(x)} HT`
/* total livré pour n personnes à un prix par personne */
const pour = (n, pu) => px(n * pu + LIV)
const C8 = FORMULES.invitation.prix
const C12 = FORMULES.reception.prix
const C16 = FORMULES.celebration.prix
const LIVR = px(LIV)
const MINI = px(MINIMUM)
const REGLE = `Commande jusqu'à la veille 14h, livraison dès 6h30 à Paris et en Île-de-France ; à partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé.`

const MAJ = '2026-10-22'

const TEXTES = [
  {
    slug: 'galette-des-rois',
    mois: 'Janvier',
    nom: 'Galette des Rois',
    ctaNom: 'la Galette des Rois',
    h1: 'Galette des Rois en entreprise',
    seoTitle: 'Galette des Rois en entreprise à Paris, livrée',
    metaDescription: `Galettes des rois préparées par nos boulangers partenaires, livrées au bureau à Paris et en Île-de-France avec boissons et café. Sur devis, dès janvier.`,
    img: '/galette-des-rois-entreprise.webp',
    imgAlt: "Galette des rois feuilletée pur beurre dorée, avec sa couronne, livrée par L'Écrin Traiteur",
    descCourt: "Galettes préparées par nos boulangers partenaires, fève et couronne comprises, avec jus, café et thé. Sur devis.",
    desc: "Le rituel de janvier, fait sérieusement. Nos galettes sont préparées par nos boulangers partenaires, en pâte feuilletée pur beurre, avec une fève et une couronne dans chaque galette. Elles sont proposées sur devis, avec les boissons et le café du petit-déjeuner.",
    differentiateur: {
      label: 'Préparées par nos boulangers partenaires',
      text: "Quatre parfums au choix, fève et couronne comprises. Vous indiquez votre effectif, nous calculons le nombre de galettes.",
    },
    enBref: "L'Écrin Traiteur livre des galettes des rois préparées par nos boulangers partenaires, avec jus de pomme Alain Milliat, café et thé, pour un moment d'équipe en janvier.",
    prestations: ['pdj'],
    exemples: [{ p: 'pdj', n: 20 }, { p: 'pdj', n: 50 }],
    horsCatalogue: ['Galettes des rois : frangipane, pommes, chocolat noisette ou pistache, fève et couronne comprises'],
    faq: [
      { q: 'Combien de galettes prévoir pour une équipe ?', a: "Comptez une galette de 6 parts pour 5 à 6 personnes. Pour 20 personnes, quatre galettes, de deux parfums différents si possible. Nous ajustons le nombre au devis selon votre effectif." },
      { q: 'Les galettes sont-elles faites par L\'Écrin Traiteur ?', a: "Non. Elles sont préparées par nos boulangers partenaires, en pâte feuilletée pur beurre, et livrées par notre équipe avec les boissons. Elles sont proposées sur devis." },
    ],
    articles: ['petit-dejeuner-entreprise-paris', 'boissons-petit-dejeuner-entreprise'],
    occasions: ['petit-dejeuner-entreprise', 'gouter-entreprise'],
    article: {
      titre: "Comment organiser la Galette des Rois en entreprise ?",
      sections: [
        {
          heading: "Un rituel qui rassemble dès le début de l'année",
          texte: "La galette des rois est l'un des rares rituels de l'année qui rassemble naturellement autour d'une table. Pas besoin de prétexte : tout le monde sait ce que c'est, tout le monde attend la fève. Une galette de boulanger en pâte feuilletée pur beurre, bien présentée, change le moment par rapport à une galette de supermarché posée sur la table de réunion.",
        },
        {
          heading: "Quelle quantité prévoir pour votre équipe ?",
          texte: "Comptez une galette de 6 parts pour 5 à 6 collaborateurs pour que chacun ait une belle part. Pour un petit-déjeuner de 10 à 15 personnes, deux galettes de parfums différents permettent de varier. Côté boissons : jus de pomme Alain Milliat ou Chardonnay 0 %, sans alcool, pour que tout le monde partage le même verre, et un thermos de café. Pour les équipes plus larges, organisez plusieurs moments de 10 à 15 personnes plutôt qu'un seul grand rassemblement.",
        },
        {
          heading: "Quel parfum choisir ?",
          texte: "La frangipane reste le parfum de référence, mais proposer une alternative change l'expérience : une galette aux pommes pour les palais moins sucrés, une galette chocolat noisette pour les amateurs de chocolat, une galette pistache pour ceux qui cherchent autre chose. Évitez de commander plusieurs galettes identiques : la variété crée la surprise et les échanges.",
        },
        {
          heading: "Commander à temps",
          texte: `${REGLE} Les galettes étant préparées par nos boulangers partenaires, demandez le devis quelques jours avant. Une heure entre 9h30 et 10h30 en milieu de semaine fonctionne bien ; évitez le lundi de la première semaine de janvier, souvent chargé.`,
        },
      ],
    },
  },
  {
    slug: 'dry-january',
    mois: 'Janvier',
    nom: 'Dry January',
    ctaNom: 'le Dry January',
    h1: 'Dry January en entreprise : un afterwork sans alcool',
    seoTitle: 'Dry January en entreprise : afterwork sans alcool',
    metaDescription: `Afterwork sans alcool pour le Dry January : bar à mocktails, Chardonnay 0 %, cocktail dès ${px(C8)} par personne. Livré à Paris et en Île-de-France.`,
    img: '/prod-bar-mocktails.webp',
    imgAlt: "Bar à mocktails sans alcool tenu par un barman de L'Écrin Traiteur : agrumes, fruits frais et herbes",
    descCourt: "Bar à mocktails avec barman, Chardonnay 0 %, infusions et jus Alain Milliat. Un afterwork de janvier sans alcool.",
    desc: "En janvier, une partie de vos équipes relève le défi d'un mois sans alcool. Chez L'Écrin Traiteur, ce n'est pas une contrainte : nous ne servons jamais d'alcool. Un barman prépare des mocktails à la minute, avec agrumes, fruits frais et herbes, à côté d'un cocktail de pièces salées. Personne n'a à expliquer pourquoi il ne boit pas.",
    differentiateur: {
      label: 'Sans alcool toute l\'année',
      text: "Toute notre carte est sans alcool, toute l'année. Le Dry January ne change rien à notre façon de servir : il la met en avant.",
    },
    enBref: "L'Écrin Traiteur sert des afterworks entièrement sans alcool : cocktail de pièces salées et sucrées, bar à mocktails avec barman, Chardonnay 0 % et infusions.",
    prestations: ['cocktail8', 'cocktail12'],
    exemples: [{ p: 'cocktail8', n: 20 }, { p: 'cocktail8', n: 50 }],
    halal: true,
    horsCatalogue: [],
    faq: [
      { q: 'Le bar à mocktails est-il compris dans le cocktail ?', a: "Non, il se chiffre à part, sur devis, installation et démontage compris. Le nombre de barmans dépend de votre effectif." },
    ],
    articles: ['cocktail-entreprise-sans-alcool', 'bar-mocktails-barman-evenement-entreprise'],
    occasions: ['afterwork-entreprise', 'cocktail-entreprise'],
    article: {
      titre: "Dry January en entreprise : un afterwork sans alcool qui tient la route",
      sections: [
        {
          heading: "Le Dry January en bref",
          texte: `Le Dry January, appelé Défi de janvier en France, propose de ne pas boire d'alcool pendant tout le mois de janvier. En entreprise, c'est le bon moment pour un afterwork où personne n'a à se justifier. Un cocktail de 8 pièces salées et sucrées revient à ${px(C8)} par personne, soit ${pour(20, C8)} livraison comprise pour 20 personnes. Le bar à mocktails se chiffre sur devis, installation et démontage compris.`,
        },
        {
          heading: "Ce qu'on sert à la place de l'alcool",
          texte: "Le piège, c'est de remplacer le vin par une bouteille d'eau et un jus d'orange. Ce qui fonctionne : un bar à mocktails, où un barman prépare chaque verre à la minute avec agrumes, fruits frais, herbes et sirops maison. Pour trinquer, un Chardonnay Blanc de Blancs 0 %. En libre-service, une jarre de 10 litres d'infusion citron vert et gingembre, et des nectars Alain Milliat : abricot, pêche, mangue.",
        },
        {
          heading: "Pourquoi c'est simple chez nous",
          texte: "Chez L'Écrin Traiteur, la carte est sans alcool toute l'année, et le salé est halal et sans porc. Le Dry January ne demande donc aucune adaptation : les mêmes pièces, les mêmes boissons, le même service. Un pot sans alcool inclut tout le monde : ceux qui ne boivent jamais, ceux qui conduisent et ceux qui ne souhaitent pas en parler.",
        },
        {
          heading: "Organisation et timing",
          texte: `Évitez la première semaine de janvier, souvent prise par les vœux et la galette. La deuxième ou la troisième semaine, entre 18h et 20h, fonctionne bien. ${REGLE} Pour le bar à mocktails, demandez le devis quelques jours avant.`,
        },
      ],
    },
  },
  {
    slug: 'nouvel-an-chinois',
    mois: 'Janvier / Février',
    nom: 'Nouvel An chinois',
    ctaNom: 'le Nouvel An chinois',
    h1: 'Nouvel An chinois au bureau',
    seoTitle: 'Nouvel An chinois en entreprise, livré à Paris',
    metaDescription: `Fêter le Nouvel An chinois au bureau : plateau de bouchées asiatiques, atelier sushi, thé. Cocktail dès ${px(C8)} par personne, livré en Île-de-France.`,
    img: '/plateau-asiatique.webp',
    imgAlt: "Plateau apéritif asiatique : makis, california rolls, spring rolls, gyozas et brochettes yakitori",
    descCourt: "Plateau de makis, spring rolls, gyozas et yakitori, thé Mariage Frères. Pour fêter la nouvelle année lunaire au bureau.",
    desc: "Le Nouvel An chinois suit le calendrier lunaire : prochaine édition le {{date}}. Au bureau, un plateau de bouchées d'inspiration asiatique, makis, california rolls, spring rolls, gyozas et brochettes yakitori, se picore debout. Thé Mariage Frères en thermos, brochettes de fruits frais pour finir.",
    differentiateur: {
      label: 'Sans porc, comme toute la carte',
      text: "Gyozas, spring rolls et brochettes yakitori sont sans porc, comme tout notre salé. Tout le monde mange de tout.",
    },
    enBref: "L'Écrin Traiteur livre un plateau de bouchées d'inspiration asiatique, un atelier sushi sur demande et du thé Mariage Frères pour le Nouvel An chinois.",
    prestations: ['cocktail8', 'pdj'],
    exemples: [{ p: 'cocktail8', n: 20 }, { p: 'cocktail8', n: 40 }],
    halal: true,
    horsCatalogue: [],
    faq: [
      { q: 'Servez-vous de la cuisine chinoise traditionnelle ?', a: "Non. Nous proposons des bouchées d'inspiration asiatique qui se mangent d'une main : makis, california rolls, spring rolls, gyozas et brochettes yakitori, sans porc." },
    ],
    articles: ['plateau-asiatique-sushi-afterwork-entreprise-paris'],
    occasions: ['afterwork-entreprise', 'dejeuner-entreprise'],
    article: {
      titre: "Fêter le Nouvel An chinois au bureau : simple et bien fait",
      sections: [
        {
          heading: "Le Nouvel An chinois en bref",
          texte: `Le Nouvel An chinois, ou fête du Printemps, suit le calendrier lunaire : sa date change chaque année, entre fin janvier et mi-février. Prochaine édition : {{date}}. Un cocktail de 8 pièces revient à ${px(C8)} par personne, un petit-déjeuner Classique à ${px(PDJ_DES)}, livraison de ${LIVR} en plus.`,
        },
        {
          heading: "Que servir ?",
          texte: "Nous ne prétendons pas faire de la cuisine chinoise traditionnelle. Notre plateau asiatique réunit des bouchées d'inspiration asiatique qui se mangent d'une main : makis, california rolls, spring rolls, gyozas, brochettes yakitori, avec sauce soja, gingembre et wasabi. Pour une équipe plus nombreuse, l'atelier sushi et maki prépare les pièces en continu devant vos invités. Côté boissons, du thé Mariage Frères en thermos et une infusion citron vert et gingembre.",
        },
        {
          heading: "Le bon format pour une équipe",
          texte: "Le Nouvel An chinois se prête bien à un déjeuner debout ou à un afterwork court. Le plateau asiatique se partage en complément d'un cocktail de pièces, et des brochettes de fruits frais terminent le moment. Si des collègues fêtent l'événement en famille, demandez-leur ce qu'ils aimeraient voir sur la table : c'est la meilleure façon d'en faire un moment d'équipe.",
        },
        {
          heading: "Commande et timing",
          texte: `${REGLE} Pour l'atelier sushi et maki, demandez le devis quelques jours avant. Entre 12h et 14h ou en fin de journée, 45 minutes à une heure suffisent. Précisez les régimes de l'équipe à la demande : végétarien, sans gluten.`,
        },
      ],
    },
  },
  {
    slug: 'chandeleur',
    mois: 'Février',
    nom: 'Chandeleur',
    ctaNom: 'la Chandeleur',
    h1: 'Chandeleur en entreprise : crêpes livrées ou atelier',
    seoTitle: 'Chandeleur en entreprise : crêpes au bureau, Paris',
    metaDescription: `Crêpes maison livrées au bureau pour la Chandeleur, ou atelier crêpes sur place. Pause dès ${px(PAUSE_DES)} par personne, livraison à Paris et en Île-de-France.`,
    img: '/prod-crepes-v2.webp',
    imgAlt: "Crêpes moelleuses maison pliées sur une planche, prêtes à servir",
    descCourt: "Crêpes maison livrées prêtes à servir, ou atelier crêpes dans vos locaux. Pour le 2 février.",
    desc: "Des crêpes maison, généreuses, à partager. Et pour les équipes qui veulent vivre le moment en direct, notre atelier crêpes et pancakes s'installe dans vos locaux : les crêpes sont faites devant vos équipes.",
    differentiateur: {
      label: 'L\'atelier crêpes dans vos bureaux',
      text: "Vos équipes se servent et choisissent leur garniture. Un vrai moment ensemble, pas un goûter de plus.",
    },
    enBref: "L'Écrin Traiteur livre des crêpes maison prêtes à servir pour la Chandeleur, ou installe un atelier crêpes et pancakes dans vos locaux.",
    prestations: ['pause', 'pdj'],
    exemples: [{ p: 'pause', n: 20 }, { p: 'pause', n: 50 }],
    horsCatalogue: ['Garnitures : confitures, pâte à tartiner, chantilly'],
    faq: [
      { q: 'Livraison de crêpes ou atelier sur place : que choisir ?', a: "La livraison est la plus simple : crêpes préparées le matin, livrées prêtes à servir. L'atelier crêpes et pancakes crée plus d'animation mais demande un peu d'espace et se chiffre sur devis." },
    ],
    articles: ['gouter-entreprise-bureau'],
    occasions: ['gouter-entreprise', 'petit-dejeuner-entreprise'],
    article: {
      titre: "Organiser la Chandeleur au bureau : nos conseils",
      sections: [
        {
          heading: "Pourquoi la Chandeleur fonctionne si bien en entreprise",
          texte: "La Chandeleur a quelque chose que peu d'événements ont : tout le monde a un souvenir d'enfance autour d'une crêpe. Au bureau, l'atmosphère se détend tout de suite. Pas besoin d'expliquer le concept, et elle n'est rattachée à aucune tradition exclusive : c'est un moment qui inclut tout le monde.",
        },
        {
          heading: "Livraison prête à servir ou atelier crêpes ?",
          texte: "Deux formats sont possibles. La livraison : des crêpes préparées le matin, livrées avec les boissons. Simple, rapide, facile à gérer. L'atelier crêpes et pancakes : notre équipe prépare les crêpes devant vos collaborateurs. Le second format crée plus d'animation mais demande un peu d'espace et d'anticipation.",
        },
        {
          heading: "Les garnitures",
          texte: "Prévoyez quatre ou cinq garnitures pour que chacun trouve la sienne : citron et sucre, confiture, pâte à tartiner, chantilly. Précisez-les à la demande de devis. Pour ceux qui préfèrent le salé, ajoutez un plateau de pains briochés salés.",
        },
        {
          heading: "À quelle heure organiser la pause crêpes ?",
          texte: `La Chandeleur tombe le {{date}}. Elle fonctionne bien en milieu de matinée (10h à 11h) ou en goûter (16h à 17h). Évitez l'heure du déjeuner. Trente à quarante-cinq minutes suffisent pour que tout le monde passe. ${REGLE}`,
        },
      ],
    },
  },
  {
    slug: 'saint-valentin',
    mois: 'Février',
    nom: 'Saint-Valentin',
    ctaNom: 'la Saint-Valentin',
    h1: 'Saint-Valentin au bureau : un goûter pour l\'équipe',
    seoTitle: 'Saint-Valentin au bureau : goûter d\'équipe livré',
    metaDescription: `Un goûter de Saint-Valentin pour remercier vos équipes : fraisier, macarons, madeleines personnalisées. Dès ${px(PAUSE_DES)} par personne, livré à Paris.`,
    img: '/prod-fraisier-partager.webp',
    imgAlt: "Fraisier à partager : biscuit léger, crème mousseline et fraises fraîches",
    descCourt: "Un goûter pour dire merci à vos équipes : fraisier à partager, macarons, madeleines personnalisées.",
    desc: "La Saint-Valentin version bureau, ce n'est pas un dîner aux chandelles : c'est un goûter pour dire à vos équipes qu'on tient à elles. Un fraisier ou une grande tarte aux framboises à partager, des macarons, des madeleines avec votre message.",
    differentiateur: {
      label: 'Un merci écrit, pas une déclaration',
      text: "Madeleines, macarons ou cookies à votre message et aux couleurs de l'entreprise, sur devis.",
    },
    enBref: "L'Écrin Traiteur livre un goûter de Saint-Valentin pensé pour toute l'équipe : fraisier ou tarte aux framboises à partager, macarons et madeleines personnalisées.",
    prestations: ['pause'],
    exemples: [{ p: 'pause', n: 20 }, { p: 'pause', n: 50 }],
    horsCatalogue: [],
    faq: [
      { q: 'Comment fêter la Saint-Valentin au bureau sans mettre mal à l\'aise ?', a: "En faisant un goûter de remerciement pour toute l'équipe, sans cœurs partout. Un gâteau à partager, un mot du manager, des madeleines avec un message : personne n'est mis de côté." },
    ],
    articles: ['gouter-entreprise-bureau', 'meilleures-patisseries-gouter-entreprise-paris'],
    occasions: ['gouter-entreprise'],
    article: {
      titre: "Saint-Valentin au bureau : un goûter pour vos équipes, pas pour les couples",
      sections: [
        {
          heading: "Pourquoi en parler au bureau ?",
          texte: "La Saint-Valentin est une fête de couple, et c'est pour ça qu'elle met mal à l'aise en entreprise si on la prend au pied de la lettre. Le bon angle est ailleurs : profiter de la date pour dire merci à l'équipe. Un goûter en fin d'après-midi, un mot du manager, des pâtisseries choisies avec soin. Personne n'est mis de côté.",
        },
        {
          heading: "Que servir ?",
          texte: "Un grand gâteau à partager fait le centre de la table : le fraisier, biscuit léger, crème mousseline et fraises fraîches, ou la grande tarte aux framboises, pour 10 à 12 personnes chacun. Autour, un coffret de 24 macarons signés Pierre Morel, un cake framboise maison, du jus pomme et framboise. Les madeleines personnalisées portent votre message : un merci, le nom de l'équipe.",
        },
        {
          heading: "Budget",
          texte: `Une pause gourmande démarre à ${px(PAUSE_DES)} par personne, soit ${pour(20, PAUSE_DES)} livraison comprise pour 20 personnes. Le minimum de commande est de ${MINI}. Les madeleines personnalisées se chiffrent sur devis, selon le message et la quantité.`,
        },
        {
          heading: "Timing",
          texte: `La prochaine Saint-Valentin tombe le {{date}} : choisissez le {{conseil}} en fin d'après-midi, entre 16h et 17h. ${REGLE} Trente minutes suffisent : le but est de marquer le moment.`,
        },
      ],
    },
  },
  {
    slug: 'ramadan-aid',
    mois: 'Février / Mars',
    nom: 'Ramadan et Aïd',
    ctaNom: "un iftar ou l'Aïd",
    h1: "Iftar au bureau et petit-déjeuner de l'Aïd",
    seoTitle: "Iftar d'entreprise et Aïd : traiteur halal à Paris",
    metaDescription: `Iftar au bureau livré un quart d'heure avant la rupture du jeûne, petit-déjeuner de l'Aïd. Salé halal et sans porc, cocktail dès ${px(C8)} par personne.`,
    img: '/prod-atelier-libanais.webp',
    imgAlt: "Atelier libanais wrap et pita : chawarma, falafels, houmous et taboulé préparés devant les invités",
    descCourt: "Iftar au bureau en fin de journée et petit-déjeuner de l'Aïd. Tout le salé est halal et sans porc, sans supplément.",
    desc: "Le Ramadan suit le calendrier lunaire : sa date avance d'environ onze jours chaque année. Prochaine édition : {{date}}. Pour un iftar au bureau, nous livrons un cocktail dînatoire ou un buffet salé un quart d'heure avant la rupture du jeûne. Pour l'Aïd, un petit-déjeuner d'équipe.",
    differentiateur: {
      label: 'Halal et sans porc, sans menu à part',
      text: "Tout notre salé est halal et sans porc, sans alcool, sans supplément. Jeûneurs ou non, tout le monde mange la même chose.",
    },
    enBref: "L'Écrin Traiteur livre des iftars d'entreprise un quart d'heure avant la rupture du jeûne, et des petits-déjeuners pour l'Aïd. Le salé est halal et sans porc, sans supplément.",
    prestations: ['cocktail16', 'cocktail12', 'pdj'],
    exemples: [{ p: 'cocktail16', n: 30 }, { p: 'pdj', n: 20 }],
    halal: true,
    horsCatalogue: [],
    faq: [
      { q: "À quelle heure livrez-vous un iftar ?", a: "Un quart d'heure avant l'heure de rupture du jeûne du jour, que vous nous indiquez à la commande. Le buffet est en place avec l'eau et les jus dès la première minute." },
      { q: 'Faut-il commander un menu halal à part ?', a: "Non. Tout notre salé est halal et sans porc, sans alcool, sans supplément. Précisez seulement les autres régimes de l'équipe, végétarien ou sans gluten." },
    ],
    articles: ['iftar-entreprise-ramadan-organiser', 'traiteur-halal-entreprise-paris', 'petit-dejeuner-halal-entreprise-paris'],
    occasions: ['cocktail-entreprise', 'petit-dejeuner-entreprise'],
    article: {
      titre: "Ramadan et Aïd en entreprise : iftar au bureau et petit-déjeuner de fête",
      sections: [
        {
          heading: "Le Ramadan en bref",
          texte: "Le Ramadan suit le calendrier lunaire : ses dates avancent d'environ onze jours chaque année et se confirment lors de la Nuit du doute. Prochaine édition : {{date}}. L'Aïd el-Fitr marque la fin du jeûne, le lendemain du dernier jour.",
        },
        {
          heading: "L'iftar au bureau : du salé, à l'heure",
          texte: `Un iftar d'entreprise réunit l'équipe au moment de la rupture du jeûne, jeûneurs ou non. Tout se joue sur l'heure : le buffet doit être en place un quart d'heure avant, avec de l'eau et des jus dès la première minute. Ensuite, du salé qui rassasie : un cocktail de 16 pièces par personne à ${px(C16)}, soit ${pour(30, C16)} livraison comprise pour 30 personnes, ou un buffet à partager comme Le Méditerranéen, avec taboulé, falafels et caviar d'aubergine. Pour une équipe plus nombreuse, l'atelier libanais prépare chawarma de poulet ou de bœuf, falafels, houmous et taboulé devant les invités.`,
        },
        {
          heading: "Halal et sans porc : rien à demander",
          texte: "Chez L'Écrin Traiteur, tout le salé est halal et sans porc, sans alcool, toute l'année et sans supplément. Vous n'avez pas à commander un menu à part pour les collègues qui jeûnent. Précisez seulement les autres régimes de l'équipe et l'heure de rupture du jeûne le jour de votre iftar : nous calons la livraison un quart d'heure avant.",
        },
        {
          heading: "Le petit-déjeuner de l'Aïd",
          texte: `Le jour de l'Aïd, beaucoup de collègues posent leur journée. Un petit-déjeuner le jour même ou le lendemain permet de marquer la fête avec toute l'équipe. Le petit-déjeuner Classique est à ${px(PDJ_DES)} par personne, soit ${pour(20, PDJ_DES)} livraison comprise pour 20 personnes ; ajoutez un plateau de pains briochés salés pour ceux qui préfèrent le salé le matin. ${REGLE}`,
        },
      ],
    },
  },
  {
    slug: 'journee-des-femmes',
    mois: 'Mars',
    nom: 'Journée des droits des femmes',
    ctaNom: 'la Journée des droits des femmes',
    h1: 'Journée internationale des droits des femmes en entreprise',
    seoTitle: 'Journée des droits des femmes en entreprise, Paris',
    metaDescription: `Petit-déjeuner ou goûter pour la Journée internationale des droits des femmes, le 8 mars : madeleines personnalisées, macarons. Dès ${px(PAUSE_DES)} par personne.`,
    img: '/section-reception.webp',
    imgPos: 'center 55%',
    imgAlt: "Cake et viennoiseries servis sur un plateau rond, avec une bouteille de jus",
    descCourt: "Madeleines personnalisées, tartelettes fines, jus Alain Milliat et thé Mariage Frères. Pour le 8 mars.",
    desc: "Un moment pour toute l'équipe, accompagné d'une prise de parole. Des madeleines personnalisées, des tartelettes fines, des macarons, une table soignée. Simple, et qui veut dire quelque chose.",
    differentiateur: {
      label: 'Personnalisation',
      text: "Madeleines à vos couleurs, emballage soigné, message de l'entreprise. Sur devis.",
    },
    enBref: "L'Écrin Traiteur livre un petit-déjeuner ou un goûter pour la Journée internationale des droits des femmes, avec madeleines personnalisées, macarons et thé Mariage Frères.",
    prestations: ['pause', 'pdj'],
    exemples: [{ p: 'pause', n: 20 }, { p: 'pdj', n: 20 }],
    horsCatalogue: [],
    faq: [
      { q: 'Petit-déjeuner ou goûter pour le 8 mars ?', a: "Les deux fonctionnent. Le petit-déjeuner ouvre la journée ; le goûter de fin d'après-midi permet à tout le monde d'être présent, y compris ceux qui arrivent tard." },
    ],
    articles: ['gouter-entreprise-bureau'],
    occasions: ['petit-dejeuner-entreprise', 'gouter-entreprise'],
    article: {
      titre: "Comment marquer le 8 mars en entreprise sans tomber dans les clichés ?",
      sections: [
        {
          heading: "Un geste sincère plutôt qu'une communication",
          texte: "La Journée internationale des droits des femmes est un moment sensible en entreprise. Bien fait, c'est une attention qui compte. Mal fait, ça sonne creux. La différence se joue dans la sincérité du geste et dans ce qui l'accompagne : une prise de parole, une information, un engagement concret.",
        },
        {
          heading: "Les idées qui marquent",
          texte: "Oubliez les bouquets génériques ou les chocolats de supermarché. Ce qui marque, c'est le soin apporté : des madeleines personnalisées avec l'emballage aux couleurs de l'entreprise, une sélection de macarons et de tartelettes fines, du thé Mariage Frères. L'idée n'est pas de dépenser beaucoup, mais de montrer que quelqu'un a réfléchi à ce moment.",
        },
        {
          heading: "Quel format choisir ?",
          texte: "Petit-déjeuner ou goûter ? Les deux fonctionnent. Pour un effectif de 10 à 50 personnes, un buffet libre en salle de pause fonctionne bien. Pour une équipe plus grande, plusieurs points de service évitent l'attente.",
        },
        {
          heading: "Les erreurs à éviter",
          texte: `Ne pas réserver le moment aux seules femmes : il se vit collectivement. Ne pas l'annoncer au dernier moment. Et ne pas se contenter d'un geste symbolique : un mot d'un manager ou une prise de parole simple donnent son sens au goûter. La prochaine édition tombe le {{date}}. ${REGLE}`,
        },
      ],
    },
  },
  {
    slug: 'paques',
    mois: 'Mars / Avril',
    nom: 'Pâques',
    ctaNom: 'Pâques',
    h1: 'Pâques en entreprise : une pause sucrée avant les congés',
    seoTitle: 'Pâques en entreprise : pause gourmande, Paris',
    metaDescription: `Une pause de Pâques au bureau : mousse au chocolat, cake chocolat, macarons, viennoiseries. Dès ${px(PAUSE_DES)} par personne, livré à Paris et en Île-de-France.`,
    img: '/prod-macarons.webp',
    imgAlt: "Coffret de macarons assortis dans une caisse en bois",
    descCourt: "Mousse au chocolat, cake chocolat, macarons et viennoiseries. Une pause sucrée pour fêter le printemps avant les congés.",
    desc: "Une pause sucrée pour célébrer le printemps avec vos équipes avant les congés. Mousse au chocolat, cake chocolat, macarons, viennoiseries et jus d'orange, présentés simplement.",
    differentiateur: {
      label: 'Le chocolat, sans en faire trop',
      text: "Des pâtisseries au chocolat de notre carte, et sur demande des chocolats de Pâques choisis chez nos artisans partenaires.",
    },
    enBref: "L'Écrin Traiteur livre une pause de Pâques au bureau : mousse au chocolat, cake chocolat, macarons et viennoiseries.",
    prestations: ['pause', 'pdj'],
    exemples: [{ p: 'pause', n: 20 }, { p: 'pdj', n: 20 }],
    horsCatalogue: ['Chocolats de Pâques, œufs et cloches en chocolat'],
    faq: [
      { q: 'Quand organiser la pause de Pâques au bureau ?', a: "La semaine avant Pâques, idéalement le jeudi ou le vendredi matin, avant que les équipes partent en congés. Vingt à trente minutes suffisent." },
    ],
    articles: ['gouter-entreprise-bureau'],
    occasions: ['gouter-entreprise', 'petit-dejeuner-entreprise'],
    article: {
      titre: "Organiser Pâques en entreprise : les idées qui fonctionnent",
      sections: [
        {
          heading: "Pâques au bureau, un moment souvent oublié",
          texte: "Entre la galette en janvier et les événements de juin, Pâques est souvent oublié. C'est pourtant un bon moment pour une pause sucrée avant les vacances : le chocolat plaît à presque tout le monde, et fin mars ou début avril, après plusieurs semaines sans temps fort, les équipes apprécient de se retrouver.",
        },
        {
          heading: "Le chocolat, en pâtisserie",
          texte: "Une sélection de pâtisseries au chocolat crée une vraie pause : mousse au chocolat en pot individuel, cake aux pépites de chocolat tranché, macarons. Sur demande, nous ajoutons des chocolats de Pâques choisis chez nos artisans partenaires.",
        },
        {
          heading: "Le format le plus simple",
          texte: "Un buffet libre en salle de pause avec les pâtisseries, quelques viennoiseries et des jus de fruits. Une pause de 20 à 30 minutes en milieu de matinée suffit. Ajoutez des viennoiseries pour ceux qui ne mangent pas de chocolat.",
        },
        {
          heading: "Timing",
          texte: `Le prochain dimanche de Pâques tombe le {{date}}. Organisez la pause la semaine qui précède, le jeudi ou le vendredi matin. ${REGLE}`,
        },
      ],
    },
  },
  {
    slug: 'semaine-qvt',
    mois: 'Juin',
    nom: 'Semaine de la QVT',
    ctaNom: 'la Semaine de la QVT',
    h1: 'Semaine de la QVT : un petit-déjeuner bien-être au bureau',
    seoTitle: 'Semaine de la QVT : petit-déjeuner bien-être, Paris',
    metaDescription: `Petit-déjeuner bien-être pour la Semaine de la QVT : fruits frais, jus pressés, yaourts fermiers, bar à jus. Dès ${px(PDJ_DES)} par personne, livré à Paris.`,
    img: '/prod-bar-jus.webp',
    imgAlt: "Bar à jus pressés : fruits et légumes pressés à la minute devant les invités",
    descCourt: "Petits-déjeuners bien-être, jus pressés minute, fruits frais, yaourts fermiers. Pour la semaine de la qualité de vie au travail.",
    desc: "Chaque année en juin, la Semaine pour la qualité de vie et des conditions de travail met le sujet sur la table. Un petit-déjeuner bien pensé est une façon concrète d'y participer : jus d'orange pressé, brochettes de fruits frais, yaourts de la Ferme de Viltain, compotes sans sucres ajoutés. Ou un bar à jus pressés installé dans vos locaux.",
    differentiateur: {
      label: 'Le bar à jus pressés',
      text: "Orange, pamplemousse, carotte-orange-gingembre, concombre-menthe-citron vert, pressés à la minute dans vos locaux. Sur devis.",
    },
    enBref: "L'Écrin Traiteur livre des petits-déjeuners bien-être pour la Semaine de la QVT : fruits frais, jus pressés, yaourts fermiers, et un bar à jus pressés sur demande.",
    prestations: ['pdj', 'pause'],
    exemples: [{ p: 'pdj', n: 20 }, { p: 'pdj', n: 50 }],
    horsCatalogue: [],
    faq: [
      { q: 'Qui organise la Semaine de la QVT ?', a: "Le réseau Anact-Aract, chaque année en juin. Les entreprises y prévoient ateliers, conférences et moments d'équipe ; le petit-déjeuner ouvre souvent la semaine." },
    ],
    articles: ['qvt-alimentation-politique-rh', 'bien-etre-bureau-alimentation', 'livraison-fruits-bureau-entreprise'],
    occasions: ['petit-dejeuner-entreprise', 'team-building'],
    article: {
      titre: "Semaine de la QVT : un petit-déjeuner qui va dans le sens du message",
      sections: [
        {
          heading: "La Semaine de la QVT en bref",
          texte: `La Semaine pour la qualité de vie et des conditions de travail est organisée chaque année en juin par le réseau Anact-Aract. Les entreprises y prévoient ateliers, conférences et moments d'équipe. Un petit-déjeuner en ouverture de semaine revient à ${px(PDJ_DES)} par personne en formule Classique, soit ${pour(20, PDJ_DES)} livraison comprise pour 20 personnes.`,
        },
        {
          heading: "Ce qu'on met sur la table",
          texte: "Des fruits frais, en brochettes ou en corbeille, plutôt qu'un plateau de viennoiseries seul. Des yaourts fermiers de la Ferme de Viltain et des yaourts au granola. Des compotes de pomme sans sucres ajoutés. Du jus d'orange pressé minute plutôt qu'un nectar. On garde quelques viennoiseries : un petit-déjeuner bien-être qui ne fait envie à personne passe à côté de son objectif.",
        },
        {
          heading: "Le bar à jus pressés",
          texte: "Pour marquer la semaine, le bar à jus pressés s'installe dans vos locaux : orange, pamplemousse, pomme, citronnade fraîche, et des mélanges comme carotte-orange-gingembre ou concombre-menthe-citron vert, pressés devant chaque collègue. La prestation se chiffre sur devis, installation et démontage compris.",
        },
        {
          heading: "Organisation",
          texte: `Ouvrez la semaine par le petit-déjeuner, le lundi ou le mardi entre 8h30 et 9h30, et gardez le bar à jus pour un temps fort en milieu de semaine. ${REGLE} Les brochettes de fruits sont vegan et sans gluten, le banana bread est sans gluten.`,
        },
      ],
    },
  },
  {
    slug: 'fete-de-la-musique',
    mois: 'Juin',
    nom: 'Fête de la musique',
    ctaNom: 'la Fête de la musique',
    h1: 'Fête de la musique au bureau : un afterwork d\'été',
    seoTitle: 'Fête de la musique : afterwork d\'entreprise, Paris',
    metaDescription: `Afterwork du 21 juin au bureau : mini burgers, cocktail de pièces, bar à mocktails, Chardonnay 0 %. Dès ${px(C8)} par personne, livré à Paris.`,
    img: '/plateau-burgers.webp',
    imgAlt: "Plateau de mini burgers piqués, prêts à servir pour un afterwork d'été",
    descCourt: "Un afterwork d'été sans alcool : mini burgers, cocktail de pièces, bar à mocktails, Chardonnay 0 %.",
    desc: "Le 21 juin, la ville sort dans la rue en fin de journée. Au bureau, c'est l'occasion d'un afterwork avant que chacun parte écouter des concerts. Mini burgers, wraps, cocktail de 8 pièces, et côté boissons un bar à mocktails, du Chardonnay 0 % et une jarre d'infusion fraîche.",
    differentiateur: {
      label: 'Tout le monde trinque',
      text: "Mocktails, Chardonnay 0 %, infusions : aucune bouteille d'alcool à gérer, et le même verre pour tous.",
    },
    enBref: "L'Écrin Traiteur livre des afterworks du 21 juin sans alcool : mini burgers, mini wraps, cocktail de pièces et bar à mocktails.",
    prestations: ['cocktail8', 'cocktail12'],
    exemples: [{ p: 'cocktail8', n: 30 }, { p: 'cocktail12', n: 30 }],
    halal: true,
    horsCatalogue: [],
    faq: [
      { q: 'À quelle heure organiser l\'afterwork du 21 juin ?', a: "Entre 17h30 et 19h30 : chacun a ensuite le temps de rejoindre les concerts." },
    ],
    articles: ['idees-afterwork-entreprise-formats-budget', 'mini-burgers-afterwork-cocktail-entreprise-paris', 'cocktail-entreprise-sans-alcool'],
    occasions: ['afterwork-entreprise', 'cocktail-entreprise'],
    article: {
      titre: "Fête de la musique au bureau : un afterwork d'été, sans alcool",
      sections: [
        {
          heading: "La Fête de la musique en bref",
          texte: `La Fête de la musique a lieu chaque 21 juin ; la prochaine tombe le {{date}}. Un afterwork au bureau entre 17h30 et 19h30 laisse à chacun le temps de rejoindre les concerts. Un cocktail de 8 pièces revient à ${px(C8)} par personne, soit ${pour(30, C8)} livraison comprise pour 30 personnes.`,
        },
        {
          heading: "Que servir ?",
          texte: `Du salé qui se mange debout, d'une main : un plateau de 24 mini burgers, des mini wraps roulés au poulet ou au saumon fumé, des clubs sandwichs. Le cocktail de 8 pièces complète avec des bouchées plus fines et quelques douceurs. Pour un afterwork plus long, passez à la formule de 12 pièces, à ${px(C12)} par personne.`,
        },
        {
          heading: "Des boissons fraîches, sans alcool",
          texte: "En juin, il fait chaud et on boit beaucoup : comptez large. Une jarre de 10 litres d'infusion passion ou citron vert et gingembre, des jus Alain Milliat, de l'eau pétillante, et un Chardonnay Blanc de Blancs 0 % pour trinquer. Pour faire de l'afterwork un moment, ajoutez un bar à mocktails, sur devis. Toute la carte est sans alcool, et le salé est halal et sans porc.",
        },
        {
          heading: "Commande et organisation",
          texte: `${REGLE} Si vous avez une terrasse ou une cour, servez dehors. La musique, c'est à vous : une enceinte et une playlist d'équipe suffisent.`,
        },
      ],
    },
  },
  {
    slug: 'fete-de-fin-dannee',
    mois: 'Juin',
    nom: "Fête de fin d'année",
    ctaNom: "la fête de fin d'année",
    h1: "Fête de fin d'année d'entreprise en juin",
    seoTitle: "Fête de fin d'année d'entreprise en juin, Paris",
    metaDescription: `Clôturer la saison en juin : cocktail dînatoire dès ${px(C8)} par personne, plateaux de fromages et de saumon, desserts. Livré à Paris et en IDF.`,
    img: '/cocktail-dinatoire.webp',
    imgAlt: "Pièces de cocktail dînatoire dressées sur un plateau rond : verrines, tartelettes et mini sandwichs",
    descCourt: "Cocktail dînatoire, plateaux à partager ou plateaux repas. Pour clôturer la saison avant les congés d'été.",
    desc: "Le moment pour clôturer une saison avec une vraie table. Cocktail dînatoire, plateaux de fromages affinés et de saumon à partager, ou plateaux repas. Avant les départs en congés.",
    differentiateur: {
      label: 'Format au choix',
      text: "Cocktail dînatoire, plateaux à partager ou plateaux repas : on s'adapte à votre effectif et à votre format.",
    },
    enBref: "L'Écrin Traiteur livre des fêtes de fin d'année d'entreprise en juin : cocktail dînatoire, plateaux à partager et desserts, sans alcool.",
    prestations: ['cocktail8', 'cocktail12', 'cocktail16', 'plateau'],
    exemples: [{ p: 'cocktail12', n: 30 }, { p: 'cocktail12', n: 80 }],
    halal: true,
    horsCatalogue: [],
    faq: [
      { q: "Pourquoi fêter la fin d'année en juin plutôt qu'en décembre ?", a: "Décembre est chargé, les agendas sont pleins. En juin, les projets du semestre se clôturent et l'équipe est encore entière avant les départs en vacances." },
    ],
    articles: ['idees-afterwork-entreprise-formats-budget', 'cocktail-dinatoire-entreprise-paris'],
    occasions: ['cocktail-entreprise', 'afterwork-entreprise'],
    article: {
      titre: "Organiser la fête de fin d'année de votre entreprise en juin",
      sections: [
        {
          heading: "Pourquoi en juin et pas en décembre ?",
          texte: "Décembre est chargé : les agendas sont pleins et les soirées familiales et amicales se multiplient. Juin, c'est différent : les projets du premier semestre se clôturent, et l'équipe est encore entière avant les départs en vacances. C'est aussi le début de l'été, une période plus détendue.",
        },
        {
          heading: "Cocktail dînatoire, plateaux ou repas assis ?",
          texte: "Le cocktail dînatoire favorise les échanges : tout le monde circule et se mélange. Les plateaux à partager sont plus généreux et conviviaux. Le repas assis crée une vraie pause collective, mais demande plus de logistique. Pour une équipe de moins de 30 personnes, le cocktail dînatoire reste la formule la plus simple ; au-delà, des zones assises et debout fonctionnent bien.",
        },
        {
          heading: "Ce qui fait une bonne table de fête",
          texte: `De la variété : plateaux de fromages affinés et de saumon pour commencer, bouchées salées, verrines fraîches pour l'été, puis des desserts à partager. Un cocktail de 12 pièces revient à ${px(C12)} par personne. Côté boissons, jus Alain Milliat, eau pétillante et un Chardonnay Blanc de Blancs 0 % pour trinquer, sans alcool pour que tout le monde partage le même verre.`,
        },
        {
          heading: "Organisation pratique",
          texte: `Prévoyez l'événement entre 18h et 21h et communiquez la date au moins trois semaines à l'avance. Une terrasse ou un espace extérieur est un vrai plus en juin. Pensez à quelques tables hautes et basses pour faciliter les échanges. ${REGLE}`,
        },
      ],
    },
  },
  {
    slug: 'ete',
    mois: 'Juillet / Août',
    nom: 'Été',
    ctaNom: "un moment d'été",
    h1: "L'été au bureau : pauses fraîches et petites équipes",
    seoTitle: "Traiteur d'été en entreprise : pauses fraîches, Paris",
    metaDescription: `Pauses fraîches, lunch box dès ${px(LUNCHBOX_DES)}, bar à glaces pour le pot avant les congés. Minimum de commande ${MINI}, livré à Paris et en Île-de-France.`,
    img: '/prod-bar-glaces.webp',
    imgAlt: "Bar à glaces artisanales : bacs de glaces et toppings servis à la coupe",
    descCourt: "Pauses fraîches, lunch box pour les équipes réduites, bar à glaces pour le pot avant les congés.",
    desc: "En juillet et en août, les bureaux se vident à moitié et il fait chaud. Les formats changent : des pauses fraîches plutôt que des viennoiseries, des lunch box pour une petite équipe, un bar à glaces pour un pot avant les congés.",
    differentiateur: {
      label: 'Les petites équipes aussi',
      text: `Un minimum de commande de ${MINI} : une équipe de cinq personnes commande comme une équipe de cinquante.`,
    },
    enBref: "L'Écrin Traiteur livre l'été des pauses fraîches, des lunch box pour les équipes réduites et un bar à glaces artisanales pour le pot avant les congés.",
    prestations: ['pause', 'lunchbox', 'cocktail8'],
    exemples: [{ p: 'pause', n: 20 }, { p: 'lunchbox', n: 8 }],
    horsCatalogue: [],
    faq: [
      { q: "Livrez-vous les petites équipes en été ?", a: `Oui. Le minimum de commande est de ${MINI}, toute l'année : une lunch box pour cinq à huit personnes restées au bureau suffit.` },
    ],
    articles: ['livraison-fruits-bureau-entreprise', 'idees-afterwork-entreprise-formats-budget'],
    occasions: ['afterwork-entreprise', 'dejeuner-entreprise'],
    article: {
      titre: "L'été au bureau : pauses fraîches, afterworks et équipes réduites",
      sections: [
        {
          heading: "Ce qui change en été",
          texte: "Entre mi-juillet et fin août, une partie de l'équipe est en congés et le reste travaille par fortes chaleurs. Les plateaux de viennoiseries et les boissons chaudes passent moins bien. Ce qui marche : des fruits frais, des boissons froides en quantité, des formats individuels pour les petites équipes, et un dernier pot avant les départs.",
        },
        {
          heading: "Les pauses fraîches",
          texte: `Des brochettes de fruits frais, une panna cotta aux fruits rouges ou une verrine lemon curd. Côté boissons, une jarre de 10 litres d'infusion citron vert et gingembre ou passion, ou des eaux infusées aux fruits et herbes fraîches. Une pause gourmande démarre à ${px(PAUSE_DES)} par personne, soit ${pour(20, PAUSE_DES)} livraison comprise pour 20 personnes.`,
        },
        {
          heading: "Les équipes réduites",
          texte: `Pour cinq à huit personnes restées au bureau, la lunch box est le format le plus simple : un sandwich, une entrée et un dessert par personne, dès ${px(LUNCHBOX_DES)}. Pour huit personnes, comptez ${pour(8, LUNCHBOX_DES)} livraison comprise. Le minimum de commande est de ${MINI}, et la règle reste la même toute l'année : commande jusqu'à la veille 14h, livraison dès 6h30.`,
        },
        {
          heading: "Le pot avant les congés",
          texte: `Mi-juillet, avant les grands départs, un afterwork en terrasse rassemble l'équipe une dernière fois. Le bar à glaces artisanales s'installe sur place : vanille, chocolat, pistache, fraise, citron, café, avec coulis, caramel beurre salé et fruits rouges. Il se chiffre sur devis, installation et reprise du matériel compris. Pour le salé, un cocktail de 8 pièces à ${px(C8)} par personne.`,
        },
      ],
    },
  },
  {
    slug: 'rentree',
    mois: 'Septembre',
    nom: 'Rentrée',
    ctaNom: 'la rentrée',
    h1: 'Petit-déjeuner de rentrée en entreprise',
    seoTitle: 'Petit-déjeuner de rentrée en entreprise, Paris',
    metaDescription: `Petit-déjeuner de rentrée livré dès ${px(PDJ_DES)} par personne : viennoiseries, café bio, thé Mariage Frères, fruits. Livraison ${LIVR} à Paris, dès 6h30.`,
    img: '/prod-viennoiseries.webp',
    imgAlt: "Croissants et pains au chocolat pur beurre dressés sur une planche",
    descCourt: "Viennoiseries de boulangers partenaires, café bio, thé Mariage Frères et un message de bienvenue personnalisé.",
    desc: "Un retour au bureau qui donne le ton. Viennoiseries de boulanger, café bio et thé en thermos, fruits frais, et sur demande une plaque en chocolat avec le message de bienvenue. Une façon de dire que l'année qui commence compte.",
    differentiateur: {
      label: 'Un message de bienvenue',
      text: "Une plaque en chocolat avec un message ou le logo de l'entreprise, fabriquée sur commande : comptez quelques jours de plus.",
    },
    enBref: "L'Écrin Traiteur livre des petits-déjeuners de rentrée au bureau : viennoiseries pur beurre, café bio, thé Mariage Frères, jus et fruits frais.",
    prestations: ['pdj'],
    exemples: [{ p: 'pdj', n: 20 }, { p: 'pdj', n: 50 }],
    horsCatalogue: ['Plaque en chocolat personnalisée (message ou logo)'],
    faq: [
      { q: 'Combien de café prévoir pour 20 personnes ?', a: "Un thermos d'un litre sert six à huit tasses. Pour vingt personnes qui reviennent de congés, prévoyez deux à trois thermos de café et un de thé." },
    ],
    articles: ['traiteur-rentree-onboarding-entreprise-paris', 'petit-dejeuner-rentree-septembre-entreprise', 'boissons-petit-dejeuner-entreprise', 'petit-dejeuner-entreprise-paris'],
    occasions: ['petit-dejeuner-entreprise', 'petit-dejeuner-codir'],
    article: {
      titre: "Petit-déjeuner de rentrée en entreprise : comment bien accueillir vos équipes ?",
      sections: [
        {
          heading: "Septembre, un moment charnière",
          texte: "Après l'été, vos équipes reviennent avec un regard neuf sur leur travail. Les premières journées de rentrée donnent le ton de l'année. Un petit-déjeuner de rentrée soigné envoie un message clair : l'entreprise pense à ses équipes.",
        },
        {
          heading: "Ce qui fait un bon petit-déjeuner de rentrée",
          texte: "Des viennoiseries d'une vraie boulangerie, pur beurre, façonnées le matin même. Un café bio en thermos et un thé Mariage Frères. Et un élément de personnalisation, comme une plaque en chocolat avec le message de l'équipe : quelque chose qui marque le retour comme un moment voulu.",
        },
        {
          heading: "Les nouvelles recrues",
          texte: "Septembre est souvent une période d'arrivées. Un petit-déjeuner de rentrée est l'occasion d'intégrer les nouveaux arrivants : un moment informel autour d'un café permet les présentations que les réunions ne créent pas. Si vous avez des arrivées en septembre, organisez-le la première semaine du mois.",
        },
        {
          heading: "Combien prévoir par personne",
          texte: "Deux viennoiseries par personne si elles sont servies seules, une et demie s'il y a aussi des fruits et des yaourts. Un thermos fait un litre, soit six à huit tasses : pour vingt personnes, prévoyez deux à trois thermos de café, pas un seul. Comptez un litre de jus pour six à sept verres, soit deux litres pour vingt participants.",
        },
        {
          heading: "Le budget",
          texte: `Le petit-déjeuner de rentrée en formule Classique démarre à ${px(PDJ_DES)} par personne : viennoiseries, corbeille de fruits frais découpés, café et jus, soit ${pour(20, PDJ_DES)} livraison comprise pour 20 personnes. Le petit-déjeuner complet se chiffre sur devis, comme la plaque en chocolat personnalisée. La livraison est de ${LIVR} à Paris et dans les communes proches, le minimum de commande de ${MINI}.`,
        },
        {
          heading: "Quand commander, et à quelle heure servir",
          texte: `${REGLE} Pour la plaque en chocolat, fabriquée sur commande, comptez quelques jours de plus. Le mardi ou le mercredi matin de la première semaine complète de septembre, entre 8h30 et 9h30, est le meilleur moment. Prévoyez 45 minutes à une heure.`,
        },
      ],
    },
  },
  {
    slug: 'journee-mondiale-du-cafe',
    mois: 'Octobre',
    nom: 'Journée mondiale du café',
    ctaNom: 'la Journée mondiale du café',
    h1: 'Journée mondiale du café : un barista au bureau',
    seoTitle: 'Journée mondiale du café : barista en entreprise',
    metaDescription: `Le 1er octobre, un barista dans vos bureaux ou des thermos de café avec madeleines et cookies. Petit-déjeuner dès ${px(PDJ_DES)} par personne, livré à Paris.`,
    img: '/prod-cafe.webp',
    imgAlt: "Barista préparant des cafés sur un comptoir installé en entreprise",
    descCourt: "Un barista dans vos bureaux, ou des thermos de café avec madeleines et cookies. Pour le 1er octobre.",
    desc: "Le 1er octobre, c'est la Journée mondiale du café. Au bureau, la boisson la plus bue de la journée mérite un moment à elle. Un barista prépare espresso, cappuccino, latte et flat white à la demande. Pour un format plus simple, des thermos de café avec madeleines, cookies et brioche babka.",
    differentiateur: {
      label: 'Le barista et sa machine',
      text: "Chacun commande sa boisson, préparée devant lui, avec des laits végétaux. Sur devis.",
    },
    enBref: "L'Écrin Traiteur installe un barista dans vos bureaux pour la Journée mondiale du café, ou livre des thermos de café bio avec madeleines et cookies.",
    prestations: ['pdj', 'pause'],
    exemples: [{ p: 'pdj', n: 20 }, { p: 'pause', n: 20 }],
    horsCatalogue: [],
    faq: [
      { q: 'Combien de thermos de café pour 20 personnes ?', a: "Un thermos d'un litre sert six à huit tasses. Pour vingt personnes, prévoyez trois thermos de café et un de thé Mariage Frères." },
    ],
    articles: ['meilleur-the-cafe-reunion-entreprise-paris'],
    occasions: ['petit-dejeuner-entreprise', 'accueil-client'],
    article: {
      titre: "Journée mondiale du café : un barista au bureau, le 1er octobre",
      sections: [
        {
          heading: "La Journée mondiale du café en bref",
          texte: `La Journée mondiale du café a lieu chaque 1er octobre, à l'initiative de l'Organisation internationale du café. La prochaine tombe le {{date}}. Au bureau, c'est un prétexte simple pour un petit-déjeuner autour du café : la formule Classique est à ${px(PDJ_DES)} par personne, soit ${pour(20, PDJ_DES)} livraison comprise pour 20 personnes.`,
        },
        {
          heading: "Un barista dans vos locaux",
          texte: "Le format qui marque : un barista installe sa machine et prépare à la demande espresso, cappuccino, latte, flat white et thés, avec des laits végétaux. La prestation se chiffre sur devis selon l'effectif, la durée et l'accès électrique ; installation et démontage sont compris. Pour une journée entière en libre-service, la location d'une machine expresso professionnelle est une alternative.",
        },
        {
          heading: "Combien de café prévoir",
          texte: "Si vous restez sur des thermos : un thermos d'un litre sert six à huit tasses, et beaucoup reviennent pour une deuxième tasse. Pour vingt personnes, prévoyez trois thermos de café et un de thé Mariage Frères.",
        },
        {
          heading: "Ce qui accompagne le café",
          texte: `Des madeleines cuites du jour, des cookies signés Laura Todd, une brioche babka au chocolat tranchée, un cake marbré maison. Des pièces qui se tiennent d'une main, une tasse dans l'autre. ${REGLE}`,
        },
      ],
    },
  },
  {
    slug: 'octobre-rose',
    mois: 'Octobre',
    nom: 'Octobre Rose',
    ctaNom: 'Octobre Rose',
    h1: 'Octobre Rose en entreprise',
    seoTitle: 'Octobre Rose en entreprise : goûter solidaire, Paris',
    metaDescription: `Octobre Rose au bureau : madeleines roses, macarons, cake framboise. 1 € reversé par convive sur toutes nos commandes d'octobre. Dès ${px(PAUSE_DES)} par personne.`,
    img: '/octobre-rose-buffet-entreprise.webp',
    imgPos: 'center 62%',
    imgAlt: "Buffet Octobre Rose livré en entreprise par L'Écrin Traiteur : viennoiseries, madeleines roses, brochettes de fruits et décoration rose",
    theme: 'rose',
    descCourt: "Madeleines roses, macarons, cake framboise et jus pomme framboise. 1 € reversé par convive sur toutes nos commandes d'octobre.",
    desc: "Un goûter pour sensibiliser vos équipes au dépistage du cancer du sein. Madeleines roses, macarons, cake et tarte aux framboises. Et un engagement chiffré : sur toutes nos commandes livrées en octobre, nous reversons 1 € par convive à la recherche contre le cancer du sein.",
    differentiateur: {
      label: '1 € reversé par convive',
      text: "Sur toutes nos commandes d'octobre, pas seulement sur les goûters roses. Le montant total sera publié sur cette page début novembre.",
    },
    enBref: "En octobre, L'Écrin Traiteur reverse 1 € par convive servi à la recherche contre le cancer du sein, sur toutes ses commandes, et livre des goûters roses au bureau : madeleines, macarons, cake framboise.",
    prestations: ['pause', 'pdj'],
    exemples: [{ p: 'pause', n: 20 }, { p: 'pdj', n: 40 }],
    horsCatalogue: ['Emballages avec ruban rose', 'Smoothie fruits rouges', 'Pétillant rosé sans alcool, pour trinquer'],
    bilan: { annee: 2026, montant: null, beneficiaire: null },
    faq: [
      { q: 'Le don concerne-t-il seulement les goûters roses ?', a: "Non. En octobre, nous reversons 1 € par convive servi sur toutes nos commandes : un petit-déjeuner de 40 personnes, ce sont 40 € de don. Le reçu du don est disponible sur demande." },
    ],
    articles: ['octobre-rose-entreprise-paris', 'gouter-octobre-rose-entreprise-paris'],
    occasions: ['gouter-entreprise', 'petit-dejeuner-entreprise'],
    article: {
      titre: "Octobre Rose en entreprise : comment s'engager concrètement ?",
      sections: [
        {
          heading: "Pourquoi agir en entreprise ?",
          texte: "Octobre Rose est la campagne annuelle de sensibilisation au dépistage du cancer du sein. En entreprise, s'y associer montre aux équipes que l'organisation est attentive à des sujets qui dépassent le travail quotidien. Vos équipes sont concernées, personnellement ou par leurs proches. Un geste collectif, même simple, crée un espace de solidarité.",
        },
        {
          heading: "Un goûter solidaire",
          texte: "L'idée est simple : une pause gourmande aux couleurs de la cause. Madeleines roses, macarons, cake et tarte aux framboises, jus pomme framboise. Ce format permet d'aborder un sujet sérieux dans un moment convivial, sans tomber dans un registre pesant.",
        },
        {
          heading: "Le rendre cohérent avec la cause",
          texte: "Un goûter Octobre Rose prend son sens quand il est accompagné d'une information concrète. Affichez les recommandations de dépistage, proposez un lien vers les ressources de la Ligue contre le cancer, encouragez vos collaboratrices à prendre rendez-vous. Le goûter crée l'occasion, l'information fait le reste.",
        },
        {
          heading: "Les détails",
          texte: "Des madeleines avec un emballage rose aux couleurs de votre entreprise, un ruban sur chaque conditionnement, une présentation soignée. Communiquez l'événement en avance sur vos canaux internes pour que vos équipes l'anticipent.",
        },
        {
          heading: "Notre engagement : 1 € reversé par convive",
          texte: "Pendant tout le mois d'octobre, nous reversons 1 € par convive servi à la recherche contre le cancer du sein. Toutes les commandes comptent, pas seulement les goûters roses : un petit-déjeuner de 40 personnes, ce sont 40 € de don. Le montant total sera publié sur cette page début novembre, et le reçu du don est disponible sur demande.",
        },
      ],
    },
  },
  {
    slug: 'semaine-du-gout',
    mois: 'Octobre',
    nom: 'Semaine du goût',
    ctaNom: 'la Semaine du goût',
    h1: 'Semaine du goût : une dégustation au bureau',
    seoTitle: 'Semaine du goût en entreprise : dégustation, Paris',
    metaDescription: `Dégustation au bureau pour la Semaine du goût : atelier fromages, jus Alain Milliat à l'aveugle, pâtisseries d'artisans. Pause dès ${px(PAUSE_DES)} par personne.`,
    img: '/prod-atelier-fromages.webp',
    imgAlt: "Atelier fromages affinés : fromages, pains artisanaux, fruits frais et fruits secs dressés devant les invités",
    descCourt: "Une dégustation au bureau : fromages affinés, jus Alain Milliat, pâtisseries d'artisans. Pour la Semaine du goût, mi-octobre.",
    desc: "La Semaine du goût revient chaque année à la mi-octobre. Au bureau, c'est l'occasion d'une vraie dégustation plutôt que d'un buffet de plus : un atelier fromages affinés, une comparaison de jus Alain Milliat, des pâtisseries signées par des artisans. On goûte, on compare, on en parle.",
    differentiateur: {
      label: 'Nos artisans',
      text: "Macarons signés Pierre Morel, choux signés Philippe Urraca, Meilleur Ouvrier de France, cookies signés Laura Todd, jus Alain Milliat. Des noms à faire découvrir.",
    },
    enBref: "L'Écrin Traiteur organise des dégustations au bureau pour la Semaine du goût : atelier fromages affinés, jus Alain Milliat comparés à l'aveugle, pâtisseries d'artisans.",
    prestations: ['pause'],
    exemples: [{ p: 'pause', n: 20 }, { p: 'pause', n: 50 }],
    horsCatalogue: [],
    faq: [
      { q: 'Comment organiser une dégustation de jus au bureau ?', a: "Alignez quatre ou cinq jus et nectars Alain Milliat, faites-les goûter à l'aveugle dans de petits verres, puis révélez les noms. Un litre de chaque fait le tour d'une équipe de vingt personnes." },
    ],
    articles: ['meilleures-patisseries-gouter-entreprise-paris', 'jus-alain-milliat-entreprise-paris'],
    occasions: ['gouter-entreprise', 'team-building'],
    article: {
      titre: "Semaine du goût en entreprise : organiser une dégustation au bureau",
      sections: [
        {
          heading: "La Semaine du goût en bref",
          texte: `La Semaine du goût a lieu chaque année à la mi-octobre et invite à découvrir des produits et des savoir-faire. Au bureau, une pause dégustation démarre à ${px(PAUSE_DES)} par personne, soit ${pour(20, PAUSE_DES)} livraison comprise pour 20 personnes ; l'atelier fromages se chiffre sur devis.`,
        },
        {
          heading: "Une dégustation de jus",
          texte: "Le format le plus simple : aligner quatre ou cinq jus et nectars Alain Milliat, pomme, orange, abricot, pêche, tomate, avec le jus de pomme du Verger des Yvelines, et les faire goûter à l'aveugle. Chacun note ses préférences, on révèle les noms à la fin. De petits verres suffisent : un litre de chaque fait le tour d'une équipe de vingt personnes.",
        },
        {
          heading: "L'atelier fromages affinés",
          texte: "Pour aller plus loin, l'atelier fromages s'installe dans vos locaux : comté, chèvres, pâtes persillées et croûtes fleuries coupés à la demande et expliqués à ceux qui veulent en savoir plus, avec pains artisanaux, miel et fruits de saison. Installation et démontage compris.",
        },
        {
          heading: "Les douceurs d'artisans",
          texte: `Pour le sucré, misez sur des pièces signées : les macarons de Pierre Morel, coques à la meringue italienne, les choux à la crème de Philippe Urraca, Meilleur Ouvrier de France, les cookies très fins de Laura Todd. ${REGLE}`,
        },
      ],
    },
  },
  {
    slug: 'halloween',
    mois: 'Octobre',
    nom: 'Halloween',
    ctaNom: 'Halloween',
    h1: 'Halloween en entreprise : goûter ou afterwork',
    seoTitle: 'Traiteur Halloween en entreprise à Paris',
    metaDescription: `Goûter d'Halloween au bureau dès ${px(PAUSE_DES)} par personne : macaron noir, madeleine citrouille, cookies. Afterwork dès ${px(C8)}. Livré à Paris.`,
    img: '/halloween-macaron-potiron.webp',
    imgAlt: "Macaron noir d'Halloween, coque au cacao et cœur vanille potiron épicé",
    imgPos: 'center 42%',
    descCourt: "Le macaron noir vanille cœur potiron épicé, la madeleine citrouille, des cookies maison, ou un cocktail sans alcool en afterwork.",
    desc: "Un goûter qui sort de l'ordinaire, mené par le macaron noir à la vanille et au cœur de potiron épicé. Autour : la madeleine citrouille au chocolat blanc et à l'orange, des cookies, des brochettes de fruits frais. Ou un cocktail de 8 pièces en afterwork.",
    differentiateur: {
      label: 'Le macaron noir de la saison',
      text: "Signé Pierre Morel : une coque au cacao, une ganache vanille et un cœur de potiron à la cannelle. Il se sert tel quel sur un plateau de goûter, ou en fin de cocktail.",
    },
    enBref: "L'Écrin Traiteur livre des goûters d'Halloween au bureau, avec le macaron noir au potiron et la madeleine citrouille, et des afterworks orange et noir sans alcool.",
    prestations: ['pause', 'cocktail8'],
    exemples: [{ p: 'pause', n: 20 }, { p: 'cocktail8', n: 30 }],
    horsCatalogue: ['Décoration de table Halloween, 49 € HT'],
    faq: [
      { q: 'Faut-il obliger les déguisements ?', a: "Non. Proposez-les comme une option, jamais comme une obligation. Un petit concours avec un prix crée de l'animation sans forcer personne." },
    ],
    articles: ['organiser-halloween-bureau-entreprise-date-programme-budget', 'halloween-entreprise-paris', 'afterwork-halloween-entreprise-cocktail-orange-noir-budget', 'desserts-halloween-bureau-idees-sans-porc-prix', 'halloween-bureau-regimes-alimentaires-halal-vegetarien-sans-gluten'],
    occasions: ['gouter-entreprise', 'afterwork-entreprise'],
    article: {
      titre: "Halloween en entreprise : et si on osait ?",
      sections: [
        {
          heading: "Halloween en bref",
          texte: `Le prochain Halloween tombe le {{date}} : fêtez-le le {{conseil}}. Une pause gourmande revient à partir de ${px(PAUSE_DES)} par personne, un cocktail de 8 pièces à ${px(C8)} par personne, livraison de ${LIVR} en plus. Commande jusqu'à la veille à 14h, livraison dès 6h30. Le cocktail salé est halal et sans porc, et toute la carte est sans alcool.`,
        },
        {
          heading: "Le macaron noir, vanille et cœur potiron épicé",
          texte: "Signé Pierre Morel, pâtissier à La Gacilly : une coque au cacao, presque noire, une ganache à la vanille, et au centre un cœur de potiron relevé à la cannelle. Le potiron apporte une rondeur qui équilibre la vanille, et l'épice réveille l'ensemble. Il se sert tel quel sur un plateau de goûter, ou en fin de cocktail.",
        },
        {
          heading: "La madeleine citrouille, chocolat blanc et orange",
          texte: "Une madeleine moelleuse au chocolat blanc, relevée d'une touche d'orange, moulée en citrouille et dessinée au chocolat noir. Elle se tient d'une main, se partage sans couverts, et fait son effet sur une table de goûter sans qu'on ait à décorer la salle. Elle arrive prête, ne fond pas, et attend l'heure de la pause.",
          img: '/halloween-madeleine-potiron.webp',
          imgAlt: "Madeleine d'Halloween en forme de citrouille, chocolat blanc et orange, visage dessiné au chocolat noir",
        },
        {
          heading: "Ce qui marche, et ce qu'il vaut mieux éviter",
          texte: "L'erreur la plus courante : poser des bonbons de supermarché sur une table et appeler ça un événement. Ce qui marche, c'est un vrai goûter : des madeleines aux couleurs de la fête, des cookies, des fruits frais, une table cohérente. Vos équipes voient tout de suite si le moment a été préparé.",
        },
        {
          heading: "Faut-il obliger les déguisements ?",
          texte: "Non, et c'est souvent contre-productif. Une partie de vos équipes sera enthousiaste, une autre moins. Proposez le déguisement comme option, jamais comme obligation. Un concours avec un petit prix crée de l'animation sans forcer personne.",
        },
        {
          heading: "Budget et timing",
          texte: `Une pause gourmande démarre à ${px(PAUSE_DES)} par personne, soit ${pour(20, PAUSE_DES)} livraison comprise pour 20 personnes ; le petit-déjeuner Classique est à ${px(PDJ_DES)} et le cocktail de 8 pièces à ${px(C8)} par personne. Organisez-le en milieu d'après-midi, le {{conseil}}. Trente à quarante-cinq minutes suffisent pour que tout le monde participe.`,
        },
      ],
    },
  },
  {
    slug: 'movember',
    mois: 'Novembre',
    nom: 'Movember',
    ctaNom: 'Movember',
    h1: 'Movember en entreprise : lancement et clôture au bureau',
    seoTitle: 'Traiteur Movember en entreprise à Paris',
    metaDescription: `Movember au bureau : petit-déjeuner de lancement et goûter de clôture, dès ${px(PAUSE_DES)} par personne, livraison ${LIVR}. Livré dès 6h30 à Paris.`,
    img: '/prod-cake-marbre.webp',
    imgAlt: "Cake marbré maison, vanille et chocolat, tranché sur une planche en bois : un goûter livré en entreprise par L'Écrin Traiteur",
    descCourt: `Lancement et clôture de Movember au bureau : petit-déjeuner et goûter livrés dès ${px(PAUSE_DES)} par personne.`,
    desc: `Movember dure tout le mois de novembre. Pour le lancement, un petit-déjeuner le premier jour ouvré du mois ; pour la clôture, un goûter avec remise des prix la dernière semaine. Livré dès 6h30 à Paris et en Île-de-France, à partir de ${px(PAUSE_DES)} par personne, livraison de ${LIVR} en plus.`,
    differentiateur: {
      label: 'Deux rendez-vous suffisent',
      text: "Un lancement en début de mois et une clôture en fin de mois. Les dons se collectent sur la page de votre équipe Movember, pas auprès du traiteur.",
    },
    enBref: "L'Écrin Traiteur livre le petit-déjeuner de lancement et le goûter de clôture de Movember au bureau.",
    prestations: ['pause', 'pdj'],
    exemples: [{ p: 'pdj', n: 20 }, { p: 'pause', n: 20 }],
    horsCatalogue: [],
    faq: [
      { q: 'Peut-on faire un don à Movember via la facture du traiteur ?', a: "Non. Les dons se collectent sur la page de l'équipe Movember. La facture couvre uniquement le petit-déjeuner ou le goûter livré." },
    ],
    articles: ['movember-entreprise-organiser-petit-dejeuner-gouter-bureau'],
    occasions: ['petit-dejeuner-entreprise', 'gouter-entreprise'],
    article: {
      titre: "Movember en entreprise : deux rendez-vous suffisent",
      sections: [
        {
          heading: "Movember en bref",
          texte: `Movember se vit tout le mois de novembre : les participants démarrent rasés le 1er novembre et laissent pousser une moustache. Au bureau, comptez un petit-déjeuner de lancement le premier jour ouvré du mois, à ${px(PDJ_DES)} par personne, et un goûter de clôture la dernière semaine, à partir de ${px(PAUSE_DES)} par personne. Pour 20 personnes, cela fait ${pour(20, PDJ_DES)} et ${pour(20, PAUSE_DES)}, livraison comprise à chaque fois.`,
        },
        {
          heading: "Ce que soutient Movember",
          texte: "Movember soutient trois causes : la santé mentale et la prévention du suicide, le cancer de la prostate et le cancer des testicules. Une entreprise peut s'inscrire en solo, créer une équipe ou lancer une compétition entre plusieurs bureaux. Les dons se collectent sur la page de l'équipe Movember, pas auprès du traiteur : la facture couvre uniquement le petit-déjeuner ou le goûter livré.",
        },
        {
          heading: "Quelles actions organiser au bureau ?",
          texte: "Le guide de Movember propose un rasage collectif pour le lancement, un quiz avec les entreprises voisines, des discussions santé, une boîte à dons dans la salle de pause et une remise des prix en fin de mois. Ceux qui ne veulent pas de moustache peuvent marcher ou courir 60 km dans le mois, ou inventer leur propre défi. La participation reste libre.",
        },
        {
          heading: "Commande et régimes",
          texte: `${REGLE} Précisez à la demande de devis les régimes de l'équipe : végétarien, vegan, sans gluten. Les madeleines se personnalisent aux couleurs de l'événement, sur devis.`,
        },
      ],
    },
  },
  {
    slug: 'thanksgiving',
    mois: 'Novembre',
    nom: 'Thanksgiving',
    ctaNom: 'Thanksgiving',
    h1: "Thanksgiving à Paris : le repas d'équipe",
    seoTitle: "Thanksgiving en entreprise à Paris : traiteur",
    metaDescription: `Thanksgiving pour les équipes américaines à Paris : cocktail dînatoire dès ${px(C8)} par personne, buffets à partager, atelier bagels, carrot cake.`,
    img: '/prod-carrot-cake.webp',
    imgAlt: "Carrot cake maison tranché sur une planche en bois",
    descCourt: "Pour les entreprises américaines à Paris : buffet à partager, cocktail dînatoire, atelier bagels, carrot cake.",
    desc: "Thanksgiving tombe le quatrième jeudi de novembre. Pour une entreprise américaine à Paris, c'est le repas d'équipe de l'automne. Un buffet à partager ou un cocktail dînatoire, un atelier bagels de New York, et en dessert un carrot cake et un cake poire maison.",
    differentiateur: {
      label: 'Format au choix',
      text: "Déjeuner à partager, cocktail dînatoire en fin de journée ou plateaux repas. Le salé est halal et sans porc, et tout est sans alcool.",
    },
    enBref: "L'Écrin Traiteur livre le repas de Thanksgiving des équipes américaines à Paris : buffets à partager, cocktail dînatoire, atelier bagels et desserts d'automne.",
    prestations: ['cocktail12', 'cocktail8', 'plateau'],
    exemples: [{ p: 'cocktail12', n: 40 }, { p: 'plateau', n: 20 }],
    halal: true,
    horsCatalogue: [],
    faq: [
      { q: 'Servez-vous une dinde rôtie ?', a: "Non, la dinde entière et la tarte au potiron ne sont pas à notre carte. Nous proposons des buffets à partager, un cocktail dînatoire et un atelier bagels, avec carrot cake et cake poire en dessert." },
    ],
    articles: ['menu-inclusif-entreprise-halal-vegetarien-sans-gluten'],
    occasions: ['dejeuner-entreprise', 'cocktail-entreprise'],
    article: {
      titre: "Thanksgiving à Paris : le repas d'équipe des entreprises américaines",
      sections: [
        {
          heading: "Thanksgiving en bref",
          texte: `Thanksgiving se fête le quatrième jeudi de novembre ; le prochain tombe le {{date}}. Aux États-Unis, c'est un jour férié ; à Paris, les filiales et les équipes américaines le marquent souvent par un déjeuner ou un cocktail en fin de journée. Un cocktail de 12 pièces revient à ${px(C12)} par personne, soit ${pour(40, C12)} livraison comprise pour 40 personnes.`,
        },
        {
          heading: "Ce que nous servons",
          texte: `La dinde rôtie entière et la tarte au potiron ne sont pas à notre carte. Nous proposons ce que nous faisons bien : des buffets à partager, un cocktail dînatoire de 12 ou 16 pièces, des plateaux repas dès ${px(PLATEAU_DES)}. Pour une touche américaine, l'atelier bagels de New York garnit les bagels devant vos invités : saumon et cream cheese, poulet César, avocat et feta.`,
        },
        {
          heading: "Le dessert d'automne",
          texte: "Pour finir, le carrot cake maison, carotte râpée et épices douces, et le cake poire maison, servis tranchés sur plateau. Avec un thermos de café et du jus de pomme du Verger, produit dans les Yvelines, c'est un dessert de saison qui rappelle l'automne.",
        },
        {
          heading: "Commande et organisation",
          texte: `${REGLE} Un déjeuner entre 12h30 et 14h, ou un cocktail entre 17h et 19h, fonctionne bien. Le salé est halal et sans porc, tout est sans alcool : précisez seulement les régimes végétariens ou sans gluten de l'équipe.`,
        },
      ],
    },
  },
  {
    slug: 'noel',
    mois: 'Décembre',
    nom: 'Noël',
    ctaNom: 'Noël',
    h1: 'Repas de Noël en entreprise : cocktail, buffet ou goûter',
    seoTitle: "Traiteur Noël en entreprise à Paris",
    metaDescription: `Noël au bureau : cocktail dînatoire dès ${px(C8)} par personne, plateau de saumon, panettone, goûter de fêtes. Livré à Paris et en Île-de-France.`,
    img: '/arbre-de-noel-hero.webp',
    imgAlt: "Buffet de Noël dressé devant un sapin décoré : pâtisseries, bonbonnières et paquets cadeaux",
    descCourt: "Cocktail dînatoire, plateau de saumon, panettone et gâteaux à partager. Pour le repas ou le goûter de Noël de l'équipe.",
    desc: "Le moment le plus attendu de l'année. Un cocktail dînatoire de fête, un plateau de saumon fumé et gravlax, un panettone artisanal et des gâteaux à partager, des viennoiseries pour le petit-déjeuner de Noël. Un buffet festif ou des plateaux repas selon votre format et votre effectif.",
    differentiateur: {
      label: 'Format au choix',
      text: "Cocktail dînatoire, goûter de fêtes ou plateaux repas de Noël. On adapte la formule à votre effectif et à votre budget.",
    },
    enBref: "L'Écrin Traiteur livre les repas et goûters de Noël d'entreprise : cocktail dînatoire de fête, plateau de saumon, panettone et gâteaux à partager, sans alcool.",
    prestations: ['cocktail8', 'cocktail12', 'cocktail16', 'pause', 'plateau'],
    exemples: [{ p: 'cocktail12', n: 30 }, { p: 'pause', n: 40 }],
    halal: true,
    horsCatalogue: [
      'Bûche roulée de Noël à partager, biscuit chocolat et praliné, 8 à 10 parts : 54,90 € HT',
      'Macarons de Noël, framboise et épices : 2,65 € HT la pièce',
      'Sablés de Noël décorés, pain d\'épices et glaçage royal : 1,60 € HT la pièce',
      'Cupcakes de Noël, décor sapin et flocons, plateau de 25 : 77,50 € HT',
      'Chocolats de Noël, pralinés et truffes : 0,90 € HT la pièce',
      'Bar à chocolat chaud et ses toppings (chantilly, guimauves, copeaux, cannelle) : 59 € HT',
      'Pétillant rosé sans alcool, pour trinquer',
      'Décoration de Noël du buffet, chemin de table, pommes de pin et guirlande : 49 € HT',
    ],
    faq: [
      { q: 'Quand commander le repas de Noël de l\'entreprise ?', a: "La commande reste possible jusqu'à la veille 14h, mais les dates de décembre se remplissent vite : validez le budget, l'effectif et l'adresse dès novembre, surtout au-delà de 50 personnes." },
    ],
    articles: ['menu-noel-livre-entreprise-paris', 'budget-repas-noel-entreprise', 'soiree-fin-annee-entreprise-paris', 'petit-dejeuner-noel-bureau-entreprise', 'arbre-de-noel-entreprise-cse-paris', 'bonbonniere-noel-entreprise-paris'],
    occasions: ['cocktail-entreprise', 'afterwork-entreprise'],
    article: {
      titre: "Repas de Noël en entreprise : comment bien faire les choses ?",
      sections: [
        {
          heading: "Un moment qui compte pour l'équipe",
          texte: "Le repas de Noël est souvent le moment d'entreprise le plus attendu de l'année, et celui où les attentes sont les plus élevées. Un repas de Noël réussi laisse un souvenir collectif qui renforce les liens d'équipe bien au-delà de décembre. Il mérite d'être préparé, pas commandé en urgence le 20 décembre.",
        },
        {
          heading: "Cocktail dînatoire, goûter ou plateaux repas ?",
          texte: "Le cocktail dînatoire est la formule la plus conviviale pour une équipe présente : tout le monde circule et se sert à son rythme. Le goûter de fêtes, avec panettone et gâteaux à partager, convient à une fin d'après-midi. Le plateau repas individuel convient aux équipes en télétravail ou réparties sur plusieurs sites.",
        },
        {
          heading: "Le menu",
          texte: `Un plateau de saumon fumé et gravlax avec blinis et crème citron-aneth pour commencer, des bouchées chaudes de fête, puis un panettone artisanal et un gâteau roulé à partager. Sur demande, nous ajoutons foie gras, bûche artisanale et chocolats de Noël. Un cocktail de 12 pièces revient à ${px(C12)} par personne. Côté boissons, tout sans alcool : un Chardonnay Blanc de Blancs 0 % pour trinquer et des jus Alain Milliat.`,
        },
        {
          heading: "Anticiper",
          texte: `${REGLE} Anticiper sert surtout à valider le budget, l'effectif et les adresses en interne, et à laisser le temps de choisir le menu. Bloquez la date dans les agendas dès que le format est décidé.`,
        },
      ],
    },
  },
]

/* Les deux sources réunies : la structure (date, produits) de l'index, les textes ici. */
export const evenements = EVENEMENTS_INDEX.map(i => {
  const t = TEXTES.find(x => x.slug === i.slug)
  if (!t) throw new Error(`evenementsData : textes manquants pour « ${i.slug} »`)
  return { ...i, ...t, maj: t.maj || MAJ }
})
