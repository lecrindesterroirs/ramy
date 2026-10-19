import { alternatesPour } from '../../lib/i18n'

export const metadata = {
  alternates: alternatesPour('/confidentialite', { en: true }),
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de L'Écrin Traiteur · collecte et traitement des données personnelles (RGPD).",
  robots: { index: true, follow: false },
}

export default function Layout({ children }) {
  return children
}
