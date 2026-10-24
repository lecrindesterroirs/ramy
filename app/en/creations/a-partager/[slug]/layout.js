import { alternatesPourEn } from '../../../../../lib/i18n'
import { enMenu } from '../../../../../lib/en/produits/aPartager'
import { MENUS } from '../../../../creations/a-partager/data'
import { ogImages } from '../../../../../lib/og'

/* Seuls les menus traduits ont une page ici ; un slug inventé répond 404. */
export const dynamicParams = false

export function generateStaticParams() {
  return MENUS.filter(m => enMenu(m.key)).map(m => ({ slug: m.key }))
}

const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

export async function generateMetadata({ params }) {
  const { slug } = await params
  const m = MENUS.find(x => x.key === slug)
  const en = m && enMenu(m.key)
  if (!m || !en) return { title: "Sharing menus, corporate catering Paris | L'Écrin Traiteur" }
  const px = ((/(\d+[,.]\d{2})/.exec(m.prix) || [])[1] || '').replace(',', '.')
  return {
    title: { absolute: `${m.nom}, sharing menu Paris | L'Écrin Traiteur` },
    description: fit([
      `${m.nom}: ${en.accroche} Sharing menu for 8 to 12 people, €${px} excl. VAT per person, delivered from 6:30 am.`,
      `${m.nom}: sharing menu for 8 to 12 people, €${px} excl. VAT per person, delivered from 6:30 am in Paris.`,
      `${m.nom}: sharing menu, €${px} excl. VAT per person, delivered from 6:30 am.`,
    ], 155),
    alternates: alternatesPourEn(`/creations/a-partager/${m.key}`),
    openGraph: {
      images: ogImages(m.img),
      title: `${m.nom}, sharing menu | L'Écrin Traiteur`,
      description: `${en.accroche} Sharing menu for 8 to 12 people, delivered from 6:30 am in Paris.`,
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
