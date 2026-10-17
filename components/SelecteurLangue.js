'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { estAnglais, versEn, versFr, equivalentEn } from '../lib/i18n'
import { enSlugs } from '../lib/en/journal'

/*
  Bascule français / anglais.

  Deux règles :
  — on ne propose l'anglais que si la page existe vraiment en anglais. Un
    drapeau qui mène à une 404 est pire que pas de drapeau du tout ;
  — depuis une page anglaise, le retour au français est toujours possible :
    toute page anglaise a son équivalent français par construction.

  Le composant pose aussi l'attribut lang sur <html>. Le faire côté serveur
  obligerait la racine à lire les en-têtes de la requête, ce qui ferait
  basculer les 565 pages du site en rendu à la demande — un prix bien trop
  élevé pour un attribut que Google déclare ignorer au profit du contenu lui-
  même. Les signaux qui comptent pour les machines sont posés, eux, côté
  serveur : hreflang, og:locale et inLanguage dans le balisage.
*/
export default function SelecteurLangue({ compact = false }) {
  const pathname = usePathname() || '/'
  const anglais = estAnglais(pathname)
  const cheminFr = anglais ? versFr(pathname) : pathname

  useEffect(() => {
    document.documentElement.lang = anglais ? 'en' : 'fr'
  }, [anglais])

  const cibleEn = equivalentEn(cheminFr, enSlugs())
  if (!cibleEn) return null   // pas de version anglaise : pas de sélecteur

  const taille = compact ? 11 : 11.5
  const style = (actif) => ({
    fontFamily: "'Neue Montreal', sans-serif",
    fontSize: `${taille}px`,
    fontWeight: 500,
    letterSpacing: '0.08em',
    color: actif ? '#111111' : 'rgba(17,17,17,0.42)',
    textDecoration: 'none',
    padding: '6px 4px',
    lineHeight: 1,
  })

  return (
    <nav aria-label="Langue" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <a href={cheminFr} style={style(!anglais)} aria-current={!anglais ? 'true' : undefined} hrefLang="fr">FR</a>
      <span aria-hidden="true" style={{ color: 'rgba(17,17,17,0.2)', fontSize: `${taille}px` }}>·</span>
      <a href={cibleEn} style={style(anglais)} aria-current={anglais ? 'true' : undefined} hrefLang="en">EN</a>
    </nav>
  )
}
