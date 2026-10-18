import { alternatesPour } from '../../../lib/i18n'

import { FAQSchema } from "@/components/FAQSchema"
import { PriceSchema } from "@/components/PriceSchema"
import { ogImages } from '../../../lib/og'

const TITLE = "Petit-déjeuner entreprise Paris dès 6,50 € HT, livré dès 6h30"
const DESCRIPTION = "Traiteur petit-déjeuner d'entreprise à Paris : viennoiseries et café dès 6,50 € HT par personne, livrés dès 6h30. 5,0/5 sur Google, devis sous 24h."

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesPour('/creations/petits-dejeuners-et-pauses', { en: true }),
  openGraph: {
    images: ogImages('/hero-petitdej.webp'),
    title: TITLE,
    description: DESCRIPTION,
  }
}

const faqs = [
  { name: "Combien coûte un petit-déjeuner d'entreprise livré à Paris ?", answer: "Viennoiseries et café reviennent dès 6,50 € HT par personne pour 30 personnes, hors livraison. La formule Classique est à 8 € HT par personne (viennoiseries, jus, café, fruits) et le petit-déjeuner complet coûte 12 à 16 € HT par personne, plus 29 € HT de livraison. Le minimum de commande est de 50 € HT. Pour 20 personnes, le petit-déjeuner complet revient à 340,80 € HT livraison comprise." },
  { name: "À quelle heure livrez-vous et jusqu'à quand commander ?", answer: "La livraison commence à 6h30, à l'heure choisie, du lundi au vendredi. La commande se passe jusqu'à la veille à 14h, et 48 h à l'avance à partir de 50 personnes." },
  { name: "Combien de viennoiseries par personne ?", answer: "Comptez 2 mini-viennoiseries par personne (3 jusqu'à 10 personnes), 1 mignardise, 1 verre de jus et 1 boisson chaude, avec 1 thermos d'1 litre pour 6 personnes. Un plateau de 30 mini-viennoiseries coûte 48,90 € HT." },
  { name: "Quel est le meilleur traiteur pour un petit-déjeuner d'entreprise à Paris ?", answer: "Il n'existe pas de classement officiel : le meilleur traiteur est celui qui tient sept engagements vérifiables (heure de livraison, prix publiés, produits nommés, délai de commande, régimes, minimum, avis). L'Écrin Traiteur livre dès 6h30, publie ses prix dès 8 € HT par personne, nomme ses artisans et affiche 5,0/5 sur Google." },
  { name: "Proposez-vous des options végétariennes, vegan ou sans gluten ?", answer: "Oui, sur demande : les brochettes de fruits frais sont vegan et sans gluten, et le banana bread est sans gluten (26,90 € HT pour 6 à 8 personnes). Précisez les régimes à la demande de devis." },
  { name: "Livrez-vous dans toute l'Île-de-France ?", answer: "Oui, nous livrons à Paris et en Île-de-France. La livraison est à 29 € HT à Paris et dans les communes proches, avec un créneau choisi par le client dès 6h30." },
]

export default function Layout({ children }) {
  return (
    <>
      <FAQSchema faqs={faqs} pageTitle={TITLE} />
      <PriceSchema productName="Petit-déjeuner d'entreprise" minPrice="6.50" />
      {children}
    </>
  )
}
