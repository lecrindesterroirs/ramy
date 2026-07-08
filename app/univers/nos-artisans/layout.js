export const metadata = {
  alternates: { canonical: '/univers/nos-artisans' },
  title: "Nos Artisans Partenaires",
  description: "Mado Paris, Alain Milliat, Mariage Frères, Laura Todd, Pierre Morel : les artisans qui composent nos prestations traiteur d'entreprise.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Nos Artisans Partenaires | L'Écrin Traiteur",
    description: "Les artisans et producteurs sélectionnés par L'Écrin Traiteur : Mado Paris, Alain Milliat, Mariage Frères et plus.",
  },
}

export default function Layout({ children }) {
  return children
}
