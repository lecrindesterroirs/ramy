/*
  Pause goûter, textes anglais.

  Surcouche de texte seulement. Les prix, les photos et les tailles de coffret
  restent lus dans app/creations/pauses-gourmandes/data.js, qui est la seule
  source : `prixEn` ne fait que reformater la chaîne française (virgule
  décimale, « 5/6 pers ») pour un lecteur anglophone. Aucun montant n'est
  recopié ici.

  Les noms sont traduits quand ils décrivent le produit (« Cake citron »
  ne dit rien à un anglophone) et gardés quand le mot est le produit :
  madeleine, macaron, babka, panettone, panna cotta, fraisier.
*/

const LIVRAISON = `<h2>Delivered across Paris and Île-de-France</h2><p>Order until 2 pm the day before, delivered to your offices from 6:30 am. Company invoice showing VAT, personalised quote within 24 hours.</p>`

/* ── Prix : on reformate la chaîne française, on ne la redéclare pas. ───────
   « 5/6 pers, 13,90 € » → { montant: '13.90', note: 'excl. VAT · 5–6 people' }
   « dès 24,90 € »       → { montant: '24.90', note: 'excl. VAT · from' }      */
const UNITES = [
  [/(\d+)\s*\/\s*(\d+)\s*pers\.?/i, (m) => `${m[1]} to ${m[2]} people`],
  [/(\d+)\s*-\s*(\d+)\s*pers\.?/i, (m) => `${m[1]} to ${m[2]} people`],
  [/(\d+)\s*-\s*(\d+)\s*fruits/i, (m) => `${m[1]} to ${m[2]} pieces of fruit`],
  [/(\d+)\s*pi[èe]ces?/i, (m) => `${m[1]} pieces`],
  [/(\d+)\s*brochettes?/i, (m) => `${m[1]} skewers`],
  [/(\d+)\s*cr[êe]pes?/i, (m) => `${m[1]} crêpes`],
  [/^d[èe]s\b/i, () => 'from'],
]

export function prixEn(prixFr) {
  if (!prixFr) return null
  const montant = [...String(prixFr).matchAll(/(\d+[.,]\d{2})/g)].pop()
  if (!montant) return null
  const avant = String(prixFr).slice(0, montant.index)
  let unite = ''
  for (const [re, rendu] of UNITES) {
    const m = avant.match(re)
    if (m) { unite = rendu(m); break }
  }
  return {
    montant: montant[1].replace(',', '.'),
    note: unite ? `excl. VAT · ${unite}` : 'excl. VAT',
  }
}

export const EN_PAUSES = {
  'madeleines-octobre-rose': {
    nom: 'Box of 10 Pink October madeleines',
    description: 'Signature madeleines with a pink glaze, Pink October edition. €1 donated to Ruban Rose for every box sold.',
    seoTitle: 'Pink October madeleine box: the charity afternoon treat for your Paris office',
    seoHtml: `<p>Our Mado Paris madeleines in a Pink October edition: pink glaze and a fine piped line, made by our pastry partner Mado. For every box bought, €1 goes to the charity Ruban Rose, on top of the €1 per guest served that we give on every order placed in October. See our <a href="/creations/evenements-saisonniers/octobre-rose">full Pink October offer</a>.</p><h2>Ordering your Pink October box in Paris</h2><p>A box of 10 madeleines, ordered until 2 pm the day before, delivered to your offices from 6:30 am. Company invoice showing VAT.</p>`,
  },
  'madeleines': {
    nom: 'Signature madeleines',
    description: 'Soft madeleines baked the same day, plain or flavoured.',
    seoTitle: 'Artisan madeleines: the afternoon treat for office breaks in Paris',
    seoHtml: `<p>Our Mado Paris madeleines, reckoned among the best madeleines in Paris, are soft, baked the same day, plain or flavoured. In an afternoon break they are the simple sweet thing that brings the team around a coffee, and they make a good gift when there is something to mark. Delivered in a box, from a team size up to a large volume.</p><h2>Pick the box size to the headcount</h2><p>Ten pieces for four to six people, twenty for a team of eight to twelve, fifty when the whole floor is invited.</p>${LIVRAISON}`,
  },
  'bonbonniere-noel': {
    nom: 'Christmas sweet jar',
    description: 'A large jar filled with candy canes and Christmas sweets.',
    seoTitle: 'Christmas sweet jar for your Paris office',
    seoHtml: `<p>A large jar filled with candy canes and Christmas sweets, set in the middle of the table or at reception. It lasts all day, is served without cutlery, and dresses a buffet on its own. See our <a href="/creations/evenements-saisonniers/noel">full Christmas offer</a>.</p><h2>Ordering your Christmas sweet jar in Paris</h2><p>Ordered until 2 pm the day before, delivered to your offices from 6:30 am. Company invoice showing VAT.</p>`,
  },
  'macarons-halloween': {
    nom: 'Black Halloween macarons',
    description: 'Cocoa shell, vanilla ganache, spiced pumpkin centre. By Pierre Morel.',
    seoTitle: 'Black Halloween macarons for your Paris office',
    seoHtml: `<p>This season's macaron, by Pierre Morel: an almost black cocoa shell, a vanilla ganache, and at its centre a pumpkin heart lifted with cinnamon. The pumpkin rounds off the vanilla, the spice wakes the whole thing up. Serve it as it is on an afternoon-break platter, or at the end of a cocktail reception. See our <a href="/creations/evenements-saisonniers/halloween">full Halloween offer</a>.</p><h2>Ordering your Halloween macarons in Paris</h2><p>A box of 24 macarons, ordered until 2 pm the day before, delivered to your offices from 6:30 am. Company invoice showing VAT.</p>`,
  },
  'madeleines-halloween': {
    nom: 'Halloween pumpkin madeleines',
    description: 'White chocolate and orange madeleine, pumpkin-shaped, face piped in dark chocolate.',
    seoTitle: 'Halloween pumpkin madeleines for your Paris office',
    seoHtml: `<p>A soft white chocolate madeleine lifted with a touch of orange, moulded as a pumpkin and piped in dark chocolate. It is held in one hand, shared without cutlery, and carries a break table on its own without decorating the room. It arrives ready, does not melt, and waits for the break. See our <a href="/creations/evenements-saisonniers/halloween">full Halloween offer</a>.</p><h2>Ordering your pumpkin madeleines in Paris</h2><p>A box of 10 madeleines, ordered until 2 pm the day before, delivered to your offices from 6:30 am. Company invoice showing VAT.</p>`,
  },
  'galette-des-rois-frangipane': {
    nom: 'Galette des rois, frangipane',
    description: 'Pure butter puff pastry, almond frangipane. For 4, 6 or 8, charm and crown included.',
    seoTitle: 'Frangipane galette des rois delivered to Paris offices',
    seoHtml: `<p>The classic: pure butter puff pastry, folded and turned by our partner bakers, filled with a smooth almond frangipane. A charm and a crown in every galette. Three sizes: <strong>4 people at €35.90 excl. VAT</strong>, <strong>6 people at €44.90 excl. VAT</strong>, <strong>8 people at €54.90 excl. VAT</strong>.</p><p>Allergens: gluten (wheat), eggs, milk (butter), nuts (almonds).</p><h2>Ordering your galettes des rois in Paris and Île-de-France</h2><p>Count one 6-portion galette for 5 to 6 people. Ordered until 2 pm the day before, delivered to your offices from 6:30 am, sliced on request. Company invoice showing VAT.</p>`,
  },
  'galette-des-rois-pomme': {
    nom: 'Galette des rois, apple',
    description: 'Pure butter puff pastry, soft apple compote. Charm and crown included.',
    seoTitle: 'Apple galette des rois delivered to Paris offices',
    seoHtml: `<p>The galette for those who like it less sweet: pure butter puff pastry filled with a soft, lightly scented apple compote. This is the one you add to the frangipane when the team is large — two flavours on the table beat two identical galettes. Charm and crown included. <strong>6 people, €42.90 excl. VAT</strong>.</p><p>Allergens: gluten (wheat), milk (butter). May contain traces of egg, soy and other nuts.</p><h2>Ordering your galettes des rois in Paris and Île-de-France</h2><p>Count one 6-portion galette for 5 to 6 people. Ordered until 2 pm the day before, delivered to your offices from 6:30 am, sliced on request. Company invoice showing VAT.</p>`,
  },
  'galette-des-rois-noisette': {
    nom: 'Galette des rois, hazelnut',
    description: 'Pure butter puff pastry, roasted hazelnut cream. Charm and crown included.',
    seoTitle: 'Hazelnut galette des rois delivered to Paris offices',
    seoHtml: `<p>The one nobody expects on a January table: the same pure butter puff pastry, with a hazelnut cream in place of the almond, rounder and more roasted. Charm and crown included. <strong>6 people, €45.90 excl. VAT</strong>.</p><p>Allergens: gluten (wheat), eggs, milk (butter), nuts (hazelnuts).</p><h2>Ordering your galettes des rois in Paris and Île-de-France</h2><p>Count one 6-portion galette for 5 to 6 people. Ordered until 2 pm the day before, delivered to your offices from 6:30 am, sliced on request. Company invoice showing VAT.</p>`,
  },
  'choux-octobre-rose': {
    nom: 'Pink October choux',
    description: "Craquelin choux buns with pink and violet glaze, orange blossom and violet rose.",
    seoTitle: 'Pink October choux tray for your Paris office',
    seoHtml: `<p>Our craquelin choux buns in a Pink October edition: pink glaze and violet glaze, orange blossom and violet rose. The crunch of the craquelin, a fine cream underneath, and two alternating colours that hold a table on their own. Throughout October, €1 per guest served goes to breast cancer research, on every order. See our <a href="/creations/evenements-saisonniers/octobre-rose">full Pink October offer</a>.</p><h2>Ordering your Pink October choux in Paris</h2><p>A tray of 20 choux, ordered until 2 pm the day before, delivered to your offices from 6:30 am. Company invoice showing VAT.</p>`,
  },
  'cupcakes-octobre-rose': {
    nom: 'Pink October cupcakes',
    description: 'Cupcakes with pink piped icing, roses and flowers. Tray of 25.',
    seoTitle: 'Pink October cupcake tray for your Paris office',
    seoHtml: `<p>Twenty-five cupcakes with pink icing, roses and flowers piped by hand, from pale pink to raspberry. This is the piece that makes a Pink October table: set in the middle, it carries the colour of the month without decorating the room. Throughout October, €1 per guest served goes to breast cancer research, on every order. See our <a href="/creations/evenements-saisonniers/octobre-rose">full Pink October offer</a>.</p><h2>Ordering your Pink October cupcakes in Paris</h2><p>A tray of 25 cupcakes, ordered until 2 pm the day before, delivered to your offices from 6:30 am. Company invoice showing VAT.</p>`,
  },
  'macarons-octobre-rose': {
    nom: 'Pink October macarons',
    description: 'Macarons with pink shells and raspberry ganache, Pink October edition.',
    seoTitle: 'Pink October macaron box for your Paris office',
    seoHtml: `<p>Our macarons in a Pink October edition: pink shells and raspberry ganache, one single flavour instead of the usual assortment. On a breakfast or afternoon-break table, they carry the colour of the month without a speech. Throughout October, €1 per guest served goes to breast cancer research, on every order. See our <a href="/creations/evenements-saisonniers/octobre-rose">full Pink October offer</a>.</p><h2>Ordering your Pink October macarons in Paris</h2><p>A box of 24 macarons, ordered until 2 pm the day before, delivered to your offices from 6:30 am. Company invoice showing VAT.</p>`,
  },
  'macarons': {
    nom: 'Signature macarons',
    description: 'Macarons by Pierre Morel, Italian meringue shells, no preservatives.',
    seoTitle: 'Macarons for corporate breaks and receptions in Paris',
    seoHtml: `<p>Macarons by Pierre Morel, a pastry chef in La Gacilly. Italian meringue shells, smoother and more stable, filled with clean ganaches and no preservatives. The box of 24 covers an afternoon break or a coffee-and-pastry moment for around twenty people, one macaron each, with an assortment of flavours that changes with every bite.</p>${LIVRAISON}`,
  },
  'brownie': {
    nom: 'Fudgy brownie',
    description: 'Fudgy brownie by our pastry chef, made with French chocolate.',
    seoTitle: 'Fudgy brownie for office breaks and afternoon treats in Paris',
    seoHtml: `<p>A fudgy brownie by our pastry chef, made with French chocolate. It is served cut, one generous piece per person: comforting, easy to share, and rich enough to hold a late working afternoon together. The safe bet of a team break.</p>${LIVRAISON}`,
  },
  'carrot-cake': {
    nom: 'Carrot cake',
    description: 'Carrot cake by our pastry chef, sliced on a platter.',
    seoTitle: 'Carrot cake for corporate afternoon breaks in Paris',
    seoHtml: `<p>A moist carrot cake by our pastry chef, served cut into slices scented with cinnamon and dried fruit. One piece per person. In an afternoon break it makes a change from chocolate and wins over the people who like a cake with some character.</p>${LIVRAISON}`,
  },
  'cake-citron': {
    nom: 'Lemon loaf cake',
    description: 'Lemon loaf cake, made in house, sliced on a platter.',
    seoTitle: 'Lemon loaf cake for office breaks in Paris',
    seoHtml: `<p>A lemon loaf cake made in house, served sliced, one piece per person. Sharp, moist and not too sweet, it goes with a mid-afternoon coffee or a meeting that runs long, and suits the people who steer clear of anything too rich.</p>${LIVRAISON}`,
  },
  'cake-marbre': {
    nom: 'Marbled chocolate and vanilla loaf cake',
    description: 'Marbled loaf cake, made in house, sliced on a platter.',
    seoTitle: 'Marbled loaf cake for office breaks and afternoon treats in Paris',
    seoHtml: `<p>A chocolate and vanilla marbled loaf cake made in house, served sliced, one piece per person. Soft and unfussy, it is the childhood treat everyone agrees on, and it never lets a team coffee down.</p>${LIVRAISON}`,
  },
  'cake-poire': {
    nom: 'Pear loaf cake',
    description: 'Pear loaf cake, made in house, sliced on a platter.',
    seoTitle: 'Pear loaf cake for office breaks and afternoon treats in Paris',
    seoHtml: `<p>A pear loaf cake made in house, served sliced, one piece per person. The pieces of pear keep the crumb damp and lighten the mouth: this is the one to pick when you want fruit without going as far as a tart.</p>${LIVRAISON}`,
  },
  'cake-framboise': {
    nom: 'Raspberry loaf cake',
    description: 'Raspberry loaf cake, made in house, sliced on a platter.',
    seoTitle: 'Raspberry loaf cake for office breaks and afternoon treats in Paris',
    seoHtml: `<p>A raspberry loaf cake made in house, served sliced, one piece per person. The sharpness of the fruit cuts the sugar and wakes up a platter that would otherwise be a little tame, without ever taking over the crumb.</p>${LIVRAISON}`,
  },
  'cake-chocolat': {
    nom: 'Chocolate chip loaf cake',
    description: 'Chocolate chip loaf cake, made in house, sliced on a platter.',
    seoTitle: 'Chocolate chip loaf cake for office breaks in Paris',
    seoHtml: `<p>A chocolate chip loaf cake made in house, served sliced, one piece per person. Denser than its fruit cousins, this is the one that holds you through a morning of back-to-back meetings, with a strong coffee.</p>${LIVRAISON}`,
  },
  'cake-pistache': {
    nom: 'Pistachio loaf cake',
    description: 'Pistachio loaf cake, made in house, sliced on a platter. Contains nuts.',
    seoTitle: 'Pistachio loaf cake for corporate welcomes and breaks in Paris',
    seoHtml: `<p>A pistachio loaf cake made in house, served sliced, one piece per person. Pistachio paste worked through the batter and crushed pieces on top: natural colour, roasted taste. The one to bring out for a welcome you want to get right. Contains nuts.</p>${LIVRAISON}`,
  },
  'banana-bread-sans-gluten': {
    nom: 'Gluten-free banana bread',
    description: 'Ripe bananas, rice flour and ground almonds. Moist, lightly sweet, gluten-free.',
    seoTitle: 'Gluten-free banana bread for office breaks and breakfasts in Paris',
    seoHtml: `<p>A gluten-free banana bread, served sliced, one piece per person. Very ripe bananas mashed into the batter, rice flour and ground almonds instead of wheat: a dense, melting crumb, a long way from the crumbly texture of many gluten-free cakes.</p><h2>The piece that leaves nobody out</h2><p>On a platter of cakes, the colleague who cannot eat gluten usually has nothing to reach for. This one is served exactly like the others, with no separate packaging and nobody set aside. Less sweet than a standard loaf cake, it works in the morning as well as in an afternoon break.</p>${LIVRAISON}`,
  },
  'cookie': {
    nom: 'Signature cookie selection',
    description: 'Cookies by Laura Todd, remarkably fine and full of flavour. Salted caramel, chocolate, pistachio, white chocolate.',
    seoTitle: 'Cookies for office breaks and afternoon treats in Paris',
    seoHtml: `<p>Cookies by Laura Todd, remarkably fine and full of flavour, one cookie per person. The format that travels best: you grab one between two meetings, you share them without cutlery, and they create no logistics at all. The sweet thing that goes with an afternoon coffee, no fuss.</p>${LIVRAISON}`,
  },
  'tartelette-citron': {
    nom: 'Lemon tartlet',
    description: 'Lemon tartlet by our pastry chef: lemon cream, light whipped cream and lime zest.',
    seoTitle: 'Lemon tartlets for corporate breaks and receptions in Paris',
    seoHtml: `<p>A lemon tartlet by our pastry chef, one per person. It plays on contrast: a sharp lemon cream, a ring of light whipped cream, lime zest and a crisp pastry case. At the end of a lunch or in an afternoon break it brings a fresh note that wakes the room up after a meal. Clean to serve standing up.</p>${LIVRAISON}`,
  },
  'tartelette-praline': {
    nom: 'Hazelnut praline tartlet',
    description: 'Praline tartlet by our pastry chef, with a hazelnut crunch.',
    seoTitle: 'Praline tartlets for corporate afternoon breaks in Paris',
    seoHtml: `<p>A praline tartlet by our pastry chef, one per person. It banks on a hazelnut crunch and a generous ganache. Richer than the lemon version, it is the one for the chocolate and nut people, in an afternoon break or at a reception.</p>${LIVRAISON}`,
  },
  'tartelette-cacahuete': {
    nom: 'Peanut tartlet',
    description: 'Tartlet by Mado Paris: peanut praline and cream, salted butter vanilla caramel, roasted peanuts. Contains peanuts.',
    seoTitle: 'Peanut tartlets for corporate breaks and receptions in Paris',
    seoHtml: `<p>A tartlet by Mado Paris, one per person. Everything in it is peanut: praline at the base, a cream, a whipped ganache piped in a ring and roasted peanuts on top, around a heart of salted butter vanilla caramel. It is the piece that surprises people on a tray of sweets, because nobody expects it. Contains peanuts.</p>${LIVRAISON}`,
  },
  'tartelette-pistache': {
    nom: 'Pistachio tartlet',
    description: 'Tartlet by Mado Paris: pistachio praline, cream and whipped ganache, roasted pistachios. Contains nuts.',
    seoTitle: 'Pistachio tartlets for corporate afternoon breaks in Paris',
    seoHtml: `<p>A tartlet by Mado Paris, one per person. Pistachio praline at the base, a cream and a whipped ganache piped in waves, roasted pistachios and crushed pieces on top. The flavour leans on the roasting rather than on sugar, and the colour is the nut's own. This is the one you bring out when a welcome or the end of a lunch deserves care. Contains nuts.</p>${LIVRAISON}`,
  },
  'tartelette-vanille-caramel': {
    nom: 'Vanilla caramel tartlet',
    description: 'Tartlet by Mado Paris: vanilla cream and whipped ganache, salted butter caramel, a mini caramel choux bun.',
    seoTitle: 'Vanilla caramel tartlets for corporate breaks in Paris',
    seoHtml: `<p>A tartlet by Mado Paris, one per person. A vanilla cream and a whipped ganache piped in a spiral, salted butter vanilla caramel underneath, and a mini choux bun glazed with caramel set in the middle. The gentlest of the range and, like the lemon one, free of nuts: the tartlet everyone agrees on at the end of a lunch.</p>${LIVRAISON}`,
  },
  'mousse-chocolat': {
    nom: 'Proper chocolate mousse',
    description: 'Chocolate mousse by our pastry chef, made in house, light in texture.',
    seoTitle: 'Chocolate mousse for corporate breaks and lunches in Paris',
    seoHtml: `<p>A chocolate mousse by our pastry chef, made in house with good chocolate. One individual pot per person, eaten with a spoon, with nothing to cut and no service to organise. An airy texture and a chocolate with real character: the dessert that closes a team lunch or finishes an afternoon break properly.</p>${LIVRAISON}`,
  },
  'panna-cotta': {
    nom: 'Panna cotta',
    description: 'Panna cotta by our pastry chef, whole cream and fresh red berries.',
    seoTitle: 'Panna cotta for corporate breaks and lunches in Paris',
    seoHtml: `<p>A panna cotta by our pastry chef, made in house with whole cream and fresh red berries. One individual pot per person, ready to serve. Soft, creamy and light, it finishes a team lunch without weighing anyone down and is eaten with a spoon, sitting or standing.</p>${LIVRAISON}`,
  },
  'verrine-citron': {
    nom: 'Lemon curd pot',
    description: 'Lemon curd pot by our pastry chef, sharp and fresh.',
    seoTitle: 'Lemon curd pots for corporate breaks in Paris',
    seoHtml: `<p>A lemon curd pot by our pastry chef, one individual pot per person. A bright lemon cream that banks on sharp freshness. At the end of a meal or in an afternoon break it wakes the palate after a main course, and needs nothing more than a spoon.</p>${LIVRAISON}`,
  },
  'choux': {
    nom: 'Assortment of filled choux buns',
    description: 'By Philippe Urraca, Meilleur Ouvrier de France. Assorted glazes and creams.',
    seoTitle: 'Filled choux buns by Philippe Urraca, Meilleur Ouvrier de France, in Paris',
    seoHtml: `<p>Our choux buns are made by <strong>Philippe Urraca</strong>, <strong>Meilleur Ouvrier de France</strong>, France's highest craft distinction. The choux pastry is worked the way it should be: crisp on top, generously filled, never soft.</p><h2>An assortment that plays on variety</h2><p>Assorted glazes and creams, to pick up with your fingers. In an afternoon break or on a reception buffet they bring volume and colour, and everyone finds a flavour they like. An individual piece, festive and easy to share.</p>${LIVRAISON}`,
  },
  'babka': {
    nom: 'Chocolate babka',
    description: 'Chocolate-swirled brioche, sliced.',
    seoTitle: 'Chocolate babka for office breaks and afternoon treats in Paris',
    seoHtml: `<p>Our chocolate-swirled babka brioche, served sliced, is the generous piece that makes a change from a standard cake. Soft, marbled with chocolate, it shares easily around a mid-afternoon coffee. A friendly format, passed around without ceremony.</p>${LIVRAISON}`,
  },
  'tartes-fines': {
    nom: 'Signature thin fruit tartlets',
    description: 'Thin tartlets with fruit in season, to share.',
    seoTitle: 'Thin fruit tarts for corporate afternoon breaks in Paris',
    seoHtml: `<p>Our thin tarts with fruit in season bank on a crisp pastry and fruit barely cooked, to share. Lighter than a cream pastry, they bring a fruity note to an afternoon break or the end of a lunch. Put together according to the season.</p>${LIVRAISON}`,
  },
  'yaourt-fruits': {
    nom: 'Farmhouse yoghurt',
    description: 'Fruit yoghurt from la Ferme de Viltain, made with their own cows’ milk.',
    seoTitle: 'Farmhouse fruit yoghurt for corporate breaks and breakfasts in Paris',
    seoHtml: `<p>Our yoghurts come from la Ferme de Viltain, made with their own cows' milk, with fruit. This is the fresh, light option for an afternoon break or a team breakfast, for the people who would rather have dairy than something sweet. Served in an individual pot, from a named producer.</p>${LIVRAISON}`,
  },
  'compote-pomme': {
    nom: 'Orchard apple compote',
    description: 'Plain apple compote, no added sugar.',
    seoTitle: 'Apple compote for corporate breaks and breakfasts in Paris',
    seoHtml: `<p>Our plain apple compote has no added sugar and is served in an individual pot. It is the lightest thing on the break table: fresh, mild and easy to carry between two meetings. A healthy alternative to pastries, as welcome in the morning as mid-afternoon.</p>${LIVRAISON}`,
  },
  'compote-pomme-fraise': {
    nom: 'Apple and strawberry compote',
    description: 'Apple and strawberry compote, fresh and fruity.',
    seoTitle: 'Apple and strawberry compote for corporate breaks in Paris',
    seoHtml: `<p>Our apple and strawberry compote adds a fruity note to the plain version, served in an individual pot. Fresh and light, it suits the people who want something sweet without the guilt, in an afternoon break as much as at breakfast.</p>${LIVRAISON}`,
  },
  'compote-pomme-tonka': {
    nom: 'Apple and tonka bean compote',
    description: 'Apple compote scented with tonka bean.',
    seoTitle: 'Apple and tonka bean compote for corporate breaks in Paris',
    seoHtml: `<p>Our apple compote scented with tonka bean plays a slightly more worked note than the plain version: the mildness of the apple, lifted by a vanilla and woody scent. Served in an individual pot, it is the light break that pleasantly surprises people, mid-afternoon or at breakfast.</p>${LIVRAISON}`,
  },
  'verrine-salade-fruits': {
    nom: 'Fresh fruit salad pot',
    description: 'Fresh fruit cut into cubes, served in an individual pot.',
    seoTitle: 'Fresh fruit salad pots for corporate breaks and breakfasts in Paris',
    seoHtml: `<p>Our fresh fruit salad pot is cut into cubes and served in an individual pot, ready to eat with a spoon. Fresh, colourful and light, it brings a healthy option to an afternoon break as much as to a team breakfast.</p>${LIVRAISON}`,
  },
  'brochettes-fruits': {
    nom: 'Fresh fruit skewers',
    description: 'Fresh fruit in season: strawberry, pineapple, melon, grape, kiwi. Vegan and gluten-free.',
    seoTitle: 'Fresh fruit skewers for corporate breaks and events in Paris',
    seoHtml: `<p>Our fresh fruit skewers are made for picking at: colourful pieces you take in one hand, with no cutlery and no plate. In an afternoon break, on a buffet or at an event, they bring the fresh, healthy note that is usually missing from a sweet table. Put together according to the season.</p>${LIVRAISON}`,
  },
  'corbeilles-fruits': {
    nom: 'Fruit baskets',
    description: 'Baskets of fresh fruit in season, to share.',
    seoTitle: 'Fresh fruit baskets for offices and corporate breaks in Paris',
    seoHtml: `<p>Our baskets of fresh seasonal fruit are the simplest way to stock a break room or welcome a meeting: whole fruit to share, available all day. A healthy, effortless way to look after the team, refilled with each delivery.</p>${LIVRAISON}<p>Works well as a standing weekly order for offices.</p>`,
  },
  'crepes': {
    nom: 'Soft homemade crêpes',
    description: 'Traditional rested batter. Included: pots of Alain Milliat jam and chocolate spread.',
    seoTitle: 'Crêpes for corporate breaks and afternoon treats in Paris',
    seoHtml: `<p>Our sweet crêpes are made the same day, with your choice of fillings. In an afternoon break or at an event they bring back the childhood treat and gather the team around something simple. A generous format, shared without ceremony.</p>${LIVRAISON}<p>See also our live crêpe station if you would rather have them made on site.</p>`,
  },
  'mini-crepes': {
    nom: 'Soft homemade mini crêpes',
    description: 'Traditional rested batter, bite-size. Included: pots of Alain Milliat jam and chocolate spread.',
    seoTitle: 'Mini crêpes for corporate breaks and afternoon treats in Paris',
    seoHtml: `<p>Our soft mini crêpes are cooked the same day from a traditional batter rested overnight. Their small size lets everyone take two or three and vary the toppings: Alain Milliat jam or chocolate spread, both included. In an afternoon break they are eaten by hand, with no plate or cutlery. A platter of 15 serves about 5 people.</p>${LIVRAISON}`,
  },
  'tarte-framboise-grand-format': {
    nom: 'Large raspberry tart',
    description: 'Shortcrust pastry, vanilla cream and fresh raspberries. The large cake to share for team birthdays.',
    seoTitle: 'Large raspberry tart, the cake to share for corporate birthdays in Paris',
    seoHtml: `<p>Our large raspberry tart, shortcrust pastry and vanilla cream, is built as a real <strong>cake to share</strong>: the right format for an office birthday, a leaving party or marking a team win. Topped with fresh raspberries, it is cut into slices in front of everyone, a moment, rather than one more individual pastry.</p><h2>Ordering your large birthday cake in Paris and Île-de-France</h2><p>Size to the headcount, ordered until 2 pm the day before, delivered to your offices from 6:30 am. Right for an <strong>office birthday cake</strong>, an onboarding people remember, or anything worth celebrating as a team. Company invoice showing VAT, quote within 24 hours.</p>`,
  },
  'gateau-praline-noisette-partager': {
    nom: 'Large hazelnut praline cake',
    description: 'Crisp dacquoise, generous praline and a light mousse. The large cake to share for team celebrations.',
    seoTitle: 'Large hazelnut praline cake to share, for corporate birthdays and onboarding in Paris',
    seoHtml: `<p>Our large hazelnut praline cake (crisp dacquoise, generous praline and a light mousse) is designed as <strong>a cake to share</strong> rather than an individual pastry. Its rectangular format, cut into slices, makes it the one to bring out for an office birthday, a successful onboarding or any milestone the team wants to mark.</p><h2>Ordering your large birthday cake in Paris and Île-de-France</h2><p>Size to the headcount, ordered until 2 pm the day before, delivered to your offices from 6:30 am. An <strong>office birthday cake</strong> that looks the part and is built to be cut and passed around. Company invoice showing VAT, quote within 24 hours.</p>`,
  },
  'fraisier-grand-format': {
    nom: 'Fraisier to share',
    description: 'Light sponge, mousseline cream and fresh strawberries. The large cake to share for team birthdays.',
    seoTitle: 'Fraisier to share, the large cake for corporate birthdays in Paris',
    seoHtml: `<p>Our fraisier (light sponge, mousseline cream and fresh strawberries) comes in a large format so it becomes a proper <strong>cake to share</strong> at the office. It is the classic that always goes down well, cut into slices for a birthday, a leaving party or a team moment worth celebrating.</p><h2>Ordering your large birthday cake in Paris and Île-de-France</h2><p>Size to the headcount, ordered until 2 pm the day before, delivered to your offices from 6:30 am. The <strong>office birthday cake</strong> nobody argues with, for an onboarding, a team party or anything to mark. Company invoice showing VAT, quote within 24 hours.</p>`,
  },
  'tarte-citron-meringuee-grande': {
    nom: 'Large lemon meringue tart',
    description: 'Bright lemon cream and meringue torched golden. The large cake to share for team celebrations.',
    seoTitle: 'Large lemon meringue tart, the cake to share for corporate birthdays in Paris',
    seoHtml: `<p>Our large lemon meringue tart, bright lemon cream and meringue torched golden, is built as a <strong>large format to share</strong>. Its sharpness makes a change from the usual sweet thing and surprises people at an office birthday, an onboarding or a team moment worth marking.</p><h2>Ordering your large birthday cake in Paris and Île-de-France</h2><p>Size to the headcount, ordered until 2 pm the day before, delivered to your offices from 6:30 am. An <strong>office birthday cake</strong> that breaks with the ordinary, to cut and share as a team. Company invoice showing VAT, quote within 24 hours.</p>`,
  },
  'gateau-roule-fraise-partager': {
    nom: 'Strawberry and vanilla roulade',
    description: 'Soft sponge, light cream and fresh strawberries, rolled. The cake to share for team birthday treats.',
    seoTitle: 'Strawberry and vanilla roulade, the cake to share for office birthday treats in Paris',
    seoHtml: `<p>Our strawberry and vanilla roulade (soft sponge, light cream and fresh strawberries) offers a different kind of <strong>cake to share</strong>. Lighter than a layered cake, it slices easily and suits an office birthday treat or a friendly moment between colleagues.</p><h2>Ordering your birthday cake in Paris and Île-de-France</h2><p>Size to the headcount, ordered until 2 pm the day before, delivered to your offices from 6:30 am. A simple, generous <strong>office birthday cake</strong>, right for an onboarding or a team party. Company invoice showing VAT, quote within 24 hours.</p>`,
  },
  'panettone-artisanal-partager': {
    nom: 'Artisan panettone',
    description: 'Soft Italian brioche with candied fruit and raisins. The large cake to share for team breakfasts and parties.',
    seoTitle: 'Artisan panettone, the large cake to share for corporate breakfasts and parties in Paris',
    seoHtml: `<p>Our artisan panettone (a soft Italian brioche with candied fruit and raisins, baked in its traditional gold case) is a <strong>large cake to share</strong> in the truest sense. Generous and fragrant, it belongs on a festive breakfast, an end-of-year treat or any moment the team wants to celebrate, sliced in front of everyone.</p><h2>Ordering your panettone in Paris and Île-de-France</h2><p>Size to the headcount, ordered until 2 pm the day before, delivered to your offices from 6:30 am. A <strong>cake to share</strong> that works for an office birthday, an onboarding or the end-of-year parties. Company invoice showing VAT, quote within 24 hours.</p>`,
  },
}

export const enPause = (id) => EN_PAUSES[id] || null
export const slugsPausesEn = () => Object.keys(EN_PAUSES)
