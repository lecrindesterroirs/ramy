'use client'

import { useEffect } from 'react'
import DevisRapide from './DevisRapide'

/*
  Feuille qui monte du bas de l'écran sur téléphone, ouverte par le bouton
  « Demander un devis » de la barre mobile (components/MobileCTA.js).
  Elle porte le formulaire court (occasion, personnes, date, email) au lieu
  d'envoyer vers le formulaire de devis en trois étapes : en 30 jours, la
  barre n'avait été touchée qu'une fois sur 129 visites mobiles (PostHog,
  17 octobre 2026). Le formulaire détaillé reste à un lien (dans DevisRapide).
*/
export default function DevisSheet({ open, onClose, prestation, onCatalogue }) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="devis-sheet-fond" onClick={onClose}>
      <div className="devis-sheet" role="dialog" aria-modal="true" aria-label="Demande de devis rapide" onClick={e => e.stopPropagation()}>
        <div className="devis-sheet-entete">
          <span className="devis-sheet-poignee" aria-hidden="true" />
          <button type="button" className="devis-sheet-fermer" onClick={onClose} aria-label="Fermer">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>

        <DevisRapide
          compact
          defaultPrestation={prestation}
          titre="Votre devis en 30 secondes"
          sousTitre="Réponse sous 24 h, sans engagement."
        />

        <div className="devis-sheet-liens">
          <button type="button" onClick={onCatalogue}>Pas encore prêt ? Recevoir la carte et les tarifs (PDF)</button>
        </div>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .devis-sheet-fond {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(17,17,17,.45);
          display: flex; align-items: flex-end;
          animation: devisSheetFond .25s ease both;
        }
        .devis-sheet {
          width: 100%; max-height: 88vh; overflow-y: auto;
          background: #FFFFFF;
          padding: 8px 16px calc(20px + env(safe-area-inset-bottom, 0px));
          animation: devisSheetMonte .32s cubic-bezier(.22,.61,.36,1) both;
        }
        .devis-sheet-entete { position: relative; height: 34px; display: flex; justify-content: center; align-items: center; }
        .devis-sheet-poignee { width: 38px; height: 4px; border-radius: 2px !important; background: rgba(17,17,17,.15); }
        .devis-sheet-fermer {
          position: absolute; right: 0; top: 2px; width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center;
          background: none; border: none; color: #1A1A18; cursor: pointer;
        }
        .devis-sheet-liens { display: flex; flex-direction: column; align-items: center; gap: 12px; padding-top: 16px; }
        .devis-sheet-liens button, .devis-sheet-liens a {
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 12.5px; color: var(--accent-deep);
          background: none; border: none; padding: 0; cursor: pointer;
          text-decoration: underline; text-underline-offset: 3px;
        }
        @keyframes devisSheetFond { from { opacity: 0; } to { opacity: 1; } }
        @keyframes devisSheetMonte { from { transform: translateY(100%); } to { transform: none; } }
        @media (prefers-reduced-motion: reduce) {
          .devis-sheet, .devis-sheet-fond { animation: none; }
        }
      ` }} />
    </div>
  )
}
