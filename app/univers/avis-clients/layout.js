import { ogImages } from '../../../lib/og'
export const metadata = {
  alternates: { canonical: '/univers/avis-clients' },
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
