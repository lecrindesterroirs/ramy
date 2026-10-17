import { alternatesPourEn } from '../../../../../lib/i18n'
import { BOXES } from '../../../../creations/lunch-box/data'
import { enLunchBox, slugsLunchBoxEn } from '../../../../../lib/en/produits/lunchBox'
import { ogImages } from '../../../../../lib/og'

/*
  Métadonnées des fiches lunch box anglaises. Même raison que pour les
  plateaux repas : la page est un composant client, elle n'a donc pas de
  métadonnées à elle sans ce layout.
*/

/* Toutes les fiches de cette famille sont traduites, donc un slug absent
   d'ici est un slug inventé : il doit répondre 404, pas 200. */
export const dynamicParams = false

export function generateStaticParams() {
  return slugsLunchBoxEn().map(slug => ({ slug }))
}

const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

export async function generateMetadata({ params }) {
  const { slug } = await params
  const b = BOXES.find(x => x.id === slug)
  const en = enLunchBox(slug)
  if (!b || !en) return { title: "Lunch boxes, corporate catering Paris | L'Écrin Traiteur" }

  // Le sous-titre anglais porte la garniture et le pain : « Chicken mayonnaise · Baguette or brioche bread ».
  const garniture = (en.sousTitre || '').split('·')[0].trim()
  const px = b.prix ? b.prix.replace(',', '.') : null

  return {
    title: { absolute: `${b.nom}, lunch box Paris | L'Écrin Traiteur` },
    description: fit([
      px && `${b.nom}: ${garniture.toLowerCase()} lunch box, starter and dessert included. €${px} excl. VAT, delivered from 6:30 am in Paris.`,
      px && `${b.nom}: ${garniture.toLowerCase()} lunch box, starter and dessert. €${px} excl. VAT, delivered from 6:30 am.`,
      `${b.nom}: ${garniture.toLowerCase()} lunch box, starter and dessert included, delivered from 6:30 am in Paris.`,
      `${b.nom}: ${garniture.toLowerCase()} lunch box, delivered from 6:30 am across Paris and Île-de-France.`,
    ].filter(Boolean), 155),
    alternates: alternatesPourEn(`/creations/lunch-box/${b.id}`),
    openGraph: {
      title: `${b.nom}, lunch box | L'Écrin Traiteur`,
      description: `${b.nom} lunch box, made the same morning. Corporate delivery from 6:30 am in Paris.`,
      images: ogImages(b.img, b.nom),
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
