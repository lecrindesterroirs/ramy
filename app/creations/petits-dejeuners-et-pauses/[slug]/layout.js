import { PRODUCTS } from '../../../../lib/productsData'

export function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.id }))
}

/* Premier candidat qui tient dans la limite d'une meta description (~155 car.). */
const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

/* Metas écrites à la main quand la description du catalogue n'est qu'une liste. */
const OVERRIDES = {
  macarons: "Macarons Pierre Morel en 12 parfums : café, caramel beurre salé, citron, framboise, pistache, yuzu. Livraison dès 6h30, commande avant 14h la veille.",
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = PRODUCTS.find(p => p.id === slug)
  if (!product) {
    return {
      title: 'Produit introuvable | L\'Écrin Traiteur',
    }
  }
  const base = product.description.replace(/\.+$/, '')
  return {
    title: product.seoTitle || `${product.name}, Livraison Paris & Île-de-France`,
    description: OVERRIDES[product.id] || fit([
      `${base}. Livraison dès 6h30 à Paris et en Île-de-France. Commandez avant 14h la veille.`,
      `${base}. Livraison dès 6h30 à Paris et en IDF, commande avant 14h la veille.`,
      `${base}. Livraison dès 6h30 à Paris, commande avant 14h la veille.`,
    ], 155),
    openGraph: {
      title: `${product.seoTitle || product.name} | L'Écrin Traiteur`,
      description: product.description + '. Commandez en ligne, livraison dès 6h30.',
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
