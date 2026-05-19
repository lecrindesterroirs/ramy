'use client'

import ProductsPageTemplate from '../../../components/ProductsPageTemplate'

const fallback = [
  { name: 'Jus de Pomme',                  label: '1 litre — 9,50€',   img: '/creations-1.png' },
  { name: "Jus d'Orange",                  label: '1 litre — 9,50€',   img: '/creations-2.png' },
  { name: "Jus d'Abricot",                 label: '1 litre — 10,50€',  img: '/creations-featured.webp' },
  { name: 'Jus de Pêche',                  label: '1 litre — 10,50€',  img: '/creations-3.png' },
  { name: 'Jus de Fraise',                 label: '1 litre — 10,50€',  img: '/creations-4.png' },
  { name: "Jus d'Orange Pressé Minute",    label: '1 litre — 9,90€',   img: '/creations-1.png' },
  { name: 'Jus de Pomme du Verger',        label: '1 litre — 9,50€',   img: '/creations-2.png' },
  { name: 'Jus de Pomme-Framboise',        label: '1 litre — 9,50€',   img: '/creations-featured.webp' },
  { name: 'Citronnade Gingembre JOMO',     label: '1 litre — 9,50€',   img: '/creations-3.png' },
  { name: 'Thermos de Café Bio',           label: '1 litre — 19,50€',  img: '/creations-4.png' },
  { name: 'Thermos de Thé Dammann Frères', label: '1 litre — 19,50€',  img: '/creations-1.png' },
  { name: 'Thermos de Chocolat Chaud',     label: '1 litre — 19,50€',  img: '/creations-2.png' },
  { name: 'Evian',                         label: '75 cl — 4,80€',     img: '/creations-featured.webp' },
  { name: 'Badoit',                        label: '75 cl — 4,80€',     img: '/creations-3.png' },
  { name: 'Evian',                         label: '33 cl — 3,80€',     img: '/creations-4.png' },
]

export default function Boissons() {
  return (
    <ProductsPageTemplate
      heroImg="/creations-featured.webp"
      heroTitle={"Boissons"}
      heroSubtitle="Jus Alain Milliat, thés Dammann Frères, cafés et eaux. Des boissons choisies pour leur qualité."
      breadcrumb="Nos Créations — Boissons"
      categorieSlug="boissons"
      fallbackProducts={fallback}
    />
  )
}
