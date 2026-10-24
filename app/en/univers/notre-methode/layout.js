import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'
export const metadata = {
  title: { absolute: "How We Write Our Guides | L'Écrin Traiteur" },
  description: 'Who writes our guides, where the numbers come from, how we use an AI assistant, when we update them, and how to tell us about a mistake.',
  alternates: alternatesPourEn('/univers/notre-methode'),
  openGraph: {
    images: ogImages('/hero-bg2.webp'), title: "How we write our guides | L'Écrin Traiteur", description: 'Editorial transparency: sources, method, updates.', locale: 'en_GB', type: 'website' },
}
export default function Layout({ children }) { return children }
