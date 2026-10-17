import { ogImages } from '../../../lib/og'
export const metadata = {
  title: "Nos Engagements, artisans & qualité",
  description: "Les engagements de L'Écrin Traiteur : artisans indépendants, produits bio et sans huile de palme. Un traiteur d'entreprise responsable à Paris.",
  openGraph: {
    images: ogImages('/img-reception.webp'),
    title: "Nos Engagements | L'Écrin Traiteur",
    description: "Artisans sélectionnés, produits bio, circuits courts : les engagements qualité et responsabilité de L'Écrin Traiteur.",
  },
  alternates: {
    canonical: '/univers/nos-engagements',
  },
}

export default function Layout({ children }) {
  return children
}
