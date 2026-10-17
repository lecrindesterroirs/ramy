import { ogImages } from '../../../lib/og'
export const metadata = {
  title: { absolute: "Plateaux repas d'entreprise à Paris : livrés dès 6h30" },
  description: "Déjeuner d'entreprise à Paris : plateaux repas frais et artisanaux livrés dans vos bureaux dès 6h30 en Île-de-France. Devis sous 24h.",
  openGraph: {
    images: ogImages('/hero-plateaux-essentiel.webp'),
    title: "Déjeuner d'entreprise à Paris : plateaux repas livrés | L'Écrin Traiteur",
    description: "Traiteur déjeuner d'entreprise Paris : plateaux repas artisanaux, livraison lundi à vendredi dès 6h30 dans toute l'Île-de-France.",
  },
  alternates: { canonical: '/creations/plateaux-repas' },
}

export default function Layout({ children }) {
  return children
}
