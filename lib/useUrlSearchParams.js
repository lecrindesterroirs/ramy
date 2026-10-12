'use client'

import { useEffect, useState } from 'react'

const EMPTY = new URLSearchParams()

// Équivalent de useSearchParams() qui n'oblige pas Next.js à abandonner le rendu
// serveur : le HTML initial contient la page avec ses valeurs par défaut, les
// paramètres d'URL sont lus après le montage.
export function useUrlSearchParams() {
  const [params, setParams] = useState(EMPTY)

  useEffect(() => {
    const read = () => setParams(new URLSearchParams(window.location.search))
    read()
    window.addEventListener('popstate', read)
    return () => window.removeEventListener('popstate', read)
  }, [])

  return params
}
