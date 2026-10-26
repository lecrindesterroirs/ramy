import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
export const metadata = {
  alternates: alternatesPour('/creations/a-partager', { en: true }),
  title: { absolute: "Buffet d'entreprise à Paris : menus à partager dès 34,90 € HT | L'Écrin Traiteur" },
  description: "Buffet d'entreprise à Paris, livré dès 6h30 : 3 menus à partager (méditerranéen, parisien, végétarien) dès 34,90 € HT par personne, et le budget de chaque format de buffet. Devis sous 24 h.",
  openGraph: {
    images: ogImages('/hero-a-partager.webp'),
    title: "Buffet à Partager Traiteur Paris | L'Écrin Traiteur",
    description: "Menus généreux à partager en entreprise : salades, planches et pièces cocktail composés le matin, livraison lundi à vendredi dès 6h30 en Île-de-France.",
  },
}

export default function Layout({ children }) {
  return children
}
