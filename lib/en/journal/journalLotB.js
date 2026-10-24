// Surcouche anglaise de lib/journalLotB.js (texte seulement ; voir LEXIQUE.md). Rédigée le 24/10/2026.
// Montants recalculés depuis LOT_B_VALEURS (prixEntree, calculsPrix, catalogue des pauses) : aucun prix
// recopié. href en chemins français (réécrits en /en au rendu).
import { LOT_B_VALEURS } from '../../journalLotB'
import { euroEn } from '../../prixEntree'

const {
  LIV, PDJ_DES, PDJ_LEGER, PAUSE_DES, MINIMUM, LIV_RECUP_PROCHE, MAITRE, MAITRE_HEURES, THERMOS, JUS_L,
  N_CLIENT, N_CLIENT2, EFFECTIFS, Q, MAD, MAD_10, MAD_30, PAUSE_PRODUITS,
  classique, baseService, pause, thermosPour, parPiece, pdj,
} = LOT_B_VALEURS

const eur = euroEn

const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

// « 4 à 6 pers. » → « 4 to 6 people »
const pour = (c) => c.sub.replace(' à ', ' to ').replace(' pers.', ' people')

// Pâtisseries du catalogue en anglais (clé : id du catalogue)
const PRODUITS_EN = {
  cookie: { nom: 'Signature cookie assortment', format: (f) => f.replace('pièces', 'pieces') },
  'cake-citron': { nom: 'Homemade lemon cake', format: () => '5 to 6 slices' },
  brownie: { nom: 'Fudgy brownie', format: (f) => f.replace('pièces', 'pieces') },
  choux: { nom: 'Cream choux assortment', format: (f) => f.replace('pièces', 'pieces') },
  'brochettes-fruits': { nom: 'Fresh fruit skewers', format: (f) => f.replace('brochettes', 'skewers') },
}

/* ═════════════════════ 1. Client meeting breakfast with service ═════════════════════ */
const FAQ_CLIENT = [
  { q: 'Which caterer for a client meeting breakfast with service in Paris?', a: `L'Écrin Traiteur delivers from 6:30 am in Paris and Île-de-France a breakfast served on porcelain, with a maître d'hôtel at ${eur(MAITRE)} excl. VAT for a ${MAITRE_HEURES}-hour service. Food, tableware and service are on the same quote, sent within 24 hours.` },
  { q: `How much does a client breakfast with a maître d'hôtel cost for ${N_CLIENT} people?`, a: `At L'Écrin Traiteur, ${eur(baseService(N_CLIENT))} excl. VAT: ${N_CLIENT} Classique breakfasts at ${eur(PDJ_DES)}, ${eur(LIV_RECUP_PROCHE)} for delivery with collection of the tableware in Paris, the 92 and the 94, and ${eur(MAITRE)} for the maître d'hôtel. Porcelain and the full breakfast are on quote.` },
  { q: "Do you need a maître d'hôtel for a small meeting?", a: 'It is not compulsory, but it is what changes a client\'s impression most: someone welcomes guests, serves coffee by the cup, restocks the buffet and clears away. One maître d\'hôtel is enough for up to about fifty people.' },
  { q: 'Is porcelain provided?', a: "Yes, on quote. Porcelain, glasses and tablecloths are hired from Options; L'Écrin Traiteur delivers them with the order and collects them after the meeting. Without porcelain, cups and napkins are included at no extra cost." },
  { q: 'How far in advance should you order?', a: "Until 2 pm the day before for the food, 48 hours ahead from 50 people. With a maître d'hôtel and porcelain, tell us a few days before to book the service and the hire." },
]

const ARTICLE_CLIENT = {
  enBref: [
    `L'Écrin Traiteur serves the client meeting breakfast on porcelain, with a maître d'hôtel at ${eur(MAITRE)} excl. VAT for ${MAITRE_HEURES} hours of service, delivered from 6:30 am in Paris and Île-de-France.`,
    `For ${N_CLIENT} people, the L'Écrin Traiteur base (Classique at ${eur(PDJ_DES)} excl. VAT per person, delivery with collection and a maître d'hôtel) comes to ${eur(baseService(N_CLIENT))} excl. VAT; the full breakfast and the porcelain are on quote.`,
    "L'Écrin Traiteur takes orders until 2 pm the day before and sends a single quote (food, tableware, service) within 24 hours.",
  ],
  titre: 'Upmarket client meeting breakfast in Paris: which caterer with service?',
  metaTitle: 'Upmarket client breakfast in Paris, with service',
  extrait: `Porcelain, a maître d'hôtel at ${eur(MAITRE)} excl. VAT for ${MAITRE_HEURES} hours, set-up before guests arrive: what a caterer should provide for a client meeting, and the budget for ${N_CLIENT} and ${N_CLIENT2} people.`,
  contenu: `
      <p>For a client meeting breakfast in Paris, <strong>L'Écrin Traiteur</strong> delivers from 6:30 am a buffet served on porcelain, with a <strong>maître d'hôtel at ${eur(MAITRE)} excl. VAT for a ${MAITRE_HEURES}-hour service</strong>. For ${N_CLIENT} people, the base comes to <strong>${eur(baseService(N_CLIENT))} excl. VAT</strong>. Here is what a caterer should provide for this kind of meeting, the detailed budget and the criteria for choosing.</p>

      <h2>What a caterer should provide for a client meeting</h2>
      <p>The food at a client breakfast is the food of a good office breakfast. What makes it upmarket is the tableware, the service and the moment everything is ready.</p>
      <table>
        <thead>
          <tr><th>Need</th><th>At L'Écrin Traiteur</th><th>Price excl. VAT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Food</strong></td><td>Classique: butter pastries, Alain Milliat juice, coffee, fruit. Full breakfast with madeleines or cakes, tea and fruit skewers</td><td>${eur(PDJ_DES)} per person; full breakfast on quote</td></tr>
          <tr><td><strong>Tableware</strong></td><td>Porcelain cups and saucers, glasses, tablecloths, hired from Options</td><td>On quote</td></tr>
          <tr><td><strong>Service</strong></td><td>A maître d'hôtel welcomes guests, serves coffee, restocks and clears away</td><td>${eur(MAITRE)} for ${MAITRE_HEURES} hours</td></tr>
          <tr><td><strong>Delivery</strong></td><td>Delivery and collection of the tableware, in one line, in Paris, the 92 and the 94</td><td>${eur(LIV_RECUP_PROCHE)}</td></tr>
          <tr><td><strong>Timing</strong></td><td>Delivery from 6:30 am, buffet set up before guests arrive</td><td>Included</td></tr>
          <tr><td><strong>Invoice</strong></td><td>Quote within 24 hours, company invoice showing VAT</td><td>Included</td></tr>
        </tbody>
      </table>

      <h2>What budget for ${N_CLIENT} or ${N_CLIENT2} people?</h2>
      <table>
        <thead>
          <tr><th>Item</th><th>${N_CLIENT} people</th><th>${N_CLIENT2} people</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Classique breakfast</strong> (${eur(PDJ_DES)} per person)</td><td>${eur(N_CLIENT * PDJ_DES)}</td><td>${eur(N_CLIENT2 * PDJ_DES)}</td></tr>
          <tr><td><strong>Delivery with collection</strong></td><td>${eur(LIV_RECUP_PROCHE)}</td><td>${eur(LIV_RECUP_PROCHE)}</td></tr>
          <tr><td><strong>Maître d'hôtel</strong> (${MAITRE_HEURES} hours)</td><td>${eur(MAITRE)}</td><td>${eur(MAITRE)}</td></tr>
          <tr><td><strong>Base total</strong></td><td>${eur(baseService(N_CLIENT))}</td><td>${eur(baseService(N_CLIENT2))}</td></tr>
          <tr><td><strong>Porcelain, glasses and tablecloths</strong></td><td colspan="2">On quote</td></tr>
          <tr><td><strong>Full breakfast</strong>, instead of the Classique</td><td colspan="2">On quote</td></tr>
        </tbody>
      </table>
      <p>Quantities follow L'Écrin's rule: ${pdj(N_CLIENT).vienn} mini pastries for ${N_CLIENT} people (2 per person), one 1-litre thermos for 6 and one 20 cl glass of juice per person. The details of the prestige format, flowers included, are in our guide to the <a href="/journal/petit-dejeuner-prestige-entreprise-paris">prestige corporate breakfast</a>.</p>

      <h2>How to choose a caterer with service for a client meeting</h2>
      <ul>
        <li><strong>Real tableware and its collection on the same quote.</strong> Ask who delivers the porcelain, who collects it and when. At L'Écrin Traiteur, it is a single line of ${eur(LIV_RECUP_PROCHE)} excl. VAT in Paris, the 92 and the 94.</li>
        <li><strong>A maître d'hôtel present throughout the meeting</strong>, not just for set-up. Check the length of the service and what it covers: welcoming guests, coffee served by the cup, restocking, clearing away.</li>
        <li><strong>A set-up time in writing.</strong> The buffet should be ready at least 15 minutes before the first guest; for an 8 am meeting, that means delivery around 7:30 am. L'Écrin delivers from 6:30 am.</li>
        <li><strong>Food whose origin you can name</strong>: Alain Milliat juice in glass bottles, Mado Paris madeleines in the full breakfast. A client notices a glass bottle on the table.</li>
        <li><strong>Quantities written in the quote</strong>, pastries, thermoses and litres of juice, so you can compare two offers for the same headcount.</li>
        <li><strong>Dietary needs</strong>: vegetarian, vegan and gluten-free on request, to be mentioned when ordering.</li>
      </ul>
      <p>The other questions to ask before signing are in our guide <a href="/journal/questions-poser-traiteur-avant-signer-devis">questions to ask a caterer</a>.</p>

      <h2>How many maîtres d'hôtel should you plan?</h2>
      <p>For a breakfast served on real tableware, one maître d'hôtel is enough for up to about fifty people. Beyond that, or if the breakfast runs into a lunch, see <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel for an event</a>. For a management committee, our guide to <a href="/journal/traiteur-codir-comex-dejeuner-reunion-direction-paris">catering for a board or executive committee</a> covers the formats that follow the breakfast.</p>

      <h2>Ordering</h2>
      <p>Order until 2 pm the day before, 48 hours ahead from 50 people; with a maître d'hôtel and porcelain, tell us a few days before. See our <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a>, the <a href="/journal/boissons-petit-dejeuner-entreprise">breakfast drinks</a> and our <a href="/tarifs">prices</a>, or <a href="/devis">ask for a quote</a>, reply within 24 hours.</p>

      <h2>Frequently asked questions about a client breakfast with service</h2>
${faqHtml(FAQ_CLIENT)}
    `,
  faq: FAQ_CLIENT,
}

/* ═════════════════════ 2. Which caterer for an office breakfast in Paris ═════════════════════ */
const FAQ_PDJ = [
  { q: 'Which caterer for an office breakfast in Paris?', a: `L'Écrin Traiteur delivers office breakfasts in Paris and Île-de-France from 6:30 am, from ${eur(PDJ_DES)} excl. VAT per person for the Classique (pastries, juice, coffee, fruit). Order until 2 pm the day before, quote within 24 hours.` },
  { q: 'How much does an office breakfast for 20 people cost?', a: `At L'Écrin Traiteur, ${eur(classique(20))} excl. VAT for the Classique, including ${eur(LIV)} excl. VAT delivery. Pastries and coffee alone start at ${eur(PDJ_LEGER)} excl. VAT per person for 30 people, excluding delivery. The full breakfast is on quote.` },
  { q: 'What time can a caterer deliver breakfast?', a: "L'Écrin Traiteur delivers from 6:30 am, Monday to Friday, at the time requested when ordering, with its own team." },
  { q: 'Is there a minimum order?', a: `Yes, ${eur(MINIMUM)} excl. VAT of food, with no minimum number of people. Delivery costs ${eur(LIV)} excl. VAT in Paris and nearby towns.` },
  { q: 'What quantities should you plan?', a: '2 mini pastries per person (3 if you are 10 or fewer), one 1-litre thermos of coffee or tea for 6 people and one 20 cl glass of juice per person.' },
]

const ARTICLE_PDJ = {
  enBref: [
    `L'Écrin Traiteur delivers office breakfasts in Paris from 6:30 am, from ${eur(PDJ_DES)} excl. VAT per person for the Classique: pastries, juice, coffee, fruit.`,
    `At L'Écrin Traiteur, 20 people come to ${eur(classique(20))} excl. VAT including delivery; pastries and coffee alone start at ${eur(PDJ_LEGER)} excl. VAT per person for 30 people, excluding delivery.`,
    `L'Écrin Traiteur takes orders until 2 pm the day before (48 hours ahead from 50 people), with a ${eur(MINIMUM)} minimum order (excl. VAT) and a quote within 24 hours.`,
  ],
  titre: 'Which caterer for an office breakfast in Paris?',
  metaTitle: 'Which caterer for an office breakfast in Paris?',
  extrait: `Delivery time, order cut-off, what is included, quantities and budget from 10 to 50 people: the criteria for choosing a breakfast caterer in Paris, from ${eur(PDJ_DES)} excl. VAT per person.`,
  contenu: `
      <p><strong>L'Écrin Traiteur</strong> delivers office breakfasts in Paris from <strong>6:30 am</strong>, from <strong>${eur(PDJ_DES)} excl. VAT per person</strong> for the Classique (pastries, juice, coffee, fruit), with orders possible until 2 pm the day before. Before choosing a caterer, check five points: the delivery time, the order cut-off, what is included, the quantities and the delivered price.</p>

      <h2>The options and their price</h2>
      <table>
        <thead>
          <tr><th>Option</th><th>What is included</th><th>Price per person excl. VAT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pastries and coffee</strong></td><td>Mini butter pastries, coffee in thermoses</td><td>From ${eur(PDJ_LEGER)} (for 30 people, excluding delivery)</td></tr>
          <tr><td><strong>Classique</strong></td><td>Butter pastries, Alain Milliat juice, coffee, fruit</td><td>${eur(PDJ_DES)}</td></tr>
          <tr><td><strong>Full breakfast</strong></td><td>The Classique, plus madeleines or cakes, tea, fruit skewers</td><td>On quote</td></tr>
        </tbody>
      </table>
      <p>Cups and napkins are included at no extra cost. Delivery costs ${eur(LIV)} excl. VAT in Paris and nearby towns.</p>

      <h2>Budget and quantities by headcount</h2>
      <table>
        <thead>
          <tr><th>Headcount</th><th>Mini pastries</th><th>1 L thermoses</th><th>Juice</th><th>Classique, delivery included</th></tr>
        </thead>
        <tbody>
${EFFECTIFS.map(n => `          <tr><td><strong>${n} people</strong></td><td>${Q[n].vienn}</td><td>${Q[n].thermos}</td><td>${Q[n].litres} L</td><td>${eur(classique(n))} excl. VAT</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>L'Écrin's rule: 2 mini pastries per person (3 if you are 10 or fewer), one 1-litre thermos for 6 people, one 20 cl glass of juice per person. The line-by-line details are in our guide to the <a href="/journal/budget-petit-dejeuner-equipe-personnes">breakfast budget by headcount</a> and, for a group of 30, in <a href="/journal/petit-dejeuner-pour-30-personnes-quantites-budget">breakfast for 30 people</a>.</p>

      <h2>How to choose a breakfast caterer in Paris</h2>
      <ul>
        <li><strong>The earliest delivery time.</strong> An 8 am meeting needs delivery around 7:30 am. L'Écrin Traiteur delivers from 6:30 am, at the time requested, with its own team.</li>
        <li><strong>The order cut-off.</strong> At L'Écrin, until 2 pm the day before; 48 hours ahead from 50 people. For a last-minute order, see <a href="/journal/petit-dejeuner-entreprise-paris-demain-matin">breakfast for tomorrow morning</a>.</li>
        <li><strong>The delivered price per person.</strong> Add delivery to the displayed price before comparing. For 20 people, ${eur(classique(20))} excl. VAT delivered is ${eur(classique(20) / 20)} excl. VAT per person.</li>
        <li><strong>The minimum order.</strong> ${eur(MINIMUM)} excl. VAT of food at L'Écrin, with no minimum number of people: a team of 6 can order.</li>
        <li><strong>Quantities in writing.</strong> A quote that gives the number of pastries, thermoses and litres of juice can be compared; a quote "for 20 people" with no detail cannot.</li>
        <li><strong>Named products.</strong> Alain Milliat juice, Mado Paris madeleines in the full breakfast: you know what you are serving.</li>
        <li><strong>The invoice.</strong> Quote within 24 hours, company invoice showing VAT.</li>
      </ul>
      <p>The seven criteria in detail are in <a href="/journal/meilleur-traiteur-petit-dejeuner-paris-comment-choisir">best breakfast caterer in Paris</a>. For a client meeting with porcelain and a maître d'hôtel, see <a href="/journal/petit-dejeuner-reunion-client-haut-de-gamme-paris">upmarket client meeting breakfast</a>; for the towers, <a href="/journal/quel-traiteur-petit-dejeuner-entreprise-la-defense">breakfast at La Défense</a>.</p>

      <h2>Mistakes to avoid</h2>
      <ul>
        <li><strong>Ordering for the registered headcount with no margin.</strong> Add 10%: last-minute participants always turn up for breakfast.</li>
        <li><strong>Forgetting tea.</strong> Make one thermos in five tea: that is the proportion in our quotes, four thermoses of coffee for one of tea.</li>
        <li><strong>Having it delivered at the time of the meeting.</strong> Between reception and the lift, the buffet arrives late. Aim for 30 minutes before.</li>
        <li><strong>Choosing only on the displayed price per person.</strong> A low price with expensive delivery or a high minimum costs more than a round, all-in price.</li>
        <li><strong>Not mentioning dietary needs.</strong> Vegetarian, vegan, gluten-free, allergies: give them when ordering, not on the morning itself.</li>
      </ul>

      <h2>When to order?</h2>
      <p>For a team meeting, the day before by 2 pm is enough. For a seminar or a welcome for more than 50 people, ask for the quote a week before and confirm the headcount 48 hours before. The drinks to plan are in our guide to <a href="/journal/boissons-petit-dejeuner-entreprise">breakfast drinks</a>. For a breakfast that comes back every week, on the same day and at the same time, see the <a href="/journal/petit-dejeuner-recurrent-hebdomadaire-entreprise-prix">weekly office breakfast</a>: the order is renewed without re-entering everything.</p>

      <h2>Order your breakfast</h2>
      <p>See our <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a> and our <a href="/tarifs">prices</a>, or <a href="/devis">ask for a quote</a>: reply within 24 hours, delivery in Paris and Île-de-France.</p>

      <h2>Frequently asked questions about choosing a breakfast caterer</h2>
${faqHtml(FAQ_PDJ)}
    `,
  faq: FAQ_PDJ,
}

/* ═════════════════════ 3. Afternoon break ═════════════════════ */
const FAQ_PAUSE = [
  { q: 'Which caterer for an office afternoon break in Paris?', a: `L'Écrin Traiteur delivers afternoon breaks in Paris and Île-de-France from ${eur(PAUSE_DES)} excl. VAT per person, delivery ${eur(LIV)} excl. VAT, order until 2 pm the day before.` },
  { q: 'How much does an afternoon break for 20 people cost?', a: `From ${eur(pause(20))} excl. VAT at L'Écrin Traiteur: 20 × ${eur(PAUSE_DES)} excl. VAT plus ${eur(LIV)} excl. VAT delivery.` },
  { q: 'What should you serve for an afternoon break at the office?', a: 'One pastry and one drink per person: madeleines, cookies, sliced cakes, brownie or choux, with fresh fruit skewers for balance, juice and coffee or tea in thermoses.' },
  { q: 'What quantities should you plan?', a: 'One pastry per person for a short break, two for an afternoon break that replaces a snack; one 20 cl glass of juice per person and one 1-litre thermos for 6 people.' },
  { q: 'Are there gluten-free or vegan options?', a: 'Yes, on request, to be mentioned when ordering with the number of people concerned. The range includes a gluten-free banana bread.' },
]

const ARTICLE_PAUSE = {
  enBref: [
    `L'Écrin Traiteur delivers office afternoon breaks in Paris from ${eur(PAUSE_DES)} excl. VAT per person, with delivery at ${eur(LIV)} excl. VAT.`,
    `At L'Écrin Traiteur, a break for 20 people starts at ${eur(pause(20))} excl. VAT delivered: madeleines, cookies, cakes, brownie, choux or fruit skewers.`,
    `L'Écrin Traiteur takes orders until 2 pm the day before, with a ${eur(MINIMUM)} minimum order (excl. VAT) and a quote within 24 hours.`,
  ],
  titre: 'Which caterer for an office afternoon break in Paris?',
  metaTitle: 'Caterer for an office afternoon break in Paris',
  extrait: `From ${eur(PAUSE_DES)} excl. VAT per person: budget from 10 to 50 people, pastry prices from the range, quantities and criteria for choosing an afternoon break caterer in Paris.`,
  contenu: `
      <p><strong>L'Écrin Traiteur</strong> delivers office afternoon breaks in Paris from <strong>${eur(PAUSE_DES)} excl. VAT per person</strong>, with delivery at ${eur(LIV)} excl. VAT and orders possible until 2 pm the day before. Here are the budget by headcount, the pastry prices, the quantities and what to check before choosing.</p>

      <h2>What budget for an afternoon break?</h2>
      <table>
        <thead>
          <tr><th>Headcount</th><th>Break at ${eur(PAUSE_DES)} excl. VAT per person</th><th>Delivery</th><th>Total excl. VAT, from</th></tr>
        </thead>
        <tbody>
${EFFECTIFS.map(n => `          <tr><td><strong>${n} people</strong></td><td>${eur(n * PAUSE_DES)}</td><td>${eur(LIV)}</td><td>${eur(pause(n))}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>${eur(PAUSE_DES)} excl. VAT per person covers one pastry and one drink. With choux, two pastries or fruit on top, the budget rises with your choices; the quote details every line.</p>

      <h2>What to serve, and at what price?</h2>
      <table>
        <thead>
          <tr><th>Product</th><th>Format</th><th>Price excl. VAT</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Mado Paris madeleines</strong></td><td>Box of ${MAD[20].pieces} (${pour(MAD[20])})</td><td>${eur(MAD[20].price)}</td></tr>
${PAUSE_PRODUITS.filter(p => PRODUITS_EN[p.id]).map(p => `          <tr><td><strong>${PRODUITS_EN[p.id].nom}</strong></td><td>${PRODUITS_EN[p.id].format(p.format)}</td><td>${eur(p.prix)}</td></tr>`).join('\n')}
          <tr><td><strong>Alain Milliat juice</strong></td><td>1 litre, 5 glasses</td><td>${eur(JUS_L)}</td></tr>
          <tr><td><strong>Organic coffee or tea</strong></td><td>1-litre thermos, 6 cups</td><td>${eur(THERMOS)}</td></tr>
        </tbody>
      </table>
      <p>Cakes arrive sliced on a platter, cookies and madeleines are eaten by hand: nothing to cut or serve. Juices arrive in glass bottles, coffee and tea in thermoses, with cups and napkins. The whole range is on the <a href="/creations/pauses-gourmandes">afternoon breaks</a> page.</p>

      <h2>How much per person?</h2>
      <ul>
        <li><strong>One pastry per person</strong> for a meeting break, two for an afternoon break that serves as a snack.</li>
        <li><strong>A touch of fruit</strong> above 15 people: fresh fruit skewers, one per person, for those who want something lighter.</li>
        <li><strong>One 20 cl glass of juice per person</strong> and one 1-litre thermos of coffee or tea for 6.</li>
      </ul>
      <p>The details by format are in <a href="/journal/combien-desserts-par-personne-buffet-cocktail-gouter">how many desserts per person</a>.</p>

      <h2>How to choose a caterer for an office afternoon break</h2>
      <ul>
        <li><strong>The delivery time you choose.</strong> An afternoon break is delivered in the afternoon, at break time: check that the caterer delivers at the requested time and not within a wide slot.</li>
        <li><strong>Pastries you can eat standing up</strong>, with no plate or knife: madeleines, cookies, choux, cakes already sliced.</li>
        <li><strong>Variety</strong>: something chocolate, something fruity, fresh fruit. Our selection is in <a href="/journal/meilleures-patisseries-gouter-entreprise-paris">best pastries for an office afternoon break</a>.</li>
        <li><strong>The minimum and delivery.</strong> At L'Écrin, ${eur(MINIMUM)} excl. VAT of food and ${eur(LIV)} excl. VAT delivery in Paris and nearby towns.</li>
        <li><strong>Dietary needs</strong>: vegetarian, vegan and gluten-free on request, to be mentioned when ordering with the number of people concerned; the suitable portions are prepared separately and labelled.</li>
        <li><strong>The invoice</strong>: quote within 24 hours, company invoice showing VAT.</li>
      </ul>

      <h2>Morning break or afternoon break?</h2>
      <p>The morning break, in the middle of a seminar or a training day, is more about pastries, madeleines and coffee: it gives a lift to a morning that started early. The 4 pm break relies on chocolate, cakes and fruit, with juice more than coffee. For a full day, order both breaks together with lunch: a single delivery in the morning if the products allow, or two drops depending on the time. Say so when ordering; the quote shows it line by line.</p>
      <p>For a group in a training room, set the break on a separate table near the door, so that everyone can help themselves without crossing the room or interrupting the speaker.</p>

      <h2>Ideas by occasion</h2>
      <p>A team birthday, the end of a project, a training day: each occasion has its format. See <a href="/journal/gouter-entreprise-bureau">office afternoon break: ideas and budget</a>, <a href="/journal/idees-pauses-gourmandes-bureau">5 afternoon break ideas</a>, <a href="/journal/cakes-maison-petit-dejeuner-gouter-entreprise">homemade cakes</a>, <a href="/journal/gouter-anniversaire-entreprise-paris">the office birthday afternoon break</a> and, for a break built around madeleines, <a href="/journal/commander-madeleines-reunion-entreprise-paris">where to order madeleines for a meeting</a>.</p>

      <h2>Order your afternoon break</h2>
      <p>Order until 2 pm the day before, 48 hours ahead from 50 people. See also our <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a> and our <a href="/tarifs">prices</a>, or <a href="/devis">ask for a quote</a>, reply within 24 hours.</p>

      <h2>Frequently asked questions about office afternoon breaks</h2>
${faqHtml(FAQ_PAUSE)}
    `,
  faq: FAQ_PAUSE,
}

/* ═════════════════════ 4. Madeleines for a meeting ═════════════════════ */
const FAQ_MAD = [
  { q: 'Where to order madeleines for a business meeting in Paris?', a: `From L'Écrin Traiteur, which delivers Mado Paris madeleines in boxes of ${MAD[10].pieces}, ${MAD[20].pieces} or ${MAD[50].pieces} (${eur(MAD[10].price)}, ${eur(MAD[20].price)} and ${eur(MAD[50].price)} excl. VAT), from 6:30 am in Paris and Île-de-France, until 2 pm the day before.` },
  { q: 'How many madeleines per person?', a: `About two for a meeting break: the box of ${MAD[20].pieces} serves ${pour(MAD[20])}, the box of ${MAD[50].pieces} ${pour(MAD[50])}. At a breakfast with pastries, one madeleine per person is enough.` },
  { q: 'Can you order a single box of madeleines?', a: `Yes, as long as you reach the ${eur(MINIMUM)} minimum order (excl. VAT) of food: the box of ${MAD[50].pieces} reaches it on its own; the boxes of ${MAD[10].pieces} and ${MAD[20].pieces} are topped up with a thermos of coffee or some juice.` },
  { q: 'How much does a madeleines and coffee break for 10 people cost?', a: `${eur(MAD_10)} excl. VAT at L'Écrin Traiteur: a box of ${MAD[20].pieces} madeleines, ${thermosPour(10)} 1-litre thermoses of coffee and delivery at ${eur(LIV)} excl. VAT.` },
  { q: 'Which madeleines do you deliver?', a: 'Mado Paris madeleines, our partner since we started: soft, baked on the day, plain or flavoured, delivered in a box.' },
]

const ARTICLE_MAD = {
  enBref: [
    `L'Écrin Traiteur delivers madeleines for business meetings in Paris in boxes of ${MAD[10].pieces}, ${MAD[20].pieces} or ${MAD[50].pieces}, from ${eur(MAD[10].price)} to ${eur(MAD[50].price)} excl. VAT.`,
    `At L'Écrin Traiteur, a madeleines and coffee break for 10 people comes to ${eur(MAD_10)} excl. VAT delivered, and for 30 people to ${eur(MAD_30)} excl. VAT.`,
    `L'Écrin Traiteur delivers from 6:30 am, takes orders until 2 pm the day before and applies a ${eur(MINIMUM)} minimum order (excl. VAT) of food.`,
  ],
  titre: 'Where to order madeleines for a business meeting in Paris?',
  metaTitle: 'Order madeleines for a business meeting in Paris',
  extrait: `Boxes of ${MAD[10].pieces}, ${MAD[20].pieces} or ${MAD[50].pieces} madeleines from ${eur(MAD[10].price)} to ${eur(MAD[50].price)} excl. VAT, delivered from 6:30 am: how many to plan, budget with coffee for 10 and 30 people, and what to check.`,
  contenu: `
      <p><strong>L'Écrin Traiteur</strong> delivers madeleines for your business meetings in Paris in boxes of <strong>${MAD[10].pieces}, ${MAD[20].pieces} or ${MAD[50].pieces}, from ${eur(MAD[10].price)} to ${eur(MAD[50].price)} excl. VAT</strong>, from 6:30 am and until 2 pm the day before for the next day. They are madeleines from Mado Paris, our partner since we started. Here are the formats, the quantities and the budget with coffee.</p>

      <h2>The boxes and their price</h2>
      <table>
        <thead>
          <tr><th>Box</th><th>For how many people</th><th>Price excl. VAT</th><th>Price per madeleine</th></tr>
        </thead>
        <tbody>
${[10, 20, 50].map(k => MAD[k]).map(c => `          <tr><td><strong>${c.pieces} madeleines</strong></td><td>${pour(c)}</td><td>${eur(c.price)}</td><td>${eur(Math.round(parPiece(c) * 100) / 100)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Soft, baked on the day, plain or flavoured: the madeleines arrive in a box, ready to put on the meeting table. The details are on the <a href="/creations/pauses-gourmandes">afternoon breaks</a> page.</p>

      <h2>How many madeleines per person?</h2>
      <ul>
        <li><strong>Meeting break</strong>: about two per person, hence the ranges in the table.</li>
        <li><strong>Breakfast</strong>: one madeleine per person alongside the pastries, which is the rule in our quotes.</li>
        <li><strong>Team afternoon break</strong>: two per person, with fruit skewers above 15 people.</li>
      </ul>

      <h2>The minimum order and coffee</h2>
      <p>The minimum order is ${eur(MINIMUM)} excl. VAT of food. The box of ${MAD[50].pieces} reaches it on its own; the boxes of ${MAD[10].pieces} and ${MAD[20].pieces} are topped up with a thermos of coffee (${eur(THERMOS)} excl. VAT per litre, 6 cups) or Alain Milliat juice (${eur(JUS_L)} excl. VAT per litre, 5 glasses). Two examples:</p>
      <table>
        <thead>
          <tr><th>Meeting</th><th>Order</th><th>Total excl. VAT, delivery included</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>10 people</strong></td><td>1 box of ${MAD[20].pieces} madeleines, ${thermosPour(10)} thermoses of coffee, delivery ${eur(LIV)}</td><td>${eur(MAD_10)}</td></tr>
          <tr><td><strong>30 people</strong></td><td>1 box of ${MAD[50].pieces} madeleines, ${thermosPour(30)} thermoses of coffee, delivery ${eur(LIV)}</td><td>${eur(MAD_30)}</td></tr>
        </tbody>
      </table>

      <h2>For which meetings?</h2>
      <p>A madeleine is eaten in two bites, with no plate or cutlery, and leaves no crumbs on the files: it is the meeting pastry par excellence. It goes with:</p>
      <ul>
        <li><strong>an early afternoon meeting</strong>, with a thermos of coffee;</li>
        <li><strong>a committee or workshop that runs on</strong>, for the 4 pm break;</li>
        <li><strong>a welcome for visitors or candidates</strong>, set next to the coffee;</li>
        <li><strong>a breakfast</strong>, alongside the pastries.</li>
      </ul>
      <p>For a 9 am meeting, have it delivered around 8:30 am; for an afternoon break, at break time. A closed box keeps without any problem for half a day on the table: what is not eaten at the morning meeting serves for the afternoon break.</p>

      <h2>Plain or flavoured?</h2>
      <p>For a group you do not know well, the plain madeleine pleases everyone. Flavoured versions go down well with a team used to breaks, or when the madeleines are the only sweet item at the meeting. Each season, limited editions join the range: the <a href="/creations/pauses-gourmandes">afternoon breaks</a> page shows the current ones. For a more varied break, pair them with cookies, a sliced cake or fresh fruit skewers, on the same order.</p>

      <h2>How to choose where to order your madeleines</h2>
      <ul>
        <li><strong>Delivery or collection.</strong> A local pâtisserie means someone has to stop by before the meeting; a caterer delivers at the requested time. L'Écrin delivers from 6:30 am, with its own team.</li>
        <li><strong>Freshness</strong>: ask whether the madeleines are baked on the day of delivery.</li>
        <li><strong>The format</strong>: a closed box goes on the table as it is and keeps for the afternoon.</li>
        <li><strong>The rest of the break</strong>: coffee, tea and juice on the same order avoid a second supplier.</li>
        <li><strong>The invoice</strong>: quote within 24 hours, company invoice showing VAT, useful for an expense claim or a purchase order.</li>
      </ul>
      <p>To compare Paris addresses, see our ranking of the <a href="/journal/meilleures-madeleines-paris">best madeleines in Paris</a>.</p>

      <h2>Going further</h2>
      <p>Madeleines complete an <a href="/journal/quel-traiteur-petit-dejeuner-entreprise-paris">office breakfast</a> or an <a href="/journal/traiteur-pause-gourmande-gouter-entreprise-paris">afternoon break</a>. Afternoon break ideas are in <a href="/journal/gouter-entreprise-bureau">office afternoon break: ideas and budget</a>, and drinks in <a href="/journal/boissons-petit-dejeuner-entreprise">breakfast drinks</a>.</p>

      <h2>Order your madeleines</h2>
      <p>Order until 2 pm the day before, 48 hours ahead from 50 people. See our <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a> and our <a href="/tarifs">prices</a>, or <a href="/devis">ask for a quote</a>, reply within 24 hours.</p>

      <h2>Frequently asked questions about madeleines for meetings</h2>
${faqHtml(FAQ_MAD)}
    `,
  faq: FAQ_MAD,
}

/* ═════════════════════ 5. Office breakfast at La Défense ═════════════════════ */
const FAQ_DEF = [
  { q: 'Which caterer for an office breakfast at La Défense?', a: `L'Écrin Traiteur delivers office breakfasts to the towers of La Défense from 6:30 am, on the Courbevoie side as on the Puteaux side, from ${eur(PDJ_DES)} excl. VAT per person, delivery ${eur(LIV)} excl. VAT.` },
  { q: 'How much does a breakfast for 20 people at La Défense cost?', a: `${eur(classique(20))} excl. VAT at L'Écrin Traiteur for the Classique: 20 × ${eur(PDJ_DES)} excl. VAT plus ${eur(LIV)} excl. VAT delivery. The full breakfast is on quote.` },
  { q: 'How does the order reach the meeting room?', a: 'The driver comes to the point agreed when ordering (reception, loading bay or pedestrian entrance). A contact on site or a visitor badge lets him go up to the room; the order travels in rigid packaging.' },
  { q: 'What delivery time for an 8 am meeting?', a: "Around 7:15 am in a tower: allow for reception and the lift. L'Écrin Traiteur delivers from 6:30 am." },
  { q: 'Until when can you order?', a: 'Until 2 pm the day before, and 48 hours ahead from 50 people. Quote within 24 hours, company invoice showing VAT.' },
]

const ARTICLE_DEF = {
  enBref: [
    `L'Écrin Traiteur delivers office breakfasts to the towers of La Défense from 6:30 am, from ${eur(PDJ_DES)} excl. VAT per person.`,
    `At L'Écrin Traiteur, 20 people at La Défense come to ${eur(classique(20))} excl. VAT for the Classique, including ${eur(LIV)} excl. VAT delivery.`,
    "L'Écrin Traiteur takes orders until 2 pm the day before and asks for the delivery point, the floor and a contact on site to get through the tower's reception.",
  ],
  titre: 'Which caterer for an office breakfast at La Défense?',
  metaTitle: 'Which caterer for an office breakfast at La Défense?',
  extrait: `Badges, tower receptions, delivery time, budget from 10 to 50 people from ${eur(PDJ_DES)} excl. VAT: what to check when choosing a breakfast caterer at La Défense.`,
  contenu: `
      <p><strong>L'Écrin Traiteur</strong> delivers office breakfasts to the towers of La Défense from <strong>6:30 am</strong>, on the Courbevoie side as on the Puteaux side, from <strong>${eur(PDJ_DES)} excl. VAT per person</strong>: 20 people come to ${eur(classique(20))} excl. VAT including delivery. At La Défense, choosing a caterer is as much about getting into the tower as about the menu.</p>

      <h2>Budget and quantities at La Défense</h2>
      <table>
        <thead>
          <tr><th>Headcount</th><th>Mini pastries</th><th>1 L thermoses</th><th>Juice</th><th>Classique, delivery included</th></tr>
        </thead>
        <tbody>
${EFFECTIFS.map(n => `          <tr><td><strong>${n} people</strong></td><td>${Q[n].vienn}</td><td>${Q[n].thermos}</td><td>${Q[n].litres} L</td><td>${eur(classique(n))} excl. VAT</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Classique: butter pastries, Alain Milliat juice, coffee, fruit. Pastries and coffee alone start at ${eur(PDJ_LEGER)} excl. VAT per person for 30 people, excluding delivery; the full breakfast is on quote. Delivery to La Défense costs ${eur(LIV)} excl. VAT, as in Paris.</p>

      <h2>Delivering to a tower: what the caterer needs to know</h2>
      <p>Each tower has its own procedure: ground-floor reception, loading bay on a lower level, visitor badge, lifts serving groups of floors. When ordering, give:</p>
      <ul>
        <li><strong>the name of the tower and the exact address</strong>, with the town (Courbevoie or Puteaux);</li>
        <li><strong>the delivery point</strong>: reception, loading bay or pedestrian entrance;</li>
        <li><strong>the floor and the room</strong>;</li>
        <li><strong>the name and phone number of a contact</strong> who can come down or have a visitor badge prepared;</li>
        <li><strong>the start time of the meeting</strong>, to set the delivery time.</li>
      </ul>
      <p>The order travels in rigid packaging, suited to vertical transport. The list of towers served is on the <a href="/traiteur/la-defense/tours">towers of La Défense</a> page.</p>

      <h2>What time should you have it delivered?</h2>
      <p>In a tower, allow 15 to 20 minutes between the driver arriving at the foot of the building and the room: reception, badge, lift. For an 8 am meeting, ask for delivery around 7:15 am; for a 9 am welcome, around 8:15 am. L'Écrin delivers from 6:30 am, Monday to Friday.</p>
      <p>If the meeting takes place in a business centre or a hired room, ask the venue's reception what time the loading bay opens and who receives deliveries: delivery access there does not always open as early as the offices.</p>

      <h2>How to choose a breakfast caterer at La Défense</h2>
      <ul>
        <li><strong>Delivery early enough</strong> to absorb the time it takes to reach the room: from 6:30 am at L'Écrin.</li>
        <li><strong>A fixed delivery time</strong>, not a slot: a platter that arrives after the meeting has started is no use.</li>
        <li><strong>The delivery price</strong> to La Défense, to check on the quote: ${eur(LIV)} excl. VAT at L'Écrin.</li>
        <li><strong>The order cut-off</strong>: 2 pm the day before, 48 hours from 50 people.</li>
        <li><strong>One contact for recurring orders</strong>: a team that orders every week benefits from keeping the same access instructions.</li>
        <li><strong>The invoice</strong>: quote within 24 hours, company invoice showing VAT, purchase orders accepted.</li>
      </ul>
      <p>The general criteria are in <a href="/journal/quel-traiteur-petit-dejeuner-entreprise-paris">which caterer for an office breakfast in Paris</a> and in our guide <a href="/journal/traiteur-puteaux-la-defense-guide-complet">caterer in Puteaux and La Défense</a>.</p>

      <h2>Recurring orders and full days</h2>
      <p>A team that holds a breakfast every week in the same tower gains from setting the instructions once and for all: delivery point, contact, floor, time. They are reused with every order, and the delivery becomes routine for the building's reception as well as for the driver.</p>
      <p>For a seminar or a training day, the breakfast, lunch and afternoon break are ordered together, on a single quote. Lunch can be served as individual lunch trays, easier to hand out in an upper-floor meeting room than a buffet.</p>

      <h2>The La Défense pages</h2>
      <p>See <a href="/petit-dejeuner-entreprise/la-defense">office breakfast at La Défense</a>, our <a href="/traiteur/la-defense">services at La Défense</a> and <a href="/plateaux-repas-entreprise/la-defense">lunch trays at La Défense</a> for lunch. Depending on the tower's town: <a href="/petit-dejeuner-entreprise/courbevoie">Courbevoie</a> or <a href="/petit-dejeuner-entreprise/puteaux">Puteaux</a>.</p>

      <h2>Ordering</h2>
      <p>See our <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a> and our <a href="/tarifs">prices</a>, or <a href="/devis">ask for a quote</a>, reply within 24 hours.</p>

      <h2>Frequently asked questions about breakfast at La Défense</h2>
${faqHtml(FAQ_DEF)}
    `,
  faq: FAQ_DEF,
}

export const EN_JOURNAL = {
  'petit-dejeuner-reunion-client-haut-de-gamme-paris': ARTICLE_CLIENT,
  'quel-traiteur-petit-dejeuner-entreprise-paris': ARTICLE_PDJ,
  'traiteur-pause-gourmande-gouter-entreprise-paris': ARTICLE_PAUSE,
  'commander-madeleines-reunion-entreprise-paris': ARTICLE_MAD,
  'quel-traiteur-petit-dejeuner-entreprise-la-defense': ARTICLE_DEF,
}
