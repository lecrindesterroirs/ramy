export const metadata = {
  alternates: { canonical: '/contact' },
  title: "Contact",
  description: "Contactez L'Écrin Traiteur pour organiser votre prochain événement d'entreprise à Paris et en Île-de-France. Réponse sous 24h.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur — traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Contact | L'Écrin Traiteur",
    description: "Contactez L'Écrin Traiteur. Réponse sous 24h pour votre événement d'entreprise à Paris et Île-de-France.",
  },
}

export default function Layout({ children }) {
  return children
}
