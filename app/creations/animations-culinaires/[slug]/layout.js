import { alternatesPour } from '../../../../lib/i18n'
import { idsAnimationsEn } from '../../../../lib/en/produits/animations'
import { ANIMATIONS, UNIVERS_LABEL, slugAnim, prixDesAnimation } from '../data'
import { euroFr, ANIMATION_DES } from '../../../../lib/prixEntree'
import { ogImages } from '../../../../lib/og'

/*
  dynamicParams = false : un slug qui n'existe pas répond 404, au lieu de
  rendre une page vide en 200. Un 200 sur une URL inventée est un soft 404 :
  Google l'indexe, puis la déclasse. La liste de slugs est dérivée des
  données, jamais tenue à la main, pour qu'un produit ajouté ne se mette
  jamais à répondre 404.
*/
export const dynamicParams = false

export function generateStaticParams() {
  return ANIMATIONS.map(a => ({ slug: slugAnim(a.nom) }))
}

/* Premier candidat qui tient dans la limite (titre ~60 car., meta ~155 car.). */
const fit = (candidats, max) => candidats.find(c => c.length <= max) || candidats[candidats.length - 1]

/* Titres et metas écrits à la main pour les fiches qui ressortent en recherche
   ou dont le nom du catalogue est trop long pour le résultat Google. */
const OVERRIDES = {
  'atelier-mini-burgers': {
    title: `Animation traiteur mini burgers à Paris, dès ${euroFr(ANIMATION_DES)} HT`,
    description: `Atelier mini burgers monté minute devant vos invités : hamburger, cheeseburger, steak végétal sur demande. Dès ${euroFr(ANIMATION_DES)} HT, installation comprise.`,
  },
  'barista': {
    title: `Animation barista en entreprise à Paris, dès ${euroFr(ANIMATION_DES)} HT`,
    description: `Un barista prépare des cafés de spécialité devant vos invités : animation live pour petit-déjeuner et brunch. Dès ${euroFr(ANIMATION_DES)} HT, installation comprise.`,
  },
  'location-de-machine-expresso-professionnelle-en-entreprise': {
    title: 'Location de machine expresso en entreprise à Paris',
    description: "Une machine à expresso installée pour un expresso en libre-service, pour vos petits-déjeuners et événements d'entreprise à Paris et en IDF.",
  },
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const a = ANIMATIONS.find(x => slugAnim(x.nom) === slug)
  if (!a) return { title: "Animation culinaire entreprise Paris | L'Écrin Traiteur" }
  const o = OVERRIDES[slug] || {}
  const univers = UNIVERS_LABEL[a.univers] || 'événement'
  // Prix « dès » affiché sur la fiche (rien pour la machine expresso et les eaux infusées, sur devis).
  const dès = prixDesAnimation(a) ? ` dès ${euroFr(prixDesAnimation(a))} HT` : ''
  const title = o.title || fit([
    ...(dès ? [`${a.nom} en entreprise à Paris, dès ${euroFr(prixDesAnimation(a))} HT`, `${a.nom} : animation à Paris, dès ${euroFr(prixDesAnimation(a))} HT`] : []),
    `${a.nom}, animation culinaire | L'Écrin Traiteur`,
    `${a.nom}, animation culinaire`,
  ], 60)
  const description = o.description || fit([
    ...(dès ? [`${a.description} Animation live (${univers}) en entreprise à Paris, dès ${euroFr(prixDesAnimation(a))} HT, installation comprise. Devis sous 24h.`,
      `${a.description} Animation live en entreprise à Paris, dès ${euroFr(prixDesAnimation(a))} HT, installation comprise.`] : []),
    `${a.description} Animation culinaire live (${univers}) pour vos événements d'entreprise à Paris et en Île-de-France.`,
    `${a.description} Animation culinaire live (${univers}) pour vos événements d'entreprise à Paris.`,
    `${a.description} Animation culinaire live pour vos événements d'entreprise à Paris et en IDF.`,
    `${a.description} Animation culinaire live pour vos événements à Paris.`,
  ], 155)
  return {
    title: { absolute: title },
    description,
    alternates: alternatesPour(`/creations/animations-culinaires/${slug}`, { en: idsAnimationsEn().includes(a.id) }),
    openGraph: {
      title: `${a.nom}, animation culinaire | L'Écrin Traiteur`,
      description: a.description,
      images: ogImages(a.img, a.nom),
      locale: 'fr_FR',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return children
}
