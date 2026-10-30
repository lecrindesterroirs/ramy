import '../commander/tunnel.css'
import './compte.css'

/*
  L'espace client partage l'habillage du tunnel : même chrome, mêmes filets,
  mêmes polices. C'est la même zone « transactionnelle » du site, et il n'y a
  aucune raison qu'elle change d'aspect entre « je commande » et « je retrouve
  ma commande ».

  Pages non indexables : ce ne sont pas des pages de contenu.
*/
export const metadata = { robots: { index: false, follow: false } }

export default function LayoutCompte({ children }) {
  return (
    <>
      <style>{`
        .promo-banner { display: none !important }
        :root { --banner-h: 0px }
        .chat-launcher, .chat-launcher-txt { display: none !important }
        html, body { overflow-x: clip !important; overflow-y: visible !important }
      `}</style>
      {children}
    </>
  )
}
