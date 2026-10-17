import { ogImages } from '../../../../../lib/og'
import { alternatesPourEn } from '../../../../../lib/i18n'
import { enCity, enQuartier, quartiersEn } from '../../../../../lib/en/villes'

/*
  Pages quartier en anglais : seuls les quartiers traduits (dans une ville
  traduite) ont une page. Quand le segment parent a déjà fixé la ville, on ne
  renvoie que ses quartiers.
*/
export function generateStaticParams({ params } = {}) {
  return quartiersEn()
    .filter(x => !params?.ville || x.ville === params.ville)
    .map(({ ville, quartier }) => ({ ville, quartier }))
}

export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { ville, quartier } = await params
  const q = enQuartier(ville, quartier)
  const city = enCity(ville)
  if (!q || !city) return {}

  const title = q.metaTitle || `${q.seoTitle} | L'Écrin Traiteur`
  const description = q.metaDescription || q.seoDescription

  return {
    title: { absolute: title },
    description,
    openGraph: {
      images: ogImages('/hero-bg2.webp', `Corporate catering in ${q.name}, ${city.name}, L'Écrin Traiteur`),
      title,
      description,
      locale: 'en_GB',
      type: 'website',
    },
    alternates: alternatesPourEn(`/traiteur/${ville}/${quartier}`),
  }
}

export default function EnQuartierLayout({ children }) {
  return children
}
