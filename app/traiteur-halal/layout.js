export const metadata = {
  title: "Traiteur Halal & Inclusif Entreprise — Paris & Île-de-France",
  description: "Traiteur d'entreprise halal et sans porc à Paris & IDF. Options végétariennes, vegan et sans gluten. Petits-déjeuners, plateaux repas et buffets livrés dès 6h30. Devis gratuit.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur — traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Traiteur Halal & Inclusif Entreprise | L'Écrin Traiteur",
    description: "Le traiteur d'entreprise qui régale toute l'équipe : tout halal et sans porc, options végé, vegan et sans gluten. Livré dès 6h30 à Paris & en Île-de-France.",
  },
  alternates: {
    canonical: '/traiteur-halal',
  },
}

export default function Layout({ children }) {
  return children
}
