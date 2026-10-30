'use client'

/*
  Le panier dans la navigation : il n'apparaît QUE s'il contient quelque chose.
  Un panier vide affiché en permanence transforme un site de traiteur en
  boutique, et ce n'est pas ce que Ramy vend. Tant qu'il est vide, rien.

  Depuis le 31/10/2026, une icône et le nombre, à côté de la silhouette du
  compte : le mot « Panier » et son filet prenaient trop de large dans une
  barre qui porte déjà cinq menus et le bouton devis (demande de Ramy). Reste
  la règle d'avant : pas de pastille rouge, un trait fin, rien qui clignote.
*/

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { nombreArticles, surChangement } from '@/lib/panier'

export default function LienPanier({ langue = 'fr', mobile = false, onNavigation }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    setN(nombreArticles())
    return surChangement((lignes) => setN(nombreArticles(lignes)))
  }, [])

  if (n === 0 || langue === 'en') return null

  /*
    `Link` et pas `<a>` : le tunnel est la seule partie du site où l'on
    enchaîne les écrans, et un rechargement complet du document ajoutait un
    écran blanc à chaque clic (Ramy, 31/10/2026 : « ça charge trop longtemps »).
    Next précharge la route dès que le lien est visible, et le passage se fait
    sans repartir de zéro.
  */
  if (mobile) {
    return (
      <Link
        href="/commander/panier"
        className="nav-panier nav-panier-m"
        onClick={onNavigation}
        aria-label={`Votre panier, ${n} article${n > 1 ? 's' : ''}`}
      >
        <Cabas /> Panier <span>{n}</span>
      </Link>
    )
  }

  return (
    <Link
      href="/commander/panier"
      className="nav-panier"
      onClick={onNavigation}
      aria-label={`Votre panier, ${n} article${n > 1 ? 's' : ''}`}
    >
      <Cabas />
      <span>{n}</span>
    </Link>
  )
}

/* Un cabas d'un trait, à la graisse de la silhouette du compte. */
const Cabas = ({ taille = 17 }) => (
  <svg width={taille} height={taille} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4.1 6.6h11.8l-.9 10.1a1 1 0 0 1-1 .9H6a1 1 0 0 1-1-.9L4.1 6.6Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    <path d="M7.3 8.4V5.6a2.7 2.7 0 0 1 5.4 0v2.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
)
