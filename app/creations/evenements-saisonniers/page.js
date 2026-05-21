'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { evenements } from './evenementsData'

export default function EvenementsSaisonniers() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* Hero */}
        <div className="sais-header" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <div style={{ position: 'relative', width: '100%', height: '68vh', minHeight: '420px', overflow: 'hidden' }}>
            <img
              src="/creations-featured.webp"
              alt="Événements Saisonniers — L'Écrin Traiteur"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '600px' }}>
              <p style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '16px',
              }}>
                Nos Créations — Événements Saisonniers
              </p>
              <h1 style={{
                fontFamily: "'Baskerville Display PT', Georgia, serif",
                fontSize: 'clamp(32px, 4vw, 58px)',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                color: '#FFFFFF',
                marginBottom: '20px',
              }}>
                Événements Saisonniers
              </h1>
              <p style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '14px',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.72)',
                maxWidth: '340px',
              }}>
                Galette des Rois, Chandeleur, Halloween, Noël... Chaque moment de l'année a ses produits, ses codes, ses attentions.
              </p>
            </div>
          </div>
        </div>

        {/* Grille événements */}
        <div
          className="sais-grid"
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '64px 72px 120px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
          }}
        >
          {evenements.map((ev, i) => (
            <a
              key={i}
              href={`/creations/evenements-saisonniers/${ev.slug}`}
              className="sais-card"
              style={{
                background: 'var(--bg-secondary)',
                textDecoration: 'none',
                display: 'block',
                transition: 'opacity 0.25s ease',
              }}
            >
              <div style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                <img
                  src={ev.img}
                  alt={ev.nom}
                  className="sais-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                  }}
                />
              </div>

              <div style={{ padding: '24px 24px 32px' }}>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '8px',
                }}>
                  {ev.mois}
                </p>
                <h3 style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: '22px',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  lineHeight: 1.2,
                }}>
                  {ev.nom}
                </h3>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '13px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '18px',
                }}>
                  {ev.descCourt}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {ev.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontFamily: "'Neue Montreal', sans-serif",
                      fontSize: '9px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-secondary)',
                      border: '1px solid rgba(17,17,17,0.15)',
                      padding: '4px 8px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}>
                  Voir l'événement →
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className="sais-cta"
          style={{
            borderTop: '1px solid rgba(17,17,17,0.08)',
            padding: '48px 72px',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '14px',
            color: 'var(--text-secondary)',
            marginBottom: '24px',
          }}>
            Vous préparez un événement saisonnier pour votre entreprise ?
          </p>
          <a
            href="/devis"
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
            Demander un devis →
          </a>
        </div>

      </main>

      <style suppressHydrationWarning>{`
        .sais-card:hover .sais-img { transform: scale(1.04); }
        .sais-card:hover { opacity: 0.96; }
        @media (max-width: 768px) {
          .sais-header { padding: 60px 24px 48px !important; }
          .sais-grid { grid-template-columns: 1fr !important; padding: 40px 24px 80px !important; }
          .sais-cta { padding: 40px 24px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .sais-header { padding: 80px 40px 60px !important; }
          .sais-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 48px 40px 80px !important; }
          .sais-cta { padding: 40px 40px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
