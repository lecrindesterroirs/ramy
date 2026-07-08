'use client'

import ProductsPageTemplate from '../../../components/ProductsPageTemplate'

const fallback = [
  { name: 'Réception cocktail dînatoire',  label: "L'Écrin Paris", img: '/img-reception.webp' },
  { name: 'Dîner assis gastronomique',     label: "L'Écrin Paris", img: '/img-reception.webp' },
  { name: 'Cocktail de lancement',         label: "L'Écrin Paris", img: '/hero-cocktail.webp' },
  { name: 'Buffet inauguration',           label: "L'Écrin Paris", img: '/prod-brunch-gourmand.webp' },
  { name: "Soirée gala d'entreprise",      label: "L'Écrin Paris", img: '/creations-featured.webp' },
  { name: 'Réception privée prestige',     label: "L'Écrin Paris", img: '/detail-bg.webp' },
  { name: "Déjeuner d'affaires premium",   label: "L'Écrin Paris", img: '/chou.webp' },
  { name: 'Cocktail networking',           label: "L'Écrin Paris", img: '/mini-cookies.webp' },
]

export default function ReceptionsSurMesure() {
  return (
    <ProductsPageTemplate
      heroImg="/img-reception.webp"
      heroTitle={"Réceptions\nSur-Mesure"}
      heroSubtitle="Des événements d'exception conçus dans les moindres détails pour votre image."
      breadcrumb="Nos Créations, Réceptions Sur-Mesure"
      categorieSlug="receptions"
      fallbackProducts={fallback}
    />
  )
}
