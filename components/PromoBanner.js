'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { estAnglais } from '../lib/i18nBase'
import { PROMO } from '../lib/promoBanner'

/* ─────────────────────────────────────────────────────────────
   Bandeau de campagne — Halloween
   Pour changer de campagne (ou l'arrêter) : tout se règle ici.
   Hauteur pilotée par --promo-h (globals.css, classe html.promo-on)
   ───────────────────────────────────────────────────────────── */
const CAMPAGNE = {
  id: PROMO.id,                            // id, dates et pages exclues : lib/promoBanner.js
  debut: PROMO.debut,
  fin: PROMO.fin,
  href: '/creations/evenements-saisonniers/halloween',
  texte: "Halloween au bureau : macaron noir, madeleine citrouille, cookies — commande jusqu'au 30 octobre",
  texteMobile: "Halloween au bureau : jusqu'au 30 octobre →",
  cta: "Découvrir l'offre",
  /* Anglais : les textes de campagne changent à chaque campagne, ils vivent
     donc ici avec le reste, pas dans lib/en/interface.js. La page de l'offre
     n'existe qu'en français : le lien y mène directement, sans passer par la
     redirection /en. */
  texteEn: "Halloween at the office: black macaron, pumpkin madeleine, cookies — order by 30 October",
  texteMobileEn: "Halloween at the office: order by 30 October →",
  ctaEn: 'See the offer',
  regionEn: 'Halloween campaign',
  fermerEn: 'Close banner',
  fond: '#F2E3CE',   // crème chaude : pas d'orange criard, le site reste sobre
  encre: '#1A1A18',
}

/* Pages qui n'ont pas de navbar : pas de bandeau non plus */
const EXCLUS = PROMO.exclus
const EXCLUS_EXACTS = PROMO.exclusExacts

/* Pages d'atterrissage Google Ads : sur téléphone, ni ce bandeau ni le défilant
   (« Commandez jusqu'à la veille… ») pour garder le devis dans le premier écran. */
const PAGES_ADS_MOBILE = PROMO.pagesAdsMobile

export default function PromoBanner() {
  const pathname = usePathname()
  const en = estAnglais(pathname || '/')
  const [visible, setVisible] = useState(false)
  // Vrai dès qu'on sait que le bandeau ne s'affichera pas. Tant que la décision n'est pas prise,
  // on ne retire pas `promo-on` : le script de app/layout.js l'a déjà posé avant le premier
  // affichage, et le retirer puis le remettre faisait sauter toute la page de 46 px.
  const masquer = useRef(false)

  const exclu = EXCLUS_EXACTS.includes(pathname) || EXCLUS.some(p => pathname === p || pathname.startsWith(p + '/'))

  useEffect(() => {
    const html = document.documentElement
    const epure = window.innerWidth <= 768 && PAGES_ADS_MOBILE.includes(pathname)
    html.classList.toggle('ads-mobile-epure', epure)
    return () => html.classList.remove('ads-mobile-epure')
  }, [pathname])

  useEffect(() => {
    if (exclu) { masquer.current = true; return }
    if (window.innerWidth <= 768 && PAGES_ADS_MOBILE.includes(pathname)) { masquer.current = true; setVisible(false); return }
    const now = new Date()
    const dans = now >= new Date(CAMPAGNE.debut + 'T00:00:00') && now < new Date(CAMPAGNE.fin + 'T00:00:00')
    if (!dans) { masquer.current = true; return }
    try {
      if (window.localStorage.getItem('promo-dismissed') === CAMPAGNE.id) { masquer.current = true; return }
    } catch (e) { /* mode privé : on affiche quand même */ }
    masquer.current = false
    setVisible(true)
  }, [exclu, pathname])

  useEffect(() => {
    const html = document.documentElement
    if (visible) html.classList.add('promo-on')
    else if (masquer.current) html.classList.remove('promo-on')
    return () => html.classList.remove('promo-on')
  }, [visible])

  const fermer = () => {
    masquer.current = true
    setVisible(false)
    try { window.localStorage.setItem('promo-dismissed', CAMPAGNE.id) } catch (e) { /* noop */ }
  }

  if (!visible) return null

  return (
    <div
      className="promo-banner"
      role="region"
      aria-label={en ? CAMPAGNE.regionEn : 'Campagne Halloween'}
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
          fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          <span className="promo-long">{en ? CAMPAGNE.texteEn : CAMPAGNE.texte}</span>
          <span className="promo-short">{en ? CAMPAGNE.texteMobileEn : CAMPAGNE.texteMobile}</span>
        </span>
        <span className="promo-banner-cta" style={{
          fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          borderBottom: `1px solid ${CAMPAGNE.encre}`,
          paddingBottom: '1px',
        }}>
          {en ? CAMPAGNE.ctaEn : CAMPAGNE.cta} →
        </span>
      </a>

      <button
        onClick={fermer}
        aria-label={en ? CAMPAGNE.fermerEn : 'Fermer le bandeau'}
        className="promo-banner-close"
        style={{
          position: 'absolute',
          right: '18px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          /* 44x44 de zone tactile (la croix reste visuellement petite) :
             elle faisait 23x23, sous le minimum recommandé. */
          padding: '0',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
          .promo-banner-text { font-size: 11px !important; letter-spacing: .06em !important; }
          .promo-banner-close { right: 12px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .promo-banner { animation: none; }
        }
      ` }} />
    </div>
  )
}


