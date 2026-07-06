export const metadata = {
  title: "Notre histoire — traiteur d'entreprise",
  description: "L'Écrin Traiteur : notre histoire et notre conviction. Des artisans sélectionnés et un sens du détail pour le traiteur d'entreprise à Paris.",
  alternates: { canonical: '/a-propos' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur — traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Notre histoire | L'Écrin Traiteur",
    description: "Des artisans choisis, un sens du détail constant : découvrez la maison L'Écrin Traiteur, traiteur d'entreprise à Paris.",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
