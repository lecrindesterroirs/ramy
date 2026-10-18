import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  alternates: alternatesPourEn('/devis'),
  title: { absolute: "Get a quote | L'Écrin Traiteur" },
  description: 'Tell us about your event and get a tailored quote within 24 hours: breakfasts, cocktail receptions, buffets and lunch trays in Paris.',
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, corporate caterer in Paris and the Paris region" }],
    title: "Get a quote | L'Écrin Traiteur",
    description: 'A tailored quote within 24 hours for your corporate event in Paris and the Paris region.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
