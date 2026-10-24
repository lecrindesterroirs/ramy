import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
export const metadata = {
  title: "Nos Engagements, artisans & qualité",
  description: "Les engagements de L'Écrin Traiteur : artisans sélectionnés, produits sans huile de palme, prix annoncés, devis sous 24 h, commande jusqu'à la veille 14h, halal sans supplément.",
  openGraph: {
    images: ogImages('/cocktail-dinatoire.webp'),
    title: "Nos Engagements | L'Écrin Traiteur",
    description: "Artisans sélectionnés, produits bio, circuits courts : les engagements qualité et responsabilité de L'Écrin Traiteur.",
  },
  alternates: alternatesPour('/univers/nos-engagements', { en: true }),
}

export default function Layout({ children }) {
  return children
}
