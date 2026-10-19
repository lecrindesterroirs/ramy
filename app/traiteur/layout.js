import { ogImages } from '../../lib/og'
import { alternatesPour } from '../../lib/i18n'
// Page pivot sur « traiteur entreprise Paris ». Le mot « entreprise » manquait
// au title alors qu'il est dans le H1 et dans toutes les requêtes visées.
export const metadata = {
  title: "Traiteur entreprise Paris & Île-de-France",
  description: "Traiteur d'entreprise à Paris et en Île-de-France : petits-déjeuners, plateaux repas, cocktails et buffets livrés au bureau dès 6h30. Devis sous 24h.",
  openGraph: {
    images: ogImages('/hero-bg.webp'),
    title: "Traiteur entreprise Paris & Île-de-France | L'Écrin Traiteur",
    description: "Petits-déjeuners, plateaux repas et cocktails d'entreprise livrés dans toute l'Île-de-France dès 6h30.",
    locale: 'fr_FR',
    type: 'website',
  },
  // Réciprocité hreflang : la page anglaise déclare la française et
  // inversement, sinon Google ignore la paire.
  alternates: alternatesPour('/traiteur', { en: true }),
}

export default function TraiteurLayout({ children }) {
  return children
}
