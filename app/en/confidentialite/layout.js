import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  alternates: alternatesPourEn('/confidentialite'),
  title: { absolute: "Privacy Policy | L'Écrin Traiteur" },
  description: 'How L\'Écrin Traiteur collects and uses your personal data, under the GDPR. Courtesy translation; only the French version has contractual force.',
  robots: { index: true, follow: false },
}

export default function Layout({ children }) {
  return children
}
