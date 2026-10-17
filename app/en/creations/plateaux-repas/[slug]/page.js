'use client'

import { useEffect, Suspense } from 'react'
import { useParams, notFound } from 'next/navigation'
import { useUrlSearchParams } from '../../../../../lib/useUrlSearchParams'
import GalleryFiche from '../../../../../components/GalleryFiche'
import { PRODUITS, prixMenu } from '../../../../creations/plateaux-repas/data'
import { enPlateauRepas } from '../../../../../lib/en/produits/plateauxRepas'

/*
  Fiche plateau repas en anglais. Prix, photo et catégorie viennent du fichier
  français ; seuls les textes sont pris dans la surcouche. Un plateau non
  traduit n'a pas de page ici : il part sur le repli vers le français.
*/
function FicheEn() {
  const { slug } = useParams()
  const params = useUrlSearchParams()
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  const produit = PRODUITS.find(p => p.id === slug)
  const en = enPlateauRepas(slug)
  if (!produit || !en) notFound()

  const q = params.toString() ? '?' + params.toString() : ''
  const retour = `/en/creations/plateaux-repas${q}`

  const sections = [
    en.entree && { label: 'Starter', value: en.entree },
    en.plat && { label: 'Main', value: en.plat },
    en.dessert && { label: 'Dessert', value: en.dessert },
  ].filter(Boolean)

  const voisins = PRODUITS
    .filter(p => p.id !== produit.id && enPlateauRepas(p.id))
    .slice(0, 4)
    .map(p => ({ href: `/en/creations/plateaux-repas/${p.id}${q}`, title: p.nom, meta: 'Lunch tray', img: p.img }))

  return (
    <GalleryFiche
      lang="en"
      title={produit.nom}
      subtitle={en.plat}
      img={produit.img}
      price={prixMenu(produit)}
      priceNote="excl. VAT · per person"
      description={en.seoHtml.replace(/<[^>]+>/g, ' ').trim().split('. ')[0] + '.'}
      sections={sections}
      related={voisins}
      relatedTitle="Other lunch trays"
      breadcrumb={[
        { label: 'Home', href: '/en' },
        { label: 'Lunch trays', href: retour },
        { label: produit.nom },
      ]}
      backHref={retour}
      backLabel="Back to lunch trays"
      seoEyebrow="Lunch tray · Corporate catering"
      seoTitle={en.seoTitle}
      seoHtml={en.seoHtml}
      devisPrestation="Plateaux repas"
      devisTitre="Lunch trays for your team?"
      devisSousTitre="Answer in 30 seconds, personalised quote within 24 hours."
    />
  )
}

export default function Page() {
  return <Suspense fallback={null}><FicheEn /></Suspense>
}
