'use client'

import { createContext, useContext } from 'react'

// Slugs du Journal qui ont une version anglaise. La liste est calculée côté
// serveur dans app/layout.js et transmise ici : les composants client (barre de
// navigation, pied de page, sélecteur de langue) la lisent par le contexte au
// lieu d'importer lib/en/journal, qui embarque tout le texte des articles
// français et anglais (2,9 Mo de JavaScript sur chaque page, 628 Ko compressés).
//
// Même principe pour la liste des chemins français qui ont une page anglaise
// (CHEMINS_AVEC_EN de lib/i18n.js, qui tire tous les textes anglais) : calculée
// côté serveur, lue ici par useEnChemins().
const EnSlugsContext = createContext([])
const EnCheminsContext = createContext([])

export function EnSlugsProvider({ slugs, chemins, children }) {
  return (
    <EnSlugsContext.Provider value={slugs}>
      <EnCheminsContext.Provider value={chemins}>{children}</EnCheminsContext.Provider>
    </EnSlugsContext.Provider>
  )
}

export function useEnSlugs() {
  return useContext(EnSlugsContext)
}

export function useEnChemins() {
  return useContext(EnCheminsContext)
}
