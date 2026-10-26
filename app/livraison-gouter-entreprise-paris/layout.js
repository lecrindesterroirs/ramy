import { alternatesPour } from '../../lib/i18n'
import { ogImages } from '../../lib/og'
import { PAUSE_DES, euroFr } from '../../lib/prixEntree'

export const metadata = {
  title: { absolute: `Livraison de goûter en entreprise à Paris dès ${euroFr(PAUSE_DES)} HT | L'Écrin Traiteur` },
  description: `Livraison de goûter d'entreprise à Paris et en Île-de-France : pause gourmande dès ${euroFr(PAUSE_DES)} HT par personne, livrée à l'heure de votre pause par notre équipe. Commande jusqu'à 14h la veille, devis sous 24 h.`,
  alternates: alternatesPour('/livraison-gouter-entreprise-paris'),
  openGraph: {
    images: ogImages('/hero-pauses-gourmandes.webp'),
    title: `Livraison de goûter en entreprise à Paris dès ${euroFr(PAUSE_DES)} HT`,
    description: `Horaires, zones, délais et prix de la livraison de goûter d'entreprise à Paris et en Île-de-France.`,
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
