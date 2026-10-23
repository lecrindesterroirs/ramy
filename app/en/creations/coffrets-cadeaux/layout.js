import { alternatesPourEn } from '../../../../lib/i18n'
import { ogImages } from '../../../../lib/og'

export const metadata = {
  title: { absolute: "Corporate gift boxes | L'Écrin Traiteur" },
  description: 'Gourmet corporate gift boxes delivered in Paris: Mado Paris madeleines, Pierre Morel macarons, Laura Todd cookies. From €17.90 excl. VAT, personalised on request.',
  alternates: alternatesPourEn('/creations/coffrets-cadeaux'),
  openGraph: {
    images: ogImages('/prod-madeleines-50.webp'),
    title: "Corporate gift boxes | L'Écrin Traiteur",
    description: 'Gourmet boxes ready to give, with artisans we name. Delivered in Paris and the Paris region.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
