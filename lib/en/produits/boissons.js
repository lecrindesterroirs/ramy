/*
  Boissons, textes anglais.

  Surcouche de texte seulement : prix, photos, formats et identifiants restent
  lus dans lib/boissonsData.js, qui est la seule source.

  Les noms de marque ne sont pas traduits — Alain Milliat, Mariage Frères,
  Evian, Badoit, L'Eau Neuve, Vergers de Plaisir — et les noms de produit le
  sont, parce qu'un lecteur anglophone ne devine pas « Nectar d'Abricot ».
*/

import { REGIMES, ALLERGENES } from './petitsDejeuners'

const LIVRAISON = `<h2>Ordering your drinks in Paris and Île-de-France</h2><p>Delivered from <strong>6:30 am</strong> across Paris and Île-de-France. Order until 2 pm the day before. Company invoice showing VAT.</p>`

/* Régimes et allergènes : mêmes tables que les petits-déjeuners, plus les
   deux mentions propres aux boissons. */
const REGIMES_BOISSONS = { ...REGIMES, 'Bio': 'Organic', 'Sans alcool': 'Alcohol-free' }

export const traduireRegimesBoisson = (l = []) => l.map(x => REGIMES_BOISSONS[x] || x)
export const traduireAllergenesBoisson = (l = []) => l.map(x => ALLERGENES[x] || x)

/* Formats : « 1 litre · 6 à 8 tasses » → « 1 litre · 6 to 8 cups ». On
   reformate la chaîne française, on ne redéclare pas les contenances. */
export function qtyEn(qty) {
  if (!qty) return qty
  return String(qty)
    .replace(/(\d+)\s*à\s*(\d+)\s*tasses/i, '$1 to $2 cups')
    .replace(/\bbouteille en verre\b/i, 'glass bottle')
    .replace(/\bbouteilles?\b/i, 'bottle')
    .replace(/\bbrique\b/i, 'carton')
    .replace(/\bjarre\b/i, 'dispenser')
    .replace(/\blitres\b/i, 'litres')
    .replace(/\blitre\b/i, 'litre')
}

export const EN_BOISSONS = {
  'jus-pomme': {
    name: 'Apple Juice',
    description: '1 litre · Alain Milliat apple juice',
    ingredients: 'Pressed French apples, 100% pure juice. No added sugar, no preservatives, no concentrate. Alain Milliat.',
    seoTitle: 'Alain Milliat apple juice',
    seoArticle: `<p><strong>Alain Milliat apple juice</strong> is one of the absolute benchmarks of artisan juice in France. Made from carefully selected French apples, pressed with no concentrate and no added sugar, it has a clarity of taste and a freshness that turn any break into something people notice.</p><h2>Alain Milliat: the standard for artisan juice</h2><p>Alain Milliat built his reputation on a simple principle: use only fruit of exceptional quality and press it without tricks. His juices are served by leading restaurants and high-end houses for their honesty and aromatic intensity. Putting an Alain Milliat juice in front of your team or your clients means giving them the best version of a fruit juice there is.</p><h2>For your corporate breakfasts and breaks</h2><p>One litre of apple juice serves <strong>six to eight people</strong> at a corporate breakfast. With our artisan pastries and a flask of coffee, it makes a welcome that genuinely stands out.</p>${LIVRAISON}`,
  },
  'jus-orange': {
    name: 'Orange Juice',
    description: '1 litre · Alain Milliat orange juice',
    ingredients: 'Selected oranges, 100% pure juice. No added sugar, no preservatives, no concentrate. Alain Milliat.',
    seoTitle: 'Alain Milliat orange juice',
    seoArticle: `<p><strong>Alain Milliat orange juice</strong> is the absolute classic, made to the standard of the best houses. Pressed from oranges picked for their ripeness and natural sugar, it strikes an exact balance between sweetness and acidity, with no added sugar, no concentrate and no compromise.</p><h2>The difference your team notices</h2><p>A good orange juice announces itself: the natural colour, the strong smell, the slight pulp. Next to an industrial juice in a plastic bottle, Alain Milliat orange juice speaks for itself. It is the kind of detail that, repeated, leaves a lasting impression on colleagues and clients.</p><h2>The one thing a corporate breakfast cannot do without</h2><p>Orange juice is still the most asked-for drink at corporate breakfasts. One litre serves <strong>six to eight people</strong>. With our artisan pastries it makes a classic, well-judged welcome for board meetings, offsites and early training sessions.</p>${LIVRAISON}`,
  },
  'jus-abricot': {
    name: 'Apricot Nectar',
    description: '1 litre · Alain Milliat apricot nectar',
    ingredients: 'Selected apricots, sugar, water. Nectar made by Alain Milliat. No artificial flavouring, no colouring.',
    seoTitle: 'Alain Milliat apricot nectar',
    seoArticle: `<p><strong>Alain Milliat apricot nectar</strong> is one of the most popular things in the range. Its golden colour, its strong smell of sun-ripened apricot and its velvet texture make it a drink that surprises people on the first mouthful. A good way to bring something less expected to a corporate breakfast.</p><h2>Apricot, handled with care</h2><p>Alain Milliat picks his apricots at full ripeness to get a dense, fragrant nectar. The texture is generous without being heavy, and the balance of sugar and acidity is under control. A drink that talks about sun and quality, and sets your spread apart.</p><h2>To widen the drinks tray</h2><p>Alongside a breakfast or an afternoon break, apricot nectar is an elegant alternative to the usual orange juice. Orange juice plus apricot nectar works very well for teams who like some variety.</p>${LIVRAISON}`,
  },
  'jus-peche': {
    name: 'Peach Nectar',
    description: '1 litre · Alain Milliat peach nectar',
    ingredients: 'Selected peaches, sugar, water. Nectar made by Alain Milliat. No artificial flavouring, no colouring.',
    seoTitle: 'Alain Milliat peach nectar',
    seoArticle: `<p><strong>Alain Milliat peach nectar</strong> has the smell of a ripe peach and a soft, full texture. Made from fruit picked at ripeness, with no artificial flavouring and no colouring, it is the gentlest of the nectars — the one that wins over people who find orange juice too sharp first thing in the morning.</p><h2>The gentle option on the breakfast table</h2><p>On a corporate breakfast, one litre serves <strong>six to eight people</strong>. Its mildness goes well with butter pastries and with a plate of cut fruit.</p>${LIVRAISON}`,
  },
  'jus-fraise': {
    name: 'Strawberry Nectar',
    description: '1 litre · Alain Milliat strawberry nectar',
    ingredients: 'Selected strawberries, sugar, water. Nectar made by Alain Milliat. No artificial flavouring, no colouring.',
    seoTitle: 'Alain Milliat strawberry nectar',
    seoArticle: `<p><strong>Alain Milliat strawberry nectar</strong> is the one people remark on, because almost nobody expects a strawberry drink at the office. Deep red, strongly scented, made from selected fruit with no artificial flavouring and no colouring.</p><h2>The drink people comment on</h2><p>On a breakfast or an afternoon break, one litre serves <strong>six to eight people</strong>. It is the bottle that empties first when there is a choice on the table.</p>${LIVRAISON}`,
  },
  'jus-orange-presse': {
    name: 'Freshly Squeezed Orange Juice',
    description: '1 litre · Pure juice, squeezed to order',
    ingredients: 'Oranges squeezed to order the same morning. 100% pure juice, no added sugar, no preservatives, no concentrate.',
    seoTitle: 'Freshly squeezed orange juice, Paris delivery',
    seoArticle: `<p>Our <strong>freshly squeezed orange juice</strong> is pressed the same morning, a few hours before it reaches your offices. Nothing added, nothing taken out: pure juice, pulp included, with the smell you only get from fruit squeezed on the day.</p><h2>Squeezed the same morning, not the day before</h2><p>A squeezed juice loses its aromatics within hours, which is why ours is made on the morning of the delivery rather than prepared in advance. It is the most direct thing we serve, and the one that marks the difference with a bottled juice most clearly.</p><h2>For your corporate breakfasts</h2><p>One litre serves <strong>six to eight people</strong>. The right choice for a welcome you want to get right: a board breakfast, a client meeting, a first morning for a new joiner.</p>${LIVRAISON}`,
  },
  'jus-pomme-verger': {
    name: 'Orchard Apple Juice',
    description: '1 litre · Vergers de Plaisir, Yvelines',
    ingredients: 'Apples from les Vergers de Plaisir (Yvelines), bought direct from the grower. 100% pure juice, no added sugar, no concentrate.',
    seoTitle: 'Orchard apple juice from the Yvelines',
    seoArticle: `<p>Our <strong>orchard apple juice</strong> comes from les Vergers de Plaisir, in the Yvelines, bought direct from the grower. Thirty kilometres from your offices: a short, named, verifiable supply chain.</p><h2>A grower you can name</h2><p>Buying direct means the fruit does not travel and the juice carries the taste of the orchard's own varieties, which changes from one pressing to the next. It is the opposite of a standardised juice, and it is the sort of thing that is worth saying out loud when a client asks where the breakfast came from.</p><h2>For your breakfasts and your break rooms</h2><p>One litre serves <strong>six to eight people</strong>. Works well as a standing weekly order to keep a break room stocked.</p>${LIVRAISON}`,
  },
  'jus-pomme-framboise': {
    name: 'Apple and Raspberry Juice',
    description: '1 litre · Apple and raspberry juice',
    ingredients: 'Pressed apples, raspberries. No added sugar, no preservatives, no concentrate.',
    seoTitle: 'Apple and raspberry juice, Paris delivery',
    seoArticle: `<p>Our <strong>apple and raspberry juice</strong> puts the sharpness of the berry against the mildness of the apple, with no added sugar and no concentrate. Its colour alone lifts a drinks tray.</p><h2>The juice that is not orange juice</h2><p>On a breakfast table where orange juice is a given, this is the second bottle that gives people a choice. One litre serves <strong>six to eight people</strong>.</p>${LIVRAISON}`,
  },
  'jus-tomate-rouge': {
    name: 'Red Tomato Juice',
    description: '1 litre · Alain Milliat tomato juice',
    ingredients: 'Selected red tomatoes, salt, spices. 100% pure juice, no preservatives, no concentrate. Alain Milliat.',
    seoTitle: 'Alain Milliat red tomato juice',
    seoArticle: `<p><strong>Alain Milliat red tomato juice</strong> is the savoury option in the range: ripe tomatoes, salt and spices, pressed with no concentrate. It belongs at a lunch or a drinks reception rather than at breakfast.</p><h2>For a lunch or an alcohol-free reception</h2><p>Tomato juice is the base of an alcohol-free aperitif that actually tastes of something. One litre serves <strong>six to eight people</strong>, served cold.</p>${LIVRAISON}`,
  },
  'nectar-mangue': {
    name: 'Mango Nectar',
    description: '1 litre · Alain Milliat mango nectar',
    ingredients: 'Selected mangoes, sugar, water. Nectar made by Alain Milliat. No artificial flavouring, no colouring.',
    seoTitle: 'Alain Milliat mango nectar',
    seoArticle: `<p><strong>Alain Milliat mango nectar</strong> is thick, deeply scented and almost a dessert in itself. Made from selected fruit, with no artificial flavouring and no colouring.</p><h2>The one that changes the tray</h2><p>Next to apple and orange, mango brings a warmth that people notice straight away. One litre serves <strong>six to eight people</strong>.</p>${LIVRAISON}`,
  },
  'nectar-passion': {
    name: 'Passion Fruit Nectar',
    description: '1 litre · Alain Milliat passion fruit nectar',
    ingredients: 'Selected passion fruit, sugar, water. Nectar made by Alain Milliat. No artificial flavouring, no colouring.',
    seoTitle: 'Alain Milliat passion fruit nectar',
    seoArticle: `<p><strong>Alain Milliat passion fruit nectar</strong> is the sharpest and the most fragrant of the range: a strong, slightly acidic fruit that wakes a table up. No artificial flavouring, no colouring.</p><h2>Sharp, and all the better for it</h2><p>It works at breakfast as well as at a drinks reception, where it makes a serious alcohol-free option. One litre serves <strong>six to eight people</strong>.</p>${LIVRAISON}`,
  },
  'nectar-mangue-passion': {
    name: 'Organic Mango and Passion Fruit Nectar',
    description: '1 litre · Alain Milliat organic mango and passion fruit nectar',
    ingredients: 'Organically grown mangoes and passion fruit, cane sugar, water. Organic nectar made by Alain Milliat. No artificial flavouring, no colouring.',
    seoTitle: 'Alain Milliat organic mango and passion fruit nectar',
    seoArticle: `<p><strong>Alain Milliat organic mango and passion fruit nectar</strong> pairs the thickness of mango with the sharpness of passion fruit, from organically grown fruit and cane sugar.</p><h2>Organic, and certified as such</h2><p>This is the organic reference in our drinks range, for companies with a certified-sourcing requirement. One litre serves <strong>six to eight people</strong>.</p>${LIVRAISON}`,
  },
  'infusion-gingembre-1l': {
    name: 'Organic Lime and Ginger Infusion',
    description: '1 litre · Glass bottle, organic infusion of lime and fresh ginger',
    ingredients: 'Infusion of organic fresh ginger and organic lime, water, organic cane sugar. Made by hand, no artificial flavouring, no preservatives.',
    seoTitle: 'Organic lime and ginger infusion, 1 litre bottle, Paris',
    seoArticle: `<p>Our <strong>organic lime and ginger infusion</strong> is brewed from fresh ginger and lime, lightly sweetened with organic cane sugar and bottled in glass. Not a soft drink and not a juice: a cold infusion with a real kick of ginger at the end.</p><h2>The alcohol-free drink that is not a fruit juice</h2><p>At a reception or an afterwork, people who are not drinking usually get a choice between water and a fruit juice. This gives them a third option with something to say for itself — which is the whole point of serving it.</p><h2>Served cold, one litre for six to eight glasses</h2><p>Comes in a glass bottle, ready to serve. For a larger headcount, the same infusion exists in a ten-litre dispenser.</p>${LIVRAISON}`,
  },
  'infusion-gingembre-10l': {
    name: 'Organic Lime and Ginger Infusion — 10 L dispenser',
    description: '10 litres · Dispenser, organic infusion of lime and fresh ginger',
    ingredients: 'Infusion of organic fresh ginger and organic lime, water, organic cane sugar. Made by hand, no artificial flavouring, no preservatives.',
    seoTitle: 'Organic lime and ginger infusion, 10 litre dispenser, Paris',
    seoArticle: `<p>Our <strong>organic lime and ginger infusion</strong> in a ten-litre dispenser is the format for a large headcount: a tap, a stack of glasses, and nothing to open all afternoon.</p><h2>Ten litres, around sixty to eighty glasses</h2><p>The right choice for an offsite, a general meeting or a launch where people help themselves over several hours. Delivered ready to serve, with the dispenser collected afterwards.</p><h2>Fresh ginger, brewed not flavoured</h2><p>Fresh organic ginger and organic lime, brewed and lightly sweetened with cane sugar. No artificial flavouring and no preservatives, which is rare at this volume.</p>${LIVRAISON}`,
  },
  'infusion-passion-1l': {
    name: 'Organic Passion Fruit Infusion',
    description: '1 litre · Glass bottle, organic passion fruit infusion',
    ingredients: 'Organic passion fruit infusion, water, organic cane sugar. Made by hand, no artificial flavouring, no preservatives.',
    seoTitle: 'Organic passion fruit infusion, 1 litre bottle, Paris',
    seoArticle: `<p>Our <strong>organic passion fruit infusion</strong> is brewed from organic passion fruit, lightly sweetened with cane sugar and bottled in glass. Lighter than a nectar, sharper than a soft drink.</p><h2>For a reception where people are not drinking</h2><p>Served cold in a wine glass, it holds its own next to a glass of wine, which is more than can be said for a carton of fruit juice. One litre makes six to eight glasses.</p><h2>Also in a ten-litre dispenser</h2><p>For a larger headcount, the same infusion exists in a dispenser with a tap.</p>${LIVRAISON}`,
  },
  'infusion-passion-10l': {
    name: 'Organic Passion Fruit Infusion — 10 L dispenser',
    description: '10 litres · Dispenser, organic passion fruit infusion',
    ingredients: 'Organic passion fruit infusion, water, organic cane sugar. Made by hand, no artificial flavouring, no preservatives.',
    seoTitle: 'Organic passion fruit infusion, 10 litre dispenser, Paris',
    seoArticle: `<p>Our <strong>organic passion fruit infusion</strong> in a ten-litre dispenser covers a large room: a tap, glasses, and no bottles to open.</p><h2>Ten litres, around sixty to eighty glasses</h2><p>For an offsite, a general meeting or an afterwork where people serve themselves over the afternoon. Delivered ready to serve, dispenser collected afterwards.</p><h2>Brewed from organic fruit</h2><p>Organic passion fruit, water and organic cane sugar, with no artificial flavouring and no preservatives.</p>${LIVRAISON}`,
  },
  'chardonnay-blanc-de-blancs-0': {
    name: 'Blanc de Blancs Chardonnay, 0% Alcohol',
    description: '75 cl · Alcohol-free Chardonnay grape juice, Blanc de Blancs style',
    ingredients: 'Chardonnay grapes from the Coste Blanche plot (limestone hillside in the south of France), blended with 10% verjuice from white varieties. 0% alcohol, no added sugar.',
    seoTitle: 'Alcohol-free Chardonnay grape juice, Paris',
    seoArticle: `<p>Our <strong>alcohol-free Blanc de Blancs Chardonnay</strong> is not a dealcoholised wine and not a grape soft drink: it is Chardonnay juice from a single plot, blended with ten per cent verjuice to give it the backbone and the dryness that a juice normally lacks. 0% alcohol, no added sugar.</p><h2>Something to put in the glass of someone who is not drinking</h2><p>At a corporate reception, the colleague who does not drink alcohol — by choice, by conviction or because they are driving — usually ends up with water. This goes in a wine glass, it is dry, and it stands next to what everyone else is holding. That is the entire reason we stock it.</p><h2>A single plot, a named origin</h2><p>Grapes from the Coste Blanche plot, on a limestone hillside in the south of France. Contains sulphites.</p>${LIVRAISON}`,
  },
  'thermos-cafe': {
    name: 'Flask of Organic Coffee',
    description: '1 litre · Organic coffee, around 6 to 8 cups',
    ingredients: 'Selected organic arabica coffee, roasted by hand. Brewed the same morning and filled into an insulated flask.',
    seoTitle: 'Flask of organic coffee, Paris delivery',
    seoArticle: `<p>Our <strong>flasks of organic coffee</strong> are brewed the same morning from selected organic arabica, roasted by hand, and filled into insulated flasks so the coffee is still hot when the meeting starts.</p><h2>Hot coffee, not coffee from a machine</h2><p>One litre is around <strong>six to eight cups</strong>. Count one flask for six to eight people at a breakfast, two if the morning is long. Cups, sugar and milk come with it.</p><h2>The backbone of a corporate breakfast</h2><p>Pastries make the breakfast look good; the coffee is what people actually judge it on. This is the item not to cut.</p>${LIVRAISON}`,
  },
  'thermos-the': {
    name: 'Flask of Mariage Frères Tea',
    description: '1 litre · Mariage Frères tea, 6 to 8 cups',
    ingredients: 'Mariage Frères premium tea, brewed properly. Filled into an insulated flask.',
    seoTitle: 'Flask of Mariage Frères tea, Paris',
    seoArticle: `<p>Our <strong>flasks of tea</strong> are brewed with Mariage Frères tea, a Paris house founded in 1854, and filled into insulated flasks. Brewed properly, for the right length of time, rather than a teabag left in hot water.</p><h2>For the people who do not drink coffee</h2><p>On any team of ten there are two or three who want tea, and they are usually handed a dusty teabag. One litre is around <strong>six to eight cups</strong>.</p>${LIVRAISON}`,
  },
  'thermos-chocolat': {
    name: 'Flask of Hot Chocolate',
    description: '1 litre · Hand-made hot chocolate, 6 to 8 cups',
    ingredients: 'Whole milk, dark chocolate, sugar. Made by hand the same morning. Filled into an insulated flask.',
    seoTitle: 'Flask of hot chocolate, Paris',
    seoArticle: `<p>Our <strong>flasks of hot chocolate</strong> are made the same morning with whole milk and dark chocolate, and filled into insulated flasks. Real chocolate melted into milk, not a powder stirred into hot water.</p><h2>For a winter break or a family day</h2><p>One litre is around <strong>six to eight cups</strong>. It belongs at an afternoon break in winter, a Christmas event or a day when children are in the office. Contains milk.</p>${LIVRAISON}`,
  },
  'evian-75': {
    name: 'Evian 75 cl',
    description: '1 bottle of Evian, 75 cl',
    ingredients: 'Natural mineral water from the Alps. Evian source, Évian-les-Bains.',
    seoTitle: 'Evian 75 cl, Paris delivery',
    seoArticle: `<p><strong>Evian in 75 cl glass bottles</strong>, natural mineral water from the Alps, for the table at a meeting or a lunch. A large bottle covers two to three people over a working session.</p><h2>Still water, in glass</h2><p>Glass on the table rather than plastic: it costs a little more and it reads completely differently in front of a client. Delivered chilled on request.</p>${LIVRAISON}`,
  },
  'badoit-75': {
    name: 'Badoit 75 cl',
    description: '1 bottle of Badoit, 75 cl',
    ingredients: 'Naturally sparkling mineral water from Badoit. Saint-Galmier source, Loire.',
    seoTitle: 'Badoit 75 cl, Paris delivery',
    seoArticle: `<p><strong>Badoit in 75 cl glass bottles</strong>, naturally sparkling mineral water from the Saint-Galmier source in the Loire. The sparkling counterpart to Evian on the same table.</p><h2>One still, one sparkling</h2><p>Count roughly one sparkling bottle for every two still ones: it is the proportion that actually gets drunk. A large bottle covers two to three people over a working session.</p>${LIVRAISON}`,
  },
  'evian-33': {
    name: 'Evian 33 cl',
    description: '1 bottle of Evian, 33 cl',
    ingredients: 'Natural mineral water from the Alps. Evian source, Évian-les-Bains.',
    seoTitle: 'Evian 33 cl, Paris delivery',
    seoArticle: `<p><strong>Evian in 33 cl bottles</strong>, natural mineral water from the Alps. The individual format: one bottle per person, nothing to share and nothing left half-drunk.</p><h2>One bottle per person</h2><p>The right format for a lunch tray, a training day or an event where people move around with their bottle. Count one per person, two if the day is long.</p>${LIVRAISON}`,
  },
  'eau-neuve': {
    name: "L'Eau Neuve",
    description: '1 carton, 50 cl · Natural mountain mineral water',
    ingredients: 'Natural mountain mineral water. Packaged in a recyclable French carton.',
    seoTitle: "L'Eau Neuve, water in a carton, Paris",
    seoArticle: `<p><strong>L'Eau Neuve</strong> is natural mountain mineral water in a recyclable carton, made in France. Same water, without the plastic bottle.</p><h2>The water for a company that counts its waste</h2><p>A carton weighs less to transport than glass and is recycled where plastic often is not. For a company with a reporting obligation on its waste, it is a line that is easy to defend — and nobody at the table notices the difference apart from the carton itself.</p><h2>50 cl per person</h2><p>The individual format, one carton per person, for a lunch tray, a training day or an offsite.</p>${LIVRAISON}`,
  },
}

export const enBoisson = (id) => EN_BOISSONS[id] || null
export const slugsBoissonsEn = () => Object.keys(EN_BOISSONS)
