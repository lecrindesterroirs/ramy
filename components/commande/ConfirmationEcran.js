'use client'

/*
  L'écran d'après. Il dit trois choses, dans cet ordre : c'est enregistré,
  voilà la référence et le créneau, voilà ce qui se passe maintenant.

  Il lit sessionStorage, pas l'URL : une référence de commande dans une URL se
  retrouve dans les historiques, les en-têtes Referer et les outils de mesure.
*/

import { useEffect, useState } from 'react'
import { suiteDuPaiement } from '@/lib/paiement'
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

  return (
    <div className="cmd">
      <EnteteTunnel etape={3} atteintes={0} />
      <div className="cmd-centre">
        <p className="cmd-surtitre">Commande {c.reference}</p>
        <h1 className="cmd-h1 cmd-sf">
          {c.aAppeler ? 'C\'est noté, nous vous appelons.' : 'C\'est noté, c\'est parti en production.'}
        </h1>
        <p className="cmd-intro">
          Livraison le <strong style={{ color: 'var(--text-primary)' }}>{LONG(c.date)}</strong>,
          créneau <strong style={{ color: 'var(--text-primary)' }}>{c.creneau}</strong>.
          {' '}{c.ttc ? `${euroFr(c.ht)} HT, ${euroFr(c.ttc)} TTC.` : ''}
        </p>
        <p className="cmd-intro" style={{ marginTop: '-18px' }}>
          {c.aAppeler
            ? 'Notre équipe vous appelle pour valider cette première commande. Votre créneau est réservé en attendant.'
            : suiteDuPaiement(c.reglement)}
        </p>
        <p className="cmd-mini" style={{ maxWidth: '460px', borderTop: 'none' }}>
          Un email de confirmation vous attend.
          {c.limiteModification
            ? <> Modifiable jusqu&apos;au <b>{LONG(c.limiteModification.date)} à {c.limiteModification.heure}h</b> :
              écrivez-nous ou appelez le 07 60 16 96 20.</>
            : null}
        </p>
        <a className="cmd-cont" href="/">Revenir à l&apos;accueil <Fleche /></a>
      </div>
    </div>
  )
}
