'use client'

import { useEffect, useRef, useState } from 'react'

/*
  Révélation subtile, conforme à la charte d'animation L'Écrin :
  fade-up (opacity 0→1 + translateY 24px→0), 0.65s, cubic-bezier(0.25,0.1,0.25,1).

  mode="scroll" (défaut) : se déclenche à l'entrée dans le viewport (IntersectionObserver).
  mode="mount"  : se déclenche juste après le montage (pour le hero, déjà visible à l'écran).
*/
export default function Reveal({ children, delay = 0, mode = 'scroll', y = 24, duration = 0.65, style }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      setVisible(true)
      return
    }
    if (mode === 'mount') {
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        io.disconnect()
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [mode])

  return (
    <div
      ref={ref}
      style={{
        ...(mode === 'mount' ? { height: '100%' } : { display: 'grid' }),
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: reduced ? 'none' : `opacity ${duration}s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms, transform ${duration}s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
