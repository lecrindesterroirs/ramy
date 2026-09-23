import { FAQSchema } from "@/components/FAQSchema"
import { PriceSchema } from "@/components/PriceSchema"

export const metadata = {
  title: "Cocktails d'entreprise : apéros & buffets livrés",
  description: "Cocktails d'entreprise dès 29,90€/pers. Formules L'Invitation, La Réception, La Célébration. Livraison Paris IDF, devis 24h.",
  alternates: { canonical: '/creations/cocktails' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Cocktails d'entreprise : apéros & buffets livrés",
    description: "Cocktails d'entreprise dès 29,90€/pers. Formules L'Invitation, La Réception, La Célébration. Livraison Paris IDF, devis 24h.",
  }
}

const faqs = [
  { name: "Quel est le budget minimum pour un cocktail ?", answer: "À partir de 29,90€ HT/pers (formule L'Invitation, 8 pièces) + 29€ HT de livraison." },
  { name: "Combien de pièces par personne ?", answer: "L'Invitation : 8 pièces. La Réception : 12 pièces. La Célébration : 16 pièces. Mix salé-sucré équilibré." },
  { name: "Peut-on customiser le menu ?", answer: "Oui, envoyez un mail ou demandez un devis pour mix maison." },
]

export default function Layout({ children }) {
  return (
    <>
      <FAQSchema faqs={faqs} pageTitle={metadata.title} />
      <PriceSchema productName="Cocktail d'entreprise" minPrice="29.90" />
      {children}
    </>
  )
}
