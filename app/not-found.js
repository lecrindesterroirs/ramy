'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main style={{
        background: '#FFFFFF',
        minHeight: '100vh',
        paddingTop: 'var(--header-h)',
        display: 'flex',
        flexDirection: 'column',
      }}>

        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          textAlign: 'center',
        }}>

          {/* 404 */}
          <p style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(100px, 18vw, 200px)',
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: 'var(--bg-secondary)',
            margin: '0 0 -20px',
            userSelect: 'none',
          }}>
            404
          </p>

          {/* Trait doré */}
          <div style={{
            width: '40px',
            height: '2px',
            background: 'var(--accent)',
            margin: '0 auto 32px',
          }} />

          {/* Titre */}
          <h1 style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(26px, 4vw, 48px)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            letterSpacing: '-0.01em',
          }}>
            Cette page n'est pas au menu.
          </h1>

          {/* Sous-titre */}
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '15px',
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            maxWidth: '380px',
            margin: '0 auto 48px',
          }}>
            Elle a peut-être changé d'adresse ou n'existe plus. Le reste de la carte, lui, est toujours là.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="/"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                background: 'var(--accent)',
                padding: '14px 32px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Retour à l'accueil →
            </a>

            <a
              href="/creations/petits-dejeuners-et-pauses"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                background: 'transparent',
                padding: '13px 32px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                border: '1px solid rgba(17,17,17,0.18)',
                transition: 'border-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.18)' }}
            >
              Voir nos créations
            </a>
          </div>

        </div>

      </main>

      <Footer />
    </>
  )
}
