/*
  Surcouche anglaise de lib/journalBesoins.js — articles « besoins réels »
  tirés des demandes de devis (maître d'hôtel, accueil presse, stand de salon,
  journée de formation, petit-déjeuner récurrent, pot de départ).

  Comme partout dans lib/en/, les montants sont RECALCULÉS, jamais recopiés :
  pdjEn enveloppe la recette française, eurEn ne change que le format.
*/
import { eurEn, faqHtmlEn, pdjEn, SIGNATURE_EN, LIV, cocktailEn, FORMULES_EN } from './budget'
import { PDJ_DES } from '../../prixEntree'

const MH = 250 // maître d'hôtel : 250 € HT pour 6 heures
const P15 = pdjEn(15), P35 = pdjEn(35), P45 = pdjEn(45)
const LB_BAS = 18.9, LB_HAUT = 21.9
const stand = (n, p) => n * p + LIV
const journee = (n, plateau) => {
  const accueil = n * 8
  const dej = n * plateau
  const pause = n * 6
  return { accueil, dej, pause, une: accueil + dej + pause + LIV, trois: accueil + dej + pause + 3 * LIV }
}
const F12 = journee(12, 29.9), F25 = journee(25, 29.9), F50 = journee(50, 29.9)
const R10 = 10 * 8 + LIV, R20 = 20 * 8 + LIV
const D12 = pdjEn(12), D20 = pdjEn(20), D35 = pdjEn(35)
const cla = (n) => n * PDJ_DES + LIV // Classic breakfast delivered, € excl. VAT (the full breakfast is quoted on request, 24/10/2026)

const FAQ_ASSIS = [
  { q: 'How many maîtres d\'hôtel for a seated dinner of 50 people?', a: `At L'Écrin Traiteur, 3 to 5 service staff, depending on the number of courses and the crockery. At ${eurEn(MH)} excl. VAT per maître d'hôtel for 6 hours, that comes to ${eurEn(3 * MH)} to ${eurEn(5 * MH)} excl. VAT.` },
  { q: 'What ratio for a seated meal with several courses?', a: 'One maître d\'hôtel per 10 to 15 guests for a full meal with several courses, and 1 per 10 to 25 guests more generally. The more courses, hard crockery and plated service, the more staff are needed.' },
  { q: 'How much does a maître d\'hôtel cost for a dinner?', a: `In Paris, service is generally charged at €30 to €50 an hour. At L'Écrin Traiteur, a maître d'hôtel costs ${eurEn(MH)} excl. VAT for a 6-hour service, set-up and clearing included.` },
  { q: 'What is the difference between a maître d\'hôtel and a waiter?', a: 'The waiter carries out the service; the maître d\'hôtel coordinates the team, keeps to the timing and liaises with the kitchen and the organiser. Many caterers call all their service staff "maître d\'hôtel": check what the term covers on the quote.' },
  { q: 'Should set-up be counted in the service hours?', a: 'Yes. Count the set-up before the guests arrive and the clearing after dinner. A three-hour evening often takes six hours of presence.' },
  { q: 'What should I provide for a seated dinner?', a: 'A table plan, space to plate the dishes, a water point or access to a back kitchen if possible, and the list of dietary requirements. Mention these when you ask for a quote.' },
]

const FAQ_BUFFET = [
  { q: 'How many maîtres d\'hôtel for a buffet of 100 people?', a: `L'Écrin Traiteur plans 3 to 5 maîtres d'hôtel for a standing buffet, depending on the crockery and the hot dishes, which is ${eurEn(3 * MH)} to ${eurEn(5 * MH)} excl. VAT at ${eurEn(MH)} excl. VAT per maître d'hôtel for 6 hours.` },
  { q: 'Do you need a maître d\'hôtel for a delivered buffet?', a: 'Not necessarily. A buffet delivered ready to serve, with disposable crockery, can be handled without service staff; a maître d\'hôtel earns their place to restock, clear, plate the hot dishes and keep the timing, especially from around forty guests.' },
  { q: 'What ratio for a buffet?', a: 'One maître d\'hôtel per 20 to 40 guests, closer to 1 per 30 with a hot buffet and hard crockery. For a dinner cocktail reception: 1 per 25 to 30 guests.' },
  { q: 'How much does a maître d\'hôtel cost for a buffet?', a: `At L'Écrin Traiteur, ${eurEn(MH)} excl. VAT for a 6-hour service, set-up and clearing included. For a buffet of 100 people with 4 maîtres d'hôtel, the service comes to ${eurEn(4 * MH)} excl. VAT, that is ${eurEn(4 * MH / 100, true)} excl. VAT per person.` },
  { q: 'And for a breakfast?', a: 'The ratio drops to one maître d\'hôtel per 50 to 80 guests for a breakfast or a break, 1 per 50 with hard crockery. For 20 people self-service it is not essential: it mainly helps with the set-up, the restocking and the clearing.' },
  { q: 'What should you state when asking for a quote?', a: 'The number of guests, the format (standing or seated), the duration including set-up and clearing, the type of crockery, the number of spaces and the access to the venue. The number of maîtres d\'hôtel is then proposed to measure.' },
]

const FAQ_PRESSE = [
  { q: 'What should you serve at a press breakfast?', a: 'Mini pastries, madeleines, fresh fruit skewers (vegan and gluten-free), coffee, tea, fruit juice and water. Small sweet bites are eaten standing, while talking, with no plate.' },
  { q: 'How many people should you plan for a press welcome?', a: 'Count the confirmed journalists plus the team welcoming them, with a 10% margin. For 35 people you need 70 mini pastries (3 trays of 30) and 6 thermoses.' },
  { q: 'What time should delivery be?', a: 'One hour before the welcome: delivery starts at 6:30 am, at the time you choose. For a 9:30 am welcome, a delivery at 8:45 am leaves time to lay the table.' },
  { q: 'Are cups and napkins included?', a: 'Yes, with a breakfast: napkins, cups, sugar and stirrers are included. For reusable cups and glasses, the crockery is priced on quote, and delivery with collection of the equipment costs €39 excl. VAT in Paris, the 92 and the 94, and the zone price plus €19 excl. VAT elsewhere.' },
  { q: 'How much does a press breakfast cost?', a: `With the Classic package, delivery included: ${eurEn(cla(15))} excl. VAT for 15 people, ${eurEn(cla(35))} excl. VAT for 35 and ${eurEn(cla(45))} excl. VAT for 45. The full breakfast, with madeleines, fruit skewers, tea and water, is quoted on request.` },
  { q: 'How late can you order?', a: 'Until 10 am the day before, or 48 hours ahead from 50 people. For a product launch, give the exact address, the floor and the contact on site.' },
]

const FAQ_SALON = [
  { q: 'How many lunch boxes should you order per day for a trade-show stand?', a: 'One per person on the stand at lunchtime, with a 10% margin. For 40 people, order 44 lunch boxes.' },
  { q: 'How much does a corporate lunch box cost?', a: `From ${eurEn(LB_BAS, true)} to ${eurEn(LB_HAUT, true)} excl. VAT per person (starter, sandwich, dessert, cutlery included), plus ${eurEn(LIV)} excl. VAT per delivery.` },
  { q: 'Can you deliver every day of the show?', a: 'Yes: one delivery a day, at the time you choose from 6:30 am, with orders until 10 am the day before (48 hours ahead from 50 people). Each delivery is charged €29 excl. VAT.' },
  { q: 'What should you arrange for delivery access at a trade show?', a: 'Ask the organiser about the delivery access, the permitted time slot and the stand name. Give them when ordering, with a contact reachable on site.' },
  { q: 'Do lunch boxes suit every diet?', a: 'Yes, vegetarian, vegan and gluten-free options are set when ordering, with the number of guests concerned.' },
  { q: 'And a savoury and sweet platter for visitors?', a: 'An aperitif platter and a platter of sweet bites can be ordered alongside the lunch boxes, on quote according to the number of visitors expected.' },
]

const FAQ_FORMATION = [
  { q: 'How much does catering a training day for 25 people cost?', a: `${eurEn(F25.une, true)} excl. VAT with a single delivery (coffee welcome, lunch trays, sweet break), or ${eurEn(F25.trois, true)} excl. VAT with three deliveries at different times.` },
  { q: 'Do you need three deliveries in the day?', a: 'Not necessarily. A single morning delivery, with the sweet break kept at room temperature, saves €58 excl. VAT. Three deliveries guarantee that everything arrives at the time of each moment.' },
  { q: 'Which lunch tray should you choose for a training day?', a: 'The chicken tray at €29.90 excl. VAT is the default; the vegetarian at €28.90 excl. VAT for those who have said so; the salmon at €30.90 excl. VAT on request. One tray per person, plus 10% if the list is not by name.' },
  { q: 'How much does the coffee welcome of a training day cost?', a: 'The Classic package at €8 excl. VAT per person (pastries, juice, coffee, fruit). For a lighter welcome, pastries and coffee come to around €6.50 excl. VAT per person.' },
  { q: 'Can you order for several training days?', a: 'Yes, in a single quote request: give the dates, the headcount per day and the address. A 3-day course for 25 people is three times the budget of one day.' },
  { q: 'What if the headcount varies from one day to the next?', a: 'State the headcount for each day in the request. An adjustment remains possible until 10 am the day before, for the next day.' },
]

const FAQ_RECURRENT = [
  { q: 'Can you order a breakfast every week?', a: 'Yes. The order repeats every week, or on request, with the same quality at every delivery, and a preferential rate is possible on quote for regular orders.' },
  { q: 'How much does a weekly breakfast for 10 people cost?', a: `${eurEn(R10)} excl. VAT per delivery with the Classic package (10 × €8 + €29 delivery), so ${eurEn(4 * R10)} excl. VAT over four weeks.` },
  { q: 'And for 20 people every week?', a: `${eurEn(R20)} excl. VAT per delivery with the Classic package, so ${eurEn(4 * R20)} excl. VAT over four weeks.` },
  { q: 'Is there a commitment?', a: 'No, there is no commitment: each order is placed until 10 am the day before, and delivery starts at 6:30 am.' },
  { q: 'How do you set up a recurring breakfast?', a: 'Fix a day and a delivery time, a contact on site and a precise address. Keep the list of dietary requirements up to date, and allow a 10% margin if the headcount varies.' },
  { q: 'Does a recurring breakfast suit training sessions?', a: 'Yes, it is the common case for head offices welcoming staff several times a month: a coffee welcome delivered on time, with nothing to manage on site.' },
]

const FAQ_DEPART_PDJ = [
  { q: 'Can you hold a send-off at breakfast?', a: 'Yes, it is a common format: from 10 am to 11 am, with pastries, fruit, juice and a hot drink. It avoids an end-of-day drinks party and suits every guest.' },
  { q: 'How much does a breakfast send-off for 20 people cost?', a: `${eurEn(cla(20))} excl. VAT with the Classic package (20 × €8 + €29 delivery). The full breakfast is quoted on request, with or without hot drinks.` },
  { q: 'Can you drop the hot drinks?', a: `Yes: simply remove the thermoses from the quote. The fruit and the juice stay on the menu.` },
  { q: 'How many pastries for a send-off?', a: '2 mini pastries per person (3 up to 10 people), 1 sweet bite, 1 glass of juice. Add 10% if colleagues from other departments may drop in.' },
  { q: 'What about the gift and the collection?', a: 'The breakfast budget is divided by the number of guests; the gift is funded separately. The guide to retirement send-offs sets out the calculation.' },
  { q: 'How late can you order?', a: 'Until 10 am the day before, with delivery from 6:30 am; 48 hours ahead from 50 people.' },
]

export const EN_JOURNAL = {
  'maitre-d-hotel-diner-assis-entreprise-combien-prix': {
    titre: 'Maître d\'hôtel for a seated company dinner: how many, what role, what price?',
    metaTitle: 'Maître d\'hôtel for a seated dinner: how many and what price',
    extrait: 'Seated company dinner: 1 maître d\'hôtel per 10 to 25 guests. Ratios by headcount, who does what, €250 excl. VAT for 6 hours at L\'Écrin Traiteur.',
    enBref: [
      'For a seated dinner, L\'Écrin Traiteur plans 1 maître d\'hôtel per 10 to 25 guests, and 1 per 10 to 15 for a meal with several courses.',
      '50 seated guests take 3 to 5 service staff; 100 guests, 4 to 10.',
      `At L'Écrin Traiteur, a maître d'hôtel costs ${eurEn(MH)} excl. VAT for a 6-hour service, set-up and clearing included.`,
      'Service is added to a sharing menu, a cocktail reception or a bespoke reception, on quote.',
    ],
    contenu: `
      <p>For a <strong>seated company dinner</strong>, allow <strong>1 maître d'hôtel per 10 to 25 guests</strong>, and 1 per 10 to 15 if the meal has several plated courses. At L'Écrin Traiteur, a maître d'hôtel costs <strong>${eurEn(MH)} excl. VAT for 6 hours</strong>, set-up and clearing included. Here is how to work out the number of staff and the budget.</p>

      <h2>How many maîtres d'hôtel for a seated dinner?</h2>
      <table>
        <thead><tr><th>Seated guests</th><th>Service staff</th><th>Service budget excl. VAT (${eurEn(MH)} per 6 h)</th><th>Per guest</th></tr></thead>
        <tbody>
          <tr><td><strong>30</strong></td><td>2 to 3</td><td>${eurEn(2 * MH)} to ${eurEn(3 * MH)}</td><td>${eurEn(2 * MH / 30, true)} to ${eurEn(3 * MH / 30, true)}</td></tr>
          <tr><td><strong>50</strong></td><td>3 to 5</td><td>${eurEn(3 * MH)} to ${eurEn(5 * MH)}</td><td>${eurEn(3 * MH / 50, true)} to ${eurEn(5 * MH / 50, true)}</td></tr>
          <tr><td><strong>100</strong></td><td>4 to 10</td><td>${eurEn(4 * MH)} to ${eurEn(10 * MH)}</td><td>${eurEn(4 * MH / 100, true)} to ${eurEn(10 * MH / 100, true)}</td></tr>
        </tbody>
      </table>
      <p>These benchmarks come from caterers and service agencies. They give an order of magnitude that your caterer adjusts to your venue. Always plan at least two people: one serves, the other plates and clears. The guide <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel for a company event</a> sets out the ratios for cocktail receptions and buffets.</p>

      <h2>What changes the number of service staff?</h2>
      <ul>
        <li><strong>The number of courses:</strong> a three-course meal takes more trips than a single dish, hence the range of 1 per 10 to 15.</li>
        <li><strong>The crockery:</strong> hard crockery has to be laid and cleared; disposable crockery lightens the service.</li>
        <li><strong>The service style:</strong> plated, served at table, or sharing dishes do not take the same number of hands.</li>
        <li><strong>The venue:</strong> two floors, a long walk from the kitchen or a single lift all raise the need.</li>
        <li><strong>The duration:</strong> count the set-up before the guests arrive and the clearing after dinner.</li>
      </ul>

      <h2>What does the maître d'hôtel do during the dinner?</h2>
      <ol>
        <li><strong>Before:</strong> checks the set-up, the table plan and the access to the kitchen, then assigns the team.</li>
        <li><strong>During:</strong> keeps the timing between courses, liaises with the kitchen and handles the unexpected (diets, latecomers).</li>
        <li><strong>After:</strong> organises the clearing, the packing up and putting the venue back in order.</li>
      </ol>
      <p>The waiter carries out; the maître d'hôtel coordinates. Many caterers call all their service staff "maître d'hôtel": look at the quote to see what the term covers and how many hours are counted.</p>

      <h2>How much does the service of a seated dinner cost?</h2>
      <p>In Paris, service is generally charged at €30 to €50 an hour, often with a minimum of 3 or 4 hours. At L'Écrin Traiteur, a maître d'hôtel costs <strong>${eurEn(MH)} excl. VAT for 6 hours</strong>. For 40 guests with 3 service staff, the service comes to ${eurEn(3 * MH)} excl. VAT, that is ${eurEn(3 * MH / 40, true)} excl. VAT per guest, on top of the menu.</p>

      <h2>What can you serve at table with L'Écrin Traiteur?</h2>
      <p>Service is added to a <a href="/creations/a-partager">sharing menu</a>, a cocktail reception or a <a href="/creations/receptions-sur-mesure">bespoke reception</a>. State in your <a href="/devis">quote request</a> the number of guests, the format and the duration: we propose the right number of maîtres d'hôtel, within 24 hours.</p>
      ${SIGNATURE_EN}
      <p><em>Ratios: caterers and service agencies (Acteur Fête, Bonnaire Traiteur, Firmin Traiteur, RS Traiteur, MyTraiteur), consulted on 17 October 2026.</em></p>

      <h2>Frequently asked questions about the maître d'hôtel for a seated dinner</h2>
${faqHtmlEn(FAQ_ASSIS)}
    `,
    faq: FAQ_ASSIS,
  },

  'maitre-d-hotel-buffet-entreprise-combien-prix': {
    titre: 'Maître d\'hôtel for a company buffet: how many, what do they do, what budget?',
    metaTitle: 'Maître d\'hôtel for a buffet: how many and what budget',
    extrait: 'Company buffet: 1 maître d\'hôtel per 20 to 40 guests. Budgets for 50, 100 and 150 people, and the breakfast case, at €250 excl. VAT for 6 hours.',
    enBref: [
      'For a standing buffet, L\'Écrin Traiteur plans 1 maître d\'hôtel per 20 to 40 guests, closer to 1 per 30 with a hot buffet and hard crockery.',
      'Breakfast or break: 1 per 50 to 80 guests, and service is not essential for 20 people self-service.',
      `At L'Écrin Traiteur: ${eurEn(MH)} excl. VAT per maître d'hôtel for 6 hours, so ${eurEn(4 * MH)} excl. VAT for 4 maîtres d'hôtel at 100 guests.`,
      'The number is set when you ask for a quote: guests, format, duration, crockery, venue.',
    ],
    contenu: `
      <p>For a <strong>company buffet</strong>, allow <strong>1 maître d'hôtel per 20 to 40 guests</strong>, closer to 1 per 30 with a hot buffet and hard crockery. At L'Écrin Traiteur, a maître d'hôtel costs <strong>${eurEn(MH)} excl. VAT for 6 hours</strong>: 4 maîtres d'hôtel for a buffet of 100 people come to ${eurEn(4 * MH)} excl. VAT.</p>

      <h2>How many maîtres d'hôtel by number of guests?</h2>
      <table>
        <thead><tr><th>Guests</th><th>Maîtres d'hôtel</th><th>Service budget excl. VAT</th><th>Per guest</th></tr></thead>
        <tbody>
          <tr><td><strong>50</strong></td><td>2</td><td>${eurEn(2 * MH)}</td><td>${eurEn(2 * MH / 50, true)}</td></tr>
          <tr><td><strong>100</strong></td><td>3 to 5</td><td>${eurEn(3 * MH)} to ${eurEn(5 * MH)}</td><td>${eurEn(3 * MH / 100, true)} to ${eurEn(5 * MH / 100, true)}</td></tr>
          <tr><td><strong>150</strong></td><td>4 to 7</td><td>${eurEn(4 * MH)} to ${eurEn(7 * MH)}</td><td>${eurEn(4 * MH / 150, true)} to ${eurEn(7 * MH / 150, true)}</td></tr>
        </tbody>
      </table>
      <p>For a dinner cocktail reception, allow 1 maître d'hôtel per 25 to 30 guests; for plain drinks with disposable crockery, 1 per 50 to 80. The detail by format is in <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel for a company event</a>.</p>

      <h2>What does the maître d'hôtel do on a buffet?</h2>
      <ul>
        <li><strong>Sets up</strong> the buffet: laying out the dishes, the platters and the drinks before the guests arrive.</li>
        <li><strong>Restocks</strong> the canapés and the drinks during the service.</li>
        <li><strong>Clears</strong> the plates and glasses, and keeps the table clean.</li>
        <li><strong>Keeps the timing</strong> with the organiser: opening the buffet, desserts, end of service.</li>
        <li><strong>Packs up</strong> and puts the venue back in order at the end.</li>
      </ul>

      <h2>Do you need a maître d'hôtel for a delivered buffet?</h2>
      <p>Not necessarily. A buffet delivered ready to serve, with disposable crockery, can be handled without service staff. A maître d'hôtel earns their place when the buffet runs long, when there are hot dishes or hard crockery, and from around forty guests. Below that, your own team can restock.</p>

      <h2>And for an office breakfast?</h2>
      <p>For a breakfast or a break, the ratio is <strong>1 maître d'hôtel per 50 to 80 guests</strong>, 1 per 50 with hard crockery. For 20 people self-service it is not essential. It becomes useful if you want someone to set up, restock and clear during the morning: say so when you ask for a quote, with the hours of the service, for example 9 am to 10 am. A Classic breakfast for 20 people comes to ${eurEn(cla(20))} excl. VAT including delivery, the full breakfast being quoted on request (see <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">breakfast for 20 people</a>).</p>

      <h2>How much does a maître d'hôtel cost?</h2>
      <p>In Paris, service is generally charged at €30 to €50 an hour, with a minimum of 3 or 4 hours. At L'Écrin Traiteur: <strong>${eurEn(MH)} excl. VAT for 6 hours</strong>, set-up and clearing included. The maîtres d'hôtel are selected and trained by our own house.</p>

      <h2>How do you order?</h2>
      <p>State in your <a href="/devis">quote request</a> the number of guests, the format, the duration including set-up and clearing, the type of crockery and the access to the venue. Service is added to a <a href="/creations/cocktails">cocktail reception</a>, a <a href="/creations/a-partager">sharing buffet</a> or a <a href="/creations/animations-culinaires">live cooking station</a>. For a seated dinner, see <a href="/journal/maitre-d-hotel-diner-assis-entreprise-combien-prix">maître d'hôtel for a seated dinner</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about the maître d'hôtel for a buffet</h2>
${faqHtmlEn(FAQ_BUFFET)}
    `,
    faq: FAQ_BUFFET,
  },

  'petit-dejeuner-presse-accueil-cafe-lancement-produit': {
    titre: 'Press breakfast and coffee welcome: what to serve, what quantities, what budget?',
    metaTitle: 'Press breakfast: what to serve, quantities, budget',
    extrait: `Press welcome or product launch: what to serve, what quantities and what budget for 15, 35 or 45 people (${eurEn(cla(15))} excl. VAT for 15 with the Classic package).`,
    enBref: [
      'For a press breakfast: mini pastries, madeleines, fruit skewers, coffee, tea, juice and water, delivered an hour before the welcome.',
      `Classic package, delivery included: ${eurEn(cla(15))} excl. VAT for 15 people, ${eurEn(cla(35))} excl. VAT for 35, ${eurEn(cla(45))} excl. VAT for 45; the full breakfast is quoted on request.`,
      'Cups, napkins, sugar and stirrers are included; reusable cups and glasses on quote.',
      'Order until 10 am the day before, delivery from 6:30 am; 48 hours ahead from 50 people.',
    ],
    contenu: `
      <p>For a <strong>press breakfast</strong> or a coffee welcome at a product launch, serve small sweet bites that can be eaten standing, with coffee, tea, juice and water, delivered an hour before people arrive. With the Classic package, the budget is <strong>${eurEn(cla(15))} excl. VAT for 15 people</strong>, <strong>${eurEn(cla(35))} excl. VAT for 35</strong> and <strong>${eurEn(cla(45))} excl. VAT for 45</strong>, delivery included; the full breakfast is quoted on request.</p>

      <h2>What should you serve at a press welcome?</h2>
      <ul>
        <li><strong>Pure butter mini pastries:</strong> 2 per person, eaten in two bites, with no plate and no knife.</li>
        <li><strong>Madeleines and loaf cakes:</strong> to vary the flavours, without crumbs on the journalists' notebooks.</li>
        <li><strong>Fresh fruit skewers:</strong> vegan and gluten-free, they cover the dietary requirements.</li>
        <li><strong>Coffee, tea, juice and water:</strong> one 1-litre thermos per 6 people, one glass of juice per person.</li>
      </ul>
      <p>A press welcome turns on the care of the presentation and on punctuality: everything must be ready before the first guest arrives.</p>

      <h2>How much should you order for 15, 35 or 45 people?</h2>
      <table>
        <thead><tr><th>People</th><th>Mini pastries</th><th>Madeleines and loaf cakes</th><th>Juice</th><th>Thermoses</th><th>Classic package excl. VAT, delivery included</th></tr></thead>
        <tbody>
${[P15, P35, P45].map((r) => `          <tr><td><strong>${r.n}</strong></td><td>${r.vienn}</td><td>${r.madPieces}${r.cakes ? ` + ${r.cakes} loaf cake${r.cakes > 1 ? 's' : ''}` : ''}</td><td>${r.litres} L</td><td>${r.thermos}</td><td><strong>${eurEn(cla(r.n))}</strong></td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>The quantities are those of the full breakfast, which is quoted on request; the last column gives the budget for the Classic package (pastries, juice, coffee, fruit). Count the confirmed journalists plus the team welcoming them, with a 10% margin. The detail of the quantities is in <a href="/journal/de-quoi-se-compose-petit-dejeuner-entreprise">what goes into an office breakfast</a>.</p>

      <h2>What time should a press welcome be delivered?</h2>
      <p>One hour before the welcome: for a 9:30 am welcome, a delivery at 8:45 am leaves time to lay the table. Delivery starts at 6:30 am, at the time you choose. Give the exact address, the floor and a contact reachable on site.</p>

      <h2>What equipment is included?</h2>
      <p>With a breakfast, napkins, cups, sugar and stirrers are included. For reusable cups and glasses, the crockery is priced on quote, and delivery with collection of the equipment costs €39 excl. VAT in Paris, the 92 and the 94, and the zone price plus €19 excl. VAT elsewhere.</p>

      <h2>How do you order?</h2>
      <p>Build the breakfast in <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a> or ask for a <a href="/devis">quote</a> within 24 hours. Order until 10 am the day before, 48 hours ahead from 50 people. For another reception format, see <a href="/journal/organiser-inauguration-entreprise-deroule-budget-traiteur">organising a corporate inauguration</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about the press breakfast</h2>
${faqHtmlEn(FAQ_PRESSE)}
    `,
    faq: FAQ_PRESSE,
  },

  'restauration-stand-salon-professionnel-lunch-box-plateaux': {
    titre: 'Catering a trade-show stand: lunch boxes, platters and budget per day',
    metaTitle: 'Trade-show stand catering: lunch boxes and daily budget',
    extrait: `Exhibiting at a trade show: 1 lunch box per person per day, from ${eurEn(LB_BAS, true)} to ${eurEn(LB_HAUT, true)} excl. VAT. Budget for 40 people over 4 days.`,
    enBref: [
      'For a trade-show stand: 1 lunch box per person present at lunchtime, plus a 10% margin, delivered every day.',
      `Lunch box: from ${eurEn(LB_BAS, true)} to ${eurEn(LB_HAUT, true)} excl. VAT per person, starter, sandwich, dessert and cutlery included; delivery ${eurEn(LIV)} excl. VAT per day.`,
      `For 40 people: ${eurEn(stand(40, LB_BAS), true)} to ${eurEn(stand(40, LB_HAUT), true)} excl. VAT a day, so ${eurEn(4 * stand(40, LB_BAS), true)} to ${eurEn(4 * stand(40, LB_HAUT), true)} excl. VAT over 4 days.`,
      'Order until 10 am the day before; state the show\'s delivery access.',
    ],
    contenu: `
      <p>To cater a <strong>trade-show stand</strong>, order <strong>1 lunch box per person present at lunchtime</strong>, plus a 10% margin, delivered each day of the show. A lunch box costs <strong>from ${eurEn(LB_BAS, true)} to ${eurEn(LB_HAUT, true)} excl. VAT</strong> (starter, sandwich, dessert, cutlery included), plus ${eurEn(LIV)} excl. VAT delivery. For 40 people, allow ${eurEn(stand(40, LB_BAS), true)} to ${eurEn(stand(40, LB_HAUT), true)} excl. VAT a day.</p>

      <h2>How much does catering a stand cost during a show?</h2>
      <table>
        <thead><tr><th>People on the stand</th><th>Lunch boxes to order</th><th>Budget per day excl. VAT</th><th>Over 4 days excl. VAT</th></tr></thead>
        <tbody>
${[10, 20, 40].map((n) => { const c = Math.ceil(n * 1.1); return `          <tr><td><strong>${n}</strong></td><td>${c}</td><td>${eurEn(stand(c, LB_BAS), true)} to ${eurEn(stand(c, LB_HAUT), true)}</td><td>${eurEn(4 * stand(c, LB_BAS), true)} to ${eurEn(4 * stand(c, LB_HAUT), true)}</td></tr>` }).join('\n')}
        </tbody>
      </table>
      <p>The calculation includes a 10% margin (rounded up) and a delivery of ${eurEn(LIV)} excl. VAT a day. Lunch box prices vary with the package chosen; the detail is on the <a href="/creations/lunch-box">lunch boxes in Paris</a> page.</p>

      <h2>How do you organise deliveries at a trade show?</h2>
      <ol>
        <li><strong>One delivery a day,</strong> at the time you choose from 6:30 am, before the show opens or before lunchtime.</li>
        <li><strong>Delivery access:</strong> ask the organiser for the permitted time slot, the loading bay or access door and the stand name, then give them when ordering.</li>
        <li><strong>A contact reachable on site,</strong> because halls are large and stands hard to find.</li>
        <li><strong>The headcount for each day:</strong> it can vary; state it in the request, adjustable until 10 am the day before.</li>
      </ol>

      <h2>What should you order besides the lunch boxes?</h2>
      <p>To welcome visitors, add one savoury platter and one sweet platter a day: an aperitif platter and some sweet bites, on quote according to the number of visitors expected. For the morning, a team breakfast before opening: <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a>.</p>

      <h2>Do lunch boxes suit every diet?</h2>
      <p>Yes: vegetarian, vegan and gluten-free options are set when ordering, with the number of guests concerned. For allergies, see <a href="/journal/allergenes-traiteur-buffet-plateaux-obligations">allergens: what a caterer must tell you</a>.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours, giving the dates of the show, the headcount per day and the delivery address. Order until 10 am the day before, 48 hours ahead from 50 people. Company invoice with VAT.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about catering a trade-show stand</h2>
${faqHtmlEn(FAQ_SALON)}
    `,
    faq: FAQ_SALON,
  },

  'restauration-journee-formation-entreprise-budget-25-personnes': {
    titre: 'Catering a training day: coffee welcome, lunch and break, with the budget',
    metaTitle: 'Catering a training day: the budget',
    extrait: `Coffee welcome, lunch trays and a sweet break: ${eurEn(F25.une, true)} excl. VAT a day for 25 people, delivery included. Budgets for 12, 25 and 50 people.`,
    enBref: [
      'A training day is catered in three moments: coffee welcome, lunch in trays, sweet break.',
      `For 25 people: ${eurEn(F25.une, true)} excl. VAT a day with one delivery, ${eurEn(F25.trois, true)} excl. VAT with three deliveries.`,
      'Coffee welcome at €8 excl. VAT per person, lunch tray from €28.90 to €30.90 excl. VAT, sweet break from €6 excl. VAT.',
      'Order until 10 am the day before; several training days in a single quote request.',
    ],
    contenu: `
      <p>A <strong>training day</strong> is catered in three moments: a coffee welcome, lunch in lunch trays and a sweet break. For 25 people, allow <strong>${eurEn(F25.une, true)} excl. VAT a day</strong> with a single delivery, or ${eurEn(F25.trois, true)} excl. VAT with three deliveries at different times.</p>

      <h2>How much does catering a training day cost?</h2>
      <p>The calculation takes the coffee welcome as the Classic package at €8 excl. VAT per person, the chicken lunch tray at €29.90 excl. VAT and the sweet break at €6 excl. VAT per person.</p>
      <table>
        <thead><tr><th>People</th><th>Coffee welcome</th><th>Lunch (trays)</th><th>Sweet break</th><th>Total with 1 delivery</th><th>Total with 3 deliveries</th></tr></thead>
        <tbody>
${[[12, F12], [25, F25], [50, F50]].map(([n, f]) => `          <tr><td><strong>${n}</strong></td><td>${eurEn(f.accueil, true)}</td><td>${eurEn(f.dej, true)}</td><td>${eurEn(f.pause, true)}</td><td><strong>${eurEn(f.une, true)}</strong></td><td>${eurEn(f.trois, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>For a 3-day course with 25 people, the budget is three times one day: ${eurEn(3 * F25.une, true)} excl. VAT with one delivery a day. Lunch tray prices run from €28.90 excl. VAT (vegetarian) to €30.90 excl. VAT (salmon): see <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">how many lunch trays to order for a meeting</a>.</p>

      <h2>Do you need three deliveries in the day?</h2>
      <p>Not necessarily. A single morning delivery, with the sweet break kept at room temperature, saves €58 excl. VAT a day. Three deliveries guarantee that everything arrives at the time of each moment: welcome at 8:30 am, lunch at 12:30 pm, break at 3:30 pm. At 50 people or more, allow 48 hours.</p>

      <h2>Which coffee welcome for a training day?</h2>
      <p>The Classic package (pastries, juice, coffee, fruit) at €8 excl. VAT per person suits a full welcome. For something lighter, pastries and coffee come to around €6.50 excl. VAT per person. The quantities are in <a href="/journal/combien-viennoiseries-par-personne">how many mini pastries per person</a>.</p>

      <h2>How do you handle diets and allergies?</h2>
      <p>Ask for the list of dietary requirements at registration: the vegetarian tray at €28.90 excl. VAT, vegan and gluten-free options on request, with the number of guests concerned. Specific allergies (shellfish, courgette, nuts) are flagged when ordering: see <a href="/journal/allergenes-traiteur-buffet-plateaux-obligations">allergens: what a caterer must tell you</a>.</p>

      <h2>How do you order for several days?</h2>
      <p>Make a single <a href="/devis">quote request</a> with the dates, the headcount per day, the address and the delivery times. For the full programme of a day, see <a href="/journal/organiser-seminaire-entreprise-programme-journee-restauration">organising an offsite: the programme of a day with the catering</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about catering a training course</h2>
${faqHtmlEn(FAQ_FORMATION)}
    `,
    faq: FAQ_FORMATION,
  },

  'petit-dejeuner-recurrent-hebdomadaire-entreprise-prix': {
    titre: 'A recurring office breakfast: weekly ordering, price and how it works',
    metaTitle: 'Weekly office breakfast: price and how it works',
    extrait: `A breakfast every week: ${eurEn(R10)} excl. VAT for 10 people, ${eurEn(R20)} excl. VAT for 20, with no commitment. How to set up a team ritual.`,
    enBref: [
      'A recurring breakfast is ordered week by week, with no commitment, with the same quality at every delivery.',
      `Classic package: ${eurEn(R10)} excl. VAT for 10 people and ${eurEn(R20)} excl. VAT for 20 per delivery, €29 excl. VAT delivery included.`,
      `That is ${eurEn(4 * R10)} excl. VAT and ${eurEn(4 * R20)} excl. VAT over four weeks; a preferential rate is possible on quote.`,
      'Order until 10 am the day before, delivery from 6:30 am.',
    ],
    contenu: `
      <p>A <strong>recurring office breakfast</strong> is ordered week by week, <strong>with no commitment</strong>, with the same quality at every delivery. With the Classic package, allow <strong>${eurEn(R10)} excl. VAT per delivery for 10 people</strong> and <strong>${eurEn(R20)} excl. VAT for 20</strong>, €29 excl. VAT delivery included. A preferential rate is possible on quote for regular orders.</p>

      <h2>How much does a breakfast every week cost?</h2>
      <table>
        <thead><tr><th>Headcount</th><th>Per delivery excl. VAT</th><th>Over 4 weeks excl. VAT</th><th>Calculation</th></tr></thead>
        <tbody>
          <tr><td><strong>10 people</strong></td><td>${eurEn(R10)}</td><td>${eurEn(4 * R10)}</td><td>10 × €8 + €29</td></tr>
          <tr><td><strong>20 people</strong></td><td>${eurEn(R20)}</td><td>${eurEn(4 * R20)}</td><td>20 × €8 + €29</td></tr>
          <tr><td><strong>30 people</strong></td><td>${eurEn(30 * 8 + LIV)}</td><td>${eurEn(4 * (30 * 8 + LIV))}</td><td>30 × €8 + €29</td></tr>
        </tbody>
      </table>
      <p>The Classic package includes pastries, juice, coffee and fruit. The full breakfast, on quote, adds more variety: the budget for 20 people is in <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">breakfast for 20 people</a>.</p>

      <h2>How do you set up a recurring breakfast?</h2>
      <ol>
        <li><strong>Choose a day and a time:</strong> delivery starts at 6:30 am, at the hour you set.</li>
        <li><strong>Name a contact on site</strong> and give the exact address, the floor and the access.</li>
        <li><strong>Keep the list of dietary requirements up to date:</strong> vegetarian, vegan, gluten-free, stated with each order.</li>
        <li><strong>Adjust the headcount:</strong> order until 10 am the day before; add 10% if the number of people present varies.</li>
      </ol>

      <h2>Who is a recurring breakfast for?</h2>
      <p>It suits head offices that welcome staff several times a month for training, teams that meet every Monday, and regular client welcomes. It replaces the chore of shopping with a predictable ritual. To vary from week to week, see <a href="/journal/idees-petit-dejeuner-bureau-par-budget">15 office breakfast ideas by budget</a>.</p>

      <h2>How do you ask for a regular rate?</h2>
      <p>Make a <a href="/devis">quote request</a> stating the frequency, the headcount, the day and the address. The preferential rate for regular orders is proposed on quote, within 24 hours. To build a first order, see our <a href="/creations/petits-dejeuners-et-pauses">breakfast delivery to the office</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about the recurring breakfast</h2>
${faqHtmlEn(FAQ_RECURRENT)}
    `,
    faq: FAQ_RECURRENT,
  },

  'pot-de-depart-petit-dejeuner-entreprise-budget': {
    titre: 'A send-off at breakfast: the idea, the quantities and the budget for 12, 20 or 35 people',
    metaTitle: 'Send-off at breakfast: budget and quantities',
    extrait: `A send-off from 10 am to 11 am: ${eurEn(cla(20))} excl. VAT with the Classic package for 20 people, delivery included, the full breakfast on quote. Quantities and a version without hot drinks.`,
    enBref: [
      'A breakfast send-off runs from 10 am to 11 am: pastries, fruit, juice and a hot drink, with no end-of-day drinks.',
      `For 20 people: ${eurEn(cla(20))} excl. VAT with the Classic package, delivery included; the full breakfast is quoted on request, with or without hot drinks.`,
      `For 12 people: ${eurEn(12 * 8 + LIV)} excl. VAT with the Classic package; for 35: ${eurEn(35 * 8 + LIV)} excl. VAT.`,
      'Order until 10 am the day before, delivery from 6:30 am.',
    ],
    contenu: `
      <p>A <strong>send-off at breakfast</strong> most often runs from 10 am to 11 am: pastries, fruit, juice and a hot drink, with no end-of-day drinks party. For 20 people, allow <strong>${eurEn(cla(20))} excl. VAT with the Classic package</strong>, delivery included; the full breakfast is quoted on request.</p>

      <h2>How much does a send-off at breakfast cost?</h2>
      <table>
        <thead><tr><th>People</th><th>Classic package</th><th>Mini pastries in the full breakfast</th><th>Thermoses in the full breakfast</th><th>Full breakfast</th></tr></thead>
        <tbody>
${[[12, D12], [20, D20], [35, D35]].map(([n, r]) => `          <tr><td><strong>${n}</strong></td><td>${eurEn(cla(n))}</td><td>${r.vienn}</td><td>${r.thermos}</td><td>on quote</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Amounts exclude VAT and include the €29 excl. VAT delivery. The Classic package includes pastries, juice, coffee and fruit. The full breakfast, on quote, follows our quantities: 2 mini pastries per person (3 up to 10 people), 1 sweet bite, 1 fruit skewer above 15 people, 1 glass of juice, one 1-litre thermos per 6 people.</p>

      <h2>Why hold a send-off at breakfast?</h2>
      <ul>
        <li><strong>It is simpler:</strong> no end of day to manage, everyone can come.</li>
        <li><strong>It costs less:</strong> ${eurEn(cla(20))} excl. VAT for 20 people with the Classic package, against ${eurEn(cocktailEn(20, FORMULES_EN.invitation).avec, true)} excl. VAT for an 8-canapé cocktail reception with drinks.</li>
        <li><strong>It is sociable:</strong> an hour in mid-morning, with a short speech and a photograph.</li>
      </ul>

      <h2>Can you drop the hot drinks?</h2>
      <p>Yes: simply remove the thermoses from the full breakfast quote. The fruit (vegan, gluten-free skewers) and the juice stay on the menu.</p>

      <h2>What does a send-off from 10 am to 11 am look like?</h2>
      <ol>
        <li><strong>9:30 am:</strong> delivery and setting up the buffet in the chosen room.</li>
        <li><strong>10 am:</strong> colleagues arrive, coffee and pastries.</li>
        <li><strong>10:20 am:</strong> short speech, presentation of the gift.</li>
        <li><strong>10:30 to 11 am:</strong> free time, group photograph, back to work.</li>
      </ol>

      <h2>What about the gift, the collection and the invitation?</h2>
      <p>The breakfast budget is divided by the number of guests, and the gift is funded separately: see <a href="/journal/pot-de-depart-retraite-buffet-budget-cagnotte">retirement send-off: buffet, budget and share of the collection</a>. For other formats, <a href="/journal/organiser-pot-de-depart-entreprise-budget-quantites">organising a company send-off</a> and the <a href="/journal/modeles-invitation-pot-petit-dejeuner-afterwork-entreprise">invitation template to copy</a>.</p>

      <h2>How do you order?</h2>
      <p>Build your breakfast in <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a> or ask for a <a href="/devis">quote</a> within 24 hours. Order until 10 am the day before, delivery from 6:30 am in Paris and the Paris region.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about the send-off at breakfast</h2>
${faqHtmlEn(FAQ_DEPART_PDJ)}
    `,
    faq: FAQ_DEPART_PDJ,
  },
}
