// Page pivot sur « traiteur entreprise Paris ». Le mot « entreprise » manquait
// au title alors qu'il est dans le H1 et dans toutes les requêtes visées.
export const metadata = {
  title: "Traiteur entreprise Paris & Île-de-France",
  description: "Traiteur d'entreprise à Paris et en Île-de-France : petits-déjeuners, plateaux repas, cocktails et buffets livrés au bureau dès 6h30. Devis sous 24h.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Traiteur entreprise Paris & Île-de-France | L'Écrin Traiteur",
    description: "Petits-déjeuners, plateaux repas et cocktails d'entreprise livrés dans toute l'Île-de-France dès 6h30.",
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
