'use client'

import { useEffect, Suspense } from 'react'
import { useParams, notFound, useSearchParams } from 'next/navigation'
import GalleryFiche from '../../../../components/GalleryFiche'
import { PLATEAUX, FILTRES } from '../page'

const SEO_HTML = `
  <p>Le <strong>plateau apéritif à partager</strong> est l'allié des afterworks, pots de départ et réceptions d'entreprise à Paris. Posé au centre de la table, il crée du lien et rythme le moment, des plateaux sandwichs aux plateaux fromages & charcuteries, en passant par les créations signature.</p>
  <h2>Des assortiments artisanaux, à composer selon l'occasion</h2>
  <p>Chaque plateau réunit une sélection de bouchées façonnées avec des <strong>produits sourcés</strong> : mini baguettes, clubs, wraps, focaccias, fromages affinés, charcuteries italiennes, mezzé ou plateaux du monde. On mixe salé et fraîcheur pour un buffet équilibré et généreux.</p>
  <h2>Livraison à Paris et en Île-de-France dès 6h30</h2>
  <p>Nombre de convives, formats, régimes alimentaires : nous composons la sélection idéale et vous adressons un devis personnalisé sous 24h. Commandez avant 14h la veille, livraison directe sur votre lieu de réception.</p>
`

function PlateauAperitifDetailInner() {
  const { slug } = useParams()
  const searchParams = useSearchParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const plateau = PLATEAUX.find(p => p.id === slug)
  if (!plateau) notFound()

  const backHref = `/creations/plateaux-aperitifs${searchParams.toString() ? '?' + searchParams.toString() : ''}`

  const famille = FILTRES.find(f => f.key === plateau.famille)?.label ?? ''

  const related = [...PLATEAUX].filter(p => p.id !== plateau.id)
    .sort((a, b) => (b.famille === plateau.famille) - (a.famille === plateau.famille))
    .slice(0, 4)
    .map(p => ({ href: `/creations/plateaux-aperitifs/${p.id}${searchParams.toString() ? '?' + searchParams.toString() : ''}`, title: p.nom, meta: FILTRES.find(f => f.key === p.famille)?.label || 'Apéritif', img: p.img }))

  return (
    <GalleryFiche
      title={`Plateau ${plateau.nom}`}
      related={related}
      relatedTitle="D'autres plateaux apéritifs"
      subtitle={famille}
      img={plateau.img}
      price={null}
      description={`${plateau.description} Format à partager, idéal pour vos afterworks et réceptions. Tarif au format et à l'effectif, sur devis.`}
      listLabel={plateau.recettes?.length ? 'Recettes' : 'Composition'}
      listItems={plateau.recettes ?? []}
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Plateaux apéritifs', href: backHref },
        { label: `Plateau ${plateau.nom}` },
      ]}
      backHref={backHref}
      backLabel="Retour aux plateaux apéritifs"
      seoEyebrow="Plateaux apéritifs · Afterworks & réceptions"
      seoTitle={plateau.seoTitle || "Le plateau apéritif qui fait le succès de vos afterworks"}
      seoHtml={plateau.seoHtml || SEO_HTML}
      devisPrestation="Cocktail déjeunatoire"
      devisTitre="Un afterwork ou une réception à organiser ?"
      devisSousTitre="Répondez en 30 secondes, devis personnalisé sous 24h."
    />
  )
}

export default function PlateauAperitifDetail() {
  return (
    <Suspense fallback={null}>
      <PlateauAperitifDetailInner />
    </Suspense>
  )
}
