'use client'

/*
  « Mes commandes » — les miennes, pas celles de mes collègues (décision de
  Ramy du 30/10).

  L'écran qui justifie tout le chantier : dix des vingt-trois devis
  Carglass/Coyote ont été montés le jour même de la livraison, pour des
  commandes qui se ressemblent. « Recommander » supprime ces dix-là.

  Le panier est reconstruit en REVALIDANT chaque référence dans le catalogue
  du site : un produit retiré de la carte, ou dont le prix a changé, ne doit
  pas réapparaître tel quel dans un panier d'aujourd'hui.
*/

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { produitCommandable } from '@/lib/catalogueCommande'
import { viderPanier, ajouterAuPanier } from '@/lib/panier'
import { euroFr } from '@/lib/prixEntree'
import { Fleche } from '../commande/Chrome'
import BandeauCompte from './BandeauCompte'

const LONG = (iso) => iso
  ? new Date(iso + 'T12:00:00Z').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  : ''

export default function MesCommandesEcran() {
  const router = useRouter()
  const [etat, setEtat] = useState('chargement')
  const [liste, setListe] = useState([])
  const [note, setNote] = useState(null)

  useEffect(() => {
    let vivant = true
    fetch('/api/compte/commandes')
      .then(r => r.status === 401 ? Promise.reject('hors-session') : r.json())
      .then(d => { if (vivant) { setListe(d.commandes || []); setEtat('pret') } })
      .catch(() => { if (vivant) router.replace('/compte/connexion?suite=/compte') })
    return () => { vivant = false }
  }, [router])

  /*
    Remettre une commande au panier. Les lignes viennent de l'OS, mais les
    prix et les noms sont repris du catalogue du site : c'est lui qui fait foi
    aujourd'hui.
  */
  const recommander = (cmd) => {
    const gardees = []
    const perdues = []
    for (const l of cmd.lignes || []) {
      const p = produitCommandable(l.id)
      if (p) gardees.push({ produit: p, qte: Math.max(1, Math.floor(Number(l.qte) || 1)) })
      else perdues.push(l.nom || l.id)
    }
    if (gardees.length === 0) {
      setNote("Aucun produit de cette commande n'est disponible aujourd'hui. Demandez-nous un devis.")
      return
    }
    viderPanier()
    for (const { produit, qte } of gardees) {
      ajouterAuPanier({ id: produit.id, nom: produit.nom, prix: produit.prix, img: produit.img, famille: produit.famille, qteTexte: produit.qte }, qte)
    }
    if (perdues.length) {
      setNote(`${perdues.length} référence${perdues.length > 1 ? 's ne sont plus disponibles' : " n'est plus disponible"} : ${perdues.join(', ')}. Le reste vous attend dans le panier.`)
      return
    }
    router.push('/commander/panier')
  }

  if (etat === 'chargement') return <div className="cmd"><BandeauCompte /><div className="cpt-corps" /></div>

  return (
    <div className="cmd">
      <BandeauCompte />
      <div className="cpt-corps">
        <p className="cmd-surtitre">Espace client</p>
        <h1 className="cmd-h1 cmd-sf">Mes commandes</h1>

        {note && <p className="cmd-erreur" style={{ marginBottom: '20px' }}>{note}</p>}

        {liste.length === 0 ? (
          <div className="cpt-vide">
            <p className="cmd-intro" style={{ margin: '0 auto 28px', maxWidth: '38ch' }}>
              Vous n&apos;avez pas encore commandé en ligne. Vos commandes passées par
              devis restent chez nous — demandez-les-nous, nous vous les retrouvons.
            </p>
            <a className="cmd-cont cmd-cont-doux" href="/commander/panier">Composer une commande <Fleche /></a>
          </div>
        ) : (
          liste.map(cmd => (
            <div className="cpt-cmd" key={cmd.reference}>
              <div>
                <p className="cpt-cmd-date">{LONG(cmd.date_livraison)}</p>
                <p className="cpt-cmd-detail">
                  Commande n° {cmd.reference}
                  {cmd.creneau ? ` · ${cmd.creneau}` : ''}
                  {cmd.lignes?.length ? ` · ${cmd.lignes.length} référence${cmd.lignes.length > 1 ? 's' : ''}` : ''}
                </p>
                {cmd.statut && <span className="cpt-statut">{cmd.statut}</span>}
              </div>
              <span className="cpt-cmd-montant">{euroFr(cmd.montant_ttc)}</span>
              <button type="button" className="cmd-crayon" onClick={() => recommander(cmd)}>
                Recommander
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
