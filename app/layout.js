import './globals.css'
import { CartProvider } from '../context/CartContext'
import MobileCTA from '../components/MobileCTA'

export const metadata = {
  title: {
    default: "L'Écrin Traiteur | Traiteur d'entreprise à Paris et Île-de-France",
    template: "%s | L'Écrin Traiteur",
  },
  description: "Traiteur Paris : petits-déjeuners artisanaux, plateaux repas et mignardises livrés dans vos bureaux dès 6h30. Artisans sélectionnés, livraison lundi–vendredi à Paris et en Île-de-France. Devis sous 24h.",
  keywords: ["traiteur Paris", "traiteur entreprise Paris", "livraison petit déjeuner Paris", "plateau repas entreprise", "traiteur RSE Paris", "mignardises traiteur", "traiteur petit déjeuner Paris", "traiteur plateau repas Paris", "livraison petit déjeuner entreprise"],
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
      <body>
        <CartProvider>{children}</CartProvider>
        <MobileCTA />
      </body>
    </html>
  )
}
