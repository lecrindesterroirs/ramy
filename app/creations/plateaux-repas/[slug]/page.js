'use client'

import { useEffect, Suspense } from 'react'
import { useParams, notFound, useSearchParams } from 'next/navigation'
import GalleryFiche from '../../../../components/GalleryFiche'
import { PRODUITS, COLLECTIONS, prixMenu } from '../data'

const SEO_HTML = `
  <p>Le <strong>plateau repas d'entreprise</strong> est devenu la solution de référence pour les déjeuners de travail, comités de direction et séminaires à Paris. Individuel, équilibré et présenté avec soin, il permet à chacun de déjeuner sans quitter les locaux, tout en soignant l'image de l'entreprise auprès des collaborateurs et des clients.</p>
  <h2>Des produits sourcés, une préparation le matin même</h2>
  <p>Chez L'Écrin, chaque plateau associe une entrée, un plat et un dessert préparés le jour de la livraison avec des <strong>produits de saison</strong> issus d'artisans et de producteurs identifiés. Rien d'industriel : des recettes fraîches, un dressage maîtrisé et un vrai équilibre nutritionnel, du menu végétarien au menu signature.</p>
  <h2>Livraison à Paris et en Île-de-France dès 6h30</h2>
  <p>Commandez avant 14h la veille et recevez vos plateaux directement dans vos bureaux. Facturation entreprise, régimes alimentaires, effectifs variables : nous adaptons chaque prestation et vous adressons un devis personnalisé sous 24h.</p>
`

function PlateauDetailInner() {
  const { slug } = useParams()
  const searchParams = useSearchParams()

  // Remonter en haut au montage
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const produit = PRODUITS.find(p => p.id === slug)
  if (!produit) notFound()

  const col = COLLECTIONS.find(c => c.key === produit.collection)

  // Construire le lien de retour avec les search params
  const backHref = `/creations/plateaux-repas${searchParams.toString() ? '?' + searchParams.toString() : ''}`

  const sections = [
    produit.entree && { label: 'Entrée', value: produit.entree },
    produit.plat && { label: 'Plat', value: produit.plat },
    produit.dessert && { label: 'Dessert', value: produit.dessert },
  ].filter(Boolean)

  const related = [...PRODUITS]
    .filter(p => p.id !== produit.id)
    .sort((a, b) => (b.collection === produit.collection) - (a.collection === produit.collection))
    .slice(0, 4)
    .map(p => ({ href: `/creations/plateaux-repas/${p.id}${searchParams.toString() ? '?' + searchParams.toString() : ''}`, title: p.nom, meta: COLLECTIONS.find(c => c.key === p.collection)?.label, img: p.img }))

  return (
    <GalleryFiche
      title={produit.nom}
      related={related}
      relatedTitle="D'autres plateaux repas"
      subtitle={`Collection ${col?.label ?? ''}`}
      img={produit.img}
      price={prixMenu(produit)}
      priceNote="HT · par personne"
      description={`Un menu complet, entrée, plat et dessert préparés le matin même avec des produits de saison. Collection ${col?.label ?? ''}.`}
      sections={sections}
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Plateaux repas', href: backHref },
        { label: produit.nom },
      ]}
      backHref={backHref}
      backLabel="Retour aux plateaux repas"
      seoEyebrow="Plateaux repas · Traiteur entreprise"
      seoTitle={produit.seoTitle || "Le plateau repas qui valorise vos déjeuners d'entreprise à Paris"}
      seoHtml={produit.seoHtml || SEO_HTML}
      devisPrestation="Plateaux repas"
      devisTitre="Un déjeuner d'entreprise à organiser ?"
      devisSousTitre="Répondez en 30 secondes, devis personnalisé sous 24h."
    />
  )
}

export default function PlateauDetail() {
  return (
    <Suspense fallback={null}>
      <PlateauDetailInner />
    </Suspense>
  )
}
