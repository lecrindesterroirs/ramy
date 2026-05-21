'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import { PRODUCTS, DIETARY_COLORS, MADELEINE_FLAVORS } from '../../../../lib/productsData'
import DevisRapide from '../../../../components/DevisRapide'
import MadeleineComposer from '../../../../components/MadeleineComposer'

const FORMATS = [
  { id: 'madeleines-10', pieces: 10, price: 24.90, label: '10 pièces', sub: '4 à 6 pers.' },
  { id: 'madeleines-20', pieces: 20, price: 49.00, label: '20 pièces', sub: '8 à 12 pers.', popular: true },
  { id: 'madeleines-50', pieces: 50, price: 119.00, label: '50 pièces', sub: '25 à 30 pers.' },
]

export default function ProductPage() {
  const { slug } = useParams()

  // Tous les hooks d'abord — avant tout return/throw conditionnel
  const initFormat = FORMATS.find(f => f.id === slug) || FORMATS[0]
  const [format, setFormat]           = useState(initFormat)
  const [composition, setComposition] = useState(null)

  const product = PRODUCTS.find(p => p.id === slug)
  if (!product) notFound()

  const handleFormatChange = (fmt) => {
    setFormat(fmt)
    setComposition(null)
  }

  const breadcrumb = [
    { label: 'Accueil', href: '/' },
    { label: 'Petits-Déjeuners & Pauses', href: '/creations/petits-dejeuners-et-pauses' },
    { label: product.name },
  ]

  return (
    <>
      <Navbar showBanner={true} />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Breadcrumb ── */}
        <div className="fiche-breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 72px 0' }}>
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

        {/* ── Layout principal ── */}
        {product.isMadeleine ? (
          /* ═══ LAYOUT MADELEINES ═══ */
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '32px 72px 80px' }}>

              {/* Label */}
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
                Pâtisserie · Mado Paris
              </p>

              {/* Titre + Prix */}
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '28px', gap: '16px' }}>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                  Coffrets de madeleines
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '22px', fontWeight: 500, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                  {format.price.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                </p>
              </div>

              {/* ── Sélecteur de taille ── */}
              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', marginBottom: '10px' }}>
                  Taille du coffret
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
                  {FORMATS.map(fmt => {
                    const isSelected = fmt.id === format.id
                    return (
                      <button
                        key={fmt.id}
                        onClick={() => handleFormatChange(fmt)}
                        style={{
                          padding: '14px 10px', textAlign: 'left', cursor: 'pointer',
                          background: isSelected ? 'var(--text-primary)' : 'var(--bg-secondary)',
                          border: 'none', position: 'relative',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={e => { if (!isSelected) e.currentTarget.style.background = '#EDE8DE' }}
                        onMouseLeave={e => { if (!isSelected) e.currentTarget.style.background = 'var(--bg-secondary)' }}
                      >
                        {fmt.popular && (
                          <span style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: '#fff', fontFamily: "'Neue Montreal', sans-serif", fontSize: '8px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '2px 8px', whiteSpace: 'nowrap' }}>
                            Le plus choisi
                          </span>
                        )}
                        <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, color: isSelected ? '#fff' : 'var(--text-primary)', marginBottom: '2px', lineHeight: 1 }}>
                          {fmt.label}
                        </p>
                        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', color: isSelected ? 'rgba(255,255,255,0.6)' : 'rgba(17,17,17,0.45)', marginBottom: '5px' }}>
                          {fmt.sub}
                        </p>
                        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: isSelected ? 'rgba(255,255,255,0.9)' : 'var(--accent)' }}>
                          {fmt.price.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                        </p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Séparateur */}
              <div style={{ height: '1px', background: 'rgba(17,17,17,0.07)', marginBottom: '28px' }} />

              {/* Compositeur de saveurs */}
              <MadeleineComposer key={format.id} maxPieces={format.pieces} onChange={setComposition} />

              {/* Séparateur */}
              <div style={{ height: '1px', background: 'rgba(17,17,17,0.07)', marginBottom: '24px' }} />

              {/* Ingrédients bio */}
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '16px' }}>
                {product.ingredients}
              </p>

              {/* Tags */}
              {product.dietary?.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {product.dietary.map(tag => {
                    const s = DIETARY_COLORS[tag] || { bg: 'rgba(17,17,17,0.05)', color: 'rgba(17,17,17,0.45)' }
                    return (
                      <span key={tag} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.color, background: s.bg, padding: '5px 10px' }}>
                        {tag}
                      </span>
                    )
                  })}
                </div>
              )}

              {/* CTA devis */}
              <a
                href="/devis"
                style={{
                  fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#FFFFFF', background: 'var(--accent)',
                  border: '1px solid var(--accent)', padding: '18px 36px',
                  display: 'flex', alignItems: 'center', gap: '10px',
                  textDecoration: 'none', justifyContent: 'center', width: '100%',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Demande de devis →
              </a>

              {/* Livraison */}
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {['Livraison dès 6h30 — Paris & Île-de-France', 'Commandez avant 14h la veille', 'Facturation entreprise disponible'].map(t => (
                  <p key={t} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.45)', letterSpacing: '0.02em' }}>{t}</p>
                ))}
              </div>
          </div>

        ) : (
          /* ═══ LAYOUT STANDARD ═══ */
          <div className="fiche-grid" style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 72px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>
            <div className="fiche-image-col">
              <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#F8F5EF', position: 'sticky', top: 'calc(var(--banner-h) + var(--nav-h) + 24px)' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
            <ProductInfo product={product} />
          </div>
        )}

        {/* ── Séparateur ── */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 72px' }}>
          <div style={{ width: '100%', height: '1px', background: 'rgba(17,17,17,0.07)' }} />
        </div>

        {/* ── Article SEO ── */}
        <section className="fiche-seo" style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 72px 96px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            {product.categoryLabel}
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '40px' }}>
            {product.seoTitle}
          </h2>
          <div className="fiche-article-body" dangerouslySetInnerHTML={{ __html: product.seoArticle }} />
          <DevisRapide
            defaultPrestation={product.categoryLabel?.includes('repas') ? 'Plateaux repas' : 'Petit-déjeuner'}
            titre="Un événement à Paris ou en Île-de-France ?"
            sousTitre="Répondez en 30 secondes — devis personnalisé sous 24h."
          />
          <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
            <a href="/creations/petits-dejeuners-et-pauses" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              ← Retour aux petits-déjeuners
            </a>
          </div>
        </section>

      </main>

      <style suppressHydrationWarning>{`
        .fiche-article-body p { font-family: 'Neue Montreal', sans-serif; font-size: 15px; line-height: 1.85; color: var(--text-secondary); margin-bottom: 18px; }
        .fiche-article-body h2 { font-family: 'Baskerville Display PT', Georgia, serif; font-size: clamp(20px, 2vw, 28px); font-weight: 400; color: var(--text-primary); margin: 40px 0 14px; line-height: 1.15; }
        .fiche-article-body strong { color: var(--text-primary); font-weight: 500; }
        @media (max-width: 768px) {
          .fiche-breadcrumb { padding: 20px 24px 0 !important; }
          .fiche-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 32px 24px 60px !important; }
          .fiche-seo { padding: 48px 24px 72px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .fiche-breadcrumb { padding: 20px 40px 0 !important; }
          .fiche-grid { padding: 32px 40px 60px !important; gap: 40px !important; }
          .fiche-seo { padding: 60px 40px 80px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}

// ── Fiche produit standard (non-madeleines) ──
function ProductInfo({ product }) {
  return (
    <div>
      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>{product.categoryLabel}</p>
      <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '20px', letterSpacing: '-0.01em' }}>{product.name}</h1>
      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '22px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '10px', letterSpacing: '-0.01em' }}>{product.price?.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</p>
      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'rgba(17,17,17,0.45)', letterSpacing: '0.04em', marginBottom: '28px' }}>{product.qty}</p>
      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>{product.ingredients}</p>

      {product.dietary?.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
          {product.dietary.map(tag => {
            const s = DIETARY_COLORS[tag] || { bg: 'rgba(17,17,17,0.05)', color: 'rgba(17,17,17,0.45)' }
            return <span key={tag} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.color, background: s.bg, padding: '5px 10px' }}>{tag}</span>
          })}
        </div>
      )}

      <div style={{ background: 'var(--bg-secondary)', padding: '20px 24px', marginBottom: '32px' }}>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.45)', marginBottom: '10px' }}>Allergènes</p>
        {product.allergens?.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {product.allergens.map(a => <span key={a} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.65)', background: 'rgba(17,17,17,0.06)', padding: '4px 10px' }}>{a}</span>)}
          </div>
        ) : (
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: '#3a7c3a', fontWeight: 500 }}>✓ Aucun allergène majeur déclaré</p>
        )}
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', color: 'rgba(17,17,17,0.35)', marginTop: '10px', lineHeight: 1.6 }}>Fabriqué dans un atelier pouvant traiter d'autres allergènes.</p>
      </div>

      <a
        href="/devis"
        style={{
          fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#FFFFFF', background: 'var(--accent)',
          border: '1px solid var(--accent)', padding: '18px 36px',
          display: 'flex', alignItems: 'center', gap: '10px',
          textDecoration: 'none', justifyContent: 'center', width: '100%',
          transition: 'opacity 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        Demande de devis →
      </a>

      <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {['Livraison dès 6h30 — Paris & Île-de-France', 'Commandez avant 14h la veille', 'Facturation entreprise disponible'].map(t => (
          <p key={t} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.5)', letterSpacing: '0.02em' }}>{t}</p>
        ))}
      </div>
    </div>
  )
}
