'use client'

import Image from 'next/image'
import { useState, Fragment } from 'react'
import CategoryTabs, { DEFAULT_SORTS } from '../CategoryTabs'
import EncartDevisMobile from '../EncartDevisMobile'

/*
  Grille des pages de la carte (refonte du 23/10/2026, chantier 5).
  Seul îlot client de ces pages : il reçoit une liste LÉGÈRE de cartes
  { href, nom, img, prix (nombre ou null), prixTexte, unite, section } déjà
  calculée côté serveur ; aucune donnée de catalogue n'est importée ici.

  - Barre collante : onglets de catégories, tri, et filtres par section,
    accessibles pendant tout le défilement.
  - Par défaut, la carte est rangée par sections. Sur mobile, chaque section
    défile à l'horizontale : la page ne s'étire plus sur des milliers de pixels.
  - Cartes sobres (.ev-carte) : photo, nom, prix, carte entière cliquable.
  Styles : app/globals.css, préfixe .pgr-.
*/
const T = {
  fr: { tous: 'Tout', produits: (n) => `${n} produit${n > 1 ? 's' : ''}`, voirTout: (n) => `Voir les ${n}` },
  en: { tous: 'All', produits: (n) => `${n} product${n > 1 ? 's' : ''}`, voirTout: (n) => `See all ${n}` },
}

const trier = (liste, tri) => {
  const a = [...liste]
  const p = (x) => (x.prix == null ? Infinity : x.prix)
  if (tri === 'Prix croissant') return a.sort((x, y) => p(x) - p(y))
  if (tri === 'Prix décroissant') return a.sort((x, y) => (y.prix ?? -1) - (x.prix ?? -1))
  if (tri === 'Nouveautés') return a.reverse()
  return a
}

function Carte({ p, priority = false }) {
  return (
    <a href={p.href} className="ev-carte pgr-carte">
      <span className="ev-carte-img">
        {p.img
          ? <Image fill sizes="(max-width: 768px) 46vw, (max-width: 1200px) 33vw, 25vw" src={p.img} alt={p.nom} priority={priority} style={{ objectFit: 'cover', objectPosition: p.imgPos || 'center' }} />
          : <span className="pgr-sans-photo">{p.nom}</span>}
      </span>
      <span className="ev-carte-nom">{p.nom}</span>
      <span className="ev-carte-prix">{p.prixTexte}</span>
      {p.unite && <span className="ev-carte-unite">{p.unite}</span>}
    </a>
  )
}

export default function ProductsGrid({ produits = [], sections = [], lang = "fr", encart = false }) {
  const en = lang === 'en'
  const L = T[en ? 'en' : 'fr']
  const [tri, setTri] = useState('En vedette')
  const [filtre, setFiltre] = useState('')
  const ordre = sections.length ? sections : [...new Set(produits.map(p => p.section).filter(Boolean))]
  const visibles = trier(filtre ? produits.filter(p => p.section === filtre) : produits, tri)
  const parSections = !filtre && tri === 'En vedette' && ordre.length > 1

  return (
    <div id="carte" className="pgr">
      <div className="pgr-barre">
        <CategoryTabs sort={tri} onSort={setTri} count={visibles.length} sorts={DEFAULT_SORTS} lang={lang} />
        {ordre.length > 1 && (
          <div className="pgr-filtres" role="group" aria-label={en ? 'Filter by section' : 'Filtrer par section'}>
            <button type="button" className={!filtre ? 'actif' : ''} aria-pressed={!filtre} onClick={() => setFiltre('')}>{L.tous}</button>
            {ordre.map(s => (
              <button type="button" key={s} className={filtre === s ? 'actif' : ''} aria-pressed={filtre === s} onClick={() => setFiltre(filtre === s ? '' : s)}>{s}</button>
            ))}
          </div>
        )}
      </div>

      {parSections ? (
        <div className="pgr-sections">
          {ordre.map((s, i) => {
            const items = visibles.filter(p => p.section === s)
            if (!items.length) return null
            return (
              <Fragment key={s}>
                <section className="pgr-section">
                  <div className="pgr-section-tete">
                    <h3 className="ev-h3">{s}</h3>
                    <span className="pgr-compte">{L.produits(items.length)}</span>
                  </div>
                  <div className="pgr-rangee">
                    {items.map((p, j) => <Carte key={p.href + j} p={p} priority={i === 0 && j < 2} />)}
                  </div>
                </section>
                {encart && !en && i === 0 && <EncartDevisMobile />}
              </Fragment>
            )
          })}
        </div>
      ) : (
        <div className="pgr-grille">
          {visibles.map((p, j) => <Carte key={p.href + j} p={p} priority={j < 2} />)}
        </div>
      )}
    </div>
  )
}
