import { alternatesPourEn } from '../../../../../lib/i18n'
import { PRODUCTS } from '../../../../../lib/productsData'
import { enPetitDejeuner, slugsPetitsDejeunersEn } from '../../../../../lib/en/produits/petitsDejeuners'
import { ogImages } from '../../../../../lib/og'

/*
  Métadonnées des fiches petit-déjeuner anglaises. La page elle-même est la
  page française, qui lit sa langue dans le chemin ; elle est cliente, donc
  les métadonnées se déclarent ici.
*/

export function generateStaticParams() {
  return slugsPetitsDejeunersEn().map(slug => ({ slug }))
}

const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = PRODUCTS.find(x => x.id === slug)
  const en = enPetitDejeuner(slug)
  if (!p || !en) return { title: "Office breakfasts, corporate catering Paris | L'Écrin Traiteur" }

  const nom = en.name || p.name
  const px = typeof p.price === 'number' ? p.price.toFixed(2).replace('.00', '') : null
  const quoi = en.description || en.qty || ''

  return {
    title: { absolute: `${nom} | L'Écrin Traiteur` },
    description: fit([
      px && quoi && `${nom}: ${quoi}. €${px} excl. VAT, delivered from 6:30 am across Paris and Île-de-France.`,
      px && quoi && `${nom}: ${quoi}. €${px} excl. VAT, delivered from 6:30 am in Paris.`,
      quoi && `${nom}: ${quoi}. Delivered from 6:30 am across Paris and Île-de-France.`,
      `${nom}, for office breakfasts. Delivered from 6:30 am across Paris and Île-de-France.`,
      `${nom}, for office breakfasts. Delivered from 6:30 am in Paris.`,
    ].filter(Boolean), 155),
    alternates: alternatesPourEn(`/creations/petits-dejeuners-et-pauses/${p.id}`),
    openGraph: {
      title: `${nom} | L'Écrin Traiteur`,
      description: `${nom}, baked the same morning. Corporate delivery from 6:30 am in Paris.`,
      images: ogImages(p.img, nom),
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
