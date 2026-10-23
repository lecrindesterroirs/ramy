'use client'

import { useEffect, Suspense } from 'react'
import { useParams, notFound } from 'next/navigation'
import GalleryFiche from '../../../../../components/GalleryFiche'
import { BOISSONS } from '../../../../../lib/boissonsData'
import { enBoisson, qtyEn, traduireAllergenesBoisson } from '../../../../../lib/en/produits/boissons'

/*
  Fiche boisson en anglais. Prix, photo et contenance viennent du fichier
  français ; seuls les textes sont pris dans la surcouche. Le bloc « À savoir »
  n'est pas rendu ici : lib/ficheAsavoir.js n'est pas encore traduit, et mieux
  vaut pas de bloc qu'un bloc français au milieu d'une page anglaise.
*/

function FicheEn() {
  const { slug } = useParams()
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  const produit = BOISSONS.find(p => p.id === slug)
  const en = enBoisson(slug)
  if (!produit || !en) notFound()

  const voisines = BOISSONS
    .filter(p => p.id !== produit.id && enBoisson(p.id))
    .slice(0, 4)
    .map(p => ({ href: `/en/creations/boissons/${p.id}`, title: enBoisson(p.id).name, meta: 'Drink', img: p.img }))

  return (
    <GalleryFiche
      lang="en"
      title={en.name}
      subtitle={qtyEn(produit.qty)}
      img={produit.img}
      description={en.ingredients}
      allergens={traduireAllergenesBoisson(produit.allergens ?? [])}
      price={produit.price?.toFixed(2)}
      priceNote="excl. VAT"
      related={voisines}
      relatedTitle="Other drinks"
      breadcrumb={[
        { label: 'Home', href: '/en' },
        { label: 'Drinks', href: '/en/creations/boissons' },
        { label: en.name },
      ]}
      backHref="/en/creations/boissons"
      backLabel="Back to drinks"
      seoEyebrow={en.seoEyebrow || 'Drinks · Corporate catering'}
      seoTitle={en.seoTitle}
      seoHtml={en.seoArticle}
      devisPrestation="Petit-déjeuner"
      devisTitre="An event in Paris or Île-de-France?"
      devisSousTitre="Answer in 30 seconds, personalised quote within 24 hours."
    />
  )
}

export default function Page() {
  return <Suspense fallback={null}><FicheEn /></Suspense>
}
