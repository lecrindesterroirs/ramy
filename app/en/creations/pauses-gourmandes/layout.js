import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'

export const metadata = {
  title: { absolute: "Afternoon treats, corporate catering Paris | L'Écrin Traiteur" },
  description: "Madeleines, macarons, loaf cakes, tartlets and cut fruit for your office afternoon break. From €6 per person, delivered from 6:30 am in Paris.",
  alternates: alternatesPourEn('/creations/pauses-gourmandes'),
  openGraph: {
    images: ogImages('/hero-pauses-gourmandes.webp'),
    title: "Afternoon treats | L'Écrin Traiteur",
    description: "Madeleines, macarons, loaf cakes, tartlets and cut fruit for your office afternoon break. From €6 per person, delivered from 6:30 am in Paris.",
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
