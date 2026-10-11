'use client'

import { useEffect } from 'react'
import { readConsent } from '../lib/consent'

/*
  Identification des entreprises visiteuses : Leadfeeder et Leadinfo.
  Les deux reconnaissent l'entreprise à partir de l'adresse du réseau de bureau
  d'un visiteur ; ils n'identifient pas les personnes.
  Chargés après le premier paint, comme GTM et PostHog, et jamais si le visiteur
  a refusé la mesure sur la page Cookies.
*/
const LEADFEEDER_ID = 'p1e024B0ZVQ8GB6d'
const LEADINFO_ID = 'LI-6ACB5F6C6161D'

function charger(src) {
  const s = document.createElement('script')
  s.async = true
  s.src = src
  document.head.appendChild(s)
}

export default function DeferredEntreprises() {
  useEffect(() => {
    if (window.__lecrinEntreprises) return
    const load = () => {
      if (window.__lecrinEntreprises || readConsent() === 'denied') return
      window.__lecrinEntreprises = true

      // Leadfeeder
      window.ldfdr = window.ldfdr || function () { (window.ldfdr._q = window.ldfdr._q || []).push([].slice.call(arguments)) }
      charger(`https://sc.lfeeder.com/lftracker_v1_${LEADFEEDER_ID}.js`)

      // Leadinfo (même amorce que leur extrait officiel ; ne fait rien s'il est déjà chargé)
      if (!window.leadinfo) {
        window.GlobalLeadinfoNamespace = window.GlobalLeadinfoNamespace || []
        window.GlobalLeadinfoNamespace.push('leadinfo')
        window.leadinfo = function () { (window.leadinfo.q = window.leadinfo.q || []).push(arguments) }
        window.leadinfo.t = window.leadinfo.t || LEADINFO_ID
        window.leadinfo.q = window.leadinfo.q || []
        charger('https://cdn.leadinfo.net/ping.js')
      }
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
