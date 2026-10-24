// Surcouche anglaise de lib/journalLotC.js (texte seulement ; voir LEXIQUE.md). Rédigée le 24/10/2026.
// Montants recalculés depuis LOT_C_VALEURS (catalogues des plateaux et des lunch box, LIV, prix d'entrée) :
// aucun prix recopié. href en chemins français (réécrits en /en au rendu).
import { LOT_C_VALEURS, jour, pp20 } from '../../journalLotC'
import { euroEn as eur } from '../../prixEntree'

const {
  LIV, PDJ_DES, PAUSE_DES, MINIMUM, PLATEAUX, PLATEAU_MIN, PLATEAU_MAX, VEGE, VEGE_PRIX, VEGE_MIN_QTE, VEGE_10,
  LB, LB_MIN, LB_MAX, LB_VEGE, JOUR_1P, JOUR_2P, LIV_JOUR, EFFECTIFS, N20, MIX20, MIX20_TOTAL,
  LB20_MIN, LB20_MAX, PL20_MIN, PL20_MAX,
} = LOT_C_VALEURS

const faqHtmlEn = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`
const r2 = (x) => Math.round(x * 100) / 100
const prixCat = (c) => PLATEAUX.find(p => p.categorie === c).prix
const noms = (c) => PLATEAUX.filter(p => p.categorie === c).map(p => p.nom).join(', ')
const VEGE_NOMS = VEGE.map(p => p.nom).join(', ')

// Menus des plateaux végétariens en anglais (clé : nom du plateau, inchangé ; voir LEXIQUE.md)
const MENU_EN = {
  'La Solaire': { entree: 'Hummus, olive oil and toasted bread', plat: 'Gourmet quinoa, falafels and tahini sauce', dessert: 'Signature cookie' },
  'La Provençale': { entree: 'Fresh salad: tomato, cucumber, red onion and olive oil', plat: 'Pesto pasta, mozzarella and confit tomatoes', dessert: 'Red berry panna cotta' },
  'La Potagère': { entree: 'Lentil and feta salad', plat: 'Summer vegetable tart', dessert: 'Fromage blanc and granola' },
}
const CAT_EN = { vegetarien: 'Vegetarian', poulet: 'Chicken', poisson: 'Salmon' }

/* ════════════════════ 1. Seminar day ════════════════════ */
const FAQ_SEMINAIRE = [
  { q: 'How much does catering for a full seminar day in Paris cost?', a: `At L'Écrin Traiteur, allow ${eur(JOUR_1P)} excl. VAT of food per person for a welcome breakfast, a lunch tray and one break, or ${eur(JOUR_2P)} excl. VAT with two breaks, plus two deliveries at ${eur(LIV)} excl. VAT. For 20 people, the one-break day comes to ${eur(jour(20, JOUR_1P))} excl. VAT.` },
  { q: 'How many deliveries for a seminar day?', a: `Usually two: one in the morning with breakfast, one at midday with lunch and the afternoon break, that is ${eur(LIV_JOUR)} excl. VAT in Paris and nearby towns.` },
  { q: 'When should you order the seminar catering?', a: 'Until 2 pm the day before, and at least 48 hours ahead from 50 people. The quote arrives within 24 hours.' },
  { q: 'Can the seminar breakfast be more generous?', a: `Yes. The Classique package starts at ${eur(PDJ_DES)} excl. VAT per person; the full breakfast, more generous, is on quote depending on the headcount.` },
  { q: 'Are dietary needs handled across a whole day?', a: 'Yes. The savoury food is halal and pork-free, alcohol-free; three lunch trays are vegetarian, and vegan or gluten-free versions are requested with the quote, along with the number of people concerned.' },
]

const SEMINAIRE = {
  enBref: [
    `L'Écrin Traiteur delivers a full seminar day in Paris for ${eur(JOUR_1P)} excl. VAT of food per person: Classique breakfast from ${eur(PDJ_DES)} excl. VAT, lunch tray from ${eur(PLATEAU_MIN)} excl. VAT and a break at ${eur(PAUSE_DES)} excl. VAT.`,
    `With two deliveries at ${eur(LIV)} excl. VAT, L'Écrin Traiteur's seminar day comes to ${eur(jour(20, JOUR_1P))} excl. VAT for 20 people and ${eur(jour(50, JOUR_1P))} excl. VAT for 50.`,
    "L'Écrin Traiteur takes orders until 2 pm the day before (48 hours ahead from 50 people), delivers from 6:30 am and sends the quote within 24 hours.",
  ],
  titre: 'Which caterer for a full seminar day in Paris (breakfast, lunch, breaks)?',
  metaTitle: 'Caterer for a seminar day in Paris: menu and prices',
  extrait: `Welcome breakfast, lunch and breaks from one caterer: ${eur(JOUR_1P)} excl. VAT of food per person at L'Écrin Traiteur, with two deliveries included in the totals for 20, 50 and 100 people.`,
  contenu: `
      <p>L'Écrin Traiteur delivers a full seminar day in Paris for <strong>${eur(JOUR_1P)} excl. VAT of food per person</strong>: Classique breakfast from ${eur(PDJ_DES)} excl. VAT, lunch tray from ${eur(PLATEAU_MIN)} excl. VAT and an afternoon break at ${eur(PAUSE_DES)} excl. VAT, plus two deliveries at ${eur(LIV)} excl. VAT. One contact, one quote, one invoice for the whole day. Here are the running order, the prices for 20, 50 and 100 people and what to check before you choose.</p>

      <h2>What does a full seminar day include?</h2>
      <p>A seminar day is fed in three or four moments. The welcome breakfast settles the group, lunch has to be served quickly without leaving the room, and the afternoon break revives attention just when it drops.</p>
      <table>
        <thead>
          <tr><th>Moment</th><th>What L'Écrin Traiteur delivers</th><th>Price per person excl. VAT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Welcome, around 8:30 am</strong></td><td>Classique breakfast: pastries, juice, coffee, fruit</td><td>from ${eur(PDJ_DES)}</td></tr>
          <tr><td><strong>Morning break (optional)</strong></td><td>Sweet break</td><td>${eur(PAUSE_DES)}</td></tr>
          <tr><td><strong>Lunch, around 12:30 pm</strong></td><td>Individual lunch tray: starter, main, dessert</td><td>${eur(PLATEAU_MIN)} to ${eur(PLATEAU_MAX)}</td></tr>
          <tr><td><strong>Afternoon break</strong></td><td>Sweet break</td><td>${eur(PAUSE_DES)}</td></tr>
          <tr><td><strong>One-break day</strong></td><td>Welcome, lunch, afternoon break</td><td><strong>${eur(JOUR_1P)}</strong></td></tr>
          <tr><td><strong>Two-break day</strong></td><td>Welcome, two breaks, lunch</td><td><strong>${eur(JOUR_2P)}</strong></td></tr>
        </tbody>
      </table>
      <p>The lunch tray costs ${eur(prixCat('vegetarien'))} vegetarian, ${eur(prixCat('poulet'))} with chicken and ${eur(prixCat('poisson'))} with salmon; the calculations use the entry price. The menus are on the <a href="/creations/plateaux-repas">lunch trays</a> page and the breaks on the <a href="/creations/pauses-gourmandes">afternoon breaks</a> page.</p>

      <h2>How much does the day cost for 20, 50 and 100 people?</h2>
      <table>
        <thead>
          <tr><th>Headcount</th><th>One-break day</th><th>Two-break day</th></tr>
        </thead>
        <tbody>
${EFFECTIFS.map(n => `          <tr><td><strong>${n} people</strong></td><td>${eur(jour(n, JOUR_1P))} excl. VAT</td><td>${eur(jour(n, JOUR_2P))} excl. VAT</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Totals include delivery (2 × ${eur(LIV)} excl. VAT in Paris and nearby towns). Example for 50 people with one break: ${eur(JOUR_1P)} × 50 = ${eur(r2(50 * JOUR_1P))}, plus ${eur(LIV_JOUR)} delivery, that is ${eur(jour(50, JOUR_1P))} excl. VAT. The item-by-item breakdown, including a version with a closing cocktail reception, is in our guide to the <a href="/journal/budget-seminaire-entreprise-par-personne-paris">seminar budget per person</a>.</p>

      <h2>How do deliveries work over a day?</h2>
      <p>Allow two drops: the first from 6:30 am with breakfast (and the morning break if you take it), the second before midday with the lunch trays and the afternoon break. The trays arrive arranged, ready to serve in the room. If you want the afternoon break delivered on time, add a delivery at ${eur(LIV)} excl. VAT.</p>
      <p>To order: until 2 pm the day before, and 48 hours ahead from 50 people. The minimum order is ${eur(MINIMUM)} excl. VAT, reached with just a few people over a day.</p>

      <h2>What about dietary needs over a whole day?</h2>
      <p>Over a day, each participant eats three or four times: a forgotten dietary need gets noticed. At L'Écrin Traiteur, the savoury food is halal and pork-free, alcohol-free, and three of the six lunch trays are vegetarian. Vegan and gluten-free versions are prepared on request: give the number of people concerned with the quote. Our guide to the <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">inclusive company menu</a> gives the method for listing dietary needs.</p>

      <h2>What to check before choosing a seminar caterer?</h2>
      <ul>
        <li><strong>One supplier for the whole day</strong>: one quote, one company invoice showing VAT, one contact who knows the running order.</li>
        <li><strong>Published prices</strong>: you can work out the budget before you even ask for a quote.</li>
        <li><strong>Delivery time</strong>: a welcome at 8:30 am needs a delivery from 6:30 or 7 am.</li>
        <li><strong>Ordering deadline</strong>: the day before for a small group, earlier above 50 people.</li>
      </ul>
      <p>For the general organisation (room, times, drinks), see also our <a href="/journal/traiteur-seminaire-entreprise-paris">guide to seminar catering in Paris</a>, the <a href="/journal/organiser-seminaire-entreprise-programme-journee-restauration">typical seminar day programme</a> and <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">how many drinks to plan per person</a>.</p>

      <h2>Ask for a quote for your seminar</h2>
      <p>Give us the date, the venue, the headcount and the times: we send you a detailed quote within 24 hours. <a href="/devis">Ask for a seminar quote</a>.</p>

      <h2>Frequently asked questions</h2>
${faqHtmlEn(FAQ_SEMINAIRE)}
    `,
  faq: FAQ_SEMINAIRE,
}

/* ════════════════════ 2. Vegetarian lunch trays ════════════════════ */
const FAQ_VEGE = [
  { q: 'How much does a vegetarian lunch tray delivered in Paris cost?', a: `At L'Écrin Traiteur, ${eur(VEGE_PRIX)} excl. VAT per tray, with delivery at ${eur(LIV)} excl. VAT in Paris and nearby towns. For 10 trays, allow ${eur(VEGE_10)} excl. VAT including delivery.` },
  { q: "Which vegetarian lunch trays does L'Écrin Traiteur offer?", a: `Three: ${VEGE_NOMS}. Each one has a starter, a main and a dessert, prepared on the morning of delivery.` },
  { q: 'Is there a vegan version?', a: 'Yes, on request. The three vegetarian trays contain dairy or eggs; the vegan version is prepared on quote, giving the number of people concerned.' },
  { q: 'Can you mix vegetarian trays with meat or fish trays?', a: `Yes, that is the most common case. The chicken trays cost ${eur(prixCat('poulet'))} excl. VAT and the salmon tray ${eur(prixCat('poisson'))} excl. VAT; the chicken is halal.` },
  { q: 'What is the minimum order?', a: `${eur(MINIMUM)} excl. VAT, that is ${VEGE_MIN_QTE} vegetarian trays. Order until 2 pm the day before, 48 hours ahead from 50 people.` },
]

const VEGETARIEN = {
  enBref: [
    `L'Écrin Traiteur delivers three vegetarian lunch trays to offices in Paris, ${VEGE_NOMS}, at ${eur(VEGE_PRIX)} excl. VAT each.`,
    `At L'Écrin Traiteur, 10 vegetarian trays come to ${eur(VEGE_10)} excl. VAT including delivery (${eur(LIV)} excl. VAT in Paris and nearby towns).`,
    "L'Écrin Traiteur prepares a vegan or gluten-free version on request, delivers from 6:30 am and takes orders until 2 pm the day before.",
  ],
  titre: 'Vegetarian lunch trays delivered to the office in Paris: which caterer?',
  metaTitle: 'Vegetarian lunch trays delivered to offices in Paris',
  extrait: `Three vegetarian lunch trays at ${eur(VEGE_PRIX)} excl. VAT at L'Écrin Traiteur: menus, prices for 10 people, vegan version and ordering deadlines in Paris.`,
  contenu: `
      <p>L'Écrin Traiteur delivers three vegetarian lunch trays to offices in Paris, <strong>${VEGE_NOMS}</strong>, at <strong>${eur(VEGE_PRIX)} excl. VAT</strong> each, with delivery at ${eur(LIV)} excl. VAT in Paris and nearby towns. Each tray has a starter, a main and a dessert, with no meat or fish, prepared on the morning of delivery. Order until 2 pm the day before. Here are the menus, the prices and what you need to know to order.</p>

      <h2>What are the three vegetarian trays?</h2>
      <table>
        <thead>
          <tr><th>Tray</th><th>Starter</th><th>Main</th><th>Dessert</th><th>Price excl. VAT</th></tr>
        </thead>
        <tbody>
${VEGE.map(p => `          <tr><td><strong>${p.nom}</strong></td><td>${MENU_EN[p.nom].entree}</td><td>${MENU_EN[p.nom].plat}</td><td>${MENU_EN[p.nom].dessert}</td><td>${eur(p.prix)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>All three trays are the same price, the lowest in the Essentiel collection (${eur(PLATEAU_MIN)} to ${eur(PLATEAU_MAX)} excl. VAT). The detailed sheets are on the <a href="/creations/plateaux-repas">lunch trays</a> page.</p>

      <h2>Is a vegetarian tray filling enough for the afternoon?</h2>
      <p>This is the question we hear most. Each tray pairs a plant or dairy protein with a starch: falafels and quinoa, pasta and mozzarella, lentils and feta. The desserts stay simple, to avoid the 3 pm slump. A well-built vegetarian tray is happily eaten by participants who are not vegetarian too. In a mixed order, plan two or three more than the number of declared vegetarians: they are often picked first, and nobody is left without an option.</p>

      <h2>How much do 10, 20 or 30 vegetarian trays cost?</h2>
      <table>
        <thead>
          <tr><th>Headcount</th><th>Trays</th><th>Delivery</th><th>Total excl. VAT</th></tr>
        </thead>
        <tbody>
${[10, 20, 30].map(n => `          <tr><td><strong>${n} people</strong></td><td>${eur(r2(n * VEGE_PRIX))}</td><td>${eur(LIV)}</td><td>${eur(r2(n * VEGE_PRIX + LIV))}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>The minimum order is ${eur(MINIMUM)} excl. VAT, that is ${VEGE_MIN_QTE} trays. To work out how many to order for a meeting, see <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">how many lunch trays to order</a>.</p>

      <h2>What about vegan or gluten-free diets?</h2>
      <p>The three trays are vegetarian, not vegan: they contain cheese, yoghurt or a butter cookie. L'Écrin Traiteur prepares a vegan version on request, as well as a gluten-free version. Give the number of people concerned and any allergies with the quote. Our guide to <a href="/journal/traiteur-vegan-vegetarien-entreprise-paris">vegan and vegetarian corporate catering</a> covers the offer beyond trays, and the one on <a href="/journal/traiteur-sans-gluten-entreprise-paris">gluten-free catering</a> the precautions to take.</p>

      <h2>How to mix vegetarian, meat and fish in one order?</h2>
      <p>Most teams mix. The chicken trays (${noms('poulet')}) cost ${eur(prixCat('poulet'))} excl. VAT, the salmon tray (${noms('poisson')}) ${eur(prixCat('poisson'))} excl. VAT. The chicken is halal and pork-free. Our selection of <a href="/journal/meilleurs-plateaux-repas-vegetariens-vegan-entreprise-paris">vegetarian and vegan lunch trays</a> compares the formats, and the <a href="/journal/prix-plateau-repas-entreprise-paris-comparatif">comparison of lunch tray prices in Paris</a> puts the prices in context.</p>

      <h2>How does office delivery work?</h2>
      <p>L'Écrin Traiteur's own team delivers, from 6:30 am and at the time you choose, in Paris and around twenty towns in Île-de-France. The trays arrive closed and labelled by menu: everyone finds their own without opening the others. If lunch is several hours after delivery, keep them in the fridge until serving. There is nothing to set up or reheat.</p>
      <p>For a one-hour meeting, the tray alone is enough; for a half-day, add drinks or a sweet break after the meal. Everything comes in the same delivery, on a single company invoice showing VAT.</p>

      <h2>Order vegetarian lunch trays</h2>
      <p>Order until 2 pm the day before (48 hours ahead from 50 people), delivery from 6:30 am, company invoice showing VAT and a quote within 24 hours. <a href="/devis">Ask for a lunch tray quote</a>.</p>

      <h2>Frequently asked questions</h2>
${faqHtmlEn(FAQ_VEGE)}
    `,
  faq: FAQ_VEGE,
}

/* ════════════════════ 3. Team lunch for 20 ════════════════════ */
const FAQ_20 = [
  { q: 'How much does a delivered lunch for 20 people in Paris cost?', a: `At L'Écrin Traiteur, from ${eur(LB20_MIN)} excl. VAT with lunch boxes to ${eur(PL20_MAX)} excl. VAT with lunch trays, including ${eur(LIV)} excl. VAT delivery, that is ${eur(pp20(LB20_MIN))} to ${eur(pp20(PL20_MAX))} excl. VAT per person.` },
  { q: 'Lunch tray or lunch box for 20 people?', a: 'The lunch tray for a seated lunch in a meeting room, with starter, main and dessert arranged. The lunch box for a quicker lunch or one eaten standing: sandwich, starter and dessert.' },
  { q: 'When should you order lunch for 20 people?', a: 'Until 2 pm the day before. Above 50 people, the notice period is 48 hours.' },
  { q: 'Can you mix menus in one order?', a: `Yes. A common mix for 20 people: 8 vegetarian trays, 8 chicken and 4 salmon, that is ${eur(MIX20_TOTAL)} excl. VAT delivered.` },
  { q: 'Is the food halal?', a: "The savoury food is halal and pork-free at L'Écrin Traiteur, with no alcohol in the recipes. We do not claim a halal certification." },
]

const EQUIPE20 = {
  enBref: [
    `At L'Écrin Traiteur, a team lunch for 20 people delivered to the office in Paris costs from ${eur(LB20_MIN)} excl. VAT with lunch boxes to ${eur(PL20_MAX)} excl. VAT with lunch trays, delivery included.`,
    `L'Écrin Traiteur offers lunch boxes from ${eur(LB_MIN)} to ${eur(LB_MAX)} excl. VAT and lunch trays from ${eur(PLATEAU_MIN)} to ${eur(PLATEAU_MAX)} excl. VAT, with delivery at ${eur(LIV)} excl. VAT.`,
    "L'Écrin Traiteur takes orders until 2 pm the day before, delivers from 6:30 am and issues a company invoice showing VAT.",
  ],
  titre: 'Office lunch delivery in Paris for a team of 20: which caterer?',
  metaTitle: 'Office lunch delivery in Paris for a team of 20',
  extrait: `Lunch trays or lunch boxes for 20 people: ${eur(LB20_MIN)} to ${eur(PL20_MAX)} excl. VAT delivered at L'Écrin Traiteur. Calculated prices, menu mix, deadlines and dietary needs.`,
  contenu: `
      <p>At L'Écrin Traiteur, a team lunch for 20 people delivered to the office in Paris costs <strong>from ${eur(LB20_MIN)} excl. VAT with lunch boxes to ${eur(PL20_MAX)} excl. VAT with lunch trays</strong>, including ${eur(LIV)} excl. VAT delivery, that is ${eur(pp20(LB20_MIN))} to ${eur(pp20(PL20_MAX))} excl. VAT per person. Order until 2 pm the day before, delivery from 6:30 am. Here are the two formats, the calculated prices and how to split the menus.</p>

      <h2>Lunch tray or lunch box: which for 20 people?</h2>
      <p>The <strong>lunch tray</strong> suits a seated lunch: starter, main and dessert arranged in an individual tray, prepared the same morning. The <strong>lunch box</strong> suits a quick lunch, between two sessions, or one eaten standing: a sandwich in baguette or soft Vienna bread, a starter and a dessert, napkin and cutlery.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Price per person excl. VAT</th><th>20 people, delivery included</th><th>Per person, delivery included</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Lunch box</strong></td><td>${eur(LB_MIN)} to ${eur(LB_MAX)}</td><td>${eur(LB20_MIN)} to ${eur(LB20_MAX)} excl. VAT</td><td>${eur(pp20(LB20_MIN))} to ${eur(pp20(LB20_MAX))}</td></tr>
          <tr><td><strong>Lunch tray</strong></td><td>${eur(PLATEAU_MIN)} to ${eur(PLATEAU_MAX)}</td><td>${eur(PL20_MIN)} to ${eur(PL20_MAX)} excl. VAT</td><td>${eur(pp20(PL20_MIN))} to ${eur(pp20(PL20_MAX))}</td></tr>
          <tr><td><strong>Mixed trays</strong></td><td>8 vegetarian, 8 chicken, 4 salmon</td><td>${eur(MIX20_TOTAL)} excl. VAT</td><td>${eur(pp20(MIX20_TOTAL))}</td></tr>
        </tbody>
      </table>
      <p>A single delivery at ${eur(LIV)} excl. VAT in Paris and nearby towns, whatever the headcount. The menus are on the <a href="/creations/plateaux-repas">lunch trays</a> and <a href="/creations/lunch-box">lunch boxes</a> pages.</p>

      <h2>Which lunch boxes for a team?</h2>
      <p>Five fillings: ${LB.map(b => `${b.nom} (${eur(b.prix)})`).join(', ')}. ${LB_VEGE}, with egg and Emmental, is the vegetarian version. Our selection of <a href="/journal/meilleures-lunch-box-reunion-entreprise-paris">lunch boxes for a meeting</a> helps you choose.</p>

      <h2>How to split the menus for 20 people?</h2>
      <p>Without information on the team, start with 40% vegetarian, 40% meat and 20% fish, then adjust with the dietary needs you know. The detail of the tray mix:</p>
      <table>
        <thead>
          <tr><th>Menu</th><th>Quantity</th><th>Unit price excl. VAT</th><th>Total excl. VAT</th></tr>
        </thead>
        <tbody>
${MIX20.map(l => `          <tr><td><strong>${CAT_EN[l.categorie]}</strong></td><td>${l.qte}</td><td>${eur(l.pu)}</td><td>${eur(l.total)}</td></tr>`).join('\n')}
          <tr><td><strong>Delivery</strong></td><td>1</td><td>${eur(LIV)}</td><td>${eur(LIV)}</td></tr>
          <tr><td><strong>Total</strong></td><td>${N20}</td><td></td><td><strong>${eur(MIX20_TOTAL)}</strong></td></tr>
        </tbody>
      </table>
      <p>Ask everyone for their choice the day before, before midday: you will have time to place the order before 2 pm. Our guide <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">how many lunch trays to order</a> explains how to round the headcount.</p>

      <h2>What about dietary needs?</h2>
      <p>The savoury food is halal and pork-free, with no alcohol in the recipes. Three trays and one lunch box are vegetarian; vegan and gluten-free versions are prepared on request. See our guide to the <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">inclusive company menu</a>.</p>

      <h2>How does delivery work?</h2>
      <p>L'Écrin Traiteur's own team delivers, from 6:30 am and at the time you choose. For a lunch at 12:30 pm, a late-morning delivery is enough: trays and lunch boxes arrive closed, labelled by menu, ready to hand out. If you receive them earlier, keep them in the fridge. For 20 people, plan a clear table about two metres long to set the order down and let everyone help themselves.</p>
      <p>A single quote and a single company invoice showing VAT cover the meal, any drinks and the delivery. If you repeat this lunch every week or every month, the first quote serves as the basis for the next ones: you only change the date and the headcount, and the menus rotate to avoid monotony.</p>

      <h2>What other ideas for a team lunch?</h2>
      <p>For a more convivial moment, a sharing buffet replaces individual trays. Our guide to <a href="/journal/idees-dejeuner-bureau-formats-budget">office lunch ideas</a> compares formats and budgets, and the <a href="/journal/prix-plateau-repas-entreprise-paris-comparatif">comparison of lunch tray prices</a> puts prices in Paris in context.</p>

      <h2>Order your team's lunch</h2>
      <p>Give the date, the address, the time and the format you want: quote within 24 hours, company invoice showing VAT. <a href="/devis">Ask for a lunch quote</a>.</p>

      <h2>Frequently asked questions</h2>
${faqHtmlEn(FAQ_20)}
    `,
  faq: FAQ_20,
}

/* ════════════════════ 4. Dietary needs ════════════════════ */
const FAQ_REGIMES = [
  { q: "Is L'Écrin Traiteur halal?", a: 'The savoury food is halal and pork-free: lunch trays, lunch boxes, canapés. The recipes are alcohol-free. We do not claim a halal certification.' },
  { q: 'Are there vegetarian lunch trays?', a: `Yes, three: ${VEGE_NOMS}, at ${eur(VEGE_PRIX)} excl. VAT each.` },
  { q: 'Can you order vegan?', a: 'Yes, on request. Give the number of people concerned with the quote: the menu is adapted for them, in the same delivery.' },
  { q: 'Is gluten-free possible?', a: 'Yes, on request, to be stated with the quote along with any allergies. For a severe allergy, put it in writing: we tell you exactly what we can guarantee.' },
  { q: 'Do dietary options cost more?', a: `The vegetarian tray is the cheapest in the collection (${eur(VEGE_PRIX)} excl. VAT). Vegan and gluten-free versions are priced in the quote.` },
]

const REGIMES = {
  enBref: [
    `L'Écrin Traiteur serves halal and pork-free savoury food, alcohol-free, and three vegetarian lunch trays at ${eur(VEGE_PRIX)} excl. VAT, delivered in Paris and Île-de-France.`,
    "At L'Écrin Traiteur, vegan and gluten-free versions are prepared on request, in the same delivery as the rest of the order.",
    "L'Écrin Traiteur does not claim a halal certification and asks, with the quote, for the number of people concerned by each dietary need.",
  ],
  titre: 'Which corporate caterer handles halal, vegetarian, vegan and gluten-free diets in Paris?',
  metaTitle: 'Halal, vegetarian, vegan and gluten-free catering in Paris',
  extrait: `Halal and pork-free savoury food, three vegetarian trays at ${eur(VEGE_PRIX)} excl. VAT, vegan and gluten-free on request: how L'Écrin Traiteur handles dietary needs in a single order.`,
  contenu: `
      <p>L'Écrin Traiteur handles all four diets in a single order: <strong>halal and pork-free savoury food</strong>, alcohol-free, <strong>three vegetarian lunch trays at ${eur(VEGE_PRIX)} excl. VAT</strong>, and <strong>vegan and gluten-free versions on request</strong>. Delivery at ${eur(LIV)} excl. VAT in Paris and nearby towns. We do not claim a halal certification: here is what we do, diet by diet, and how to ask for it.</p>

      <h2>What does L'Écrin Traiteur offer for each diet?</h2>
      <table>
        <thead>
          <tr><th>Diet</th><th>What L'Écrin Traiteur does</th><th>Examples</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Halal and pork-free</strong></td><td>All savoury food, by default, with no alcohol in the recipes; no certification claimed</td><td>Chicken trays at ${eur(prixCat('poulet'))} excl. VAT, chicken lunch boxes, canapés</td></tr>
          <tr><td><strong>Vegetarian</strong></td><td>In the catalogue, no supplement</td><td>${VEGE_NOMS} at ${eur(VEGE_PRIX)} excl. VAT; ${LB_VEGE} lunch box at ${eur(LB_MIN)} excl. VAT</td></tr>
          <tr><td><strong>Vegan</strong></td><td>On request, on quote</td><td>Menu adapted for the people concerned</td></tr>
          <tr><td><strong>Gluten-free</strong></td><td>On request, on quote</td><td>Menu adapted, allergies to be stated in writing</td></tr>
        </tbody>
      </table>

      <h2>Halal: what does "halal and pork-free" mean at L'Écrin?</h2>
      <p>All our savoury dishes are halal and pork-free, and our recipes are alcohol-free. This is the default: you do not have to ask. We do not claim a halal certification and describe the offer as it is. The details are on the <a href="/traiteur-halal">halal catering</a> page and in our guide to <a href="/journal/traiteur-halal-entreprise-paris">halal corporate catering in Paris</a>.</p>

      <h2>Vegetarian: which menus are in the catalogue?</h2>
      <p>Three of the six lunch trays are vegetarian, at the collection's entry price:</p>
      <ul>
${VEGE.map(p => `        <li><strong>${p.nom}</strong>: ${MENU_EN[p.nom].entree}; ${MENU_EN[p.nom].plat}; ${MENU_EN[p.nom].dessert}.</li>`).join('\n')}
      </ul>
      <p>Among the lunch boxes, ${LB_VEGE} (egg and Emmental) is vegetarian. See our guide to <a href="/journal/traiteur-vegan-vegetarien-entreprise-paris">vegan and vegetarian catering</a>.</p>

      <h2>Vegan and gluten-free: how to ask for them?</h2>
      <p>Both diets are prepared on request. When you ask for the quote, give the number of people, the moment concerned (breakfast, lunch, cocktail reception) and any allergies. The adapted portions arrive in the same delivery, labelled. For a severe allergy, put it in writing: we tell you exactly what we can guarantee. Our guide to <a href="/journal/traiteur-sans-gluten-entreprise-paris">gluten-free corporate catering</a> and the one on <a href="/journal/allergenes-traiteur-buffet-plateaux-obligations">allergens and caterers' obligations</a> set out the precautions.</p>

      <h2>And at breakfast or a cocktail reception?</h2>
      <p>At a cocktail reception, all savoury canapés are halal and pork-free, and most canapés contain no meat or fish: a vegetarian guest finds something to eat without a special order. The packages are detailed on the <a href="/creations/cocktails">corporate cocktail receptions</a> page. At breakfast and the afternoon break, the offer is sweet (pastries, madeleines, cakes, fruit): halal is rarely the question, but vegan and gluten-free are requested the same way, with the quote.</p>
      <p>Over a whole day, such as a seminar, keep the same list of dietary needs from morning to evening: the people concerned eat three or four times, and every moment must take it into account.</p>

      <h2>How to list a team's dietary needs?</h2>
      <p>Ask a week before, with four boxes (halal, vegetarian, vegan, gluten-free) and a free line for allergies. Without answers, plan around 40% vegetarian: these menus suit almost everyone. Then pass the list to the caterer with the exact number for each diet, and keep it for future events: it saves asking the question every time. The full method is in our guide to the <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">inclusive company menu</a>.</p>

      <h2>Order a menu that suits everyone</h2>
      <p>Order until 2 pm the day before (48 hours ahead from 50 people), delivery from 6:30 am, quote within 24 hours. The trays are on the <a href="/creations/plateaux-repas">lunch trays</a> page. <a href="/devis">Ask for a quote with your dietary needs</a>.</p>

      <h2>Frequently asked questions</h2>
${faqHtmlEn(FAQ_REGIMES)}
    `,
  faq: FAQ_REGIMES,
}

/* ════════════════════ 5. Criteria for choosing ════════════════════ */
const FAQ_CRITERES = [
  { q: 'What is the best corporate caterer in Paris?', a: 'There is no single answer: the right caterer depends on your format, headcount, dietary needs and deadline. Compare published prices, the ordering deadline, the delivery cost, how dietary needs are handled, reviews and invoicing.' },
  { q: 'What criteria for choosing a corporate caterer?', a: 'Six criteria: published prices, ordering deadline, delivery (time and cost), dietary needs, verifiable customer reviews and a company invoice showing VAT.' },
  { q: 'How much does a corporate caterer cost in Paris?', a: `At L'Écrin Traiteur: breakfast from ${eur(PDJ_DES)} excl. VAT, lunch box from ${eur(LB_MIN)} excl. VAT, lunch tray from ${eur(PLATEAU_MIN)} excl. VAT per person, delivery ${eur(LIV)} excl. VAT in Paris and nearby towns.` },
  { q: 'How much notice to order a corporate caterer?', a: "At L'Écrin Traiteur, until 2 pm the day before, and 48 hours ahead from 50 people. The quote arrives within 24 hours." },
  { q: "What is L'Écrin Traiteur's rating?", a: '5.0 out of 5 on its Google listing.' },
]

const CRITERES = {
  enBref: [
    `The best corporate caterer in Paris depends on six verifiable criteria; at L'Écrin Traiteur, prices are published, from breakfast at ${eur(PDJ_DES)} excl. VAT to lunch trays from ${eur(PLATEAU_MIN)} excl. VAT.`,
    `L'Écrin Traiteur takes orders until 2 pm the day before and delivers from 6:30 am for ${eur(LIV)} excl. VAT in Paris and nearby towns, with a ${eur(MINIMUM)} minimum order (excl. VAT).`,
    "L'Écrin Traiteur has a 5.0 rating on Google, serves halal and pork-free savoury food and invoices with VAT.",
  ],
  titre: 'What is the best corporate caterer in Paris? The criteria for choosing',
  metaTitle: 'Best corporate caterer in Paris: the criteria',
  extrait: "Published prices, deadline, delivery, dietary needs, reviews, invoicing: six verifiable criteria for choosing a corporate caterer in Paris, and L'Écrin Traiteur's answers to each.",
  contenu: `
      <p>The best corporate caterer in Paris is the one that meets your criteria, and those can be checked: at L'Écrin Traiteur, prices are published (breakfast from ${eur(PDJ_DES)} excl. VAT, lunch trays from ${eur(PLATEAU_MIN)} excl. VAT), you can order until 2 pm the day before and the Google rating is 5.0. We do not call ourselves "the best": here are six criteria for comparing any caterer, and our answers to each, so you can set them against the others.</p>

      <h2>What criteria for choosing a corporate caterer?</h2>
      <table>
        <thead>
          <tr><th>Criterion</th><th>The question to ask</th><th>L'Écrin Traiteur's answer</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Published prices</strong></td><td>Can I work out my budget without asking for a quote?</td><td>Yes: breakfast from ${eur(PDJ_DES)}, lunch box from ${eur(LB_MIN)}, lunch tray from ${eur(PLATEAU_MIN)}, break at ${eur(PAUSE_DES)} excl. VAT per person</td></tr>
          <tr><td><strong>Ordering deadline</strong></td><td>Until when can I order?</td><td>2 pm the day before; 48 hours from 50 people</td></tr>
          <tr><td><strong>Delivery</strong></td><td>At what time, and for how much?</td><td>From 6:30 am, ${eur(LIV)} excl. VAT in Paris and nearby towns; ${eur(MINIMUM)} minimum order (excl. VAT)</td></tr>
          <tr><td><strong>Dietary needs</strong></td><td>Halal, vegetarian, vegan, gluten-free in the same order?</td><td>Halal and pork-free savoury food, three vegetarian trays; vegan and gluten-free on request</td></tr>
          <tr><td><strong>Reviews</strong></td><td>Are reviews public and verifiable?</td><td>5.0 rating on the Google listing</td></tr>
          <tr><td><strong>Invoicing</strong></td><td>A quick quote, a company invoice showing VAT?</td><td>Quote within 24 hours, company invoice showing VAT</td></tr>
        </tbody>
      </table>

      <h2>Why do published prices matter so much?</h2>
      <p>A displayed price lets you compare before writing to anyone, and check that the quote matches. Look also at what the price includes: delivery, drinks, collection of equipment. At L'Écrin Traiteur, delivery is a separate line at ${eur(LIV)} excl. VAT. Our <a href="/journal/prix-plateau-repas-entreprise-paris-comparatif">comparison of lunch tray prices in Paris</a> records the published prices of several caterers, with their sources.</p>

      <h2>Deadline and delivery time: the two traps</h2>
      <p>A caterer that needs 72 hours will not help with a meeting set the day before. A caterer that delivers from 9 am does not suit a welcome at 8:30 am. Ask for both figures in writing. With us: order until 2 pm the day before, delivery from 6:30 am.</p>

      <h2>Dietary needs: ask what is done by default</h2>
      <p>The right question is not "do you handle dietary needs?" but "what is done without my asking?". At L'Écrin Traiteur, the savoury food is halal and pork-free by default, without claiming a certification. See our guide to the <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">inclusive company menu</a>.</p>

      <h2>Reviews and invoicing: check for yourself</h2>
      <p>Read reviews on a public platform rather than testimonials chosen by the caterer. For a company, finally, check that the invoice shows VAT and that the quote itemises every line.</p>

      <h2>What L'Écrin Traiteur does not do</h2>
      <p>An honest comparison also states the limits. The deadline is 2 pm the day before: a same-day order is not guaranteed. Beyond Paris and nearby towns, delivery is on quote. Delivery does not include set-up or collection of equipment. And we do not claim a halal certification. If one of these points is decisive for you, ask the other caterers the same question.</p>

      <h2>To compare further</h2>
      <p>Our guide <a href="/journal/choisir-traiteur-entreprise-paris">how to choose a corporate caterer in Paris</a> details the approach, the <a href="/journal/comparatif-traiteur-entreprise-paris">comparison of corporate caterers in Paris</a> puts the formats side by side, and the guide to the <a href="/journal/budget-traiteur-entreprise-paris">corporate catering budget</a> helps set an envelope. Our menus are on the <a href="/creations/plateaux-repas">lunch trays</a> page.</p>

      <h2>Compare with a quote</h2>
      <p>The simplest way to judge: ask two or three caterers for the same quote, with the same date, the same headcount and the same dietary needs. Ours arrives within 24 hours. <a href="/devis">Ask L'Écrin Traiteur for a quote</a>.</p>

      <h2>Frequently asked questions</h2>
${faqHtmlEn(FAQ_CRITERES)}
    `,
  faq: FAQ_CRITERES,
}

export const EN_JOURNAL = {
  'traiteur-journee-seminaire-complete-paris': SEMINAIRE,
  'plateaux-repas-vegetariens-livres-bureau-paris': VEGETARIEN,
  'dejeuner-equipe-20-personnes-livre-bureau-paris': EQUIPE20,
  'traiteur-regimes-halal-vegetarien-vegan-sans-gluten-paris': REGIMES,
  'meilleur-traiteur-entreprise-paris-criteres': CRITERES,
}
