/*
  Fiches artisans, textes anglais.

  Surcouche de texte seulement : les photos, les villes, les créations liées
  et les catégories restent lues dans lib/artisansData.js.

  Les NOMS ne sont jamais traduits — Maison Marques,
  Mado Paris, La Ferme de Viltain, Les Vergers de Plaisirs, Mariage Frères
  sont des maisons. « Meilleur Ouvrier de France » non plus : c'est un titre
  d'État, il se glose, il ne se traduit pas.
*/

export const CATEGORIES_EN = {
  'Boulangerie & Viennoiseries': 'Bakery & pastries',
  'Pâtisserie': 'Pâtisserie',
  'Produits laitiers': 'Dairy',
  'Boissons': 'Drinks',
}

export const EN_ARTISANS = {
  'maison-marques': {
    specialite: 'Viennoiserie',
    eyebrow: 'Pastries worth getting up for',
    description: "We have worked with Maison Marques since the beginning. Recommended by Gault & Millau, their pastries are made every morning with carefully chosen French flours. They are the kind of partner who never lets you down: steady, precise, always good.",
    tags: ['Recommended by Gault & Millau', 'Made fresh daily', 'Île-de-France'],
    creationsLabel: 'Breakfasts & breaks',
  },
  'mado-paris': {
    specialite: 'Madeleines',
    eyebrow: 'Artisan madeleines',
    description: "Mado Paris madeleines are the thing we are known for. Made in their Paris workshop with organic French ingredients and no palm oil. Soft, golden, recognisable on the first bite: our clients know them before they read the label.",
    tags: ['Organic ingredients', 'No palm oil', 'Paris'],
    creationsLabel: 'Boxes of madeleines',
  },
  'laura-todd': {
    specialite: 'Cookies',
    eyebrow: 'Signature cookies',
    description: "In Paris since 1985, and the people who brought the cookie to France. Their recipe, which won a prize in Chicago in 1933, is baked every day in their workshop in the 18th. Laura Todd cookies always go first on our platters. An address we keep to ourselves.",
    tags: ['In Paris since 1985', 'Signature recipe', 'Baked daily'],
    creationsLabel: 'Breakfasts & breaks',
  },
  'pierre-morel': {
    specialite: 'Macarons',
    eyebrow: 'Macarons made with precision',
    description: "Trained under a Meilleur Ouvrier de France (France's highest craft distinction), Pierre Morel has been making macarons since 2013 using a demanding method. His signature Italian meringue, no artificial flavouring, ganaches made with 64% single-origin chocolate. A precision and a consistency you rarely find.",
    tags: ['Italian meringue', 'Trained by an MOF', 'Single-origin chocolate'],
    creationsLabel: 'Breakfasts & breaks',
  },
  'philippe-urraca': {
    specialite: 'Choux & profiteroles',
    eyebrow: 'Meilleur Ouvrier de France',
    description: "A Meilleur Ouvrier de France pâtissier (France's highest craft distinction) since 1993, Philippe Urraca chaired the MOF pâtissiers for fourteen years. The choux bun and the profiterole are his speciality, to the point of opening a shop in Paris that makes nothing else. Our choux assortments are his: crisp on top, generously filled, nothing left to chance.",
    tags: ['Meilleur Ouvrier de France', 'The choux specialist', 'Paris'],
    creationsLabel: 'Afternoon treats',
  },
  'la-ferme-de-viltain': {
    specialite: 'Yoghurt & dairy',
    eyebrow: 'A dairy that sells direct',
    description: "In Jouy-en-Josas, 17 km from Paris, la Ferme de Viltain has been making its yoghurts since 1954. Their herd of 350 cows provides the milk their own dairy turns into yoghurt, plain, with fruit, as dessert. Selling direct shows in the texture: no long transport, no middleman, a fresh product that reaches our breakfast platters the next morning. Our vanilla yoghurt comes from them: it won a gold medal at the 2023 Concours général agricole, France's national farm produce competition.",
    tags: ['Jouy-en-Josas · 17 km from Paris', 'Since 1954 · 350 cows', 'Gold medal · Concours général agricole 2023'],
    creationsLabel: 'Afternoon treats',
  },
  'alain-milliat': {
    specialite: 'Juices & nectars',
    eyebrow: 'Fruit juices and nectars',
    description: "Founded in 1997 in Valence, in the Drôme. 38 references, whole fruit, no added sugar, no additives. Half the fruit comes from French growers. When you put an Alain Milliat juice on a table, people notice. That is what a product that speaks for itself looks like.",
    tags: ['Whole fruit', 'No added sugar', 'Drôme · 1997'],
    creationsLabel: 'Drinks',
  },
  'les-vergers-de-plaisirs': {
    specialite: 'Artisan apple juice',
    eyebrow: 'Apple juice from the orchard',
    description: "A family orchard planted in 1982 in Plaisir, in the Yvelines. Ten apple varieties chosen for flavour. Their artisan apple juice, with nothing added, is one of the things our clients ask for most at break time. Local, direct, no middleman.",
    tags: ['An orchard since 1982', 'Yvelines', 'Nothing added'],
    creationsLabel: 'Drinks',
  },
  'mariage-freres': {
    specialite: 'Teas & infusions',
    eyebrow: 'The French art of tea',
    description: "A great French tea house founded in 1854. The historic shop is on rue du Bourg-Tibourg, in the Marais in Paris. The reference for the French art of tea, and the house that pioneered scented teas. Mariage Frères is what we choose when the tea break should be as considered as everything else.",
    tags: ['Since 1854', 'Le Marais', 'A great house'],
    creationsLabel: 'Drinks',
  },
}

export const enArtisan = (slug) => EN_ARTISANS[slug] || null
export const slugsArtisansEn = () => Object.keys(EN_ARTISANS)

/*
  Nom anglais d'une création liée. Les créations des fiches artisans pointent
  vers trois familles, toutes traduites : on va chercher le nom dans la
  surcouche de la famille plutôt que de le recopier ici, pour qu'un nom
  corrigé ailleurs le soit aussi sur la fiche artisan.
*/
import { enPetitDejeuner } from '../produits/petitsDejeuners'
import { enPause } from '../produits/pausesGourmandes'
import { enBoisson } from '../produits/boissons'
import { PRODUCTS } from '../../productsData'

export function nomCreationEn(href, nomFr) {
  const m = String(href || '').match(/^\/creations\/([^/]+)\/(.+)$/)
  if (!m) return nomFr
  const [, famille, id] = m
  if (famille === 'petits-dejeuners-et-pauses') {
    const en = enPetitDejeuner(id)
    // La surcouche petit-déjeuner ne porte pas de `name` : le nom reste celui
    // du produit français, qui est un nom de produit.
    if (en) return en.name || (PRODUCTS.find(p => p.id === id)?.name) || nomFr
  }
  if (famille === 'pauses-gourmandes') {
    const en = enPause(id)
    if (en) return en.nom || nomFr
  }
  if (famille === 'boissons') {
    const en = enBoisson(id)
    if (en) return en.name || nomFr
  }
  return nomFr
}
