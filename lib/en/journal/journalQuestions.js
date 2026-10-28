/*
  Surcouche anglaise des articles « questions » de lib/journalQuestions.js
  (petit-déjeuner par effectif, composition, mini-viennoiseries, cocktails).

  Les montants sont RECALCULÉS par pdjEn / cocktailEn, qui enveloppent les
  fonctions françaises : aucun chiffre n'est recopié ici. Un prix qui change
  dans la donnée française change dans les deux langues.
*/
import { eurEn, faqHtmlEn, pdjEn, cocktailEn, tableCocktailEn, FORMULES_EN, SIGNATURE_EN, LIV } from './budget'
import { PDJ_DES } from '../../prixEntree'

const dej20 = cocktailEn(20, FORMULES_EN.reception)
const dej50 = cocktailEn(50, FORMULES_EN.reception)
const dej100 = cocktailEn(100, FORMULES_EN.reception)
const din20 = cocktailEn(20, FORMULES_EN.celebration)
const din30 = cocktailEn(30, FORMULES_EN.celebration)
const din20Reception = cocktailEn(20, FORMULES_EN.reception)
const din20Invitation = cocktailEn(20, FORMULES_EN.invitation)
const din30Reception = cocktailEn(30, FORMULES_EN.reception)

const p20 = pdjEn(20)
const p30 = pdjEn(30)
const p50 = pdjEn(50)
const cla = (n) => n * PDJ_DES + LIV // Classic breakfast delivered, € excl. VAT (the full breakfast is quoted on request, 24/10/2026)

const FAQ_PDJ20 = [
  { q: 'How many pastries for 20 people?', a: 'L\'Écrin Traiteur plans 40 mini pastries, at 2 per person, which is 2 trays of 30. The 20 extra pieces are the margin.' },
  { q: 'How much coffee and tea for 20 people?', a: `${p20.thermos} one-litre thermoses: ${p20.cafe} of coffee and ${p20.the} of tea, at one thermos per 6 people, with 4 coffee for 1 tea.` },
  { q: 'How much does a breakfast for 20 people cost?', a: `The Classic package comes to ${eurEn(cla(20))} excl. VAT including delivery (20 × €8 + €29 delivery). The full breakfast described here is quoted on request.` },
  { q: 'How late can you order for 20 people?', a: 'Until 10 am the day before, with delivery from 6:30 am. The 48-hour lead time only applies from 50 people upwards.' },
  { q: 'What should you plan for a vegan or gluten-free guest?', a: 'Fresh fruit skewers are vegan and gluten-free, and the gluten-free banana bread is €26.90 excl. VAT for 6 to 8 people. Tell us how many guests are concerned when you ask for a quote.' },
  { q: 'Should you order more than 20 portions?', a: 'Add a 10% margin if last-minute guests are possible. For 20 confirmed people the quantities above are enough: the 2 trays already deliver 20 mini pastries more than needed.' },
      { "q": "What does each guest get at a breakfast for 20 people?", "a": "2 mini pastries, 1 sweet treat (a madeleine), 1 fruit skewer, 1 glass of juice of 20 cl and coffee or tea, with 1 one-litre thermos for every 6 people." },
      { "q": "How much do the pastries and coffee for 20 people cost?", "a": "€175.80 excl. VAT, before delivery: 2 trays of 30 mini pastries at €97.80 excl. VAT and 4 thermoses at €19.50 excl. VAT each, or €8.79 excl. VAT per person." },
      { "q": "How much juice is needed for 20 people?", "a": "4 litres, which is 20 glasses of 20 cl, including 2 litres of orange juice and 2 litres of apple juice." },
      { "q": "Do I need a cake for 20 people?", "a": "No: at 20 people, the sweet treat is one madeleine per person, which is 20 madeleines and 1 box of 20. Cakes of 5 to 6 slices are only added beyond 20 people (1 to 2)." },
      { "q": "Do I need fruit skewers for 20 people?", "a": "Yes: the rule is 1 skewer per person beyond 15 people, which is 20 skewers for 20 people." },
      { "q": "What is the per-person price of the Classique package for 20 people?", "a": "€8 excl. VAT per person, or €160 excl. VAT, or €9.45 excl. VAT per person with the €29 excl. VAT delivery (€189 excl. VAT in total)." },
      { "q": "How much does the Classique package cost for 10, 30 or 50 people?", "a": "€109 excl. VAT for 10 people, €269 excl. VAT for 30 and €429 excl. VAT for 50, with the €29 excl. VAT delivery included (€8 excl. VAT per person plus delivery). From 50 people, allow 48 hours' notice." },
      { "q": "What should I order for a 30-minute team meeting with 20 people?", "a": "2 mini pastries and a coffee per person are enough: 40 mini pastries, which is 2 trays of 30, with coffee." },
      { "q": "Are napkins and cups included?", "a": "Yes, napkins and cups are included with the breakfast. The mini pastries and madeleines are set out self-service, with the juice and thermoses within easy reach." },
]

const FAQ_PDJ30 = [
  { q: 'How many pastries for 30 people?', a: 'L\'Écrin Traiteur plans 60 mini pastries, at 2 per person, which is exactly 2 trays of 30. There is no margin, so add a third tray if guests may be added.' },
  { q: 'Why does a loaf cake appear from 21 people?', a: 'Above 20 people we replace 5 madeleines with a homemade loaf cake of 5 to 6 slices, to vary the sweet side. At 30 people: 30 madeleines and 1 loaf cake.' },
  { q: 'How many thermoses for 30 people?', a: `${p30.thermos} one-litre thermoses: ${p30.cafe} of coffee and ${p30.the} of tea.` },
  { q: 'How much does a breakfast for 30 people cost?', a: `The Classic package comes to ${eurEn(cla(30))} excl. VAT including delivery (30 × €8 + €29 delivery). The full breakfast described here is quoted on request.` },
  { q: 'What changes compared with a breakfast for 20 people?', a: `At 30 people the same pattern applies with ${p30.vienn / 30} trays, ${p30.litres} litres of juice and ${p30.thermos} thermoses. With the Classic package, the budget goes from ${eurEn(cla(20))} to ${eurEn(cla(30))} excl. VAT including delivery.` },
  { q: 'Can you deliver before 8 am?', a: 'Yes, delivery starts at 6:30 am, at the time the client chooses.' },
]

const FAQ_PDJ50 = [
  { q: 'How many pastries for 50 people?', a: 'L\'Écrin Traiteur plans 100 mini pastries, which is 4 trays of 30 (120 pieces delivered).' },
  { q: 'Do you need to order earlier for 50 people?', a: 'Yes: from 50 people, allow 48 hours. Below that threshold, ordering stays possible until 10 am the day before.' },
  { q: 'How many thermoses for 50 people?', a: `${p50.thermos} one-litre thermoses: ${p50.cafe} of coffee and ${p50.the} of tea, at one thermos per 6 people.` },
  { q: 'How much does a breakfast for 50 people cost?', a: `The Classic package comes to ${eurEn(cla(50))} excl. VAT including delivery (50 × €8 + €29 delivery). The full breakfast described here is quoted on request.` },
  { q: 'How many loaf cakes for 50 people?', a: 'Above 40 people we plan 2 homemade loaf cakes of 5 to 6 slices, with 40 madeleines, to vary the sweet side.' },
  { q: 'How do you avoid a queue at 50 people?', a: 'Split the buffet into two serving points, with a thermos of coffee and one of juice at each end of the table, and leave the mini pastries self-service rather than plated.' },
      { "q": "How much juice should you plan for a breakfast for 50 people?", "a": "Plan 10 litres of juice, that is 5 litres of orange juice and 5 litres of apple juice, at one 20 cl glass per person." },
      { "q": "How many fruit skewers for 50 people?", "a": "Plan 50 fresh fruit skewers, one per person, a rule that applies above 15 people. The fruit skewers are vegan and gluten-free." },
      { "q": "What is the price per person of the Classique breakfast for 50 people?", "a": "Delivery included, the Classique formula comes to €8.58 excl. VAT per person at 50 people (€429 excl. VAT), against €9.45 excl. VAT at 20 people (€189 excl. VAT). The €29 excl. VAT delivery is shared across more guests." },
      { "q": "What does the Classique formula at €8 excl. VAT per person include?", "a": "The Classique formula includes pastries, juice, coffee and fruit, at €8 excl. VAT per person, delivery extra. The full breakfast, with madeleines, cakes, skewers and tea, is priced on quote." },
      { "q": "What can you serve vegetarian, vegan or gluten-free guests at 50 people?", "a": "The fruit skewers are vegan and gluten-free, the butter mini pastries suit vegetarians, and the gluten-free banana bread is €26.90 excl. VAT for 6 to 8 people. State the number of people concerned in the quote request." },
      { "q": "Can you change or cancel a breakfast order for 50 people?", "a": "The order can be changed until 10 am the day before. Cancellation is free until 2 working days before delivery, before 10 am." },
      { "q": "How much does delivery cost for a breakfast for 50 people?", "a": "Delivery costs €29 excl. VAT in Paris and nearby towns; it is included in the €429 excl. VAT of the Classique formula for 50 people. It starts from 6:30 am." },
]

const FAQ_COMPO = [
  { q: 'What goes into a full office breakfast?', a: '2 mini pastries, 1 sweet bite (a madeleine or a slice of loaf cake), 1 glass of juice and 1 hot drink per person, with 1 fruit skewer above 15 people. Cups, napkins, sugar and stirrers are included.' },
  { q: 'Are cups and napkins included?', a: 'Yes, with a breakfast: napkins, cups, sugar and stirrers are included.' },
  { q: 'Which hot drink should you plan?', a: 'One one-litre thermos per 6 people, with 4 thermoses of coffee for 1 of tea.' },
  { q: 'What is the difference between the Classic package and the full breakfast?', a: 'The Classic package starts at €8 excl. VAT per person; the full breakfast is quoted on request, plus €29 excl. VAT delivery.' },
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
      { "q": "How many mini pastries for 10 people?", "a": "30 mini pastries, which is 3 per person up to 10 people, or 1 tray of 30 at €48.90 excl. VAT. Three pieces per person come to €4.89 excl. VAT." },
      { "q": "How many mini pastries for 15 people?", "a": "30 mini pastries, at 2 per person, or 1 tray of 30 at €48.90 excl. VAT. One tray of 30 serves 10 to 15 people." },
      { "q": "How many mini pastries for 20 people?", "a": "40 mini pastries, which is 2 trays of 30 delivering 60 pieces, 20 of them spare. The price is €97.80 excl. VAT, before the €29 excl. VAT delivery." },
      { "q": "How many mini pastries for 30 people?", "a": "60 mini pastries, which is 2 trays of 30 at €97.80 excl. VAT. The 60 pieces delivered match the 60 needed exactly, with no spare." },
      { "q": "How many mini pastries for 50 people?", "a": "100 mini pastries, which is 4 trays of 30 at €195.60 excl. VAT. From 50 people, order 48 hours ahead." },
      { "q": "How many mini pastries for 100 people?", "a": "200 mini pastries, which is 7 trays of 30 delivering 210 pieces, for €342.30 excl. VAT. From 50 people, order 48 hours ahead." },
      { "q": "How many people does a tray of 30 mini pastries serve?", "a": "A tray of 30 serves 10 to 15 people: 3 pieces per person for 10 people, 2 pieces per person for 15. It costs €48.90 excl. VAT." },
      { "q": "What do the mini pastries for a 20-person breakfast cost, delivery included?", "a": "€126.80 excl. VAT: 2 trays of 30 at €97.80 excl. VAT, plus the €29 excl. VAT delivery to Paris and nearby towns. The minimum order is €50 excl. VAT." },
]

const FAQ_DEJ = [
  { q: 'What is a lunchtime cocktail reception?', a: 'A lunchtime cocktail reception replaces lunch: savoury and sweet canapés served standing, 12 to 14 pieces per person.' },
  { q: 'How many canapés per person for a lunchtime cocktail reception?', a: '12 to 14 pieces per person. The La Réception package has 12 pieces (9 savoury and 3 sweet) at €40.90 excl. VAT per person.' },
  { q: 'What is the difference with a dinner cocktail reception?', a: 'The dinner version replaces dinner with 16 to 18 pieces per person, against 12 to 14 for the lunchtime one. La Célébration, 16 pieces, is €51.90 excl. VAT per person.' },
  { q: 'How much does a lunchtime cocktail reception for 50 people cost?', a: `${eurEn(dej50.sans, true)} excl. VAT with La Réception, including juice, water and delivery, that is ${eurEn(dej50.sans / 50, true)} excl. VAT per person. With a 0% Chardonnay for the toast: ${eurEn(dej50.avec, true)} excl. VAT.` },
  { q: 'Is the lunchtime cocktail reception halal and alcohol-free?', a: 'Yes: the whole savoury menu is halal and pork-free, and the menu is alcohol-free. We do not claim any halal certification.' },
  { q: 'How late can you order?', a: 'Until 10 am the day before, or 48 hours ahead from 50 people, with delivery from 6:30 am.' },
      { "q": "How much does a lunch reception for 20 people cost?", "a": "€913.70 excl. VAT with La Réception, including juice, water and delivery, that is €45.69 excl. VAT per person: €818 of canapés, €66.70 of juice and water, €29 delivery. With a 0% Chardonnay for the toast: €981.30 excl. VAT." },
      { "q": "How much does a lunch reception for 100 people cost?", "a": "€4,452.50 excl. VAT with La Réception, including juice, water and delivery: €4,090 of canapés, €333.50 of juice and water, €29 delivery. With a 0% Chardonnay for the toast: €4,739.80. From 50 people, order 48 hours ahead." },
      { "q": "How much do the canapés of a lunch reception cost, without drinks or delivery?", "a": "La Réception, at €40.90 excl. VAT per person, costs €818 excl. VAT for 20 people, €2,045 excl. VAT for 50 and €4,090 excl. VAT for 100." },
      { "q": "How many canapés in total for a lunch reception for 20, 50 or 100 people?", "a": "At 12 to 14 canapés per person: 240 to 280 canapés for 20 people, 600 to 700 for 50 and 1,200 to 1,400 for 100. The La Réception formula has 12 canapés per person." },
      { "q": "Which drinks, and how much juice and water, for a lunch reception?", "a": "Plan 1 litre of juice for 4 people and 1 bottle of 75 cl water for 5: 5 litres of juice and 4 bottles for 20 people (€66.70 excl. VAT), 13 litres and 10 bottles for 50 (€171.50 excl. VAT), 25 litres and 20 bottles for 100 (€333.50 excl. VAT)." },
      { "q": "How much does the 0% Chardonnay option cost for a lunch reception?", "a": "At one flute per person and 6 flutes per 75 cl bottle at €16.90 excl. VAT: €67.60 excl. VAT for 20 people (4 bottles), €152.10 excl. VAT for 50 (9 bottles) and €287.30 excl. VAT for 100 (17 bottles)." },
      { "q": "What is the price difference between a drinks reception and a lunch reception?", "a": "A drinks reception has 6 to 8 canapés per person (L'Invitation, 8 canapés, €29.90 excl. VAT) and a lunch reception 12 to 14 (La Réception, 12 canapés, €40.90 excl. VAT), that is €11 excl. VAT more per person." },
      { "q": "How does a lunch reception differ from a seated lunch?", "a": "Guests stay standing, move around, chat and help themselves at their own pace, with no lunch tray and no table service. The meal is 12 to 14 canapés per person, savoury then sweet, delivered arranged and ready to serve." },
      { "q": "Can you have vegetarian, vegan or gluten-free options?", "a": "Yes, they are specified in the quote request, because the composition of the formulas is fixed. The whole savoury menu is halal and pork-free, and the menu is alcohol-free." },
]

const FAQ_DIN20 = [
  { q: 'How many canapés for a dinner cocktail reception for 20 people?', a: '16 to 18 pieces per person, which is 320 to 360 pieces in all. The La Célébration package has 16 pieces per person, 320 pieces for 20 guests.' },
  { q: 'How much does a dinner cocktail reception for 20 people cost?', a: `${eurEn(din20.sans, true)} excl. VAT with La Célébration, including juice, water and delivery, that is ${eurEn(din20.sans / 20, true)} excl. VAT per person. With a 0% Chardonnay: ${eurEn(din20.avec, true)} excl. VAT.` },
  { q: 'Can you do a cheaper dinner reception for 20 people?', a: `Yes, with La Réception at 12 pieces: ${eurEn(din20Reception.sans, true)} excl. VAT including juice, water and delivery, that is ${eurEn(din20Reception.sans / 20, true)} excl. VAT per person. For a shorter format, L'Invitation at 8 pieces costs €29.90 excl. VAT per person.` },
  { q: 'Which drinks should you plan for 20 people?', a: `${din20.b.jus} litres of juice, ${din20.b.eau} bottles of 75 cl water and, as an option, ${din20.b.chard} bottles of 0% Chardonnay (6 flutes per bottle).` },
  { q: 'Is the cocktail reception halal and alcohol-free?', a: 'Yes: the savoury canapés are halal and pork-free, and the menu is alcohol-free. Vegetarian, vegan and gluten-free options are set on the quote.' },
  { q: 'What does a caterer charge for a dinner reception for 20 people?', a: `At L'Écrin Traiteur, with juice, water and delivery: ${eurEn(din20Invitation.sans, true)} excl. VAT with L'Invitation (8 pieces), ${eurEn(din20Reception.sans, true)} excl. VAT with La Réception (12 pieces) and ${eurEn(din20.sans, true)} excl. VAT with La Célébration (16 pieces), the full dinner reception. The 8-piece package is the most affordable cocktail reception for 20 people.` },
  { q: 'Can the canapés be changed?', a: 'No, the composition of the packages is fixed. Tell us about dietary needs when you ask for a quote.' },
      { "q": "How many savoury and sweet canapés in La Célébration for 20 people?", "a": "La Célébration has 16 canapés per person, of which 12 are savoury and 4 sweet. For 20 guests, that is 240 savoury canapés and 80 sweet ones, 320 in total." },
      { "q": "How many canapés in total for 20 people, depending on the package?", "a": "For 20 people, L'Invitation (8 canapés per person) has 160 canapés, La Réception (12 canapés) has 240 and La Célébration (16 canapés) has 320." },
      { "q": "What does the €1,133.70 excl. VAT total for 20 people include?", "a": "It adds up €1,038.00 excl. VAT of canapés (20 × €51.90), €47.50 excl. VAT of juice (5 L), €19.20 excl. VAT of water (4 bottles of 75 cl) and €29 excl. VAT for delivery. The 0% Chardonnay is optional." },
      { "q": "How much does the 0% Chardonnay cost for 20 people?", "a": "You need 4 bottles of 75 cl at €16.90 excl. VAT, so €67.60 excl. VAT, for one flute per person. The total for La Célébration then goes from €1,133.70 excl. VAT to €1,201.30 excl. VAT." },
      { "q": "Are eight canapés enough for a standing dinner?", "a": "No. L'Invitation, at 8 canapés, suits drinks of an hour and a half to two hours, not a dinner. A standing dinner needs 16 to 18 canapés per person, so 320 to 360 canapés for 20 people." },
      { "q": "How much does one canapé cost in a dinner reception?", "a": "The price per canapé is €3.74 excl. VAT with L'Invitation (€29.90 for 8 canapés), €3.41 excl. VAT with La Réception (€40.90 for 12) and €3.24 excl. VAT with La Célébration (€51.90 for 16). These prices exclude juice, water and delivery." },
      { "q": "Until when can you order, change or cancel a reception for 20 people?", "a": "You can order until 10 am the day before, with delivery from 6:30 am; the 48-hour notice only applies from 50 people. Changes are possible until 10 am the day before, and cancellation is without charge until 2 working days before delivery, before 10 am." },
      { "q": "How quickly do you get the quote, and is there a minimum order?", "a": "The quote arrives within 24 hours, with a company invoice showing VAT. The minimum order is €50 excl. VAT, and delivery costs €29 excl. VAT in Paris and nearby towns." },
]

const FAQ_DIN30 = [
  { q: 'How many canapés for a dinner cocktail reception for 30 people?', a: '16 to 18 pieces per person, which is 480 to 540 pieces. La Célébration has 16 pieces per person, 480 pieces for 30 guests.' },
  { q: 'How much does a dinner cocktail reception for 30 people cost?', a: `${eurEn(din30.sans, true)} excl. VAT with La Célébration, including juice, water and delivery, that is ${eurEn(din30.sans / 30, true)} excl. VAT per person. With a 0% Chardonnay: ${eurEn(din30.avec, true)} excl. VAT.` },
  { q: 'What budget for a shorter dinner reception for 30 people?', a: `With La Réception at 12 pieces: ${eurEn(din30Reception.sans, true)} excl. VAT including juice, water and delivery, that is ${eurEn(din30Reception.sans / 30, true)} excl. VAT per person.` },
  { q: 'How many drinks for 30 people?', a: `${din30.b.jus} litres of juice, ${din30.b.eau} bottles of 75 cl water and, as an option, ${din30.b.chard} bottles of 0% Chardonnay.` },
  { q: 'How late can you order?', a: 'Until 10 am the day before, with delivery from 6:30 am. From 50 people, 48 hours are needed.' },
  { q: 'Do you need serving staff?', a: 'The canapés are delivered arranged and ready to serve. A maître d\'hôtel can be added, on quote, to restock and clear.' },
      { "q": "How many savoury and sweet canapés for 30 people with La Célébration?", "a": "La Célébration has 16 canapés per person, of which 12 are savoury and 4 sweet. For 30 guests, that is 360 savoury canapés and 120 sweet ones, 480 in total." },
      { "q": "Are the savoury canapés of the dinner reception halal?", "a": "Yes, the savoury canapés are halal and pork-free, and the menu is alcohol-free. We do not claim a halal certification." },
      { "q": "What does the €1,690.80 excl. VAT total for 30 people include?", "a": "It adds up €1,557.00 excl. VAT of canapés (30 × €51.90), €76.00 excl. VAT of juice (8 L), €28.80 excl. VAT of water (6 bottles of 75 cl) and €29 excl. VAT for delivery. The 0% Chardonnay is optional." },
      { "q": "How much does the 0% Chardonnay cost for 30 people?", "a": "You need 5 bottles of 75 cl at €16.90 excl. VAT, so €84.50 excl. VAT. The total for La Célébration then goes from €1,690.80 excl. VAT to €1,775.30 excl. VAT." },
      { "q": "Why does the price per person fall between 20 and 30 people?", "a": "It goes from €56.69 excl. VAT to €56.36 excl. VAT, because the €29 excl. VAT delivery is spread across more guests. The total budget rises by €557.10 excl. VAT, from €1,133.70 excl. VAT to €1,690.80 excl. VAT." },
      { "q": "How many canapés in total for 30 people, depending on the package?", "a": "For 30 people, L'Invitation (8 canapés per person) has 240 canapés, La Réception (12 canapés) has 360 and La Célébration (16 canapés) has 480. With La Réception, the total is €330.00 excl. VAT lower than with La Célébration, juice, water and delivery included." },
      { "q": "Until when can you change or cancel a reception for 30 people?", "a": "Changes are possible until 10 am the day before. Cancellation is without charge until 2 working days before delivery, before 10 am." },
      { "q": "How quickly do you get the quote, and is there a minimum order?", "a": "The quote arrives within 24 hours, with a company invoice showing VAT. The minimum order is €50 excl. VAT, and delivery costs €29 excl. VAT in Paris and nearby towns." },
]

const FAQ_DIFF = [
  { q: 'What is the difference between a cocktail reception and a dinner reception?', a: 'None in practice: "apéritif dînatoire" is the everyday French term for a dinner cocktail reception, a standing meal made of individual canapés. What changes is the number of pieces: 6 to 8 for drinks, 16 to 18 for a dinner.' },
  { q: 'How many canapés for drinks, a lunch and a dinner reception?', a: '6 to 8 pieces per person for drinks, 12 to 14 for a lunch reception, 16 to 18 for a dinner reception.' },
  { q: 'Should you choose a sharing buffet or a cocktail reception?', a: 'A cocktail reception is eaten standing, piece by piece, and lets guests move around; a sharing buffet suits a seated team or a working lunch.' },
  { q: 'How much does a cocktail reception cost per person?', a: 'From €29.90 excl. VAT for 8 pieces to €51.90 excl. VAT for 16 pieces, plus €29 excl. VAT delivery.' },
  { q: 'How much does a sharing buffet cost per person?', a: 'From €34.90 to €37.90 excl. VAT per person, for a menu sized for 8 to 12 guests, plus delivery.' },
  { q: 'What is a lunch buffet ("buffet déjeunatoire")?', a: 'A lunch served as a buffet that replaces the midday meal. Standing, it is a lunch reception of 12 to 14 canapés per person, La Réception at €40.90 excl. VAT at L\'Écrin Traiteur; seated, a sharing buffet served in dishes, from €34.90 to €37.90 excl. VAT per person.' },
  { q: 'How much does a lunch buffet for 20 people cost?', a: `At L'Écrin Traiteur, ${eurEn(dej20.sans, true)} excl. VAT for a 12-piece lunch reception with juice, water and delivery, or ${eurEn(20 * 34.9 + LIV)} to ${eurEn(20 * 37.9 + LIV)} excl. VAT for a sharing buffet, delivery included and drinks extra.` },
  { q: 'Cocktail reception, buffet or lunch trays for a meeting?', a: 'For a seated working meeting, lunch trays from €28.90 excl. VAT; for a standing, sociable moment, the cocktail reception.' },
      { "q": "Which format should we choose for after-work drinks?", "a": "The 8-canapé reception, L'Invitation, at €29.90 excl. VAT per person. It is served standing, piece by piece, and drinks-style receptions allow 6 to 8 canapés per person." },
      { "q": "Which format should we choose for an inauguration or a reception?", "a": "A 12-canapé reception (La Réception, €40.90 excl. VAT per person) if it replaces lunch, or a 16-canapé reception (La Célébration, €51.90 excl. VAT per person) if it replaces dinner." },
      { "q": "What should we serve for a team lunch?", "a": "A lunch tray, from €28.90 excl. VAT per person, or a sharing buffet, from €34.90 to €37.90 excl. VAT per person. The buffet suits a team that stays seated; the lunch tray suits a working meeting or a training day." },
      { "q": "How many people is a sharing buffet sized for?", "a": "Each sharing buffet menu is sized for 8 to 12 guests. It costs €34.90 to €37.90 excl. VAT per person, plus €29 excl. VAT delivery, with drinks extra." },
      { "q": "Among the cocktail reception, the sharing buffet and the lunch tray, which format costs the least per person?", "a": "Lunch trays, from €28.90 excl. VAT per person, then the 8-canapé reception at €29.90 excl. VAT, then the sharing buffet from €34.90 excl. VAT. €29 excl. VAT delivery is added to each order." },
      { "q": "How many canapés and what budget for a reception for 20 people?", "a": "With 8 canapés, 160 pieces for €598 excl. VAT; with 12, 240 pieces for €818 excl. VAT; with 16, 320 pieces for €1,038 excl. VAT. These amounts exclude drinks and the €29 excl. VAT delivery." },
      { "q": "Are drinks included in a cocktail reception?", "a": "They are counted separately: 1 L of juice for 4 people and one 75 cl bottle of water for 5. As an option, a 0 % Chardonnay to toast with, at €16.90 excl. VAT a bottle, with 1 glass per person. For a sharing buffet, drinks are extra." },
      { "q": "Are the cocktail reception, the buffet and the lunch trays halal and alcohol-free?", "a": "The savoury canapés are halal and pork-free, and the menu is alcohol-free, at no extra cost. We do not claim any halal certification issued by a certifying body." },
      { "q": "How far ahead do we need to order a cocktail reception or a buffet?", "a": "Order until 10 am the day before, with delivery from 6:30 am in Paris and the Paris region. From 50 people, order 48 hours ahead. The minimum order is €50 excl. VAT and the quote arrives within 24 hours." },
]

export const EN_JOURNAL = {
  'petit-dejeuner-pour-20-personnes-quantites-budget': {
    titre: 'Breakfast for 20 people: exact quantities and budget',
    metaTitle: 'Breakfast for 20 people: quantities and budget',
    extrait: `For 20 people: 40 mini pastries, 20 madeleines, 20 fruit skewers, 4 L of juice, 4 thermoses. Classic package: ${eurEn(cla(20))} excl. VAT including delivery.`,
    enBref: [
      '40 mini pastries (2 trays of 30), 20 madeleines, 20 fresh fruit skewers, 20 glasses of juice (4 L) and 4 thermoses (3 coffee, 1 tea).',
      `Classic package: ${eurEn(cla(20))} excl. VAT including delivery (20 × €8 + €29 delivery).`,
      'The full breakfast, with madeleines, fruit skewers and tea, is quoted on request.',
      'Order until 10 am the day before, delivery from 6:30 am.',
    ],
    contenu: `
      <p>At L'Écrin Traiteur, a breakfast for 20 people takes <strong>40 mini pastries, 20 madeleines, 20 fresh fruit skewers, 4 litres of juice and 4 thermoses</strong>. With the Classic package it comes to <strong>${eurEn(cla(20))} excl. VAT including delivery</strong>; the full breakfast is quoted on request. Here is the detail, the budget and the organisation.</p>

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
      <p>The Classic package (pastries, juice, coffee, fruit), at €8 excl. VAT per person, comes to <strong>${eurEn(cla(20))} excl. VAT</strong> including delivery (20 × €8 + €29). The full breakfast, with the quantities in the table above, is quoted on request.</p>
      <p>To compare the formats and their prices by headcount, see <a href="/journal/budget-petit-dejeuner-equipe-personnes">how much an office breakfast costs</a>.</p>

      <h2>How do you organise this breakfast, from the order to 8 am?</h2>
      <ol>
        <li><strong>The day before, before 10 am:</strong> confirm the headcount, the address and the delivery time, with the contact on site.</li>
        <li><strong>From 6:30 am on the day:</strong> delivery is possible at the time you choose, before the team arrives.</li>
        <li><strong>On the table:</strong> mini pastries and madeleines self-service, juice and thermoses within reach, napkins and cups included.</li>
      </ol>

      <h2>What should you change for a hungrier or lighter team?</h2>
      <p>Add a 10% margin if guests may be added at the last minute: the 2 trays already deliver 60 mini pastries for the 40 needed. For a 30-minute team catch-up, 2 mini pastries and a coffee are enough; for a morning offsite, keep the sweet items and the fruit.</p>

      <h2>And for dietary requirements?</h2>
      <p>Pure butter mini pastries suit vegetarians. Fresh fruit skewers are vegan and gluten-free, and the gluten-free banana bread is €26.90 excl. VAT for 6 to 8 people. Tell us how many guests are concerned when you ask for a quote.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours, or build it with our <a href="/creations/petits-dejeuners-et-pauses">breakfast delivery for companies in Paris</a>. Order until 10 am the day before, delivery from 6:30 am in Paris and the Paris region, company invoice with VAT. For 30 or 50 people, see <a href="/journal/petit-dejeuner-pour-30-personnes-quantites-budget">30 people</a> and <a href="/journal/petit-dejeuner-pour-50-personnes-quantites-budget">50 people</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about breakfast for 20 people</h2>
${faqHtmlEn(FAQ_PDJ20)}
    `,
    faq: FAQ_PDJ20,
  },

  'petit-dejeuner-pour-30-personnes-quantites-budget': {
    titre: 'Breakfast for 30 people: exact quantities and budget',
    metaTitle: 'Breakfast for 30 people: quantities and budget',
    extrait: `For 30 people: 60 mini pastries, 30 madeleines and 1 loaf cake, 30 skewers, 6 L of juice, 5 thermoses. Classic package: ${eurEn(cla(30))} excl. VAT including delivery.`,
    enBref: [
      '60 mini pastries (2 trays of 30), 30 madeleines, 1 loaf cake, 30 fresh fruit skewers, 30 glasses of juice (6 L) and 5 thermoses.',
      `Classic package: ${eurEn(cla(30))} excl. VAT including delivery (30 × €8 + €29 delivery).`,
      'The full breakfast, with madeleines, loaf cake, fruit skewers and tea, is quoted on request.',
      'The first loaf cake appears at 21 people; there are 2 above 40.',
    ],
    contenu: `
      <p>At L'Écrin Traiteur, a breakfast for 30 people takes <strong>60 mini pastries, 30 madeleines and 1 loaf cake, 30 fresh fruit skewers, 6 litres of juice and 5 thermoses</strong>. With the Classic package it comes to <strong>${eurEn(cla(30))} excl. VAT including delivery</strong>; the full breakfast is quoted on request.</p>

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
      <p>The Classic package (pastries, juice, coffee, fruit), at €8 excl. VAT per person, comes to <strong>${eurEn(cla(30))} excl. VAT</strong> including delivery (30 × €8 + €29). The full breakfast, with the quantities in the table above, is quoted on request.</p>
      <p>Compared with 20 people (${eurEn(cla(20))} excl. VAT with the Classic package), the budget rises by ${eurEn(cla(30) - cla(20))} for 10 more people: the €29 excl. VAT delivery is shared across more guests. See also <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">20 people</a>.</p>

      <h2>How do you organise a breakfast for 30 people?</h2>
      <p>Choose a serving spot the whole team can reach, with the hot drinks at one end of the table and the juice at the other to spread people out. Order until 10 am the day before, with delivery from 6:30 am: 30 people stays below the 48-hour threshold, which applies from 50.</p>

      <h2>Should you plan a margin for 30 people?</h2>
      <p>Yes if the headcount may move: 60 mini pastries is exactly 2 per person. Add a third tray of 30 pieces (€48.90 excl. VAT) to absorb the unexpected.</p>

      <h2>Which dietary requirements should you plan for?</h2>
      <p>Fruit skewers are vegan and gluten-free, and pure butter mini pastries suit vegetarians. The gluten-free banana bread is €26.90 excl. VAT for 6 to 8 people. The number of guests concerned is set when you ask for a quote.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours, or build it with our <a href="/creations/petits-dejeuners-et-pauses">corporate breakfast delivery</a>. Delivery in Paris and the Paris region, company invoice with VAT. For a larger group, see the <a href="/journal/petit-dejeuner-pour-50-personnes-quantites-budget">breakfast for 50 people</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about breakfast for 30 people</h2>
${faqHtmlEn(FAQ_PDJ30)}
    `,
    faq: FAQ_PDJ30,
  },

  'petit-dejeuner-pour-50-personnes-quantites-budget': {
    titre: 'Breakfast for 50 people: exact quantities, budget and lead time',
    metaTitle: 'Breakfast for 50 people: quantities and budget',
    extrait: `For 50 people: 100 mini pastries, 40 madeleines and 2 loaf cakes, 50 skewers, 10 L of juice, 9 thermoses. Classic package: ${eurEn(cla(50))} excl. VAT including delivery.`,
    enBref: [
      '100 mini pastries (4 trays of 30), 40 madeleines, 2 loaf cakes, 50 fresh fruit skewers, 50 glasses of juice (10 L) and 9 thermoses.',
      `Classic package: ${eurEn(cla(50))} excl. VAT including delivery (50 × €8 + €29 delivery).`,
      'The full breakfast, with madeleines, loaf cakes, fruit skewers and tea, is quoted on request.',
      'From 50 people, order 48 hours ahead.',
    ],
    contenu: `
      <p>At L'Écrin Traiteur, a breakfast for 50 people takes <strong>100 mini pastries, 40 madeleines and 2 loaf cakes, 50 fresh fruit skewers, 10 litres of juice and 9 thermoses</strong>. With the Classic package it comes to <strong>${eurEn(cla(50))} excl. VAT including delivery</strong>; the full breakfast is quoted on request. At this size, the order is placed <strong>48 hours ahead</strong>.</p>

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
      <p>The Classic package (pastries, juice, coffee, fruit), at €8 excl. VAT per person, comes to <strong>${eurEn(cla(50))} excl. VAT</strong> including delivery (50 × €8 + €29). The full breakfast, with the quantities in the table above, is quoted on request.</p>
      <p>Delivery included, the Classic price per person falls as the headcount rises: ${eurEn(cla(20) / 20, true)} excl. VAT at 20 people, ${eurEn(cla(50) / 50, true)} excl. VAT at 50, because the €29 excl. VAT delivery is spread across more guests.</p>

      <h2>Why order 48 hours ahead?</h2>
      <p>From 50 people, the quantities of fresh products to prepare and deliver justify 48 hours' notice, against 10 am the day before for smaller groups. Confirm the headcount, the address and the delivery time at that point.</p>

      <h2>How do you avoid a queue at 50 people?</h2>
      <p>Split the buffet into two serving points: a thermos of coffee and one of juice at each end of the table, with the mini pastries self-service. A single table for 50 people creates a queue; two points halve it.</p>

      <h2>Which dietary requirements should you plan for?</h2>
      <p>Fruit skewers are vegan and gluten-free, pure butter mini pastries suit vegetarians, and the gluten-free banana bread is €26.90 excl. VAT for 6 to 8 people. Tell us how many guests are concerned when you ask for a quote.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours, giving the headcount, the date and the address. Delivery from 6:30 am in Paris and the Paris region, company invoice with VAT. For 100 people, the quantities and the Classic budget are in the guide <a href="/journal/budget-petit-dejeuner-equipe-personnes">how much an office breakfast costs</a>. The packages are on our <a href="/creations/petits-dejeuners-et-pauses">office breakfast in Paris</a> page.</p>
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
      'Cups, napkins, sugar and stirrers are included; the Classic package starts at €8 excl. VAT, the full breakfast on quote.',
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
          <tr><td>Full breakfast</td><td>on quote</td><td>Offsite, extended team meeting</td></tr>
          <tr><td>Made to measure</td><td>on quote</td><td>Board meeting, client welcome</td></tr>
        </tbody>
      </table>
      <p>For the budget detail by headcount, see <a href="/journal/budget-petit-dejeuner-equipe-personnes">how much an office breakfast costs</a>.</p>

      <h2>What does a breakfast for 20 people look like?</h2>
      <p>For 20 people: 40 mini pastries (2 trays of 30), 20 madeleines, 20 fruit skewers, 4 litres of juice and 4 thermoses; this full breakfast is quoted on request, the Classic package coming to ${eurEn(cla(20))} excl. VAT including delivery. The detail is in the guide <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">breakfast for 20 people</a>.</p>

      <h2>Can you add savoury items or adapt to diets?</h2>
      <p>Yes: savoury items are ordered alongside, on quote (see the guide <a href="/journal/petit-dejeuner-sale-entreprise-pains-brioches-paris">savoury breakfast</a>). For diets, fruit skewers are vegan and gluten-free, and the gluten-free banana bread is €26.90 excl. VAT for 6 to 8 people.</p>

      <h2>Why mini pastries?</h2>
      <p>They are eaten in two bites, with no plate, and everyone can try several kinds: see <a href="/journal/pourquoi-mini-viennoiseries-petit-dejeuner-entreprise">why mini pastries at an office breakfast</a>.</p>

      <h2>How do you order?</h2>
      <p>Build it on our <a href="/creations/petits-dejeuners-et-pauses">office breakfast catering</a> page or ask for a <a href="/devis">quote</a> within 24 hours. Order until 10 am the day before, delivery from 6:30 am in Paris and the Paris region.</p>
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
      <p>Build your breakfast in <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a> or ask for a <a href="/devis">quote</a> within 24 hours. Order until 10 am the day before, delivery from 6:30 am in Paris and the Paris region. To see the full composition, read <a href="/journal/de-quoi-se-compose-petit-dejeuner-entreprise">what goes into an office breakfast</a>.</p>
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
      'Savoury items halal and pork-free, menu alcohol-free; order until 10 am the day before.',
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
      <p>Ask for a <a href="/devis">quote</a> within 24 hours, or see the <a href="/creations/cocktails">cocktail packages</a>. The canapés are delivered arranged and ready to serve. Order until 10 am the day before, or 48 hours ahead from 50 people, with delivery from 6:30 am.</p>
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
      "At L'Écrin Traiteur, a dinner cocktail reception for 20 people has 16 to 18 canapés per person, so 320 to 360 pieces; La Célébration has 16 (12 savoury, 4 sweet).",
      `At L'Écrin Traiteur, the budget is ${eurEn(din20.sans, true)} excl. VAT with juice, water and delivery, that is ${eurEn(din20.sans / 20, true)} excl. VAT per person, or ${eurEn(din20.avec, true)} excl. VAT with a 0% Chardonnay.`,
      `A shorter version at L'Écrin Traiteur, with La Réception (12 pieces): ${eurEn(din20Reception.sans, true)} excl. VAT.`,
      `Drinks planned by L'Écrin Traiteur for 20 people: ${din20.b.jus} L of juice and ${din20.b.eau} bottles of 75 cl water; savoury items halal and pork-free, menu alcohol-free.`,
    ],
    contenu: `
      <p>At L'Écrin Traiteur, a dinner reception for 20 people costs <strong>${eurEn(din20Invitation.sans, true)} to ${eurEn(din20.sans, true)} excl. VAT</strong> with juice, water and delivery, depending on whether you serve 8 or 16 canapés per person. L'Écrin Traiteur's dinner cocktail reception for 20 people has <strong>16 to 18 canapés per person, so 320 to 360 pieces</strong>. L'Écrin Traiteur's La Célébration package, 16 pieces at €51.90 excl. VAT per person, comes to <strong>${eurEn(din20.sans, true)} excl. VAT</strong> with juice, water and delivery, that is ${eurEn(din20.sans / 20, true)} excl. VAT per person.</p>

      <h2>How many canapés for a dinner cocktail reception for 20 people?</h2>
      <p>Allow 16 to 18 pieces per person, because a dinner reception replaces dinner: 320 pieces at the very least for 20 guests. La Célébration has 16 pieces per person, 12 savoury and 4 sweet, arranged and delivered ready to serve.</p>

      <h2>How much does a dinner cocktail reception for 20 people cost?</h2>${tableCocktailEn(din20)}
      <p>The drinks follow the rule of 1 litre of juice for 4 people and one 75 cl bottle of water for 5. The detail of the packages is on the page of our <a href="/creations/cocktails">cocktail caterer in Paris</a>.</p>

      <h2>How do you make an affordable cocktail or dinner reception for 20 people?</h2>
      <p>Choose La Réception, 12 pieces at €40.90 excl. VAT per person: <strong>${eurEn(din20Reception.sans, true)} excl. VAT</strong> with juice, water and delivery, that is ${eurEn(din20Reception.sans / 20, true)} excl. VAT per person, ${eurEn(din20.sans - din20Reception.sans, true)} less than with La Célébration. This package suits a moment that runs shorter or that follows a lunch. For tight budgets, see <a href="/journal/cocktail-dinatoire-pas-cher-entreprise-budget">affordable dinner reception</a>.</p>
      <table>
        <thead><tr><th>Package</th><th>Pieces per person</th><th>Total excl. VAT with juice, water and delivery</th><th>Per person</th></tr></thead>
        <tbody>
${[din20Invitation, din20Reception, din20].map(c => `          <tr><td>${c.f.nom}</td><td>${c.f.pieces}</td><td>${eurEn(c.sans, true)}</td><td>${eurEn(c.sans / 20, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>L'Invitation, with 8 pieces, suits drinks of an hour and a half to two hours, not a dinner. To choose, see <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">how many canapés per person</a>, our <a href="/journal/idees-pieces-cocktail-entreprise">canapé ideas</a> and the guide to <a href="/journal/traiteur-afterwork-pot-depart-entreprise-paris">after-work events and leaving parties</a>.</p>

      <h2>Which drinks should you plan for 20 people?</h2>
      <p>Allow ${din20.b.jus} litres of juice (orange and apple), ${din20.b.eau} bottles of 75 cl water and, as an option, ${din20.b.chard} bottles of 0% Chardonnay for the toast. The whole menu is alcohol-free. See the guide <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">how many drinks per person</a>.</p>

      <h2>Is the cocktail reception halal?</h2>
      <p>The savoury canapés are halal and pork-free, and the menu is alcohol-free, at no extra cost. We do not claim any halal certification issued by a certifying body. The composition of the packages is fixed: tell us about vegetarian, vegan or gluten-free needs when you ask for a quote.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours. Order until 10 am the day before, delivery from 6:30 am in Paris and the Paris region, company invoice with VAT. For 30 people, see <a href="/journal/cocktail-dinatoire-pour-30-personnes-quantites-budget">dinner cocktail reception for 30 people</a>.</p>
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
      "At L'Écrin Traiteur, a dinner cocktail reception for 30 people has 16 to 18 canapés per person, so 480 to 540 pieces; La Célébration has 16 (12 savoury, 4 sweet).",
      `At L'Écrin Traiteur, the budget is ${eurEn(din30.sans, true)} excl. VAT with juice, water and delivery, that is ${eurEn(din30.sans / 30, true)} excl. VAT per person, or ${eurEn(din30.avec, true)} excl. VAT with a 0% Chardonnay.`,
      `A shorter version at L'Écrin Traiteur, with La Réception (12 pieces): ${eurEn(din30Reception.sans, true)} excl. VAT.`,
      `Drinks planned by L'Écrin Traiteur for 30 people: ${din30.b.jus} L of juice and ${din30.b.eau} bottles of 75 cl water; savoury items halal and pork-free, menu alcohol-free.`,
    ],
    contenu: `
      <p>At L'Écrin Traiteur, a dinner cocktail reception for 30 people takes <strong>16 to 18 canapés per person, so 480 to 540 pieces</strong>. L'Écrin Traiteur's La Célébration package comes to <strong>${eurEn(din30.sans, true)} excl. VAT</strong> with juice, water and delivery, that is ${eurEn(din30.sans / 30, true)} excl. VAT per person.</p>

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
      <p>Ask for a <a href="/devis">quote</a> within 24 hours, or see our <a href="/creations/cocktails">cocktail delivery for companies in Paris</a>. Order until 10 am the day before, delivery from 6:30 am. For 50 people, see <a href="/journal/cocktail-entreprise-50-personnes">company cocktail reception for 50 people</a>.</p>
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
      <p>At L'Écrin Traiteur, a cocktail reception costs €29.90 to €51.90 excl. VAT per person (8 to 16 canapés), a sharing buffet €34.90 to €37.90 excl. VAT and a lunch tray from €28.90 excl. VAT; for a standing <strong>lunch buffet</strong>, allow 12 to 14 canapés per person. A <strong>dinner cocktail reception</strong> and an <strong>apéritif dînatoire</strong> are the same format: a standing meal made of individual canapés. What changes is the number of pieces: 6 to 8 per person for drinks, 12 to 14 for a lunch reception, 16 to 18 for a dinner reception. A sharing buffet, on the other hand, is served in dishes at the table.</p>

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

      <h2>What is a lunch buffet, and how much does it cost?</h2>
      <p>A lunch buffet ("buffet déjeunatoire") is a lunch served as a buffet that replaces the midday meal. Standing, it is a lunch reception of 12 to 14 canapés per person; seated, a sharing buffet served in dishes. The table gives the price for 20 people, with a €29 excl. VAT delivery.</p>
      <table>
        <thead><tr><th>Format</th><th>Price per person excl. VAT</th><th>For 20 people excl. VAT</th></tr></thead>
        <tbody>
          <tr><td>Lunch reception, La Réception (12 pieces)</td><td>€40.90</td><td>${eurEn(dej20.sans, true)}, juice, water and delivery included</td></tr>
          <tr><td>Sharing buffet</td><td>€34.90 to €37.90</td><td>${eurEn(20 * 34.9 + LIV)} to ${eurEn(20 * 37.9 + LIV)}, delivery included, drinks extra</td></tr>
          <tr><td>Lunch trays</td><td>from €28.90</td><td>from ${eurEn(20 * 28.9 + LIV)}, delivery included</td></tr>
        </tbody>
      </table>
      <p>For the quantities of a cold buffet, see <a href="/journal/buffet-froid-entreprise-quantites-par-personne">cold buffet: quantities per person</a>; for the full organisation, our <a href="/journal/buffet-entreprise-guide-complet-paris">corporate buffet guide</a>; and the <a href="/creations/plateaux-repas">lunch trays</a> menu.</p>

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
        <li><strong>An inauguration or a reception:</strong> a cocktail reception of 12 pieces if it replaces lunch, 16 if it replaces dinner. See <a href="/journal/organiser-inauguration-entreprise-deroule-budget-traiteur">organising an inauguration</a>.</li>
        <li><strong>After-work drinks:</strong> the 8-canapé reception, €29.90 excl. VAT per person. See <a href="/journal/idees-afterwork-entreprise-formats-budget">after-work drinks ideas</a>.</li>
        <li><strong>A team lunch:</strong> a lunch tray or a sharing buffet. See <a href="/journal/idees-dejeuner-bureau-formats-budget">office lunch ideas</a>.</li>
      </ul>

      <h2>Are the formats halal and alcohol-free?</h2>
      <p>The savoury canapés are halal and pork-free, and the menu is alcohol-free, at no extra cost. We do not claim any halal certification issued by a certifying body.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours. Order until 10 am the day before, delivery from 6:30 am in Paris and the Paris region, with €29 excl. VAT delivery and a €50 excl. VAT minimum order.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about cocktail reception and buffet formats</h2>
${faqHtmlEn(FAQ_DIFF)}
    `,
    faq: FAQ_DIFF,
  },
}
