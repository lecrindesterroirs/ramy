import { alternatesPour } from '../../../../lib/i18n'
import { idsAnimationsEn } from '../../../../lib/en/produits/animations'
import { ANIMATIONS, UNIVERS_LABEL, slugAnim } from '../data'
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
    title: 'Animation traiteur mini burgers : atelier live à Paris',
    description: "Atelier mini burgers monté minute devant vos invités : cheeseburger, chicken crispy, bœuf effiloché BBQ, truffe-comté, halloumi. Animation live à Paris.",
  },
  'location-de-machine-expresso-professionnelle-en-entreprise': {
    title: 'Location de machine expresso en entreprise à Paris',
    description: "Une machine à expresso installée pour un café de qualité en libre-service, pour vos petits-déjeuners et événements d'entreprise à Paris et en IDF.",
  },
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const a = ANIMATIONS.find(x => slugAnim(x.nom) === slug)
  if (!a) return { title: "Animation culinaire entreprise Paris | L'Écrin Traiteur" }
  const o = OVERRIDES[slug] || {}
  const univers = UNIVERS_LABEL[a.univers] || 'événement'
  const title = o.title || fit([
    `${a.nom}, animation culinaire | L'Écrin Traiteur`,
    `${a.nom}, animation culinaire`,
  ], 60)
  const description = o.description || fit([
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
