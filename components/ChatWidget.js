'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { getAttribution } from '../lib/attribution'

/* Assistant du site. Répond sur la carte et les règles de commande, puis
 * transmet la demande dans l'OS (app/api/chat). Jamais sur /devis ni /panier :
 * sur ces pages la personne est déjà en train de commander, on ne la dérange pas.
 *
 * Parti pris graphique : pas de bulles de messagerie. Tout est posé sur blanc,
 * chaque tour annoncé par un filet et une étiquette, comme une page du site. */
const EXCLUS = ['/devis', '/panier', '/commande-confirmee']

const ACCUEIL =
  "Bonjour. Je peux vous renseigner sur la carte, les prix, les délais et les livraisons, et transmettre votre demande à l'équipe.\n\nQue préparez-vous ?"

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
          attribution: getAttribution(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      setMessages(m => [...m, {
        role: 'assistant',
        content: res.ok && data.reply
          ? data.reply
          : "Je ne suis pas joignable pour le moment.\n\nÉcrivez-nous à commercial@lecrin-traiteur.fr, réponse sous 24 h.",
      }])
    } catch {
      setMessages(m => [...m, {
        role: 'assistant',
        content: "La connexion a échoué.\n\nÉcrivez-nous à commercial@lecrin-traiteur.fr, réponse sous 24 h.",
      }])
    } finally {
      setEnCours(false)
    }
  }, [messages, enCours, pathname])

  if (exclu) return null

  return (
    <>
      {!ouvert && (
        <button onClick={() => setOuvert(true)} className="chat-launcher" aria-label="Ouvrir l'assistant">
          <Bulle />
          <span className="chat-launcher-txt">Une question ?</span>
        </button>
      )}

      {ouvert && (
        <div className="chat-panneau" role="dialog" aria-label="Assistant L'Écrin Traiteur" aria-modal="false">
          <header className="chat-entete">
            <img src="/logo-footer.svg" alt="" className="chat-mono" width="26" height="26" />
            <div className="chat-titre">
              <span className="chat-marque">L&apos;Écrin Traiteur</span>
              <span className="chat-sous">Réponse immédiate · Devis sous 24 h</span>
            </div>
            <button onClick={() => setOuvert(false)} aria-label="Fermer l'assistant" className="chat-fermer">
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
                <span className="chat-qui">{m.role === 'user' ? 'Vous' : "L'Écrin"}</span>
                <Texte contenu={m.content} />
              </div>
            ))}

            {messages.length === 1 && !enCours && (
              <div className="chat-suggestions">
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => envoyer(s)} className="chat-suggestion">
                    {s}<span aria-hidden="true">→</span>
                  </button>
                ))}
              </div>
            )}

            {enCours && (
              <div className="chat-tour chat-attente" aria-live="polite">
                <span className="chat-qui">L&apos;Écrin</span>
                <div className="chat-points"><span /><span /><span /></div>
              </div>
            )}
          </div>

          <form className="chat-barre" onSubmit={e => { e.preventDefault(); envoyer(saisie) }}>
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
            <button type="submit" disabled={enCours || !saisie.trim()} aria-label="Envoyer">
              <svg width="17" height="11" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                <path d="M0 6h16M11.5 1 16.5 6l-5 5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </button>
          </form>

          <p className="chat-mention">
            Assistant automatique. Les informations sont données à titre indicatif ; l&apos;équipe confirme chaque commande.
          </p>
        </div>
      )}

      <style jsx global>{`
        .chat-launcher {
          position: fixed; right: 28px; bottom: 28px; z-index: 115;
          display: flex; align-items: center; gap: 11px;
          padding: 14px 20px;
          background: #111111; color: #FFFFFF; border: 1px solid #111111;
          font-family: 'Neue Montreal', sans-serif; font-size: 11px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.14em;
          cursor: pointer; transition: opacity .3s ease;
          box-shadow: 0 10px 28px rgba(17,17,17,.16);
        }
        .chat-launcher:hover { opacity: .85; }

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
        .chat-mono { width: 26px; height: auto; flex-shrink: 0; opacity: .9; }
        .chat-titre { display: flex; flex-direction: column; gap: 4px; min-width: 0; flex: 1; }
        .chat-marque {
          font-family: 'Baskerville Display PT', Georgia, serif; font-size: 17px; line-height: 1; color: #1C1614;
        }
        .chat-sous {
          font-family: 'Neue Montreal', sans-serif; font-size: 9.5px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.14em; color: #875E10;
        }
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
          font-family: 'Neue Montreal', sans-serif; font-size: 9.5px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.18em; color: #875E10;
        }
        .chat-tour-moi .chat-qui { color: #A39B8E; }
        .chat-tour p {
          font-family: 'Neue Montreal', sans-serif; font-size: 14.5px; line-height: 1.75;
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
          font-family: 'Neue Montreal', sans-serif; font-size: 13.5px; color: #1C1614;
          cursor: pointer; transition: color .25s ease;
        }
        .chat-suggestion span { color: #C6BCAB; font-size: 13px; transition: transform .25s ease, color .25s ease; }
        .chat-suggestion:hover { color: #875E10; }
        .chat-suggestion:hover span { color: #875E10; transform: translateX(3px); }

        /* ── Saisie ── */
        .chat-barre { display: flex; align-items: center; border-top: 1px solid rgba(17,17,17,.09); background: #FFFFFF; }
        .chat-label-cache {
          position: absolute; width: 1px; height: 1px; overflow: hidden;
          clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap;
        }
        .chat-barre input {
          flex: 1; min-width: 0; padding: 17px 8px 17px 20px; border: none; background: transparent;
          font-family: 'Neue Montreal', sans-serif; font-size: 14.5px; color: #1C1614;
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
          font-family: 'Neue Montreal', sans-serif; font-size: 10px; line-height: 1.6; color: #A39B8E;
        }

        @media (max-width: 768px) {
          /* La barre d'action mobile occupe déjà le bas de l'écran. */
          .chat-launcher { right: 16px; bottom: 84px; padding: 13px 15px; }
          .chat-launcher-txt { display: none; }
          .chat-panneau {
            right: 0; left: 0; bottom: 0; width: 100%; max-width: none; height: 84vh;
            border-left: none; border-right: none; border-bottom: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .chat-panneau { animation: none; }
          .chat-points span { animation: none; opacity: .5; }
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
