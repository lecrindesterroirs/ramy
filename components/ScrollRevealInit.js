'use client'

import { useEffect } from 'react'

export default function ScrollRevealInit() {
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
  }, [])

  return null
}
