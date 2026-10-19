'use client'

import { usePathname } from 'next/navigation'
import { estAnglais } from '../lib/i18nBase'

/*
  Lien d'évitement du clavier. Il est dans le layout racine, qui est un
  composant serveur et ne connaît donc pas la langue de la page : d'où ce
  petit composant client, qui lit la langue dans le chemin comme la Navbar
  et le pied de page. C'était le dernier texte français des pages /en.
*/
export default function SkipLink() {
  const en = estAnglais(usePathname() || '/')
  return (
    <a href="#main-content" className="skip-link">
      {en ? 'Skip to main content' : 'Aller au contenu principal'}
    </a>
  )
}
