import { ogImages } from '../../../lib/og'
import { alternatesPour } from '../../../lib/i18n'
export const metadata = {
  alternates: alternatesPour('/creations/evenements-saisonniers', { en: true }),
  title: "Événements saisonniers entreprise Paris",
  description: "Galette des Rois, Chandeleur, Halloween, Noël : des prestations traiteur pour chaque moment de l'année dans vos bureaux à Paris.",
  openGraph: {
    images: ogImages('/cocktail-dinatoire.webp'),
    title: "Événements Saisonniers en entreprise | L'Écrin Traiteur",
    description: "Galette des Rois, Chandeleur, Halloween, Noël... Une prestation traiteur pour chaque moment de l'année.",
  },
}

export default function Layout({ children }) {
  return children
}
