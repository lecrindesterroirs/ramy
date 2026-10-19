import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'

export const metadata = {
  title: { absolute: "Seasonal Corporate Events in Paris | L'Écrin Traiteur" },
  description: "Galette des Rois, Candlemas, Halloween, Christmas: catering for every moment of the year, delivered to your offices in Paris.",
  alternates: alternatesPourEn('/creations/evenements-saisonniers'),
  openGraph: {
    images: ogImages('/img-reception.webp'),
    title: "Seasonal corporate events | L'Écrin Traiteur",
    description: "Galette des Rois, Candlemas, Halloween, Christmas… catering for every moment of the year.",
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
