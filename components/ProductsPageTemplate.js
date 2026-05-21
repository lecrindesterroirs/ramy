'use client'

import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
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
  heroImgPosition,
  heroTitle,
  heroSubtitle,
  breadcrumb,
  categorieSlug,
  fallbackProducts,
  seoArticle,
  basePath,
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
      <Navbar showBanner={true} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero ── */}
        <div className="page-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <div className="page-hero" style={{ position: 'relative', width: '100%', height: '68vh', minHeight: '420px', overflow: 'hidden' }}>
            <img
              src={heroImg}
              alt={heroTitle}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: heroImgPosition || 'center', display: 'block' }}
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
        <div className="products-filter-bar" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(17,17,17,0.08)' }}>

          {/* Raccourcis catégories */}
          <div className="filter-cats" style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
            {[
              { label: 'Petits-déjeuners & Pauses', href: '/creations/petits-dejeuners-et-pauses' },
              { label: 'Plateaux repas',             href: '/creations/plateaux-repas' },
              { label: 'Cocktails & Buffets',        href: '/creations/cocktails-et-buffets' },
              { label: 'Coffrets cadeaux',           href: '/creations/coffrets-cadeaux' },
            ].map(cat => {
              const active = typeof window !== 'undefined' && window.location.pathname === cat.href
              return (
                <a
                  key={cat.href}
                  href={cat.href}
                  style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '11px',
                    fontWeight: active ? 500 : 400,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: active ? 'var(--text-primary)' : 'rgba(17,17,17,0.42)',
                    textDecoration: 'none',
                    padding: '20px 18px',
                    borderBottom: active ? '2px solid var(--text-primary)' : '2px solid transparent',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                    whiteSpace: 'nowrap',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderBottomColor = 'rgba(17,17,17,0.2)' } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'rgba(17,17,17,0.42)'; e.currentTarget.style.borderBottomColor = 'transparent' } }}
                >
                  {cat.label}
                </a>
              )
            })}
          </div>

          {/* Tri + compteur */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexShrink: 0 }}>
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setSortOpen(!sortOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-primary)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', outline: 'none' }}
              >
                {sortLabel}
                <span style={{ fontSize: '9px', opacity: 0.5 }}>▾</span>
              </button>
              {sortOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 12px)', right: 0, background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.08)', padding: '8px 0', minWidth: '180px', boxShadow: '0 16px 32px rgba(17,17,17,0.06)', zIndex: 10 }}>
                  {sorts.map(s => (
                    <button key={s} onClick={() => { setSortLabel(s); setSortOpen(false) }} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 20px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', letterSpacing: '0.06em', color: s === sortLabel ? 'var(--accent)' : 'var(--text-primary)', background: 'none', border: 'none', cursor: 'pointer' }}>
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)' }}>
              {products.length} produit{products.length > 1 ? 's' : ''}
            </span>
          </div>

        </div>

        {/* ── Grille produits ── */}
        <div className="products-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '48px 72px 120px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {products.map((p, i) => (
            <ProductCard key={p.id || i} product={p} basePath={basePath || '/creations/petits-dejeuners-et-pauses'} />
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

      {/* ── Article SEO catégorie ── */}
      {seoArticle && (
        <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 40px 88px' }}>
            <div
              className="cat-seo-body"
              dangerouslySetInnerHTML={{ __html: seoArticle }}
            />
          </div>
        </section>
      )}

      <style suppressHydrationWarning>{`
        .cat-seo-body p {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .cat-seo-body h2 {
          font-family: 'Baskerville Display PT', Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          color: var(--text-primary);
          margin: 40px 0 16px;
        }
        .cat-seo-body h2:first-child { margin-top: 0; }
        .cat-seo-body ul {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-secondary);
          padding-left: 24px;
          margin-bottom: 20px;
        }
        .cat-seo-body strong {
          color: var(--text-primary);
          font-weight: 500;
        }
        .cat-seo-body a {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid var(--accent);
        }
        .cat-seo-body a:hover { opacity: 0.75; }
        @media (max-width: 768px) {
          .page-hero-wrapper { padding: 24px 16px 0 !important; }
          .page-hero { height: 50vh !important; min-height: 300px !important; }
          .page-hero-text { padding: 0 24px !important; }
          .products-filter-bar { padding: 0 0 0 16px !important; gap: 12px !important; flex-wrap: nowrap !important; }
          .filter-cats { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; flex-shrink: 1; min-width: 0; }
          .filter-cats::-webkit-scrollbar { display: none; }
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 32px 16px 80px !important; gap: 2px !important; }
          .prods-args { grid-template-columns: 1fr 1fr !important; padding: 0 24px 60px !important; }
          .cat-seo-body { padding: 0 !important; }
          .cat-seo-body h2 { font-size: 22px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .page-hero-wrapper { padding: 24px 40px 0 !important; }
          .products-filter-bar { padding: 0 40px !important; }
          .products-grid { grid-template-columns: repeat(3, 1fr) !important; padding: 40px 40px 100px !important; }
          .prods-args { padding: 0 40px 60px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}

function ProductCard({ product, basePath }) {
  const [hovered, setHovered] = useState(false)

  const href = product.id
    ? `${basePath}/${product.id}`
    : '/devis'

  return (
    <div
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image cliquable */}
      <a href={href} style={{ display: 'block', textDecoration: 'none' }}>
        <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#F8F5EF' }}>
          <img
            src={product.img}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: product.imgPosition || 'center', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
          />
        </div>
      </a>

      <div style={{ padding: '14px 4px 10px' }}>
        {/* Nom cliquable */}
        <a href={href} style={{ textDecoration: 'none' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: hovered ? 'var(--accent)' : 'var(--text-primary)', marginBottom: '4px', transition: 'color 0.25s ease' }}>
            {product.name}
          </p>
        </a>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.06em', color: 'rgba(17,17,17,0.38)', marginBottom: product.dietary?.length ? '8px' : '14px' }}>
          {product.label}
        </p>

        {/* Tags régimes */}
        {product.dietary?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
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

        {/* CTA → Voir la fiche */}
        <a
          href={href}
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: hovered ? 'var(--accent)' : 'rgba(17,17,17,0.45)',
            border: `1px solid ${hovered ? 'var(--accent)' : 'rgba(17,17,17,0.15)'}`,
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
            justifyContent: 'center',
            transition: 'all 0.25s ease',
          }}
        >
          Voir le produit →
        </a>
      </div>
    </div>
  )
}
