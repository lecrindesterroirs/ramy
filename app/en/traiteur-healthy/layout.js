import { ogImages } from '../../../lib/og'
import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  title: { absolute: 'Healthy, Vegan & Vegetarian Corporate Catering in Paris' },
  description: 'Healthy corporate caterer in Paris: seasonal fruit, farm yoghurts, pressed juices, vegetarian, vegan and gluten-free options. Delivered from 6:30 am.',
  alternates: alternatesPourEn('/traiteur-healthy'),
  openGraph: {
    images: ogImages('/plateau-fruits.webp'),
    title: "Healthy, vegan & vegetarian corporate catering | L'Écrin Traiteur",
    description: 'Seasonal fruit, farm yoghurts, pressed juices and lighter options, in vegetarian, vegan and gluten-free versions. Delivered from 6:30 am across Paris and Île-de-France.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
