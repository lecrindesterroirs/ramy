const BASE = 'https://www.lecrin-traiteur.fr'

const META = {
  'lb1': { nom: 'La Parisienne',      d: 'Lunch box baguette Signature jambon de dinde, entrée et dessert artisanal.' },
  'lb2': { nom: "L'Impératrice",      d: 'Lunch box club poulet César, entrée et dessert artisanal.' },
  'lb4': { nom: 'La Nordique',        d: 'Lunch box baguette saumon fumé & cream cheese, entrée et dessert artisanal.' },
  'lb5': { nom: 'La Marine',          d: 'Lunch box club thon, entrée et dessert artisanal.' },
  'lb6': { nom: 'La New-Yorkaise',    d: 'Lunch box baguette pastrami & pickles, entrée et dessert artisanal.' },
  'lb8': { nom: 'La Croustillante',   d: 'Lunch box baguette poulet César, entrée et dessert artisanal.' },
  'lb9': { nom: "L'Océane",           d: 'Lunch box baguette thon ciboulette, entrée et dessert artisanal.' },
}

export const SLUGS = Object.keys(META)

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
