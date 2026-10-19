'use client'

import { useEffect, Suspense } from 'react'
import { useParams, notFound } from 'next/navigation'
import { useUrlSearchParams } from '../../../../../lib/useUrlSearchParams'
import GalleryFiche from '../../../../../components/GalleryFiche'
import { PLATEAUX } from '../../../../creations/plateaux-aperitifs/data'
import { enPlateauAperitif, FAMILLES_EN } from '../../../../../lib/en/produits/plateauxAperitifs'

/*
  Fiche plateau apéritif en anglais. Photo, famille et identifiant viennent du
  fichier français ; seuls les textes sont pris dans la surcouche. Ces plateaux
  n'ont pas de prix affiché : ils se chiffrent au format et à l'effectif.
*/

function FicheEn() {
  const { slug } = useParams()
  const params = useUrlSearchParams()
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  const plateau = PLATEAUX.find(p => p.id === slug)
  const en = enPlateauAperitif(slug)
  if (!plateau || !en) notFound()

  const q = params.toString() ? '?' + params.toString() : ''
  const retour = `/en/creations/plateaux-aperitifs${q}`

  const voisins = [...PLATEAUX]
    .filter(p => p.id !== plateau.id && enPlateauAperitif(p.id))
    .sort((a, b) => (b.famille === plateau.famille) - (a.famille === plateau.famille))
    .slice(0, 4)
    .map(p => ({
      href: `/en/creations/plateaux-aperitifs/${p.id}${q}`,
      title: enPlateauAperitif(p.id).nom,
      meta: FAMILLES_EN[p.famille] || 'Aperitif',
      img: p.img,
    }))

  return (
    <GalleryFiche
      lang="en"
      title={en.nom}
      subtitle={FAMILLES_EN[plateau.famille] || ''}
      img={plateau.img}
      price={plateau.prix ? plateau.prix.toFixed(2) : null}
      priceNote={plateau.pieces ? `excl. VAT · ${plateau.pieces} pieces` : 'excl. VAT'}
      description={plateau.prix
        ? `${en.description} A platter of ${plateau.pieces} pieces to share, right for afterworks and receptions.`
        : `${en.description} A sharing format, right for afterworks and receptions. Priced by size and headcount, on quote.`}
      listLabel={en.recettes?.length ? 'Recipes' : 'Composition'}
      listItems={en.recettes ?? []}
      related={voisins}
      relatedTitle="Other aperitif platters"
      breadcrumb={[
        { label: 'Home', href: '/en' },
        { label: 'Aperitif platters', href: retour },
        { label: en.nom },
      ]}
      backHref={retour}
      backLabel="Back to aperitif platters"
      seoEyebrow="Aperitif platter · Corporate catering"
      seoTitle={en.seoTitle}
      seoHtml={en.seoHtml}
      devisPrestation="Plateaux apéritifs"
      devisTitre="An afterwork or a reception to organise?"
      devisSousTitre="Answer in 30 seconds, personalised quote within 24 hours."
    />
  )
}

export default function Page() {
  return <Suspense fallback={null}><FicheEn /></Suspense>
}
