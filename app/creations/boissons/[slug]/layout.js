import { BOISSONS } from '../../../../lib/boissonsData'
import { descriptionProduit, detailCatalogue } from '../../../../lib/metaProduit'
import { ogImages } from '../../../../lib/og'
import { alternatesPour } from '../../../../lib/i18n'
import { slugsBoissonsEn } from '../../../../lib/en/produits/boissons'

/*
  dynamicParams = false : un slug qui n'existe pas répond 404, au lieu de
  rendre une page vide en 200. Un 200 sur une URL inventée est un soft 404 :
  Google l'indexe, puis la déclasse. La liste de slugs est dérivée des
  données, jamais tenue à la main, pour qu'un produit ajouté ne se mette
  jamais à répondre 404.
*/
export const dynamicParams = false

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
    alternates: alternatesPour(`/creations/boissons/${product.id}`, { en: slugsBoissonsEn().includes(product.id) }),
  }
}

export default function ProductLayout({ children }) {
  return children
}
