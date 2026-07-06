import { BOISSONS } from '../../../../lib/boissonsData'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = BOISSONS.find(p => p.id === slug)
  if (!product) {
    return { title: "Boisson introuvable | L'Écrin Traiteur" }
  }
  return {
    title: { absolute: `${product.seoTitle || product.name} | L'Écrin Traiteur` },
    description: product.description + '. Livraison dès 6h30 à Paris et en Île-de-France. Commandez avant 14h la veille.',
    openGraph: {
      title: `${product.name} | L'Écrin Traiteur`,
      description: product.description + '. Commandez en ligne, livraison dès 6h30.',
      images: [{ url: product.img, width: 800, height: 800, alt: product.name }],
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: {
      canonical: `/creations/boissons/${product.id}`,
    },
  }
}

export default function ProductLayout({ children }) {
  return children
}
