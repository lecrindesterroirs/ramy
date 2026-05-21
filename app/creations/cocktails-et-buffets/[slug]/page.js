'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import { FORMULES } from '../formulesData'

export default function FormulePage() {
  const { slug } = useParams()
  const formule = FORMULES.find(f => f.slug === slug)
  if (!formule) notFound()

  const breadcrumb = [
    { label: 'Accueil', href: '/' },
    { label: 'Cocktails & Buffets', href: '/creations/cocktails-et-buffets' },
    { label: formule.nom },
  ]

  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* Breadcrumb */}
        <div className="fiche-breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 72px 0' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {breadcrumb.map((crumb, i, arr) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {crumb.href ? (
                  <a href={crumb.href}
                    style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(17,17,17,0.42)', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.42)'}
                  >{crumb.label}</a>
                ) : (
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(17,17,17,0.75)' }}>{crumb.label}</span>
                )}
                {i < arr.length - 1 && <span style={{ color: 'rgba(17,17,17,0.2)', fontSize: '10px' }}>›</span>}
              </span>
            ))}
          </nav>
        </div>

        {/* Layout principal : image + fiche */}
        <div className="fiche-grid" style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 72px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>

          {/* Image */}
          <div className="fiche-image-col">
            <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#F8F5EF', position: 'sticky', top: 'calc(var(--banner-h) + var(--nav-h) + 24px)' }}>
              {formule.badge && (
                <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 2, background: 'var(--accent)', color: '#fff', fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 10px' }}>
                  {formule.badge}
                </div>
              )}
              <img src={formule.img} alt={formule.nom}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>

          {/* Fiche formule */}
          <div>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
              Cocktails & Buffets
            </p>
            <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '12px', letterSpacing: '-0.01em' }}>
              {formule.nom}
            </h1>

            {/* Pièces + détail */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.04em' }}>
                {formule.pieces}
              </span>
              {formule.detail && (
                <>
                  <span style={{ color: 'rgba(17,17,17,0.2)', fontSize: '10px' }}>—</span>
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.5)' }}>
                    {formule.detail}
                  </span>
                </>
              )}
            </div>
            <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '28px' }}>
              {formule.prix}
            </p>

            {/* Description */}
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>
              {formule.desc}
            </p>

            {/* Composition */}
            <div className="formule-pieces" style={{ display: 'grid', gridTemplateColumns: formule.salees.length > 0 ? '1fr 1fr' : '1fr', gap: '24px', marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>

              {formule.salees.length > 0 && (
                <div>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', marginBottom: '12px' }}>
                    Pièces salées
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {formule.salees.map((item, i) => (
                      <li key={i} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px', fontSize: '10px' }}>–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', marginBottom: '12px' }}>
                  Pièces sucrées
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {formule.sucrees.map((item, i) => (
                    <li key={i} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px', fontSize: '10px' }}>–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Format idéal */}
            <div style={{ background: 'var(--bg-secondary)', padding: '16px 20px', marginBottom: '28px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.45)', marginBottom: '6px' }}>
                Idéal pour
              </p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {formule.ideal}
              </p>
            </div>

            {/* CTA devis */}
            <a
              href="/devis"
              style={{
                fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#FFFFFF', background: 'var(--accent)',
                border: '1px solid var(--accent)', padding: '18px 36px',
                display: 'flex', alignItems: 'center', gap: '10px',
                textDecoration: 'none', justifyContent: 'center', width: '100%',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Demande de devis →
            </a>

            {/* Infos pratiques */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                'Livraison dès 6h30 — Paris & Île-de-France',
                'Commandez 48h à 72h à l\'avance',
                'Facturation entreprise disponible',
              ].map(t => (
                <p key={t} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.45)', letterSpacing: '0.02em' }}>{t}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 72px' }}>
          <div style={{ width: '100%', height: '1px', background: 'rgba(17,17,17,0.07)' }} />
        </div>

        {/* Article SEO */}
        <section className="fiche-seo" style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 72px 96px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            Cocktails & Buffets d'entreprise
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '40px' }}>
            {formule.seoTitle}
          </h2>
          <div className="fiche-article-body" dangerouslySetInnerHTML={{ __html: formule.seoArticle }} />

          {/* Retour */}
          <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
            <a href="/creations/cocktails-et-buffets"
              style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              ← Retour aux formules
            </a>
          </div>
        </section>

      </main>

      <style suppressHydrationWarning>{`
        .fiche-article-body p { font-family: 'Neue Montreal', sans-serif; font-size: 15px; line-height: 1.85; color: var(--text-secondary); margin-bottom: 18px; }
        .fiche-article-body h2 { font-family: 'Baskerville Display PT', Georgia, serif; font-size: clamp(20px, 2vw, 28px); font-weight: 400; color: var(--text-primary); margin: 40px 0 14px; line-height: 1.15; }
        .fiche-article-body strong { color: var(--text-primary); font-weight: 500; }
        @media (max-width: 768px) {
          .fiche-breadcrumb { padding: 20px 24px 0 !important; }
          .fiche-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 32px 24px 60px !important; }
          .formule-pieces { grid-template-columns: 1fr !important; }
          .fiche-seo { padding: 48px 24px 72px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .fiche-breadcrumb { padding: 20px 40px 0 !important; }
          .fiche-grid { padding: 32px 40px 60px !important; gap: 40px !important; }
          .fiche-seo { padding: 60px 40px 80px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
