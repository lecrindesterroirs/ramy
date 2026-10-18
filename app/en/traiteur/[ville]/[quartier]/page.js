import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../../../../../components/Navbar'
import Footer from '../../../../../components/Footer'
import Reveal from '../../../../../components/Reveal'
import ParallaxImage from '../../../../../components/ParallaxImage'
import { enCity, enQuartier } from '../../../../../lib/en/villes'
import { t } from '../../../../../lib/en/interface'
import {
  BASE_URL, lienEn, argsLieuEn, HalalLineEn, LogosEn, ClosingEn, SurvolsEn,
} from '../../../_villes/composants'

/*
  Page quartier en anglais : même gabarit que
  app/traiteur/[ville]/[quartier]/page.js. Textes lus dans lib/en/villes,
  zones (linkedZones) dans les données françaises. Rendue côté serveur.
*/

const SERVICES = [
  {
    label: 'Breakfasts',
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

// FAQ commune à tous les quartiers (universalFaq du français)
const UNIVERSAL_FAQ = [
  { q: 'Do you take last-minute orders?', a: 'Yes. We take orders until 10 am the same morning from the day\'s available selection: pastry platters, madeleines, fruit skewers. For the full catalogue, and to be sure of getting what you want, order before 2 pm the day before.' },
  { q: 'What are your delivery hours?', a: 'We deliver from 6:30 am until 10 am, depending on available slots. Tell us your preferred time when you order.' },
]

export default async function EnQuartierPage({ params }) {
  const { ville, quartier } = await params
  const city = enCity(ville)
  const q = enQuartier(ville, quartier)
  if (!city || !q) notFound()

  const pageUrl = `${BASE_URL}/en/traiteur/${city.slug}/${q.slug}`
  const allFaq = [...(Array.isArray(q.faq) ? q.faq.filter(f => f && f.q && f.a) : []), ...UNIVERSAL_FAQ]

  // JSON-LD WebPage + FAQ + BreadcrumbList + LocalBusiness
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: q.seoTitle || `Corporate catering in ${q.name}, ${city.name}`,
        inLanguage: 'en',
      },
      {
        '@type': 'FAQPage',
        inLanguage: 'en',
        mainEntity: allFaq.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}${lienEn('/')}` },
          { '@type': 'ListItem', position: 2, name: 'Our towns', item: `${BASE_URL}${lienEn('/traiteur')}` },
          { '@type': 'ListItem', position: 3, name: city.name, item: `${BASE_URL}/en/traiteur/${city.slug}` },
          { '@type': 'ListItem', position: 4, name: q.name, item: pageUrl },
        ],
      },
      {
        '@type': ['LocalBusiness', 'FoodEstablishment'],
        name: "L'Écrin Traiteur",
        description: `Corporate caterer delivering in ${q.name} (${city.name}): breakfasts, lunch trays, cocktails, buffets and live food stations. Selected artisans, delivery from 6:30 am.`,
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
        areaServed: { '@type': 'Place', name: `${q.name}, ${city.name}` },
        priceRange: '€€',
        servesCuisine: 'French, artisan',
      },
    ],
  }

  return (
    <>
      <Navbar showBanner={true} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main lang="en" style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero image pleine largeur ── */}
        <div className="q-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="q-hero" style={{ position: 'relative', width: '100%', height: 'clamp(420px, 48vw, 560px)', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src="/hero-bg2.webp" alt={`Corporate catering in ${q.name}, ${city.name}, L'Écrin Traiteur`} strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,12,9,0.80) 0%, rgba(16,12,9,0.55) 42%, rgba(16,12,9,0.15) 70%, rgba(16,12,9,0) 88%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="q-hero-text" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '640px' }}>

                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  {[
                    { label: 'All our towns', href: lienEn('/traiteur') },
                    { label: city.name, href: `/en/traiteur/${city.slug}` },
                  ].map((crumb) => (
                    <span key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <a href={crumb.href} className="en-hover-crumb" style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 400, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s ease' }}>
                        {crumb.label}
                      </a>
                      <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px' }}>›</span>
                    </span>
                  ))}
                  <span style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, color: 'var(--accent-deep)', letterSpacing: '0.04em' }}>
                    {q.name}
                  </span>
                </nav>

                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                  Corporate catering, {city.name}
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(32px, 4.4vw, 60px)', fontWeight: 400, lineHeight: 1.06, letterSpacing: '-0.015em', color: '#FFFFFF', marginBottom: '20px' }}>
                  Corporate catering <br />in {q.name}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', maxWidth: '460px', marginBottom: '30px' }}>
                  {q.heroDescription}
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href={lienEn('/creations/petits-dejeuners-et-pauses')}
                    className="en-hover-fade"
                    style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: '#FFFFFF', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
                  >
                    See our products →
                  </a>
                  <a
                    href={lienEn('/devis')}
                    className="en-hover-ghost"
                    style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.5)', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', background: 'transparent', transition: 'background 0.3s ease' }}
                  >
                    {t('nav.devis', 'en')}
                  </a>
                </div>
              </div>
            </Reveal>
          </header>
        </div>

        {/* ── Nos prestations ── */}
        <div className="q-services" style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
              Our services in {q.name}
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
              Formats designed <br />for your events
            </h2>
          </div>
          <div className="q-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <a
                  href={lienEn(s.href)}
                  className="q-service-card en-hover-lift"
                  style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', overflow: 'hidden', boxShadow: '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)', transition: 'box-shadow 0.35s ease, transform 0.35s ease' }}
                >
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#F8F5EF' }}>
                    <Image fill sizes="(max-width: 768px) 100vw, 33vw" src={s.img} alt={s.label} style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '22px 22px 26px' }}>
                    <p style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '19px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {s.label}
                    </p>
                    <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '14px' }}>
                      {s.desc}
                    </p>
                    <span style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-deep)' }}>
                      {t('cta.decouvrir', 'en')} →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Ils nous font confiance ── */}
        <div style={{ marginTop: '88px' }}>
          <LogosEn />
        </div>

        {/* ── Zones couvertes ── */}
        {q.linkedZones?.length > 0 && (
          <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid rgba(17,17,17,0.06)' }}>
            <div className="q-zones" style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 72px' }}>
              <p style={{
                fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(17,17,17,0.4)',
                marginBottom: '16px',
              }}>
                Areas covered in this district
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', rowGap: '14px' }}>
                {q.linkedZones.map((zone, i) => (
                  <span key={zone} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <span className="city-tag-plain" style={{ color: 'var(--text-primary)' }}>{zone}</span>
                    {i < q.linkedZones.length - 1 && <span className="city-tag-sep">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── FAQ ── */}
        {allFaq.length > 0 && (
          <div className="q-faq" style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 72px 0' }}>
            <p style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '28px', lineHeight: 1.2, textAlign: 'center' }}>
              Frequently asked questions
            </p>
            {allFaq.map((item, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(17,17,17,0.08)', padding: '20px 0' }}>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.5 }}>{item.q}</p>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item.a}</p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }} />
          </div>
        )}

        {/* ── Maillage vers l'offre halal ── */}
        <HalalLineEn intro={`In ${q.name}, our `} paddingTop="44px" />

      </main>

      {/* ── Éditorial + arguments + CTA + article SEO ── */}
      <ClosingEn
        eyebrow={`Corporate catering in ${q.name}`}
        title={`The taste of real craft,\ndelivered in ${q.name}.`}
        body={q.heroDescription}
        args={argsLieuEn(q.name, 'the surrounding area')}
        seoArticle={q.seoArticle}
      />

      {/* ── Navigation retour ── */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px 64px', display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href={`/en/traiteur/${city.slug}`}
          style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}
        >
          ← Back to {city.name}
        </a>
        <a
          href={lienEn('/traiteur')}
          style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', textDecoration: 'none', borderBottom: '1px solid rgba(17,17,17,0.2)', paddingBottom: '2px' }}
        >
          All our towns →
        </a>
      </div>

      <SurvolsEn />
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .q-service-card { border-radius: 4px !important; }
        .city-tag-plain {
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.02em;
          padding: 2px 0;
        }
        .city-tag-sep {
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif;
          font-size: 13px;
          color: rgba(17,17,17,0.25);
          margin: 0 14px;
        }
        @media (max-width: 768px) {
          .q-hero-wrapper { padding: 20px 20px 0 !important; }
          .q-hero { min-height: 560px !important; height: 72vh !important; }
          .q-hero-text { padding: 0 28px !important; max-width: 100% !important; }
          .q-services { padding: 56px 24px 0 !important; }
          .q-services-grid { grid-template-columns: 1fr !important; }
          .q-zones { padding: 36px 24px !important; }
          .q-faq { padding: 56px 24px 0 !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .q-hero-wrapper { padding: 32px 40px 0 !important; }
          .q-hero-text { padding: 0 40px !important; }
          .q-services { padding: 64px 40px 0 !important; }
          .q-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .q-zones { padding: 40px !important; }
          .q-faq { padding: 64px 40px 0 !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
