import { FAQSchema } from "@/components/FAQSchema"
import { PriceSchema } from "@/components/PriceSchema"

const TITLE = "Goûter d'entreprise à Paris : pauses gourmandes dès 6 € HT"
const DESCRIPTION = "Goûter d'entreprise à Paris dès 6 € HT par personne : café, thé, pâtisseries artisanales. Livraison quotidienne, forfait entreprise possible."

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/creations/pauses-gourmandes' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: TITLE,
    description: DESCRIPTION,
  }
}

const faqs = [
  { name: "Quel est le prix d'une pause gourmande par personne ?", answer: "À partir de 6€ HT/pers. Comprend : boisson + pâtisserie." },
  { name: "Livrez-vous chaque jour ?", answer: "Oui, du lundi au vendredi. Commande dimanche avant 18h pour lundi-vendredi." },
  { name: "Peux-tu proposer un forfait pour tout le mois ?", answer: "Oui, -10% à partir de 5 jours/semaine pendant 4 semaines." },
]

export default function Layout({ children }) {
  return (
    <>
      <FAQSchema faqs={faqs} pageTitle={TITLE} />
      <PriceSchema productName="Pause gourmande" minPrice="6" />
      {children}
    </>
  )
}
