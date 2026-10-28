/*
  Surcouche anglaise de lib/journalGeoGuides.js (texte seulement ; voir LEXIQUE.md). 19 octobre 2026.

  Les montants sont RECALCULÉS par les fonctions françaises (pdj, cocktail, FORMULES, LIV de
  lib/journalQuestions.js) et formatés par eurEn : aucun total n'est recopié. Le petit-déjeuner complet est sur devis
  (décision du 24/10/2026) : seul le Classique est chiffré, n × 8 € + 29 € de livraison. Les prix de base
  (plateaux, lunch box, Classique, pause, maître d'hôtel) sont les mêmes constantes que le français.
  Les href restent les chemins français : ils sont réécrits en /en au rendu.
*/
import { pdj, cocktail, FORMULES, LIV } from '../../journalQuestions'
import { eurEn, faqHtmlEn } from './budget'

const x2 = (x) => eurEn(x, true)
const SIGNATURE_EN = `<p><em>L'Écrin Traiteur prices, October 2026, in euros excluding VAT. Delivery €29 excl. VAT in Paris and nearby towns, other areas on quote. Minimum order €50 excl. VAT.</em></p>`

/* Prix de base : identiques à lib/journalGeoGuides.js */
const PLATEAU = { vege: 28.9, poulet: 29.9, poisson: 30.9 }
const LUNCH = { min: 18.9, max: 21.9 }
const CLASSIQUE = 8
const PAUSE = 6
const MH = 250

const p10 = pdj(10)
const p20 = pdj(20)
const p100 = pdj(100)
const cla = (n) => n * CLASSIQUE + LIV // Classic breakfast delivered, € excl. VAT
const pu = (r, debut) => r.lignes.find(l => l.label.startsWith(debut)).pu
const PU_THERMOS = pu(p20, 'Thermos de café')
const PU_JUS = pu(p20, "Jus d'orange")
const PU_PLATEAU30 = pu(p20, 'Plateau de 30')

const inv100 = cocktail(100, FORMULES.invitation)
const rec100 = cocktail(100, FORMULES.reception)
const cel100 = cocktail(100, FORMULES.celebration)
const PU_EAU = rec100.b.coutEau / rec100.b.eau
const PU_CHARD = rec100.b.coutChard / rec100.b.chard
const boissonsCocktailParPers = (rec100.b.coutJus + rec100.b.coutEau) / 100

const plat100 = (prix) => 100 * prix + LIV
const plat110 = (prix) => 110 * prix + LIV
const mix100 = 67 * PLATEAU.poulet + 33 * PLATEAU.vege + LIV
const SEM_PERS = CLASSIQUE + 2 * PAUSE + PLATEAU.poulet
const sem100 = 100 * SEM_PERS + 2 * LIV

const INV = FORMULES.invitation
const REC = FORMULES.reception
const CEL = FORMULES.celebration

/* ═════════════════════ 1 : how much per person ═════════════════════ */
const FAQ_PAR_PERSONNE = [
  { q: 'How much food per person for an office breakfast?', a: `2 mini pastries (3 for up to 10 people), 1 small sweet, 1 glass of juice of 20 cl, 1 fruit skewer above 15 people and one 1-litre thermos for 6. At L'Écrin Traiteur, plan ${eurEn(CLASSIQUE)} per person excl. VAT for the Classic package, the full breakfast on quote, plus delivery.` },
  { q: 'How many canapés per person?', a: `6 to 8 canapés for drinks, 12 to 14 for a lunch reception and 16 to 18 for a dinner reception. L'Écrin Traiteur packages have 8, 12 and 16 canapés, at ${x2(INV.prix)}, ${x2(REC.prix)} and ${x2(CEL.prix)} per person excl. VAT.` },
  { q: 'How many lunch trays should you order?', a: `At L'Écrin Traiteur, one tray per person attending, plus 10% if the list is not named. A tray costs ${x2(PLATEAU.vege)} to ${x2(PLATEAU.poisson)} excl. VAT and includes a starter, a main, a dessert, bread, cutlery and napkins.` },
  { q: 'How many drinks per person?', a: `In a meeting, L'Écrin Traiteur plans 1 hot drink per person, that is one 1-litre thermos for 6. At breakfast, 1 glass of juice of 20 cl. At a cocktail reception, 1 litre of juice for 4 people and one 75 cl bottle of water for 5, about ${x2(boissonsCocktailParPers)} per person excl. VAT.` },
  { q: 'How many desserts per person?', a: 'At L\'Écrin Traiteur, 1.5 to 2 sweet pieces for a break, 2 to 3 for a buffet, 4 for a dinner reception. In the cocktail reception packages, the sweet pieces are included: 2, 3 or 4 depending on the package.' },
  { q: 'Should you order more than the headcount?', a: 'Add 10% when the list is approximate or external guests are expected. With a named list confirmed the day before, order the exact headcount.' },
      { "q": "What quantities and budget for a breakfast for 10, 20 or 100 people?", "a": "For 10 people: 30 mini pastries, 2 L of juice and 2 thermoses, so €109 excl. VAT with the Classique formula, delivery included. For 20: 40 mini pastries, 4 L, 4 thermoses, €189 excl. VAT. For 100: 200 mini pastries, 20 L, 17 thermoses, €829 excl. VAT." },
      { "q": "How much should you allow per person for an afternoon break?", "a": "Allow 1.5 to 2 sweet pieces and 1 drink per person, from €6 per person excl. VAT. For 20 people, that comes to €149 excl. VAT delivery included (20 × €6 + €29)." },
      { "q": "How much does a lunch box cost for 20 people?", "a": "One lunch box per person, from €18.90 to €21.90 excl. VAT. For 20 people, the budget ranges from €407 to €467 excl. VAT, delivery included (20 × €18.90 + €29, or 20 × €21.90 + €29)." },
      { "q": "What quantities for a cold buffet for 20 people?", "a": "Allow 6 savoury pieces per person if salads go with them, 9 if the pieces are the only dish, plus 2 to 3 sweet pieces. For 20 people: 120 savoury pieces with salads or 180 without, and 40 to 60 sweet pieces. A cold buffet is priced on quote." },
      { "q": "How much does a cocktail reception for 100 people cost?", "a": "For 100 people, juice, water and delivery included: €3,352.50 excl. VAT with L'Invitation (8 canapés), €4,452.50 excl. VAT with La Réception (12 canapés) and €5,552.50 excl. VAT with La Célébration (16 canapés)." },
      { "q": "How many savoury and sweet canapés in a cocktail reception package?", "a": "The sweet part is already counted: 2 sweet canapés out of 8, 3 out of 12 and 4 out of 16, so 6, 9 and 12 savoury canapés. Allow two thirds to three quarters savoury, the rest sweet." },
      { "q": "How much do the drinks for a cocktail reception cost?", "a": "A litre of juice costs €9.50 excl. VAT and a 75 cl bottle of water €4.80 excl. VAT, at 1 L of juice for 4 people and 1 bottle of water for 5. That comes to about €3.34 excl. VAT per person, without the 0% Chardonnay at €16.90 excl. VAT a bottle." },
      { "q": "Until when can you confirm quantities and change the order?", "a": "Quantities can be confirmed until 2 pm the day before, and 48 hours before from 50 people. Cancellation is without charge until 2 working days before delivery, before 10 am." },
]

const CONTENU_PAR_PERSONNE = `
      <p>For corporate catering, plan per person <strong>2 mini pastries and 1 hot drink</strong> at breakfast, <strong>1 lunch tray</strong> at lunch, <strong>8, 12 or 16 canapés</strong> depending on the reception and <strong>2 to 3 sweet pieces</strong> for a buffet dessert. At L'Écrin Traiteur, that means from <strong>${eurEn(CLASSIQUE)} excl. VAT</strong> per person for a Classic breakfast to <strong>${x2(CEL.prix)} excl. VAT</strong> for a dinner reception, plus delivery at ${eurEn(LIV)} excl. VAT. Here is the full table, then the detail format by format.</p>

      <h2>The table: how much per person, at what price?</h2>
      <table>
        <thead><tr><th>Format</th><th>Quantity per person</th><th>L'Écrin Traiteur price excl. VAT</th></tr></thead>
        <tbody>
          <tr><td><strong>Breakfast</strong></td><td>2 mini pastries (3 for up to 10 people), 1 small sweet, 1 fruit skewer above 15 people, 1 glass of juice of 20 cl, one 1 L thermos for 6</td><td>${eurEn(CLASSIQUE)} (Classic); full breakfast on quote</td></tr>
          <tr><td><strong>Afternoon break</strong></td><td>1.5 to 2 sweet pieces, 1 drink</td><td>from ${eurEn(PAUSE)}</td></tr>
          <tr><td><strong>Lunch tray</strong></td><td>1 tray per person attending, + 10% if the list is approximate</td><td>${x2(PLATEAU.vege)} to ${x2(PLATEAU.poisson)}</td></tr>
          <tr><td><strong>Lunch box</strong></td><td>1 per person</td><td>${x2(LUNCH.min)} to ${x2(LUNCH.max)}</td></tr>
          <tr><td><strong>Drinks reception</strong></td><td>6 to 8 canapés</td><td>${x2(INV.prix)} (${INV.nom}, 8 canapés)</td></tr>
          <tr><td><strong>Lunch reception</strong></td><td>12 to 14 canapés</td><td>${x2(REC.prix)} (${REC.nom}, 12 canapés)</td></tr>
          <tr><td><strong>Dinner reception</strong></td><td>16 to 18 canapés</td><td>${x2(CEL.prix)} (${CEL.nom}, 16 canapés)</td></tr>
          <tr><td><strong>Cold buffet</strong></td><td>6 savoury pieces with salads, 9 without, 2 to 3 sweet pieces</td><td>On quote</td></tr>
          <tr><td><strong>Desserts</strong></td><td>1.5 to 2 at a break, 2 to 3 at a buffet, 4 at a dinner reception</td><td>Included in the cocktail packages</td></tr>
          <tr><td><strong>Cocktail reception drinks</strong></td><td>1 L of juice for 4, one 75 cl water for 5, 1 flute of 0% Chardonnay as an option</td><td>about ${x2(boissonsCocktailParPers)} without the 0% Chardonnay</td></tr>
        </tbody>
      </table>
      <p>Add delivery, ${eurEn(LIV)} excl. VAT in Paris and nearby towns, once per order. The minimum order is €50 excl. VAT. All prices are on the <a href="/tarifs">prices</a> page.</p>

      <h2>Breakfast: how much per person?</h2>
      <p>Plan 2 mini pastries per person, 3 for a group of 10 or fewer, 1 small sweet (a madeleine, or a slice of loaf cake above 20 people), 1 glass of juice and 1 hot drink. A 1-litre thermos serves 6 cups; we plan 4 thermoses of coffee for 1 of tea. The fresh fruit skewer is added above 15 people.</p>
      <table>
        <thead><tr><th>Headcount</th><th>Mini pastries</th><th>Juice</th><th>Thermoses</th><th>Classic excl. VAT, delivery included</th></tr></thead>
        <tbody>
          <tr><td>10 people</td><td>${p10.vienn}</td><td>${p10.litres} L</td><td>${p10.thermos}</td><td>${x2(cla(10))}</td></tr>
          <tr><td>20 people</td><td>${p20.vienn}</td><td>${p20.litres} L</td><td>${p20.thermos}</td><td>${x2(cla(20))}</td></tr>
          <tr><td>100 people</td><td>${p100.vienn}</td><td>${p100.litres} L</td><td>${p100.thermos}</td><td>${x2(cla(100))}</td></tr>
        </tbody>
      </table>
      <p>The Classic package (pastries, juice, coffee, fruit) costs ${eurEn(CLASSIQUE)} per person excl. VAT; the full breakfast is on quote. Mini pastries come in trays of 30 at ${x2(PU_PLATEAU30)} excl. VAT. The detail is in <a href="/journal/combien-viennoiseries-par-personne">how many mini pastries per person</a> and in the <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">breakfast for 20 people</a>. To order: <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a>.</p>

      <h2>Lunch: how many lunch trays or lunch boxes?</h2>
      <p>One tray or one lunch box per person attending. Each tray is complete: starter, main, dessert and bread, with cutlery and napkins. Add 10% when the list is not named, preferably vegetarian. With no information on dietary needs, start with 2 chicken trays for 1 vegetarian.</p>
      <p>Lunch trays cost ${x2(PLATEAU.vege)} excl. VAT (vegetarian), ${x2(PLATEAU.poulet)} excl. VAT (chicken) and ${x2(PLATEAU.poisson)} excl. VAT (salmon). Lunch boxes range from ${x2(LUNCH.min)} to ${x2(LUNCH.max)} excl. VAT. All savoury dishes are halal and pork-free. See <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">how many lunch trays to order</a>, the <a href="/creations/plateaux-repas">lunch trays</a> and the <a href="/creations/lunch-box">lunch boxes</a>.</p>

      <h2>Cocktail reception: how many canapés per person?</h2>
      <p>The number of canapés depends on the meal the reception replaces: 6 to 8 for drinks, 12 to 14 for a lunch reception, 16 to 18 for a dinner reception. Plan two thirds to three quarters savoury, the rest sweet.</p>
      <table>
        <thead><tr><th>Package</th><th>Canapés per person</th><th>Price per person excl. VAT</th><th>For 100 people, juice, water and delivery included</th></tr></thead>
        <tbody>
          <tr><td>${INV.nom}</td><td>${INV.pieces}</td><td>${x2(INV.prix)}</td><td>${x2(inv100.sans)}</td></tr>
          <tr><td>${REC.nom}</td><td>${REC.pieces}</td><td>${x2(REC.prix)}</td><td>${x2(rec100.sans)}</td></tr>
          <tr><td>${CEL.nom}</td><td>${CEL.pieces}</td><td>${x2(CEL.prix)}</td><td>${x2(cel100.sans)}</td></tr>
        </tbody>
      </table>
      <p>The savoury canapés are halal and pork-free, and the menu is alcohol-free. The full calculation is in <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">how many canapés per person</a>; the packages are on the <a href="/creations/cocktails">cocktail receptions</a> page.</p>

      <h2>Cold buffet: what quantities?</h2>
      <p>Plan 6 savoury pieces per person if salads come alongside, 9 if the pieces are the only dish, and 2 to 3 sweet pieces. For mixed salad, the usual guideline is about 150 g per person. A cold buffet is priced on quote; in individual format, the lunch box starts at ${x2(LUNCH.min)} excl. VAT and the lunch tray at ${x2(PLATEAU.vege)} excl. VAT. The detail for 10, 20 and 50 people is in <a href="/journal/buffet-froid-entreprise-quantites-par-personne">corporate cold buffet: quantities per person</a>.</p>

      <h2>Desserts: how many sweet pieces?</h2>
      <p>Sweet pieces rise with the length of the event: 1.5 to 2 for a 20 to 30-minute break, 2 to 3 for a buffet dessert, 4 at a dinner reception. In the cocktail packages, the sweet pieces are already counted: 2 out of 8, 3 out of 12, 4 out of 16. The afternoon break starts at ${eurEn(PAUSE)} per person excl. VAT. See <a href="/journal/combien-desserts-par-personne-buffet-cocktail-gouter">how many desserts per person</a>.</p>

      <h2>Drinks: how much per person?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Guideline</th><th>Unit price excl. VAT</th></tr></thead>
        <tbody>
          <tr><td>Meeting, breakfast</td><td>One 1 L thermos for 6 people, 4 coffee for 1 tea</td><td>${x2(PU_THERMOS)} per thermos</td></tr>
          <tr><td>Breakfast</td><td>1 glass of juice of 20 cl per person, 1 L for 5</td><td>${x2(PU_JUS)} per litre</td></tr>
          <tr><td>Two-hour reception</td><td>1 L of juice for 4, one 75 cl bottle of water for 5</td><td>${x2(PU_JUS)} per litre of juice, ${x2(PU_EAU)} per water</td></tr>
          <tr><td>For the toast</td><td>1 flute per person, 6 flutes per bottle</td><td>${x2(PU_CHARD)} for the 0% Chardonnay</td></tr>
        </tbody>
      </table>
      <p>The drinks menu is entirely alcohol-free. The detail by length of event is in <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">how many drinks per person</a>.</p>

      <h2>What margin should you allow?</h2>
      <p>Order the exact headcount if the list is named and confirmed the day before. Add 10% if external guests are expected or the list is still moving. Quantities are confirmed until 2 pm the day before, 48 hours before from 50 people.</p>

      <h2>How to order?</h2>
      <p>Give the date, the address, the time and the headcount: L'Écrin Traiteur sends a <a href="/devis">quote</a> within 24 hours, with a company invoice showing VAT. Delivery from 6:30 am in Paris and Île-de-France. For a large group, see <a href="/journal/traiteur-entreprise-100-personnes">corporate catering for 100 people</a>.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions: how much per person</h2>
${faqHtmlEn(FAQ_PAR_PERSONNE)}
    `

/* ═════════════════════ 2 : catering for 100 people ═════════════════════ */
const FAQ_100 = [
  { q: 'How much does corporate catering for 100 people cost?', a: `At L'Écrin Traiteur, from ${x2(cla(100))} excl. VAT for a Classic breakfast to ${x2(cel100.sans)} excl. VAT for a 16-canapé dinner reception, delivery included. A lunch of lunch trays comes to ${x2(plat100(PLATEAU.vege))} to ${x2(plat100(PLATEAU.poisson))} excl. VAT.` },
  { q: 'How many canapés for 100 people?', a: `${(100 * INV.pieces).toLocaleString('en-GB')} canapés for drinks, ${(100 * REC.pieces).toLocaleString('en-GB')} for a lunch reception, ${(100 * CEL.pieces).toLocaleString('en-GB')} for a dinner reception. With ${rec100.b.jus} litres of juice and ${rec100.b.eau} bottles of water.` },
  { q: 'How far in advance should you order for 100 people?', a: 'At least 48 hours before, as for any headcount from 50 people. Ask for the quote earlier if you need maîtres d\'hôtel or tableware: the quote arrives within 24 hours.' },
  { q: 'How many maîtres d\'hôtel for 100 guests?', a: `The usual guidelines give 3 to 5 maîtres d'hôtel for a standing reception of 100 guests. At L'Écrin Traiteur, a maître d'hôtel costs ${eurEn(MH)} excl. VAT for 6 hours: ${eurEn(4 * MH)} excl. VAT for 4.` },
  { q: 'Is the food halal?', a: 'The whole savoury menu at L\'Écrin Traiteur is halal and pork-free, and the menu is alcohol-free. We do not claim a halal certification. Vegetarian, vegan and gluten-free are planned on request.' },
  { q: 'What catering ideas for 100 people?', a: 'A welcome breakfast before a plenary session, a lunch of lunch trays for a training day, a lunch reception for a launch, an 8-canapé drinks reception for an afterwork, or a full seminar day.' },
]

const CONTENU_100 = `
      <p>For 100 people, L'Écrin Traiteur offers four formats: a <strong>Classic breakfast at ${x2(cla(100))} excl. VAT</strong> (the full breakfast on quote), a <strong>lunch of lunch trays at ${x2(plat100(PLATEAU.vege))} to ${x2(plat100(PLATEAU.poisson))} excl. VAT</strong>, a <strong>cocktail reception at ${x2(inv100.sans)} to ${x2(cel100.sans)} excl. VAT</strong> depending on the number of canapés, or a <strong>seminar day at ${x2(sem100)} excl. VAT</strong>. All these budgets include delivery. From 50 people, order 48 hours in advance.</p>

      <h2>Which format for 100 people, and what budget?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Budget excl. VAT for 100</th><th>Per person</th></tr></thead>
        <tbody>
          <tr><td>Morning welcome</td><td>Classic breakfast</td><td>${x2(cla(100))}</td><td>${x2(CLASSIQUE)} + delivery</td></tr>
          <tr><td>Morning welcome</td><td>Full breakfast</td><td>On quote</td><td>On quote</td></tr>
          <tr><td>Seated lunch</td><td>Lunch trays</td><td>${x2(plat100(PLATEAU.vege))} to ${x2(plat100(PLATEAU.poisson))}</td><td>${x2(PLATEAU.vege)} to ${x2(PLATEAU.poisson)}</td></tr>
          <tr><td>Lunch on the go</td><td>Lunch boxes</td><td>${x2(plat100(LUNCH.min))} to ${x2(plat100(LUNCH.max))}</td><td>${x2(LUNCH.min)} to ${x2(LUNCH.max)}</td></tr>
          <tr><td>Drinks, afterwork</td><td>${INV.nom}, 8 canapés</td><td>${x2(inv100.sans)}</td><td>${x2(inv100.sans / 100)}</td></tr>
          <tr><td>Lunch reception</td><td>${REC.nom}, 12 canapés</td><td>${x2(rec100.sans)}</td><td>${x2(rec100.sans / 100)}</td></tr>
          <tr><td>Dinner reception</td><td>${CEL.nom}, 16 canapés</td><td>${x2(cel100.sans)}</td><td>${x2(cel100.sans / 100)}</td></tr>
          <tr><td>Seminar day</td><td>Welcome, two breaks, lunch tray</td><td>${x2(sem100)}</td><td>${x2(sem100 / 100)}</td></tr>
        </tbody>
      </table>
      <p>The cocktail reception budgets include juice, water and delivery; the seminar day counts two deliveries. The quantities per person for each format are gathered in <a href="/journal/combien-prevoir-par-personne-traiteur-entreprise">how much food per person</a>.</p>

      <h2>Breakfast for 100 people: what quantities?</h2>
      <p>For a full breakfast for 100 people, you need ${p100.vienn} mini pastries, that is ${p100.plateaux} trays of 30, ${p100.madPieces} madeleines and ${p100.cakes} loaf cakes, ${p100.brochettes} fruit skewers, ${p100.litres} litres of juice and ${p100.thermos} thermoses (${p100.cafe} of coffee, ${p100.the} of tea). The full breakfast is on quote.</p>
      <p>The Classic package (pastries, juice, coffee, fruit), at ${eurEn(CLASSIQUE)} per person excl. VAT, comes to ${x2(cla(100))} excl. VAT including delivery. Split the buffet into two or three points to avoid a queue. See the <a href="/creations/petits-dejeuners-et-pauses">breakfasts and breaks</a>.</p>

      <h2>Lunch for 100 people: lunch trays or lunch boxes?</h2>
      <p>Order 100 trays if the list is named, 110 if it is approximate. With no information on dietary needs, start with 2 chicken trays for 1 vegetarian: 67 chicken and 33 vegetarian come to ${x2(mix100)} excl. VAT including delivery.</p>
      <table>
        <thead><tr><th>Tray</th><th>Price excl. VAT</th><th>100 trays + delivery</th><th>110 trays + delivery</th></tr></thead>
        <tbody>
          <tr><td>Vegetarian</td><td>${x2(PLATEAU.vege)}</td><td>${x2(plat100(PLATEAU.vege))}</td><td>${x2(plat110(PLATEAU.vege))}</td></tr>
          <tr><td>Chicken</td><td>${x2(PLATEAU.poulet)}</td><td>${x2(plat100(PLATEAU.poulet))}</td><td>${x2(plat110(PLATEAU.poulet))}</td></tr>
          <tr><td>Salmon</td><td>${x2(PLATEAU.poisson)}</td><td>${x2(plat100(PLATEAU.poisson))}</td><td>${x2(plat110(PLATEAU.poisson))}</td></tr>
        </tbody>
      </table>
      <p>Each tray includes a starter, a main, a dessert, bread, cutlery and napkins; all are halal and pork-free. For a lunch eaten standing or on the move, the lunch box costs ${x2(LUNCH.min)} to ${x2(LUNCH.max)} excl. VAT. See <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">how many lunch trays to order</a> and the <a href="/creations/plateaux-repas">lunch trays</a>.</p>

      <h2>Cocktail reception for 100 people: 8, 12 or 16 canapés?</h2>
      <table>
        <thead><tr><th>Item</th><th>${INV.nom} (8)</th><th>${REC.nom} (12)</th><th>${CEL.nom} (16)</th></tr></thead>
        <tbody>
          <tr><td>Canapés</td><td>${(100 * INV.pieces).toLocaleString('en-GB')} · ${x2(inv100.pieces)}</td><td>${(100 * REC.pieces).toLocaleString('en-GB')} · ${x2(rec100.pieces)}</td><td>${(100 * CEL.pieces).toLocaleString('en-GB')} · ${x2(cel100.pieces)}</td></tr>
          <tr><td>Juice, 1 L for 4</td><td colspan="3">${rec100.b.jus} L · ${x2(rec100.b.coutJus)}</td></tr>
          <tr><td>Water, 75 cl for 5</td><td colspan="3">${rec100.b.eau} bottles · ${x2(rec100.b.coutEau)}</td></tr>
          <tr><td>Delivery</td><td colspan="3">${x2(LIV)}</td></tr>
          <tr><td><strong>Total excl. VAT</strong></td><td><strong>${x2(inv100.sans)}</strong></td><td><strong>${x2(rec100.sans)}</strong></td><td><strong>${x2(cel100.sans)}</strong></td></tr>
          <tr><td>Option: 0% Chardonnay, 1 flute per person</td><td colspan="3">${rec100.b.chard} bottles · ${x2(rec100.b.coutChard)}</td></tr>
        </tbody>
      </table>
      <p>Choose according to the time of day: 8 canapés for an afterwork, 12 to replace lunch, 16 to replace dinner. Plan 4 buffet points, one for 25 to 30 guests. The savoury canapés are halal and pork-free. The detail is in <a href="/journal/cocktail-entreprise-100-personnes">corporate cocktail reception for 100 people</a>, and the packages are on the <a href="/creations/cocktails">cocktail receptions</a> page.</p>

      <h2>A one-day seminar for 100 people</h2>
      <p>The standard day adds up a Classic breakfast at ${eurEn(CLASSIQUE)} excl. VAT, two breaks at ${eurEn(PAUSE)} excl. VAT and a chicken lunch tray at ${x2(PLATEAU.poulet)} excl. VAT: ${x2(SEM_PERS)} per person excl. VAT. With two deliveries, in the morning and at noon, it comes to <strong>${x2(sem100)} excl. VAT for 100 people</strong>. The budget item by item is in <a href="/journal/budget-seminaire-entreprise-par-personne-paris">seminar budget per person</a>.</p>

      <h2>What catering ideas for 100 people?</h2>
      <ul>
        <li><strong>Morning plenary:</strong> Classic breakfast across three service points, ${x2(cla(100))} excl. VAT.</li>
        <li><strong>Full training day:</strong> welcome, two breaks and lunch trays, ${x2(sem100)} excl. VAT.</li>
        <li><strong>Afterwork:</strong> ${INV.nom} with 8 canapés, ${x2(inv100.sans)} excl. VAT with juice and water.</li>
        <li><strong>Product launch at lunchtime:</strong> ${REC.nom} with 12 canapés, ${x2(rec100.sans)} excl. VAT.</li>
        <li><strong>End-of-year evening:</strong> ${CEL.nom} with 16 canapés and 0% Chardonnay for the toast, ${x2(cel100.avec)} excl. VAT.</li>
      </ul>

      <h2>Logistics: notice, delivery, service and tableware</h2>
      <ul>
        <li><strong>Notice:</strong> 48 hours minimum from 50 people. Quote within 24 hours.</li>
        <li><strong>Delivery:</strong> from 6:30 am, by the L'Écrin Traiteur team, ${eurEn(LIV)} excl. VAT in Paris and nearby towns; other areas on quote.</li>
        <li><strong>Set-up:</strong> the platters arrive arranged, ready to set down. For set-up and service, add maîtres d'hôtel.</li>
        <li><strong>Maître d'hôtel:</strong> ${eurEn(MH)} excl. VAT for 6 hours, set-up and clearing away included. For a standing reception of 100 guests, 3 to 5 maîtres d'hôtel is common, that is ${eurEn(3 * MH)} to ${eurEn(5 * MH)} excl. VAT. See <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel</a>.</li>
        <li><strong>Tableware and furniture:</strong> hired through a partner, on quote, once you tell us the number of tables. See <a href="/journal/location-materiel-reception-entreprise-quantites-prix">hiring reception equipment</a>.</li>
        <li><strong>Invoicing:</strong> company invoice showing VAT, purchase orders accepted.</li>
      </ul>
      <p>To price your event, <a href="/devis">ask for a quote</a> with the date, the address, the time and the headcount.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions: catering for 100 people</h2>
${faqHtmlEn(FAQ_100)}
    `

/* ═════════════════════ 3 : 10 booking tips ═════════════════════ */
const FAQ_CONSEILS = [
  { q: 'How far in advance should you book corporate catering?', a: 'At L\'Écrin Traiteur, until 2 pm the day before, and 48 hours before from 50 people. With maîtres d\'hôtel or tableware hire, ask for the quote as soon as the date is known.' },
  { q: 'What margin should you allow on the headcount?', a: '10% when the list is approximate or external guests are expected. No margin with a named list confirmed the day before.' },
  { q: 'What should a catering quote include?', a: `The price excl. VAT per person or per item, delivery on a separate line (${eurEn(LIV)} excl. VAT in Paris at L'Écrin Traiteur), what is supplied (napkins, cups, cutlery), the options (drinks, service, tableware) and VAT.` },
  { q: 'Does the caterer handle dietary needs?', a: 'At L\'Écrin Traiteur, the whole savoury menu is halal and pork-free and the menu is alcohol-free. Vegetarian, vegan and gluten-free are planned on request, in the person\'s name.' },
  { q: 'Does a caterer accept a purchase order?', a: 'Yes at L\'Écrin Traiteur: purchase orders are accepted and the company invoice shows VAT. Give the purchase order number when you ask for the quote.' },
  { q: 'Who should you contact on the day of delivery?', a: 'Give the caterer the name and phone number of someone on site at the delivery time, and keep the caterer\'s number: 01 74 54 23 10 for L\'Écrin Traiteur.' },
]

const CONTENU_CONSEILS = `
      <p>To book a corporate caterer without forgetting anything, you need to settle ten points: notice, headcount, dietary needs, allergies, what the quote includes, access, set-up, tableware, invoicing and the contact on the day. At L'Écrin Traiteur, you order <strong>until 2 pm the day before</strong>, <strong>48 hours before from 50 people</strong>, with a <strong>quote within 24 hours</strong> and delivery from 6:30 am at ${eurEn(LIV)} excl. VAT in Paris. Here are the ten tips, in the order they come up.</p>

      <h2>The 10 tips in one table</h2>
      <table>
        <thead><tr><th>Tip</th><th>What to do</th><th>When</th></tr></thead>
        <tbody>
          <tr><td>1. Notice</td><td>Ask for the quote, book the service staff</td><td>As soon as the date is known; at the latest 2 pm the day before, 48 hours from 50 people</td></tr>
          <tr><td>2. Headcount</td><td>Set the number and the 10% margin</td><td>2 days before</td></tr>
          <tr><td>3. Dietary needs</td><td>List vegetarian, vegan, gluten-free</td><td>1 week before</td></tr>
          <tr><td>4. Allergies</td><td>Report them in the person's name</td><td>When asking for the quote</td></tr>
          <tr><td>5. The quote</td><td>Check what is included</td><td>On receipt, within 24 hours</td></tr>
          <tr><td>6. Access</td><td>Address, floor, badge, time</td><td>When ordering</td></tr>
          <tr><td>7. Set-up</td><td>Decide who lays out and who serves</td><td>When ordering</td></tr>
          <tr><td>8. Tableware</td><td>Disposables supplied or hire</td><td>When asking for the quote</td></tr>
          <tr><td>9. The invoice</td><td>Purchase order, entity invoiced</td><td>Before confirming</td></tr>
          <tr><td>10. On the day</td><td>A reachable contact on site</td><td>The day before</td></tr>
        </tbody>
      </table>

      <h2>1. Book at the right time</h2>
      <p>A breakfast, lunch trays or a delivered cocktail reception can be ordered until 2 pm the day before. From 50 people, allow 48 hours. With maîtres d'hôtel or hired tableware, ask for the quote as soon as the date is set: availability is confirmed in the quote. The detail by service is in <a href="/journal/combien-temps-avance-commander-traiteur">how far in advance to order a caterer</a>.</p>

      <h2>2. Set the headcount and the margin</h2>
      <p>Order on the confirmed headcount. Add 10% if the list is approximate or external guests are expected; no margin if the list is named. For lunch trays, it is one tray per person attending. The guidelines for each format are in <a href="/journal/combien-prevoir-par-personne-traiteur-entreprise">how much food per person</a>.</p>

      <h2>3. List the dietary needs</h2>
      <p>At L'Écrin Traiteur, all savoury food is halal and pork-free by default: cocktail receptions, lunch trays, lunch boxes. The menu is alcohol-free. Vegetarian, vegan and gluten-free are planned on request. Send a message to participants a week before and note the number of people per dietary need. See our <a href="/traiteur-halal">halal catering</a>.</p>

      <h2>4. Report allergies in the person's name</h2>
      <p>An allergy is handled for one person, not for a group. Give their name and the allergen when ordering: the tray or portion is prepared separately and labelled. Our kitchen handles flour: traces are possible, and we say so before confirming.</p>

      <h2>5. Check what the quote contains</h2>
      <p>A clear quote gives the price excl. VAT per person or per item, delivery on a separate line and what is supplied. At L'Écrin Traiteur, breakfast includes napkins, cups, sugar and stirrers; the lunch tray includes a starter, a main, a dessert, bread, cutlery and napkins. Drinks, service and tableware are options. The minimum order is €50 excl. VAT. The other questions to ask are in <a href="/journal/questions-poser-traiteur-avant-signer-devis">the questions to ask before signing a quote</a>.</p>

      <h2>6. Give the address and access details</h2>
      <p>Give the full address, the floor, the door code or badge, the reception desk to go to and the exact time. Mention a loading bay or a goods lift. Delivery starts at 6:30 am, by the L'Écrin Traiteur team: ${eurEn(LIV)} excl. VAT in Paris and nearby towns, on quote elsewhere.</p>

      <h2>7. Decide who sets up and who serves</h2>
      <p>The platters arrive arranged, ready to set down: for a breakfast or a meeting, nobody needs to serve. For a cocktail reception, a maître d'hôtel restocks the buffet and clears: ${eurEn(MH)} excl. VAT for 6 hours, set-up and clearing away included. The ratios are in <a href="/journal/combien-maitres-hotel-evenement-entreprise">how many maîtres d'hôtel to plan</a>.</p>

      <h2>8. Settle the tableware question</h2>
      <p>The napkins, cups and cutlery needed are supplied with the food. For a reception with glasses, plates or high tables, hire goes through a partner, on quote: give the number of tables and guests. Quantities and observed prices are in <a href="/journal/location-materiel-reception-entreprise-quantites-prix">hiring reception equipment</a>.</p>

      <h2>9. Prepare the invoicing</h2>
      <p>Give the company name, the billing address and, if your purchasing department requires it, the purchase order number. L'Écrin Traiteur issues a company invoice showing VAT and accepts purchase orders. Prices are excl. VAT.</p>

      <h2>10. Name a contact for the day</h2>
      <p>Give the name and phone number of someone present at the delivery time, not only the organiser's. Keep the caterer's number: 01 74 54 23 10. A full list from D-7 to D+1 is in the <a href="/journal/checklist-office-manager-commander-traiteur">office manager's checklist</a>, and our selection criteria in <a href="/journal/choisir-traiteur-entreprise-paris">choosing a corporate caterer in Paris</a>.</p>

      <h2>Booking with L'Écrin Traiteur</h2>
      <p>Classic breakfast from ${eurEn(CLASSIQUE)} per person excl. VAT, lunch trays from ${x2(PLATEAU.vege)} excl. VAT, cocktail receptions from ${x2(INV.prix)} excl. VAT: all prices are on the <a href="/tarifs">prices</a> page. <a href="/devis">Ask for a quote</a> with the date, the address, the time and the headcount.</p>
      ${SIGNATURE_EN}

      <h2>Frequently asked questions: booking corporate catering</h2>
${faqHtmlEn(FAQ_CONSEILS)}
    `

export const EN_JOURNAL = {
  'combien-prevoir-par-personne-traiteur-entreprise': {
    titre: 'How much food per person for corporate catering? The complete table',
    metaTitle: 'Catering: calculating food per person',
    extrait: `Breakfast, lunch trays, cocktail reception, cold buffet, desserts, drinks: quantities per person and prices excl. VAT in one table, from ${eurEn(CLASSIQUE)} to ${x2(CEL.prix)} per person excl. VAT.`,
    enBref: [
      `At L'Écrin Traiteur, a breakfast counts 2 mini pastries and 1 glass of juice per person, from ${eurEn(CLASSIQUE)} excl. VAT.`,
      `At L'Écrin Traiteur, a lunch counts 1 lunch tray per person attending, from ${x2(PLATEAU.vege)} to ${x2(PLATEAU.poisson)} excl. VAT.`,
      `At L'Écrin Traiteur, a cocktail reception counts 8, 12 or 16 canapés per person, from ${x2(INV.prix)} to ${x2(CEL.prix)} excl. VAT.`,
    ],
    faq: FAQ_PAR_PERSONNE,
    contenu: CONTENU_PAR_PERSONNE,
  },
  'traiteur-entreprise-100-personnes': {
    titre: 'Corporate catering for 100 people: which formats and what budget?',
    metaTitle: 'Catering for 100 people: ideas and budget',
    extrait: `For 100 people: Classic breakfast at ${x2(cla(100))} excl. VAT, lunch trays from ${x2(plat100(PLATEAU.vege))} excl. VAT, cocktail reception from ${x2(inv100.sans)} to ${x2(cel100.sans)} excl. VAT, seminar day at ${x2(sem100)} excl. VAT. Quantities, ideas and logistics.`,
    enBref: [
      `For 100 people, L'Écrin Traiteur delivers a Classic breakfast at ${x2(cla(100))} excl. VAT, delivery included; the full breakfast is on quote.`,
      `For 100 people, a cocktail reception from L'Écrin Traiteur costs ${x2(inv100.sans)} excl. VAT (8 canapés) to ${x2(cel100.sans)} excl. VAT (16 canapés), juice, water and delivery included.`,
      `For 100 people, L'Écrin Traiteur needs 48 hours' notice and charges ${eurEn(MH)} excl. VAT for a maître d'hôtel for 6 hours.`,
    ],
    faq: FAQ_100,
    contenu: CONTENU_100,
  },
  'conseils-reserver-traiteur-entreprise': {
    titre: 'Booking a corporate caterer: 10 tips so you forget nothing',
    metaTitle: 'Corporate catering booking tips: 10 points',
    extrait: 'Notice, headcount, dietary needs, allergies, quote, access, set-up, tableware, invoice and the contact on the day: the 10 points to settle before booking a corporate caterer.',
    enBref: [
      "At L'Écrin Traiteur, you book until 2 pm the day before, and 48 hours before from 50 people.",
      "At L'Écrin Traiteur, the quote arrives within 24 hours, with a company invoice showing VAT and purchase orders accepted.",
      `At L'Écrin Traiteur, all savoury food is halal and pork-free, and delivery costs ${eurEn(LIV)} excl. VAT in Paris from 6:30 am.`,
    ],
    faq: FAQ_CONSEILS,
    contenu: CONTENU_CONSEILS,
  },
}
