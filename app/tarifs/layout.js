export const metadata = {
  alternates: { canonical: '/tarifs', languages: { fr: '/tarifs', en: '/en/pricing' } },
  title: { absolute: "Tarifs traiteur d'entreprise 2026 à Paris : prix par personne | L'Écrin Traiteur" },
  description: "Tarifs 2026 de L'Écrin Traiteur : petit-déjeuner dès 8 € HT par personne, pause dès 6 €, lunch box dès 18,90 €, plateau repas dès 28,90 €, cocktail de 29,90 à 51,90 €. Livraison 29 € HT, devis sous 24 h.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Tarifs traiteur d'entreprise 2026 | L'Écrin Traiteur",
    description: "Prix par personne, budgets par effectif, livraison et conditions : tous nos tarifs 2026.",
  },
}

export default function Layout({ children }) {
  return children
}
