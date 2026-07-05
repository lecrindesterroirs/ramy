'use client'

import { notFound } from 'next/navigation'
import { useState } from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import { PRODUCTS, DIETARY_COLORS } from '../../../../lib/productsData'
import { useCart } from '../../../../context/CartContext'
import DevisRapide from '../../../../components/DevisRapide'

export default function ProductClient({ slug }) {
  const product = PRODUCTS.find(p => p.id === slug)
  if (!product) notFound()

  return (
    <>
      <Navbar showBanner={true} />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Breadcrumb ── */}
        <div className="fiche-breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 72px 0' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { label: 'Accueil', href: '/' },
              { label: 'Nos Créations', href: '/creations/petits-dejeuners-et-pauses' },
              { label: 'Petits-Déjeuners & Pauses', href: '/creations/petits-dejeuners-et-pauses' },
              { label: product.name },
            ].map((crumb, i, arr) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {crumb.href ? (
                  <a href={crumb.href} style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    color: 'rgba(17,17,17,0.42)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.42)'}
                  >{crumb.label}</a>
                ) : (
                  <span style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    color: 'rgba(17,17,17,0.75)',
                  }}>{crumb.label}</span>
                )}
                {i < arr.length - 1 && (
                  <span style={{ color: 'rgba(17,17,17,0.2)', fontSize: '10px' }}>›</span>
                )}
              </span>
            ))}
          </nav>
        </div>

        {/* ── Fiche produit ── */}
        <div className="fiche-grid" style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 72px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>

          {/* LEFT — Image */}
          <div className="fiche-image-col">
            <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#F8F5EF', position: 'sticky', top: 'calc(var(--banner-h) + var(--nav-h) + 24px)' }}>
              <img
                src={product.img}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* RIGHT — Infos + achat */}
          <ProductInfo product={product} />
        </div>

        {/* ── Séparateur ── */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 72px' }}>
          <div style={{ width: '100%', height: '1px', background: 'rgba(17,17,17,0.07)' }} />
        </div>

        {/* ── Article SEO ── */}
        <section className="fiche-seo" style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 72px 96px' }}>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '20px',
          }}>
            {product.categoryLabel}
          </p>
          <h2 style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(24px, 3vw, 38px)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '40px',
          }}>
            {product.seoTitle}
          </h2>

          <div
            className="fiche-article-body"
            dangerouslySetInnerHTML={{ __html: product.seoArticle }}
          />

          {/* CTA devis rapide */}
          <DevisRapide
            defaultPrestation={product.categoryLabel?.includes('repas') ? 'Plateaux repas' : 'Petit-déjeuner'}
            titre="Un événement à Paris ou en Île-de-France ?"
            sousTitre="Répondez en 30 secondes, devis personnalisé sous 24h."
          />

          {/* Retour */}
          <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
            <a
              href="/creations/petits-dejeuners-et-pauses"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                borderBottom: '1px solid currentColor',
                paddingBottom: '2px',
              }}
            >
              ← Retour aux petits-déjeuners
            </a>
          </div>
        </section>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .fiche-article-body p {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.85;
          color: var(--text-secondary);
          margin-bottom: 18px;
        }
        .fiche-article-body h2 {
          font-family: 'Baskerville Display PT', Georgia, serif;
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 400;
          color: var(--text-primary);
          margin: 40px 0 14px;
          line-height: 1.15;
        }
        .fiche-article-body strong {
          color: var(--text-primary);
          font-weight: 500;
        }
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
      ` }} />

      <Footer />
    </>
  )
}

function ProductInfo({ product }) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const canOrder = !!product.price && !!product.id

  const handleAdd = () => {
    if (!canOrder) return
    addItem(product, qty)
    setAdded(true)
    setQty(1)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div>
      {/* Label catégorie */}
      <p style={{
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: '16px',
      }}>
        {product.categoryLabel}
      </p>

      {/* Nom produit */}
      <h1 style={{
        fontFamily: "'Baskerville Display PT', Georgia, serif",
        fontSize: 'clamp(28px, 3.5vw, 46px)',
        fontWeight: 400,
        lineHeight: 1.08,
        color: 'var(--text-primary)',
        marginBottom: '20px',
        letterSpacing: '-0.01em',
      }}>
        {product.name}
      </h1>

      {/* Prix */}
      <p style={{
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: '22px',
        fontWeight: 500,
        color: 'var(--text-primary)',
        marginBottom: '10px',
        letterSpacing: '-0.01em',
      }}>
        {product.price?.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
      </p>

      {/* Quantité / format */}
      <p style={{
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: '13px',
        color: 'rgba(17,17,17,0.45)',
        letterSpacing: '0.04em',
        marginBottom: '28px',
      }}>
        {product.qty}
      </p>

      {/* Description / ingrédients */}
      <p style={{
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: '14px',
        lineHeight: 1.75,
        color: 'var(--text-secondary)',
        marginBottom: '28px',
        paddingBottom: '28px',
        borderBottom: '1px solid rgba(17,17,17,0.07)',
      }}>
        {product.ingredients}
      </p>

      {/* Tags régimes alimentaires */}
      {product.dietary?.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
          {product.dietary.map(tag => {
            const style = DIETARY_COLORS[tag] || { bg: 'rgba(17,17,17,0.05)', color: 'rgba(17,17,17,0.45)' }
            return (
              <span key={tag} style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: style.color,
                background: style.bg,
                padding: '5px 10px',
              }}>
                {tag}
              </span>
            )
          })}
        </div>
      )}

      {/* Allergènes */}
      <div style={{
        background: 'var(--bg-secondary)',
        padding: '20px 24px',
        marginBottom: '32px',
      }}>
        <p style={{
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(17,17,17,0.45)',
          marginBottom: '10px',
        }}>
          Allergènes
        </p>
        {product.allergens?.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {product.allergens.map(a => (
              <span key={a} style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.04em',
                color: 'rgba(17,17,17,0.65)',
                background: 'rgba(17,17,17,0.06)',
                padding: '4px 10px',
              }}>
                {a}
              </span>
            ))}
          </div>
        ) : (
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '12px',
            color: '#3a7c3a',
            fontWeight: 500,
          }}>
            ✓ Aucun allergène majeur déclaré
          </p>
        )}
        <p style={{
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: '10px',
          color: 'rgba(17,17,17,0.35)',
          marginTop: '10px',
          lineHeight: 1.6,
        }}>
          Fabriqué dans un atelier pouvant traiter d'autres allergènes. En cas de doute ou d'allergie sévère, contactez-nous.
        </p>
      </div>

      {/* ── CTA devis ── */}
      <a
        href="/devis"
        style={{
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          background: 'var(--accent)',
          border: '1px solid var(--accent)',
          padding: '18px 36px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          justifyContent: 'center',
          width: '100%',
          transition: 'opacity 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        Demande de devis →
      </a>

      {/* Livraison info */}
      <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[
          { icon: '🚚', text: 'Livraison dès 6h30, Paris & Île-de-France' },
          { icon: '⏰', text: 'Commandez avant 14h la veille' },
          { icon: '🧾', text: 'Facturation entreprise disponible' },
        ].map(({ icon, text }) => (
          <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '14px' }}>{icon}</span>
            <span style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '12px',
              color: 'rgba(17,17,17,0.5)',
              letterSpacing: '0.02em',
            }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
