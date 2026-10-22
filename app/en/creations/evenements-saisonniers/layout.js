import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'

export const metadata = {
  title: { absolute: "Seasonal Corporate Events Calendar | L'Écrin Traiteur" },
  description: 'Galette, Candlemas, Pink October, Halloween, Christmas: the corporate events calendar with dates and prices, delivered across Paris and Île-de-France.',
  alternates: alternatesPourEn('/creations/evenements-saisonniers'),
  openGraph: {
    images: ogImages('/maitre-hotel-petit-dejeuner-salon.webp', "Seasonal corporate events, L'Écrin Traiteur"),
    title: "Seasonal corporate events | L'Écrin Traiteur",
    description: 'The corporate events calendar, with dates and prices, delivered across Paris and Île-de-France.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
