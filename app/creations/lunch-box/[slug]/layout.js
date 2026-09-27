const BASE = 'https://www.lecrin-traiteur.fr'

const META = {
  "lb1": { nom: "La Parisienne", d: "Lunch box poulet mayonnaise, entrée et dessert au choix." },
  "lb2": { nom: "L'Épicée", d: "Lunch box poulet curry, entrée et dessert au choix." },
  "lb3": { nom: "La Fermière", d: "Lunch box œuf & emmental, entrée et dessert au choix." },
  "lb4": { nom: "La Nordique", d: "Lunch box saumon & avocat, entrée et dessert au choix." },
  "lb9": { nom: "L'Océane", d: "Lunch box thon mayonnaise, entrée et dessert au choix." },
}

export const SLUGS = Object.keys(META)

export function generateStaticParams() {
  return SLUGS.map(slug => ({ slug }))
}

export function generateMetadata({ params }) {
  const m = META[params.slug]
  const path = `/creations/lunch-box/${params.slug}`
  if (!m) {
    return { title: "Lunch box d'entreprise à Paris | L'Écrin Traiteur", alternates: { canonical: path } }
  }
  const title = `${m.nom}, lunch box Paris | L'Écrin Traiteur`
  const description = `${m.d} Livraison à Paris et en Île-de-France dès 6h30, devis sous 24h.`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { images: [{ url: '/og-image.jpg', width: 1200, height: 630 }], title: `${m.nom} | L'Écrin Traiteur`, description: m.d, url: `${BASE}${path}`, locale: 'fr_FR', type: 'website' },
  }
}

export default function Layout({ children }) {
  return children
}
