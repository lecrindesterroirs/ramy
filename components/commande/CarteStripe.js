'use client'

/*
  Le formulaire de carte, dans la page (30/10/2026).

  Stripe Payment Element : les champs appartiennent à Stripe et vivent dans
  une iframe. Aucune donnée de carte ne passe par notre code ni par notre
  serveur. L'authentification 3-D Secure s'ouvre dans une fenêtre superposée,
  le client ne quitte pas le site — c'est ce qui a fait écarter Mollie, qui
  renvoie vers la banque.

  La bibliothèque est chargée à la demande : elle n'a rien à faire sur une
  page produit.

  Si la banque exige malgré tout une redirection, Stripe renvoie sur
  return_url avec le paiement en paramètre. L'écran de paiement sait reprendre
  là (voir PaiementEcran), d'où la session gardée dans sessionStorage.
*/

import { useEffect, useRef, useState } from 'react'
import { euroFr } from '@/lib/prixEntree'
import { Fleche } from './Chrome'

const CLE = 'lecrin-paiement'

export const retenirPaiement = (o) => {
  try { sessionStorage.setItem(CLE, JSON.stringify(o)) } catch {}
}
export const relirePaiement = () => {
  try { return JSON.parse(sessionStorage.getItem(CLE) || 'null') } catch { return null }
}
export const oublierPaiement = () => {
  try { sessionStorage.removeItem(CLE) } catch {}
}

/* L'habillage des champs Stripe, aligné sur la charte du site. */
const APPARENCE = {
  theme: 'stripe',
  variables: {
    colorPrimary: '#875E10',
    colorText: '#111111',
    colorTextSecondary: '#605A4F',
    colorDanger: '#8A3A1E',
    colorBackground: '#FFFFFF',
    fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
    fontSizeBase: '15px',
    borderRadius: '0px',
    spacingUnit: '4px',
  },
  rules: {
    '.Input': { border: '1px solid rgba(17,17,17,0.08)', boxShadow: 'none', padding: '15px 16px' },
    '.Input:focus': { border: '1px solid #E0A126', boxShadow: 'none', outline: 'none' },
    '.Label': {
      fontSize: '10px', fontWeight: '500', letterSpacing: '0.2em',
      textTransform: 'uppercase', color: '#605A4F', marginBottom: '10px',
    },
    '.Tab': { border: '1px solid rgba(17,17,17,0.08)', boxShadow: 'none' },
    '.Tab--selected': { border: '1px solid #E0A126', boxShadow: 'none', color: '#111111' },
  },
}

export default function CarteStripe({ clientSecret, clePublique, montantTtc, retourUrl, facturation, onPaye, onErreur }) {
  const boite = useRef(null)
  const refs = useRef({ stripe: null, elements: null })
  const [etat, setEtat] = useState('chargement')

  /*
    Les deux fonctions de rappel arrivent écrites sur place par l'écran
    parent : elles changent d'identité à chaque rendu. Mises en dépendance de
    l'effet, elles le feraient recommencer sans fin. On les garde dans une
    référence, toujours à jour, et l'effet ne dépend que du paiement.
  */
  const rappels = useRef({ onPaye, onErreur })
  rappels.current = { onPaye, onErreur }

  /*
    Pas de garde « déjà monté » : en développement React monte le composant,
    le démonte, puis le remonte pour débusquer les effets mal nettoyés. Un
    drapeau posé au premier passage bloquait le second, et le formulaire
    restait sur « Chargement du paiement sécurisé… ». C'est le nettoyage qui
    doit faire le travail, pas un verrou.
  */
  useEffect(() => {
    let vivant = true
    let element = null

    ;(async () => {
      try {
        const { loadStripe } = await import('@stripe/stripe-js')
        const stripe = await loadStripe(clePublique)
        // Le composant a été démonté entre-temps : on s'arrête sans bruit.
        if (!vivant) return
        if (!stripe) throw new Error('Stripe.js ne s\'est pas chargé')

        const elements = stripe.elements({ clientSecret, appearance: APPARENCE, locale: 'fr' })
        /*
          Le nom et l'email viennent de l'étape livraison : inutile de les
          redemander, ils sont fournis à la validation.

          L'adresse de facturation, elle, reste visible et modifiable — elle
          n'est pas toujours celle de la livraison, et les demandes venues de
          l'étranger se multiplient (Ramy, 30/10/2026). Elle arrive
          pré-remplie avec l'adresse de livraison et la France, pour que le
          client français n'ait rien à faire. Sans ce pré-remplissage, Stripe
          proposait le pays du navigateur : « Indonésie » depuis Bali.
        */
        element = elements.create('payment', {
          layout: 'tabs',
          fields: { billingDetails: { name: 'never', email: 'never', phone: 'never', address: 'auto' } },
          defaultValues: { billingDetails: { address: facturation?.address || { country: 'FR' } } },
        })
        element.on('ready', () => { if (vivant) setEtat('pret') })
        element.mount(boite.current)
        refs.current = { stripe, elements }
      } catch (e) {
        console.error('Stripe: chargement impossible', e)
        if (vivant) {
          setEtat('panne')
          rappels.current.onErreur?.("Le formulaire de paiement n'a pas pu se charger. Appelez-nous au 07 60 16 96 20.")
        }
      }
    })()

    return () => {
      vivant = false
      try { element?.unmount?.() } catch {}
    }
  }, [clientSecret, clePublique])   // facturation ne sert qu'au premier rendu

  const payer = async () => {
    const { stripe, elements } = refs.current
    if (!stripe || !elements) return
    setEtat('envoi')
    rappels.current.onErreur?.(null)
    let error, paymentIntent
    try {
      ;({ error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: retourUrl,
        // Les coordonnées de facturation, masquées dans le formulaire,
        // doivent être fournies ici : la banque les attend.
        /*
          Tout ce qui est masqué dans le formulaire doit être fourni ici —
          Stripe refuse autrement, et son erreur arrive de façon asynchrone :
          le bouton restait sur « Paiement en cours… » sans rien dire.
          L'adresse, elle, vient du bloc resté visible.
        */
        payment_method_data: {
          billing_details: {
            name: facturation?.name,
            email: facturation?.email,
            phone: facturation?.phone,
          },
        },
      },
      // On garde le client sur le site : Stripe ne redirige que si la banque
      // l'impose vraiment.
      redirect: 'if_required',
      }))
    } catch (e) {
      // Erreur d'intégration ou coupure réseau : on rend la main plutôt que
      // de laisser le bouton tourner indéfiniment.
      console.error('Stripe: confirmation impossible', e)
      setEtat('pret')
      rappels.current.onErreur?.("Le paiement n'a pas pu être envoyé. Réessayez, ou appelez-nous au 07 60 16 96 20.")
      return
    }
    if (error) {
      setEtat('pret')
      rappels.current.onErreur?.(messageDe(error))
      return
    }
    if (paymentIntent?.status === 'succeeded' || paymentIntent?.status === 'processing') {
      rappels.current.onPaye?.({ paymentIntentId: paymentIntent.id })
      return
    }
    setEtat('pret')
    rappels.current.onErreur?.("Le paiement n'a pas abouti. Rien n'a été débité.")
  }

  return (
    <div className="cmd-carte">
      {etat === 'chargement' && <p className="cmd-aide">Chargement du paiement sécurisé…</p>}
      <div ref={boite} />
      {etat !== 'panne' && (
        <button
          type="button"
          className="cmd-cont cmd-payer"
          onClick={payer}
          disabled={etat !== 'pret'}
        >
          {etat === 'envoi' ? 'Paiement en cours…' : <>Payer {euroFr(montantTtc)} TTC <Fleche /></>}
        </button>
      )}
    </div>
  )
}

/* Ce que le client doit lire selon la réponse de sa banque. */
function messageDe(error) {
  if (error?.type === 'validation_error') return null   // Stripe l'affiche déjà sous le champ
  switch (error?.code) {
    case 'card_declined':
      return 'Votre banque a refusé le paiement. Essayez une autre carte, ou appelez-nous au 07 60 16 96 20.'
    case 'expired_card':
      return 'Cette carte est expirée.'
    case 'incorrect_cvc':
      return 'Le cryptogramme ne correspond pas.'
    case 'processing_error':
      return "Une erreur est survenue pendant le paiement. Rien n'a été débité, réessayez."
    default:
      return error?.message || "Le paiement n'a pas abouti. Rien n'a été débité."
  }
}
