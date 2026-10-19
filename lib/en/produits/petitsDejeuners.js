/*
  Petits-déjeuners et viennoiseries, textes anglais.

  Surcouche de texte seulement : prix, photo, identifiant et quantités
  chiffrées restent lus dans lib/productsData.js, seule source.

  Les NOMS ne sont pas traduits. « Pains aux Céréales Tranchés » reste tel
  quel : c'est le nom qui figurera sur le devis et sur la commande du client.
  La description anglaise, juste en dessous, lève toute ambiguïté.

  Les régimes et les allergènes passent par REGIMES et ALLERGENES : ce sont
  des listes fermées, inutile de les retraduire fiche par fiche.
*/

export const REGIMES = {
  'Végétarien': 'Vegetarian',
  'Vegan': 'Vegan',
  'Sans gluten': 'Gluten-free',
  'Sans porc': 'Pork-free',
  'Halal': 'Halal',
}

export const ALLERGENES = {
  'Gluten': 'Gluten',
  'Lait': 'Milk',
  'Œufs': 'Eggs',
  'Oeufs': 'Eggs',
  'Poisson': 'Fish',
  'Fruits à coque': 'Nuts',
  'Arachide': 'Peanuts',
  'Soja': 'Soya',
  'Sésame': 'Sesame',
  'Moutarde': 'Mustard',
  'Céleri': 'Celery',
  'Sulfites': 'Sulphites',
  'Crustacés': 'Crustaceans',
  'Mollusques': 'Molluscs',
  'Lupin': 'Lupin',
  'Fruits à coque (amande)': 'Nuts (almond)',
}

export const traduireRegimes = (l = []) => l.map(x => REGIMES[x] || x)
export const traduireAllergenes = (l = []) => l.map(x => ALLERGENES[x] || x)

const LIVRAISON = `<h2>Delivered across Paris and Île-de-France</h2><p>Order until 2 pm the day before, delivered on site from 6:30 am. Company invoice showing VAT, personalised quote within 24 hours.</p>`

export const EN_PETITS_DEJEUNERS = {
  'viennoiseries-duo': {
    name: 'Pure butter croissants & pains au chocolat',
    shortName: 'Pure butter croissants & pains au chocolat',
    qty: '16 pieces',
    description: '8 mini croissants, 8 mini pains au chocolat',
    ingredients: 'A platter of 16 mini pastries: 8 croissants and 8 pains au chocolat made with Charentes-Poitou butter. Proper lamination, soft in the mouth, baked fresh the same morning.',
    seoTitle: 'Croissant and pain au chocolat platter for office breakfasts in Paris',
    seoArticle: `<p>The duo platter is the safe bet of the corporate breakfast in Paris: 8 mini croissants and 8 mini pains au chocolat, pure Charentes-Poitou butter, baked the same morning by our partner baker.</p><p>Sixteen pieces feed six to eight people alongside a hot drink, or ten if other things are on the table.</p>${LIVRAISON}`,
  },
  'chouquettes': {
    name: 'Chouquettes with pearl sugar',
    shortName: 'Pearl sugar chouquettes',
    qty: '30 pieces',
    description: '30 pieces · Crisp and golden',
    ingredients: 'A platter of 30 mini chouquettes with caramelised pearl sugar. Light, crisp and golden, out of the oven the same morning.',
    seoTitle: 'Chouquette platter delivered in Paris for office breakfasts',
    seoArticle: `<p>Chouquettes turn a coffee break into something people gather around. Thirty light choux buns with caramelised pearl sugar, baked the same morning.</p><p>They are eaten with the fingers, leave no crumbs on a keyboard and suit a stand-up meeting as well as a seated breakfast.</p>${LIVRAISON}`,
  },
  'viennoiseries-melangees': {
    name: 'Assorted pure butter pastries',
    shortName: 'Assorted pure butter pastries',
    qty: '30 pieces',
    description: '12 mini croissants, 12 mini pains au chocolat, 6 mini pains aux raisins',
    ingredients: 'A premium platter of 30 assorted pastries: 12 mini croissants, 12 mini pains au chocolat, 6 mini pains aux raisins. Charentes-Poitou butter, French flour, free-range eggs.',
    seoTitle: 'Assorted pastry platter for corporate breakfasts in Paris',
    seoArticle: `<p>Thirty assorted pastries, the platter for a room where tastes differ: croissants, pains au chocolat and pains aux raisins, all pure butter.</p><p>Count two pieces per person for a standard breakfast, three if it replaces lunch for people arriving early.</p>${LIVRAISON}`,
  },
  'crepes': {
    name: 'Homemade soft crêpes',
    shortName: 'Homemade soft crêpes',
    qty: '6 pieces',
    description: '6 large crêpes',
    ingredients: 'Soft homemade crêpes, 6 large pieces. Traditional rested batter. Includes Alain Milliat jams and chocolate spread.',
    seoTitle: 'Homemade crêpes for corporate breakfasts in Paris',
    seoArticle: `<p>Six large homemade crêpes, with Alain Milliat jams and chocolate spread. The batter is rested the traditional way, which is what makes them soft rather than rubbery.</p><p>Allow two per person, so one box covers three people. They work for a breakfast as well as for an afternoon break, and everyone dresses their own.</p>${LIVRAISON}`,
  },
  'mini-crepes': {
    name: 'Homemade mini crêpes',
    shortName: 'Homemade mini crêpes',
    qty: '15 pieces',
    description: '15 soft mini crêpes',
    ingredients: 'Soft homemade mini crêpes, 15 pieces. Traditional rested batter. Includes Alain Milliat jams and chocolate spread.',
    seoTitle: 'Mini crêpes for corporate breakfasts in Paris',
    seoArticle: `<p>The same batter as our large crêpes, in a format you can eat standing with one hand. Fifteen pieces, with Alain Milliat jams and chocolate spread.</p><p>Allow three per person, so one box covers five people. The right choice for a breakfast where people move around rather than sit down.</p>${LIVRAISON}`,
  },
  'cookie-geant': {
    name: 'Giant cookie',
    shortName: 'Giant cookie',
    qty: 'To share',
    description: 'A generous giant cookie to share',
    ingredients: 'Soft homemade giant cookie, cut into generous portions to share.',
    seoTitle: 'Homemade giant cookie for office events in Paris',
    seoArticle: `<p>One cookie, cut into generous portions. It lands on the table as a centrepiece rather than a plate of individual biscuits, which changes the moment.</p><p>Priced on request, because the size depends on the headcount.</p>${LIVRAISON}`,
  },
  'navettes-salees': {
    name: 'Assorted savoury brioche rolls',
    shortName: 'Assorted brioche rolls',
    qty: '20 pieces',
    description: '10 cucumber tzatziki, 10 smoked salmon with cream cheese and dill',
    ingredients: 'Homemade brioche rolls. Fillings: 10 rolls with homemade tzatziki and fresh cucumber, 10 rolls with smoked salmon, cream cheese and fresh dill.',
    seoTitle: 'Savoury brioche roll platter for corporate events in Paris',
    seoArticle: `<p>Twenty homemade brioche rolls, half with cucumber tzatziki, half with smoked salmon, cream cheese and fresh dill. The savoury option for a breakfast that has to hold people until lunch.</p><p>They are eaten with the fingers and keep their shape on a buffet for a couple of hours.</p>${LIVRAISON}`,
  },
  'navettes-salees-40': {
    name: 'Assorted savoury brioche rolls, large platter',
    shortName: 'Assorted brioche rolls, 40',
    qty: '40 pieces',
    description: '20 tuna with fresh herbs, 20 smoked salmon with cream cheese and dill',
    ingredients: 'Homemade brioche rolls, large platter. Fillings: 20 rolls with tuna and fresh herbs, 20 rolls with smoked salmon, cream cheese and fresh dill.',
    seoTitle: 'Large savoury brioche roll platter for corporate events in Paris',
    seoArticle: `<p>The large platter: forty homemade brioche rolls, half tuna with fresh herbs, half smoked salmon with cream cheese and dill. Better value per piece than two platters of twenty.</p><p>The format for a welcome reception or a savoury breakfast for twenty people and more.</p>${LIVRAISON}`,
  },
  'pains-cereales-tranches': {
    name: 'Sliced multigrain breads',
    shortName: 'Multigrain breads',
    qty: '4 to 6 people',
    description: '10 to 12 slices, 3 butters and 3 Alain Milliat jams included',
    ingredients: 'Homemade multigrain bread, sliced. Includes 3 portions of salted butter and 3 pots of Alain Milliat jam.',
    seoTitle: 'Sliced multigrain bread for office breakfasts in Paris',
    seoArticle: `<p>Sliced in advance, with salted butter and Alain Milliat jams: nothing to do but put it on the table. For a breakfast or a quick break.</p><p>Ten to twelve slices, enough for four to six people alongside a hot drink.</p>${LIVRAISON}`,
  },
  'pain-mais-sans-gluten': {
    name: 'Gluten-free corn bread',
    shortName: 'Corn bread',
    qty: '4 to 6 people',
    description: '10 to 12 slices, 3 butters and 3 Alain Milliat jams included',
    ingredients: 'Gluten-free corn bread, sliced. Includes 3 portions of salted butter and 3 pots of Alain Milliat jam.',
    seoTitle: 'Gluten-free bread for office breakfasts in Paris',
    seoArticle: `<p>The gluten-free option that does not feel like one: corn bread, sliced, with salted butter and Alain Milliat jams.</p><p>Tell us how many guests need it when you order and we prepare it separately, labelled, so there is no doubt on the table.</p>${LIVRAISON}`,
  },
  'plateau-clubs-signature': {
    name: 'Signature club sandwich platter',
    shortName: 'Signature clubs',
    qty: '24 pieces',
    description: '12 smoked salmon and cream cheese, 12 chicken breast',
    ingredients: 'Soft brioche bread cut into triangles.\nAssortment:\n- 12 smoked salmon and cream cheese clubs\n- 12 chicken breast clubs',
    seoTitle: 'Club sandwich platter for corporate events in Paris',
    seoArticle: `<p>Twenty-four club sandwiches on soft brioche bread, cut into triangles: half smoked salmon and cream cheese, half chicken breast. Pork-free, like the whole menu.</p><p>The savoury platter for a working lunch, a welcome reception or an afterwork.</p>${LIVRAISON}`,
  },
  'plateau-fromages-affines': {
    name: 'Aged cheese platter',
    shortName: 'Aged cheeses',
    qty: 'To share',
    description: 'A selection of matured cheeses with fresh fruit and artisan bread.',
    ingredients: 'Assorted matured cheeses, fresh fruit and artisan bread.',
    seoTitle: 'Matured cheese platter for corporate events in Paris',
    seoArticle: `<p>A selection of matured cheeses, with fresh fruit and artisan bread. Priced on request, because the size depends on the headcount.</p><p>It closes a buffet or stands on its own at an afterwork, and it is the platter people come back to.</p>${LIVRAISON}`,
  },

  // ── Pâtisseries ──────────────────────────────────────────────────────
  'madeleines-octobre-rose': {
    name: 'Box of 10 Pink October madeleines',
    shortName: 'Pink October box',
    qty: '10 pieces', description: "Exceptional madeleines with pink icing, Octobre Rose edition",
    ingredients: 'Wheat flour, butter, eggs, cane sugar, honey. Pink icing and piped decoration. Made by Mado Paris.',
    seoTitle: 'Octobre Rose madeleine box for companies in Paris',
    seoArticle: `<p>Our Mado Paris madeleines in their Octobre Rose edition: pink icing and a piped decoration. For every box sold, €1 goes to the Ruban Rose association.</p>` + LIVRAISON,
  },
  'madeleines-10': {
    name: 'Box of 10 exceptional madeleines',
    shortName: 'Box of 10 exceptional madeleines',
    qty: '10 pieces', description: '10 exceptional madeleines',
    ingredients: 'Wheat flour, butter, eggs, cane sugar, honey, lemon zest. Made by Mado Paris.',
    seoTitle: 'Box of 10 artisan madeleines in Paris',
    seoArticle: `<p>Ten madeleines baked by Mado Paris: butter, honey and lemon zest, and the hump that tells you they were made properly.</p><p>The small box, for a team of four to six or a thank-you gift.</p>` + LIVRAISON,
  },
  'madeleines-20': {
    name: 'Box of 20 exceptional madeleines',
    shortName: 'Box of 20 exceptional madeleines',
    qty: '20 pieces', description: '20 exceptional madeleines',
    ingredients: 'Wheat flour, butter, eggs, cane sugar, honey, lemon zest. Made by Mado Paris.',
    seoTitle: 'Box of 20 madeleines for companies in Paris',
    seoArticle: `<p>Twenty madeleines by Mado Paris, the size most teams order: enough for eight to twelve people with a hot drink.</p>` + LIVRAISON,
  },
  'madeleines-50': {
    name: 'Box of 50 exceptional madeleines',
    shortName: 'Box of 50 exceptional madeleines',
    qty: '50 pieces', description: '50 exceptional madeleines',
    ingredients: 'Wheat flour, butter, eggs, cane sugar, honey, lemon zest. Made by Mado Paris.',
    seoTitle: 'Large box of 50 madeleines in Paris',
    seoArticle: `<p>The large box: fifty madeleines by Mado Paris, for twenty-five to thirty people. The format for a whole-floor break or a seminar.</p>` + LIVRAISON,
  },
  'cake-marbre': {
    name: 'Homemade marble loaf cake',
    shortName: 'Marble loaf cake',
    qty: '5 to 6 people', description: '5 to 6 people',
    ingredients: 'Chocolate marble cake, sliced on a platter. An elegant contrast, soft throughout. The first choice for a balanced pastry platter. The most classic. Serves 5 to 6.',
    seoTitle: 'Homemade marble cake delivered in Paris',
    seoArticle: `<p>The marble cake is the one nobody turns down. Sliced on a platter, ready to serve, it is the safe bet of an afternoon break.</p>` + LIVRAISON,
  },
  'cake-poire': {
    name: 'Homemade pear loaf cake',
    shortName: 'Pear loaf cake',
    qty: '5 to 6 people', description: '5 to 6 people',
    ingredients: 'Fresh pear cake, sliced on a platter. The lightest and fruitiest of the range. Delicate and indulgent. Serves 5 to 6.',
    seoTitle: 'Homemade pear cake for corporate catering in Paris',
    seoArticle: `<p>The lightest of the range: fresh pear, a fine crumb, nothing heavy. The one to pick when the break follows a lunch.</p>` + LIVRAISON,
  },
  'cake-framboise': {
    name: 'Homemade raspberry loaf cake',
    shortName: 'Raspberry loaf cake',
    qty: '5 to 6 people', description: '5 to 6 people',
    ingredients: 'Raspberry cake, sliced on a platter. Sharp and indulgent, the right balance between richness and lightness. The afternoon favourite. Serves 5 to 6.',
    seoTitle: 'Homemade raspberry cake delivered in Paris',
    seoArticle: `<p>Sharp and indulgent at once: raspberries cut through the butter, which is what makes this the afternoon favourite.</p>` + LIVRAISON,
  },
  'cake-chocolat': {
    name: 'Homemade chocolate chip loaf cake',
    shortName: 'Chocolate chip loaf cake',
    qty: '5 to 6 people', description: '5 to 6 people',
    ingredients: 'Cake with 64% dark chocolate chips, sliced on a platter. The inevitable classic, the one that pleases everyone. The most requested in offices. Serves 5 to 6.',
    seoTitle: 'Homemade chocolate chip cake in Paris',
    seoArticle: `<p>Dark chocolate chips at 64% cocoa. The most requested cake in offices, and the one that disappears first.</p>` + LIVRAISON,
  },
  'cake-citron': {
    name: 'Homemade lemon loaf cake',
    shortName: 'Lemon loaf cake',
    qty: '5 to 6 people', description: '5 to 6 people',
    ingredients: 'Homemade lemon cake, sliced on a platter. Bright, lively and airy. The note that lifts a platter. Serves 5 to 6.',
    seoTitle: 'Homemade lemon cake delivered in Paris',
    seoArticle: `<p>Lemon: bright, lively, and the slice that lifts a platter otherwise built on chocolate.</p>` + LIVRAISON,
  },
  'cake-pistache': {
    name: 'Homemade pistachio loaf cake',
    shortName: 'Pistachio loaf cake',
    qty: '5 to 6 people', description: '5 to 6 people',
    ingredients: 'Pistachio cake, sliced on a platter. A roasted flavour and a natural colour. The elegant one of the range. Contains nuts. Serves 5 to 6.',
    seoTitle: 'Homemade pistachio cake for corporate catering in Paris',
    seoArticle: `<p>A roasted pistachio flavour and a natural colour, no green colouring. The elegant one of the range, for a break you want to be noticed.</p>` + LIVRAISON,
  },
  'carrot-cake': {
    name: 'Homemade carrot cake',
    shortName: 'Carrot cake',
    qty: '5 to 6 people', description: '5 to 6 people',
    ingredients: 'Homemade carrot cake, sliced on a platter. Grated carrot and warm spices, a soft, fragrant crumb. The one that breaks from chocolate. Serves 5 to 6.',
    seoTitle: 'Homemade carrot cake for corporate catering in Paris',
    seoArticle: `<p>Grated carrot and warm spices, a soft and fragrant crumb. The one to order when the room has had enough chocolate.</p>` + LIVRAISON,
  },
  'macarons': {
    name: 'Box of exceptional macarons',
    shortName: 'Box of macarons',
    qty: '24 pieces',
    description: 'Coffee, Salted caramel, Blackcurrant with blueberry centre, Dark chocolate, Lemon, Strawberry, Raspberry, Passion fruit with raspberry centre, Yuzu, Pistachio with raspberry centre, Almond and hazelnut praline, Kalamansi with red berry centre',
    ingredients: '24 artisan macarons made with Italian meringue. Shells with 33% almonds, no artificial flavouring. Ganaches and creams according to the flavour.',
    seoTitle: 'Pierre Morel macarons delivered in Paris',
    seoArticle: `<p>Twenty-four macarons by Pierre Morel, made with Italian meringue and shells containing 33% almonds, with no artificial flavouring. Twelve flavours in one box.</p><p>The pastry that signals the break is not an afterthought.</p>` + LIVRAISON,
  },
  'cookies': {
    name: 'Assorted homemade cookies',
    shortName: 'Assorted cookies',
    qty: '6 pieces', description: 'Salted caramel, Chocolate chip, Pistachio, White chocolate',
    ingredients: '6 assorted homemade artisan cookies. Fine butter, brown sugar, eggs and premium ingredients according to the flavour.',
    seoTitle: 'Laura Todd cookies in Paris',
    seoArticle: `<p>Six assorted cookies, soft in the middle and crisp at the edge. Salted caramel, chocolate chip, pistachio, white chocolate.</p>` + LIVRAISON,
  },

  // ── Sucré-salé ───────────────────────────────────────────────────────
  'brochettes-fruits': {
    name: 'Fresh fruit skewers',
    shortName: 'Fresh fruit skewers',
    qty: '20 pieces', description: '20 skewers of seasonal fresh fruit',
    ingredients: 'An assortment of seasonal fresh fruit: strawberries, melon, pineapple, grapes, kiwi, blueberries, depending on what is good. No added sugar.',
    seoTitle: 'Fresh fruit skewers in Paris',
    seoArticle: `<p>Twenty skewers of seasonal fruit, cut the same morning, no added sugar. The fresh thing on a table that is otherwise all pastry.</p>` + LIVRAISON,
  },
  'panier-fruits': {
    name: 'Seasonal fruit basket',
    shortName: 'Fruit basket',
    qty: '10 to 12 pieces of fruit', description: '10 to 12 whole seasonal fruits',
    ingredients: 'An assortment of whole seasonal fruit: apples, pears, oranges, mandarins, bananas, kiwis, depending on what is good. Graded, washed and ready to set out in a basket.',
    seoTitle: 'Seasonal fruit basket in Paris',
    seoArticle: `<p>Ten to twelve whole fruits, washed and ready to set out. The option that lasts the week rather than the morning.</p>` + LIVRAISON,
  },
  'panna-cotta': {
    name: 'Homemade panna cotta',
    shortName: 'Panna cotta',
    qty: '6 pieces', description: '6 pots · red berry coulis',
    ingredients: 'Whole cream, sugar, gelatine, fresh red berries. A creamy, delicate texture with a generous coulis. Served in individual pots.',
    seoTitle: 'Red berry panna cotta in Paris',
    seoArticle: `<p>Six individual pots, creamy with a generous red berry coulis. Served cold, eaten with a spoon, nothing to plate up.</p>` + LIVRAISON,
  },
  'compote-pomme': {
    name: 'Orchard apple compote',
    shortName: 'Apple compote',
    qty: '6 pieces', description: '6 pots · French orchard apples',
    ingredients: 'French apples cooked slowly, with the natural flavour of the orchard. 100% vegan, gluten-free, allergen-free. Served in individual pots.',
    seoTitle: 'Artisan apple compote in Paris',
    seoArticle: `<p>French apples cooked slowly, nothing else. Vegan, gluten-free and free of the fourteen listed allergens: the pot you can hand to anyone without asking.</p>` + LIVRAISON,
  },
  'verrine-salade-fruits': {
    name: 'Fruit salad pot',
    shortName: 'Fruit salad',
    qty: '6 pieces', description: 'Fresh fruit salad, diced, served in individual pots.',
    ingredients: 'Seasonal fresh fruit cut into cubes, served in individual pots.',
    seoTitle: 'Fresh fruit salad pots in Paris',
    seoArticle: `<p>Seasonal fruit, diced and served in individual pots. Nothing to serve, nothing to cut, nothing to wash.</p>` + LIVRAISON,
  },
  'yaourt-fermier': {
    name: 'Farmhouse yoghurt',
    shortName: 'Farmhouse yoghurt',
    qty: '6 pieces', description: 'Fruit yoghurt from La Ferme de Viltain, made with their own cows’ milk.',
    ingredients: "Farmhouse yoghurt made with fresh cow's milk and seasonal fruit. Individual pot.",
    seoTitle: 'Farmhouse fruit yoghurt in Paris',
    seoArticle: `<p>Yoghurt from La Ferme de Viltain, in Jouy-en-Josas, made with milk from their own herd. Twenty kilometres from Paris.</p>` + LIVRAISON,
  },
  'yaourt-granola': {
    name: 'Yoghurt with granola',
    shortName: 'Granola yoghurt',
    qty: '6 pieces', description: 'Creamy yoghurt with crunchy homemade granola',
    ingredients: 'Creamy yoghurt with homemade granola (oats, honey, almonds, hazelnuts). Individual pot.',
    seoTitle: 'Yoghurt with granola for corporate catering in Paris',
    seoArticle: `<p>Creamy yoghurt and homemade granola — oats, honey, almonds, hazelnuts — kept apart so the granola is still crunchy when it reaches the table.</p>` + LIVRAISON,
  },
  'banana-bread-sans-gluten': {
    name: 'Gluten-free banana bread',
    shortName: 'Banana bread',
    qty: '5 to 6 people', description: '5 to 6 people · gluten-free',
    ingredients: 'Gluten-free banana bread, sliced on a platter. Ripe bananas, rice flour and ground almonds, poppy seeds. Soft, lightly sweetened, gluten-free. Serves 5 to 6.',
    seoTitle: 'Gluten-free banana bread delivered in Paris',
    seoArticle: `<p>Ripe bananas, rice flour and ground almonds: a gluten-free cake that nobody treats as the gluten-free option. Soft and lightly sweetened.</p><p>Tell us how many guests need it when you order and we prepare it separately, labelled.</p>` + LIVRAISON,
  },
  'brioche-babka': {
    name: 'Babka brioche',
    shortName: 'Babka brioche',
    qty: '5 to 6 people', description: 'Chocolate babka, sliced.',
    ingredients: 'Soft brioche rolled with chocolate, served sliced.',
    seoTitle: 'Chocolate babka in Paris',
    seoArticle: `<p>A soft brioche rolled with chocolate, served sliced. Somewhere between a pastry and a cake, and it holds a whole table on its own.</p>` + LIVRAISON,
  },
}

export const enPetitDejeuner = (id) => EN_PETITS_DEJEUNERS[id] || null
export const slugsPetitsDejeunersEn = () => Object.keys(EN_PETITS_DEJEUNERS)

/*
  Fiche produit dans la langue demandée.

  Plutôt que de dupliquer la page — elle fait six cents lignes et son propre
  gabarit — on fusionne la surcouche anglaise par-dessus les données
  françaises. Tout ce qui suit dans la page continue de fonctionner sans
  changement, et un champ non traduit reste en français au lieu de disparaître.
*/
export function produitLocalise(produit, langue) {
  if (!produit || langue !== 'en') return produit
  const en = EN_PETITS_DEJEUNERS[produit.id]
  if (!en) return produit
  return {
    ...produit,
    ...en,
    dietary: traduireRegimes(produit.dietary),
    allergens: traduireAllergenes(produit.allergens),
  }
}
