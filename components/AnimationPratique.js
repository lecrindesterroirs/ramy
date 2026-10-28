// Encadré « En pratique » / « In practice » et questions fréquentes d'une fiche
// animation (29/10/2026). Contenu calculé par lib/animationsPratique.js.
// Sans état ni hook : rendu dans le HTML serveur même quand la fiche qui
// l'embarque est un composant client (même principe que FicheAsavoir).
// La FAQ visible et le FAQPage JSON-LD sortent du même tableau : ils sont
// identiques par construction.

const SANS = "'Neue Montreal', 'Neue Montreal Fallback', sans-serif"
const SERIF = "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif"

export default function AnimationPratique({ titre, items = [], faq = [], guide, lang = 'fr' }) {
  if (!items.length && !faq.length) return null
  const en = lang === 'en'
  const faqLd = faq.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: en ? 'en' : 'fr',
    mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  } : null

  return (
    <div className="anim-pratique" style={{ margin: '48px 0 56px' }}>
      {items.length > 0 && (
        <div style={{ background: 'var(--bg-secondary)', borderLeft: '2px solid var(--accent)', padding: '28px 32px' }}>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', margin: '0 0 16px' }}>{titre}</h2>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {items.map(it => (
              <li key={it.label} style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', padding: '7px 0', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>
                <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{it.label}{en ? ':' : ' :'}</strong> {it.text}
              </li>
            ))}
          </ul>
          {guide && (
            <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: '16px 0 0' }}>
              {en ? 'To compare stations, see our guide ' : 'Pour comparer les animations, lisez notre guide '}
              <a href={guide.href} style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{guide.label}</a>.
            </p>
          )}
        </div>
      )}

      {faq.length > 0 && (
        <div style={{ marginTop: '44px' }}>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 400, color: 'var(--text-primary)', margin: '0 0 8px' }}>{en ? 'Frequently asked questions' : 'Questions fréquentes'}</h2>
          <div className="ev-faq">
            {faq.map(f => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      )}

      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) { .anim-pratique > div:first-child { padding: 22px 20px !important; } }
      ` }} />
    </div>
  )
}
