export const metadata = {
  title: "Réceptions sur mesure traiteur Paris",
  description: "Réceptions sur mesure à Paris : cocktails de lancement, inaugurations et réceptions VIP conçues par L'Écrin Traiteur. Devis sous 24h.",
  alternates: { canonical: '/creations/receptions-sur-mesure' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Réceptions sur mesure | L'Écrin Traiteur",
    description: "Cocktails de lancement, inaugurations, réceptions VIP : des réceptions d'entreprise sur mesure à Paris et en Île-de-France.",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
