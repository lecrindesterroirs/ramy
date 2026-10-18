'use client'

import { useEffect, useRef, useState } from 'react'

/*
  Révélation subtile, conforme à la charte d'animation L'Écrin :
  fade-up (opacity 0→1 + translateY 24px→0), 0.65s, cubic-bezier(0.25,0.1,0.25,1).

  mode="scroll" (défaut) : se déclenche à l'entrée dans le viewport (IntersectionObserver).
  mode="mount"  : se déclenche juste après le montage (pour le hero, déjà visible à l'écran).
*/
// mode="mount" : animation CSS pure (fade-up au chargement), sans état React. Avant, le
// bloc restait à opacity 0 dans le HTML serveur jusqu'à l'hydratation du JavaScript :
// le titre des pages héros (villes, halal, occasions…) n'apparaissait qu'après 1 à 2 s
// sur mobile. Maintenant il est visible dès le premier affichage ; globals.css porte
// le @keyframes (.reveal-mount).
function RevealMount({ children, delay = 0, y = 24, duration = 0.65, style }) {
  return (
    <div
      className="reveal-mount"
      style={{ height: '100%', ...style, '--reveal-y': `${y}px`, '--reveal-d': `${duration}s`, '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Reveal(props) {
  return props.mode === 'mount' ? <RevealMount {...props} /> : <RevealScroll {...props} />
}

function RevealScroll({ children, delay = 0, mode = 'scroll', y = 24, duration = 0.65, style }) {
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
