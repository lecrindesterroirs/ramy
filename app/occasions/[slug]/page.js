'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { OCCASIONS, FAQ_DERNIERE_MINUTE } from '../../../lib/occasionsData'
import { PRODUCTS } from '../../../lib/productsData'
import { COLLECTIONS } from '../../../lib/collectionsData'
import { CITIES } from '../../../lib/citiesData'
import DevisRapide from '../../../components/DevisRapide'
import { useState } from 'react'

export default function OccasionPage() {
  const { slug } = useParams()
  const occasion = OCCASIONS.find(o => o.slug === slug)
  if (!occasion) notFound()

  const isPlateaux = occasion.productCategory === 'plateaux-repas'
  const productRoute = isPlateaux ? 'plateaux-repas' : 'petits-dejeuners-et-pauses'
  const products = isPlateaux
    ? occasion.linkedProducts.map(id => COLLECTIONS.find(c => c.id === id)).filter(Boolean).map(c => ({ id: c.id, img: c.img, name: c.nom, categoryLabel: 'Plateau repas' }))
    : occasion.linkedProducts.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean)

  const cities = occasion.linkedCities
    .map(s => CITIES.find(c => c.slug === s))
    .filter(Boolean)

  const allFaq = [...occasion.faq, FAQ_DERNIERE_MINUTE]

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lecrin-traiteur.fr' },
      { '@type': 'ListItem', position: 2, name: 'Occasions', item: 'https://www.lecrin-traiteur.fr/occasions' },
      { '@type': 'ListItem', position: 3, name: occasion.name, item: `https://www.lecrin-traiteur.fr/occasions/${occasion.slug}` },
    ],
  }

  const heroImg = occasion.heroImg || '/creations-featured.webp'

  return (
    <>
      <Navbar showBanner />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero photo ── */}
        <div className="page-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <div className="page-hero" style={{ position: 'relative', width: '100%', height: '68vh', minHeight: '420px', overflow: 'hidden' }}>
            <img
              src={heroImg}
              alt={occasion.heroTitle}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.30) 58%, rgba(0,0,0,0) 80%)' }} />
            <div className="page-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '620px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.62)', marginBottom: '16px', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                Pour votre entreprise
              </p>
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(28px, 3.8vw, 52px)', fontWeight: 400, lineHeight: 1.06, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px', textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
                {occasion.heroTitle}
              </h1>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.80)', maxWidth: '400px', marginBottom: '32px', textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}>
                {occasion.heroDescription}
              </p>
              <a
                href="/devis"
                style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'opacity 0.3s ease', alignSelf: 'flex-start' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Demande de devis →
              </a>
            </div>
          </div>
        </div>

        {/* ── 3 piliers ── */}
        <div className="occasion-piliers" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid rgba(17,17,17,0.08)' }}>
            {occasion.piliers.map((p, i) => (
              <div key={p.title} style={{ padding: '40px 32px 40px 0', borderRight: i < 2 ? '1px solid rgba(17,17,17,0.08)' : 'none', paddingLeft: i > 0 ? '32px' : 0 }}>
                <span style={{ display: 'block', fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', color: 'var(--accent)', marginBottom: '16px' }}>
                  0{i + 1}
                </span>
                <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(17px, 1.6vw, 22px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px', lineHeight: 1.25 }}>
                  {p.title}
                </p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Article SEO ── */}
        <section className="occasion-article" style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 72px' }}>
          <div className="occasion-article-body" dangerouslySetInnerHTML={{ __html: occasion.seoArticle }} />
        </section>

        {/* ── Témoignage ── */}
        {occasion.testimonial && (
          <div style={{ background: '#111111', padding: '72px 40px' }}>
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <span style={{ display: 'block', width: '28px', height: '2px', background: 'var(--accent)', marginBottom: '32px' }} />
              <blockquote style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(18px, 2vw, 26px)', fontWeight: 400, fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.55, letterSpacing: '-0.005em', marginBottom: '32px' }}>
                « {occasion.testimonial.quote} »
              </blockquote>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--accent)', marginBottom: '4px' }}>
                {occasion.testimonial.author}
              </p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {occasion.testimonial.role} — {occasion.testimonial.company}
              </p>
            </div>
          </div>
        )}

        {/* ── Produits recommandés ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <div className="occasion-products" style={{ maxWidth: '1440px', margin: '0 auto', padding: '64px 72px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '8px' }}>
              Sélection recommandée
            </p>
            <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '40px', lineHeight: 1.15 }}>
              Nos produits pour {occasion.name.toLowerCase()}
            </p>
            <div className="occasion-products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
              {products.map(product => (
                <a
                  key={product.id}
                  href={`/creations/${productRoute}/${product.id}`}
                  style={{ background: 'var(--bg-secondary)', textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'background 0.2s ease' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#EDE8DE'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-secondary)'}
                >
                  <div style={{ aspectRatio: '1/1', overflow: 'hidden', background: '#EDE8DE' }}>
                    <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '18px 20px 22px' }}>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', marginBottom: '5px' }}>
                      {product.categoryLabel || 'Artisanal'}
                    </p>
                    <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '17px', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '12px' }}>
                      {product.name}
                    </p>
                    <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                      Voir le produit →
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ marginTop: '32px' }}>
              <a href={`/creations/${productRoute}`} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
                {isPlateaux ? 'Voir tous nos plateaux repas →' : 'Voir tous nos produits →'}
              </a>
            </div>
          </div>
        </div>

        {/* ── Villes desservies ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)', background: 'var(--bg-secondary)' }}>
          <div className="occasion-cities" style={{ maxWidth: '1440px', margin: '0 auto', padding: '48px 72px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', marginBottom: '20px' }}>
              Nous livrons notamment à
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cities.map(city => (
                <a key={city.slug} href={`/traiteur/${city.slug}`}
                  style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-primary)', background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.1)', padding: '7px 16px', textDecoration: 'none', transition: 'border-color 0.2s ease, color 0.2s ease', letterSpacing: '0.02em' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.1)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                >
                  {city.name}
                </a>
              ))}
              <a href="/traiteur"
                style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, color: 'var(--accent)', border: '1px solid rgba(224,161,38,0.35)', padding: '7px 16px', textDecoration: 'none', letterSpacing: '0.02em', transition: 'border-color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(224,161,38,0.35)'}
              >
                Toutes nos villes →
              </a>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <div className="occasion-faq" style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 72px' }}>
            <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '40px', lineHeight: 1.15 }}>
              Questions fréquentes
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {allFaq.map((item, i) => (
                <FaqItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Devis ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)', background: 'var(--bg-secondary)', padding: '72px 40px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <DevisRapide
              defaultPrestation={
                occasion.name?.toLowerCase().includes('repas') ? 'Plateaux repas'
                : occasion.name?.toLowerCase().includes('séminaire') ? 'Séminaire'
                : occasion.name?.toLowerCase().includes('goûter') ? 'Goûter'
                : 'Petit-déjeuner'
              }
              titre={`Organiser un ${occasion.name?.toLowerCase()} à Paris ?`}
              sousTitre="Répondez en 30 secondes — devis personnalisé sous 24h, livraison dans toute l'Île-de-France."
            />
          </div>
        </div>

      </main>

      <style suppressHydrationWarning>{`
        .occasion-article-body p { font-family: 'Neue Montreal', sans-serif; font-size: 14px; line-height: 1.72; color: rgba(17,17,17,0.58); margin-bottom: 16px; }
        .occasion-article-body h2 { font-family: 'Neue Montreal', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); margin: 48px 0 12px; padding-top: 24px; border-top: 1px solid rgba(169,128,59,0.22); line-height: 1; }
        .occasion-article-body strong { color: rgba(17,17,17,0.82); font-weight: 500; }
        @media (max-width: 768px) {
          .page-hero-wrapper { padding: 24px 16px 0 !important; }
          .page-hero { height: 50vh !important; min-height: 300px !important; }
          .page-hero-text { padding: 0 24px !important; }
          .occasion-piliers { padding: 0 24px !important; }
          .occasion-piliers > div { grid-template-columns: 1fr !important; }
          .occasion-article { padding: 48px 24px !important; }
          .occasion-products { padding: 48px 24px !important; }
          .occasion-products-grid { grid-template-columns: 1fr 1fr !important; }
          .occasion-cities { padding: 40px 24px !important; }
          .occasion-faq { padding: 48px 24px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .page-hero-wrapper { padding: 24px 40px 0 !important; }
          .occasion-piliers { padding: 0 40px !important; }
          .occasion-article { padding: 56px 40px !important; }
          .occasion-products { padding: 56px 40px !important; }
          .occasion-products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .occasion-cities { padding: 40px 40px !important; }
          .occasion-faq { padding: 56px 40px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', padding: '22px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.5, margin: 0 }}>
          {item.q}
        </p>
        <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '18px', color: 'var(--accent)', flexShrink: 0, lineHeight: 1, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s ease' }}>+</span>
      </button>
      {open && (
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.75, color: 'var(--text-secondary)', paddingBottom: '22px' }}>
          {item.a}
        </p>
      )}
    </div>
  )
}
