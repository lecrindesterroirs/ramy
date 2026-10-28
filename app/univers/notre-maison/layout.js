import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
export const metadata = {
  alternates: alternatesPour('/univers/notre-maison', { en: true }),
  title: "Notre Maison, histoire & conviction",
  description: "Née d'une conviction simple : les pauses d'entreprise méritent mieux. Découvrez l'histoire, l'approche et les valeurs de L'Écrin Traiteur.",
  openGraph: {
    images: ogImages('/hero-bg2.webp'),
    title: "Notre Maison | L'Écrin Traiteur",
    description: "L'histoire de L'Écrin Traiteur : artisans nommés, commande jusqu'à 10h la veille, livraison dès 6h30 à Paris et en Île-de-France.",
  },
}

export default function Layout({ children }) {
  return children
}
