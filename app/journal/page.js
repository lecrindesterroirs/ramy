import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ArticleCard from './ArticleCard'
import { articles } from '../../lib/journalData'

export default function Journal() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero ── */}
        <div
          className="journal-hero"
          style={{
            background: 'var(--bg-secondary)',
            padding: '100px 72px 80px',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '20px',
          }}>
            L'Écrin Traiteur
          </p>
          <h1 style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}>
            Le Journal
          </h1>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Actualités, coulisses, inspirations et conseils de notre maison traiteur.
          </p>
        </div>

        {/* ── Grille articles ── */}
        <div
          className="journal-grid-wrapper"
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '80px 72px 120px',
          }}
        >
          <div
            className="journal-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '48px 32px',
            }}
          >
            {articles.map((a, i) => (
              <ArticleCard key={i} article={a} />
            ))}
          </div>
        </div>

      </main>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .journal-hero { padding: 80px 24px 60px !important; }
          .journal-grid-wrapper { padding: 48px 24px 80px !important; }
          .journal-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .journal-hero { padding: 80px 40px 60px !important; }
          .journal-grid-wrapper { padding: 60px 40px 80px !important; }
          .journal-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
