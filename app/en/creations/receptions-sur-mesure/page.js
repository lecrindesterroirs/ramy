'use client'

import ProductsPageTemplate from '../../../../components/ProductsPageTemplate'

/*
  Index « réceptions sur mesure » en anglais. Les visuels et la structure
  viennent de la page française ; seuls les libellés changent.
*/
const fallback = [
  { name: 'Dinner cocktail reception', label: "L'Écrin Paris", img: '/cocktail-dinatoire.webp' },
  { name: 'Seated gastronomic dinner', label: "L'Écrin Paris", img: '/hero-plateau-signature.webp' },
  { name: 'Launch cocktail reception', label: "L'Écrin Paris", img: '/hero-cocktail.webp' },
  { name: 'Inauguration buffet', label: "L'Écrin Paris", img: '/prod-brunch-gourmand.webp' },
  { name: 'Company gala evening', label: "L'Écrin Paris", img: '/creations-featured.webp' },
  { name: 'Prestige private reception', label: "L'Écrin Paris", img: '/detail-bg.webp' },
  { name: 'Premium business lunch', label: "L'Écrin Paris", img: '/hero-a-partager.webp' },
  { name: 'Networking cocktail reception', label: "L'Écrin Paris", img: '/mini-cookies.webp' },
]

export default function BespokeReceptions() {
  return (
    <ProductsPageTemplate
      lang="en"
      heroImg="/cocktail-dinatoire.webp"
      heroTitle={'Bespoke\nReceptions'}
      heroSubtitle="Exceptional events, designed down to the last detail, for the image you want to give."
      breadcrumb="Our Creations, Bespoke Receptions"
      categorieSlug="receptions"
      fallbackProducts={fallback}
    />
  )
}
