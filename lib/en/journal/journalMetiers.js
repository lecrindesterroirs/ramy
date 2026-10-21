/*
  Surcouche anglaise de lib/journalMetiers.js (guides « par métier », 19 octobre 2026).
  Texte seulement ; voir LEXIQUE.md. Les montants sont RECALCULÉS par pdjEn / cocktailEn
  et par les prix unitaires exportés du fichier français (PX_METIERS) : aucun chiffre recopié.
  Les href restent les chemins français.
*/
import { eurEn, faqHtmlEn, pdjEn, cocktailEn, FORMULES_EN, LIV } from './budget'
import { PX_METIERS as P } from '../../journalMetiers'

const { invitation: INV, reception: REC, celebration: CEL } = FORMULES_EN
const e = eurEn
const SIGNATURE_EN = `<p><em>L'Écrin Traiteur prices, October 2026, in euros excluding VAT. Delivery €29 excl. VAT in Paris and nearby towns. Minimum order €50 excl. VAT.</em></p>`
const cocktailPrices = `${e(INV.prix, true)}, ${e(REC.prix, true)} or ${e(CEL.prix, true)}`

/* ═════════════════════ 1. Law firm ═════════════════════ */
const av10 = pdjEn(10)
const av20 = pdjEn(20)
const avCk = cocktailEn(50, INV)
const avCkRec = cocktailEn(50, REC)
const avPlateaux10 = 10 * P.plateauMin + LIV

const FAQ_AVOCATS = [
  { q: 'How much does a breakfast for a 10-person client meeting cost?', a: `At L'Écrin Traiteur, ${e(10 * P.classique + LIV, true)} excl. VAT for the Classic package (${e(P.classique)} per person excl. VAT plus €29 delivery), or ${e(av10.total, true)} excl. VAT for the full breakfast delivered: 3 mini pastries per person, madeleines, juice and coffee in thermoses.` },
  { q: "Do you need a maître d'hôtel for a law firm breakfast?", a: `For a breakfast served on porcelain, yes: they welcome guests, serve the coffee and restock. It costs ${e(P.mh)} excl. VAT for a 6-hour service, and one is enough for up to about fifty people.` },
  { q: 'How late can you order a working lunch?', a: 'Until 2 pm the day before, with delivery from 6:30 am at the time you choose. From 50 people, you need to order 48 hours ahead.' },
  { q: 'Can the invoice show our purchase order number?', a: 'Yes: give it when you ask for a quote. The invoice is a company invoice showing VAT, and the quote arrives within 24 hours.' },
  { q: 'Is the food halal?', a: 'The savoury dishes are halal and pork-free, and the menu is alcohol-free. We do not claim a halal certification. Vegetarian, vegan and gluten-free options are set out in the quote.' },
]

const AVOCATS = {
  titre: 'Caterer for a law firm in Paris: client breakfasts, working lunches, cocktail receptions',
  metaTitle: 'Law firm caterer in Paris: breakfast and working lunch',
  extrait: `Client breakfast from ${e(P.classique)} per person excl. VAT, lunch trays from ${e(P.plateauMin, true)} to ${e(P.plateauMax, true)} excl. VAT, cocktail reception from ${e(INV.prix, true)} excl. VAT: the formats a law firm uses, and what they cost.`,
  enBref: [
    `L'Écrin Traiteur delivers to law firms in Paris from 6:30 am: Classic breakfast at ${e(P.classique)} per person excl. VAT, full breakfast on quote.`,
    `A full breakfast for 20 people comes to ${e(av20.total, true)} excl. VAT including delivery at L'Écrin Traiteur, and ${e(av20.total + P.mh, true)} excl. VAT with a maître d'hôtel for 6 hours.`,
    `At L'Écrin Traiteur, a working lunch with lunch trays costs ${e(P.plateauMin, true)} to ${e(P.plateauMax, true)} per person excl. VAT, plus €29 excl. VAT delivery.`,
  ],
  faq: FAQ_AVOCATS,
  contenu: `
      <p>For a law firm in Paris, L'Écrin Traiteur delivers three formats: the <strong>client breakfast</strong>, at ${e(P.classique)} per person excl. VAT for the Classic package, the full breakfast being on quote; the <strong>working lunch</strong> with lunch trays, from ${e(P.plateauMin, true)} to ${e(P.plateauMax, true)} excl. VAT; and the <strong>cocktail reception</strong>, from ${e(INV.prix, true)} per person excl. VAT for 8 canapés. Delivery costs €29 excl. VAT in Paris and nearby towns, from 6:30 am, for orders placed until 2 pm the day before.</p>

      <h2>Which format for which moment at the firm?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Price excl. VAT</th></tr></thead>
        <tbody>
          <tr><td><strong>Client meeting at 8 am</strong></td><td>Classic or full breakfast</td><td>${e(P.classique)} per person (Classic), full breakfast on quote</td></tr>
          <tr><td><strong>Hosting partners or a key client</strong></td><td>Full breakfast on porcelain, with a maître d'hôtel</td><td>On quote + ${e(P.mh)} for 6 hours</td></tr>
          <tr><td><strong>Working lunch in the meeting room</strong></td><td>Individual lunch trays</td><td>${e(P.plateauMin, true)} to ${e(P.plateauMax, true)} per tray</td></tr>
          <tr><td><strong>Closing or a meeting that runs over</strong></td><td>Lunch boxes or lunch trays</td><td>from ${e(P.lunchMin, true)} per lunch box</td></tr>
          <tr><td><strong>Client evening, a new partner joining</strong></td><td>Cocktail reception of 8, 12 or 16 canapés</td><td>${cocktailPrices} per person</td></tr>
        </tbody>
      </table>
      <p>Each order adds a €29 excl. VAT delivery in Paris and nearby towns. The minimum order is €50 excl. VAT.</p>

      <h2>Breakfast for the client meeting</h2>
      <p>A client meeting often starts at 8 or 8:30 am. We deliver from 6:30 am, at the time you set: the breakfast is in place before the clients arrive. Quantities follow a simple rule: 2 mini pastries per person (3 up to 10 people), one madeleine, one 20 cl glass of juice and one 1-litre thermos of coffee or tea for 6 people.</p>
      <table>
        <thead><tr><th>Headcount</th><th>Classic, delivery included</th><th>Full breakfast, delivery included</th></tr></thead>
        <tbody>
          <tr><td><strong>10 people</strong></td><td>${e(10 * P.classique + LIV, true)}</td><td>${e(av10.total, true)}</td></tr>
          <tr><td><strong>20 people</strong></td><td>${e(20 * P.classique + LIV, true)}</td><td>${e(av20.total, true)}</td></tr>
        </tbody>
      </table>
      <p>Above 15 people, the full breakfast adds one fresh fruit skewer per person. The details are on the <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a> page.</p>

      <h2>The prestige breakfast, on porcelain</h2>
      <p>To host the partners of another firm, a key client or a board meeting, the food stays the same. What changes is the presentation: pastries laid out on wooden boards, porcelain cups, a tablecloth, and a maître d'hôtel who welcomes guests and serves the coffee.</p>
      <p>At L'Écrin Traiteur, a maître d'hôtel costs <strong>${e(P.mh)} excl. VAT for a 6-hour service</strong>, set-up and clearing included. For 20 people, the full breakfast and the maître d'hôtel come to <strong>${e(av20.total + P.mh, true)} excl. VAT</strong>. The porcelain and table linen come from Options, on quote. One maître d'hôtel is enough for up to about fifty people: see <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel for an event</a> and our guide to the <a href="/journal/petit-dejeuner-prestige-entreprise-paris">prestige breakfast</a>.</p>

      <h2>The working lunch in the meeting room</h2>
      <p>When a meeting runs into lunchtime, the individual lunch tray means nobody has to leave the table: starter, main and dessert on one tray. Our six menus cost ${e(P.plateauMin, true)} excl. VAT for vegetarian, ${e(P.plateauPoulet, true)} excl. VAT for chicken and ${e(P.plateauMax, true)} excl. VAT for fish. For 10 people, allow ${e(avPlateaux10, true)} excl. VAT including delivery with vegetarian trays.</p>
      <p>For something lighter, the lunch box (sandwich, starter and dessert) starts at ${e(P.lunchMin, true)} excl. VAT. The menus are on the <a href="/creations/plateaux-repas">lunch trays</a> and <a href="/creations/lunch-box">lunch boxes</a> pages. A closing with no fixed time is ordered like everything else: until 2 pm the day before.</p>

      <h2>Presentation and discretion</h2>
      <p>Deliveries are made by the L'Écrin Traiteur team. When you order, give us the name of the room, the set-up time and a contact at reception: the order is dropped where it will be served. Wooden boards and porcelain are requested in the quote; without that, the breakfast arrives with cups, napkins, sugar and stirrers.</p>

      <h2>The firm's cocktail reception</h2>
      <p>For a client evening or a new partner joining, the 8-canapé reception (L'Invitation, ${e(INV.prix, true)} per person excl. VAT) suits a two-hour event at the end of the day. For 50 guests, it comes to <strong>${e(avCk.sans, true)} excl. VAT</strong> with juice, water and delivery; with 12 canapés (La Réception), ${e(avCkRec.sans, true)} excl. VAT. The savoury canapés are halal and pork-free, and the menu is alcohol-free; a 0% Chardonnay for the toast adds ${e(avCk.b.coutChard, true)} excl. VAT for 50 people. See the <a href="/creations/cocktails">cocktail reception packages</a> and <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">how many canapés per person</a>.</p>

      <h2>Quote, invoice and purchase order</h2>
      <p>The quote arrives within 24 hours. The invoice is a company invoice showing VAT; if the firm works with purchase orders, give the number when you ask for a quote. Order until 2 pm the day before, 48 hours ahead from 50 people. Prices are on the <a href="/tarifs">prices</a> page; to get started, <a href="/devis">ask for a quote</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions</h2>
${faqHtmlEn(FAQ_AVOCATS)}
    `,
}

/* ═════════════════════ 2. Consulting firm ═════════════════════ */
const co15 = pdjEn(15)
const co30 = pdjEn(30)
const co50 = pdjEn(50)
const coJour = co30.produits / 30 + P.plateauMin + P.gouter
const coAfter = cocktailEn(40, INV)
const coComite12 = 12 * P.plateauMin + LIV
const coComite12Max = 12 * P.plateauMax + LIV

const FAQ_CONSEIL = [
  { q: 'Which consulting firms does L\'Écrin Traiteur deliver to?', a: 'Bain & Company and Sia Partners are among our regular clients, mainly for meeting breakfasts and team mornings. Their cases are described on the client cases page.' },
  { q: 'How much does a team breakfast for 30 people cost?', a: `${e(co30.total, true)} excl. VAT including delivery for the full breakfast, that is ${e(co30.produits / 30, true)} per person excl. VAT excluding delivery. With the Classic package, ${e(30 * P.classique + LIV, true)} excl. VAT.` },
  { q: 'What budget per person for a one-day seminar?', a: `About ${e(coJour, true)} per person excl. VAT excluding delivery for 30 people: full breakfast, vegetarian lunch tray at ${e(P.plateauMin, true)} and afternoon break from ${e(P.gouter)}. Add €29 excl. VAT per delivery.` },
  { q: 'Can we keep the same order from one week to the next?', a: 'Yes: same time, same quantities, without asking for everything again. Just confirm the headcount before 2 pm the day before.' },
  { q: 'How much notice for a breakfast for 50 people?', a: `48 hours from 50 people. The full breakfast for 50 comes to ${e(co50.total, true)} excl. VAT including delivery.` },
]

const CONSEIL = {
  titre: 'Caterer for a consulting firm in Paris: seminars, committees, team breakfasts',
  metaTitle: 'Consulting firm caterer in Paris: seminar, committee',
  extrait: `Team breakfast from ${e(P.classique)} per person excl. VAT, lunch trays for committees, a one-day seminar at around ${e(Math.round(coJour))} per person excl. VAT: the formats a consulting firm uses.`,
  enBref: [
    'L\'Écrin Traiteur regularly delivers to consulting firms in Paris, including Bain & Company and Sia Partners, from 6:30 am.',
    `At L'Écrin Traiteur, a full breakfast for 30 people costs ${e(co30.total, true)} excl. VAT including delivery; the Classic package starts at ${e(P.classique)} per person excl. VAT.`,
    `A seminar day with L'Écrin Traiteur (breakfast, lunch tray, afternoon break) comes to about ${e(coJour, true)} per person excl. VAT, excluding delivery.`,
  ],
  faq: FAQ_CONSEIL,
  contenu: `
      <p>L'Écrin Traiteur delivers to consulting firms in Paris, including <strong>Bain & Company</strong> and <strong>Sia Partners</strong>, both regular clients. The most requested formats: the <strong>team breakfast</strong>, at ${e(P.classique)} per person excl. VAT for the Classic package, the full breakfast being on quote; <strong>lunch trays</strong> for committees, from ${e(P.plateauMin, true)} to ${e(P.plateauMax, true)} excl. VAT; and the <strong>one-day seminar</strong>, at around ${e(coJour, true)} per person excl. VAT excluding delivery.</p>

      <h2>Which format for which moment at the firm?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Price excl. VAT</th></tr></thead>
        <tbody>
          <tr><td><strong>Morning team meeting</strong></td><td>Classic or full breakfast, the same order each time</td><td>${e(P.classique)} per person (Classic), full breakfast on quote</td></tr>
          <tr><td><strong>Steering committee, meeting with the client</strong></td><td>Individual lunch trays</td><td>${e(P.plateauMin, true)} to ${e(P.plateauMax, true)} per tray</td></tr>
          <tr><td><strong>Half-day internal training</strong></td><td>Lunch box</td><td>from ${e(P.lunchMin, true)}</td></tr>
          <tr><td><strong>One-day seminar</strong></td><td>Breakfast, lunch, afternoon break</td><td>about ${e(coJour, true)} per person</td></tr>
          <tr><td><strong>Afterwork, end of an engagement</strong></td><td>L'Invitation cocktail reception, 8 canapés</td><td>${e(INV.prix, true)} per person</td></tr>
        </tbody>
      </table>
      <p>Each delivery costs €29 excl. VAT in Paris and nearby towns. Minimum order: €50 excl. VAT.</p>

      <h2>The weekly team breakfast</h2>
      <p>Bain & Company and Sia Partners regularly entrust us with their meeting breakfasts and team mornings. What a firm expects from a recurring breakfast: the same time, the same quantities, without asking for everything again. We keep the standard order; you just confirm the headcount before 2 pm the day before.</p>
      <table>
        <thead><tr><th>Headcount</th><th>Full breakfast, delivery included</th><th>Per person, excluding delivery</th></tr></thead>
        <tbody>
${[co15, co30, co50].map(r => `          <tr><td><strong>${r.n} people</strong></td><td>${e(r.total, true)}</td><td>${e(r.produits / r.n, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>The full breakfast includes 2 mini pastries per person, madeleines (and a loaf cake above 20 people), a fruit skewer above 15, a glass of juice and a thermos of coffee or tea for 6. From 50 people, the order is placed 48 hours ahead. See the guide to the <a href="/journal/petit-dejeuner-recurrent-hebdomadaire-entreprise-prix">recurring breakfast</a> and the <a href="/univers/cas-clients">client cases</a> page.</p>

      <h2>Lunch trays for a committee</h2>
      <p>A steering committee often meets over lunch, around the table. The individual tray (starter, main, dessert) lets everyone eat without stopping the meeting. For 12 participants, allow ${e(coComite12, true)} to ${e(coComite12Max, true)} excl. VAT including delivery, depending on the menus. Three of our six menus are vegetarian; the savoury dishes are halal and pork-free. See the <a href="/creations/plateaux-repas">lunch trays</a> and <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">how many lunch trays to order</a>.</p>

      <h2>Internal training with lunch boxes</h2>
      <p>For a half-day training session, the lunch box is eaten in the room, without a long break: a sandwich, a starter and a dessert, napkin and cutlery included. It costs ${e(P.lunchMin, true)} to ${e(P.lunchMax, true)} excl. VAT; for 20 participants, allow from ${e(20 * P.lunchMin + LIV, true)} excl. VAT including delivery. See the <a href="/creations/lunch-box">lunch boxes</a> page.</p>

      <h2>The one-day seminar</h2>
      <p>For 30 participants over a day, the budget is built moment by moment:</p>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Per person excl. VAT</th></tr></thead>
        <tbody>
          <tr><td><strong>Welcome</strong></td><td>Full breakfast</td><td>${e(co30.produits / 30, true)}</td></tr>
          <tr><td><strong>Lunch</strong></td><td>Vegetarian lunch tray (or La Réception lunch reception at ${e(REC.prix, true)})</td><td>${e(P.plateauMin, true)}</td></tr>
          <tr><td><strong>Afternoon</strong></td><td>Afternoon break</td><td>from ${e(P.gouter)}</td></tr>
          <tr><td><strong>Total</strong></td><td>Excluding delivery</td><td><strong>${e(coJour, true)}</strong></td></tr>
        </tbody>
      </table>
      <p>Allow €29 excl. VAT per delivery in Paris and nearby towns. The details are in our guides <a href="/journal/budget-seminaire-entreprise-par-personne-paris">seminar budget per person</a> and <a href="/journal/organiser-seminaire-entreprise-programme-journee-restauration">organising seminar catering</a>.</p>

      <h2>The end-of-engagement afterwork</h2>
      <p>For an afterwork, the 8-canapé reception is enough: it is a two-hour event, not a dinner. For 40 people, L'Invitation comes to <strong>${e(coAfter.sans, true)} excl. VAT</strong> with ${coAfter.b.jus} litres of juice, ${coAfter.b.eau} bottles of water and delivery. The menu is alcohol-free; a 0% Chardonnay for the toast adds ${e(coAfter.b.coutChard, true)} excl. VAT. See the <a href="/creations/cocktails">cocktail reception packages</a>.</p>

      <h2>Dietary needs, quote and invoice</h2>
      <p>The savoury dishes are halal and pork-free, at no extra cost; vegetarian, vegan and gluten-free options are set out in the quote (see <a href="/traiteur-halal">halal caterer</a>). The quote arrives within 24 hours and the invoice is a company invoice showing VAT. <a href="/devis">Ask for a quote</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions</h2>
${faqHtmlEn(FAQ_CONSEIL)}
    `,
}

/* ═════════════════════ 3. IT services / tech ═════════════════════ */
const te12 = pdjEn(12)
const teMeet = [30, 60, 100].map(n => cocktailEn(n, INV))
const te60 = teMeet[1]
const teOnb15 = 15 * P.lunchMin + LIV
const teOnb30 = 30 * P.lunchMin + LIV
const teMidi = cocktailEn(25, REC)

const FAQ_TECH = [
  { q: 'Is the food halal and pork-free?', a: 'Yes, all savoury dishes are halal and pork-free by default, at no extra cost, and the menu is alcohol-free. We do not claim a halal certification. Vegetarian, vegan and gluten-free options are set out in the quote.' },
  { q: 'How much does an onboarding lunch for 15 new starters cost?', a: `With lunch boxes, from ${e(teOnb15, true)} excl. VAT including delivery (${e(P.lunchMin, true)} excl. VAT per lunch box, plus €29 excl. VAT delivery). With lunch trays, ${e(P.plateauMin, true)} to ${e(P.plateauMax, true)} per person excl. VAT.` },
  { q: 'How many canapés for a meetup?', a: '8 canapés per person for a two-hour meetup at the end of the day. For longer, or if the meetup replaces dinner, move to 12 or 16 canapés.' },
  { q: 'What budget for a meetup of 60 people?', a: `${e(te60.sans, true)} excl. VAT with L'Invitation (8 canapés), juice, water and delivery included, that is ${e(te60.sans / 60, true)} per person excl. VAT. Order 48 hours ahead from 50 people.` },
  { q: "How do you tell us about the team's dietary needs?", a: 'Give the number of vegetarian, vegan or gluten-free guests when you ask for a quote: their portions are prepared separately.' },
]

const TECH = {
  titre: 'Caterer for an IT services or tech company in Paris: afterworks, onboarding, meetups',
  metaTitle: 'Tech company caterer in Paris: afterwork, meetup',
  extrait: `Lunch boxes from ${e(P.lunchMin, true)} excl. VAT for onboarding, an 8-canapé reception at ${e(INV.prix, true)} excl. VAT for meetups, savoury food halal and pork-free by default: the formats a tech company uses.`,
  enBref: [
    'L\'Écrin Traiteur delivers to IT services and tech companies in Paris from 6:30 am, with savoury food halal and pork-free by default and vegetarian, vegan and gluten-free options on request.',
    `At L'Écrin Traiteur, an onboarding lunch for 15 people with lunch boxes costs from ${e(teOnb15, true)} excl. VAT including delivery.`,
    `A meetup of 60 people with an 8-canapé reception comes to ${e(te60.sans, true)} excl. VAT at L'Écrin Traiteur, with juice, water and delivery.`,
  ],
  faq: FAQ_TECH,
  contenu: `
      <p>For an IT services firm or a tech company in Paris, L'Écrin Traiteur delivers <strong>lunch boxes from ${e(P.lunchMin, true)} excl. VAT</strong> for onboarding days, <strong>8-canapé receptions at ${e(INV.prix, true)} per person excl. VAT</strong> for meetups and afterworks, and <strong>breakfasts from ${e(P.classique)} per person excl. VAT</strong> for sprint kick-offs. All savoury food is halal and pork-free; vegetarian, vegan and gluten-free on request.</p>

      <h2>Which format for which moment?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Price excl. VAT</th></tr></thead>
        <tbody>
          <tr><td><strong>Onboarding, induction day</strong></td><td>Individual lunch box</td><td>${e(P.lunchMin, true)} to ${e(P.lunchMax, true)}</td></tr>
          <tr><td><strong>Sprint kick-off, morning retrospective</strong></td><td>Classic or full breakfast</td><td>${e(P.classique)} per person (Classic), full breakfast on quote</td></tr>
          <tr><td><strong>Lunchtime team meeting, client demo</strong></td><td>Lunch trays</td><td>${e(P.plateauMin, true)} to ${e(P.plateauMax, true)}</td></tr>
          <tr><td><strong>Meetup, afterwork</strong></td><td>L'Invitation cocktail reception, 8 canapés</td><td>${e(INV.prix, true)} per person</td></tr>
          <tr><td><strong>Company party</strong></td><td>La Célébration cocktail reception, 16 canapés</td><td>${e(CEL.prix, true)} per person</td></tr>
        </tbody>
      </table>
      <p>Add €29 excl. VAT delivery in Paris and nearby towns. Minimum order: €50 excl. VAT.</p>

      <h2>Teams with varied diets</h2>
      <p>In a team of 30 or 300 people, there are vegetarians, people who do not eat pork, others who eat halal, and a few intolerances. Our answer: all savoury food is <strong>halal and pork-free by default</strong>, at no extra cost, and the menu is alcohol-free. We do not claim a halal certification. Vegetarian, vegan and gluten-free options are ordered by giving the number of people concerned in the quote. Three of our six lunch trays are vegetarian, and La Fermière is the vegetarian lunch box. See <a href="/traiteur-halal">halal caterer</a> and <a href="/journal/traiteur-vegan-vegetarien-entreprise-paris">vegan and vegetarian caterer</a>.</p>

      <h2>Onboarding with lunch boxes</h2>
      <p>An induction day often moves between two rooms, with presentations that overrun. The lunch box can be eaten on the spot or taken away: a sandwich, a starter, a dessert, napkin and cutlery included. Our lunch boxes cost ${e(P.lunchMin, true)} to ${e(P.lunchMax, true)} excl. VAT.</p>
      <table>
        <thead><tr><th>New starters</th><th>Lunch boxes, delivery included</th></tr></thead>
        <tbody>
          <tr><td><strong>15 people</strong></td><td>from ${e(teOnb15, true)}</td></tr>
          <tr><td><strong>30 people</strong></td><td>from ${e(teOnb30, true)}</td></tr>
        </tbody>
      </table>
      <p>See the <a href="/creations/lunch-box">lunch boxes</a> page and our guide to <a href="/journal/traiteur-rentree-onboarding-entreprise-paris">back-to-work and onboarding</a>.</p>

      <h2>Meetups and afterworks: the 8-canapé reception</h2>
      <p>A meetup usually lasts two hours, after work: 8 canapés per person are enough. L'Invitation includes savoury and sweet canapés, delivered arranged. The drinks are alcohol-free: 1 litre of juice for 4 people and one 75 cl bottle of water for 5.</p>
      <table>
        <thead><tr><th>Guests</th><th>Canapés</th><th>Juice and water</th><th>Total excl. VAT with delivery</th><th>Per person</th></tr></thead>
        <tbody>
${teMeet.map(c => `          <tr><td><strong>${c.n}</strong></td><td>${(c.n * INV.pieces).toLocaleString('en-GB')}</td><td>${c.b.jus} L of juice, ${c.b.eau} bottles of water</td><td>${e(c.sans, true)}</td><td>${e(c.sans / c.n, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>A 0% Chardonnay for the toast is optional. If the meetup replaces dinner, move to 12 or 16 canapés: see <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">how many canapés per person</a>, <a href="/journal/idees-afterwork-entreprise-formats-budget">afterwork ideas</a> and the <a href="/creations/cocktails">cocktail reception packages</a>.</p>

      <h2>The lunchtime demo or team meeting</h2>
      <p>For a meeting at lunchtime, two formats: lunch trays if the team stays seated, a lunch reception if people move around. For 25 people, allow ${e(25 * P.plateauMin + LIV, true)} excl. VAT with vegetarian trays, delivery included, or ${e(teMidi.sans, true)} excl. VAT with La Réception (12 canapés), juice, water and delivery. See the <a href="/creations/plateaux-repas">lunch trays</a>.</p>

      <h2>Sprint breakfasts</h2>
      <p>A sprint kick-off or a morning retrospective often brings together about ten people. For 12 people, the Classic package comes to ${e(12 * P.classique + LIV, true)} excl. VAT and the full breakfast to ${e(te12.total, true)} excl. VAT, delivery included. Delivery starts at 6:30 am. See the <a href="/creations/petits-dejeuners-et-pauses">breakfasts</a>.</p>

      <h2>Ordering</h2>
      <p>Order until 2 pm the day before, 48 hours ahead from 50 people. Quote within 24 hours, company invoice showing VAT. <a href="/devis">Ask for a quote</a> or see the <a href="/tarifs">prices</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions</h2>
${faqHtmlEn(FAQ_TECH)}
    `,
}

/* ═════════════════════ 4. Event agency ═════════════════════ */
const agRows = [100, 200].flatMap(n => [INV, REC, CEL].map(f => cocktailEn(n, f)))
const ag100 = cocktailEn(100, REC)
const ag200 = cocktailEn(200, REC)
const agMh100 = 4
const agMh200 = 7

const FAQ_AGENCE = [
  { q: 'What does L\'Écrin Traiteur deliver to event agencies?', a: `Cocktail receptions of 8, 12 or 16 canapés (${cocktailPrices} per person excl. VAT), live food stations, maîtres d'hôtel at ${e(P.mh)} excl. VAT for 6 hours, and tableware hired from Options, on quote.` },
  { q: 'How much does a cocktail reception for 200 guests cost?', a: `${e(ag200.sans, true)} excl. VAT with La Réception (12 canapés), ${ag200.b.jus} litres of juice, ${ag200.b.eau} bottles of water and delivery in Paris, that is ${e(ag200.sans / 200, true)} per person excl. VAT.` },
  { q: "How many maîtres d'hôtel for 100 standing guests?", a: `Caterers generally plan 3 to 5 maîtres d'hôtel for 100 guests at a cocktail reception. At L'Écrin Traiteur, ${agMh100} maîtres d'hôtel cost ${e(agMh100 * P.mh)} excl. VAT for 6 hours.` },
  { q: 'How much notice for an event of more than 50 people?', a: 'The order must be placed at least 48 hours ahead from 50 people. The quote arrives within 24 hours: send the request two to three weeks before to confirm the menu, the service and the equipment.' },
  { q: 'Are the canapés halal?', a: 'The savoury canapés are halal and pork-free, and the menu is alcohol-free. We do not claim a halal certification. Vegetarian, vegan and gluten-free options are set out in the quote.' },
]

const AGENCE = {
  titre: 'Partner caterer for event agencies in Paris: what we deliver',
  metaTitle: 'Partner caterer for event agencies in Paris',
  extrait: 'Cocktail receptions of 8, 12 or 16 canapés, live food stations, maîtres d\'hôtel, tableware: what L\'Écrin Traiteur delivers to agencies, with a budget for 100 and 200 guests.',
  enBref: [
    `L'Écrin Traiteur offers three cocktail receptions: 8 canapés at ${e(INV.prix, true)}, 12 canapés at ${e(REC.prix, true)} and 16 canapés at ${e(CEL.prix, true)} per person excl. VAT.`,
    `At L'Écrin Traiteur, a 12-canapé reception for 200 guests comes to ${e(ag200.sans, true)} excl. VAT with juice, water and delivery.`,
    `A maître d'hôtel from L'Écrin Traiteur costs ${e(P.mh)} excl. VAT for a 6-hour service; the quote arrives within 24 hours.`,
  ],
  faq: FAQ_AGENCE,
  contenu: `
      <p>L'Écrin Traiteur delivers to event agencies in Paris and Île-de-France: <strong>cocktail receptions of 8, 12 or 16 canapés</strong>, from ${e(INV.prix, true)} to ${e(CEL.prix, true)} per person excl. VAT, <strong>live food stations</strong>, <strong>maîtres d'hôtel at ${e(P.mh)} excl. VAT</strong> for 6 hours and tableware hired from Options. For 100 guests, a 12-canapé reception comes to <strong>${e(ag100.sans, true)} excl. VAT</strong> with juice, water and delivery. The quote arrives within 24 hours.</p>

      <h2>Which format for which moment of the event?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Price excl. VAT</th></tr></thead>
        <tbody>
          <tr><td><strong>Launch, private view, two-hour drinks</strong></td><td>L'Invitation, 8 canapés</td><td>${e(INV.prix, true)} per person</td></tr>
          <tr><td><strong>Conference or trade show at lunchtime</strong></td><td>La Réception, 12 canapés</td><td>${e(REC.prix, true)} per person</td></tr>
          <tr><td><strong>Evening event, standing dinner</strong></td><td>La Célébration, 16 canapés</td><td>${e(CEL.prix, true)} per person</td></tr>
          <tr><td><strong>Morning welcome at a conference</strong></td><td>Classic or full breakfast</td><td>${e(P.classique)} per person (Classic), full breakfast on quote</td></tr>
          <tr><td><strong>Seated team or plenary lunch</strong></td><td>Lunch trays</td><td>${e(P.plateauMin, true)} to ${e(P.plateauMax, true)}</td></tr>
          <tr><td><strong>Highlight of the evening</strong></td><td>Live food station</td><td>on quote</td></tr>
          <tr><td><strong>Service</strong></td><td>Maître d'hôtel</td><td>${e(P.mh)} for 6 hours</td></tr>
        </tbody>
      </table>

      <h2>How much does a cocktail reception for 100 or 200 guests cost?</h2>
      <p>The table counts the canapés, the alcohol-free drinks (1 litre of juice for 4 guests, one 75 cl bottle of water for 5) and one €29 excl. VAT delivery in Paris and nearby towns.</p>
      <table>
        <thead><tr><th>Guests</th><th>Package</th><th>Canapés</th><th>Total excl. VAT</th><th>Per person</th></tr></thead>
        <tbody>
${agRows.map(c => `          <tr><td><strong>${c.n}</strong></td><td>${c.f.nom}, ${c.f.pieces} canapés</td><td>${(c.n * c.f.pieces).toLocaleString('en-GB')}</td><td>${e(c.sans, true)}</td><td>${e(c.sans / c.n, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>For 200 guests, that means ${ag200.b.jus} litres of juice and ${ag200.b.eau} bottles of water. A 0% Chardonnay for the toast (one flute per person) adds ${e(ag100.b.coutChard, true)} excl. VAT for 100 guests and ${e(ag200.b.coutChard, true)} excl. VAT for 200. The details of a reception for 100 people are in our guide <a href="/journal/cocktail-entreprise-100-personnes">corporate cocktail reception for 100 people</a>.</p>

      <h2>Maîtres d'hôtel</h2>
      <p>For a standing reception, caterers generally plan 3 to 5 maîtres d'hôtel for 100 guests and 5 to 8 for 200. At L'Écrin Traiteur, a maître d'hôtel costs ${e(P.mh)} excl. VAT for a 6-hour service, set-up and clearing included: ${agMh100} maîtres d'hôtel for 100 guests come to ${e(agMh100 * P.mh)} excl. VAT, ${agMh200} for 200 guests to ${e(agMh200 * P.mh)} excl. VAT. Our maîtres d'hôtel are selected and trained by our company. The ratios by format are in <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel for an event</a>.</p>

      <h2>Tableware and equipment</h2>
      <p>Tableware, glassware and table linen come from Options; furniture (poseur tables, tables) comes from a partner hire company. Everything is on quote and delivered with the order. We always ask for the number of tables and guests first: we never assume it. See <a href="/journal/location-materiel-reception-entreprise-quantites-prix">hiring reception equipment</a>.</p>

      <h2>Live food stations</h2>
      <p>A station replaces part of the canapés and gives guests a reason to move around: fresh salmon carving, mini burger station, sushi and maki station, fresh juice bar, barista. They are priced on quote and presented on the <a href="/creations/animations-culinaires">live food stations</a> page.</p>

      <h2>Lead times and brief</h2>
      <p>The quote arrives within 24 hours. From 50 people, the order must be placed at least 48 hours ahead; for an event of 100 or 200 guests with service and equipment, send the request two to three weeks before. To price it, we need the date, the venue, the time, the headcount, access conditions for the delivery, an on-site contact and the number of special diets (vegetarian, vegan, gluten-free). The savoury canapés are halal and pork-free, and the menu is alcohol-free.</p>
      <p>Delivery starts at 6:30 am, in Paris and about twenty towns in Île-de-France; it costs €29 excl. VAT in Paris and nearby towns. The invoice is a company invoice showing VAT. See also <a href="/journal/organiser-cocktail-entreprise">organising a corporate cocktail reception</a>, the <a href="/creations/cocktails">cocktail reception packages</a> and <a href="/devis">ask for a quote</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions</h2>
${faqHtmlEn(FAQ_AGENCE)}
    `,
}

export const EN_JOURNAL = {
  'traiteur-cabinet-avocats-paris': AVOCATS,
  'traiteur-cabinet-conseil-paris': CONSEIL,
  'traiteur-entreprise-tech-esn-paris': TECH,
  'traiteur-agence-evenementielle-paris': AGENCE,
}
