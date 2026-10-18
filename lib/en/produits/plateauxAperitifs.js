/*
  Plateaux apéritifs, textes anglais.

  Surcouche de texte seulement : photos, familles et identifiants restent lus
  dans app/creations/plateaux-aperitifs/data.js. Ces plateaux n'ont pas de
  prix affiché, ils se chiffrent au format et à l'effectif.
*/

const LIVRAISON = `<h2>Ordering your platter in Paris and Île-de-France</h2><p>Size to the number of guests, ordered until 2 pm the day before, delivered to your venue from 6:30 am. Company invoice showing VAT, personalised quote within 24 hours.</p>`

export const FAMILLES_EN = {
  tous: 'All',
  sandwichs: 'Sandwiches',
  gourmands: 'Cheese & charcuterie',
  fraicheur: 'Fresh',
  signature: 'Signature',
  sucre: 'Sweet',
}

export const EN_PLATEAUX_APERITIFS = {
  sw1: {
    nom: 'Signature Mini Baguettes',
    description: 'An assortment of filled artisan mini baguettes.',
    recettes: ['Mild curry chicken', 'Roast chicken & mayonnaise', 'Crispy breaded chicken', 'Egg & Emmental', 'Smoked salmon & avocado', 'Tuna & mayonnaise'],
    seoTitle: 'Mini baguette platter for afterworks and corporate receptions in Paris',
    seoHtml: `<p>Our platter of filled artisan mini baguettes is the format that reassures people: straightforward sandwiches, easy to pick up standing, that work for everyone at an afterwork or a leaving party. Put in the middle of the table, it shares without fuss and takes the edge off the end of the day.</p><h2>An assortment to share, clean to eat standing up</h2><p>Six fillings: mild curry chicken, roast chicken and mayonnaise, crispy breaded chicken, egg and Emmental, smoked salmon and avocado, tuna and mayonnaise. Cut for picking at, with the assortment balanced so everyone finds theirs, and quantities set to your headcount.</p>${LIVRAISON}`,
  },
  sw2: {
    nom: 'Signature Club Sandwiches',
    description: 'An assortment of soft club sandwiches, cut into triangles.',
    recettes: ['Smoked salmon & cream cheese club', 'Turkey ham club'],
    seoTitle: 'Club sandwich platter for afterworks and corporate meetings in Paris',
    seoHtml: `<p>Our platter of soft club sandwiches, cut into triangles, is a corporate aperitif classic that never disappoints. Generous and easy to share, it suits an afterwork, a working lunch that runs on, or a reception, with no cutlery and no logistics.</p><h2>Generous clubs, cut to share</h2><p>Two fillings: smoked salmon and cream cheese, and turkey ham, on soft brioche bread cut into triangles so people can help themselves one-handed. Quantities set to your headcount.</p>${LIVRAISON}`,
  },
  sw3: {
    nom: 'Mini Rolled Wraps',
    description: 'An assortment of mini rolled wraps, cut into bite-sized pieces.',
    recettes: ['Mini rolled wrap, smoked salmon & cream cheese', 'Mini rolled wrap, chicken breast'],
    seoTitle: 'Mini rolled wrap platter for afterworks and corporate lunch breaks in Paris',
    seoHtml: `<p>Our platter of mini rolled wraps cut into bite-sized pieces brings colour and freshness to a team aperitif. Rolled tight and cut clean, they are easy to pick at standing up and make a lighter alternative to standard sandwiches for an afterwork or an afternoon meeting.</p><h2>Rolled, cut, ready to pick at</h2><p>Two fillings: smoked salmon and cream cheese, and chicken breast. Rolled tight then cut into pieces so they share without effort. Quantities set to your headcount.</p>${LIVRAISON}`,
  },
  sw4: {
    nom: 'Mini Burgers',
    description: 'An assortment of hand-made mini burgers.',
    recettes: ['Cheeseburger', 'Crispy chicken'],
    seoTitle: 'Mini burger platter for afterworks and corporate events in Paris',
    seoHtml: `<p>Our platter of hand-made mini burgers lifts the mood of a team aperitif. A street food format that is clean to eat standing up, it works for every age group and turns an afterwork or a leaving party into something people stay for. Generous mouthfuls, put together with care.</p><h2>Mini burgers to share</h2><p>Two recipes, cheeseburger and crispy chicken, ready to take one-handed. We mix the fillings and set quantities to your headcount.</p>${LIVRAISON}`,
  },
  go1: {
    nom: 'Aged Cheeses',
    description: 'A selection of aged cheeses with fresh fruit and artisan bread.',
    recettes: [],
    seoTitle: 'Aged cheese platter for corporate aperitifs and receptions in Paris',
    seoHtml: `<p>Our platter of aged cheeses, with fresh fruit and artisan bread, sets the tone of a reception straight away. Put in the middle of the table, it invites people to help themselves and goes with an afterwork, a partner evening or a standing dinner.</p><h2>A selection people build themselves</h2><p>A range of aged cheeses, fresh fruit and artisan bread to build each mouthful. We fit the size of the platter and the assortment to your headcount and the occasion.</p>${LIVRAISON}`,
  },
  go2: {
    nom: 'Artisan Charcuterie',
    description: 'Air-dried beef, bresaola, Grisons beef, smoked turkey, smoked chicken, green olives & fresh grapes · halal, pork-free.',
    recettes: [],
    seoTitle: 'Halal, pork-free charcuterie platter for corporate aperitifs in Paris',
    seoHtml: `<p>Our charcuterie platter is halal and pork-free: air-dried beef, bresaola, Grisons beef, smoked turkey and smoked chicken, lifted with green olives and fresh grapes. A generous board that leaves nobody out around the table — right for an afterwork, an opening or a reception with a mixed room.</p><h2>A generous board, halal and pork-free</h2><p>Air-dried beef, bresaola, Grisons beef, smoked turkey and smoked chicken, rolled and arranged by hand, with green olives and fresh grapes for freshness. Delivered in a wooden tray, ready to put in the middle of the table. We fit the size of the platter to your headcount.</p>${LIVRAISON}`,
  },
  go4: {
    nom: 'Salmon',
    description: 'Smoked salmon, gravlax salmon, blinis, lemon and dill cream, capers, red onion & lemon.',
    recettes: [],
    seoTitle: 'Smoked salmon and gravlax platter for corporate receptions in Paris',
    seoHtml: `<p>Our salmon platter brings together smoked salmon and gravlax, blinis, lemon and dill cream, capers, red onion and lemon. A clean, elegant mouthful that sets the level of a reception, built by each guest as the evening goes on. The kind of platter people notice on a buffet.</p><h2>Smoked salmon, gravlax and what goes with it</h2><p>Smoked salmon and gravlax, blinis, lemon and dill cream, capers and red onion to build each mouthful. We fit the size of the platter to your headcount and the occasion.</p>${LIVRAISON}`,
  },
  fr1: {
    nom: 'Crudités & Dips',
    description: 'Carrot, cucumber, radish, cauliflower, cherry tomato, hummus, tzatziki & tapenade.',
    recettes: [],
    seoTitle: 'Crudités and dips platter for corporate aperitifs and breaks in Paris',
    seoHtml: `<p>Our crudités and dips platter plays on freshness: carrot, cucumber, radish, cauliflower and cherry tomato, with hummus, tzatziki and tapenade. The healthy option at a team aperitif — it balances a richer buffet and suits the people who want to pick at something light.</p><h2>Fresh, colourful, for dipping</h2><p>Crisp seasonal vegetables cut for dipping, with hummus, tzatziki and tapenade. Quantities set to your headcount, and we are happy to use it to round out a more substantial buffet.</p>${LIVRAISON}`,
  },
  si1: {
    nom: 'Asian',
    description: 'An assortment of Asian-inspired bites.',
    recettes: ['Maki', 'California rolls', 'Spring rolls', 'Gyoza', 'Yakitori skewers', 'Soy, ginger & wasabi sauces'],
    seoTitle: 'Asian aperitif platter for afterworks and corporate receptions in Paris',
    seoHtml: `<p>Our Asian-inspired platter makes a change from the aperitif classics: an assortment of fragrant bites that gives an afterwork or a reception some relief. The kind of platter that starts a conversation instead of being one more sandwich.</p><h2>Fragrant bites to share</h2><p>An assortment of Asian-inspired bites to pick up with your fingers, with sauces to go alongside. We balance the assortment and set quantities to your headcount.</p>${LIVRAISON}`,
  },
  si4: {
    nom: 'Sweet Things',
    description: 'Brownies, choux buns, muffins and macarons.',
    recettes: ['Brownies', 'Cream-filled choux buns', 'Mini muffins', 'Macarons'],
    seoTitle: 'Sweet platter for corporate aperitifs and receptions in Paris',
    seoHtml: `<p>Our sweet platter brings together a selection of artisan desserts to finish an afterwork or a reception on a sweet note. Brownies, choux buns, muffins and macarons to pick at: the thing that closes a savoury buffet properly.</p><h2>Sweet things to share</h2><p>Brownies, cream-filled choux buns, mini muffins and macarons, in small pieces you eat without cutlery. We vary the assortment and set quantities to your headcount.</p>${LIVRAISON}`,
  },
  fr3: {
    nom: 'Fruit Skewers',
    description: 'Fresh seasonal fruit skewers, for picking at. Vegan and gluten-free.',
    recettes: [],
    seoTitle: 'Fruit skewer platter for corporate aperitifs and breaks in Paris',
    seoHtml: `<p>Our platter of fresh seasonal fruit skewers brings freshness and colour to an aperitif or a team break. Everyone takes one in one hand, with no cutlery and no plate: that is what makes it more practical than a cut fruit platter at a standing event.</p><h2>Seasonal fruit, ready to pick up</h2><p>Strawberry, pineapple, melon, grape and kiwi according to the season, threaded onto skewers. Vegan and gluten-free, so the whole team can reach for one. We fit the number of skewers to your headcount and the occasion.</p>${LIVRAISON}`,
  },
}

export const enPlateauAperitif = (id) => EN_PLATEAUX_APERITIFS[id] || null
export const slugsPlateauxAperitifsEn = () => Object.keys(EN_PLATEAUX_APERITIFS)
