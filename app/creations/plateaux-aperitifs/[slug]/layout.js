import { alternatesPour } from '../../../../lib/i18n'
import { slugsPlateauxAperitifsEn } from '../../../../lib/en/produits/plateauxAperitifs'
import { PLATEAUX } from '../data'
import { ogImages } from '../../../../lib/og'
const BASE = 'https://www.lecrin-traiteur.fr'

const META = {
  'sw1': { nom: 'Mini Baguettes Signature',    d: 'Assortiment de mini baguettes artisanales garnies.' },
  'sw2': { nom: 'Clubs Signature',             d: 'Assortiment de clubs sandwichs moelleux découpés.' },
  'sw3': { nom: 'Mini Wraps Roulés',           d: 'Assortiment de mini wraps roulés, découpés en bouchées.' },
  'sw4': { nom: 'Mini Burgers',                d: 'Assortiment de mini burgers artisanaux.' },
  'go1': { nom: 'Fromages Affinés',            d: 'Sélection de fromages affinés, fruits frais et pain artisanal.' },
  'go2': { nom: 'Charcuteries Artisanales',    d: 'Bœuf séché, bresaola, dinde & poulet fumés, olives & raisin, halal, sans porc.' },
  'go4': { nom: 'Saumon',                      d: 'Saumon fumé, gravlax, blinis, crème citron-aneth, câpres, oignons rouges & citron.' },
  'fr1': { nom: 'Crudités & Dips',             d: 'Carottes, concombre, radis, chou-fleur, tomates cerises, houmous, tzatziki & tapenade.' },
  'fr3': { nom: 'Brochettes de Fruits',        d: 'Brochettes de fruits frais de saison, à picorer. Vegan et sans gluten.' },
  'si1': { nom: 'Asiatique',                   d: "Assortiment de bouchées d'inspiration asiatique." },
  'si4': { nom: 'Douceurs',                    d: 'Sélection de desserts artisanaux à partager.' },
}

/* Les slugs viennent des données, pas de META : un plateau ajouté à data.js
   sans ligne dans META garderait sa page et ses métadonnées. */
export const SLUGS = PLATEAUX.map(p => p.id)

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
  const path = `/creations/plateaux-aperitifs/${params.slug}`
  if (!m) {
    return { title: "Plateaux apéritifs à partager, traiteur à Paris | L'Écrin Traiteur", alternates: { canonical: path } }
  }
  const title = `${m.nom}, apéritif Paris | L'Écrin Traiteur`
  const description = [
    `${m.d} Plateau apéritif à partager livré à Paris et en Île-de-France dès 6h30, devis sous 24h.`,
    `${m.d} Plateau apéritif livré à Paris et en IDF dès 6h30, devis sous 24h.`,
    `${m.d} Livré à Paris dès 6h30, devis sous 24h.`,
  ].find(c => c.length <= 155) || `${m.d} Livré à Paris dès 6h30.`
  return {
    title: { absolute: title },
    description,
    alternates: alternatesPour(path, { en: slugsPlateauxAperitifsEn().includes(params.slug) }),
    openGraph: { images: ogImages((PLATEAUX.find(x => x.id === params.slug) || {}).img, m.nom), title: `Plateau ${m.nom} | L'Écrin Traiteur`, description: m.d, url: `${BASE}${path}`, locale: 'fr_FR', type: 'website' },
  }
}

export default function Layout({ children }) {
  return children
}
