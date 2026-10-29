'use client'

/*
  Étape 2, la livraison.

  Le créneau suit l'arbitrage de Ramy du 29/10/2026 : 30 minutes par défaut,
  une heure si le client est souple, heure fixe à la minute pour 15 € HT. La
  charte de service du site annonce déjà « tolérance de 30 minutes sur le
  créneau convenu » : les deux textes se tiennent.

  Les quatre champs du bas (accès, contact sur place, portable, société) sont
  ceux qui provoquent les appels aujourd'hui. Ils ne sont pas optionnels.
*/

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { lirePanier, surChangement } from '@/lib/panier'
import { VIDE, lireBrouillon, ecrireBrouillon } from '@/lib/brouillonCommande'
import { problemes, totaux } from '@/lib/totauxCommande'
import { CRENEAUX, LARGEURS, libelleCreneau, largeurDe, raisonFermeture, regimeDuPanier } from '@/lib/reglesCommande'
import { euroFr } from '@/lib/prixEntree'
import { EnteteTunnel, BasTunnel, Fleche, Pastille } from './Chrome'
import Calendrier from './Calendrier'

/*
  Ce qu'on nomme au client quand le bouton est bloqué. « Indiquez l'adresse »
  convient dans un message seul ; dans une énumération il faut un groupe
  nominal, sinon la phrase ne se lit pas.
*/
const MANQUES = {
  date: 'la date',
  heure: "l'heure d'arrivée",
  societe: 'la société',
  adresse: "l'adresse",
  ville: 'la ville',
  contactNom: 'le nom du contact sur place',
  contactTel: 'un portable joignable',
  email: 'votre email',
}

/* « l'heure, la ville et un portable joignable » */
const enumere = (l) =>
  l.length <= 1 ? (l[0] || '') : `${l.slice(0, -1).join(', ')} et ${l[l.length - 1]}`

const LONG = (iso) => iso
  ? new Date(iso + 'T12:00:00Z').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
  : ''

export default function LivraisonEcran() {
  const router = useRouter()
  const [lignes, setLignes] = useState([])
  const [b, setB] = useState(VIDE)   // identique au rendu serveur : localStorage n'est lu qu'après le montage
  const [pret, setPret] = useState(false)
  // Passe à vrai quand le client appuie sur un bouton bloqué : on montre
  // alors ce qui manque, et on souligne les champs concernés.
  const [tente, setTente] = useState(false)
  // L'heure « maintenant » est figée au montage : sans ça, une case du
  // calendrier pourrait se fermer entre deux rendus, sous le doigt du client.
  const maintenant = useMemo(() => new Date(), [])

  useEffect(() => {
    setLignes(lirePanier())
    setB(lireBrouillon())
    setPret(true)
    return surChangement(setLignes)
  }, [])

  const maj = (champs) => setB(ecrireBrouillon(champs))
  const t = totaux(lignes, b)
  const ennuis = problemes(lignes, b, maintenant)
  const bloquantsAvant = ennuis.filter(p => p.etape < 2)
  const miens = ennuis.filter(p => p.etape === 2)
  const raison = raisonFermeture(lignes, maintenant)

  useEffect(() => {
    if (pret && bloquantsAvant.length) router.replace('/commander/panier')
  }, [pret, bloquantsAvant.length, router])

  if (!pret) return <div className="cmd"><EnteteTunnel etape={2} /><div className="cmd-centre" /></div>

  const err = (champ) => miens.find(p => p.champ === champ)
  // Un champ n'est montré du doigt qu'après une tentative : tant que le
  // client remplit, on ne lui met pas du rouge sous les yeux.
  const cl = (champ, base = 'cmd-champ') =>
    `${base}${tente && err(champ) ? ` ${base}-manque` : ''}`

  const listeManques = miens
    .map(p => MANQUES[p.champ])
    .filter((v, i, t) => v && t.indexOf(v) === i)

  const essayer = () => {
    if (miens.length === 0) { router.push('/commander/paiement'); return }
    setTente(true)
    // On amène le client au premier champ qui bloque, sinon il doit le
    // chercher dans une colonne qui défile.
    const premier = miens[0]?.champ
    const cible = document.querySelector(`[data-champ="${premier}"]`)
    if (cible) {
      cible.scrollIntoView({ block: 'center', behavior: 'smooth' })
      if (typeof cible.focus === 'function') setTimeout(() => cible.focus({ preventScroll: true }), 400)
    }
  }

  return (
    <div className="cmd cmd-fixe">
      <EnteteTunnel etape={2} />

      <div className="cmd-corps">
        <div className="cmd-gauche cmd-colle">
          <p className="cmd-surtitre">Livraison</p>
          <h1 className="cmd-h1 cmd-sf">Quelle date souhaitez-vous ?</h1>
          <p className="cmd-intro">Livraison du lundi au vendredi, dès 6h30.</p>

          <div data-champ="date" className={tente && err('date') ? 'cmd-cal-manque' : undefined}>
            <Calendrier
              lignes={lignes}
              valeur={b.date}
              maintenant={maintenant}
              onChange={(d) => maj({ date: d })}
            />
          </div>

          <div className="cmd-avis">
            <Pastille enfant="horloge" />
            <div>
              {regimeDuPanier(lignes) === 'preavis'
                ? <p>Vos plateaux apéritifs demandent 48 heures de préparation.</p>
                : <p>Commande jusqu&apos;à la veille 10h, livraison le lendemain matin.</p>}
              <p className="cmd-b">
                {raison.texte ? `${raison.texte} ` : ''}
                Le premier jour possible est le {LONG(raison.premiere)}.
              </p>
            </div>
          </div>
        </div>

        <div className="cmd-droite">
          <h2 className="cmd-h2 cmd-sf">Votre créneau de livraison</h2>

          <div className="cmd-bloc">
            <label className="cmd-lab" htmlFor="cmd-heure">Heure d&apos;arrivée</label>
            <select
              id="cmd-heure"
              data-champ="heure"
              className={cl('heure', 'cmd-liste')}
              value={b.heure}
              onChange={(e) => maj({ heure: e.target.value })}
            >
              <option value="">Choisir…</option>
              {CRENEAUX.map(c => (
                <optgroup key={c.id} label={c.label}>
                  {c.heures.map(h => <option key={h} value={h}>{h.replace(':', 'h')}</option>)}
                </optgroup>
              ))}
            </select>
            <p className="cmd-aide">
              Choisissez l&apos;heure à laquelle le plateau doit être posé, pas celle de la réunion.
            </p>
          </div>

          {LARGEURS.map(l => (
            <button
              type="button"
              key={l.id}
              className={`cmd-opt ${b.largeur === l.id ? 'cmd-opt-on' : ''}`}
              onClick={() => maj({ largeur: l.id })}
            >
              <span className="cmd-coche" />
              <span>
                <span className="cmd-t" style={{ display: 'block' }}>{l.label}</span>
                <span className="cmd-s">
                  {l.id === 'souple' && 'Vous nous laissez une heure de marge. C\'est ce qui nous aide le plus.'}
                  {l.id === 'standard' && 'Nous arrivons dans la demi-heure annoncée. C\'est notre engagement habituel.'}
                  {l.id === 'fixe' && 'Nous bloquons l\'heure exacte sur la tournée, à la minute convenue.'}
                </span>
              </span>
              <span className="cmd-tag">{l.prix ? `+ ${euroFr(l.prix)} HT` : 'Inclus'}</span>
            </button>
          ))}

          {b.heure && (
            <div className="cmd-cren" style={{ marginTop: '26px' }}>
              <div>
                <p className="cmd-t">Créneau retenu</p>
                <p className="cmd-v">{libelleCreneau(b.heure, b.largeur)}</p>
              </div>
              <span className="cmd-pil">
                {largeurDe(b.largeur).minutes ? `${largeurDe(b.largeur).minutes} min` : 'Heure fixe'}
              </span>
            </div>
          )}

          <div className="cmd-bloc">
            <span className="cmd-lab">Adresse de livraison</span>
            <input className={cl('societe')} data-champ="societe" placeholder="Société" autoComplete="organization"
              value={b.societe} onChange={(e) => maj({ societe: e.target.value })} />
            <div style={{ height: '14px' }} />
            <input className={cl('adresse')} data-champ="adresse" placeholder="Numéro et rue" autoComplete="street-address"
              value={b.adresse} onChange={(e) => maj({ adresse: e.target.value })} />
            <div style={{ height: '14px' }} />
            <div className="cmd-duo">
              <input className="cmd-champ" value={b.cp} readOnly aria-label="Code postal"
                style={{ color: 'var(--text-secondary)' }} />
              <input className={cl('ville')} data-champ="ville" placeholder="Ville" autoComplete="address-level2"
                value={b.ville} onChange={(e) => maj({ ville: e.target.value })} />
            </div>
            <div style={{ height: '14px' }} />
            <textarea className="cmd-champ cmd-texte" placeholder="Étage, code, interphone, quai de livraison, accueil filtré…"
              value={b.acces} onChange={(e) => maj({ acces: e.target.value })} />
            <p className="cmd-aide">
              Le code postal se change dans le panier : il détermine la livraison déjà comptée.
            </p>
          </div>

          <div className="cmd-bloc">
            <span className="cmd-lab">Qui nous accueille</span>
            <div className="cmd-duo">
              <input className={cl('contactNom')} data-champ="contactNom" placeholder="Prénom et nom" autoComplete="name"
                value={b.contactNom} onChange={(e) => maj({ contactNom: e.target.value })} />
              <input className={cl('contactTel')} data-champ="contactTel" placeholder="06 12 34 56 78" inputMode="tel" autoComplete="tel"
                value={b.contactTel} onChange={(e) => maj({ contactTel: e.target.value })} />
            </div>
            <div style={{ height: '14px' }} />
            <input className={cl('email')} data-champ="email" placeholder="Votre email" inputMode="email" autoComplete="email"
              value={b.email} onChange={(e) => maj({ email: e.target.value.trim() })} />
            <p className="cmd-aide">
              Le portable sert le matin de la livraison, s&apos;il faut vous joindre à l&apos;accueil.
            </p>
          </div>
        </div>
      </div>

      <BasTunnel
        retour="/commander/panier"
        retourLabel="Retour au panier"
        manque={tente && listeManques.length > 0 ? (
          <p className="cmd-manque">
            {listeManques.length <= 3
              ? <>Pour passer au règlement, il manque <b>{enumere(listeManques)}</b>.</>
              : <>Il manque encore <b>{listeManques.length} renseignements</b>, à commencer par {listeManques[0]}. Les champs concernés sont signalés.</>}
          </p>
        ) : null}
      >
        <button
          type="button"
          className={`cmd-cont ${miens.length > 0 ? 'cmd-cont-bloque' : ''}`}
          aria-disabled={miens.length > 0}
          onClick={essayer}
        >
          Passer au règlement · {euroFr(t.ttc)} TTC <Fleche />
        </button>
      </BasTunnel>
    </div>
  )
}
