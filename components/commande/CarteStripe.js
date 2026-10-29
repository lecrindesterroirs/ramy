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

export default function CarteStripe({ clientSecret, clePublique, montantTtc, retourUrl, onPaye, onErreur }) {
  const boite = useRef(null)
  const monte = useRef(false)
  const refs = useRef({ stripe: null, elements: null })
  const [etat, setEtat] = useState('chargement')

  useEffect(() => {
    if (monte.current) return
    monte.current = true
    let vivant = true
    let element = null

    ;(async () => {
      try {
        const { loadStripe } = await import('@stripe/stripe-js')
        const stripe = await loadStripe(clePublique)
        if (!vivant || !stripe) throw new Error('Stripe indisponible')

        const elements = stripe.elements({ clientSecret, appearance: APPARENCE, locale: 'fr' })
        element = elements.create('payment', { layout: 'tabs' })
        element.mount(boite.current)
        refs.current = { stripe, elements }
        element.on('ready', () => vivant && setEtat('pret'))
      } catch (e) {
        console.error('Stripe: chargement impossible', e)
        if (vivant) {
          setEtat('panne')
          onErreur?.("Le formulaire de paiement n'a pas pu se charger. Appelez-nous au 07 60 16 96 20.")
        }
      }
    })()

    return () => {
      vivant = false
      try { element?.unmount?.() } catch {}
    }
  }, [clientSecret, clePublique, onErreur])

  const payer = async () => {
    const { stripe, elements } = refs.current
    if (!stripe || !elements) return
    setEtat('envoi')
    onErreur?.(null)
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: retourUrl },
      // On garde le client sur le site : Stripe ne redirige que si la banque
      // l'impose vraiment.
      redirect: 'if_required',
    })
    if (error) {
      setEtat('pret')
      onErreur?.(messageDe(error))
      return
    }
    if (paymentIntent?.status === 'succeeded' || paymentIntent?.status === 'processing') {
      onPaye?.({ paymentIntentId: paymentIntent.id })
      return
    }
    setEtat('pret')
    onErreur?.("Le paiement n'a pas abouti. Rien n'a été débité.")
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
