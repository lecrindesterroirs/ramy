/*
  Réception d'une commande passée en ligne.

  Deux issues, selon le règlement :

  - sur facture à 30 jours : la commande est enregistrée tout de suite ;
  - par carte : rien n'est enregistré ici. On ouvre le paiement chez Stripe
    et on rend au navigateur un jeton signé qui contient la commande validée.
    La carte se saisit dans la page, puis la route /api/commande/confirmer
    reprend le dossier et l'enregistre — une fois que Stripe, et non le
    navigateur, a confirmé l'encaissement.

  Si Stripe n'est pas configuré (pas de clés dans l'environnement), la carte
  retombe sur l'ancien fonctionnement : la commande est enregistrée et le
  client reçoit un lien de paiement. Le tunnel marche donc en local sans clé.
*/

import { preparerCommande, enregistrerCommande } from '@/lib/commandeServeur'
import { stripePret, clePublique, creerPaiement } from '@/lib/stripe'
import { creerJeton } from '@/lib/jetonCommande'
import { referenceCommande } from '@/lib/referenceCommande'

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ erreur: 'Requête illisible.' }, { status: 400 })
  }

  // Honeypot, comme le formulaire de devis.
  if (body.website) return Response.json({ ok: true, reference: '0000' })

  const reference = referenceCommande()
  const dossier = preparerCommande(body, { reference })
  if (dossier.erreur) {
    return Response.json({ erreur: dossier.erreur, champ: dossier.champ, etape: dossier.etape }, { status: 400 })
  }

  // ── Facture à 30 jours : rien à encaisser ──
  if (dossier.b.reglement === 'facture') {
    return Response.json(await enregistrerCommande(dossier))
  }

  // ── Carte, sans prestataire configuré : on retombe sur le lien ──
  if (!stripePret()) {
    console.warn('commande: Stripe non configuré, la carte retombe sur le lien de paiement')
    const r = await enregistrerCommande(dossier, { mode: 'lien' })
    return Response.json({ ...r, paiement: 'lien' })
  }

  // ── Carte : on ouvre le paiement et on garde la commande en jeton ──
  try {
    const intention = await creerPaiement({
      reference,
      montantTtc: dossier.t.ttc,
      email: dossier.b.email,
      dateLivraison: dossier.b.date,
      societe: dossier.b.societe,
    })
    return Response.json({
      ok: true,
      paiement: 'carte',
      reference,
      ttc: dossier.t.ttc,
      jeton: creerJeton({ body, reference, intention: intention.id }),
      clientSecret: intention.client_secret,
      clePublique: clePublique(),
    })
  } catch (e) {
    console.error('commande: ouverture du paiement Stripe impossible', e)
    return Response.json(
      { erreur: "Le paiement par carte est momentanément indisponible. Choisissez la facture, ou appelez-nous au 07 60 16 96 20." },
      { status: 502 }
    )
  }
}
