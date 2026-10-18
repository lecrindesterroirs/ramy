import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
export const metadata = {
  alternates: alternatesPour('/univers/cas-clients', { en: true }),
  title: "Cas clients : nos prestations réelles",
  description: "Trois prestations réelles : les petits-déjeuners de Bain & Company, 100 personnes chez Sia Partners, un séminaire de 3 jours. Quantités et horaires.",
  openGraph: {
    images: ogImages('/hero-petitdej.webp'),
    title: "Cas clients | L'Écrin Traiteur",
    description: "Trois prestations réelles, avec les quantités et les horaires livrés.",
  },
}

export default function Layout({ children }) {
  return children
}
