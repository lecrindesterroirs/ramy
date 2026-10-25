/*
  Surcouche anglaise de lib/journalCocktailFin.js (24 octobre 2026) :
  cocktail dînatoire pour 50 et 80 personnes, cocktail de Noël.

  Les montants sont RECALCULÉS par les fonctions françaises de lib/calculsPrix.js
  (cocktail, FORMULES, LIV) : aucun chiffre n'est recopié. La composition des
  menus vient de lib/en/produits/cocktails.js. Les href restent en chemins français.
*/
import { LIV, FORMULES, cocktail } from '../../calculsPrix'
import { MINIMUM } from '../../prixEntree'
import { enCocktail } from '../produits/cocktails'
import { eurEn, faqHtmlEn } from './budget'

const MH = 250 // maître d'hôtel: €250 excl. VAT for 6 hours (same value as the French guide)

const num = (x) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const SIGNATURE_EN = `<p><em>L'Écrin Traiteur prices, October 2026, in euros excluding VAT. Calculation: canapés, juice, water and one delivery at €${LIV} excl. VAT, Paris and nearby towns. Minimum order €${MINIMUM} excl. VAT.</em></p>`

const CLES = { invitation: 'classique', reception: 'signature', celebration: 'prestige' }
const carte = (k) => enCocktail(CLES[k])
const nbSale = (k) => carte(k).sale.length
const nbSucre = (k) => carte(k).sucre.length
const listeMenu = (arr) => arr.map(s => s.replace(/ & /g, ' and ')).join('; ')
const prixChard = (c) => c.b.coutChard / c.b.chard
const K3 = ['invitation', 'reception', 'celebration']

const tableCocktail = (c) => `
      <table>
        <thead><tr><th>Item</th><th>Quantity</th><th>Total excl. VAT</th></tr></thead>
        <tbody>
          <tr><td>${c.f.nom}, ${c.f.pieces} canapés at ${eurEn(c.f.prix, true)} per person</td><td>${c.n} people</td><td>${eurEn(c.pieces, true)}</td></tr>
          <tr><td>Juice (orange and apple), 1 L for 4 people</td><td>${c.b.jus} L</td><td>${eurEn(c.b.coutJus, true)}</td></tr>
          <tr><td>Water, one 75 cl bottle for 5 people</td><td>${c.b.eau}</td><td>${eurEn(c.b.coutEau, true)}</td></tr>
          <tr><td>Delivery</td><td>1</td><td>${eurEn(LIV, true)}</td></tr>
          <tr><td><strong>Total without 0% Chardonnay</strong></td><td></td><td><strong>${eurEn(c.sans, true)}</strong></td></tr>
          <tr><td>Option: 0% Chardonnay, 1 flute per person (75 cl bottle at ${eurEn(prixChard(c), true)})</td><td>${c.b.chard} bottles</td><td>${eurEn(c.b.coutChard, true)}</td></tr>
          <tr><td><strong>Total with 0% Chardonnay</strong></td><td></td><td><strong>${eurEn(c.avec, true)}</strong></td></tr>
        </tbody>
      </table>`

const tableTroisFormules = (n) => `
      <table>
        <thead><tr><th>Package</th><th>Canapés</th><th>Savoury / sweet</th><th>Delivered total excl. VAT</th><th>Per person excl. VAT</th></tr></thead>
        <tbody>
${K3.map(k => { const c = cocktail(n, FORMULES[k]); return `          <tr><td><strong>${c.f.nom}</strong> (${c.f.pieces} per person)</td><td>${num(n * c.f.pieces)}</td><td>${num(n * nbSale(k))} / ${num(n * nbSucre(k))}</td><td>${eurEn(c.sans, true)}</td><td>${eurEn(c.sans / n, true)}</td></tr>` }).join('\n')}
        </tbody>
      </table>`

/* ───── 1 : 50 people ───── */
const d50 = cocktail(50, FORMULES.celebration)
const d45 = cocktail(45, FORMULES.celebration)
const d55 = cocktail(55, FORMULES.celebration)
const r50 = cocktail(50, FORMULES.reception)

const FAQ_50 = [
  { q: 'How many canapés for a dinner cocktail reception for 50 people?', a: `At L'Écrin Traiteur, 16 to 18 canapés per person, so 800 to 900 pieces. La Célébration has 16 per person: ${num(50 * 16)} pieces, of which ${num(50 * nbSale('celebration'))} savoury and ${num(50 * nbSucre('celebration'))} sweet.` },
  { q: 'What budget for a dinner cocktail reception for 50 people?', a: `At L'Écrin Traiteur, ${eurEn(d50.sans, true)} excl. VAT with La Célébration, including juice, water and delivery, that is ${eurEn(d50.sans / 50, true)} excl. VAT per person. With a 0% Chardonnay for the toast: ${eurEn(d50.avec, true)} excl. VAT.` },
  { q: 'How many drinks for 50 people?', a: `${d50.b.jus} litres of juice, ${d50.b.eau} bottles of 75 cl water and, as an option, ${d50.b.chard} bottles of 0% Chardonnay, one flute per person. The menu is alcohol-free.` },
  { q: 'How far ahead should you order for 50 people?', a: 'From 50 people, the order is firm 48 hours before delivery. Ask for the quote two to three weeks ahead to settle the package and dietary needs.' },
  { q: 'Do you need a maître d\'hôtel for 50 people?', a: `It is not required: the canapés arrive arranged. To restock and clear, allow 1 to 2 maîtres d'hôtel, at ${eurEn(MH)} excl. VAT each for 6 hours.` },
]

/* ───── 2 : 80 people ───── */
const d80 = cocktail(80, FORMULES.celebration)
const d90 = cocktail(90, FORMULES.celebration)
const r80 = cocktail(80, FORMULES.reception)
const mh80 = [Math.ceil(80 / 40), Math.ceil(80 / 20)]
const d80Service = d80.sans + mh80[0] * MH

const FAQ_80 = [
  { q: 'What is the price per person of a dinner cocktail reception for 80 people in Paris?', a: `At L'Écrin Traiteur, ${eurEn(d80.sans / 80, true)} excl. VAT per person with La Célébration (16 canapés), juice, water and delivery included, that is ${eurEn(d80.sans, true)} excl. VAT in total. With 12 canapés, La Réception comes to ${eurEn(r80.sans / 80, true)} excl. VAT per person.` },
  { q: 'How many canapés for 80 people?', a: `16 to 18 per person for a dinner reception, so 1,280 to 1,440 pieces. La Célébration delivers ${num(80 * 16)} pieces: ${num(80 * nbSale('celebration'))} savoury and ${num(80 * nbSucre('celebration'))} sweet.` },
  { q: 'How many maîtres d\'hôtel for 80 guests?', a: `For a standing reception, 1 maître d'hôtel for 20 to 40 guests: ${mh80[0]} to ${mh80[1]} for 80 people. At ${eurEn(MH)} excl. VAT for 6 hours, that is ${eurEn(mh80[0] * MH)} to ${eurEn(mh80[1] * MH)} excl. VAT.` },
  { q: 'When should you order a cocktail reception for 80 people?', a: 'From 50 people, the order is firm 48 hours before delivery. For a date in late November or December, ask for the quote three to four weeks ahead.' },
  { q: 'Is the cocktail reception halal and alcohol-free?', a: 'The savoury canapés are halal and pork-free, and the menu is alcohol-free, at no extra cost. We do not claim a halal certification issued by a certifying body.' },
]

/* ───── 3 : Christmas ───── */
const EFF = [30, 50, 100]
const noel = (n, k) => cocktail(n, FORMULES[k])
const c30 = noel(30, 'reception')
const c50 = noel(50, 'reception')
const c100 = noel(100, 'reception')

const FAQ_NOEL = [
  { q: 'What budget for a company Christmas cocktail reception?', a: `At L'Écrin Traiteur, from ${eurEn(noel(30, 'invitation').sans / 30, true)} to ${eurEn(noel(30, 'celebration').sans / 30, true)} excl. VAT per person for 30 people, juice, water and delivery included. For 50 people with La Réception (12 canapés): ${eurEn(c50.sans, true)} excl. VAT.` },
  { q: 'How many canapés per person for a Christmas cocktail reception?', a: '8 for an end-of-day drinks, 12 if the reception replaces lunch or opens a short evening, 16 for a dinner reception that replaces dinner.' },
  { q: 'When should you order the company Christmas cocktail reception?', a: 'Book the date in November. The order becomes firm at 2 pm the day before below 50 people, and 48 hours before from 50 people.' },
  { q: 'What can you serve for an alcohol-free toast?', a: `A Blanc de Blancs 0% Chardonnay at ${eurEn(prixChard(c50), true)} excl. VAT per 75 cl bottle, one flute per person: ${c50.b.chard} bottles for 50 people. The whole menu is alcohol-free.` },
  { q: 'Is the Christmas cocktail reception halal?', a: 'The savoury canapés are halal and pork-free, at no extra cost. We do not claim a halal certification issued by a certifying body. Vegetarian, vegan and gluten-free options are set in the quote.' },
]

export const EN_JOURNAL = {
  'cocktail-dinatoire-50-personnes-quantites-budget': {
    titre: 'Dinner cocktail reception for 50 people: how many canapés and what budget?',
    metaTitle: 'Dinner cocktail reception for 50 people: canapés and budget',
    extrait: `For 50 people: 16 to 18 canapés each, so 800 to 900. La Célébration comes to ${eurEn(d50.sans, true)} excl. VAT with drinks and delivery at L'Écrin Traiteur.`,
    enBref: [
      `At L'Écrin Traiteur, a dinner cocktail reception for 50 people has 16 canapés per person, so ${num(50 * 16)} pieces with La Célébration.`,
      `L'Écrin Traiteur delivers it for ${eurEn(d50.sans, true)} excl. VAT with juice, water and delivery, that is ${eurEn(d50.sans / 50, true)} excl. VAT per person.`,
      'At L\'Écrin Traiteur, an order for 50 people is firm 48 hours ahead, and the savoury canapés are halal and pork-free.',
    ],
    contenu: `
      <p>At L'Écrin Traiteur, a dinner cocktail reception for 50 people takes <strong>16 to 18 canapés per person, so 800 to 900 pieces</strong>. L'Écrin Traiteur's La Célébration package, 16 canapés at ${eurEn(FORMULES.celebration.prix, true)} excl. VAT per person, comes to <strong>${eurEn(d50.sans, true)} excl. VAT</strong> with juice, water and delivery, that is ${eurEn(d50.sans / 50, true)} excl. VAT per person.</p>

      <h2>How many canapés for a dinner cocktail reception for 50 people?</h2>
      <p>A dinner reception replaces dinner: allow at least 16 pieces per person, 18 if the evening runs past three hours. For 50 guests, that makes ${num(50 * 16)} pieces. La Célébration has ${nbSale('celebration')} savoury and ${nbSucre('celebration')} sweet pieces per person, so ${num(50 * nbSale('celebration'))} savoury and ${num(50 * nbSucre('celebration'))} sweet. The savoury goes first, the sweet closes the evening.</p>

      <h2>How long does a dinner cocktail reception last?</h2>
      <p>Allow two and a half to three hours. The 16 canapés of La Célébration are sized for that length: about one piece every ten minutes, with a peak in the first hour. Beyond three hours, move to 18 pieces per person by adding savoury canapés to the quote.</p>

      <h2>What budget for each package?</h2>
      <p>The table counts the canapés, the alcohol-free drinks (1 litre of juice for 4 people, one 75 cl bottle of water for 5) and one delivery at €${LIV} excl. VAT.</p>${tableTroisFormules(50)}
      <p>L'Invitation, with 8 canapés, suits drinks of an hour and a half, not a dinner. La Réception, with 12, works for a short evening after a lunch: ${eurEn(d50.sans - r50.sans, true)} less than La Célébration. For a smaller group, see the <a href="/journal/cocktail-dinatoire-pour-30-personnes-quantites-budget">dinner cocktail reception for 30 people</a>.</p>

      <h2>The La Célébration budget in detail</h2>${tableCocktail(d50)}
      <p>The package price per person does not change with headcount. Only the delivery and the opened bottles spread better as the group grows.</p>

      <h2>What if the headcount changes?</h2>
      <p>Each guest adds ${eurEn(FORMULES.celebration.prix, true)} excl. VAT of canapés, and drinks follow in steps. At 45 people the same reception comes to ${eurEn(d45.sans, true)} excl. VAT; at 55 people, ${eurEn(d55.sans, true)} excl. VAT. Confirm the headcount two days ahead, adding 10% if last-minute guests are possible.</p>

      <h2>Which drinks should you plan for 50 people?</h2>
      <p>Allow ${d50.b.jus} litres of juice (orange and apple), ${d50.b.eau} bottles of 75 cl water and, as an option, ${d50.b.chard} bottles of 0% Chardonnay for the toast, one flute per person. The menu is alcohol-free. The guide <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">how many drinks per person</a> sets out the rules.</p>

      <h2>How should you organise service for 50 people?</h2>
      <ul>
        <li><strong>Two buffet points</strong> rather than one: at 50, a single table creates a queue.</li>
        <li><strong>Savoury in two rounds</strong>: half at the start, the rest thirty to forty minutes later.</li>
        <li><strong>Sweet in the last hour</strong>, with coffee if you serve it.</li>
        <li><strong>One or two maîtres d'hôtel</strong>, on quote, to restock and clear: ${eurEn(MH)} excl. VAT each for 6 hours. See <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel for an event</a>.</li>
      </ul>

      <h2>Is the cocktail reception halal and alcohol-free?</h2>
      <p>The savoury canapés are halal and pork-free, and the menu is alcohol-free, at no extra cost. We do not claim a halal certification issued by a certifying body. The packages have a fixed composition: state vegetarian, vegan or gluten-free needs when you ask for a quote.</p>

      <h2>How can you reduce the budget?</h2>
      <p>Confirm the real headcount two days ahead rather than rounding up, and choose the package by time of day, not by headcount. The other levers are in the guide <a href="/journal/cocktail-dinatoire-pas-cher-entreprise-budget">affordable dinner cocktail reception</a>. For a lunchtime reception for 50 people, see <a href="/journal/cocktail-entreprise-50-personnes">company cocktail reception for 50 people</a>.</p>

      <h2>How do you order?</h2>
      <p>From 50 people, the order is firm 48 hours before delivery. Ask for a <a href="/devis">quote</a> within 24 hours, or see the <a href="/creations/cocktails/prestige">La Célébration</a> package and the other <a href="/creations/cocktails">cocktail packages</a>. Delivery in Paris and the Paris region, company invoice with VAT. For a larger group, see the <a href="/journal/cocktail-dinatoire-80-personnes-entreprise-paris">dinner cocktail reception for 80 people</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about the dinner cocktail reception for 50 people</h2>
${faqHtmlEn(FAQ_50)}
    `,
    faq: FAQ_50,
  },

  'cocktail-dinatoire-80-personnes-entreprise-paris': {
    titre: 'Company dinner cocktail reception for 80 people in Paris: price per person, menu and organisation',
    metaTitle: 'Dinner cocktail reception for 80 in Paris: price and menu',
    extrait: `For 80 people, a dinner cocktail reception delivered to the office comes to ${eurEn(d80.sans / 80, true)} excl. VAT per person at L'Écrin Traiteur, drinks and delivery included. Menu, quantities and service.`,
    enBref: [
      `At L'Écrin Traiteur, a 16-canapé dinner reception for 80 people comes to ${eurEn(d80.sans / 80, true)} excl. VAT per person, juice, water and delivery included.`,
      `L'Écrin Traiteur delivers ${num(80 * 16)} canapés to the office for ${eurEn(d80.sans, true)} excl. VAT, on an order made firm 48 hours ahead.`,
      `With ${mh80[0]} maîtres d'hôtel at ${eurEn(MH)} excl. VAT each for 6 hours, L'Écrin Traiteur's reception for 80 people comes to ${eurEn(d80Service, true)} excl. VAT.`,
    ],
    contenu: `
      <p>At L'Écrin Traiteur, a company dinner cocktail reception for 80 people in Paris comes to <strong>${eurEn(d80.sans / 80, true)} excl. VAT per person</strong>, that is <strong>${eurEn(d80.sans, true)} excl. VAT</strong> delivered to the office, juice, water and delivery included. This is the La Célébration package: 16 canapés per person, ${num(80 * 16)} in total, arranged and ready to serve.</p>

      <h2>What price per person for 80 guests?</h2>
      <p>The package price per person is fixed. Drinks and delivery add a few euros per guest. Here are the three packages for 80 people, delivery and alcohol-free drinks included.</p>${tableTroisFormules(80)}
      <p>For a standing dinner, choose La Célébration. La Réception, with 12 canapés, suits a reception of under two hours or one that follows a meal: ${eurEn(r80.sans, true)} excl. VAT, ${eurEn(d80.sans - r80.sans, true)} less.</p>

      <h2>The budget line by line</h2>${tableCocktail(d80)}
      <p>Drinks follow our quoting rules: 1 litre of juice for 4 people, one 75 cl bottle of water for 5, one flute of 0% Chardonnay per person if you toast. For the full price grids, see the <a href="/journal/budget-cocktail-entreprise-paris">budget for a company cocktail reception in Paris</a>.</p>

      <h2>What menu for a dinner cocktail reception for 80 people?</h2>
      <p>La Célébration has ${nbSale('celebration')} savoury and ${nbSucre('celebration')} sweet canapés per person, so ${num(80 * nbSale('celebration'))} savoury and ${num(80 * nbSucre('celebration'))} sweet for 80 guests.</p>
      <ul>
        <li><strong>Savoury (${nbSale('celebration')} pieces)</strong>: ${listeMenu(carte('celebration').sale)}.</li>
        <li><strong>Sweet (${nbSucre('celebration')} pieces)</strong>: ${listeMenu(carte('celebration').sucre)}.</li>
      </ul>
      <p>All savoury canapés are halal and pork-free, with no alcohol in the recipes. Eight of the twelve savoury pieces contain no meat or fish: they suit vegetarians. For more ideas, see <a href="/journal/idees-pieces-cocktail-entreprise">canapé ideas</a> and the guide <a href="/journal/cocktail-entreprise-halal-paris">halal company cocktail reception</a>.</p>

      <h2>How does office delivery work?</h2>
      <ul>
        <li><strong>Lead time</strong>: from 50 people, the order is firm 48 hours before delivery. The quote arrives within 24 hours.</li>
        <li><strong>Delivery</strong>: by L'Écrin's own team, €${LIV} excl. VAT in Paris and nearby towns. Elsewhere in the Paris region, the quote states the rate.</li>
        <li><strong>Set-up</strong>: the trays arrive arranged; if needed, we set them out on your tables.</li>
        <li><strong>Tableware</strong>: china, glasses and tablecloths through our partner Options, on quote. See <a href="/journal/vaisselle-jetable-reutilisable-traiteur-loi">disposable or reusable tableware</a>.</li>
      </ul>

      <h2>Do you need maîtres d'hôtel for 80 people?</h2>
      <p>At 80, yes, it is recommended: someone restocks the buffets, clears glasses and keeps tables tidy. Allow 1 maître d'hôtel for 20 to 40 standing guests, so ${mh80[0]} to ${mh80[1]}. At L'Écrin Traiteur, a maître d'hôtel costs ${eurEn(MH)} excl. VAT for 6 hours, set-up and clearing included.</p>
      <table>
        <thead><tr><th>Item</th><th>Total excl. VAT</th><th>Per person excl. VAT</th></tr></thead>
        <tbody>
          <tr><td>La Célébration, drinks and delivery</td><td>${eurEn(d80.sans, true)}</td><td>${eurEn(d80.sans / 80, true)}</td></tr>
          <tr><td>${mh80[0]} maîtres d'hôtel, 6 hours</td><td>${eurEn(mh80[0] * MH, true)}</td><td>${eurEn(mh80[0] * MH / 80, true)}</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>${eurEn(d80Service, true)}</strong></td><td><strong>${eurEn(d80Service / 80, true)}</strong></td></tr>
        </tbody>
      </table>
      <p>The ratios are set out in the guide <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel for a company event</a>.</p>

      <h2>How should you organise the evening?</h2>
      <p>Plan three buffet points for 80 people, away from the entrance. Serve half the savoury at the start, the rest after the speech, then the sweet in the last hour. Keep water and juice on a separate table to free the buffets. A dinner reception lasts two and a half to three hours. If the headcount rises to 90, the same reception comes to ${eurEn(d90.sans, true)} excl. VAT: confirm the final number before the order becomes firm, 48 hours ahead. For 50 or 100 guests, see the <a href="/journal/cocktail-dinatoire-50-personnes-quantites-budget">dinner cocktail reception for 50 people</a> and the <a href="/journal/cocktail-entreprise-100-personnes">company cocktail reception for 100 people</a>.</p>

      <h2>How do you order?</h2>
      <p>Give us the date, address, time and headcount: we send a <a href="/devis">quote</a> within 24 hours, with a company invoice and VAT. The package is described on the <a href="/creations/cocktails/prestige">La Célébration</a> page, with the other <a href="/creations/cocktails">cocktail packages</a>. For the format in general, see the <a href="/journal/cocktail-dinatoire-entreprise-paris">company dinner cocktail reception in Paris</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about the dinner cocktail reception for 80 people</h2>
${faqHtmlEn(FAQ_80)}
    `,
    faq: FAQ_80,
  },

  'cocktail-noel-entreprise-paris': {
    titre: 'Company Christmas cocktail reception in Paris: menu, quantities and budget for 30, 50 and 100 people',
    metaTitle: 'Company Christmas cocktail reception in Paris: menu and budget',
    extrait: `Christmas cocktail reception for 30, 50 or 100 people: canapés, alcohol-free drinks and delivered budget. At L'Écrin Traiteur, ${eurEn(c50.sans, true)} excl. VAT for 50 people with 12 canapés.`,
    enBref: [
      `At L'Écrin Traiteur, a 12-canapé Christmas cocktail reception for 50 people comes to ${eurEn(c50.sans, true)} excl. VAT, juice, water and delivery included.`,
      `L'Écrin Traiteur offers three packages of 8, 12 and 16 canapés, from ${eurEn(FORMULES.invitation.prix, true)} to ${eurEn(FORMULES.celebration.prix, true)} excl. VAT per person.`,
      'For December, L\'Écrin Traiteur advises booking in November; from 50 people, the order is firm 48 hours ahead.',
    ],
    contenu: `
      <p>At L'Écrin Traiteur, a company Christmas cocktail reception costs <strong>${eurEn(FORMULES.invitation.prix, true)} to ${eurEn(FORMULES.celebration.prix, true)} excl. VAT per person</strong> depending on the package, plus drinks and delivery. For 50 people with 12 canapés, allow <strong>${eurEn(c50.sans, true)} excl. VAT</strong> delivered, juice and water included, that is ${eurEn(c50.sans / 50, true)} excl. VAT per person.</p>

      <h2>What budget for 30, 50 and 100 people?</h2>
      <p>Each cell gives the delivered total: canapés, juice (1 litre for 4 people), water (one 75 cl bottle for 5) and one delivery at €${LIV} excl. VAT in Paris and nearby towns.</p>
      <table>
        <thead><tr><th>Headcount</th><th>L'Invitation, 8 canapés</th><th>La Réception, 12 canapés</th><th>La Célébration, 16 canapés</th></tr></thead>
        <tbody>
${EFF.map(n => `          <tr><td><strong>${n} people</strong></td>${K3.map(k => { const c = noel(n, k); return `<td>${num(n * c.f.pieces)} canapés · ${eurEn(c.sans, true)}</td>` }).join('')}</tr>`).join('\n')}
        </tbody>
      </table>
      <p>Per person, this ranges from ${eurEn(noel(100, 'invitation').sans / 100, true)} excl. VAT (100 people with L'Invitation) to ${eurEn(noel(30, 'celebration').sans / 30, true)} excl. VAT (30 people with La Célébration). Details by headcount are in the guides for <a href="/journal/cocktail-dinatoire-pour-30-personnes-quantites-budget">30 people</a>, <a href="/journal/cocktail-dinatoire-50-personnes-quantites-budget">50 people</a> and <a href="/journal/cocktail-entreprise-100-personnes">100 people</a>.</p>

      <h2>What menu for a Christmas cocktail reception?</h2>
      <p>La Réception, the 12-canapé package, covers a late-afternoon reception or a short evening. It has ${nbSale('reception')} savoury and ${nbSucre('reception')} sweet canapés per person:</p>
      <ul>
        <li><strong>Savoury</strong>: ${listeMenu(carte('reception').sale)}.</li>
        <li><strong>Sweet</strong>: ${listeMenu(carte('reception').sucre)}.</li>
      </ul>
      <p>For 50 people, that makes ${num(50 * nbSale('reception'))} savoury and ${num(50 * nbSucre('reception'))} sweet canapés. La Célébration adds four pieces per person, including the avocado and feta tartlet and the blueberry tartlet: see the <a href="/journal/cocktail-dinatoire-80-personnes-entreprise-paris">full 16-canapé menu</a>.</p>

      <h2>Which package for which time of day?</h2>
      <ul>
        <li><strong>End-of-day drinks, 1 hour 30</strong>: L'Invitation, 8 canapés per person.</li>
        <li><strong>Lunch reception or short evening</strong>: La Réception, 12 canapés.</li>
        <li><strong>Evening that replaces dinner</strong>: La Célébration, 16 canapés.</li>
      </ul>
      <p>The savoury canapés are halal and pork-free, with no alcohol in the recipes. For a festive touch, the <a href="/creations/evenements-saisonniers/noel">Christmas at the office</a> offer adds a salmon platter or a panettone to share, on quote.</p>

      <h2>When should you order for December?</h2>
      <table>
        <thead><tr><th>When</th><th>What to do</th></tr></thead>
        <tbody>
          <tr><td><strong>In November</strong></td><td>Book the date: December dates fill up fast. Set an estimated headcount and ask for a quote.</td></tr>
          <tr><td><strong>3 weeks before</strong></td><td>Choose the package by time of day; add maîtres d'hôtel and tableware if needed.</td></tr>
          <tr><td><strong>1 week before</strong></td><td>List dietary needs: vegetarian, vegan, gluten-free, allergies.</td></tr>
          <tr><td><strong>48 hours before</strong></td><td>Firm order from 50 people: final headcount and quantities.</td></tr>
          <tr><td><strong>The day before, 2 pm</strong></td><td>Last deadline below 50 people.</td></tr>
        </tbody>
      </table>
      <p>Example: for a reception for 50 people on Thursday 17 December 2026, the order is firm on Tuesday 15 December. For 30 people on the same day, you can order until 2 pm on Wednesday 16 December. If your date is already set, ask for the quote now. The <a href="/journal/retroplanning-soiree-fin-annee-entreprise">year-end party countdown</a> sets out each step.</p>

      <h2>Which alcohol-free drinks should you serve?</h2>
      <p>The whole menu is alcohol-free. For the toast, the Blanc de Blancs 0% Chardonnay is an option, at ${eurEn(prixChard(c50), true)} excl. VAT per 75 cl bottle, one flute per person.</p>
      <table>
        <thead><tr><th>Headcount</th><th>Juice</th><th>Water 75 cl</th><th>0% Chardonnay (option)</th><th>Cost of the option excl. VAT</th></tr></thead>
        <tbody>
${[c30, c50, c100].map(c => `          <tr><td>${c.n} people</td><td>${c.b.jus} L</td><td>${c.b.eau}</td><td>${c.b.chard} bottles</td><td>${eurEn(c.b.coutChard, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>The guide <a href="/journal/cocktail-sans-alcool-entreprise-fin-annee">alcohol-free year-end party</a> presents the juices, infusions and waters on the menu.</p>

      <h2>Do you need staff?</h2>
      <p>The canapés arrive arranged and ready to serve. From around fifty guests, a maître d'hôtel helps restock and clear: ${eurEn(MH)} excl. VAT for 6 hours. China tableware comes from our partner Options, on quote.</p>

      <h2>What about other year-end formats?</h2>
      <p>To compare cocktail reception, buffet and lunch trays, see <a href="/journal/menu-noel-livre-entreprise-paris">Christmas menu delivered to the office</a>, <a href="/journal/soiree-fin-annee-entreprise-paris">company year-end party</a> and the <a href="/journal/fetes-fin-annee-entreprise-guide-chiffre-2026">2026 year-end guide in figures</a>.</p>

      <h2>How do you order?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours with the date, address and headcount, or see the <a href="/creations/cocktails">cocktail packages</a>. Delivery in Paris and the Paris region, company invoice with VAT, minimum order €${MINIMUM} excl. VAT.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions about the company Christmas cocktail reception</h2>
${faqHtmlEn(FAQ_NOEL)}
    `,
    faq: FAQ_NOEL,
  },
}
