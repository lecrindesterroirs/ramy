const BASE = 'https://www.lecrin-traiteur.fr'

// Les fiches sont dérivées des données elles-mêmes (../data), plus d'une liste
// tenue à la main : elle n'en déclarait que douze sur trente-cinq, donc
// vingt-trois fiches en ligne restaient hors du sitemap et sans métadonnées.
import { PAUSES } from '../data'
import { ogImages } from '../../../../lib/og'
import { alternatesPour } from '../../../../lib/i18n'
import { slugsPausesEn } from '../../../../lib/en/produits/pausesGourmandes'

const META = Object.fromEntries(PAUSES.map(p => [p.id, { nom: p.nom, d: p.description }]))

export const SLUGS = Object.keys(META)

/*
  dynamicParams = false : un slug qui n'existe pas répond 404, au lieu de
  rendre une page vide en 200. Un 200 sur une URL inventée est un soft 404 :
  Google l'indexe, puis la déclasse. La liste de slugs est dérivée des
  données, jamais tenue à la main, pour qu'un produit ajouté ne se mette
  jamais à répondre 404.
*/
export const dynamicParams = false

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
    alternates: alternatesPour(path, { en: slugsPausesEn().includes(params.slug) }),
    openGraph: { images: ogImages((PAUSES.find(x => x.id === params.slug) || {}).img, m.nom), title: `${m.nom} | L'Écrin Traiteur`, description: m.d, url: `${BASE}${path}`, locale: 'fr_FR', type: 'website' },
  }
}

export default function Layout({ children }) {
  return children
}
