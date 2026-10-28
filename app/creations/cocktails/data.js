// Données cocktails, module plat (importable depuis le serveur comme depuis le client).
// Extraites de page.js : un `export const` dans un fichier 'use client' revient
// sous forme de proxy dans une route API, pas sous forme de tableau.
//
// Prix et nombre de pièces : lus dans lib/calculsPrix.js (FORMULES), jamais
// recopiés ici. `prix` reste une chaîne « 29,90 » pour les anciens appelants,
// `prixNum` est le nombre.
import { FORMULES as PX, LIV } from '../../../lib/calculsPrix'
import { MINIMUM } from '../../../lib/prixEntree'

const virgule = (x) => x.toFixed(2).replace('.', ',')
const milliers = (x) => {
  const [e, d] = x.toFixed(Number.isInteger(x) ? 0 : 2).split('.')
  const ent = e.replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')
  return d ? `${ent},${d}` : ent
}
const ORGANISER = `<h2>Organiser votre cocktail à Paris et en Île-de-France</h2><p>Le prix par personne ne change pas avec l'effectif. Livraison ${LIV} € HT à Paris et dans les communes proches, minimum de commande ${MINIMUM} € HT, facture entreprise avec TVA. Commande jusqu'à 14h la veille, 48 h de préavis à partir de 50 personnes. Devis détaillé sous 24h.</p>`

export const FORMULES = [
  {
    key: 'classique',
    occasion: 'Apéritif',
    seoTitle: `Cocktail L'Invitation : la formule apéritive pour vos afterworks d'entreprise à Paris`,
    seoHtml: `<p>La formule L'Invitation est notre cocktail apéritif le plus accessible : 8 pièces salées et sucrées par personne, pensées pour un afterwork ou une pause conviviale. Un format équilibré qui lance bien une fin de journée sans en faire trop, à Paris et en Île-de-France.</p><h2>8 pièces à partager, salé et sucré</h2><p>Côté salé : gougères, chou craquelin à la tapenade, tomate et mozzarella, tartelette pissaladière, millefeuille betterave et chèvre, brochette de poulet tandoori et mini cheeseburger. Côté sucré : tartelette tout chocolat et brochette de fruits frais. Tout est dressé et livré prêt à servir.</p>${ORGANISER}`,
    label: "L'Invitation",
    pieces: PX.invitation.pieces,
    prix: virgule(PX.invitation.prix),
    prixNum: PX.invitation.prix,
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
    seoHtml: `<p>La formule La Réception monte d'un cran : 12 pièces par personne, entre terre et mer. C'est la formule pour un cocktail dînatoire, une soirée partenaires ou une inauguration, quand on veut marquer le coup sans passer à un repas assis.</p><h2>12 pièces entre terre et mer</h2><p>Côté salé : saumon mariné et betterave jaune, radis noir, mangue et crevette bio, patate douce, feta et olive kalamata, brochette de poulet tandoori, mini cheeseburger, gougères, chou craquelin à la tapenade, tartelette pissaladière, millefeuille betterave et chèvre. Côté sucré : dôme praliné, tartelette tout chocolat et brochette de fruits frais.</p>${ORGANISER}`,
    label: 'La Réception',
    pieces: PX.reception.pieces,
    prix: virgule(PX.reception.prix),
    prixNum: PX.reception.prix,
    accroche: 'Douze pièces entre terre et mer, de quoi remplacer un déjeuner debout.',
    featured: true,
    img: '/cocktail-dinatoire.webp',
    sale: [
      'Gougères Soufflées au Fromage',
      'Chou Craquelin à la Tapenade, Tomate & Mozzarella',
      'Tartelette Pissaladière aux Oignons Confits',
      'Millefeuille de Betterave au Chèvre',
      'Millefeuille de Patate Douce, Feta & Olive Kalamata',
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
    seoTitle: `Cocktail La Célébration : 16 pièces par personne pour un cocktail dînatoire d'entreprise à Paris`,
    seoHtml: `<p>La formule La Célébration est notre formule la plus complète : 16 pièces salées et sucrées par personne, pour un cocktail dînatoire de deux heures et demie à trois heures. Saumon mariné, crevette à la mangue, tartelette avocat feta : une composition large qui tient lieu de dîner debout pour une grande soirée d'entreprise.</p><h2>16 pièces pour une grande réception</h2><p>Côté salé : saumon mariné et betterave jaune, radis noir, mangue et crevette bio, brochette de poulet tandoori, mini cheeseburger, gougères, chou craquelin à la tapenade, tartelette pissaladière, millefeuille betterave et chèvre, patate douce, feta et kalamata, gâteau de carotte au cerfeuil, tartelette avocat feta, navette de légumes grillés. Côté sucré : dôme praliné, tartelette tout chocolat, tartelette myrtilles et brochette de fruits frais.</p>${ORGANISER}`,
    label: 'La Célébration',
    pieces: PX.celebration.pieces,
    prix: virgule(PX.celebration.prix),
    prixNum: PX.celebration.prix,
    accroche: 'Seize pièces par personne, de quoi tenir lieu de dîner debout.',
    featured: false,
    img: '/hero-cocktail-reception.webp',
    sale: [
      'Gougères Soufflées au Fromage',
      'Chou Craquelin à la Tapenade, Tomate & Mozzarella',
      'Tartelette Pissaladière aux Oignons Confits',
      'Millefeuille de Betterave au Chèvre',
      'Millefeuille de Patate Douce, Feta & Olive Kalamata',
      'Brochette de Poulet Mariné Tandoori',
      'Mini Cheeseburger',
      'Saumon Mariné & Betterave Jaune',
      'Crevette Bio, Mangue & Radis Noir',
      'Gâteau de Carotte au Cerfeuil',
      'Tartelette Avocat & Feta',
      'Navette de Légumes Grillés',
    ],
    sucre: [
      'Tartelette Tout Chocolat',
      'Brochette de Fruits Frais de Saison',
      'Dôme Praliné',
      'Tartelette aux Myrtilles',
    ],
  },
  {
    key: 'afterwork',
    occasion: 'Afterwork',
    seoTitle: `Cocktail L'Afterwork : 10 pièces et une planche de fromages pour vos afterworks à Paris`,
    seoHtml: `<p>La formule L'Afterwork est celle où l'on mange vraiment : dix pièces par personne qui ont du pain — mini cheeseburger, pains briochés, clubs et mini wraps roulés — plus une planche de fromages affinés et des chips à poser au centre de la table. Sept pièces salées, trois sucrées, à ${virgule(PX.afterwork.prix)} € HT par personne.</p><h2>Ce qu'elle a que les autres n'ont pas</h2><p>Les trois autres formules sont faites de bouchées montées à la main, qui se picorent. Celle-ci remplace la moitié par des pièces de plateau et ajoute du fromage : à ${virgule(PX.afterwork.prix)} € contre ${virgule(PX.reception.prix)} € pour La Réception, on cale une équipe en fin de journée pour cinq euros de moins par personne.</p><h2>Pour quel moment</h2><p>Un afterwork, un pot de départ, une fin de journée d'équipe : les moments où l'on veut que les gens mangent, debout, sans passer au dîner. Si vous préférez des planches au centre de la table à un nombre de pièces par personne, voyez notre <a href="/creations/cocktails/afterwork-partage">afterwork à partager</a>, qui ajoute une planche de charcuteries halal.</p>` + ORGANISER,
    label: "L'Afterwork",
    pieces: PX.afterwork.pieces,
    prix: virgule(PX.afterwork.prix),
    prixNum: PX.afterwork.prix,
    accroche: 'Dix pièces qui nourrissent, une planche de fromages et des chips à partager.',
    featured: false,
    img: '/plateau-burgers.webp',
    sale: [
      'Mini Burger Cheeseburger',
      'Pain Brioché Pesto Verde & Tomates Séchées',
      'Pain Brioché au Thon et Herbes Fraîches',
      'Club Saumon Fumé & Cream Cheese',
      'Club Blanc de Poulet',
      'Mini Wrap Roulé Saumon Fumé & Cream Cheese',
      'Mini Wrap Roulé Blanc de Poulet',
    ],
    sucre: [
      'Choux à la Crème',
      'Macarons',
      'Brownies',
    ],
    // Posé au centre de la table, en plus des dix pièces par personne.
    enPlus: [
      'Planche de fromages affinés, fruits frais et pain artisanal',
      'Chips à grignoter',
    ],
  },
]

// Questions du catalogue : rendues visibles dans la page ET servies en FAQPage (layout.js).
// Les chiffres reprennent les formules ci-dessus ; livraison 29 € HT, minimum 50 € HT.
const [I, R, C] = [PX.invitation, PX.reception, PX.celebration]
export const FAQ_CATALOGUE = [
  {
    name: "Quel est le prix d'une formule cocktail par personne ?",
    answer: `${I.nom} (${I.pieces} pièces) est à ${virgule(I.prix)} € HT par personne, ${R.nom} (${R.pieces} pièces) à ${virgule(R.prix)} € HT et ${C.nom} (${C.pieces} pièces) à ${virgule(C.prix)} € HT. La livraison s'ajoute : ${LIV} € HT à Paris et dans les communes proches, minimum de commande ${MINIMUM} € HT.`,
  },
  {
    name: 'Combien de pièces par personne dans chaque formule ?',
    answer: `${I.nom} : ${I.pieces} pièces. ${R.nom} : ${R.pieces} pièces. ${C.nom} : ${C.pieces} pièces. L'Écrin Traiteur compte ${I.pieces} pièces pour un pot d'une heure et demie, ${R.pieces} pour remplacer un déjeuner, ${C.pieces} pour un dîner debout. La composition détaillée est sur chaque fiche.`,
  },
  {
    name: 'Quelle formule pour 20 personnes, pour 50 personnes ?',
    answer: `Pour 20 personnes : ${milliers(20 * I.prix)} € HT en ${I.nom}, ${milliers(20 * R.prix)} € HT en ${R.nom}, ${milliers(20 * C.prix)} € HT en ${C.nom}. Pour 50 personnes : ${milliers(50 * I.prix)}, ${milliers(50 * R.prix)} ou ${milliers(50 * C.prix)} € HT. Ces totaux sont hors boissons et hors livraison (${LIV} € HT) ; le prix par personne reste fixe quel que soit l'effectif.`,
  },
  {
    name: 'Peut-on adapter une formule aux régimes alimentaires ?',
    answer: "Toute la carte salée est halal et sans porc, et sans alcool. Les options végétariennes, vegan et sans gluten se précisent au devis, avec le nombre de personnes concernées. La composition des formules est fixe : pour une demande particulière, demandez un devis avant la commande.",
  },
  {
    name: "Jusqu'à quand peut-on commander ?",
    answer: "Jusqu'à la veille 14h pour une livraison le lendemain. À partir de 50 personnes ou pour plusieurs sites, prévenez au moins 48 h avant. Le devis est envoyé sous 24h.",
  },
  {
    name: 'Les boissons sont-elles comprises ?',
    answer: "Non, les formules comptent les pièces salées et sucrées. Les jus Alain Milliat, les eaux et le Chardonnay sans alcool s'ajoutent au devis, avec les gobelets.",
  },
]
