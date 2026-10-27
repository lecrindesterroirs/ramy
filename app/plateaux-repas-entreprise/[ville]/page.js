import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import Breadcrumb from '../../../components/Breadcrumb'
import CategoryClosing from '../../../components/CategoryClosing'
import ParallaxImage from '../../../components/ParallaxImage'
import { FAQSchema } from '../../../components/FAQSchema'
import { PLATEAUX_VILLES } from '../../../lib/plateauxVillesData'
import { PRODUITS, prixMenu } from '../../creations/plateaux-repas/data'
import { businessNode, BUSINESS_ID } from '../../../lib/site'
import HalalLine from '../../../components/HalalLine'

export default function PlateauxVillePage({ params }) {
  const { ville } = params
  const city = PLATEAUX_VILLES.find(c => c.slug === ville)
  if (!city) notFound()

  const otherCities = PLATEAUX_VILLES.filter(c => c.slug !== city.slug)

  // Plateaux mis en avant : ids de la carte réelle (app/creations/plateaux-repas/data.js)
  const selection = (city.selection || [])
    .map(s => ({ ...s, produit: PRODUITS.find(p => p.id === s.id) }))
    .filter(s => s.produit)

  const pageUrl = `https://www.lecrin-traiteur.fr/plateaux-repas-entreprise/${city.slug}`

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lecrin-traiteur.fr' },
      { '@type': 'ListItem', position: 2, name: 'Plateaux repas', item: 'https://www.lecrin-traiteur.fr/creations/plateaux-repas' },
      { '@type': 'ListItem', position: 3, name: `Plateaux repas ${city.name}`, item: pageUrl },
    ],
  }

  // Service localisé (ville) rattaché à l'entité #business
  const serviceLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: `Plateaux repas d'entreprise à ${city.name}`,
        serviceType: "Plateaux repas d'entreprise livrés",
        description: city.metaDescription,
        url: pageUrl,
        areaServed: { '@type': 'City', name: city.name },
        provider: { '@id': BUSINESS_ID },
      },
      businessNode(),
    ],
  }

  return (
    <>
      <Navbar showBanner={true} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <FAQSchema faqs={city.faq} pageTitle={city.metaTitle} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero image pleine largeur ── */}
        <div className="plv-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 0 0' }}>
          <header className="plv-hero" style={{ position: 'relative', width: '100%', height: 'clamp(420px, 50vw, 560px)', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src="/hero-plateaux-essentiel.webp" alt={`Plateaux repas d'entreprise ${city.name}, L'Écrin Traiteur`} strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,12,9,0.88) 0%, rgba(16,12,9,0.68) 44%, rgba(16,12,9,0.28) 72%, rgba(16,12,9,0) 92%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="plv-hero-text" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 var(--retrait)', maxWidth: '620px' }}>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                  Plateaux repas d'entreprise, {city.region}
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(32px, 4.2vw, 58px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.015em', color: '#FFFFFF', marginBottom: '22px' }}>
                  Plateaux repas d'entreprise{' '}<br />à {city.name}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', maxWidth: '460px', marginBottom: '32px' }}>
                  {city.heroDescription}
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href="/devis"
                    style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: '#FFFFFF', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                  >
                    Obtenir un devis →
                  </a>
                  <a
                    href={city.cityHref}
                    style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.5)', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                  >
                    Toutes nos prestations à {city.name}
                  </a>
                </div>
              </div>
            </Reveal>
          </header>
        </div>

        <Breadcrumb maxWidth="1440px" items={[{ label: 'Accueil', href: '/' }, { label: 'Plateaux repas', href: '/creations/plateaux-repas' }, { label: city.name }]} jsonLd={false} />

        {/* ── Trois niveaux de prix ── */}
        <div className="plv-formules" style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
              Nos plateaux à {city.name}
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
              Six menus complets, trois niveaux de prix
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
                    {f.prix}
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
                À {city.name}
              </p>
              <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
                Trois plateaux pour commencer
              </h2>
            </div>
            <div className="plv-selection-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {selection.map(({ id, pourquoi, produit }, i) => (
                <Reveal key={id} delay={i * 90}>
                  <a
                    href={`/creations/plateaux-repas/${id}`}
                    style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', overflow: 'hidden', boxShadow: '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)', height: '100%' }}
                  >
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#F8F5EF' }}>
                      <Image fill sizes="(max-width: 768px) 100vw, 33vw" src={produit.img} alt={`${produit.nom}, plateau repas d'entreprise`} style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '22px 22px 26px' }}>
                      <p style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        {produit.nom}
                      </p>
                      <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', fontWeight: 600, color: 'var(--accent-deep)', marginBottom: '12px' }}>
                        {prixMenu(produit)} € HT par personne
                      </p>
                      <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '12px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '12px' }}>
                        {produit.entree} · {produit.plat} · {produit.dessert}
                      </p>
                      <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-primary)' }}>
                        {pourquoi}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '28px' }}>
              <a href="/creations/plateaux-repas" style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
                Voir les six plateaux →
              </a>
            </p>
          </div>
        )}

      </main>

      {/* ── Éditorial + article SEO ── */}
      <CategoryClosing
        eyebrow={`Plateaux repas d'entreprise à ${city.name}`}
        title={`Un déjeuner complet,\nlivré à l'heure à ${city.name}.`}
        body={city.heroDescription}
        seoArticle={city.seoArticle}
      />

      {/* ── Maillage vers l'offre halal ── */}
      <HalalLine intro={`Pour vos plateaux repas à ${city.name}, notre offre `} paddingTop="0px" paddingBottom="36px" maxWidth="760px" />

      {/* ── Maillage : mêmes plateaux dans les autres communes servies ── */}
      {otherCities.length > 0 && (
        <nav aria-label="Plateaux repas d'entreprise dans d'autres communes" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px 40px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', marginBottom: '16px' }}>
            Aussi livré dans les communes voisines
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 22px' }}>
            {otherCities.map(c => (
              <a key={c.slug} href={`/plateaux-repas-entreprise/${c.slug}`} style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                Plateaux repas d'entreprise à {c.name}
              </a>
            ))}
          </div>
        </nav>
      )}

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px 64px', textAlign: 'center' }}>
        <a
          href="/creations/plateaux-repas"
          style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}
        >
          ← Tous nos plateaux repas
        </a>
      </div>

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
