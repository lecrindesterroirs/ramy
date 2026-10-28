'use client'

/*
  Le panier dans la navigation : il n'apparaît QUE s'il contient quelque chose.
  Un panier vide affiché en permanence transforme un site de traiteur en
  boutique, et ce n'est pas ce que Ramy vend. Tant qu'il est vide, rien.

  Volontairement discret : pas de pastille rouge, pas d'icône de caddie. Le
  mot, le nombre, un filet — le motif des liens secondaires du site.
*/

import { useEffect, useState } from 'react'
import { nombreArticles, surChangement } from '@/lib/panier'

export default function LienPanier({ langue = 'fr', mobile = false, onNavigation }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    setN(nombreArticles())
    return surChangement((lignes) => setN(nombreArticles(lignes)))
  }, [])

  if (n === 0 || langue === 'en') return null

  return (
    <a
      href="/commander/panier"
      className={mobile ? 'nav-panier nav-panier-m' : 'nav-panier'}
      onClick={onNavigation}
      aria-label={`Votre panier, ${n} article${n > 1 ? 's' : ''}`}
    >
      Panier <span>{n}</span>
    </a>
  )
}
