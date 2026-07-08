export const metadata = {
  alternates: { canonical: '/devis' },
  title: "Obtenir un devis",
  description: "Décrivez votre événement et recevez un devis personnalisé sous 24h : petits-déjeuners, cocktails, buffets et plateaux repas à Paris.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Obtenir un devis | L'Écrin Traiteur",
    description: "Recevez un devis personnalisé sous 24h pour votre événement d'entreprise à Paris et Île-de-France.",
  },
}

export default function Layout({ children }) {
  return children
}
