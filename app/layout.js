import SkipLink from '../components/SkipLink'
import './globals.css'
import { CartProvider } from '../context/CartContext'
import MobileCTA from '../components/MobileCTA'
import LangueDocument from '../components/LangueDocument'
import ChatWidget from '../components/ChatWidget'
import PromoBanner from '../components/PromoBanner'
import SmoothScroll from '../components/SmoothScroll'
import ScrollRevealInit from '../components/ScrollRevealInit'
import DeferredGTM from '../components/DeferredGTM'
import DeferredPostHog from '../components/DeferredPostHog'
import ParcoursCapture from '../components/ParcoursCapture'
import DeferredEntreprises from '../components/DeferredEntreprises'
import { CONSENT_DEFAULT_SCRIPT } from '../lib/consent'
import AttributionCapture from '../components/AttributionCapture'
import { websiteNode, GBP_RATING_LABEL } from '../lib/site'
import { ogImage, ogImages } from '../lib/og'
import { enSlugs } from '../lib/en/journal'
import { PROMO_PRELOAD_SCRIPT } from '../lib/promoBanner'
import { EnSlugsProvider } from '../components/EnSlugsProvider'

export const metadata = {
  title: {
    default: "Traiteur d'entreprise à Paris : petits-déjeuners, cocktails",
    template: "%s | L'Écrin Traiteur",
  },
  description: `Traiteur d'entreprise à Paris & Île-de-France : petits-déjeuners, plateaux repas et cocktails livrés dès 6h30. Plus de 100 entreprises clientes, ${GBP_RATING_LABEL}/5 sur Google, tarifs publiés. Devis sous 24h.`,
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
    description: "Petits-déjeuners, plateaux repas et cocktails livrés pour vos événements d'entreprise. Plus de 100 entreprises clientes, artisans sélectionnés, livraison dès 6h30.",
    // Carte générée depuis la photo d'accueil (scripts/build-og.py) : l'ancienne
    // og-image.jpg était une photo prise sur le vif, sans logotype, et servait
    // de partage à 239 pages à la fois.
    images: ogImages('/hero-bg2.webp', "L'Écrin Traiteur, petits-déjeuners & pauses gourmandes d'entreprise"),
  },
  twitter: {
    card: 'summary_large_image',
    title: "L'Écrin Traiteur | Traiteur d'entreprise à Paris et Île-de-France",
    description: "Petits-déjeuners, plateaux repas et cocktails livrés pour vos événements d'entreprise. Plus de 100 entreprises clientes.",
    images: [ogImage('/hero-bg2.webp')],
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
  other: {
    'p:domain_verify': '38bd1dcf8fed73578b55d7b0ccfa104f',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        {/* Pose promo-on / ads-mobile-epure sur <html> avant le premier affichage : plus de décalage de la page quand le bandeau arrive */}
        <script dangerouslySetInnerHTML={{ __html: PROMO_PRELOAD_SCRIPT }} />
        {/* Pose le refus avant GTM si le visiteur a refusé la mesure (page Cookies) */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SCRIPT }} />
        <DeferredGTM gtmId="GTM-N22T3FZJ" />
        <DeferredPostHog />
        <DeferredEntreprises />
        <AttributionCapture />
        <ParcoursCapture />
        <script defer src="https://lecrin-analytics.vercel.app/script.js" data-website-id="6c18f6ab-c4b3-498e-b9ce-bf5ec85801b9" />
        <SkipLink />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...websiteNode() }) }}
        />
        <link rel="preload" href="/fonts/BaskervilleDisplayPT.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PPNeueMontreal-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PPNeueMontreal-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <PromoBanner />
        <SmoothScroll />
        <ScrollRevealInit />
        <CartProvider>
          <EnSlugsProvider slugs={enSlugs()}>
            <div id="main-content" style={{ display: 'contents' }}>{children}</div>
          </EnSlugsProvider>
        </CartProvider>
        <LangueDocument />
        <MobileCTA />
        {/* Pas de clé, pas de bouton : mieux vaut rien qu'un assistant injoignable.
            Attention au déploiement : l'ignoreCommand de vercel.json saute les builds
            qui ne touchent aucun fichier surveillé — ajouter la variable sur Vercel ne
            suffit donc pas, et un commit vide ne déclenche rien. */}
        {process.env.ANTHROPIC_API_KEY ? <ChatWidget /> : null}
      </body>
    </html>
  )
}
