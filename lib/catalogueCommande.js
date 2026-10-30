/*
  Ce qui est commandable en ligne (29/10/2026).

  Volontairement une LISTE EXPLICITE, pas un filtre sur « price > 0 ».
  « Ce qu'un client peut commander seul » est une décision commerciale, pas une
  conséquence du catalogue : un produit saisonnier, une référence à composer ou
  un plateau sans prix n'ont pas à apparaître parce qu'ils existent. Pour
  ouvrir ou fermer une référence, il suffit de toucher ce tableau.

  Les prix ne sont PAS recopiés : ils sont lus dans lib/productsData.js et
  lib/boissonsData.js, qui restent la source unique.

  La famille sert à la règle de délai (lib/reglesCommande.js) : tout est
  livrable « la veille avant 10h », sauf les plateaux apéritifs, qui demandent
  48 heures comme les cocktails et les buffets.
*/

import { PRODUCTS } from './productsData'
import { BOISSONS } from './boissonsData'

/* id → famille. L'ordre du tableau est l'ordre d'affichage. */
const OUVERTS = [
  // ─── Viennoiseries ───
  ['viennoiseries-duo', 'viennoiserie'],
  ['viennoiseries-melangees', 'viennoiserie'],
  ['chouquettes', 'viennoiserie'],
  ['crepes', 'viennoiserie'],
  ['mini-crepes', 'viennoiserie'],
  // ─── Madeleines Mado, vendues en assortiment ───
  ['madeleines-10', 'patisserie'],
  ['madeleines-20', 'patisserie'],
  ['madeleines-50', 'patisserie'],
  // ─── Pâtisserie ───
  ['cake-marbre', 'patisserie'],
  ['cake-chocolat', 'patisserie'],
  ['cake-citron', 'patisserie'],
  ['cake-pistache', 'patisserie'],
  ['cake-poire', 'patisserie'],
  ['cake-framboise', 'patisserie'],
  ['carrot-cake', 'patisserie'],
  ['banana-bread-sans-gluten', 'patisserie'],
  ['brioche-babka', 'patisserie'],
  ['cookies', 'patisserie'],
  ['macarons', 'patisserie'],
  // ─── Fruits et laitiers ───
  ['brochettes-fruits', 'fruits'],
  ['panier-fruits', 'fruits'],
  ['verrine-salade-fruits', 'fruits'],
  ['compote-pomme', 'fruits'],
  ['yaourt-fermier', 'fruits'],
  ['yaourt-granola', 'fruits'],
  ['panna-cotta', 'fruits'],
  // ─── Salé ───
  ['pains-cereales-tranches', 'sale'],
  ['pain-mais-sans-gluten', 'sale'],
  // ─── Plateaux apéritifs : 48 heures ───
  ['navettes-salees', 'plateaux-aperitifs'],
  ['navettes-salees-40', 'plateaux-aperitifs'],
  ['plateau-clubs-signature', 'plateaux-aperitifs'],
  ['plateau-mini-wraps', 'plateaux-aperitifs'],
]

/* Boissons ouvertes : les références régulières, sans les saisonnières. */
const BOISSONS_OUVERTES = [
  'thermos-cafe', 'thermos-the',
  'jus-orange', 'jus-pomme', 'jus-orange-presse', 'jus-pomme-verger',
  'jus-abricot', 'jus-peche', 'jus-fraise', 'jus-pomme-framboise',
  'nectar-mangue', 'nectar-passion', 'nectar-mangue-passion',
  'infusion-gingembre-1l', 'infusion-passion-1l',
  'evian-75', 'badoit-75', 'evian-33',
]

const LABELS = {
  viennoiserie: 'Viennoiseries',
  patisserie: 'Pâtisseries',
  fruits: 'Fruits & laitiers',
  sale: 'Pains & salé',
  'plateaux-aperitifs': 'Plateaux apéritifs',
  boisson: 'Boissons',
}
export const FAMILLES = ['viennoiserie', 'patisserie', 'fruits', 'sale', 'plateaux-aperitifs', 'boisson']
export const libelleFamille = (f) => LABELS[f] || f

/* Une entrée de catalogue, réduite à ce dont le tunnel a besoin. */
function entree(p, famille, chemin) {
  return {
    id: p.id,
    nom: p.shortName || p.name,
    prix: p.price,
    qte: p.qty || '',
    img: p.img || null,
    famille,
    chemin: `${chemin}/${p.id}`,
    /*
      Les coffrets Mado partent en ASSORTIMENT : le client ne choisit pas ses
      parfums (arbitrage de Ramy du 30/10/2026). Une première version lui
      faisait répartir 20 madeleines sur six parfums dans le panier — six
      réglages à manipuler pour une commande de 49 €.
    */
  }
}

const parId = (arr) => new Map(arr.map(x => [x.id, x]))
const PROD = parId(PRODUCTS)
const BOIS = parId(BOISSONS)

export const CATALOGUE = [
  ...OUVERTS
    .map(([id, famille]) => {
      const p = PROD.get(id)
      return p && p.price > 0 ? entree(p, famille, '/creations/petits-dejeuners-et-pauses') : null
    })
    .filter(Boolean),
  ...BOISSONS_OUVERTES
    .map(id => {
      const b = BOIS.get(id)
      return b && b.price > 0 ? entree(b, 'boisson', '/creations/boissons') : null
    })
    .filter(Boolean),
]

export const CATALOGUE_PAR_ID = new Map(CATALOGUE.map(p => [p.id, p]))
export const produitCommandable = (id) => CATALOGUE_PAR_ID.get(id) || null

/* Regroupé pour l'affichage. */
export function catalogueParFamille() {
  return FAMILLES
    .map(f => ({ famille: f, label: libelleFamille(f), produits: CATALOGUE.filter(p => p.famille === f) }))
    .filter(g => g.produits.length > 0)
}
