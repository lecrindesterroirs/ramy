'use client'

import { notFound } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { CITIES } from '../../../lib/citiesData'
import { OCCASIONS } from '../../../lib/occasionsData'

const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M17 8h1a4 4 0 010 8h-1"/><path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>
      </svg>
    ),
    label: 'Petits-Déjeuners',
    href: '/creations/petits-dejeuners-et-pauses',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 00-5 5v6h3.5c.8 0 1.5.7 1.5 1.5V22"/>
      </svg>
    ),
    label: 'Plateaux Repas',
    href: '/creations/plateaux-repas',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M8 22h8M12 11v11M3 3h18l-3 7H6L3 3z"/>
      </svg>
    ),
    label: 'Cocktails & Buffets',
    href: '/creations/cocktails-et-buffets',
  },
]

export default function VilleClient({ ville }) {
  const city = CITIES.find(c => c.slug === ville)
  if (!city) notFound()

  // JSON-LD LocalBusiness schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FoodEstablishment'],
    name: "L'Écrin Traiteur",
    description: `Traiteur d'entreprise livrant à ${city.name} — petits-déjeuners artisanaux, pauses gourmandes, coffrets et plateaux repas.`,
    url: `https://www.lecrin-traiteur.fr/traiteur/${city.slug}`,
    telephone: '+33760169620',
    email: 'commercial@lecrin-traiteur.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '63 bis rue de Sèvres',
      addressLocality: 'Boulogne-Billancourt',
      postalCode: '92100',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    priceRange: '€€',
    servesCuisine: 'Française artisanale',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:30',
      closes: '14:00',
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lecrin-traiteur.fr' },
      { '@type': 'ListItem', position: 2, name: 'Nos villes', item: 'https://www.lecrin-traiteur.fr/traiteur' },
      { '@type': 'ListItem', position: 3, name: `Traiteur ${city.name}`, item: `https://www.lecrin-traiteur.fr/traiteur/${city.slug}` },
    ],
  }

  return (
    <>
      <Navbar />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero ── */}
        <div className="city-hero" style={{ background: 'var(--bg-secondary)', padding: '72px 72px 64px' }}>
          <div style={{ maxWidth: '760px' }}>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '16px',
            }}>
              Traiteur d'entreprise, {city.region}
            </p>
            <h1 style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(32px, 5vw, 62px)',
              fontWeight: 400,
              lineHeight: 1.06,
              color: 'var(--text-primary)',
              marginBottom: '24px',
              letterSpacing: '-0.015em',
            }}>
              Traiteur<br />{city.name}
            </h1>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              marginBottom: '36px',
              maxWidth: '560px',
            }}>
              {city.heroDescription}
            </p>

            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
              {[
                'Livraison dès 6h30',
                'Commande avant 14h la veille',
                'Artisans sélectionnés',
                'Facturation entreprise',
              ].map(badge => (
                <span key={badge} style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,17,17,0.55)',
                  border: '1px solid rgba(17,17,17,0.12)',
                  padding: '6px 12px',
                  background: '#FFFFFF',
                }}>
                  {badge}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="/creations/petits-dejeuners-et-pauses"
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  background: 'var(--text-primary)',
                  padding: '14px 28px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Voir les produits →
              </a>
              <a
                href="/devis"
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  border: '1px solid var(--accent)',
                  padding: '14px 28px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  background: 'transparent',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(224,161,38,0.06)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>

        {/* ── 4 services ── */}
        <div className="city-services" style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 72px' }}>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '32px',
            textAlign: 'center',
          }}>
            Nos prestations à {city.name}
          </p>
          <div className="city-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
            {SERVICES.map(s => (
              <a
                key={s.label}
                href={s.href}
                style={{
                  background: 'var(--bg-secondary)',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  textDecoration: 'none',
                  transition: 'background 0.25s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#EDE8DE'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-secondary)'}
              >
                <div style={{ color: 'var(--accent)' }}>{s.icon}</div>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.02em',
                }}>
                  {s.label}
                </p>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  color: 'var(--accent)',
                  letterSpacing: '0.06em',
                }}>
                  Voir →
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* ── Zones desservies ── */}
        <div style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(17,17,17,0.06)', borderBottom: '1px solid rgba(17,17,17,0.06)' }}>
          <div className="city-zones" style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 72px' }}>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(17,17,17,0.4)',
              marginBottom: '20px',
            }}>
              Zones & quartiers desservis
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {city.zones.map(zone => {
                const quartierMatch = city.quartiers?.find(q => q.linkedZones?.includes(zone))
                const sharedStyle = {
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  background: '#FFFFFF',
                  border: '1px solid rgba(17,17,17,0.1)',
                  padding: '6px 14px',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'border-color 0.2s ease, color 0.2s ease',
                }
                if (quartierMatch) {
                  return (
                    <a
                      key={zone}
                      href={`/traiteur/${city.slug}/${quartierMatch.slug}`}
                      style={sharedStyle}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.1)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                    >
                      {zone}
                      <span style={{ fontSize: '10px', opacity: 0.7 }}>→</span>
                    </a>
                  )
                }
                return (
                  <span key={zone} style={{ ...sharedStyle, cursor: 'default' }}>
                    {zone}
                  </span>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Occasions / maillage ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <div className="city-occasions" style={{ maxWidth: '1280px', margin: '0 auto', padding: '56px 72px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', marginBottom: '20px' }}>
              Pour quel événement ?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {OCCASIONS.map(o => (
                <a
                  key={o.slug}
                  href={`/occasions/${o.slug}`}
                  style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 400, color: 'var(--text-primary)', background: 'var(--bg-secondary)', border: '1px solid rgba(17,17,17,0.08)', padding: '7px 16px', textDecoration: 'none', transition: 'border-color 0.2s ease, color 0.2s ease', letterSpacing: '0.02em' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.08)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                >
                  {o.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Article SEO ── */}
        <section className="city-article" style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 72px 96px' }}>
          <div
            className="city-article-body"
            dangerouslySetInnerHTML={{ __html: city.seoArticle }}
          />

          {/* Encart livraison */}
          <div style={{
            marginTop: '52px',
            padding: '32px 36px',
            background: 'var(--bg-secondary)',
            borderLeft: '3px solid var(--accent)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            <p style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: '20px',
              fontWeight: 400,
              color: 'var(--text-primary)',
              lineHeight: 1.3,
              marginBottom: '4px',
            }}>
              L'Écrin Traiteur livre à {city.name}
            </p>
            {[
              `Livraison dès 6h30, ${city.name} et communes limitrophes`,
              'Commandez en ligne avant 14h la veille',
              'Artisans boulangers et pâtissiers parisiens',
              'Facturation entreprise avec TVA',
            ].map(line => (
              <div key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'var(--accent)', fontSize: '12px', marginTop: '1px', flexShrink: 0 }}>✓</span>
                <span style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>{line}</span>
              </div>
            ))}
            <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="/creations/petits-dejeuners-et-pauses"
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  background: 'var(--accent)',
                  padding: '12px 24px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Commander maintenant →
              </a>
              <a
                href="/devis"
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,17,17,0.5)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(17,17,17,0.2)',
                  paddingBottom: '2px',
                  alignSelf: 'flex-end',
                  marginBottom: '2px',
                }}
              >
                Demander un devis
              </a>
            </div>
          </div>

          {/* Lien vers toutes les villes */}
          <div style={{ marginTop: '48px', paddingTop: '36px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
            <a
              href="/traiteur"
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
              ← Toutes nos villes de livraison
            </a>
          </div>
        </section>

      </main>

      <style suppressHydrationWarning>{`
        .city-article-body p {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.85;
          color: var(--text-secondary);
          margin-bottom: 18px;
        }
        .city-article-body h2 {
          font-family: 'Baskerville Display PT', Georgia, serif;
          font-size: clamp(20px, 2.2vw, 30px);
          font-weight: 400;
          color: var(--text-primary);
          margin: 40px 0 14px;
          line-height: 1.15;
        }
        .city-article-body strong {
          color: var(--text-primary);
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .city-hero { padding: 48px 24px 40px !important; }
          .city-services { padding: 48px 24px !important; }
          .city-services-grid { grid-template-columns: 1fr 1fr !important; }
          .city-zones { padding: 36px 24px !important; }
          .city-article { padding: 56px 24px 72px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .city-hero { padding: 56px 40px 48px !important; }
          .city-services { padding: 56px 40px !important; }
          .city-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .city-zones { padding: 40px !important; }
          .city-article { padding: 64px 40px 80px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
