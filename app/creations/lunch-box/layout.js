export const metadata = {
  alternates: { canonical: '/creations/lunch-box' },
  title: "Lunch box traiteur Paris",
  description: "Lunch box individuelles fraîches livrées dans vos bureaux à Paris : entrée, sandwich, club ou wrap, dessert artisanal. Livraison dès 6h30.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Lunch Box Traiteur Paris | L'Écrin Traiteur",
    description: "Traiteur lunch box Paris : produits artisanaux, entrée + sandwich + dessert, livraison lundi–vendredi dès 6h30 dans toute l'Île-de-France.",
  },
}

export default function Layout({ children }) {
  return children
}
