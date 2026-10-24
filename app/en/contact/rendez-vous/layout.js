import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'

export const metadata = {
  title: { absolute: "Book a 15-Minute Call | L'Écrin Traiteur" },
  description: 'A no-commitment 15-minute call to frame your corporate catering needs in Paris and Île-de-France. Pick the slot that suits you.',
  alternates: alternatesPourEn('/contact/rendez-vous'),
  openGraph: {
    images: ogImages(),
    title: "Book a 15-minute call | L'Écrin Traiteur",
    description: 'A short, no-commitment conversation with the person who will handle your project.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
