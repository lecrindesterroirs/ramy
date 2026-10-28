import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
export const metadata = {
  title: { absolute: "Événement d'entreprise sur mesure à Paris | L'Écrin Traiteur" },
  description: "Inauguration, séminaire, soirée d'entreprise : cocktail, animations et maîtres d'hôtel chiffrés poste par poste. Paris et Île-de-France, devis sous 24h.",
  alternates: alternatesPour('/creations/receptions-sur-mesure', { en: true }),
  openGraph: {
    images: ogImages('/cocktail-dinatoire.webp'),
    title: "Événement d'entreprise sur mesure | L'Écrin Traiteur",
    description: "Cocktail, animations culinaires et maîtres d'hôtel pour vos événements d'entreprise à Paris et en Île-de-France.",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
