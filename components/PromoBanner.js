'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

/* ─────────────────────────────────────────────────────────────
   Bandeau de campagne — Octobre Rose
   Pour changer de campagne (ou l'arrêter) : tout se règle ici.
   Hauteur pilotée par --promo-h (globals.css, classe html.promo-on)
   ───────────────────────────────────────────────────────────── */
const CAMPAGNE = {
  id: 'octobre-rose-2026',                 // change d'id = bandeau réaffiché à tous
  debut: '2026-09-25',                     // affiché à partir de (inclus)
  fin: '2026-11-01',                       // masqué à partir de (exclu)
  href: '/creations/evenements-saisonniers/octobre-rose',
  texte: "Octobre Rose — 1 € reversé par convive à la recherche contre le cancer du sein",
  texteMobile: "Octobre Rose — 1 € reversé par convive →",
  cta: "Découvrir l'offre",
  fond: '#EFC6D2',
  encre: '#1A1A18',
}

/* Pages qui n'ont pas de navbar : pas de bandeau non plus */
const EXCLUS = ['/devis']

export default function PromoBanner() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  const exclu = EXCLUS.some(p => pathname === p || pathname.startsWith(p + '/'))

  useEffect(() => {
    if (exclu) return
    const now = new Date()
    const dans = now >= new Date(CAMPAGNE.debut + 'T00:00:00') && now < new Date(CAMPAGNE.fin + 'T00:00:00')
    if (!dans) return
    try {
      if (window.localStorage.getItem('promo-dismissed') === CAMPAGNE.id) return
    } catch (e) { /* mode privé : on affiche quand même */ }
    setVisible(true)
  }, [exclu])

  useEffect(() => {
    const html = document.documentElement
    if (visible) html.classList.add('promo-on')
    else html.classList.remove('promo-on')
    return () => html.classList.remove('promo-on')
  }, [visible])

  const fermer = () => {
    setVisible(false)
    try { window.localStorage.setItem('promo-dismissed', CAMPAGNE.id) } catch (e) { /* noop */ }
  }

  if (!visible) return null

  return (
    <div
      className="promo-banner"
      role="region"
      aria-label="Campagne Octobre Rose"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--promo-h)',
        zIndex: 120,
        background: CAMPAGNE.fond,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        padding: '0 48px',
      }}
    >
      <Ruban color={CAMPAGNE.encre} />

      <a
        href={CAMPAGNE.href}
        className="promo-banner-link"
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '14px',
          textDecoration: 'none',
          color: CAMPAGNE.encre,
          minWidth: 0,
        }}
      >
        <span className="promo-banner-text" style={{
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          <span className="promo-long">{CAMPAGNE.texte}</span>
          <span className="promo-short">{CAMPAGNE.texteMobile}</span>
        </span>
        <span className="promo-banner-cta" style={{
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          borderBottom: `1px solid ${CAMPAGNE.encre}`,
          paddingBottom: '1px',
        }}>
          {CAMPAGNE.cta} →
        </span>
      </a>

      <button
        onClick={fermer}
        aria-label="Fermer le bandeau"
        className="promo-banner-close"
        style={{
          position: 'absolute',
          right: '18px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '6px',
          lineHeight: 0,
          color: CAMPAGNE.encre,
          opacity: 0.55,
          transition: 'opacity .2s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = 1 }}
        onMouseLeave={e => { e.currentTarget.style.opacity = 0.55 }}
      >
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
          <path d="M1 1L10 10M10 1L1 10" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .promo-banner { animation: promoDown .55s cubic-bezier(.22,.61,.36,1) both; }
        @keyframes promoDown {
          from { transform: translateY(-100%); }
          to   { transform: translateY(0); }
        }
        .promo-banner-link:hover .promo-banner-cta { opacity: .65; }
        .promo-short { display: none; }
        @media (max-width: 1100px) {
          .promo-banner { padding: 0 40px 0 14px; justify-content: flex-start; gap: 9px; }
          .promo-banner-link { gap: 0; flex-wrap: nowrap; align-items: center; }
          .promo-long { display: none; }
          .promo-short { display: inline; }
          .promo-banner-cta { display: none; }
          .promo-banner-text { font-size: 10px !important; letter-spacing: .06em !important; }
          .promo-banner-close { right: 12px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .promo-banner { animation: none; }
        }
      ` }} />
    </div>
  )
}

/* Ruban stylisé maison — pas le logo officiel Ruban Rose (marque déposée) */
function Ruban({ color }) {
  return (
    <svg className="promo-ruban" width="13" height="18" viewBox="0 0 16 21" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M8 1.8C11.6 5 11.6 8.6 8 11.2L5.6 20" stroke={color} strokeWidth="1.15" strokeLinecap="round" />
      <path d="M8 1.8C4.4 5 4.4 8.6 8 11.2L10.4 20" stroke={color} strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  )
}
