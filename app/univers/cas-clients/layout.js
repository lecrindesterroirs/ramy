export const metadata = {
  alternates: { canonical: '/univers/cas-clients' },
  title: "Cas clients : petits-déjeuners et séminaires livrés",
  description: "Trois prestations réelles de L'Écrin Traiteur : les petits-déjeuners de réunion de Bain & Company, 100 personnes chez Sia Partners, un séminaire de 3 jours dans le Val-d'Oise. Quantités et horaires.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Cas clients | L'Écrin Traiteur",
    description: "Trois prestations réelles, avec les quantités et les horaires livrés.",
  },
}

export default function Layout({ children }) {
  return children
}
