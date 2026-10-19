import { notFound } from 'next/navigation'
import { OCCASIONS, FAQ_DERNIERE_MINUTE } from '../../../lib/occasionsData'
import { reecrireLiensEn } from '../../../lib/i18n'
import { enSlugs } from '../../../lib/en/journal'
import { enOccasion, FAQ_DERNIERE_MINUTE_EN } from '../../../lib/en/pages/occasions'
import { PRODUCTS } from '../../../lib/productsData'
import { PRODUITS as PLATEAUX_PRODUITS } from '../../creations/plateaux-repas/data'
import { FORMULES as COCKTAIL_FORMULES } from '../../creations/cocktails/data'
import { CITIES } from '../../../lib/citiesData'
import OccasionClient from './OccasionClient'

/*
  Page Occasion, côté serveur. La même page sert le français (/occasions/<slug>)
  et l'anglais (/en/occasions/<slug>) : app/occasions/[slug]/page.js et
  app/en/occasions/[slug]/page.js l'appellent avec `en` à false ou à true.
  Les liens de l'article gardent leur chemin FR : reecrireLiensEn ne les bascule
  que là où une page anglaise existe.
*/
export default function OccasionView({ slug, en }) {
  const occasionFr = OCCASIONS.find(o => o.slug === slug)
  const surcouche = occasionFr && en ? enOccasion(slug) : null
  if (!occasionFr || (en && !surcouche)) notFound()
  // Surcouche de texte : photos, produits liés et villes liées restent FR.
  const occasion = surcouche ? { ...occasionFr, ...surcouche } : occasionFr
  const article = en ? reecrireLiensEn(occasion.seoArticle, enSlugs()) : occasion.seoArticle

  const isPlateaux = occasion.productCategory === 'plateaux-repas'
  const isCocktails = occasion.productCategory === 'cocktails'
  const products = isPlateaux
    ? occasion.linkedProducts.map(id => PLATEAUX_PRODUITS.find(p => p.id === id)).filter(Boolean).map(p => ({ id: p.id, img: p.img, name: p.nom, categoryKey: 'plateau' }))
    : isCocktails
    ? occasion.linkedProducts.map(id => COCKTAIL_FORMULES.find(f => f.key === id)).filter(Boolean).map(f => ({ id: f.key, img: f.img, name: `Cocktail ${f.label}`, categoryKey: 'formule' }))
    : occasion.linkedProducts.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean).map(p => ({ id: p.id, img: p.img, name: p.name, categoryLabel: p.categoryLabel }))

  const cities = occasion.linkedCities
    .map(s => CITIES.find(c => c.slug === s))
    .filter(Boolean)
    .map(c => ({ slug: c.slug, name: c.name }))

  const allFaq = [...occasion.faq, en ? FAQ_DERNIERE_MINUTE_EN : FAQ_DERNIERE_MINUTE]

  // Le texte de l'article part à part (`article`) : on ne le double pas dans `occasion`.
  const { seoArticle, linkedProducts, linkedCities, faq, ...occasionLegere } = occasion

  return (
    <OccasionClient
      en={en}
      nomFr={occasionFr.name}
      occasion={occasionLegere}
      article={article}
      products={products}
      cities={cities}
      allFaq={allFaq}
    />
  )
}
