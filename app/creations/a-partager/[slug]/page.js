'use client'

import { useParams, notFound } from 'next/navigation'
import GalleryFiche from '../../../../components/GalleryFiche'
import { SALADES, FILTRES } from '../page'

const SEO_HTML = `
  <p>Les <strong>grandes salades à partager</strong> apportent de la convivialité aux déjeuners d'équipe, ateliers et réunions à Paris. Généreuses et colorées, elles se posent au centre de la table et invitent chacun à se servir — une alternative fraîche et décontractée au plateau individuel.</p>
  <h2>Pensées par base, composées le matin même</h2>
  <p>Plutôt que par recette, nous raisonnons par <strong>base</strong> : vertes, pâtes, pommes de terre, lentilles ou céréales, déclinées avec des produits de saison et des protéines au choix. Chaque salade est assemblée le jour de la livraison pour une fraîcheur irréprochable.</p>
  <h2>Livraison à Paris et en Île-de-France dès 6h30</h2>
  <p>Format, effectif, régimes alimentaires : nous adaptons chaque salade à votre déjeuner et vous adressons un devis personnalisé sous 24h. Commandez avant 14h la veille, livraison directe dans vos locaux.</p>
`

export default function SaladeDetail() {
  const { slug } = useParams()
  const salade = SALADES.find(s => s.id === slug)
  if (!salade) notFound()

  const base = FILTRES.find(f => f.key === salade.categorie)?.label ?? ''

  return (
    <GalleryFiche
      title={salade.nom}
      subtitle={base}
      img={salade.img}
      price={null}
      description={`Une grande salade généreuse à partager, sur base « ${base.toLowerCase()} », composée le matin avec des produits de saison. Tarif au format et à l'effectif — sur devis.`}
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'À Partager', href: '/creations/a-partager' },
        { label: salade.nom },
      ]}
      backHref="/creations/a-partager"
      backLabel="Retour aux salades à partager"
      seoEyebrow="À Partager · Traiteur entreprise"
      seoTitle="Les grandes salades à partager pour vos déjeuners conviviaux"
      seoHtml={SEO_HTML}
      devisPrestation="Plateaux repas"
      devisTitre="Un déjeuner convivial à organiser ?"
      devisSousTitre="Répondez en 30 secondes — devis personnalisé sous 24h."
    />
  )
}
