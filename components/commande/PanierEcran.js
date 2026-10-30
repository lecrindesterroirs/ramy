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
import { lirePanier, surChangement, changerQuantite, retirerDuPanier, ajouterAuPanier, cleLigne } from '@/lib/panier'
import { VIDE, lireBrouillon, ecrireBrouillon } from '@/lib/brouillonCommande'
import { totaux, problemes } from '@/lib/totauxCommande'
import { conseilsPanier } from '@/lib/conseilsPanier'
import { composerPetitDejeuner, EFFECTIF_MIN, EFFECTIF_MAX } from '@/lib/composerCommande'
import { nettoieCp } from '@/lib/zonesLivraison'
import { completer, retenirClient } from '@/lib/souvenirClient'
import { produitCommandable } from '@/lib/catalogueCommande'
import { euroFr } from '@/lib/prixEntree'
import { EnteteTunnel, BasTunnel, Fleche, Pastille } from './Chrome'

export default function PanierEcran() {
  const router = useRouter()
  const [lignes, setLignes] = useState([])
  const [b, setB] = useState(VIDE)   // identique au rendu serveur : localStorage n'est lu qu'après le montage
  const [pret, setPret] = useState(false)
  const [effectif, setEffectif] = useState('')

  useEffect(() => {
    setLignes(lirePanier())
    const { brouillon, complete } = completer(lireBrouillon())
    setB(complete ? ecrireBrouillon(brouillon) : brouillon)
    setPret(true)
    return surChangement(setLignes)
  }, [])

  const t = totaux(lignes, b)
  const ennuis = problemes(lignes, b).filter(p => p.etape === 1)
  const avis = conseilsPanier(lignes)

  const majCp = (v) => {
    const cp = nettoieCp(v)
    retenirClient({ cp })
    return setB(ecrireBrouillon({ cp }))
  }

  if (!pret) return <div className="cmd"><EnteteTunnel etape={1} /><div className="cmd-centre" /></div>

  if (lignes.length === 0) {
    return (
      <div className="cmd cmd-fixe">
        <EnteteTunnel etape={1} />
        <div className="cmd-centre">
          <p className="cmd-surtitre">Panier</p>
          <h1 className="cmd-h1 cmd-sf">Dites-nous combien vous êtes.</h1>
          <p className="cmd-intro">
            Nous composons le petit-déjeuner avec les quantités que nous servons
            d&apos;habitude. Vous ajustez tout ensuite, rien n&apos;est figé.
          </p>

          {/* Le configurateur reprend la recette qui sert à monter les devis
              dans l'OS : mêmes quantités, mêmes produits. */}
          <form
            className="cmd-composer"
            onSubmit={(e) => {
              e.preventDefault()
              const n = Number(effectif)
              if (!(n >= EFFECTIF_MIN)) return
              const { effectif: retenu, lignes: composees } = composerPetitDejeuner(n)
              for (const l of composees) ajouterAuPanier(l, l.qte)
              setB(ecrireBrouillon({ composePour: retenu }))
            }}
          >
            <label className="cmd-lab" htmlFor="cmd-effectif">Nombre de personnes</label>
            <div className="cmd-composer-ligne">
              <input
                id="cmd-effectif"
                className="cmd-champ cmd-composer-nb"
                inputMode="numeric"
                placeholder="25"
                min={EFFECTIF_MIN}
                max={EFFECTIF_MAX}
                value={effectif}
                onChange={(e) => setEffectif(e.target.value.replace(/\D/g, '').slice(0, 3))}
              />
              <button type="submit" className="cmd-cont" disabled={!(Number(effectif) >= EFFECTIF_MIN)}>
                Composer <Fleche />
              </button>
            </div>
            <p className="cmd-aide">
              À partir de {EFFECTIF_MIN} personnes. Pour un cocktail ou des plateaux repas,
              passez plutôt par la carte.
            </p>
          </form>

          <a className="cmd-retour" href="/creations/petits-dejeuners-et-pauses" style={{ marginTop: '28px' }}>
            Ou parcourir la carte
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="cmd cmd-fixe">
      <EnteteTunnel etape={1} />

      <div className="cmd-corps cmd-corps-panier">
        <div className="cmd-gauche">
          <p className="cmd-surtitre">Panier</p>
          <h1 className="cmd-h1 cmd-sf">Votre commande</h1>
          <p className="cmd-intro">
            {b.composePour > 0
              ? `Composé pour ${b.composePour} personnes — ajustez librement, retirez ce qui ne vous va pas.`
              : `${lignes.length} référence${lignes.length > 1 ? 's' : ''}, livraison du lundi au vendredi dès 6h30.`}
          </p>

          {lignes.map(l => (
            <LignePanier key={cleLigne(l)} ligne={l} />
          ))}

          {/* Ce que Ramy dit au téléphone quand il relit une commande : « trente
              viennoiseries pour quinze personnes, il vous faut trois thermos ».
              Deux conseils au maximum, avec de quoi les suivre d'un clic. */}
          {avis.length > 0 && (
            <div className="cmd-conseils">
              <span className="cmd-lab">Nous vous conseillons</span>
              {avis.map(a => (
                <div className="cmd-conseil" key={a.cle}>
                  <Pastille />
                  <div className="cmd-conseil-texte">
                    <p>{a.titre}</p>
                    <p className="cmd-b">{a.detail}</p>
                  </div>
                  {a.ajout && (
                    <button
                      type="button"
                      className="cmd-conseil-ajout"
                      onClick={() => ajouterAuPanier(ligneDepuisCatalogue(a.ajout.id), a.ajout.qte)}
                    >
                      Ajouter {a.ajout.qte} × {a.ajout.nom}
                      <span>{euroFr(a.ajout.prix * a.ajout.qte)}</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
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
              <p className="cmd-zone">{t.zone.nom} · {t.libelleLivraison.toLowerCase()} {euroFr(t.livraison)} HT.</p>
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

          {/* La vaisselle se coche ici, à l'étape 1 : son prix entre dans le
              total tout de suite, comme la livraison. Rien ne doit apparaître
              au dernier écran. */}
          <button
            type="button"
            className={`cmd-case cmd-case-vaisselle ${b.vaisselle ? 'cmd-case-on' : ''}`}
            onClick={() => setB(ecrireBrouillon({ vaisselle: !b.vaisselle }))}
            aria-pressed={b.vaisselle}
          >
            <span className="cmd-coche" />
            <span>
              Vaisselle réutilisable
              <span className="cmd-case-detail">Assiettes, couverts et verres pour tout le monde, repris avec le reste.</span>
            </span>
            <span className="cmd-case-prix">{euroFr(25)}</span>
          </button>

          <div className="cmd-r"><span>Sous-total</span><b>{euroFr(t.sousTotal)}</b></div>
          {t.zone.ok === true && (
            <div className="cmd-r"><span>{t.libelleLivraison} {t.zone.nom}</span><b>{euroFr(t.livraison)}</b></div>
          )}
          {t.optionVaisselle > 0 && (
            <div className="cmd-r"><span>Vaisselle réutilisable</span><b>{euroFr(t.optionVaisselle)}</b></div>
          )}
          <div className="cmd-rt">
            <span className="cmd-l">Total HT</span>
            <span className="cmd-v">{euroFr(t.ht)}</span>
          </div>
          <div className="cmd-r" style={{ paddingTop: '12px' }}>
            <span>TVA 10 %</span><b>{euroFr(t.tva)}</b>
          </div>
          <div className="cmd-rt cmd-rt-ttc" style={{ border: 'none', margin: 0, paddingTop: '2px' }}>
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

/* Une référence du catalogue, prête à entrer dans le panier. */
function ligneDepuisCatalogue(id) {
  const p = produitCommandable(id)
  return { id: p.id, nom: p.nom, prix: p.prix, img: p.img, famille: p.famille, qteTexte: p.qte }
}

/* Une ligne du panier : vignette, nom, quantité, prix. */
function LignePanier({ ligne }) {
  const cle = cleLigne(ligne)
  const p = produitCommandable(ligne.id)

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
