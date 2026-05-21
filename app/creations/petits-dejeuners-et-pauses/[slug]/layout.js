import { PRODUCTS } from '../../../../lib/productsData'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = PRODUCTS.find(p => p.id === slug)
  if (!product) {
    return {
      title: 'Produit introuvable | L\'Écrin Traiteur',
    }
  }
  return {
    title: `${product.name} — Livraison Paris & Île-de-France | L'Écrin Traiteur`,
    description: product.description + '. Livraison dès 6h30 à Paris et en Île-de-France. Commandez avant 14h la veille.',
    openGraph: {
      title: `${product.name} | L'Écrin Traiteur`,
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
