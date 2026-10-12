import { FAQSchema } from "@/components/FAQSchema"
import { PriceSchema } from "@/components/PriceSchema"

const TITLE = "Petit-déjeuner d'entreprise à Paris dès 8 € HT par personne"
const DESCRIPTION = "Viennoiseries, jus, café et fruits : formule Classique dès 8 € HT par personne. Livraison dès 6h30 à Paris et en Île-de-France, devis gratuit sous 24h."

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/creations/petits-dejeuners-et-pauses' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: TITLE,
    description: DESCRIPTION,
  }
}

const faqs = [
  { name: "Quel est le petit-déjeuner moins cher ?", answer: "Formule Classique à 8€ HT/pers : viennoiseries, jus, café, fruits." },
  { name: "Livrez-vous avant 7h le matin ?", answer: "Oui, 6h30 possible. Commande avant 14h la veille pour 6h30 le lendemain." },
  { name: "Combien de pièces par personne ?", answer: "Comptez 2-3 viennoiseries, 1 fruit, 1-2 boissons. Nous ajustons sur demande." },
]

export default function Layout({ children }) {
  return (
    <>
      <FAQSchema faqs={faqs} pageTitle={TITLE} />
      <PriceSchema productName="Petit-déjeuner d'entreprise" minPrice="8.00" />
      {children}
    </>
  )
}
