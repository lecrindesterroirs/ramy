import { ogImages } from '../../../lib/og'
import { OCCASIONS } from '../../../lib/occasionsData'

export function generateStaticParams() {
  return OCCASIONS.map(o => ({ slug: o.slug }))
}

/* Descriptions raccourcies (<= 155 car.) quand seoDescription de lib/occasionsData.js est trop longue. */
const DESCRIPTIONS_COURTES = {
  'seminaire-entreprise': "Traiteur séminaire d'entreprise à Paris : petit-déjeuner d'accueil, pauses et déjeuner en une seule commande. De 20 à 500 participants, devis sous 24h.",
  'journee-formation': "Pauses café matin et après-midi pour vos journées de formation : viennoiseries, fruits, snacks artisanaux livrés à Paris et en IDF dès 6h30.",
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const o = OCCASIONS.find(o => o.slug === slug)
  if (!o) return {}

  // Marque en suffixe seulement si le titre reste sous ~60 caractères (sinon tronqué dans Google).
  const avecMarque = `${o.seoTitle} | L'Écrin Traiteur`
  const title = avecMarque.length <= 60 ? avecMarque : o.seoTitle
  const description = o.seoDescription.length > 155 && DESCRIPTIONS_COURTES[slug] ? DESCRIPTIONS_COURTES[slug] : o.seoDescription

  return {
    title: { absolute: title },
    description,
    openGraph: {
      images: ogImages(o.heroImg),
      title: o.seoTitle,
      description,
      locale: 'fr_FR',
      type: 'article',
    },
    alternates: {
      canonical: `/occasions/${slug}`,
    },
  }
}

export default function OccasionLayout({ children }) {
  return children
}
