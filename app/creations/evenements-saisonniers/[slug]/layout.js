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
      title: `${ev.nom} en entreprise | L'Écrin Traiteur`,
      description: ev.descCourt,
    },
  }
}

export default function Layout({ children }) {
  return children
}
