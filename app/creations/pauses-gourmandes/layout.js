import { alternatesPour } from '../../../lib/i18n'
import { FAQSchema } from "@/components/FAQSchema"
import { PriceSchema } from "@/components/PriceSchema"
import { FAQ_PAUSES } from "./faq"
import { ogImages } from '../../../lib/og'
import { PAUSE_DES, euroFr } from '../../../lib/prixEntree'

const TITLE = `Goûter d'entreprise à Paris : pauses gourmandes dès ${euroFr(PAUSE_DES)} HT`
const DESCRIPTION = `Goûter d'entreprise à Paris dès ${euroFr(PAUSE_DES)} HT par personne : madeleines, macarons, cakes, tartelettes et fruits, livrés à l'heure de la pause. Devis sous 24h.`

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesPour('/creations/pauses-gourmandes', { en: true }),
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
