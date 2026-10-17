import { alternatesPourEn } from '../../../../lib/i18n'

export const metadata = {
  title: { absolute: "Aperitif platters, corporate catering Paris | L'Écrin Traiteur" },
  description: "Sharing platters for your afterworks: sandwiches, aged cheeses, halal charcuterie, salmon, crudités. Delivered from 6:30 am in Paris, on quote.",
  alternates: alternatesPourEn('/creations/plateaux-aperitifs'),
  openGraph: {
    title: "Aperitif platters | L'Écrin Traiteur",
    description: "Sharing platters for your afterworks: sandwiches, aged cheeses, halal charcuterie, salmon, crudités. Delivered from 6:30 am in Paris, on quote.",
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
