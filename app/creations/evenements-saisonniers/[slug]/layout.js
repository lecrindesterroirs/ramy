import { evenements } from '../evenementsData'
import { ogImages } from '../../../../lib/og'
import { alternatesPour } from '../../../../lib/i18n'

export function generateStaticParams() {
  // 'octobre-rose' a sa propre route statique dédiée (app/.../octobre-rose/page.js) :
  // l'exclure ici évite une collision de build où les deux routes écrivent
  // le même fichier de sortie et où celle-ci gagnait par erreur.
  return evenements.filter(e => e.slug !== 'octobre-rose').map(e => ({ slug: e.slug }))
}

export async function generateMetadata({ params }) {
  const ev = evenements.find(e => e.slug === params.slug)

  if (!ev) {
    return {
      title: 'Événement saisonnier en entreprise',
      description: "Découvrez nos prestations traiteur pour vos événements d'entreprise à Paris et Île-de-France.",
    }
  }

  return {
    title: { absolute: `Traiteur ${ev.nom} en entreprise à Paris` },
    description: `${ev.descCourt} Prestation traiteur livrée à Paris et en Île-de-France.`,
    alternates: alternatesPour(`/creations/evenements-saisonniers/${params.slug}`, { en: true }),
    openGraph: {
      images: ogImages(ev.img, ev.imgAlt || `${ev.nom}, L'Écrin Traiteur`),
      title: `Traiteur ${ev.nom} en entreprise | L'Écrin Traiteur`,
      description: ev.descCourt,
    },
  }
}

export default function Layout({ children }) {
  return children
}
