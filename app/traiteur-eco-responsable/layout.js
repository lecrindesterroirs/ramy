export const metadata = {
  title: { absolute: "Traiteur éco-responsable en entreprise à Paris et IDF" },
  description: "Traiteur d'entreprise éco-responsable : vaisselle en bois, carton et pulpe de canne, récupération de la vaisselle et des thermos. Livré dès 6h30 à Paris.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Traiteur Éco-Responsable Entreprise | L'Écrin Traiteur",
    description: "Circuit court, vaisselle en bois et pulpe de canne, récupération de la vaisselle et des thermos. Un traiteur d'entreprise qui régale sans gaspiller, livré dès 6h30 à Paris & en IDF.",
  },
  alternates: {
    canonical: '/traiteur-eco-responsable',
  },
}

export default function Layout({ children }) {
  return children
}
