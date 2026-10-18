// Bloc « À savoir » d'une fiche produit : format, prix, contenu, régimes,
// allergènes, délai et livraison. Composant sans état ni hook : il est rendu
// dans le HTML serveur, y compris quand la page qui l'embarque est un composant
// client. Le contenu vient de lib/ficheAsavoir.js (champs déjà présents dans les
// données du produit, rien d'inventé).
//
// Props : titre, items [{ label, text }], cta { before, link, after },
//         more { label, href }, paddingBottom.

export default function FicheAsavoir({ titre, items = [], cta, more, paddingBottom = '8px' }) {
  if (!items.length) return null

  return (
    <section
      className="fiche-asavoir"
      aria-label="À savoir"
      style={{ maxWidth: '860px', margin: '0 auto', padding: `56px 72px ${paddingBottom}` }}
    >
      <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '16px' }}>
        À savoir
      </p>
      <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '24px' }}>
        {titre}
      </h2>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid rgba(17,17,17,0.07)' }}>
        {items.map((it, i) => (
          <li
            key={it.label + i}
            style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', padding: '11px 0', borderBottom: '1px solid rgba(17,17,17,0.07)' }}
          >
            <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{it.label}&nbsp;:</strong> {it.text}
          </li>
        ))}
      </ul>

      {(cta || more) && (
        <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', marginTop: '20px' }}>
          {cta && (
            <>
              {cta.before}
              <a href="/devis" style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{cta.link}</a>
              {cta.after}
            </>
          )}
          {cta && more && ' '}
          {more && (
            <a href={more.href} style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{more.label}</a>
          )}
          {more && '.'}
        </p>
      )}

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1100px) and (min-width: 769px) { .fiche-asavoir { padding-left: 40px !important; padding-right: 40px !important; } }
        @media (max-width: 768px) { .fiche-asavoir { padding-left: 24px !important; padding-right: 24px !important; } }
      ` }} />
    </section>
  )
}
