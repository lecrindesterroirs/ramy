import { alternatesPourEn } from '../../../../../lib/i18n'
import { PLATEAUX } from '../../../../creations/plateaux-aperitifs/data'
import { enPlateauAperitif, slugsPlateauxAperitifsEn } from '../../../../../lib/en/produits/plateauxAperitifs'
import { ogImages } from '../../../../../lib/og'

/* Toutes les fiches de cette famille sont traduites, donc un slug absent
   d'ici est un slug inventé : il doit répondre 404, pas 200. */
export const dynamicParams = false

export function generateStaticParams() {
  return slugsPlateauxAperitifsEn().map(slug => ({ slug }))
}

const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = PLATEAUX.find(x => x.id === slug)
  const en = enPlateauAperitif(slug)
  if (!p || !en) return { title: "Aperitif platters, corporate catering Paris | L'Écrin Traiteur" }

  const quoi = (en.description || '').replace(/\.$/, '')

  return {
    title: { absolute: `${en.nom} platter, corporate aperitif Paris | L'Écrin Traiteur` },
    description: fit([
      `${en.nom}: ${quoi}. Sharing platter delivered from 6:30 am across Paris and Île-de-France.`,
      `${en.nom}: ${quoi}. Sharing platter delivered from 6:30 am in Paris.`,
      `${en.nom} platter to share, delivered from 6:30 am across Paris and Île-de-France.`,
      `${en.nom} platter to share, delivered from 6:30 am in Paris.`,
    ], 155),
    alternates: alternatesPourEn(`/creations/plateaux-aperitifs/${p.id}`),
    openGraph: {
      title: `${en.nom} platter | L'Écrin Traiteur`,
      description: `${en.nom} platter to share. Corporate delivery from 6:30 am in Paris.`,
      images: ogImages(p.img, en.nom),
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
