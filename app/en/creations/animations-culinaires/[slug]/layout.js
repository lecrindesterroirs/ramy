import { alternatesPourEn } from '../../../../../lib/i18n'
import { ANIMATIONS, slugAnim } from '../../../../creations/animations-culinaires/data'
import { enAnimation, idsAnimationsEn } from '../../../../../lib/en/produits/animations'
import { ogImages } from '../../../../../lib/og'

export function generateStaticParams() {
  return ANIMATIONS
    .filter(a => idsAnimationsEn().includes(a.id))
    .map(a => ({ slug: slugAnim(a.nom) }))
}

const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

export async function generateMetadata({ params }) {
  const { slug } = await params
  const a = ANIMATIONS.find(x => slugAnim(x.nom) === slug)
  const en = a && enAnimation(a.id)
  if (!a || !en) return { title: "Live food stations, corporate catering Paris | L'Écrin Traiteur" }

  const quoi = (en.description || '').replace(/\.$/, '')

  return {
    title: { absolute: `${en.nom}, live station Paris | L'Écrin Traiteur` },
    description: fit([
      `${en.nom}: ${quoi}. A live station set up at your offices in Paris and Île-de-France, on quote.`,
      `${en.nom}: ${quoi}. A live station set up at your offices in Paris, on quote.`,
      `${en.nom}, a live station set up at your offices in Paris and Île-de-France, on quote.`,
      `${en.nom}, a live station for your event in Paris, on quote.`,
    ], 155),
    alternates: alternatesPourEn(`/creations/animations-culinaires/${slug}`),
    openGraph: {
      title: `${en.nom} | L'Écrin Traiteur`,
      description: `${en.nom}, set up at your venue. Paris and Île-de-France.`,
      images: ogImages(a.img, en.nom),
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
