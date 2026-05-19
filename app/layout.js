import './globals.css'
import { CartProvider } from '../context/CartContext'

export const metadata = {
  title: {
    default: "L'Écrin Traiteur | Traiteur d'entreprise à Paris et Île-de-France",
    template: "%s | L'Écrin Traiteur",
  },
  description: "Petits-déjeuners, plateaux repas, cocktails et buffets livrés pour vos événements d'entreprise. Artisans sélectionnés, livraison dès 6h30 à Paris et en Île-de-France.",
  keywords: ["traiteur entreprise Paris", "traiteur Île-de-France", "petit déjeuner entreprise", "plateau repas entreprise", "cocktail buffet entreprise Paris"],
  authors: [{ name: "L'Écrin Traiteur" }],
  creator: "L'Écrin Traiteur",
  metadataBase: new URL('https://www.lecrindesterroirs.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: "L'Écrin Traiteur",
    title: "L'Écrin Traiteur | Traiteur d'entreprise à Paris et Île-de-France",
    description: "Petits-déjeuners, plateaux repas, cocktails et buffets livrés pour vos événements d'entreprise. Artisans sélectionnés, livraison dès 6h30.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  )
}
