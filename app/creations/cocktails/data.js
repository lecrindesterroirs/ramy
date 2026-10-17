// Données cocktails, module plat (importable depuis le serveur comme depuis le client).
// Extraites de page.js : un `export const` dans un fichier 'use client' revient
// sous forme de proxy dans une route API, pas sous forme de tableau.

export const FORMULES = [
  {
    key: 'classique',
    occasion: 'Apéritif',
    seoTitle: `Cocktail L'Invitation : la formule apéritive pour vos afterworks d'entreprise à Paris`,
    seoHtml: `<p>La formule L'Invitation est notre cocktail apéritif le plus accessible : 8 pièces salées et sucrées par personne, pensées pour un afterwork ou une pause conviviale. Un format équilibré qui lance bien une fin de journée sans en faire trop, à Paris et en Île-de-France.</p><h2>8 pièces à partager, salé et sucré</h2><p>Côté salé : gougères, chou craquelin à la tapenade, tomate et mozzarella, tartelette pissaladière, millefeuille betterave et chèvre, brochette de poulet tandoori et mini cheeseburger. Côté sucré : tartelette tout chocolat et brochette de fruits frais. Tout est dressé et livré prêt à servir.</p><h2>Organiser votre cocktail à Paris et en Île-de-France</h2><p>Prestation sur devis selon l'effectif, la date et le lieu. Livraison sur votre lieu de réception, installation possible, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    label: "L'Invitation",
    pieces: 8,
    prix: '29,90',
    accroche: 'La formule apéritive équilibrée pour vos afterworks et pauses conviviales.',
    featured: false,
    img: '/cocktail-classique.webp',
    sale: [
      'Gougères Soufflées au Fromage',
      'Chou Craquelin à la Tapenade, Tomate & Mozzarella',
      'Tartelette Pissaladière aux Oignons Confits',
      'Millefeuille de Betterave au Chèvre',
      'Brochette de Poulet Mariné Tandoori',
      'Mini Cheeseburger',
    ],
    sucre: [
      'Tartelette Tout Chocolat',
      'Brochette de Fruits Frais de Saison',
    ],
  },
  {
    key: 'signature',
    occasion: 'Déjeunatoire',
    seoTitle: `Cocktail La Réception : la formule signature terre et mer pour vos événements d'entreprise à Paris`,
    seoHtml: `<p>La formule La Réception monte d'un cran : 12 pièces par personne, entre terre et mer. C'est notre formule la plus choisie pour un cocktail dînatoire, une soirée partenaires ou une inauguration, quand on veut marquer le coup sans passer à un repas assis.</p><h2>12 pièces entre terre et mer</h2><p>Côté salé : saumon mariné et betterave jaune, radis noir, mangue et crevette bio, patate douce, feta et olive kalamata, brochette de poulet tandoori, mini cheeseburger, gougères, chou craquelin à la tapenade, tartelette pissaladière, millefeuille betterave et chèvre. Côté sucré : dôme praliné, tartelette tout chocolat et brochette de fruits frais.</p><h2>Organiser votre cocktail à Paris et en Île-de-France</h2><p>Prestation sur devis selon l'effectif, la date et le lieu. Livraison sur site, installation possible, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    label: 'La Réception',
    pieces: 12,
    prix: '40,90',
    accroche: 'Une sélection raffinée de pièces généreuses, entre terre et mer.',
    featured: true,
    img: '/cocktail-signature.webp',
    sale: [
      'Gougères Soufflées au Fromage',
      'Chou Craquelin à la Tapenade, Tomate & Mozzarella',
      'Tartelette Pissaladière aux Oignons Confits',
      'Millefeuille de Betterave au Chèvre',
      'Bouchée de Patate Douce, Feta & Olive Kalamata',
      'Brochette de Poulet Mariné Tandoori',
      'Mini Cheeseburger',
      'Saumon Mariné & Betterave Jaune',
      'Crevette Bio, Mangue & Radis Noir',
    ],
    sucre: [
      'Tartelette Tout Chocolat',
      'Brochette de Fruits Frais de Saison',
      'Dôme Praliné',
    ],
  },
  {
    key: 'prestige',
    occasion: 'Dînatoire',
    seoTitle: `Cocktail La Célébration : la formule prestige pour vos grandes réceptions d'entreprise à Paris`,
    seoHtml: `<p>La formule La Célébration est notre cocktail le plus abouti : 16 pièces salées et sucrées par personne, pour les réceptions les plus soignées. Saumon mariné, crevette à la mangue, melon à la feta et à la menthe : une palette large et travaillée qui tient lieu de vrai dîner debout pour une grande soirée d'entreprise.</p><h2>16 pièces pour une grande réception</h2><p>Côté salé : saumon mariné et betterave jaune, radis noir, mangue et crevette bio, brochette de poulet tandoori, mini cheeseburger, gougères, chou craquelin à la tapenade, tartelette pissaladière, millefeuille betterave et chèvre, patate douce, feta et kalamata, gâteau de carotte au cerfeuil, melon, feta et menthe, navette de légumes grillés. Côté sucré : dôme praliné, tartelette tout chocolat, tartelette myrtilles et brochette de fruits frais.</p><h2>Organiser votre cocktail à Paris et en Île-de-France</h2><p>Prestation sur devis selon l'effectif, la date et le lieu. Livraison sur votre lieu de réception, installation possible, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    label: 'La Célébration',
    pieces: 16,
    prix: '51,90',
    accroche: 'L\'excellence gastronomique pour vos réceptions les plus soignées.',
    featured: false,
    img: '/cocktail-prestige.webp',
    sale: [
      'Gougères Soufflées au Fromage',
      'Chou Craquelin à la Tapenade, Tomate & Mozzarella',
      'Tartelette Pissaladière aux Oignons Confits',
      'Millefeuille de Betterave au Chèvre',
      'Bouchée de Patate Douce, Feta & Olive Kalamata',
      'Brochette de Poulet Mariné Tandoori',
      'Mini Cheeseburger',
      'Saumon Mariné & Betterave Jaune',
      'Crevette Bio, Mangue & Radis Noir',
      'Moelleux de Carotte au Cerfeuil',
      'Melon, Feta, Menthe Fraîche & Olive Kalamata',
      'Navette de Légumes Grillés',
    ],
    sucre: [
      'Tartelette Tout Chocolat',
      'Brochette de Fruits Frais de Saison',
      'Dôme Praliné',
      'Tartelette aux Myrtilles',
    ],
  },
]

// Questions du catalogue : rendues visibles dans la page ET servies en FAQPage (layout.js).
// Les chiffres reprennent les formules ci-dessus ; livraison 29 € HT, minimum 50 € HT.
export const FAQ_CATALOGUE = [
  {
    name: "Quel est le prix d'une formule cocktail par personne ?",
    answer: "L'Invitation (8 pièces) est à 29,90 € HT par personne, La Réception (12 pièces) à 40,90 € HT et La Célébration (16 pièces) à 51,90 € HT. La livraison s'ajoute : 29 € HT à Paris et dans les communes proches, minimum de commande 50 € HT.",
  },
  {
    name: 'Combien de pièces par personne dans chaque formule ?',
    answer: "L'Invitation : 8 pièces, dont 6 salées et 2 sucrées. La Réception : 12 pièces, dont 9 salées et 3 sucrées. La Célébration : 16 pièces, dont 12 salées et 4 sucrées. La composition détaillée est affichée sur chaque carte.",
  },
  {
    name: 'Quelle formule pour 20 personnes, pour 50 personnes ?',
    answer: "Pour 20 personnes : 598 € HT en L'Invitation, 818 € HT en La Réception, 1 038 € HT en La Célébration. Pour 50 personnes : 1 495, 2 045 ou 2 595 € HT. Les totaux sont hors livraison, et le prix par personne reste fixe quel que soit l'effectif.",
  },
  {
    name: 'Peut-on adapter une formule aux régimes alimentaires ?',
    answer: "Toute la carte est halal et sans porc par défaut. Les options végétariennes, véganes et sans gluten se précisent au devis. La composition des trois formules est fixe : pour une demande particulière, envoyez un mail ou demandez un devis avant la commande.",
  },
  {
    name: 'Jusqu\'à quand peut-on commander ?',
    answer: "Jusqu'à la veille 14h pour une livraison le lendemain. À partir de 50 personnes ou pour plusieurs sites, prévenez au moins 48h avant. Le devis est envoyé sous 24h.",
  },
]
