/*
  Pages traiteur halal, textes anglais.

  Surcouche de texte seulement : photos, zone desservie, sélection de
  plateaux et liens utiles restent lus dans lib/halalPagesData.js.

  Deux points de prudence, tenus mot pour mot comme en français :
  - aucune certification halal n'est revendiquée, et la page le dit ;
  - l'atelier manipule de la farine, donc des traces de gluten restent
    possibles. Ces deux phrases sont des engagements, pas du marketing :
    elles doivent dire exactement la même chose dans les deux langues.

  Les liens gardent leur chemin français et passent par reecrireLiensEn().
*/

export const EN_HALAL = {
  paris: {
    name: 'Halal caterer in Paris',
    h1: 'Halal caterer in Paris',
    eyebrow: 'Corporate catering · Paris & Île-de-France',
    breadcrumbLabel: 'Halal caterer in Paris',
    metaTitle: 'Halal caterer in Paris: everything pork-free, from 6:30 am',
    metaDescription: 'Halal corporate catering in Paris and Île-de-France: everything pork-free and alcohol-free, delivered from 6:30 am. Breakfast from €8 excl. VAT, quote within 24 hours.',
    heroDescription: 'The whole menu is halal and pork-free, with no alcohol and no extra cost: breakfast, lunch trays, cocktail receptions. Delivered to your offices across Paris and Île-de-France, Monday to Friday from 6:30 am.',
    reponseQ: 'Is your caterer in Paris halal?',
    reponse: [
      "Yes. At L'Écrin Traiteur everything is halal and pork-free as standard, with no alcohol in the recipes and no extra cost: there is nothing for you to ask for. We do not claim any halal certification, and we say so plainly.",
      'Entry prices, per person excluding VAT: breakfast from €8, lunch tray from €28.90, cocktail reception from €29.90. Delivery is €29 excl. VAT in Paris, and the minimum order is €50 excl. VAT.',
    ],
    formulesEyebrow: 'What you order',
    formulesTitle: 'Four services, one halal menu',
    formules: [
      { nom: 'Breakfast', prix: 'from €8 excl. VAT/person', desc: 'Pastries, juice, coffee and fruit. A full breakfast runs €12 to €16 excl. VAT per person.' },
      { nom: 'Afternoon break', prix: 'from €6 excl. VAT/person', desc: 'Madeleines, cookies, loaf cakes and fruit for the four o’clock break.' },
      { nom: 'Lunch tray', prix: '€28.90 to €30.90 excl. VAT/person', desc: 'Individual starter, main and dessert: vegetarian, chicken or salmon.' },
      { nom: 'Cocktail and buffet', prix: '€29.90 to €51.90 excl. VAT/person', desc: '8, 12 or 16 savoury and sweet pieces per person, delivered arranged.' },
    ],
    seoArticle: `
      <h2>What to order from a halal caterer in Paris</h2>
      <p>Four services cover a team's day, all of them halal and pork-free. The table gives the entry price of each, per person and excluding VAT.</p>
      <div class="tbl-wrap"><table>
      <thead><tr><th>Service</th><th>What you get</th><th>Price excl. VAT</th></tr></thead>
      <tbody>
      <tr><td><strong><a href="/creations/petits-dejeuners-et-pauses">Breakfast</a></strong></td><td>Pastries, juice, coffee and fruit</td><td>From €8, full breakfast €12 to €16</td></tr>
      <tr><td><strong><a href="/creations/pauses-gourmandes">Afternoon break</a></strong></td><td>Madeleines, cookies, loaf cakes, fruit</td><td>From €6</td></tr>
      <tr><td><strong><a href="/traiteur-halal/plateaux-repas">Lunch tray</a></strong></td><td>Individual starter, main and dessert</td><td>€28.90 to €30.90</td></tr>
      <tr><td><strong><a href="/traiteur-halal/buffet-entreprise">Cocktail and buffet</a></strong></td><td>8, 12 or 16 savoury and sweet pieces</td><td>€29.90 to €51.90</td></tr>
      </tbody>
      </table></div>
      <p>Delivery is charged at €29 excl. VAT per order in Paris and nearby towns, with a minimum order of €50 excl. VAT.</p>
      <h2>What does a halal caterer without certification guarantee?</h2>
      <p>We guarantee three things across the whole menu: no pork, no alcohol in the recipes, and no extra charge for either. We do not claim a halal certification issued by any body, and we would rather write that down than put a label on it. For the meats, we can tell you the origin at the quote stage. The detail is in our article on <a href="/journal/traiteur-halal-entreprise-paris">halal-friendly catering in Paris</a>, and the difference with a certified caterer is in our guide to the <a href="/journal/evenement-entreprise-halal-guide">halal corporate event</a>.</p>
      <h2>Where do we deliver in and around Paris?</h2>
      <p>We deliver to Paris and to the Yvelines (78), the Hauts-de-Seine (92), the Seine-Saint-Denis (93), the Val-de-Marne (94) and the Val-d'Oise (95), Monday to Friday, from 6:30 am. Our kitchen is in Boulogne-Billancourt, at 63 bis rue de Sèvres. See <a href="/traiteur/paris">catering in Paris</a>, <a href="/traiteur/la-defense">La Défense</a>, <a href="/traiteur/boulogne-billancourt">Boulogne-Billancourt</a> or <a href="/traiteur">every town we serve</a>.</p>
      <h2>Are other dietary needs covered?</h2>
      <p>Yes. Vegetarian, vegan and gluten-free options are specified when you order, with the number of people concerned. Our kitchen handles flour, so traces of gluten remain possible. To split one order across several diets, see our guide to an <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">inclusive menu at the office</a>.</p>
      <h2>How to order</h2>
      <p>Order until 2 pm the day before for delivery the next day. From 50 people, or for several sites, 48 hours' notice is recommended. The quote arrives within 24 hours, the invoice is a company invoice showing VAT, and we accept a purchase order. <a href="/devis">Ask for your quote</a>.</p>
      <p>L'Écrin Traiteur prices, October 2026. Back to <a href="/traiteur-halal">halal corporate catering</a>.</p>`,
    closingEyebrow: 'Halal caterer in Paris',
    closingTitle: 'Halal and pork-free,\nfor the whole team.',
    closingBody: 'One menu for all your colleagues, from breakfast to the cocktail reception: there is no separate menu for you to ask for.',
    ctaQuestion: 'A halal quote for your team in Paris?',
    faq: [
      {
        name: 'Halal or hallal: which spelling is right?',
        answer: 'Both write the same Arabic word, which means "permitted". "Halal" is the usual form in English and in French; "hallal", with two l’s, is a widespread variant. At L’Écrin Traiteur the meaning is the same either way: everything is halal and pork-free, with no alcohol in the recipes and no extra cost.',
      },
      {
        name: 'What does a halal caterer in Paris cost for 20 people?',
        answer: "For 20 people, allow €189 excl. VAT for a Classic breakfast (€160 plus €29 delivery), €627 excl. VAT for chicken lunch trays at €29.90 excl. VAT (€598 plus €29 delivery), or €627 excl. VAT for an 8-piece L'Invitation cocktail. The minimum order is €50 excl. VAT.",
      },
      {
        name: 'Is your catering halal certified?',
        answer: 'No. We do not claim a halal certification issued by any body. What we do guarantee: a menu that is entirely halal and pork-free, with no alcohol in the recipes and no extra cost. For the meats, we can tell you the origin at the quote stage, before you confirm the order.',
      },
      {
        name: 'Do you deliver across Île-de-France, not only in Paris?',
        answer: "Yes: Paris, the Yvelines, the Hauts-de-Seine, the Seine-Saint-Denis, the Val-de-Marne and the Val-d'Oise, Monday to Friday, from 6:30 am. Delivery is €29 excl. VAT in Paris and nearby towns; other areas are priced on the quote.",
      },
      {
        name: 'Can we order halal and vegetarian in the same delivery?',
        answer: 'Yes. Everything is halal and pork-free, and vegetarian, vegan and gluten-free options are specified when you order, with the number of people concerned. For lunch trays, allow roughly one third vegetarian if you do not know the preferences. Our kitchen handles flour, so traces of gluten are possible.',
      },
    ],
  },

  'buffet-entreprise': {
    name: 'Halal corporate buffet',
    h1: 'Halal corporate buffet',
    eyebrow: 'Cocktail and buffet · Paris & Île-de-France',
    breadcrumbLabel: 'Halal corporate buffet',
    metaTitle: 'Halal corporate buffet in Paris: from €29.90 excl. VAT/person',
    metaDescription: 'Halal buffet and cocktail catering for companies in Paris and Île-de-France: no pork, no alcohol, 8, 12 or 16 pieces from €29.90 excl. VAT per person. Quote in 24 hrs.',
    heroDescription: 'A standing reception or a sharing menu at the table: everything is halal and pork-free, with no alcohol and no extra cost. From 8 to 16 pieces per person, delivered arranged from 6:30 am across Paris and Île-de-France.',
    reponseQ: 'Is your corporate buffet halal?',
    reponse: [
      "Yes. L'Écrin Traiteur's three cocktail menus and its sharing menus are halal and pork-free, with no alcohol in the recipes and no extra cost. The buffet is the same for every guest: there is no separate menu to arrange. We do not claim any halal certification.",
      'Entry prices: €29.90 excl. VAT per person for 8 pieces, €34.90 per person for a sharing menu. Delivery is €29 excl. VAT, and the minimum order is €50 excl. VAT.',
    ],
    formulesEyebrow: 'Our halal buffets',
    formulesTitle: 'Three cocktail menus and one sharing menu',
    formules: [
      { nom: "L'Invitation", prix: '€29.90 excl. VAT/person · 8 pieces', desc: 'Drinks, afterwork, a leaving party. 6 savoury pieces and 2 sweet.' },
      { nom: 'La Réception', prix: '€40.90 excl. VAT/person · 12 pieces', desc: 'A reception that replaces lunch, a partner evening, an opening. 9 savoury pieces and 3 sweet.' },
      { nom: 'La Célébration', prix: '€51.90 excl. VAT/person · 16 pieces', desc: 'A standing dinner that replaces dinner. 12 savoury pieces and 4 sweet.' },
      { nom: 'Sharing menu', prix: 'from €34.90/person', desc: 'Salads, boards and pieces to share at the table, sized for 8 to 12 people: Le Jardin, Le Méditerranéen.' },
    ],
    seoArticle: `
      <h2>Standing buffet or sharing menu: which one?</h2>
      <p>A cocktail reception is eaten standing, piece by piece, for an event where people circulate: 6 to 8 pieces per person for drinks, 12 to 14 when it replaces lunch, 16 to 18 for a standing dinner, with 10% margin. The <a href="/creations/a-partager">sharing menu</a> goes in the middle of the table for a seated meal of 8 to 12 people. Our guide to <a href="/journal/buffet-a-partager-ou-cocktail-entreprise-paris">sharing buffet or cocktail reception</a> works through the choice.</p>
      <h2>What a halal buffet costs for 20, 50 or 100 people</h2>
      <p>The price per person is fixed: €29.90 excl. VAT for 8 pieces, €40.90 excl. VAT for 12, €51.90 excl. VAT for 16. The totals below exclude delivery, charged at €29 excl. VAT per order.</p>
      <div class="tbl-wrap"><table>
      <thead><tr><th>People</th><th>L'Invitation (8 pieces)</th><th>La Réception (12 pieces)</th><th>La Célébration (16 pieces)</th></tr></thead>
      <tbody>
      <tr><td><strong>20 people</strong></td><td>€598 excl. VAT</td><td>€818 excl. VAT</td><td>€1,038 excl. VAT</td></tr>
      <tr><td><strong>50 people</strong></td><td>€1,495 excl. VAT</td><td>€2,045 excl. VAT</td><td>€2,595 excl. VAT</td></tr>
      <tr><td><strong>100 people</strong></td><td>€2,990 excl. VAT</td><td>€4,090 excl. VAT</td><td>€5,190 excl. VAT</td></tr>
      </tbody>
      </table></div>
      <h2>What is on a halal buffet?</h2>
      <p>L'Invitation brings together cheese gougères, craquelin choux with tapenade, a beetroot and goat's cheese millefeuille, a tandoori chicken skewer and a mini cheeseburger, then an all-chocolate tartlet and a fresh fruit skewer. La Réception adds marinated salmon, prawn with mango and a praline dome; La Célébration adds melon with feta and mint, and a grilled vegetable navette roll. The full detail is in our guide to the <a href="/journal/cocktail-entreprise-halal-paris">halal corporate cocktail reception in Paris</a>.</p>
      <h2>Do we need a separate buffet for guests who eat halal?</h2>
      <p>No. Because the whole menu is halal and pork-free, everyone serves themselves from the same buffet and nobody has to declare anything. All the drinks are alcohol-free, including the 0% Chardonnay.</p>
      <h2>How to order a halal buffet</h2>
      <p>Order until 2 pm the day before for delivery from 6:30 am. From 50 people, or for several sites, 48 hours' notice is recommended. The platters arrive arranged, ready to put down. Collecting the equipment afterwards, if you need it, costs €19 excl. VAT on top of delivery. <a href="/devis">Ask for your quote</a> — answer within 24 hours — or see our <a href="/traiteur-halal/plateaux-repas">halal lunch trays</a> for a seated lunch.</p>
      <p>L'Écrin Traiteur prices, October 2026. Back to <a href="/traiteur-halal">halal corporate catering</a>.</p>`,
    closingEyebrow: 'Halal corporate buffet',
    closingTitle: 'One buffet,\nfor all your guests.',
    closingBody: 'A standing reception or a sharing menu, the buffet is identical for everyone: halal, pork-free, alcohol-free, at no extra cost.',
    ctaQuestion: 'A halal buffet for your reception?',
    faq: [
      {
        name: 'How many pieces per person for a corporate buffet?',
        answer: 'Allow 6 to 8 pieces per person for drinks, 12 to 14 for a reception that replaces lunch and 16 to 18 for a standing dinner, then add 10% margin. For 50 people replacing lunch, that is 600 to 700 pieces before the margin.',
      },
      {
        name: 'Does a halal buffet cost more than a standard one?',
        answer: 'No, there is no extra charge: the whole menu is halal and pork-free as standard, with no alcohol in the recipes. The prices are the menu prices: €29.90 excl. VAT per person for 8 pieces, €40.90 excl. VAT for 12, €51.90 excl. VAT for 16, with €29 excl. VAT delivery per order.',
      },
      {
        name: 'Does the buffet work for vegetarian or gluten-free guests?',
        answer: 'Yes, on request. The composition of the three cocktail menus is fixed: tell us the vegetarian, vegan or gluten-free needs, with the number of people concerned, at the quote stage. Our kitchen handles flour, so traces of gluten remain possible.',
      },
      {
        name: 'What drinks go with a halal buffet?',
        answer: 'Alain Milliat juices and nectars, still and sparkling waters, and a 0% Blanc de Blancs Chardonnay for the toast. Our entire drinks list is alcohol-free. Count 3 to 4 drinks per person for a two-hour reception, with at least three different flavours.',
      },
      {
        name: 'How late can we order a halal buffet?',
        answer: 'Until 2 pm the day before for delivery the next day, from 6:30 am, Monday to Friday. From 50 people, or for several sites, 48 hours’ notice is recommended. The quote is sent within 24 hours, the invoice is a company invoice showing VAT, and we accept a purchase order.',
      },
    ],
  },

  'plateaux-repas': {
    name: 'Halal corporate lunch trays',
    h1: 'Halal corporate lunch trays',
    eyebrow: 'Lunch trays · Paris & Île-de-France',
    breadcrumbLabel: 'Halal lunch trays',
    metaTitle: 'Halal corporate lunch trays from €28.90 excl. VAT/person',
    metaDescription: 'Halal, pork-free lunch trays for companies in Paris: starter, main, dessert from €28.90 excl. VAT per person, delivered from 6:30 am. Quote within 24 hours.',
    heroDescription: 'Six complete individual trays — starter, main and dessert — all halal and pork-free, with no alcohol. €28.90 to €30.90 excl. VAT per person, delivered for the time of your meeting from 6:30 am.',
    reponseQ: 'Are your lunch trays halal?',
    reponse: [
      "Yes. L'Écrin Traiteur's six lunch trays are halal and pork-free, with no alcohol in the recipes and no extra cost. Each tray has a starter, a main and a dessert. We do not claim any halal certification.",
      'Price per person excluding VAT: €28.90 for the vegetarian trays, €29.90 with chicken, €30.90 with salmon. Delivery is €29 excl. VAT, and the minimum order is €50 excl. VAT.',
    ],
    formulesEyebrow: 'Our halal trays',
    formulesTitle: 'Three price points, six menus',
    formules: [
      { nom: 'Vegetarian', prix: '€28.90 excl. VAT/person', desc: 'La Solaire, La Provençale and La Potagère: hummus and falafel, pasta with pesto, or lentils and feta.' },
      { nom: 'Chicken', prix: '€29.90 excl. VAT/person', desc: 'La Romaine, a Caesar salad, and La Champêtre, with sliced chicken and tabbouleh.' },
      { nom: 'Salmon', prix: '€30.90 excl. VAT/person', desc: 'La Boréale: celeriac remoulade, sautéed potatoes and pan-fried salmon, apple and strawberry compote.' },
    ],
    selection: [
      { id: 'e2', note: 'The easiest menu to get a mixed group to agree on.' },
      { id: 'e4', note: 'Light, for a meeting that carries on into the afternoon.' },
      { id: 'e5', note: 'For management lunches.' },
      { id: 'e1', note: 'The most filling vegetarian tray on the menu.' },
      { id: 'e3', note: 'Pasta with pesto, mozzarella, panna cotta.' },
      { id: 'e6', note: 'Lentils and feta, summer vegetable tart.' },
    ],
    seoArticle: `
      <h2>What is on a halal lunch tray?</h2>
      <p>Each tray is individual and complete: a starter, a main and a dessert, made the morning of the delivery. All six trays are halal and pork-free: three vegetarian (<a href="/creations/plateaux-repas/e1">La Solaire</a>, <a href="/creations/plateaux-repas/e3">La Provençale</a>, <a href="/creations/plateaux-repas/e6">La Potagère</a>), two with chicken (<a href="/creations/plateaux-repas/e2">La Romaine</a>, <a href="/creations/plateaux-repas/e4">La Champêtre</a>) and one with salmon (<a href="/creations/plateaux-repas/e5">La Boréale</a>).</p>
      <h2>What a halal lunch costs for 12, 20 or 50 people</h2>
      <p>The price runs from €28.90 to €30.90 excl. VAT per person, plus €29 excl. VAT delivery per order. The table applies one third vegetarian for 20 and 50 people, and for 12 people a mix of six chicken trays, four vegetarian and two salmon.</p>
      <div class="tbl-wrap"><table>
      <thead><tr><th>People</th><th>Mix</th><th>Trays excl. VAT</th><th>With €29 excl. VAT delivery</th></tr></thead>
      <tbody>
      <tr><td><strong>12 people</strong></td><td>4 vegetarian, 6 chicken, 2 salmon</td><td>€356.80</td><td>€385.80</td></tr>
      <tr><td><strong>20 people</strong></td><td>7 vegetarian, 13 chicken</td><td>€591.00</td><td>€620.00</td></tr>
      <tr><td><strong>50 people</strong></td><td>17 vegetarian, 33 chicken</td><td>€1,478.00</td><td>€1,507.00</td></tr>
      </tbody>
      </table></div>
      <h2>How to split meat, fish and vegetarian across a mixed team</h2>
      <p>Allow roughly one third vegetarian when you do not know the preferences, then tell us the numbers for each menu when you order. The trays are wrapped and labelled: everyone finds the one meant for them, with no guessing at the handout. Vegan and gluten-free options are specified the same way. See our guide to an <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">inclusive menu at the office</a>.</p>
      <h2>Is there a lighter format for a halal lunch?</h2>
      <p>Yes: the <a href="/creations/lunch-box">lunch boxes</a>, €18.90 to €21.90 excl. VAT per person, pair a sandwich on baguette or brioche bread with a starter and a dessert. It is the halal lunch box for teams eating at their desks, under the same rule as the rest of the menu. For a full day, our guide to the <a href="/journal/evenement-entreprise-halal-guide">halal corporate event</a> puts the formats in order.</p>
      <h2>How to order halal lunch trays</h2>
      <p>Order until 2 pm the day before for delivery from 6:30 am, Monday to Friday. For 50 people and above, give us 48 hours. The minimum order is €50 excl. VAT, the invoice is a company invoice showing VAT, and we accept a purchase order. For a meeting at La Défense, see <a href="/plateaux-repas-entreprise/la-defense">lunch trays at La Défense</a>. <a href="/devis">Ask for your quote</a> — answer within 24 hours.</p>
      <p>L'Écrin Traiteur prices, October 2026. Back to <a href="/traiteur-halal">halal corporate catering</a>.</p>`,
    closingEyebrow: 'Halal corporate lunch trays',
    closingTitle: 'A complete lunch,\nhalal and pork-free.',
    closingBody: 'A starter, a main and a dessert per person, labelled and delivered on time: the meeting lunch with nothing for you to organise.',
    ctaQuestion: 'Halal lunch trays for your meeting?',
    faq: [
      {
        name: 'What does a halal corporate lunch tray cost?',
        answer: '€28.90 to €30.90 excl. VAT per person: €28.90 for the vegetarian trays, €29.90 for chicken, €30.90 for salmon. Each tray has a starter, a main and a dessert. Delivery is €29 excl. VAT in Paris and nearby towns, and the minimum order is €50 excl. VAT.',
      },
      {
        name: 'Do the lunch trays contain pork or alcohol?',
        answer: 'No. The two chicken trays, the salmon tray and the three vegetarian trays are pork-free and have no alcohol in the recipes, at no extra cost. We do not claim any halal certification: the origin of the meats can be given at the quote stage, before you order.',
      },
      {
        name: 'How many vegetarian trays for a mixed team?',
        answer: 'Allow roughly one third vegetarian when you do not know the preferences. For 20 people that gives 7 vegetarian trays at €28.90 excl. VAT and 13 chicken at €29.90 excl. VAT, which is €591 excl. VAT before delivery. Tell us the numbers when you order: the trays are labelled.',
      },
      {
        name: 'Do you do vegan or gluten-free lunch trays?',
        answer: 'Vegan and gluten-free options are specified when you order, with the number of people concerned. Not all the vegetarian trays are vegan: La Provençale contains mozzarella and La Potagère contains feta. Our kitchen handles flour, so traces of gluten remain possible.',
      },
      {
        name: 'How late can we order, and what time do you deliver?',
        answer: 'Order until 2 pm the day before for delivery the next day, Monday to Friday, from 6:30 am. For 50 people and above, or several sites, 48 hours’ notice is recommended. When you order, tell us the time the trays need to be on the table, not the time of the meeting.',
      },
    ],
  },
}

export const enHalal = (slug) => EN_HALAL[slug] || null
export const slugsHalalEn = () => Object.keys(EN_HALAL)

/*
  Index /traiteur-halal, textes anglais. Mêmes chiffres, mêmes engagements.
*/
export const EN_HALAL_INDEX = {
  eyebrow: 'Corporate catering · Paris & Île-de-France',
  h1a: 'Halal corporate catering',
  h1b: 'Paris & Île-de-France',
  heroDescription: "The corporate caterer that feeds the whole team. Everything halal and pork-free, with vegetarian, vegan and gluten-free options, delivered to your offices from 6:30 am.",
  devis: 'Get a quote →',
  voirPdj: 'See our breakfasts',
  reponseQ: 'Is your catering halal?',
  reponse: [
    "Yes. L'Écrin Traiteur's whole menu is halal and pork-free as standard, with no alcohol in the recipes: breakfasts, lunch trays, afternoon breaks, cocktail receptions and buffets. There is nothing for you to specify when you order. We do not claim a halal certification: this is a halal-friendly offer, built with our makers.",
    'Vegetarian and vegan versions exist on every service, and we adapt to gluten-free on request. Delivered from 6:30 am across Paris and Île-de-France, order until 2 pm the day before, minimum €50 excl. VAT, quote within 24 hours.',
    'Price reference points, all halal and pork-free: breakfast from €8 excl. VAT per person, lunch tray from €28.90 excl. VAT, cocktail reception €29.90 to €51.90 excl. VAT depending on the menu. Delivery is €29 excl. VAT in Paris and nearby towns.',
  ],
  prixTitre: 'What halal corporate catering costs',
  prixEntetes: ['Service', 'Price excl. VAT per person', "What's included"],
  prixLignes: [
    ['Breakfast', 'from €8', 'Pure butter pastries, Alain Milliat juice, coffee, fresh fruit'],
    ['Afternoon break', 'from €6', 'A drink and a pastry'],
    ['Lunch box', 'from €18.90', 'An individual lunch, ready to eat'],
    ['Lunch tray', 'from €28.90', 'Starter, main, dessert and bread'],
    ['Cocktail, 8 pieces', '€29.90', "L'Invitation: drinks, afterwork"],
    ['Cocktail, 12 pieces', '€40.90', 'La Réception: replaces lunch, partner evening'],
    ['Cocktail, 16 pieces', '€51.90', 'La Célébration: a standing dinner'],
  ],
  prixNote: '2026 prices, excluding VAT. Delivery €29 excl. VAT in Paris and nearby towns, minimum order €50 excl. VAT. Everything is halal and pork-free, at no extra cost.',
  regimesEyebrow: 'A table where nobody is left out',
  regimesTitreA: 'The same moment,',
  regimesTitreB: 'shared by everyone',
  regimes: [
    { label: 'Our standard', titre: 'All halal, pork-free', desc: 'Our entire range is halal and pork-free — not a separate option, but our default. You order with an easy mind for the whole team.' },
    { label: 'For everyone', titre: 'Vegetarian & vegan', desc: 'Breakfasts, lunch trays and buffets come in vegetarian and vegan versions, built to be as generous as the rest of the menu.' },
    { label: 'On request', titre: 'Gluten-free', desc: 'We adapt to gluten-free on request, so a colleague’s dietary constraint is never a reason not to order.' },
  ],
  prestationsEyebrow: 'Our services',
  prestationsTitreA: 'Halal from breakfast',
  prestationsTitreB: 'to the buffet',
  prestations: [
    { href: '/creations/petits-dejeuners-et-pauses', label: 'Breakfasts & breaks', desc: 'Pastries, madeleines, fruit baskets and drinks, halal, delivered from 6:30 am.' },
    { href: '/creations/plateaux-repas', label: 'Lunch trays', desc: 'Complete individual menus for your working lunches, halal and pork-free.' },
    { href: '/creations/cocktails', label: 'Cocktails & buffets', desc: 'Savoury and sweet canapés for your receptions, with vegetarian, vegan and gluten-free options.' },
  ],
  decouvrir: 'Discover →',
  sousPagesEyebrow: 'The detail, service by service',
  sousPagesTitre: 'Three pages to choose your halal menu',
  sousPages: [
    { href: '/traiteur-halal/paris', label: 'Halal caterer in Paris', desc: 'Breakfast from €8 excl. VAT, lunch trays, cocktail receptions: the whole menu halal and pork-free, delivered across Paris and Île-de-France from 6:30 am.' },
    { href: '/traiteur-halal/buffet-entreprise', label: 'Halal corporate buffet', desc: 'A reception of 8, 12 or 16 pieces from €29.90 excl. VAT per person, or a sharing menu: one buffet for every guest.' },
    { href: '/traiteur-halal/plateaux-repas', label: 'Halal corporate lunch trays', desc: 'Six individual trays — starter, main and dessert — €28.90 to €30.90 excl. VAT per person, pork-free and alcohol-free.' },
  ],
  voirPage: 'See the page →',
  faqEyebrow: 'Frequently asked questions',
  faqTitre: 'Halal catering: your questions answered',
  args: [
    { icon: 'quality', titre: 'Halal as standard', desc: 'The whole range is halal and pork-free — not a separate menu, but our standard on every service.' },
    { icon: 'custom', titre: 'Clear options', desc: 'Vegetarian, vegan, gluten-free: every dietary constraint is handled, with no extra effort from you.' },
    { icon: 'delivery', titre: 'Delivered from 6:30 am', desc: 'Delivered and set up by our own team across Paris and Île-de-France, every weekday morning.' },
    { icon: 'support', titre: 'One person on your file', desc: 'A single contact to build your menus, from 10 to 300 people, from the quote to the delivery.' },
  ],
  faq: [
    { q: 'Is your corporate catering halal?', a: 'Yes. Our entire range is halal and pork-free by default — that is our standard, not a separate option. You can order with an easy mind for all your colleagues.' },
    { q: 'Do you have vegetarian, vegan and gluten-free options?', a: 'Yes. Our breakfasts, lunch trays and buffets come in vegetarian and vegan versions, and we adapt to gluten-free on request.' },
    { q: 'Do you deliver to offices in Paris and Île-de-France?', a: 'Yes, from 6:30 am, Monday to Friday, in Paris and across Île-de-France, with our own team trained to our standards.' },
    { q: 'How many people can you deliver for?', a: 'From 10 to 300 people and above, small teams as readily as large offsites. Every order is made the same morning.' },
    { q: 'Are you halal certified?', a: 'No, we do not claim a halal certification issued by any body. The whole menu is halal and pork-free as standard, with no alcohol in the recipes: it is a halal-friendly offer, built with our makers. For the meats, we can tell you the origin at the quote stage.' },
    { q: 'What does a halal lunch tray cost?', a: 'Lunch trays start at €28.90 excl. VAT per person, starter, main, dessert and bread included, all halal and pork-free. Delivery is €29 excl. VAT in Paris and nearby towns, minimum order €50 excl. VAT.' },
    { q: 'Do you do a halal cocktail reception or buffet?', a: 'Yes. The cocktail menus are halal and pork-free as standard: 8 pieces at €29.90 excl. VAT per person, 12 pieces at €40.90 excl. VAT, 16 pieces at €51.90 excl. VAT. For 50 people, €1,495 to €2,595 excl. VAT before delivery.' },
    { q: 'Is there alcohol in your recipes?', a: 'No. Our recipes contain no alcohol and we only deliver alcohol-free drinks: Alain Milliat juices, waters and, for the toast, a 0% Blanc de Blancs Chardonnay.' },
  ],
  seoArticle: `
    <h2>Halal corporate catering, built for the whole team</h2>
    <p>At the office, a shared break should never leave anyone out. At <strong>L'Écrin Traiteur</strong>, our entire range is <strong>halal and pork-free as standard</strong>: breakfasts, lunch trays, cocktail receptions and buffets. It is not an option tucked away in a corner of the menu — it is our default on every order delivered across Paris and Île-de-France.</p>
    <h2>Halal, pork-free, alcohol-free: what we state</h2>
    <p>The whole menu is halal and pork-free as standard, and our recipes contain no alcohol. We do not claim a halal certification issued by any body: ours is a halal-friendly offer, built with our makers. If the origin of a meat matters to your team, say so at the quote stage and we can tell you about the sourcing before you confirm. The detail is in our guide to <a href="/journal/traiteur-halal-entreprise-paris">halal-friendly catering in Paris</a>.</p>
    <h2>Vegetarian, vegan, gluten-free: everyone has a place</h2>
    <p>Beyond halal, our services come in <strong>vegetarian and vegan</strong> versions, and we make <strong>gluten-free adaptations on request</strong>. Whatever your colleagues eat, they share the same moment around a table where nobody is set aside. See also our guides to <a href="/journal/traiteur-vegan-vegetarien-entreprise-paris">vegetarian and vegan corporate catering</a> and <a href="/journal/traiteur-sans-gluten-entreprise-paris">gluten-free corporate catering</a>.</p>
    <h2>Halal for an offsite, a lunch or a reception</h2>
    <ul>
      <li><strong>Offsite:</strong> on a day that brings several teams together, and outside speakers, a halal menu by default saves having to survey everyone's constraints. See <a href="/occasions/seminaire-entreprise">offsite catering</a>.</li>
      <li><strong>Meeting lunch:</strong> one complete individual tray per person, halal and pork-free. See <a href="/occasions/dejeuner-entreprise">corporate lunch</a>.</li>
      <li><strong>Cocktail reception and afterwork:</strong> savoury and sweet canapés with no pork and no alcohol, with alcohol-free drinks in the same order. See <a href="/occasions/cocktail-entreprise">corporate cocktail reception</a> and <a href="/occasions/afterwork-entreprise">afterwork catering</a>.</li>
      <li><strong>Team breakfast:</strong> pastries, madeleines, fruit and juice, with nothing special to arrange. See <a href="/occasions/petit-dejeuner-entreprise">corporate breakfast</a>.</li>
    </ul>
    <h2>Halal delivery across Paris and Île-de-France</h2>
    <p>A morning meeting, an offsite, a team breakfast or a leaving party: we deliver and set up from 6:30 am, Monday to Friday, for 10 to 300 people, with our own team. We serve <a href="/traiteur/paris">Paris</a>, <a href="/traiteur/la-defense">La Défense</a>, <a href="/traiteur/boulogne-billancourt">Boulogne-Billancourt</a>, <a href="/traiteur/neuilly-sur-seine">Neuilly-sur-Seine</a>, <a href="/traiteur/levallois-perret">Levallois-Perret</a>, <a href="/traiteur/nanterre">Nanterre</a> and <a href="/traiteur/versailles">Versailles</a>, which is <a href="/traiteur">every town in our Île-de-France delivery area</a>. The food is made the same morning, for freshness, and our clients rate us 5/5 on Google.</p>
    <p>Order until 2 pm the day before for delivery the next day; from 50 people, give us at least 48 hours. <a href="/devis">Ask for your free quote</a> and build a menu that feeds the whole team.</p>`,
}
