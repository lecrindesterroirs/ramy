'use client'

import ProductsPageTemplate from '../../../components/ProductsPageTemplate'

const fallback = [
  { name: 'Plateau duo de viennoiseries',      label: '16 pièces — 26,80€',   img: '/creations-1.png' },
  { name: 'Plateau de chouquettes',            label: '30 pièces — 26,80€',   img: '/creations-2.png' },
  { name: 'Plateau de viennoiseries mélangées',label: '30 pièces — 48,90€',   img: '/creations-featured.webp' },
  { name: 'Coffret de madeleines',             label: '10 madeleines — 24,90€', img: '/creations-3.png' },
  { name: 'Coffret de madeleines',             label: '20 madeleines — 49,00€', img: '/creations-4.png' },
  { name: 'Coffret de madeleines',             label: '50 madeleines — 119,00€', img: '/creations-1.png' },
  { name: 'Cake marbré maison',                label: '5/6 pers — 12,90€',    img: '/creations-2.png' },
  { name: 'Cake poire maison',                 label: '5/6 pers — 12,90€',    img: '/creations-featured.webp' },
  { name: 'Cake framboise',                    label: '5/6 pers — 12,90€',    img: '/creations-3.png' },
  { name: 'Cake pépites de chocolat',          label: '5/6 pers — 12,90€',    img: '/creations-4.png' },
  { name: 'Cake pistache maison',              label: '5/6 pers — 12,90€',    img: '/creations-1.png' },
  { name: 'Cake citron maison',                label: '5/6 pers — 12,90€',    img: '/creations-2.png' },
  { name: 'Crêpe maison',                      label: '20 grandes crêpes — 58,90€', img: '/creations-featured.webp' },
  { name: 'Brochettes de fruits',              label: '20 brochettes — 48,90€', img: '/creations-3.png' },
  { name: 'Mini navettes salées',              label: '20 navettes — 63,90€', img: '/creations-4.png' },
  { name: 'Macaron',                           label: '24 pièces — 64,00€',   img: '/creations-1.png' },
  { name: 'Cookie',                            label: '6 pièces — 17,90€',    img: '/creations-2.png' },
  { name: 'Panna cotta fruits rouges',         label: '6 pièces — 16,90€',    img: '/creations-featured.webp' },
  { name: 'Compote de pomme du verger',        label: '6 pièces — 16,90€',    img: '/creations-4.png' },
]

export default function PetitsDejeuners() {
  return (
    <ProductsPageTemplate
      heroImg="/hero-petits-dejeuners.webp"
      heroTitle={"Petits-Déjeuners\n& Pauses"}
      heroSubtitle="Des créations pensées pour les réunions, accueils et moments de partage."
      breadcrumb="Nos Créations — Petits-Déjeuners & Pauses"
      categorieSlug="petits-dejeuners"
      fallbackProducts={fallback}
    />
  )
}
