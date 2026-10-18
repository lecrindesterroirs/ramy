import { alternatesPour } from '../../lib/i18n'
import { ogImages } from '../../lib/og'
export const metadata = {
  title: { absolute: "Traiteur halal d'entreprise à Paris : tout sans porc" },
  description: "Traiteur d'entreprise tout halal et sans porc à Paris & IDF. Options végé, vegan et sans gluten, livraison dès 6h30. Devis gratuit sous 24h.",
  openGraph: {
    images: ogImages('/hero-petitdej.webp'),
    title: "Traiteur Halal & Inclusif Entreprise | L'Écrin Traiteur",
    description: "Le traiteur d'entreprise qui régale toute l'équipe : tout halal et sans porc, options végé, vegan et sans gluten. Livré dès 6h30 à Paris & en Île-de-France.",
  },
  alternates: alternatesPour('/traiteur-halal', { en: true }),
}

export default function Layout({ children }) {
  return children
}
