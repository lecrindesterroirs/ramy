'use client'

import { createContext, useContext } from 'react'

// Slugs du Journal qui ont une version anglaise. La liste est calculée côté
// serveur dans app/layout.js et transmise ici : les composants client (barre de
// navigation, pied de page, sélecteur de langue) la lisent par le contexte au
// lieu d'importer lib/en/journal, qui embarque tout le texte des articles
// français et anglais (2,9 Mo de JavaScript sur chaque page, 628 Ko compressés).
const EnSlugsContext = createContext([])

export function EnSlugsProvider({ slugs, children }) {
  return <EnSlugsContext.Provider value={slugs}>{children}</EnSlugsContext.Provider>
}

export function useEnSlugs() {
  return useContext(EnSlugsContext)
}
