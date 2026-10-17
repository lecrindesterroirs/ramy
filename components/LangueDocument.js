'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { estAnglais } from '../lib/i18n'

/*
  Pose l'attribut lang sur <html> selon le chemin.

  Monté à la racine, et non dans la navigation : certaines pages n'ont pas de
  menu — le parcours de devis, par exemple — et l'attribut doit y être juste
  quand même.

  Pourquoi côté client : le faire côté serveur obligerait la racine à lire les
  en-têtes de la requête, ce qui ferait basculer les 565 pages du site en rendu
  à la demande. Prix trop élevé pour un attribut que Google déclare ignorer au
  profit du contenu. Les signaux que lisent les machines — hreflang, og:locale,
  inLanguage — sont posés côté serveur, eux.
*/
export default function LangueDocument() {
  const chemin = usePathname() || '/'
  useEffect(() => {
    document.documentElement.lang = estAnglais(chemin) ? 'en' : 'fr'
  }, [chemin])
  return null
}
