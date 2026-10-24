import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
import { LUNCHBOX_DES, euroFr } from '../../../lib/prixEntree'

const TITLE = `Lunch box entreprise Paris dès ${euroFr(LUNCHBOX_DES)} HT, livrée dès 6h30`
export const metadata = {
  alternates: alternatesPour('/creations/lunch-box', { en: true }),
  title: { absolute: TITLE },
  description: "Lunch box individuelles fraîches livrées dans vos bureaux à Paris : entrée, sandwich, club ou mini wrap roulé, dessert artisanal. Livraison dès 6h30.",
  openGraph: {
    images: ogImages('/hero-plateau-signature.webp'),
    title: TITLE,
    description: "Traiteur lunch box Paris : produits artisanaux, entrée + sandwich + dessert, livraison lundi à vendredi dès 6h30 dans toute l'Île-de-France.",
  },
}

export default function Layout({ children }) {
  return children
}
