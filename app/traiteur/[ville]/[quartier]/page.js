'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import Reveal from '../../../../components/Reveal'
import LogosSection from '../../../../components/LogosSection'
import CategoryClosing from '../../../../components/CategoryClosing'
import { CITIES } from '../../../../lib/citiesData'

const SERVICES = [
  {
    label: 'Petits-Déjeuners',
    desc: 'Viennoiseries et coffrets artisanaux, livrés dès 6h30.',
    href: '/creations/petits-dejeuners-et-pauses',
    img: '/creations-1.webp',
  },
  {
    label: 'Plateaux Repas',
    desc: 'Des plateaux composés pour vos déjeuners de travail.',
    href: '/creations/plateaux-repas',
    img: '/creations-4.webp',
  },
  {
    label: 'Cocktails & Buffets',
    desc: 'Pièces cocktail et buffets pour vos réceptions.',
    href: '/creations/cocktails-et-buffets',
    img: '/creations-3.webp',
  },
]

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
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lecrin-traiteur.fr' },
          { '@type': 'ListItem', position: 2, name: 'Nos villes', item: 'https://www.lecrin-traiteur.fr/traiteur' },
          { '@type': 'ListItem', position: 3, name: city.name, item: `https://www.lecrin-traiteur.fr/traiteur/${city.slug}` },
          { '@type': 'ListItem', position: 4, name: q.name, item: `https://www.lecrin-traiteur.fr/traiteur/${city.slug}/${q.slug}` },
        ],
      },
      {
        '@type': ['LocalBusiness', 'FoodEstablishment'],
        name: "L'Écrin Traiteur",
        description: `Traiteur d'entreprise livrant à ${q.name} (${city.name}) — petits-déjeuners, plateaux repas, cocktails, buffets et animations culinaires. Artisans sélectionnés, livraison dès 6h30.`,
        url: `https://www.lecrin-traiteur.fr/traiteur/${city.slug}/${q.slug}`,
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
        servesCuisine: 'Française artisanale',
      },
    ],
  }

  const QUARTIER_ARGS = [
    { icon: 'delivery', titre: `Livraison dès 6h30 à ${q.name}`, desc: `Nos livreurs desservent ${q.name} et ses environs, chaque matin en semaine.` },
    { icon: 'quality', titre: 'Artisans sélectionnés', desc: "Boulangers, pâtissiers et épiciers fins choisis pour leur savoir-faire, pas pour leur prix." },
    { icon: 'custom', titre: 'Commande avant 14h', desc: "Passez commande la veille avant 14h pour une livraison le lendemain matin dès 6h30." },
    { icon: 'support', titre: 'Facturation entreprise', desc: "Facture avec TVA et interlocuteur dédié pour vos commandes récurrentes ou volumes importants." },
  ]

  return (
    <>
      <Navbar showBanner={true} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero image pleine largeur ── */}
        <div className="q-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="q-hero" style={{ position: 'relative', width: '100%', height: 'clamp(420px, 48vw, 560px)', overflow: 'hidden' }}>
            <Image fill priority sizes="100vw" src="/hero-bg2.webp" alt={`Traiteur d'entreprise ${q.name}, ${city.name} — L'Écrin Traiteur`} style={{ objectFit: 'cover', objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,12,9,0.80) 0%, rgba(16,12,9,0.55) 42%, rgba(16,12,9,0.15) 70%, rgba(16,12,9,0) 88%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="q-hero-text" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '640px' }}>

                {/* Breadcrumb */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  {[
                    { label: 'Toutes nos villes', href: '/traiteur' },
                    { label: city.name, href: `/traiteur/${city.slug}` },
                  ].map((crumb) => (
                    <span key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <a href={crumb.href} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s ease' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                      >
                        {crumb.label}
                      </a>
                      <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px' }}>›</span>
                    </span>
                  ))}
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.04em' }}>
                    {q.name}
                  </span>
                </nav>

                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                  Traiteur d'entreprise, {city.name}
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4.4vw, 60px)', fontWeight: 400, lineHeight: 1.06, letterSpacing: '-0.015em', color: '#FFFFFF', marginBottom: '20px' }}>
                  Traiteur<br />{q.name}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', maxWidth: '460px', marginBottom: '30px' }}>
                  {q.heroDescription}
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
                    Obtenir un devis
                  </a>
                </div>
              </div>
            </Reveal>
          </header>
        </div>

        {/* ── Nos prestations ── */}
        <div className="q-services" style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '18px' }}>
              Nos prestations à {q.name}
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
              Des formats pensés<br />pour vos événements
            </h2>
          </div>
          <div className="q-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <a
                  href={s.href}
                  className="q-service-card"
                  style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', overflow: 'hidden', boxShadow: '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)', transition: 'box-shadow 0.35s ease, transform 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(17,17,17,0.04), 0 16px 40px rgba(17,17,17,0.09)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)' }}
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

        {/* ── Zones couvertes ── */}
        {q.linkedZones?.length > 0 && (
          <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid rgba(17,17,17,0.06)' }}>
            <div className="q-zones" style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 72px' }}>
              <p style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(17,17,17,0.4)',
                marginBottom: '16px',
              }}>
                Zones couvertes dans ce secteur
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
            <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '28px', lineHeight: 1.2, textAlign: 'center' }}>
              Questions fréquentes
            </p>
            {allFaq.map((item, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(17,17,17,0.08)', padding: '20px 0' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.5 }}>{item.q}</p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item.a}</p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }} />
          </div>
        )}

      </main>

      {/* ── Éditorial + arguments + CTA + article SEO ── */}
      <CategoryClosing
        eyebrow={`Traiteur d'entreprise à ${q.name}`}
        title={`Le goût de l'artisanat,\nlivré à ${q.name}.`}
        body={q.heroDescription}
        args={QUARTIER_ARGS}
        seoArticle={q.seoArticle}
      />

      {/* ── Navigation retour ── */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px 64px', display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href={`/traiteur/${city.slug}`}
          style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}
        >
          ← Retour à {city.name}
        </a>
        <a
          href="/traiteur"
          style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', textDecoration: 'none', borderBottom: '1px solid rgba(17,17,17,0.2)', paddingBottom: '2px' }}
        >
          Toutes nos villes →
        </a>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .q-service-card { border-radius: 4px !important; }
        .city-tag-plain {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.02em;
          padding: 2px 0;
        }
        .city-tag-sep {
          font-family: 'Neue Montreal', sans-serif;
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
