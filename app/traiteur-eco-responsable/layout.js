import { ogImages } from '../../lib/og'
import { alternatesPour } from '../../lib/i18n'
export const metadata = {
  title: { absolute: "Traiteur éco-responsable en entreprise à Paris et IDF" },
  description: "Traiteur d'entreprise éco-responsable : plateaux en bois, vaisselle réutilisable reprise après l'événement, zéro jetable sur demande. Livré dès 6h30 à Paris.",
  openGraph: {
    images: ogImages('/cocktail-dinatoire.webp'),
    title: "Traiteur Éco-Responsable Entreprise | L'Écrin Traiteur",
    description: "Plateaux en bois, vaisselle réutilisable reprise après l'événement, quantités calées sur l'effectif. Livré dès 6h30 à Paris et en Île-de-France.",
  },
  alternates: alternatesPour('/traiteur-eco-responsable', { en: true }),
}

export default function Layout({ children }) {
  return children
}
