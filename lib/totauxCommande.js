/*
  L'argent et les blocages de la commande en ligne (29/10/2026).

  Fichier pur, sans React et sans fetch : le navigateur l'utilise pour
  afficher, et la route API l'utilise pour RECALCULER. Le serveur ne doit
  jamais faire confiance au total envoyé par le navigateur.

  TVA : 10 % sur tout, livraison comprise. La restauration à emporter est à
  10 %, les frais de transport suivent le taux du bien transporté, et aucune
  boisson du catalogue en ligne n'est alcoolisée (le pétillant de raisin et le
  blanc de blancs sont sans alcool). Le taux est porté par ligne pour qu'une
  future référence à 5,5 ou 20 % n'oblige pas à tout reprendre.
*/

import { MINIMUM } from './prixEntree'
import { zoneDe } from './zonesLivraison'
import { estLivrable, premiereDateLivrable, estHeureValable, dureeCreneau, DUREE_CRENEAU_MIN } from './reglesCommande'
import { produitCommandable } from './catalogueCommande'

export const TVA_DEFAUT = 10

const arrondi = (x) => Math.round(x * 100) / 100
const prixLigne = (l) => arrondi((Number(l.prix) || 0) * Number(l.qte || 0))

export function totaux(lignes = [], { cp = '' } = {}) {
  const sousTotal = arrondi(lignes.reduce((t, l) => t + prixLigne(l), 0))
  const z = zoneDe(cp)
  const livraison = z.ok === true ? z.frais : 0
  const ht = arrondi(sousTotal + livraison)
  // TVA par taux, pour que la facture colle au montant prélevé.
  const parTaux = new Map()
  const ajoute = (taux, base) => parTaux.set(taux, arrondi((parTaux.get(taux) || 0) + base))
  for (const l of lignes) ajoute(Number(l.tva) || TVA_DEFAUT, prixLigne(l))
  if (livraison) ajoute(TVA_DEFAUT, livraison)
  const tva = arrondi([...parTaux].reduce((t, [taux, base]) => t + base * taux / 100, 0))
  return {
    sousTotal,
    livraison,
    ht,
    tva,
    tauxTva: [...parTaux].map(([taux, base]) => ({ taux, base, montant: arrondi(base * taux / 100) })),
    ttc: arrondi(ht + tva),
    minimum: MINIMUM,
    minimumAtteint: sousTotal >= MINIMUM,
    manqueAuMinimum: arrondi(Math.max(0, MINIMUM - sousTotal)),
    zone: z,
  }
}

/* Un coffret Mado dont les parfums ne sont pas répartis bloque la commande. */
export function parfumsManquants(ligne) {
  const p = produitCommandable(ligne.id)
  if (!p || !p.parfums) return 0
  const pose = (ligne.options?.parfums || []).reduce((n, o) => n + (Number(o.qte) || 0), 0)
  return Math.max(0, p.parfums - pose)
}

/*
  Ce qui empêche de passer à l'étape suivante. Renvoie un tableau de
  { etape, champ, texte } — l'écran affiche le premier de son étape.
*/
export function problemes(lignes = [], b = {}, maintenant = new Date()) {
  const out = []
  /*
    `explicite` distingue « ce champ est vide » de « ce que vous avez saisi ne
    va pas ». Le premier se résume en « il manque X » ; le second doit être lu
    tel quel, sinon on annonce au client qu'il manque une heure qu'il vient de
    choisir.
  */
  const push = (etape, champ, texte, explicite = false) => out.push({ etape, champ, texte, explicite })
  const t = totaux(lignes, b)

  // ── Étape 1, le panier ──
  if (lignes.length === 0) push(1, 'lignes', 'Votre panier est vide.')
  if (lignes.length && !t.minimumAtteint) {
    push(1, 'minimum', `Il manque ${t.manqueAuMinimum.toFixed(2).replace('.', ',')} € pour atteindre le minimum de commande de ${MINIMUM} € HT.`)
  }
  for (const l of lignes) {
    const n = parfumsManquants(l)
    if (n > 0) push(1, 'parfums', `Choisissez les parfums de « ${l.nom} » : ${n} madeleine${n > 1 ? 's' : ''} à répartir.`)
  }
  if (t.zone.ok === null) push(1, 'cp', 'Indiquez le code postal de livraison pour voir le total.')
  if (t.zone.ok === false) push(1, 'cp', `Nous livrons en ligne Paris, 92, 93 et 94. Pour le ${t.zone.dept}, demandez un devis : nous chiffrons la livraison.`)

  // ── Étape 2, la livraison ──
  if (!b.date) push(2, 'date', 'Choisissez la date de livraison.')
  else if (!estLivrable(b.date, lignes, maintenant)) {
    push(2, 'date', `Cette date n'est plus possible. Au plus tôt : ${b.date && premiereDateLivrable(lignes, maintenant)}.`, true)
  }
  if (!b.heure || !b.heureFin) push(2, 'heure', 'Choisissez votre créneau de livraison.')
  else if (!estHeureValable(b.heure) || !estHeureValable(b.heureFin)) {
    push(2, 'heure', 'Ce créneau n\'est pas proposé.', true)
  } else {
    const duree = dureeCreneau(b.heure, b.heureFin)
    if (duree < DUREE_CRENEAU_MIN) {
      push(2, 'heure', `La fin du créneau doit tomber au moins ${DUREE_CRENEAU_MIN} minutes après le début : c'est le créneau que nous tenons.`, true)
    }
  }
  if (!String(b.adresse || '').trim()) push(2, 'adresse', 'Indiquez l\'adresse de livraison.')
  if (!String(b.ville || '').trim()) push(2, 'ville', 'Indiquez la ville.')
  if (!String(b.societe || '').trim()) push(2, 'societe', 'Indiquez le nom de la société.')
  if (!String(b.contactNom || '').trim()) push(2, 'contactNom', 'Indiquez qui nous accueille sur place.')
  if (!/^(\+33|0)[\s.\-]?[1-9]([\s.\-]?\d{2}){4}$/.test(String(b.contactTel || '').trim())) {
    push(2, 'contactTel', 'Indiquez un portable joignable le matin de la livraison.')
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(b.email || '').trim())) {
    push(2, 'email', 'Indiquez votre email, pour la confirmation.')
  }

  // ── Étape 3, le règlement ──
  if (!['carte', 'facture'].includes(b.reglement)) push(3, 'reglement', 'Choisissez le règlement.')

  return out
}

export const problemesDe = (etape, lignes, b, maintenant) =>
  problemes(lignes, b, maintenant).filter(p => p.etape <= etape)

export const peutPasser = (etape, lignes, b, maintenant) =>
  problemes(lignes, b, maintenant).filter(p => p.etape === etape).length === 0 &&
  problemes(lignes, b, maintenant).filter(p => p.etape < etape).length === 0

/*
  Les repères que Ramy donne au téléphone. C'est le seul endroit où le métier
  passe dans l'écran, et c'est ce qui évite l'appel « on n'avait pas assez de
  café ». Les règles viennent du coffre : 1 thermos = 6 à 8 tasses,
  1 litre de jus = 5 à 6 personnes (jamais « 6 à 8 »).
*/
export function conseils(lignes = []) {
  const out = []
  const qte = (pred) => lignes.filter(pred).reduce((n, l) => n + l.qte, 0)
  const thermos = qte(l => l.id.startsWith('thermos-'))
  const jus = qte(l => l.id.startsWith('jus-') || l.id.startsWith('nectar-'))
  if (thermos > 0) {
    out.push({
      titre: `${thermos} thermos ${thermos > 1 ? 'servent' : 'sert'} ${thermos * 6} à ${thermos * 8} tasses.`,
      detail: `Comptez un thermos pour 6 personnes qui boivent du café : pour ${thermos * 6} convives, nous en conseillons ${thermos} à ${thermos + 1}.`,
    })
  }
  if (jus > 0) {
    out.push({
      titre: `${jus} litre${jus > 1 ? 's' : ''} de jus pour ${jus * 5} à ${jus * 6} personnes.`,
      detail: 'Un verre de 20 cl par personne, soit un litre pour cinq à six convives.',
    })
  }
  return out
}
