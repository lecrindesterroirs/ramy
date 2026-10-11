'use client'

import { useEffect, useState } from 'react'
import { readConsent, writeConsent } from '../lib/consent'

// Page Politique de cookies : refuser la mesure d'audience, ou la réactiver.
export default function ConsentPreferencesButton() {
  const [refuse, setRefuse] = useState(false)

  useEffect(() => { setRefuse(readConsent() === 'denied') }, [])

  const basculer = () => {
    const suivant = refuse ? 'granted' : 'denied'
    writeConsent(suivant)
    setRefuse(suivant === 'denied')
  }

  return (
    <div>
      <button type="button" className="consent-btn" onClick={basculer}>
        {refuse ? 'Réactiver la mesure' : 'Refuser la mesure'}
      </button>
      <p className="consent-etat" role="status">
        {refuse
          ? "Vous avez refusé : aucun cookie de mesure ou de publicité n'est déposé sur cet appareil."
          : 'La mesure est active sur cet appareil.'}
      </p>
    </div>
  )
}
