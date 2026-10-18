'use client'

const T_CTA = {
  fr: {
    t1: 'Prêt à organiser', t2: 'votre événement ?',
    c1: 'Parlons ensemble de votre projet et créons une expérience',
    c2: 'sur-mesure à la hauteur de vos attentes.',
    cta: 'Décrire mon événement',
  },
  en: {
    t1: 'Ready to organise', t2: 'your event?',
    c1: 'Tell us what you have in mind and we will build something',
    c2: 'that fits the room, the budget and the day.',
    cta: 'Describe my event',
  },
}

export default function CTASection({ lang = 'fr' }) {
  const T = T_CTA[lang] || T_CTA.fr
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
            style={{ marginBottom: '24px', color: '#1A1A18' }}
          >
            {T.t1}<br />
            {T.t2}
          </h2>

          <p
            style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'rgba(26,26,24,0.78)',
              marginBottom: '48px',
            }}
          >
            {T.c1}<br />
            {T.c2}
          </p>

          <a href={lang === 'en' ? '/en/devis' : '/devis'} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--accent-deep)',
            background: '#FFFFFF',
            border: '1px solid #FFFFFF',
            padding: '9px 18px',
            textDecoration: 'none',
            transition: 'opacity 0.3s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {T.cta} <span>→</span>
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
