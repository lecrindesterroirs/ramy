/*
  Formules cocktail, textes anglais.

  Surcouche de texte seulement : prix, nombre de pièces, photos et clés
  restent lus dans app/creations/cocktails/data.js.

  Les noms des formules — L'Invitation, La Réception, La Célébration — ne sont
  pas traduits : ce sont ceux du devis et de la commande.
*/

const ORGANISER = `<h2>Organising your cocktail reception in Paris and Île-de-France</h2><p>Priced on quote by headcount, date and venue. Delivered to your venue, setup available, company invoice showing VAT. Personalised quote within 24 hours.</p>`

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
    accroche: 'A refined selection of generous pieces, from land and sea.',
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
    seoHtml: `<p>La Réception moves up a level: 12 pieces per person, between land and sea. It is the menu our clients choose most for a standing dinner, a partner evening or an opening — when you want to mark the occasion without going as far as a seated meal.</p><h2>12 pieces between land and sea</h2><p>Savoury: marinated salmon and yellow beetroot, black radish, mango and organic prawn, sweet potato, feta and Kalamata olive, tandoori chicken skewer, mini cheeseburger, gougères, craquelin choux with tapenade, pissaladière tartlet, beetroot and goat's cheese millefeuille. Sweet: praline dome, all-chocolate tartlet and fresh fruit skewer.</p>${ORGANISER}`,
  },
  prestige: {
    occasion: 'Standing dinner',
    accroche: 'Our most accomplished menu, for the receptions you care most about.',
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
      'Melon, feta, fresh mint & Kalamata olive',
      'Grilled vegetable navette roll',
    ],
    sucre: ['All-chocolate tartlet', 'Fresh seasonal fruit skewer', 'Praline dome', 'Blueberry tartlet'],
    seoTitle: 'Cocktail La Célébration: the prestige menu for large corporate receptions in Paris',
    seoHtml: `<p>La Célébration is our most accomplished cocktail menu: 16 savoury and sweet pieces per person, for the receptions you care most about. Marinated salmon, prawn with mango, melon with feta and mint: a wide, worked palette that stands in for a real standing dinner at a large corporate evening.</p><h2>16 pieces for a large reception</h2><p>Savoury: marinated salmon and yellow beetroot, black radish, mango and organic prawn, tandoori chicken skewer, mini cheeseburger, gougères, craquelin choux with tapenade, pissaladière tartlet, beetroot and goat's cheese millefeuille, sweet potato, feta and Kalamata, carrot cake with chervil, melon, feta and mint, grilled vegetable navette roll. Sweet: praline dome, all-chocolate tartlet, blueberry tartlet and fresh fruit skewer.</p>${ORGANISER}`,
  },
}

export const enCocktail = (key) => EN_COCKTAILS[key] || null
export const clesCocktailsEn = () => Object.keys(EN_COCKTAILS)
