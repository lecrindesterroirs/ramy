// Ligne de maillage vers l'offre halal (/traiteur-halal), posée près de la FAQ
// ou des liens contextuels des pages ville, quartier, petit-déjeuner et
// plateaux repas. Composant sans état ni hook : rendu dans le HTML serveur.
//
// Props : intro (début de phrase, finit par un espace), paddingTop, maxWidth.

export default function HalalLine({ intro = 'Notre offre ', paddingTop = '44px', maxWidth = '800px', paddingBottom = '0px' }) {
  return (
    <div
      className="halal-line"
      style={{ maxWidth, margin: '0 auto', padding: `${paddingTop} 72px ${paddingBottom}`, textAlign: 'center' }}
    >
      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
        {intro}
        <a href="/traiteur-halal" style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          traiteur halal d'entreprise : tout est sans porc et sans alcool
        </a>
        .
      </p>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1100px) and (min-width: 769px) { .halal-line { padding-left: 40px !important; padding-right: 40px !important; } }
        @media (max-width: 768px) { .halal-line { padding-left: 24px !important; padding-right: 24px !important; } }
      ` }} />
    </div>
  )
}
