import { alternatesPourEn } from '../../../../../lib/i18n'
import { FORMULES } from '../../../../creations/cocktails/data'
import { enCocktail, clesCocktailsEn } from '../../../../../lib/en/produits/cocktails'
import { ogImages } from '../../../../../lib/og'

/* Les trois formules sont traduites, donc une clé absente est inventée. */
export const dynamicParams = false

export function generateStaticParams() {
  return clesCocktailsEn().map(slug => ({ slug }))
}

const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

export async function generateMetadata({ params }) {
  const { slug } = await params
  const f = FORMULES.find(x => x.key === slug)
  const en = f && enCocktail(f.key)
  if (!f || !en) return { title: "Cocktail receptions, corporate catering Paris | L'Écrin Traiteur" }

  const px = String(f.prix).replace(',', '.')

  return {
    title: { absolute: `Cocktail ${f.label}, ${f.pieces} pieces | L'Écrin Traiteur` },
    description: fit([
      `Cocktail ${f.label}: ${f.pieces} savoury and sweet pieces per person, €${px} excl. VAT. Delivered across Paris and Île-de-France, quote within 24 hours.`,
      `Cocktail ${f.label}: ${f.pieces} pieces per person, €${px} excl. VAT. Delivered across Paris and Île-de-France.`,
      `Cocktail ${f.label}: ${f.pieces} pieces per person, €${px} excl. VAT. Delivered across Paris.`,
    ], 155),
    alternates: alternatesPourEn(`/creations/cocktails/${f.key}`),
    openGraph: {
      title: `Cocktail ${f.label} | L'Écrin Traiteur`,
      description: `${f.pieces} pieces per person. ${en.accroche}`,
      images: ogImages(f.img, `Cocktail ${f.label}`),
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
