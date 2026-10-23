import { ogImages } from '../../lib/og'
import { alternatesPour } from '../../lib/i18n'
export const metadata = {
  title: { absolute: "Traiteur healthy, vegan et végétarien en entreprise" },
  description: "Brochettes de fruits, yaourts, compotes, plateaux repas végétariens et options sans gluten, livrés dès 6h30 à Paris et en Île-de-France. Prix publiés.",
  openGraph: {
    images: ogImages('/plateau-brochettes-fruits-v2.webp'),
    title: "Traiteur Healthy, Vegan & Végétarien | L'Écrin Traiteur",
    description: "Brochettes de fruits, yaourts, compotes, plateaux végétariens et options sans gluten, livrés dès 6h30 à Paris et en Île-de-France.",
  },
  alternates: alternatesPour('/traiteur-healthy', { en: true }),
}

export default function Layout({ children }) {
  return children
}
