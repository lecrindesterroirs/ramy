export const metadata = {
  alternates: { canonical: '/creations/pauses-gourmandes' },
  title: "Pause gourmande & goûter traiteur Paris",
  description: "Pauses gourmandes d'entreprise à Paris : madeleines, macarons, tartelettes, choux, cakes et cookies artisanaux livrés dès 6h30.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Pauses Gourmandes Traiteur Paris | L'Écrin Traiteur",
    description: "Goûters et pauses sucrées artisanales pour vos équipes · madeleines, macarons, tartelettes, cookies… Livraison en Île-de-France.",
  },
}

export default function Layout({ children }) {
  return children
}
