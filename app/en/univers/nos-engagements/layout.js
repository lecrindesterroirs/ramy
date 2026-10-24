import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'
export const metadata = {
  title: { absolute: "Our Commitments | L'Écrin Traiteur" },
  description: 'What we commit to: a selection with no compromise, ingredients we can name, short supply chains when they serve the food, packaging we know the origin of, and delivery by our own team.',
  alternates: alternatesPourEn('/univers/nos-engagements'),
  openGraph: {
    images: ogImages('/cocktail-dinatoire.webp'), title: "Our commitments | L'Écrin Traiteur", description: 'Five commitments, written down.', locale: 'en_GB', type: 'website' },
}
export default function Layout({ children }) { return children }
