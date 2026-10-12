import { FAQSchema } from "@/components/FAQSchema"
import { PriceSchema } from "@/components/PriceSchema"
import { FAQ_CATALOGUE } from "./data"

const TITLE = "Formules cocktail livrées à Paris dès 29,90 € HT par personne"
const DESCRIPTION = "Formules L'Invitation (8 pièces), La Réception (12) et La Célébration (16) dès 29,90 € HT par personne. Livraison à Paris et en IDF, devis sous 24h."

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/creations/cocktails' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
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
