import { alternatesPourEn } from '../../../../lib/i18n'
export const metadata = {
  title: { absolute: "Client Cases | L'Écrin Traiteur" },
  description: 'Three jobs exactly as we delivered them: the Bain & Company breakfasts, 100 people at 7:30 am for Sia Partners, a three-day offsite in the Val-d’Oise. Real quantities and times.',
  alternates: alternatesPourEn('/univers/cas-clients'),
  openGraph: { title: "Client cases | L'Écrin Traiteur", description: 'Real quantities, real times, from our delivered orders.', locale: 'en_GB', type: 'website' },
}
export default function Layout({ children }) { return children }
