import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FAQSchema } from '../../components/FAQSchema'
import { businessNode, BUSINESS_ID, NAP, GBP_RATING_LABEL } from '../../lib/site'
import ProofBar from '../../components/ProofBar'

/*
  Page en anglais (GEO) : les entreprises internationales de Paris et de La Défense
  interrogent les IA en anglais (« halal corporate catering Paris »). Mêmes faits et
  mêmes prix que les pages françaises : toute modification de tarif se répercute ici.
*/

const BASE = 'https://www.lecrin-traiteur.fr'
const SANS = "'Neue Montreal', 'Neue Montreal Fallback', sans-serif"
const SERIF = "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif"

const OFFERS = [
  ['Office breakfast', 'From €8 per person', 'Butter pastries, Alain Milliat juices, coffee, fresh fruit. A full breakfast with madeleines, tea and fruit skewers runs €12 to €16 per person, plus delivery.', '/creations/petits-dejeuners-et-pauses'],
  ['Afternoon break', 'From €6 per person', 'A pastry and a drink per person (madeleines, cookies or cakes) for a meeting or a training day.', '/creations/pauses-gourmandes'],
  ['Lunch boxes', 'From €18.90 per person', 'Individual lunches, ready to eat in a meeting room.', '/creations/lunch-box'],
  ['Lunch trays', 'From €28.90 per person', 'Starter, main course, dessert and bread, individually packed.', '/creations/plateaux-repas'],
  ['Cocktail reception', '€29.90, €40.90 or €51.90 per person', '8, 12 or 16 canapés per guest, savoury and sweet, delivered ready to serve.', '/creations/cocktails'],
]

const FAQ = [
  { name: 'How much does corporate catering cost in Paris?', answer: "At L'Écrin Traiteur: office breakfast from €8 per person, lunch boxes from €18.90, lunch trays from €28.90, and cocktail receptions at €29.90 (8 canapés), €40.90 (12) or €51.90 (16) per person. Prices exclude VAT. Delivery is €29 in Paris and nearby towns, with a €50 minimum order." },
  { name: 'Is the food halal?', answer: "Yes. The whole menu is halal and pork-free by default, with no alcohol in the recipes. We do not claim a halal certification: it is a halal-friendly menu, the same for every guest. Vegetarian, vegan and gluten-free options are available on request." },
  { name: 'How far in advance should I order?', answer: 'Until 2 pm the day before for breakfast, lunch or a cocktail reception. For 50 guests or more, please allow at least 48 hours. Quotes are sent within 24 hours.' },
  { name: 'Where do you deliver?', answer: 'Paris and around twenty towns in Île-de-France, including La Défense, Boulogne-Billancourt, Neuilly-sur-Seine, Levallois-Perret, Issy-les-Moulineaux, Puteaux, Courbevoie, Nanterre and Versailles. Deliveries start at 6:30 am.' },
  { name: 'Can I get a quote in English?', answer: 'Yes. The assistant on our website answers in English, and you can write to us in English by email. You receive a detailed quote and a company invoice with VAT.' },
]

const h2 = { fontFamily: SERIF, fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', margin: '56px 0 20px' }
const p = { fontFamily: SANS, fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '20px' }
const cell = { fontFamily: SANS, fontSize: '15px', lineHeight: 1.6, color: 'var(--text-primary)', padding: '14px 12px', borderBottom: '1px solid rgba(17,17,17,0.1)', textAlign: 'left', verticalAlign: 'top' }

export default function CorporateCateringParis() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${BASE}/corporate-catering-paris#service`,
        name: 'Corporate catering in Paris',
        serviceType: 'Corporate catering',
        description: 'Office breakfast, lunch trays, lunch boxes and cocktail receptions delivered to offices in Paris and Île-de-France. Halal and pork-free by default.',
        url: `${BASE}/corporate-catering-paris`,
        inLanguage: 'en',
        areaServed: { '@type': 'State', name: 'Île-de-France' },
        provider: { '@id': BUSINESS_ID },
      },
      businessNode(),
    ],
  }

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FAQSchema faqs={FAQ} pageTitle="Corporate catering in Paris" />

      <main lang="en" style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        <div style={{ background: 'var(--bg-secondary)', padding: '90px 24px 78px', textAlign: 'center' }}>
          <p style={{ fontFamily: SANS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
            Paris &amp; Île-de-France
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.06, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.015em' }}>
            Corporate catering in Paris
          </h1>
          <p style={{ fontFamily: SANS, fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto 34px' }}>
            L&apos;Écrin Traiteur delivers office breakfasts, lunch trays and cocktail receptions to companies in Paris and La Défense, from 6:30 am. The whole menu is halal and pork-free.
          </p>
          <a href="/devis" style={{ fontFamily: SANS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: 'var(--accent)', padding: '15px 30px', display: 'inline-block', textDecoration: 'none' }}>
            Request a quote →
          </a>
        </div>

        <ProofBar lang="en" />

        <section style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 100px' }}>
          <p style={p}>
            L&apos;Écrin Traiteur is a corporate caterer based in Boulogne-Billancourt, just outside Paris. We deliver to offices of any size, with a €50 minimum order: breakfast meetings, working lunches, afternoon breaks and cocktail receptions. Our pastries and drinks come from named producers, such as Mado Paris madeleines and Alain Milliat juices, and deliveries are made by our own team.
          </p>
          <p style={p}>
            You order until <strong style={{ fontWeight: 500 }}>2 pm the day before</strong>, we deliver from <strong style={{ fontWeight: 500 }}>6:30 am</strong>. Minimum order €50, delivery €29 in Paris and nearby towns (prices exclude VAT). You receive a quote within 24 hours and a company invoice with VAT.
          </p>

          <h2 style={h2}>What does corporate catering cost in Paris?</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['Service', 'Price excl. VAT', 'What you get'].map(t => (
                    <th key={t} style={{ ...cell, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', borderBottom: '1px solid rgba(17,17,17,0.35)' }}>{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {OFFERS.map(([name, price, desc, href]) => (
                  <tr key={name}>
                    <td style={cell}><a href={href} style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{name}</a></td>
                    <td style={{ ...cell, whiteSpace: 'nowrap' }}>{price}</td>
                    <td style={cell}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...p, marginTop: '20px' }}>
            Example: a cocktail reception for 50 guests with 12 canapés each costs €2,045, excluding drinks and delivery. A breakfast for 20 people costs €189 with delivery.
          </p>

          <p style={p}>
            Detailed pages: <a href="/en/tarifs" style={{ color: 'var(--text-primary)' }}>pricing 2026</a>, <a href="/en/creations/petits-dejeuners-et-pauses" style={{ color: 'var(--text-primary)' }}>office breakfast</a>, <a href="/en/creations/plateaux-repas" style={{ color: 'var(--text-primary)' }}>office lunch</a>, <a href="/en/creations/cocktails" style={{ color: 'var(--text-primary)' }}>cocktail reception</a> and <a href="/en/traiteur-halal" style={{ color: 'var(--text-primary)' }}>halal catering</a>. Practical guides on quantities and budgets: <a href="/en/journal" style={{ color: 'var(--text-primary)' }}>the L'Écrin Journal in English</a>.
          </p>

          <h2 style={h2}>Is the catering halal?</h2>
          <p style={p}>
            Yes. The whole menu is halal and pork-free by default, with no alcohol in the recipes: breakfast, lunch trays and cocktail canapés. You have nothing to specify when ordering, and no separate buffet to plan. We do not claim a halal certification: it is a halal-friendly menu, the same for every guest.
          </p>
          <p style={p}>
            Vegetarian, vegan and gluten-free options are prepared on request and labelled. Our drinks list is alcohol-free, with a 0% sparkling Chardonnay for toasts. More details on our <a href="/traiteur-halal" style={{ color: 'var(--text-primary)' }}>halal catering page</a> (in French).
          </p>

          <h2 style={h2}>Where do you deliver?</h2>
          <p style={p}>
            Paris and around twenty towns in Île-de-France: La Défense, Boulogne-Billancourt, Neuilly-sur-Seine, Levallois-Perret, Issy-les-Moulineaux, Puteaux, Courbevoie, Nanterre, Suresnes and Versailles. You choose an exact delivery time, not a time window. See the <a href="/traiteur" style={{ color: 'var(--text-primary)' }}>full delivery area</a>.
          </p>

          <h2 style={h2}>How to order</h2>
          <p style={p}>
            Send us the date, the address, the number of guests and any dietary requirements. The assistant on this website answers in English, or you can call {NAP.phone} or write to <a href={`mailto:${NAP.email}`} style={{ color: 'var(--text-primary)' }}>{NAP.email}</a>. Our clients rate us {GBP_RATING_LABEL.replace(',', '.')} out of 5 on Google.
          </p>

          <h2 style={h2}>Frequently asked questions</h2>
          {FAQ.map(f => (
            <div key={f.name} style={{ borderBottom: '1px solid rgba(17,17,17,0.1)', padding: '18px 0' }}>
              <h3 style={{ fontFamily: SANS, fontSize: '17px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px' }}>{f.name}</h3>
              <p style={{ ...p, fontSize: '16px', marginBottom: 0, color: 'var(--text-secondary)' }}>{f.answer}</p>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <a href="/devis" style={{ fontFamily: SANS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: 'var(--accent)', padding: '15px 30px', display: 'inline-block', textDecoration: 'none' }}>
              Request a quote →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
