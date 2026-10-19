import { ogImages } from '../../../../../lib/og'
import { alternatesPourEn } from '../../../../../lib/i18n'

export const metadata = {
  title: { absolute: "Pink October at Work: Ideas and Advice | L'Écrin Traiteur" },
  description: "Pink October at work: €1 per guest donated on every one of our October orders. A pink selection, madeleines, macarons and red-fruit loaf cakes.",
  alternates: alternatesPourEn('/creations/evenements-saisonniers/octobre-rose'),
  openGraph: {
    images: ogImages('/octobre-rose-hero-madeleines.webp', "Pink October at work, L'Écrin Traiteur"),
    title: "Pink October at work | L'Écrin Traiteur",
    description: "€1 per guest donated on every one of our October orders. A generous selection in the colours of Pink October.",
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
