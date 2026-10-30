/*
  Stripe, côté serveur uniquement (30/10/2026).

  Arbitrage de Ramy : on paie par carte DIRECTEMENT sur le site, et le débit
  intervient au clic.

  Pourquoi Stripe plutôt que Mollie ou Adyen, après avoir regardé les trois :
  - Mollie facture moins cher la carte bancaire grand public (1,20 % contre
    1,50 %), mais son composant renvoie le client sur une page externe pour
    le 3-D Secure — ce qui défait justement ce qu'on cherche. Et sur les
    cartes d'entreprise, celles des clients de L'Écrin, l'écart est nul :
    2,90 % chez Mollie, 2,80 % chez Stripe.
  - Adyen ne s'ouvre pas en libre-service, ne publie pas son minimum mensuel
    et demande plusieurs semaines de démarches commerciales.
  Stripe garde l'authentification dans la page, s'ouvre en une heure et se
  teste tout de suite.

  Le compte avait été abandonné le 11/10/2026 à cause du rapprochement
  Pennylane (les frais et le virement groupé cassaient le lettrage
  automatique). Ça se règle avec un compte bancaire dédié « Stripe » dans
  Pennylane : les encaissements bruts y entrent un par un, le virement vers
  la banque devient un transfert interne, et les frais une ligne de charge.

  La clé secrète ne quitte jamais le serveur. Le navigateur ne voit que la
  clé publique et le secret du paiement en cours.

  Variables attendues :
    PAIEMENT_CARTE_EN_LIGNE             '1' pour ouvrir la carte, rien sinon
    STRIPE_SECRET_KEY                   sk_live_… ou sk_test_…
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  pk_live_… ou pk_test_…

  LE VERROU EST VOLONTAIRE. Des clés Stripe « live » traînent dans
  l'environnement depuis l'intégration abandonnée du 11/10/2026, sur le poste
  comme sur Vercel. Sans ce drapeau, la carte s'allumerait toute seule au
  premier déploiement du tunnel, sans que personne ne l'ait décidé. Tant que
  PAIEMENT_CARTE_EN_LIGNE vaut autre chose que '1', la carte retombe sur le
  lien de paiement et aucune requête ne part chez Stripe.
*/

import Stripe from 'stripe'

let client = null

export function stripePret() {
  if (process.env.PAIEMENT_CARTE_EN_LIGNE !== '1') return false
  const sk = process.env.STRIPE_SECRET_KEY || ''
  const pk = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
  if (!sk || !pk) return false

  /*
    Deuxième garde-fou : en développement, on refuse une clé de production.
    Sans ça, armer la carte sur le poste reviendrait à viser le vrai compte
    Stripe de L'Écrin — et un essai avec une vraie carte débiterait pour de
    bon. En local, on exige des clés de test.
  */
  if (process.env.NODE_ENV !== 'production' && sk.startsWith('sk_live_')) {
    console.error(
      'Stripe: clé de PRODUCTION détectée en développement. La carte reste fermée. ' +
      'Mettez des clés de test (sk_test_… / pk_test_…) dans .env.local.'
    )
    return false
  }
  return true
}

export const clePublique = () => process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''

function stripe() {
  if (!client) client = new Stripe(process.env.STRIPE_SECRET_KEY)
  return client
}

/* Les montants voyagent en centimes : 251,02 € → 25102. */
export const enCentimes = (euros) => Math.round(Number(euros) * 100)

/*
  Ouvre le paiement. `reference` est le numéro de commande : c'est lui qu'on
  retrouvera dans le tableau de bord Stripe et sur le relevé du client.
*/
export async function creerPaiement({ reference, montantTtc, email, dateLivraison, societe }) {
  return stripe().paymentIntents.create({
    amount: enCentimes(montantTtc),
    currency: 'eur',
    automatic_payment_methods: { enabled: true },
    receipt_email: email || undefined,
    // Ce que le client lira sur son relevé bancaire : sans ça il voit une
    // ligne qu'il ne reconnaît pas et il appelle sa banque.
    statement_descriptor_suffix: `CMD ${reference}`.slice(0, 22),
    description: `Commande en ligne n° ${reference}${societe ? ` — ${societe}` : ''}`,
    metadata: {
      reference,
      livraison: dateLivraison || '',
      societe: (societe || '').slice(0, 120),
    },
  })
}

/*
  Relit le sort du paiement auprès de Stripe. Le serveur ne croit jamais le
  navigateur sur un encaissement : c'est Stripe qui dit si l'argent est pris.
*/
export async function lirePaiement(id) {
  return stripe().paymentIntents.retrieve(id)
}
