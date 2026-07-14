'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

/*
  Smooth scroll global (Lenis), monté une seule fois dans app/layout.js.

  - smoothWheel uniquement : le tactile reste 100% natif (syncTouch: false),
    donc aucune dégradation sur mobile.
  - Désactivé entièrement si prefers-reduced-motion.
  - anchors: true → les liens #ancre défilent en douceur sans casser l'URL.
  - Durée ~1.1s + easing exponentiel : inertie légère, jamais de retard
    perceptible entre la molette et le mouvement.
*/
export default function SmoothScroll() {
  const lenisRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      syncTouch: false,
      touchMultiplier: 1.2,
      anchors: true,
    })
    lenisRef.current = lenis

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Coupe l'inertie en cours au changement de page, pour ne pas lutter
  // contre la remise à zéro du scroll effectuée par Next.
  useEffect(() => {
    const lenis = lenisRef.current
    if (!lenis) return
    lenis.stop()
    lenis.start()
  }, [pathname])

  return null
}
