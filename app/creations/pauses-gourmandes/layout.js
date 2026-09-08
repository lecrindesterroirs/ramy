import { FAQSchema } from "@/components/FAQSchema"
import { PriceSchema } from "@/components/PriceSchema"

export const metadata = {
  title: "Pauses gourmandes au bureau : café, thé & pâtisseries",
  description: "Pauses gourmandes dès 6€/pers. Café, thé, pâtisseries Mado. Livraison quotidienne. Forfait entreprise possible.",
  alternates: { canonical: '/creations/pauses-gourmandes' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Pauses gourmandes au bureau : café, thé & pâtisseries",
    description: "Pauses gourmandes dès 6€/pers. Café, thé, pâtisseries Mado. Livraison quotidienne. Forfait entreprise possible.",
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
      <FAQSchema faqs={faqs} pageTitle={metadata.title} />
      <PriceSchema productName="Pause gourmande" minPrice="6" />
      {children}
    </>
  )
}
