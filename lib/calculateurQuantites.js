/*
  Calculateur de quantités (/calculateur-quantites, /en/calculateur-quantites et leur version /embed).
  Créé le 25/10/2026.

  Module léger, importable depuis un composant 'use client' : il n'importe que lib/calculsPrix.js
  et lib/prixEntree.js (aucun texte d'article, ni journalData, ni lib/i18n).

  Les ratios sont ceux des guides du Journal, pour que le calculateur et les articles disent la même chose :
    - petit-déjeuner : pdj(n) de lib/calculsPrix.js (2 mini-viennoiseries par personne, 3 jusqu'à 10 ;
      1 mignardise ; brochette de fruits au-delà de 15 ; 1 L de jus pour 5 ; 1 thermos d'1 L pour 6,
      4 café pour 1 thé), voir « combien prévoir par personne » (lib/journalGeoGuides.js) ;
    - pause : 1,5 à 2 pièces sucrées par personne, 1 boisson ;
    - plateaux repas : 1 par personne présente, + 10 % si la liste n'est pas nominative,
      2 plateaux au poulet pour 1 végétarien sans information sur les régimes ;
    - cocktail : 8 pièces pour 1 h 30 à 2 h, 12 pour 2 h à 2 h 30 ou à la place du déjeuner, 16 pour
      2 h 30 à 3 h ou à la place du dîner, 18 au-delà de 3 h (lib/journalCocktailFin.js) ; sucré 2 / 3 / 4 ;
      boissons de boissons(n) ; 1 point de buffet pour 25 à 30 invités ; 1 maître d'hôtel pour 20 à 40 invités.

  Prix : seulement ce qui existe dans lib/calculsPrix.js (LIV, FORMULES, cocktail, boissons) et le
  Classique du petit-déjeuner (PDJ_DES, lib/prixEntree.js). Petit-déjeuner complet, pause et plateaux :
  aucun prix ici. Jamais de total pour le petit-déjeuner complet.
*/
import { LIV, pdj, FORMULES, cocktail } from './calculsPrix'
import { PDJ_DES, MINIMUM, euroFr, euroEn } from './prixEntree'

export const TYPES = ['petit-dejeuner', 'pause', 'cocktail', 'plateaux']

export const DUREES = {
  court: { pieces: 8, sucre: 2, formule: 'invitation', supplement: 0 },
  moyen: { pieces: 12, sucre: 3, formule: 'reception', supplement: 0 },
  long: { pieces: 16, sucre: 4, formule: 'celebration', supplement: 0 },
  'tres-long': { pieces: 18, sucre: 4, formule: 'celebration', supplement: 2 },
}

export const N_MIN = 1
export const N_MAX = 500
export const borner = (n) => {
  const v = Math.round(Number(n))
  if (!Number.isFinite(v)) return 20
  return Math.min(N_MAX, Math.max(N_MIN, v))
}

const fr = (x) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
const en = (x) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const r2 = (x) => Math.round(x * 100) / 100

/*
  Retourne { lignes: [{ fr, en }], budget: null | { lignes: [{ fr, en, montant }], total, note }, notes: [{ fr, en }] }
  Les libellés portent déjà la quantité ; les montants sont des nombres (format laissé à la page).
*/
export function calculer({ type = 'petit-dejeuner', n = 20, duree = 'court', nominative = true } = {}) {
  n = borner(n)
  const s = (k) => (k > 1 ? 's' : '')

  if (type === 'petit-dejeuner') {
    const p = pdj(n)
    const madeleines = Math.max(0, n - p.cakes * 5)
    const lignes = [
      { fr: `${fr(p.vienn)} mini-viennoiseries pur beurre (${n <= 10 ? 3 : 2} par personne), soit ${p.plateaux} plateau${p.plateaux > 1 ? 'x' : ''} de 30`, en: `${en(p.vienn)} mini pastries (${n <= 10 ? 3 : 2} per person), i.e. ${p.plateaux} tray${s(p.plateaux)} of 30` },
      { fr: `${fr(madeleines)} madeleine${s(madeleines)}${p.cakes ? ` et ${p.cakes} cake${s(p.cakes)} de 5 à 6 parts` : ''} : 1 mignardise par personne (petit-déjeuner complet)`, en: `${en(madeleines)} madeleine${s(madeleines)}${p.cakes ? ` and ${p.cakes} loaf cake${s(p.cakes)} (5 to 6 slices)` : ''}: 1 small sweet per person (full breakfast)` },
      ...(p.brochettes ? [{ fr: `${fr(p.brochettes)} brochettes de fruits frais (1 par personne au-delà de 15)`, en: `${en(p.brochettes)} fresh fruit skewers (1 per person above 15 people)` }] : []),
      { fr: `${p.litres} L de jus d'orange et de pomme (1 verre de 20 cl par personne)`, en: `${p.litres} L of orange and apple juice (one 20 cl glass per person)` },
      { fr: `${p.thermos} thermos d'1 L : ${p.the ? `${p.cafe} de café, ${p.the} de thé` : 'café ou thé'} (1 thermos pour 6)`, en: `${p.thermos} one-litre flask${s(p.thermos)}: ${p.the ? `${p.cafe} coffee, ${p.the} tea` : 'coffee or tea'} (1 flask per 6 people)` },
    ]
    const produits = r2(n * PDJ_DES)
    const facture = Math.max(produits, MINIMUM)
    return {
      n,
      lignes,
      budget: {
        lignes: [
          { fr: `Petit-déjeuner Classique, à partir de ${n} × ${euroFr(PDJ_DES)}`, en: `Classique breakfast, from ${n} × ${euroEn(PDJ_DES)}`, montant: produits },
          ...(produits < MINIMUM ? [{ fr: `Complément au minimum de commande (${euroFr(MINIMUM)} HT)`, en: `Top-up to the minimum order (${euroEn(MINIMUM)} excl. VAT)`, montant: r2(MINIMUM - produits) }] : []),
          { fr: 'Livraison à Paris et dans les communes proches', en: 'Delivery in Paris and nearby towns', montant: LIV },
        ],
        total: r2(facture + LIV),
        note: { fr: "Formule Classique (viennoiseries, jus, café, fruits). Le petit-déjeuner complet se chiffre sur devis.", en: 'Classique package (pastries, juice, coffee, fruit). The full breakfast is priced on quote.' },
      },
      notes: [],
    }
  }

  if (type === 'pause') {
    const p = pdj(n)
    const min = Math.ceil(n * 1.5)
    const max = n * 2
    const jus = Math.ceil(n / 5)
    return {
      n,
      lignes: [
        { fr: `${fr(min)} à ${fr(max)} pièces sucrées (1,5 à 2 par personne pour 20 à 30 minutes)`, en: `${en(min)} to ${en(max)} sweet bites (1.5 to 2 per person for 20 to 30 minutes)` },
        { fr: `${p.thermos} thermos d'1 L de café ou de thé (1 pour 6)`, en: `${p.thermos} one-litre flask${s(p.thermos)} of coffee or tea (1 per 6 people)` },
        { fr: `${jus} L de jus (1 L pour 5)`, en: `${jus} L of juice (1 L per 5 people)` },
      ],
      budget: null,
      notes: [{ fr: 'Prix de la pause sur la page tarifs ou au devis.', en: 'Break prices are on the prices page or in the quote.' }],
    }
  }

  if (type === 'plateaux') {
    const total = nominative ? n : Math.ceil(n * 1.1)
    const vege = Math.ceil(total / 3)
    const poulet = total - vege
    return {
      n,
      lignes: [
        { fr: `${fr(total)} plateaux repas${nominative ? ' (1 par personne présente)' : ' (effectif + 10 %, liste non nominative)'}`, en: `${en(total)} lunch trays${nominative ? ' (1 per person present)' : ' (headcount + 10%, list not confirmed by name)'}` },
        { fr: `Sans information sur les régimes : ${fr(poulet)} au poulet, ${fr(vege)} végétarien${s(vege)}`, en: `Without dietary information: ${en(poulet)} chicken, ${en(vege)} vegetarian` },
        { fr: 'Chaque plateau : entrée, plat, dessert, pain, couverts et serviette', en: 'Each tray: starter, main, dessert, bread, cutlery and napkin' },
      ],
      budget: null,
      notes: [{ fr: 'Prix des plateaux sur la page plateaux repas ou au devis.', en: 'Tray prices are on the lunch trays page or in the quote.' }],
    }
  }

  // cocktail
  const d = DUREES[duree] || DUREES.court
  const f = FORMULES[d.formule]
  const c = cocktail(n, f)
  const pieces = n * d.pieces
  const sucre = n * d.sucre
  const points = Math.max(1, Math.ceil(n / 30))
  const lignes = [
    { fr: `${fr(pieces)} pièces cocktail (${d.pieces} par personne) : ${fr(pieces - sucre)} salées, ${fr(sucre)} sucrées`, en: `${en(pieces)} canapés (${d.pieces} per person): ${en(pieces - sucre)} savoury, ${en(sucre)} sweet` },
    { fr: `${c.b.jus} L de jus (1 L pour 4) et ${c.b.eau} bouteille${s(c.b.eau)} d'eau de 75 cl (1 pour 5)`, en: `${c.b.jus} L of juice (1 L per 4) and ${c.b.eau} bottle${s(c.b.eau)} of water, 75 cl (1 per 5)` },
    { fr: `En option, ${c.b.chard} bouteille${s(c.b.chard)} de Chardonnay 0 % pour trinquer (6 flûtes par bouteille)`, en: `Optional: ${c.b.chard} bottle${s(c.b.chard)} of 0% Chardonnay for a toast (6 flutes per bottle)` },
    { fr: `${points} point${s(points)} de buffet (1 pour 25 à 30 invités)`, en: `${points} buffet point${s(points)} (1 per 25 to 30 guests)` },
    ...(n >= 40 ? [{ fr: `${Math.ceil(n / 40)} à ${Math.ceil(n / 20)} maîtres d'hôtel conseillés (1 pour 20 à 40 invités debout), sur devis`, en: `${Math.ceil(n / 40)} to ${Math.ceil(n / 20)} waiters advised (1 per 20 to 40 standing guests), on quote` }] : []),
  ]
  return {
    n,
    lignes,
    budget: {
      lignes: [
        { fr: `${f.nom}, ${f.pieces} pièces : ${n} × ${euroFr(f.prix)}`, en: `${f.nom}, ${f.pieces} canapés: ${n} × ${euroEn(f.prix)}`, montant: r2(c.pieces) },
        { fr: `Jus et eau`, en: 'Juice and water', montant: r2(c.b.coutJus + c.b.coutEau) },
        { fr: 'Livraison à Paris et dans les communes proches', en: 'Delivery in Paris and nearby towns', montant: LIV },
      ],
      total: r2(c.sans),
      option: { fr: 'Avec le Chardonnay 0 %', en: 'With the 0% Chardonnay', montant: r2(c.avec) },
      note: d.supplement
        ? { fr: `Au-delà de 3 h, comptez ${d.supplement} pièces salées de plus par personne, chiffrées sur devis (non comprises ici).`, en: `Beyond 3 hours, allow ${d.supplement} more savoury canapés per person, priced on quote (not included here).` }
        : { fr: 'Pièces salées halal et sans porc, sans alcool.', en: 'Savoury canapés are halal and pork-free, with no alcohol.' },
    },
    notes: [],
  }
}
