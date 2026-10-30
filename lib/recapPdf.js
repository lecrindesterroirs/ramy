/*
  Le récapitulatif PDF d'une commande en ligne, joint aux deux mails de
  confirmation (30/10/2026, demande de Ramy : « un PDF propre avec le récap
  comme les bons de livraison, en plus du détail dans le mail »).

  C'est l'OS qui le fabrique, pas le site : il a déjà le gabarit A4, le logo,
  les polices et les mentions légales du devis et du bon de livraison. Un PDF
  refait ici aurait vite une autre allure que les documents que le client a
  déjà reçus. Le site envoie la commande, l'OS renvoie les octets.

  Rien ne dépend de ce PDF. S'il manque — OS injoignable, Chrome en panne,
  clé absente en développement —, les deux mails partent quand même : le
  détail est déjà écrit dans leur corps, le PDF n'en est que la belle copie.
  C'est la même règle que pour les mails eux-mêmes, qui ne bloquent pas
  l'écriture de la commande dans l'OS.
*/

/*
  Le rendu lance un Chrome : compter en secondes, pas en millisecondes. Au
  froid, la fonction de l'OS télécharge d'abord son Chromium.
*/
const DELAI_MS = 45_000

export async function recapPdf(dossier, paiement = null) {
  const base = (process.env.OS_API_URL || '').replace(/\/$/, '')
  const cle = process.env.OS_API_KEY || ''
  if (!base || !cle) return null

  const { lignes, b, t, creneau, reference, modif, aAppeler } = dossier

  const corps = {
    reference,
    date: b.date,
    creneau,
    livraison: {
      societe: b.societe,
      adresse: b.adresse,
      cp: b.cp,
      ville: b.ville,
      acces: b.acces,
      contactNom: b.contactNom,
      contactTel: b.contactTel,
      email: b.email,
    },
    facturation: {
      ...b.facturation,
      email: b.emailFacturation,
      reference: b.factReference,
    },
    lignes: lignes.map(l => ({ nom: l.nom, qte: l.qte, prix: l.prix, qteTexte: l.qteTexte })),
    totaux: t,
    reglement: b.reglement,
    paiement: paiement
      ? { psp: paiement.psp, reference: paiement.reference, paye_le: paiement.paye_le || new Date().toISOString() }
      : null,
    mot: b.motACompagner,
    modification: modif,
    aAppeler,
    emisLe: new Date().toISOString(),
  }

  const stop = AbortSignal.timeout ? AbortSignal.timeout(DELAI_MS) : undefined
  try {
    const res = await fetch(`${base}/api/site/commande/pdf`, {
      method: 'POST',
      headers: { 'x-api-key': cle, 'content-type': 'application/json' },
      body: JSON.stringify(corps),
      signal: stop,
    })
    if (!res.ok) {
      console.error('recapPdf: l\'OS a refusé', res.status, (await res.text()).slice(0, 200))
      return null
    }
    const octets = Buffer.from(await res.arrayBuffer())
    // Un PDF vide ou tronqué vaut mieux absent qu'illisible en pièce jointe.
    if (octets.length < 1000 || octets.subarray(0, 4).toString() !== '%PDF') {
      console.error('recapPdf: réponse qui n\'est pas un PDF', octets.length)
      return null
    }
    return { filename: `commande-${reference}.pdf`, content: octets }
  } catch (e) {
    console.error('recapPdf: indisponible, les mails partent sans pièce jointe', e?.message || e)
    return null
  }
}
