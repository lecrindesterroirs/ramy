import { alternatesPourEn } from '../../../../lib/i18n'
import { ogImages } from '../../../../lib/og'

export const metadata = {
  title: { absolute: "Sharing menus for team lunches | L'Écrin Traiteur" },
  description: 'Sharing buffets for company lunches in Paris: salads, gourmet boards and canapés from €34.90 excl. VAT per person, delivered plated and ready to serve.',
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
