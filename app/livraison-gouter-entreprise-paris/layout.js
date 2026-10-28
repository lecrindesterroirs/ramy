import { alternatesPour } from '../../lib/i18n'
import { ogImages } from '../../lib/og'
import { PAUSE_DES, euroFr } from '../../lib/prixEntree'

export const metadata = {
  title: { absolute: `Livraison goûter entreprise Paris dès ${euroFr(PAUSE_DES)} HT | L'Écrin` },
  description: `Livraison de goûter d'entreprise à Paris et en IDF : pause dès ${euroFr(PAUSE_DES)} HT par personne, livrée à l'heure de votre pause. Commande jusqu'à 10h la veille.`,
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
