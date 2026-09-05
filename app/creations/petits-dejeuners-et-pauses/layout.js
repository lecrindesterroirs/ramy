import FAQSchema from '../../../components/FAQSchema'

const faqs = [
  { name: "Combien de viennoiseries par personne ?", answer: "2 par personne pour plateau classique. Avec pâtisseries : 1,5. Pour séminaire : 2,5-3 pièces." },
  { name: "Quel budget pour un petit-déjeuner d'entreprise ?", answer: "À partir de 12,50 € HT/pers classique, 18 € HT premium. S'ajoute livraison 29 € HT." },
  { name: "Livrez-vous avant 7h ?", answer: "Oui, dès 6h30 à Paris & IDF, lundi-vendredi. Commande avant 14h la veille." }
]

export const metadata = {
  title: "Petits-déjeuners d'entreprise : livrés dès 6h30",
  description: "Petits-déjeuners sur mesure pour vos réunions. Viennoiseries artisanales, jus frais, service clés en main. Dès 6h30 à Paris & Île-de-France. Devis en 2h.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Petits-déjeuners d'entreprise : livrés dès 6h30 | L'Écrin Traiteur",
    description: "Viennoiseries pur beurre, jus Alain Milliat, thés Mariage Frères. Livraison clés en main avant vos réunions à Paris & IDF.",
  },
  alternates: { canonical: '/creations/petits-dejeuners-et-pauses' },
}

export default function Layout({ children }) {
  return (
    <>
      <FAQSchema faqs={faqs} pageTitle="Petits-déjeuners d'entreprise" />
      {children}
    </>
  )
}
