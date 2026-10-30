/*
  Composer un petit-déjeuner à partir d'un effectif (30/10/2026).

  Le client dit « nous sommes 25 », le panier se remplit. C'est la recette
  qui tourne déjà dans l'OS (lib/calculsPrix.js, fonction pdj) — celle qui
  sert à monter les devis — portée telle quelle sur le site. Une seule
  source : si Ramy change la recette, les deux suivent.

  Le seul écart est une question d'emballage. La recette compte les brochettes
  de fruits à la pièce, le site les vend par plateau de vingt. On arrondit au
  plateau le PLUS PROCHE, pas au supérieur : pour 25 convives, un plateau de
  20 vaut mieux que deux plateaux de 40 — 49 € de moins et rien de jeté.
*/

import { pdj } from './calculsPrix'
import { produitCommandable } from './catalogueCommande'

/*
  Le libellé de la recette → la référence du site. Les prix concordent déjà
  des deux côtés (48,90 € le plateau de viennoiseries, 19,50 € le thermos…) :
  cette table ne fait que nommer, elle ne recalcule rien.
*/
const CORRESPONDANCES = [
  ['Plateau de 30 mini-viennoiseries pur beurre', 'viennoiseries-melangees'],
  ['Coffret de 50 madeleines', 'madeleines-50'],
  ['Coffret de 20 madeleines', 'madeleines-20'],
  ['Coffret de 10 madeleines', 'madeleines-10'],
  ['Cake maison (5 à 6 parts)', 'cake-marbre'],
  ["Jus d'orange (1 L)", 'jus-orange'],
  ['Jus de pomme (1 L)', 'jus-pomme'],
  ['Thermos de café bio (1 L)', 'thermos-cafe'],
  ['Thermos de thé (1 L)', 'thermos-the'],
]
const PAR_LIBELLE = new Map(CORRESPONDANCES)

/* Les brochettes : de la pièce au plateau de vingt. */
const BROCHETTES_PAR_PLATEAU = 20

export const EFFECTIF_MIN = 5
export const EFFECTIF_MAX = 300

/*
  Renvoie les lignes de panier pour n personnes, prêtes à être ajoutées :
  [{ id, nom, prix, qte, img, famille, qteTexte }]
*/
export function composerPetitDejeuner(n) {
  const effectif = Math.max(EFFECTIF_MIN, Math.min(EFFECTIF_MAX, Math.round(Number(n) || 0)))
  const recette = pdj(effectif)
  const lignes = []

  const pousser = (id, qte) => {
    const p = produitCommandable(id)
    if (!p || !(qte > 0)) return
    lignes.push({ id: p.id, nom: p.nom, prix: p.prix, qte, img: p.img, famille: p.famille, qteTexte: p.qte })
  }

  for (const l of recette.lignes) {
    if (l.label === 'Brochette de fruits frais') {
      pousser('brochettes-fruits', Math.max(1, Math.round(l.qte / BROCHETTES_PAR_PLATEAU)))
      continue
    }
    const id = PAR_LIBELLE.get(l.label)
    if (id) pousser(id, l.qte)
    // Un libellé sans correspondance est ignoré volontairement : mieux vaut
    // un panier incomplet, que le client complète, qu'un produit inventé.
  }

  return { effectif, lignes }
}
