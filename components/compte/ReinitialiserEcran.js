'use client'

/*
  Choisir un nouveau mot de passe, depuis le lien reçu par mail (30/10/2026).

  Comme la confirmation, le jeton arrive dans l'URL de ce site et repart en
  POST vers l'OS. Il quitte la barre d'adresse dès qu'il a servi.

  Huit caractères au minimum : décision de Ramy — « faut qu'ils s'en
  souviennent, on va pas leur imposer trop de choses ».
*/

import { useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { EnteteSimple, Fleche } from '../commande/Chrome'

export default function ReinitialiserEcran() {
  const router = useRouter()
  const params = useSearchParams()
  const jeton = useRef(null)
  const [pret, setPret] = useState(false)
  const [mdp, setMdp] = useState('')
  const [encore, setEncore] = useState('')
  const [envoi, setEnvoi] = useState(false)
  const [erreur, setErreur] = useState(null)
  const [fait, setFait] = useState(false)

  /* Le jeton est mis de côté, puis effacé de l'URL avant toute saisie. */
  useEffect(() => {
    if (jeton.current !== null) return
    jeton.current = params.get('jeton') || ''
    setPret(true)
    if (jeton.current) router.replace('/compte/reinitialiser')
  }, [params, router])

  const envoyer = async (e) => {
    e.preventDefault()
    setErreur(null)
    if (mdp.length < 8) return setErreur('Votre mot de passe doit faire au moins 8 caractères.')
    if (mdp !== encore) return setErreur('Les deux mots de passe ne sont pas identiques.')
    setEnvoi(true)
    try {
      const r = await fetch('/api/compte/reinitialiser', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jeton: jeton.current, motDePasse: mdp }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok || !d.ok) { setErreur(d.erreur || "Ce lien n'est plus valable. Redemandez-en un."); setEnvoi(false); return }
      setFait(true)
    } catch {
      setErreur('Connexion interrompue. Réessayez.')
      setEnvoi(false)
    }
  }

  if (!pret) return <div className="cmd"><EnteteSimple /></div>

  return (
    <div className="cmd">
      <EnteteSimple />

      <div className="cpt-corps cpt-etroit">
        <p className="cmd-surtitre">Espace client</p>

        {fait ? (
          <>
            <h1 className="cmd-h1 cmd-sf">C&apos;est enregistré</h1>
            <p className="cmd-intro">
              Votre nouveau mot de passe est actif. Les sessions ouvertes ailleurs ont été fermées.
            </p>
            <a href="/compte/connexion" className="cmd-cont" style={{ marginTop: '24px' }}>
              Me connecter <Fleche />
            </a>
          </>
        ) : !jeton.current ? (
          <>
            <h1 className="cmd-h1 cmd-sf">Ce lien est incomplet</h1>
            <p className="cmd-intro">Redemandez un lien depuis « mot de passe oublié ».</p>
            <a href="/compte/connexion" className="cmd-cont" style={{ marginTop: '24px' }}>
              Retour <Fleche />
            </a>
          </>
        ) : (
          <>
            <h1 className="cmd-h1 cmd-sf">Nouveau mot de passe</h1>
            <p className="cmd-intro">Choisissez-en un dont vous vous souviendrez.</p>

            <form onSubmit={envoyer}>
              <input className="cmd-champ" type="password" placeholder="Nouveau mot de passe" required
                autoComplete="new-password" minLength={8}
                value={mdp} onChange={(e) => setMdp(e.target.value)} />
              <p className="cmd-aide">Huit caractères au minimum.</p>
              <div style={{ height: '14px' }} />
              <input className="cmd-champ" type="password" placeholder="Encore une fois" required
                autoComplete="new-password"
                value={encore} onChange={(e) => setEncore(e.target.value)} />

              {erreur && <p className="cmd-erreur" style={{ marginTop: '16px' }}>{erreur}</p>}

              <button type="submit" className="cmd-cont" disabled={envoi}
                style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}>
                {envoi ? 'Un instant…' : <>Enregistrer <Fleche /></>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
