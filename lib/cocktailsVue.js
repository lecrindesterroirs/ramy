/*
  Préparation des pages Cocktails, CÔTÉ SERVEUR (refonte du 22/10/2026, sur le
  modèle des événements saisonniers : lib/evenementsVue.js).

  Prix, pièces et livraison viennent de lib/calculsPrix.js et lib/prixEntree.js
  par app/creations/cocktails/data.js : rien n'est écrit à la main ici. Les
  titres des guides sont lus dans le Journal (français ou anglais).
*/
import { FORMULES, FAQ_CATALOGUE } from '../app/creations/cocktails/data'
import { enCocktail } from './en/produits/cocktails'
import { LIV } from './calculsPrix'
import { MINIMUM, euroFr, euroEn } from './prixEntree'
import { articles } from './journalData'
import { enArticle } from './en/journal'

export const BASE = 'https://www.lecrin-traiteur.fr'
export const CHEMIN = '/creations/cocktails'
export const EFFECTIFS = [20, 50, 100]

export const euro = (x, en) => (en ? euroEn(x) : euroFr(x))
export const prixHT = (x, en) => (en ? `${euroEn(x)} excl. VAT` : `${euroFr(x)} HT`)
export const totalLivre = (n, prix) => n * prix + LIV

/* Formule dans la langue demandée (textes de la surcouche anglaise, chiffres du français). */
export function formulePour(key, en = false) {
  const f = FORMULES.find(x => x.key === key)
  if (!f) return null
  if (!en) return f
  const t = enCocktail(key)
  return t ? { ...f, ...t, prix: f.prix, prixNum: f.prixNum, pieces: f.pieces, img: f.img, label: f.label } : null
}

export const formules = (en = false) => FORMULES.map(f => formulePour(f.key, en)).filter(Boolean)

/* Tableau « Combien prévoir » d'une formule : [{ n, pieces, total, parPersonne }]. */
export const exemples = (f) => EFFECTIFS.map(n => {
  const total = totalLivre(n, f.prixNum)
  return { n, pieces: n * f.pieces, total, parPersonne: total / n }
})

/* Guides du Journal sur le cocktail : en anglais, seulement ceux qui sont traduits. */
const GUIDES = [
  'combien-pieces-cocktail-par-personne-entreprise',
  'cocktail-dinatoire-entreprise-paris',
  'cocktail-dejeunatoire-entreprise-pieces-par-personne-budget',
  'cocktail-entreprise-50-personnes',
  'cocktail-entreprise-100-personnes',
  'idees-pieces-cocktail-entreprise',
  'cocktail-entreprise-sans-alcool',
  'cocktail-entreprise-halal-paris',
  'cocktail-inauguration-entreprise',
  'traiteur-afterwork-pot-depart-entreprise-paris',
]
export function guidesCocktail(en = false) {
  return GUIDES.map(slug => {
    if (en) {
      const a = enArticle(slug)
      return a && { href: `/en/journal/${slug}`, titre: a.metaTitle || a.titre }
    }
    const a = articles.find(x => x.slug === slug)
    return a && { href: `/journal/${slug}`, titre: a.metaTitle || a.titre }
  }).filter(Boolean)
}

/* Lignes pratiques communes aux pages cocktail. */
export function lignesPratiques(en = false) {
  return en ? [
    ['Ordering', "until 10 am the day before; from 50 guests or across several sites, 48 hours' notice recommended."],
    ['Delivery', `at the time of your reception, Monday to Friday, across Paris and Île-de-France (${prixHT(LIV, true)} in Paris and nearby towns). Platters arrive arranged, ready to put down.`],
    ['Minimum', `${prixHT(MINIMUM, true)} per order.`],
    ['Drinks', 'not included in the menus: Alain Milliat juices, waters and alcohol-free Chardonnay are added to the quote.'],
    ['Dietary needs', 'all savoury pieces are halal and pork-free, alcohol-free; vegetarian, vegan and gluten-free options on request.'],
    ['Invoice', 'company invoice showing VAT, purchase orders accepted.'],
  ] : [
    ['Commande', "jusqu'à 10h la veille ; à partir de 50 personnes ou pour plusieurs sites, 48 h de préavis recommandées."],
    ['Livraison', `à l'heure de votre réception, du lundi au vendredi, à Paris et en Île-de-France (${prixHT(LIV)} à Paris et dans les communes proches). Les plateaux arrivent dressés, prêts à poser.`],
    ['Minimum', `${prixHT(MINIMUM)} de commande.`],
    ['Boissons', 'non comprises dans les formules : jus Alain Milliat, eaux et Chardonnay sans alcool s\'ajoutent au devis.'],
    ['Régimes', 'tout le salé est halal et sans porc, sans alcool ; options végétariennes, vegan et sans gluten sur demande.'],
    ['Facture', 'facture entreprise avec TVA, bon de commande accepté.'],
  ]
}

/* FAQ d'une formule : visible ET balisée (même tableau). */
export function faqFormule(f, en = false) {
  const ex = exemples(f)
  const e20 = ex[0], e50 = ex[1]
  const autres = FORMULES.filter(x => x.key !== f.key)
  if (en) return [
    { q: `How much does the ${f.label} cocktail menu cost?`, a: `${prixHT(f.prixNum, true)} per person for ${f.pieces} savoury and sweet pieces. For 20 guests, ${prixHT(e20.total, true)} delivered; for 50 guests, ${prixHT(e50.total, true)} delivered. Drinks are extra.` },
    { q: 'How many pieces per person?', a: `${f.pieces} pieces per person, ${f.sale.length} savoury and ${f.sucre.length} sweet. The other menus have ${autres.map(x => `${x.pieces} (${x.label})`).join(' and ')}.` },
    { q: 'How late can you order?', a: "Until 10 am the day before, for delivery at the time of your reception. From 50 guests or across several sites, allow 48 hours." },
    { q: 'Is it halal?', a: 'Yes. All the savoury pieces are halal and pork-free, with no alcohol, at no extra cost. We do not claim a halal certification.' },
    { q: 'Are drinks included?', a: 'No. The menu covers the pieces; juices, waters and alcohol-free Chardonnay are added to the quote, with cups.' },
  ]
  return [
    { q: `Combien coûte le cocktail ${f.label} ?`, a: `${prixHT(f.prixNum)} par personne pour ${f.pieces} pièces salées et sucrées. Pour 20 personnes, ${prixHT(e20.total)} livré ; pour 50 personnes, ${prixHT(e50.total)} livré. Les boissons s'ajoutent.` },
    { q: 'Combien de pièces par personne ?', a: `${f.pieces} pièces par personne, dont ${f.sale.length} salées et ${f.sucre.length} sucrées. Les autres formules en comptent ${autres.map(x => `${x.pieces} (${x.label})`).join(' et ')}.` },
    { q: "Jusqu'à quand peut-on commander ?", a: "Jusqu'à 10h la veille, pour une livraison à l'heure de votre réception. À partir de 50 personnes ou pour plusieurs sites, prévoyez 48 h." },
    { q: 'Les pièces sont-elles halal ?', a: "Oui. Tout le salé est halal et sans porc, sans alcool et sans supplément. Aucune certification halal n'est revendiquée." },
    { q: 'Les boissons sont-elles comprises ?', a: "Non. La formule compte les pièces ; jus, eaux et Chardonnay sans alcool s'ajoutent au devis, avec les gobelets." },
  ]
}


/* FAQ de la page Cocktails : français = FAQ_CATALOGUE de data.js ; anglais calculé ici. */
export function faqCatalogue(en = false) {
  if (!en) return FAQ_CATALOGUE.map(q => ({ q: q.name, a: q.answer }))
  const [I, R, C] = formules(true)
  const t = (n, f) => prixHT(n * f.prixNum, true)
  return [
    { q: 'How much does a cocktail menu cost per person?', a: `${I.label} (${I.pieces} pieces) is ${prixHT(I.prixNum, true)} per person, ${R.label} (${R.pieces} pieces) ${prixHT(R.prixNum, true)} and ${C.label} (${C.pieces} pieces) ${prixHT(C.prixNum, true)}. Delivery is on top: ${prixHT(LIV, true)} in Paris and nearby towns, minimum order ${prixHT(MINIMUM, true)}.` },
    { q: 'How many pieces per person in each menu?', a: `${I.label}: ${I.pieces} pieces. ${R.label}: ${R.pieces} pieces. ${C.label}: ${C.pieces} pieces. At L'Écrin Traiteur we plan ${I.pieces} pieces for drinks of an hour and a half, ${R.pieces} to replace a lunch and ${C.pieces} for a standing dinner.` },
    { q: 'Which menu for 20 people, for 50 people?', a: `For 20 people: ${t(20, I)} with ${I.label}, ${t(20, R)} with ${R.label}, ${t(20, C)} with ${C.label}. For 50 people: ${t(50, I)}, ${t(50, R)} or ${t(50, C)}. Delivery and drinks are extra.` },
    { q: 'Can a menu be adapted to dietary needs?', a: 'All the savoury pieces are halal and pork-free, and alcohol-free. Vegetarian, vegan and gluten-free options are set out in the quote, with the number of people concerned.' },
    { q: 'How late can you order?', a: 'Until 10 am the day before for delivery the next day. From 50 guests or across several sites, give us at least 48 hours. The quote is sent within 24 hours.' },
    { q: 'Are drinks included?', a: 'No, the menus cover the savoury and sweet pieces. Alain Milliat juices, waters and alcohol-free Chardonnay are added to the quote, with cups.' },
  ]
}

export { LIV, MINIMUM, FORMULES }
