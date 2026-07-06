'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import { PRODUCTS, DIETARY_COLORS, MADELEINE_FLAVORS } from '../../../../lib/productsData'
import DevisRapide from '../../../../components/DevisRapide'

const COFFRETS = [
  { id: 'madeleines-10', titre: 'Coffret Découverte', pieces: 10, price: 24.90, desc: 'Idéal pour une attention, un cadeau ou une réunion intime.', img: '/coffret-madeleines-10-cut.webp' },
  { id: 'madeleines-20', titre: 'Coffret Signature', pieces: 20, price: 49.00, desc: 'Le format idéal pour accueillir vos collaborateurs.', popular: true, img: '/coffret-madeleines-20-cut.webp' },
  { id: 'madeleines-50', titre: 'Coffret Réception', pieces: 50, price: 119.00, desc: "Pensé pour les petits-déjeuners et cocktails d'entreprise.", img: '/coffret-madeleines-50-cut.webp' },
]

const MAD_EXIGENCE = [
  'Pur beurre et recettes artisanales, préparées chaque jour.',
  'Des ingrédients de qualité sélectionnés avec soin.',
  'Pour un moelleux incomparable et des saveurs authentiques.',
]

/* ── Vitrine éditoriale (structure "plateau repas") — test sur 1 produit ── */
const MARBLE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='1200'>
  <filter id='v'>
    <feTurbulence type='fractalNoise' baseFrequency='0.011 0.018' numOctaves='6' seed='9' result='t'/>
    <feColorMatrix in='t' type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.4 1.45'/>
  </filter>
  <rect width='100%' height='100%' fill='#f3efe7'/>
  <rect width='100%' height='100%' fill='#d8cfbf' filter='url(#v)' opacity='0.10'/>
</svg>`
const MARBLE = `url("data:image/svg+xml,${encodeURIComponent(MARBLE_SVG)}")`

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

export default function ProductPage() {
  const { slug } = useParams()

  const product = PRODUCTS.find(p => p.id === slug)
  if (!product) notFound()

  // Galerie = fiche par défaut pour tous les produits (sauf coffrets madeleines)
  const isGallery = !product.isMadeleine
  const isEditorial = false

  const breadcrumb = [
    { label: 'Accueil', href: '/' },
    { label: 'Petits-Déjeuners & Pauses', href: '/creations/petits-dejeuners-et-pauses' },
    { label: product.name },
  ]

  return (
    <>
      <Navbar showBanner={true} />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Breadcrumb (masqué en mode éditorial et madeleines : hero pleine largeur) ── */}
        {!isEditorial && !product.isMadeleine && (
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
        )}

        {/* ── Layout principal ── */}
        {isGallery ? (
          <GalleryFiche product={product} />
        ) : isEditorial ? (
          <EditorialHero product={product} breadcrumb={breadcrumb} />
        ) : product.isMadeleine ? (
          /* ═══ LAYOUT MADELEINES (reproduction maquette) ═══ */
          <div className="mad-page">

            {/* ── Hero : bandeau image pleine largeur, texte par-dessus ── */}
            <div className="mad-hero" style={{ position: 'relative', width: '100%', height: 'clamp(360px, 42vw, 520px)', overflow: 'hidden' }}>
              <img loading="eager" src="/madeleine-home.webp" alt="Les madeleines signature — L'Écrin Traiteur" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center right', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(248,245,239,0.94) 0%, rgba(248,245,239,0.86) 26%, rgba(248,245,239,0.35) 52%, rgba(248,245,239,0) 72%)' }} />
              <div className="mad-hero-text" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '640px' }}>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(34px, 4.2vw, 60px)', fontWeight: 400, lineHeight: 1.02, color: 'var(--text-primary)', letterSpacing: '-0.01em', marginBottom: '18px' }}>
                  Les madeleines<br /><em style={{ fontStyle: 'italic' }}>signature</em>
                </h1>
                <span style={{ display: 'block', width: '36px', height: '1px', background: 'var(--accent)', marginBottom: '20px' }} />
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '380px' }}>
                  Une madeleine généreuse, préparée chaque jour par notre artisan partenaire et devenue l'une des créations les plus appréciées de nos événements.
                </p>
              </div>
            </div>

            {/* ── Choisissez votre coffret ── */}
            <div style={{ textAlign: 'center', padding: '68px 24px 0' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Choisissez votre coffret
              </p>
            </div>
            <div className="mad-coffrets-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', maxWidth: '1160px', margin: '0 auto', padding: '40px 72px 24px' }}>
              {COFFRETS.map(c => (
                <div key={c.id} style={{ textAlign: 'center' }}>
                  <div style={{ position: 'relative', width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <img loading="lazy" src={c.img} alt={c.titre} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} />
                  </div>
                  <div style={{ height: '26px', marginBottom: '8px' }}>
                    {c.popular && (
                      <span style={{ display: 'inline-block', background: 'var(--accent)', color: '#fff', fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 12px' }}>
                        Le plus choisi
                      </span>
                    )}
                  </div>
                  <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    {c.titre}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
                    {c.pieces} madeleines
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: '240px', margin: '0 auto' }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Nos saveurs ── */}
            <div style={{ textAlign: 'center', padding: '56px 24px 36px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Nos saveurs
              </p>
            </div>
            <div className="mad-flavors-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px', maxWidth: '1160px', margin: '0 auto', padding: '0 72px 8px' }}>
              {MADELEINE_FLAVORS.map(f => (
                <div key={f.id} style={{ textAlign: 'center', padding: '10px 8px' }}>
                  <img loading="lazy" src={f.img} alt={f.label} style={{ width: '100%', maxWidth: '76px', height: '72px', objectFit: 'contain', margin: '0 auto 12px', display: 'block' }} />
                  <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '15px', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '6px' }}>{f.label}</p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', lineHeight: 1.45, color: 'var(--text-secondary)' }}>{f.description}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', padding: '36px 24px 72px' }}>
              <a
                href="/devis"
                style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', padding: '16px 40px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Obtenir un devis →
              </a>
            </div>

            {/* ── Notre exigence | image | Notre artisan | image ── */}
            <div className="mad-4col" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr 1.05fr 0.95fr', minHeight: '380px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
              {/* Cellule 1 : Notre exigence */}
              <div style={{ background: 'var(--bg-secondary)', padding: '52px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
                  Notre exigence
                </p>
                <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(22px, 2.2vw, 30px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '20px' }}>
                  Le goût du vrai,<br />l'exigence en plus.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {MAD_EXIGENCE.map(t => (
                    <p key={t} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>{t}</p>
                  ))}
                </div>
              </div>
              {/* Cellule 2 : image madeleines */}
              <div style={{ position: 'relative', overflow: 'hidden', minHeight: '300px' }}>
                <img loading="lazy" src="/prod-madeleines-20.webp" alt="Madeleines Mado Paris" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              {/* Cellule 3 : Notre artisan partenaire */}
              <div style={{ padding: '52px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
                  Notre artisan partenaire
                </p>
                <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.4vw, 32px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Mado Paris
                </h2>
                <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontStyle: 'italic', fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                  L'atelier de la madeleine
                </p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  Fabriquées chaque jour dans leur atelier parisien, elles sont réputées comme les meilleures madeleines de Paris — c'est cette exigence qui nous a convaincus de les intégrer à notre sélection.
                </p>
              </div>
              {/* Cellule 4 : photo atelier */}
              <div style={{ position: 'relative', overflow: 'hidden', minHeight: '300px' }}>
                <img loading="lazy" src="/prod-madeleines-50.webp" alt="L'atelier Mado Paris" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>

        ) : (
          /* ═══ LAYOUT STANDARD ═══ */
          <div className="fiche-grid" style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 72px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>
            <div className="fiche-image-col">
              <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#F8F5EF', position: 'sticky', top: 'calc(var(--banner-h) + var(--nav-h) + 24px)' }}>
                <img loading="lazy" src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .fiche-article-body p { font-family: 'Neue Montreal', sans-serif; font-size: 15px; line-height: 1.85; color: var(--text-secondary); margin-bottom: 18px; }
        .fiche-article-body h2 { font-family: 'Baskerville Display PT', Georgia, serif; font-size: clamp(20px, 2vw, 28px); font-weight: 400; color: var(--text-primary); margin: 40px 0 14px; line-height: 1.15; }
        .fiche-article-body strong { color: var(--text-primary); font-weight: 500; }
        @media (max-width: 768px) {
          .fiche-breadcrumb { padding: 20px 24px 0 !important; }
          .fiche-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 32px 24px 60px !important; }
          .fiche-seo { padding: 48px 24px 72px !important; }
          .editorial-grid { grid-template-columns: 1fr !important; gap: 36px !important; padding: 24px 24px 48px !important; }
          .gallery-fiche { grid-template-columns: 1fr !important; gap: 32px !important; padding: 24px 24px 60px !important; }
          .mad-hero-text { padding: 0 24px !important; }
          .mad-coffrets-grid { grid-template-columns: 1fr !important; padding: 32px 24px 24px !important; gap: 40px !important; }
          .mad-flavors-row { grid-template-columns: repeat(3, 1fr) !important; padding: 0 24px 48px !important; gap: 24px 8px !important; }
          .mad-4col { grid-template-columns: 1fr !important; }
          .mad-4col > div { padding: 40px 24px !important; min-height: 240px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .fiche-breadcrumb { padding: 20px 40px 0 !important; }
          .fiche-grid { padding: 32px 40px 60px !important; gap: 40px !important; }
          .fiche-seo { padding: 60px 40px 80px !important; }
          .editorial-grid { padding: 24px 40px 48px !important; gap: 40px !important; }
          .gallery-fiche { padding: 24px 40px 60px !important; gap: 40px !important; }
          .mad-hero-text { padding: 0 40px !important; }
          .mad-coffrets-grid { padding: 40px 40px 24px !important; gap: 32px !important; }
          .mad-flavors-row { grid-template-columns: repeat(3, 1fr) !important; padding: 0 40px 56px !important; gap: 28px 12px !important; }
          .mad-4col { grid-template-columns: 1fr 1fr !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}

// ── Fiche galerie (mockup crêpes) ──
function GalleryFiche({ product }) {
  const gallery = product.gallery && product.gallery.length ? product.gallery : [product.img]
  const [active, setActive] = useState(0)
  const thumbSlots = 4

  return (
    <div className="gallery-fiche" style={{ maxWidth: '1280px', margin: '0 auto', padding: '28px 72px 64px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '52px', alignItems: 'center', minHeight: 'calc(100vh - var(--banner-h) - var(--nav-h))' }}>

      {/* ── Colonne gauche : galerie (grande) ── */}
      <div className="gallery-col">
        <div style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: '4px', background: '#F8F5EF', boxShadow: '0 16px 40px rgba(17,17,17,0.10)' }}>
          <img loading="lazy" src={gallery[active]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      {/* ── Colonne droite : infos ── */}
      <div className="gallery-info" style={{ paddingLeft: '28px' }}>
        {/* En-tête centré */}
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <img loading="lazy" src="/logo-footer.svg" alt="L'Écrin" style={{ height: '32px', width: 'auto', margin: '0 auto 12px', opacity: 0.9 }} />
          <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '8px' }}>
            {product.name}
          </h1>
          {product.subtitle && (
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '9px' }}>
              {product.subtitle}
            </p>
          )}
          {product.qty && (
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'rgba(17,17,17,0.45)', letterSpacing: '0.03em' }}>
              {product.description || product.qty}
            </p>
          )}
        </div>

        {/* Description (gauche) */}
        {product.ingredients && (
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '22px' }}>
            {product.ingredients}
          </p>
        )}

        {/* Composition (gauche) */}
        {product.allergens?.length > 0 && (
          <div style={{ marginBottom: '18px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '6px' }}>Composition</p>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              Contient : {product.allergens.join(', ').toLowerCase()}.
            </p>
          </div>
        )}

        {/* Accompagnements inclus (gauche) */}
        {product.included?.length > 0 && (
          <div style={{ marginBottom: '22px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '9px' }}>Accompagnements inclus</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {product.included.map(item => (
                <li key={item} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.4, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Séparateur */}
        <div style={{ height: '1px', background: 'rgba(17,17,17,0.08)', marginBottom: '20px' }} />

        {/* Bloc action centré : prix + CTA */}
        <div style={{ textAlign: 'center' }}>
          {product.price && (
            <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '16px' }}>
              {product.price.toFixed(2).replace('.', ',')} €
              <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.3)', marginLeft: '6px' }}>HT</span>
              {product.qty && (
                <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'rgba(17,17,17,0.4)', marginLeft: '10px' }}>· {product.qty}</span>
              )}
            </p>
          )}

          <a
            href="/devis"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10.5px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', background: 'transparent', border: '1px solid var(--accent)', padding: '11px 28px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', justifyContent: 'center', transition: 'background 0.3s ease, color 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#FFFFFF' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
          >
            Obtenir un devis →
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Vitrine éditoriale — structure "plateau repas" ──
function EditorialHero({ product, breadcrumb }) {
  const accroche = product.description?.includes('—')
    ? product.description.split('—').slice(1).join('—').trim()
    : product.description

  return (
    <section style={{ backgroundColor: '#FFFFFF', minHeight: 'calc(100vh - var(--banner-h) - var(--nav-h))', display: 'flex', flexDirection: 'column' }}>
      {/* Filtre bords déchirés */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
        <filter id="deckle-pdj">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="6" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Breadcrumb sur marbre */}
      <div className="fiche-breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 72px 0' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {breadcrumb.map((crumb, i, arr) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {crumb.href ? (
                <a href={crumb.href} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(40,34,28,0.45)', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = GOLD}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(40,34,28,0.45)'}
                >{crumb.label}</a>
              ) : (
                <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(40,34,28,0.72)' }}>{crumb.label}</span>
              )}
              {i < arr.length - 1 && <span style={{ color: 'rgba(40,34,28,0.28)', fontSize: '10px' }}>›</span>}
            </span>
          ))}
        </nav>
      </div>

      {/* Composition : photo + carte papier */}
      <div className="editorial-grid" style={{ flex: 1, width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '16px 72px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4vw', alignItems: 'center' }}>

        {/* Gauche — photo posée sur le marbre */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '100%', maxWidth: '560px', maxHeight: 'calc(100vh - var(--banner-h) - var(--nav-h) - 80px)', aspectRatio: '1 / 1', overflow: 'hidden', boxShadow: '0 26px 60px -24px rgba(60,48,34,0.5)' }}>
            <img loading="lazy" src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>

        {/* Droite — carte papier */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundColor: '#FEFCF8', backgroundImage: GRAIN, backgroundSize: '320px', boxShadow: '0 22px 48px rgba(60,48,34,0.12)' }} />

            <div style={{ position: 'relative', padding: '20px 40px 20px', textAlign: 'center' }}>
              {/* Monogramme */}
              <img loading="lazy" src="/logo-footer.svg" alt="L'Écrin" style={{ height: '36px', width: 'auto', margin: '0 auto 10px', opacity: 0.92 }} />

              {/* Titre */}
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.4vw, 34px)', fontWeight: 400, color: '#211C16', lineHeight: 1.08, marginBottom: '8px' }}>
                {product.name}
              </h1>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: GOLD, marginBottom: '10px' }}>
                {product.categoryLabel}
              </p>
              <div style={{ width: '34px', height: '1px', background: GOLD, margin: '0 auto 10px', opacity: 0.7 }} />

              {/* Accroche */}
              {accroche && (
                <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '14px', fontStyle: 'italic', lineHeight: 1.5, color: 'rgba(33,28,22,0.62)', maxWidth: '320px', margin: '0 auto 16px' }}>
                  {accroche}
                </p>
              )}

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

              {/* CTA devis */}
              <a href="/devis" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', border: '1px solid var(--accent)', padding: '10px 32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Obtenir un devis →
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
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
        Obtenir un devis →
      </a>

      <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {['Livraison dès 6h30 — Paris & Île-de-France', 'Commandez avant 14h la veille', 'Facturation entreprise disponible'].map(t => (
          <p key={t} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.5)', letterSpacing: '0.02em' }}>{t}</p>
        ))}
      </div>
    </div>
  )
}
