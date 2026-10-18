import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
export const metadata = {
  alternates: alternatesPour('/univers/notre-methode', { en: true }),
  title: "Notre méthode d'écriture",
  description: "Qui écrit nos guides, d'où viennent les prix et les quantités, quelle part revient à l'intelligence artificielle, et comment nous corrigeons.",
  openGraph: {
    images: ogImages('/hero-bg2.webp'),
    title: "Notre méthode | L'Écrin Traiteur",
    description: "Comment L'Écrin Traiteur écrit, vérifie et met à jour les guides de son Journal.",
  },
}

export default function Layout({ children }) {
  return children
}
