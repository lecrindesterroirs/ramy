export const metadata = {
  title: "Traiteur Healthy, Vegan & Végétarien Entreprise",
  description: "Traiteur d'entreprise healthy, vegan et végétarien à Paris & IDF : fruits de saison, yaourts fermiers, jus pressés, adaptations sans gluten. Petits-déjeuners équilibrés livrés dès 6h30. Devis gratuit.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Traiteur Healthy, Vegan & Végétarien | L'Écrin Traiteur",
    description: "Fruits de saison, yaourts fermiers, jus pressés et options végétariennes, vegan, sans sacrifier le plaisir. Un traiteur d'entreprise livré dès 6h30 à Paris & en IDF.",
  },
  alternates: {
    canonical: '/traiteur-healthy',
  },
}

export default function Layout({ children }) {
  return children
}
