'use client'

/*
  Le compte dans la navigation (31/10/2026, demande de Ramy : « les bonhommes
  en haut, et quand on est connecté le bonjour Ramy, comme sur les sites
  e-commerce »).

  Dans la barre, une silhouette et rien d'autre : le « Bonjour Prénom » écrit
  en toutes lettres volait la place des trois menus de gauche, qui se
  brisaient sur trois lignes (Ramy, 31/10/2026 : « ça prend trop de place,
  mets que le bonhomme »). Le prénom se lit en tête du menu qu'elle ouvre.

  Il vient d'un cookie posé à la connexion (lib/sessionCompte.js), pas
  d'un appel à l'OS : une requête par page vue pour afficher cinq lettres
  serait payée par tous les clients connectés, et le prénom arriverait après
  le reste, en sautillant. Le cookie ne contient qu'un prénom — le jeton, lui,
  reste httpOnly et hors de portée du JavaScript.

  Au premier rendu le serveur ne sait rien : la silhouette est la même pour
  tout le monde, seul ce qu'elle ouvre change. Rien ne bouge, rien ne
  clignote.
*/

import { useEffect, useRef, useState } from 'react'

const lireBonjour = () => {
  try {
    const m = document.cookie.match(/(?:^|;\s*)lecrin_bonjour=([^;]*)/)
    return m ? decodeURIComponent(m[1]) : ''
  } catch {
    return ''
  }
}

/* Une silhouette d'un trait, à la graisse des autres filets de la barre. */
const Silhouette = ({ taille = 17 }) => (
  <svg width={taille} height={taille} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="6.4" r="3.3" stroke="currentColor" strokeWidth="1" />
    <path d="M3.6 17.2c0-3.4 2.9-5.6 6.4-5.6s6.4 2.2 6.4 5.6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
)

export default function LienCompte({ langue = 'fr', mobile = false, onNavigation }) {
  const [prenom, setPrenom] = useState('')
  const [ouvert, setOuvert] = useState(false)
  const zone = useRef(null)

  useEffect(() => { setPrenom(lireBonjour()) }, [])

  /* Un menu ouvert se referme quand on clique ailleurs ou qu'on appuie sur
     Échap : sinon il suit le client sur toute la page. */
  useEffect(() => {
    if (!ouvert) return
    const dehors = (e) => { if (zone.current && !zone.current.contains(e.target)) setOuvert(false) }
    const echap = (e) => { if (e.key === 'Escape') setOuvert(false) }
    document.addEventListener('mousedown', dehors)
    document.addEventListener('keydown', echap)
    return () => {
      document.removeEventListener('mousedown', dehors)
      document.removeEventListener('keydown', echap)
    }
  }, [ouvert])

  // L'espace client n'existe qu'en français : pas de porte vers des pages
  // que le visiteur anglophone ne saurait pas lire.
  if (langue === 'en') return null

  const sortir = async () => {
    await fetch('/api/compte/deconnexion', { method: 'POST' })
    setPrenom('')
    setOuvert(false)
    onNavigation?.()
    window.location.href = '/'
  }

  /* Sur le téléphone, le menu déplié a déjà sa colonne de liens : on y pose
     les entrées à plat, sans second menu à ouvrir. */
  if (mobile) {
    return prenom ? (
      <div className="nav-compte-m">
        <span className="nav-compte-bonjour">Bonjour {prenom}</span>
        <a href="/compte" onClick={onNavigation}>Mes commandes</a>
        <a href="/compte/informations" onClick={onNavigation}>Mes informations</a>
        <button type="button" onClick={sortir}>Se déconnecter</button>
      </div>
    ) : (
      <a href="/compte/connexion" className="nav-compte-m nav-compte-m-seul" onClick={onNavigation}>
        <Silhouette taille={16} /> Mon compte
      </a>
    )
  }

  if (!prenom) {
    return (
      <a href="/compte/connexion" className="nav-compte" aria-label="Votre compte">
        <Silhouette />
      </a>
    )
  }

  return (
    <div className="nav-compte-zone" ref={zone}>
      <button
        type="button"
        className="nav-compte"
        onClick={() => setOuvert(!ouvert)}
        aria-expanded={ouvert}
        aria-haspopup="true"
        aria-label={`Votre compte, bonjour ${prenom}`}
      >
        <Silhouette />
      </button>
      {ouvert && (
        <div className="nav-compte-menu">
          <span className="nav-compte-salut">Bonjour {prenom}</span>
          <a href="/compte">Mes commandes</a>
          <a href="/compte/informations">Mes informations</a>
          <button type="button" onClick={sortir}>Se déconnecter</button>
        </div>
      )}
    </div>
  )
}
