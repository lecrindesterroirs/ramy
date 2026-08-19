export const metadata = {
  alternates: { canonical: '/creations/a-partager' },
  title: "Buffet à partager traiteur Paris",
  description: "Menus à partager pour vos déjeuners d'équipe à Paris : salades, planches et pièces cocktail dressés pour 8 à 12 personnes. Traiteur entreprise, livraison Île-de-France.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Buffet à Partager Traiteur Paris | L'Écrin Traiteur",
    description: "Menus généreux à partager en entreprise : salades, planches et pièces cocktail composés le matin, livraison lundi à vendredi dès 6h30 en Île-de-France.",
  },
}

export default function Layout({ children }) {
  return children
}
