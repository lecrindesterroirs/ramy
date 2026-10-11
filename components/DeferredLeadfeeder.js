'use client'

import { useEffect } from 'react'
import { readConsent } from '../lib/consent'

/*
  Leadfeeder : identifie l'entreprise d'un visiteur à partir de l'adresse de son
  réseau de bureau. Chargé après le premier paint, comme GTM et PostHog.
  Non chargé si le visiteur a refusé la mesure sur la page Cookies.
  (Leadinfo, lui, est posé dans Google Tag Manager.)
*/
const ID = 'p1e024B0ZVQ8GB6d'

export default function DeferredLeadfeeder() {
  useEffect(() => {
    if (window.__lecrinLeadfeeder) return
    const load = () => {
      if (window.__lecrinLeadfeeder || readConsent() === 'denied') return
      window.__lecrinLeadfeeder = true
      window.ldfdr = window.ldfdr || function () { (window.ldfdr._q = window.ldfdr._q || []).push([].slice.call(arguments)) }
      const s = document.createElement('script')
      s.async = true
      s.src = `https://sc.lfeeder.com/lftracker_v1_${ID}.js`
      document.head.appendChild(s)
    }
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart']
    events.forEach(e => window.addEventListener(e, load, { once: true, passive: true }))
    const timer = setTimeout(load, 3500)
    return () => {
      events.forEach(e => window.removeEventListener(e, load))
      clearTimeout(timer)
    }
  }, [])

  return null
}
