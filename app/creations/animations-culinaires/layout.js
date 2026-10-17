import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
export const metadata = {
  alternates: alternatesPour('/creations/animations-culinaires', { en: true }),
  title: "Animations culinaires traiteur Paris",
  description: "Animations culinaires live à Paris : barista, ateliers œufs, pancakes, pasta, street food pour vos séminaires et événements d'entreprise en Île-de-France.",
  openGraph: {
    images: ogImages('/hero-cocktail.webp'),
    title: "Animations Culinaires Traiteur Paris | L'Écrin Traiteur",
    description: "Ateliers et bars animés en direct · brunch, déjeuner gourmet, street food, douceurs et bars à boissons · pour vos événements d'entreprise en Île-de-France.",
  },
}

export default function Layout({ children }) {
  return children
}
