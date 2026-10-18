import Navbar from './Navbar'
import Footer from './Footer'
import BreadcrumbJsonLd from './BreadcrumbJsonLd'
import { FAQSchema } from './FAQSchema'
import ProofBar from './ProofBar'

/*
  Gabarit des pages d'information GEO (Tarifs, Avis clients, pages en anglais) :
  en-tête, bandeau de preuves, sections (paragraphes HTML et tableaux), FAQ balisée.
  Les paragraphes sont du HTML écrit à la main dans les fichiers de données.
*/

const SANS = "'Neue Montreal', sans-serif"
const SERIF = "'Baskerville Display PT', Georgia, serif"
const h2 = { fontFamily: SERIF, fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', margin: '56px 0 20px' }
const p = { fontFamily: SANS, fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '20px' }
const cell = { fontFamily: SANS, fontSize: '15px', lineHeight: 1.6, color: 'var(--text-primary)', padding: '14px 12px', borderBottom: '1px solid rgba(17,17,17,0.1)', textAlign: 'left', verticalAlign: 'top' }
const btn = { fontFamily: SANS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: 'var(--accent)', padding: '15px 30px', display: 'inline-block', textDecoration: 'none' }

function Table({ head, rows }) {
  return (
    <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {head.map(t => (
              <th key={t} style={{ ...cell, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', borderBottom: '1px solid rgba(17,17,17,0.35)' }}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => <td key={j} style={j === 0 ? { ...cell, fontWeight: 500 } : cell} dangerouslySetInnerHTML={{ __html: c }} />)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function InfoPage({ lang = 'fr', eyebrow, title, intro, cta, sections = [], faq = [], faqTitle, jsonLd, breadcrumb }) {
  const ctaLabel = cta || (lang === 'en' ? 'Request a quote →' : 'Demander un devis →')
  return (
    <>
      <Navbar />
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      {faq.length > 0 && <FAQSchema faqs={faq} pageTitle={title} />}

      <main lang={lang} style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>
        <div style={{ background: 'var(--bg-secondary)', padding: '90px 24px 78px', textAlign: 'center' }}>
          <p style={{ fontFamily: SANS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
            {eyebrow}
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(34px, 5vw, 60px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.015em', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            {title}
          </h1>
          <p style={{ fontFamily: SANS, fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: '660px', margin: '0 auto 34px' }} dangerouslySetInnerHTML={{ __html: intro }} />
          <a href={lang === 'en' ? '/en/devis' : '/devis'} style={btn}>{ctaLabel}</a>
        </div>

        <ProofBar lang={lang} />

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '24px 24px 100px' }}>
          {sections.map((s, i) => (
            <div key={i}>
              {s.h2 && <h2 style={h2}>{s.h2}</h2>}
              {(s.before || []).map((html, k) => <p key={k} style={p} dangerouslySetInnerHTML={{ __html: html }} />)}
              {s.table && <Table {...s.table} />}
              {(s.after || []).map((html, k) => <p key={k} style={p} dangerouslySetInnerHTML={{ __html: html }} />)}
            </div>
          ))}

          {faq.length > 0 && (
            <>
              <h2 style={h2}>{faqTitle || (lang === 'en' ? 'Frequently asked questions' : 'Questions fréquentes')}</h2>
              {faq.map(f => (
                <div key={f.name} style={{ borderBottom: '1px solid rgba(17,17,17,0.1)', padding: '18px 0' }}>
                  <h3 style={{ fontFamily: SANS, fontSize: '17px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px' }}>{f.name}</h3>
                  <p style={{ ...p, fontSize: '16px', marginBottom: 0, color: 'var(--text-secondary)' }}>{f.answer}</p>
                </div>
              ))}
            </>
          )}

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <a href="/devis" style={btn}>{ctaLabel}</a>
          </div>
        </section>
      </main>

      {breadcrumb && <BreadcrumbJsonLd items={breadcrumb} />}
      <Footer />
    </>
  )
}
