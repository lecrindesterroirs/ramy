'use client'

// Bloc de maillage latéral réutilisable, "À lire aussi", "Villes limitrophes",
// "Produits similaires". Éditorial, fidèle à la DA L'Écrin.
// items : [{ href, title, meta? }]  (meta = catégorie, département, sous-titre…)
export default function RelatedLinks({ eyebrow, title, items = [], columns = 3, background = 'var(--bg-secondary)' }) {
  if (!items.length) return null
  const cols = Math.min(columns, items.length)

  return (
    <section style={{ background, borderTop: '1px solid rgba(17,17,17,0.07)', padding: '72px 72px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {eyebrow && (
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '14px' }}>
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '36px' }}>
            {title}
          </h2>
        )}

        <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '2px' }}>
          {items.map((it, i) => (
            <a
              key={it.href + i}
              href={it.href}
              className="related-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#FFFFFF',
                textDecoration: 'none',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(17,17,17,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {it.img && (
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', background: '#F8F5EF' }}>
                  <img src={it.img} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: it.img ? '22px 26px 26px' : '28px 26px' }}>
                {it.meta && (
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-deep)' }}>
                    {it.meta}
                  </span>
                )}
                <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, lineHeight: 1.3, color: 'var(--text-primary)' }}>
                  {it.title}
                </span>
                <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em', color: 'var(--accent-deep)', marginTop: '2px' }}>
                  Découvrir →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) { .related-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .related-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { section:has(.related-grid) { padding: 56px 24px !important; } }
      ` }} />
    </section>
  )
}
