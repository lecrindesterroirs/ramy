/*
  Prix d'entrée par prestation, en un seul endroit.

  Raison d'être : le hub /traiteur et sa version anglaise affichent les mêmes
  montants. Les recopier dans la surcouche anglaise, c'était accepter qu'ils
  divergent au premier changement de tarif. Ici on tient les nombres, chaque
  langue n'a plus que son format (8 € HT / €8 excl. VAT).

  Fichier volontairement léger (aucun texte d'article) : il est importable
  depuis une page 'use client'.

  Les prix cocktail et le forfait de livraison ne sont PAS repris ici : ils
  vivent déjà dans lib/calculsPrix.js (FORMULES, LIV), qui reste la source.
*/

export const MINIMUM = 50          // minimum de commande, € HT
export const PDJ_DES = 8           // petit-déjeuner, formule Classique
export const PDJ_COMPLET = [12, 16] // petit-déjeuner complet, fourchette
export const PAUSE_DES = 6         // pause goûter
export const LUNCHBOX_DES = 18.9   // lunch box
export const PLATEAU_DES = 28.9    // plateau repas
export const PLATEAU_MAX = 30.9    // plateau repas, haut de gamme

/* Formats : « 3 272,50 € » en français, « €3,272.50 » en anglais. Les
   décimales ne s'affichent que si le prix en a ; les milliers prennent le
   séparateur de la langue (espace insécable en français, virgule en anglais). */
const dec = (x) => (Math.round(x * 100) % 100 === 0 ? 0 : 2)
const groupe = (x, sep, virgule) => {
  const [e, d] = x.toFixed(dec(x)).split('.')
  const ent = e.replace(/\B(?=(\d{3})+(?!\d))/g, sep)
  return d ? `${ent}${virgule}${d}` : ent
}
export const euroFr = (x) => `${groupe(x, '\u00A0', ',')} €`
export const euroEn = (x) => `€${groupe(x, ',', '.')}`
