import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
export const metadata = {
  title: "Réceptions sur mesure traiteur Paris",
  description: "Réceptions sur mesure à Paris : cocktails de lancement, inaugurations et réceptions VIP conçues par L'Écrin Traiteur. Devis sous 24h.",
  alternates: alternatesPour('/creations/receptions-sur-mesure', { en: true }),
  openGraph: {
    images: ogImages('/img-reception.webp'),
    title: "Réceptions sur mesure | L'Écrin Traiteur",
    description: "Cocktails de lancement, inaugurations, réceptions VIP : des réceptions d'entreprise sur mesure à Paris et en Île-de-France.",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
