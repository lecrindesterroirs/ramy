/*
  L'habillage des trois écrans : logo, fil des étapes, « paiement sécurisé »,
  et la barre du bas. Repris trait pour trait des maquettes validées.

  Pas de 'use client' : rien ici n'a d'état. Les écrans, eux, en ont.
*/

const ETAPES = [
  { n: 1, label: 'Panier', href: '/commander/panier' },
  { n: 2, label: 'Livraison', href: '/commander/livraison' },
  { n: 3, label: 'Paiement', href: '/commander/paiement' },
]

export function Cadenas() {
  return (
    <svg width="13" height="15" viewBox="0 0 24 26" fill="none" stroke="#605A4F" strokeWidth="1.9" aria-hidden="true">
      <rect x="3.5" y="11" width="17" height="12.5" />
      <path d="M7.5 11V7.2a4.5 4.5 0 019 0V11" />
    </svg>
  )
}

export function Fleche() {
  // currentColor : la flèche suit la couleur du bouton, blanche sur noir,
  // dorée sur la variante douce.
  return (
    <svg width="18" height="11" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M1 7h19M14.5 1.5L20.5 7l-6 5.5" />
    </svg>
  )
}

export function Pastille({ enfant = 'i' }) {
  const d = enfant === 'horloge' ? 'M12 6.6V12l3.4 2.2' : 'M12 7.4v5.2'
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#875E10" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" />
      <path d={d} />
      {enfant !== 'horloge' && <circle cx="12" cy="16.4" r=".6" fill="#875E10" />}
    </svg>
  )
}

export function Crayon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M16.5 3.5a2.1 2.1 0 013 3L7.5 18.5 3 20l1.5-4.5L16.5 3.5z" />
    </svg>
  )
}

/* etape : 1, 2 ou 3. atteintes : jusqu'où le client a le droit de revenir. */
export function EnteteTunnel({ etape, atteintes = etape }) {
  return (
    <>
      <div className="cmd-top">
        <a className="cmd-logo" href="/">L&apos;ÉCRIN<em>TRAITEUR</em></a>
        <div className="cmd-pas">
          {ETAPES.map((e, i) => {
            const classe = `cmd-p ${e.n === etape ? 'cmd-p-on' : e.n < etape ? 'cmd-p-fait' : ''}`
            const contenu = (
              <>
                <div className="cmd-n">{e.n < etape ? '✓' : e.n}</div>
                <span>{e.label}</span>
              </>
            )
            return (
              <div key={e.n} style={{ display: 'flex', alignItems: 'flex-start' }}>
                {i > 0 && <div className="cmd-ln" />}
                {e.n <= atteintes && e.n !== etape
                  ? <a className={classe} href={e.href}>{contenu}</a>
                  : <div className={classe}>{contenu}</div>}
              </div>
            )
          })}
        </div>
        <div className="cmd-secu"><Cadenas /> Paiement sécurisé</div>
      </div>
      <hr className="cmd-filet" />
    </>
  )
}

/*
  La barre du bas : un retour à gauche, le bouton d'action à droite, et entre
  les deux ce qui empêche d'avancer. `manque` est réservé à l'explication qui
  s'affiche quand le client appuie sur un bouton bloqué — un bouton gris qui
  ne répond pas le laisserait chercher tout seul.
*/
export function BasTunnel({ retour, retourLabel, children, erreur, manque }) {
  return (
    <>
      <hr className="cmd-filet" />
      <div className="cmd-bas">
        {retour
          ? <a className="cmd-retour" href={retour}>← {retourLabel}</a>
          : <span />}
        {manque || (erreur ? <p className="cmd-erreur">{erreur}</p> : null)}
        {children}
      </div>
    </>
  )
}
