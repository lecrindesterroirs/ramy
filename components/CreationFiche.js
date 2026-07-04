'use client'

import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import DevisRapide from './DevisRapide'

/*
  Fiche détail réutilisable pour les créations (plateaux repas, lunch box,
  à partager, plateaux apéritifs). Grande image à gauche, informations à
  droite : eyebrow, titre, prix, composition (sections ou liste), CTA devis.

  Props :
   - eyebrow      string   ex "Plateaux repas · Essentiel"
   - title        string
   - img          string
   - price        string|null   ex "28,90"
   - priceNote    string        ex "HT · par personne"
   - description  string|null
   - sections     [{label, value}]  ex entrée/plat/dessert
   - listLabel    string        ex "Recettes"
   - listItems    string[]
   - breadcrumb   [{label, href?}]
   - backHref / backLabel
*/

export default function CreationFiche({
  eyebrow, title, img, price, priceNote = 'HT',
  description, sections = [], listItems = [], listLabel = 'Composition',
  breadcrumb = [], backHref, backLabel,
  seoEyebrow, seoTitle, seoHtml, devisPrestation = '',
  devisTitre = 'Un événement à Paris ou en Île-de-France ?',
  devisSousTitre = 'Répondez en 30 secondes — devis personnalisé sous 24h.',
}) {
  return (
    <>
      <Navbar showBanner={true} />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* Breadcrumb */}
        <div className="cf-breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 72px 0' }}>
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

        {/* Fiche : image + infos */}
        <div className="cf-grid" style={{ maxWidth: '1280px', margin: '0 auto', padding: '28px 72px 64px', display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: '56px', alignItems: 'start' }}>

          {/* Image + miniatures « photo à venir » */}
          <div className="cf-image-col">
            <div className="cf-hero-img" style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', background: '#F8F5EF', boxShadow: '0 16px 40px rgba(17,17,17,0.10)', position: 'sticky', top: 'calc(var(--banner-h) + var(--nav-h) + 24px)' }}>
              <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>

          {/* Infos */}
          <div className="cf-info">
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
              {eyebrow}
            </p>
            <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginBottom: '18px' }}>
              {title}
            </h1>

            {price && (
              <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '26px', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '20px' }}>
                {price} €
                <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.4)', marginLeft: '8px' }}>{priceNote}</span>
              </p>
            )}

            {description && (
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>
                {description}
              </p>
            )}

            {/* Composition en sections (entrée / plat / dessert) */}
            {sections.length > 0 && (
              <div style={{ marginBottom: '28px' }}>
                {sections.map((s, i) => (
                  <div key={i} style={{ marginBottom: '18px' }}>
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

            {/* Composition en liste (recettes) */}
            {listItems.length > 0 && (
              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
                  {listLabel}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {listItems.map((it, i) => (
                    <li key={i} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.4, color: 'var(--text-primary)', display: 'flex', alignItems: 'flex-start', gap: '11px' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: '7px' }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA devis */}
            <a
              href="/devis"
              style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', border: '1px solid var(--accent)', padding: '18px 36px', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', justifyContent: 'center', width: '100%', transition: 'opacity 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Demande de devis →
            </a>

            {/* Réassurance */}
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {['Livraison dès 6h30 — Paris & Île-de-France', 'Commandez avant 14h la veille', 'Facturation entreprise disponible'].map(t => (
                <p key={t} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.5)', letterSpacing: '0.02em' }}>{t}</p>
              ))}
            </div>

            {backHref && (
              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
                <Link href={backHref} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
                  ← {backLabel}
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* ── Séparateur + article SEO + devis (structure viennoiseries) ── */}
        {(seoTitle || seoHtml) && (
          <>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 72px' }}>
              <div style={{ width: '100%', height: '1px', background: 'rgba(17,17,17,0.07)' }} />
            </div>

            <section className="cf-seo" style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 72px 20px' }}>
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
              {seoHtml && <div className="cf-article-body" dangerouslySetInnerHTML={{ __html: seoHtml }} />}
            </section>
          </>
        )}

        {/* Formulaire de devis (plus bas) */}
        <section className="cf-seo" style={{ maxWidth: '860px', margin: '0 auto', padding: '20px 72px 96px' }}>
          <DevisRapide defaultPrestation={devisPrestation} titre={devisTitre} sousTitre={devisSousTitre} />
        </section>
      </main>

      <style suppressHydrationWarning>{`
        .cf-hero-img { border-radius: 4px !important; }
        .cf-article-body p { font-family: 'Neue Montreal', sans-serif; font-size: 15px; line-height: 1.85; color: var(--text-secondary); margin-bottom: 18px; }
        .cf-article-body h2 { font-family: 'Baskerville Display PT', Georgia, serif; font-size: clamp(20px, 2vw, 28px); font-weight: 400; color: var(--text-primary); margin: 40px 0 14px; line-height: 1.15; }
        .cf-article-body h3 { font-family: 'Baskerville Display PT', Georgia, serif; font-size: 20px; font-weight: 400; color: var(--text-primary); margin: 28px 0 10px; }
        .cf-article-body ul { margin: 0 0 18px; padding-left: 20px; }
        .cf-article-body li { font-family: 'Neue Montreal', sans-serif; font-size: 15px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 6px; }
        .cf-article-body strong { color: var(--text-primary); font-weight: 500; }
        @media (max-width: 900px) {
          .cf-breadcrumb { padding: 20px 24px 0 !important; }
          .cf-grid { grid-template-columns: 1fr !important; gap: 28px !important; padding: 24px 24px 60px !important; }
          .cf-image-col > div { position: static !important; }
          .cf-seo { padding-left: 24px !important; padding-right: 24px !important; }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .cf-breadcrumb { padding: 20px 48px 0 !important; }
          .cf-grid { padding: 24px 48px 60px !important; gap: 40px !important; }
          .cf-seo { padding-left: 48px !important; padding-right: 48px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
