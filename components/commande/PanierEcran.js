'use client'

/*
  Étape 1, le panier.

  Deux choix de conception à garder en tête :

  - le CODE POSTAL est demandé ICI, pas à l'étape 2. Le document de conception
    interdit qu'un frais apparaisse au dernier écran ; si l'adresse n'arrivait
    qu'après, le total bougerait sous les yeux du client.
  - le panier CONSEILLE : il reprend les repères que Ramy donne au téléphone
    (« trois thermos servent 18 à 24 tasses »). C'est le seul endroit où le
    métier passe dans l'écran, et ça évite l'appel « on n'avait pas assez de
    café ».
*/

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { lirePanier, surChangement, changerQuantite, retirerDuPanier, changerOptions, cleLigne } from '@/lib/panier'
import { VIDE, lireBrouillon, ecrireBrouillon } from '@/lib/brouillonCommande'
import { totaux, problemes, conseils, parfumsManquants } from '@/lib/totauxCommande'
import { nettoieCp } from '@/lib/zonesLivraison'
import { produitCommandable, PARFUMS } from '@/lib/catalogueCommande'
import { euroFr } from '@/lib/prixEntree'
import { EnteteTunnel, BasTunnel, Fleche, Pastille } from './Chrome'

export default function PanierEcran() {
  const router = useRouter()
  const [lignes, setLignes] = useState([])
  const [b, setB] = useState(VIDE)   // identique au rendu serveur : localStorage n'est lu qu'après le montage
  const [pret, setPret] = useState(false)

  useEffect(() => {
    setLignes(lirePanier())
    setB(lireBrouillon())
    setPret(true)
    return surChangement(setLignes)
  }, [])

  const t = totaux(lignes, b)
  const ennuis = problemes(lignes, b).filter(p => p.etape === 1)
  const avis = conseils(lignes)

  const majCp = (v) => setB(ecrireBrouillon({ cp: nettoieCp(v) }))

  if (!pret) return <div className="cmd"><EnteteTunnel etape={1} /><div className="cmd-centre" /></div>

  if (lignes.length === 0) {
    return (
      <div className="cmd">
        <EnteteTunnel etape={1} />
        <div className="cmd-centre">
          <p className="cmd-surtitre">Panier</p>
          <h1 className="cmd-h1 cmd-sf">Votre panier est vide.</h1>
          <p className="cmd-intro">
            Ajoutez des viennoiseries, des madeleines ou un thermos depuis la carte :
            le bouton « + » se trouve à côté du prix.
          </p>
          <a className="cmd-cont" href="/creations/petits-dejeuners-et-pauses">Voir la carte <Fleche /></a>
        </div>
      </div>
    )
  }

  return (
    <div className="cmd">
      <EnteteTunnel etape={1} />

      <div className="cmd-corps cmd-corps-panier">
        <div className="cmd-gauche">
          <p className="cmd-surtitre">Panier</p>
          <h1 className="cmd-h1 cmd-sf">Votre commande</h1>
          <p className="cmd-intro">
            {lignes.length} référence{lignes.length > 1 ? 's' : ''}, livraison du lundi au vendredi dès 6h30.
          </p>

          {lignes.map(l => (
            <LignePanier key={cleLigne(l)} ligne={l} />
          ))}

          {avis.map((a, i) => (
            <div className="cmd-avis" key={i}>
              <Pastille />
              <div>
                <p>{a.titre}</p>
                <p className="cmd-b">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cmd-droite">
          <h2 className="cmd-h2 cmd-sf">Récapitulatif</h2>

          <div className="cmd-bloc">
            <label className="cmd-lab" htmlFor="cmd-cp">Code postal de livraison</label>
            <input
              id="cmd-cp"
              className="cmd-champ"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="75002"
              value={b.cp}
              onChange={(e) => majCp(e.target.value)}
            />
            {t.zone.ok === true && (
              <p className="cmd-zone">{t.zone.nom} · livraison {euroFr(t.zone.frais)} HT, reprise comprise.</p>
            )}
            {t.zone.ok === false && (
              <p className="cmd-zone cmd-zone-non">
                Nous livrons en ligne Paris, 92, 93 et 94. Pour le {t.zone.dept},{' '}
                <a href="/devis" style={{ color: 'inherit' }}>demandez un devis</a> : nous chiffrons la livraison.
              </p>
            )}
            {t.zone.ok === null && (
              <p className="cmd-aide">Le total affiche la livraison dès que le code postal est complet.</p>
            )}
          </div>

          <div className="cmd-r"><span>Sous-total</span><b>{euroFr(t.sousTotal)}</b></div>
          {t.zone.ok === true && (
            <div className="cmd-r"><span>Livraison {t.zone.nom}</span><b>{euroFr(t.livraison)}</b></div>
          )}
          <div className="cmd-rt">
            <span className="cmd-l">Total HT</span>
            <span className="cmd-v">{euroFr(t.ht)}</span>
          </div>
          <div className="cmd-r" style={{ paddingTop: '12px' }}>
            <span>TVA 10 %</span><b>{euroFr(t.tva)}</b>
          </div>
          <div className="cmd-rt" style={{ border: 'none', margin: 0, paddingTop: '4px' }}>
            <span className="cmd-l">Total TTC</span>
            <span className="cmd-v">{euroFr(t.ttc)}</span>
          </div>

          <p className="cmd-mini">
            Minimum de commande <b>{t.minimumAtteint ? 'atteint' : `non atteint`}</b> · {t.minimum} € HT<br />
            {t.zone.ok === true
              ? <>La livraison est comptée dès maintenant : <b>aucun frais n&apos;apparaîtra à la fin</b>.</>
              : <>La livraison s&apos;ajoute dès que le code postal est renseigné.</>}
          </p>
        </div>
      </div>

      <BasTunnel retour="/creations/petits-dejeuners-et-pauses" retourLabel="Continuer mes achats" erreur={ennuis[0]?.texte}>
        {/* Bloqué mais cliquable, comme à l'étape 2 : le bouton amène au
            point qui coince plutôt que de rester muet. */}
        <button
          type="button"
          className={`cmd-cont ${ennuis.length > 0 ? 'cmd-cont-bloque' : ''}`}
          aria-disabled={ennuis.length > 0}
          onClick={() => {
            if (ennuis.length === 0) { router.push('/commander/livraison'); return }
            if (ennuis[0].champ === 'cp') document.getElementById('cmd-cp')?.focus()
            else document.querySelector('.cmd-reste, .cmd-mini')?.scrollIntoView({ block: 'center', behavior: 'smooth' })
          }}
        >
          Choisir la date <Fleche />
        </button>
      </BasTunnel>
    </div>
  )
}

/* Une ligne, avec son réglage de quantité et, pour un coffret Mado, ses parfums. */
function LignePanier({ ligne }) {
  const cle = cleLigne(ligne)
  const p = produitCommandable(ligne.id)
  const reste = parfumsManquants(ligne)
  const parfums = ligne.options?.parfums || []

  const bougeParfum = (id, pas) => {
    const actuels = parfums.filter(o => o.qte > 0)
    const i = actuels.findIndex(o => o.id === id)
    const qte = (i >= 0 ? actuels[i].qte : 0) + pas
    if (qte < 0) return
    if (pas > 0 && reste <= 0) return
    const suivants = i >= 0
      ? actuels.map(o => (o.id === id ? { ...o, qte } : o)).filter(o => o.qte > 0)
      : [...actuels, { id, qte }]
    changerOptions(cle, { parfums: suivants })
  }

  return (
    <div className="cmd-ligne">
      <div className="cmd-vign">
        {ligne.img ? <img src={ligne.img} alt="" loading="lazy" /> : null}
      </div>
      <div>
        <p className="cmd-nom">{ligne.nom}</p>
        <p className="cmd-det">
          {ligne.qteTexte || p?.qte || ''}
          {ligne.qteTexte || p?.qte ? ' · ' : ''}
          {euroFr(ligne.prix)} l&apos;unité
        </p>
        <button type="button" className="cmd-sup" onClick={() => retirerDuPanier(cle)}>Retirer</button>

        {p?.parfums ? (
          <div className="cmd-parfums">
            <span className="cmd-lab">
              Parfums · {p.parfums} madeleines à répartir
            </span>
            <div className="cmd-parfums-grille">
              {PARFUMS.map(f => {
                const q = parfums.find(o => o.id === f.id)?.qte || 0
                return (
                  <div className="cmd-parfum" key={f.id}>
                    <span>{f.label}</span>
                    <span className="cmd-qte">
                      <button type="button" onClick={() => bougeParfum(f.id, -1)} disabled={q === 0} aria-label={`Moins de ${f.label}`}>−</button>
                      <span className="cmd-q">{q}</span>
                      <button type="button" onClick={() => bougeParfum(f.id, +1)} disabled={reste <= 0} aria-label={`Plus de ${f.label}`}>+</button>
                    </span>
                  </div>
                )
              })}
            </div>
            {reste > 0 && <p className="cmd-reste">Reste {reste} madeleine{reste > 1 ? 's' : ''} à choisir.</p>}
          </div>
        ) : null}
      </div>
      <span className="cmd-qte">
        <button type="button" onClick={() => changerQuantite(cle, ligne.qte - 1)} aria-label="Retirer un">−</button>
        <span className="cmd-q">{ligne.qte}</span>
        <button type="button" onClick={() => changerQuantite(cle, ligne.qte + 1)} aria-label="Ajouter un">+</button>
      </span>
      <div className="cmd-pr">{euroFr(ligne.prix * ligne.qte)}</div>
    </div>
  )
}
