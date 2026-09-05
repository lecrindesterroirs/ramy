import FAQSchema from '../../../components/FAQSchema'

const faqs = [
  { name: "Quel budget pour un cocktail d'entreprise ?", answer: "À partir de 12 € HT/pers Classique, 16 € Signature, 20 € Prestige. Livraison 29 € incluse." },
  { name: "Combien de pièces par personne ?", answer: "Classique : 8 pièces/pers. Signature : 12. Prestige : 16 pièces/pers." },
  { name: "Halal et sans porc ?", answer: "Oui, par défaut toute la carte. Zéro surcoût." }
]

export const metadata = {
  alternates: { canonical: '/creations/cocktails' },
  title: "Cocktails d'entreprise : apéros & buffets livrés",
  description: "Cocktails dès 12€ HT/pers : pièces salées & sucrées artisanales, prêts à servir. Livraison Paris & IDF. Devis 24h.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Cocktails d'entreprise artisanaux | L'Écrin Traiteur",
    description: "Apéros raffinés : pièces salées & sucrées, fromages, charcuteries sélectionnées. Formules pour 20 à 300 pers, livrées en Île-de-France.",
  },
}

export default function Layout({ children }) {
  return (
    <>
      <FAQSchema faqs={faqs} pageTitle="Cocktails d'entreprise" />
      {children}
    </>
  )
}
