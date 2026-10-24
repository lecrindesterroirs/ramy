import { alternatesPour } from '../../../../lib/i18n'
import { enMenu } from '../../../../lib/en/produits/aPartager'
import { MENUS } from '../data'
import { ogImages } from '../../../../lib/og'

/* Un slug inventé répond 404, pas 200 (soft 404). Slugs dérivés des données. */
export const dynamicParams = false

export function generateStaticParams() {
  return MENUS.map(m => ({ slug: m.key }))
}

const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

export async function generateMetadata({ params }) {
  const { slug } = await params
  const m = MENUS.find(x => x.key === slug)
  if (!m) return { title: "Buffet à partager traiteur Paris | L'Écrin Traiteur" }
  const px = (/(\d+[,.]\d{2})/.exec(m.prix) || [])[1]
  return {
    title: { absolute: `${m.nom}, menu à partager Paris | L'Écrin Traiteur` },
    description: fit([
      `${m.nom} : ${m.accroche} Menu à partager pour 8 à 12 personnes, ${px} € HT par personne, livré dès 6h30.`,
      `${m.nom} : menu à partager pour 8 à 12 personnes, ${px} € HT par personne, livré dès 6h30 à Paris.`,
      `${m.nom} : menu à partager, ${px} € HT par personne, livré dès 6h30.`,
    ].filter(Boolean), 155),
    alternates: alternatesPour(`/creations/a-partager/${m.key}`, { en: !!enMenu(m.key) }),
    openGraph: {
      images: ogImages(m.img),
      title: `${m.nom}, menu à partager | L'Écrin Traiteur`,
      description: `${m.accroche} Menu à partager pour 8 à 12 personnes, livré dès 6h30 à Paris.`,
      locale: 'fr_FR',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
