'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import Breadcrumb from '../../../components/Breadcrumb'
import CategoryClosing from '../../../components/CategoryClosing'
import ParallaxImage from '../../../components/ParallaxImage'
import { FAQSchema } from '../../../components/FAQSchema'
import { PDJ_VILLES } from '../../../lib/pdjVillesData'

export default function PdjVillePage() {
  const { ville } = useParams()
  const city = PDJ_VILLES.find(c => c.slug === ville)
  if (!city) notFound()

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lecrin-traiteur.fr' },
      { '@type': 'ListItem', position: 2, name: 'Petits-déjeuners & Pauses', item: 'https://www.lecrin-traiteur.fr/creations/petits-dejeuners-et-pauses' },
      { '@type': 'ListItem', position: 3, name: `Petit-déjeuner ${city.name}`, item: `https://www.lecrin-traiteur.fr/petit-dejeuner-entreprise/${city.slug}` },
    ],
  }

  return (
    <>
      <Navbar showBanner={true} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <FAQSchema faqs={city.faq} pageTitle={city.metaTitle} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero image pleine largeur ── */}
        <div className="pdj-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="pdj-hero" style={{ position: 'relative', width: '100%', height: 'clamp(420px, 50vw, 560px)', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src="/hero-petitdej.webp" alt={`Petit-déjeuner d'entreprise ${city.name}, L'Écrin Traiteur`} strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,12,9,0.88) 0%, rgba(16,12,9,0.68) 44%, rgba(16,12,9,0.28) 72%, rgba(16,12,9,0) 92%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="pdj-hero-text" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '620px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                  Petit-déjeuner d'entreprise, {city.region}
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4.2vw, 58px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.015em', color: '#FFFFFF', marginBottom: '22px' }}>
                  Petit-déjeuner d'entreprise<br />à {city.name}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', maxWidth: '460px', marginBottom: '32px' }}>
                  {city.heroDescription}
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href="/devis"
                    style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: '#FFFFFF', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                  >
                    Obtenir un devis →
                  </a>
                  <a
                    href={city.cityHref}
                    style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.5)', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                  >
                    Toutes nos prestations à {city.name}
                  </a>
                </div>
              </div>
            </Reveal>
          </header>
        </div>

        <Breadcrumb maxWidth="1440px" items={[{ label: 'Accueil', href: '/' }, { label: 'Petits-déjeuners & Pauses', href: '/creations/petits-dejeuners-et-pauses' }, { label: city.name }]} />

        {/* ── Formules & tarifs ── */}
        <div className="pdj-formules" style={{ maxWidth: '1024px', margin: '0 auto', padding: '64px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
              Nos formules à {city.name}
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
              Deux formules, livrées dès 6h30
            </h2>
          </div>
          <div className="pdj-formules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {city.formules.map((f, i) => (
              <Reveal key={f.nom} delay={i * 90}>
                <div style={{ background: 'var(--bg-secondary)', padding: '32px 28px', border: '1px solid rgba(17,17,17,0.08)' }}>
                  <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    {f.nom}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', fontWeight: 600, color: 'var(--accent-deep)', marginBottom: '14px' }}>
                    {f.prix}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </main>

      {/* ── Éditorial + article SEO + FAQ visuelle ── */}
      <CategoryClosing
        eyebrow={`Petit-déjeuner d'entreprise à ${city.name}`}
        title={`Le goût de l'artisanat,\nlivré dès 6h30 à ${city.name}.`}
        body={city.heroDescription}
        seoArticle={city.seoArticle}
      />

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px 64px', textAlign: 'center' }}>
        <a
          href="/creations/petits-dejeuners-et-pauses"
          style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}
        >
          ← Toutes nos formules petit-déjeuner
        </a>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .pdj-hero-wrapper { padding: 20px 20px 0 !important; }
          .pdj-hero { min-height: 480px !important; height: 68vh !important; }
          .pdj-hero-text { padding: 0 28px !important; max-width: 100% !important; }
          .pdj-formules { padding: 40px 24px 0 !important; }
          .pdj-formules-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .pdj-hero-wrapper { padding: 32px 40px 0 !important; }
          .pdj-hero-text { padding: 0 40px !important; }
          .pdj-formules { padding: 48px 40px 0 !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
