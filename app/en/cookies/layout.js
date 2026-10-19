import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  alternates: alternatesPourEn('/cookies'),
  title: { absolute: "Cookie Policy | L'Écrin Traiteur" },
  description: 'The cookies used on lecrin-traiteur.fr and how to manage them. Courtesy translation; only the French version has contractual force.',
  robots: { index: true, follow: false },
}

export default function Layout({ children }) {
  return children
}
