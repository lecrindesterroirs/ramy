/*
  Le travail de fond d'une commande en ligne, partagé par les deux routes :
  celle qui la reçoit et celle qui la confirme après paiement (30/10/2026).

  Trois principes :

  1. Le serveur ne croit RIEN de ce que le navigateur envoie sur l'argent. Il
     reconstruit chaque ligne depuis le catalogue (nom, prix), recalcule les
     totaux et revérifie les règles de délai avec sa propre horloge. Le
     navigateur n'envoie que des identifiants et des quantités.
  2. La commande est écrite dans l'OS AVANT tout envoi d'email : si le mail
     échoue, la commande existe quand même. C'était la leçon du bug du 24/07.
  3. Quand le règlement est par carte, rien n'est écrit tant que Stripe n'a
     pas confirmé l'encaissement — et c'est Stripe qu'on interroge, jamais
     le navigateur.
*/

import { Resend } from 'resend'
import { logDemandeToOS } from '@/lib/os-demande'
import { produitCommandable } from '@/lib/catalogueCommande'
import { totaux, problemes } from '@/lib/totauxCommande'
import { libelleCreneau, regimeDuPanier, limiteModification } from '@/lib/reglesCommande'
import { referenceCommande } from '@/lib/referenceCommande'

/* Au-delà de ce montant, une première commande se confirme au téléphone. */
export const SEUIL_APPEL = 1000

const esc = (s = '') => String(s).replace(/[&<>"']/g, c => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
))
export const eur = (x) => `${Number(x).toFixed(2).replace('.', ',').replace(/,00$/, '')} €`
const texte = (v, max = 200) => String(v == null ? '' : v).replace(/[\r\n]+/g, ' ').trim().slice(0, max)

const LONG = (iso) => {
  try {
    return new Date(iso + 'T12:00:00Z').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
  } catch { return iso }
}

/* Reconstruit les lignes depuis le catalogue. Les prix du client sont ignorés. */
function reconstruire(brutes) {
  const lignes = []
  for (const l of Array.isArray(brutes) ? brutes.slice(0, 60) : []) {
    const p = produitCommandable(String(l?.id || ''))
    const qte = Math.floor(Number(l?.qte))
    if (!p || !(qte > 0) || qte > 200) continue
    lignes.push({ id: p.id, nom: p.nom, prix: p.prix, qte, famille: p.famille, qteTexte: p.qte, img: p.img })
  }
  return lignes
}

/*
  Valide une commande reçue et en calcule tout ce qui en découle.
  Renvoie { erreur, champ, etape } ou le dossier complet.
*/
export function preparerCommande(body, { reference } = {}) {
  const lignes = reconstruire(body.lignes)
  const b = {
    cp: texte(body.cp, 5),
    date: texte(body.date, 10),
    heure: texte(body.heure, 5),
    heureFin: texte(body.heureFin, 5),
    societe: texte(body.societe, 120),
    adresse: texte(body.adresse, 200),
    ville: texte(body.ville, 80),
    acces: texte(body.acces, 300),
    contactNom: texte(body.contactNom, 80),
    contactTel: texte(body.contactTel, 30),
    email: texte(body.email, 120).toLowerCase(),
    emailFacturation: texte(body.emailFacturation, 120).toLowerCase(),
    factMeme: body.factMeme !== false,
    factEntite: texte(body.factEntite, 120),
    factAdresse: texte(body.factAdresse, 200),
    factCp: texte(body.factCp, 12),
    factVille: texte(body.factVille, 80),
    factPays: texte(body.factPays, 2).toUpperCase() || 'FR',
    factReference: texte(body.factReference, 80),
    reglement: body.reglement === 'facture' ? 'facture' : 'carte',
    motACompagner: texte(body.motACompagner, 500),
    vaisselle: body.vaisselle === true,
  }

  const ennuis = problemes(lignes, b, new Date())
  if (ennuis.length) {
    return { erreur: ennuis[0].texte, champ: ennuis[0].champ, etape: ennuis[0].etape }
  }
  /*
    L'adresse qui ira sur la facture, résolue une fois pour toutes : soit
    celle saisie, soit celle de livraison recopiée. Le reste du code n'a plus
    à se demander laquelle utiliser.
  */
  b.facturation = b.factMeme
    ? { entite: b.societe, adresse: b.adresse, cp: b.cp, ville: b.ville, pays: 'FR' }
    : { entite: b.factEntite, adresse: b.factAdresse, cp: b.factCp, ville: b.factVille, pays: b.factPays }

  const t = totaux(lignes, b)
  const creneau = libelleCreneau(b.heure, b.heureFin)
  const ref = reference || referenceCommande()
  const modif = limiteModification(b.date)

  /*
    Le seul garde-fou automatique : une première commande au-dessus de
    1 000 € HT se confirme au téléphone, même réglée par carte. Sur 84 devis
    acceptés, la médiane est à 372 € et 8 % dépassent 1 000 € : le garde-fou
    touche une commande sur douze, celles où une erreur coûte cher.
    « connu » vient du navigateur : il ne sert qu'à choisir le texte, jamais
    à ouvrir un crédit.
  */
  const aAppeler = t.ht > SEUIL_APPEL && body.connu !== true

  const recap = lignes.map(l => `${l.qte} × ${l.nom} — ${eur(l.prix * l.qte)}`)

  return { lignes, b, t, creneau, reference: ref, modif, aAppeler, recap }
}

/*
  Écrit la commande dans l'OS puis envoie les deux emails. `paiement` décrit
  ce qui a été encaissé, ou rien du tout pour une facture à 30 jours.
*/
export async function enregistrerCommande(dossier, paiement = null) {
  const { lignes, b, t, creneau, reference, modif, aAppeler, recap } = dossier

  const message = [
    `COMMANDE EN LIGNE N° ${reference}`,
    `Livraison ${b.date} · ${creneau}`,
    `${b.societe} — ${b.adresse}, ${b.cp} ${b.ville}`,
    b.acces ? `Accès : ${b.acces}` : null,
    `Sur place : ${b.contactNom} · ${b.contactTel}`,
    '',
    `FACTURER À : ${b.facturation.entite} — ${b.facturation.adresse}, ${b.facturation.cp} ${b.facturation.ville}${b.facturation.pays !== 'FR' ? ` (${b.facturation.pays})` : ''}`,
    b.emailFacturation ? `Email de facturation : ${b.emailFacturation}` : null,
    b.factReference ? `Référence / bon de commande : ${b.factReference}` : null,
    '',
    ...recap,
    `${t.libelleLivraison} — ${eur(t.livraison)}`,
    t.optionVaisselle ? `Vaisselle réutilisable — ${eur(t.optionVaisselle)}` : null,
    `TOTAL ${eur(t.ht)} HT · ${eur(t.ttc)} TTC`,
    '',
    b.reglement === 'facture'
      ? 'Règlement : sur facture à 30 jours'
      : `Règlement : PAYÉ PAR CARTE${paiement?.psp ? ` (${paiement.psp}${paiement.reference ? `, ${paiement.reference}` : ''})` : ''}`,
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
      a_appeler: aAppeler,
      accepte_auto: !aAppeler,
      limite_modification: modif,
      paiement,
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
      subject: `Votre commande n° ${reference} — livraison le ${LONG(b.date)}`,
      html: `<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;background:#FDFBF7;">
        <h2 style="font-weight:400;color:#1A1A1A;">Merci, c'est noté.</h2>
        <p style="font-size:15px;color:#1A1A1A;">Votre commande <strong>n° ${esc(reference)}</strong> est enregistrée pour le <strong>${esc(LONG(b.date))}</strong>, créneau <strong>${esc(creneau)}</strong>.</p>
        ${aAppeler ? `<p style="font-size:15px;color:#1A1A1A;">Notre équipe vous appelle pour valider cette première commande.</p>` : ''}
        <table style="width:100%;border-collapse:collapse;margin:20px 0;">${tableau}</table>
        <p style="font-size:15px;color:#1A1A1A;">Total : <strong>${eur(t.ht)} HT</strong> · ${eur(t.ttc)} TTC, livraison comprise.</p>
        <p style="font-size:15px;color:#1A1A1A;">${b.reglement === 'facture'
          ? 'Votre facture partira après la livraison, payable à 30 jours.'
          : 'Votre carte a été débitée, le paiement est enregistré.'}</p>
        <p style="font-size:14px;color:#605A4F;">Modifiable jusqu'au ${esc(LONG(modif?.date || ''))} à ${modif?.heure || 10}h : écrivez-nous ou appelez le 07 60 16 96 20.</p>
      </div>`,
    })
  } catch (e) {
    console.error('commande: envoi des emails en échec, la commande est enregistrée', e)
  }

  return {
    ok: true,
    reference,
    aAppeler,
    creneau,
    date: b.date,
    reglement: b.reglement,
    ht: t.ht,
    ttc: t.ttc,
    limiteModification: modif,
  }
}
