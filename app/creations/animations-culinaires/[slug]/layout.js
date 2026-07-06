import { ANIMATIONS, UNIVERS_LABEL, slugAnim } from '../data'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const a = ANIMATIONS.find(x => slugAnim(x.nom) === slug)
  if (!a) return { title: "Animation culinaire entreprise Paris | L'Écrin Traiteur" }
  return {
    title: { absolute: `${a.nom} — animation culinaire | L'Écrin Traiteur` },
    description: `${a.description} Animation culinaire live (${UNIVERS_LABEL[a.univers] || 'événement'}) pour vos événements d'entreprise à Paris et en Île-de-France.`,
    alternates: { canonical: `/creations/animations-culinaires/${slug}` },
    openGraph: {
      title: `${a.nom} — animation culinaire | L'Écrin Traiteur`,
      description: a.description,
      images: a.img ? [{ url: a.img, width: 800, height: 800, alt: a.nom }] : undefined,
      locale: 'fr_FR',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
