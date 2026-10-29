/*
  Le jeton qui relie « la commande validée » et « le paiement qui vient
  d'aboutir » (30/10/2026).

  Le paiement se fait en deux temps : le serveur valide la commande et ouvre
  le paiement chez Stripe, puis le navigateur paie et revient dire que c'est
  fait.
  Entre les deux, il faut retrouver la commande — sans la stocker nulle part,
  et sans croire le navigateur sur ce qu'elle contient.

  D'où ce jeton : la commande validée, signée. Si un caractère change, la
  signature ne tombe plus juste et le serveur refuse. Le montant est de toute
  façon recalculé depuis le catalogue et comparé à ce que Stripe a encaissé.
  Le jeton porte aussi l'identifiant du paiement : la confirmation interroge
  CE paiement-là, jamais celui que le navigateur lui désigne.
*/

import { createHmac, timingSafeEqual } from 'crypto'

const DUREE_MS = 2 * 60 * 60 * 1000   // deux heures : le temps d'un paiement

function secret() {
  const s = process.env.COMMANDE_SECRET || process.env.STRIPE_SECRET_KEY
  if (!s) throw new Error('COMMANDE_SECRET absent : impossible de signer une commande')
  return s
}

const b64 = (s) => Buffer.from(s, 'utf8').toString('base64url')
const deB64 = (s) => Buffer.from(s, 'base64url').toString('utf8')
const signe = (corps) => createHmac('sha256', secret()).update(corps).digest('base64url')

export function creerJeton(donnees) {
  const corps = b64(JSON.stringify({ ...donnees, exp: Date.now() + DUREE_MS }))
  return `${corps}.${signe(corps)}`
}

/* Renvoie les données, ou null si la signature ou la date ne vont pas. */
export function ouvrirJeton(jeton) {
  const [corps, marque] = String(jeton || '').split('.')
  if (!corps || !marque) return null
  const attendu = signe(corps)
  const a = Buffer.from(marque), b = Buffer.from(attendu)
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null
  try {
    const d = JSON.parse(deB64(corps))
    if (!d.exp || d.exp < Date.now()) return null
    return d
  } catch {
    return null
  }
}
