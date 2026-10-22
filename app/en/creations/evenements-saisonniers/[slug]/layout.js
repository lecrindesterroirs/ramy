import { evenements } from '../../../../creations/evenements-saisonniers/evenementsData'
import { EN_EVENEMENTS, traductionComplete } from '../../../../../lib/en/pages/evenements'
import { ogImages } from '../../../../../lib/og'
import { alternatesPourEn } from '../../../../../lib/i18n'

/* Pas de page anglaise pour un événement sans traduction complète. */
export const dynamicParams = false

export function generateStaticParams() {
  return evenements.filter(e => traductionComplete(e.slug)).map(e => ({ slug: e.slug }))
}

export function generateMetadata({ params }) {
  const fr = evenements.find(e => e.slug === params.slug)
  if (!fr || !traductionComplete(params.slug)) return {}
  const ev = EN_EVENEMENTS[params.slug]
  return {
    title: { absolute: ev.seoTitle },
    description: ev.metaDescription,
    alternates: alternatesPourEn(`/creations/evenements-saisonniers/${params.slug}`),
    openGraph: {
      images: ogImages(fr.img, ev.imgAlt),
      title: ev.seoTitle,
      description: ev.metaDescription,
      locale: 'en_GB',
      type: 'article',
    },
  }
}

export default function Layout({ children }) {
  return children
}
