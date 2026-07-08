import { PRODUITS } from '../data'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = PRODUITS.find(x => x.id === slug)
  if (!p) return { title: "Plateau repas traiteur Paris | L'Écrin Traiteur" }
  return {
    title: { absolute: `${p.nom}, plateau repas Paris | L'Écrin Traiteur` },
    description: `${p.nom} : ${p.entree}, ${p.plat}, ${p.dessert}. Plateau repas individuel livré dès 6h30 à Paris et en Île-de-France.`,
    alternates: { canonical: `/creations/plateaux-repas/${p.id}` },
    openGraph: {
      title: `${p.nom}, plateau repas | L'Écrin Traiteur`,
      description: `Plateau repas ${p.nom}, préparé le matin même. Livraison entreprise dès 6h30 à Paris.`,
      images: p.img ? [{ url: p.img, width: 800, height: 800, alt: p.nom }] : undefined,
      locale: 'fr_FR',
      type: 'website',
    },
  }
}

export default function ProductLayout({ children }) {
  return children
}
