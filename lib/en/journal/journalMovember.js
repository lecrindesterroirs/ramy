/* Surcouche anglaise de lib/journalMovember.js. Montants recalculés, pas recopiés. */
import { eurEn, faqHtmlEn, LIV } from './budget'

const CLASSIQUE = 8, PAUSE = 6, INVITATION = 29.9
const total = (n, ppp) => n * ppp + LIV
const lancement20 = total(20, CLASSIQUE)
const cloture20 = total(20, PAUSE)
const deuxTemps20 = lancement20 + cloture20
const SRC_ABOUT = 'https://movember.com/about-us'
const SRC_GUIDE = 'https://fr.movember.com/uploads/files/Fundraising-Resources/Guides%20T2%20-%20FR/Movember'
const SRC_AT_WORK = 'https://fr.movember.com/get-involved/at-work'

const FAQ_MOVEMBER = [
  { q: 'What are the dates of Movember in 2026?', a: 'Movember runs through the whole of November: participants start clean-shaven on Sunday 1 November, which means Monday 2 November at the office, and the month closes on Monday 30 November. A launch breakfast on the 2nd and a prize-giving break on the 27th or the 30th give it a simple frame.' },
  { q: 'How much does a Movember breakfast for 20 people cost?', a: `${eurEn(lancement20)} excl. VAT including delivery for a Classic breakfast at €8 excl. VAT per person (20 × €8 + €29 delivery). With a closing break from €6 excl. VAT per person, that is ${eurEn(cloture20)} excl. VAT, the two moments come to ${eurEn(deuxTemps20)} excl. VAT for 20 people, with two deliveries.` },
  { q: 'How can you take part in Movember without growing a moustache?', a: 'The Movember guide suggests three other ways: move, by walking or running 60 km during the month; host a "Mo-ment" (a quiz night, a table-tennis tournament); or invent your own challenge. They can be combined.' },
  { q: 'Can the company match colleagues\' donations?', a: 'Yes, if it offers matched giving: the employer pays an amount equal to the donations collected, euro for euro. Movember suggests asking management or HR before the launch.' },
  { q: 'Does the caterer collect the Movember donations?', a: 'No, donations are collected on your Movember team page. The caterer\'s invoice covers the breakfast or the break delivered, nothing else.' },
  { q: 'Which dietary requirements should you plan for?', a: 'Plan vegetarian, vegan and gluten-free options: the fresh fruit skewers and the seasonal fruit basket are vegan and gluten-free, and the gluten-free banana bread is €26.90 excl. VAT for 6 to 8 people. Give the number of guests concerned when you ask for a quote.' },
]

export const EN_JOURNAL = {
  'movember-entreprise-organiser-petit-dejeuner-gouter-bureau': {
    titre: 'Movember at the office: how to run the month, from the launch breakfast to the closing break',
    metaTitle: 'Movember at work: running the month in the office',
    extrait: 'Movember at the office in 2026: dates, the actions Movember suggests, a launch breakfast, a closing break and the budget for 20 people.',
    enBref: [
      'Movember runs through the whole of November: participants start clean-shaven on 1 November (a Sunday in 2026) and grow a moustache.',
      'Three causes are supported: mental health and suicide prevention, prostate cancer, testicular cancer.',
      'The 2026 office calendar: launch on Monday 2 November, close on Friday 27 or Monday 30 November.',
      `Classic breakfast: €8 excl. VAT per person, that is ${eurEn(lancement20)} excl. VAT including delivery for 20 people.`,
    ],
    contenu: `
      <p>Movember runs through the whole of November: participants start clean-shaven on 1 November and grow a moustache in support of mental health and suicide prevention, prostate cancer and testicular cancer. At the office, the simplest version comes down to two moments: a <strong>launch breakfast on Monday 2 November 2026</strong> and a <strong>closing break</strong> at the end of the month. For 20 people, allow ${eurEn(lancement20)} excl. VAT for the launch, delivery included.</p>

      <h2>What is Movember and which causes does it support?</h2>
      <p>Movember began among friends growing moustaches. It supports three causes: <strong>mental health and suicide prevention</strong>, <strong>prostate cancer</strong> and <strong>testicular cancer</strong>. Movember states that it has funded more than 1.8 billion Australian dollars of prevention work (<a href="${SRC_ABOUT}" target="_blank" rel="noopener">movember.com</a>).</p>
      <p>In its workplace guide, Movember notes that a man dies by suicide every minute somewhere in the world, that prostate cancer is the second most diagnosed cancer in men, and that early detection changes the outcome: a 98% chance of surviving beyond five years, against 26% when detection comes late (<a href="${SRC_GUIDE}" target="_blank" rel="noopener">Movember guide</a>). For any medical question, the right person to ask is a doctor.</p>

      <h2>What can you organise at the office for Movember?</h2>
      <p>Movember suggests four ways to take part: grow a moustache, <strong>move</strong> by walking or running 60 km during the month, <strong>host a "Mo-ment"</strong> (a quiz night, a table-tennis tournament) or invent your own challenge. A company can sign up on its own, create a team, or run a competition between several offices (<a href="${SRC_AT_WORK}" target="_blank" rel="noopener">fr.movember.com</a>).</p>
      <p>The guide also sets out ideas that lend themselves well to a sociable moment:</p>
      <ul>
        <li><strong>The group shave:</strong> colleagues donate so that participants can start clean-shaven, with before and after photographs.</li>
        <li><strong>The office quiz:</strong> neighbouring companies, partners and suppliers are invited to play in exchange for a donation.</li>
        <li><strong>Health conversations:</strong> a weekly exchange about health or wellbeing.</li>
        <li><strong>Matched giving:</strong> the employer pays an amount equal to the sum collected, euro for euro.</li>
        <li><strong>The donation box:</strong> in the break room, or wherever the team gathers.</li>
        <li><strong>The prize-giving:</strong> at the end of the month, for the top fundraiser, the person who moved the most, and the best and worst moustache.</li>
      </ul>

      <h2>What calendar should you plan for November 2026?</h2>
      <p>1 November 2026 is a Sunday, so the launch happens on <strong>Monday 2 November</strong>. The close falls on <strong>Friday 27</strong> or <strong>Monday 30 November</strong>, the last day of the month. Between the two, a quiz or a health conversation mid-month keeps the campaign going.</p>
      <p>Order until 10 am the day before, with delivery from 6:30 am. From 50 people, allow 48 hours. To invite the team, <a href="/journal/modeles-invitation-pot-petit-dejeuner-afterwork-entreprise">invitation email templates</a> are ready to copy.</p>

      <h2>Which breakfast or break for each moment?</h2>
      <p>The table matches each idea from the Movember guide to a delivered format, with its price excl. VAT per person.</p>
      <table>
        <thead>
          <tr><th>Moment</th><th>Movember idea</th><th>L'Écrin Traiteur format</th><th>Price excl. VAT / person</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Launch, Monday 2 November</strong></td><td>Group shave, a word from management, announcing the targets</td><td><a href="/creations/petits-dejeuners-et-pauses">Classic breakfast</a></td><td>€8</td></tr>
          <tr><td><strong>Mid-November</strong></td><td>Office quiz, health conversation</td><td><a href="/creations/pauses-gourmandes">Afternoon break</a></td><td>from €6</td></tr>
          <tr><td><strong>Quiz night or after-work drinks</strong></td><td>Quiz with partners and suppliers</td><td><a href="/creations/cocktails">8-canapé cocktail reception</a>, halal and pork-free</td><td>€29.90</td></tr>
          <tr><td><strong>Close, 27 or 30 November</strong></td><td>Prize-giving, best and worst moustache</td><td><a href="/creations/pauses-gourmandes">Afternoon break</a> with madeleines and fruit skewers</td><td>from €6</td></tr>
          <tr><td><strong>For those who move</strong></td><td>60 km during the month, running club</td><td>Seasonal fruit basket (€38.90 for 10 to 12 pieces)</td><td>—</td></tr>
        </tbody>
      </table>
      <p>The madeleines can be personalised (colours, label) on quote: see <a href="/creations/personnalisation">personalisation</a>. For a cause carried by a buffet, the guide to <a href="/journal/octobre-rose-entreprise-paris">Pink October at work</a> shows a comparable set-up.</p>

      <h2>What budget for a Movember at the office?</h2>
      <p>For 20 people, the launch breakfast comes to <strong>${eurEn(lancement20)} excl. VAT</strong> and the closing break to <strong>${eurEn(cloture20)} excl. VAT</strong>: ${eurEn(deuxTemps20)} excl. VAT for both, with two deliveries at €29 excl. VAT. The table gives the total including delivery, for a single delivery.</p>
      <table>
        <thead>
          <tr><th>Headcount</th><th>Classic breakfast (€8 excl. VAT / person)</th><th>Afternoon break (€6 excl. VAT / person)</th><th>8-canapé reception (€29.90 excl. VAT / person)</th></tr>
        </thead>
        <tbody>
${[10, 20, 30, 50].map(n => `          <tr><td><strong>${n}</strong></td><td>${eurEn(total(n, CLASSIQUE), true)}</td><td>${eurEn(total(n, PAUSE), true)}</td><td>${eurEn(total(n, INVITATION), true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>The minimum order is €50 excl. VAT. The quantities per person are set out in the guide <a href="/journal/idees-petit-dejeuner-bureau-par-budget">office breakfast ideas by budget</a> and in <a href="/journal/combien-desserts-par-personne-buffet-cocktail-gouter">how many desserts per person</a>.</p>

      <h2>What precautions should you take over the fundraising?</h2>
      <p>Donations are collected on your Movember team page (the Mo Space), not through the caterer: the catering invoice covers the food and nothing else. Movember also points out that its insurance does not cover an event organised by a company: check your own cover, and if you run a raffle or a game of skill, look into the rules that apply (<a href="${SRC_GUIDE}" target="_blank" rel="noopener">Movember guide, "staying on the right side of the law"</a>).</p>
      <p>For a large company, the Movember Business Club asks for a commitment to raise at least €10,000 through internal fundraising (<a href="${SRC_AT_WORK}" target="_blank" rel="noopener">fr.movember.com</a>).</p>

      <h2>How do you allow for diets and for everyone's level of involvement?</h2>
      <p>Taking part stays voluntary: the moustache is not compulsory, and walking 60 km or running a quiz counts just as much. On the table, plan vegetarian, vegan and gluten-free options, with the number of guests concerned given when you ask for a quote.</p>

      <h2>How do you order your Movember breakfast or break?</h2>
      <p>Ask for a <a href="/devis">quote</a> within 24 hours, giving the headcount, the date and the address. Order until 10 am the day before, delivery from 6:30 am in Paris and the Paris region, company invoice with VAT.</p>
      <p><em>L'Écrin Traiteur prices, October 2026. Calculation: price per person × headcount + €29 excl. VAT per delivery, Paris and nearby towns. Information on Movember: movember.com and fr.movember.com, consulted on 17 October 2026.</em></p>

      <h2>Frequently asked questions about Movember at work</h2>
${faqHtmlEn(FAQ_MOVEMBER)}
    `,
    faq: FAQ_MOVEMBER,
  },
}
