export const metadata = {
  alternates: { canonical: '/journal' },
  title: "Le Journal",
  description: "Conseils, inspirations et guides pour organiser vos événements d'entreprise à Paris : petit-déjeuner, cocktail, plateau repas. Le Journal.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Le Journal | L'Écrin Traiteur",
    description: "Conseils pratiques et inspirations pour organiser vos événements d'entreprise. Guides traiteur par L'Écrin.",
  },
}

export default function Layout({ children }) {
  return children
}
