import { alternatesPour } from '../../../lib/i18n'

import { PriceSchema } from "@/components/PriceSchema"
import { ogImages } from '../../../lib/og'

import { FORMULES } from "./data"
const [I, R, C] = FORMULES
const TITLE = `Traiteur cocktail entreprise Paris : formules dès ${I.prix} € HT`
const DESCRIPTION = `Formules ${I.label} (${I.pieces} pièces), ${R.label} (${R.pieces}) et ${C.label} (${C.pieces}) dès ${I.prix} € HT par personne. Livraison à Paris et en IDF, devis sous 24h.`

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
