'use client'

import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { PRODUCTS } from '../../../lib/productsData'

export default function PetitsDejeuners() {
  return (
    <ProductsPageTemplate
      heroImg="/hero-petits-dejeuners.webp"
      heroTitle={"Petits-Déjeuners\n& Pauses"}
      heroSubtitle="Des créations pensées pour les réunions, accueils et moments de partage."
      breadcrumb="Nos Créations — Petits-Déjeuners & Pauses"
      categorieSlug="petits-dejeuners"
      fallbackProducts={PRODUCTS}
    />
  )
}
