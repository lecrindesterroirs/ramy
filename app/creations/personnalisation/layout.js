export const metadata = {
  title: "Personnalisation traiteur entreprise",
  description: "Personnalisez vos prestations traiteur : number cakes, plaques chocolat au message et packaging aux couleurs de votre entreprise à Paris.",
  alternates: { canonical: '/creations/personnalisation' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Personnalisation traiteur | L'Écrin Traiteur",
    description: "Number cakes, packaging personnalisé, plaques chocolat au message de l'équipe : des prestations traiteur à votre image.",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
