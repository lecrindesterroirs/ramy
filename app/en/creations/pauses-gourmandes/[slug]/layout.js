import { alternatesPourEn } from '../../../../../lib/i18n'
import { PAUSES } from '../../../../creations/pauses-gourmandes/data'
import { enPause, prixEn, slugsPausesEn } from '../../../../../lib/en/produits/pausesGourmandes'
import { ogImages } from '../../../../../lib/og'

/* Toutes les fiches de cette famille sont traduites, donc un slug absent
   d'ici est un slug inventé : il doit répondre 404, pas 200. */
export const dynamicParams = false

export function generateStaticParams() {
  return slugsPausesEn().map(slug => ({ slug }))
}

const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = PAUSES.find(x => x.id === slug)
  const en = enPause(slug)
  if (!p || !en) return { title: "Afternoon treats, corporate catering Paris | L'Écrin Traiteur" }

  const prix = prixEn(p.prix)
  const quoi = (en.description || '').replace(/\.$/, '')

  return {
    title: { absolute: `${en.nom}, office treats Paris | L'Écrin Traiteur` },
    description: fit([
      prix && `${en.nom}: ${quoi}. €${prix.montant} excl. VAT, delivered from 6:30 am across Paris.`,
      prix && `${en.nom}. €${prix.montant} excl. VAT, delivered from 6:30 am in Paris and Île-de-France.`,
      `${en.nom}: ${quoi}. Delivered from 6:30 am across Paris and Île-de-France.`,
      `${en.nom}, for office breaks. Delivered from 6:30 am across Paris and Île-de-France.`,
    ].filter(Boolean), 155),
    alternates: alternatesPourEn(`/creations/pauses-gourmandes/${p.id}`),
    openGraph: {
      title: `${en.nom} | L'Écrin Traiteur`,
      description: `${en.nom}, made the same day. Corporate delivery from 6:30 am in Paris.`,
      images: ogImages(p.img, en.nom),
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
