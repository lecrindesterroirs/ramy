/* Surcouche anglaise de lib/journalParisJeTaime.js (28/10/2026). */
import { faqHtmlEn } from './budget'

const SRC_CONVENTION = 'https://parisjetaime.com/convention'

const FAQ_PJTM = [
  { q: "What is Paris je t'aime?", a: "Paris je t'aime is the brand of the Paris Tourist and Convention Office. Its Convention section is aimed at organisers of conferences, seminars and corporate events looking for venues and suppliers in Paris." },
  { q: 'What does the membership change for an event organiser?', a: "L'Écrin Traiteur is listed among the suppliers presented to event organisers. For a seminar, a conference or a corporate evening, you find a caterer that delivers across Paris and the Île-de-France region, with a quote within 24 hours." },
  { q: 'Can you work with a company or an agency based abroad?', a: 'Yes. The website is available in English, quotes and exchanges can be handled in English, and the invoice includes French VAT, which applies to catering delivered in Paris, even for a company based outside France.' },
  { q: 'What do you offer for an event in Paris?', a: 'Breakfasts from €8 excl. VAT per person, breaks, lunch trays, sharing buffets and cocktail receptions from €29.90 excl. VAT per person for 8 pieces. Savoury food is halal and pork-free, with vegetarian, vegan and gluten-free options.' },
]

export const EN_JOURNAL = {
  'lecrin-traiteur-partenaire-officiel-paris-je-taime': {
    titre: "L'Écrin Traiteur becomes an official partner of Paris je t'aime, the Paris Tourist Office",
    metaTitle: "L'Écrin Traiteur, official partner of Paris je t'aime",
    extrait: "L'Écrin Traiteur joins the Paris je t'aime network, the Paris Tourist and Convention Office: what it means for event organisers and for companies based abroad.",
    enBref: [
      "Since October 2026, L'Écrin Traiteur has been an official partner of Paris je t'aime, the Paris Tourist and Convention Office.",
      'We are listed as a caterer for organisers of conferences, seminars and corporate events.',
      'Delivery from 6.30am across Paris and the Île-de-France region, a quote within 24 hours, exchanges possible in English.',
      'Savoury food is halal and pork-free, with vegetarian, vegan and gluten-free options.',
    ],
    contenu: `
      <p>L'Écrin Traiteur is now an <strong>official partner of Paris je t'aime</strong>, the brand of the Paris Tourist and Convention Office. Our membership was confirmed in October 2026: we join the network of professionals who welcome the city's visitors and events.</p>

      <img src="/partenaires/paris-je-taime-partenaire-officiel-2026.webp" width="320" height="161" alt="Official partner of Paris je t'aime, Paris Tourist Office, 2026" loading="lazy" style="display:block;max-width:320px;height:auto;margin:24px 0" />

      <h2>Why join Paris je t'aime?</h2>
      <p>A large part of our work is already for events: seminars, board meetings, open days, end-of-year parties. Paris je t'aime presents venues and suppliers to organisers of conferences and corporate events in its <a href="${SRC_CONVENTION}" target="_blank" rel="noopener">Convention section</a>. Being listed there helps agencies and companies preparing an event in Paris find a caterer that delivers anywhere in the city.</p>

      <h2>What we offer event organisers</h2>
      <ul>
        <li><strong>Breakfasts and welcome coffee</strong> delivered from 6.30am, for when participants arrive.</li>
        <li><strong>Morning and afternoon breaks</strong> for seminar days.</li>
        <li><strong>Lunch trays and sharing buffets</strong>, with a vegetarian, meat or fish choice.</li>
        <li><strong>Cocktail receptions</strong> of 8, 12 or 16 pieces per person, and <a href="/en/creations/animations-culinaires">live food stations</a> prepared in front of guests.</li>
      </ul>
      <p>Savoury food is halal and pork-free, with vegetarian, vegan and gluten-free options. We work with artisans: all-butter pastries, Mado madeleines, Alain Milliat juices, yoghurts from the Ferme de Viltain.</p>

      <h2>For companies and agencies based abroad</h2>
      <p>Many events held in Paris are planned from abroad. Our <a href="/en">website is available in English</a>, quotes and exchanges can be handled in English, and we invoice with French VAT, which applies to catering delivered in Paris, even for a company based outside France.</p>

      <h2>How to reach us</h2>
      <p>Request a <a href="/en/devis">quote</a> with the headcount, the date and the address: we reply within 24 hours. Order until 2pm the day before, delivery across Paris and the Île-de-France region, company invoice with VAT.</p>

      <h2>Frequently asked questions</h2>
${faqHtmlEn(FAQ_PJTM)}
    `,
    faq: FAQ_PJTM,
  },
}
