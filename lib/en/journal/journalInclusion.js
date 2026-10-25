// Surcouche anglaise de lib/journalInclusion.js (texte seulement ; voir LEXIQUE.md). Rédigée le 25/10/2026.
// Montants recalculés depuis INCLUSION_VALEURS (lib/calculsPrix.js, lib/prixEntree.js) : aucun prix recopié.
// href en chemins français (réécrits en /en au rendu).
import { INCLUSION_VALEURS } from '../../journalInclusion'
import { euroEn as eur } from '../../prixEntree'

const { LIV, PDJ_DES, MINIMUM, CEL, IFTAR_N, IFTAR } = INCLUSION_VALEURS

const faqHtmlEn = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

const FAQ = [
  { q: 'When is Ramadan 2027?', a: 'It is expected from around Monday 8 February 2027 to 8 or 9 March 2027, with Eid al-Fitr on 9 or 10 March. These dates are forecasts, to be confirmed on the Night of Doubt, a few days before the start.' },
  { q: 'Should team breakfasts be cancelled during Ramadan?', a: 'No. Keep them, but do not make them compulsory, and provide something to take away for those who are fasting: they can take their share for the evening. Hold the month\'s social moment at the time the fast is broken instead, or after Ramadan.' },
  { q: 'Can you ask employees whether they observe Ramadan?', a: 'Better not to ask in public. Fasting is a personal practice, and not every Muslim fasts (health, pregnancy, travel, choice). Offer everyone the same options and let each person choose, without comment.' },
  { q: 'What is the difference between halal and kosher?', a: 'They are two separate religious rules: halal meat is not kosher, and vice versa. Kosher also requires, for example, keeping milk and meat apart and rabbinical supervision. L\'Écrin Traiteur offers a halal and pork-free savoury menu but does not do kosher: for guests who eat kosher, contact a certified kosher caterer.' },
  { q: 'How do you handle allergies at a company buffet?', a: 'Collect them at registration, give the caterer the number of people concerned and the allergen, and ask for the list of the 14 regulated allergens for each product. Label the buffet. At L\'Écrin Traiteur, the kitchen handles flour: traces of gluten remain possible in gluten-free items.' },
  { q: 'Which format for a team iftar?', a: `A buffet or a dinner reception, ready a quarter of an hour before the fast is broken, open to everyone, fasting or not. At L'Écrin Traiteur, La Célébration (${CEL.pieces} canapés at ${eur(CEL.prix)} excl. VAT per person) comes to ${eur(IFTAR.sans)} excl. VAT for ${IFTAR_N} people, juice, water and delivery included.` },
]

const RAMADAN = {
  enBref: [
    'Ramadan 2027 is expected from around 8 February to 8 or 9 March 2027, dates to be confirmed on the Night of Doubt; in Paris, the fast is broken at around 5:59 pm in early February and 6:45 pm in early March.',
    'During Ramadan, keep meetings and breakfasts without making them compulsory, provide something to take away and hold social moments at the time the fast is broken or after the month.',
    'L\'Écrin Traiteur delivers a halal and pork-free, alcohol-free savoury menu, with vegetarian, vegan and gluten-free options; it does not do kosher.',
  ],
  titre: 'Ramadan and food inclusion at the office: the practical guide',
  metaTitle: 'Ramadan and food inclusion at the office: the guide',
  extrait: 'Meetings, breakfasts, office drinks and seminars during Ramadan 2027 (expected dates, to be confirmed), halal, kosher, vegan, gluten-free and allergen benchmarks, and a printable checklist.',
  contenu: `
      <p><strong>Ramadan 2027</strong> is expected from around <strong>Monday 8 February to 8 or 9 March 2027</strong>, dates to be confirmed. For a month, some of your colleagues will neither eat nor drink between dawn and sunset. There is no need to reorganise everything: a few adjustments to timing, formats and the way you invite people are enough for everyone to feel included. This guide also covers the other diets you meet at the office: halal, kosher, vegetarian, vegan, gluten-free and allergies.</p>

      <h2>When is Ramadan 2027?</h2>
      <table>
        <thead>
          <tr><th>Milestone</th><th>Expected date (to be confirmed)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>First day of fasting</strong></td><td>Around Monday 8 February 2027</td></tr>
          <tr><td><strong>Last day of fasting</strong></td><td>Monday 8 or Tuesday 9 March 2027</td></tr>
          <tr><td><strong>Eid al-Fitr</strong></td><td>Tuesday 9 or Wednesday 10 March 2027</td></tr>
          <tr><td><strong>Breaking of the fast in Paris</strong></td><td>Around 5:59 pm in early February, around 6:45 pm in early March</td></tr>
        </tbody>
      </table>
      <p>These dates are astronomical forecasts: they are confirmed on the Night of Doubt, a few days before the start, and may shift by a day. The time of the breaking of the fast moves forward by about a minute and a half a day; check the time on the day of your event. On Eid, some colleagues will take a day off: avoid scheduling an important meeting.</p>

      <h2>Meetings and breakfasts: what to change?</h2>
      <ul>
        <li><strong>Keep team breakfasts</strong>, but do not make them compulsory or use them for an important decision. Those who are fasting come for the conversation, not the food.</li>
        <li><strong>Provide something to take away</strong>: a few boxes or bags so everyone can take their share and eat it in the evening.</li>
        <li><strong>Schedule demanding meetings in the morning</strong>, when energy is highest, and avoid late meetings around the time the fast is broken.</li>
        <li><strong>Avoid the compulsory working lunch</strong>: a client lunch or team meal can often move to after Ramadan without difficulty.</li>
        <li><strong>Leave water in the room</strong> as usual: nobody needs it removed.</li>
      </ul>
      <p>For breakfast, L'Écrin Traiteur delivers from 6:30 am; the Classique package starts at ${eur(PDJ_DES)} excl. VAT per person, the full breakfast is on quote. Quantities for your headcount are in our <a href="/calculateur-quantites">quantity calculator</a>.</p>

      <h2>Office drinks, birthdays and afterworks</h2>
      <p>A leaving drink at 12:30 pm or a birthday break at 4 pm falls right in the fast. Three options, depending on the team:</p>
      <ul>
        <li><strong>Move it to after Ramadan</strong>: the simplest when the date is not fixed.</li>
        <li><strong>Keep it, with a share to take away</strong> for those who are fasting.</li>
        <li><strong>Time it with the breaking of the fast</strong>: the drink becomes a team iftar, open to everyone.</li>
      </ul>

      <h2>The team iftar: a moment open to everyone</h2>
      <p>A company iftar brings the team together at the time the fast is broken. It works when it is <strong>open to everyone</strong>, fasting or not, and <strong>optional</strong>. The buffet must be ready a quarter of an hour before the fast is broken, with water, juice and dates from the first minute, then filling savoury food and sweets. Provide a quiet space for those who wish to pray.</p>
      <p>At L'Écrin Traiteur, a La Célébration dinner reception (${CEL.pieces} canapés at ${eur(CEL.prix)} excl. VAT per person) comes to <strong>${eur(IFTAR.sans)} excl. VAT for ${IFTAR_N} people</strong>, with ${IFTAR.b.jus} litres of juice, ${IFTAR.b.eau} bottles of water and ${eur(LIV)} excl. VAT delivery included. Delivery is set for the time you ask. Timings and menu are in our guide <a href="/journal/iftar-entreprise-ramadan-organiser">organising a company iftar</a>.</p>

      <h2>Seminars and training during Ramadan</h2>
      <ul>
        <li><strong>Shorten the day</strong> if possible, or finish before the fast is broken.</li>
        <li><strong>Do not remove the breaks</strong>: those who are fasting use them to rest, the others to eat.</li>
        <li><strong>At lunch, keep the room open</strong> to those who are not eating but want to stay with the group, and do not order for them by default: ask for the real lunch headcount.</li>
        <li><strong>For a residential seminar</strong>, hold dinner after the fast is broken and plan a very early breakfast for those who want one, to arrange with the venue.</li>
      </ul>

      <h2>Do not impose: the right approach</h2>
      <ul>
        <li><strong>Do not ask in public who is fasting.</strong> It is a personal practice.</li>
        <li><strong>Assume nothing</strong>: not every Muslim fasts (health, pregnancy, travel, choice), and colleagues of other faiths or none may have their own constraints.</li>
        <li><strong>Invite everyone in the same way</strong> and let each person take what they want, without comment on anyone's plate.</li>
        <li><strong>Do not turn the month into an exception</strong>: the aim is for the team's habits to suit everyone, not to create a separate regime.</li>
      </ul>

      <h2>Halal, kosher, vegan, gluten-free: the benchmarks</h2>
      <table>
        <thead>
          <tr><th>Diet</th><th>What it means</th><th>At L'Écrin Traiteur</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Halal</strong></td><td>Meat from ritual slaughter, no pork, no alcohol</td><td>Savoury food halal and pork-free by default, alcohol-free, at no extra cost. We do not claim a halal certification.</td></tr>
          <tr><td><strong>Kosher</strong></td><td>Jewish dietary rules: permitted animals, ritual slaughter, milk and meat kept apart, rabbinical supervision</td><td><strong>Not offered.</strong> Halal and kosher are not equivalent: for guests who eat kosher, contact a certified kosher caterer.</td></tr>
          <tr><td><strong>Vegetarian</strong></td><td>No meat or fish</td><td>Vegetarian trays and canapés on the menu</td></tr>
          <tr><td><strong>Vegan</strong></td><td>No animal products (no egg, milk or honey)</td><td>On request, with the quote and the number of people</td></tr>
          <tr><td><strong>Gluten-free</strong></td><td>No wheat, rye or barley</td><td>On request; the kitchen handles flour, traces remain possible</td></tr>
          <tr><td><strong>Allergies</strong></td><td>14 allergens to declare (European Regulation No 1169/2011)</td><td>To flag when ordering; table of the 14 allergens attached to the quote and the delivery note</td></tr>
        </tbody>
      </table>
      <p>Our <a href="/traiteur-halal">halal catering</a> page details the menu, and the guide to the <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">inclusive company menu</a> gives the proportions to plan. For allergen obligations, see <a href="/journal/allergenes-traiteur-buffet-plateaux-obligations">allergens: what the caterer must provide</a>.</p>

      <h2>How do you collect dietary needs without making anyone uncomfortable?</h2>
      <p>Add an optional question to the registration form, with boxes: vegetarian, vegan, halal, gluten-free, allergy (to specify), other. Do not publish named answers: give the caterer a number per diet, and a name only for a severe allergy. Without registration, plan at least one vegetarian option for every three people. Our guide <a href="/journal/traiteur-regimes-halal-vegetarien-vegan-sans-gluten-paris">caterer for halal, vegetarian, vegan and gluten-free diets</a> details the order.</p>

      <h2>The printable checklist</h2>
      <p>To print it: Ctrl + P (Cmd + P on a Mac).</p>
      <table>
        <thead>
          <tr><th>✓</th><th>When</th><th>To do</th></tr>
        </thead>
        <tbody>
          <tr><td>☐</td><td>January</td><td>Put the expected dates of Ramadan (around 8 February – 9 March 2027) and Eid in the team calendar</td></tr>
          <tr><td>☐</td><td>January</td><td>Spot the lunches, drinks and seminars that fall during the month; move those that can be moved</td></tr>
          <tr><td>☐</td><td>At registration</td><td>Add an optional question on diets and allergies</td></tr>
          <tr><td>☐</td><td>When ordering</td><td>Give the caterer a number per diet and every allergy reported</td></tr>
          <tr><td>☐</td><td>When ordering</td><td>Ask for boxes or bags to take away</td></tr>
          <tr><td>☐</td><td>When ordering</td><td>For an iftar: give the day's time for breaking the fast, delivery a quarter of an hour before</td></tr>
          <tr><td>☐</td><td>When ordering</td><td>Guests who eat kosher: plan a certified kosher caterer</td></tr>
          <tr><td>☐</td><td>The day before</td><td>Confirm the headcount before 2 pm</td></tr>
          <tr><td>☐</td><td>On the day</td><td>Label the buffet: halal, vegetarian, vegan, gluten-free, allergens</td></tr>
          <tr><td>☐</td><td>On the day</td><td>Provide a quiet space for an iftar; water and dates as soon as the fast is broken</td></tr>
          <tr><td>☐</td><td>On the day</td><td>Invite everyone in the same way, without asking who is fasting</td></tr>
        </tbody>
      </table>

      <h2>Ordering from L'Écrin Traiteur</h2>
      <p>Order until 2 pm the day before (48 hours ahead from 50 people), delivery from 6:30 am in Paris and Île-de-France, ${eur(LIV)} excl. VAT in Paris and nearby towns, ${eur(MINIMUM)} minimum order (excl. VAT). Give the dietary needs and, for an iftar, the time the fast is broken in your <a href="/devis">quote request</a>: answer within 24 hours.</p>

      <h2>Sources</h2>
      <ul>
        <li>Expected dates of Ramadan 2027: <a href="https://www.calendriergratuit.fr/ramadan.html" rel="noopener">Calendriergratuit</a> and <a href="https://www.pleine-lune.org/calendrier-ramadan" rel="noopener">Pleine-Lune</a>, consulted on 25 October 2026. Dates to be confirmed on the Night of Doubt.</li>
        <li>Allergens: Regulation (EU) No 1169/2011 on the provision of food information to consumers, Annex II.</li>
      </ul>

      <h2>Frequently asked questions</h2>
${faqHtmlEn(FAQ)}
    `,
  faq: FAQ,
}

export const EN_JOURNAL = {
  'ramadan-inclusion-alimentaire-bureau-guide': RAMADAN,
}
