'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import { BOISSONS } from '../../../../lib/boissonsData'
import DevisRapide from '../../../../components/DevisRapide'

/* ── Grain fin du papier ── */
const GRAIN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
  <filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
  <feColorMatrix type='saturate' values='0'/></filter>
  <rect width='100%' height='100%' filter='url(#g)' opacity='0.5'/>
</svg>`
const GRAIN = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`

const GOLD = '#A9803B'

export default function BoissonPage() {
  const { slug } = useParams()
  const product = BOISSONS.find(p => p.id === slug)
  if (!product) notFound()

  const breadcrumb = [
    { label: 'Accueil', href: '/' },
    { label: 'Boissons', href: '/creations/boissons' },
    { label: product.name },
  ]

  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Section hero 100vh ── */}
        <section style={{ backgroundColor: '#FFFFFF', minHeight: 'calc(100vh - var(--banner-h) - var(--nav-h))', display: 'flex', flexDirection: 'column' }}>

          {/* Breadcrumb */}
          <div className="fiche-breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 72px 0', width: '100%' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {breadcrumb.map((crumb, i, arr) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {crumb.href ? (
                    <a href={crumb.href} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(17,17,17,0.42)', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.42)'}
                    >{crumb.label}</a>
                  ) : (
                    <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(17,17,17,0.75)' }}>{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span style={{ color: 'rgba(17,17,17,0.2)', fontSize: '10px' }}>›</span>}
                </span>
              ))}
            </nav>
          </div>

          {/* Composition : photo + carte */}
          <div className="editorial-grid" style={{ flex: 1, width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '16px 72px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4vw', alignItems: 'center' }}>

            {/* Gauche — photo */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '100%', maxWidth: '560px', maxHeight: 'calc(100vh - var(--banner-h) - var(--nav-h) - 80px)', aspectRatio: '1 / 1', overflow: 'hidden', boxShadow: '0 26px 60px -24px rgba(60,48,34,0.4)' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            {/* Droite — carte papier */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: '#FEFCF8', backgroundImage: GRAIN, backgroundSize: '320px', boxShadow: '0 22px 48px rgba(60,48,34,0.12)' }} />

                <div style={{ position: 'relative', padding: '20px 40px 20px', textAlign: 'center' }}>

                  {/* Monogramme */}
                  <img src="/logo-footer.svg" alt="L'Écrin" style={{ height: '36px', width: 'auto', margin: '0 auto 10px', opacity: 0.92 }} />

                  {/* Titre */}
                  <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.4vw, 34px)', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#211C16', lineHeight: 1.05, marginBottom: '8px' }}>
                    {product.name}
                  </h1>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: GOLD, marginBottom: '10px' }}>
                    {product.categoryLabel}
                  </p>
                  <div style={{ width: '34px', height: '1px', background: GOLD, margin: '0 auto 14px', opacity: 0.7 }} />

                  {/* Composition */}
                  <div style={{ textAlign: 'left', marginBottom: '14px' }}>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: GOLD, marginBottom: '6px' }}>Composition</p>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.65, color: 'rgba(33,28,22,0.6)' }}>{product.ingredients}</p>
                  </div>

                  {/* Allergènes */}
                  {product.allergens?.length > 0 && (
                    <div style={{ textAlign: 'left', marginBottom: '14px' }}>
                      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: GOLD, marginBottom: '6px' }}>Allergènes</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {product.allergens.map(a => (
                          <span key={a} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.04em', color: 'rgba(33,28,22,0.62)', border: '1px solid rgba(169,128,59,0.35)', padding: '3px 9px' }}>{a}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Prix */}
                  {product.price && (
                    <>
                      <div style={{ width: '34px', height: '1px', background: GOLD, margin: '4px auto 12px', opacity: 0.7 }} />
                      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: GOLD, marginBottom: '5px' }}>Tarif</p>
                      <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, color: '#211C16', lineHeight: 1, marginBottom: '16px' }}>
                        {product.price.toFixed(2).replace('.', ',')} €
                        {product.qty && <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(33,28,22,0.45)', marginLeft: '8px' }}>· {product.qty}</span>}
                      </p>
                    </>
                  )}

                  {/* CTA */}
                  <a href="/devis"
                    style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', border: '1px solid var(--accent)', padding: '10px 32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    Demande de devis →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Article SEO ── */}
        {product.seoArticle && (
          <section className="fiche-seo" style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 72px 96px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
              {product.categoryLabel}
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '40px' }}>
              {product.seoTitle}
            </h2>
            <div className="fiche-article-body" dangerouslySetInnerHTML={{ __html: product.seoArticle }} />

            <DevisRapide
              defaultPrestation="Boissons"
              titre="Un événement à Paris ou en Île-de-France ?"
              sousTitre="Répondez en 30 secondes — devis personnalisé sous 24h."
            />

            <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
              <a href="/creations/boissons" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
                ← Retour aux boissons
              </a>
            </div>
          </section>
        )}

      </main>

      <style suppressHydrationWarning>{`
        .fiche-article-body p { font-family: 'Neue Montreal', sans-serif; font-size: 15px; line-height: 1.85; color: var(--text-secondary); margin-bottom: 18px; }
        .fiche-article-body h2 { font-family: 'Baskerville Display PT', Georgia, serif; font-size: clamp(20px, 2vw, 28px); font-weight: 400; color: var(--text-primary); margin: 40px 0 14px; line-height: 1.15; }
        .fiche-article-body strong { color: var(--text-primary); font-weight: 500; }
        @media (max-width: 768px) {
          .fiche-breadcrumb { padding: 20px 24px 0 !important; }
          .editorial-grid { grid-template-columns: 1fr !important; gap: 36px !important; padding: 24px 24px 48px !important; }
          .fiche-seo { padding: 48px 24px 72px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .fiche-breadcrumb { padding: 20px 40px 0 !important; }
          .editorial-grid { padding: 24px 40px 48px !important; gap: 40px !important; }
          .fiche-seo { padding: 60px 40px 80px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
