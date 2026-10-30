'use client'

/*
  Le bandeau de l'espace client : le logo, les deux pages, et la sortie.
  Volontairement plat — trois liens, pas de menu.
*/

import { usePathname, useRouter } from 'next/navigation'

export default function BandeauCompte() {
  const chemin = usePathname()
  const router = useRouter()

  const deconnecter = async () => {
    await fetch('/api/compte/deconnexion', { method: 'POST' })
    router.push('/compte/connexion')
    router.refresh()
  }

  const lien = (href, texte) => (
    <a className={`cpt-lien ${chemin === href ? 'cpt-lien-actif' : ''}`} href={href}>{texte}</a>
  )

  return (
    <div className="cpt-bandeau">
      <a className="cmd-logo" href="/">L&apos;ÉCRIN<em>TRAITEUR</em></a>
      <div className="cpt-liens">
        {lien('/compte', 'Mes commandes')}
        {lien('/compte/informations', 'Mes informations')}
        <button type="button" className="cpt-lien" onClick={deconnecter}>Se déconnecter</button>
      </div>
    </div>
  )
}
