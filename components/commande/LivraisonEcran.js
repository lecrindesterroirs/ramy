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
import { HEURES, MINUTES, libelleCreneau, finParDefaut, raisonFermeture, regimeDuPanier } from '@/lib/reglesCommande'
import { PAYS, nomDuPays } from '@/lib/paysFacturation'
import { completer, retenirClient } from '@/lib/souvenirClient'
import { euroFr } from '@/lib/prixEntree'
import { EnteteTunnel, BasTunnel, Fleche, Pastille, Crayon } from './Chrome'
import Calendrier from './Calendrier'

/*
  Ce qu'on nomme au client quand le bouton est bloqué. « Indiquez l'adresse »
  convient dans un message seul ; dans une énumération il faut un groupe
  nominal, sinon la phrase ne se lit pas.
*/
const MANQUES = {
  date: 'la date',
  heure: 'le créneau de livraison',
  factEntite: "l'entité à facturer",
  factAdresse: "l'adresse de facturation",
  factCp: 'le code postal de facturation',
  factVille: 'la ville de facturation',
  factPays: 'le pays de facturation',
  societe: 'la société',
  adresse: "l'adresse",
  ville: 'la ville',
  contactNom: 'le nom du contact sur place',
  contactTel: 'un portable joignable',
  email: 'votre email',
}

/* « 30 min », « 1 h », « 1 h 30 » */
function dureeLisible(debut, fin) {
  const [hd, md] = debut.split(':').map(Number)
  const [hf, mf] = fin.split(':').map(Number)
  const n = (hf * 60 + mf) - (hd * 60 + md)
  if (n < 60) return `${n} min`
  const h = Math.floor(n / 60), r = n % 60
  return r ? `${h} h ${r}` : `${h} h`
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

  // Au premier affichage, on complète les trous avec ce que le navigateur
  // sait déjà du client : il a peut-être demandé un devis la semaine passée.
  const [preRempli, setPreRempli] = useState(false)

  useEffect(() => {
    setLignes(lirePanier())
    const { brouillon, complete } = completer(lireBrouillon())
    setB(complete ? ecrireBrouillon(brouillon) : brouillon)
    setPreRempli(p => p || complete)
    setPret(true)
    return surChangement(setLignes)
  }, [])

  const maj = (champs) => {
    retenirClient(champs)          // on garde pour la prochaine fois
    return setB(ecrireBrouillon(champs))
  }
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

  // Une saisie fautive se lit telle quelle ; les champs vides se résument.
  const explicite = miens.find(p => p.explicite)
  const listeManques = miens
    .filter(p => !p.explicite)
    .map(p => MANQUES[p.champ])
    .filter((v, i, t) => v && t.indexOf(v) === i)

  /*
    Passer à une facturation distincte en RECOPIANT l'adresse de livraison :
    le client n'a plus qu'à corriger ce qui diffère, souvent la seule raison
    sociale. Ouvrir des champs vides l'obligerait à tout retaper.
  */
  const dissocier = () => maj({
    factMeme: false,
    factEntite: b.factEntite || b.societe,
    factAdresse: b.factAdresse || b.adresse,
    factCp: b.factCp || b.cp,
    factVille: b.factVille || b.ville,
    factPays: b.factPays || 'FR',
  })

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
        <div className="cmd-gauche">
          <p className="cmd-surtitre">Livraison</p>
          <h1 className="cmd-h1 cmd-sf">Quelle date souhaitez-vous ?</h1>
          <p className="cmd-intro">
            Livraison du lundi au vendredi, dès 6h30.
            {preRempli && ' Vos coordonnées sont reprises de votre dernière demande — corrigez-les si besoin.'}
          </p>

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
            {/* Quatre menus : heure et minutes de chaque bout du créneau.
                Choisir le début propose une fin trente minutes plus tard,
                que le client peut élargir : un créneau plus large nous aide à tenir
                l'heure. */}
            <div className="cmd-creneau">
              <div>
                <span className="cmd-lab">Début du créneau</span>
                <div className="cmd-deux">
                  <select
                    className={cl('heure', 'cmd-liste')}
                    data-champ="heure"
                    aria-label="Heure de début"
                    value={b.heure.split(':')[0] || ''}
                    onChange={(e) => {
                      const debut = `${e.target.value}:${b.heure.split(':')[1] || '00'}`
                      maj({ heure: debut, heureFin: b.heureFin || finParDefaut(debut) })
                    }}
                  >
                    <option value="">—</option>
                    {HEURES.map(h => <option key={h} value={h}>{h}h</option>)}
                  </select>
                  <select
                    className="cmd-liste"
                    aria-label="Minutes de début"
                    value={b.heure.split(':')[1] || ''}
                    disabled={!b.heure.split(':')[0]}
                    onChange={(e) => {
                      const debut = `${b.heure.split(':')[0]}:${e.target.value}`
                      maj({ heure: debut, heureFin: finParDefaut(debut) })
                    }}
                  >
                    <option value="">—</option>
                    {MINUTES.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
              </div>

              <div className="cmd-tiret" aria-hidden="true">—</div>

              <div>
                <span className="cmd-lab">Fin du créneau</span>
                <div className="cmd-deux">
                  <select
                    className="cmd-liste"
                    aria-label="Heure de fin"
                    value={b.heureFin.split(':')[0] || ''}
                    onChange={(e) => maj({ heureFin: `${e.target.value}:${b.heureFin.split(':')[1] || '00'}` })}
                  >
                    <option value="">—</option>
                    {HEURES.map(h => <option key={h} value={h}>{h}h</option>)}
                  </select>
                  <select
                    className="cmd-liste"
                    aria-label="Minutes de fin"
                    value={b.heureFin.split(':')[1] || ''}
                    disabled={!b.heureFin.split(':')[0]}
                    onChange={(e) => maj({ heureFin: `${b.heureFin.split(':')[0]}:${e.target.value}` })}
                  >
                    <option value="">—</option>
                    {MINUTES.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {b.heure && b.heureFin && !err('heure') && (
              <div className="cmd-cren">
                <div>
                  <p className="cmd-t">Créneau retenu</p>
                  <p className="cmd-v">{libelleCreneau(b.heure, b.heureFin)}</p>
                </div>
                <span className="cmd-pil">{dureeLisible(b.heure, b.heureFin)}</span>
              </div>
            )}

            <p className="cmd-aide">
              Donnez le moment où le plateau doit être posé, pas celui de la réunion.
              Trente minutes au minimum : un créneau plus large nous aide à tenir l&apos;heure.
            </p>
          </div>

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
              <input className={cl('contactTel')} data-champ="contactTel" placeholder="06 12 34 56 78 ou +44 7700 900000" inputMode="tel" autoComplete="tel"
                value={b.contactTel} onChange={(e) => maj({ contactTel: e.target.value })} />
            </div>
            <div style={{ height: '14px' }} />
            <input className={cl('email')} data-champ="email" placeholder="Votre email" inputMode="email" autoComplete="email"
              value={b.email} onChange={(e) => maj({ email: e.target.value.trim() })} />
            <p className="cmd-aide">
              Le portable sert le matin de la livraison, s&apos;il faut vous joindre à l&apos;accueil.
              Un numéro étranger s&apos;écrit avec son indicatif.
            </p>
          </div>

          <div className="cmd-bloc">
            <span className="cmd-lab">Facturation</span>

            {/* L'entité qui paie n'est pas toujours celle qui reçoit : un siège
                règle pour une agence, un cabinet pour son client. Quand c'est la
                même, la case recopie l'adresse de livraison et le bloc se ferme. */}
            <button
              type="button"
              className={`cmd-case ${b.factMeme ? 'cmd-case-on' : ''}`}
              onClick={() => (b.factMeme ? dissocier() : maj({ factMeme: true }))}
              aria-pressed={b.factMeme}
            >
              <span className="cmd-coche" />
              <span>Facturer à la même adresse que la livraison</span>
            </button>

            {/* L'adresse recopiée reste sous les yeux : le client voit ce qui
                ira sur sa facture sans avoir à décocher. Le crayon ouvre les
                champs DÉJÀ remplis avec cette adresse — s'il ne change que la
                raison sociale, il n'a qu'un mot à taper. */}
            {b.factMeme && (
              <div className="cmd-recap">
                <div>
                  <p className="cmd-recap-nom">{b.societe || <span className="cmd-recap-vide">Société à renseigner</span>}</p>
                  <p className="cmd-recap-ligne">
                    {[b.adresse, [b.cp, b.ville].filter(Boolean).join(' ')].filter(Boolean).join(', ') || '—'}
                  </p>
                  <p className="cmd-recap-ligne">France</p>
                </div>
                <button type="button" className="cmd-crayon" onClick={dissocier}>
                  <Crayon /> Modifier
                </button>
              </div>
            )}

            {!b.factMeme && (
              <div style={{ marginTop: '16px' }}>
                <input className={cl('factEntite')} data-champ="factEntite" placeholder="Entité à facturer"
                  autoComplete="organization"
                  value={b.factEntite} onChange={(e) => maj({ factEntite: e.target.value })} />
                <div style={{ height: '14px' }} />
                <input className={cl('factAdresse')} data-champ="factAdresse" placeholder="Numéro et rue"
                  value={b.factAdresse} onChange={(e) => maj({ factAdresse: e.target.value })} />
                <div style={{ height: '14px' }} />
                <div className="cmd-duo">
                  <input className={cl('factCp')} data-champ="factCp" placeholder="Code postal" inputMode="numeric"
                    value={b.factCp} onChange={(e) => maj({ factCp: e.target.value })} />
                  <input className={cl('factVille')} data-champ="factVille" placeholder="Ville"
                    value={b.factVille} onChange={(e) => maj({ factVille: e.target.value })} />
                </div>
                <div style={{ height: '14px' }} />
                <select className={cl('factPays', 'cmd-liste')} data-champ="factPays" aria-label="Pays de facturation"
                  value={b.factPays} onChange={(e) => maj({ factPays: e.target.value })}>
                  {PAYS.map(([code, nom]) => <option key={code} value={code}>{nom}</option>)}
                </select>
                <button type="button" className="cmd-sup" style={{ marginTop: '12px' }}
                  onClick={() => maj({ factMeme: true })}>
                  Reprendre l&apos;adresse de livraison
                </button>
              </div>
            )}

            <div style={{ height: '14px' }} />
            <div className="cmd-duo">
              <input className={cl('emailFacturation')} data-champ="emailFacturation"
                placeholder="Email de facturation (facultatif)" inputMode="email"
                value={b.emailFacturation} onChange={(e) => maj({ emailFacturation: e.target.value.trim() })} />
              <input className="cmd-champ" placeholder="Bon de commande (facultatif)"
                value={b.factReference} onChange={(e) => maj({ factReference: e.target.value })} />
            </div>
            <p className="cmd-aide">
              Si votre comptabilité exige un numéro de bon de commande, il figurera sur la facture.
            </p>
          </div>
        </div>
      </div>

      <BasTunnel
        retour="/commander/panier"
        retourLabel="Retour au panier"
        manque={tente && explicite ? (
          <p className="cmd-manque">{explicite.texte}</p>
        ) : tente && listeManques.length > 0 ? (
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
