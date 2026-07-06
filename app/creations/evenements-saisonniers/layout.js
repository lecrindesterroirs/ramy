export const metadata = {
  alternates: { canonical: '/creations/evenements-saisonniers' },
  title: "Événements saisonniers entreprise Paris",
  description: "Galette des Rois, Chandeleur, Halloween, Noël : des prestations traiteur pour chaque moment de l'année dans vos bureaux à Paris.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur — traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Événements Saisonniers en entreprise | L'Écrin Traiteur",
    description: "Galette des Rois, Chandeleur, Halloween, Noël... Une prestation traiteur pour chaque moment de l'année.",
  },
}

export default function Layout({ children }) {
  return children
}
