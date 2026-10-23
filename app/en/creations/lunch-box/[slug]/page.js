'use client'

import { useEffect, Suspense } from 'react'
import { useParams, notFound } from 'next/navigation'
import { useUrlSearchParams } from '../../../../../lib/useUrlSearchParams'
import GalleryFiche from '../../../../../components/GalleryFiche'
import { BOXES } from '../../../../creations/lunch-box/data'
import { enLunchBox, slugsLunchBoxEn } from '../../../../../lib/en/produits/lunchBox'

/*
  Fiche lunch box en anglais.

  Les données viennent du fichier français : prix, photo, identifiant, fiches
  voisines. Seuls les textes sont pris dans la surcouche anglaise. Une lunch
  box non traduite n'a pas de page ici — elle sera servie en français par le
  repli de /en/[...chemin].
*/

function FicheEn() {
  const { slug } = useParams()
  const params = useUrlSearchParams()
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  const box = BOXES.find(b => b.id === slug)
  const en = enLunchBox(slug)
  if (!box || !en) notFound()

  const q = params.toString() ? '?' + params.toString() : ''
  const retour = `/en/creations/lunch-box${q}`

  const sections = [
    en.entree && { label: 'Starter', value: en.entree },
    en.plat && { label: 'Sandwich', value: en.plat },
    en.dessert && { label: 'Dessert', value: en.dessert },
  ].filter(Boolean)

  const voisines = BOXES
    .filter(b => b.id !== box.id && enLunchBox(b.id))
    .slice(0, 4)
    .map(b => ({ href: `/en/creations/lunch-box/${b.id}${q}`, title: b.nom, meta: 'Lunch box', img: b.img }))

  return (
    <GalleryFiche
      lang="en"
      title={box.nom}
      subtitle={en.sousTitre}
      img={box.img}
      imgRatio="1400 / 615"
      price={box.prix}
      priceNote="excl. VAT · per person"
      description={en.description}
      sections={sections}
      related={voisines}
      relatedTitle="Other lunch boxes"
      breadcrumb={[
        { label: 'Home', href: '/en' },
        { label: 'Lunch boxes', href: retour },
        { label: box.nom },
      ]}
      backHref={retour}
      backLabel="Back to lunch boxes"
      seoEyebrow="Lunch box · Corporate catering"
      seoTitle={en.seoTitle}
      seoHtml={en.seoHtml}
      devisPrestation="Plateaux repas"
      devisTitre="Lunch boxes for your team?"
      devisSousTitre="Answer in 30 seconds, personalised quote within 24 hours."
    />
  )
}

export default function Page() {
  return <Suspense fallback={null}><FicheEn /></Suspense>
}
