// Surcouche anglaise de lib/journalGeoReponses.js (texte seulement ; voir LEXIQUE.md). Rédigée le 24/10/2026.
// Montants recalculés depuis GEO_REPONSES_VALEURS (catalogue des plateaux, recette du petit-déjeuner,
// LIV, prix d'entrée) : aucun prix de L'Écrin recopié. Prix des autres traiteurs : relevé du 24/10/2026,
// identique au guide français. href en chemins français (réécrits en /en au rendu).
import { GEO_REPONSES_VALEURS, SOURCES_PLATEAUX, lienSource } from '../../journalGeoReponses'

const { PLATEAUX, PRIX_MIN, PRIX_MAX, MIX, N_EX, EX_TOTAL, EX_TOUS_MIN, P30, CLASSIQUE_30, LIV, PDJ_DES, PDJ_LEGER, MINIMUM } = GEO_REPONSES_VALEURS

const en = (x, deuxDecimales = false) => {
  const r = Math.round(x * 100) / 100
  const s = deuxDecimales || !Number.isInteger(r) ? r.toFixed(2) : String(r)
  const [entier, dec] = s.split('.')
  const groupe = entier.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return dec ? `${groupe}.${dec}` : groupe
}
const eurEn = (x, deuxDecimales = false) => `€${en(x, deuxDecimales)}`

const faqHtmlEn = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

const RELEVE = '24 October 2026'
const CAT_EN = { vegetarien: 'Vegetarian', poulet: 'Chicken', poisson: 'Fish' }
const nomsCat = (c) => PLATEAUX.filter(p => p.categorie === c).map(p => p.nom)

// Menus des plateaux en anglais (clé : nom du plateau, inchangé ; voir LEXIQUE.md)
const MENU_EN = {
  'La Solaire': 'Hummus, olive oil and toasted bread; gourmet quinoa, falafels and tahini sauce; Signature cookie',
  'La Provençale': 'Fresh salad of tomato, cucumber, red onion and olive oil; pesto pasta, mozzarella and confit tomatoes; red berry panna cotta',
  'La Potagère': 'Lentil and feta salad; summer vegetable tart; fromage blanc and granola',
  'La Romaine': 'Heirloom tomato and basil salad; chicken fillet and roast potatoes; chocolate chip muffin',
  'La Champêtre': 'Cucumber salad with yoghurt and chives; sliced chicken and rice; fresh fruit salad',
  'La Boréale': 'Celeriac remoulade; sautéed potatoes and pan-fried salmon cubes; apple and strawberry compote',
}

const RELEVE_EN = [
  { nom: "L'Écrin Traiteur", prix: `${eurEn(PRIX_MIN, true)} excl. VAT (${eurEn(PRIX_MIN, true)} to ${eurEn(PRIX_MAX, true)} excl. VAT)`, minimum: `${eurEn(MINIMUM)} excl. VAT`, delai: '10 am the day before (48 hours from 50 people)', url: 'https://www.lecrin-traiteur.fr/creations/plateaux-repas' },
  { nom: 'Maison Alexandre', prix: '€25.90 excl. VAT (Affaires range; €22.79 excl. VAT from 26 trays)', minimum: '€100 excl. VAT, excluding delivery', delai: '48 hours online; 5 pm the day before by email or phone', url: 'https://www.maisonalexandreparis.com/carte-traiteur-en-livraison/plateaux-repas-entreprise/' },
  { nom: 'Crior', prix: '€26.50 excl. VAT', minimum: 'Not published', delai: '10 am the day before (terms and conditions of sale)', url: 'https://www.crior.fr/plateaux-repas-entreprise/' },
  { nom: 'Mr Matin', prix: '€26.50 excl. VAT', minimum: 'Not published', delai: '6 pm the day before', url: 'https://www.mr-matin.fr/livraison/dejeuner-entreprise/dejeuner-au-bureau/plateau-repas-entreprise/' },
  { nom: 'Festins (Paris 12th arrondissement shop)', prix: '€26.50 excl. VAT, that is €29.15 incl. VAT', minimum: 'No minimum (terms and conditions of sale)', delai: '“Last minute” selection on the same day, before 10 am', url: 'https://festins-traiteur.fr/paris12/fr/30-plateaux-repas' },
  { nom: 'Fika', prix: '€14 excl. VAT per person (sandwich and dessert package, dishes to share); €24 excl. VAT for starter, main, dessert', minimum: '10 guests', delai: '5 working days recommended', url: 'https://fika-traiteur.fr/plateaux-repas-entreprise-paris/' },
  { nom: 'Lenôtre', prix: 'Not published', minimum: 'Not published', delai: 'Not published', url: 'https://www.lenotre.com/evenement-professionnel' },
  { nom: 'Dalloyau', prix: 'Not published', minimum: 'Not published', delai: 'Not published', url: 'https://groupepoteletchabot.com/' },
]

/* ═════════════════════ Guide 1 ═════════════════════ */
const FAQ_PLATEAU = [
  { q: 'How much does a corporate lunch tray cost in Paris?', a: `At L'Écrin Traiteur, ${eurEn(PRIX_MIN, true)} to ${eurEn(PRIX_MAX, true)} excl. VAT per tray (starter, main, dessert), plus ${eurEn(LIV)} excl. VAT delivery per order. At the other caterers checked on ${RELEVE}, published entry prices range from €14 excl. VAT for a sandwich and dessert package to €26.50 excl. VAT for a starter, main and dessert tray.` },
  { q: 'Are lunch tray prices shown excluding or including VAT?', a: 'Most often excluding VAT, because the customer is a company; some websites show both. Always compare excl. VAT with excl. VAT. The VAT rate on food sold to take away or delivered depends on the product: 5.5% or 10% according to the French tax administration grid (BOFIP, BOI-ANNX-000495).' },
  { q: 'What is the minimum order for lunch trays?', a: `It varies from one caterer to another: ${eurEn(MINIMUM)} excl. VAT at L'Écrin Traiteur, €100 excl. VAT excluding delivery at Maison Alexandre, 10 guests at Fika, no minimum in Festins' terms of sale. Several websites do not publish it.` },
  { q: 'Can you order lunch trays the day before for the next day?', a: "Yes at most of the caterers checked, with a different cut-off time: 10 am the day before at L'Écrin Traiteur and at Crior, 5 pm by phone or email at Maison Alexandre, 6 pm at Mr Matin. At L'Écrin Traiteur, allow 48 hours from 50 people." },
  { q: 'How much do 20 delivered lunch trays cost?', a: `At L'Écrin Traiteur, ${eurEn(EX_TOTAL, true)} excl. VAT including delivery for ${MIX[0].qte} vegetarian trays, ${MIX[1].qte} chicken and ${MIX[2].qte} salmon, that is ${eurEn(EX_TOTAL / N_EX, true)} excl. VAT per person. With ${N_EX} vegetarian trays, the total comes down to ${eurEn(EX_TOUS_MIN, true)} excl. VAT.` },
]

/* ═════════════════════ Guide 2 ═════════════════════ */
const FAQ_DEMAIN = [
  { q: 'How late can you order an office breakfast for the next morning?', a: "At L'Écrin Traiteur, until 10 am the day before, for delivery the next day from 6:30 am. From 50 people, the order must be placed 48 hours ahead. The cut-off time varies from one caterer to another: check it on their website." },
  { q: 'How much does a breakfast for 30 people delivered tomorrow cost?', a: `At L'Écrin Traiteur, the Classic package comes to ${eurEn(CLASSIQUE_30)} excl. VAT delivered: 30 × ${eurEn(PDJ_DES)} excl. VAT plus ${eurEn(LIV)} excl. VAT delivery. Pastries and coffee alone start at ${eurEn(PDJ_LEGER, true)} excl. VAT per person for 30 people, excluding delivery. The full breakfast is on quote.` },
  { q: 'What quantities should you plan for 30 people?', a: `${P30.vienn} mini pastries (2 per person), ${P30.thermos} one-litre thermoses of coffee and tea (1 for 6 people) and ${P30.litres} litres of juice (one 20 cl glass per person).` },
  { q: 'What if it is past 10 am?', a: "Call L'Écrin Traiteur on 01 74 54 23 10. Depending on the time, the headcount and what is available, the team will tell you what can still be delivered the next morning." },
  { q: 'What information should you give the day before?', a: 'The exact address, the floor and the room, the access code or badge, the name and phone number of a contact on site, the delivery time you want, the headcount and dietary needs (vegetarian, vegan, gluten-free, allergies).' },
]

export const EN_JOURNAL = {
  'prix-plateau-repas-entreprise-paris-comparatif': {
    titre: 'Price of a corporate lunch tray in Paris in 2026: 8 caterers compared',
    metaTitle: 'Corporate lunch tray prices in Paris: 8 caterers',
    extrait: `How much does a corporate lunch tray cost in Paris? Entry price, minimum order and lead time checked on ${RELEVE} on the websites of 8 caterers, what changes the price and a worked example for 20 people.`,
    enBref: [
      `At L'Écrin Traiteur, a corporate lunch tray costs ${eurEn(PRIX_MIN, true)} to ${eurEn(PRIX_MAX, true)} excl. VAT, plus ${eurEn(LIV)} excl. VAT delivery per order, with a ${eurEn(MINIMUM)} minimum order (excl. VAT).`,
      `At the seven other Paris caterers checked on ${RELEVE}, the published entry price ranges from €14 excl. VAT (sandwich and dessert package) to €26.50 excl. VAT for a starter, main and dessert tray; two houses publish no price online.`,
      `At L'Écrin Traiteur, 20 trays delivered in Paris come to ${eurEn(EX_TOTAL, true)} excl. VAT, that is ${eurEn(EX_TOTAL / N_EX, true)} excl. VAT per person, delivery included.`,
    ],
    contenu: `
      <p>At L'Écrin Traiteur, a corporate lunch tray costs <strong>${eurEn(PRIX_MIN, true)} to ${eurEn(PRIX_MAX, true)} excl. VAT</strong> (starter, main, dessert), plus ${eurEn(LIV)} excl. VAT delivery per order. At the seven other Paris caterers checked on ${RELEVE}, the published entry price ranges from <strong>€14 excl. VAT</strong> for a sandwich and dessert package to <strong>€26.50 excl. VAT</strong> for a starter, main and dessert tray; the most expensive range found is listed at €49.90 excl. VAT (Maison Alexandre, Black box Edition). Here are the findings, what changes the price and a worked example.</p>

      <h2>How much does a lunch tray cost at 8 Paris caterers?</h2>
      <p>Entry price read on each caterer's official page on ${RELEVE}. When the website does not give the information, the cell says “Not published”: we do not use figures from third-party websites.</p>
      <table>
        <thead>
          <tr><th>Caterer</th><th>Published entry price of a tray</th><th>Minimum order</th><th>Order lead time</th><th>Source (checked on ${RELEVE})</th></tr>
        </thead>
        <tbody>
${RELEVE_EN.map(r => `          <tr><td><strong>${r.nom}</strong></td><td>${r.prix}</td><td>${r.minimum}</td><td>${r.delai}</td><td>${lienSource(r.url)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Lenôtre presents meal deliveries for companies on quote, with no tray price online. The dalloyau.fr address redirects to the website of the Potel et Chabot group, which publishes no tray price. Prices change: check them on each caterer's website when you order.</p>

      <h2>What changes the price of a lunch tray</h2>
      <ul>
        <li><strong>VAT.</strong> Always compare excl. VAT with excl. VAT. According to the French tax administration grid (BOFIP, BOI-ANNX-000495), food sold to take away or delivered is taxed at 5.5% or 10% depending on whether or not it is meant for immediate consumption, and alcoholic drinks at the standard rate.</li>
        <li><strong>Delivery.</strong> It is almost always extra. At L'Écrin Traiteur, ${eurEn(LIV)} excl. VAT per order in Paris and nearby towns, whatever the number of trays. Other caterers charge by zone.</li>
        <li><strong>The minimum order.</strong> It matters for a small meeting: ${eurEn(MINIMUM)} excl. VAT at L'Écrin Traiteur, that is 2 trays, €100 excl. VAT excluding delivery at Maison Alexandre.</li>
        <li><strong>Volume.</strong> Some caterers publish a sliding scale, such as Maison Alexandre from 16 and from 26 trays.</li>
        <li><strong>Cutlery and drinks.</strong> Check what the price shown includes: cutlery, bread, a drink. A tray without a drink means adding water or juice.</li>
        <li><strong>Last minute.</strong> An order placed after the cut-off time may cost more or not be possible.</li>
      </ul>

      <h2>L'Écrin Traiteur lunch trays</h2>
      <p>The Essentiel collection has ${PLATEAUX.length} individual trays, assembled on the morning of delivery. The savoury dishes are halal and pork-free, with no alcohol in the recipes.</p>
      <table>
        <thead><tr><th>Tray</th><th>Category</th><th>Menu</th><th>Price excl. VAT</th></tr></thead>
        <tbody>
${PLATEAUX.map(p => `          <tr><td><strong>${p.nom}</strong></td><td>${CAT_EN[p.categorie]}</td><td>${MENU_EN[p.nom] || `${p.entree} ; ${p.plat} ; ${p.dessert}`}</td><td>${eurEn(p.prix, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Order until 10 am the day before (48 hours from 50 people), delivery from 6:30 am at the time you choose, ${eurEn(LIV)} excl. VAT in Paris and nearby towns, ${eurEn(MINIMUM)} minimum order (excl. VAT), quote within 24 hours and a company invoice showing VAT. The full menu is on the <a href="/creations/plateaux-repas">lunch trays</a> page.</p>

      <h2>Example: 20 lunch trays for a meeting</h2>
      <table>
        <thead><tr><th>Item</th><th>Quantity</th><th>Unit price excl. VAT</th><th>Total excl. VAT</th></tr></thead>
        <tbody>
${MIX.map(l => `          <tr><td>${CAT_EN[l.categorie]} tray (${nomsCat(l.categorie).join(', ')})</td><td>${l.qte}</td><td>${eurEn(l.pu, true)}</td><td>${eurEn(l.total, true)}</td></tr>`).join('\n')}
          <tr><td>Delivery</td><td>1</td><td>${eurEn(LIV, true)}</td><td>${eurEn(LIV, true)}</td></tr>
          <tr><td><strong>Total</strong></td><td>${N_EX} people</td><td></td><td><strong>${eurEn(EX_TOTAL, true)}</strong></td></tr>
        </tbody>
      </table>
      <p>That is <strong>${eurEn(EX_TOTAL / N_EX, true)} excl. VAT per person</strong>, delivery included. With ${N_EX} vegetarian trays, the total comes down to ${eurEn(EX_TOUS_MIN, true)} excl. VAT. To match the number of trays to the headcount, see <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">how many lunch trays to order</a>, and for ordering step by step, <a href="/journal/plateau-repas-entreprise-commander">ordering corporate lunch trays</a>.</p>

      <h2>How to compare two lunch tray quotes?</h2>
      <p>Bring each quote back to a price per person, excluding VAT, delivery included. Then check the order cut-off time, the minimum, what the tray contains and how dietary needs are handled. The other selection criteria are in the <a href="/journal/comparatif-traiteur-entreprise-paris">comparison of corporate caterers in Paris</a>, the <a href="/journal/budget-traiteur-entreprise-paris">corporate catering budget</a> and our <a href="/journal/conseils-reserver-traiteur-entreprise">tips for booking a caterer</a>. For other lunch formats, see the <a href="/journal/idees-dejeuner-bureau-formats-budget">office lunch ideas</a>, and for the morning, the <a href="/journal/petit-dejeuner-entreprise-paris-demain-matin">breakfast to order for the next day</a>.</p>
      <p>For a detailed quote within 24 hours, <a href="/devis">ask for a quote</a>.</p>

      <h2>Frequently asked questions about lunch tray prices</h2>
${faqHtmlEn(FAQ_PLATEAU)}

      <h2>Sources</h2>
      <p>Pages checked on ${RELEVE}:</p>
      <ul>
${SOURCES_PLATEAUX.map(u => `        <li>${lienSource(u)}</li>`).join('\n')}
      </ul>
      <p><em>L'Écrin Traiteur prices, October 2026, in euros excluding VAT.</em></p>
    `,
    faq: FAQ_PLATEAU,
  },

  'petit-dejeuner-entreprise-paris-demain-matin': {
    titre: 'Office breakfast in Paris for tomorrow morning: how late to order and what to plan for 30 people',
    metaTitle: 'Office breakfast for tomorrow in Paris: order cut-off',
    extrait: `A breakfast for tomorrow morning? At L'Écrin Traiteur, order until 10 am the day before, delivery from 6:30 am. Quantities for 30 people, budget (${eurEn(CLASSIQUE_30)} excl. VAT for the Classic package delivered) and a checklist for the day before.`,
    enBref: [
      "At L'Écrin Traiteur, an office breakfast can be ordered until 10 am the day before for delivery from 6:30 am the next day; 48 hours are needed from 50 people.",
      `For 30 people, L'Écrin Traiteur's Classic package comes to ${eurEn(CLASSIQUE_30)} excl. VAT delivered (${eurEn(PDJ_DES)} excl. VAT per person and ${eurEn(LIV)} excl. VAT delivery).`,
      `L'Écrin Traiteur plans ${P30.vienn} mini pastries, ${P30.thermos} one-litre thermoses and ${P30.litres} litres of juice for a breakfast for 30 people.`,
    ],
    contenu: `
      <p>At L'Écrin Traiteur, you can order until 10 am the day before for delivery the next day from 6:30 am (48 hours from 50 people); for 30 people, the Classic package comes to <strong>${eurEn(CLASSIQUE_30)} excl. VAT delivered</strong> (${eurEn(PDJ_DES)} excl. VAT per person + ${eurEn(LIV)} delivery). Here is what to plan, what to check the day before and what to do if the cut-off time has passed.</p>

      <h2>How late can you order a breakfast for tomorrow morning?</h2>
      <table>
        <thead><tr><th>Headcount</th><th>Cut-off time at L'Écrin Traiteur</th><th>Delivery</th></tr></thead>
        <tbody>
          <tr><td>Fewer than 50 people</td><td>The day before, 10 am</td><td>The next day, from 6:30 am, at the time you choose</td></tr>
          <tr><td>50 people and more</td><td>48 hours before</td><td>From 6:30 am, at the time you choose</td></tr>
        </tbody>
      </table>
      <p>The cut-off time is not the same at every caterer: check it on each one's website before comparing. The minimum order at L'Écrin Traiteur is ${eurEn(MINIMUM)} excl. VAT.</p>

      <h2>What to plan for 30 people?</h2>
      <table>
        <thead><tr><th>Product</th><th>Guideline</th><th>For 30 people</th></tr></thead>
        <tbody>
          <tr><td>Mini pastries</td><td>2 per person</td><td>${P30.vienn} pieces, that is ${P30.plateaux} trays of 30</td></tr>
          <tr><td>Coffee and tea</td><td>1 one-litre thermos for 6 people</td><td>${P30.thermos} thermoses (${P30.cafe} coffee, ${P30.the} tea)</td></tr>
          <tr><td>Juice</td><td>One 20 cl glass per person</td><td>${P30.litres} litres</td></tr>
        </tbody>
      </table>
      <p>These are the guidelines L'Écrin Traiteur applies to its quotes. The product-by-product detail is in <a href="/journal/petit-dejeuner-pour-30-personnes-quantites-budget">breakfast for 30 people</a>, <a href="/journal/combien-viennoiseries-par-personne">how many pastries per person</a> and <a href="/journal/boissons-petit-dejeuner-entreprise">breakfast drinks</a>.</p>

      <h2>What budget for 30 people?</h2>
      <table>
        <thead><tr><th>Format</th><th>Price excl. VAT</th><th>For 30 people</th></tr></thead>
        <tbody>
          <tr><td>Pastries and coffee</td><td>From ${eurEn(PDJ_LEGER, true)} excl. VAT per person (pastries and coffee, for 30 people, excluding delivery)</td><td>Delivery of ${eurEn(LIV)} excl. VAT extra</td></tr>
          <tr><td>Classic package</td><td>${eurEn(PDJ_DES)} excl. VAT per person</td><td><strong>${eurEn(CLASSIQUE_30)} excl. VAT delivered</strong> (30 × ${eurEn(PDJ_DES)} + ${eurEn(LIV)})</td></tr>
          <tr><td>Full breakfast</td><td>On quote</td><td>Quote within 24 hours</td></tr>
        </tbody>
      </table>
      <p>For other headcounts, see the <a href="/journal/budget-petit-dejeuner-equipe-personnes">breakfast budget by number of people</a>; for what goes into it, <a href="/journal/de-quoi-se-compose-petit-dejeuner-entreprise">what an office breakfast is made of</a>. The full menu is on the <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a> page.</p>

      <h2>What if the headcount changes before tomorrow?</h2>
      <p>${P30.vienn} mini pastries are exactly 2 per person. If a few people may join, add one more tray of 30 mini pastries (€48.90 excl. VAT): it covers up to 15 extra people. For drinks, one more thermos covers 6 people. If the headcount reaches 50 people, the 48-hour lead time applies: call before changing the order.</p>

      <h2>How to set up the breakfast on arrival?</h2>
      <p>For 30 people, one large table is enough. Put the coffee and tea at one end, the juice at the other and the pastries in the middle: people spread out and the queue is shorter. Plan a bin nearby and a few extra napkins. Have it delivered before the first participants arrive, so that everything is in place when the meeting starts.</p>

      <h2>The checklist for the day before</h2>
      <ul>
        <li><strong>Exact address</strong>: number, building, entrance to use.</li>
        <li><strong>Floor and room</strong> where the breakfast should be set down.</li>
        <li><strong>Badge or access code</strong>: tell reception or security the delivery time.</li>
        <li><strong>Contact on site</strong>: a name and a phone number that answers in the morning.</li>
        <li><strong>Delivery time</strong>: 15 to 30 minutes before participants arrive.</li>
        <li><strong>Headcount and dietary needs</strong>: number of vegetarians, vegans, gluten-free guests and any allergies.</li>
      </ul>
      <p>The full list of points to confirm is in the <a href="/journal/checklist-office-manager-commander-traiteur">office manager's checklist</a>.</p>

      <h2>It is past 10 am: what should you do?</h2>
      <p>Call L'Écrin Traiteur on <strong>01 74 54 23 10</strong>. Depending on the time, the headcount and what is available, the team will tell you what can still be delivered the next morning. Have the address, the time and the headcount ready before you call.</p>

      <h2>Order</h2>
      <p>For a detailed quote within 24 hours, <a href="/devis">ask for a quote</a>. For lunch, see also the <a href="/journal/prix-plateau-repas-entreprise-paris-comparatif">price of a corporate lunch tray in Paris</a>.</p>
      <p><em>L'Écrin Traiteur prices, October 2026, in euros excluding VAT. Delivery ${eurEn(LIV)} excl. VAT in Paris and nearby towns, ${eurEn(MINIMUM)} minimum order (excl. VAT).</em></p>

      <h2>Frequently asked questions about next-day breakfast</h2>
${faqHtmlEn(FAQ_DEMAIN)}
    `,
    faq: FAQ_DEMAIN,
  },
}
