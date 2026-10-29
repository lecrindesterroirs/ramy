'use client'

/*
  L'écran d'après.

  Première version refusée par Ramy : « ça fait brouillon, c'est pas aéré ».
  Elle entassait la date, le créneau et deux montants dans une seule phrase
  qui se cassait en trois lignes, puis collait le bouton dessous.

  Celle-ci dit une chose à la fois : ce qui est enregistré, puis les trois
  faits de la commande posés en colonne avec leur filet, puis ce qui se passe
  ensuite, puis le bouton. De l'air entre chaque, et une largeur de lecture
  qui ne dépasse pas la ligne confortable.

  Il lit sessionStorage, pas l'URL : un numéro de commande dans une URL se
  retrouve dans les historiques, les en-têtes Referer et les outils de mesure.
*/

import { useEffect, useState } from 'react'
import { euroFr } from '@/lib/prixEntree'
import { EnteteTunnel, Fleche } from './Chrome'

const LONG = (iso) => iso
  ? new Date(iso + 'T12:00:00Z').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
  : ''

export default function ConfirmationEcran() {
  const [c, setC] = useState(null)
  const [pret, setPret] = useState(false)

  useEffect(() => {
    try {
      const brut = sessionStorage.getItem('lecrin-commande-faite')
      if (brut) setC(JSON.parse(brut))
    } catch {}
    setPret(true)
  }, [])

  if (!pret) return <div className="cmd"><div className="cmd-centre" /></div>

  if (!c) {
    return (
      <div className="cmd">
        <EnteteTunnel etape={3} atteintes={1} />
        <div className="cmd-centre">
          <h1 className="cmd-h1 cmd-sf">Rien à afficher ici.</h1>
          <p className="cmd-intro">
            Cette page montre la confirmation d&apos;une commande qui vient d&apos;être passée.
          </p>
          <a className="cmd-cont" href="/creations/petits-dejeuners-et-pauses">Voir la carte <Fleche /></a>
        </div>
      </div>
    )
  }

  const modif = c.limiteModification

  return (
    <div className="cmd">
      <EnteteTunnel etape={3} atteintes={0} />

      <div className="cmd-fin">
        <p className="cmd-fin-num">Commande n° {c.reference}</p>
        <h1 className="cmd-fin-titre cmd-sf">
          {c.aAppeler ? <>C&apos;est noté.<br />Nous vous appelons.</> : <>C&apos;est noté.<br />C&apos;est parti en production.</>}
        </h1>

        <dl className="cmd-fin-faits">
          <div>
            <dt>Livraison</dt>
            <dd className="cmd-sf">{LONG(c.date)}</dd>
            <dd className="cmd-fin-gris">Créneau {c.creneau}</dd>
          </div>
          <div>
            <dt>Montant</dt>
            <dd className="cmd-sf">{euroFr(c.ttc)} TTC</dd>
            <dd className="cmd-fin-gris">{euroFr(c.ht)} HT, livraison comprise</dd>
          </div>
          <div>
            <dt>Règlement</dt>
            <dd className="cmd-sf">{c.reglement === 'facture' ? 'Sur facture' : 'Par carte'}</dd>
            <dd className="cmd-fin-gris">
              {c.aAppeler
                ? 'Après notre appel de confirmation'
                : c.reglement === 'facture' ? 'À 30 jours après la livraison' : 'Débit le jour de la livraison'}
            </dd>
          </div>
        </dl>

        {/* La colonne « Règlement » dit déjà quand le débit intervient :
            cette phrase ne le répète pas, elle dit ce qui se passe ensuite. */}
        <p className="cmd-fin-suite">
          {c.aAppeler
            ? 'Votre créneau est réservé. Nous vous appelons pour valider cette première commande avant de lancer la production.'
            : c.reglement === 'facture'
              ? 'Nous préparons votre commande. Vous n\'avez rien d\'autre à faire.'
              : 'Le lien de paiement part avec votre email de confirmation.'}
        </p>

        {modif && (
          <p className="cmd-fin-note">
            Un email de confirmation vous attend.<br />
            Modifiable jusqu&apos;au <b>{LONG(modif.date)} à {modif.heure}h</b> : écrivez-nous ou appelez le 07 60 16 96 20.
          </p>
        )}

        <a className="cmd-cont cmd-fin-btn" href="/">Revenir à l&apos;accueil <Fleche /></a>
      </div>
    </div>
  )
}
