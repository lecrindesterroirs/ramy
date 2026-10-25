import { alternatesPour } from '../../../lib/i18n'
import { slugsOccasionsEn } from '../../../lib/en/pages/occasions'
import { ogImages } from '../../../lib/og'
import { OCCASIONS } from '../../../lib/occasionsData'
import { remplirPrix } from '../../../lib/occasionsVue'

/* Un slug inventé répond 404, pas 200. */
export const dynamicParams = false

export function generateStaticParams() {
  return OCCASIONS.map(o => ({ slug: o.slug }))
}

/* Descriptions raccourcies (<= 155 car.) quand seoDescription de lib/occasionsData.js est trop longue. */
const DESCRIPTIONS_COURTES = {
  'journee-formation': "Pauses café matin et après-midi pour vos journées de formation : viennoiseries, fruits, snacks artisanaux livrés à Paris et en IDF dès 6h30.",
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const brut = OCCASIONS.find(o => o.slug === slug)
  if (!brut) return {}
  // Les prix des textes sont des marqueurs remplis par lib/occasionsVue.js.
  const o = { ...brut, seoTitle: remplirPrix(brut.seoTitle), seoDescription: remplirPrix(brut.seoDescription) }

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
    alternates: alternatesPour(`/occasions/${slug}`, { en: slugsOccasionsEn().includes(slug) }),
  }
}

export default function OccasionLayout({ children }) {
  return children
}
