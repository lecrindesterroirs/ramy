import './globals.css'
import { CartProvider } from '../context/CartContext'
import MobileCTA from '../components/MobileCTA'
import SmoothScroll from '../components/SmoothScroll'
import ScrollRevealInit from '../components/ScrollRevealInit'
import { GoogleTagManager } from '@next/third-parties/google'
import { websiteNode } from '../lib/site'

export const metadata = {
  title: {
    default: "Traiteur d'entreprise à Paris | L'Écrin Traiteur",
    template: "%s | L'Écrin Traiteur",
  },
  description: "Traiteur d'entreprise à Paris & Île-de-France : petits-déjeuners, plateaux repas, cocktails et buffets livrés dès 6h30. Devis sous 24h.",
  keywords: ["traiteur Paris", "traiteur entreprise Paris", "traiteur événementiel Paris", "cocktail entreprise Paris", "plateau repas entreprise", "buffet entreprise Paris", "livraison petit déjeuner Paris", "séminaire traiteur Paris", "traiteur RSE Paris", "réception entreprise Île-de-France"],
  authors: [{ name: "L'Écrin Traiteur" }],
  creator: "L'Écrin Traiteur",
  metadataBase: new URL('https://www.lecrin-traiteur.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: "L'Écrin Traiteur",
    url: 'https://www.lecrin-traiteur.fr',
    title: "L'Écrin Traiteur | Traiteur d'entreprise à Paris et Île-de-France",
    description: "Petits-déjeuners, plateaux repas, cocktails et buffets livrés pour vos événements d'entreprise. Artisans sélectionnés, livraison dès 6h30.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "L'Écrin Traiteur, petits-déjeuners & pauses gourmandes d'entreprise",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "L'Écrin Traiteur | Traiteur d'entreprise à Paris et Île-de-France",
    description: "Petits-déjeuners, plateaux repas, cocktails et buffets livrés pour vos événements d'entreprise.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId="GTM-N22T3FZJ" />
      <body>
        <a href="#main-content" className="skip-link">Aller au contenu principal</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...websiteNode() }) }}
        />
        <link rel="preload" href="/fonts/BaskervilleDisplayPT.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PPNeueMontreal-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <SmoothScroll />
        <ScrollRevealInit />
        <CartProvider>
          <div id="main-content" style={{ display: 'contents' }}>{children}</div>
        </CartProvider>
        <MobileCTA />
      </body>
    </html>
  )
}
