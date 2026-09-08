import { FAQSchema } from "@/components/FAQSchema"
import { PriceSchema } from "@/components/PriceSchema"

export const metadata = {
  title: "Cocktails d'entreprise : apéros & buffets livrés",
  description: "Cocktails d'entreprise dès 12€ HT/pers. Formules classique & signature. Buffet apéritif & afterwork. Livraison Paris IDF.",
  alternates: { canonical: '/creations/cocktails' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Cocktails d'entreprise : apéros & buffets livrés",
    description: "Cocktails d'entreprise dès 12€ HT/pers. Formules classique & signature. Buffet apéritif & afterwork. Livraison Paris IDF.",
  }
}

const faqs = [
  { name: "Quel est le budget minimum pour un cocktail ?", answer: "À partir de 12€ HT/pers (Classique) pour au moins 20 personnes + 29€ livraison." },
  { name: "Combien de pièces par personne ?", answer: "Classique : 8 pièces. Signature : 12 pièces. Mix salé-sucré équilibré." },
  { name: "Peut-on customiser le menu ?", answer: "Oui, envoyez un mail ou demandez un devis pour mix maison." },
]

export default function Layout({ children }) {
  return (
    <>
      <FAQSchema faqs={faqs} pageTitle={metadata.title} />
      <PriceSchema productName="Cocktail d'entreprise" minPrice="12" />
      {children}
    </>
  )
}
