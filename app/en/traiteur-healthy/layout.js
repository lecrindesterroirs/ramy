import { ogImages } from '../../../lib/og'
import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  title: { absolute: 'Healthy, Vegan & Vegetarian Corporate Catering in Paris' },
  description: 'Healthy corporate catering in Paris: fruit skewers, yoghurts, compotes, vegetarian lunch trays and gluten-free options, delivered from 6:30 am.',
  alternates: alternatesPourEn('/traiteur-healthy'),
  openGraph: {
    images: ogImages('/plateau-brochettes-fruits-v2.webp'),
    title: "Healthy, vegan & vegetarian corporate catering | L'Écrin Traiteur",
    description: 'Fruit skewers, yoghurts, compotes, vegetarian lunch trays and gluten-free options, delivered from 6:30 am across Paris and Île-de-France.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
