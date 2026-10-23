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
export const PDJ_LEGER = 6.5      // viennoiseries et café, prix d'appel pour 30 personnes hors livraison (2 mini-viennoiseries à 48,90 € les 30 + 1 thermos à 19,50 € pour 6, arrondi ; règle de Ramy du 21/10/2026)
export const PDJ_COMPLET = [12, 16] // petit-déjeuner complet, fourchette
export const PAUSE_DES = 6         // pause goûter
export const LUNCHBOX_DES = 18.9   // lunch box
export const PLATEAU_DES = 28.9    // plateau repas
export const PLATEAU_MAX = 30.9    // plateau repas, haut de gamme
export const RECUP = 19            // récupération du matériel, en plus de la livraison (hors Paris, 92 et 94)
export const LIV_RECUP_PROCHE = 39 // livraison + reprise du matériel en une ligne, Paris, 92 et 94 (règle de Ramy du 19/10/2026)
export const ANIMATION_DES = 600   // plancher d'une animation culinaire (mise en place + portions), règle de Ramy du 12/10/2026

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
