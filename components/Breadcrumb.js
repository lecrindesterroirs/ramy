import Link from 'next/link'

// Fil d'Ariane visible réutilisable — items: [{ label, href? }]
// Le dernier item (sans href) est la page courante. Style aligné sur le fil
// des fiches produit (GalleryFiche).
export default function Breadcrumb({ items = [] }) {
  if (!items.length) return null
  return (
    <div className="breadcrumb-bar" style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 72px 0' }}>
      <nav aria-label="Fil d'Ariane" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        {items.map((c, i, arr) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {c.href ? (
              <Link href={c.href} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(17,17,17,0.42)', textDecoration: 'none' }}>{c.label}</Link>
            ) : (
              <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(17,17,17,0.75)' }}>{c.label}</span>
            )}
            {i < arr.length - 1 && <span style={{ color: 'rgba(17,17,17,0.2)', fontSize: '10px' }}>›</span>}
          </span>
        ))}
      </nav>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) and (min-width: 769px) { .breadcrumb-bar { padding: 20px 40px 0 !important; } }
        @media (max-width: 768px) { .breadcrumb-bar { padding: 20px 24px 0 !important; } }
      ` }} />
    </div>
  )
}
