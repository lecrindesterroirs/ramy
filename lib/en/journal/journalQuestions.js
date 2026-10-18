/*
  Surcouche anglaise des articles « questions » de lib/journalQuestions.js
  (petit-déjeuner par effectif, composition, mini-viennoiseries, cocktails).

  Les montants sont RECALCULÉS par pdjEn / cocktailEn, qui enveloppent les
  fonctions françaises : aucun chiffre n'est recopié ici. Un prix qui change
  dans la donnée française change dans les deux langues.
*/
import { eurEn, faqHtmlEn, pdjEn, tableLignesEn, cocktailEn, tableCocktailEn, FORMULES_EN, SIGNATURE_EN, LIV } from './budget'

const dej20 = cocktailEn(20, FORMULES_EN.reception)
const dej50 = cocktailEn(50, FORMULES_EN.reception)
const dej100 = cocktailEn(100, FORMULES_EN.reception)
const din20 = cocktailEn(20, FORMULES_EN.celebration)
const din30 = cocktailEn(30, FORMULES_EN.celebration)
const din20Reception = cocktailEn(20, FORMULES_EN.reception)
const din30Reception = cocktailEn(30, FORMULES_EN.reception)

const p20 = pdjEn(20)
const p30 = pdjEn(30)
const p50 = pdjEn(50)

const FAQ_PDJ20 = [
  { q: 'How many pastries for 20 people?', a: '40 mini pastries, at 2 per person, which is 2 trays of 30. The 20 extra pieces are the margin.' },
  { q: 'How much coffee and tea for 20 people?', a: `${p20.thermos} one-litre thermoses: ${p20.cafe} of coffee and ${p20.the} of tea, at one thermos per 6 people, with 4 coffee for 1 tea.` },
  { q: 'How much does a breakfast for 20 people cost?', a: `${eurEn(p20.total, true)} excl. VAT including delivery for the full breakfast, that is ${eurEn(p20.produits / 20, true)} excl. VAT per person excluding delivery. The Classic package comes to ${eurEn(20 * 8 + LIV)} excl. VAT (20 × €8 + €29 delivery).` },
  { q: 'How late can you order for 20 people?', a: 'Until 2 pm the day before, with delivery from 6:30 am. The 48-hour lead time only applies from 50 people upwards.' },
  { q: 'What should you plan for a vegan or gluten-free guest?', a: 'Fresh fruit skewers are vegan and gluten-free, and the gluten-free banana bread is €26.90 excl. VAT for 6 to 8 people. Tell us how many guests are concerned when you ask for a quote.' },
  { q: 'Should you order more than 20 portions?', a: 'Add a 10% margin if last-minute guests are possible. For 20 confirmed people the quantities above are enough: the 2 trays already deliver 20 mini pastries more than needed.' },
]

const FAQ_PDJ30 = [
  { q: 'How many pastries for 30 people?', a: '60 mini pastries, at 2 per person, which is exactly 2 trays of 30. There is no margin, so add a third tray if guests may be added.' },
  { q: 'Why does a loaf cake appear from 21 people?', a: 'Above 20 people we replace 5 madeleines with a homemade loaf cake of 5 to 6 slices, to vary the sweet side. At 30 people: 30 madeleines and 1 loaf cake.' },
  { q: 'How many thermoses for 30 people?', a: `${p30.thermos} one-litre thermoses: ${p30.cafe} of coffee and ${p30.the} of tea.` },
  { q: 'How much does a breakfast for 30 people cost?', a: `${eurEn(p30.total, true)} excl. VAT including delivery, that is ${eurEn(p30.produits / 30, true)} excl. VAT per person excluding delivery. The Classic package comes to ${eurEn(30 * 8 + LIV)} excl. VAT.` },
  { q: 'What changes compared with a breakfast for 20 people?', a: `At 30 people the same pattern applies with ${p30.vienn / 30} trays, ${p30.litres} litres of juice and ${p30.thermos} thermoses. The budget goes from ${eurEn(p20.total, true)} to ${eurEn(p30.total, true)} excl. VAT: ${eurEn(p30.total - p20.total, true)} more for 10 more people.` },
  { q: 'Can you deliver before 8 am?', a: 'Yes, delivery starts at 6:30 am, at the time the client chooses.' },
]

const FAQ_PDJ50 = [
  { q: 'How many pastries for 50 people?', a: '100 mini pastries needed, which is 4 trays of 30 (120 pieces delivered).' },
  { q: 'Do you need to order earlier for 50 people?', a: 'Yes: from 50 people, allow 48 hours. Below that threshold, ordering stays possible until 2 pm the day before.' },
  { q: 'How many thermoses for 50 people?', a: `${p50.thermos} one-litre thermoses: ${p50.cafe} of coffee and ${p50.the} of tea, at one thermos per 6 people.` },
  { q: 'How much does a breakfast for 50 people cost?', a: `${eurEn(p50.total, true)} excl. VAT including delivery, that is ${eurEn(p50.produits / 50, true)} excl. VAT per person excluding delivery. The Classic package comes to ${eurEn(50 * 8 + LIV)} excl. VAT.` },
  { q: 'How many loaf cakes for 50 people?', a: 'Above 40 people we plan 2 homemade loaf cakes of 5 to 6 slices, with 40 madeleines, to vary the sweet side.' },
  { q: 'How do you avoid a queue at 50 people?', a: 'Split the buffet into two serving points, with a thermos of coffee and one of juice at each end of the table, and leave the mini pastries self-service rather than plated.' },
]

const FAQ_COMPO = [
  { q: 'What goes into a full office breakfast?', a: '2 mini pastries, 1 sweet bite (a madeleine or a slice of loaf cake), 1 glass of juice and 1 hot drink per person, with 1 fruit skewer above 15 people. Cups, napkins, sugar and stirrers are included.' },
  { q: 'Are cups and napkins included?', a: 'Yes, with a breakfast: napkins, cups, sugar and stirrers are included.' },
  { q: 'Which hot drink should you plan?', a: 'One one-litre thermos per 6 people, with 4 thermoses of coffee for 1 of tea.' },
  { q: 'What is the difference between the Classic package and the full breakfast?', a: 'The Classic package starts at €8 excl. VAT per person; the full breakfast costs €12 to €16 excl. VAT per person, plus €29 excl. VAT delivery.' },
  { q: 'Can you add savoury items?', a: 'Yes, savoury items are ordered alongside, on quote.' },
  { q: 'What should you plan for dietary requirements?', a: 'Fresh fruit skewers, which are vegan and gluten-free, and a gluten-free banana bread at €26.90 excl. VAT for 6 to 8 people. Tell us about the diets when you ask for a quote.' },
]

const FAQ_MINI = [
  { q: 'Why mini pastries rather than full-size ones?', a: 'They are eaten in two bites, standing, with no plate and no knife, and everyone can try several kinds. Quantities are also easier to tune: 2 per person, 3 up to 10 people.' },
  { q: 'How many mini pastries per person?', a: '2 per person, and 3 for a group of 10 people or fewer.' },
  { q: 'How much does one mini pastry cost?', a: 'A tray of 30 pure butter mini pastries costs €48.90 excl. VAT, which is €1.63 excl. VAT a piece. Two per person comes to €3.26 excl. VAT.' },
  { q: 'What is in a tray of mini pastries?', a: 'Mini croissants, mini pains au chocolat and mini pains aux raisins, mixed in a tray of 30 pieces.' },
  { q: 'Do mini pastries suit a management breakfast?', a: 'Yes, but for a client welcome or a board meeting we complete them with pastries, yoghurts and fruit, on quote.' },
  { q: 'And for an afternoon break?', a: 'An afternoon break is made up of sweet bites instead: madeleines, cookies, loaf cakes and fruit skewers, from €6 excl. VAT per person.' },
]

const FAQ_DEJ = [
  { q: 'What is a lunchtime cocktail reception?', a: 'A lunchtime cocktail reception replaces lunch: savoury and sweet canapés served standing, 12 to 14 pieces per person.' },
  { q: 'How many canapés per person for a lunchtime cocktail reception?', a: '12 to 14 pieces per person. The La Réception package has 12 pieces (9 savoury and 3 sweet) at €40.90 excl. VAT per person.' },
  { q: 'What is the difference with a dinner cocktail reception?', a: 'The dinner version replaces dinner with 16 to 18 pieces per person, against 12 to 14 for the lunchtime one. La Célébration, 16 pieces, is €51.90 excl. VAT per person.' },
  { q: 'How much does a lunchtime cocktail reception for 50 people cost?', a: `${eurEn(dej50.sans, true)} excl. VAT with La Réception, including juice, water and delivery, that is ${eurEn(dej50.sans / 50, true)} excl. VAT per person. With a 0% Chardonnay for the toast: ${eurEn(dej50.avec, true)} excl. VAT.` },
  { q: 'Is the lunchtime cocktail reception halal and alcohol-free?', a: 'Yes: the whole savoury menu is halal and pork-free, and the menu is alcohol-free. We do not claim any halal certification.' },
  { q: 'How late can you order?', a: 'Until 2 pm the day before, or 48 hours ahead from 50 people, with delivery from 6:30 am.' },
]

const FAQ_DIN20 = [
  { q: 'How many canapés for a dinner cocktail reception for 20 people?', a: '16 to 18 pieces per person, which is 320 to 360 pieces in all. The La Célébration package has 16 pieces per person, 320 pieces for 20 guests.' },
  { q: 'How much does a dinner cocktail reception for 20 people cost?', a: `${eurEn(din20.sans, true)} excl. VAT with La Célébration, including juice, water and delivery, that is ${eurEn(din20.sans / 20, true)} excl. VAT per person. With a 0% Chardonnay: ${eurEn(din20.avec, true)} excl. VAT.` },
  { q: 'Can you do a cheaper dinner reception for 20 people?', a: `Yes, with La Réception at 12 pieces: ${eurEn(din20Reception.sans, true)} excl. VAT including juice, water and delivery, that is ${eurEn(din20Reception.sans / 20, true)} excl. VAT per person. For a shorter format, L'Invitation at 8 pieces costs €29.90 excl. VAT per person.` },
  { q: 'Which drinks should you plan for 20 people?', a: `${din20.b.jus} litres of juice, ${din20.b.eau} bottles of 75 cl water and, as an option, ${din20.b.chard} bottles of 0% Chardonnay (6 flutes per bottle).` },
  { q: 'Is the cocktail reception halal and alcohol-free?', a: 'Yes: the savoury canapés are halal and pork-free, and the menu is alcohol-free. Vegetarian, vegan and gluten-free options are set on the quote.' },
  { q: 'Can the canapés be changed?', a: 'No, the composition of the packages is fixed. Tell us about dietary needs when you ask for a quote.' },
]

const FAQ_DIN30 = [
  { q: 'How many canapés for a dinner cocktail reception for 30 people?', a: '16 to 18 pieces per person, which is 480 to 540 pieces. La Célébration has 16 pieces per person, 480 pieces for 30 guests.' },
  { q: 'How much does a dinner cocktail reception for 30 people cost?', a: `${eurEn(din30.sans, true)} excl. VAT with La Célébration, including juice, water and delivery, that is ${eurEn(din30.sans / 30, true)} excl. VAT per person. With a 0% Chardonnay: ${eurEn(din30.avec, true)} excl. VAT.` },
  { q: 'What budget for a shorter dinner reception for 30 people?', a: `With La Réception at 12 pieces: ${eurEn(din30Reception.sans, true)} excl. VAT including juice, water and delivery, that is ${eurEn(din30Reception.sans / 30, true)} excl. VAT per person.` },
  { q: 'How many drinks for 30 people?', a: `${din30.b.jus} litres of juice, ${din30.b.eau} bottles of 75 cl water and, as an option, ${din30.b.chard} bottles of 0% Chardonnay.` },
  { q: 'How late can you order?', a: 'Until 2 pm the day before, with delivery from 6:30 am. From 50 people, 48 hours are needed.' },
  { q: 'Do you need serving staff?', a: 'The canapés are delivered arranged and ready to serve. A maître d\'hôtel can be added, on quote, to restock and clear.' },
]

const FAQ_DIFF = [
  { q: 'What is the difference between a cocktail reception and a dinner reception?', a: 'None in practice: "apéritif dînatoire" is the everyday French term for a dinner cocktail reception, a standing meal made of individual canapés. What changes is the number of pieces: 6 to 8 for drinks, 16 to 18 for a dinner.' },
  { q: 'How many canapés for drinks, a lunch and a dinner reception?', a: '6 to 8 pieces per person for drinks, 12 to 14 for a lunch reception, 16 to 18 for a dinner reception.' },
  { q: 'Should you choose a sharing buffet or a cocktail reception?', a: 'A cocktail reception is eaten standing, piece by piece, and lets guests move around; a sharing buffet suits a seated team or a working lunch.' },
  { q: 'How much does a cocktail reception cost per person?', a: 'From €29.90 excl. VAT for 8 pieces to €51.90 excl. VAT for 16 pieces, plus €29 excl. VAT delivery.' },
  { q: 'How much does a sharing buffet cost per person?', a: 'From €34.90 to €37.90 excl. VAT per person, for a menu sized for 8 to 12 guests, plus delivery.' },
  { q: 'Cocktail reception, buffet or lunch trays for a meeting?', a: 'For a seated working meeting, lunch trays from €28.90 excl. VAT; for a standing, sociable moment, the cocktail reception.' },
]

export const EN_JOURNAL = {
  'petit-dejeuner-pour-20-personnes-quantites-budget': {
    titre: 'Breakfast for 20 people: exact quantities and budget',
    metaTitle: 'Breakfast for 20 people: quantities and budget',
    extrait: `For 20 people: 40 mini pastries, 20 madeleines, 20 fruit skewers, 4 L of juice, 4 thermoses. ${eurEn(p20.total, true)} excl. VAT including delivery.`,
    enBref: [
      '40 mini pastries (2 trays of 30), 20 madeleines, 20 fresh fruit skewers, 20 glasses of juice (4 L) and 4 thermoses (3 coffee, 1 tea).',
      `Budget: ${eurEn(p20.total, true)} excl. VAT including delivery, that is ${eurEn(p20.produits / 20, true)} excl. VAT per person excluding delivery.`,
      `Classic package: ${eurEn(20 * 8 + LIV)} excl. VAT (20 × €8 + €29 delivery).`,
      'Order until 2 pm the day before, delivery from 6:30 am.',
    ],
    contenu: `
      <p>A breakfast for 20 people takes <strong>40 mini pastries, 20 madeleines, 20 fresh fruit skewers, 4 litres of juice and 4 thermoses</strong>. It costs <strong>${eurEn(p20.total, true)} excl. VAT including delivery</strong>, that is ${eurEn(p20.produits / 20, true)} excl. VAT per person excluding delivery. Here is the detail, the budget and the organisation.</p>

      <h2>What quantities for a breakfast for 20 people?</h2>
      <p>Allow 2 mini pastries, 1 sweet bite, 1 fruit skewer and 1 glass of juice per person, with one 1-litre thermos per 6 people.</p>
      <table>
        <thead><tr><th>Item</th><th>Rule</th><th>For 20 people</th></tr></thead>
        <tbody>
          <tr><td>Mini pastries</td><td>2 per person</td><td>40 pieces, which is 2 trays of 30</td></tr>
          <tr><td>Madeleines</td><td>1 per person</td><td>20 pieces, which is 1 box of 20</td></tr>
          <tr><td>Fresh fruit skewers</td><td>1 per person, above 15 people</td><td>20 skewers</td></tr>
          <tr><td>Juice</td><td>one 20 cl glass per person</td><td>${p20.litres} litres (2 orange, 2 apple)</td></tr>
          <tr><td>Coffee and tea</td><td>1 thermos per 6 people, 4 coffee for 1 tea</td><td>${p20.thermos} thermoses (${p20.cafe} coffee, ${p20.the} tea)</td></tr>
        </tbody>
      </table>
      <p>To understand the mini pastry rule, see the guide <a href="/journal/combien-viennoiseries-par-personne">how many mini pastries per person</a>.</p>

      <h2>How much does a breakfast for 20 people cost?</h2>
      <p>The full breakfast comes to <strong>${eurEn(p20.total, true)} excl. VAT including delivery</strong>. The Classic package, at €8 excl. VAT per person, comes to <strong>${eurEn(20 * 8 + LIV)} excl. VAT</strong> including delivery.</p>${tableLignesEn(p20)}
      <p>To compare the formats and their prices by headcount, see <a href="/journal/budget-petit-dejeuner-equipe-personnes">how much an office breakfast costs</a>.</p>

      <h2>How do you organise this breakfast, from the order to 8 am?</h2>
      <ol>
        <li><strong>The day before, before 2 pm:</strong> confirm the headcount, the address and the delivery time, with the contact on site.</li>
        <li><strong>From 6:30 am on the day:</strong> delivery is possible at the time you choose, before the team arrives.</li>
        <li><strong>On the table:</strong> mini pastries and madeleines self-service, juice and thermoses within reach, napkins and cups included.</li>
      </ol>

      <h2>What should you change for a hungrier or lighter team?</h2>
      <p>Add a 10% margin if guests may be added at the last minute: the 2 trays already deliver 60 mini pastries for the 40 needed. For a 30-minute team catch-up, 2 mini pastries and a coffee are enough; for a morning offsite, keep the sweet items and the fruit.</p>

      <h2>And for dietary requirements?</h2>
      <p>Pure butter mini pastries suit vegetarians. Fresh fruit skewers are vegan and gluten-free, and the gluten-free banana bread is €26.90 excl. VAT for 6 to 8 people. Tell us how many guests are concerned when you ask for a quote.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours, or build the breakfast in <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a>. Order until 2 pm the day before, delivery from 6:30 am in Paris and the Paris region, company invoice with VAT. For 30 or 50 people, see <a href="/journal/petit-dejeuner-pour-30-personnes-quantites-budget">30 people</a> and <a href="/journal/petit-dejeuner-pour-50-personnes-quantites-budget">50 people</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about breakfast for 20 people</h2>
${faqHtmlEn(FAQ_PDJ20)}
    `,
    faq: FAQ_PDJ20,
  },

  'petit-dejeuner-pour-30-personnes-quantites-budget': {
    titre: 'Breakfast for 30 people: exact quantities and budget',
    metaTitle: 'Breakfast for 30 people: quantities and budget',
    extrait: `For 30 people: 60 mini pastries, 30 madeleines and 1 loaf cake, 30 skewers, 6 L of juice, 5 thermoses. ${eurEn(p30.total, true)} excl. VAT including delivery.`,
    enBref: [
      '60 mini pastries (2 trays of 30), 30 madeleines, 1 loaf cake, 30 fresh fruit skewers, 30 glasses of juice (6 L) and 5 thermoses.',
      `Budget: ${eurEn(p30.total, true)} excl. VAT including delivery, that is ${eurEn(p30.produits / 30, true)} excl. VAT per person excluding delivery.`,
      `Classic package: ${eurEn(30 * 8 + LIV)} excl. VAT (30 × €8 + €29 delivery).`,
      'The first loaf cake appears at 21 people; there are 2 above 40.',
    ],
    contenu: `
      <p>A breakfast for 30 people takes <strong>60 mini pastries, 30 madeleines and 1 loaf cake, 30 fresh fruit skewers, 6 litres of juice and 5 thermoses</strong>. It costs <strong>${eurEn(p30.total, true)} excl. VAT including delivery</strong>, that is ${eurEn(p30.produits / 30, true)} excl. VAT per person excluding delivery.</p>

      <h2>What quantities for a breakfast for 30 people?</h2>
      <p>The rule stays at 2 mini pastries per person: 30 people therefore fit into 2 trays of 30 pieces, with no margin. From 21 people, a homemade loaf cake is added to vary the sweet side.</p>
      <table>
        <thead><tr><th>Item</th><th>Rule</th><th>For 30 people</th></tr></thead>
        <tbody>
          <tr><td>Mini pastries</td><td>2 per person</td><td>60 pieces, which is 2 trays of 30</td></tr>
          <tr><td>Madeleines</td><td>1 per person, minus 5 per loaf cake</td><td>30 pieces (1 box of 20 and 1 of 10)</td></tr>
          <tr><td>Homemade loaf cake</td><td>1 above 20 people, 2 above 40</td><td>1 loaf cake of 5 to 6 slices</td></tr>
          <tr><td>Fresh fruit skewers</td><td>1 per person</td><td>30 skewers</td></tr>
          <tr><td>Juice</td><td>one 20 cl glass per person</td><td>${p30.litres} litres (3 orange, 3 apple)</td></tr>
          <tr><td>Coffee and tea</td><td>1 thermos per 6 people, 4 coffee for 1 tea</td><td>${p30.thermos} thermoses (${p30.cafe} coffee, ${p30.the} tea)</td></tr>
        </tbody>
      </table>

      <h2>How much does a breakfast for 30 people cost?</h2>
      <p>The full breakfast comes to <strong>${eurEn(p30.total, true)} excl. VAT including delivery</strong>. The Classic package, at €8 excl. VAT per person, comes to <strong>${eurEn(30 * 8 + LIV)} excl. VAT</strong>.</p>${tableLignesEn(p30)}
      <p>Compared with 20 people (${eurEn(p20.total, true)} excl. VAT), the budget rises by ${eurEn(p30.total - p20.total, true)} for 10 more people: the €29 excl. VAT delivery is shared across more guests. See also <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">20 people</a>.</p>

      <h2>How do you organise a breakfast for 30 people?</h2>
      <p>Choose a serving spot the whole team can reach, with the hot drinks at one end of the table and the juice at the other to spread people out. Order until 2 pm the day before, with delivery from 6:30 am: 30 people stays below the 48-hour threshold, which applies from 50.</p>

      <h2>Should you plan a margin for 30 people?</h2>
      <p>Yes if the headcount may move: 60 mini pastries is exactly 2 per person. Add a third tray of 30 pieces (€48.90 excl. VAT) to absorb the unexpected, which brings the total to ${eurEn(p30.total + 48.9, true)} excl. VAT.</p>

      <h2>Which dietary requirements should you plan for?</h2>
      <p>Fruit skewers are vegan and gluten-free, and pure butter mini pastries suit vegetarians. The gluten-free banana bread is €26.90 excl. VAT for 6 to 8 people. The number of guests concerned is set when you ask for a quote.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours, or build the breakfast in <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a>. Delivery in Paris and the Paris region, company invoice with VAT. For a larger group, see the <a href="/journal/petit-dejeuner-pour-50-personnes-quantites-budget">breakfast for 50 people</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about breakfast for 30 people</h2>
${faqHtmlEn(FAQ_PDJ30)}
    `,
    faq: FAQ_PDJ30,
  },

  'petit-dejeuner-pour-50-personnes-quantites-budget': {
    titre: 'Breakfast for 50 people: exact quantities, budget and lead time',
    metaTitle: 'Breakfast for 50 people: quantities and budget',
    extrait: `For 50 people: 100 mini pastries, 40 madeleines and 2 loaf cakes, 50 skewers, 10 L of juice, 9 thermoses. ${eurEn(p50.total, true)} excl. VAT including delivery.`,
    enBref: [
      '100 mini pastries (4 trays of 30), 40 madeleines, 2 loaf cakes, 50 fresh fruit skewers, 50 glasses of juice (10 L) and 9 thermoses.',
      `Budget: ${eurEn(p50.total, true)} excl. VAT including delivery, that is ${eurEn(p50.produits / 50, true)} excl. VAT per person excluding delivery.`,
      `Classic package: ${eurEn(50 * 8 + LIV)} excl. VAT (50 × €8 + €29 delivery).`,
      'From 50 people, order 48 hours ahead.',
    ],
    contenu: `
      <p>A breakfast for 50 people takes <strong>100 mini pastries, 40 madeleines and 2 loaf cakes, 50 fresh fruit skewers, 10 litres of juice and 9 thermoses</strong>. It costs <strong>${eurEn(p50.total, true)} excl. VAT including delivery</strong>, that is ${eurEn(p50.produits / 50, true)} excl. VAT per person excluding delivery. At this size, the order is placed <strong>48 hours ahead</strong>.</p>

      <h2>What quantities for a breakfast for 50 people?</h2>
      <p>The rule stays at 2 mini pastries per person: 100 pieces are needed, which is 4 trays of 30 (120 pieces delivered). Above 40 people, 2 homemade loaf cakes replace 10 madeleines.</p>
      <table>
        <thead><tr><th>Item</th><th>Rule</th><th>For 50 people</th></tr></thead>
        <tbody>
          <tr><td>Mini pastries</td><td>2 per person</td><td>100 pieces, which is 4 trays of 30</td></tr>
          <tr><td>Madeleines</td><td>1 per person, minus 5 per loaf cake</td><td>40 pieces (2 boxes of 20)</td></tr>
          <tr><td>Homemade loaf cakes</td><td>2 above 40 people</td><td>2 loaf cakes of 5 to 6 slices</td></tr>
          <tr><td>Fresh fruit skewers</td><td>1 per person</td><td>50 skewers</td></tr>
          <tr><td>Juice</td><td>one 20 cl glass per person</td><td>${p50.litres} litres (5 orange, 5 apple)</td></tr>
          <tr><td>Coffee and tea</td><td>1 thermos per 6 people, 4 coffee for 1 tea</td><td>${p50.thermos} thermoses (${p50.cafe} coffee, ${p50.the} tea)</td></tr>
        </tbody>
      </table>

      <h2>How much does a breakfast for 50 people cost?</h2>
      <p>The full breakfast comes to <strong>${eurEn(p50.total, true)} excl. VAT including delivery</strong>. The Classic package, at €8 excl. VAT per person, comes to <strong>${eurEn(50 * 8 + LIV)} excl. VAT</strong>.</p>${tableLignesEn(p50)}
      <p>The price per person falls as the headcount rises: ${eurEn(p20.total / 20, true)} excl. VAT at 20 people, ${eurEn(p50.total / 50, true)} excl. VAT at 50, delivery included, because the €29 excl. VAT delivery is spread across more guests.</p>

      <h2>Why order 48 hours ahead?</h2>
      <p>From 50 people, the quantities of fresh products to prepare and deliver justify 48 hours' notice, against 2 pm the day before for smaller groups. Confirm the headcount, the address and the delivery time at that point.</p>

      <h2>How do you avoid a queue at 50 people?</h2>
      <p>Split the buffet into two serving points: a thermos of coffee and one of juice at each end of the table, with the mini pastries self-service. A single table for 50 people creates a queue; two points halve it.</p>

      <h2>Which dietary requirements should you plan for?</h2>
      <p>Fruit skewers are vegan and gluten-free, pure butter mini pastries suit vegetarians, and the gluten-free banana bread is €26.90 excl. VAT for 6 to 8 people. Tell us how many guests are concerned when you ask for a quote.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours, giving the headcount, the date and the address. Delivery from 6:30 am in Paris and the Paris region, company invoice with VAT. For 100 people, a worked example is in the guide <a href="/journal/budget-petit-dejeuner-equipe-personnes">how much an office breakfast costs</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about breakfast for 50 people</h2>
${faqHtmlEn(FAQ_PDJ50)}
    `,
    faq: FAQ_PDJ50,
  },

  'de-quoi-se-compose-petit-dejeuner-entreprise': {
    titre: 'What goes into an office breakfast? The five elements and their quantities',
    metaTitle: 'What goes into an office breakfast?',
    extrait: 'An office breakfast is made of pastries, something sweet, fruit, juice and a hot drink: quantities per person and prices.',
    enBref: [
      '5 elements: pastries, a sweet bite, fruit, juice and a hot drink.',
      'Per person: 2 mini pastries, 1 madeleine or slice of loaf cake, 1 fruit skewer (above 15 people), 1 glass of juice.',
      'Hot drinks: one 1 L thermos per 6 people, 4 coffee for 1 tea.',
      'Cups, napkins, sugar and stirrers are included; the Classic package starts at €8 excl. VAT, the full breakfast €12 to €16 excl. VAT per person.',
    ],
    contenu: `
      <p>A full office breakfast is made of <strong>five elements: pastries, something sweet, fruit, a juice and a hot drink</strong>. Per person, allow 2 mini pastries, 1 sweet bite, 1 fruit skewer above 15 people, 1 glass of juice and 1 hot drink. Cups, napkins, sugar and stirrers are included.</p>

      <h2>What are the five elements of an office breakfast?</h2>
      <table>
        <thead><tr><th>Element</th><th>Quantity per person</th><th>What it is for</th></tr></thead>
        <tbody>
          <tr><td><strong>Pastries</strong></td><td>2 mini pastries (3 up to 10 people)</td><td>The base: eaten standing, with no plate</td></tr>
          <tr><td><strong>Something sweet</strong></td><td>1 madeleine; above 20 people, 1 to 2 loaf cakes of 5 to 6 slices alongside</td><td>Varying the flavours</td></tr>
          <tr><td><strong>Fruit</strong></td><td>1 fresh fruit skewer, above 15 people</td><td>The fresh option, vegan and gluten-free</td></tr>
          <tr><td><strong>Juice</strong></td><td>one 20 cl glass, orange and apple (1 L for 5)</td><td>The cold drink</td></tr>
          <tr><td><strong>Hot drink</strong></td><td>one 1 L thermos per 6 people, 4 coffee for 1 tea</td><td>Where everyone gathers</td></tr>
        </tbody>
      </table>

      <h2>What is included with the breakfast?</h2>
      <p>With a breakfast, napkins, cups, sugar and stirrers are included. The €29 excl. VAT delivery is added, with a €50 excl. VAT minimum order.</p>

      <h2>What is the difference between the Classic package and the full breakfast?</h2>
      <table>
        <thead><tr><th>Format</th><th>Price per person excl. VAT</th><th>For which occasion</th></tr></thead>
        <tbody>
          <tr><td>Pastries and coffee</td><td>around €6.50</td><td>A 30-minute team catch-up</td></tr>
          <tr><td>Classic package</td><td>from €8</td><td>Internal meeting, onboarding</td></tr>
          <tr><td>Full breakfast</td><td>€12 to €16</td><td>Offsite, extended team meeting</td></tr>
          <tr><td>Made to measure</td><td>on quote</td><td>Board meeting, client welcome</td></tr>
        </tbody>
      </table>
      <p>For the budget detail by headcount, see <a href="/journal/budget-petit-dejeuner-equipe-personnes">how much an office breakfast costs</a>.</p>

      <h2>What does a breakfast for 20 people look like?</h2>
      <p>For 20 people: 40 mini pastries (2 trays of 30), 20 madeleines, 20 fruit skewers, 4 litres of juice and 4 thermoses, which is ${eurEn(p20.total, true)} excl. VAT including delivery. The detail is in the guide <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">breakfast for 20 people</a>.</p>

      <h2>Can you add savoury items or adapt to diets?</h2>
      <p>Yes: savoury items are ordered alongside, on quote (see the guide <a href="/journal/petit-dejeuner-sale-entreprise-pains-brioches-paris">savoury breakfast</a>). For diets, fruit skewers are vegan and gluten-free, and the gluten-free banana bread is €26.90 excl. VAT for 6 to 8 people.</p>

      <h2>Why mini pastries?</h2>
      <p>They are eaten in two bites, with no plate, and everyone can try several kinds: see <a href="/journal/pourquoi-mini-viennoiseries-petit-dejeuner-entreprise">why mini pastries at an office breakfast</a>.</p>

      <h2>How do you order?</h2>
      <p>Build the breakfast in <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a> or ask for a <a href="/devis">quote</a> within 24 hours. Order until 2 pm the day before, delivery from 6:30 am in Paris and the Paris region.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about what goes into a breakfast</h2>
${faqHtmlEn(FAQ_COMPO)}
    `,
    faq: FAQ_COMPO,
  },

  'pourquoi-mini-viennoiseries-petit-dejeuner-entreprise': {
    titre: 'Why mini pastries for an office breakfast? Five reasons',
    metaTitle: 'Why mini pastries at breakfast?',
    extrait: 'Why we prefer mini pastries at an office breakfast: five reasons, 2 per person, €1.63 excl. VAT a piece.',
    enBref: [
      'We prefer mini pastries because they are eaten in two bites, standing, with no plate and no knife.',
      'Quantity: 2 per person, 3 up to 10 people; a tray of 30 serves 10 to 15 people.',
      'Price: €48.90 excl. VAT for the tray of 30, which is €1.63 excl. VAT a piece and €3.26 excl. VAT for 2.',
      'For the afternoon, the break is made of sweet bites instead, from €6 excl. VAT per person.',
    ],
    contenu: `
      <p>We prefer mini pastries at an office breakfast because they are <strong>eaten in two bites, standing, with no plate and no knife</strong>, and because they let everyone try several kinds. At 2 per person, a tray of 30 costs €48.90 excl. VAT, which is €1.63 excl. VAT a piece.</p>

      <h2>Why do mini pastries suit an office breakfast?</h2>
      <ol>
        <li><strong>They are eaten standing.</strong> A team breakfast happens around a high table or a coffee corner: a piece eaten in two bites avoids the plate, the knife and the crumbs on the keyboard.</li>
        <li><strong>They let everyone try several kinds.</strong> A tray mixes mini croissants, mini pains au chocolat and mini pains aux raisins: everyone takes what they like, without starting a full-size pastry they will not finish.</li>
        <li><strong>They make the quantities easier to get right.</strong> With small pieces you count 2 per person, and 3 for a group of 10 people or fewer. You adjust by the piece, not by the whole pastry.</li>
        <li><strong>They fit the trays.</strong> A tray of 30 mini pastries serves 10 to 15 people: for 20 people, 2 trays deliver 60 pieces, 20 of them as margin.</li>
        <li><strong>They leave room for the rest.</strong> With a madeleine, some fruit and a juice, two small pieces are enough: the whole thing stays balanced without anyone feeling obliged to finish it all.</li>
      </ol>

      <h2>How many mini pastries per person?</h2>
      <p>Allow <strong>2 mini pastries per person</strong>, and <strong>3 up to 10 people</strong>. The table gives the number of trays of 30 pieces.</p>
      <table>
        <thead><tr><th>People</th><th>Mini pastries</th><th>Trays of 30</th><th>Price excl. VAT</th></tr></thead>
        <tbody>
${[10, 20, 30, 50, 100].map(n => { const v = n * (n <= 10 ? 3 : 2); const t = Math.ceil(v / 30); return `          <tr><td>${n}</td><td>${v}</td><td>${t}</td><td>${eurEn(t * 48.9, true)}</td></tr>` }).join('\n')}
        </tbody>
      </table>
      <p>The detail by context (meeting, offsite, welcome) is in the guide <a href="/journal/combien-viennoiseries-par-personne">how many mini pastries per person</a>.</p>

      <h2>How much does one mini pastry cost?</h2>
      <p>A tray of 30 pure butter mini pastries costs <strong>€48.90 excl. VAT</strong>, which is <strong>€1.63 excl. VAT a piece</strong>. Two pieces per person comes to €3.26 excl. VAT, and three pieces €4.89 excl. VAT.</p>

      <h2>When should you prefer full-size pastries?</h2>
      <p>For a management breakfast, a client welcome or a brunch, we complete or replace the mini pastries with a wider selection (patisserie, yoghurts, savoury items), on quote. See the guide <a href="/journal/petit-dejeuner-prestige-entreprise-paris">prestige breakfast</a>.</p>

      <h2>And for an afternoon break?</h2>
      <p>An afternoon break is made of sweet bites instead (madeleines, cookies, loaf cakes, fruit skewers). See our <a href="/creations/pauses-gourmandes">afternoon breaks</a>, from €6 excl. VAT per person.</p>

      <h2>How do you order?</h2>
      <p>Build your breakfast in <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a> or ask for a <a href="/devis">quote</a> within 24 hours. Order until 2 pm the day before, delivery from 6:30 am in Paris and the Paris region. To see the full composition, read <a href="/journal/de-quoi-se-compose-petit-dejeuner-entreprise">what goes into an office breakfast</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about mini pastries</h2>
${faqHtmlEn(FAQ_MINI)}
    `,
    faq: FAQ_MINI,
  },

  'cocktail-dejeunatoire-entreprise-pieces-par-personne-budget': {
    titre: 'Lunchtime cocktail reception: how many canapés per person and what budget for a company?',
    metaTitle: 'Lunchtime cocktail reception: canapés per person and budget',
    extrait: 'Lunchtime cocktail reception: 12 to 14 canapés per person, €40.90 excl. VAT with La Réception. Budgets for 20, 50 and 100 people.',
    enBref: [
      'A lunchtime cocktail reception replaces lunch: 12 to 14 canapés per person, served standing.',
      'La Réception: 12 pieces (9 savoury, 3 sweet) at €40.90 excl. VAT per person, plus €29 excl. VAT delivery.',
      `Budget with juice, water and delivery: ${eurEn(dej20.sans, true)} excl. VAT for 20 people, ${eurEn(dej50.sans, true)} excl. VAT for 50, ${eurEn(dej100.sans, true)} excl. VAT for 100.`,
      'Savoury items halal and pork-free, menu alcohol-free; order until 2 pm the day before.',
    ],
    contenu: `
      <p>A lunchtime cocktail reception replaces lunch: allow <strong>12 to 14 canapés per person</strong>, served standing. The La Réception package has 12 pieces (9 savoury, 3 sweet) at <strong>€40.90 excl. VAT per person</strong>, which is ${eurEn(dej50.sans, true)} excl. VAT for 50 people with juice, water and delivery.</p>

      <h2>What is a lunchtime cocktail reception?</h2>
      <p>A lunchtime cocktail reception is a standing meal made of individual canapés, savoury then sweet, served at lunchtime. It replaces a seated lunch: guests move around, talk and help themselves at their own pace, with no lunch tray and no table service.</p>

      <h2>How many canapés per person for a lunchtime cocktail reception?</h2>
      <p>Allow <strong>12 to 14 pieces per person</strong> for a lunch reception, against 6 to 8 for plain drinks and 16 to 18 for a dinner reception.</p>
      <table>
        <thead><tr><th>Format</th><th>Pieces per person</th><th>L'Écrin package</th><th>Price per person excl. VAT</th></tr></thead>
        <tbody>
          <tr><td>Drinks</td><td>6 to 8</td><td>L'Invitation, 8 pieces</td><td>€29.90</td></tr>
          <tr><td><strong>Lunch reception</strong></td><td><strong>12 to 14</strong></td><td><strong>La Réception, 12 pieces</strong></td><td><strong>€40.90</strong></td></tr>
          <tr><td>Dinner reception</td><td>16 to 18</td><td>La Célébration, 16 pieces</td><td>€51.90</td></tr>
        </tbody>
      </table>
      <p>For the detail of the formats, see the guide <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">how many canapés per person</a>.</p>

      <h2>How much does a lunchtime cocktail reception for 20, 50 or 100 people cost?</h2>
      <p>The table counts La Réception at €40.90 excl. VAT per person, plus the alcohol-free drinks (1 litre of juice for 4 people, one 75 cl bottle of water for 5) and the €29 excl. VAT delivery.</p>
      <table>
        <thead><tr><th>People</th><th>La Réception</th><th>Juice and water</th><th>Delivery</th><th>Total excl. VAT</th><th>Per person</th></tr></thead>
        <tbody>
${[dej20, dej50, dej100].map(c => `          <tr><td>${c.n}</td><td>${eurEn(c.pieces, true)}</td><td>${eurEn(c.b.coutJus + c.b.coutEau, true)}</td><td>${eurEn(LIV, true)}</td><td><strong>${eurEn(c.sans, true)}</strong></td><td>${eurEn(c.sans / c.n, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>A 0% Chardonnay for the toast (1 flute per person, 6 flutes per 75 cl bottle at €16.90 excl. VAT) adds ${eurEn(dej20.b.coutChard, true)} for 20 people, ${eurEn(dej50.b.coutChard, true)} for 50 and ${eurEn(dej100.b.coutChard, true)} for 100.</p>

      <h2>What is the difference between a lunch and a dinner cocktail reception?</h2>
      <p>The number of pieces. The lunch reception, at 12 to 14 pieces, replaces lunch; the dinner reception, at 16 to 18, replaces dinner. For an evening, see <a href="/journal/cocktail-dinatoire-pour-20-personnes-quantites-budget">dinner cocktail reception for 20 people</a> and <a href="/journal/cocktail-aperitif-dinatoire-buffet-difference-que-choisir">cocktail reception, dinner reception or buffet</a>.</p>

      <h2>Is the cocktail reception halal and alcohol-free?</h2>
      <p>The savoury canapés are halal and pork-free, and the menu is alcohol-free, at no extra cost. We do not claim any halal certification issued by a certifying body. Vegetarian, vegan and gluten-free options are set when you ask for a quote, as the composition of the packages is fixed.</p>

      <h2>How do you order a lunchtime cocktail reception?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours, or see the <a href="/creations/cocktails">cocktail packages</a>. The canapés are delivered arranged and ready to serve. Order until 2 pm the day before, or 48 hours ahead from 50 people, with delivery from 6:30 am.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about the lunchtime cocktail reception</h2>
${faqHtmlEn(FAQ_DEJ)}
    `,
    faq: FAQ_DEJ,
  },

  'cocktail-dinatoire-pour-20-personnes-quantites-budget': {
    titre: 'Dinner cocktail reception for 20 people: how many canapés and what budget?',
    metaTitle: 'Dinner cocktail reception for 20 people: canapés and budget',
    extrait: `For 20 people: 16 to 18 canapés each, so 320 to 360. La Célébration comes to ${eurEn(din20.sans, true)} excl. VAT with drinks and delivery.`,
    enBref: [
      'For 20 people: 16 to 18 canapés per person, so 320 to 360 pieces; La Célébration has 16 pieces (12 savoury, 4 sweet).',
      `Budget: ${eurEn(din20.sans, true)} excl. VAT with juice, water and delivery, that is ${eurEn(din20.sans / 20, true)} excl. VAT per person; ${eurEn(din20.avec, true)} excl. VAT with a 0% Chardonnay.`,
      `A shorter version with La Réception (12 pieces): ${eurEn(din20Reception.sans, true)} excl. VAT.`,
      'Drinks: 5 L of juice, 4 bottles of 75 cl water; savoury items halal and pork-free, menu alcohol-free.',
    ],
    contenu: `
      <p>A dinner cocktail reception for 20 people takes <strong>16 to 18 canapés per person, so 320 to 360 pieces</strong>. The La Célébration package, 16 pieces at €51.90 excl. VAT per person, comes to <strong>${eurEn(din20.sans, true)} excl. VAT</strong> with juice, water and delivery, that is ${eurEn(din20.sans / 20, true)} excl. VAT per person.</p>

      <h2>How many canapés for a dinner cocktail reception for 20 people?</h2>
      <p>Allow 16 to 18 pieces per person, because a dinner reception replaces dinner: 320 pieces at the very least for 20 guests. La Célébration has 16 pieces per person, 12 savoury and 4 sweet, arranged and delivered ready to serve.</p>

      <h2>How much does a dinner cocktail reception for 20 people cost?</h2>${tableCocktailEn(din20)}
      <p>The drinks follow the rule of 1 litre of juice for 4 people and one 75 cl bottle of water for 5. The detail of the packages is on the <a href="/creations/cocktails">cocktail receptions</a> page.</p>

      <h2>How do you make a dinner reception for 20 people cheaper?</h2>
      <p>Choose La Réception, 12 pieces at €40.90 excl. VAT per person: <strong>${eurEn(din20Reception.sans, true)} excl. VAT</strong> with juice, water and delivery, that is ${eurEn(din20Reception.sans / 20, true)} excl. VAT per person, ${eurEn(din20.sans - din20Reception.sans, true)} less than with La Célébration. This package suits a moment that runs shorter or that follows a lunch. For tight budgets, see <a href="/journal/cocktail-dinatoire-pas-cher-entreprise-budget">affordable dinner reception</a>.</p>

      <h2>Which drinks should you plan for 20 people?</h2>
      <p>Allow ${din20.b.jus} litres of juice (orange and apple), ${din20.b.eau} bottles of 75 cl water and, as an option, ${din20.b.chard} bottles of 0% Chardonnay for the toast. The whole menu is alcohol-free. See the guide <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">how many drinks per person</a>.</p>

      <h2>Is the cocktail reception halal?</h2>
      <p>The savoury canapés are halal and pork-free, and the menu is alcohol-free, at no extra cost. We do not claim any halal certification issued by a certifying body. The composition of the packages is fixed: tell us about vegetarian, vegan or gluten-free needs when you ask for a quote.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours. Order until 2 pm the day before, delivery from 6:30 am in Paris and the Paris region, company invoice with VAT. For 30 people, see <a href="/journal/cocktail-dinatoire-pour-30-personnes-quantites-budget">dinner cocktail reception for 30 people</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about the dinner cocktail reception for 20 people</h2>
${faqHtmlEn(FAQ_DIN20)}
    `,
    faq: FAQ_DIN20,
  },

  'cocktail-dinatoire-pour-30-personnes-quantites-budget': {
    titre: 'Dinner cocktail reception for 30 people: how many canapés and what budget?',
    metaTitle: 'Dinner cocktail reception for 30 people: canapés and budget',
    extrait: `For 30 people: 16 to 18 canapés each, so 480 to 540. La Célébration comes to ${eurEn(din30.sans, true)} excl. VAT with drinks and delivery.`,
    enBref: [
      'For 30 people: 16 to 18 canapés per person, so 480 to 540 pieces; La Célébration has 16 pieces (12 savoury, 4 sweet).',
      `Budget: ${eurEn(din30.sans, true)} excl. VAT with juice, water and delivery, that is ${eurEn(din30.sans / 30, true)} excl. VAT per person; ${eurEn(din30.avec, true)} excl. VAT with a 0% Chardonnay.`,
      `A shorter version with La Réception (12 pieces): ${eurEn(din30Reception.sans, true)} excl. VAT.`,
      'Drinks: 8 L of juice, 6 bottles of 75 cl water; savoury items halal and pork-free, menu alcohol-free.',
    ],
    contenu: `
      <p>A dinner cocktail reception for 30 people takes <strong>16 to 18 canapés per person, so 480 to 540 pieces</strong>. The La Célébration package comes to <strong>${eurEn(din30.sans, true)} excl. VAT</strong> with juice, water and delivery, that is ${eurEn(din30.sans / 30, true)} excl. VAT per person.</p>

      <h2>How many canapés for a dinner cocktail reception for 30 people?</h2>
      <p>Allow 16 to 18 pieces per person: 480 pieces at the very least for 30 guests. La Célébration has 16 pieces per person, 12 savoury and 4 sweet, which is 360 savoury pieces and 120 sweet ones.</p>

      <h2>How much does a dinner cocktail reception for 30 people cost?</h2>${tableCocktailEn(din30)}
      <p>Compared with 20 people (${eurEn(din20.sans, true)} excl. VAT), the budget rises by ${eurEn(din30.sans - din20.sans, true)}: the price per person falls slightly, from ${eurEn(din20.sans / 20, true)} to ${eurEn(din30.sans / 30, true)} excl. VAT, because the €29 excl. VAT delivery is spread across more guests.</p>

      <h2>What budget for a shorter dinner reception for 30 people?</h2>
      <p>With La Réception (12 pieces at €40.90 excl. VAT per person): <strong>${eurEn(din30Reception.sans, true)} excl. VAT</strong> with juice, water and delivery, that is ${eurEn(din30Reception.sans / 30, true)} excl. VAT per person. To compare the formats, see <a href="/journal/cocktail-dejeunatoire-entreprise-pieces-par-personne-budget">lunchtime cocktail reception</a>.</p>

      <h2>Which drinks should you plan for 30 people?</h2>
      <p>Allow ${din30.b.jus} litres of juice (orange and apple), ${din30.b.eau} bottles of 75 cl water and, as an option, ${din30.b.chard} bottles of 0% Chardonnay for the toast. The menu is alcohol-free.</p>

      <h2>Do you need serving staff?</h2>
      <p>The canapés are delivered arranged and ready to serve. A maître d'hôtel can be added, on quote, to restock and clear. See the guide <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel for a company event</a>.</p>

      <h2>Is the cocktail reception halal?</h2>
      <p>The savoury canapés are halal and pork-free, and the menu is alcohol-free. We do not claim any halal certification issued by a certifying body. Vegetarian, vegan and gluten-free options are set when you ask for a quote.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours, or see the <a href="/creations/cocktails">cocktail packages</a>. Order until 2 pm the day before, delivery from 6:30 am. For 50 people, see <a href="/journal/cocktail-entreprise-50-personnes">company cocktail reception for 50 people</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about the dinner cocktail reception for 30 people</h2>
${faqHtmlEn(FAQ_DIN30)}
    `,
    faq: FAQ_DIN30,
  },

  'cocktail-aperitif-dinatoire-buffet-difference-que-choisir': {
    titre: 'Cocktail reception, dinner reception or buffet: what is the difference and what should a company choose?',
    metaTitle: 'Cocktail reception, dinner reception or buffet: what to choose?',
    extrait: 'Cocktail reception or dinner reception: the same format, not the same number of canapés. Sharing buffet, lunch trays: the table to choose from, with prices.',
    enBref: [
      'A dinner cocktail reception and an "apéritif dînatoire" are the same format: a standing meal made of individual canapés.',
      'Pieces per person: 6 to 8 (drinks), 12 to 14 (lunch), 16 to 18 (dinner).',
      'Price excl. VAT per person: cocktail reception €29.90 to €51.90, sharing buffet €34.90 to €37.90, lunch trays from €28.90.',
      'A cocktail reception for standing and sociable, a sharing buffet for a seated team, lunch trays for a working meeting.',
    ],
    contenu: `
      <p>A <strong>dinner cocktail reception</strong> and an <strong>apéritif dînatoire</strong> are the same format: a standing meal made of individual canapés. What changes is the number of pieces: 6 to 8 per person for drinks, 12 to 14 for a lunch reception, 16 to 18 for a dinner reception. A sharing buffet, on the other hand, is served in dishes at the table.</p>

      <h2>What is the difference between a cocktail reception and an apéritif dînatoire?</h2>
      <p>In everyday French, "apéritif dînatoire" is the term people search for most often to mean a dinner cocktail reception. Both replace a standing dinner, with individual savoury then sweet canapés. For companies we talk about a cocktail reception: the term pins down the format and the number of pieces.</p>

      <h2>How many canapés for drinks, a lunch reception and a dinner reception?</h2>
      <table>
        <thead><tr><th>Format</th><th>Moment</th><th>Pieces per person</th><th>L'Écrin package</th><th>Price per person excl. VAT</th></tr></thead>
        <tbody>
          <tr><td>Drinks</td><td>Before or after a meeting</td><td>6 to 8</td><td>L'Invitation, 8 pieces</td><td>€29.90</td></tr>
          <tr><td>Lunch reception</td><td>At lunchtime</td><td>12 to 14</td><td>La Réception, 12 pieces</td><td>€40.90</td></tr>
          <tr><td>Dinner reception</td><td>In the evening</td><td>16 to 18</td><td>La Célébration, 16 pieces</td><td>€51.90</td></tr>
        </tbody>
      </table>
      <p>The detailed budgets are in the guides <a href="/journal/cocktail-dejeunatoire-entreprise-pieces-par-personne-budget">lunchtime cocktail reception</a> and <a href="/journal/cocktail-dinatoire-pour-20-personnes-quantites-budget">dinner cocktail reception for 20 people</a>.</p>

      <h2>Cocktail reception, sharing buffet or lunch trays: which one?</h2>
      <table>
        <thead><tr><th>Format</th><th>How people eat</th><th>Price per person excl. VAT</th><th>Best for</th></tr></thead>
        <tbody>
          <tr><td><strong>Cocktail reception</strong></td><td>Standing, piece by piece, moving around</td><td>€29.90 to €51.90</td><td>Inauguration, after-work drinks, evening party, send-off</td></tr>
          <tr><td><strong>Sharing buffet</strong></td><td>Dishes and salads to share, seated or mixed</td><td>€34.90 to €37.90</td><td>A team that stays seated, a working lunch</td></tr>
          <tr><td><strong>Lunch trays</strong></td><td>One individual tray</td><td>from €28.90</td><td>Working meeting, training day</td></tr>
        </tbody>
      </table>
      <p>The sharing buffet is sized for 8 to 12 guests per menu. To decide between the two, read <a href="/journal/buffet-a-partager-ou-cocktail-entreprise-paris">sharing buffet or company cocktail reception</a>.</p>

      <h2>Which format is best for which occasion?</h2>
      <ul>
        <li><strong>An inauguration or a reception:</strong> a cocktail reception, 12 to 16 pieces depending on how long it runs. See <a href="/journal/organiser-inauguration-entreprise-deroule-budget-traiteur">organising an inauguration</a>.</li>
        <li><strong>After-work drinks:</strong> the 8-canapé reception, €29.90 excl. VAT per person. See <a href="/journal/idees-afterwork-entreprise-formats-budget">after-work drinks ideas</a>.</li>
        <li><strong>A team lunch:</strong> a lunch tray or a sharing buffet. See <a href="/journal/idees-dejeuner-bureau-formats-budget">office lunch ideas</a>.</li>
      </ul>

      <h2>Are the formats halal and alcohol-free?</h2>
      <p>The savoury canapés are halal and pork-free, and the menu is alcohol-free, at no extra cost. We do not claim any halal certification issued by a certifying body.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours. Order until 2 pm the day before, delivery from 6:30 am in Paris and the Paris region, with €29 excl. VAT delivery and a €50 excl. VAT minimum order.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about cocktail reception and buffet formats</h2>
${faqHtmlEn(FAQ_DIFF)}
    `,
    faq: FAQ_DIFF,
  },
}
