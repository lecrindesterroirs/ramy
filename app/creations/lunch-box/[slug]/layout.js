import { alternatesPour } from '../../../../lib/i18n'
import { slugsLunchBoxEn } from '../../../../lib/en/produits/lunchBox'
import { BOXES } from '../data'
import { ogImages } from '../../../../lib/og'

const BASE = 'https://www.lecrin-traiteur.fr'

const META = {
  "lb1": { nom: "La Parisienne", d: "Lunch box poulet mayonnaise, entrée et dessert au choix." },
  "lb2": { nom: "L'Épicée", d: "Lunch box poulet curry, entrée et dessert au choix." },
  "lb3": { nom: "La Fermière", d: "Lunch box œuf & emmental, entrée et dessert au choix." },
  "lb4": { nom: "La Nordique", d: "Lunch box saumon & avocat, entrée et dessert au choix." },
  "lb9": { nom: "L'Océane", d: "Lunch box thon mayonnaise, entrée et dessert au choix." },
}

/* Les slugs viennent des données, pas de META : une lunch box ajoutée à
   data.js sans ligne dans META garderait sa page et ses métadonnées. */
export const SLUGS = BOXES.map(b => b.id)

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
  const path = `/creations/lunch-box/${params.slug}`
  if (!m) {
    return { title: "Lunch box d'entreprise à Paris | L'Écrin Traiteur", alternates: { canonical: path } }
  }
  const title = `${m.nom}, lunch box Paris | L'Écrin Traiteur`
  // Prix HT par personne : champ `prix` des données de la box (lunch-box/data.js).
  const prix = BOXES.find(b => b.id === params.slug)?.prix
  const corps = m.d.replace(/\.$/, '')
  const description = (prix ? [
    `${m.nom} : ${corps.charAt(0).toLowerCase()}${corps.slice(1)}. ${prix} € HT par personne, livrée dès 6h30 à Paris et en Île-de-France.`,
    `${m.nom} : ${corps.charAt(0).toLowerCase()}${corps.slice(1)}. ${prix} € HT par personne, livrée dès 6h30 à Paris.`,
  ] : []).find(c => c.length <= 155) || `${m.d} Livraison à Paris et en Île-de-France dès 6h30, devis sous 24h.`
  return {
    title: { absolute: title },
    description,
    alternates: alternatesPour(path, { en: slugsLunchBoxEn().includes(params.slug) }),
    openGraph: { images: ogImages((BOXES.find(x => x.id === params.slug) || {}).img, m.nom), title: `${m.nom} | L'Écrin Traiteur`, description: m.d, url: `${BASE}${path}`, locale: 'fr_FR', type: 'website' },
  }
}

export default function Layout({ children }) {
  return children
}
