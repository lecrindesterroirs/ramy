export const metadata = {
  title: "Coffrets cadeaux d'entreprise Paris",
  description: "Coffrets gourmands artisanaux à Paris : madeleines Mado Paris, macarons Pierre Morel, cookies Laura Todd. Cadeaux d'entreprise sur mesure.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Coffrets & Cadeaux d'entreprise | L'Écrin Traiteur",
    description: "Coffrets artisanaux bio pour cadeaux d'entreprise · madeleines, macarons, cookies. Livraison Paris & Île-de-France.",
  },
  alternates: {
    canonical: '/creations/coffrets-cadeaux',
  },
}

export default function Layout({ children }) {
  return children
}
