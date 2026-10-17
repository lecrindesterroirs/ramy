import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'
import { enPdjVille, slugsPdjVillesEn } from '../../../../lib/en/villes'

/* Pages « petit-déjeuner d'entreprise + ville » en anglais : villes traduites seulement. */
export function generateStaticParams() {
  return slugsPdjVillesEn().map(ville => ({ ville }))
}

export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { ville } = await params
  const city = enPdjVille(ville)
  if (!city) return {}

  // Comme en français : marque ajoutée seulement si le titre reste sous ~60 caractères.
  const base = city.metaTitle || city.seoTitle || `Corporate breakfast in ${city.name}`
  const withBrand = `${base} | L'Écrin Traiteur`
  const title = withBrand.length <= 60 ? withBrand : base
  const description = city.metaDescription || city.seoDescription

  return {
    title: { absolute: title },
    description,
    openGraph: {
      images: ogImages('/hero-petitdej.webp', `Corporate breakfast in ${city.name}, L'Écrin Traiteur`),
      title,
      description,
      locale: 'en_GB',
      type: 'website',
    },
    alternates: alternatesPourEn(`/petit-dejeuner-entreprise/${city.slug}`),
  }
}

export default function EnPdjVilleLayout({ children }) {
  return children
}
