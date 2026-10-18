import { alternatesPourEn } from '../../../lib/i18n'

export const metadata = {
  title: { absolute: "Halal Corporate Catering in Paris & Île-de-France | L'Écrin Traiteur" },
  description: 'Everything halal and pork-free as standard, with no alcohol and no extra cost: breakfasts from €8, lunch trays from €28.90, cocktail receptions from €29.90 excl. VAT. Delivered from 6:30 am.',
  alternates: alternatesPourEn('/traiteur-halal'),
  openGraph: {
    title: "Halal corporate catering | L'Écrin Traiteur",
    description: 'One menu for the whole team: halal, pork-free, alcohol-free, at no extra cost.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
