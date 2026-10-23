'use client'

import { useEffect, Suspense } from 'react'
import { useParams, notFound } from 'next/navigation'
import { useUrlSearchParams } from '../../../../../lib/useUrlSearchParams'
import GalleryFiche from '../../../../../components/GalleryFiche'
import { ANIMATIONS, slugAnim, prixDesAnimation } from '../../../../creations/animations-culinaires/data'
import { euroEn } from '../../../../../lib/prixEntree'
import { enAnimation, UNIVERS_EN } from '../../../../../lib/en/produits/animations'

/*
  Fiche animation culinaire en anglais. L'URL garde le slug français, dérivé
  du nom français : /en/creations/animations-culinaires/atelier-crepes-et-pancakes.
  Traduire le slug créerait une URL anglaise sans équivalent et casserait le
  repli de /en/[...chemin].
*/

function FicheEn() {
  const { slug } = useParams()
  const params = useUrlSearchParams()
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  const anim = ANIMATIONS.find(a => slugAnim(a.nom) === slug)
  const en = anim && enAnimation(anim.id)
  if (!anim || !en) notFound()

  const q = params.toString() ? '?' + params.toString() : ''
  const retour = `/en/creations/animations-culinaires${q}`

  const voisines = [...ANIMATIONS]
    .filter(a => a.id !== anim.id && enAnimation(a.id))
    .sort((a, b) => (b.univers === anim.univers) - (a.univers === anim.univers))
    .slice(0, 4)
    .map(a => ({
      href: `/en/creations/animations-culinaires/${slugAnim(a.nom)}${q}`,
      title: enAnimation(a.id).nom,
      meta: UNIVERS_EN[a.univers] || 'Live station',
      img: a.img,
    }))

  return (
    <GalleryFiche
      lang="en"
      title={en.nom}
      subtitle={UNIVERS_EN[anim.univers] || ''}
      img={anim.img}
      price={null}
      description={`${en.description} A live station set up at your venue, with a chef or a server on site. ${prixDesAnimation(anim) ? `From ${euroEn(prixDesAnimation(anim))} excl. VAT per station, set-up and portions included; the quote follows headcount and length.` : 'Priced by headcount and length, on quote.'}`}
      listLabel={en.compo?.length ? 'On the station' : 'Composition'}
      listItems={en.compo ?? []}
      related={voisines}
      relatedTitle="Other live stations"
      breadcrumb={[
        { label: 'Home', href: '/en' },
        { label: 'Live food stations', href: retour },
        { label: en.nom },
      ]}
      backHref={retour}
      backLabel="Back to live stations"
      seoEyebrow="Live food station · Corporate catering"
      seoHtml={en.article}
      devisPrestation="Événement sur mesure"
      devisTitre="A live station for your event?"
      devisSousTitre="Answer in 30 seconds, personalised quote within 24 hours."
    />
  )
}

export default function Page() {
  return <Suspense fallback={null}><FicheEn /></Suspense>
}
