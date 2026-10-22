import { evenements } from '../evenementsData'
import { traductionComplete } from '../../../../lib/en/pages/evenements'
import { ogImages } from '../../../../lib/og'
import { alternatesPour } from '../../../../lib/i18n'

/* Un slug inventé répond 404, pas une fausse page en 200. */
export const dynamicParams = false

export function generateStaticParams() {
  return evenements.map(e => ({ slug: e.slug }))
}

export function generateMetadata({ params }) {
  const ev = evenements.find(e => e.slug === params.slug)
  if (!ev) return {}
  const title = ev.seoTitle || `Traiteur ${ev.nom} en entreprise à Paris`
  const description = ev.metaDescription || `${ev.descCourt} Livré à Paris et en Île-de-France.`
  return {
    title: { absolute: title },
    description,
    alternates: alternatesPour(`/creations/evenements-saisonniers/${ev.slug}`, { en: traductionComplete(ev.slug) }),
    openGraph: {
      images: ogImages(ev.img, ev.imgAlt || `${ev.nom}, L'Écrin Traiteur`),
      title,
      description,
      locale: 'fr_FR',
      type: 'article',
    },
  }
}

export default function Layout({ children }) {
  return children
}
