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
}

export const traduireRegimes = (l = []) => l.map(x => REGIMES[x] || x)
export const traduireAllergenes = (l = []) => l.map(x => ALLERGENES[x] || x)

const LIVRAISON = `<h2>Delivered across Paris and Île-de-France</h2><p>Order until 2 pm the day before, delivered on site from 6:30 am. Company invoice showing VAT, personalised quote within 24 hours.</p>`

export const EN_PETITS_DEJEUNERS = {
  'viennoiseries-duo': {
    qty: '16 pieces',
    description: '8 mini croissants, 8 mini pains au chocolat',
    ingredients: 'A platter of 16 mini pastries: 8 croissants and 8 pains au chocolat made with Charentes-Poitou butter. Proper lamination, soft in the mouth, baked fresh the same morning.',
    seoTitle: 'Croissant and pain au chocolat platter for office breakfasts in Paris',
    seoArticle: `<p>The duo platter is the safe bet of the corporate breakfast in Paris: 8 mini croissants and 8 mini pains au chocolat, pure Charentes-Poitou butter, baked the same morning by our partner baker.</p><p>Sixteen pieces feed six to eight people alongside a hot drink, or ten if other things are on the table.</p>${LIVRAISON}`,
  },
  'chouquettes': {
    qty: '30 pieces',
    description: '30 pieces · Crisp and golden',
    ingredients: 'A platter of 30 mini chouquettes with caramelised pearl sugar. Light, crisp and golden, out of the oven the same morning.',
    seoTitle: 'Chouquette platter delivered in Paris for office breakfasts',
    seoArticle: `<p>Chouquettes turn a coffee break into something people gather around. Thirty light choux buns with caramelised pearl sugar, baked the same morning.</p><p>They are eaten with the fingers, leave no crumbs on a keyboard and suit a stand-up meeting as well as a seated breakfast.</p>${LIVRAISON}`,
  },
  'viennoiseries-melangees': {
    qty: '30 pieces',
    description: '12 mini croissants, 12 mini pains au chocolat, 6 mini pains aux raisins',
    ingredients: 'A premium platter of 30 assorted pastries: 12 mini croissants, 12 mini pains au chocolat, 6 mini pains aux raisins. Charentes-Poitou butter, French flour, free-range eggs.',
    seoTitle: 'Assorted pastry platter for corporate breakfasts in Paris',
    seoArticle: `<p>Thirty assorted pastries, the platter for a room where tastes differ: croissants, pains au chocolat and pains aux raisins, all pure butter.</p><p>Count two pieces per person for a standard breakfast, three if it replaces lunch for people arriving early.</p>${LIVRAISON}`,
  },
  'crepes': {
    qty: '20 pieces',
    description: '20 large crêpes',
    ingredients: 'Soft homemade crêpes, 20 large pieces. Traditional rested batter. Includes Alain Milliat jams and chocolate spread.',
    seoTitle: 'Homemade crêpes for corporate breakfasts in Paris',
    seoArticle: `<p>Twenty large homemade crêpes, with Alain Milliat jams and chocolate spread. The batter is rested the traditional way, which is what makes them soft rather than rubbery.</p><p>They work for a breakfast as well as for an afternoon break, and everyone dresses their own.</p>${LIVRAISON}`,
  },
  'mini-crepes': {
    qty: '20 pieces',
    description: '20 soft mini crêpes',
    ingredients: 'Soft homemade mini crêpes, 20 pieces. Traditional rested batter. Includes Alain Milliat jams and chocolate spread.',
    seoTitle: 'Mini crêpes for corporate breakfasts in Paris',
    seoArticle: `<p>The same batter as our large crêpes, in a format you can eat standing with one hand. Twenty pieces, with Alain Milliat jams and chocolate spread.</p><p>The right choice for a breakfast where people move around rather than sit down.</p>${LIVRAISON}`,
  },
  'cookie-geant': {
    qty: 'To share',
    description: 'A generous giant cookie to share',
    ingredients: 'Soft homemade giant cookie, cut into generous portions to share.',
    seoTitle: 'Homemade giant cookie for office events in Paris',
    seoArticle: `<p>One cookie, cut into generous portions. It lands on the table as a centrepiece rather than a plate of individual biscuits, which changes the moment.</p><p>Priced on request, because the size depends on the headcount.</p>${LIVRAISON}`,
  },
  'navettes-salees': {
    qty: '20 pieces',
    description: '10 cucumber tzatziki, 10 smoked salmon with cream cheese and dill',
    ingredients: 'Homemade brioche rolls. Fillings: 10 rolls with homemade tzatziki and fresh cucumber, 10 rolls with smoked salmon, cream cheese and fresh dill.',
    seoTitle: 'Savoury brioche roll platter for corporate events in Paris',
    seoArticle: `<p>Twenty homemade brioche rolls, half with cucumber tzatziki, half with smoked salmon, cream cheese and fresh dill. The savoury option for a breakfast that has to hold people until lunch.</p><p>They are eaten with the fingers and keep their shape on a buffet for a couple of hours.</p>${LIVRAISON}`,
  },
  'navettes-salees-40': {
    qty: '40 pieces',
    description: '20 tuna with fresh herbs, 20 smoked salmon with cream cheese and dill',
    ingredients: 'Homemade brioche rolls, large platter. Fillings: 20 rolls with tuna and fresh herbs, 20 rolls with smoked salmon, cream cheese and fresh dill.',
    seoTitle: 'Large savoury brioche roll platter for corporate events in Paris',
    seoArticle: `<p>The large platter: forty homemade brioche rolls, half tuna with fresh herbs, half smoked salmon with cream cheese and dill. Better value per piece than two platters of twenty.</p><p>The format for a welcome reception or a savoury breakfast for twenty people and more.</p>${LIVRAISON}`,
  },
  'pains-cereales-tranches': {
    qty: '4 to 6 people',
    description: '10 to 12 slices, 3 butters and 3 Alain Milliat jams included',
    ingredients: 'Homemade multigrain bread, sliced. Includes 3 portions of salted butter and 3 pots of Alain Milliat jam.',
    seoTitle: 'Sliced multigrain bread for office breakfasts in Paris',
    seoArticle: `<p>Sliced in advance, with salted butter and Alain Milliat jams: nothing to do but put it on the table. For a breakfast or a quick break.</p><p>Ten to twelve slices, enough for four to six people alongside a hot drink.</p>${LIVRAISON}`,
  },
  'pain-mais-sans-gluten': {
    qty: '4 to 6 people',
    description: '10 to 12 slices, 3 butters and 3 Alain Milliat jams included',
    ingredients: 'Gluten-free corn bread, sliced. Includes 3 portions of salted butter and 3 pots of Alain Milliat jam.',
    seoTitle: 'Gluten-free bread for office breakfasts in Paris',
    seoArticle: `<p>The gluten-free option that does not feel like one: corn bread, sliced, with salted butter and Alain Milliat jams.</p><p>Tell us how many guests need it when you order and we prepare it separately, labelled, so there is no doubt on the table.</p>${LIVRAISON}`,
  },
  'plateau-clubs-signature': {
    qty: '24 pieces',
    description: '12 smoked salmon and cream cheese, 12 turkey ham',
    ingredients: 'Soft brioche bread cut into triangles.\nAssortment:\n- 12 smoked salmon and cream cheese clubs\n- 12 turkey ham clubs',
    seoTitle: 'Club sandwich platter for corporate events in Paris',
    seoArticle: `<p>Twenty-four club sandwiches on soft brioche bread, cut into triangles: half smoked salmon and cream cheese, half turkey ham. Pork-free, like the whole menu.</p><p>The savoury platter for a working lunch, a welcome reception or an afterwork.</p>${LIVRAISON}`,
  },
  'plateau-fromages-affines': {
    qty: 'To share',
    description: 'A selection of matured cheeses with fresh fruit and artisan bread.',
    ingredients: 'Assorted matured cheeses, fresh fruit and artisan bread.',
    seoTitle: 'Matured cheese platter for corporate events in Paris',
    seoArticle: `<p>A selection of matured cheeses, with fresh fruit and artisan bread. Priced on request, because the size depends on the headcount.</p><p>It closes a buffet or stands on its own at an afterwork, and it is the platter people come back to.</p>${LIVRAISON}`,
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
