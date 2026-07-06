'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { FORMULES } from './formulesData'

const COCKTAILS = FORMULES.filter(f => f.type === 'cocktail')
const BUFFETS   = FORMULES.filter(f => f.type === 'buffet')

const SEO_ARTICLE = `
  <h2>Traiteur cocktails et buffets d'entreprise à Paris</h2>
  <p>Le <strong>cocktail d'entreprise</strong> est le format événementiel le plus polyvalent. Plus détendu qu'un repas assis, plus généreux qu'un simple buffet : c'est l'événement qui favorise les échanges naturels entre collaborateurs, clients et partenaires. L'Écrin Traiteur livre vos cocktails et buffets à Paris et en Île-de-France, dès 6h30.</p>

  <h2>Cocktail sucré, déjeunatoire ou dînatoire : quelle différence ?</h2>
  <p>Le <strong>Cocktail Sucré</strong> (8 pièces) est idéal pour une pause premium ou un accueil client. Le <strong>Cocktail Déjeunatoire</strong> (12 pièces) remplace avantageusement le déjeuner debout. Le <strong>Cocktail Dînatoire</strong> (18 pièces) est pensé pour les soirées d'entreprise. La <strong>Signature L'Écrin</strong> (22 pièces) est notre offre la plus exclusive pour les événements prestige.</p>

  <h2>Organiser votre cocktail d'entreprise à Paris</h2>
  <p>Commandez au minimum <strong>48 à 72h à l'avance</strong>. L'Écrin Traiteur livre dans vos locaux, chez un partenaire ou dans un espace événementiel, partout en Île-de-France. Facturation entreprise avec TVA disponible. Devis personnalisé sous 24h.</p>
`

function FormulaCard({ f }) {
  return (
    <a
      href={`/creations/cocktails-et-buffets/${f.slug}`}
      className="formule-card"
      style={{ background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', textDecoration: 'none', transition: 'opacity 0.25s ease' }}
    >
      {/* Image */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0 }}>
        <img loading="lazy" src={f.img} alt={f.nom}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: f.imgPosition || 'center center', display: 'block', transition: 'transform 0.6s ease' }}
          className="formule-img"
        />
        {f.badge && (
          <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--accent)', color: '#fff', fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 10px' }}>
            {f.badge}
          </span>
        )}
      </div>

      {/* Contenu */}
      <div style={{ padding: '32px 36px 36px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(17,17,17,0.08)' }}>
          <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.1 }}>
            {f.nom}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
            {f.pieces && (
              <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.04em' }}>
                {f.pieces}
              </span>
            )}
            {f.detail && (
              <>
                <span style={{ color: 'rgba(17,17,17,0.2)', fontSize: '10px' }}>·</span>
                <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.45)' }}>{f.detail}</span>
              </>
            )}
          </div>
          <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '17px', fontWeight: 400, color: 'var(--text-primary)' }}>
            {f.prix}
          </p>
        </div>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '24px', flex: 1 }}>
          {f.descCourt}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          Voir la formule →
        </p>
      </div>
    </a>
  )
}

export default function CocktailsEtBuffets() {
  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* Hero */}
        <div className="page-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <div style={{ position: 'relative', width: '100%', height: '68vh', minHeight: '420px', overflow: 'hidden' }}>
            <img loading="eager" src="/creations-3.webp" alt="Cocktails & Buffets — L'Écrin Traiteur"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <div className="page-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '600px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                Nos Créations, Cocktails & Buffets
              </p>
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                Cocktails<br />& Buffets
              </h1>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '340px' }}>
                Des buffets et cocktails pensés pour vos événements d'entreprise, de la pause au dîner debout.
              </p>
            </div>
          </div>
        </div>

        {/* ── Section Cocktails ── */}
        <div className="section-intro" style={{ maxWidth: '1440px', margin: '0 auto', padding: '64px 72px 0' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
            Cocktails
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '16px' }}>
            Quatre formules cocktail, une seule exigence.
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '560px' }}>
            De la pause sucrée premium au cocktail dînatoire de prestige, pièces artisanales, livrées prêtes à servir.
          </p>
        </div>

        <div className="formules-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          {COCKTAILS.map((f) => <FormulaCard key={f.slug} f={f} />)}
        </div>

        {/* ── Section Buffets ── */}
        <div className="section-intro" style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 72px 0' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
            Buffets à partager
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '16px' }}>
            Des tables qui imposent le respect.
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '560px' }}>
            Grandes focaccias, salades fraîches, pièces à partager, des buffets scénographiés pour les événements qui ne souffrent aucune concession.
          </p>
        </div>

        <div className="formules-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 96px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          {BUFFETS.map((f) => <FormulaCard key={f.slug} f={f} />)}
        </div>

        {/* CTA devis */}
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px 80px', textAlign: 'center' }}>
          <a href="/devis"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', padding: '16px 40px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Obtenir un devis →
          </a>
        </div>

        {/* Séparateur */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 72px' }}>
          <div style={{ width: '100%', height: '1px', background: 'rgba(17,17,17,0.07)' }} />
        </div>

        {/* Article SEO */}
        <section className="cocktail-seo" style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 72px 96px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            Cocktails & Buffets d'entreprise
          </p>
          <div className="fiche-article-body" dangerouslySetInnerHTML={{ __html: SEO_ARTICLE }} />
        </section>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .formule-card:hover .formule-img { transform: scale(1.04); }
        .formule-card:hover { opacity: 0.96; }
        .fiche-article-body p { font-family: 'Neue Montreal', sans-serif; font-size: 15px; line-height: 1.85; color: var(--text-secondary); margin-bottom: 18px; }
        .fiche-article-body h2 { font-family: 'Baskerville Display PT', Georgia, serif; font-size: clamp(20px, 2vw, 28px); font-weight: 400; color: var(--text-primary); margin: 40px 0 14px; line-height: 1.15; }
        .fiche-article-body strong { color: var(--text-primary); font-weight: 500; }
        @media (max-width: 768px) {
          .cat-hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.5) 100%) !important; }
          .page-hero-wrapper { padding: 60px 0 0 !important; }
          .page-hero-text { padding: 0 24px !important; }
          .formules-grid { grid-template-columns: 1fr !important; padding: 32px 24px 64px !important; }
          .cocktail-seo { padding: 48px 24px 72px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .page-hero-wrapper { padding: 40px 40px 0 !important; }
          .page-hero-text { padding: 0 40px !important; }
          .formules-grid { padding: 40px 40px 72px !important; }
          .cocktail-seo { padding: 60px 40px 80px !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
