import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
export const metadata = {
  alternates: alternatesPour('/creations/boissons', { en: true }),
  title: "Boissons artisanales pour entreprises",
  description: "Boissons traiteur à Paris : jus Alain Milliat, thés Mariage Frères, cafés bio et eaux pour vos pauses et petits-déjeuners d'entreprise.",
  openGraph: {
    images: ogImages('/boissons-hero.webp'),
    title: "Boissons artisanales pour entreprises | L'Écrin Traiteur",
    description: "Jus Alain Milliat, thés Mariage Frères, cafés bio. Des boissons choisies pour leur qualité.",
  },
}

export default function Layout({ children }) {
  return children
}
