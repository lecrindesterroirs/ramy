export const metadata = {
  title: "Plateaux repas traiteur Paris",
  description: "Plateaux repas d'entreprise à Paris : recettes fraîches et artisanales livrées dans vos bureaux dès 6h30 en Île-de-France. Devis sous 24h.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Plateaux Repas Traiteur Paris | L'Écrin Traiteur",
    description: "Traiteur plateau repas Paris : produits artisanaux, livraison lundi–vendredi dès 6h30 dans toute l'Île-de-France.",
  },
  alternates: { canonical: '/creations/plateaux-repas' },
}

export default function Layout({ children }) {
  return children
}
