import { alternatesPourEn } from '../../../../lib/i18n'
export const metadata = {
  title: { absolute: "Client Reviews | L'Écrin Traiteur" },
  description: 'Rated 5.0 out of 5 on Google. What clients single out: artisan products, delivery on time from 6:30 am, and the service. Bain & Company, Sia Partners, Chanel, AbbVie.',
  alternates: alternatesPourEn('/univers/avis-clients'),
  openGraph: { title: "Client reviews | L'Écrin Traiteur", description: 'What our clients say, in their own words.', locale: 'en_GB', type: 'website' },
}
export default function Layout({ children }) { return children }
