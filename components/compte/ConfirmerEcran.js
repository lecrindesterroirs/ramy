'use client'

/*
  La page où atterrit le lien du mail de confirmation (30/10/2026).

  Le client reste chez nous : le jeton arrive dans l'URL de CE site, qui le
  repasse à l'OS en POST. Décision de Ramy — « le client doit pas trop être
  en lien avec l'OS directement ».

  Dès que la réponse est là, le jeton quitte la barre d'adresse : il ne reste
  ni dans l'historique du navigateur, ni dans une capture d'écran, ni dans un
  lien recopié à quelqu'un.
*/

import { useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { EnteteSimple, Fleche } from '../commande/Chrome'

export default function ConfirmerEcran() {
  const router = useRouter()
  const params = useSearchParams()
  const [etat, setEtat] = useState('en-cours')   // en-cours | fait | invalide
  const [erreur, setErreur] = useState(null)
  // En développement, React monte deux fois : sans ce verrou, le lien serait
  // consommé par le premier appel et refusé au second.
  const lance = useRef(false)

  useEffect(() => {
    if (lance.current) return
    lance.current = true
    const jeton = params.get('jeton')
    if (!jeton) { setEtat('invalide'); setErreur('Ce lien est incomplet.'); return }

    fetch('/api/compte/confirmer', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jeton }),
    })
      .then(async (r) => {
        const d = await r.json().catch(() => ({}))
        if (r.ok && d.ok) setEtat('fait')
        else { setEtat('invalide'); setErreur(d.erreur || "Ce lien n'est plus valable.") }
      })
      .catch(() => { setEtat('invalide'); setErreur('Connexion interrompue. Rouvrez le lien.') })
      .finally(() => router.replace('/compte/confirmer'))
  }, [params, router])

  return (
    <div className="cmd">
      <EnteteSimple />

      <div className="cpt-corps cpt-etroit">
        <p className="cmd-surtitre">Espace client</p>

        {etat === 'en-cours' && (
          <>
            <h1 className="cmd-h1 cmd-sf">Un instant…</h1>
            <p className="cmd-intro">Nous activons votre compte.</p>
          </>
        )}

        {etat === 'fait' && (
          <>
            <h1 className="cmd-h1 cmd-sf">Votre compte est actif</h1>
            <p className="cmd-intro">
              Votre adresse est confirmée. Connectez-vous avec le mot de passe que vous venez de choisir.
            </p>
            <a href="/compte/connexion" className="cmd-cont" style={{ marginTop: '24px' }}>
              Me connecter <Fleche />
            </a>
          </>
        )}

        {etat === 'invalide' && (
          <>
            <h1 className="cmd-h1 cmd-sf">Ce lien n&apos;a pas fonctionné</h1>
            <p className="cmd-intro">{erreur}</p>
            <p className="cmd-aide">
              Un lien de confirmation vit 24 heures et ne sert qu&apos;une fois. Recréez votre compte :
              nous vous en envoyons un nouveau.
            </p>
            <a href="/compte/connexion" className="cmd-cont" style={{ marginTop: '24px' }}>
              Recommencer <Fleche />
            </a>
          </>
        )}
      </div>
    </div>
  )
}
