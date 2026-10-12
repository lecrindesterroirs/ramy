export const metadata = {
  alternates: { canonical: '/creations/plateaux-aperitifs' },
  title: "Plateaux apéritifs traiteur Paris",
  description: "Plateaux apéritifs à partager livrés à Paris et en Île-de-France : sandwichs, fromages, charcuteries et plateaux signature. Devis sous 24h.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Plateaux Apéritifs Traiteur Paris | L'Écrin Traiteur",
    description: "Plateaux à partager artisanaux · sandwichs, fromages, charcuteries, mezzé, plateaux signature · livrés en Île-de-France pour vos afterworks et apéritifs dinatoires.",
  },
}

export default function Layout({ children }) {
  return children
}
