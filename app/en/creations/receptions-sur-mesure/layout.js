import { alternatesPourEn } from '../../../../lib/i18n'
import { ogImages } from '../../../../lib/og'

export const metadata = {
  title: { absolute: "Bespoke receptions | L'Écrin Traiteur" },
  description: 'Bespoke receptions in Paris: launch cocktail receptions, inaugurations and VIP receptions designed by L\'Écrin Traiteur. Quote within 24 hours.',
  alternates: alternatesPourEn('/creations/receptions-sur-mesure'),
  openGraph: {
    images: ogImages('/cocktail-dinatoire.webp'),
    title: "Bespoke receptions | L'Écrin Traiteur",
    description: 'Launch cocktail receptions, inaugurations, VIP receptions: bespoke corporate events in Paris and the Paris region.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
