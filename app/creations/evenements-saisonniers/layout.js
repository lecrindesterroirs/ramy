import { ogImages } from '../../../lib/og'
import { alternatesPour } from '../../../lib/i18n'

export const metadata = {
  alternates: alternatesPour('/creations/evenements-saisonniers', { en: true }),
  title: { absolute: "Événements saisonniers en entreprise | L'Écrin Traiteur" },
  description: "Galette, Chandeleur, Octobre Rose, Halloween, Noël : le calendrier des événements d'entreprise, avec dates et prix, livrés à Paris et en Île-de-France.",
  openGraph: {
    images: ogImages('/maitre-hotel-petit-dejeuner-salon.webp', "Événements saisonniers en entreprise, L'Écrin Traiteur"),
    title: "Événements saisonniers en entreprise | L'Écrin Traiteur",
    description: "Le calendrier des événements d'entreprise, avec dates et prix, livrés à Paris et en Île-de-France.",
  },
}

export default function Layout({ children }) {
  return children
}
