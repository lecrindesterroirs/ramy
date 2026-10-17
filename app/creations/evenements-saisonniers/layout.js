import { ogImages } from '../../../lib/og'
export const metadata = {
  alternates: { canonical: '/creations/evenements-saisonniers' },
  title: "Événements saisonniers entreprise Paris",
  description: "Galette des Rois, Chandeleur, Halloween, Noël : des prestations traiteur pour chaque moment de l'année dans vos bureaux à Paris.",
  openGraph: {
    images: ogImages('/img-reception.webp'),
    title: "Événements Saisonniers en entreprise | L'Écrin Traiteur",
    description: "Galette des Rois, Chandeleur, Halloween, Noël... Une prestation traiteur pour chaque moment de l'année.",
  },
}

export default function Layout({ children }) {
  return children
}
