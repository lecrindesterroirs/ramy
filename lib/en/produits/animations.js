/*
  Animations culinaires, textes anglais.

  Surcouche de texte seulement : photos, univers et identifiants restent lus
  dans app/creations/animations-culinaires/data.js. Ces prestations n'ont pas
  de prix affiché, elles se chiffrent sur devis (plancher 600 € HT).

  La clé est l'identifiant français (b1, d2, s5…), pas le slug : le slug est
  dérivé du nom, et un nom anglais donnerait une autre URL. Les URL anglaises
  restent celles du français, pour que /en/<chemin FR> fonctionne partout.
*/

/* Dernière section, identique sur toutes les fiches : date, lieu, effectif,
   installation comprise. On la construit, on ne la recopie pas 29 fois. */
const reserver = (quoi, occasions) => `<h2>Booking your ${quoi} in Paris and Île-de-France</h2><p>Priced on quote: date, venue, headcount, length and access. We bring the kit, set up and take it away again, so there is nothing for you to manage. Right for ${occasions}. Answer within <strong>24 hours</strong>, company invoice showing VAT.</p>`

export const UNIVERS_EN = {
  brunch: 'Breakfast & Brunch',
  dejeuner: 'Gourmet Lunch',
  streetfood: 'Street Food',
  douceurs: 'Sweet Things',
  bars: 'Bars & Drinks',
}

export const EN_ANIMATIONS = {
  b1: {
    nom: 'Barista',
    description: 'Speciality coffee made to order.',
    compo: ['Espresso', 'Cappuccino', 'Latte', 'Flat White', 'Hot chocolate', 'Premium teas'],
    article: `<h2>A coffee tasting station for your corporate breakfasts and events in Paris</h2><p>A real barista making espresso, cappuccino, latte and flat white to order is the detail that wakes up an offsite morning or a welcome breakfast. Everyone orders their own drink, made in front of them, with the care of a speciality coffee counter. L'Écrin Traiteur sets this coffee bar up in your offices or at your venue, across Paris and Île-de-France.</p><h2>Speciality coffee and hot drinks</h2><p>Espresso, cappuccino, latte, flat white, hot chocolate and a selection of teas, served throughout. We bring plant milks so nobody is left out, and set the pace to the number of guests.</p>${reserver('coffee bar', 'a welcome breakfast, a trade show or a staff day')}`,
  },
  b2: {
    nom: 'Professional Espresso Machine Hire for Offices',
    description: 'A professional espresso machine installed for good self-service coffee.',
    compo: ['Espresso', 'Lungo', 'Ristretto', 'Decaf', 'A selection of premium capsules', 'Cups, sugar & stirrers'],
    article: `<h2>A professional espresso machine for your offices and corporate events in Paris</h2><p>Real coffee, straight away, with no effort: we install a professional espresso machine in your offices or at your venue. Everyone helps themselves when they want — a short espresso before a meeting, a long one during the break. L'Écrin Traiteur sets it up across Paris and Île-de-France, with the capsules, the cups and everything else.</p><h2>Good coffee, self-service all day</h2><p>Espresso, lungo, ristretto or decaf, from a selection of premium capsules. The machine stays available for the whole booking: we supply cups, sugar and stirrers, restock if needed, and collect the kit at the end.</p>${reserver('espresso machine hire', 'a welcome breakfast, an offsite or a staff day')}`,
  },
  b3: {
    nom: 'Fresh Juice Bar',
    description: 'Fruit and vegetable juices pressed in front of your guests.',
    compo: ['Orange', 'Grapefruit', 'Fresh lemonade', 'Apple', 'Carrot, orange & ginger', 'Beetroot, apple & lemon', 'Cucumber, mint & lime'],
    article: `<h2>A fresh juice bar for your corporate breakfasts and events in Paris</h2><p>Juice pressed in front of your guests wakes up an offsite morning or a welcome breakfast. Orange, grapefruit and lemonade, but also sharper blends like carrot-orange-ginger or beetroot-apple-lemon, extracted to order. L'Écrin Traiteur sets this juice bar up across Paris and Île-de-France.</p><h2>Fruit and vegetables pressed to order</h2><p>We press as we serve, never in advance: orange, grapefruit, apple, fresh lemonade, and fruit-and-vegetable blends like cucumber-mint-lime or carrot-orange-ginger. Everyone walks away with a clean, bright glass.</p>${reserver('juice bar', 'a welcome breakfast, a wellbeing week or a trade show')}`,
  },
  b4: {
    nom: 'Gourmet Brunch',
    description: 'A full brunch station served continuously.',
    compo: ['Artisan pastries', 'Bread & brioche', 'Butter & jams', 'Fresh fruit', 'Yoghurt & granola', 'Fresh juice', 'Coffee & tea'],
    article: `<h2>A corporate brunch served continuously in Paris</h2><p>Brunch is the one everybody agrees on: pastries, bread and brioche, eggs, fresh fruit, yoghurt and granola, pressed juice, coffee. Served continuously, it gives people time to arrive, help themselves and talk. L'Écrin Traiteur sets this brunch up in your offices, across Paris and Île-de-France.</p><h2>Sweet, savoury, hot and fresh in one place</h2><p>Artisan pastries, breads and brioche, butter and jams, fresh fruit, yoghurt and granola, fresh juice, coffee and tea. We lay out a generous buffet and restock through the morning, with quantities set to your headcount.</p>${reserver('brunch', 'an induction morning, a launch or an offsite weekend')}`,
  },
  b5: {
    nom: 'Scrambled Eggs to Order',
    description: 'Eggs cooked to order, however people want them.',
    compo: ['Scrambled eggs', 'Fried eggs', 'Omelettes', 'Herb omelettes', 'Smoked turkey (option)', 'Smoked salmon (option)'],
    article: `<h2>An eggs-to-order station for your corporate breakfasts in Paris</h2><p>Scrambled, fried or in an omelette, cooked in front of your guests: this is the hot element most delivered breakfasts do not have. Everyone picks how it is cooked and what goes in it, served on a plate at the right moment. L'Écrin Traiteur sets this station up across Paris and Île-de-France.</p><h2>Cooked the way each person wants it</h2><p>Scrambled, fried, as an omelette or with herbs, with smoked turkey or smoked salmon as options. We cook to the rhythm of arrivals, so nobody eats cold.</p>${reserver('eggs station', 'a welcome breakfast or an offsite morning')}`,
  },
  b6: {
    nom: 'Crêpe & Pancake Station',
    description: 'Crêpes and pancakes made and dressed to order.',
    compo: ['Maple syrup', 'Chocolate', 'Salted caramel', 'Lemon', 'Sugar', 'Fresh fruit', 'Whipped cream', 'Pistachios'],
    article: `<h2>A crêpe and pancake station for your corporate breaks and events in Paris</h2><p>Nothing gathers a team like the smell of a crêpe cooking. Our crêpe maker turns out crêpes and pancakes to order, filled in front of you, from a welcome breakfast to an afternoon break. A simple format that puts everyone in a good mood. L'Écrin Traiteur sets this station up in your offices or at your venue, across Paris and Île-de-France.</p><h2>Sweet, hot, made to order</h2><p>Each crêpe is cooked and filled at the moment the guest asks for it, never stacked in advance. A wide choice of fillings: salted caramel, chocolate, maple syrup, lemon, fresh fruit, whipped cream and pistachios. We also plan lighter versions for balance, and set the pace to the number of guests.</p>${reserver('crêpe station', 'Candlemas, an induction morning or a wellbeing week')}`,
  },
  b7: {
    nom: 'Belgian Waffle Station',
    description: 'Waffles served hot with a wide choice of toppings.',
    compo: [],
    article: `<h2>A Belgian waffle station for your corporate breaks and events in Paris</h2><p>Waffles served hot, crisp outside and soft inside, topped in front of your guests: enough to turn an afternoon break into something people remember. Sugar, chocolate, caramel, fresh fruit, whipped cream — everyone builds their own. L'Écrin Traiteur sets this station up across Paris and Île-de-France.</p><h2>Served hot, topped to order</h2><p>Each waffle is cooked to order and topped as asked: icing sugar, chocolate, salted caramel, fresh fruit, whipped cream, chocolate spread. We set the pace to the number of guests so the queue keeps moving.</p>${reserver('waffle station', 'a team treat, a wellbeing week or a company family day')}`,
  },
  b8: {
    nom: 'New York Bagel Station',
    description: 'Bagels filled in front of your guests.',
    compo: ['Salmon & cream cheese', 'Chicken Caesar', 'Pastrami', 'Avocado & feta', 'Burrata & pesto'],
    article: `<h2>A New York bagel station for your corporate lunches and events in Paris</h2><p>Bagels filled to order in front of your guests: a format people recognise, substantial enough to be lunch and clean enough to eat standing up. Salmon and cream cheese, chicken Caesar, pastrami, avocado and feta, burrata and pesto. L'Écrin Traiteur sets this station up across Paris and Île-de-France.</p><h2>Filled to order, not prepared in advance</h2><p>Each bagel is split, warmed and filled as it is asked for, so the bread does not go soft. We balance the fillings so there is a vegetarian option and a pork-free option on every booking.</p>${reserver('bagel station', 'a working lunch, a launch or a staff day')}`,
  },
  b9: {
    nom: 'Yoghurt & Granola Bar',
    description: 'Guests build their own bowls.',
    compo: ['Skyr', 'Greek yoghurt', 'House granola', 'Fresh fruit', 'Dried fruit and nuts', 'Honey', 'Fruit coulis'],
    article: `<h2>A yoghurt and granola bar for your corporate breakfasts in Paris</h2><p>A bar where everyone builds their own bowl: skyr or Greek yoghurt, house granola, fresh fruit, dried fruit and nuts, honey, fruit coulis. Light, fresh and down to each person, it rounds out a breakfast or a mid-morning break. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Light or generous, each to their own</h2><p>A base of skyr or Greek yoghurt, house granola, fresh seasonal fruit, dried fruit and nuts, honey and coulis. An option that suits the people who want something light as much as the ones who want something indulgent.</p>${reserver('yoghurt bar', 'a welcome breakfast, a wellbeing week or a staff day')}`,
  },
  d1: {
    nom: 'Italian Pasta to Order',
    description: 'Fresh pasta cooked to order.',
    compo: ['Trofie with pesto', 'Parmesan', 'Burrata', 'Slow-roasted tomatoes'],
    article: `<h2>A fresh pasta station for your corporate lunches and events in Paris</h2><p>Fresh pasta cooked and dressed to order, in front of your guests: trofie with pesto, parmesan, burrata and slow-roasted tomatoes. Hot, generous and served at the right moment, it is the lunch station that makes a working day feel less like a working day. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Cooked to order, dressed in the pan</h2><p>Pasta is dropped as people arrive and dressed in front of them, never held warm. We set the pace to the headcount and keep a vegetarian option on the station at all times.</p>${reserver('pasta station', 'a working lunch, a launch or a team day')}`,
  },
  d2: {
    nom: 'Focaccia & Burrata Station',
    description: 'Artisan focaccia and creamy burrata dressed in front of your guests.',
    compo: ['Focaccia', 'Creamy burrata', 'Bresaola', 'Smoked turkey', 'Heritage tomatoes', 'Grilled vegetables', 'Pesto', 'Basil', 'Olive oil'],
    article: `<h2>A focaccia and burrata station for your corporate lunches and receptions in Paris</h2><p>Artisan focaccia cut and dressed in front of your guests, with creamy burrata torn over the top, heritage tomatoes, grilled vegetables, pesto and good olive oil. Simple ingredients, assembled at the last moment: that is the whole point. L'Écrin Traiteur sets this station up across Paris and Île-de-France.</p><h2>Assembled at the last moment</h2><p>Focaccia, burrata, bresaola, smoked turkey, heritage tomatoes, grilled vegetables, pesto, basil and olive oil. Dressed as each plate is asked for, so nothing goes soggy. There is a vegetarian build and a pork-free build on every booking.</p>${reserver('focaccia station', 'a working lunch, a reception or a client welcome')}`,
  },
  d3: {
    nom: 'Fresh Salmon Carving',
    description: 'Smoked salmon and gravlax carved and dressed to order.',
    compo: ['Blinis', 'Lemon and dill cream', 'Capers', 'Red onion'],
    article: `<h2>A salmon carving station for your corporate receptions in Paris</h2><p>Someone carving salmon in front of your guests is a different thing from a platter left on a table. Smoked salmon and gravlax are sliced to order, onto blinis, with lemon and dill cream, capers and red onion. It sets the level of a reception within the first ten minutes. L'Écrin Traiteur sets this station up across Paris and Île-de-France.</p><h2>Sliced to order, built in front of you</h2><p>Smoked salmon and gravlax, blinis, lemon and dill cream, capers and red onion, assembled as each guest comes to the station. Quantities set to your headcount and the length of the booking.</p>${reserver('salmon station', 'a reception, a partner evening or a client welcome')}`,
  },
  d5: {
    nom: 'Aged Cheese Station',
    description: 'Aged cheeses carved and presented with artisan breads and fresh fruit.',
    compo: [],
    article: `<h2>An aged cheese station for your corporate receptions in Paris</h2><p>A cheesemonger carving and presenting in front of your guests is a different thing from a platter left on a table. Comté, goat's cheeses, blue-veined and bloomy-rind cheeses are cut to order, with artisan breads and fresh fruit alongside. It creates a convivial room straight away, across Paris and Île-de-France.</p><h2>Cut to order, and explained</h2><p>A selection of aged cheeses at ripeness, cut to order and explained to anyone who wants to know more. Artisan breads, honey and seasonal fruit are laid out alongside to build each mouthful. Proportions are set to your headcount and the length of the booking.</p>${reserver('cheese station', 'a reception, an afterwork or a partner evening')}`,
  },
  d6: {
    nom: 'Artisan Charcuterie Station',
    description: 'Halal, pork-free charcuterie carved to order.',
    compo: ['Air-dried beef', 'Smoked turkey', 'Smoked chicken', 'Bresaola', 'Grisons beef'],
    article: `<h2>A halal, pork-free charcuterie station for your corporate receptions in Paris</h2><p>Charcuterie carved in front of your guests, and halal and pork-free from end to end: air-dried beef, smoked turkey, smoked chicken, bresaola and Grisons beef. A station that nobody in the room has to walk past. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Carved to order, halal and pork-free</h2><p>Air-dried beef, smoked turkey, smoked chicken, bresaola and Grisons beef, sliced to order and arranged by hand, with olives and fresh grapes alongside. Quantities set to your headcount.</p>${reserver('charcuterie station', 'a reception, an afterwork or an opening')}`,
  },
  d7: {
    nom: 'Sushi & Maki Station',
    description: 'Japanese bites made or dressed in front of your guests.',
    compo: ['Maki', 'California rolls', 'Nigiri', 'Gyoza'],
    article: `<h2>A sushi and maki station for your corporate receptions in Paris</h2><p>Maki, California rolls, nigiri and gyoza, rolled or dressed in front of your guests. Precise, light, and the kind of station people photograph. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Rolled or dressed to order</h2><p>Maki, California rolls, nigiri and gyoza, with soy, ginger and wasabi alongside. We keep a vegetarian selection on the station and set quantities to your headcount.</p>${reserver('sushi station', 'a reception, a launch or a client evening')}`,
  },
  s2: {
    nom: 'Lobster Roll Station',
    description: 'The great New York classic, in a toasted brioche roll.',
    compo: ['Lobster', 'Prawn', 'Crab', 'Smoked salmon'],
    article: `<h2>A lobster roll station for your corporate receptions in Paris</h2><p>The great New York classic, built to order in a toasted brioche roll: lobster, prawn, crab or smoked salmon. Street food in form, generous in substance — the station that makes an afterwork feel like an occasion. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Toasted and filled to order</h2><p>Each roll is toasted and filled as it is asked for. Lobster, prawn, crab and smoked salmon, dressed lightly so the shellfish leads. Quantities set to your headcount.</p>${reserver('lobster roll station', 'a reception, a launch or a partner evening')}`,
  },
  s3: {
    nom: 'Mini Burger Station',
    description: 'Mini burgers built to order.',
    compo: ['Cheeseburger', 'BBQ pulled beef', 'Truffle & Comté', 'Halloumi'],
    article: `<h2>A mini burger station for your afterworks and corporate events in Paris</h2><p>Mini burgers built to order, served hot, eaten in two bites: the station that gets a room talking. Cheeseburger, BBQ pulled beef, truffle and Comté, halloumi. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Built to order, served hot</h2><p>Each burger is assembled as it is asked for, so the bun stays dry and the cheese is still melting. Five recipes including a vegetarian one, and all of them pork-free. Quantities set to your headcount.</p>${reserver('mini burger station', 'an afterwork, a leaving party or a team day')}`,
  },
  s5: {
    nom: 'Mini Baguette Station',
    description: 'Artisan mini baguettes cut and dressed in front of your guests.',
    compo: ['Turkey ham', 'Chicken Caesar', 'Tuna & chive', 'Burrata', 'Pastrami'],
    article: `<h2>A mini baguette station for your corporate lunches and afterworks in Paris</h2><p>Artisan mini baguettes cut and filled in front of your guests: turkey ham, chicken Caesar, tuna and chive, burrata, pastrami. Straightforward, substantial, and clean to eat standing up. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Filled as they are asked for</h2><p>Baguettes from our partner baker, cut and filled on the station rather than prepared in advance, so the bread stays crisp. There is a vegetarian filling and a pork-free filling on every booking.</p>${reserver('mini baguette station', 'a working lunch, an afterwork or a training day')}`,
  },
  s6: {
    nom: 'Gourmet Taco Station',
    description: 'Mini tacos dressed to order.',
    compo: ['Marinated chicken', 'Pulled beef', 'Prawns', 'Falafel'],
    article: `<h2>A gourmet taco station for your afterworks and corporate events in Paris</h2><p>Mini tacos dressed to order, hot and generous: marinated chicken, pulled beef, prawns, falafel. The station that brings some heat and some colour to an afterwork. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Dressed to order, with the sauces alongside</h2><p>Each taco is dressed as it is asked for, with sauces graded from mild to hot so everyone finds their level. Four fillings including a vegetarian one. Quantities set to your headcount.</p>${reserver('taco station', 'an afterwork, a launch or a team day')}`,
  },
  s7: {
    nom: 'Lebanese Wrap & Pita Station',
    description: 'Lebanese wraps and pita breads filled to order.',
    compo: ['Chicken shawarma', 'Beef shawarma', 'Falafel', 'Hummus', 'Tabbouleh'],
    article: `<h2>A Lebanese wrap and pita station for your corporate lunches and events in Paris</h2><p>Chicken and beef shawarma carved off the spit, falafel, hummus and tabbouleh, rolled into wraps and pita breads to order. Fragrant, filling, and halal throughout. L'Écrin Traiteur sets this station up across Paris and Île-de-France.</p><h2>Carved and rolled to order</h2><p>Chicken shawarma, beef shawarma and falafel, with hummus, tabbouleh and the pickles and sauces that belong with them. The falafel build is vegan. Quantities set to your headcount.</p>${reserver('Lebanese station', 'a working lunch, an afterwork or a team day')}`,
  },
  s9: {
    nom: 'Loaded Fries Station',
    description: 'Crisp potatoes, loaded to order.',
    compo: ['Cheddar & smoked turkey', 'Pulled beef', 'Crispy chicken', 'Truffle & parmesan'],
    article: `<h2>A loaded fries station for your afterworks and corporate events in Paris</h2><p>Crisp fries, loaded to order and eaten straight from the cone: cheddar and smoked turkey, pulled beef, crispy chicken, truffle and parmesan. The station nobody walks past. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Fried and loaded to order</h2><p>Fries are cooked in batches as people come, never held under a lamp, and loaded as they are asked for. Four toppings including a vegetarian one, all pork-free. Quantities set to your headcount.</p>${reserver('loaded fries station', 'an afterwork, a leaving party or a team day')}`,
  },
  do1: {
    nom: 'Artisan Ice Cream Bar',
    description: 'Made for summer · flavours and toppings of your choice.',
    compo: ['Vanilla', 'Chocolate', 'Pistachio', 'Strawberry', 'Lemon', 'Coffee', 'Toppings: fruit coulis, salted caramel, red berries, pistachios, crumbled cookies, whipped cream'],
    article: `<h2>An artisan ice cream bar for your summer corporate events in Paris</h2><p>An ice cream bar is the simplest way to make a hot afternoon bearable: vanilla, chocolate, pistachio, strawberry, lemon and coffee, scooped to order, with the toppings in front of you. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Scooped to order, topped by each guest</h2><p>Six flavours and a row of toppings — fruit coulis, salted caramel, red berries, pistachios, crumbled cookies, whipped cream. Everyone builds their own. Quantities set to your headcount and the length of the booking.</p>${reserver('ice cream bar', 'a summer party, a rooftop afterwork or a family day')}`,
  },
  do2: {
    nom: 'Dessert Station',
    description: 'Individual pastries and small sweet bites, dressed on site.',
    compo: ['Tartlets', 'Choux buns', 'Financiers', 'Madeleines', 'Signature mini desserts'],
    article: `<h2>A dessert station for your corporate receptions in Paris</h2><p>Individual pastries and small sweet bites, dressed on site rather than delivered in a box: tartlets, choux buns, financiers, madeleines and our signature mini desserts. The station that closes a reception properly. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Dressed on site, piece by piece</h2><p>Each piece is plated on the station, so the pastry stays crisp and the cream stays where it should. We vary the assortment and set quantities to your headcount.</p>${reserver('dessert station', 'a reception, a launch or an end-of-year party')}`,
  },
  do4: {
    nom: 'Fresh Fruit Bar',
    description: 'Seasonal fruit cut and dressed on site.',
    compo: [],
    article: `<h2>A fresh fruit bar for your corporate breaks and events in Paris</h2><p>Seasonal fruit cut and dressed on site, through the booking rather than an hour before: that is the difference between fruit that looks fresh and fruit that is. L'Écrin Traiteur sets this bar up across Paris and Île-de-France.</p><h2>Cut on site, through the service</h2><p>Seasonal fruit, cut as the bar empties so nothing sits and oxidises. Vegan and gluten-free, so the whole team can reach for it. Quantities set to your headcount.</p>${reserver('fruit bar', 'a wellbeing week, a welcome breakfast or a staff day')}`,
  },
  do5: {
    nom: 'Chocolate Fountain',
    description: 'A hot chocolate fountain with fruit for dipping.',
    compo: [],
    article: `<h2>A chocolate fountain for your corporate events in Paris</h2><p>A chocolate fountain is theatre as much as dessert: warm chocolate running, skewers of fruit to dip, and a queue of people who did not expect it. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Warm chocolate, fruit to dip</h2><p>Chocolate kept at temperature for the whole booking, with seasonal fruit, marshmallows and small pieces of cake to dip. We handle the setup, the service and the clearing up — which, with a chocolate fountain, is the part that matters.</p>${reserver('chocolate fountain', 'a family day, an end-of-year party or a launch')}`,
  },
  ba1: {
    nom: 'Mocktail Bar',
    description: 'Alcohol-free cocktails made to order.',
    compo: [],
    article: `<h2>A mocktail bar for your corporate receptions and afterworks in Paris</h2><p>A bartender making alcohol-free cocktails to order, shaken and served in a proper glass. At a corporate event, the people who are not drinking usually get a soft drink in a plastic cup; this gives them the same thing as everyone else. L'Écrin Traiteur sets this bar up across Paris and Île-de-France.</p><h2>Shaken to order, in a proper glass</h2><p>Fresh fruit, herbs, syrups made in house and sparkling water, built to order. Alcohol-free throughout, which also makes it the right choice for a room where nobody drinks alcohol at all.</p>${reserver('mocktail bar', 'an afterwork, a reception or a launch')}`,
  },
  ba3: {
    nom: 'Infused Waters',
    description: 'Waters infused with fruit and fresh herbs.',
    compo: [],
    article: `<h2>Infused waters for your corporate meetings and events in Paris</h2><p>Water that people actually drink: infused with fruit and fresh herbs, served in dispensers on the table or at the back of the room. Cucumber and mint, lemon and basil, red berries. L'Écrin Traiteur sets them up across Paris and Île-de-France.</p><h2>Infused on site, refilled through the day</h2><p>Fresh fruit and herbs infused on site and topped up through the booking. No sugar, nothing added: the simplest way to keep a room hydrated through a long meeting.</p>${reserver('infused waters', 'a board meeting, a training day or an offsite')}`,
  },
  do6: {
    nom: 'Sweet Popcorn Station',
    description: 'Popcorn popped fresh with sweet toppings.',
    compo: ['Plain popcorn', 'Caramel', 'Chocolate', 'Peanut', 'Icing sugar'],
    article: `<h2>A popcorn station for your corporate events in Paris</h2><p>Popcorn popped on site, warm, with the smell going down the corridor before anyone sees the machine. Plain, caramel, chocolate, peanut or dusted with icing sugar. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Popped on site, served warm</h2><p>Popped through the booking rather than bagged in advance, served in cones with the toppings alongside. Quantities set to your headcount.</p>${reserver('popcorn station', 'a family day, a film screening or a team party')}`,
  },
  do7: {
    nom: 'Candy Floss Station',
    description: 'Candy floss spun in front of your guests.',
    compo: ['Pink sugar', 'Blue sugar', 'White sugar', 'Yellow sugar'],
    article: `<h2>A candy floss station for your corporate events in Paris</h2><p>Candy floss spun in front of your guests, in the colour they pick. It is the station that makes adults queue like children, and it photographs better than anything else on the buffet. L'Écrin Traiteur sets it up across Paris and Île-de-France.</p><h2>Spun to order, in four colours</h2><p>Pink, blue, white or yellow sugar, spun as each guest comes to the station. Quantities set to your headcount and the length of the booking.</p>${reserver('candy floss station', 'a family day, a team party or a trade show')}`,
  },
}

export const enAnimation = (id) => EN_ANIMATIONS[id] || null
export const idsAnimationsEn = () => Object.keys(EN_ANIMATIONS)
