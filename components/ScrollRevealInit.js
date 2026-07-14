'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/*
  Monté une seule fois dans app/layout.js : observe les classes .reveal /
  .reveal-stagger sur tout le site. Ré-observe à chaque changement de route
  (le layout ne se remonte pas en navigation client).
*/
export default function ScrollRevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const observe = () => {
      document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
        observer.observe(el)
      })
    }

    observe()
    // Re-observe after a tick to catch late-rendered elements
    const t = setTimeout(observe, 300)

    return () => {
      observer.disconnect()
      clearTimeout(t)
    }
  }, [pathname])

  return null
}
