export const metadata = {
  alternates: { canonical: '/creations/boissons' },
  title: "Boissons artisanales pour entreprises",
  description: "Boissons traiteur à Paris : jus Alain Milliat, thés Mariage Frères, cafés bio et eaux pour vos pauses et petits-déjeuners d'entreprise.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Boissons artisanales pour entreprises | L'Écrin Traiteur",
    description: "Jus Alain Milliat, thés Mariage Frères, cafés bio. Des boissons choisies pour leur qualité.",
  },
}

export default function Layout({ children }) {
  return children
}
