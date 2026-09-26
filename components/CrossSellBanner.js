'use client'

import Image from 'next/image'

// Bandeau plein largeur de vente croisée, inséré entre la grille produits et
// la section éditoriale (ex : "Complétez vos petits-déjeuners avec nos boissons").
// `products` (optionnel) : 3 cards produit cliquables sous le texte, ex.
// [{ id, name, img, price, href }].
export default function CrossSellBanner({ title, body, buttonLabel, href, products }) {
  return (
    <div className="cross-sell-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px 56px' }}>
      <div
        className="cross-sell-banner"
        style={{
          background: 'var(--bg-secondary)',
          padding: '40px 48px',
        }}
      >
        <div className="cross-sell-top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
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
            className="cross-sell-btn"
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
              justifyContent: 'center',
              gap: '10px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              boxSizing: 'border-box',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {buttonLabel} <span>→</span>
          </a>
        </div>

        {products?.length > 0 && (
          <div className="cross-sell-products" style={{ display: 'grid', gridTemplateColumns: `repeat(${products.length}, 1fr)`, gap: '20px', marginTop: '32px' }}>
            {products.map(p => (
              <a
                key={p.id}
                href={p.href || `/creations/boissons/${p.id}`}
                className="cross-sell-product-card"
                style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', background: '#FFFFFF', padding: '12px', transition: 'box-shadow 0.3s ease' }}
              >
                <div style={{ position: 'relative', width: '64px', height: '64px', flexShrink: 0, overflow: 'hidden', background: '#F8F5EF' }}>
                  <Image fill src={p.img} alt={p.name} sizes="64px" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', margin: '0 0 4px', lineHeight: 1.3 }}>
                    {p.name}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.45)', margin: 0 }}>
                    {p.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .cross-sell-product-card:hover { box-shadow: 0 6px 20px rgba(17,17,17,0.08); }
        @media (max-width: 768px) {
          .cross-sell-wrapper { padding: 0 16px 40px !important; }
          .cross-sell-banner { padding: 28px 20px !important; }
          .cross-sell-btn { width: 100% !important; }
          .cross-sell-products { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </div>
  )
}
