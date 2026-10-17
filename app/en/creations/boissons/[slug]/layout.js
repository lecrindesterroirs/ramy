import { alternatesPourEn } from '../../../../../lib/i18n'
import { BOISSONS } from '../../../../../lib/boissonsData'
import { enBoisson, qtyEn, slugsBoissonsEn } from '../../../../../lib/en/produits/boissons'
import { ogImages } from '../../../../../lib/og'

export function generateStaticParams() {
  return slugsBoissonsEn().map(slug => ({ slug }))
}

const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = BOISSONS.find(x => x.id === slug)
  const en = enBoisson(slug)
  if (!p || !en) return { title: "Drinks, corporate catering Paris | L'Écrin Traiteur" }

  const px = typeof p.price === 'number' ? p.price.toFixed(2) : null
  const format = qtyEn(p.qty)

  return {
    title: { absolute: `${en.name}, corporate drinks Paris | L'Écrin Traiteur` },
    description: fit([
      px && format && `${en.name}, ${format}. €${px} excl. VAT, delivered from 6:30 am across Paris and Île-de-France.`,
      px && `${en.name}. €${px} excl. VAT, delivered from 6:30 am across Paris and Île-de-France.`,
      format && `${en.name}, ${format}. Delivered from 6:30 am across Paris and Île-de-France.`,
      `${en.name}, delivered from 6:30 am across Paris and Île-de-France.`,
    ].filter(Boolean), 155),
    alternates: alternatesPourEn(`/creations/boissons/${p.id}`),
    openGraph: {
      title: `${en.name} | L'Écrin Traiteur`,
      description: `${en.name}. Corporate delivery from 6:30 am in Paris.`,
      images: ogImages(p.img, en.name),
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
