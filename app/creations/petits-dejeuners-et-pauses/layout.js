import { alternatesPour } from '../../../lib/i18n'
import { PriceSchema } from "@/components/PriceSchema"
import { ogImages } from '../../../lib/og'
import { PDJ_LEGER, euroFr } from '../../../lib/prixEntree'

/* La FAQ (affichée et balisée) est portée par la page (ProductsPageTemplate), plus par ce layout. */
const TITLE = `Petit-déjeuner d'entreprise à Paris dès ${euroFr(PDJ_LEGER)} HT, livré dès 6h30`
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

export default function Layout({ children }) {
  return (
    <>
      <PriceSchema productName="Petit-déjeuner d'entreprise" minPrice={PDJ_LEGER.toFixed(2)} />
      {children}
    </>
  )
}
