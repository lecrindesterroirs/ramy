const BASE = 'https://www.lecrin-traiteur.fr'

// Les fiches sont dérivées des données elles-mêmes (../data), plus d'une liste
// tenue à la main : elle n'en déclarait que douze sur trente-cinq, donc
// vingt-trois fiches en ligne restaient hors du sitemap et sans métadonnées.
import { PAUSES } from '../data'

const META = Object.fromEntries(PAUSES.map(p => [p.id, { nom: p.nom, d: p.description }]))

export const SLUGS = Object.keys(META)

export function generateStaticParams() {
  return SLUGS.map(slug => ({ slug }))
}

export function generateMetadata({ params }) {
  const m = META[params.slug]
  const path = `/creations/pauses-gourmandes/${params.slug}`
  if (!m) {
    return { title: "Pause Goûter, traiteur d'entreprise à Paris | L'Écrin Traiteur", alternates: { canonical: path } }
  }
  const title = `${m.nom}, Pause Goûter | L'Écrin Traiteur`
  const description = `${m.d} Livraison pour votre Pause Goûter à Paris et en Île-de-France dès 6h30, devis sous 24h.`
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
