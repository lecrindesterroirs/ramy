'use client'


/*
  Bloc réponse en haut des pages de la carte.

  Il répond en clair à la question que le visiteur se pose avant de regarder
  les produits : combien ça coûte, à partir de quand, dans quel délai. C'est
  ce paragraphe que Google et les assistants reprennent en réponse directe,
  donc il reste VISIBLE.

  Le détail opératoire (livraison, minimum, quantités) part dans un dépliant
  <details> natif : rendu côté serveur, le texte est dans le HTML même replié,
  donc indexé — vérifié, la position de Google là-dessus n'a pas bougé depuis
  2020. Et la page ne s'ouvre plus sur un pavé.

  Pas de bouton ici : sur mobile la barre fixe du bas porte déjà « demander un
  devis » et le numéro, en permanence. Ce qui manquait, c'était le prix visible
  dès le premier écran — c'est là qu'on perdait deux visiteurs mobiles sur trois.
*/
export default function BlocReponse({ titre, children, plusTitre, plus }) {
  return (
    <>
      <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 400, lineHeight: 1.2, color: 'var(--text-primary)', margin: '0 0 14px' }}>
        {titre}
      </h2>
      <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
        {children}
      </p>

      {plus && (
        <details className="answer-plus">
          <summary>{plusTitre}</summary>
          <p>{plus}</p>
        </details>
      )}


      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .answer-plus { margin-top: 16px; border-top: 1px solid rgba(17,17,17,0.1); }
        .answer-plus > summary {
          list-style: none; cursor: pointer; padding: 13px 0;
          display: flex; align-items: center; gap: 10px;
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 11px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.1em; color: #875E10;
        }
        .answer-plus > summary::-webkit-details-marker { display: none; }
        .answer-plus > summary::after {
          content: ''; width: 7px; height: 7px; margin-left: 2px;
          border-right: 1px solid currentColor; border-bottom: 1px solid currentColor;
          transform: rotate(45deg) translate(-2px, -2px); transition: transform .25s ease;
        }
        .answer-plus[open] > summary::after { transform: rotate(-135deg) translate(-2px, -2px); }
        .answer-plus > p {
          margin: 0 0 16px; font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif;
          font-size: 14px; line-height: 1.7; color: var(--text-secondary);
        }
        .answer-plus a { color: #875E10; border-bottom: 1px solid rgba(135,94,16,0.4); }
        .answer-plus a:hover { border-bottom-color: #875E10; }
        @media (prefers-reduced-motion: reduce) { .answer-plus > summary::after { transition: none; } }

      ` }} />
    </>
  )
}

/* Cadre d'insertion sur les pages qui ne passent pas par ProductsPageTemplate :
   mêmes marges que le gabarit, pour que le bloc tombe au même endroit partout. */
export function CadreBlocReponse({ children }) {
  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '32px 72px 8px' }} className="bloc-reponse-cadre">
      <div style={{ maxWidth: '860px' }}>{children}</div>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) { .bloc-reponse-cadre { padding: 24px 24px 4px !important; } }
      ` }} />
    </div>
  )
}
