import { alternatesPour } from '../../../../lib/i18n'
import { slugsPetitsDejeunersEn } from '../../../../lib/en/produits/petitsDejeuners'
import { PRODUCTS } from '../../../../lib/productsData'
import { descriptionProduit, detailCatalogue } from '../../../../lib/metaProduit'
import { ogImages } from '../../../../lib/og'

/*
  dynamicParams = false : un slug qui n'existe pas répond 404, au lieu de
  rendre une page vide en 200. Un 200 sur une URL inventée est un soft 404 :
  Google l'indexe, puis la déclasse. La liste de slugs est dérivée des
  données, jamais tenue à la main, pour qu'un produit ajouté ne se mette
  jamais à répondre 404.
*/
export const dynamicParams = false

export function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.id }))
}

/* Détails écrits à la main quand la donnée du catalogue n'est qu'une liste ou
   se répète. Le nom, le prix HT et « livré dès 6h30 » sont ajoutés par
   descriptionProduit (lib/metaProduit.js). */
const DETAILS = {
  'madeleines-octobre-rose': "madeleines d'exception à glaçage rose, édition Octobre Rose",
  macarons: "24 macarons Pierre Morel en 12 parfums, dont café, caramel beurre salé, citron, framboise, pistache et yuzu",
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = PRODUCTS.find(p => p.id === slug)
  if (!product) {
    return {
      title: 'Produit introuvable | L\'Écrin Traiteur',
    }
  }
  const { nom, detail } = detailCatalogue(product)
  const description = descriptionProduit({
    nom,
    detail: DETAILS[product.id] || detail,
    prix: product.price,
  })
  return {
    title: product.seoTitle || `${product.name}, Livraison Paris & Île-de-France`,
    description,
    openGraph: {
      title: `${product.seoTitle || product.name} | L'Écrin Traiteur`,
      description,
      images: ogImages(product.img, product.name),
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: alternatesPour(`/creations/petits-dejeuners-et-pauses/${product.id}`, { en: slugsPetitsDejeunersEn().includes(product.id) }),
  }
}

export default function ProductLayout({ children }) {
  return children
}
