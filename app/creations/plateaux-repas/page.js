'use client'

import ProductsPageTemplate from '../../../components/ProductsPageTemplate'

const fallback = [
  { name: 'Plateau déjeuner classique', label: "L'Écrin Paris", img: '/buffet-sale.webp' },
  { name: 'Plateau végétarien',         label: "L'Écrin Paris", img: '/creations-3.png' },
  { name: 'Box salade premium',         label: "L'Écrin Paris", img: '/club.webp' },
  { name: 'Plateau sushi & japonais',   label: "L'Écrin Paris", img: '/pause-orange.webp' },
  { name: 'Plateau méditerranéen',      label: "L'Écrin Paris", img: '/img-reception.webp' },
  { name: 'Box healthy',                label: "L'Écrin Paris", img: '/creations-1.png' },
  { name: 'Plateau chaud du jour',      label: "L'Écrin Paris", img: '/navette.webp' },
  { name: 'Plateau gourmand traiteur',  label: "L'Écrin Paris", img: '/creations-4.png' },
]

export default function PlateauxRepas() {
  return (
    <ProductsPageTemplate
      heroImg="/buffet-sale.webp"
      heroTitle="Plateaux Repas"
      heroSubtitle="Des plateaux équilibrés et généreux pour vos déjeuners d'équipe et réunions."
      breadcrumb="Nos Créations — Plateaux Repas"
      categorieSlug="plateaux-repas"
      fallbackProducts={fallback}
    />
  )
}
