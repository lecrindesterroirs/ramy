import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'

export const metadata = {
  title: { absolute: "Drinks, corporate catering Paris | L'Écrin Traiteur" },
  description: "Alain Milliat juices, Mariage Frères teas, flasks of organic coffee and water. From €3.80 excl. VAT, delivered from 6:30 am in Paris.",
  alternates: alternatesPourEn('/creations/boissons'),
  openGraph: {
    images: ogImages('/boissons-hero.webp'),
    title: "Drinks | L'Écrin Traiteur",
    description: "Alain Milliat juices, Mariage Frères teas, flasks of organic coffee and water. From €3.80 excl. VAT, delivered from 6:30 am in Paris.",
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
