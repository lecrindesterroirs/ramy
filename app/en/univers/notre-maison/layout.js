import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'

export const metadata = {
  title: { absolute: "Our House: story & convictions | L'Écrin Traiteur" },
  description: "Who we are: a corporate caterer in Boulogne-Billancourt, founded in 2025, delivering to offices across Paris and Île-de-France from 6:30 am. Named makers, halal and pork-free menu.",
  alternates: alternatesPourEn('/univers/notre-maison'),
  openGraph: {
    images: ogImages('/hero-bg2.webp'),
    title: "Our House | L'Écrin Traiteur",
    description: 'A corporate caterer built on named makers rather than a central kitchen.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
