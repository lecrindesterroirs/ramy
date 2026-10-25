'use client'

/*
  Calculateur de quantités (25/10/2026). Composant client léger : n'importe que
  lib/calculateurQuantites.js et lib/prixEntree.js (règle du 19/10/2026 : jamais
  journalData, lib/en/journal, citiesData ni lib/i18n dans un fichier client).
  embed = version sans en-tête ni pied de page, servie dans une iframe chez un tiers,
  avec un lien d'attribution visible vers la page.
*/
import { useState } from 'react'
import { calculer, borner, DUREES, N_MAX } from '../lib/calculateurQuantites'
import { euroFr, euroEn } from '../lib/prixEntree'

const SANS = "'Neue Montreal', 'Neue Montreal Fallback', sans-serif"
const SERIF = "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif"
const BASE = 'https://www.lecrin-traiteur.fr'

const T = {
  fr: {
    type: 'Type de prestation',
    types: { 'petit-dejeuner': 'Petit-déjeuner', pause: 'Pause / goûter', cocktail: 'Cocktail', plateaux: 'Plateaux repas' },
    n: 'Nombre de personnes',
    duree: 'Durée du cocktail',
    durees: { court: '1 h 30 à 2 h (afterwork, pot)', moyen: '2 h à 2 h 30, ou à la place du déjeuner', long: '2 h 30 à 3 h, à la place du dîner', 'tres-long': 'Plus de 3 h' },
    nominative: 'Liste nominative confirmée la veille',
    quantites: 'Quantités conseillées',
    budget: 'Budget indicatif chez L\'Écrin Traiteur',
    total: 'Total HT, livraison comprise',
    totalPdj: 'À partir de, HT, livraison comprise',
    sansPrix: 'Pas de prix calculé ici pour ce format : voir les tarifs ou demander un devis.',
    devis: 'Demander un devis →',
    devisHref: '/devis',
    tarifsHref: '/tarifs',
    tarifs: 'Voir les tarifs',
    hors: 'Prix HT 2026. Livraison 29 € HT à Paris et dans les communes proches, autres zones sur devis. Commande jusqu\'à la veille 14h, livraison dès 6h30.',
    attribution: 'Calculateur proposé par L\'Écrin Traiteur',
    page: '/calculateur-quantites',
    integrer: 'Intégrer ce calculateur sur votre site',
    integrerTexte: 'Copiez ce code dans votre page (intranet, blog, guide d\'accueil). Le calculateur reste gratuit ; le lien d\'attribution doit rester visible.',
    copier: 'Copier le code',
    copie: 'Code copié',
    persUnit: 'pers.',
  },
  en: {
    type: 'Type of service',
    types: { 'petit-dejeuner': 'Breakfast', pause: 'Afternoon break', cocktail: 'Cocktail', plateaux: 'Lunch trays' },
    n: 'Number of people',
    duree: 'Cocktail length',
    durees: { court: '1.5 to 2 hours (afterwork, drinks)', moyen: '2 to 2.5 hours, or instead of lunch', long: '2.5 to 3 hours, instead of dinner', 'tres-long': 'More than 3 hours' },
    nominative: 'Named list confirmed the day before',
    quantites: 'Recommended quantities',
    budget: 'Indicative budget at L\'Écrin Traiteur',
    total: 'Total excl. VAT, delivery included',
    totalPdj: 'From, excl. VAT, delivery included',
    sansPrix: 'No price is calculated here for this format: see the prices page or ask for a quote.',
    devis: 'Request a quote →',
    devisHref: '/en/devis',
    tarifsHref: '/en/tarifs',
    tarifs: 'See prices',
    hors: '2026 prices excl. VAT. Delivery €29 excl. VAT in Paris and nearby towns, other areas on quote. Order until 2 pm the day before, delivery from 6:30 am.',
    attribution: 'Calculator by L\'Écrin Traiteur',
    page: '/en/calculateur-quantites',
    integrer: 'Embed this calculator on your site',
    integrerTexte: 'Paste this code into your page (intranet, blog, onboarding guide). The calculator is free; the attribution link must stay visible.',
    copier: 'Copy the code',
    copie: 'Code copied',
    persUnit: 'people',
  },
}

const label = { fontFamily: SANS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }
const champ = { fontFamily: SANS, fontSize: '16px', padding: '12px 14px', border: '1px solid rgba(17,17,17,0.25)', background: '#fff', color: 'var(--text-primary)', width: '100%', borderRadius: 0 }
const h3 = { fontFamily: SERIF, fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)', margin: '0 0 14px' }
const txt = { fontFamily: SANS, fontSize: '15px', lineHeight: 1.7, color: 'var(--text-primary)' }
const btn = { fontFamily: SANS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: 'var(--accent)', padding: '14px 26px', display: 'inline-block', textDecoration: 'none', border: 0, cursor: 'pointer' }

export default function CalculateurQuantites({ lang = 'fr', embed = false }) {
  const t = T[lang] || T.fr
  const eur = lang === 'en' ? euroEn : euroFr
  const [type, setType] = useState('petit-dejeuner')
  const [saisie, setSaisie] = useState('20')
  const [duree, setDuree] = useState('court')
  const [nominative, setNominative] = useState(true)
  const [copie, setCopie] = useState(false)

  const n = borner(saisie === '' ? 1 : saisie)
  const r = calculer({ type, n, duree, nominative })
  const cible = embed ? { target: '_blank', rel: 'noopener' } : {}
  const lien = (href) => (embed ? `${BASE}${href}` : href)

  const code = `<iframe src="${BASE}${t.page}/embed" title="${t.attribution}" width="100%" height="760" style="border:0;max-width:720px" loading="lazy"></iframe>\n<p><a href="${BASE}${t.page}">${t.attribution}</a></p>`
  const copier = () => {
    try {
      navigator.clipboard.writeText(code).then(() => { setCopie(true); setTimeout(() => setCopie(false), 2500) })
    } catch (e) { /* presse-papiers indisponible : le code reste sélectionnable */ }
  }

  return (
    <div lang={lang} style={{ maxWidth: '760px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginBottom: '28px' }}>
        <label>
          <span style={label}>{t.type}</span>
          <select value={type} onChange={e => setType(e.target.value)} style={champ}>
            {Object.entries(t.types).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
        <label>
          <span style={label}>{t.n}</span>
          <input type="number" inputMode="numeric" min="1" max={N_MAX} value={saisie} onChange={e => setSaisie(e.target.value)} onBlur={() => setSaisie(String(n))} style={champ} />
        </label>
        {type === 'cocktail' && (
          <label>
            <span style={label}>{t.duree}</span>
            <select value={duree} onChange={e => setDuree(e.target.value)} style={champ}>
              {Object.keys(DUREES).map(k => <option key={k} value={k}>{t.durees[k]}</option>)}
            </select>
          </label>
        )}
        {type === 'plateaux' && (
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', ...txt, alignSelf: 'end', paddingBottom: '12px' }}>
            <input type="checkbox" checked={nominative} onChange={e => setNominative(e.target.checked)} />
            {t.nominative}
          </label>
        )}
      </div>

      <div aria-live="polite" style={{ background: 'var(--bg-secondary)', padding: '26px 24px', marginBottom: '20px' }}>
        <h3 style={h3}>{t.quantites} · {r.n} {t.persUnit}</h3>
        <ul style={{ ...txt, paddingLeft: '20px', margin: 0 }}>
          {r.lignes.map((l, i) => <li key={i} style={{ marginBottom: '6px' }}>{l[lang] || l.fr}</li>)}
        </ul>
      </div>

      <div style={{ border: '1px solid rgba(17,17,17,0.15)', padding: '26px 24px', marginBottom: '20px' }}>
        <h3 style={h3}>{t.budget}</h3>
        {r.budget ? (
          <>
            <table style={{ width: '100%', borderCollapse: 'collapse', ...txt }}>
              <tbody>
                {r.budget.lignes.map((l, i) => (
                  <tr key={i}><td style={{ padding: '6px 0' }}>{l[lang] || l.fr}</td><td style={{ padding: '6px 0', textAlign: 'right', whiteSpace: 'nowrap' }}>{eur(l.montant)}</td></tr>
                ))}
                <tr style={{ borderTop: '1px solid rgba(17,17,17,0.3)' }}>
                  <td style={{ padding: '10px 0', fontWeight: 500 }}>{type === 'petit-dejeuner' ? t.totalPdj : t.total}</td>
                  <td style={{ padding: '10px 0', textAlign: 'right', fontWeight: 500, whiteSpace: 'nowrap' }}>{eur(r.budget.total)}</td>
                </tr>
                {r.budget.option && (
                  <tr><td style={{ padding: '6px 0', color: 'var(--text-secondary)' }}>{r.budget.option[lang]}</td><td style={{ padding: '6px 0', textAlign: 'right', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{eur(r.budget.option.montant)}</td></tr>
                )}
              </tbody>
            </table>
            {r.budget.note && <p style={{ ...txt, fontSize: '14px', color: 'var(--text-secondary)', margin: '12px 0 0' }}>{r.budget.note[lang]}</p>}
          </>
        ) : (
          <p style={{ ...txt, margin: 0 }}>
            {t.sansPrix} <a href={lien(t.tarifsHref)} {...cible} style={{ color: 'var(--text-primary)' }}>{t.tarifs}</a>
          </p>
        )}
        <p style={{ ...txt, fontSize: '13px', color: 'var(--text-secondary)', margin: '14px 0 0' }}>{t.hors}</p>
      </div>

      <div style={{ textAlign: 'center', margin: '24px 0' }}>
        <a href={lien(t.devisHref)} {...cible} style={btn}>{t.devis}</a>
      </div>

      {embed ? (
        <p style={{ ...txt, fontSize: '13px', textAlign: 'center', margin: '8px 0 0' }}>
          <a href={`${BASE}${t.page}`} target="_blank" rel="noopener" style={{ color: 'var(--text-primary)' }}>{t.attribution}</a>
        </p>
      ) : (
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.12)', paddingTop: '28px', marginTop: '40px' }}>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(22px, 2.4vw, 28px)', fontWeight: 400, color: 'var(--text-primary)', margin: '0 0 12px' }}>{t.integrer}</h2>
          <p style={{ ...txt, marginBottom: '12px' }}>{t.integrerTexte}</p>
          <textarea readOnly value={code} rows={4} onFocus={e => e.target.select()} style={{ ...champ, fontFamily: 'ui-monospace, Menlo, monospace', fontSize: '13px', resize: 'vertical' }} />
          <button type="button" onClick={copier} style={{ ...btn, marginTop: '12px' }}>{copie ? t.copie : t.copier}</button>
        </div>
      )}
    </div>
  )
}
