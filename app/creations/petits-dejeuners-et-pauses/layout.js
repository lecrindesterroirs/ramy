export const metadata = {
  title: "Petits-Déjeuners & Pauses d'entreprise à Paris",
  description: "Petits-déjeuners d'entreprise à Paris : viennoiseries artisanales, jus Alain Milliat, thés Mariage Frères livrés dès 6h30 en Île-de-France.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur — traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Petits-Déjeuners & Pauses d'entreprise | L'Écrin Traiteur",
    description: "Viennoiseries artisanales, jus Alain Milliat, thés Mariage Frères livrés dès 6h30 à Paris et Île-de-France.",
  },
  alternates: { canonical: '/creations/petits-dejeuners-et-pauses' },
}

export default function Layout({ children }) {
  return children
}
