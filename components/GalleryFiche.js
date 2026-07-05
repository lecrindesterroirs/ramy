'use client'

import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import DevisRapide from './DevisRapide'

/*
  Fiche détail réutilisable — structure "Petit-déjeuner" (référence DA du site).
  Photo à gauche (galerie optionnelle si plusieurs visuels), logo + titre centrés
  à droite, description, composition/sections, puis prix + CTA centrés.

  Props :
   - title, subtitle       string
   - img                   string
   - gallery               string[]  optionnel — si length > 1, affiche les miniatures
   - description           string|null   paragraphe (ingrédients, présentation…)
   - sections              [{label, value}]  ex entrée/plat/dessert
   - listLabel / listItems string / string[]  ex recettes, accompagnements inclus
   - allergens             string[]  affiché en "Contient : ..."
   - price                 string|null   déjà formaté, ex "12,90"
   - priceNote             string        ex "HT · 5/6 pers"
   - breadcrumb            [{label, href?}]
   - backHref / backLabel
   - seoEyebrow, seoTitle, seoHtml, devisPrestation, devisTitre, devisSousTitre
*/

export default function GalleryFiche({
  title, subtitle, img, gallery,
  description, sections = [], listItems = [], listLabel = 'Composition',
  allergens = [],
  price, priceNote = 'HT',
  breadcrumb = [], backHref, backLabel,
  seoEyebrow, seoTitle, seoHtml, devisPrestation = '',
  devisTitre = 'Un événement à Paris ou en Île-de-France ?',
  devisSousTitre = 'Répondez en 30 secondes — devis personnalisé sous 24h.',
}) {
  const photos = gallery && gallery.length ? gallery : [img]
  const showThumbnails = photos.length > 1

  return (
    <>
      <Navbar showBanner={true} />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* Breadcrumb */}
        <div className="gf-breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 72px 0' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {breadcrumb.map((c, i, arr) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {c.href ? (
                  <Link href={c.href} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(17,17,17,0.42)', textDecoration: 'none' }}>{c.label}</Link>
                ) : (
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(17,17,17,0.75)' }}>{c.label}</span>
                )}
                {i < arr.length - 1 && <span style={{ color: 'rgba(17,17,17,0.2)', fontSize: '10px' }}>›</span>}
              </span>
            ))}
          </nav>
        </div>

        {/* Fiche : galerie + infos */}
        <div className="gallery-fiche" style={{ maxWidth: '1280px', margin: '0 auto', padding: '28px 72px 64px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '52px', alignItems: 'center' }}>

          {/* ── Colonne gauche : photo ── */}
          <div className="gallery-col">
            <div style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: '4px', background: '#F8F5EF', boxShadow: '0 16px 40px rgba(17,17,17,0.10)' }}>
              <img src={photos[0]} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            {showThumbnails && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '18px' }}>
                {photos.slice(0, 4).map((src, i) => (
                  <div key={i} style={{ width: '100%', aspectRatio: '16 / 10', overflow: 'hidden', borderRadius: '3px', background: '#F8F5EF' }}>
                    <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── Colonne droite : infos ── */}
          <div className="gallery-info" style={{ paddingLeft: '28px' }}>
            {/* En-tête centré */}
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <img src="/logo-footer.svg" alt="L'Écrin" style={{ height: '32px', width: 'auto', margin: '0 auto 12px', opacity: 0.9 }} />
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '8px' }}>
                {title}
              </h1>
              {subtitle && (
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'rgba(17,17,17,0.45)', letterSpacing: '0.03em' }}>
                  {subtitle}
                </p>
              )}
            </div>

            {/* Description (gauche) */}
            {description && (
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '22px' }}>
                {description}
              </p>
            )}

            {/* Composition en sections (entrée / plat / dessert) */}
            {sections.length > 0 && (
              <div style={{ marginBottom: '22px' }}>
                {sections.map((s, i) => (
                  <div key={i} style={{ marginBottom: '16px' }}>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '5px' }}>
                      {s.label}
                    </p>
                    <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '16px', fontWeight: 400, lineHeight: 1.4, color: 'var(--text-primary)' }}>
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Composition en liste (recettes, accompagnements…) */}
            {listItems.length > 0 && (
              <div style={{ marginBottom: '22px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '9px' }}>{listLabel}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {listItems.map((item, i) => (
                    <li key={i} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.4, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Allergènes */}
            {allergens.length > 0 && (
              <div style={{ marginBottom: '18px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '6px' }}>Composition</p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  Contient : {allergens.join(', ').toLowerCase()}.
                </p>
              </div>
            )}

            {/* Séparateur */}
            <div style={{ height: '1px', background: 'rgba(17,17,17,0.08)', marginBottom: '20px' }} />

            {/* Bloc action centré : prix + CTA */}
            <div style={{ textAlign: 'center' }}>
              {price && (
                <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '16px' }}>
                  {price} €
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.3)', marginLeft: '6px' }}>{priceNote}</span>
                </p>
              )}

              <a
                href="/devis"
                style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10.5px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', background: 'transparent', border: '1px solid var(--accent)', padding: '11px 28px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', justifyContent: 'center', transition: 'background 0.3s ease, color 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#FFFFFF' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
              >
                Demande de devis →
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 72px' }}>
          <div style={{ width: '100%', height: '1px', background: 'rgba(17,17,17,0.07)' }} />
        </div>

        {/* Article SEO + devis */}
        {(seoTitle || seoHtml) && (
          <section className="gf-seo" style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 72px 96px' }}>
            {seoEyebrow && (
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
                {seoEyebrow}
              </p>
            )}
            {seoTitle && (
              <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '40px' }}>
                {seoTitle}
              </h2>
            )}
            {seoHtml && <div className="gf-article-body" dangerouslySetInnerHTML={{ __html: seoHtml }} />}

            <DevisRapide defaultPrestation={devisPrestation} titre={devisTitre} sousTitre={devisSousTitre} />

            {backHref && (
              <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
                <Link href={backHref} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
                  ← {backLabel}
                </Link>
              </div>
            )}
          </section>
        )}

      </main>

      <style suppressHydrationWarning>{`
        .gf-article-body p { font-family: 'Neue Montreal', sans-serif; font-size: 15px; line-height: 1.85; color: var(--text-secondary); margin-bottom: 18px; }
        .gf-article-body h2 { font-family: 'Baskerville Display PT', Georgia, serif; font-size: clamp(20px, 2vw, 28px); font-weight: 400; color: var(--text-primary); margin: 40px 0 14px; line-height: 1.15; }
        .gf-article-body h3 { font-family: 'Baskerville Display PT', Georgia, serif; font-size: 20px; font-weight: 400; color: var(--text-primary); margin: 28px 0 10px; }
        .gf-article-body ul { margin: 0 0 18px; padding-left: 20px; }
        .gf-article-body li { font-family: 'Neue Montreal', sans-serif; font-size: 15px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 6px; }
        .gf-article-body strong { color: var(--text-primary); font-weight: 500; }
        @media (max-width: 900px) {
          .gf-breadcrumb { padding: 20px 24px 0 !important; }
          .gallery-fiche { grid-template-columns: 1fr !important; gap: 32px !important; padding: 24px 24px 60px !important; }
          .gf-seo { padding: 48px 24px 72px !important; }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .gf-breadcrumb { padding: 20px 40px 0 !important; }
          .gallery-fiche { padding: 24px 40px 60px !important; gap: 40px !important; }
          .gf-seo { padding: 60px 40px 80px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
