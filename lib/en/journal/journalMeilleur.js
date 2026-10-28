/* Surcouche anglaise de lib/journalMeilleur.js. */
import { faqHtmlEn } from './budget'

const FAQ = [
  { q: 'Which is the best caterer for an office breakfast in Paris?', a: 'There is no official ranking. The best caterer is the one that meets seven checkable commitments: early delivery at the time you choose, published prices, named artisan products, a clear ordering deadline, dietary requirements covered, a stated minimum order, and client reviews you can look up. L\'Écrin Traiteur shows all seven: delivery from 6:30 am, a package from €8 excl. VAT per person, orders until 10 am the day before, 5.0/5 from 29 Google reviews.' },
  { q: 'What does a delivered office breakfast cost in Paris?', a: 'From €8 excl. VAT per person for the Classic package (pastries, juice, coffee, fruit); the full breakfast is on quote, plus €29 excl. VAT delivery. For 20 people, the Classic package comes to €189 excl. VAT including delivery.' },
  { q: 'How early can a caterer deliver breakfast?', a: 'At L\'Écrin Traiteur, from 6:30 am, at the time the client chooses, Monday to Friday. Orders are placed until 10 am the day before, and 48 hours ahead from 50 people.' },
  { q: 'Is there a minimum order?', a: 'Yes, €50 excl. VAT at L\'Écrin Traiteur, which is about 6 people with the Classic package. The prices and the minimum are published on the site, with no need to ask for a quote first.' },
  { q: 'How do you compare two breakfast quotes?', a: 'Compare them line by line: quantity per person (2 mini pastries, a glass of juice, a hot drink), delivery charge, delivery time, cups and napkins, and what is included. A low price per person can hide the delivery or the drinks.' },
  { q: 'Can you try a caterer before a large event?', a: 'Yes: start with an order for 8 to 10 people, or ask for a quote within 24 hours. The €50 excl. VAT minimum lets you test with no commitment, and the quantity guide stops you over-ordering.' },
]

export const EN_JOURNAL = {
  'meilleur-traiteur-petit-dejeuner-paris-comment-choisir': {
    titre: 'Best breakfast caterer in Paris: 7 criteria for choosing for your company',
    metaTitle: 'Best breakfast caterer in Paris: 7 criteria (2026)',
    extrait: 'No official ranking exists: 7 checkable criteria for choosing a breakfast caterer in Paris, with figures to go by and a simple test.',
    enBref: [
      'There is no official ranking of the best breakfast caterer in Paris: you choose on seven checkable criteria.',
      'The seven criteria: delivery time, published prices, named products, ordering deadline, dietary requirements, minimum order, reviews you can look up.',
      "L'Écrin Traiteur: delivery from 6:30 am, a package from €8 excl. VAT per person, orders until 10 am the day before, €50 excl. VAT minimum, 5.0/5 from 29 Google reviews.",
      "Each criterion can be checked on the caterer's own website, without picking up the phone.",
    ],
    contenu: `
      <p>The <strong>best breakfast caterer in Paris</strong> is not named by any official ranking: it is the one that delivers on time, publishes its prices and names its products. Here are <strong>seven checkable criteria</strong>, and where L'Écrin Traiteur stands on each.</p>

      <h2>What are the seven criteria for choosing a breakfast caterer?</h2>
      <table>
        <thead><tr><th>Criterion</th><th>What to check</th><th>At L'Écrin Traiteur</th></tr></thead>
        <tbody>
          <tr><td><strong>1. Delivery time</strong></td><td>Delivery before the meeting starts, at the time you choose</td><td>From 6:30 am, at the client's hour</td></tr>
          <tr><td><strong>2. Published prices</strong></td><td>Price per person visible without asking for a quote</td><td>From €6.50 excl. VAT (pastries and coffee), €8 excl. VAT (Classic), full breakfast on quote, €29 excl. VAT delivery</td></tr>
          <tr><td><strong>3. Named products</strong></td><td>Where the pastries, juice and coffee come from</td><td>Mado Paris madeleines, Alain Milliat juice, coffee and tea in thermoses</td></tr>
          <tr><td><strong>4. Ordering deadline</strong></td><td>Cut-off time the day before, notice for large groups</td><td>Until 10 am the day before; 48 hours from 50 people</td></tr>
          <tr><td><strong>5. Dietary requirements</strong></td><td>Vegetarian, vegan and gluten-free options stated</td><td>Vegan, gluten-free fruit skewers, gluten-free banana bread, on request</td></tr>
          <tr><td><strong>6. Minimum order</strong></td><td>Threshold stated before you ask for a quote</td><td>€50 excl. VAT</td></tr>
          <tr><td><strong>7. Reviews you can look up</strong></td><td>Rating and number of reviews on a public source</td><td>5.0/5 from 29 Google reviews</td></tr>
        </tbody>
      </table>

      <h2>How do you check these criteria before ordering?</h2>
      <p>Each criterion can be checked on the caterer's own website, without picking up the phone: the delivery time and the ordering cut-off should be written down, the price per person should be visible, the producers should be named, and the rating should point to a public source with its number of reviews. If something is missing, ask for it in writing before ordering: a serious caterer replies within 24 hours.</p>

      <h2>What does an office breakfast cost in Paris?</h2>
      <p>An office breakfast costs <strong>from €8 excl. VAT per person</strong> (Classic package: pastries, juice, coffee, fruit); the full breakfast is on quote, plus €29 excl. VAT delivery. For 20 people, allow €189 excl. VAT including delivery with the Classic package. The detail by headcount is in <a href="/journal/budget-petit-dejeuner-equipe-personnes">how much an office breakfast costs</a> and in the guide to the <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">breakfast for 20 people</a>.</p>

      <h2>What quantities should you order to get it right?</h2>
      <p>Allow 2 mini pastries per person (3 up to 10 people), 1 sweet bite, 1 glass of juice and 1 hot drink, with one 1-litre thermos per 6 people. The tables by headcount are in <a href="/journal/combien-viennoiseries-par-personne">how many mini pastries per person</a> and in <a href="/journal/de-quoi-se-compose-petit-dejeuner-entreprise">what goes into an office breakfast</a>.</p>

      <h2>How do you try a caterer without taking a risk?</h2>
      <ol>
        <li><strong>Start small:</strong> a first order for 8 to 10 people, above the €50 excl. VAT minimum.</li>
        <li><strong>Set the time:</strong> ask for delivery 15 to 30 minutes before the team arrives, and check that it is met.</li>
        <li><strong>Compare quotes line by line:</strong> quantity per person, delivery, drinks, cups, napkins.</li>
        <li><strong>Look at recent reviews:</strong> a rating on a public source, with the number of reviews.</li>
      </ol>

      <h2>Going further</h2>
      <p>To compare the main kinds of provider (platforms, artisans, catering groups), see the <a href="/journal/comparatif-traiteur-entreprise-paris">comparison of corporate caterers in Paris</a>. To order, turn to our <a href="/creations/petits-dejeuners-et-pauses">breakfast caterer in Paris</a> or ask for a <a href="/devis">quote</a> within 24 hours: delivery from 6:30 am in Paris and the Paris region.</p>

      <p><em>L'Écrin Traiteur prices, October 2026, in euros excluding VAT. Google rating recorded on 13 October 2026.</em></p>

      <h2>Frequently asked questions about choosing a breakfast caterer</h2>
${faqHtmlEn(FAQ)}
    `,
    faq: FAQ,
  },
}
