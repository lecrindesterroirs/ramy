/* Bloc produit en tête d'article (28/10/2026).
   Les pages du journal étaient vues mais ne faisaient pas commander : on
   arrivait de Google sur un texte, sans jamais voir ce qu'on pouvait acheter
   avant le bas de page. Ce bloc met la photo, le prix et le lien de commande
   juste sous le chapô, comme les cartes de la page Cocktails — le SEO reste
   intact en dessous. Composant serveur : aucune donnée n'est envoyée au client. */
import Image from 'next/image'

export default function ArticleFormules({ surtitre, titre, cartes, liens }) {
  if (!cartes?.length) return null
  return (
    <section aria-label={surtitre} style={{ margin: '0 0 44px' }}>
      <p style={{
        fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
        fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--accent-deep)', margin: '0 0 8px',
      }}>{surtitre}</p>
      <p style={{
        fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif",
        fontSize: 'clamp(20px, 2.4vw, 28px)', fontWeight: 400, lineHeight: 1.2,
        color: 'var(--text-primary)', margin: '0 0 22px',
      }}>{titre}</p>

      <div className="af-grille">
        {cartes.map(c => (
          <a key={c.href} href={c.href} className="af-carte">
            <span className="af-img">
              <Image fill sizes="(max-width: 600px) 120px, 250px" src={c.img} alt={c.nom} style={{ objectFit: 'cover' }} />
            </span>
            <span className="af-corps">
              <span className="af-nom">{c.nom}</span>
              <span className="af-meta">{c.meta}</span>
              <span className="af-cta">{c.cta}</span>
            </span>
          </a>
        ))}
      </div>

      {liens?.length > 0 && (
        <div className="af-liens">
          {liens.map((l, i) => (
            <a key={l.href} href={l.href} className={i === 0 ? 'af-lien' : 'af-lien af-lien-2'}>{l.label}</a>
          ))}
        </div>
      )}
    </section>
  )
}
