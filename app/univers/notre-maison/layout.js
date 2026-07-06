export const metadata = {
  alternates: { canonical: '/univers/notre-maison' },
  title: "Notre Maison — L'histoire et la conviction de la maison",
  description: "Née d'une conviction simple : les pauses d'entreprise méritent mieux. Découvrez l'histoire, l'approche et les valeurs de L'Écrin Traiteur.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur — traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Notre Maison | L'Écrin Traiteur",
    description: "L'histoire de L'Écrin Traiteur : artisans partenaires, livraison soignée, produits de qualité pour vos équipes.",
  },
}

export default function Layout({ children }) {
  return children
}
