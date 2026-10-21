import { ogImages } from '../../lib/og'
import { alternatesPour } from '../../lib/i18n'
export const metadata = {
  title: { absolute: "Traiteur éco-responsable en entreprise à Paris et IDF" },
  description: "Traiteur d'entreprise éco-responsable : vaisselle en bois, carton et pulpe de canne, récupération de la vaisselle et des thermos. Livré dès 6h30 à Paris.",
  openGraph: {
    images: ogImages('/cocktail-dinatoire.webp'),
    title: "Traiteur Éco-Responsable Entreprise | L'Écrin Traiteur",
    description: "Circuit court, vaisselle en bois et pulpe de canne, récupération de la vaisselle et des thermos. Un traiteur d'entreprise qui régale sans gaspiller, livré dès 6h30 à Paris & en IDF.",
  },
  alternates: alternatesPour('/traiteur-eco-responsable', { en: true }),
}

export default function Layout({ children }) {
  return children
}
