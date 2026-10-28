import { alternatesPour } from '../../../lib/i18n'

import { PriceSchema } from "@/components/PriceSchema"
import { ogImages } from '../../../lib/og'

import { FORMULES } from "./data"
const par = (k) => FORMULES.find(f => f.key === k)
const [I, R, C, A] = ['classique', 'signature', 'prestige', 'afterwork'].map(par)
const TITLE = `Traiteur cocktail entreprise Paris : formules dès ${I.prix} € HT`
const DESCRIPTION = `Quatre cocktails dès ${I.prix} € HT par personne : ${I.label} (${I.pieces} pièces), ${R.label} (${R.pieces}), ${C.label} (${C.pieces}), ${A.label} (${A.pieces}). Livrés à Paris et en IDF.`

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesPour('/creations/cocktails', { en: true }),
  openGraph: {
    images: ogImages('/hero-cocktail.webp'),
    title: TITLE,
    description: DESCRIPTION,
  }
}

export default function Layout({ children }) {
  return (
    <>
      {/* Le FAQPage est porté par la page (CocktailsIndexView), qui affiche la même FAQ. */}
      <PriceSchema productName="Cocktail d'entreprise" minPrice={I.prixNum.toFixed(2)} />
      {children}
    </>
  )
}
