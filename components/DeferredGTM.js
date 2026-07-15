'use client'

import { useEffect, useState } from 'react'
import { GoogleTagManager } from '@next/third-parties/google'

/*
  Charge Google Tag Manager APRÈS le premier paint pour ne pas bloquer le LCP
  mobile (les tags GA4 + Ads pèsent ~370 Ko de JS tiers et monopolisent le fil
  principal sur CPU bridé). On ne change RIEN au tracking : même conteneur GTM,
  mêmes tags — seulement le *moment* du chargement.

  Déclencheurs : 1ʳᵉ interaction (scroll/clic/tap/clavier) OU 3,5 s max.
  Le fallback garantit que GTM se charge même sans interaction → aucun
  pageview/conversion perdu.
*/
export default function DeferredGTM({ gtmId }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (ready) return
    const trigger = () => setReady(true)
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart']
    events.forEach(e => window.addEventListener(e, trigger, { once: true, passive: true }))
    const timer = setTimeout(trigger, 3500)
    return () => {
      events.forEach(e => window.removeEventListener(e, trigger))
      clearTimeout(timer)
    }
  }, [ready])

  return ready ? <GoogleTagManager gtmId={gtmId} /> : null
}
