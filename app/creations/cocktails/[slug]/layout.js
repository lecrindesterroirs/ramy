import { alternatesPour } from '../../../../lib/i18n'
import { clesCocktailsEn } from '../../../../lib/en/produits/cocktails'
import { ogImages } from '../../../../lib/og'
import { FORMULES } from '../data'

/* Métadonnées SEO par formule : prix, pièces et photo lus dans data.js
   (eux-mêmes calculés depuis lib/calculsPrix.js). */
// Mot de format repris dans le <title>. L'entrée afterwork manquait depuis
// l'ajout de la 4e formule le 26/10/2026 : le titre affichait « undefined ».
const KW = { classique: 'apéritif', signature: 'déjeunatoire', prestige: 'dînatoire', afterwork: 'généreux' }

export const SLUGS = FORMULES.map(f => f.key)

/* Un slug inventé répond 404, pas 200 : voir les autres fiches. */
export const dynamicParams = false

export function generateStaticParams() {
  return SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const f = FORMULES.find(x => x.key === slug)
  if (!f) return { title: "Cocktail introuvable | L'Écrin Traiteur" }
  return {
    title: { absolute: `Cocktail ${f.label}, ${KW[slug]} Paris | L'Écrin Traiteur` },
    description: `${f.accroche} ${f.pieces} pièces par personne, ${f.prix} € HT. Livré à Paris et en IDF, devis sous 24h.`,
    openGraph: {
      title: `Cocktail ${f.label} | L'Écrin Traiteur`,
      description: f.accroche,
      images: ogImages(f.img, `Cocktail ${f.label}`),
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: alternatesPour(`/creations/cocktails/${slug}`, { en: clesCocktailsEn().includes(slug) }),
  }
}

export default function Layout({ children }) {
  return children
}
