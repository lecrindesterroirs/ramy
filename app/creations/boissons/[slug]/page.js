'use client'

import { useParams, notFound } from 'next/navigation'
import GalleryFiche from '../../../../components/GalleryFiche'
import { BOISSONS } from '../../../../lib/boissonsData'

export default function BoissonPage() {
  const { slug } = useParams()
  const product = BOISSONS.find(p => p.id === slug)
  if (!product) notFound()

  return (
    <GalleryFiche
      title={product.name}
      subtitle={product.qty}
      img={product.img}
      description={product.ingredients}
      allergens={product.allergens ?? []}
      price={product.price?.toFixed(2).replace('.', ',')}
      priceNote="HT"
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Boissons', href: '/creations/boissons' },
        { label: product.name },
      ]}
      backHref="/creations/boissons"
      backLabel="Retour aux boissons"
      seoEyebrow={product.categoryLabel}
      seoTitle={product.seoTitle}
      seoHtml={product.seoArticle}
      devisPrestation="Boissons"
      devisTitre="Un événement à Paris ou en Île-de-France ?"
      devisSousTitre="Répondez en 30 secondes — devis personnalisé sous 24h."
    />
  )
}
