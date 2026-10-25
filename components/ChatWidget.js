'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { estAnglais } from '../lib/i18nBase'
import { getAttribution } from '../lib/attribution'
import { identifierVisiteur } from '../lib/posthog-identify'

/* Monté par app/layout.js uniquement si ANTHROPIC_API_KEY existe : sans clé,
 * aucun bouton n'apparaît plutôt qu'un bouton qui répond « je ne suis pas
 * joignable ». Un ajout de clé sur Vercel demande donc un redéploiement.
 *
 * Assistant du site. Répond sur la carte et les règles de commande, puis
 * transmet la demande dans l'OS (app/api/chat). Jamais sur /devis ni /panier :
 * sur ces pages la personne est déjà en train de commander, on ne la dérange pas.
 *
 * Parti pris graphique : pas de bulles de messagerie. Tout est posé sur blanc,
 * chaque tour annoncé par un filet et une étiquette, comme une page du site. */
const EXCLUS = ['/devis', '/panier', '/commande-confirmee', '/calculateur-quantites/embed', '/en/calculateur-quantites/embed']

/* Deux langues, tout au même endroit. On ne devine rien d'après le navigateur :
 * la langue de départ est celle de la page (une page /en ouvre le chat en
 * anglais), et le visiteur bascule s'il le veut. Son choix explicite est gardé
 * en mémoire et l'emporte, sauf sur une page anglaise, où l'adresse tranche. */
const T = {
  fr: {
    lanceur: 'Chat en direct', ouvrir: "Ouvrir le chat en direct", fermer: "Fermer l'assistant",
    sous: 'En ligne · Devis sous 24 h', eux: "L'Écrin", moi: 'Vous',
    accueil: "Bonjour, je suis votre assistant chez L'Écrin.\n\nJe réponds sur la carte, les prix, les délais et les livraisons, et je prépare votre demande de devis.\n\nQue préparez-vous ?",
    suggestions: ['Un petit-déjeuner pour 20 personnes', 'Quels délais de commande ?', 'Une option sans gluten'],
    champ: 'Écrivez votre question…', monMessage: 'Votre message', envoyer: 'Envoyer',
    mention: "Assistant automatique. Les informations sont données à titre indicatif ; l'équipe confirme chaque commande.",
    injoignable: "Je ne suis pas joignable pour le moment.\n\nÉcrivez-nous à commercial@lecrin-traiteur.fr, réponse sous 24 h.",
    panne: "La connexion a échoué.\n\nÉcrivez-nous à commercial@lecrin-traiteur.fr, réponse sous 24 h.",
    form: {
      titre: 'Votre demande', intro: "Vérifiez, complétez, et l'équipe revient sous 24 h.",
      date: 'Date', convives: 'Convives', ville: 'Ville ou arrondissement', nom: 'Nom',
      societe: 'Société', email: 'Email', tel: 'Téléphone', message: 'Votre demande',
      envoyer: 'Envoyer ma demande', envoi: 'Envoi…',
      erreur: "L'envoi a échoué. Écrivez-nous à commercial@lecrin-traiteur.fr.",
      prestations: [['petit-dejeuner','Petit-déjeuner'],['plateaux-repas','Plateaux repas'],['cocktail-buffet','Cocktail / Buffet'],['gouter','Goûter'],['evenement-sur-mesure','Sur mesure'],['autre','Autre']],
      merci: (p) => `C'est envoyé${p ? `, ${p}` : ''}. Vous recevez un accusé de réception par email, et l'équipe revient vers vous avec une proposition sous 24 h.\n\nSi vous voulez ajouter quelque chose, dites-le-moi, je le transmets.`,
    },
  },
  en: {
    lanceur: 'Live chat', ouvrir: 'Open live chat', fermer: 'Close the assistant',
    sous: 'Online · Quote within 24h', eux: "L'Écrin", moi: 'You',
    accueil: "Hello, I'm your assistant at L'Écrin.\n\nI can help with our menu, prices, lead times and deliveries, and I'll prepare your quote request.\n\nWhat are you planning?",
    suggestions: ['Breakfast for 20 people', 'What are your lead times?', 'A gluten-free option'],
    champ: 'Type your question…', monMessage: 'Your message', envoyer: 'Send',
    mention: 'Automated assistant. Information is indicative; our team confirms every order.',
    injoignable: "I can't be reached right now.\n\nEmail us at commercial@lecrin-traiteur.fr and we'll reply within 24 hours.",
    panne: "The connection failed.\n\nEmail us at commercial@lecrin-traiteur.fr and we'll reply within 24 hours.",
    form: {
      titre: 'Your request', intro: 'Check, complete, and our team will get back to you within 24 hours.',
      date: 'Date', convives: 'Guests', ville: 'City or district', nom: 'Name',
      societe: 'Company', email: 'Email', tel: 'Phone', message: 'Your request',
      envoyer: 'Send my request', envoi: 'Sending…',
      erreur: 'Sending failed. Please email us at commercial@lecrin-traiteur.fr.',
      prestations: [['petit-dejeuner','Breakfast'],['plateaux-repas','Meal trays'],['cocktail-buffet','Cocktail / Buffet'],['gouter','Afternoon break'],['evenement-sur-mesure','Bespoke'],['autre','Other']],
      merci: (p) => `It's sent${p ? `, ${p}` : ''}. You'll get a confirmation by email, and our team will come back to you with a proposal within 24 hours.\n\nIf you'd like to add anything, tell me and I'll pass it on.`,
    },
  },
}

export default function ChatWidget() {
  const pathname = usePathname()
  // La langue de la page, connue dès le rendu serveur : pas d'écart d'hydratation.
  const pageEn = estAnglais(pathname || '/')
  const languePage = pageEn ? 'en' : 'fr'
  const [ouvert, setOuvert] = useState(false)
  const [langue, setLangue] = useState(languePage)
  const [messages, setMessages] = useState([{ role: 'assistant', content: T[languePage].accueil }])
  const [saisie, setSaisie] = useState('')
  const [enCours, setEnCours] = useState(false)
  const [formulaire, setFormulaire] = useState(null)   // pré-rempli par l'assistant
  const [envoye, setEnvoye] = useState(false)

  /* Quand le panneau est ouvert, la barre fixe du bas (téléphone + devis) le
     recouvre sur téléphone. On le signale par une classe sur <body> : c'est
     MobileCTA qui s'efface, le chat n'a pas à connaître son existence. */
  useEffect(() => {
    document.body.classList.toggle('chat-ouvert', ouvert)
    return () => document.body.classList.remove('chat-ouvert')
  }, [ouvert])
  const [visible, setVisible] = useState(false)
  const filRef = useRef(null)
  const champRef = useRef(null)

  const exclu = EXCLUS.some(p => pathname === p || pathname.startsWith(p + '/'))
  const t = T[langue]

  // Le bouton n'est pas là dès l'arrivée : il apparaît après un début de
  // défilement, pour laisser le premier écran (et le numéro du hero) dégagé.
  // Sur une page trop courte pour défiler, il est affiché d'emblée.
  useEffect(() => {
    const juger = () => {
      const seuil = Math.min(window.innerHeight * 0.4, 320)
      const courte = document.documentElement.scrollHeight <= window.innerHeight + seuil
      if (courte || window.scrollY > seuil) setVisible(true)
    }
    // Hauteur de page fiable seulement une fois le contenu monté.
    const timer = setTimeout(juger, 1500)
    window.addEventListener('scroll', juger, { passive: true })
    return () => { clearTimeout(timer); window.removeEventListener('scroll', juger) }
  }, [pathname])

  useEffect(() => {
    // Sur une page anglaise, l'adresse tranche : inutile d'aller voir le choix
    // mémorisé, le visiteur lit déjà la page en anglais.
    if (pageEn) return
    try {
      const m = window.localStorage.getItem('chat-langue')
      if (m === 'en' || m === 'fr') basculer(m, true)
    } catch (e) { /* mode privé */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* Changer de langue retraduit le message d'accueil tant que la conversation
     n'a pas commencé ; une fois lancée, on ne réécrit pas ce qui a été dit. */
  function basculer(vers, silencieux) {
    setLangue(vers)
    if (!silencieux) { try { window.localStorage.setItem('chat-langue', vers) } catch (e) { /* noop */ } }
    setMessages(m => (m.length === 1 ? [{ role: 'assistant', content: T[vers].accueil }] : m))
  }

  useEffect(() => {
    if (filRef.current) filRef.current.scrollTo({ top: filRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, enCours])

  useEffect(() => {
    if (ouvert && champRef.current) champRef.current.focus()
  }, [ouvert])

  useEffect(() => {
    if (!ouvert) return
    const onKey = e => { if (e.key === 'Escape') setOuvert(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [ouvert])

  const envoyer = useCallback(async (texte) => {
    const contenu = (texte ?? '').trim()
    if (!contenu || enCours) return

    const suite = [...messages, { role: 'user', content: contenu }]
    setMessages(suite)
    setSaisie('')
    setEnCours(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Le message d'accueil est écrit côté client : inutile de le renvoyer.
          messages: suite.slice(1).map(m => ({ role: m.role, content: m.content })),
          page: pathname,
          langue,
          attribution: getAttribution(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (data.formulaire && !envoye) setFormulaire(f => f || data.formulaire)
      setMessages(m => [...m, {
        role: 'assistant',
        content: res.ok && data.reply
          ? data.reply
          : t.injoignable,
      }])
    } catch {
      setMessages(m => [...m, {
        role: 'assistant',
        content: t.panne,
      }])
    } finally {
      setEnCours(false)
    }
  }, [messages, enCours, pathname, envoye, langue, t])

  if (exclu) return null

  return (
    <>
      {!ouvert && (
        <button onClick={() => setOuvert(true)} className={visible ? 'chat-launcher chat-launcher-on' : 'chat-launcher'}
          aria-label={t.ouvrir} tabIndex={visible ? 0 : -1}>
          <Conseiller />
          <i className="chat-launcher-dot" aria-hidden="true" />
          <span className="chat-launcher-txt">{t.lanceur}</span>
        </button>
      )}

      {ouvert && (
        <div className="chat-panneau" role="dialog" aria-label="Assistant L'Écrin Traiteur" aria-modal="false">
          <header className="chat-entete">
            <span className="chat-avatar chat-avatar-lg"><Conseiller /><i className="chat-pastille" aria-hidden="true" /></span>
            <div className="chat-titre">
              <span className="chat-marque">L&apos;Écrin Traiteur</span>
              <span className="chat-sous">{t.sous}</span>
            </div>
            <div className="chat-langues" role="group" aria-label="Langue / Language">
              <button type="button" onClick={() => basculer('fr')} aria-pressed={langue === 'fr'} aria-label="Français"
                className={langue === 'fr' ? 'chat-drapeau chat-drapeau-on' : 'chat-drapeau'}><DrapeauFR /></button>
              <button type="button" onClick={() => basculer('en')} aria-pressed={langue === 'en'} aria-label="English"
                className={langue === 'en' ? 'chat-drapeau chat-drapeau-on' : 'chat-drapeau'}><DrapeauEN /></button>
            </div>
            <button onClick={() => setOuvert(false)} aria-label={t.fermer} className="chat-fermer">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.1" />
              </svg>
            </button>
          </header>

          {/* data-lenis-prevent : sans ça le scroll global avale la molette
              et le fil de discussion reste bloqué. */}
          <div className="chat-fil" ref={filRef} data-lenis-prevent>
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'chat-tour chat-tour-moi' : 'chat-tour'}>
                <span className="chat-qui">{m.role === 'user' ? t.moi : t.eux}</span>
                <Texte contenu={m.content} />
              </div>
            ))}

            {messages.length === 1 && !enCours && (
              <div className="chat-suggestions">
                {t.suggestions.map(s => (
                  <button key={s} onClick={() => envoyer(s)} className="chat-suggestion">
                    {s}<span aria-hidden="true">→</span>
                  </button>
                ))}
              </div>
            )}

            {enCours && (
              <div className="chat-tour chat-attente" aria-live="polite">
                <span className="chat-qui">{t.eux}</span>
                <div className="chat-points"><span /><span /><span /></div>
              </div>
            )}

            {formulaire && !enCours && (
              <Formulaire
                pre={formulaire}
                t={t.form}
                envoye={envoye}
                page={pathname}
                conversation={messages}
                onEnvoye={(prenom) => {
                  setEnvoye(true)
                  setFormulaire(null)
                  setMessages(m => [...m, {
                    role: 'assistant',
                    content: t.form.merci(prenom),
                  }])
                }}
              />
            )}
          </div>

          <form className="chat-barre" onSubmit={e => { e.preventDefault(); envoyer(saisie) }}>
            <label htmlFor="chat-saisie" className="chat-label-cache">{t.monMessage}</label>
            <input
              id="chat-saisie"
              ref={champRef}
              value={saisie}
              onChange={e => setSaisie(e.target.value)}
              placeholder={t.champ}
              autoComplete="off"
              maxLength={2000}
              disabled={enCours}
            />
            <button type="submit" disabled={enCours || !saisie.trim()} aria-label={t.envoyer}>
              <svg width="17" height="11" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                <path d="M0 6h16M11.5 1 16.5 6l-5 5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </button>
          </form>

          <p className="chat-mention">
            {t.mention}
          </p>
        </div>
      )}

      <style jsx global>{`
        /* Lanceur : pastille ronde en bas à droite, comme sur la plupart des
           sites avec un chat (casque + point vert « en ligne »). Le libellé
           ne sort qu'au survol, pour ne rien recouvrir en permanence. */
        .chat-launcher {
          position: fixed; right: 24px; bottom: 24px; z-index: 115;
          width: 56px; height: 56px; padding: 0; border-radius: 50% !important;
          display: flex; align-items: center; justify-content: center;
          background: #111111; color: #FFFFFF; border: none; cursor: pointer;
          box-shadow: 0 10px 28px rgba(17,17,17,.22);
          opacity: 0; transform: translateY(12px) scale(.92); pointer-events: none;
          transition: opacity .35s ease, transform .35s cubic-bezier(.22,.61,.36,1), box-shadow .3s ease;
        }
        .chat-launcher-on { opacity: 1; transform: none; pointer-events: auto; }
        .chat-launcher-on:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(17,17,17,.28); }
        .chat-launcher > svg { width: 26px; height: 26px; }
        .chat-launcher-dot {
          position: absolute; right: 2px; top: 2px;
          width: 13px; height: 13px; border-radius: 50% !important;
          background: #2E9E5B; border: 2.5px solid #FFFFFF;
        }
        .chat-launcher-txt {
          position: absolute; right: 68px; top: 50%; transform: translateY(-50%) translateX(6px);
          padding: 9px 13px; background: #FFFFFF; color: #1C1614; white-space: nowrap;
          border: 1px solid rgba(17,17,17,.1); box-shadow: 0 8px 22px rgba(17,17,17,.1);
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 10.5px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.12em; line-height: 1;
          opacity: 0; pointer-events: none; transition: opacity .25s ease, transform .25s ease;
        }
        .chat-launcher-on:hover .chat-launcher-txt,
        .chat-launcher-on:focus-visible .chat-launcher-txt { opacity: 1; transform: translateY(-50%); }

        /* Avatar conseiller + pastille « en ligne ». */
        .chat-avatar {
          position: relative; flex-shrink: 0;
          width: 34px; height: 34px; border-radius: 50% !important;
          background: #F8F5EF; color: #875E10;
          display: flex; align-items: center; justify-content: center;
        }
        .chat-avatar svg { width: 19px; height: 19px; }
        .chat-avatar-lg { width: 38px; height: 38px; }
        .chat-avatar-lg svg { width: 21px; height: 21px; }
        .chat-pastille {
          position: absolute; right: -1px; bottom: -1px;
          width: 9px; height: 9px; border-radius: 50% !important;
          background: #2E9E5B; border: 2px solid #FFFFFF;
        }
        .chat-avatar-lg .chat-pastille { width: 10px; height: 10px; }

        .chat-panneau {
          position: fixed; right: 28px; bottom: 28px; z-index: 116;
          width: 400px; max-width: calc(100vw - 32px);
          height: 580px; max-height: calc(100vh - 56px);
          display: flex; flex-direction: column;
          background: #FFFFFF; border: 1px solid rgba(17,17,17,.1);
          box-shadow: 0 24px 64px rgba(17,17,17,.16);
          animation: chatMonte .4s cubic-bezier(.22,.61,.36,1) both;
        }
        @keyframes chatMonte { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

        /* ── Entête ── */
        .chat-entete {
          display: flex; align-items: center; gap: 13px;
          padding: 20px 20px 18px; background: #FFFFFF;
          border-bottom: 1px solid rgba(17,17,17,.09);
        }
        .chat-titre { display: flex; flex-direction: column; gap: 4px; min-width: 0; flex: 1; }
        .chat-marque {
          font-family: 'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif; font-size: 17px; line-height: 1; color: #1C1614;
        }
        .chat-sous {
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 9.5px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.14em; color: #875E10;
        }
        .chat-langues { display: flex; gap: 5px; flex-shrink: 0; }
        .chat-drapeau {
          padding: 0; background: none; border: none; line-height: 0;
          cursor: pointer; opacity: .32; transition: opacity .2s ease;
        }
        .chat-drapeau svg { width: 21px; height: 14px; display: block; }
        .chat-drapeau:hover { opacity: .7; }
        .chat-drapeau-on { opacity: 1; }

        .chat-fermer {
          background: none; border: none; padding: 6px; line-height: 0; color: #1C1614;
          opacity: .4; cursor: pointer; transition: opacity .2s ease; flex-shrink: 0;
        }
        .chat-fermer:hover { opacity: 1; }

        /* ── Fil ── */
        .chat-fil {
          flex: 1; overflow-y: auto; overscroll-behavior: contain;
          padding: 4px 20px 24px; background: #FFFFFF;
          scrollbar-width: thin; scrollbar-color: rgba(17,17,17,.18) transparent;
        }
        .chat-fil::-webkit-scrollbar { width: 5px; }
        .chat-fil::-webkit-scrollbar-thumb { background: rgba(17,17,17,.18); }

        .chat-tour { padding: 22px 0; border-bottom: 1px solid rgba(17,17,17,.07); }
        .chat-tour:last-child { border-bottom: none; }
        .chat-qui {
          display: block; margin-bottom: 11px;
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 9.5px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.18em; color: #875E10;
        }
        .chat-tour-moi .chat-qui { color: #A39B8E; }
        .chat-tour p {
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 14.5px; line-height: 1.75;
          color: #1C1614; overflow-wrap: anywhere;
        }
        .chat-tour p + p { margin-top: 13px; }
        .chat-tour-moi p { color: #605A4F; }
        .chat-tour strong { font-weight: 500; color: #1C1614; }
        .chat-tour a {
          color: #875E10; border-bottom: 1px solid rgba(135,94,16,.35);
          transition: border-color .2s ease;
        }
        .chat-tour a:hover { border-bottom-color: #875E10; }

        .chat-points { display: flex; gap: 6px; align-items: center; height: 18px; }
        .chat-points span {
          width: 4px; height: 4px; background: #B9AF9E; border-radius: 50% !important;
          animation: chatPoint 1.2s infinite ease-in-out;
        }
        .chat-points span:nth-child(2) { animation-delay: .16s; }
        .chat-points span:nth-child(3) { animation-delay: .32s; }
        @keyframes chatPoint { 0%, 60%, 100% { opacity: .3; } 30% { opacity: 1; } }

        /* ── Suggestions ── */
        .chat-suggestions { display: flex; flex-direction: column; gap: 0; padding-top: 4px; }
        .chat-suggestion {
          display: flex; align-items: center; justify-content: space-between; gap: 14px;
          width: 100%; padding: 15px 0; background: none; text-align: left;
          border: none; border-top: 1px solid rgba(17,17,17,.07);
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 13.5px; color: #1C1614;
          cursor: pointer; transition: color .25s ease;
        }
        .chat-suggestion span { color: #C6BCAB; font-size: 13px; transition: transform .25s ease, color .25s ease; }
        .chat-suggestion:hover { color: #875E10; }
        .chat-suggestion:hover span { color: #875E10; transform: translateX(3px); }

        /* ── Formulaire pré-rempli ── */
        .chat-form { padding: 22px 0 6px; border-top: 1px solid rgba(17,17,17,.07); }
        .chat-form-intro {
          margin: -4px 0 16px; font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif;
          font-size: 13px; line-height: 1.6; color: #605A4F;
        }
        .chat-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
        .chat-chip {
          padding: 7px 12px; background: none; border: 1px solid rgba(17,17,17,.14);
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 11.5px; color: #605A4F;
          cursor: pointer; transition: all .2s ease;
        }
        .chat-chip:hover { border-color: rgba(135,94,16,.5); color: #875E10; }
        .chat-chip-on { border-color: #875E10; color: #875E10; background: rgba(224,161,38,.07); }

        .chat-grille { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .chat-champ { display: block; margin-bottom: 10px; }
        .chat-champ > span {
          display: block; margin-bottom: 5px;
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 9.5px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.14em; color: #A39B8E;
        }
        .chat-champ input, .chat-champ textarea {
          width: 100%; padding: 10px 12px; background: #FDFBF7;
          border: 1px solid rgba(17,17,17,.1);
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 14px; color: #1C1614;
          resize: vertical;
        }
        .chat-champ input:focus-visible, .chat-champ textarea:focus-visible {
          outline: 1px solid #875E10; outline-offset: -1px; background: #FFFFFF;
        }
        .chat-envoi {
          width: 100%; margin-top: 14px; padding: 15px 20px;
          background: #111111; color: #FFFFFF; border: 1px solid #111111;
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 11.5px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.13em;
          cursor: pointer; transition: opacity .25s ease;
        }
        .chat-envoi:hover:not(:disabled) { opacity: .85; }
        .chat-envoi:disabled { opacity: .45; cursor: default; }
        .chat-form-erreur {
          margin-top: 10px; font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 12px; color: #9A3B2F;
        }

        /* ── Saisie ── */
        .chat-barre { display: flex; align-items: center; border-top: 1px solid rgba(17,17,17,.09); background: #FFFFFF; }
        .chat-label-cache {
          position: absolute; width: 1px; height: 1px; overflow: hidden;
          clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap;
        }
        .chat-barre input {
          flex: 1; min-width: 0; padding: 17px 8px 17px 20px; border: none; background: transparent;
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 14.5px; color: #1C1614;
        }
        .chat-barre input::placeholder { color: #A39B8E; }
        .chat-barre input:focus-visible { outline: 1px solid #875E10; outline-offset: -1px; }
        .chat-barre button {
          display: flex; align-items: center; justify-content: center;
          padding: 17px 20px; background: none; border: none; color: #1C1614;
          cursor: pointer; transition: opacity .25s ease, transform .25s ease;
        }
        .chat-barre button:hover:not(:disabled) { transform: translateX(2px); }
        .chat-barre button:disabled { opacity: .2; cursor: default; }

        .chat-mention {
          padding: 0 20px 16px; background: #FFFFFF;
          font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 10px; line-height: 1.6; color: #A39B8E;
        }

        @media (max-width: 768px) {
          /* La barre d'action mobile occupe déjà le bas de l'écran. */
          .chat-launcher { right: 14px; bottom: calc(84px + env(safe-area-inset-bottom, 0px)); width: 46px; height: 46px; }
          .chat-launcher > svg { width: 23px; height: 23px; }
          .chat-launcher-txt { display: none; }
          .chat-grille { grid-template-columns: 1fr; gap: 0; }
          .chat-panneau {
            right: 0; left: 0; bottom: 0; width: 100%; max-width: none; height: 84vh;
            border-left: none; border-right: none; border-bottom: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .chat-panneau { animation: none; }
          .chat-launcher { transition: opacity .2s ease; transform: none; }
          .chat-points span { animation: none; opacity: .5; }
        }
      `}</style>
    </>
  )
}

/* Formulaire court ouvert par l'assistant, pré-rempli avec ce qu'il a compris.
 * Poste sur /api/devis : même validation, même notification, même registre que
 * le formulaire du site — seule la source change. */
function Formulaire({ pre, t, envoye, page, conversation, onEnvoye }) {
  const [v, setV] = useState({
    prestation: pre.prestation || 'autre',
    date: pre.date || '',
    convives: pre.convives || '',
    ville: pre.ville || '',
    message: pre.recapitulatif || '',
    nom: '', email: '', societe: '', telephone: '', website: '',
  })
  const [etat, setEtat] = useState('pret')   // pret | envoi | erreur
  const maj = (k) => (e) => setV(x => ({ ...x, [k]: e.target.value }))

  const soumettre = async (e) => {
    e.preventDefault()
    if (etat === 'envoi') return
    setEtat('envoi')
    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...v,
          source: 'assistant',
          attribution: getAttribution(),
          pageOrigine: page,
          conversation: conversation.map(m => `${m.role === 'user' ? 'Client' : 'Assistant'} : ${m.content}`).join('\n\n'),
        }),
      })
      if (!res.ok) throw new Error('refus')
      // Même mesure que les autres formulaires du site : sans ça les demandes
      // venues de l'assistant étaient invisibles dans PostHog, Google Ads et GA4.
      window.dataLayer?.push({ event: 'devis_submit', form_location: 'assistant' })
      identifierVisiteur(v, 'assistant')
      onEnvoye(v.nom.trim().split(/\s+/)[0] || '')
    } catch {
      setEtat('erreur')
    }
  }

  if (envoye) return null

  return (
    <form className="chat-form" onSubmit={soumettre}>
      <span className="chat-qui">{t.titre}</span>
      <p className="chat-form-intro">{t.intro}</p>

      <div className="chat-chips" role="group" aria-label={t.titre}>
        {t.prestations.map(([k, label]) => (
          <button
            key={k}
            type="button"
            className={v.prestation === k ? 'chat-chip chat-chip-on' : 'chat-chip'}
            aria-pressed={v.prestation === k}
            onClick={() => setV(x => ({ ...x, prestation: k }))}
          >{label}</button>
        ))}
      </div>

      <div className="chat-grille">
        <Champ id="cf-date" label={t.date} type="date" value={v.date} onChange={maj('date')} autoComplete="off" />
        <Champ id="cf-convives" label={t.convives} type="number" min="1" value={v.convives} onChange={maj('convives')} placeholder="20" autoComplete="off" />
      </div>
      <Champ id="cf-ville" label={t.ville} value={v.ville} onChange={maj('ville')} placeholder="Paris 8e" autoComplete="address-level2" />

      <div className="chat-grille">
        <Champ id="cf-nom" label={t.nom} value={v.nom} onChange={maj('nom')} required autoComplete="name" />
        <Champ id="cf-societe" label={t.societe} value={v.societe} onChange={maj('societe')} autoComplete="organization" />
      </div>
      <div className="chat-grille">
        <Champ id="cf-email" label={t.email} type="email" value={v.email} onChange={maj('email')} required autoComplete="email" />
        <Champ id="cf-tel" label={t.tel} type="tel" value={v.telephone} onChange={maj('telephone')} autoComplete="tel" />
      </div>

      <label className="chat-champ">
        <span>{t.message}</span>
        <textarea rows={4} value={v.message} onChange={maj('message')} maxLength={2000} />
      </label>

      {/* Piège à robots, identique au formulaire du site */}
      <input
        type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={v.website} onChange={maj('website')}
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
      />

      <button type="submit" className="chat-envoi" disabled={etat === 'envoi'}>
        {etat === 'envoi' ? t.envoi : t.envoyer}
      </button>
      {etat === 'erreur' && (
        <p className="chat-form-erreur">
          {t.erreur}
        </p>
      )}
    </form>
  )
}

function Champ({ label, id, ...props }) {
  return (
    <label className="chat-champ" htmlFor={id}>
      <span>{label}{props.required ? ' *' : ''}</span>
      <input id={id} {...props} />
    </label>
  )
}

/* Conseiller avec casque : un visage plutôt qu'une bulle de messagerie,
   dessiné au trait comme les pictogrammes du site. */
/* Drapeaux au trait, dessinés ici plutôt qu'en emoji : un emoji de drapeau
   s'affiche en lettres (« FR », « GB ») sur Windows. */
function DrapeauFR() {
  return (
    <svg viewBox="0 0 21 14" aria-hidden="true">
      <rect width="7" height="14" fill="#0B3E8C" /><rect x="7" width="7" height="14" fill="#F4F4F2" />
      <rect x="14" width="7" height="14" fill="#C8102E" />
      <rect x="0.4" y="0.4" width="20.2" height="13.2" fill="none" stroke="rgba(17,17,17,.2)" strokeWidth="0.8" />
    </svg>
  )
}

function DrapeauEN() {
  return (
    <svg viewBox="0 0 21 14" aria-hidden="true">
      <rect width="21" height="14" fill="#0B3E8C" />
      <path d="M0 0l21 14M21 0L0 14" stroke="#F4F4F2" strokeWidth="2.8" />
      <path d="M0 0l21 14M21 0L0 14" stroke="#C8102E" strokeWidth="1.4" />
      <path d="M10.5 0v14M0 7h21" stroke="#F4F4F2" strokeWidth="4.2" />
      <path d="M10.5 0v14M0 7h21" stroke="#C8102E" strokeWidth="2.4" />
      <rect x="0.4" y="0.4" width="20.2" height="13.2" fill="none" stroke="rgba(17,17,17,.2)" strokeWidth="0.8" />
    </svg>
  )
}

function Conseiller() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5v-.9a7 7 0 0 1 14 0v.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5 12.2h.6a1.4 1.4 0 0 1 1.4 1.4v1.8a1.4 1.4 0 0 1-1.4 1.4H5a1.4 1.4 0 0 1-1.4-1.4v-1.8A1.4 1.4 0 0 1 5 12.2ZM19 12.2h-.6a1.4 1.4 0 0 0-1.4 1.4v1.8a1.4 1.4 0 0 0 1.4 1.4h.6a1.4 1.4 0 0 0 1.4-1.4v-1.8a1.4 1.4 0 0 0-1.4-1.4Z"
        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M19 16.8v.8a2.4 2.4 0 0 1-2.4 2.4H13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="11.6" cy="20" r="1.3" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

/* Rend les liens de l'assistant sans jamais injecter de HTML : on ne lui fait
 * pas confiance pour du balisage, donc on ne reconnaît que [libellé](/chemin)
 * — et une URL nue en secours, s'il oublie la consigne. Un chemin doit partir
 * d'une section connue du site : pas de lien vers l'extérieur. */
const SECTIONS = 'creations|occasions|journal|univers|traiteur|petit-dejeuner-entreprise|contact|devis'
const CHEMIN = `\\/(?:${SECTIONS})[\\w\\-/]*`
/* Trois formes reconnues, dans cet ordre : [libelle](/chemin), **gras**, /chemin nu.
 * Le gras est rendu ici plutot qu'interdit par la consigne : le modele finit
 * toujours par en glisser un, et mieux vaut l'afficher que de montrer les etoiles. */
const JETON = new RegExp(`\\[([^\\]\n]{1,80})\\]\\((${CHEMIN})\\)|\\*\\*([^*\n]{1,160})\\*\\*|(${CHEMIN})`, 'g')

function enrichir(ligne) {
  const morceaux = []
  let curseur = 0
  for (const m of ligne.matchAll(JETON)) {
    if (m.index > curseur) morceaux.push(ligne.slice(curseur, m.index))
    if (m[3] !== undefined) morceaux.push({ gras: m[3] })
    else morceaux.push({ href: m[2] || m[4], libelle: m[1] || m[4] })
    curseur = m.index + m[0].length
  }
  if (curseur < ligne.length) morceaux.push(ligne.slice(curseur))

  return morceaux.map((x, i) => {
    if (typeof x === 'string') return <span key={i}>{x}</span>
    if (x.gras) return <strong key={i}>{x.gras}</strong>
    return <a key={i} href={x.href}>{x.libelle}</a>
  })
}

/* Un paragraphe par bloc séparé par une ligne vide : c'est ce qui aère la
 * réponse, un simple retour à la ligne ne suffisait pas. */
function Texte({ contenu }) {
  const paragraphes = contenu.split(/\n{2,}/).map(p => p.trim()).filter(Boolean)
  return paragraphes.map((p, i) => <p key={i}>{enrichir(p)}</p>)
}
