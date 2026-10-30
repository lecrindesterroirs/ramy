'use client'

/*
  Étape 3, le règlement. Pas d'étape « Vérification » séparée : cet écran
  récapitule déjà la commande, la date, le créneau, l'adresse et le contact.
  Un écran de plus perd des clients sans rien apprendre au vendeur.

  Le choix du règlement dépend du client :
  - connu (son email correspond à une fiche de l'OS) : facture à 30 jours ou
    carte, au choix ;
  - inconnu : carte seulement, et une ligne « écrivez-nous, nous ouvrons le
    compte ». C'est Ramy qui ouvre un crédit, par écrit, jamais le site.

  La reconnaissance passe par /api/commande/client, qui répond « inconnu »
  pour tout le monde tant que la lecture de l'OS n'est pas activée. Dans ce
  cas on propose quand même la facture, en disant qu'elle sera vérifiée : un
  client fidèle ne doit pas se retrouver forcé à la carte à cause d'un réglage
  d'infrastructure.
*/

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { lirePanier, surChangement, viderPanier, cleLigne } from '@/lib/panier'
import { VIDE, lireBrouillon, ecrireBrouillon, viderBrouillon } from '@/lib/brouillonCommande'
import { problemes, totaux } from '@/lib/totauxCommande'
import { libelleCreneau, limiteModification } from '@/lib/reglesCommande'
import { enE164 } from '@/lib/telephone'
import { MODES } from '@/lib/paiement'
import { euroFr } from '@/lib/prixEntree'
import { EnteteTunnel, BasTunnel, Fleche, Pastille } from './Chrome'
import CarteStripe, { retenirPaiement, relirePaiement, oublierPaiement } from './CarteStripe'

const SEUIL_APPEL = 1000
const LONG = (iso) => iso
  ? new Date(iso + 'T12:00:00Z').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
  : ''

export default function PaiementEcran() {
  const router = useRouter()
  const [lignes, setLignes] = useState([])
  const [b, setB] = useState(VIDE)   // identique au rendu serveur : localStorage n'est lu qu'après le montage
  const [pret, setPret] = useState(false)
  const [compte, setCompte] = useState({ connu: false, su: false })
  const [envoi, setEnvoi] = useState(false)
  const [erreur, setErreur] = useState(null)
  // Quand le serveur a ouvert un paiement Stripe, le formulaire de carte
  // prend la place du bouton de commande : c'est lui qui porte le « payer ».
  const [carte, setCarte] = useState(null)
  const [redirect, setRedirect] = useState(null)
  // Une fois la commande partie, le panier est vidé : sans ce drapeau, le
  // garde-fou ci-dessous verrait un panier vide et renverrait le client à
  // l'étape 1 au lieu de la confirmation.
  const [fini, setFini] = useState(false)
  const maintenant = useMemo(() => new Date(), [])

  useEffect(() => {
    setLignes(lirePanier())
    setB(lireBrouillon())
    setPret(true)
    return surChangement(setLignes)
  }, [])

  /*
    Retour d'une authentification qui a dû passer par le site de la banque :
    Stripe renvoie sur cette page avec le paiement en paramètre. On reprend
    le dossier gardé de côté et on va le faire confirmer, sans réafficher le
    formulaire — la carte est déjà débitée.
  */
  useEffect(() => {
    if (!pret) return
    const p = new URLSearchParams(window.location.search)
    const intention = p.get('payment_intent')
    if (!intention) return
    const garde = relirePaiement()
    if (!garde?.jeton) {
      setErreur('Nous avons perdu le fil de ce paiement. Appelez-nous au 07 60 16 96 20.')
      return
    }
    setCarte(garde)
    setRedirect(intention)
  }, [pret])

  // Le client est-il déjà des nôtres ? Question posée une fois, sur l'email.
  useEffect(() => {
    const email = lireBrouillon().email
    if (!email) return
    let vivant = true
    fetch('/api/commande/client', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(r => r.json())
      .then(d => { if (vivant) setCompte({ connu: !!d.connu, su: !d.lectureDesactivee }) })
      .catch(() => {})
    return () => { vivant = false }
  }, [pret])

  const maj = (champs) => setB(ecrireBrouillon(champs))
  const t = totaux(lignes, b)
  const ennuis = problemes(lignes, b, maintenant)
  const avant = ennuis.filter(p => p.etape < 3)

  useEffect(() => {
    if (pret && !fini && avant.length) router.replace(avant[0].etape === 1 ? '/commander/panier' : '/commander/livraison')
  }, [pret, fini, avant, router])

  /*
    Retour de la banque : la carte est débitée, il ne reste qu'à confirmer.
    Ce hook, comme tous les autres, doit être déclaré AVANT le retour
    anticipé ci-dessous — React exige le même nombre de hooks à chaque
    rendu, et le placer plus bas cassait la page.
  */
  useEffect(() => {
    if (pret && redirect && carte?.jeton) paye()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pret, redirect, carte])

  if (!pret) return <div className="cmd"><EnteteTunnel etape={3} /><div className="cmd-centre" /></div>

  const factureOuverte = compte.connu || !compte.su
  const aAppeler = t.ht > SEUIL_APPEL && !compte.connu
  const modif = limiteModification(b.date)

  /* Commande aboutie : on garde le strict nécessaire pour l'écran suivant,
     puis on vide — sans ça, un rafraîchissement renverrait la même commande. */
  const terminer = (d) => {
    try {
      sessionStorage.setItem('lecrin-commande-faite', JSON.stringify({
        ...d, reglement: d.reglement || b.reglement, date: d.date || b.date, creneau: d.creneau,
      }))
    } catch {}
    oublierPaiement()
    setFini(true)
    viderPanier()
    viderBrouillon()
    router.push('/commander/confirmation')
  }

  const envoyer = async () => {
    setEnvoi(true)
    setErreur(null)
    try {
      const r = await fetch('/api/commande', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...b,
          connu: compte.connu,
          lignes: lignes.map(l => ({ id: l.id, qte: l.qte, options: l.options || null })),
        }),
      })
      const d = await r.json()
      if (!r.ok) {
        setErreur(d.erreur || 'La commande n\'a pas pu être enregistrée.')
        setEnvoi(false)
        return
      }
      // Paiement par carte : rien n'est enregistré tant que Stripe n'a pas
      // encaissé. On affiche le formulaire et on attend.
      if (d.paiement === 'carte') {
        const garde = { jeton: d.jeton, clientSecret: d.clientSecret, clePublique: d.clePublique, ttc: d.ttc }
        retenirPaiement(garde)
        setCarte(garde)
        setEnvoi(false)
        return
      }
      terminer(d)
    } catch {
      setErreur('Connexion interrompue. Votre commande n\'a pas été envoyée.')
      setEnvoi(false)
    }
  }

  const retourUrl = typeof window === 'undefined'
    ? ''
    : `${window.location.origin}/commander/paiement`

  const paye = async () => {
    setEnvoi(true)
    setErreur(null)
    try {
      const r = await fetch('/api/commande/confirmer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jeton: carte.jeton }),
      })
      const d = await r.json()
      if (!r.ok) {
        setErreur(d.erreur || "Le paiement n'a pas pu être confirmé.")
        setEnvoi(false)
        return
      }
      terminer(d)
    } catch {
      setErreur('Connexion interrompue pendant la confirmation. Appelez-nous au 07 60 16 96 20.')
      setEnvoi(false)
    }
  }

  return (
    // cmd-fixe : écran tenu à la hauteur de la fenêtre, chaque colonne
    // défilant pour elle — comme le panier et la livraison.
    <div className="cmd cmd-fixe">
      <EnteteTunnel etape={3} />

      <div className="cmd-corps">
        <div className="cmd-gauche">
          <p className="cmd-surtitre">Paiement</p>
          <h1 className="cmd-h1 cmd-sf">
            {carte ? 'Votre carte bancaire' : 'Comment souhaitez-vous régler ?'}
          </h1>
          <p className="cmd-intro">
            {carte
              ? `${euroFr(t.ttc)} TTC seront débités à la validation. Vos coordonnées bancaires ne passent ni par nous ni par notre serveur.`
              : compte.connu
                ? 'Vous commandez déjà chez nous : les deux options vous sont ouvertes.'
                : 'Première commande chez nous. Le règlement par carte permet de partir tout de suite.'}
          </p>

          {carte && !redirect && (
            <CarteStripe
              clientSecret={carte.clientSecret}
              clePublique={carte.clePublique}
              montantTtc={carte.ttc ?? t.ttc}
              retourUrl={retourUrl}
              facturation={{
                name: b.factMeme ? b.contactNom : (b.factEntite || b.contactNom),
                email: b.emailFacturation || b.email,
                phone: enE164(b.contactTel),
                address: b.factMeme
                  ? { line1: b.adresse, postal_code: b.cp, city: b.ville, country: 'FR' }
                  : { line1: b.factAdresse, postal_code: b.factCp, city: b.factVille, country: b.factPays || 'FR' },
              }}
              onPaye={paye}
              onErreur={(m) => { setErreur(m); setEnvoi(false) }}
            />
          )}
          {carte && redirect && !erreur && (
            <p className="cmd-aide">Votre paiement est accepté, nous enregistrons la commande…</p>
          )}

          {!carte && factureOuverte && (
            <button
              type="button"
              className={`cmd-opt ${b.reglement === 'facture' ? 'cmd-opt-on' : ''}`}
              onClick={() => maj({ reglement: 'facture' })}
            >
              <span className="cmd-coche" />
              <span>
                <span className="cmd-t" style={{ display: 'block' }}>{MODES.facture.titre}</span>
                <span className="cmd-s">{MODES.facture.detail}</span>
              </span>
              <span className="cmd-tag">{compte.connu ? MODES.facture.tag : 'À vérifier'}</span>
            </button>
          )}

          {!carte && <button
            type="button"
            className={`cmd-opt ${b.reglement === 'carte' ? 'cmd-opt-on' : ''}`}
            onClick={() => maj({ reglement: 'carte' })}
          >
            <span className="cmd-coche" />
            <span>
              <span className="cmd-t" style={{ display: 'block' }}>{MODES.carte.titre}</span>
              <span className="cmd-s">{MODES.carte.detail}</span>
            </span>
            <span className="cmd-tag">{MODES.carte.tag}</span>
          </button>}

          {!carte && !factureOuverte && (
            <p className="cmd-aide" style={{ marginTop: '18px' }}>
              Vous souhaitez être facturé à 30 jours ?{' '}
              <a href="/contact" style={{ color: 'var(--accent-deep)' }}>Écrivez-nous</a>, nous ouvrons le compte.
            </p>
          )}

          {aAppeler && (
            <div className="cmd-avis">
              <Pastille />
              <div>
                <p>Notre équipe vous appelle pour valider cette première commande.</p>
                <p className="cmd-b">
                  Au-delà de {SEUIL_APPEL} € HT, nous confirmons de vive voix avant de lancer la production.
                  Votre créneau est réservé en attendant.
                </p>
              </div>
            </div>
          )}

          <div className="cmd-bloc" style={{ marginTop: '30px', borderBottom: 'none', paddingBottom: 0 }}>
            <label className="cmd-lab" htmlFor="cmd-mot">Un mot pour la livraison (facultatif)</label>
            <textarea
              id="cmd-mot"
              className="cmd-champ cmd-texte"
              placeholder="Une précision, une allergie, un détail d'accès…"
              value={b.motACompagner}
              onChange={(e) => maj({ motACompagner: e.target.value })}
            />
          </div>
        </div>

        <div className="cmd-droite">
          <h2 className="cmd-h2 cmd-sf">Votre commande</h2>

          {lignes.map(l => (
            <div className="cmd-r" key={cleLigne(l)}>
              <span>{l.qte} × {l.nom}</span>
              <b>{euroFr(l.prix * l.qte)}</b>
            </div>
          ))}
          <div className="cmd-r"><span>Livraison {t.zone.nom}</span><b>{euroFr(t.livraison)}</b></div>
          <div className="cmd-rt"><span className="cmd-l">Total HT</span><span className="cmd-v">{euroFr(t.ht)}</span></div>
          <div className="cmd-r" style={{ paddingTop: '12px' }}><span>TVA 10 %</span><b>{euroFr(t.tva)}</b></div>
          <div className="cmd-rt cmd-rt-ttc" style={{ border: 'none', margin: 0, paddingTop: '2px' }}>
            <span className="cmd-l">Total TTC</span><span className="cmd-v">{euroFr(t.ttc)}</span>
          </div>

          <div className="cmd-liv">
            <p className="cmd-k">Livraison</p>
            <p>{LONG(b.date)}, {libelleCreneau(b.heure, b.heureFin)}</p>
            <p className="cmd-g">{b.adresse}, {b.cp} {b.ville}{b.acces ? ` · ${b.acces}` : ''}</p>
            <p className="cmd-g">{b.contactNom} · {b.contactTel}</p>
          </div>

          <p className="cmd-mini">
            Modifiable jusqu&apos;au <b>{LONG(modif?.date)} à {modif?.heure}h</b>. Au-delà, un appel est nécessaire.
          </p>
        </div>
      </div>

      <BasTunnel
        retour={carte ? undefined : '/commander/livraison'}
        retourLabel="Retour à la livraison"
        erreur={erreur}
      >
        {carte ? (
          <button
            type="button"
            className="cmd-retour"
            onClick={() => { oublierPaiement(); setCarte(null); setRedirect(null); setErreur(null) }}
          >
            Changer de mode de règlement
          </button>
        ) : (
          <button type="button" className="cmd-cont" onClick={envoyer} disabled={envoi}>
            {envoi ? 'Envoi…' : <>Commander · {euroFr(t.ttc)} TTC <Fleche /></>}
          </button>
        )}
      </BasTunnel>
    </div>
  )
}
