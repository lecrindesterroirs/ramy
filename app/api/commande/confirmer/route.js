/*
  Confirmation d'une commande payée par carte (30/10/2026).

  Le navigateur revient dire « c'est payé ». On ne le croit pas : on rouvre
  le jeton signé pour retrouver la commande telle qu'elle a été validée, on
  demande à Stripe le sort du paiement, et on ne l'enregistre que s'il
  répond « succeeded ».

  Si le paiement est passé mais que l'enregistrement échoue, l'erreur est
  écrite dans le journal avec le numéro de commande : l'argent est encaissé,
  la commande se retrouve dans le tableau de bord Stripe sous cette
  référence.
*/

import { ouvrirJeton } from '@/lib/jetonCommande'
import { preparerCommande, enregistrerCommande } from '@/lib/commandeServeur'
import { lirePaiement, enCentimes } from '@/lib/stripe'

export async function POST(request) {
  let corps
  try {
    corps = await request.json()
  } catch {
    return Response.json({ erreur: 'Requête illisible.' }, { status: 400 })
  }

  const jeton = ouvrirJeton(corps.jeton)
  if (!jeton) {
    return Response.json({ erreur: 'Session de paiement expirée. Reprenez votre commande.' }, { status: 400 })
  }

  const dossier = preparerCommande(jeton.body, { reference: jeton.reference })
  if (dossier.erreur) {
    // La commande était valable à l'ouverture de la session : si elle ne
    // l'est plus (l'heure limite est passée pendant le paiement), il faut le
    // dire clairement, l'argent étant déjà pris.
    console.error('commande/confirmer: commande devenue invalide après paiement', jeton.reference, dossier.erreur)
    return Response.json({
      erreur: `Votre paiement est passé, mais la commande n'est plus réalisable : ${dossier.erreur} Appelez-nous au 07 60 16 96 20, nous régularisons.`,
      reference: jeton.reference,
    }, { status: 409 })
  }

  /*
    L'identifiant du paiement vient du jeton signé, pas du corps de la
    requête : personne ne peut donc faire valider sa commande avec le
    paiement de quelqu'un d'autre.
  */
  let paiement
  try {
    paiement = await lirePaiement(jeton.intention)
  } catch (e) {
    console.error('commande/confirmer: Stripe injoignable', jeton.reference, e)
    return Response.json({ erreur: 'Nous ne parvenons pas à vérifier le paiement. Appelez-nous au 07 60 16 96 20.' }, { status: 502 })
  }

  if (paiement?.status !== 'succeeded' && paiement?.status !== 'processing') {
    return Response.json({ erreur: 'Le paiement n\'a pas abouti.', statut: paiement?.status || 'inconnu' }, { status: 402 })
  }

  // Le montant encaissé doit être celui que le serveur vient de recalculer.
  const attendu = enCentimes(dossier.t.ttc)
  if (paiement?.amount != null && paiement.amount !== attendu) {
    console.error('commande/confirmer: montant encaissé différent du montant calculé',
      jeton.reference, paiement.amount, attendu)
    return Response.json({
      erreur: 'Le montant payé ne correspond pas à la commande. Appelez-nous au 07 60 16 96 20.',
      reference: jeton.reference,
    }, { status: 409 })
  }

  try {
    const r = await enregistrerCommande(dossier, {
      mode: 'carte',
      psp: 'Stripe',
      reference: paiement.id,
      statut: paiement.status,
      montant_ttc: dossier.t.ttc,
      paye_le: new Date().toISOString(),
    })
    return Response.json(r)
  } catch (e) {
    console.error('commande/confirmer: PAIEMENT ENCAISSÉ MAIS COMMANDE NON ENREGISTRÉE', jeton.reference, e)
    return Response.json({
      erreur: 'Votre paiement est bien passé. Nous confirmons votre commande par email dans la journée.',
      reference: jeton.reference,
      paye: true,
    }, { status: 500 })
  }
}
