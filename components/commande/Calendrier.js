'use client'

/*
  Le calendrier de l'étape 2. La règle ne se lit pas, elle se voit : les dates
  impossibles sont barrées (grisées, non cliquables), et une ligne sous le
  calendrier dit LAQUELLE des deux règles a joué. Sans cette ligne, le client
  croit à un bug et il appelle — c'est exactement ce que le tunnel doit éviter.
*/

import { useMemo, useState } from 'react'
import { estLivrable, premiereDateLivrable, aParis } from '@/lib/reglesCommande'

const MOIS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
const JOURS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
const iso = (a, m, j) => `${a}-${String(m + 1).padStart(2, '0')}-${String(j).padStart(2, '0')}`

export default function Calendrier({ lignes, valeur, onChange, maintenant }) {
  const premiere = premiereDateLivrable(lignes, maintenant)
  const depart = valeur || premiere
  const [annee, setAnnee] = useState(+depart.slice(0, 4))
  const [mois, setMois] = useState(+depart.slice(5, 7) - 1)

  // Le mois du jour est la borne basse : on ne feuillette pas vers le passé.
  const auj = aParis(maintenant)
  const avant = annee * 12 + mois <= (auj.annee * 12 + auj.mois - 1)

  const cases = useMemo(() => {
    const premierJour = new Date(Date.UTC(annee, mois, 1)).getUTCDay()  // 0 dimanche
    const decalage = (premierJour + 6) % 7                              // lundi en tête
    const nb = new Date(Date.UTC(annee, mois + 1, 0)).getUTCDate()
    const out = []
    for (let i = 0; i < decalage; i++) out.push(null)
    for (let j = 1; j <= nb; j++) {
      const d = iso(annee, mois, j)
      out.push({ jour: j, date: d, ouvert: estLivrable(d, lignes, maintenant) })
    }
    while (out.length % 7 !== 0) out.push(null)
    return out
  }, [annee, mois, lignes, maintenant])

  const bouge = (pas) => {
    const t = annee * 12 + mois + pas
    setAnnee(Math.floor(t / 12))
    setMois(((t % 12) + 12) % 12)
  }

  return (
    <div>
      <div className="cmd-mois">
        <button type="button" onClick={() => bouge(-1)} disabled={avant} aria-label="Mois précédent">‹</button>
        <span className="cmd-m">{MOIS[mois]} {annee}</span>
        <button type="button" onClick={() => bouge(1)} aria-label="Mois suivant">›</button>
      </div>
      <div className="cmd-sem">{JOURS.map(j => <i key={j}>{j}</i>)}</div>
      <div className="cmd-jours">
        {cases.map((c, i) => {
          if (!c) return <div key={`v${i}`} className="cmd-c cmd-c-off" aria-hidden="true"><span /></div>
          const choisie = c.date === valeur
          return (
            <button
              type="button"
              key={c.date}
              className={`cmd-c ${choisie ? 'cmd-c-sel' : ''} ${c.ouvert ? '' : 'cmd-c-off'}`}
              onClick={() => c.ouvert && onChange(c.date)}
              disabled={!c.ouvert}
              aria-pressed={choisie}
              aria-label={`${c.jour} ${MOIS[mois]}${c.ouvert ? '' : ', non disponible'}`}
            >
              <span>{c.jour}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
