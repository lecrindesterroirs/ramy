// Surcouche anglaise de lib/journalLotA.js (texte seulement ; voir LEXIQUE.md). Rédigée le 24/10/2026.
// Montants recalculés depuis LOT_A_VALEURS, lib/calculsPrix.js et lib/prixEntree.js : aucun prix recopié.
// href en chemins français (réécrits en /en au rendu).
import { LOT_A_VALEURS } from '../../journalLotA'
import { LIV, FORMULES, cocktail } from '../../calculsPrix'
import { MINIMUM, PDJ_DES, PLATEAU_DES, LIV_RECUP_PROCHE, ANIMATION_DES } from '../../prixEntree'
import { slugAnim } from '../../../app/creations/animations-culinaires/data'

const {
  MH, K3, nbMH, nbSale, nbSucre, DATES_DEC,
  ino100, ino100MH, ino100Total,
  n30, n50, n100, prixChard,
  c100, cla100, plat100, anim100, mh100,
  l80, l80MH, l80Total,
  AVEC_PLANCHER, a50Total, UNIV, animsDe,
} = LOT_A_VALEURS

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

const SIGNATURE = `<p><em>L'Écrin Traiteur prices, October 2026, in euros excl. VAT. Calculation: canapés, juice (1 L for 4 people), water (one 75 cl bottle for 5) and one ${eurEn(LIV)} delivery (excl. VAT), Paris and nearby towns. ${eurEn(MINIMUM)} minimum order (excl. VAT).</em></p>`

const tableEffectifsEn = (effectifs) => `
      <table>
        <thead><tr><th>Guests</th>${K3.map(k => `<th>${FORMULES[k].nom}, ${FORMULES[k].pieces} canapés</th>`).join('')}</tr></thead>
        <tbody>
${effectifs.map(n => `          <tr><td><strong>${n} guests</strong></td>${K3.map(k => { const c = cocktail(n, FORMULES[k]); return `<td>${eurEn(c.sans, true)} (${eurEn(c.sans / n, true)} per person)</td>` }).join('')}</tr>`).join('\n')}
        </tbody>
      </table>`

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const decEn = (d) => `${DAYS[new Date(Date.UTC(2026, 11, d)).getUTCDay()]} ${d} December`

/* ───────── 1 : inauguration ───────── */
const FAQ_INAUGURATION = [
  { q: 'Which caterer should you choose to open new offices in Paris?', a: `A caterer that delivers on site, quotes a delivered price per person and handles dietary needs. L'Écrin Traiteur delivers a cocktail reception of 8, 12 or 16 canapés at ${eurEn(FORMULES.invitation.prix, true)} to ${eurEn(FORMULES.celebration.prix, true)} excl. VAT per person, in Paris and Île-de-France, with a quote within 24 hours.` },
  { q: 'What budget for an opening reception for 100 guests?', a: `At L'Écrin Traiteur, from ${eurEn(cocktail(100, FORMULES.invitation).sans, true)} excl. VAT with 8 canapés to ${eurEn(cocktail(100, FORMULES.celebration).sans, true)} excl. VAT with 16 canapés, juice, water and delivery included. With 12 canapés and ${ino100MH} maîtres d'hôtel, plan ${eurEn(ino100Total, true)} excl. VAT.` },
  { q: 'How many canapés for an office opening?', a: 'Eight per person for a 90-minute reception at the end of the day, 12 for a reception that covers lunch or a short evening, 16 when the reception replaces dinner.' },
  { q: 'How far ahead should you book the caterer?', a: "Ask for a quote three to four weeks before the date. At L'Écrin Traiteur, the order is final 48 hours ahead from 50 people, and by 10 am the day before below that." },
  { q: 'Can the opening reception be halal and alcohol-free?', a: "Yes. At L'Écrin Traiteur, all savoury canapés are halal and pork-free, and the drinks list is alcohol-free, with a 0% Chardonnay Blanc de Blancs as an option for the toast." },
]

/* ───────── 2 : Noël ───────── */
const FAQ_NOEL = [
  { q: 'Which caterer for a company Christmas reception in Paris?', a: `A caterer that confirms your date in November, quotes a delivered price per person and handles dietary needs. L'Écrin Traiteur delivers cocktail receptions of 8, 12 or 16 canapés at ${eurEn(FORMULES.invitation.prix, true)} to ${eurEn(FORMULES.celebration.prix, true)} excl. VAT per person, in Paris and Île-de-France.` },
  { q: 'When should you book the caterer for a December reception?', a: "In November, three to four weeks before the date. At L'Écrin Traiteur, the order is final 48 hours ahead from 50 people, and by 10 am the day before below that." },
  { q: 'How much does a Christmas reception for 50 people cost?', a: `At L'Écrin Traiteur, ${eurEn(n50.sans, true)} excl. VAT with 12 canapés, juice, water and delivery included, that is ${eurEn(n50.sans / 50, true)} excl. VAT per person.` },
  { q: 'Can the caterer provide staff and tableware?', a: `Yes. L'Écrin Traiteur provides maîtres d'hôtel at ${eurEn(MH)} excl. VAT for 6 hours and porcelain tableware through its partner Options, on quote. Delivery with collection of the equipment costs ${eurEn(LIV_RECUP_PROCHE)} excl. VAT in Paris, the 92 and the 94.` },
  { q: 'Can a Christmas reception be alcohol-free?', a: `Yes. L'Écrin Traiteur's drinks list is alcohol-free: juices, waters, and a 0% Chardonnay Blanc de Blancs as an option for the toast, at ${eurEn(prixChard, true)} excl. VAT per bottle.` },
]

/* ───────── 3 : 100 personnes ───────── */
const IDEES_100_EN = [
  { idee: 'Welcome breakfast', quand: 'Convention, morning plenary', format: `Classique breakfast at ${eurEn(PDJ_DES)} excl. VAT per person`, total: cla100, des: false },
  { idee: 'Lunch trays', quand: 'General meeting, training, working day', format: `Lunch trays from ${eurEn(PLATEAU_DES, true)} excl. VAT`, total: plat100, des: true },
  { idee: 'Drinks reception', quand: 'After a plenary, team drinks', format: `${FORMULES.invitation.nom}, 8 canapés`, total: c100.invitation.sans, des: false },
  { idee: 'Lunch reception', quand: 'Standing lunch, launch', format: `${FORMULES.reception.nom}, 12 canapés`, total: c100.reception.sans, des: false },
  { idee: 'Dinner reception', quand: 'Company evening', format: `${FORMULES.celebration.nom}, 16 canapés`, total: c100.celebration.sans, des: false },
  { idee: 'Reception and live food station', quand: 'Evening with a highlight', format: `8 canapés and a live station from ${eurEn(ANIMATION_DES)} excl. VAT`, total: anim100, des: true },
]
const FAQ_100 = [
  { q: 'Which caterer for a company event for 100 people in Paris?', a: `A caterer that delivers 1,200 to 1,600 canapés in one go, gives a delivered price per person and provides staff. L'Écrin Traiteur delivers a cocktail reception for 100 people at ${eurEn(c100.invitation.sans, true)} to ${eurEn(c100.celebration.sans, true)} excl. VAT, juice, water and delivery included.` },
  { q: 'What catering ideas for 100 people?', a: 'A welcome breakfast for a convention, lunch trays for a working day, a cocktail reception of 8, 12 or 16 canapés for an evening, or a reception with a live food station to create a highlight.' },
  { q: "How many maîtres d'hôtel for 100 guests?", a: `For a dinner reception, one for 25 to 30 guests, that is ${mh100} for 100 guests. At L'Écrin Traiteur, ${eurEn(mh100 * MH)} excl. VAT at ${eurEn(MH)} excl. VAT per maître d'hôtel for 6 hours.` },
  { q: 'How many drinks for 100 people?', a: `${c100.reception.b.jus} litres of juice and ${c100.reception.b.eau} 75 cl bottles of water for a two-hour reception, and as an option ${c100.reception.b.chard} bottles of 0% Chardonnay for one flute per person.` },
  { q: 'How far ahead should you order for 100 people?', a: "At L'Écrin Traiteur, the order is final 48 hours before delivery from 50 people. Ask for a quote three weeks ahead to confirm the format, staff and dietary needs." },
]

/* ───────── 4 : lancement ───────── */
const FAQ_LANCEMENT = [
  { q: 'Which caterer for a product launch in Paris?', a: `A caterer that delivers on time, takes care of presentation and provides staff. L'Écrin Traiteur delivers a 12-canapé reception at ${eurEn(FORMULES.reception.prix, true)} excl. VAT per person, that is ${eurEn(l80.sans, true)} excl. VAT for 80 guests, juice, water and delivery included.` },
  { q: 'What format for a client evening?', a: 'A standing reception, which lets your teams move among guests: 12 canapés for a two-hour evening, 16 when it replaces dinner. A live food station creates a meeting point in the middle of the room.' },
  { q: 'How much does a client evening for 80 guests cost?', a: `At L'Écrin Traiteur, ${eurEn(l80.sans, true)} excl. VAT with 12 canapés, juice, water and delivery included. With ${l80MH} maîtres d'hôtel and a live station at its floor price, plan at least ${eurEn(l80Total, true)} excl. VAT.` },
  { q: 'Can you host clients without serving alcohol?', a: "Yes. L'Écrin Traiteur's drinks list is alcohol-free: juices, waters, a 0% Chardonnay Blanc de Blancs as an option for the toast, and a mocktail bar as a live station." },
  { q: 'In the morning, what format for a press launch?', a: "A welcome breakfast, served before the presentation. L'Écrin Traiteur delivers from 6:30 am, with orders until 10 am the day before." },
]

/* ───────── 5 : animation ───────── */
const UNIV_EN = { brunch: 'Breakfast and brunch', dejeuner: 'Lunch', streetfood: 'Street food', douceurs: 'Sweet treats', bars: 'Bars' }
const MOMENT_EN = { brunch: 'Welcome breakfast, seminar', dejeuner: 'Lunch, cocktail reception, partner evening', streetfood: 'Afterwork, team evening', douceurs: 'Break, staff party', bars: 'Cocktail reception, alcohol-free evening' }
const lienAnim = (a) => `<a href="/creations/animations-culinaires/${slugAnim(a.nom)}">${a.nom}</a>`
const FAQ_ANIM = [
  { q: 'Which caterer for a live food station at a company event in Paris?', a: `A caterer that provides the chef or host, the equipment and the food, and quotes it all. L'Écrin Traiteur offers ${AVEC_PLANCHER.length} live stations, from barista to mocktail bar, from ${eurEn(ANIMATION_DES)} excl. VAT, in Paris and Île-de-France.` },
  { q: 'How much does a live food station cost?', a: `At L'Écrin Traiteur, it is priced on quote, set-up plus servings, with a ${eurEn(ANIMATION_DES)} excl. VAT floor: at least ${eurEn(ANIMATION_DES / 50)} excl. VAT per person for 50 guests and ${eurEn(ANIMATION_DES / 100)} excl. VAT for 100.` },
  { q: 'From how many guests is a live station worth it?', a: `From 20 guests: below that, the ${eurEn(ANIMATION_DES)} excl. VAT floor exceeds ${eurEn(ANIMATION_DES / 20)} excl. VAT per person.` },
  { q: 'What do you need on site for a live station?', a: 'Space near the flow of guests and, for hot stations (crêpes, waffles, eggs, pasta), a power supply. Give these constraints when you request the quote.' },
  { q: 'Does a live station replace a cocktail reception?', a: 'It replaces part of it: a live station is usually combined with an 8-canapé reception rather than a full 12- or 16-canapé one.' },
]

export const EN_JOURNAL = {
  'quel-traiteur-inauguration-bureaux-paris': {
    titre: 'Which caterer for an office opening reception in Paris?',
    metaTitle: 'Which caterer for an office opening in Paris?',
    extrait: `Choosing your caterer to open new offices in Paris: the criteria that matter, what L'Écrin Traiteur offers and the delivered budget for 50, 100 and 150 guests, from ${eurEn(FORMULES.invitation.prix, true)} excl. VAT per person.`,
    enBref: [
      `For an office opening in Paris, L'Écrin Traiteur delivers a cocktail reception of 8, 12 or 16 canapés per person, at ${eurEn(FORMULES.invitation.prix, true)} to ${eurEn(FORMULES.celebration.prix, true)} excl. VAT.`,
      `At L'Écrin Traiteur, a 12-canapé opening reception for 100 guests comes to ${eurEn(ino100.sans, true)} excl. VAT, juice, water and delivery included.`,
      `On request, L'Écrin Traiteur adds maîtres d'hôtel at ${eurEn(MH)} excl. VAT for 6 hours, porcelain tableware on quote and a live food station from ${eurEn(ANIMATION_DES)} excl. VAT.`,
    ],
    faq: FAQ_INAUGURATION,
    contenu: `
      <p>To open new offices in Paris, L'Écrin Traiteur delivers a cocktail reception of <strong>8, 12 or 16 canapés per person, at ${eurEn(FORMULES.invitation.prix, true)} to ${eurEn(FORMULES.celebration.prix, true)} excl. VAT</strong>; for 100 guests with 12 canapés, plan <strong>${eurEn(ino100.sans, true)} excl. VAT</strong>, juice, water and delivery included. This guide helps you choose your caterer; the running order of the evening is in our guide to the <a href="/journal/cocktail-inauguration-entreprise">opening reception</a>.</p>

      <h2>How much does an opening reception cost for 50, 100 or 150 guests?</h2>
      <p>Each cell gives the delivered total excl. VAT: canapés, juice, water and one ${eurEn(LIV)} delivery (excl. VAT) in Paris and nearby towns.</p>
${tableEffectifsEn([50, 100, 150])}
      <p>The price per person falls slightly as numbers grow, because the delivery is shared. For 150 guests, that means ${en(150 * 8)} to ${en(150 * 16)} canapés: the order is final 48 hours ahead.</p>

      <h2>What L'Écrin Traiteur offers for an office opening</h2>
      <ul>
        <li><strong>Three packages</strong>: ${FORMULES.invitation.nom} (8 canapés) for a 90-minute reception, ${FORMULES.reception.nom} (12 canapés) for a reception that stands in for lunch or a short evening, ${FORMULES.celebration.nom} (16 canapés) when it replaces dinner. Details on the <a href="/creations/cocktails">corporate cocktail receptions</a> page.</li>
        <li><strong>A varied menu</strong>: ${FORMULES.reception.nom} has ${nbSale('reception')} savoury and ${nbSucre('reception')} sweet canapés per person, including cheese gougères, a pissaladière tartlet, a beetroot and goat's cheese millefeuille and a ratte potato with smoked salmon.</li>
        <li><strong>Halal and pork-free</strong> across all savoury items, with vegetarian, vegan and gluten-free options on request.</li>
        <li><strong>Alcohol-free drinks</strong>: juices, waters, and a 0% Chardonnay Blanc de Blancs as an option for the toast. See the <a href="/journal/cocktail-entreprise-sans-alcool">alcohol-free corporate reception</a>.</li>
        <li><strong>Staff</strong>: maîtres d'hôtel at ${eurEn(MH)} excl. VAT for 6 hours, one for 25 to 30 guests. See <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel to plan</a>.</li>
        <li><strong>Tableware</strong>: porcelain and glasses through our partner Options, on quote; delivery with collection of the equipment at ${eurEn(LIV_RECUP_PROCHE)} excl. VAT in Paris, the 92 and the 94.</li>
        <li><strong>A highlight</strong>: a <a href="/creations/animations-culinaires">live food station</a> from ${eurEn(ANIMATION_DES)} excl. VAT, such as salmon carving in front of guests.</li>
      </ul>

      <h2>How to choose your caterer for an office opening</h2>
      <ol>
        <li><strong>Compare a delivered price per person, excl. VAT</strong>: canapés, drinks, delivery, staff and tableware. A price per canapé alone says nothing about the total.</li>
        <li><strong>Check the order lead time</strong>: guest numbers for an opening change until the last minute. At L'Écrin Traiteur, they are fixed 48 hours ahead from 50 people.</li>
        <li><strong>Match quantities to the time of day</strong>: a reception starting at 6:30 pm and lasting three hours needs 16 canapés, not 8.</li>
        <li><strong>Share the venue constraints</strong>: floor, lift, kitchenette, power sockets, access time. New offices often have a kitchenette that is not yet equipped.</li>
        <li><strong>Ask what is collected afterwards</strong>: platters, tableware, waste. Collection of the equipment should appear on the quote.</li>
        <li><strong>Insist on a written, detailed quote</strong>, with a company invoice and VAT. Our list of <a href="/journal/questions-poser-traiteur-avant-signer-devis">questions to ask before signing a quote</a> helps you compare.</li>
      </ol>

      <h2>Example: 100 guests, 12 canapés and staff</h2>
      <table>
        <thead><tr><th>Item</th><th>Detail</th><th>Amount excl. VAT</th></tr></thead>
        <tbody>
          <tr><td>Canapés</td><td>100 × ${FORMULES.reception.nom} at ${eurEn(FORMULES.reception.prix, true)}</td><td>${eurEn(ino100.pieces, true)}</td></tr>
          <tr><td>Juice</td><td>${ino100.b.jus} L</td><td>${eurEn(ino100.b.coutJus, true)}</td></tr>
          <tr><td>Water</td><td>${ino100.b.eau} bottles of 75 cl</td><td>${eurEn(ino100.b.coutEau, true)}</td></tr>
          <tr><td>Delivery</td><td>Paris and nearby towns</td><td>${eurEn(LIV, true)}</td></tr>
          <tr><td>Maîtres d'hôtel</td><td>${ino100MH} × ${eurEn(MH)} for 6 hours</td><td>${eurEn(ino100MH * MH, true)}</td></tr>
          <tr><td><strong>Total</strong></td><td>That is ${eurEn(ino100Total / 100, true)} excl. VAT per person</td><td><strong>${eurEn(ino100Total, true)}</strong></td></tr>
        </tbody>
      </table>
      <p>As an option, the 0% Chardonnay adds ${eurEn(ino100.b.coutChard, true)} excl. VAT (${ino100.b.chard} bottles, one flute per person). For 150 guests or more, see also the <a href="/journal/cocktail-entreprise-100-personnes">cocktail reception for 100 people</a> and the <a href="/journal/organiser-inauguration-entreprise-deroule-budget-traiteur">opening event timeline</a>.</p>

      <h2>Request a quote</h2>
      <p>Give the date, address, time and estimated numbers: L'Écrin Traiteur replies within 24 hours with a detailed quote. <a href="/devis">Request an opening reception quote</a>.</p>
      ${SIGNATURE}

      <h2>Frequently asked questions about an opening reception caterer</h2>
${faqHtmlEn(FAQ_INAUGURATION)}
    `,
  },

  'quel-traiteur-cocktail-noel-entreprise-paris': {
    titre: "Which caterer for your company's Christmas reception in Paris?",
    metaTitle: 'Which caterer for a company Christmas reception in Paris?',
    extrait: `Choosing your Christmas caterer in Paris: the criteria, the December 2026 dates and their order deadlines, and what L'Écrin Traiteur delivers, from ${eurEn(FORMULES.invitation.prix, true)} excl. VAT per person.`,
    enBref: [
      `For a company Christmas reception in Paris, L'Écrin Traiteur delivers 8, 12 or 16 canapés per person, at ${eurEn(FORMULES.invitation.prix, true)} to ${eurEn(FORMULES.celebration.prix, true)} excl. VAT.`,
      `At L'Écrin Traiteur, a 12-canapé Christmas reception for 50 people comes to ${eurEn(n50.sans, true)} excl. VAT, juice, water and delivery included.`,
      `L'Écrin Traiteur advises booking a December date in November; from 50 people, the order is final 48 hours before delivery.`,
    ],
    faq: FAQ_NOEL,
    contenu: `
      <p>For a company Christmas reception in Paris, L'Écrin Traiteur delivers <strong>8, 12 or 16 canapés per person, at ${eurEn(FORMULES.invitation.prix, true)} to ${eurEn(FORMULES.celebration.prix, true)} excl. VAT</strong>; for 50 people with 12 canapés, plan <strong>${eurEn(n50.sans, true)} excl. VAT</strong>, juice, water and delivery included. This guide helps you choose your caterer and set the date; the detailed menu and budget are in our guide to the <a href="/journal/cocktail-noel-entreprise-paris">company Christmas reception</a>.</p>

      <h2>What L'Écrin Traiteur delivers for a Christmas reception</h2>
      <table>
        <thead><tr><th>Item</th><th>What is included</th><th>Price excl. VAT</th></tr></thead>
        <tbody>
${K3.map(k => `          <tr><td><strong>${FORMULES[k].nom}</strong></td><td>${FORMULES[k].pieces} canapés per person, ${nbSale(k)} savoury and ${nbSucre(k)} sweet, arranged and ready to serve</td><td>${eurEn(FORMULES[k].prix, true)} per person</td></tr>`).join('\n')}
          <tr><td>Drinks</td><td>Juice (1 L for 4 people) and water (1 bottle for 5)</td><td>${eurEn(n50.b.coutJus + n50.b.coutEau, true)} for 50 people</td></tr>
          <tr><td>0% Chardonnay (option)</td><td>One flute per person for the toast</td><td>${eurEn(prixChard, true)} per bottle</td></tr>
          <tr><td>Delivery</td><td>Paris and nearby towns; with collection of the equipment in Paris, the 92 and the 94</td><td>${eurEn(LIV)}; ${eurEn(LIV_RECUP_PROCHE)} with collection</td></tr>
          <tr><td>Maître d'hôtel</td><td>Restocking, service and clearing, one for 25 to 30 guests</td><td>${eurEn(MH)} for 6 hours</td></tr>
          <tr><td>Tableware</td><td>Porcelain and glasses, through our partner Options</td><td>On quote</td></tr>
        </tbody>
      </table>
      <p>For 30 people, the same 12-canapé reception comes to ${eurEn(n30.sans, true)} excl. VAT; for 100 people, to ${eurEn(n100.sans, true)} excl. VAT. For a festive touch, the <a href="/creations/evenements-saisonniers/noel">Christmas at the office</a> offer adds, on quote, a salmon platter or a panettone to share.</p>

      <h2>Which dates to book in December 2026?</h2>
      <p>Here are the Thursdays and Fridays of the first three weeks of December 2026, each with the last moment to order from L'Écrin Traiteur.</p>
      <table>
        <thead><tr><th>Reception date</th><th>Under 50 people: order until</th><th>50 people or more: order final on</th></tr></thead>
        <tbody>
${DATES_DEC.map(d => `          <tr><td><strong>${decEn(d)}</strong></td><td>${decEn(d - 1)}, 10 am</td><td>${decEn(d - 2)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>These are order deadlines, not booking deadlines: to secure a December date, ask for a quote in November. The <a href="/journal/retroplanning-soiree-fin-annee-entreprise">end-of-year party timeline</a> details each step.</p>

      <h2>How to choose your caterer for the Christmas reception</h2>
      <ol>
        <li><strong>Get the date confirmed in writing</strong>: in December, availability matters as much as the menu.</li>
        <li><strong>Compare a delivered price per person, excl. VAT</strong>, drinks, staff and tableware included. Our <a href="/journal/fetes-fin-annee-entreprise-guide-chiffre-2026">costed guide to the end-of-year festivities</a> gives benchmarks.</li>
        <li><strong>Choose quantities by time of day</strong>: 8 canapés for 90-minute drinks, 12 for a short evening, 16 when the reception replaces dinner.</li>
        <li><strong>List dietary needs</strong>: at L'Écrin Traiteur, all savoury items are halal and pork-free, with vegetarian, vegan and gluten-free options.</li>
        <li><strong>Plan drinks for everyone</strong>: an alcohol-free list lets everyone raise a glass. See the <a href="/journal/cocktail-sans-alcool-entreprise-fin-annee">alcohol-free end-of-year party</a>.</li>
        <li><strong>Ask who serves and who clears</strong>: from around fifty guests, a maître d'hôtel spares your team an evening of clearing up.</li>
      </ol>
      <p>To compare with a meal or a buffet, see <a href="/journal/menu-noel-livre-entreprise-paris">Christmas menu delivered to the office</a> and <a href="/journal/soiree-fin-annee-entreprise-paris">company end-of-year party</a>.</p>

      <h2>Request a quote for December</h2>
      <p>Give the date, address, time and numbers: L'Écrin Traiteur replies within 24 hours. <a href="/devis">Request a quote</a> or see the <a href="/creations/cocktails">cocktail packages</a>.</p>
      ${SIGNATURE}

      <h2>Frequently asked questions about a Christmas caterer</h2>
${faqHtmlEn(FAQ_NOEL)}
    `,
  },

  'idees-evenement-entreprise-100-personnes-traiteur': {
    titre: 'Catering ideas for 100 people for a company event in Paris',
    metaTitle: 'Catering ideas for 100 people for a company event in Paris',
    extrait: "Six catering ideas for a company event for 100 people in Paris, from a welcome breakfast to a dinner reception, with the delivered budget at L'Écrin Traiteur and the criteria for choosing your caterer.",
    enBref: [
      `For a company event for 100 people in Paris, L'Écrin Traiteur delivers a cocktail reception at ${eurEn(c100.invitation.sans, true)} excl. VAT (8 canapés) to ${eurEn(c100.celebration.sans, true)} excl. VAT (16 canapés), juice, water and delivery included.`,
      `For 100 people, L'Écrin Traiteur also delivers a Classique breakfast at ${eurEn(cla100)} excl. VAT or lunch trays from ${eurEn(plat100)} excl. VAT, delivery included.`,
      `For a dinner reception for 100 guests, L'Écrin Traiteur plans ${mh100} maîtres d'hôtel at ${eurEn(MH)} excl. VAT each for 6 hours and needs 48 hours' notice.`,
    ],
    faq: FAQ_100,
    contenu: `
      <p>For a company event for 100 people in Paris, L'Écrin Traiteur delivers a cocktail reception at <strong>${eurEn(c100.invitation.sans, true)} excl. VAT with 8 canapés to ${eurEn(c100.celebration.sans, true)} excl. VAT with 16 canapés</strong>, juice, water and delivery included, that is ${eurEn(c100.invitation.sans / 100, true)} to ${eurEn(c100.celebration.sans / 100, true)} excl. VAT per person. Here are six ideas by moment, and how to choose your caterer at this scale. The detailed packages are in our guide to <a href="/journal/traiteur-entreprise-100-personnes">corporate catering for 100 people</a>.</p>

      <h2>Six catering ideas for 100 people</h2>
      <table>
        <thead><tr><th>Idea</th><th>For which event</th><th>Package</th><th>Delivered total excl. VAT</th><th>Per person excl. VAT</th></tr></thead>
        <tbody>
${IDEES_100_EN.map(i => `          <tr><td><strong>${i.idee}</strong></td><td>${i.quand}</td><td>${i.format}</td><td>${i.des ? 'from ' : ''}${eurEn(i.total, true)}</td><td>${i.des ? 'from ' : ''}${eurEn(i.total / 100, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Each total includes one ${eurEn(LIV)} delivery (excl. VAT) in Paris and nearby towns; the receptions also include juice and water. The full breakfast is on quote. The live station is counted at its floor price: its exact price is set in the quote.</p>

      <h2>Which idea for your event?</h2>
      <ul>
        <li><strong>Morning convention or plenary</strong>: a welcome breakfast served before the doors open. See <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a>.</li>
        <li><strong>Working day or training</strong>: individual <a href="/creations/plateaux-repas">lunch trays</a>, easy to hand out to 100 people.</li>
        <li><strong>Team evening or company party</strong>: a 16-canapé dinner reception, that is ${en(100 * 16)} canapés including ${en(100 * nbSale('celebration'))} savoury. The guide to the <a href="/journal/cocktail-entreprise-100-personnes">cocktail reception for 100 people</a> details the set-up with four buffet points.</li>
        <li><strong>An event that should stand out</strong>: an 8-canapé reception with a live station, such as the mocktail bar or mini burgers. See <a href="/journal/animations-culinaires-entreprise-idees-budget">live food stations at work</a>.</li>
      </ul>

      <h2>How to choose your caterer for 100 people</h2>
      <ol>
        <li><strong>Check it can deliver the volume in one go</strong>: 1,200 to 1,600 canapés, arranged and ready to set out, at the agreed time.</li>
        <li><strong>Compare a delivered price per person, excl. VAT</strong>, drinks, staff and tableware included.</li>
        <li><strong>Work out the staffing</strong>: one maître d'hôtel for 25 to 30 guests at a dinner reception, that is ${mh100} for 100 guests, ${eurEn(mh100 * MH)} excl. VAT at L'Écrin Traiteur. See <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel to plan</a>.</li>
        <li><strong>Plan for dietary needs</strong>: with 100 guests, there are always vegetarians and allergies. At L'Écrin Traiteur, all savoury items are halal and pork-free. See the <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">inclusive menu</a>.</li>
        <li><strong>Ask for collection of the equipment</strong>: ${eurEn(LIV_RECUP_PROCHE)} excl. VAT for delivery with collection in Paris, the 92 and the 94; porcelain tableware through our partner Options, on quote.</li>
        <li><strong>Respect the lead times</strong>: order final 48 hours ahead from 50 people, quote within 24 hours.</li>
      </ol>

      <h2>What quantities for 100 people?</h2>
      <p>Plan 8 canapés per person for drinks, 12 for a lunch reception and 16 for a dinner reception, two thirds to three quarters savoury. For drinks, ${c100.reception.b.jus} litres of juice and ${c100.reception.b.eau} bottles of water, plus ${c100.reception.b.chard} bottles of 0% Chardonnay as an option. Details in <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">how many canapés per person</a>.</p>

      <h2>Request a quote for 100 people</h2>
      <p>Give the date, address, time and format: L'Écrin Traiteur replies within 24 hours. <a href="/devis">Request a quote</a> or see the <a href="/creations/cocktails">cocktail packages</a>.</p>
      ${SIGNATURE}

      <h2>Frequently asked questions about an event for 100 people</h2>
${faqHtmlEn(FAQ_100)}
    `,
  },

  'traiteur-lancement-produit-soiree-clients-paris': {
    titre: 'Which caterer for a product launch or client evening in Paris?',
    metaTitle: 'Caterer for a product launch or client evening in Paris',
    extrait: "Product launch, client evening, partner reception: the format, the criteria for choosing your caterer and the delivered budget at L'Écrin Traiteur for 40, 80 and 120 guests.",
    enBref: [
      `For a product launch or client evening in Paris, L'Écrin Traiteur delivers a 12-canapé reception at ${eurEn(FORMULES.reception.prix, true)} excl. VAT per person, that is ${eurEn(l80.sans, true)} excl. VAT for 80 guests, juice, water and delivery included.`,
      `On request, L'Écrin Traiteur adds maîtres d'hôtel at ${eurEn(MH)} excl. VAT for 6 hours, porcelain tableware through its partner Options and a live food station from ${eurEn(ANIMATION_DES)} excl. VAT.`,
      `At L'Écrin Traiteur, all savoury items are halal and pork-free and the drinks list is alcohol-free, with a 0% Chardonnay as an option.`,
    ],
    faq: FAQ_LANCEMENT,
    contenu: `
      <p>For a product launch or client evening in Paris, L'Écrin Traiteur delivers a <strong>12-canapé reception at ${eurEn(FORMULES.reception.prix, true)} excl. VAT per person</strong>, that is <strong>${eurEn(l80.sans, true)} excl. VAT for 80 guests</strong>, juice, water and delivery included. In front of clients, the caterer is part of the message: here is how to choose one and what L'Écrin offers.</p>

      <h2>What budget for 40, 80 or 120 guests?</h2>
      <p>Delivered total excl. VAT: canapés, juice, water and one ${eurEn(LIV)} delivery (excl. VAT) in Paris and nearby towns.</p>
${tableEffectifsEn([40, 80, 120])}
      <p>For a two-hour evening, ${FORMULES.reception.nom} is enough; ${FORMULES.celebration.nom} suits an evening that replaces dinner.</p>

      <h2>What L'Écrin Traiteur offers for hosting clients</h2>
      <ul>
        <li><strong>Canapés arranged and ready to serve</strong>: ${nbSale('celebration')} savoury and ${nbSucre('celebration')} sweet canapés per person in ${FORMULES.celebration.nom}, including a carrot and chervil cake, an avocado and feta tartlet and a grilled vegetable navette. See the <a href="/creations/cocktails">cocktail packages</a>.</li>
        <li><strong>Table service</strong>: maîtres d'hôtel at ${eurEn(MH)} excl. VAT for 6 hours, one for 25 to 30 guests.</li>
        <li><strong>Porcelain tableware</strong> through our partner Options, on quote; delivery with collection of the equipment costs ${eurEn(LIV_RECUP_PROCHE)} excl. VAT in Paris, the 92 and the 94.</li>
        <li><strong>A highlight</strong>: salmon carving, sushi station or mocktail bar, from ${eurEn(ANIMATION_DES)} excl. VAT. See the <a href="/journal/bar-mocktails-barman-evenement-entreprise">mocktail bar with bartender</a>.</li>
        <li><strong>A menu for everyone</strong>: halal and pork-free savoury items, vegetarian, vegan and gluten-free options, alcohol-free drinks. See the <a href="/journal/cocktail-entreprise-halal-paris">halal corporate reception</a>.</li>
        <li><strong>A bespoke format</strong> for a larger reception: see <a href="/creations/receptions-sur-mesure">bespoke receptions</a>.</li>
      </ul>

      <h2>How to choose your caterer for a launch or client evening</h2>
      <ol>
        <li><strong>Punctuality</strong>: a launch runs to a tight schedule. Set a delivery time and an on-site contact.</li>
        <li><strong>Presentation</strong>: ask for a photo of the planned canapés and tableware, not just the list.</li>
        <li><strong>Staffing</strong>: your teams host the clients; restocking and clearing fall to the maîtres d'hôtel.</li>
        <li><strong>The delivered price per person</strong>, excl. VAT, with staff, tableware and live station: that is the figure to compare.</li>
        <li><strong>Your guests' dietary needs</strong>: collect them with the invitation (halal, vegetarian, vegan, gluten-free, allergies) and pass them on with the order.</li>
        <li><strong>Responsiveness</strong>: a quote within 24 hours and a company invoice with VAT.</li>
      </ol>

      <h2>Example: client evening for 80 guests</h2>
      <table>
        <thead><tr><th>Item</th><th>Detail</th><th>Amount excl. VAT</th></tr></thead>
        <tbody>
          <tr><td>Cocktail reception</td><td>80 × ${FORMULES.reception.nom}, juice, water and delivery</td><td>${eurEn(l80.sans, true)}</td></tr>
          <tr><td>Maîtres d'hôtel</td><td>${l80MH} × ${eurEn(MH)} for 6 hours</td><td>${eurEn(l80MH * MH, true)}</td></tr>
          <tr><td>Live food station</td><td>At the floor price; exact price on quote</td><td>from ${eurEn(ANIMATION_DES, true)}</td></tr>
          <tr><td><strong>Minimum total</strong></td><td>That is ${eurEn(l80Total / 80, true)} excl. VAT per person</td><td><strong>${eurEn(l80Total, true)}</strong></td></tr>
        </tbody>
      </table>
      <p>As an option, the 0% Chardonnay for the toast adds ${eurEn(l80.b.coutChard, true)} excl. VAT. The number of maîtres d'hôtel by guest count is explained in <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel to plan</a>. For a morning launch, see the <a href="/journal/petit-dejeuner-presse-accueil-cafe-lancement-produit">press breakfast and welcome coffee</a>; for a smaller meeting, <a href="/journal/recevoir-client-partenaire-entreprise-paris">hosting a client or partner at the office</a>.</p>

      <h2>Request a quote</h2>
      <p>Give the date, address, time and numbers: L'Écrin Traiteur replies within 24 hours. <a href="/devis">Request a quote</a>.</p>
      ${SIGNATURE}

      <h2>Frequently asked questions about a launch caterer</h2>
${faqHtmlEn(FAQ_LANCEMENT)}
    `,
  },

  'quel-traiteur-animation-culinaire-evenement-paris': {
    titre: 'Live food station for a company event in Paris: which caterer?',
    metaTitle: 'Live food station at a Paris company event: which caterer?',
    extrait: `Choosing your caterer for a live food station at a company event in Paris: L'Écrin Traiteur's ${AVEC_PLANCHER.length} live stations by moment, the ${eurEn(ANIMATION_DES)} excl. VAT floor, a costed example and the criteria for choosing.`,
    enBref: [
      `For a live food station at a company event in Paris, L'Écrin Traiteur offers ${AVEC_PLANCHER.length} live stations, from barista to mocktail bar, priced on quote with a ${eurEn(ANIMATION_DES)} excl. VAT floor.`,
      `At L'Écrin Traiteur, the floor price of a live station represents at least ${eurEn(ANIMATION_DES / 50)} excl. VAT per person for 50 guests and ${eurEn(ANIMATION_DES / 100)} excl. VAT for 100 guests.`,
      `With L'Écrin Traiteur, an 8-canapé reception and a live station for 50 guests cost at least ${eurEn(a50Total, true)} excl. VAT, juice, water and delivery included.`,
    ],
    faq: FAQ_ANIM,
    contenu: `
      <p>For a live food station at a company event in Paris, L'Écrin Traiteur offers <strong>${AVEC_PLANCHER.length} live stations</strong>, from salmon carving to a mocktail bar, priced on quote with a <strong>${eurEn(ANIMATION_DES)} excl. VAT floor</strong>, that is at least ${eurEn(ANIMATION_DES / 50)} excl. VAT per person for 50 guests. This guide helps you choose your caterer; ideas by moment are detailed in <a href="/journal/animations-culinaires-entreprise-idees-budget">live food stations at work</a>. To choose among all corporate event activities, food-based or not, by occasion and headcount, see our guide to <a href="/journal/idees-animation-entreprise">corporate event activity ideas</a>.</p>

      <h2>Which live stations does L'Écrin Traiteur offer?</h2>
      <table>
        <thead><tr><th>Category</th><th>For which moment</th><th>Live stations</th><th>Price excl. VAT</th></tr></thead>
        <tbody>
${UNIV.map(u => `          <tr><td><strong>${UNIV_EN[u.cle]}</strong></td><td>${MOMENT_EN[u.cle]}</td><td>${animsDe(u.cle).map(lienAnim).join(', ')}</td><td>from ${eurEn(ANIMATION_DES)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Espresso machine hire and infused waters, with no one on site, remain on quote. The full catalogue is on the <a href="/creations/animations-culinaires">live food stations</a> page.</p>

      <h2>What a live station includes</h2>
      <p>A chef or host who prepares or serves in front of your guests, the set-up, food scaled to guest numbers and, depending on the station, installation, dismantling or collection of the equipment. The price combines set-up and servings: it is set in the quote according to the date, venue, guest numbers, duration and access. The meat in the live stations is halal.</p>

      <h2>How much does a live station added to a reception cost?</h2>
      <table>
        <thead><tr><th>Guests</th><th>8-canapé reception delivered, juice and water</th><th>Live station at floor price</th><th>Minimum total excl. VAT</th><th>Per person</th></tr></thead>
        <tbody>
${[50, 100].map(n => { const c = cocktail(n, FORMULES.invitation); return `          <tr><td><strong>${n}</strong></td><td>${eurEn(c.sans, true)}</td><td>${eurEn(ANIMATION_DES, true)}</td><td>${eurEn(c.sans + ANIMATION_DES, true)}</td><td>${eurEn((c.sans + ANIMATION_DES) / n, true)}</td></tr>` }).join('\n')}
        </tbody>
      </table>
      <p>These are minimums: the actual price of the live station depends on the number of servings. For more ideas, see the <a href="/journal/animation-culinaire-entreprise-paris">10 live food station ideas</a> and the <a href="/journal/mini-burgers-afterwork-cocktail-entreprise-paris">afterwork mini burgers</a>.</p>

      <h2>How to choose your caterer for a live food station</h2>
      <ol>
        <li><strong>Start from guest numbers</strong>: from 20 guests, the floor price spreads out; below that, a delivered reception costs less.</li>
        <li><strong>Choose by moment</strong>: barista or juice bar in the morning, crêpes at the break, salmon carving or sushi at a reception, mini burgers at an afterwork.</li>
        <li><strong>Ask what is included</strong>: chef or host, duration, equipment, number of servings, set-up and dismantling.</li>
        <li><strong>Give the technical constraints</strong>: space, power socket, access and set-up times.</li>
        <li><strong>Check dietary needs</strong>: vegetarian options (plant-based patty, falafel), gluten-free to be specified with the order.</li>
        <li><strong>Combine rather than add</strong>: the live station replaces part of the canapés of a reception. See the <a href="/creations/cocktails">cocktail packages</a>.</li>
      </ol>
      <p>For a complete event, see also the <a href="/journal/bar-mocktails-barman-evenement-entreprise">mocktail bar with bartender</a> and <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel to plan</a>.</p>

      <h2>Request a quote</h2>
      <p>Give the date, venue, guest numbers, duration and access: L'Écrin Traiteur replies within 24 hours, with the order final 48 hours ahead from 50 people. <a href="/devis">Request a live station quote</a>.</p>
      ${SIGNATURE}

      <h2>Frequently asked questions about a live food station caterer</h2>
${faqHtmlEn(FAQ_ANIM)}
    `,
  },
}
