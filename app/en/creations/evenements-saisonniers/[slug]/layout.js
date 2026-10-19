import { evenements } from '../../../../creations/evenements-saisonniers/evenementsData'
import { EN_EVENEMENTS } from '../../../../../lib/en/pages/evenements'
import { ogImages } from '../../../../../lib/og'
import { alternatesPourEn } from '../../../../../lib/i18n'

export function generateStaticParams() {
  // 'octobre-rose' a sa propre route dédiée côté anglais aussi : l'exclure ici
  // évite la collision de build que la route française connaît déjà.
  return evenements.filter(e => e.slug !== 'octobre-rose').map(e => ({ slug: e.slug }))
}

export async function generateMetadata({ params }) {
  const brut = evenements.find(e => e.slug === params.slug)
  const ev = brut && { ...brut, ...(EN_EVENEMENTS[brut.slug] || {}) }

  if (!ev) {
    return {
      title: 'Seasonal corporate events',
      description: 'Our catering for your corporate events across Paris and Île-de-France.',
    }
  }

  return {
    title: { absolute: `${ev.nom} Catering for Companies in Paris` },
    description: `${ev.descCourt} Catering delivered across Paris and Île-de-France.`,
    alternates: alternatesPourEn(`/creations/evenements-saisonniers/${params.slug}`),
    openGraph: {
      images: ogImages(ev.img, `${ev.nom}, L'Écrin Traiteur`),
      title: `${ev.nom} catering for companies | L'Écrin Traiteur`,
      description: ev.descCourt,
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
