'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import { CITIES } from '../../../../lib/citiesData'

export default function QuartierPage() {
  const { ville, quartier } = useParams()

  const city = CITIES.find(c => c.slug === ville)
  if (!city?.quartiers) notFound()

  const q = city.quartiers.find(q => q.slug === quartier)
  if (!q) notFound()

  // FAQ universelle + FAQ spécifique au quartier
  const universalFaq = [
    { q: 'Acceptez-vous les commandes de dernière minute ?', a: 'Oui. Nous acceptons les commandes jusqu\'à 10h le matin même sur notre sélection disponible du jour : plateaux de viennoiseries, madeleines, brochettes de fruits. Pour votre catalogue complet et garantir votre choix, commandez avant 14h la veille.' },
    { q: 'Quels sont vos horaires de livraison ?', a: 'Nous livrons dès 6h30 jusqu\'à 10h selon les créneaux disponibles. Précisez votre heure souhaitée lors de la commande.' },
  ]
  const allFaq = [...(q.faq || []), ...universalFaq]

  // JSON-LD BreadcrumbList + LocalBusiness + FAQ
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: allFaq.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lecrindesterroirs.fr' },
          { '@type': 'ListItem', position: 2, name: 'Nos villes', item: 'https://www.lecrindesterroirs.fr/traiteur' },
          { '@type': 'ListItem', position: 3, name: city.name, item: `https://www.lecrindesterroirs.fr/traiteur/${city.slug}` },
          { '@type': 'ListItem', position: 4, name: q.name, item: `https://www.lecrindesterroirs.fr/traiteur/${city.slug}/${q.slug}` },
        ],
      },
      {
        '@type': ['LocalBusiness', 'FoodEstablishment'],
        name: "L'Écrin Traiteur",
        description: `Traiteur d'entreprise livrant à ${q.name} (${city.name}) — petits-déjeuners artisanaux, pauses gourmandes, coffrets et plateaux repas.`,
        url: `https://www.lecrindesterroirs.fr/traiteur/${city.slug}/${q.slug}`,
        telephone: '+33760169620',
        email: 'contact@lecrindesterroirs.fr',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '63 bis rue de Sèvres',
          addressLocality: 'Boulogne-Billancourt',
          postalCode: '92100',
          addressCountry: 'FR',
        },
        areaServed: { '@type': 'Place', name: `${q.name}, ${city.name}` },
        priceRange: '€€',
        servesCuisine: 'Française artisanale',
      },
    ],
  }

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero ── */}
        <div className="quartier-hero" style={{ background: 'var(--bg-secondary)', padding: '72px 72px 64px' }}>
          <div style={{ maxWidth: '760px' }}>

            {/* Breadcrumb */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {[
                { label: 'Toutes nos villes', href: '/traiteur' },
                { label: city.name, href: `/traiteur/${city.slug}` },
              ].map((crumb, i) => (
                <span key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <a href={crumb.href} style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '11px',
                    fontWeight: 400,
                    color: 'rgba(17,17,17,0.4)',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.4)'}
                  >
                    {crumb.label}
                  </a>
                  <span style={{ color: 'rgba(17,17,17,0.25)', fontSize: '10px' }}>›</span>
                </span>
              ))}
              <span style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                color: 'var(--accent)',
                letterSpacing: '0.04em',
              }}>
                {q.name}
              </span>
            </nav>

            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '16px',
            }}>
              Traiteur d'entreprise — {city.name}
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
              Traiteur<br />{q.name}
            </h1>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              marginBottom: '36px',
              maxWidth: '560px',
            }}>
              {q.heroDescription}
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

        {/* ── Zones couvertes ── */}
        {q.linkedZones?.length > 0 && (
          <div style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(17,17,17,0.06)' }}>
            <div className="quartier-zones" style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px 72px' }}>
              <p style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(17,17,17,0.35)',
                marginBottom: '16px',
              }}>
                Zones couvertes dans ce secteur
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {q.linkedZones.map(zone => (
                  <span key={zone} style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '12px',
                    color: 'var(--text-primary)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid rgba(17,17,17,0.08)',
                    padding: '6px 14px',
                    letterSpacing: '0.02em',
                  }}>
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Article SEO ── */}
        <section className="quartier-article" style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 72px 96px' }}>
          <div
            className="quartier-article-body"
            dangerouslySetInnerHTML={{ __html: q.seoArticle }}
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
              L'Écrin Traiteur livre à {q.name}
            </p>
            {[
              `Livraison dès 6h30 — ${q.name}, ${city.name}`,
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

          {/* FAQ */}
          {allFaq.length > 0 && (
            <div style={{ marginTop: '52px', padding: '36px', background: 'var(--bg-secondary)' }}>
              <p style={{
                fontFamily: "'Baskerville Display PT', Georgia, serif",
                fontSize: '22px',
                fontWeight: 400,
                color: 'var(--text-primary)',
                marginBottom: '28px',
                lineHeight: 1.2,
              }}>Questions fréquentes</p>
              {allFaq.map((item, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(17,17,17,0.08)', padding: '18px 0' }}>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.5 }}>{item.q}</p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item.a}</p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }} />
            </div>
          )}

          {/* Navigation retour */}
          <div style={{ marginTop: '48px', paddingTop: '36px', borderTop: '1px solid rgba(17,17,17,0.07)', display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <a
              href={`/traiteur/${city.slug}`}
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
              ← Retour à {city.name}
            </a>
            <a
              href="/traiteur"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(17,17,17,0.4)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(17,17,17,0.2)',
                paddingBottom: '2px',
              }}
            >
              Toutes nos villes →
            </a>
          </div>
        </section>

      </main>

      <style suppressHydrationWarning>{`
        .quartier-article-body p {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.85;
          color: var(--text-secondary);
          margin-bottom: 18px;
        }
        .quartier-article-body h2 {
          font-family: 'Baskerville Display PT', Georgia, serif;
          font-size: clamp(20px, 2.2vw, 30px);
          font-weight: 400;
          color: var(--text-primary);
          margin: 40px 0 14px;
          line-height: 1.15;
        }
        .quartier-article-body strong {
          color: var(--text-primary);
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .quartier-hero { padding: 48px 24px 40px !important; }
          .quartier-zones { padding: 28px 24px !important; }
          .quartier-article { padding: 56px 24px 72px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .quartier-hero { padding: 56px 40px 48px !important; }
          .quartier-zones { padding: 32px 40px !important; }
          .quartier-article { padding: 64px 40px 80px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
