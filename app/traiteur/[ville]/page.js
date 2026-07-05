'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import LogosSection from '../../../components/LogosSection'
import CategoryClosing from '../../../components/CategoryClosing'
import { CITIES } from '../../../lib/citiesData'
import { OCCASIONS } from '../../../lib/occasionsData'

const SERVICES = [
  {
    label: 'Petits-Déjeuners',
    desc: 'Viennoiseries et coffrets artisanaux, livrés dès 6h30.',
    href: '/creations/petits-dejeuners-et-pauses',
    img: '/creations-1.png',
  },
  {
    label: 'Plateaux Repas',
    desc: 'Des plateaux composés pour vos déjeuners de travail.',
    href: '/creations/plateaux-repas',
    img: '/creations-4.png',
  },
  {
    label: 'Cocktails & Buffets',
    desc: 'Pièces cocktail et buffets pour vos réceptions.',
    href: '/creations/cocktails-et-buffets',
    img: '/creations-3.png',
  },
]

export default function CityPage() {
  const { ville } = useParams()
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

  const CITY_ARGS = [
    { icon: 'delivery', titre: `Livraison dès 6h30 à ${city.name}`, desc: `Nos livreurs desservent ${city.name} et les communes limitrophes, chaque matin en semaine.` },
    { icon: 'quality', titre: 'Artisans sélectionnés', desc: "Boulangers, pâtissiers et épiciers fins choisis pour leur savoir-faire, pas pour leur prix." },
    { icon: 'custom', titre: 'Commande avant 14h', desc: "Passez commande la veille avant 14h pour une livraison le lendemain matin dès 6h30." },
    { icon: 'support', titre: 'Facturation entreprise', desc: "Facture avec TVA et interlocuteur dédié pour vos commandes récurrentes ou volumes importants." },
  ]

  return (
    <>
      <Navbar showBanner={true} />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero image pleine largeur ── */}
        <div className="city-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="city-hero" style={{ position: 'relative', width: '100%', height: 'clamp(440px, 52vw, 600px)', overflow: 'hidden' }}>
            <img src="/hero-bg.png" alt={`Traiteur d'entreprise ${city.name} — L'Écrin Traiteur`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,12,9,0.80) 0%, rgba(16,12,9,0.55) 42%, rgba(16,12,9,0.15) 70%, rgba(16,12,9,0) 88%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="city-hero-text" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '640px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                  Traiteur d'entreprise, {city.region}
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.015em', color: '#FFFFFF', marginBottom: '22px' }}>
                  Traiteur<br />{city.name}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', maxWidth: '460px', marginBottom: '32px' }}>
                  {city.heroDescription}
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
                  <a
                    href="/creations/petits-dejeuners-et-pauses"
                    style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: '#FFFFFF', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    Voir les produits →
                  </a>
                  <a
                    href="/devis"
                    style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.5)', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', background: 'transparent', transition: 'background 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    Demander un devis
                  </a>
                </div>

                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
                  {['Livraison dès 6h30', 'Commande avant 14h la veille', 'Artisans sélectionnés'].map(badge => (
                    <span key={badge} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.28)', padding: '6px 12px' }}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </header>
        </div>

        {/* ── Nos prestations — 3 cartes illustrées ── */}
        <div className="city-services" style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '18px' }}>
              Nos prestations à {city.name}
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
              Des formats pensés<br />pour vos événements
            </h2>
          </div>
          <div className="city-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <a
                  href={s.href}
                  className="city-service-card"
                  style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', overflow: 'hidden', boxShadow: '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)', transition: 'box-shadow 0.35s ease, transform 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(17,17,17,0.04), 0 16px 40px rgba(17,17,17,0.09)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)' }}
                >
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#F8F5EF' }}>
                    <img src={s.img} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '22px 22px 26px' }}>
                    <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '19px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {s.label}
                    </p>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '14px' }}>
                      {s.desc}
                    </p>
                    <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                      Découvrir →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Ils nous font confiance ── */}
        <div style={{ marginTop: '88px' }}>
          <LogosSection />
        </div>

        {/* ── Zones desservies ── */}
        <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid rgba(17,17,17,0.06)' }}>
          <div className="city-zones" style={{ maxWidth: '1280px', margin: '0 auto', padding: '56px 72px' }}>
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
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', rowGap: '14px' }}>
              {city.zones.map((zone, i) => {
                const quartierMatch = city.quartiers?.find(q => q.linkedZones?.includes(zone))
                const isLast = i === city.zones.length - 1
                return (
                  <span key={zone} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {quartierMatch ? (
                      <a href={`/traiteur/${city.slug}/${quartierMatch.slug}`} className="city-tag-link">
                        {zone}
                      </a>
                    ) : (
                      <span className="city-tag-plain">{zone}</span>
                    )}
                    {!isLast && <span className="city-tag-sep">·</span>}
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
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', rowGap: '14px' }}>
              {OCCASIONS.map((o, i) => (
                <span key={o.slug} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <a href={`/occasions/${o.slug}`} className="city-tag-link">
                    {o.name}
                  </a>
                  {i < OCCASIONS.length - 1 && <span className="city-tag-sep">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

      </main>

      {/* ── Éditorial + arguments + CTA + article SEO ── */}
      <CategoryClosing
        eyebrow={`Traiteur d'entreprise à ${city.name}`}
        title={`Le goût de l'artisanat,\nlivré à ${city.name}.`}
        body={city.businessContext || city.heroDescription}
        args={CITY_ARGS}
        seoArticle={city.seoArticle}
      />

      {/* ── Lien vers toutes les villes ── */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px 64px', textAlign: 'center' }}>
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

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .city-service-card { border-radius: 4px !important; }
        .city-tag-link {
          position: relative;
          display: inline-block;
          font-family: 'Neue Montreal', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: var(--text-primary);
          text-decoration: none;
          padding: 2px 0;
          transition: color 0.25s ease;
        }
        .city-tag-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .city-tag-link:hover {
          color: var(--accent);
        }
        .city-tag-link:hover::after {
          transform: scaleX(1);
        }
        .city-tag-plain {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: rgba(17,17,17,0.38);
          padding: 2px 0;
        }
        .city-tag-sep {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 13px;
          color: rgba(17,17,17,0.25);
          margin: 0 14px;
        }
        @media (max-width: 768px) {
          .city-hero-wrapper { padding: 20px 20px 0 !important; }
          .city-hero { min-height: 560px !important; height: 72vh !important; }
          .city-hero-text { padding: 0 28px !important; max-width: 100% !important; }
          .city-services { padding: 56px 24px 0 !important; }
          .city-services-grid { grid-template-columns: 1fr !important; }
          .city-zones { padding: 36px 24px !important; }
          .city-occasions { padding: 40px 24px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .city-hero-wrapper { padding: 32px 40px 0 !important; }
          .city-hero-text { padding: 0 40px !important; }
          .city-services { padding: 64px 40px 0 !important; }
          .city-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .city-zones { padding: 40px !important; }
          .city-occasions { padding: 48px 40px !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
