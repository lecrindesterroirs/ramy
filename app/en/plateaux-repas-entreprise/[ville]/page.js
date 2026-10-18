import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import Reveal from '../../../../components/Reveal'
import Breadcrumb from '../../../../components/Breadcrumb'
import ParallaxImage from '../../../../components/ParallaxImage'
import { PLATEAUX_VILLES } from '../../../../lib/plateauxVillesData'
import { PRODUITS, prixMenu } from '../../../creations/plateaux-repas/data'
import { enPlateauxVille } from '../../../../lib/en/villes'
import { enPlateauRepas } from '../../../../lib/en/produits/plateauxRepas'
import { businessNode, BUSINESS_ID } from '../../../../lib/site'
import {
  BASE_URL, lienEn, prixEn, nombreEn, HalalLineEn, ClosingEn, SurvolsEn,
} from '../../_villes/composants'

/*
  Page « plateaux repas d'entreprise + ville » en anglais : même gabarit que
  app/plateaux-repas-entreprise/[ville]/page.js. Textes lus dans
  lib/en/villes ; noms des plateaux et des formules, prix et photos dans les
  données françaises ; composition des plateaux en anglais quand
  lib/en/produits/plateauxRepas la donne. Rendue côté serveur.
*/

export default async function EnPlateauxVillePage({ params }) {
  const { ville } = await params
  const city = enPlateauxVille(ville)
  if (!city) notFound()

  // Autres communes : page anglaise si elle existe, sinon page française
  const otherCities = PLATEAUX_VILLES
    .filter(c => c.slug !== city.slug)
    .map(c => enPlateauxVille(c.slug) || c)

  // Plateaux mis en avant : ids de la carte réelle (app/creations/plateaux-repas/data.js)
  const selection = (city.selection || [])
    .map(s => ({ ...s, produit: PRODUITS.find(p => p.id === s.id) }))
    .filter(s => s.produit)

  const pageUrl = `${BASE_URL}/en/plateaux-repas-entreprise/${city.slug}`
  const categorieHref = lienEn('/creations/plateaux-repas')

  const faq = (Array.isArray(city.faq) ? city.faq : [])
    .map(f => ({ q: f.q || f.name, a: f.a || f.answer }))
    .filter(f => f.q && f.a)

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}${lienEn('/')}` },
      { '@type': 'ListItem', position: 2, name: 'Lunch trays', item: `${BASE_URL}${categorieHref}` },
      { '@type': 'ListItem', position: 3, name: `Lunch trays in ${city.name}`, item: pageUrl },
    ],
  }

  // Service localisé (ville) rattaché à l'entité #business
  const serviceLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: city.metaTitle || `Corporate lunch trays in ${city.name}`,
        inLanguage: 'en',
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: `Corporate lunch trays in ${city.name}`,
        serviceType: 'Corporate lunch tray delivery',
        description: city.metaDescription,
        url: pageUrl,
        areaServed: { '@type': 'City', name: city.name },
        provider: { '@id': BUSINESS_ID },
      },
      businessNode(),
    ],
  }

  const faqLd = faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: city.metaTitle,
    inLanguage: 'en',
    mainEntity: faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  return (
    <>
      <Navbar showBanner={true} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      <main lang="en" style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero image pleine largeur ── */}
        <div className="plv-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="plv-hero" style={{ position: 'relative', width: '100%', height: 'clamp(420px, 50vw, 560px)', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src="/hero-plateaux-essentiel.webp" alt={`Corporate lunch trays in ${city.name}, L'Écrin Traiteur`} strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,12,9,0.88) 0%, rgba(16,12,9,0.68) 44%, rgba(16,12,9,0.28) 72%, rgba(16,12,9,0) 92%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="plv-hero-text" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '620px' }}>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                  Corporate lunch trays, {city.region}
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(32px, 4.2vw, 58px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.015em', color: '#FFFFFF', marginBottom: '22px' }}>
                  Corporate lunch trays{' '}<br />in {city.name}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', maxWidth: '460px', marginBottom: '32px' }}>
                  {city.heroDescription}
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href={lienEn('/devis')}
                    style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: '#FFFFFF', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                  >
                    Get a quote →
                  </a>
                  <a
                    href={lienEn(city.cityHref)}
                    style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.5)', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                  >
                    All our services in {city.name}
                  </a>
                </div>
              </div>
            </Reveal>
          </header>
        </div>

        <Breadcrumb maxWidth="1440px" items={[{ label: 'Home', href: lienEn('/') }, { label: 'Lunch trays', href: categorieHref }, { label: city.name }]} jsonLd={false} />

        {/* ── Trois niveaux de prix ── */}
        <div className="plv-formules" style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
              Our trays in {city.name}
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
              Six complete menus, three price levels
            </h2>
          </div>
          <div className="plv-formules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {city.formules.map((f, i) => (
              <Reveal key={f.nom} delay={i * 90}>
                <div style={{ background: 'var(--bg-secondary)', padding: '32px 28px', border: '1px solid rgba(17,17,17,0.08)', height: '100%' }}>
                  <p style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    {f.nom}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', fontWeight: 600, color: 'var(--accent-deep)', marginBottom: '14px' }}>
                    {prixEn(f.prix)}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Sélection pour la ville : composition réelle des plateaux ── */}
        {selection.length > 0 && (
          <div className="plv-selection" style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 72px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
                In {city.name}
              </p>
              <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
                Three trays to start with
              </h2>
            </div>
            <div className="plv-selection-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {selection.map(({ id, pourquoi, produit }, i) => {
                // Composition en anglais si la fiche est traduite, sinon en français
                const en = enPlateauRepas(id) || {}
                const composition = [en.entree || produit.entree, en.plat || produit.plat, en.dessert || produit.dessert].filter(Boolean)
                return (
                  <Reveal key={id} delay={i * 90}>
                    <a
                      href={lienEn(`/creations/plateaux-repas/${id}`)}
                      style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', overflow: 'hidden', boxShadow: '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)', height: '100%' }}
                    >
                      <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#F8F5EF' }}>
                        <Image fill sizes="(max-width: 768px) 100vw, 33vw" src={produit.img} alt={`${produit.nom}, corporate lunch tray`} style={{ objectFit: 'cover' }} />
                      </div>
                      <div style={{ padding: '22px 22px 26px' }}>
                        <p style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '4px' }}>
                          {produit.nom}
                        </p>
                        <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', fontWeight: 600, color: 'var(--accent-deep)', marginBottom: '12px' }}>
                          €{nombreEn(prixMenu(produit))} excl. VAT per person
                        </p>
                        <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '12px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '12px' }}>
                          {composition.join(' · ')}
                        </p>
                        <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-primary)' }}>
                          {pourquoi}
                        </p>
                      </div>
                    </a>
                  </Reveal>
                )
              })}
            </div>
            <p style={{ textAlign: 'center', marginTop: '28px' }}>
              <a href={categorieHref} style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
                See all six trays →
              </a>
            </p>
          </div>
        )}

      </main>

      {/* ── Éditorial + article SEO ── */}
      <ClosingEn
        eyebrow={`Corporate lunch trays in ${city.name}`}
        title={`A complete lunch,\ndelivered on time in ${city.name}.`}
        body={city.heroDescription}
        seoArticle={city.seoArticle}
      />

      {/* ── Maillage vers l'offre halal ── */}
      <HalalLineEn intro={`For your lunch trays in ${city.name}, our `} paddingTop="0px" paddingBottom="36px" maxWidth="760px" />

      {/* ── Maillage : mêmes plateaux dans les autres communes servies ── */}
      {otherCities.length > 0 && (
        <nav aria-label="Corporate lunch trays in other towns" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px 40px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', marginBottom: '16px' }}>
            Also delivered in nearby towns
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 22px' }}>
            {otherCities.map(c => (
              <a key={c.slug} href={lienEn(`/plateaux-repas-entreprise/${c.slug}`)} style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                Corporate lunch trays in {c.name}
              </a>
            ))}
          </div>
        </nav>
      )}

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px 64px', textAlign: 'center' }}>
        <a
          href={categorieHref}
          style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}
        >
          ← All our lunch trays
        </a>
      </div>

      <SurvolsEn />
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .plv-hero-wrapper { padding: 20px 20px 0 !important; }
          .plv-hero { min-height: 480px !important; height: 68vh !important; }
          .plv-hero-text { padding: 0 28px !important; max-width: 100% !important; }
          .plv-formules { padding: 40px 24px 0 !important; }
          .plv-selection { padding: 48px 24px 0 !important; }
          .plv-formules-grid, .plv-selection-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .plv-hero-wrapper { padding: 32px 40px 0 !important; }
          .plv-hero-text { padding: 0 40px !important; }
          .plv-formules { padding: 48px 40px 0 !important; }
          .plv-selection { padding: 56px 40px 0 !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
