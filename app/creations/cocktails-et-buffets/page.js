'use client'

import ProductsPageTemplate from '../../../components/ProductsPageTemplate'

const fallback = [
  { name: 'Plateau cocktail dînatoire',     label: "L'Écrin Paris", img: '/cocktail.webp' },
  { name: 'Verrines gourmandes',            label: "L'Écrin Paris", img: '/buffet.webp' },
  { name: 'Buffet froid prestige',          label: "L'Écrin Paris", img: '/mini-cookies.webp' },
  { name: 'Mini-bouchées sucrées-salées',   label: "L'Écrin Paris", img: '/creations-2.png' },
  { name: 'Plateau charcuterie & fromages', label: "L'Écrin Paris", img: '/buffet-sale.webp' },
  { name: 'Buffet cocktail premium',        label: "L'Écrin Paris", img: '/chou.webp' },
  { name: 'Corbeille de mignardises',       label: "L'Écrin Paris", img: '/creations-4.png' },
  { name: 'Sélection de canapés',           label: "L'Écrin Paris", img: '/navette.webp' },
]

export default function CocktailsEtBuffets() {
  return (
    <ProductsPageTemplate
      heroImg="/cocktail.webp"
      heroTitle={"Cocktails\n& Buffets"}
      heroSubtitle="Des buffets et cocktails pensés pour vos événements d'entreprise, de la pause au dîner debout."
      breadcrumb="Nos Créations — Cocktails & Buffets"
      categorieSlug="cocktails-buffets"
      fallbackProducts={fallback}
    />
  )
}
