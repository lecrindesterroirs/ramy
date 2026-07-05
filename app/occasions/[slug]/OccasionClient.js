'use client'

import { notFound } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { OCCASIONS, FAQ_DERNIERE_MINUTE } from '../../../lib/occasionsData'
import { PRODUCTS } from '../../../lib/productsData'
import { CITIES } from '../../../lib/citiesData'
import DevisRapide from '../../../components/DevisRapide'

export default function OccasionClient({ slug }) {
  const occasion = OCCASIONS.find(o => o.slug === slug)
  if (!occasion) notFound()

  const products = occasion.linkedProducts
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean)

  const cities = occasion.linkedCities
    .map(s => CITIES.find(c => c.slug === s))
    .filter(Boolean)

  const allFaq = [...occasion.faq, FAQ_DERNIERE_MINUTE]

  // JSON-LD schemas
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

  return (
    <>
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero ── */}
        <div className="occasion-hero" style={{ background: 'var(--bg-secondary)', padding: '80px 72px 72px' }}>
          <div style={{ maxWidth: '700px' }}>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '16px',
            }}>
              Pour votre entreprise
            </p>
            <h1 style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(30px, 4.5vw, 58px)',
              fontWeight: 400,
              lineHeight: 1.07,
              color: 'var(--text-primary)',
              marginBottom: '24px',
              letterSpacing: '-0.015em',
            }}>
              {occasion.heroTitle}
            </h1>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              maxWidth: '540px',
            }}>
              {occasion.heroDescription}
            </p>
          </div>
        </div>

        {/* ── 3 piliers ── */}
        <div className="occasion-piliers" style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 72px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {occasion.piliers.map(p => (
            <div key={p.title} style={{
              background: 'var(--bg-secondary)',
              padding: '36px 32px',
            }}>
              <span style={{ color: 'var(--accent)', fontSize: '16px', display: 'block', marginBottom: '14px' }}>{p.icon}</span>
              <p style={{
                fontFamily: "'Baskerville Display PT', Georgia, serif",
                fontSize: '18px',
                fontWeight: 400,
                color: 'var(--text-primary)',
                marginBottom: '10px',
                lineHeight: 1.3,
              }}>
                {p.title}
              </p>
              <p style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '13px',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
              }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* ── Article SEO ── */}
        <section className="occasion-article" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 72px 64px' }}>
          <div
            className="occasion-article-body"
            dangerouslySetInnerHTML={{ __html: occasion.seoArticle }}
          />
        </section>

        {/* ── Témoignage ── */}
        {occasion.testimonial && (
          <div style={{ background: '#111111', padding: '72px 40px' }}>
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <span style={{
                display: 'block',
                width: '28px',
                height: '2px',
                background: 'var(--accent)',
                marginBottom: '32px',
              }} />
              <blockquote style={{
                fontFamily: "'Baskerville Display PT', Georgia, serif",
                fontSize: 'clamp(18px, 2vw, 26px)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#FFFFFF',
                lineHeight: 1.55,
                letterSpacing: '-0.005em',
                marginBottom: '32px',
              }}>
                « {occasion.testimonial.quote} »
              </blockquote>
              <div>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--accent)',
                  marginBottom: '4px',
                  letterSpacing: '0.02em',
                }}>
                  {occasion.testimonial.author}
                </p>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.38)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {occasion.testimonial.role} — {occasion.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── Produits adaptés ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)', background: 'var(--bg-secondary)' }}>
          <div className="occasion-products" style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 72px' }}>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '8px',
            }}>
              Sélection recommandée
            </p>
            <p style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(22px, 2.5vw, 34px)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              marginBottom: '40px',
              lineHeight: 1.15,
            }}>
              Nos produits pour {occasion.name.toLowerCase()}
            </p>
            <div className="occasion-products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
              {products.map(product => (
                <a
                  key={product.id}
                  href={`/creations/petits-dejeuners-et-pauses/${product.id}`}
                  style={{
                    background: '#FFFFFF',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#EDE8DE'}
                  onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
                >
                  {product.image && (
                    <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div style={{ padding: '20px 20px 24px' }}>
                    <p style={{
                      fontFamily: "'Neue Montreal', sans-serif",
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(17,17,17,0.35)',
                      marginBottom: '6px',
                    }}>
                      {product.categoryLabel || 'Artisanal'}
                    </p>
                    <p style={{
                      fontFamily: "'Baskerville Display PT', Georgia, serif",
                      fontSize: '17px',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: '12px',
                    }}>
                      {product.name}
                    </p>
                    <span style={{
                      fontFamily: "'Neue Montreal', sans-serif",
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                    }}>
                      Voir le produit →
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ marginTop: '32px' }}>
              <a
                href="/creations/petits-dejeuners-et-pauses"
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  borderBottom: '1px solid currentColor',
                  paddingBottom: '2px',
                }}
              >
                Voir tous nos produits →
              </a>
            </div>
          </div>
        </div>

        {/* ── Villes desservies ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <div className="occasion-cities" style={{ maxWidth: '1280px', margin: '0 auto', padding: '56px 72px' }}>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(17,17,17,0.4)',
              marginBottom: '20px',
            }}>
              Nous livrons notamment à
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cities.map(city => (
                <a
                  key={city.slug}
                  href={`/traiteur/${city.slug}`}
                  style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '12px',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid rgba(17,17,17,0.08)',
                    padding: '7px 16px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.08)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                >
                  {city.name}
                </a>
              ))}
              <a
                href="/traiteur"
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--accent)',
                  border: '1px solid rgba(224,161,38,0.3)',
                  padding: '7px 16px',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(224,161,38,0.3)'}
              >
                Toutes nos villes →
              </a>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)', background: 'var(--bg-secondary)' }}>
          <div className="occasion-faq" style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 72px' }}>
            <p style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(22px, 2.5vw, 34px)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              marginBottom: '40px',
              lineHeight: 1.15,
            }}>
              Questions fréquentes
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {allFaq.map((item, i) => (
                <div key={i} style={{
                  borderTop: '1px solid rgba(17,17,17,0.08)',
                  padding: '24px 0',
                }}>
                  <p style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                    lineHeight: 1.5,
                  }}>
                    {item.q}
                  </p>
                  <p style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '13px',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                  }}>
                    {item.a}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }} />
            </div>
          </div>
        </div>

        {/* ── Devis rapide inline ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)', padding: '72px 40px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <DevisRapide
              defaultPrestation={occasion.name?.toLowerCase().includes('repas') ? 'Plateaux repas' : occasion.name?.toLowerCase().includes('séminaire') ? 'Séminaire' : occasion.name?.toLowerCase().includes('goûter') ? 'Goûter' : 'Petit-déjeuner'}
              titre={`Organiser un ${occasion.name?.toLowerCase()} à Paris ?`}
              sousTitre="Répondez en 30 secondes — devis personnalisé sous 24h, livraison dans toute l'Île-de-France."
            />
          </div>
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .occasion-article-body p {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.85;
          color: var(--text-secondary);
          margin-bottom: 18px;
        }
        .occasion-article-body h2 {
          font-family: 'Baskerville Display PT', Georgia, serif;
          font-size: clamp(20px, 2.2vw, 30px);
          font-weight: 400;
          color: var(--text-primary);
          margin: 44px 0 14px;
          line-height: 1.15;
        }
        .occasion-article-body strong {
          color: var(--text-primary);
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .occasion-hero { padding: 56px 24px 48px !important; }
          .occasion-piliers { grid-template-columns: 1fr !important; padding: 48px 24px !important; }
          .occasion-article { padding: 0 24px 48px !important; }
          .occasion-products { padding: 48px 24px !important; }
          .occasion-products-grid { grid-template-columns: 1fr 1fr !important; }
          .occasion-cities { padding: 40px 24px !important; }
          .occasion-faq { padding: 48px 24px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .occasion-hero { padding: 64px 40px 56px !important; }
          .occasion-piliers { grid-template-columns: repeat(3, 1fr) !important; padding: 56px 40px !important; }
          .occasion-article { padding: 0 40px 56px !important; }
          .occasion-products { padding: 56px 40px !important; }
          .occasion-products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .occasion-cities { padding: 48px 40px !important; }
          .occasion-faq { padding: 56px 40px !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
