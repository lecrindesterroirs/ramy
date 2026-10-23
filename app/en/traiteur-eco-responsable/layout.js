import { ogImages } from '../../../lib/og'
import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  title: { absolute: 'Sustainable Corporate Catering in Paris & Île-de-France' },
  description: 'Eco-friendly corporate caterer in Paris: wooden platters, reusable tableware collected after the event, no disposables on request. Delivered from 6:30 am.',
  alternates: alternatesPourEn('/traiteur-eco-responsable'),
  openGraph: {
    images: ogImages('/cocktail-dinatoire.webp'),
    title: "Sustainable corporate catering | L'Écrin Traiteur",
    description: 'Wooden platters, reusable tableware collected after the event, quantities matched to the headcount. Delivered from 6:30 am across Paris and Île-de-France.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
