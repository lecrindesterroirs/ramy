export const metadata = {
  alternates: { canonical: '/univers/notre-methode' },
  title: "Notre méthode d'écriture",
  description: "Qui écrit nos guides, d'où viennent les prix et les quantités, quelle part revient à l'intelligence artificielle, et comment nous corrigeons.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
    title: "Notre méthode | L'Écrin Traiteur",
    description: "Comment L'Écrin Traiteur écrit, vérifie et met à jour les guides de son Journal.",
  },
}

export default function Layout({ children }) {
  return children
}
