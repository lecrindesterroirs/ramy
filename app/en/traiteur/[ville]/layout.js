import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'
import { enCity, slugsVillesEn } from '../../../../lib/en/villes'

/*
  Pages ville en anglais : seules les villes traduites (lib/en/villes) ont
  une page. Une ville absente de la surcouche n'est pas générée.
*/
export function generateStaticParams() {
  return slugsVillesEn().map(ville => ({ ville }))
}

export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { ville } = await params
  const city = enCity(ville)
  if (!city) return {}

  const title = city.metaTitle || `${city.seoTitle} | L'Écrin Traiteur`
  const description = city.metaDescription || city.seoDescription

  return {
    title: { absolute: title },
    description,
    openGraph: {
      images: ogImages('/hero-bg.webp', `Corporate catering in ${city.name}, L'Écrin Traiteur`),
      title,
      description,
      locale: 'en_GB',
      type: 'website',
    },
    alternates: alternatesPourEn(`/traiteur/${city.slug}`),
  }
}

export default function EnCityLayout({ children }) {
  return children
}
