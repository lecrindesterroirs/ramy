import { alternatesPour } from '../../lib/i18n'
import { ogImages } from '../../lib/og'

export const metadata = {
  title: { absolute: "Traiteur d'entreprise par métier à Paris : avocats, conseil, tech | L'Écrin" },
  description: "Cabinets d'avocats, conseil, tech, agences : les formats, les prix et les délais de L'Écrin Traiteur pour chaque métier. Livraison dès 6h30, devis sous 24 h.",
  alternates: alternatesPour('/metiers', { en: true }),
  openGraph: {
    images: ogImages('/hero-plateaux-essentiel.webp'),
    title: "Traiteur d'entreprise par métier à Paris | L'Écrin Traiteur",
    description: "Pour chaque métier, ce que nous livrons, à quel prix et sous quel délai. Prix HT, devis sous 24 h.",
  },
}

export default function Layout({ children }) {
  return children
}
