'use client'

/*
  Le geste d'ajout, validé par Ramy le 29/10/2026.

  Il vit SUR LA LIGNE DU PRIX, jamais sur la photo : les photos produit sont le
  point fort du site et ne doivent rien porter.

  Trois états, au même endroit :
  1. au repos, un « + » — trait gris, signe en accent foncé. Un rond
     entièrement gris se lit comme désactivé ;
  2. une seconde après le clic, une coche : elle confirme sans ouvrir le panier ;
  3. ensuite, un réglage « − n + ».

  Sur téléphone, la carte fait environ 160 px de large : le bouton passe sous
  le prix, sur toute la largeur, hauteur unique de 38 px pour les deux états,
  afin que la dernière ligne d'une grille reste régulière.
*/

import { useEffect, useRef, useState } from 'react'
import { ajouterAuPanier, changerQuantite, lirePanier, surChangement, cleLigne, quantiteDe } from '@/lib/panier'
import { produitCommandable } from '@/lib/catalogueCommande'

/*
  variante :
  - 'carte' (défaut) sur une carte de catégorie : le « + » nu sur la ligne du prix ;
  - 'fiche' sur une page produit, où il y a la place d'un vrai libellé et où
    l'ajout doit peser autant que « Obtenir un devis ».
*/
export default function BoutonAjouter({ id, compact = false, variante = 'carte' }) {
  const p = produitCommandable(id)
  const [qte, setQte] = useState(0)
  const [coche, setCoche] = useState(false)
  const [pret, setPret] = useState(false)
  const minuteur = useRef(null)

  useEffect(() => {
    setQte(quantiteDe(id))
    setPret(true)
    const off = surChangement((lignes) => setQte(quantiteDe(id, lignes)))
    return () => { off(); if (minuteur.current) clearTimeout(minuteur.current) }
  }, [id])

  /*
    Rien à vendre en ligne pour cette référence : pas de bouton mort. C'est le
    catalogue (lib/catalogueCommande.js) qui décide.

    Mais on réserve la place : au téléphone le bouton passe sous le prix, et
    sans ce vide la carte voisine remonterait d'une trentaine de pixels. La
    dernière ligne d'une grille à deux colonnes doit rester régulière.
  */
  if (!p || !pret) {
    // Sur une fiche, rien à réserver : la page n'est pas une grille.
    if (variante === 'fiche') return null
    return <span className={`pa pa-vide ${compact ? 'pa-compact' : ''}`} aria-hidden="true" />
  }

  const stop = (e) => { e.preventDefault(); e.stopPropagation() }

  const ligneDe = (n) => {
    const base = { id: p.id, nom: p.nom, prix: p.prix, img: p.img, famille: p.famille, qteTexte: p.qte }
    return p.parfums ? { ...base, options: { parfums: [] } } : base
  }

  const ajoute = (e) => {
    stop(e)
    ajouterAuPanier(ligneDe(1), 1)
    setCoche(true)
    if (minuteur.current) clearTimeout(minuteur.current)
    minuteur.current = setTimeout(() => setCoche(false), 1100)
  }

  const bouge = (e, pas) => {
    stop(e)
    const lignes = lirePanier()
    const l = lignes.find(x => x.id === p.id)
    if (!l) { if (pas > 0) ajoute(e); return }
    changerQuantite(cleLigne(l), l.qte + pas)
  }

  if (variante === 'fiche') {
    return (
      <div className="pa-fiche">
        {qte > 0 && !coche ? (
          <>
            <span className="pa pa-reglage pa-reglage-fiche">
              <button type="button" className="pa-b" onClick={(e) => bouge(e, -1)} aria-label={`Retirer un ${p.nom}`}>−</button>
              <span className="pa-n">{qte}</span>
              <button type="button" className="pa-b" onClick={(e) => bouge(e, +1)} aria-label={`Ajouter un ${p.nom}`}>+</button>
            </span>
            <a className="pa-voir" href="/commander/panier">Voir le panier</a>
          </>
        ) : (
          <button type="button" className={`pa-large ${coche ? 'pa-large-ok' : ''}`} onClick={ajoute}>
            {coche ? 'Ajouté au panier' : 'Ajouter au panier'}
          </button>
        )}
      </div>
    )
  }

  const classe = `pa ${compact ? 'pa-compact' : ''}`

  if (qte > 0 && !coche) {
    return (
      <span className={`${classe} pa-reglage`} onClick={stop}>
        <button type="button" className="pa-b" onClick={(e) => bouge(e, -1)} aria-label={`Retirer un ${p.nom}`}>−</button>
        <span className="pa-n">{qte}</span>
        <button type="button" className="pa-b" onClick={(e) => bouge(e, +1)} aria-label={`Ajouter un ${p.nom}`}>+</button>
      </span>
    )
  }

  return (
    <button
      type="button"
      className={`${classe} pa-rond ${coche ? 'pa-ok' : ''}`}
      onClick={ajoute}
      aria-label={`Ajouter ${p.nom} au panier`}
      title="Ajouter au panier"
    >
      {coche
        ? <svg width="13" height="10" viewBox="0 0 14 11" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M1 5.4l4 4L13 1.4" /></svg>
        : <span aria-hidden="true">+</span>}
    </button>
  )
}
