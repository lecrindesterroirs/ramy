'use client'

import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import DevisRapide from '../../../../components/DevisRapide'
import Reveal from '../../../../components/Reveal'
import RelatedLinks from '../../../../components/RelatedLinks'
import Breadcrumb from '../../../../components/Breadcrumb'
import BusinessJsonLd from '../../../../components/BusinessJsonLd'
import { FORMULES } from '../page'

const GALERIE = [
  '/hero-cocktail.webp',
  '/prod-atelier-charcuterie.webp',
  '/prod-atelier-saumon.webp',
  '/prod-atelier-lobster.webp',
  '/prod-bar-mocktails.webp',
  '/prod-atelier-fromages.webp',
  '/prod-atelier-desserts.webp',
  '/prod-bar-fruits.webp',
  '/prod-fontaine-chocolat.webp',
]

function Colonne({ titre, items, accent }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '10px', marginBottom: '18px' }}>
        <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, color: '#111111' }}>{titre}</h3>
        <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent }}>{items.length} pièces</span>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '13px', padding: 0, margin: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.45, color: '#2A2621' }}>
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CocktailDetail() {
  const { slug } = useParams()
  const f = FORMULES.find(x => x.key === slug)
  if (!f) notFound()

  const related = FORMULES.filter(x => x.key !== f.key)
    .map(x => ({ href: `/creations/cocktails/${x.key}`, title: `Cocktail ${x.label}`, meta: 'Formule cocktail', img: x.img }))

  const BASE = 'https://www.lecrin-traiteur.fr'
  const nomFormule = `Cocktail ${f.label}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Cocktails', item: `${BASE}/creations/cocktails` },
          { '@type': 'ListItem', position: 3, name: nomFormule },
        ],
      },
      {
        '@type': 'Product',
        name: nomFormule,
        description: `Formule cocktail ${f.label} · ${f.pieces} pièces salées et sucrées façonnées à la main, pour vos réceptions et afterworks d'entreprise à Paris et en Île-de-France.`,
        ...(f.img ? { image: `${BASE}${f.img}` } : {}),
        brand: { '@type': 'Brand', name: "L'Écrin Traiteur" },
        category: "Cocktail & Buffet d'entreprise",
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'EUR',
          price: String(f.prix).replace(',', '.'),
          seller: { '@type': 'Organization', name: "L'Écrin Traiteur" },
          areaServed: 'Île-de-France',
          url: `${BASE}/devis`,
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BusinessJsonLd />
      <Navbar showBanner={true} />
      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Cocktails', href: '/creations/cocktails' }, { label: nomFormule }]} />

        {/* ── Galerie éditoriale, l'ambiance (d'abord, pour créer l'envie) ── */}
        <section style={{ background: '#F5F1E8', padding: '56px 0 96px' }}>
          <Reveal mode="mount" y={16}>
            <div className="ckd-shell" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 72px 44px', textAlign: 'center' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '12px' }}>
                En images
              </p>
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.15, color: '#111111', marginBottom: '14px' }}>
                {nomFormule}, l&apos;art de recevoir
              </h1>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: '#6E675F', maxWidth: '540px', margin: '0 auto' }}>
                Des bouchées façonnées à la main, un dressage soigné, une atmosphère qui fait la différence, l&apos;esprit de vos réceptions et afterworks.
              </p>
            </div>
          </Reveal>

          <div className="ckd-gallery" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 72px', columns: 3, columnGap: '14px' }}>
            {GALERIE.map((src, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <div className="ckd-gallery-item" style={{ breakInside: 'avoid', marginBottom: '14px', overflow: 'hidden' }}>
                  <img src={src} alt="Réception L'Écrin" loading="lazy" style={{ width: '100%', display: 'block', transition: 'transform 0.7s ease' }} />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Composition : Salé / Sucré (sous la galerie) ── */}
        <Reveal>
          <div className="ckd-shell" style={{ maxWidth: '1280px', margin: '0 auto', padding: '72px 72px 0', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '12px' }}>
              La composition
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 400, lineHeight: 1.15, color: '#111111' }}>
              {f.pieces} pièces façonnées à la main
            </h2>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="ckd-shell ckd-compo" style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 72px 24px' }}>
            <Colonne titre="Salé" items={f.sale} accent="#5A7247" />
            <div style={{ height: '36px' }} />
            <Colonne titre="Sucré" items={f.sucre} accent="#C08A3E" />
          </div>
        </Reveal>

        {/* ── Article SEO unique par formule ── */}
        {f.seoHtml && (
          <Reveal>
            <section className="ckd-shell" style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 72px 0' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '12px' }}>
                Cocktails · Traiteur entreprise
              </p>
              <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 400, lineHeight: 1.15, color: '#111111', marginBottom: '32px' }}>
                {f.seoTitle}
              </h2>
              <div className="ckd-article-body" dangerouslySetInnerHTML={{ __html: f.seoHtml }} />
            </section>
          </Reveal>
        )}

        {/* ── Devis + retour ── */}
        <section className="ckd-shell" style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 72px 96px' }}>
          <DevisRapide defaultPrestation="Cocktail dînatoire" titre="Un cocktail à organiser ?" sousTitre="Répondez en 30 secondes, devis personnalisé sous 24h." />
          <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
            <Link href="/creations/cocktails" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              ← Retour aux cocktails
            </Link>
          </div>
        </section>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .ckd-gallery-item { border-radius: 4px !important; }
        .ckd-gallery-item:hover img { transform: scale(1.05); }
        .ckd-article-body p { font-family: 'Neue Montreal', sans-serif; font-size: 15px; line-height: 1.85; color: #6E675F; margin-bottom: 18px; }
        .ckd-article-body h2 { font-family: 'Baskerville Display PT', Georgia, serif; font-size: clamp(20px, 2vw, 28px); font-weight: 400; color: #111111; margin: 40px 0 14px; line-height: 1.15; }
        .ckd-article-body strong { color: #111111; font-weight: 500; }
        @media (max-width: 1100px) {
          .ckd-shell { padding-left: 48px !important; padding-right: 48px !important; }
          .ckd-compo { gap: 48px !important; }
          .ckd-gallery { columns: 2 !important; padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 768px) {
          .ckd-shell { padding-left: 24px !important; padding-right: 24px !important; }
          .ckd-compo { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ckd-gallery { columns: 1 !important; padding-left: 24px !important; padding-right: 24px !important; }
        }
      ` }} />

      <RelatedLinks eyebrow="Autres formules" title="Nos autres cocktails" items={related} columns={3} />

      <Footer />
    </>
  )
}
