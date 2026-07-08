'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Reveal from './Reveal'
import CategoryClosing from './CategoryClosing'
import CategoryJsonLd from './CategoryJsonLd'
import CategoryTabs from './CategoryTabs'
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
  editorial,
}) {
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
          <div className="page-hero" style={{ position: 'relative', width: '100%', height: '68vh', minHeight: '460px', overflow: 'hidden' }}>
            <Image fill priority sizes="100vw" src={heroImg}
              alt={heroTitle}
              style={{ objectFit: 'cover', objectPosition: heroImgPosition || 'center' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="page-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '600px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  {breadcrumb}
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                  {heroTitle}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '340px' }}>
                  {heroSubtitle}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Barre catégories + tri (partagée avec toutes les pages) ── */}
        <CategoryTabs sort={sortLabel} onSort={setSortLabel} count={products.length} />

        {/* ── Grille produits ── */}
        <div className="products-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '56px 72px 120px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px 24px' }}>
          {products.map((p, i) => (
            <Reveal key={p.id || i} delay={(i % 4) * 90}>
              <ProductCard product={p} basePath={basePath || '/creations/petits-dejeuners-et-pauses'} />
            </Reveal>
          ))}
        </div>

      </main>

      {/* ── Section éditoriale + article SEO ── */}
      <CategoryClosing {...(editorial || {})} seoArticle={seoArticle} />

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .pd-card { border-radius: 4px !important; }
        @media (max-width: 768px) {
          .page-hero-wrapper { padding: 24px 16px 0 !important; }
          .page-hero { height: 50vh !important; min-height: 340px !important; }
          .page-hero-text { padding: 0 24px !important; }
          .products-filter-bar { padding: 0 0 0 16px !important; gap: 12px !important; flex-wrap: nowrap !important; }
          .filter-cats { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; flex-shrink: 1; min-width: 0; }
          .filter-cats::-webkit-scrollbar { display: none; }
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 32px 16px 80px !important; gap: 36px 16px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .page-hero-wrapper { padding: 24px 40px 0 !important; }
          .products-filter-bar { padding: 0 40px !important; }
          .products-grid { grid-template-columns: repeat(3, 1fr) !important; padding: 48px 40px 100px !important; gap: 48px 24px !important; }
        }
      ` }} />

      <CategoryJsonLd
        name={heroTitle}
        path={basePath || '/creations/petits-dejeuners-et-pauses'}
        items={products.map(p => ({ name: p.name, url: `${basePath || '/creations/petits-dejeuners-et-pauses'}/${p.id}` }))}
      />
      <Footer />
    </>
  )
}

function ProductCard({ product, basePath }) {
  const [hovered, setHovered] = useState(false)

  const href = product.id
    ? `${basePath}/${product.id}`
    : '/devis'

  // "16 pièces — 26,80€" → pièces + prix séparés
  const parts = (product.label || '').split('—').map(s => s.trim()).filter(Boolean)
  const hasPieces = parts.length > 1
  const pieces = hasPieces ? parts[0] : ''
  const priceRaw = hasPieces ? parts[1] : parts[0]
  const priceClean = (priceRaw || '').replace(/\s*ht\s*$/i, '').trim()

  return (
    <a
      href={href}
      className="pd-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        background: '#FFFFFF',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 2px 6px rgba(17,17,17,0.04), 0 16px 40px rgba(17,17,17,0.09)'
          : '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'box-shadow 0.35s ease, transform 0.35s ease',
      }}
    >
      {/* Image pleine largeur dans la carte, overlay "Découvrir" au survol */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#F8F5EF' }}>
        <Image fill src={product.img}
          alt={product.name}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          style={{ objectFit: 'cover', objectPosition: product.imgPosition || 'center', transition: 'transform 0.7s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(20,16,12,0.30)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}>
          <span style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '12px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.7)', padding: '11px 26px',
            transform: hovered ? 'translateY(0)' : 'translateY(6px)',
            transition: 'transform 0.4s ease',
          }}>
            Découvrir
          </span>
        </div>
      </div>

      {/* Contenu dans la carte — nom, prix, pièces */}
      <div style={{ padding: '16px 16px 16px', display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, letterSpacing: '0.01em', lineHeight: 1.25, color: hovered ? 'var(--accent)' : 'var(--text-primary)', marginBottom: '9px', transition: 'color 0.25s ease' }}>
          {product.name}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '0.02em', color: 'var(--text-primary)', marginBottom: hasPieces ? '9px' : '0' }}>
          {priceClean}
          <span style={{ color: 'rgba(17,17,17,0.28)', fontSize: '11px', marginLeft: '4px' }}>HT</span>
        </p>
        {hasPieces && (
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.04em', color: 'rgba(17,17,17,0.4)' }}>
            {pieces}
          </p>
        )}
      </div>
    </a>
  )
}
