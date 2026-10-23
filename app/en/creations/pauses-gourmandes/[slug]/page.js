'use client'

import { useEffect, Suspense } from 'react'
import { useParams, notFound } from 'next/navigation'
import { useUrlSearchParams } from '../../../../../lib/useUrlSearchParams'
import GalleryFiche from '../../../../../components/GalleryFiche'
import { PAUSES } from '../../../../creations/pauses-gourmandes/data'
import { enPause, prixEn } from '../../../../../lib/en/produits/pausesGourmandes'

/*
  Fiche pause goûter en anglais. Photo, prix et tailles de coffret viennent du
  fichier français ; seuls les textes sont pris dans la surcouche. Une pièce
  non traduite n'a pas de page ici : /en/[...chemin] la renvoie en français.
*/

function FicheEn() {
  const { slug } = useParams()
  const params = useUrlSearchParams()
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  const produit = PAUSES.find(p => p.id === slug)
  const en = enPause(slug)
  if (!produit || !en) notFound()

  const q = params.toString() ? '?' + params.toString() : ''
  const retour = `/en/creations/pauses-gourmandes${q}`
  const prix = prixEn(produit.prix)

  // Les coffrets (madeleines, macarons) : une ligne par taille, prix compris.
  const sections = produit.coffrets?.length
    ? [{
        label: 'Box sizes',
        value: produit.coffrets
          .map(c => `${c.pieces} pieces · ${c.sub.replace(/(\d+)\s*à\s*(\d+)\s*pers\.?/, '$1 to $2 people')} · €${c.price.toFixed(2)}`)
          .join('\n'),
      }]
    : []

  const voisins = PAUSES
    .filter(p => p.id !== produit.id && enPause(p.id))
    .slice(0, 4)
    .map(p => ({
      href: `/en/creations/pauses-gourmandes/${p.id}${q}`,
      title: enPause(p.id).nom,
      meta: 'Afternoon treat',
      img: p.img,
    }))

  return (
    <GalleryFiche
      lang="en"
      title={en.nom}
      img={produit.img}
      price={prix?.montant}
      priceNote={prix?.note}
      description={en.description}
      sections={sections}
      related={voisins}
      relatedTitle="Other afternoon treats"
      breadcrumb={[
        { label: 'Home', href: '/en' },
        { label: 'Afternoon treats', href: retour },
        { label: en.nom },
      ]}
      backHref={retour}
      backLabel="Back to afternoon treats"
      seoEyebrow="Afternoon treat · Corporate catering"
      seoTitle={en.seoTitle}
      seoHtml={en.seoHtml}
      devisPrestation="Pause gourmande"
      devisTitre="An afternoon treat for your team?"
      devisSousTitre="Answer in 30 seconds, personalised quote within 24 hours."
    />
  )
}

export default function Page() {
  return <Suspense fallback={null}><FicheEn /></Suspense>
}
