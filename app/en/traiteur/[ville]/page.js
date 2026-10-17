import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import Reveal from '../../../../components/Reveal'
import RelatedLinks from '../../../../components/RelatedLinks'
import ParallaxImage from '../../../../components/ParallaxImage'
import { CITIES } from '../../../../lib/citiesData'
import { PDJ_VILLES } from '../../../../lib/pdjVillesData'
import { PLATEAUX_VILLES } from '../../../../lib/plateauxVillesData'
import { CITY_NEIGHBORS } from '../../../../lib/cityNeighbors'
import { OCCASIONS } from '../../../../lib/occasionsData'
import { enCity } from '../../../../lib/en/villes'
import { t } from '../../../../lib/en/interface'
import {
  BASE_URL, lienEn, OCCASIONS_EN, argsLieuEn, HalalLineEn, LogosEn, ClosingEn, SurvolsEn,
} from '../../_villes/composants'

/*
  Page ville en anglais : même gabarit que app/traiteur/[ville]/page.js.
  Textes lus dans lib/en/villes (surcouche anglaise), tout le reste (zones,
  quartiers, voisines) dans les données françaises. Rendue côté serveur :
  les survols du français (onMouseEnter) sont faits en CSS.
*/

const SERVICES = [
  {
    label: 'Corporate breakfast',
    desc: 'Artisan pastries and breakfast boxes, delivered from 6:30 am.',
    href: '/creations/petits-dejeuners-et-pauses',
    img: '/creations-1.webp',
  },
  {
    label: 'Lunch trays',
    desc: 'Complete trays for your working lunches.',
    href: '/creations/plateaux-repas',
    img: '/creations-4.webp',
  },
  {
    label: 'Cocktails & Buffets',
    desc: 'Canapés and buffets for your receptions.',
    href: '/creations/cocktails',
    img: '/creations-3.webp',
  },
]

export default async function EnCityPage({ params }) {
  const { ville } = await params
  const city = enCity(ville)
  if (!city) notFound()

  const pageUrl = `${BASE_URL}/en/traiteur/${city.slug}`
  const cityFr = CITIES.find(c => c.slug === city.slug)

  // Maillage local : communes limitrophes (page anglaise si elle existe, sinon française)
  const neighbors = (CITY_NEIGHBORS[city.slug] || [])
    .map(slug => enCity(slug) || CITIES.find(c => c.slug === slug))
    .filter(Boolean)
    .slice(0, 4)

  // Pages petit-déjeuner et plateaux repas de la ville, si elles existent
  const pdjPage = PDJ_VILLES.find(p => p.slug === city.slug)
  const plateauxPage = (PLATEAUX_VILLES || []).find(p => p.slug === city.slug)
  const pdjHref = pdjPage && lienEn(`/petit-dejeuner-entreprise/${pdjPage.slug}`)
  const plateauxHref = plateauxPage && lienEn(`/plateaux-repas-entreprise/${plateauxPage.slug}`)

  // FAQ propre à la ville
  const faq = Array.isArray(city.faq) ? city.faq.filter(f => f && f.q && f.a) : []
  const faqLd = faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'en',
    mainEntity: faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FoodEstablishment'],
    name: "L'Écrin Traiteur",
    description: `Corporate caterer delivering in ${city.name}: breakfasts, lunch trays, cocktails, buffets and live food stations. Selected artisans, delivery from 6:30 am.`,
    url: pageUrl,
    telephone: '+33174542310',
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
    servesCuisine: 'French, artisan',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '06:00', closes: '22:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '09:00', closes: '21:00' },
    ],
    hasMenu: {
      '@type': 'Menu',
      name: 'Corporate catering services',
      inLanguage: 'en',
      hasMenuSection: [
        { '@type': 'MenuSection', name: 'Breakfasts & breaks', description: 'Butter pastries, Mado Paris madeleines, fruit baskets, coffee and tea delivered from 6:30 am.' },
        { '@type': 'MenuSection', name: 'Lunch trays & lunch boxes', description: 'Complete individual menus, starter, main and dessert, prepared the same morning.' },
        { '@type': 'MenuSection', name: 'Cocktails & buffets', description: 'Artisan savoury and sweet bites for receptions and afterworks.' },
        { '@type': 'MenuSection', name: 'Live food stations', description: 'Stations and bars prepared in front of your guests.' },
      ],
    },
  }

  const pageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageUrl,
    url: pageUrl,
    name: city.seoTitle || `Corporate catering in ${city.name}`,
    inLanguage: 'en',
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}${lienEn('/')}` },
      { '@type': 'ListItem', position: 2, name: 'Our towns', item: `${BASE_URL}${lienEn('/traiteur')}` },
      { '@type': 'ListItem', position: 3, name: `Catering in ${city.name}`, item: pageUrl },
    ],
  }

  return (
    <>
      <Navbar showBanner={true} />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      <main lang="en" style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero image pleine largeur ── */}
        <div className="city-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="city-hero" style={{ position: 'relative', width: '100%', height: 'clamp(440px, 52vw, 600px)', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src="/hero-bg.webp" alt={`Corporate catering in ${city.name}, L'Écrin Traiteur`} strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,12,9,0.92) 0%, rgba(16,12,9,0.74) 44%, rgba(16,12,9,0.32) 72%, rgba(16,12,9,0) 92%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="city-hero-text" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '640px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                  Corporate catering, {city.region}
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.015em', color: '#FFFFFF', marginBottom: '22px' }}>
                  Corporate catering <br />in {city.name}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', maxWidth: '460px', marginBottom: '32px' }}>
                  {city.heroDescription}
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
                  <a
                    href={lienEn('/creations/petits-dejeuners-et-pauses')}
                    className="en-hover-fade"
                    style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: '#FFFFFF', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
                  >
                    See our products →
                  </a>
                  <a
                    href={lienEn('/devis')}
                    className="en-hover-ghost"
                    style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.5)', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', background: 'transparent', transition: 'background 0.3s ease' }}
                  >
                    {t('nav.devis', 'en')}
                  </a>
                </div>

                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
                  {[t('info.livraison', 'en'), 'Order by 2 pm the day before', 'Selected artisans'].map(badge => (
                    <span key={badge} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.28)', padding: '6px 12px' }}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </header>
        </div>

        {/* ── Nos prestations, 3 cartes illustrées ── */}
        <div className="city-services" style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
              Our services in {city.name}
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
              Formats designed <br />for your events
            </h2>
          </div>
          <div className="city-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <a
                  href={lienEn(s.href)}
                  className="city-service-card en-hover-lift"
                  style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', overflow: 'hidden', boxShadow: '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)', transition: 'box-shadow 0.35s ease, transform 0.35s ease' }}
                >
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#F8F5EF' }}>
                    <Image fill sizes="(max-width: 768px) 100vw, 33vw" src={s.img} alt={s.label} style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '22px 22px 26px' }}>
                    <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '19px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {s.label}
                    </p>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '14px' }}>
                      {s.desc}
                    </p>
                    <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-deep)' }}>
                      {t('cta.decouvrir', 'en')} →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Liens contextuels vers les pages petit-déjeuner et plateaux repas de la ville ── */}
        {(pdjPage || plateauxPage) && (
          <div className="city-pdj" style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px 72px 0' }}>
            {pdjPage && (
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', textAlign: 'center' }}>
                An early meeting? Our page on{' '}
                <a href={pdjHref} style={{ color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  corporate breakfast in {city.name}
                </a>
                {' '}sets out the options, from €8 excl. VAT per person, delivered from 6:30 am.
              </p>
            )}
            {plateauxPage && (
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', textAlign: 'center', marginTop: pdjPage ? '10px' : 0 }}>
                A working lunch to serve on site? Our page on{' '}
                <a href={plateauxHref} style={{ color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  corporate lunch trays in {city.name}
                </a>
                {' '}presents the individual menus, from €28.90 excl. VAT per person.
              </p>
            )}
          </div>
        )}

        {/* ── Ils nous font confiance ── */}
        <div style={{ marginTop: '88px' }}>
          <LogosEn />
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
              Areas & neighbourhoods we cover
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', rowGap: '14px' }}>
              {(city.zones || []).map((zone, i) => {
                // Quartier lié : page anglaise si elle existe, sinon page française
                const quartierMatch = cityFr?.quartiers?.find(q => q.linkedZones?.includes(zone))
                const isLast = i === city.zones.length - 1
                return (
                  <span key={zone} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {quartierMatch ? (
                      <a href={lienEn(`/traiteur/${city.slug}/${quartierMatch.slug}`)} className="city-tag-link">
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
              {t('devis.occasion', 'en')}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', rowGap: '14px' }}>
              {OCCASIONS.map((o, i) => (
                <span key={o.slug} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <a href={lienEn(`/occasions/${o.slug}`)} className="city-tag-link">
                    {OCCASIONS_EN[o.slug] || o.name}
                  </a>
                  {i < OCCASIONS.length - 1 && <span className="city-tag-sep">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── FAQ propre à la ville ── */}
        {faq.length > 0 && (
          <section className="city-faq" style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 72px 0' }}>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, color: 'var(--text-primary)', margin: '0 0 28px', lineHeight: 1.2, textAlign: 'center' }}>
              Frequently asked questions in {city.name}
            </h2>
            {faq.map((item, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(17,17,17,0.08)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', margin: '0 0 8px', lineHeight: 1.5 }}>{item.q}</h3>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>{item.a}</p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }} />
          </section>
        )}

        {/* ── Maillage vers l'offre halal ── */}
        <HalalLineEn intro={`In ${city.name}, our `} paddingTop="44px" />

      </main>

      <RelatedLinks
        eyebrow="We also deliver nearby"
        title={`Corporate catering around ${city.name}`}
        items={neighbors.map(c => ({
          href: lienEn(`/traiteur/${c.slug}`),
          title: `Catering in ${c.name}`,
          meta: 'Nearby',
        }))}
        columns={4}
        cta="Discover →"
      />

      {/* ── Éditorial + arguments + CTA + article SEO ── */}
      <ClosingEn
        eyebrow={`Corporate catering in ${city.name}`}
        title={`The taste of real craft,\ndelivered in ${city.name}.`}
        body={city.businessContext || city.heroDescription}
        args={argsLieuEn(city.name, 'the neighbouring towns')}
        seoArticle={city.seoArticle}
      />

      {/* ── Lien vers toutes les villes ── */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px 64px', textAlign: 'center' }}>
        <a
          href={lienEn('/traiteur')}
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
          ← All the towns we deliver to
        </a>
      </div>

      <SurvolsEn />
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
          .city-pdj { padding: 28px 24px 0 !important; }
          .city-services-grid { grid-template-columns: 1fr !important; }
          .city-zones { padding: 36px 24px !important; }
          .city-occasions { padding: 40px 24px !important; }
          .city-faq { padding: 56px 24px 0 !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .city-hero-wrapper { padding: 32px 40px 0 !important; }
          .city-hero-text { padding: 0 40px !important; }
          .city-services { padding: 64px 40px 0 !important; }
          .city-pdj { padding: 32px 40px 0 !important; }
          .city-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .city-zones { padding: 40px !important; }
          .city-occasions { padding: 48px 40px !important; }
          .city-faq { padding: 64px 40px 0 !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
