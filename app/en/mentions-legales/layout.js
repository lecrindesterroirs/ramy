import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  alternates: alternatesPourEn('/mentions-legales'),
  title: { absolute: "Legal Notice | L'Écrin Traiteur" },
  description: 'Legal notice for lecrin-traiteur.fr: publisher, hosting provider, intellectual property and database rights. Courtesy translation; only the French version has contractual force.',
  robots: { index: true, follow: false },
}

export default function Layout({ children }) {
  return children
}
