import { FAQSchema } from "@/components/FAQSchema"
import { PriceSchema } from "@/components/PriceSchema"
import { FAQ_CATALOGUE } from "./data"
import { ogImages } from '../../../lib/og'

const TITLE = "Traiteur cocktail entreprise Paris : formules dès 29,90 € HT"
const DESCRIPTION = "Formules L'Invitation (8 pièces), La Réception (12) et La Célébration (16) dès 29,90 € HT par personne. Livraison à Paris et en IDF, devis sous 24h."

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/creations/cocktails' },
  openGraph: {
    images: ogImages('/hero-cocktail.webp'),
    title: TITLE,
    description: DESCRIPTION,
  }
}

const faqs = FAQ_CATALOGUE

export default function Layout({ children }) {
  return (
    <>
      <FAQSchema faqs={faqs} pageTitle={TITLE} />
      <PriceSchema productName="Cocktail d'entreprise" minPrice="29.90" />
      {children}
    </>
  )
}
