'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import DevisRapide from './DevisRapide'
import CatalogueModal from './CatalogueModal'
import { prestationRapidePour } from '../lib/parcours'

/*
  Encart « Pour combien de personnes ? » glissé dans la grille des pages de
  la carte, après la deuxième rangée de produits. Téléphone seulement : les
  visiteurs mobiles s'arrêtent vers le quart de la page et n'ouvraient presque
  jamais le formulaire en trois étapes (PostHog, 17 octobre 2026). Sur
  ordinateur, rien ne change.
  Occupe toute la largeur de la grille (gridColumn 1 / -1) ; l'occasion est
  pré-choisie d'après l'adresse de la page (lib/parcours.js).
*/
export default function EncartDevisMobile() {
  const pathname = usePathname()
  const [catalogue, setCatalogue] = useState(false)

  return (
    <div className="encart-devis-mobile" style={{ gridColumn: '1 / -1' }}>
      <DevisRapide
        compact
        defaultPrestation={prestationRapidePour(pathname)}
        titre="Pour combien de personnes ?"
        sousTitre="Indiquez la date et votre email : devis sous 24 h, sans engagement."
      />
      <button type="button" className="encart-devis-catalogue" onClick={() => setCatalogue(true)}>
        Recevoir la carte et les tarifs (PDF)
      </button>
      <CatalogueModal open={catalogue} onClose={() => setCatalogue(false)} />

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .encart-devis-mobile { display: none; }
        .encart-devis-catalogue {
          display: block; margin: 12px auto 0; background: none; border: none; padding: 0; cursor: pointer;
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 12.5px; color: var(--accent-deep);
          text-decoration: underline; text-underline-offset: 3px;
        }
        @media (max-width: 768px) {
          .encart-devis-mobile { display: block; margin: 8px 0; }
        }
      ` }} />
    </div>
  )
}
