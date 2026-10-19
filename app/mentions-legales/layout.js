import { alternatesPour } from '../../lib/i18n'

export const metadata = {
  alternates: alternatesPour('/mentions-legales', { en: true }),
  title: "Mentions légales",
  description: "Mentions légales de L'Écrin Traiteur · informations légales, éditeur du site, hébergeur.",
  robots: { index: true, follow: false },
}

export default function Layout({ children }) {
  return children
}
