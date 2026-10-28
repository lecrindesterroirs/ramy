/* Surcouche anglaise de lib/journalIdeesAnimation.js (29/10/2026). Voir LEXIQUE.md.
   Montants recalculés depuis IDEES_ANIMATION_VALEURS, lib/calculsPrix.js et lib/prixEntree.js : aucun prix recopié.
   href en chemins français (réécrits en /en au rendu). */
import { IDEES_ANIMATION_VALEURS, SLUG_IDEES_ANIMATION } from '../../journalIdeesAnimation'
import { LIV, FORMULES } from '../../calculsPrix'
import { MINIMUM, ANIMATION_DES } from '../../prixEntree'
import { ANIMATIONS, slugAnim } from '../../../app/creations/animations-culinaires/data'
import { enAnimation } from '../produits/animations'
import { MARCHE } from '../../animationsMarche'
import { eurEn, faqHtmlEn } from './budget'

const { AVEC_PLANCHER, OCCASIONS, EFFECTIFS, pdj30, ex1, ck50, ex2, pause50, ex3 } = IDEES_ANIMATION_VALEURS

const nomEn = (id) => enAnimation(id)?.nom || ANIMATIONS.find(a => a.id === id).nom
const lien = (id) => `<a href="/creations/animations-culinaires/${slugAnim(ANIMATIONS.find(a => a.id === id).nom)}">${nomEn(id)}</a>`
const liens = (ids) => ids.map(lien).join(', ')
const nomMarche = (cle) => MARCHE.find(m => m.cle === cle)?.courtEn || cle

const OCC_EN = {
  seminaire: { nom: 'Seminar, training day', moment: 'Morning welcome and breaks' },
  teambuilding: { nom: 'Team building', moment: 'Afternoon' },
  afterwork: { nom: 'Afterwork, team evening', moment: 'End of the day' },
  fin: { nom: 'End-of-year party', moment: 'Evening' },
  noel: { nom: 'Company Christmas party for families', moment: 'Afternoon' },
  qvt: { nom: 'Wellbeing week', moment: 'Morning or afternoon break' },
  integration: { nom: 'Onboarding morning, welcome day', moment: 'Morning' },
  inauguration: { nom: 'Office opening, client evening, trade show', moment: 'End of the day' },
  chandeleur: { nom: 'Candlemas and other dates in the year', moment: 'Break' },
}
const EFF_EN = [
  { lib: 'Under 20 people', conseil: 'A short entertainment activity (quiz, creative workshop) or a more generous delivered break: at this size, a live food station costs more per person than an 8-piece cocktail reception.' },
  { lib: '20 to 50 people', conseil: 'A single live food station at the key moment: barista at the welcome, crêpes at the break, mini burgers at the afterwork.' },
  { lib: '50 to 150 people', conseil: 'One live food station plus one entertainment activity, or two food stations to avoid queues: one savoury, one sweet.' },
  { lib: 'Over 150 people', conseil: 'Several stations spread around the room, one per theme, with a delivered cocktail reception alongside: service does not rely on a single station.' },
]

const FAQ_EN = [
  { q: 'What activity should we plan for a company event?', a: `Choose by occasion and headcount: a barista or a juice bar for a seminar, mini burgers or a mocktail bar for an afterwork, salmon carving or an ice cream bar for an end-of-year party, candy floss for a family Christmas party. L'Écrin Traiteur offers ${AVEC_PLANCHER.length} live food stations from ${eurEn(ANIMATION_DES)} excl. VAT in Paris and the Île-de-France region.` },
  { q: 'Which activity for a small group of under 20 people?', a: `A short activity with little equipment, such as a quiz or a creative workshop, or a more generous delivered break. A live food station at the ${eurEn(ANIMATION_DES)} excl. VAT floor costs ${eurEn(ANIMATION_DES / 15, true)} excl. VAT per person for 15 guests, more than an 8-piece cocktail reception at ${eurEn(FORMULES.invitation.prix, true)} excl. VAT.` },
  { q: 'How much does a corporate event activity cost?', a: `It depends on the format. At L'Écrin Traiteur, a live food station starts at ${eurEn(ANIMATION_DES)} excl. VAT, at least ${eurEn(ANIMATION_DES / 50)} excl. VAT per person for 50 guests. Entertainment activities (quiz, DJ, photo booth) are priced separately, as a flat fee or per person, by specialist providers.` },
  { q: 'Which activity for a company seminar?', a: 'In the morning, a barista, a fresh juice bar or scrambled eggs to order for the welcome; during breaks, a yoghurt and granola bar or a fresh fruit bar. The activity goes where everyone is, not during working sessions.' },
  { q: 'Which activity for an afterwork?', a: 'Standing, quick formats: mini burgers, gourmet tacos, loaded fries or a mocktail bar, 100% alcohol-free. For entertainment, a one-hour quiz or music quiz works well up to about fifty people.' },
  { q: 'Which activity for a company end-of-year party?', a: 'A savoury station people notice, such as fresh salmon carving or a sushi station, a sweet station such as the ice cream bar, and an entertainment activity (DJ, photo booth, magician). Above 150 guests, plan several stations to avoid queues.' },
  { q: 'Which activity for a company Christmas party with children?', a: 'Sweet stations children can watch being made: candy floss, sweet popcorn, chocolate fountain, crêpes. They pair well with a magician or a caricaturist.' },
  { q: 'How far ahead should we book an activity?', a: "At least a week for a live food station at L'Écrin Traiteur, earlier in December. The quote is sent within 24 hours; from 50 people, the firm order for the delivered part is placed 48 hours ahead." },
  { q: 'What do we need on site for an activity?', a: 'Space near where people pass, a power socket for hot stations (crêpes, waffles, eggs, pasta, burgers), the set-up time and access to the venue. Give these details when you ask for a quote.' },
  { q: 'Do live food stations suit every diet?', a: "At L'Écrin Traiteur, savoury stations are halal and pork-free, and everything is alcohol-free. The mini burgers (plant-based patty on request), tacos and wraps (falafel) have a vegetarian option; gluten-free is specified with the order." },
]

export const EN_JOURNAL = {
  [SLUG_IDEES_ANIMATION]: {
    titre: 'Corporate event activity ideas: which one to choose by occasion, headcount and budget (2026)',
    metaTitle: 'Corporate event activity ideas: which one to choose in 2026',
    extrait: `Which activity for a company event: ideas by occasion (seminar, afterwork, end-of-year, Christmas, wellbeing), by headcount, budget and ${AVEC_PLANCHER.length} live food stations from ${eurEn(ANIMATION_DES)} excl. VAT.`,
    enBref: [
      'Choose the activity in this order: occasion, then headcount, then budget. The time of day sets the format; the headcount sets the number of stations.',
      `A live food station at L'Écrin Traiteur starts at ${eurEn(ANIMATION_DES)} excl. VAT: at least ${eurEn(ANIMATION_DES / 50)} excl. VAT per person for 50 guests and ${eurEn(ANIMATION_DES / 100)} for 100.`,
      'Under 20 people, a short entertainment activity or a generous break costs less per person than a live food station.',
      'A live food station replaces part of the buffet or cocktail reception: combine it with a delivered service rather than adding it on top.',
    ],
    faq: FAQ_EN,
    contenu: `
      <p>The right corporate event activity depends first on the <strong>occasion</strong>, then the <strong>headcount</strong>, then the <strong>budget</strong>. In the morning, go for hot drinks and juices (barista, juice bar); at the break, something sweet (crêpes, waffles); in the evening, standing formats (mini burgers, mocktail bar) and entertainment (quiz, DJ, photo booth). At L'Écrin Traiteur, a live food station starts at <strong>${eurEn(ANIMATION_DES)} excl. VAT</strong>, at least ${eurEn(ANIMATION_DES / 50)} excl. VAT per person for 50 guests. This guide sorts ideas by occasion and headcount, and shows how to combine an activity with catering.</p>

      <h2>Which activity for which occasion?</h2>
      <p>The table matches each common company occasion with live food stations from our catalogue and the entertainment activities most often seen there.</p>
      <table>
        <thead><tr><th>Occasion</th><th>Time</th><th>Live food stations</th><th>Other common activities</th></tr></thead>
        <tbody>
${OCCASIONS.map(o => `          <tr><td><strong><a href="${o.page}">${OCC_EN[o.cle].nom}</a></strong></td><td>${OCC_EN[o.cle].moment}</td><td>${liens(o.ids)}</td><td>${o.autres.map(nomMarche).join(', ')}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>The full catalogue is on the <a href="/creations/animations-culinaires">live food stations</a> page: ${ANIMATIONS.length} stations across five themes, breakfast and brunch, lunch, street food, sweets and bars.</p>

      <h2>Which activity for how many people?</h2>
      <p>Headcount decides the number of stations and how much an activity weighs in the budget per person. The minimum below is the L'Écrin Traiteur live station floor divided by the headcount.</p>
      <table>
        <thead><tr><th>Headcount</th><th>Example</th><th>Live food station, minimum per person</th><th>What works</th></tr></thead>
        <tbody>
${EFFECTIFS.map((e, i) => `          <tr><td><strong>${EFF_EN[i].lib}</strong></td><td>${e.n} people</td><td>${eurEn(ANIMATION_DES / e.n, true)} excl. VAT</td><td>${EFF_EN[i].conseil}${e.ids.length ? ` Examples: ${liens(e.ids)}.` : ''}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>A useful benchmark: an 8-piece cocktail reception costs ${eurEn(FORMULES.invitation.prix, true)} excl. VAT per person. As long as the floor per person is above that, a live food station alone is not the best spend.</p>

      <h2>How much does a corporate event activity cost?</h2>
      <p>A live food station is priced in two parts, set-up and servings. At L'Écrin Traiteur, the floor is ${eurEn(ANIMATION_DES)} excl. VAT, set-up and clearing included, and the exact price is set in the quote depending on date, venue, headcount, duration and access.</p>

      <h2>Live food station or entertainment activity?</h2>
      <ul>
        <li><strong>A live food station</strong> feeds people while entertaining them: it replaces part of the buffet or cocktail reception, and everyone stops by, even those who do not want to play a game.</li>
        <li><strong>An entertainment activity</strong> (quiz, escape game, DJ, photo booth) creates a shared moment but does not feed anyone: you need catering alongside.</li>
        <li><strong>A workshop where guests cook</strong> is team building: it needs an equipped kitchen or a dedicated venue, and two to three hours. Our stations are prepared in front of guests by a host, without making them cook.</li>
        <li><strong>Both together</strong> work above 50 people: a food station while the quiz or the DJ holds the rest of the room.</li>
      </ul>

      <h2>Live food station ideas by time of day</h2>
      <ul>
        <li><strong>Morning welcome</strong>: ${liens(['b1', 'b3', 'b5', 'b9', 'b8'])}. For coffee without a host, the ${lien('b2')}.</li>
        <li><strong>Break</strong>: ${liens(['b6', 'b7', 'do4', 'do6', 'do2'])}.</li>
        <li><strong>Lunch</strong>: ${liens(['d1', 'd2', 's7', 's5', 'b4'])}.</li>
        <li><strong>Cocktail reception and evening</strong>: ${liens(['d3', 'd5', 'd6', 'd7', 's2'])}.</li>
        <li><strong>Afterwork</strong>: ${liens(['s3', 's6', 's9', 'ba1'])}.</li>
        <li><strong>Parties and children</strong>: ${liens(['do1', 'do5', 'do7'])}.</li>
      </ul>
      <p>The charcuterie is halal and pork-free (dried beef, smoked turkey, bresaola), and the mocktail bar is 100% alcohol-free. For dates in the calendar, see <a href="/creations/evenements-saisonniers/chandeleur">Candlemas</a>, the <a href="/creations/evenements-saisonniers/semaine-qvt">wellbeing week</a>, <a href="/creations/evenements-saisonniers/halloween">Halloween</a> and the <a href="/creations/evenements-saisonniers/fete-de-fin-dannee">end-of-year party</a>.</p>

      <h2>How much to budget for an activity with catering?</h2>
      <p>Three examples calculated at the ${eurEn(ANIMATION_DES)} excl. VAT floor, with catalogue prices for the rest and a ${eurEn(LIV)} excl. VAT delivery. The actual price of the station is set in the quote.</p>
      <table>
        <thead><tr><th>Occasion</th><th>Delivered service</th><th>Activity</th><th>Minimum total excl. VAT</th><th>Per person</th></tr></thead>
        <tbody>
          <tr><td><strong>Seminar welcome, 30 people</strong></td><td>Classic breakfast: ${eurEn(pdj30)}</td><td>${lien('b1')}: ${eurEn(ANIMATION_DES)}</td><td>${eurEn(ex1)}</td><td>${eurEn(ex1 / 30, true)}</td></tr>
          <tr><td><strong>Afterwork, 50 people</strong></td><td>${FORMULES.invitation.pieces}-piece cocktail reception, juice and water: ${eurEn(ck50.sans, true)}</td><td>${lien('s3')}: ${eurEn(ANIMATION_DES)}</td><td>${eurEn(ex2, true)}</td><td>${eurEn(ex2 / 50, true)}</td></tr>
          <tr><td><strong>Staff party, 50 people</strong></td><td>Afternoon break: ${eurEn(pause50)}</td><td>${lien('do1')}: ${eurEn(ANIMATION_DES)}</td><td>${eurEn(ex3)}</td><td>${eurEn(ex3 / 50, true)}</td></tr>
        </tbody>
      </table>
      <p>More on budget: <a href="/journal/animations-culinaires-entreprise-idees-budget">live food stations, ideas and budget</a> and <a href="/journal/quel-traiteur-animation-culinaire-evenement-paris">which caterer for a live food station</a>.</p>

      <h2>Organising an activity: the checklist</h2>
      <ol>
        <li><strong>Set the occasion and time</strong>: the activity goes where everyone is, at the welcome, the break or the start of the evening.</li>
        <li><strong>Confirm the headcount</strong>: it decides the number of stations and the quantities.</li>
        <li><strong>Check the venue</strong>: space near where people pass, a power socket for hot stations, set-up time, access and lift.</li>
        <li><strong>List dietary needs</strong>: vegetarian, gluten-free, allergies, given with the order.</li>
        <li><strong>Book early</strong>: at least a week for a live food station, more in December.</li>
        <li><strong>Adjust the rest</strong>: remove from the buffet or cocktail reception what the station already serves.</li>
      </ol>

      <h2>Common mistakes</h2>
      <ul>
        <li><strong>Choosing the activity before the headcount</strong>: under 20 people, a live food station weighs more than ${eurEn(ANIMATION_DES / 20)} excl. VAT per person.</li>
        <li><strong>One station for 200 people</strong>: queues kill the mood, plan several stations.</li>
        <li><strong>An activity with nothing to eat</strong>: a quiz or a DJ needs catering alongside.</li>
        <li><strong>Putting the station at the back of the room</strong>: a station away from the flow stays empty.</li>
        <li><strong>Forgetting the power supply</strong>: crêpes, waffles, burgers and pasta need a socket.</li>
      </ul>

      <h2>Frequently asked questions about corporate event activities</h2>
${faqHtmlEn(FAQ_EN)}

      <h2>Ask for an activity quote</h2>
      <p>Give the date, venue, headcount, duration and access: L'Écrin Traiteur replies within 24 hours, with a company invoice and VAT. <a href="/devis">Ask for a quote</a>. See also the <a href="/journal/animation-culinaire-entreprise-paris">10 live food station ideas</a>.</p>
      <p><em>L'Écrin Traiteur prices, October 2026, in euros excluding VAT, delivery at ${eurEn(LIV)} excl. VAT in Paris and nearby towns, minimum order ${eurEn(MINIMUM)} excl. VAT.</em></p>
    `,
  },
}
