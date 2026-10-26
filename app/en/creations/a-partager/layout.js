import { alternatesPourEn } from '../../../../lib/i18n'
import { ogImages } from '../../../../lib/og'

export const metadata = {
  title: { absolute: "Corporate Buffet Catering in Paris from €34.90 excl. VAT | L'Écrin Traiteur" },
  description: 'Corporate buffet catering in Paris, delivered from 6:30 am: sharing menus from €34.90 excl. VAT per person, and the budget of each buffet format. Quote within 24 hours.',
  alternates: alternatesPourEn('/creations/a-partager'),
  openGraph: {
    images: ogImages('/hero-a-partager.webp'),
    title: "Sharing menus | L'Écrin Traiteur",
    description: 'Generous menus to share in the middle of the table, delivered in Paris and the Paris region.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
