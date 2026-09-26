export const metadata = {
  title: "Déjeuner d'entreprise à Paris : plateaux repas livrés",
  description: "Déjeuner d'entreprise à Paris : plateaux repas frais et artisanaux livrés dans vos bureaux dès 6h30 en Île-de-France. Devis sous 24h.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Déjeuner d'entreprise à Paris : plateaux repas livrés | L'Écrin Traiteur",
    description: "Traiteur déjeuner d'entreprise Paris : plateaux repas artisanaux, livraison lundi à vendredi dès 6h30 dans toute l'Île-de-France.",
  },
  alternates: { canonical: '/creations/plateaux-repas' },
}

export default function Layout({ children }) {
  return children
}
