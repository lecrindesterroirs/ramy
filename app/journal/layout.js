import { ogImages } from '../../lib/og'
export const metadata = {
  alternates: { canonical: '/journal' },
  title: { absolute: "Guides traiteur d'entreprise : budgets, quantités, idées" },
  description: "Plus de 100 guides pour organiser un petit-déjeuner, un déjeuner ou un cocktail d'entreprise à Paris : budgets chiffrés, quantités par personne, idées.",
  openGraph: {
    images: ogImages('/hero-bg.webp'),
    title: "Le Journal | L'Écrin Traiteur",
    description: "Conseils pratiques et inspirations pour organiser vos événements d'entreprise. Guides traiteur par L'Écrin.",
  },
}

export default function Layout({ children }) {
  return children
}
