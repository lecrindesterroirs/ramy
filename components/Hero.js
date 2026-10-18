'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ReviewsBadge from './ReviewsBadge'
import CatalogueModal from './CatalogueModal'
import { trackPhoneClick } from '../lib/tracking'
import { isOctobreRoseActive, OCTOBRE_ROSE_ACCENT } from '../lib/campagneOctobreRose'

/* Textes de l'en-tête, par langue. Le numéro et la note Google sont des
   faits, pas des textes : ils ne changent pas d'une langue à l'autre. */
const T_HERO = {
  fr: {
    titre1: "Traiteur d'entreprise",
    titre2: 'à Paris.',
    corps1: 'Nous sélectionnons les meilleurs artisans pour créer',
    corps2: 'des réceptions dont vos équipes se souviennent.',
    devis: 'Obtenir un devis',
    catalogue: 'Découvrir notre catalogue',
    question: 'Une question ?',
  },
  en: {
    titre1: 'Corporate catering',
    titre2: 'in Paris.',
    corps1: 'We pick the best artisans in the city to build',
    corps2: 'receptions your team actually remembers.',
    devis: 'Get a quote',
    catalogue: 'See our menu',
    question: 'A question?',
  },
}

export default function Hero({ lang = 'fr' }) {
  const T = T_HERO[lang] || T_HERO.fr
  const imageRef = useRef(null)
  const devisAccent = isOctobreRoseActive() ? OCTOBRE_ROSE_ACCENT : 'var(--accent)'
  const [catalogueOpen, setCatalogueOpen] = useState(false)

  /*
    Parallaxe de l'image d'en-tête, désactivée au doigt.

    Sur téléphone elle donnait un scroll saccadé : la transformation était
    écrite à chaque événement de scroll, hors du rythme d'affichage et hors
    du défilement fluide de Lenis, donc l'image accusait un retard visible
    sur le reste de la page. Et le gain est nul sur un petit écran.

    Sur ordinateur on la garde, mais calée sur requestAnimationFrame comme
    ParallaxImage, pour n'écrire qu'une fois par image affichée.
  */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    let rafId = null
    const appliquer = () => {
      rafId = null
      const el = imageRef.current
      if (el) el.style.transform = `translate3d(0, ${window.scrollY * 0.22}px, 0)`
    }
    const planifier = () => { if (rafId === null) rafId = requestAnimationFrame(appliquer) }

    window.addEventListener('scroll', planifier, { passive: true })
    planifier()
    return () => {
      window.removeEventListener('scroll', planifier)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      {/* Background image */}
      <div
        ref={imageRef}
        style={{
          position: 'absolute',
          inset: '-15% 0',
          willChange: 'transform',
        }}
      >
        <Image fill priority sizes="100vw" src="/hero-bg2.webp"
          alt="Petit-déjeuner et plateaux d'entreprise L'Écrin Traiteur livrés à Paris et en Île-de-France"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
      </div>

      {/* Warm cream scrim, renforcé côté gauche pour la lisibilité */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(105deg, rgba(249,246,239,0.95) 0%, rgba(249,246,239,0.80) 34%, rgba(249,246,239,0.36) 62%, rgba(249,246,239,0.04) 100%)',
        }}
      />

      {/* Content, left-aligned */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          padding: '0 80px 0 clamp(80px, 11vw, 180px)',
          maxWidth: '820px',
        }}
      >
        {/* Main title */}
        <h1
          style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontStyle: 'normal',
            fontSize: 'clamp(34px, 4.6vw, 60px)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#171310',
            marginBottom: '24px',
            textShadow: '0 1px 26px rgba(249,246,239,0.75)',
          }}
        >
          {T.titre1}{' '}<br />
          {T.titre2}
        </h1>

        {/* Body text */}
        <p
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '16.5px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'rgba(24,18,16,0.82)',
            marginBottom: '38px',
            maxWidth: '430px',
            textShadow: '0 1px 18px rgba(249,246,239,0.7)',
          }}
        >
          {T.corps1}{' '}<br />
          {T.corps2}
        </p>

        {/* CTA group */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a
            href={lang === 'en' ? '/en/devis' : '/devis'}
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '12px',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '11px 24px',
              background: devisAccent,
              border: `1px solid ${devisAccent}`,
              color: '#1A1A18',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
                            transition: 'opacity 0.35s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {T.devis} <span>→</span>
          </a>
          <button
            type="button"
            onClick={() => setCatalogueOpen(true)}
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontWeight: 400,
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '11px 24px',
              border: '1px solid rgba(28,22,20,0.35)',
              color: 'rgba(20,15,13,0.9)',
              background: 'rgba(255,253,249,0.55)',
              backdropFilter: 'blur(3px)',
              WebkitBackdropFilter: 'blur(3px)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              transition: 'border-color 0.3s ease, color 0.3s ease, background 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,253,249,0.85)'; e.currentTarget.style.borderColor = 'rgba(28,22,20,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,253,249,0.55)'; e.currentTarget.style.borderColor = 'rgba(28,22,20,0.35)' }}
          >
            {T.catalogue} <span>→</span>
          </button>
        </div>

        {/* Preuve sociale, fiche Google */}
        <ReviewsBadge variant="onImage" style={{ marginTop: '26px' }} />
      </div>

      {/* Phone, bottom right */}
      <div
        className="hero-phone"
        style={{
          position: 'absolute',
          bottom: '36px',
          right: '80px',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '15px',
            fontWeight: 500,
            color: '#FFFFFF',
            letterSpacing: '0.06em',
            textShadow: '0 1px 8px rgba(0,0,0,0.4)',
          }}
        >
          {T.question}&nbsp;&nbsp;
          <a
            href="tel:+33174542310"
            onClick={trackPhoneClick}
            style={{ borderBottom: '1px solid rgba(255,255,255,0.6)', paddingBottom: '1px', color: 'inherit', cursor: 'pointer' }}
          >
            01 74 54 23 10
          </a>
        </span>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          opacity: 0.4,
        }}
      >
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'rgba(28,22,20,0.5)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(0.6); }
        }
        @media (max-width: 768px) {
          .hero-content { padding: 0 24px !important; max-width: 100% !important; }
          .hero-phone { display: none !important; }
        }
      ` }} />

      <CatalogueModal open={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </section>
  )
}
