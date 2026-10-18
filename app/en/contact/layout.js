import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  alternates: alternatesPourEn('/contact'),
  title: { absolute: "Contact | L'Écrin Traiteur" },
  description: "Contact L'Écrin Traiteur to arrange your next corporate event in Paris and the Paris region. Reply within 24 hours.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, corporate caterer in Paris and the Paris region" }],
    title: "Contact | L'Écrin Traiteur",
    description: "Reply within 24 hours for your corporate event in Paris and the Paris region.",
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
