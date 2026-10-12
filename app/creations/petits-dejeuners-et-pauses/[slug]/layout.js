import { PRODUCTS } from '../../../../lib/productsData'
import { descriptionProduit, detailCatalogue } from '../../../../lib/metaProduit'

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
      images: [{ url: product.img, width: 800, height: 800, alt: product.name }],
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: {
      canonical: `/creations/petits-dejeuners-et-pauses/${product.id}`,
    },
  }
}

export default function ProductLayout({ children }) {
  return children
}
