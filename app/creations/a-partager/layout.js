import { ogImages } from '../../../lib/og'
export const metadata = {
  alternates: { canonical: '/creations/a-partager' },
  title: "Buffet à partager traiteur Paris",
  description: "Menus à partager pour vos déjeuners d'équipe à Paris : salades, planches et pièces cocktail dressés pour 8 à 12 personnes. Livraison en Île-de-France.",
  openGraph: {
    images: ogImages('/hero-a-partager.webp'),
    title: "Buffet à Partager Traiteur Paris | L'Écrin Traiteur",
    description: "Menus généreux à partager en entreprise : salades, planches et pièces cocktail composés le matin, livraison lundi à vendredi dès 6h30 en Île-de-France.",
  },
}

export default function Layout({ children }) {
  return children
}
