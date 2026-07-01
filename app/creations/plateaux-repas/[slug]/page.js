'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import { COLLECTIONS } from '../../../../lib/collectionsData'

/* ── Grain fin du papier ── */
const GRAIN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
  <filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
  <feColorMatrix type='saturate' values='0'/></filter>
  <rect width='100%' height='100%' filter='url(#g)' opacity='0.5'/>
</svg>`
const GRAIN = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`

const GOLD = '#A9803B'

function Sprig() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '4px' }}>
      <span style={{ width: '46px', height: '1px', background: 'rgba(169,128,59,0.5)' }} />
      <svg width="26" height="16" viewBox="0 0 26 16" fill="none" stroke={GOLD} strokeWidth="0.9">
        <path d="M13 15 C13 9 13 5 13 1" />
        <path d="M13 11 C9 10 7 8 6.5 5.5 C9.5 6 11.5 7.5 13 10.5 Z" fill={GOLD} fillOpacity="0.28" />
        <path d="M13 11 C17 10 19 8 19.5 5.5 C16.5 6 14.5 7.5 13 10.5 Z" fill={GOLD} fillOpacity="0.28" />
        <path d="M13 7 C10 6.5 8.5 5 8 3 C10.5 3.5 12 4.8 13 6.8 Z" fill={GOLD} fillOpacity="0.28" />
        <path d="M13 7 C16 6.5 17.5 5 18 3 C15.5 3.5 14 4.8 13 6.8 Z" fill={GOLD} fillOpacity="0.28" />
      </svg>
      <span style={{ width: '46px', height: '1px', background: 'rgba(169,128,59,0.5)' }} />
    </div>
  )
}

export default function CollectionDetail() {
  const { slug } = useParams()
  const c = COLLECTIONS.find(col => col.id === slug)

  if (!c) return (
    <>
      <Navbar showBanner />
      <main style={{ paddingTop: 'calc(var(--banner-h) + var(--nav-h))', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", color: 'rgba(17,17,17,0.4)' }}>Collection introuvable.</p>
      </main>
      <Footer />
    </>
  )

  const menuItems = [
    { label: 'Entrée',  nom: c.entree.split('—')[0].split(',')[0].trim(), detail: (() => { const p = c.entree.split(','); return p.slice(1).join(',').trim() || c.entree.split('—').slice(1).join('').trim() })() },
    { label: 'Plat',    nom: c.plat.split(',')[0].trim(),                  detail: c.plat.split(',').slice(1).join(',').trim() },
    { label: 'Dessert', nom: c.dessert.split(',')[0].trim(),               detail: c.dessert.split(',').slice(1).join(',').trim() },
    { label: 'Pain',    nom: c.pain,                                        detail: '' },
  ]

  const breadcrumb = [
    { label: 'Accueil', href: '/' },
    { label: 'Plateaux repas', href: '/creations/plateaux-repas' },
    { label: c.nom },
  ]

  return (
    <>
      <Navbar showBanner />

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
              {c.imgDetail ? (
                <img
                  src={c.imgDetail}
                  alt={`Plateau ${c.nom}`}
                  style={{ width: '100%', maxWidth: '560px', maxHeight: 'calc(100vh - var(--banner-h) - var(--nav-h) - 80px)', height: 'auto', display: 'block', filter: 'drop-shadow(0 24px 40px rgba(60,48,34,0.22))' }}
                />
              ) : (
                <div style={{ width: '100%', maxWidth: '560px', maxHeight: 'calc(100vh - var(--banner-h) - var(--nav-h) - 80px)', aspectRatio: '1 / 1', overflow: 'hidden', boxShadow: '0 26px 60px -24px rgba(60,48,34,0.4)' }}>
                  <img src={c.img} alt={`Plateau ${c.nom}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              )}
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
                    {c.nom}
                  </h1>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: GOLD, marginBottom: '10px' }}>
                    Collection Classique
                  </p>
                  <div style={{ width: '34px', height: '1px', background: GOLD, margin: '0 auto 10px', opacity: 0.7 }} />

                  {/* Accroche */}
                  <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '14px', fontStyle: 'italic', lineHeight: 1.5, color: 'rgba(33,28,22,0.62)', maxWidth: '320px', margin: '0 auto 16px' }}>
                    {c.accroche}
                  </p>

                  {/* Menu */}
                  <div style={{ textAlign: 'left', marginBottom: '14px' }}>
                    {menuItems.map((item, i) => (
                      <div key={item.label} style={{ marginBottom: i < menuItems.length - 1 ? '10px' : 0 }}>
                        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: GOLD, marginBottom: '3px' }}>
                          {item.label}
                        </p>
                        <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '16px', fontWeight: 400, color: '#211C16', lineHeight: 1.15, marginBottom: item.detail ? '2px' : 0 }}>
                          {item.nom}
                        </p>
                        {item.detail && (
                          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', lineHeight: 1.5, color: 'rgba(33,28,22,0.45)' }}>
                            {item.detail.charAt(0).toUpperCase() + item.detail.slice(1)}.
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Prix */}
                  {c.prix && (
                    <>
                      <div style={{ width: '34px', height: '1px', background: GOLD, margin: '4px auto 12px', opacity: 0.7 }} />
                      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: GOLD, marginBottom: '5px' }}>Tarif</p>
                      <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, color: '#211C16', lineHeight: 1, marginBottom: '16px' }}>
                        {c.prix.toFixed(2).replace('.', ',')} €
                        <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(33,28,22,0.45)', marginLeft: '8px' }}>/ personne</span>
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

        {/* Autres collections */}
        <div style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,17,17,0.06)', padding: '56px 72px 72px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', marginBottom: '28px' }}>
            Autres Collections
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {COLLECTIONS.filter(col => col.id !== c.id).slice(0, 4).map(col => (
              <a key={col.id} href={`/creations/plateaux-repas/${col.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ aspectRatio: '1/1', background: '#EDE7D9', overflow: 'hidden', marginBottom: '10px' }}>
                  {col.img
                    ? <img src={col.img} alt={col.nom} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.2)' }}>Photo à venir</div>
                  }
                </div>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1A1A18', marginBottom: '3px' }}>{col.nom}</p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', color: 'rgba(17,17,17,0.42)' }}>{col.accroche}</p>
              </a>
            ))}
          </div>
        </div>

      </main>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .fiche-breadcrumb { padding: 20px 24px 0 !important; }
          .editorial-grid { grid-template-columns: 1fr !important; gap: 36px !important; padding: 24px 24px 48px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .fiche-breadcrumb { padding: 20px 40px 0 !important; }
          .editorial-grid { padding: 24px 40px 48px !important; gap: 40px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
