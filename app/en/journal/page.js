import Navbar from '../../../components/Navbar'
import { ogImages } from '../../../lib/og'
import Footer from '../../../components/Footer'
import { enArticle, enSlugs, dateEn } from '../../../lib/en/journal'

// Liste des guides du Journal disponibles en anglais (/en/journal).
const SANS = "'Neue Montreal', 'Neue Montreal Fallback', sans-serif"
const SERIF = "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif"

export const metadata = {
  title: { absolute: "Corporate Catering Guides: Budgets, Quantities, Ideas | L'Écrin Traiteur" },
  description: "Practical guides for office managers in Paris: how much food per person, budgets by group size, breakfast, lunch and cocktail reception ideas, by L'Écrin Traiteur.",
  alternates: { canonical: '/en/journal', languages: { en: '/en/journal', fr: '/journal', 'x-default': '/journal' } },
  openGraph: { images: ogImages(), locale: 'en_GB', title: "Journal | L'Écrin Traiteur", description: 'Guides for corporate catering in Paris.' },
}

export default function EnJournal() {
  const list = enSlugs().map(enArticle).filter(Boolean).sort((x, y) => (y.isoDate || '').localeCompare(x.isoDate || ''))
  return (
    <>
      <Navbar />
      <main lang="en" style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px 100px' }}>
          <p style={{ fontFamily: SANS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
            L&apos;Écrin · Journal
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '20px' }}>
            Corporate catering guides
          </h1>
          <p style={{ fontFamily: SANS, fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: '680px', marginBottom: '48px' }}>
            Quantities, budgets and ideas for breakfasts, lunches and cocktail receptions in Paris, based on our own prices and quantity rules. <a href="/journal" hrefLang="fr" style={{ color: 'var(--text-primary)' }}>All guides in French</a>.
          </p>
          <div className="en-journal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px 24px' }}>
            {list.map(a => (
              <a key={a.slug} href={`/en/journal/${a.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', background: 'var(--bg-secondary)', marginBottom: '14px' }}>
                  <img src={a.img} alt={a.titre} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: a.imgPosition || 'center' }} />
                </div>
                <p style={{ fontFamily: SANS, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '8px' }}>
                  {a.categorie} · {dateEn(a.isoDate)}
                </p>
                <h2 style={{ fontFamily: SERIF, fontSize: '21px', fontWeight: 400, lineHeight: 1.25, color: 'var(--text-primary)' }}>{a.titre}</h2>
              </a>
            ))}
          </div>
        </section>
      </main>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) { .en-journal-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .en-journal-grid { grid-template-columns: 1fr !important; } }
      ` }} />
      <Footer />
    </>
  )
}
