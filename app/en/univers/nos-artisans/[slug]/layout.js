import { alternatesPourEn } from '../../../../../lib/i18n'
import { ARTISANS, getArtisanBySlug } from '../../../../../lib/artisansData'
import { enArtisan, slugsArtisansEn, CATEGORIES_EN } from '../../../../../lib/en/univers/artisans'
import { ogImages } from '../../../../../lib/og'

/* Les dix artisans sont traduits, donc un slug absent est inventé. */
export const dynamicParams = false

export function generateStaticParams() {
  return slugsArtisansEn().map(slug => ({ slug }))
}

const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

export async function generateMetadata({ params }) {
  const { slug } = await params
  const a = getArtisanBySlug(slug)
  const en = a && enArtisan(slug)
  if (!a || !en) return { title: "Our partner makers | L'Écrin Traiteur" }

  const metier = CATEGORIES_EN[a.categorieLabel] || en.specialite

  return {
    title: { absolute: `${a.nom}, ${en.specialite} · our makers | L'Écrin Traiteur` },
    description: fit([
      `${a.nom}, ${metier.toLowerCase()} in ${a.ville}: ${en.eyebrow.toLowerCase()}. One of the makers behind what L'Écrin Traiteur serves in Paris.`,
      `${a.nom}, ${metier.toLowerCase()} in ${a.ville}. One of the makers behind what L'Écrin Traiteur serves in Paris and Île-de-France.`,
      `${a.nom} in ${a.ville}, one of the makers behind what L'Écrin Traiteur serves in Paris.`,
    ], 155),
    alternates: alternatesPourEn(`/univers/nos-artisans/${slug}`),
    openGraph: {
      title: `${a.nom} | L'Écrin Traiteur`,
      description: en.eyebrow,
      images: ogImages(a.img, a.nom),
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
