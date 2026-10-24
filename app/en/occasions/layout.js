import { ogImages } from '../../../lib/og'
import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  title: { absolute: "Corporate Catering by Occasion in Paris | L'Écrin Traiteur" },
  description: 'A board meeting, an offsite, a client welcome, a training day, an afterwork: what we recommend for each, with prices and quantities. Delivered from 6:30 am in Paris.',
  alternates: alternatesPourEn('/occasions'),
  openGraph: {
    images: ogImages(),
    title: "Catering by occasion | L'Écrin Traiteur",
    description: 'Ten occasions, each with what to serve, how much per person and what it costs.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
