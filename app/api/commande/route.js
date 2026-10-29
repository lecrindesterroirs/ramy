/*
  Réception d'une commande passée en ligne (29/10/2026).

  Trois principes :

  1. Le serveur ne croit RIEN de ce que le navigateur envoie sur l'argent. Il
     reconstruit chaque ligne depuis le catalogue (nom, prix), recalcule les
     totaux et revérifie les règles de délai avec sa propre horloge. Le
     navigateur n'envoie que des identifiants et des quantités.
  2. La commande est écrite dans L'OS AVANT tout envoi d'email : si le mail
     échoue, la commande existe quand même. C'était la leçon du bug du 24/07.
  3. Rien n'est encaissé ici. Voir lib/paiement.js : le débit doit intervenir
     le jour de la livraison, ce qu'aucun lien de paiement ne fait tout seul.
*/

import { Resend } from 'resend'
import { logDemandeToOS } from '@/lib/os-demande'
import { produitCommandable } from '@/lib/catalogueCommande'
import { totaux, problemes, parfumsManquants } from '@/lib/totauxCommande'
import { libelleCreneau, largeurDe, regimeDuPanier, limiteModification } from '@/lib/reglesCommande'
import { referenceCommande } from '@/lib/referenceCommande'
import { PARFUMS } from '@/lib/catalogueCommande'

/* Au-delà de ce montant, une première commande se confirme au téléphone. */
export const SEUIL_APPEL = 1000

const esc = (s = '') => String(s).replace(/[&<>"']/g, c => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
))
const eur = (x) => `${Number(x).toFixed(2).replace('.', ',').replace(/,00$/, '')} €`
const texte = (v, max = 200) => String(v == null ? '' : v).replace(/[\r\n]+/g, ' ').trim().slice(0, max)
const NOMS_PARFUMS = new Map(PARFUMS.map(p => [p.id, p.label]))

/* Reconstruit les lignes depuis le catalogue. Les prix du client sont ignorés. */
function reconstruire(brutes) {
  const lignes = []
  for (const l of Array.isArray(brutes) ? brutes.slice(0, 60) : []) {
    const p = produitCommandable(String(l?.id || ''))
    const qte = Math.floor(Number(l?.qte))
    if (!p || !(qte > 0) || qte > 200) continue
    const ligne = { id: p.id, nom: p.nom, prix: p.prix, qte, famille: p.famille, qteTexte: p.qte, img: p.img }
    if (p.parfums) {
      const demandes = Array.isArray(l?.options?.parfums) ? l.options.parfums : []
      const parfums = demandes
        .filter(o => NOMS_PARFUMS.has(o?.id) && Number(o?.qte) > 0)
        .map(o => ({ id: o.id, qte: Math.floor(Number(o.qte)) }))
      ligne.options = { parfums }
    }
    lignes.push(ligne)
  }
  return lignes
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ erreur: 'Requête illisible.' }, { status: 400 })
  }

  // Honeypot, comme le formulaire de devis.
  if (body.website) return Response.json({ ok: true, reference: '0000' })

  const lignes = reconstruire(body.lignes)
  const b = {
    cp: texte(body.cp, 5),
    date: texte(body.date, 10),
    heure: texte(body.heure, 5),
    largeur: ['souple', 'standard', 'fixe'].includes(body.largeur) ? body.largeur : 'standard',
    societe: texte(body.societe, 120),
    adresse: texte(body.adresse, 200),
    ville: texte(body.ville, 80),
    acces: texte(body.acces, 300),
    contactNom: texte(body.contactNom, 80),
    contactTel: texte(body.contactTel, 30),
    email: texte(body.email, 120).toLowerCase(),
    emailFacturation: texte(body.emailFacturation, 120).toLowerCase(),
    reglement: body.reglement === 'facture' ? 'facture' : 'carte',
    motACompagner: texte(body.motACompagner, 500),
  }

  // Revérification complète, avec l'horloge du serveur.
  const ennuis = problemes(lignes, b, new Date())
  if (ennuis.length) {
    return Response.json({ erreur: ennuis[0].texte, champ: ennuis[0].champ, etape: ennuis[0].etape }, { status: 400 })
  }
  for (const l of lignes) {
    if (parfumsManquants(l) > 0) {
      return Response.json({ erreur: `Parfums incomplets pour « ${l.nom} ».`, champ: 'parfums', etape: 1 }, { status: 400 })
    }
  }

  const t = totaux(lignes, b)
  const creneau = libelleCreneau(b.heure, b.largeur)
  const reference = referenceCommande(b.date)
  const modif = limiteModification(b.date)

  /*
    Le seul garde-fou automatique : une première commande au-dessus de
    1 000 € HT se confirme au téléphone, même réglée par carte. Sur 84 devis
    acceptés, la médiane est à 372 € et 8 % dépassent 1 000 € : le garde-fou
    touche une commande sur douze, celles où une erreur coûte cher.
    « connu » vient du navigateur : il n'est donc qu'indicatif ici, et c'est
    volontaire — il ne sert qu'à choisir le texte, jamais à ouvrir un crédit.
  */
  const aAppeler = t.ht > SEUIL_APPEL && body.connu !== true

  const recap = lignes.map(l => {
    const parfums = l.options?.parfums?.length
      ? ` (${l.options.parfums.map(o => `${o.qte} ${NOMS_PARFUMS.get(o.id)}`).join(', ')})`
      : ''
    return `${l.qte} × ${l.nom}${parfums} — ${eur(l.prix * l.qte)}`
  })

  const message = [
    `COMMANDE EN LIGNE N° ${reference}`,
    `Livraison ${b.date} · ${creneau}${b.largeur === 'fixe' ? ' (heure fixe, +15 € HT)' : ''}`,
    `${b.societe} — ${b.adresse}, ${b.cp} ${b.ville}`,
    b.acces ? `Accès : ${b.acces}` : null,
    `Sur place : ${b.contactNom} · ${b.contactTel}`,
    '',
    ...recap,
    `Livraison — ${eur(t.livraison)}`,
    b.largeur === 'fixe' ? `Heure fixe — ${eur(t.supplement)}` : null,
    `TOTAL ${eur(t.ht)} HT · ${eur(t.ttc)} TTC`,
    '',
    `Règlement : ${b.reglement === 'facture' ? 'sur facture à 30 jours' : 'par carte, débit le jour de la livraison'}`,
    `Délai appliqué : ${regimeDuPanier(lignes) === 'preavis' ? '48 heures' : 'la veille avant 10h'}`,
    aAppeler ? `À CONFIRMER AU TÉLÉPHONE (première commande au-dessus de ${SEUIL_APPEL} € HT)` : 'Acceptée automatiquement',
    b.motACompagner ? `\nMot du client : ${b.motACompagner}` : null,
  ].filter(Boolean).join('\n')

  // ── 1. L'OS d'abord : rien ne doit se perdre ──
  await logDemandeToOS({
    source: 'commande',
    nom: b.contactNom,
    societe: b.societe,
    email: b.email,
    telephone: b.contactTel,
    prestation: `Commande en ligne · ${lignes.length} référence${lignes.length > 1 ? 's' : ''}`,
    date_evenement: b.date,
    nb_personnes: null,
    ville: b.ville,
    budget: `${eur(t.ht)} HT`,
    message,
    raw: {
      reference, lignes, livraison: b, totaux: t, creneau,
      regime: regimeDuPanier(lignes),
      largeur: largeurDe(b.largeur).id,
      a_appeler: aAppeler,
      accepte_auto: !aAppeler,
      limite_modification: modif,
      recu_le: new Date().toISOString(),
    },
  })

  // ── 2. Les emails, best-effort ──
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const tableau = recap.map(l => `<tr><td style="padding:6px 0;border-bottom:1px solid #E8DFD0;font-family:Georgia,serif;font-size:14px;">${esc(l)}</td></tr>`).join('')

    await resend.emails.send({
      from: "L'Écrin Traiteur <commercial@lecrin-traiteur.fr>",
      to: ['commercial@lecrin-traiteur.fr'],
      replyTo: b.email,
      subject: `${aAppeler ? 'À VALIDER · ' : ''}Commande en ligne n° ${reference} · ${b.societe} · ${b.date}`,
      html: `<div style="font-family:Georgia,serif;max-width:620px;margin:0 auto;padding:32px;background:#FDFBF7;">
        <h2 style="font-weight:400;color:#1A1A1A;border-bottom:1px solid #E8DFD0;padding-bottom:16px;">Commande en ligne n° ${esc(reference)}</h2>
        <pre style="font-family:Georgia,serif;font-size:14px;white-space:pre-wrap;color:#1A1A1A;">${esc(message)}</pre>
      </div>`,
    })

    await resend.emails.send({
      from: "L'Écrin Traiteur <commercial@lecrin-traiteur.fr>",
      to: [b.email],
      subject: `Votre commande n° ${reference} — livraison le ${b.date}`,
      html: `<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;background:#FDFBF7;">
        <h2 style="font-weight:400;color:#1A1A1A;">Merci, c'est noté.</h2>
        <p style="font-size:15px;color:#1A1A1A;">Votre commande <strong>n° ${esc(reference)}</strong> est enregistrée pour le <strong>${esc(b.date)}</strong>, créneau <strong>${esc(creneau)}</strong>.</p>
        ${aAppeler ? `<p style="font-size:15px;color:#1A1A1A;">Notre équipe vous appelle pour valider cette première commande.</p>` : ''}
        <table style="width:100%;border-collapse:collapse;margin:20px 0;">${tableau}</table>
        <p style="font-size:15px;color:#1A1A1A;">Total : <strong>${eur(t.ht)} HT</strong> · ${eur(t.ttc)} TTC, livraison comprise.</p>
        <p style="font-size:14px;color:#605A4F;">Modifiable jusqu'au ${esc(modif?.date || '')} à ${modif?.heure || 10}h : écrivez-nous ou appelez le 07 60 16 96 20.</p>
      </div>`,
    })
  } catch (e) {
    console.error('commande: envoi des emails en échec, la commande est enregistrée', e)
  }

  return Response.json({
    ok: true,
    reference,
    aAppeler,
    creneau,
    ht: t.ht,
    ttc: t.ttc,
    limiteModification: modif,
  })
}
