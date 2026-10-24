import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'

export const metadata = {
  title: { absolute: "Lunch boxes, corporate catering Paris | L'Écrin Traiteur" },
  description: "Five lunch boxes with a choice of starter and dessert, filled the same morning. From €18.90 per person, delivered from 6:30 am in Paris.",
  alternates: alternatesPourEn('/creations/lunch-box'),
  openGraph: {
    images: ogImages('/hero-plateau-signature.webp'),
    title: "Lunch boxes | L'Écrin Traiteur",
    description: "Five lunch boxes with a choice of starter and dessert, filled the same morning. From €18.90 per person, delivered from 6:30 am in Paris.",
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
