'use client'

import { useEffect, Suspense } from 'react'
import { useParams, notFound, useSearchParams } from 'next/navigation'
import GalleryFiche from '../../../../components/GalleryFiche'
import { BOXES } from '../page'

const SEO_HTML = `
  <p>La <strong>lunch box d'entreprise</strong> est la formule idéale pour les déjeuners nomades, réunions de travail et journées séminaires à Paris. Compacte et complète, elle réunit une entrée, un sandwich et un dessert dans un format pratique, prêt à emporter ou à servir en salle.</p>
  <h2>Des sandwichs de boulangerie, une entrée et un dessert au choix</h2>
  <p>Nos box boulangerie associent un sandwich en baguette ou pain viennois, une entrée et un dessert au choix, serviette et couverts inclus. Nos coffrets Signature ajoutent club ou wrap, salade et dessert au choix, avec une bouteille d'eau.</p>
  <h2>Livraison à Paris et en Île-de-France dès 6h30</h2>
  <p>Commandez avant 14h la veille et recevez vos lunch box directement sur site. Effectifs, régimes alimentaires, facturation entreprise : nous adaptons la sélection et vous adressons un devis personnalisé sous 24h.</p>
`

function LunchBoxDetailInner() {
  const { slug } = useParams()
  const searchParams = useSearchParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const box = BOXES.find(b => b.id === slug)
  if (!box) notFound()

  const backHref = `/creations/lunch-box${searchParams.toString() ? '?' + searchParams.toString() : ''}`

  const sections = [
    box.entree && { label: 'Entrée', value: box.entree },
    box.plat && { label: 'Sandwich', value: box.plat },
    box.dessert && { label: 'Dessert', value: box.dessert },
    box.boisson && { label: 'Boisson', value: box.boisson },
  ].filter(Boolean)

  const related = [...BOXES].filter(b => b.id !== box.id)
    .sort((a, b2) => (b2.categorie === box.categorie) - (a.categorie === box.categorie))
    .slice(0, 4)
    .map(b => ({ href: `/creations/lunch-box/${b.id}${searchParams.toString() ? '?' + searchParams.toString() : ''}`, title: b.nom, meta: 'Lunch box', img: b.img }))

  return (
    <GalleryFiche
      title={box.nom}
      related={related}
      relatedTitle="D'autres lunch box"
      subtitle={box.sousTitre}
      img={box.img}
      price={box.prix}
      priceNote="HT · par personne"
      description={box.description}
      sections={sections}
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Lunch Box', href: backHref },
        { label: box.nom },
      ]}
      backHref={backHref}
      backLabel="Retour aux lunch box"
      seoEyebrow="Lunch Box · Traiteur entreprise"
      seoTitle={box.seoTitle || "La lunch box parfaite pour vos déjeuners nomades et réunions"}
      seoHtml={box.seoHtml || SEO_HTML}
      devisPrestation="Lunch box"
      devisTitre="Des lunch box pour votre équipe ?"
      devisSousTitre="Répondez en 30 secondes, devis personnalisé sous 24h."
    />
  )
}

export default function LunchBoxDetail() {
  return (
    <Suspense fallback={null}>
      <LunchBoxDetailInner />
    </Suspense>
  )
}
