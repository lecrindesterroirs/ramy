'use client'

// Bandeau plein largeur de vente croisée, inséré entre la grille produits et
// la section éditoriale (ex : "Complétez vos petits-déjeuners avec nos boissons").
export default function CrossSellBanner({ title, body, buttonLabel, href }) {
  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px 56px' }}>
      <div
        className="cross-sell-banner"
        style={{
          background: 'var(--bg-secondary)',
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 400, color: 'var(--text-primary)', margin: '0 0 8px', lineHeight: 1.2 }}>
            {title}
          </p>
          {body && (
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6, maxWidth: '480px' }}>
              {body}
            </p>
          )}
        </div>
        <a
          href={href}
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#1A1A18',
            background: 'var(--accent)',
            padding: '15px 32px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            transition: 'opacity 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          {buttonLabel} <span>→</span>
        </a>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .cross-sell-banner { padding: 32px 24px !important; }
        }
      ` }} />
    </div>
  )
}
