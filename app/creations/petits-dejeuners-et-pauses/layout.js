import { alternatesPour } from '../../../lib/i18n'

import { FAQSchema } from "@/components/FAQSchema"
import { PriceSchema } from "@/components/PriceSchema"
import { ogImages } from '../../../lib/og'
import { PDJ_DES, PDJ_LEGER, MINIMUM, euroFr } from '../../../lib/prixEntree'
import { LIV } from '../../../lib/calculsPrix'

const ht = (x) => `${euroFr(x)} HT`
const livre = (n, p) => n * p + LIV

const TITLE = `Petit-déjeuner d'entreprise à Paris dès ${euroFr(PDJ_LEGER)} HT`
const DESCRIPTION = `Traiteur petit-déjeuner d'entreprise à Paris : viennoiseries et café dès ${euroFr(PDJ_LEGER)} HT par personne, livrés dès 6h30. 5,0/5 sur Google, devis sous 24h.`

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
  { name: "Combien coûte un petit-déjeuner d'entreprise livré à Paris ?", answer: `Viennoiseries et café reviennent dès ${ht(PDJ_LEGER)} par personne pour 30 personnes, hors livraison. La formule Classique est à ${ht(PDJ_DES)} par personne (viennoiseries, jus, café, fruits) et le petit-déjeuner complet se chiffre sur devis, plus ${ht(LIV)} de livraison. Le minimum de commande est de ${ht(MINIMUM)}. Pour 20 personnes, la formule Classique revient à ${ht(livre(20, PDJ_DES))} livraison comprise.` },
  { name: "À quelle heure livrez-vous et jusqu'à quand commander ?", answer: "La livraison commence à 6h30, à l'heure choisie, du lundi au vendredi. La commande se passe jusqu'à la veille à 14h, et 48 h à l'avance à partir de 50 personnes." },
  { name: 'Combien de viennoiseries par personne ?', answer: "Chez L'Écrin Traiteur, nous comptons 2 mini-viennoiseries par personne (3 jusqu'à 10 personnes), 1 mignardise, 1 verre de jus et 1 boisson chaude, avec 1 thermos d'1 litre pour 6 personnes." },
  { name: "Quel est le meilleur traiteur pour un petit-déjeuner d'entreprise à Paris ?", answer: `Il n'existe pas de classement officiel : le meilleur traiteur est celui qui tient des engagements vérifiables (heure de livraison, prix publiés, produits nommés, délai de commande, régimes, minimum, avis). L'Écrin Traiteur livre dès 6h30, publie ses prix dès ${ht(PDJ_DES)} par personne en formule Classique, nomme ses artisans et affiche 5,0/5 sur Google.` },
  { name: 'Proposez-vous des options végétariennes, vegan ou sans gluten ?', answer: 'Oui, sur demande : les brochettes de fruits frais sont vegan et sans gluten, le banana bread et le pain au maïs sont sans gluten. Précisez les régimes à la demande de devis.' },
  { name: "Livrez-vous dans toute l'Île-de-France ?", answer: `Oui, à Paris et en Île-de-France. La livraison est à ${ht(LIV)} à Paris et dans les communes proches, avec un créneau choisi dès 6h30 ; au-delà, le prix de la zone figure au devis.` },
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
