import {
  categoriePdj, categoriePause, categoriePlateaux, categorieLunchBox, categoriePartage,
  categorieAperitifs, categorieBoissons, categorieAnimations, categorieCoffrets,
} from '../lib/categoriesVue'

/*
  Blocs SEO des pages de la carte, EN BAS DE PAGE et repliés (demande de Ramy,
  26/10/2026) : « L'essentiel », les formules avec leurs prix, le tableau « Combien
  prévoir ». Ils étaient au-dessus des produits depuis la refonte du 23/10 ; la page est
  revenue à sa présentation d'avant (bandeau, onglets, produits), et ces textes restent
  dans le HTML (details natif) sans allonger la page.
  Composant serveur : lit lib/categoriesVue.js (tous les catalogues), donc à ne pas
  importer dans une page client. Les pages anciennes le reçoivent par la prop « bas ».
*/
const CONSTRUCTEURS = {
  pdj: categoriePdj, pause: categoriePause, plateaux: categoriePlateaux, lunch: categorieLunchBox,
  partage: categoriePartage, aperitifs: categorieAperitifs, boissons: categorieBoissons,
  animations: categorieAnimations, coffrets: categorieCoffrets,
}

const SANS = "'Neue Montreal', 'Neue Montreal Fallback', sans-serif"
const SERIF = "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif"

export default function BlocsSeoBas({ categorie, lang = 'fr', extraHtml = null, extraTitre = null }) {
  const en = lang === 'en'
  const c = CONSTRUCTEURS[categorie]?.(en)
  if (!c) return null
  const f = c.formules
  return (
    <section className="bas-seo" aria-label={en ? 'Prices and quantities' : 'Prix et quantités'}>
      <div className="bas-seo-inner">
        {c.essentiel && (
          <details>
            <summary>{en ? 'At a glance' : "L'essentiel"}</summary>
            <p>{c.essentiel}</p>
          </details>
        )}

        {f && (
          <details>
            <summary>{f.titre}</summary>
            {f.intro && <p>{f.intro}</p>}
            {f.cartes?.length > 0 && (
              <ul className="bas-seo-liste">
                {f.cartes.map(x => (
                  <li key={x.nom}>
                    {x.href ? <a href={x.href}><strong>{x.nom}</strong></a> : <strong>{x.nom}</strong>}
                    {' '}· {x.prix}{x.detail ? ` · ${x.detail}` : ''}
                  </li>
                ))}
              </ul>
            )}
          </details>
        )}

        {f?.tableau && (
          <details>
            <summary>{f.tableau.titre}</summary>
            <div className="bas-seo-table">
              <table>
                <thead><tr>{f.tableau.entetes.map(h => <th key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {f.tableau.lignes.map(l => (
                    <tr key={l[0]}>{l.map((x, i) => (i === 0 ? <td key={i}><strong>{x}</strong></td> : <td key={i}>{x}</td>))}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            {f.note && <p className="bas-seo-note">{f.note}</p>}
          </details>
        )}

        {extraHtml && (
          <details>
            <summary>{extraTitre}</summary>
            <div className="bas-seo-extra" dangerouslySetInnerHTML={{ __html: extraHtml }} />
          </details>
        )}
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .bas-seo { background: #FFFFFF; border-top: 1px solid rgba(17,17,17,0.07); }
        .bas-seo-inner { max-width: 760px; margin: 0 auto; padding: 40px 40px 8px; }
        .bas-seo details { border-top: 1px solid rgba(17,17,17,0.1); }
        .bas-seo details:last-of-type { border-bottom: 1px solid rgba(17,17,17,0.1); }
        .bas-seo summary { list-style: none; cursor: pointer; padding: 18px 28px 18px 0; position: relative; font-family: ${SERIF}; font-size: 19px; color: var(--text-primary); }
        .bas-seo summary::-webkit-details-marker { display: none; }
        .bas-seo summary::after { content: '+'; position: absolute; right: 4px; top: 15px; font-family: ${SANS}; font-size: 20px; color: var(--accent-deep); transition: transform .25s ease; }
        .bas-seo details[open] summary::after { transform: rotate(45deg); }
        .bas-seo p, .bas-seo li, .bas-seo td, .bas-seo th { font-family: ${SANS}; font-size: 15px; line-height: 1.75; color: var(--text-secondary); }
        .bas-seo p { margin: 0 0 18px; }
        .bas-seo-liste { list-style: none; padding: 0; margin: 0 0 18px; }
        .bas-seo-liste li { padding: 8px 0; border-bottom: 1px solid rgba(17,17,17,0.06); }
        .bas-seo-liste a { color: var(--text-primary); }
        .bas-seo-table { overflow-x: auto; margin: 0 0 12px; }
        .bas-seo table { width: 100%; border-collapse: collapse; }
        .bas-seo th { text-align: left; font-weight: 500; font-size: 12px; padding: 10px 12px 10px 0; border-bottom: 1px solid rgba(17,17,17,0.18); white-space: nowrap; }
        .bas-seo td { padding: 11px 12px 11px 0; border-bottom: 1px solid rgba(17,17,17,0.07); }
        .bas-seo td strong { font-weight: 500; color: var(--text-primary); }
        .bas-seo-note { font-size: 13px !important; }
        .bas-seo-extra h2 { font-family: ${SERIF}; font-size: 22px; font-weight: 400; color: var(--text-primary); margin: 8px 0 12px; }
        .bas-seo-extra ul { padding-left: 20px; margin: 0 0 18px; }
        .bas-seo-extra a { color: var(--accent-deep); text-decoration: underline; text-underline-offset: 3px; }
        @media (max-width: 768px) { .bas-seo-inner { padding: 28px 24px 8px; } }
      ` }} />
    </section>
  )
}
