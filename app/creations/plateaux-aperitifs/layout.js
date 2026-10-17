import { ogImages } from '../../../lib/og'
export const metadata = {
  alternates: { canonical: '/creations/plateaux-aperitifs' },
  title: "Plateaux apéritifs traiteur Paris",
  description: "Plateaux apéritifs à partager livrés à Paris et en Île-de-France : sandwichs, fromages, charcuteries et plateaux signature. Devis sous 24h.",
  openGraph: {
    images: ogImages('/plateau-baguettes.webp'),
    title: "Plateaux Apéritifs Traiteur Paris | L'Écrin Traiteur",
    description: "Plateaux à partager artisanaux · sandwichs, fromages, charcuteries, mezzé, plateaux signature · livrés en Île-de-France pour vos afterworks et apéritifs dinatoires.",
  },
}

export default function Layout({ children }) {
  return children
}
