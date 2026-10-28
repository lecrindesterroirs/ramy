import { alternatesPourEn } from '../../../../lib/i18n'
import { OCCASIONS } from '../../../../lib/occasionsData'
import { enOccasion, slugsOccasionsEn } from '../../../../lib/en/pages/occasions'
import { ogImages } from '../../../../lib/og'

/* Les dix occasions sont traduites, donc un slug absent est inventé. */
export const dynamicParams = false

export function generateStaticParams() {
  return slugsOccasionsEn().map(slug => ({ slug }))
}

const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

export async function generateMetadata({ params }) {
  const { slug } = await params
  const o = OCCASIONS.find(x => x.slug === slug)
  const en = o && enOccasion(slug)
  if (!o || !en) return { title: "Corporate catering by occasion | L'Écrin Traiteur" }

  return {
    title: { absolute: `${en.heroTitle} | L'Écrin Traiteur` },
    description: fit([
      `${en.heroDescription} Order until 10 am the day before, quote within 24 hours.`,
      en.heroDescription,
      `${en.name} catering delivered from 6:30 am across Paris and Île-de-France. Quote within 24 hours.`,
    ], 165),
    alternates: alternatesPourEn(`/occasions/${slug}`),
    openGraph: {
      title: `${en.heroTitle} | L'Écrin Traiteur`,
      description: en.heroDescription,
      images: ogImages(o.heroImg, en.heroTitle),
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
