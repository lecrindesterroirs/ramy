import { ogImages } from '../../../lib/og'
export const metadata = {
  title: "Coffrets cadeaux d'entreprise Paris",
  description: "Coffrets gourmands artisanaux à Paris : madeleines, macarons Pierre Morel, cookies Laura Todd. Cadeaux d'entreprise sur mesure.",
  openGraph: {
    images: ogImages('/hero-coffrets-cadeaux.webp'),
    title: "Coffrets & Cadeaux d'entreprise | L'Écrin Traiteur",
    description: "Coffrets artisanaux pour cadeaux d'entreprise · madeleines, macarons, cookies. Livraison Paris & Île-de-France.",
  },
  alternates: {
    canonical: '/creations/coffrets-cadeaux',
  },
}

export default function Layout({ children }) {
  return children
}
