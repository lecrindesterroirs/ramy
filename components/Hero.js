'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ReviewsBadge from './ReviewsBadge'
import CatalogueModal from './CatalogueModal'
import { trackPhoneClick } from '../lib/tracking'
import { isOctobreRoseActive, OCTOBRE_ROSE_ACCENT } from '../lib/campagneOctobreRose'
import { PDJ_DES, PLATEAU_DES, euroFr, euroEn } from '../lib/prixEntree'
import { FORMULES } from '../lib/calculsPrix'

/* Textes de l'en-tête, par langue. Le numéro et la note Google sont des
   faits, pas des textes : ils ne changent pas d'une langue à l'autre. */
const T_HERO = {
  fr: {
    titre1: "Traiteur d'entreprise",
    titre2: 'à Paris.',
    corps1: 'Petits-déjeuners, plateaux repas et cocktails livrés dans vos bureaux,',
    corps2: 'avec les madeleines Mado Paris et les macarons Pierre Morel.',
    prix: `Par personne, HT : petit-déjeuner dès ${euroFr(PDJ_DES)}, plateau repas dès ${euroFr(PLATEAU_DES)}, cocktail dès ${euroFr(FORMULES.invitation.prix)}. Livraison dès 6h30, commande jusqu'à 14h la veille.`,
    devis: 'Obtenir un devis',
    catalogue: 'Découvrir notre catalogue',
    question: 'Une question ?',
  },
  en: {
    titre1: 'Corporate catering',
    titre2: 'in Paris.',
    corps1: 'Breakfasts, lunch trays and cocktail receptions delivered to your offices,',
    corps2: 'with Mado Paris madeleines and Pierre Morel macarons.',
    prix: `Per person, excl. VAT: breakfast from ${euroEn(PDJ_DES)}, lunch tray from ${euroEn(PLATEAU_DES)}, cocktail reception from ${euroEn(FORMULES.invitation.prix)}. Delivery from 6:30 am, order by 2 pm the day before.`,
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
        className="hero-media"
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
        className="hero-scrim"
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
            fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif",
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
            fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
            fontSize: '16.5px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'rgba(24,18,16,0.82)',
            marginBottom: '14px',
            maxWidth: '470px',
            textShadow: '0 1px 18px rgba(249,246,239,0.7)',
          }}
        >
          {T.corps1}{' '}<br className="hero-br" />
          {T.corps2}
        </p>

        {/* Prix calculés (lib/prixEntree.js, lib/calculsPrix.js), dans le premier écran */}
        <p className="hero-prix" style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.6, color: '#171310', marginBottom: '30px', maxWidth: '470px', textShadow: '0 1px 18px rgba(249,246,239,0.7)' }}>
          {T.prix}
        </p>

        {/* CTA group */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a
            href={lang === 'en' ? '/en/devis' : '/devis'}
            style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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
            {T.devis}
          </a>
          <button
            type="button"
            onClick={() => setCatalogueOpen(true)}
            style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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
            {T.catalogue}
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
            fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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
            data-emplacement="hero"
            onClick={trackPhoneClick}
            style={{ borderBottom: '1px solid rgba(255,255,255,0.6)', paddingBottom: '1px', color: 'inherit', cursor: 'pointer' }}
          >
            01 74 54 23 10
          </a>
        </span>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll"
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
          /* Sur téléphone : la photo en haut, recadrée sur le coffret, le texte
             dessous sur fond crème (avant, le coffret sortait de l'écran). */
          .hero-section { height: auto !important; min-height: 0 !important; display: block !important; background: #F9F6EF; }
          .hero-media { position: relative !important; inset: auto !important; height: calc(var(--promo-h) + var(--nav-base) + 30vh); transform: none !important; }
          .hero-media img { object-position: 74% 62% !important; }
          .hero-scrim { display: none !important; }
          .hero-content { padding: 22px 16px 36px !important; max-width: 100% !important; }
          .hero-content h1 { margin-bottom: 14px !important; }
          .hero-br { display: none; }
          .hero-phone { display: none !important; }
          .hero-scroll { display: none !important; }
        }
      ` }} />

      <CatalogueModal open={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </section>
  )
}
