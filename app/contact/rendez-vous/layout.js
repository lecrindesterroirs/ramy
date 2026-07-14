export const metadata = {
  title: "Prendre rendez-vous",
  description: "Réservez 15 minutes avec l'équipe de L'Écrin Traiteur pour cadrer votre besoin, poser vos questions et voir comment nous pouvons vous accompagner. Sans engagement.",
  alternates: { canonical: '/contact/rendez-vous' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Prendre 15 min avec nous | L'Écrin Traiteur",
    description: "Un échange sans engagement pour cadrer votre projet d'événement d'entreprise à Paris et en Île-de-France.",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
