'use client'

export default function CTASection() {
  return (
    <section
      id="contact"
      className="cta-section"
      style={{
        background: 'var(--bg-primary)',
        padding: '120px 0 120px',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <div className="cta-yellow-box reveal" style={{
          display: 'inline-block',
          background: 'var(--accent)',
          padding: '72px 96px',
        }}>
          <h2
            className="section-title-xl"
            style={{ marginBottom: '24px', color: '#FFFFFF' }}
          >
            Prêt à organiser<br />
            votre événement ?
          </h2>

          <p
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '48px',
            }}
          >
            Parlons ensemble de votre projet et créons une expérience<br />
            sur-mesure à la hauteur de vos attentes.
          </p>

          <a href="/devis" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            background: '#FFFFFF',
            border: '1px solid #FFFFFF',
            padding: '9px 18px',
            textDecoration: 'none',
            transition: 'opacity 0.3s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Décrire mon événement <span>→</span>
          </a>
        </div>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .cta-section { padding: 72px 24px 96px !important; }
          .cta-yellow-box { padding: 40px 24px !important; width: 100% !important; box-sizing: border-box !important; }
          .cta-yellow-box h2 { font-size: clamp(28px, 7vw, 44px) !important; }
          .cta-yellow-box p br { display: none; }
        }
      ` }} />
    </section>
  )
}
