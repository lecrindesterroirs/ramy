'use client'

import Navbar from './Navbar'
import Footer from './Footer'

const h2Style = {
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: '16px',
  marginTop: '0',
}

const h3Style = {
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '13px',
  fontWeight: 500,
  letterSpacing: '0.06em',
  color: 'var(--text-primary)',
  marginBottom: '10px',
  marginTop: '0',
}

const pStyle = {
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '14px',
  lineHeight: 1.9,
  color: 'var(--text-secondary)',
  marginBottom: '0',
}

const sectionStyle = {
  paddingBottom: '48px',
  marginBottom: '48px',
  borderBottom: '1px solid rgba(17,17,17,0.07)',
}

export { h2Style, h3Style, pStyle, sectionStyle }

export default function LegalTemplate({ title, category = 'Informations légales', updated, children }) {
  return (
    <>
      <Navbar />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* Header */}
        <div
          className="legal-header"
          style={{ background: 'var(--bg-secondary)', padding: '80px 72px 64px', textAlign: 'center' }}
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
            {category}
          </p>
          <h1 style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            marginBottom: updated ? '20px' : '0',
          }}>
            {title}
          </h1>
          {updated && (
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '12px',
              color: 'var(--text-secondary)',
              letterSpacing: '0.04em',
            }}>
              Dernière mise à jour : {updated}
            </p>
          )}
        </div>

        {/* Contenu */}
        <div
          className="legal-content"
          style={{ maxWidth: '760px', margin: '0 auto', padding: '72px 40px 96px' }}
        >
          {children}
        </div>

      </main>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .legal-header { padding: 60px 24px 48px !important; }
          .legal-content { padding: 48px 24px 72px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .legal-header { padding: 64px 40px 48px !important; }
          .legal-content { padding: 56px 32px 80px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
