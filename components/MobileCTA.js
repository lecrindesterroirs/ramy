'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { trackPhoneClick, trackWhatsappClick } from '../lib/tracking'
import { capturerPostHog } from '../lib/posthog-identify'
import { isOctobreRoseActive, OCTOBRE_ROSE_ACCENT } from '../lib/campagneOctobreRose'
import { prestationRapidePour } from '../lib/parcours'
import { estAnglais } from '../lib/i18nBase'
import DevisSheet from './DevisSheet'
import CatalogueModal from './CatalogueModal'

// WhatsApp : le mobile de Ramy (choisi par lui le 17 octobre 2026 ; le
// 01 74 54 23 10 est un fixe). Message pré-rempli pour lancer la discussion.
const wa = (texte) => 'https://wa.me/33760169620?text=' + encodeURIComponent(texte)
const WHATSAPP = wa("Bonjour, je souhaiterais un devis pour ")
const WHATSAPP_EN = wa("Hello, I would like a quote for ")

const T_BARRE = {
  fr: {
    contact: 'Contactez-nous',
    appeler: "Appeler L'Écrin Traiteur au 01 74 54 23 10",
    whatsapp: 'Écrire sur WhatsApp',
    devis: 'Devis en 30 s',
    devisAria: 'Devis en 30 s : demander un devis, réponse sous 24 h',
  },
  en: {
    contact: 'Get in touch',
    appeler: "Call L'Écrin Traiteur on 01 74 54 23 10",
    whatsapp: 'Message us on WhatsApp',
    devis: 'Quote in 30 s',
    devisAria: 'Quote in 30 s: ask for a quote, answer within 24 h',
  },
}

export default function MobileCTA() {
  const pathname = usePathname()
  const en = estAnglais(pathname || '/')
  const T = en ? T_BARRE.en : T_BARRE.fr
  const devisAccent = isOctobreRoseActive() ? OCTOBRE_ROSE_ACCENT : undefined
  // Barre visible dès le chargement et pendant tout le défilement : sur mobile
  // (trafic Google Ads) elle restait masquée tant que le visiteur ne remontait
  // pas, donc aucun accès au devis ni au téléphone en lisant la page. Seul le
  // pied de page la masque (il porte déjà les mêmes liens).
  const [hidden, setHidden] = useState(false)
  const [sheet, setSheet] = useState(false)
  const [catalogue, setCatalogue] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      setHidden(entry.isIntersecting)
    }, { threshold: 0 })
    observer.observe(footer)
    return () => observer.disconnect()
  }, [pathname])

  // Masqué sur la page devis, la nav est intégrée dans le formulaire
  if (pathname === '/devis') return null
  // Calculateur intégré chez un tiers (iframe) : pas de barre L'Écrin par-dessus
  if (pathname && pathname.endsWith('/calculateur-quantites/embed')) return null

  return (
    <>
      <div
        ref={barRef}
        className="mobile-cta-bar"
        role="complementary"
        aria-label={T.contact}
        style={{ opacity: hidden ? 0 : 1, pointerEvents: hidden ? 'none' : 'auto', transition: 'opacity 0.25s ease' }}
      >
        <a className="mobile-cta-tel" href="tel:+33174542310" data-emplacement="barre_mobile" onClick={trackPhoneClick} aria-label={T.appeler}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
          </svg>
        </a>
        <a className="mobile-cta-tel mobile-cta-wa" href={en ? WHATSAPP_EN : WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label={T.whatsapp}
          onClick={() => trackWhatsappClick('barre_mobile')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.88c0 2.1.55 4.14 1.59 5.94L.06 24l6.33-1.66a11.87 11.87 0 0 0 5.65 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.16-3.48-8.4z"/>
          </svg>
        </a>
        <a className="mobile-cta-devis" href={en ? '/en/devis' : '/devis'} aria-label={T.devisAria} style={devisAccent ? { background: devisAccent } : undefined}
          onClick={e => { e.preventDefault(); capturerPostHog('feuille_devis_ouverte', { page: pathname }); setSheet(true) }}>
          {T.devis}
        </a>
      </div>

      <DevisSheet open={sheet} onClose={() => setSheet(false)} prestation={prestationRapidePour(pathname)}
        onCatalogue={() => { setSheet(false); setCatalogue(true) }} />
      <CatalogueModal open={catalogue} onClose={() => setCatalogue(false)} />

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .mobile-cta-bar {
          display: none;
        }
        /* Panneau de discussion ouvert : la barre le recouvrait sur
           téléphone (téléphone + demander un devis par-dessus la saisie).
           Elle s'efface tant que la conversation est à l'écran. */
        body.chat-ouvert .mobile-cta-bar {
          display: none !important;
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
            flex: 0 0 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.04em;
            color: var(--text-primary);
            text-decoration: none;
            border: 1px solid rgba(17,17,17,0.15);
            min-height: 46px;
            padding: 12px 0;
            transition: border-color 0.2s ease;
          }
          .mobile-cta-wa { color: #1F9D55; }
          .mobile-cta-tel:hover {
            border-color: var(--text-primary);
          }
          .mobile-cta-devis {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #1A1A18;
            background: var(--accent);
            text-decoration: none;
            white-space: nowrap;
            min-height: 46px;
            padding: 12px 4px;
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
