/*
  Prix des pages « Événements saisonniers », calculés, jamais écrits à la main.

  Les nombres viennent de lib/prixEntree.js (petit-déjeuner, pause, lunch box,
  plateau repas, minimum) et de lib/calculsPrix.js (formules cocktail,
  livraison). Un changement de tarif là-bas se répercute ici, en français
  comme en anglais.

  Un exemple chiffré = n personnes × prix par personne + livraison, comme
  dans les textes du Journal (« 149 € HT livraison comprise pour 20 personnes »).
  Les boissons du cocktail ne sont pas comptées : la ligne le dit.

  Fichier léger, sans texte d'article : importable partout.
*/
import { PDJ_DES, PAUSE_DES, LUNCHBOX_DES, PLATEAU_DES, MINIMUM, euroFr, euroEn } from './prixEntree'
import { FORMULES, LIV } from './calculsPrix'

export { LIV, MINIMUM }

export const PRESTATIONS = {
  pdj: {
    prix: PDJ_DES,
    fr: 'Petit-déjeuner Classique', en: 'Classic breakfast',
    compris: { fr: 'viennoiseries pur beurre, fruits frais, café et jus', en: 'butter pastries, fresh fruit, coffee and juice' },
    devis: 'Petit-déjeuner',
  },
  pause: {
    prix: PAUSE_DES,
    fr: 'Pause gourmande', en: 'Afternoon break',
    compris: { fr: 'une pâtisserie et une boisson par personne', en: 'a pastry and a drink per person' },
    devis: 'Goûter',
  },
  lunchbox: {
    prix: LUNCHBOX_DES,
    fr: 'Lunch box', en: 'Lunch box',
    compris: { fr: 'sandwich, entrée et dessert par personne', en: 'sandwich, starter and dessert per person' },
    devis: 'Plateaux repas',
  },
  plateau: {
    prix: PLATEAU_DES,
    fr: 'Plateaux repas', en: 'Lunch trays',
    compris: { fr: 'entrée, plat, dessert et pain', en: 'starter, main, dessert and bread' },
    devis: 'Plateaux repas',
  },
  cocktail8: {
    prix: FORMULES.invitation.prix,
    fr: `Cocktail ${FORMULES.invitation.nom}`, en: `${FORMULES.invitation.nom} cocktail menu`,
    compris: { fr: `${FORMULES.invitation.pieces} pièces salées et sucrées par personne, boissons en plus`, en: `${FORMULES.invitation.pieces} savoury and sweet canapés per person, drinks extra` },
    devis: 'Cocktail / Buffet',
  },
  cocktail12: {
    prix: FORMULES.reception.prix,
    fr: `Cocktail ${FORMULES.reception.nom}`, en: `${FORMULES.reception.nom} cocktail menu`,
    compris: { fr: `${FORMULES.reception.pieces} pièces salées et sucrées par personne, boissons en plus`, en: `${FORMULES.reception.pieces} savoury and sweet canapés per person, drinks extra` },
    devis: 'Cocktail / Buffet',
  },
  cocktail16: {
    prix: FORMULES.celebration.prix,
    fr: `Cocktail ${FORMULES.celebration.nom}`, en: `${FORMULES.celebration.nom} cocktail menu`,
    compris: { fr: `${FORMULES.celebration.pieces} pièces salées et sucrées par personne, boissons en plus`, en: `${FORMULES.celebration.pieces} savoury and sweet canapés per person, drinks extra` },
    devis: 'Cocktail / Buffet',
  },
}

/* « 8 € HT » / « €8 excl. VAT » */
export const prixHT = (x, lang = 'fr') => (lang === 'en' ? `${euroEn(x)} excl. VAT` : `${euroFr(x)} HT`)
export const euro = (x, lang = 'fr') => (lang === 'en' ? euroEn(x) : euroFr(x))

/* Total livré pour n personnes à un prix par personne. */
export const totalLivre = (n, prix) => n * prix + LIV

/* Prix « dès » d'un événement : le plus bas de ses prestations. */
export const prixDes = (prestations = []) => Math.min(...prestations.map(k => PRESTATIONS[k].prix))

/* Lignes du tableau « Combien prévoir » : [{ libelle, compris, total, parPersonne }]. */
export function exemplesEvenement(exemples = [], lang = 'fr') {
  const en = lang === 'en'
  return exemples.map(({ p, n }) => {
    const pr = PRESTATIONS[p]
    const total = totalLivre(n, pr.prix)
    return {
      libelle: en ? `${pr.en} for ${n} people` : `${pr.fr} pour ${n} personnes`,
      compris: `${pr.compris[en ? 'en' : 'fr']}, ${en ? 'at' : 'à'} ${prixHT(pr.prix, lang)} ${en ? 'per person' : 'par personne'}`,
      total,
      parPersonne: total / n,
    }
  })
}
