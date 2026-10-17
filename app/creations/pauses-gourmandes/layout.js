import { FAQSchema } from "@/components/FAQSchema"
import { PriceSchema } from "@/components/PriceSchema"
import { FAQ_PAUSES } from "./faq"
import { ogImages } from '../../../lib/og'

const TITLE = "Goûter d'entreprise à Paris : pauses gourmandes dès 6 € HT"
const DESCRIPTION = "Goûter d'entreprise à Paris dès 6 € HT par personne : café, thé, pâtisseries artisanales. Livraison quotidienne, forfait entreprise possible."

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/creations/pauses-gourmandes' },
  openGraph: {
    images: ogImages('/hero-pauses-gourmandes.webp'),
    title: TITLE,
    description: DESCRIPTION,
  }
}

const faqs = FAQ_PAUSES

export default function Layout({ children }) {
  return (
    <>
      <FAQSchema faqs={faqs} pageTitle={TITLE} />
      <PriceSchema productName="Pause gourmande" minPrice="6" />
      {children}
    </>
  )
}
