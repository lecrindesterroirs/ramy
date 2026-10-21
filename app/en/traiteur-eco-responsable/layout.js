import { ogImages } from '../../../lib/og'
import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  title: { absolute: 'Sustainable Corporate Catering in Paris & Île-de-France' },
  description: 'Sustainable corporate caterer: wood, card and cane-pulp tableware, reusable tableware and thermoses collected. Delivered from 6:30 am across Paris.',
  alternates: alternatesPourEn('/traiteur-eco-responsable'),
  openGraph: {
    images: ogImages('/cocktail-dinatoire.webp'),
    title: "Sustainable corporate catering | L'Écrin Traiteur",
    description: 'Short supply chains, wood and cane-pulp tableware, tableware and thermoses collected. A corporate caterer that feeds people well without waste, delivered from 6:30 am across Paris and Île-de-France.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
