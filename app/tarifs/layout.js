import { ogImages } from '../../lib/og'
export const metadata = {
  alternates: { canonical: '/tarifs', languages: { fr: '/tarifs', en: '/en/tarifs' } },
  title: { absolute: "Tarifs traiteur d'entreprise 2026 à Paris | L'Écrin Traiteur" },
  description: "Tarifs 2026 : petit-déjeuner dès 8 € HT par personne, pause dès 6 €, lunch box dès 18,90 €, plateau repas dès 28,90 €, cocktail dès 29,90 €.",
  openGraph: {
    images: ogImages('/hero-plateaux-essentiel.webp'),
    title: "Tarifs traiteur d'entreprise 2026 | L'Écrin Traiteur",
    description: "Prix par personne, budgets par effectif, livraison et conditions : tous nos tarifs 2026.",
  },
}

export default function Layout({ children }) {
  return children
}
