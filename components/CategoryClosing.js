'use client'

/*
  Section de clôture des pages catégorie :
  bande éditoriale (eyebrow + titre + corps) → 4 cartes arguments → CTA devis → article SEO.
  Chaque page passe ses propres textes pour éviter la redondance entre catégories.
*/

const ICONS = {
  quality: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 12l2 2 4-4"/></svg>,
  delivery: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  custom: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
  support: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
}

export const DEFAULT_ARGS = [
  { icon: 'quality',  titre: 'Produits de qualité',    desc: 'Des ingrédients sélectionnés avec exigence et travaillés dans notre savoir-faire pour des créations raffinées.' },
  { icon: 'delivery', titre: 'Livraison dès 6h30',     desc: 'Une logistique pensée pour les entreprises, livraison à l\'heure souhaitée à Paris et en Île-de-France.' },
  { icon: 'custom',   titre: 'Prestations sur mesure', desc: 'Nous prenons en compte vos contraintes alimentaires, votre budget et vos envies pour chaque événement.' },
  { icon: 'support',  titre: 'Accompagnement dédié',   desc: 'Un interlocuteur unique, dédié et à l\'écoute, pour vous accompagner du devis à la réalisation.' },
]

export default function CategoryClosing({
  eyebrow = "Pensé pour les réceptions d'entreprise",
  title = 'Des produits qui ont du goût.\nUn service qui tient ses promesses.',
  body = "Des prestations pensées pour les entreprises qui accordent de l'importance au goût. Petits-déjeuners, plateaux repas, cocktails, buffets : chaque produit est sélectionné, chaque livraison est soignée.",
  args = DEFAULT_ARGS,
  ctaQuestion = "Besoin d'une prestation sur mesure ?",
  seoArticle,
}) {
  const titleLines = title.split('\n')
  return (
    <>
      {/* ── Section éditoriale ── */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(17,17,17,0.07)' }}>

        {/* Bloc texte centré */}
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 40px 64px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            {eyebrow}
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '24px' }}>
            {titleLines.map((line, i) => (
              <span key={i}>{line}{i < titleLines.length - 1 && <br />}</span>
            ))}
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            {body}
          </p>
        </div>

        {/* 4 cartes arguments */}
        <div className="prods-args" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px 72px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {args.map((item, i) => (
            <div key={i} style={{ background: '#FFFFFF', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ color: 'var(--accent)', opacity: 0.85 }}>{ICONS[item.icon] || ICONS.quality}</div>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)' }}>{item.titre}</p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '0 40px 80px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            {ctaQuestion}
          </p>
          <a
            href="/devis"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Demander un devis →
          </a>
        </div>

      </section>

      {/* ── Article SEO catégorie ── */}
      {seoArticle && (
        <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 40px 88px' }}>
            <div className="cat-seo-body" dangerouslySetInnerHTML={{ __html: seoArticle }} />
          </div>
        </section>
      )}

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .cat-seo-body p {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .cat-seo-body h2 {
          font-family: 'Baskerville Display PT', Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          color: var(--text-primary);
          margin: 40px 0 16px;
        }
        .cat-seo-body h2:first-child { margin-top: 0; }
        .cat-seo-body ul {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-secondary);
          padding-left: 24px;
          margin-bottom: 20px;
        }
        .cat-seo-body strong {
          color: var(--text-primary);
          font-weight: 500;
        }
        .cat-seo-body a {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid var(--accent);
        }
        .cat-seo-body a:hover { opacity: 0.75; }
        @media (max-width: 768px) {
          .prods-args { grid-template-columns: 1fr 1fr !important; padding: 0 24px 60px !important; }
          .cat-seo-body h2 { font-size: 22px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .prods-args { padding: 0 40px 60px !important; }
        }
      ` }} />
    </>
  )
}
