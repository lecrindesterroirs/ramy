import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
export const metadata = {
  alternates: alternatesPour('/creations/lunch-box', { en: true }),
  title: "Lunch box traiteur Paris",
  description: "Lunch box individuelles fraîches livrées dans vos bureaux à Paris : entrée, sandwich, club ou wrap, dessert artisanal. Livraison dès 6h30.",
  openGraph: {
    images: ogImages('/hero-plateau-signature.webp'),
    title: "Lunch Box Traiteur Paris | L'Écrin Traiteur",
    description: "Traiteur lunch box Paris : produits artisanaux, entrée + sandwich + dessert, livraison lundi à vendredi dès 6h30 dans toute l'Île-de-France.",
  },
}

export default function Layout({ children }) {
  return children
}
