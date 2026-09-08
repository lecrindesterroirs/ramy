import { FAQSchema } from "@/components/FAQSchema"
import { PriceSchema } from "@/components/PriceSchema"
import { CTADevis } from "@/components/CTADevis"

export const metadata = {
  title: "Petits-déjeuners d'entreprise : livrés dès 6h30",
  description: "Petits-déj d'entreprise dès 12,50€/pers. Classique, bio, sucré-salé. Livraison 6h30-18h. Devis gratuit sous 24h.",
  openGraph: {
    title: "Petits-déjeuners d'entreprise : livrés dès 6h30",
    description: "Petits-déj d'entreprise dès 12,50€/pers. Classique, bio, sucré-salé. Livraison 6h30-18h. Devis gratuit sous 24h.",
  }
}

const faqs = [
  { name: "Quel est le petit-déjeuner moins cher ?", answer: "Formule Classique à 12,50€ HT/pers : viennoiseries, jus, café, fruits." },
  { name: "Livrez-vous avant 7h le matin ?", answer: "Oui, 6h30 possible. Commande avant 14h la veille pour 6h30 le lendemain." },
  { name: "Combien de pièces par personne ?", answer: "Comptez 2-3 viennoiseries, 1 fruit, 1-2 boissons. Nous ajustons sur demande." },
]

export default function Layout({ children }) {
  return (
    <>
      <FAQSchema faqs={faqs} pageTitle={metadata.title} />
      <PriceSchema productName="Petit-déjeuner d'entreprise" minPrice="12.50" />
      {children}
      <CTADevis category="petits-dejeuners-et-pauses" phone="01 74 54 23 10" />
    </>
  )
}
