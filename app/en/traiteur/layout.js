import { ogImages } from '../../../lib/og'
import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  title: { absolute: "Corporate Catering in Paris: Halal, Delivered from 6:30 am" },
  description: 'Corporate catering in Paris and Île-de-France: office breakfast from €8 per person, lunch trays, cocktails. Halal and pork-free, delivered from 6:30 am. Quote in 24 hours.',
  alternates: alternatesPourEn('/traiteur'),
  openGraph: {
    images: ogImages('/hero-bg.webp'),
    title: "Corporate catering in Paris & Île-de-France | L'Écrin Traiteur",
    description: 'Corporate breakfasts, lunch trays and cocktail receptions delivered across Île-de-France from 6:30 am.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
