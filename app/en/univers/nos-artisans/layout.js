import { alternatesPourEn } from '../../../../lib/i18n'

export const metadata = {
  title: { absolute: "Our Partner Makers in Paris | L'Écrin Traiteur" },
  description: 'The ten makers behind what we serve: Mado Paris madeleines, Laura Todd cookies, Pierre Morel macarons, Philippe Urraca choux buns, Alain Milliat juices, Mariage Frères teas.',
  alternates: alternatesPourEn('/univers/nos-artisans'),
  openGraph: {
    title: "Our partner makers | L'Écrin Traiteur",
    description: 'Ten named makers, chosen because they do their product better than anyone else.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
