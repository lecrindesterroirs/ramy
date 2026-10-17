import { BOISSONS } from '../../../../lib/boissonsData'
import { descriptionProduit, detailCatalogue } from '../../../../lib/metaProduit'
import { ogImages } from '../../../../lib/og'

export function generateStaticParams() {
  return BOISSONS.map(p => ({ slug: p.id }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = BOISSONS.find(p => p.id === slug)
  if (!product) {
    return { title: "Boisson introuvable | L'Écrin Traiteur" }
  }
  const { nom, detail } = detailCatalogue(product)
  const description = descriptionProduit({ nom, detail, prix: product.price })
  // Marque en suffixe seulement si le titre reste sous ~60 caractères.
  const avecMarque = `${product.seoTitle || product.name} | L'Écrin Traiteur`
  return {
    title: { absolute: avecMarque.length <= 60 ? avecMarque : (product.seoTitle || product.name) },
    description,
    openGraph: {
      title: `${product.name} | L'Écrin Traiteur`,
      description,
      images: ogImages(product.img, product.name),
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
