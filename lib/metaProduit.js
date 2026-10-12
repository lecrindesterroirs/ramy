// Meta descriptions des fiches produit (petits-déjeuners, boissons, lunch box,
// plateaux repas) : chaque description porte le nom du produit, ce qu'il
// contient, le nombre de personnes quand la donnée est sûre, le prix HT et
// « livré dès 6h30 ». Uniquement des champs déjà présents dans les données.
//
// Limite : 155 caractères. Plusieurs variantes de plus en plus courtes sont
// essayées, la première qui tient est retenue.

import { personnes, minuscules } from './ficheAsavoir'

const MAX = 155

const eur = (n) => n.toFixed(2).replace('.', ',')
const norm = (s) =>
  String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim()
const propre = (s) =>
  String(s)
    .replace(/\s*[—–]\s*/g, ', ')
    .replace(/\s*&\s*/g, ' et ')
    .replace(/\s*·\s*/g, ', ')
    .replace(/\.+$/, '')
    .trim()

export const prixHT = (prix) => (typeof prix === 'number' && prix > 0 ? `${eur(prix)} € HT` : 'Prix sur devis')

// Premier candidat qui tient dans la limite.
const premier = (candidats, max = MAX) => candidats.find((c) => c.length <= max) || candidats[candidats.length - 1]

/*
  Description d'un produit : « Nom : détail. 13,90 € HT, livré dès 6h30 à Paris
  et en Île-de-France. » Le détail est raccourci élément par élément (virgules)
  si nécessaire, puis abandonné.
*/
export function descriptionProduit({ nom, detail = '', prix, apresPrix = '' }) {
  const px = prixHT(prix)
  const fins = [
    `${px}${apresPrix ? ` ${apresPrix}` : ''}, livré dès 6h30 à Paris et en Île-de-France. Commande avant 14h la veille.`,
    `${px}${apresPrix ? ` ${apresPrix}` : ''}, livré dès 6h30 à Paris et en Île-de-France.`,
    `${px}${apresPrix ? ` ${apresPrix}` : ''}, livré dès 6h30 à Paris et en IDF.`,
    `${px}${apresPrix ? ` ${apresPrix}` : ''}, livré dès 6h30 à Paris.`,
    `${px}, livré dès 6h30.`,
  ]
  const morceaux = detail ? detail.split(/,\s+/) : []
  for (let n = morceaux.length; n >= 1; n--) {
    const tete = `${nom} : ${morceaux.slice(0, n).join(', ')}.`
    for (const f of fins) {
      const c = `${tete} ${f}`
      if (c.length <= MAX) return c
    }
  }
  return premier(fins.map((f) => `${nom}. ${f}`))
}

/*
  Détail d'un produit du catalogue (productsData / boissonsData) à partir de
  description, qty et ingredients. Retourne { nom, detail }.
*/
export function detailCatalogue(p) {
  let nom = propre(p.name)
  const desc = String(p.description || '')
  let parts = desc.split(/\s*·\s*/).map(propre).filter(Boolean)

  // Une partie qui contient déjà le nom (« Jus de pomme Alain Milliat » pour
  // « Jus de Pomme », « 20 brochettes de fruits frais de saison » pour
  // « Brochettes de fruits frais ») devient le nom ; une partie déjà couverte
  // par le nom (« 10 madeleines d'exception ») est abandonnée.
  const nn = norm(nom)
  parts = parts.filter((x) => {
    const nx = norm(x)
    if (nx === nn) return false
    if (nx.includes(nn) && nn.length > 3) {
      // Eaux : « 1 bouteille Evian 75cl » reste un détail, le nom garde le volume.
      if (!(p.category === 'eau' && /^\d/.test(x))) nom = x.charAt(0).toUpperCase() + x.slice(1)
      return false
    }
    return !nn.includes(nx)
  })

  let detail = parts.map(minuscules)

  // Cakes, banana bread : « tranché sur plateau » est dans la fiche
  const ing = String(p.ingredients || '')
  if (/tranché/i.test(ing) && !/tranch/i.test(`${nom} ${detail.join(' ')}`)) detail.unshift('tranché sur plateau')

  // Nombre de personnes quand la donnée est sûre et pas déjà écrite
  const pers = personnes(p)
  if (pers && !/personnes/i.test(detail.join(' '))) {
    detail.push(pers.min === pers.max ? `pour ${pers.min} personnes` : `pour ${pers.min} à ${pers.max} personnes`)
  }

  // Rien d'autre à dire : régimes déclarés dans les données
  if (!detail.length && p.category === 'eau') {
    const u = (String(p.qty || '').split(/\s*·\s*/)[0] || '').trim()
    if (u) detail = [u]
  } else if (!detail.length && p.dietary?.length) {
    detail = p.dietary.map((d) => d.toLowerCase())
  }

  // Nombre de pièces quand le détail est une simple liste de parfums
  const q = String(p.qty || '').trim()
  const nbPieces = (q.match(/^(\d+)\s*pièces?$/i) || [])[1]
  if (nbPieces && !/\d/.test(detail.join(' ')) && !new RegExp(`\\b${nbPieces}\\b`).test(nom)) {
    detail.unshift(q)
  }

  return { nom, detail: detail.join(', ') }
}
