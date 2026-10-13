'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { lireChemin, noterFiche } from '../lib/parcours'

// Monté une seule fois dans app/layout.js : note chaque fiche produit regardée
// (lib/parcours.js). Le nom vient du titre de la fiche, lu une fois affichée.
export default function ParcoursCapture() {
  const pathname = usePathname()
  useEffect(() => {
    if (!lireChemin(pathname)?.fiche) return
    const timer = setTimeout(() => {
      // innerText garde les retours à la ligne du titre (« Les madeleines / signature »).
      const h1 = document.querySelector('h1')
      const nom = (h1?.innerText || h1?.textContent || '').replace(/\s+/g, ' ').trim()
      if (nom && nom.length <= 80) noterFiche(pathname, nom)
    }, 600)
    return () => clearTimeout(timer)
  }, [pathname])
  return null
}
