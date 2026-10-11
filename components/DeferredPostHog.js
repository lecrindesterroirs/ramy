'use client'

import { useEffect } from 'react'
import { readConsent, CONSENT_EVENT } from '../lib/consent'

/*
  Charge PostHog (hébergement Europe) APRÈS le premier paint, sur le même
  principe que DeferredGTM : 1ʳᵉ interaction OU 3,5 s max.

  Inactif tant que NEXT_PUBLIC_POSTHOG_KEY n'est pas défini sur Vercel.

  Mesure active par défaut (cookies PostHog et enregistrement de sessions).
  Si le visiteur refuse sur la page Cookies (lib/consent.js) : persistence
  'memory' (aucun cookie ni stockage local) et pas d'enregistrement.
  Le changement de choix est appliqué à chaud, sans recharger la page.
*/
const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const API_HOST = 'https://eu.i.posthog.com'
const ASSETS = 'https://eu-assets.i.posthog.com/static/array.js'

export default function DeferredPostHog() {
  useEffect(() => {
    if (!KEY || window.__lecrinPostHog) return
    const load = () => {
      if (window.__lecrinPostHog) return
      window.__lecrinPostHog = true
      const accord = readConsent() !== 'denied'
      const ph = (window.posthog = window.posthog || [])
      ph._i = ph._i || []
      ph._i.push([
        KEY,
        {
          api_host: API_HOST,
          ui_host: 'https://eu.posthog.com',
          person_profiles: 'identified_only',
          persistence: accord ? 'localStorage+cookie' : 'memory',
          disable_session_recording: !accord,
          capture_pageview: 'history_change',
          capture_pageleave: true,
          // Ville, région et code postal d'après Vercel, joints à chaque événement.
          loaded: instance => {
            if (!accord) return
            fetch('/api/geo')
              .then(r => (r.ok ? r.json() : null))
              .then(g => {
                if (!g) return
                const lieu = {}
                if (g.ville) lieu.ville = g.ville
                if (g.region) lieu.region = g.region
                if (g.code_postal) lieu.code_postal = g.code_postal
                if (g.pays) lieu.pays = g.pays
                if (Object.keys(lieu).length) instance.register(lieu)
              })
              .catch(() => {})
          },
        },
        'posthog',
      ])
      ph.__SV = 1
      const s = document.createElement('script')
      s.async = true
      s.crossOrigin = 'anonymous'
      s.src = ASSETS
      document.head.appendChild(s)
    }
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart']
    events.forEach(e => window.addEventListener(e, load, { once: true, passive: true }))
    const timer = setTimeout(load, 3500)
    const onConsent = e => {
      const ph = window.posthog
      if (!ph || typeof ph.set_config !== 'function') return // pas encore chargé : init lira le choix
      const accord = e.detail !== 'denied'
      ph.set_config({ persistence: accord ? 'localStorage+cookie' : 'memory', disable_session_recording: !accord })
      if (accord) ph.startSessionRecording?.()
      else ph.stopSessionRecording?.()
    }
    window.addEventListener(CONSENT_EVENT, onConsent)
    return () => {
      events.forEach(e => window.removeEventListener(e, load))
      window.removeEventListener(CONSENT_EVENT, onConsent)
      clearTimeout(timer)
    }
  }, [])

  return null
}
