'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export default function MobileCTA() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(true)
  const lastY = useRef(0)
  const barRef = useRef(null)

  useEffect(() => {
    let footerVisible = false

    const footer = document.querySelector('footer')
    let observer
    if (footer) {
      observer = new IntersectionObserver(([entry]) => {
        footerVisible = entry.isIntersecting
        if (footerVisible) setHidden(true)
      }, { threshold: 0 })
      observer.observe(footer)
    }

    const onScroll = () => {
      const y = window.scrollY
      if (footerVisible) {
        lastY.current = y
        return
      }
      if (y > lastY.current + 4) {
        setHidden(true)
      } else if (y < lastY.current - 4) {
        setHidden(false)
      }
      lastY.current = y
    }
    const onTap = (e) => {
      if (barRef.current && barRef.current.contains(e.target)) return
      setHidden(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('touchstart', onTap, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('touchstart', onTap)
      if (observer) observer.disconnect()
    }
  }, [])

  // Masqué sur la page devis — la nav est intégrée dans le formulaire
  if (pathname === '/devis') return null

  return (
    <>
      <div
        ref={barRef}
        className="mobile-cta-bar"
        role="complementary"
        aria-label="Contactez-nous"
        style={{ opacity: hidden ? 0 : 1, pointerEvents: hidden ? 'none' : 'auto', transition: 'opacity 0.25s ease' }}
      >
        <a className="mobile-cta-tel" href="tel:+33760169620" aria-label="Appeler L'Écrin Traiteur">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
          </svg>
          07 60 16 96 20
        </a>
        <a className="mobile-cta-devis" href="/devis" aria-label="Demander un devis">
          Devis →
        </a>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .mobile-cta-bar {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-cta-bar {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 999;
            background: #FFFFFF;
            border-top: 1px solid rgba(17,17,17,0.10);
            padding: 12px 16px;
            padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px));
            gap: 10px;
            align-items: center;
            box-shadow: 0 -4px 20px rgba(17,17,17,0.08);
          }
          .mobile-cta-tel {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-family: 'Neue Montreal', sans-serif;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.04em;
            color: var(--text-primary);
            text-decoration: none;
            border: 1px solid rgba(17,17,17,0.15);
            padding: 12px 0;
            transition: border-color 0.2s ease;
          }
          .mobile-cta-tel:hover {
            border-color: var(--text-primary);
          }
          .mobile-cta-devis {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Neue Montreal', sans-serif;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #FFFFFF;
            background: var(--accent);
            text-decoration: none;
            padding: 12px 0;
            transition: opacity 0.2s ease;
          }
          .mobile-cta-devis:hover {
            opacity: 0.88;
          }
        }
      ` }} />
    </>
  )
}
