import { LIV } from '../../calculsPrix'
import { MINIMUM } from '../../prixEntree'
/*
  Formules cocktail, textes anglais.

  Surcouche de texte seulement : prix, nombre de pièces, photos et clés
  restent lus dans app/creations/cocktails/data.js.

  Les noms des formules — L'Invitation, La Réception, La Célébration — ne sont
  pas traduits : ce sont ceux du devis et de la commande.
*/


const ORGANISER = `<h2>Organising your cocktail reception in Paris and Île-de-France</h2><p>The price per person does not change with headcount. Delivery €${LIV} excl. VAT in Paris and nearby towns, minimum order €${MINIMUM} excl. VAT, company invoice showing VAT. Order by 2 pm the day before, 48 hours' notice from 50 guests. Detailed quote within 24 hours.</p>`

export const OCCASIONS_EN = {
  'Apéritif': 'Drinks reception',
  'Déjeunatoire': 'Light lunch',
  'Dînatoire': 'Standing dinner',
}

export const EN_COCKTAILS = {
  classique: {
    occasion: 'Drinks reception',
    accroche: 'The balanced drinks-reception menu for your afterworks and get-togethers.',
    sale: [
      'Cheese gougères',
      'Craquelin choux with tapenade, tomato & mozzarella',
      'Pissaladière tartlet with confit onions',
      'Beetroot and goat’s cheese millefeuille',
      'Tandoori marinated chicken skewer',
      'Mini cheeseburger',
    ],
    sucre: ['All-chocolate tartlet', 'Fresh seasonal fruit skewer'],
    seoTitle: "Cocktail L'Invitation: the drinks-reception menu for corporate afterworks in Paris",
    seoHtml: `<p>L'Invitation is our most accessible cocktail menu: 8 savoury and sweet pieces per person, put together for an afterwork or a get-together. A balanced format that starts the end of the day well without overdoing it, across Paris and Île-de-France.</p><h2>8 pieces to share, savoury and sweet</h2><p>Savoury: cheese gougères, craquelin choux with tapenade, tomato and mozzarella, pissaladière tartlet with confit onions, beetroot and goat's cheese millefeuille, tandoori marinated chicken skewer and mini cheeseburger. Sweet: all-chocolate tartlet and fresh fruit skewer. Everything is arranged and delivered ready to serve.</p>${ORGANISER}`,
  },
  signature: {
    occasion: 'Light lunch',
    accroche: 'Twelve pieces from land and sea, enough to stand in for lunch.',
    sale: [
      'Cheese gougères',
      'Craquelin choux with tapenade, tomato & mozzarella',
      'Pissaladière tartlet with confit onions',
      'Beetroot and goat’s cheese millefeuille',
      'Sweet potato, feta & Kalamata olive millefeuille',
      'Tandoori marinated chicken skewer',
      'Mini cheeseburger',
      'Marinated salmon & yellow beetroot',
      'Organic prawn, mango & black radish',
    ],
    sucre: ['All-chocolate tartlet', 'Fresh seasonal fruit skewer', 'Praline dome'],
    seoTitle: 'Cocktail La Réception: the land-and-sea signature menu for corporate events in Paris',
    seoHtml: `<p>La Réception moves up a level: 12 pieces per person, between land and sea. It is the menu for a standing lunch, a partner evening or an opening, when you want to mark the occasion without going as far as a seated meal.</p><h2>12 pieces between land and sea</h2><p>Savoury: marinated salmon and yellow beetroot, black radish, mango and organic prawn, sweet potato, feta and Kalamata olive, tandoori chicken skewer, mini cheeseburger, gougères, craquelin choux with tapenade, pissaladière tartlet, beetroot and goat's cheese millefeuille. Sweet: praline dome, all-chocolate tartlet and fresh fruit skewer.</p>${ORGANISER}`,
  },
  prestige: {
    occasion: 'Standing dinner',
    accroche: 'Sixteen pieces per person, enough to stand in for dinner.',
    sale: [
      'Cheese gougères',
      'Craquelin choux with tapenade, tomato & mozzarella',
      'Pissaladière tartlet with confit onions',
      'Beetroot and goat’s cheese millefeuille',
      'Sweet potato, feta & Kalamata olive millefeuille',
      'Tandoori marinated chicken skewer',
      'Mini cheeseburger',
      'Marinated salmon & yellow beetroot',
      'Organic prawn, mango & black radish',
      'Carrot cake with chervil',
      'Avocado & feta tartlet',
      'Grilled vegetable navette roll',
    ],
    sucre: ['All-chocolate tartlet', 'Fresh seasonal fruit skewer', 'Praline dome', 'Blueberry tartlet'],
    seoTitle: 'Cocktail La Célébration: 16 pieces per person for a corporate standing dinner in Paris',
    seoHtml: `<p>La Célébration is our fullest cocktail menu: 16 savoury and sweet pieces per person, for a standing dinner of two and a half to three hours. Marinated salmon, prawn with mango, avocado and feta tartlet: a wide selection that stands in for a real standing dinner at a large corporate evening.</p><h2>16 pieces for a large reception</h2><p>Savoury: marinated salmon and yellow beetroot, black radish, mango and organic prawn, tandoori chicken skewer, mini cheeseburger, gougères, craquelin choux with tapenade, pissaladière tartlet, beetroot and goat's cheese millefeuille, sweet potato, feta and Kalamata, carrot cake with chervil, avocado and feta tartlet, grilled vegetable navette roll. Sweet: praline dome, all-chocolate tartlet, blueberry tartlet and fresh fruit skewer.</p>${ORGANISER}`,
  },
  afterwork: {
    occasion: 'After-work',
    accroche: 'Ten pieces that actually fill you up, an aged cheese board and crisps to share.',
    sale: [
      'Mini cheeseburger',
      'Brioche roll, green pesto & sun-dried tomatoes',
      'Brioche roll, tuna',
      'Smoked salmon & cream cheese club',
      'Chicken breast club',
      'Rolled mini wrap, smoked salmon & cream cheese',
      'Rolled mini wrap, chicken breast',
    ],
    sucre: ['Cream puffs', 'Macarons', 'Brownies'],
    enPlus: ['Aged cheese board, fresh fruit and artisan bread', 'Crisps to nibble'],
    seoTitle: "Cocktail L'Afterwork: 10 pieces and a cheese board for corporate after-work drinks in Paris",
    seoHtml: `<p>L'Afterwork is the menu where people actually eat: ten pieces per person with bread in them — mini cheeseburger, brioche rolls, clubs and rolled mini wraps — plus an aged cheese board and crisps to set in the middle of the table. Seven savoury pieces, three sweet.</p><h2>What it has that the others do not</h2><p>The other three menus are made of canapés built by hand, to be picked at. This one replaces half of them with platter pieces and adds cheese: it feeds a team at the end of the day for five euros less per person than La Réception.</p><h2>What it suits</h2><p>After-work drinks, a leaving party, the end of a team day: the moments when you want people to eat, standing, without moving up to dinner. If you would rather have boards in the middle of the table than a number of pieces per person, see our <a href="/creations/cocktails/afterwork-partage">sharing afterwork</a>, which adds a halal charcuterie board.</p>`,
  },
}

export const enCocktail = (key) => EN_COCKTAILS[key] || null
export const clesCocktailsEn = () => Object.keys(EN_COCKTAILS)
