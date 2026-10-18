'use client'

import { usePathname } from 'next/navigation'
import { estAnglais, versEn, versFr, equivalentEn } from '../lib/i18n'
import { useEnSlugs } from './EnSlugsProvider'

/*
  Bascule français / anglais.

  Deux règles :
  — on ne propose l'anglais que si la page existe vraiment en anglais. Un
    drapeau qui mène à une 404 est pire que pas de drapeau du tout ;
  — depuis une page anglaise, le retour au français est toujours possible :
    toute page anglaise a son équivalent français par construction.

  L'attribut lang de <html> est posé par components/LangueDocument.js, monté
  à la racine : certaines pages n'ont pas de menu, et l'attribut doit y être
  juste quand même.
*/
export default function SelecteurLangue({ compact = false, lien = false, style: styleLien }) {
  const pathname = usePathname() || '/'
  const anglais = estAnglais(pathname)
  const cheminFr = anglais ? versFr(pathname) : pathname

  const slugsEn = useEnSlugs()
  const cibleEn = equivalentEn(cheminFr, slugsEn)
  if (!cibleEn) return null   // pas de version anglaise : pas de sélecteur

  /*
    Forme « lien » : un seul lien, vers l'autre langue, au format des autres
    liens du pied de page. C'est celle du pied de page depuis le 18/10/2026 :
    Ramy ne veut pas du sélecteur dans la barre de navigation, où il élargit
    le groupe de droite et décale le logo.
  */
  if (lien) {
    const cible = anglais ? cheminFr : cibleEn
    return (
      <a href={cible} style={styleLien} hrefLang={anglais ? 'fr' : 'en'}>
        {anglais ? 'Français' : 'English'}
      </a>
    )
  }

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
