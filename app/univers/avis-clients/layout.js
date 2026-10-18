import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
export const metadata = {
  alternates: alternatesPour('/univers/avis-clients', { en: true }),
  title: { absolute: "Avis clients L'Écrin Traiteur : note Google et références" },
  description: "Que pensent les entreprises de L'Écrin Traiteur ? Note Google, témoignages d'office managers (Le Monde, Sia Partners, Stellantis), clients comme Bain & Company, Chanel et AbbVie.",
  openGraph: {
    images: ogImages('/hero-bg.webp'),
    title: "Avis clients | L'Écrin Traiteur",
    description: "Note Google, témoignages et références de L'Écrin Traiteur.",
  },
}

export default function Layout({ children }) {
  return children
}
