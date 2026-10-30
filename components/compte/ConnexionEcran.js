'use client'

/*
  Connexion, création de compte et mot de passe oublié, sur un seul écran.

  Trois formulaires séparés auraient fait trois pages pour un geste qui dure
  dix secondes. Ici le client bascule d'un mode à l'autre sans quitter la page
  ni reperdre ce qu'il a tapé.

  Aucun message ne laisse deviner si une adresse a un compte : la création
  répond toujours la même chose, la connexion aussi, et « mot de passe oublié »
  également. C'est la règle du brief, et elle se voit dans les textes.
*/

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { EnteteSimple, Fleche } from '../commande/Chrome'

const MODES = {
  connexion: { titre: 'Votre espace', bouton: 'Se connecter' },
  creation: { titre: 'Créer votre compte', bouton: 'Créer le compte' },
  oubli: { titre: 'Mot de passe oublié', bouton: 'Recevoir un lien' },
}

export default function ConnexionEcran() {
  const router = useRouter()
  const params = useSearchParams()
  const suite = params.get('suite') || '/compte'

  const [mode, setMode] = useState('connexion')
  const [c, setC] = useState({ email: '', motDePasse: '', nom: '', societe: '', telephone: '', website: '' })
  const [envoi, setEnvoi] = useState(false)
  const [erreur, setErreur] = useState(null)
  const [fait, setFait] = useState(null)

  const maj = (champs) => setC(v => ({ ...v, ...champs }))
  const M = MODES[mode]

  const envoyer = async (e) => {
    e.preventDefault()
    setEnvoi(true); setErreur(null); setFait(null)
    try {
      if (mode === 'oubli') {
        await fetch('/api/compte/oubli', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: c.email }),
        })
        setFait("Si un compte existe pour cette adresse, un lien de réinitialisation vient d'y être envoyé.")
        setEnvoi(false)
        return
      }
      if (mode === 'creation') {
        const r = await fetch('/api/compte/inscription', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(c),
        })
        const d = await r.json()
        if (!r.ok) { setErreur(d.erreur || 'Création impossible.'); setEnvoi(false); return }
        /*
          Le compte n'est pas encore ouvert : il attend le clic sur le lien
          envoyé à cette adresse. On ne connecte donc personne ici. C'est la
          barrière qui empêche quelqu'un de s'inscrire avec l'adresse d'un
          vrai client pour voir ses commandes.
        */
        if (d.confirmation) {
          setFait(`Un lien vient de partir vers ${c.email}. Ouvrez-le pour activer votre compte : il est valable 24 heures.`)
          setEnvoi(false)
          return
        }
        // Sans l'OS (développement), le compte est utilisable tout de suite :
        // on enchaîne sur la connexion, le client ne doit pas retaper.
      }
      const r = await fetch('/api/compte/connexion', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: c.email, motDePasse: c.motDePasse }),
      })
      const d = await r.json()
      if (!r.ok) { setErreur(d.erreur || 'Adresse ou mot de passe incorrect.'); setEnvoi(false); return }
      router.push(suite)
      router.refresh()
    } catch {
      setErreur('Connexion interrompue. Réessayez.')
      setEnvoi(false)
    }
  }

  return (
    <div className="cmd">
      <EnteteSimple />

      <div className="cpt-corps cpt-etroit">
        <p className="cmd-surtitre">Espace client</p>
        <h1 className="cmd-h1 cmd-sf">{M.titre}</h1>
        <p className="cmd-intro">
          {mode === 'connexion' && 'Retrouvez vos commandes et recommandez en deux clics.'}
          {mode === 'creation' && 'Vos informations seront reprises à chaque commande. Vous ne les retaperez plus. Nous vous envoyons un lien pour confirmer votre adresse.'}
          {mode === 'oubli' && 'Indiquez votre adresse : nous vous envoyons un lien pour en choisir un nouveau.'}
        </p>

        <form onSubmit={envoyer}>
          {mode === 'creation' && (
            <>
              <input className="cmd-champ" placeholder="Prénom et nom" autoComplete="name"
                value={c.nom} onChange={(e) => maj({ nom: e.target.value })} />
              <div style={{ height: '14px' }} />
              <input className="cmd-champ" placeholder="Société" autoComplete="organization"
                value={c.societe} onChange={(e) => maj({ societe: e.target.value })} />
              <div style={{ height: '14px' }} />
              <input className="cmd-champ" placeholder="Téléphone" inputMode="tel" autoComplete="tel"
                value={c.telephone} onChange={(e) => maj({ telephone: e.target.value })} />
              <div style={{ height: '14px' }} />
              {/* Piège à robots : un humain ne le voit pas. */}
              <input tabIndex={-1} autoComplete="off" aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px' }}
                value={c.website} onChange={(e) => maj({ website: e.target.value })} />
            </>
          )}

          <input className="cmd-champ" type="email" placeholder="Adresse email" autoComplete="email" required
            value={c.email} onChange={(e) => maj({ email: e.target.value.trim() })} />

          {mode !== 'oubli' && (
            <>
              <div style={{ height: '14px' }} />
              <input className="cmd-champ" type="password" placeholder="Mot de passe" required
                autoComplete={mode === 'creation' ? 'new-password' : 'current-password'}
                minLength={mode === 'creation' ? 8 : undefined}
                value={c.motDePasse} onChange={(e) => maj({ motDePasse: e.target.value })} />
              {mode === 'creation' && <p className="cmd-aide">Huit caractères au minimum.</p>}
            </>
          )}

          {erreur && <p className="cmd-erreur" style={{ marginTop: '16px' }}>{erreur}</p>}
          {fait && <p className="cmd-aide" style={{ marginTop: '16px', color: 'var(--accent-deep)' }}>{fait}</p>}

          <button type="submit" className="cmd-cont" disabled={envoi} style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}>
            {envoi ? 'Un instant…' : <>{M.bouton} <Fleche /></>}
          </button>
        </form>

        <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
          {mode !== 'connexion' && (
            <button type="button" className="cmd-retour" onClick={() => { setMode('connexion'); setErreur(null); setFait(null) }}>
              J&apos;ai déjà un compte
            </button>
          )}
          {mode !== 'creation' && (
            <button type="button" className="cmd-retour" onClick={() => { setMode('creation'); setErreur(null); setFait(null) }}>
              Créer un compte
            </button>
          )}
          {mode !== 'oubli' && (
            <button type="button" className="cmd-retour" onClick={() => { setMode('oubli'); setErreur(null); setFait(null) }}>
              Mot de passe oublié
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
