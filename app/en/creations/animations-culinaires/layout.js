import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'

export const metadata = {
  title: { absolute: "Live food stations, corporate catering Paris | L'Écrin Traiteur" },
  description: "29 live food stations for your corporate events in Paris: barista, crêpes, salmon carving, mini burgers, mocktails. Setup included, on quote.",
  alternates: alternatesPourEn('/creations/animations-culinaires'),
  openGraph: {
    images: ogImages('/hero-cocktail.webp'),
    title: "Live food stations | L'Écrin Traiteur",
    description: "29 live food stations for your corporate events in Paris: barista, crêpes, salmon carving, mini burgers, mocktails. Setup included, on quote.",
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
