import './tunnel.css'

/*
  Le tunnel a son propre habillage : pas de navigation du site, pas de bandeau
  promotionnel, pas de barre mobile. Une seule sortie à l'écran, celle qui fait
  avancer la commande. Les pages ne sont pas indexables : ce ne sont pas des
  pages de contenu, et une URL de panier dans Google n'aurait aucun sens.
*/

export const metadata = {
  robots: { index: false, follow: false },
}

export default function LayoutCommande({ children }) {
  return (
    <>
      {/* Le bandeau promotionnel vit dans le layout racine : on le replie ici
          plutôt que de toucher à la racine, que d'autres chantiers modifient. */}
      <style>{`
        .promo-banner { display: none !important }
        :root { --banner-h: 0px }
        /* L'assistant reste joignable, mais il ne doit pas se poser sur le
           bouton qui fait avancer la commande : on le remonte au-dessus de
           la barre du bas. */
        .chat-launcher { bottom: 136px !important }

        /*
          Le site pose overflow-x: hidden sur html ET sur body (globals.css
          l.126 et l.135). Un ancêtre qui « cache » le débordement devient une
          boîte de défilement, et une colonne en position collante à
          l'intérieur n'a plus rien à quoi s'accrocher : le calendrier
          repartait avec la page. « clip » coupe pareil horizontalement sans
          créer cette boîte, donc la colonne colle de nouveau.
        */
        html, body { overflow-x: clip !important; overflow-y: visible !important }
      `}</style>
      {children}
    </>
  )
}
