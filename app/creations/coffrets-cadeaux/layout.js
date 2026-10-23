import { alternatesPour } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'
export const metadata = {
  title: "Coffrets cadeaux d'entreprise Paris",
  description: "Coffrets gourmands artisanaux à Paris : madeleines, macarons Pierre Morel, cookies Laura Todd. Cadeaux d'entreprise sur mesure.",
  openGraph: {
    images: ogImages('/prod-madeleines-50.webp'),
    title: "Coffrets & Cadeaux d'entreprise | L'Écrin Traiteur",
    description: "Coffrets artisanaux pour cadeaux d'entreprise · madeleines, macarons, cookies. Livraison Paris & Île-de-France.",
  },
  alternates: alternatesPour('/creations/coffrets-cadeaux', { en: true }),
}

export default function Layout({ children }) {
  return children
}
