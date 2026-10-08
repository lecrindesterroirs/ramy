'use client'

import { useEffect } from 'react'
import { captureAttribution } from '../lib/attribution'

// Monté une seule fois dans app/layout.js : mémorise l'origine de la visite.
export default function AttributionCapture() {
  useEffect(() => { captureAttribution() }, [])
  return null
}
