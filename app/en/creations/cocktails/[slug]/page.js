'use client'

import { useEffect, Suspense } from 'react'
import { useParams, notFound } from 'next/navigation'
import GalleryFiche from '../../../../../components/GalleryFiche'
import { FORMULES } from '../../../../creations/cocktails/data'
import { enCocktail } from '../../../../../lib/en/produits/cocktails'

/*
  Fiche formule cocktail en anglais. Prix, nombre de pièces et photo viennent
  du fichier français ; seuls les textes sont pris dans la surcouche. Les noms
  des formules ne sont pas traduits, ce sont ceux du devis.
*/

function FicheEn() {
  const { slug } = useParams()
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  const f = FORMULES.find(x => x.key === slug)
  const en = f && enCocktail(f.key)
  if (!f || !en) notFound()

  const voisines = FORMULES
    .filter(x => x.key !== f.key && enCocktail(x.key))
    .map(x => ({
      href: `/en/creations/cocktails/${x.key}`,
      title: `Cocktail ${x.label}`,
      meta: enCocktail(x.key).occasion,
      img: x.img,
    }))

  return (
    <GalleryFiche
      lang="en"
      title={`Cocktail ${f.label}`}
      subtitle={`${en.occasion} · ${f.pieces} pieces per person`}
      img={f.img}
      price={String(f.prix).replace(',', '.')}
      priceNote="excl. VAT · per person"
      description={en.accroche}
      sections={[
        { label: `Savoury · ${en.sale.length} pieces`, value: en.sale.join('\n') },
        { label: `Sweet · ${en.sucre.length} pieces`, value: en.sucre.join('\n') },
      ]}
      related={voisines}
      relatedTitle="The other cocktail menus"
      breadcrumb={[
        { label: 'Home', href: '/en' },
        { label: 'Cocktail receptions', href: '/en/creations/cocktails' },
        { label: `Cocktail ${f.label}` },
      ]}
      backHref="/en/creations/cocktails"
      backLabel="Back to cocktail receptions"
      seoEyebrow="Cocktail menu · Corporate catering"
      seoTitle={en.seoTitle}
      seoHtml={en.seoHtml}
      devisPrestation="Cocktail"
      devisTitre="A cocktail reception to organise?"
      devisSousTitre="Answer in 30 seconds, personalised quote within 24 hours."
    />
  )
}

export default function Page() {
  return <Suspense fallback={null}><FicheEn /></Suspense>
}
