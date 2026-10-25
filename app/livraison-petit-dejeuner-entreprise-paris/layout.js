import { alternatesPour } from '../../lib/i18n'
import { ogImages } from '../../lib/og'
import { PDJ_DES } from '../../lib/prixEntree'

export const metadata = {
  title: { absolute: `Livraison de petit-déjeuner en entreprise à Paris dès 6h30 | L'Écrin Traiteur` },
  description: `Livraison de petit-déjeuner d'entreprise à Paris et en Île-de-France : dès 6h30, par notre équipe, formule Classique ${PDJ_DES} € HT par personne. Commande jusqu'à 14h la veille, devis sous 24 h.`,
  alternates: alternatesPour('/livraison-petit-dejeuner-entreprise-paris'),
  openGraph: {
    images: ogImages('/hero-petitdej.webp'),
    title: `Livraison de petit-déjeuner en entreprise à Paris dès 6h30`,
    description: `Zones, horaires, délais et prix de la livraison de petit-déjeuner d'entreprise à Paris et en Île-de-France.`,
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
