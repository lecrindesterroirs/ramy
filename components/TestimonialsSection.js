'use client'

export default function TestimonialsSection() {
  return (
    <section
      className="testimonials-section"
      style={{
        background: 'var(--bg-secondary)',
        height: '100vh',
        paddingTop: 'var(--header-h)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="testimonials-inner"
        style={{
          flex: 1,
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          padding: '52px 72px 52px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
        }}
      >

        {/* ── Header ── */}
        <div className="reveal" style={{ marginBottom: '40px', flexShrink: 0 }}>
          <p
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '10px',
            }}
          >
            Ils nous font confiance
          </p>
          <span className="accent-line" style={{ marginBottom: '24px' }} />

          <h2
            style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(34px, 3.8vw, 58px)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
              marginBottom: '14px',
            }}
          >
            Une qualité rare<br />
            et un vrai sens du détail.
          </h2>

          <p
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '13px',
              lineHeight: 1.7,
              color: 'rgba(17,17,17,0.55)',
            }}
          >
            Des prestations pensées pour les entreprises<br />
            qui recherchent plus qu'un simple traiteur.
          </p>
        </div>

        {/* ── Témoignages ── */}
        <div
          className="reveal testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '14px',
            flex: 1,
            minHeight: 0,
          }}
        >

          {/* Grande carte gauche */}
          <div
            style={{
              border: '1px solid rgba(17,17,17,0.10)',
              padding: '40px 44px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 0,
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: '40px',
                  lineHeight: 1,
                  color: 'var(--accent)',
                  display: 'block',
                  marginBottom: '20px',
                }}
              >
                ❝❝
              </span>
              <blockquote
                style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: 'clamp(20px, 2.2vw, 30px)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: '0.005em',
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                }}
              >
                "Les madeleines sont très bonnes, grand choix de parfums, viennoiseries, jus… très bien. Et le service a été au top."
              </blockquote>
            </div>
            <div>
              <span className="accent-line" style={{ marginBottom: '16px' }} />
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                Anaïs Launoy · Office Manager · Vittaliance
              </p>
            </div>
          </div>

          {/* Deux petites cartes droite */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 0 }}>
            {[
              { quote: '"Tout s\'est très bien passé. On m\'a dit beaucoup de bien des galettes ! Merci pour la prestation."', role: 'L. Gautereau · Chargée de communication · SNCF' },
              { quote: '"Je tenais à vous féliciter car je n\'ai que des avis positifs sur la prestation ! C\'était excellent."', role: 'A. Brousse · Assistante de direction générale · Coyote' },
            ].map((t) => (
              <div
                key={t.role}
                style={{
                  border: '1px solid rgba(17,17,17,0.10)',
                  padding: '28px 36px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 0,
                }}
              >
                <div>
                  <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '28px', lineHeight: 1, color: 'var(--accent)', display: 'block', marginBottom: '12px' }}>❝❝</span>
                  <blockquote style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(14px, 1.4vw, 18px)', fontWeight: 400, lineHeight: 1.35, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '16px' }}>
                    {t.quote}
                  </blockquote>
                </div>
                <div>
                  <span className="accent-line" style={{ marginBottom: '12px' }} />
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .testimonials-section { height: auto !important; overflow: visible !important; padding-top: 8px !important; padding-bottom: 64px; }
          .testimonials-inner { padding: 12px 24px 40px !important; flex: unset !important; min-height: unset !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; flex: unset !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .testimonials-section { height: auto !important; overflow: visible !important; padding-bottom: 64px; }
          .testimonials-inner { padding: 52px 40px !important; }
        }
      `}</style>
    </section>
  )
}
