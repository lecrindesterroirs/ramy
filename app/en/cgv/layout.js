import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  alternates: alternatesPourEn('/cgv'),
  title: { absolute: "Terms and Conditions of Sale | L'Écrin Traiteur" },
  description: 'Terms and conditions of sale of L\'Écrin Traiteur: orders, deliveries, payment and cancellation. Courtesy translation; only the French version has contractual force.',
  robots: { index: true, follow: false },
}

export default function Layout({ children }) {
  return children
}
