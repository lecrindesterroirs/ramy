import Link from 'next/link'

// Fil d'Ariane visible réutilisable, items: [{ label, href? }]
// Le dernier item (sans href) est la page courante. Style aligné sur le fil
// des fiches produit (GalleryFiche).
// variant='bar' (défaut) : bandeau pleine largeur avec padding page (72px).
// variant='inline'       : juste le fil, sans wrapper, pour s'aligner sur une
//                          colonne parente (ex. article de blog, 760px centré).
export default function Breadcrumb({ items = [], variant = 'bar', maxWidth = '1280px', jsonLd = true }) {
  if (!items.length) return null

  // Balisage BreadcrumbList posé ici, avec le fil visible, plutôt que page par
  // page : il n'était présent que sur 71 pages sur 344 alors que le fil, lui,
  // s'affiche partout. C'est ce que Google utilise pour le chemin sous le
  // titre dans les résultats, et ce que les IA lisent pour situer une page.
  // jsonLd={false} sur les pages qui le déclarent déjà de leur côté.
  const ld = jsonLd ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://www.lecrin-traiteur.fr${c.href}` } : {}),
    })),
  } : null

  const nav = (
    <nav aria-label="Fil d'Ariane" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
      {items.map((c, i, arr) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {c.href ? (
            <Link href={c.href} style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(17,17,17,0.42)', textDecoration: 'none' }}>{c.label}</Link>
          ) : (
            <span style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(17,17,17,0.75)' }}>{c.label}</span>
          )}
          {i < arr.length - 1 && <span style={{ color: 'rgba(17,17,17,0.2)', fontSize: '10px' }}>›</span>}
        </span>
      ))}
    </nav>
  )

  const balisage = ld
    ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    : null

  if (variant === 'inline') return <>{nav}{balisage}</>

  return (
    <div className="breadcrumb-bar" style={{ maxWidth, margin: '0 auto', padding: '24px 72px 0' }}>
      {nav}
      {balisage}
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) and (min-width: 769px) { .breadcrumb-bar { padding: 20px 40px 0 !important; } }
        @media (max-width: 768px) { .breadcrumb-bar { padding: 20px 24px 0 !important; } }
      ` }} />
    </div>
  )
}
