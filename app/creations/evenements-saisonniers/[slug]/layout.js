import { evenements } from '../evenementsData'

export async function generateMetadata({ params }) {
  const ev = evenements.find(e => e.slug === params.slug)

  if (!ev) {
    return {
      title: 'Événement saisonnier en entreprise',
      description: "Découvrez nos prestations traiteur pour vos événements d'entreprise à Paris et Île-de-France.",
    }
  }

  return {
    title: `${ev.nom} en entreprise : idées et conseils`,
    description: `${ev.descCourt} Prestation traiteur livrée à Paris et en Île-de-France.`,
    alternates: { canonical: `/creations/evenements-saisonniers/${params.slug}` },
    openGraph: {
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
      title: `${ev.nom} en entreprise | L'Écrin Traiteur`,
      description: ev.descCourt,
    },
  }
}

export default function Layout({ children }) {
  return children
}
