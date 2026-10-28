/*
  Pages thématiques Healthy (/traiteur-healthy) et Éco-responsable
  (/traiteur-eco-responsable), FR et /en. CÔTÉ SERVEUR.

  Refonte du 23/10/2026 (audit design, chantier 10) sur le modèle de la page
  halal : la question posée en clair, un tableau de prix calculés, ce qui est
  sur la carte (fiches cliquables), les faits, une FAQ affichée et balisée.

  Affirmations vérifiées le 23/10/2026 avec la note du coffre « Ce que le site
  et les papiers promettent (12 oct 2026) » : plus de « yaourts de la Ferme de
  Viltain », « café bio », « circuit court » général, « zéro arôme
  artificiel » ni « certifié PEFC », qui n'étaient pas prouvés ou étaient
  contredits par les achats. Plus de plateau de fruits frais (produit arrêté
  le 19/10/2026) : les fruits sont des brochettes et des corbeilles.
  Prix : lib/prixEntree.js, lib/calculsPrix.js et les fiches.
*/
import { PDJ_DES, PAUSE_DES, LUNCHBOX_DES, PLATEAU_DES, MINIMUM, RECUP, LIV_RECUP_PROCHE, euroFr, euroEn } from './prixEntree'
import { LIV } from './calculsPrix'
import { resoudreProduits } from './evenementsLiens'

const ht = (x, en) => (en ? `${euroEn(x)} excl. VAT` : `${euroFr(x)} HT`)
const pp = (en) => (en ? 'per person' : 'par personne')
const livre = (n, prix) => n * prix + LIV

const P = '/creations/petits-dejeuners-et-pauses/'

const THEMES = {
  healthy: {
    chemin: '/traiteur-healthy',
    img: '/plateau-brochettes-fruits-v2.webp',
    produits: [`${P}brochettes-fruits`, `${P}panier-fruits`, `${P}yaourt-granola`, `${P}compote-pomme`, `${P}verrine-salade-fruits`, `${P}banana-bread-sans-gluten`, '/creations/plateaux-repas/e1', '/creations/plateaux-repas/e3'],
    devis: 'Petit-déjeuner',
    fr: {
      fil: 'Traiteur healthy',
      surtitre: "Traiteur d'entreprise",
      h1: 'Traiteur healthy, végétarien et vegan en entreprise',
      chapo: "Brochettes de fruits, yaourts, compotes, plateaux repas végétariens et options sans gluten, livrés dès 6h30 à Paris et en Île-de-France.",
      faits: `Petit-déjeuner dès ${ht(PDJ_DES)} par personne · plateau végétarien dès ${ht(PLATEAU_DES)} · commande jusqu'à la veille 10h`,
      alt: "Plateau de brochettes de fruits frais L'Écrin Traiteur",
      questionTitre: 'Peut-on manger léger avec un traiteur d\'entreprise ?',
      reponse: `Oui. Sur la carte de L'Écrin Traiteur, le léger passe par des produits précis : brochettes de fruits frais (vegan et sans gluten), corbeilles de fruits de saison, yaourts au granola, compotes, verrines de salade de fruits, banana bread et pain au maïs sans gluten, et trois plateaux repas végétariens. Un petit-déjeuner Classique coûte ${ht(PDJ_DES)} par personne, un plateau repas végétarien ${ht(PLATEAU_DES)}, livraison ${ht(LIV)} à Paris et dans les communes proches.`,
      prixTitre: 'Combien coûte une formule plus légère ?',
      entetes: ['Prestation', 'Ce qui est compris', 'Prix HT par personne', 'Pour 20 personnes, livré'],
      lignes: [
        ['Petit-déjeuner Classique', 'viennoiseries, jus Alain Milliat, café, fruits frais', PDJ_DES],
        ['Pause gourmande', 'une pâtisserie et une boisson', PAUSE_DES],
        ['Lunch box végétarienne', 'sandwich, entrée et dessert', LUNCHBOX_DES],
        ['Plateau repas végétarien', 'entrée, plat, dessert et pain', PLATEAU_DES],
      ],
      note: `Livraison ${ht(LIV)} comprise à Paris et dans les communes proches. Minimum de commande ${ht(MINIMUM)}.`,
      carteTitre: 'Sur la carte',
      carteIntro: 'Chaque produit renvoie à sa fiche, avec sa composition, son prix et ses régimes.',
      faitsTitre: 'Régimes : ce que nous faisons',
      faitsListe: [
        ['Végétarien', 'La Solaire, La Provençale et La Potagère en plateaux repas, La Fermière en lunch box. Comptez environ un tiers de végétarien quand vous ne connaissez pas les préférences.'],
        ['Vegan', 'brochettes de fruits, corbeilles de fruits, compotes et verrines de salade de fruits ; les autres adaptations vegan se demandent au devis.'],
        ['Sans gluten', "banana bread et pain au maïs sans gluten, fruits ; l'atelier manipule de la farine, des traces restent possibles."],
        ['Halal', 'tout le salé est halal et sans porc, sans alcool, sans supplément.'],
        ['Au devis', 'indiquez le nombre de personnes par régime : la commande est répartie et étiquetée.'],
      ],
      faq: [
        { q: 'Proposez-vous des options healthy au bureau ?', a: "Oui : brochettes de fruits frais, corbeilles de fruits de saison, yaourts au granola, compotes, verrines de salade de fruits, plateaux repas végétariens. Elles se commandent seules ou à côté d'un petit-déjeuner classique." },
        { q: 'Combien coûte un petit-déjeuner plus léger ?', a: `La formule Classique est à ${ht(PDJ_DES)} par personne, soit ${ht(livre(20, PDJ_DES))} livrés pour 20 personnes. Remplacer une partie des viennoiseries par des brochettes de fruits ou des yaourts se chiffre au devis, avec les prix des fiches.` },
        { q: 'Avez-vous des plateaux repas végétariens ?', a: `Oui, trois : La Solaire, La Provençale et La Potagère, à ${ht(PLATEAU_DES)} par personne, entrée, plat, dessert et pain compris.` },
        { q: 'Faites-vous du sans gluten ?', a: "Oui, sur demande : banana bread et pain au maïs sans gluten, fruits, et adaptations au devis. L'atelier manipule de la farine : des traces de gluten restent possibles." },
        { q: 'Proposez-vous encore un plateau de fruits frais ?', a: 'Non. Les fruits arrivent en brochettes de fruits frais (20 pièces) ou en corbeille de fruits de saison.' },
      ],
      liens: [
        ['/traiteur-halal', 'Traiteur halal d\'entreprise'],
        ['/creations/petits-dejeuners-et-pauses', 'Petit-déjeuner d\'entreprise'],
        ['/creations/plateaux-repas', 'Plateaux repas'],
        ['/traiteur-eco-responsable', 'Traiteur éco-responsable'],
      ],
      devisTitre: 'Une commande plus légère à organiser ?',
    },
    en: {
      fil: 'Healthy catering',
      surtitre: 'Corporate catering',
      h1: 'Healthy, vegetarian and vegan corporate catering',
      chapo: 'Fruit skewers, yoghurts, compotes, vegetarian lunch trays and gluten-free options, delivered from 6:30 am across Paris and Île-de-France.',
      faits: `Breakfast from ${ht(PDJ_DES, true)} per person · vegetarian tray from ${ht(PLATEAU_DES, true)} · order by 10 am the day before`,
      alt: "Tray of fresh fruit skewers by L'Écrin Traiteur",
      questionTitre: 'Can a corporate caterer do lighter food?',
      reponse: `Yes. On the L'Écrin Traiteur menu, lighter means specific products: fresh fruit skewers (vegan and gluten-free), seasonal fruit baskets, granola yoghurts, compotes, fruit salad verrines, gluten-free banana bread and corn bread, and three vegetarian lunch trays. A Classic breakfast costs ${ht(PDJ_DES, true)} per person, a vegetarian lunch tray ${ht(PLATEAU_DES, true)}, delivery ${ht(LIV, true)} in Paris and nearby towns.`,
      prixTitre: 'How much does a lighter menu cost?',
      entetes: ['Service', 'What is included', 'Price per person excl. VAT', 'For 20 people, delivered'],
      lignes: [
        ['Classic breakfast', 'pastries, Alain Milliat juice, coffee, fresh fruit', PDJ_DES],
        ['Afternoon break', 'a pastry and a drink', PAUSE_DES],
        ['Vegetarian lunch box', 'sandwich, starter and dessert', LUNCHBOX_DES],
        ['Vegetarian lunch tray', 'starter, main, dessert and bread', PLATEAU_DES],
      ],
      note: `Delivery at ${ht(LIV, true)} included in Paris and nearby towns. Minimum order ${ht(MINIMUM, true)}.`,
      carteTitre: 'On the menu',
      carteIntro: 'Each product links to its page, with what it contains, its price and dietary information.',
      faitsTitre: 'Dietary needs: what we do',
      faitsListe: [
        ['Vegetarian', 'La Solaire, La Provençale and La Potagère lunch trays, La Fermière lunch box. Allow about a third vegetarian when you do not know the preferences.'],
        ['Vegan', 'fruit skewers, fruit baskets, compotes and fruit salad verrines; other vegan options on quote.'],
        ['Gluten-free', 'gluten-free banana bread and corn bread, fruit; our kitchen handles flour, so traces are possible.'],
        ['Halal', 'all the savoury food is halal and pork-free, alcohol-free, at no extra cost.'],
        ['In the quote', 'tell us how many people each need applies to: the order is split and labelled.'],
      ],
      faq: [
        { q: 'Do you offer healthy options for the office?', a: 'Yes: fresh fruit skewers, seasonal fruit baskets, granola yoghurts, compotes, fruit salad verrines, vegetarian lunch trays. Order them on their own or alongside a classic breakfast.' },
        { q: 'How much does a lighter breakfast cost?', a: `The Classic is ${ht(PDJ_DES, true)} per person, ${ht(livre(20, PDJ_DES), true)} delivered for 20 people. Swapping some pastries for fruit skewers or yoghurts is priced in the quote, using the product prices.` },
        { q: 'Do you have vegetarian lunch trays?', a: `Yes, three: La Solaire, La Provençale and La Potagère, at ${ht(PLATEAU_DES, true)} per person, starter, main, dessert and bread included.` },
        { q: 'Do you do gluten-free?', a: 'Yes, on request: gluten-free banana bread and corn bread, fruit, and adjustments in the quote. Our kitchen handles flour, so traces of gluten are possible.' },
        { q: 'Do you still offer a fresh fruit platter?', a: 'No. Fruit comes as fresh fruit skewers (20 pieces) or a seasonal fruit basket.' },
      ],
      liens: [
        ['/traiteur-halal', 'Halal corporate catering'],
        ['/creations/petits-dejeuners-et-pauses', 'Corporate breakfast'],
        ['/creations/plateaux-repas', 'Lunch trays'],
        ['/traiteur-eco-responsable', 'Eco-friendly catering'],
      ],
      devisTitre: 'A lighter order to organise?',
    },
  },

  eco: {
    chemin: '/traiteur-eco-responsable',
    img: '/maitre-hotel-petit-dejeuner-salon.webp',
    produits: [`${P}viennoiseries-melangees`, `${P}brochettes-fruits`, '/creations/plateaux-repas/e1', '/creations/boissons/thermos-cafe'],
    devis: 'Petit-déjeuner',
    fr: {
      fil: 'Traiteur éco-responsable',
      surtitre: "Traiteur d'entreprise",
      h1: "Traiteur éco-responsable en entreprise",
      chapo: "Plateaux en bois, vaisselle réutilisable reprise après l'événement, quantités calées sur l'effectif : ce que nous faisons pour limiter les déchets, à Paris et en Île-de-France.",
      faits: `Livraison et reprise du matériel ${ht(LIV_RECUP_PROCHE)} à Paris, 92 et 94 · livraison seule ${ht(LIV)} · commande jusqu'à la veille 10h`,
      alt: "Petit-déjeuner d'entreprise dressé par L'Écrin Traiteur, avec un maître d'hôtel",
      questionTitre: 'Que fait concrètement un traiteur éco-responsable ?',
      reponse: `Chez L'Écrin Traiteur, trois choses vérifiables. La présentation se choisit au devis : plateaux en bois, vaisselle réutilisable ou zéro jetable, et elle est écrite sur le devis et sur le bon de préparation. La vaisselle réutilisable et les thermos sont repris après l'événement par notre équipe, qui les compte au départ et au retour. Les quantités suivent l'effectif confirmé, avec une marge de 10 %. La livraison avec reprise du matériel coûte ${ht(LIV_RECUP_PROCHE)} à Paris, dans les Hauts-de-Seine et le Val-de-Marne.`,
      prixTitre: 'Ce que coûtent la livraison et la reprise du matériel',
      entetes: ['Ligne', 'Ce qui est compris', 'Prix HT'],
      lignesFixes: [
        ['Livraison', 'Paris et communes proches, dès 6h30', ht(LIV)],
        ['Livraison et reprise du matériel', 'une seule ligne : Paris, Hauts-de-Seine (92), Val-de-Marne (94)', ht(LIV_RECUP_PROCHE)],
        ['Livraison et reprise, autres zones', 'prix de livraison de la zone plus la reprise, une seule ligne', `prix de la zone + ${ht(RECUP)}`],
        ['Petit-déjeuner Classique', 'viennoiseries, jus, café, fruits', `${ht(PDJ_DES)} ${pp(false)}`],
        ['Plateau repas', 'entrée, plat, dessert et pain', `dès ${ht(PLATEAU_DES)} ${pp(false)}`],
      ],
      note: `Minimum de commande ${ht(MINIMUM)}. Facture entreprise avec TVA, bon de commande accepté.`,
      carteTitre: 'Sur la carte',
      carteIntro: 'Chaque produit renvoie à sa fiche, avec sa composition et son prix.',
      faitsTitre: 'Ce que nous faisons, et ce que nous ne prétendons pas',
      faitsListe: [
        ['Présentation', 'plateaux en bois, vaisselle réutilisable ou zéro jetable, à demander au devis ; la consigne suit la commande jusqu\'à la livraison.'],
        ['Reprise', 'vaisselle réutilisable et thermos repris après l\'événement par notre équipe, comptés au départ et au retour.'],
        ['Quantités', 'calées sur l\'effectif confirmé, avec 10 % de marge plutôt qu\'un gros surplus ; dernier ajustement jusqu\'à la veille 10h.'],
        ['Livraison', 'par notre équipe, qui reprend aussi le matériel.'],
        ['Pas de label', 'nous n\'affichons ni label environnemental, ni « neutre en carbone », ni « zéro déchet ».'],
      ],
      faq: [
        { q: "Votre traiteur d'entreprise est-il éco-responsable ?", a: "Sur des points précis : présentation en bois, vaisselle réutilisable ou zéro jetable au choix, reprise de la vaisselle et des thermos après l'événement, quantités calées sur l'effectif. Nous n'affichons pas de label environnemental." },
        { q: 'Récupérez-vous la vaisselle et les thermos ?', a: `Oui. Livraison et reprise du matériel font ${ht(LIV_RECUP_PROCHE)} en une seule ligne à Paris, dans les Hauts-de-Seine et le Val-de-Marne ; ailleurs, c'est le prix de livraison de la zone plus ${ht(RECUP)}, en une seule ligne.` },
        { q: 'Peut-on demander zéro jetable ?', a: "Oui, au devis : la consigne est écrite sur le devis et sur le bon de préparation, et la commande part en vaisselle réutilisable, reprise ensuite." },
        { q: 'Comment limiter le gaspillage sur un séminaire ?', a: "Confirmez l'effectif 48 h avant, gardez une marge de 10 % plutôt qu'un gros surplus, et ajustez jusqu'à la veille 10h. Chaque commande est préparée à la quantité demandée." },
        { q: 'Avez-vous un label environnemental ?', a: "Non, et nous ne l'écrivons pas. Si l'emballage compte dans votre choix, dites-le au devis : nous vous indiquons les contenants prévus avant de valider." },
      ],
      liens: [
        ['/traiteur-healthy', 'Traiteur healthy, végétarien et vegan'],
        ['/traiteur-halal', 'Traiteur halal d\'entreprise'],
        ['/creations/receptions-sur-mesure', 'Événement sur mesure'],
        ['/tarifs', 'Tous nos tarifs'],
      ],
      devisTitre: 'Une commande zéro jetable à organiser ?',
    },
    en: {
      fil: 'Eco-friendly catering',
      surtitre: 'Corporate catering',
      h1: 'Eco-friendly corporate catering',
      chapo: 'Wooden platters, reusable tableware collected after the event, quantities matched to the headcount: what we do to cut waste, across Paris and Île-de-France.',
      faits: `Delivery and equipment collection ${ht(LIV_RECUP_PROCHE, true)} in Paris, 92 and 94 · delivery only ${ht(LIV, true)} · order by 10 am the day before`,
      alt: "A corporate breakfast laid out by L'Écrin Traiteur, with a waiter",
      questionTitre: 'What does an eco-friendly caterer actually do?',
      reponse: `At L'Écrin Traiteur, three things you can check. Presentation is chosen in the quote: wooden platters, reusable tableware or no disposables, and it is written on the quote and the preparation sheet. Reusable tableware and thermoses are collected after the event by our team, which counts them out and back. Quantities follow the confirmed headcount, with a 10% margin. Delivery with equipment collection costs ${ht(LIV_RECUP_PROCHE, true)} in Paris, Hauts-de-Seine and Val-de-Marne.`,
      prixTitre: 'What delivery and collection cost',
      entetes: ['Line', 'What is included', 'Price excl. VAT'],
      lignesFixes: [
        ['Delivery', 'Paris and nearby towns, from 6:30 am', ht(LIV, true)],
        ['Delivery and equipment collection', 'one line: Paris, Hauts-de-Seine (92), Val-de-Marne (94)', ht(LIV_RECUP_PROCHE, true)],
        ['Delivery and collection, other areas', 'the zone delivery price plus collection, one line', `zone price + ${ht(RECUP, true)}`],
        ['Classic breakfast', 'pastries, juice, coffee, fruit', `${ht(PDJ_DES, true)} ${pp(true)}`],
        ['Lunch tray', 'starter, main, dessert and bread', `from ${ht(PLATEAU_DES, true)} ${pp(true)}`],
      ],
      note: `Minimum order ${ht(MINIMUM, true)}. Company invoice showing VAT, purchase orders accepted.`,
      carteTitre: 'On the menu',
      carteIntro: 'Each product links to its page, with what it contains and its price.',
      faitsTitre: 'What we do, and what we do not claim',
      faitsListe: [
        ['Presentation', 'wooden platters, reusable tableware or no disposables, to ask for in the quote; the instruction follows the order to delivery.'],
        ['Collection', 'reusable tableware and thermoses collected after the event by our team, counted out and back.'],
        ['Quantities', 'matched to the confirmed headcount, with a 10% margin rather than a large surplus; last change until 10 am the day before.'],
        ['Delivery', 'by our own team, which also collects the equipment.'],
        ['No label', 'we do not display any environmental label, nor "carbon neutral" or "zero waste".'],
      ],
      faq: [
        { q: 'Is your corporate catering eco-friendly?', a: 'On specific points: wooden presentation, reusable tableware or no disposables on request, collection of tableware and thermoses after the event, quantities matched to the headcount. We do not display an environmental label.' },
        { q: 'Do you collect the tableware and thermoses?', a: `Yes. Delivery and equipment collection cost ${ht(LIV_RECUP_PROCHE, true)} on one line in Paris, Hauts-de-Seine and Val-de-Marne; elsewhere, it is the zone delivery price plus ${ht(RECUP, true)}, on one line.` },
        { q: 'Can we ask for no disposables?', a: 'Yes, in the quote: the instruction is written on the quote and the preparation sheet, and the order goes out on reusable tableware, collected afterwards.' },
        { q: 'How can we limit waste at an offsite?', a: 'Confirm the headcount 48 hours ahead, keep a 10% margin rather than a large surplus, and adjust until 10 am the day before. Each order is prepared to the quantity requested.' },
        { q: 'Do you have an environmental label?', a: 'No, and we do not claim one. If packaging matters to you, say so in the quote: we tell you which containers are planned before you confirm.' },
      ],
      liens: [
        ['/traiteur-healthy', 'Healthy, vegetarian and vegan catering'],
        ['/traiteur-halal', 'Halal corporate catering'],
        ['/creations/receptions-sur-mesure', 'Bespoke events'],
        ['/tarifs', 'All our prices'],
      ],
      devisTitre: 'A no-disposables order to organise?',
    },
  },
}

export function thematique(cle, en = false) {
  const th = THEMES[cle]
  const L = th[en ? 'en' : 'fr']
  const lignes = L.lignesFixes || L.lignes.map(([a, b, prix]) => [a, b, `${ht(prix, en)}`, ht(livre(20, prix), en)])
  return {
    ...L,
    chemin: th.chemin,
    img: th.img,
    devis: th.devis,
    lignesTableau: lignes,
    produits: resoudreProduits(th.produits, en ? 'en' : 'fr', cle),
    prixDes: Math.min(PDJ_DES, PAUSE_DES, PLATEAU_DES),
  }
}
