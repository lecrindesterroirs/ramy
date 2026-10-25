import { alternatesPour } from '../../lib/i18n'
import { ogImages } from '../../lib/og'
import { CALC } from '../../lib/calculateurPage'

// Calculateur de quantités (25/10/2026). La version /embed redéfinit ses propres métadonnées (noindex).
export const metadata = {
  title: { absolute: CALC.fr.metaTitle },
  description: CALC.fr.description,
  alternates: alternatesPour('/calculateur-quantites', { en: true }),
  openGraph: {
    images: ogImages('/hero-petitdej.webp'),
    title: "Calculateur de quantités traiteur | L'Écrin Traiteur",
    description: CALC.fr.description,
  },
}

export default function Layout({ children }) {
  return children
}
