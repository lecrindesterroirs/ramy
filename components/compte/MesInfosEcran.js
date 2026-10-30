'use client'

/*
  « Mes informations » — ce que le tunnel ira chercher tout seul.

  C'est la raison d'être du compte autant que l'historique : une adresse de
  livraison, un accès, un contact sur place et une entité de facturation
  saisis une fois, repris à chaque commande.

  Rien n'est enregistré à la frappe : un bouton, un message, et on sait que
  c'est parti. Un enregistrement silencieux laisse toujours un doute.
*/

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { PAYS } from '@/lib/paysFacturation'
import { Fleche } from '../commande/Chrome'
import BandeauCompte from './BandeauCompte'

const VIDE = {
  nom: '', societe: '', telephone: '', email: '',
  livraison: { adresse: '', cp: '', ville: '', acces: '' },
  facturation: { entite: '', adresse: '', cp: '', ville: '', pays: 'FR', email: '', reference: '' },
}

export default function MesInfosEcran() {
  const router = useRouter()
  const [p, setP] = useState(VIDE)
  const [etat, setEtat] = useState('chargement')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    let vivant = true
    fetch('/api/compte/moi')
      .then(r => r.status === 401 ? Promise.reject('hors-session') : r.json())
      .then(d => { if (vivant) { setP({ ...VIDE, ...d.profil }); setEtat('pret') } })
      .catch(() => { if (vivant) router.replace('/compte/connexion?suite=/compte/informations') })
    return () => { vivant = false }
  }, [router])

  const maj = (champs) => setP(v => ({ ...v, ...champs }))
  const majLiv = (champs) => setP(v => ({ ...v, livraison: { ...v.livraison, ...champs } }))
  const majFact = (champs) => setP(v => ({ ...v, facturation: { ...v.facturation, ...champs } }))

  const enregistrer = async (e) => {
    e.preventDefault()
    setEtat('envoi'); setMessage(null)
    const r = await fetch('/api/compte/moi', {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p),
    })
    if (r.ok) { setMessage('Vos informations sont enregistrées.'); setEtat('pret') }
    else { setMessage("L'enregistrement n'a pas abouti. Réessayez."); setEtat('pret') }
  }

  if (etat === 'chargement') return <div className="cmd"><BandeauCompte /><div className="cpt-corps" /></div>

  return (
    <div className="cmd">
      <BandeauCompte />
      <form className="cpt-corps" onSubmit={enregistrer}>
        <p className="cmd-surtitre">Espace client</p>
        <h1 className="cmd-h1 cmd-sf">Mes informations</h1>
        <p className="cmd-intro">
          Elles seront reprises à chaque commande. Vous pourrez toujours les corriger
          au moment de commander, sans les changer ici.
        </p>

        <div className="cmd-bloc">
          <span className="cmd-lab">Vous</span>
          <div className="cmd-duo">
            <input className="cmd-champ" placeholder="Prénom et nom" autoComplete="name"
              value={p.nom} onChange={(e) => maj({ nom: e.target.value })} />
            <input className="cmd-champ" placeholder="Téléphone" inputMode="tel" autoComplete="tel"
              value={p.telephone} onChange={(e) => maj({ telephone: e.target.value })} />
          </div>
          <div style={{ height: '14px' }} />
          <input className="cmd-champ" placeholder="Société" autoComplete="organization"
            value={p.societe} onChange={(e) => maj({ societe: e.target.value })} />
          <p className="cmd-aide">Votre adresse de connexion : {p.email || '—'}</p>
        </div>

        <div className="cmd-bloc">
          <span className="cmd-lab">Adresse de livraison</span>
          <input className="cmd-champ" placeholder="Numéro et rue" autoComplete="street-address"
            value={p.livraison.adresse} onChange={(e) => majLiv({ adresse: e.target.value })} />
          <div style={{ height: '14px' }} />
          <div className="cmd-duo">
            <input className="cmd-champ" placeholder="Code postal" inputMode="numeric"
              value={p.livraison.cp} onChange={(e) => majLiv({ cp: e.target.value.replace(/\D/g, '').slice(0, 5) })} />
            <input className="cmd-champ" placeholder="Ville"
              value={p.livraison.ville} onChange={(e) => majLiv({ ville: e.target.value })} />
          </div>
          <div style={{ height: '14px' }} />
          <textarea className="cmd-champ cmd-texte" placeholder="Étage, code, interphone, quai de livraison, accueil filtré…"
            value={p.livraison.acces} onChange={(e) => majLiv({ acces: e.target.value })} />
        </div>

        <div className="cmd-bloc">
          <span className="cmd-lab">Facturation</span>
          <input className="cmd-champ" placeholder="Entité à facturer"
            value={p.facturation.entite} onChange={(e) => majFact({ entite: e.target.value })} />
          <div style={{ height: '14px' }} />
          <input className="cmd-champ" placeholder="Numéro et rue"
            value={p.facturation.adresse} onChange={(e) => majFact({ adresse: e.target.value })} />
          <div style={{ height: '14px' }} />
          <div className="cmd-duo">
            <input className="cmd-champ" placeholder="Code postal" inputMode="numeric"
              value={p.facturation.cp} onChange={(e) => majFact({ cp: e.target.value })} />
            <input className="cmd-champ" placeholder="Ville"
              value={p.facturation.ville} onChange={(e) => majFact({ ville: e.target.value })} />
          </div>
          <div style={{ height: '14px' }} />
          <select className="cmd-liste" aria-label="Pays de facturation"
            value={p.facturation.pays} onChange={(e) => majFact({ pays: e.target.value })}>
            {PAYS.map(([code, nom]) => <option key={code} value={code}>{nom}</option>)}
          </select>
          <div style={{ height: '14px' }} />
          <div className="cmd-duo">
            <input className="cmd-champ" placeholder="Email de facturation" inputMode="email"
              value={p.facturation.email} onChange={(e) => majFact({ email: e.target.value.trim() })} />
            <input className="cmd-champ" placeholder="Bon de commande par défaut"
              value={p.facturation.reference} onChange={(e) => majFact({ reference: e.target.value })} />
          </div>
        </div>

        {message && <p className="cmd-aide" style={{ color: 'var(--accent-deep)', marginBottom: '16px' }}>{message}</p>}

        <button type="submit" className="cmd-cont" disabled={etat === 'envoi'}>
          {etat === 'envoi' ? 'Enregistrement…' : <>Enregistrer <Fleche /></>}
        </button>
      </form>
    </div>
  )
}
