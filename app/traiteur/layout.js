export const metadata = {
  title: "Traiteur Paris & Île-de-France",
  description: "L'Écrin Traiteur livre vos petits-déjeuners, plateaux repas et cocktails d'entreprise dans toute l'Île-de-France. Devis sous 24h.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Traiteur Paris & Île-de-France | L'Écrin Traiteur",
    description: "Petits-déjeuners artisanaux et pauses d'entreprise livrés dans toute l'IDF dès 6h30.",
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: '/traiteur',
  },
}

export default function TraiteurLayout({ children }) {
  return children
}
