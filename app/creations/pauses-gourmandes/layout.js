import FAQSchema from '../../../components/FAQSchema'

const faqs = [
  { name: "Budget pause pour 20 personnes ?", answer: "Classique : 200-250 € HT. Signature : 300-350 € HT. Livraison 29 € HT." },
  { name: "À quelle heure livrez-vous ?", answer: "Horaires au choix : 10h30, 15h, 16h. Commande avant 14h la veille." }
]

export const metadata = {
  alternates: { canonical: '/creations/pauses-gourmandes' },
  title: "Pause gourmande & goûter traiteur Paris",
  description: "Pauses gourmandes d'entreprise à Paris : madeleines, macarons, tartelettes, choux, cakes et cookies artisanaux livrés dès 6h30.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Pauses Gourmandes Traiteur Paris | L'Écrin Traiteur",
    description: "Goûters et pauses sucrées artisanales pour vos équipes · madeleines, macarons, tartelettes, cookies… Livraison en Île-de-France.",
  },
}

export default function Layout({ children }) {
  return (
    <>
      <FAQSchema faqs={faqs} pageTitle="Pauses gourmandes" />
      {children}
    </>
  )
}
