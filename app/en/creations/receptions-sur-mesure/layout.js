import { alternatesPourEn } from '../../../../lib/i18n'
import { ogImages } from '../../../../lib/og'

export const metadata = {
  title: { absolute: "Bespoke corporate events in Paris | L'Écrin Traiteur" },
  description: 'Openings, offsites, company parties: cocktail menus, live food stations and waiting staff, priced item by item. Paris and Île-de-France, quote within 24 hours.',
  alternates: alternatesPourEn('/creations/receptions-sur-mesure'),
  openGraph: {
    images: ogImages('/cocktail-dinatoire.webp'),
    title: "Bespoke corporate events | L'Écrin Traiteur",
    description: 'Cocktail menus, live food stations and waiting staff for corporate events in Paris and the Paris region.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
