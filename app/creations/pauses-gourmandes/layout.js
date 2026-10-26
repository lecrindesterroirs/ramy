import { alternatesPour } from '../../../lib/i18n'
import { PriceSchema } from "@/components/PriceSchema"
import { ogImages } from '../../../lib/og'
import { PAUSE_DES, euroFr } from '../../../lib/prixEntree'

/* La FAQ (affichée et balisée) est portée par la page (ProductsPageTemplate), plus par ce layout. */
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

export default function Layout({ children }) {
  return (
    <>
      <PriceSchema productName="Pause gourmande" minPrice={PAUSE_DES.toFixed(2)} />
      {children}
    </>
  )
}
