import { ogImages } from '../../lib/og'
import { alternatesPour } from '../../lib/i18n'
export const metadata = {
  title: { absolute: "Traiteur healthy, vegan et végétarien en entreprise" },
  description: "Fruits de saison, yaourts fermiers, jus pressés, adaptations sans gluten : petits-déjeuners healthy et végétariens livrés dès 6h30 à Paris et en IDF.",
  openGraph: {
    images: ogImages('/hero-a-partager.webp'),
    title: "Traiteur Healthy, Vegan & Végétarien | L'Écrin Traiteur",
    description: "Fruits de saison, yaourts fermiers, jus pressés et options végétariennes, vegan, sans sacrifier le plaisir. Un traiteur d'entreprise livré dès 6h30 à Paris & en IDF.",
  },
  alternates: alternatesPour('/traiteur-healthy', { en: true }),
}

export default function Layout({ children }) {
  return children
}
