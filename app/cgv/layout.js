import { alternatesPour } from '../../lib/i18n'

export const metadata = {
  alternates: alternatesPour('/cgv', { en: true }),
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente de L'Écrin Traiteur · commandes, livraisons, paiements et politique de retour.",
  robots: { index: true, follow: false },
}

export default function Layout({ children }) {
  return children
}
