export const metadata = {
  alternates: { canonical: '/univers/nos-artisans' },
  title: "Nos Artisans Partenaires",
  description: "Alain Milliat, Mariage Frères, Laura Todd, Pierre Morel et nos autres artisans : ceux qui composent nos prestations traiteur d'entreprise.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Nos Artisans Partenaires | L'Écrin Traiteur",
    description: "Les artisans et producteurs sélectionnés par L'Écrin Traiteur : Alain Milliat, Mariage Frères, Laura Todd, Pierre Morel et plus.",
  },
}

export default function Layout({ children }) {
  return children
}
