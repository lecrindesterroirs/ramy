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

// Description sous 155 caractères (coupée au-delà dans Google) : phrases entières de la fiche, puis une fin fixe.
// « Mado » ne figure ni dans un titre ni dans une meta (règle de la maison) : « signée Mado Paris » devient « artisanale ».
const FIN = 'Livré dès 6h30 à Paris et en IDF, devis sous 24h.'
function descriptionCourte(d) {
  const texte = d.replace(/signée Mado Paris/g, 'artisanale').replace(/\bMado( Paris)?\b/g, '').replace(/\s{2,}/g, ' ').trim()
  const place = 155 - FIN.length - 1
  let out = ''
  for (const phrase of texte.split(/(?<=\.)\s+/)) {
    const essai = out ? `${out} ${phrase}` : phrase
    if (essai.length > place) break
    out = essai
  }
  if (!out) out = texte.slice(0, place).replace(/[\s,;:]+\S*$/, '')
  return `${out} ${FIN}`
}

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
  // Titre : « Nom, Pause Goûter | L'Écrin Traiteur » quand il tient en 60 caractères, sinon sans « Pause Goûter ».
  const titreLong = `${m.nom}, Pause Goûter | L'Écrin Traiteur`
  const title = titreLong.length <= 60 ? titreLong : `${m.nom} | L'Écrin Traiteur`
  const description = descriptionCourte(m.d)
  return {
    title: { absolute: title },
    description,
    alternates: alternatesPour(path, { en: slugsPausesEn().includes(params.slug) }),
    openGraph: { images: ogImages((PAUSES.find(x => x.id === params.slug) || {}).img, m.nom), title: `${m.nom} | L'Écrin Traiteur`, description: m.d.replace(/signée Mado Paris/g, 'artisanale'), url: `${BASE}${path}`, locale: 'fr_FR', type: 'website' },
  }
}

export default function Layout({ children }) {
  return children
}
