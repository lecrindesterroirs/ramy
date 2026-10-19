/*
  Page /traiteur-eco-responsable, textes anglais.

  Surcouche de texte seulement : photos et liens restent lus dans la page
  française. Les montants viennent de lib/prixEntree.js, jamais recopiés.

  Deux points de prudence, tenus mot pour mot comme en français :
  - aucun label écologique n'est revendiqué, aucune mention « zéro déchet »
    ni « neutre en carbone », et aucun chiffre d'émissions n'est publié ;
  - le bois non traité se trie avec les biodéchets « là où la collecte
    existe », pas partout.
  Ce sont des engagements, pas du marketing : ils doivent dire exactement la
  même chose dans les deux langues.

  Les href gardent leur chemin français et passent par reecrireLiensEnDans().
*/
import { MINIMUM, PDJ_DES, PAUSE_DES, PLATEAU_DES, RECUP, euroEn } from '../../prixEntree'

const HT = 'excl. VAT'
const e = euroEn
const recup = `${e(RECUP)} ${HT}`

export const EN_ECO = {
  /* ── Hero ── */
  eyebrow: 'Corporate catering · Paris & Île-de-France',
  h1a: 'Sustainable catering',
  h1b: 'Paris & Île-de-France',
  heroDesc: 'A corporate caterer that feeds people well without waste: short supply chains, wood and cane-pulp tableware, reusable tableware and thermoses collected afterwards, delivered to your offices from 6:30 am.',
  ctaDevis: 'Get a quote →',
  ctaEngagements: 'Our commitments',
  badges: ['Short supply chains', 'Wood & cane-pulp tableware', 'Tableware & thermoses collected', 'Rated 5/5 on Google'],
  heroAlt: "Sustainable corporate catering, L'Écrin Traiteur",

  /* ── Bloc-réponse ── */
  reponseQ: 'What does a sustainable corporate caterer actually do?',
  reponse1: "At L'Écrin Traiteur it comes down to four things you can check: products from artisan producers we name, containers made of untreated French poplar wood, card or cane pulp rather than disposable plastic, collection of the reusable tableware and thermoses after your event, and delivery by our own team, never subcontracted.",
  reponse2a: 'We claim no eco-label, no "zero waste" or "carbon neutral" badge, and we publish no impact figures: delivering meals across Paris produces waste and emissions, and we would rather say what we do than display what we could not prove. Delivered from 6:30 am across Paris and Île-de-France, order until 2 pm the day before, minimum ',
  reponse2mini: `${e(MINIMUM)} ${HT}`,
  reponse2b: ', quote within 24 hours.',

  /* ── Les 3 piliers ── */
  piliersEyebrow: 'A practice, not a logo',
  piliersTitre: 'Hosting well,\nwithout the waste',
  piliers: [
    { label: 'Sourcing', titre: 'Short chains, named producers',
      desc: 'We start from growers and makers we name: the Ferme de Viltain, the Yvelines orchard, French flours, no artificial flavourings. Fewer middlemen, products you can trace.' },
    { label: 'Tableware', titre: 'Wood, card, cane pulp',
      desc: 'We plate in wood, card and cane-pulp tableware, which goes out with food waste where that collection exists, rather than disposable plastic. The presentation stays careful, the footprint gets lighter.' },
    { label: 'Closed loop', titre: 'Tableware & thermoses collected',
      desc: 'We collect the reusable tableware and the thermoses after your event. It is our own team that delivers and takes them back: nothing goes to the skip for no reason.' },
  ],

  /* ── Prestations ── */
  prestationsEyebrow: 'Our services',
  prestationsTitre: 'From breakfast\nto the buffet',
  prestationsCta: 'Explore →',
  prestations: [
    { label: 'Breakfasts & Breaks', desc: 'Seasonal fruit, farm yoghurts and pastries, plated in wood, card or cane-pulp tableware, delivered from 6:30 am.' },
    { label: 'Lunch Trays', desc: 'Individual menus for your working lunches, recyclable containers collected after the service.' },
    { label: 'Cocktail Receptions & Buffets', desc: 'Receptions plated with care, wood and cane-pulp tableware, thermoses and equipment taken back afterwards.' },
  ],

  /* ── FAQ ── */
  faqEyebrow: 'Frequently asked questions',
  faqTitre: 'Sustainable catering, answered',
  faq: [
    { q: 'Is your corporate caterer really sustainable?',
      a: 'In practice, yes, and without a bought label: short supply chains with named makers and growers, wood and cane-pulp tableware, collection of the reusable tableware and thermoses, and delivery by our own in-house team with no subcontracting.' },
    { q: 'What tableware do you use?',
      a: 'Wood, card and cane-pulp tableware, which goes out with food waste where that collection exists, rather than disposable plastic. The plating stays careful, for your receptions as much as your breakfasts.' },
    { q: 'Do you collect the tableware and thermoses after the service?',
      a: `Yes. Our team takes back the reusable tableware and the thermoses after your event, as part of a closed loop that limits waste. Collecting the equipment is charged at ${recup} on top of delivery.` },
    { q: 'Where do your products come from?',
      a: 'From makers and growers we identify in Île-de-France and in France: the Ferme de Viltain, the Yvelines orchard, French flours, no artificial flavourings. We favour short supply chains when being close genuinely improves the product.' },
    { q: 'Do you hold an environmental label or certification?',
      a: 'No. We display no label of our own, and no "zero waste" or "carbon neutral" claim. What we do document is where our products and our containers come from: the poplar wood boxes are PEFC certified, and we pass on their references and certifications on request.' },
    { q: 'Can you show us the containers before we order?',
      a: 'Yes. If the packaging matters to your decision, say so at the quote stage: we will show you the containers planned for your service before the order is confirmed.' },
    { q: 'How do you limit waste at an offsite or an event?',
      a: 'By setting the quantities against the real headcount: confirm the number of attendees 48 hours ahead, add a 10% margin rather than a large surplus, and use the last possible adjustment, until 2 pm the day before. Every order is made the same morning, to the quantity asked for.' },
    { q: 'Which service suits a sustainable offsite?',
      a: `For a full day, a welcome breakfast (from ${e(PDJ_DES)} ${HT} per person), lunch trays (from ${e(PLATEAU_DES)} ${HT}) and an afternoon break (from ${e(PAUSE_DES)} ${HT}) all come in a single delivery. Collecting the reusable tableware and the thermoses (${recup} on top of delivery) is planned in the quote.` },
  ],

  /* ── Liens connexes ── */
  relatedEyebrow: 'Explore our services',
  relatedTitre: 'Build a responsible service',
  related: [
    { href: '/creations/petits-dejeuners-et-pauses', title: 'Breakfasts & Breaks', meta: 'Delivered from 6:30 am' },
    { href: '/creations/plateaux-repas', title: 'Lunch Trays', meta: 'Working lunches' },
    { href: '/univers/nos-engagements', title: 'Our commitments', meta: 'How we work' },
    { href: '/devis', title: 'Ask for a quote', meta: 'A quick answer' },
  ],

  /* ── Clôture ── */
  closingEyebrow: 'Sustainable corporate catering',
  closingTitre: 'Hosting well,\nwithout the waste.',
  closingBody: 'Short supply chains, wood and cane-pulp tableware, reusable tableware and thermoses collected, delivery by our own team: every service is built to feed your teams well while limiting waste, across Paris and Île-de-France.',
  closingCta: 'A responsible service to organise?',
  args: [
    { icon: 'quality',  titre: 'Short supply chains',   desc: 'Named growers and makers, French flours, no artificial flavourings. We name, so we can be held to it.' },
    { icon: 'custom',   titre: 'Wood and cane-pulp tableware', desc: 'Wood, card and cane pulp rather than disposable plastic, losing nothing in presentation.' },
    { icon: 'support',  titre: 'Closed loop',            desc: 'Reusable tableware and thermoses collected after your event.' },
    { icon: 'delivery', titre: 'Delivered by our own team', desc: 'No subcontracting: the same team delivers and takes back, across Paris and Île-de-France.' },
  ],

  /* ── Article SEO ── */
  seoArticle: `
    <h2>A sustainable corporate caterer, in practice</h2>
    <p>At <strong>L'Écrin Traiteur</strong>, being sustainable is not a label at the bottom of a page: it is a way of working. We start from makers and growers we identify, in short supply chains when being close genuinely improves the product: the Ferme de Viltain, the Yvelines orchard, French flours, no artificial flavourings. Naming our sources is already being answerable for them.</p>

    <h2>What we do, and what we do not claim</h2>
    <div class="tbl-wrap"><table>
      <thead><tr><th>Area</th><th>What we do</th><th>The detail</th></tr></thead>
      <tbody>
        <tr><td><strong>Products</strong></td><td>Named makers and growers: yoghurts from the Ferme de Viltain, Alain Milliat juices, Mado Paris madeleines, French flours, no artificial flavourings.</td><td>A short supply chain is chosen when being close genuinely improves the product, not as a selling point.</td></tr>
        <tr><td><strong>Containers</strong></td><td>Untreated French poplar wood, PEFC certified. Card or cane pulp for anything liquid or hot.</td><td>Untreated wood goes out with food waste where that collection exists. We say where the container comes from, not that there is no waste.</td></tr>
        <tr><td><strong>Tableware and thermoses</strong></td><td>Our team takes back the reusable tableware and the thermoses after your event.</td><td>To be planned in the quote, depending on the service.</td></tr>
        <tr><td><strong>Delivery</strong></td><td>Our own team delivers and collects the equipment, never subcontracted.</td><td>We publish no emissions figure.</td></tr>
      </tbody>
    </table></div>
    <p>Where the wooden boxes come from is set out in our article on <a href="/journal/emballage-traiteur-bois-peuplier-francais">where your lunch box comes from</a>, and how we work generally on our <a href="/univers/nos-engagements">commitments</a> page.</p>

    <h2>Wood and cane-pulp tableware, tableware and thermoses collected</h2>
    <p>We plate your breakfasts, lunch trays and buffets in <strong>wood, card and cane-pulp tableware</strong>, which goes out with food waste where that collection exists, rather than disposable plastic. And for anything reusable we work in a closed loop: <strong>our team collects the tableware and the thermoses</strong> after your event, so the party does not end up in the skip.</p>

    <h2>An offsite or a sustainability policy: what to ask your caterer</h2>
    <ul>
      <li><strong>The containers planned.</strong> We show them to you before the order is confirmed.</li>
      <li><strong>The references and certifications.</strong> They are passed on request to your procurement team or for your sustainability report.</li>
      <li><strong>Collection of the equipment.</strong> Thermoses and reusable tableware: to be specified in the quote.</li>
      <li><strong>The quantities.</strong> The headcount is confirmed 48 hours ahead and the quantities can still be adjusted until 2 pm the day before, so you order to the right amount.</li>
      <li><strong>Dietary needs.</strong> The whole menu is halal and pork-free as standard, with vegetarian, vegan and gluten-free options: see <a href="/traiteur-halal">halal corporate catering</a>.</li>
    </ul>

    <h2>Which service for which moment?</h2>
    <ul>
      <li><strong>The morning welcome:</strong> a <a href="/creations/petits-dejeuners-et-pauses">corporate breakfast</a>, delivered from 6:30 am.</li>
      <li><strong>Lunch:</strong> <a href="/creations/plateaux-repas">lunch trays</a> or a <a href="/creations/lunch-box">lunch box</a>, in wooden containers.</li>
      <li><strong>The afternoon:</strong> a <a href="/creations/pauses-gourmandes">corporate afternoon break</a>, madeleines, loaf cakes and fresh fruit.</li>
      <li><strong>End of the day:</strong> <a href="/creations/cocktails">cocktail formats</a> and <a href="/occasions/afterwork-entreprise">after-work drinks</a>.</li>
      <li><strong>A full day:</strong> <a href="/occasions/seminaire-entreprise">catering for a corporate offsite</a>, all in one order.</li>
    </ul>

    <h2>Delivered and collected by our own team</h2>
    <p>From the order to the collection of the equipment, everything goes through our own team, never through subcontracting. We deliver from 6:30 am across Paris and Île-de-France, for 10 to 300 people: <a href="/traiteur/paris">Paris</a>, <a href="/traiteur/la-defense">La Défense</a>, <a href="/traiteur/boulogne-billancourt">Boulogne-Billancourt</a>, <a href="/traiteur/versailles">Versailles</a> and <a href="/traiteur">every town we serve</a>. <a href="/devis">Ask for your free quote</a> and build a service that feeds your teams well without waste.</p>
  `,

  /* ── Schéma ── */
  breadcrumb: [{ name: 'Home' }, { name: 'Sustainable catering' }],
  schemaDesc: "Sustainable corporate caterer in Paris and Île-de-France: short supply chains, named makers, wood and cane-pulp tableware, tableware and thermoses collected. Delivered from 6:30 am.",
}
