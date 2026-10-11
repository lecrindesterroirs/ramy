'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { getAttribution } from '../lib/attribution'

/* Assistant du site. Répond sur la carte et les règles de commande, puis
 * transmet la demande dans l'OS (app/api/chat). Jamais sur /devis ni /panier :
 * sur ces pages la personne est déjà en train de commander, on ne la dérange pas. */
const EXCLUS = ['/devis', '/panier', '/commande-confirmee']

const ACCUEIL =
  "Bonjour. Je peux vous renseigner sur la carte, les prix, les délais et les livraisons, et transmettre votre demande à l'équipe. Que préparez-vous ?"

const SUGGESTIONS = [
  'Un petit-déjeuner pour 20 personnes',
  'Quels délais de commande ?',
  'Une option sans gluten',
]

export default function ChatWidget() {
  const pathname = usePathname()
  const [ouvert, setOuvert] = useState(false)
  const [messages, setMessages] = useState([{ role: 'assistant', content: ACCUEIL }])
  const [saisie, setSaisie] = useState('')
  const [enCours, setEnCours] = useState(false)
  const filRef = useRef(null)
  const champRef = useRef(null)

  const exclu = EXCLUS.some(p => pathname === p || pathname.startsWith(p + '/'))

  useEffect(() => {
    if (filRef.current) filRef.current.scrollTop = filRef.current.scrollHeight
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
          attribution: getAttribution(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      setMessages(m => [...m, {
        role: 'assistant',
        content: res.ok && data.reply
          ? data.reply
          : "Je ne suis pas joignable pour le moment. Écrivez-nous à commercial@lecrin-traiteur.fr, réponse sous 24 h.",
      }])
    } catch {
      setMessages(m => [...m, {
        role: 'assistant',
        content: "La connexion a échoué. Écrivez-nous à commercial@lecrin-traiteur.fr, réponse sous 24 h.",
      }])
    } finally {
      setEnCours(false)
    }
  }, [messages, enCours, pathname])

  if (exclu) return null

  return (
    <>
      {!ouvert && (
        <button
          onClick={() => setOuvert(true)}
          className="chat-launcher"
          aria-label="Ouvrir l'assistant"
        >
          <span className="chat-launcher-txt">Une question ?</span>
          <Bulle />
        </button>
      )}

      {ouvert && (
        <div className="chat-panneau" role="dialog" aria-label="Assistant L'Écrin Traiteur" aria-modal="false">
          <header className="chat-entete">
            <div>
              <div className="chat-marque">L&apos;Écrin Traiteur</div>
              <div className="chat-sous">Réponse immédiate · devis sous 24 h</div>
            </div>
            <button onClick={() => setOuvert(false)} aria-label="Fermer l'assistant" className="chat-fermer">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </button>
          </header>

          <div className="chat-fil" ref={filRef}>
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'chat-msg chat-msg-moi' : 'chat-msg chat-msg-lui'}>
                <Texte contenu={m.content} />
              </div>
            ))}

            {messages.length === 1 && !enCours && (
              <div className="chat-suggestions">
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => envoyer(s)} className="chat-suggestion">{s}</button>
                ))}
              </div>
            )}

            {enCours && (
              <div className="chat-msg chat-msg-lui chat-attente" aria-live="polite">
                <span /><span /><span />
              </div>
            )}
          </div>

          <form
            className="chat-barre"
            onSubmit={e => { e.preventDefault(); envoyer(saisie) }}
          >
            <label htmlFor="chat-saisie" className="chat-label-cache">Votre message</label>
            <input
              id="chat-saisie"
              ref={champRef}
              value={saisie}
              onChange={e => setSaisie(e.target.value)}
              placeholder="Écrivez votre question…"
              autoComplete="off"
              maxLength={2000}
              disabled={enCours}
            />
            <button type="submit" disabled={enCours || !saisie.trim()} aria-label="Envoyer">→</button>
          </form>

          <p className="chat-mention">
            Assistant automatique. Les informations sont données à titre indicatif ; l&apos;équipe confirme chaque commande.
          </p>
        </div>
      )}

      <style jsx global>{`
        .chat-launcher {
          position: fixed; right: 24px; bottom: 24px; z-index: 115;
          display: flex; align-items: center; gap: 10px;
          padding: 13px 18px;
          background: #111111; color: #FFFFFF; border: 1px solid #111111;
          font-family: 'Neue Montreal', sans-serif; font-size: 12px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.1em;
          cursor: pointer; transition: opacity .3s ease;
        }
        .chat-launcher:hover { opacity: .82; }

        .chat-panneau {
          position: fixed; right: 24px; bottom: 24px; z-index: 116;
          width: 380px; max-width: calc(100vw - 32px);
          height: 540px; max-height: calc(100vh - 48px);
          display: flex; flex-direction: column;
          background: #FFFFFF; border: 1px solid rgba(17,17,17,.12);
          box-shadow: 0 18px 50px rgba(17,17,17,.14);
          animation: chatMonte .35s cubic-bezier(.22,.61,.36,1) both;
        }
        @keyframes chatMonte { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }

        .chat-entete {
          display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;
          padding: 18px 18px 16px; border-bottom: 1px solid rgba(17,17,17,.1); background: #F8F5EF;
        }
        .chat-marque {
          font-family: 'Baskerville Display PT', Georgia, serif; font-size: 18px; line-height: 1.1; color: #111111;
        }
        .chat-sous {
          margin-top: 5px; font-family: 'Neue Montreal', sans-serif; font-size: 10px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.12em; color: #875E10;
        }
        .chat-fermer {
          background: none; border: none; padding: 5px; line-height: 0; color: #111111;
          opacity: .5; cursor: pointer; transition: opacity .2s ease; flex-shrink: 0;
        }
        .chat-fermer:hover { opacity: 1; }

        .chat-fil { flex: 1; overflow-y: auto; padding: 18px; display: flex; flex-direction: column; gap: 12px; }
        .chat-msg {
          max-width: 86%; padding: 11px 14px;
          font-family: 'Neue Montreal', sans-serif; font-size: 14px; line-height: 1.6;
          white-space: pre-wrap; overflow-wrap: anywhere;
        }
        .chat-msg-lui { align-self: flex-start; background: #F8F5EF; color: #111111; }
        .chat-msg-moi { align-self: flex-end; background: #111111; color: #FFFFFF; }
        .chat-msg a { color: #875E10; border-bottom: 1px solid rgba(135,94,16,.4); }
        .chat-msg-moi a { color: #FFFFFF; border-bottom-color: rgba(255,255,255,.5); }

        .chat-attente { display: flex; gap: 5px; align-items: center; padding: 15px 14px; }
        .chat-attente span {
          width: 5px; height: 5px; background: #875E10; border-radius: 50% !important;
          animation: chatPoint 1.1s infinite ease-in-out;
        }
        .chat-attente span:nth-child(2) { animation-delay: .15s; }
        .chat-attente span:nth-child(3) { animation-delay: .3s; }
        @keyframes chatPoint { 0%, 60%, 100% { opacity: .25; } 30% { opacity: 1; } }

        .chat-suggestions { display: flex; flex-direction: column; align-items: flex-start; gap: 7px; margin-top: 2px; }
        .chat-suggestion {
          padding: 8px 13px; background: transparent; border: 1px solid rgba(224,161,38,.55); color: #875E10;
          font-family: 'Neue Montreal', sans-serif; font-size: 12.5px; text-align: left;
          cursor: pointer; transition: background .25s ease;
        }
        .chat-suggestion:hover { background: rgba(224,161,38,.08); }

        .chat-barre { display: flex; border-top: 1px solid rgba(17,17,17,.1); }
        .chat-label-cache {
          position: absolute; width: 1px; height: 1px; overflow: hidden;
          clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap;
        }
        .chat-barre input {
          flex: 1; min-width: 0; padding: 15px 16px; border: none; outline-offset: -2px; background: #FFFFFF;
          font-family: 'Neue Montreal', sans-serif; font-size: 14px; color: #111111;
        }
        .chat-barre button {
          padding: 0 20px; background: #111111; color: #FFFFFF; border: none;
          font-size: 17px; cursor: pointer; transition: opacity .25s ease;
        }
        .chat-barre button:disabled { opacity: .3; cursor: default; }

        .chat-mention {
          padding: 0 18px 14px; background: #FFFFFF;
          font-family: 'Neue Montreal', sans-serif; font-size: 10.5px; line-height: 1.5; color: #605A4F;
        }

        @media (max-width: 768px) {
          /* La barre d'action mobile occupe déjà le bas de l'écran. */
          .chat-launcher { right: 16px; bottom: 84px; padding: 11px 15px; }
          .chat-launcher-txt { display: none; }
          .chat-panneau { right: 0; left: 0; bottom: 0; width: 100%; max-width: none; height: 82vh; border-left: none; border-right: none; border-bottom: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .chat-panneau { animation: none; }
          .chat-attente span { animation: none; opacity: .5; }
        }
      `}</style>
    </>
  )
}

function Bulle() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M1.5 3.2A1.7 1.7 0 0 1 3.2 1.5h9.6a1.7 1.7 0 0 1 1.7 1.7v6.4a1.7 1.7 0 0 1-1.7 1.7H6.1L2.8 14.1V11.3h-.3a1 1 0 0 1-1-1V3.2Z"
        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

/* Rend les chemins du site en liens cliquables, sans jamais injecter de HTML :
 * l'assistant ne produit que du texte, on ne lui fait pas confiance pour du balisage. */
const CHEMIN = /(\/(?:creations|occasions|journal|univers|traiteur|petit-dejeuner-entreprise)[\w\-/]*)/g

function Texte({ contenu }) {
  const bouts = contenu.split(CHEMIN)
  return bouts.map((b, i) =>
    i % 2 === 1
      ? <a key={i} href={b}>{b}</a>
      : <span key={i}>{b}</span>
  )
}
