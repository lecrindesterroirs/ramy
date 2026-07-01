'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import { FORMULES } from '../formulesData'

const GOLD = '#A9803B'

/* ── Grain fin du papier ── */
const GRAIN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
  <filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
  <feColorMatrix type='saturate' values='0'/></filter>
  <rect width='100%' height='100%' filter='url(#g)' opacity='0.5'/>
</svg>`
const GRAIN = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`

export default function FormulePage() {
  const { slug } = useParams()
  const formule = FORMULES.find(f => f.slug === slug)
  if (!formule) notFound()

  const breadcrumb = [
    { label: 'Accueil', href: '/' },
    { label: 'Cocktails & Buffets', href: '/creations/cocktails-et-buffets' },
    { label: formule.nom },
  ]

  return (
    <>
      <Navbar showBanner />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Section hero 100vh ── */}
        <section style={{ minHeight: 'calc(100vh - var(--banner-h) - var(--nav-h))', display: 'flex', flexDirection: 'column' }}>

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

          {/* ── Grille éditoriale : photo + carte ── */}
          <div className="editorial-grid" style={{ flex: 1, width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '16px 72px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4vw', alignItems: 'stretch' }}>

            {/* Gauche — photo */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '560px', minHeight: '400px', overflow: 'hidden', boxShadow: '0 26px 60px -24px rgba(60,48,34,0.35)' }}>
                {formule.badge && (
                  <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 2, background: 'var(--accent)', color: '#fff', fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 10px' }}>
                    {formule.badge}
                  </div>
                )}
                <img src={formule.img} alt={formule.nom}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: formule.imgPosition || 'center center', display: 'block' }} />
              </div>
            </div>

            {/* Droite — carte papier */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column' }}>
                {/* Fond grain */}
                <div style={{ position: 'absolute', inset: 0, backgroundColor: '#FEFCF8', backgroundImage: GRAIN, backgroundSize: '320px', boxShadow: '0 22px 48px rgba(60,48,34,0.10)' }} />

                <div style={{ position: 'relative', padding: formule.categories ? '20px 32px' : '32px 40px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box' }}>

                  {/* Monogramme */}
                  <img src="/logo-footer.svg" alt="L'Écrin" style={{ height: formule.categories ? '34px' : '42px', width: 'auto', margin: `0 auto ${formule.categories ? '12px' : '20px'}`, opacity: 0.9 }} />

                  {/* Titre */}
                  <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#211C16', lineHeight: 1.05, marginBottom: '4px' }}>
                    {formule.nom}
                  </h1>

                  {/* Prix */}
                  <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '17px', fontWeight: 400, color: '#211C16', marginBottom: '10px' }}>
                    {formule.prix}
                  </p>

                  <div style={{ width: '34px', height: '1px', background: GOLD, margin: '0 auto 10px', opacity: 0.6 }} />

                  <div style={{ height: formule.categories ? '10px' : '24px' }} />

                  {/* Composition : cocktail (salées/sucrées) ou buffet (categories) */}
                  {formule.categories ? (
                    <div style={{ textAlign: 'left' }}>
                      {formule.categories.map((cat, ci) => (
                        <div key={ci} style={{ marginBottom: ci < formule.categories.length - 1 ? '8px' : 0 }}>
                          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '8px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: GOLD, marginBottom: '4px' }}>
                            {cat.label}
                          </p>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            {cat.items.map((item, i) => (
                              <li key={i} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10.5px', color: 'rgba(33,28,22,0.6)', lineHeight: 1.4, display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                                <span style={{ color: GOLD, flexShrink: 0, marginTop: '1px', fontSize: '9px' }}>–</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: formule.salees?.length > 0 ? '1fr 1fr' : '1fr', gap: '16px', textAlign: 'left' }}>
                      {formule.salees?.length > 0 && (
                        <div>
                          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '8.5px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: '8px' }}>{formule.salees.length} pièces salées</p>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {formule.salees.map((item, i) => (
                              <li key={i} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(33,28,22,0.62)', lineHeight: 1.4 }}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {formule.sucrees?.length > 0 && (
                        <div>
                          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '8.5px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: '8px' }}>{formule.sucrees.length} pièces sucrées</p>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {formule.sucrees.map((item, i) => (
                              <li key={i} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(33,28,22,0.62)', lineHeight: 1.4 }}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Article SEO ── */}
        <section className="fiche-seo" style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 72px 96px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            Cocktails & Buffets d'entreprise
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '40px' }}>
            {formule.seoTitle}
          </h2>
          <div className="fiche-article-body" dangerouslySetInnerHTML={{ __html: formule.seoArticle }} />
          <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
            <a href="/creations/cocktails-et-buffets"
              style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              ← Retour aux formules
            </a>
          </div>
        </section>

      </main>

      <style suppressHydrationWarning>{`
        .fiche-article-body p { font-family: 'Neue Montreal', sans-serif; font-size: 14px; line-height: 1.72; color: var(--text-secondary); margin-bottom: 16px; }
        .fiche-article-body h2 { font-family: 'Neue Montreal', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); margin: 48px 0 12px; padding-top: 24px; border-top: 1px solid rgba(169,128,59,0.22); line-height: 1; }
        .fiche-article-body strong { color: rgba(17,17,17,0.82); font-weight: 500; }
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
