'use client'

import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useCart } from '../context/CartContext'
import { PRODUCTS, DIETARY_COLORS } from '../lib/productsData'

const sorts = ['En vedette', 'Nouveautés', 'Prix croissant', 'Prix décroissant']

const extractPrice = (label = '') => {
  const match = label.match(/(\d+[,.]?\d*)\s*€/)
  if (!match) return 0
  return parseFloat(match[1].replace(',', '.'))
}

const sortProducts = (list, sortLabel) => {
  const arr = [...list]
  if (sortLabel === 'Prix croissant')  return arr.sort((a, b) => extractPrice(a.label) - extractPrice(b.label))
  if (sortLabel === 'Prix décroissant') return arr.sort((a, b) => extractPrice(b.label) - extractPrice(a.label))
  if (sortLabel === 'Nouveautés')      return arr.reverse()
  return arr // En vedette = ordre original
}

export default function ProductsPageTemplate({
  heroImg,
  heroTitle,
  heroSubtitle,
  breadcrumb,
  categorieSlug,
  fallbackProducts,
}) {
  const [sortOpen, setSortOpen]     = useState(false)
  const [sortLabel, setSortLabel]   = useState('En vedette')
  const [baseProducts, setBaseProducts] = useState(fallbackProducts)

  useEffect(() => {
    const url = categorieSlug
      ? `/api/produits?categorie=${categorieSlug}`
      : '/api/produits'
    fetch(url)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data && data.length > 0) setBaseProducts(data) })
      .catch(() => {})
  }, [categorieSlug])

  const products = sortProducts(baseProducts, sortLabel)

  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero ── */}
        <div className="page-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <div className="page-hero" style={{ position: 'relative', width: '100%', height: '68vh', minHeight: '420px', overflow: 'hidden' }}>
            <img
              src={heroImg}
              alt={heroTitle}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <div className="page-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '600px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                {breadcrumb}
              </p>
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                {heroTitle}
              </h1>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '340px' }}>
                {heroSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* ── Barre filtre ── */}
        <div className="products-filter-bar" style={{ maxWidth: '1440px', margin: '0 auto', padding: '28px 72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(17,17,17,0.08)' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: 'none', border: 'none', padding: 0 }}>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect y="0" width="16" height="1.5" fill="#111"/>
              <rect y="5" width="12" height="1.5" fill="#111"/>
              <rect y="10" width="8" height="1.5" fill="#111"/>
            </svg>
            Filtrer et trier
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setSortOpen(!sortOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: 'none', border: 'none', padding: 0 }}
              >
                {sortLabel}
                <span style={{ fontSize: '10px', opacity: 0.6 }}>▾</span>
              </button>
              {sortOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 12px)', right: 0, background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.08)', padding: '8px 0', minWidth: '180px', boxShadow: '0 16px 32px rgba(17,17,17,0.06)', zIndex: 10 }}>
                  {sorts.map(s => (
                    <button key={s} onClick={() => { setSortLabel(s); setSortOpen(false) }} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 20px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', letterSpacing: '0.06em', color: s === sortLabel ? 'var(--accent)' : 'var(--text-primary)', background: 'none', border: 'none' }}>
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.38)' }}>
              {products.length} produit{products.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* ── Grille produits ── */}
        <div className="products-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '48px 72px 120px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {products.map((p, i) => (
            <ProductCard key={p.id || i} product={p} />
          ))}
        </div>

      </main>

      {/* ── Section éditoriale ── */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(17,17,17,0.07)' }}>

        {/* Bloc texte centré */}
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 40px 64px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            Pensé pour les réceptions d'entreprise
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '24px' }}>
            Des produits qui ont du goût.<br />Un service qui tient ses promesses.
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            Des prestations pensées pour les entreprises qui accordent de l'importance au goût. Petits-déjeuners, plateaux repas, cocktails, buffets : chaque produit est sélectionné, chaque livraison est soignée.
          </p>
        </div>

        {/* 4 icônes */}
        <div className="prods-args" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px 72px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {[
            {
              icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 12l2 2 4-4"/></svg>,
              titre: 'Produits de qualité',
              desc: 'Des ingrédients sélectionnés avec exigence et travaillés dans notre savoir-faire pour des créations raffinées.',
            },
            {
              icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
              titre: 'Livraison dès 6h30',
              desc: 'Une logistique pensée pour les entreprises, livraison à l\'heure souhaitée à Paris et en Île-de-France.',
            },
            {
              icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
              titre: 'Prestations sur mesure',
              desc: 'Nous prenons en compte vos contraintes alimentaires, votre budget et vos envies pour chaque événement.',
            },
            {
              icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
              titre: 'Accompagnement dédié',
              desc: 'Un interlocuteur unique, dédié et à l\'écoute, pour vous accompagner du devis à la réalisation.',
            },
          ].map((item, i) => (
            <div key={i} style={{ background: '#FFFFFF', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ color: 'var(--accent)', opacity: 0.85 }}>{item.icon}</div>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)' }}>{item.titre}</p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '0 40px 80px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Besoin d'une prestation sur mesure ?
          </p>
          <a
            href="/devis"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Demander un devis →
          </a>
        </div>

      </section>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .page-hero-wrapper { padding: 24px 16px 0 !important; }
          .page-hero { height: 50vh !important; min-height: 300px !important; }
          .page-hero-text { padding: 0 24px !important; }
          .products-filter-bar { padding: 20px 24px !important; }
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 32px 16px 80px !important; gap: 2px !important; }
          .prods-args { grid-template-columns: 1fr 1fr !important; padding: 0 24px 60px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .page-hero-wrapper { padding: 24px 40px 0 !important; }
          .products-filter-bar { padding: 24px 40px !important; }
          .products-grid { grid-template-columns: repeat(3, 1fr) !important; padding: 40px 40px 100px !important; }
          .prods-args { padding: 0 40px 60px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const [qty, setQty] = useState(1)
  const { addItem } = useCart()

  // Un produit est commandable s'il a un prix et un id
  const canOrder = !!product.price && !!product.id

  const handleAdd = () => {
    if (!canOrder) return
    addItem(product, qty)
    setAdded(true)
    setQty(1)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div
      style={{ cursor: 'default' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#F8F5EF' }}>
        <img
          src={product.img}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
        />
      </div>

      <div style={{ padding: '14px 4px 10px' }}>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '4px' }}>
          {product.name}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.06em', color: 'rgba(17,17,17,0.38)', marginBottom: product.dietary?.length ? '8px' : '14px' }}>
          {product.label}
        </p>
        {/* Tags allergènes/régimes */}
        {product.dietary?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
            {product.dietary.map(tag => {
              const style = DIETARY_COLORS[tag] || { bg: 'rgba(17,17,17,0.05)', color: 'rgba(17,17,17,0.45)' }
              return (
                <span key={tag} style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '8px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: style.color,
                  background: style.bg,
                  padding: '3px 6px',
                }}>
                  {tag}
                </span>
              )
            })}
          </div>
        )}

        {canOrder ? (
          <div>
            {/* Sélecteur quantité */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0', border: '1px solid rgba(17,17,17,0.12)', marginBottom: '8px', width: 'fit-content' }}>
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                style={{ width: '30px', height: '30px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}
              >−</button>
              <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, color: 'var(--text-primary)', minWidth: '24px', textAlign: 'center' }}>
                {qty}
              </span>
              <button
                onClick={() => setQty(q => q + 1)}
                style={{ width: '30px', height: '30px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}
              >+</button>
            </div>

            {/* Bouton ajouter */}
            <button
              onClick={handleAdd}
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: added ? '#FFFFFF' : 'var(--accent)',
                background: added ? 'var(--accent)' : 'transparent',
                border: '1px solid var(--accent)',
                padding: '8px 14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              {added ? (
                <>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2,6 5,9 10,3"/>
                  </svg>
                  Ajouté !
                </>
              ) : (
                <>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="6" y1="1" x2="6" y2="11"/><line x1="1" y1="6" x2="11" y2="6"/>
                  </svg>
                  Ajouter au panier
                </>
              )}
            </button>
          </div>
        ) : (
          <a
            href="/devis"
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(17,17,17,0.45)',
              border: '1px solid rgba(17,17,17,0.15)',
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none',
              justifyContent: 'center',
            }}
          >
            Sur devis →
          </a>
        )}
      </div>
    </div>
  )
}
