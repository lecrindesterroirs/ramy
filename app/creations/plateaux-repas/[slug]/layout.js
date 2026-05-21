import { PLATEAUX_REPAS } from '../../../../lib/plateauxRepasData'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = PLATEAUX_REPAS.find(p => p.id === slug)
  if (!product) {
    return { title: "Plateau introuvable | L'Écrin Traiteur" }
  }
  return {
    title: `${product.name} — Livraison Paris & Île-de-France | L'Écrin Traiteur`,
    description: product.description + '. Livraison dès 6h30 à Paris et en Île-de-France. Commandez avant 14h la veille.',
    openGraph: {
      title: `${product.name} | L'Écrin Traiteur`,
      description: product.description + '. Devis personnalisé sous 24h.',
      images: [{ url: product.img, width: 800, height: 800, alt: product.name }],
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: {
      canonical: `/creations/plateaux-repas/${product.id}`,
    },
  }
}

export default function ProductLayout({ children }) {
  return children
}
