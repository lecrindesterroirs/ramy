'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import LogosSection from '../../components/LogosSection'
import ReviewsBadge from '../../components/ReviewsBadge'
import { contactPageLd } from '../../lib/site'

// ── Data ──────────────────────────────────────────────────────────────────────

const prestations = [
  {
    id: 'petit-dejeuner',
    titre: 'Petit-déjeuner',
    desc: 'Viennoiseries, jus frais, pâtisseries artisanales, fruits et douceurs.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M17 8h1a4 4 0 010 8h-1"/>
        <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="2" x2="6" y2="4"/>
        <line x1="10" y1="2" x2="10" y2="4"/>
        <line x1="14" y1="2" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    id: 'plateaux-repas',
    titre: 'Plateaux repas',
    desc: 'Plateaux individuels gourmands, équilibrés et de saison.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/>
        <path d="M7 2v20"/>
        <path d="M21 15V2a5 5 0 00-5 5v6h3.5c.8 0 1.5.7 1.5 1.5V22"/>
      </svg>
    ),
  },
  {
    id: 'cocktail-buffet',
    titre: 'Cocktail / Buffet',
    desc: 'Pièces petites et bouchées, buffets élaborés, champagne.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M8 22h8M12 11v11M3 3h18l-3 7H6L3 3z"/>
      </svg>
    ),
  },
  {
    id: 'gouter',
    titre: 'Goûter',
    desc: 'Pâtisseries, gâteaux, boissons chaudes, moments sucrés et joyeux.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        <path d="M12 3v1M15.5 4.5l-.7.7M17 8h-1M15.5 11.5l-.7-.7"/>
      </svg>
    ),
  },
  {
    id: 'evenement-sur-mesure',
    titre: 'Événement sur mesure',
    desc: 'Une conception entièrement personnalisée pour vos envies.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>
    ),
  },
  {
    id: 'autre',
    titre: 'Autre demande',
    desc: 'Une demande spécifique ? Décrivez-la, nous nous adaptons.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
]

const MOIS = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
const JOURS = ['L','M','M','J','V','S','D']

// ── DatePicker ────────────────────────────────────────────────────────────────

function DatePicker({ value, onChange }) {
  const today = new Date()
  const [open, setOpen] = useState(false)
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() })
  const ref = useRef(null)

  useEffect(() => {
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  const selected = value ? new Date(value + 'T00:00:00') : null

  const prevMonth = () => setView(v => { const d = new Date(v.year, v.month - 1); return { year: d.getFullYear(), month: d.getMonth() } })
  const nextMonth = () => setView(v => { const d = new Date(v.year, v.month + 1); return { year: d.getFullYear(), month: d.getMonth() } })

  const firstDay = new Date(view.year, view.month, 1)
  const lastDay = new Date(view.year, view.month + 1, 0)
  const offset = (firstDay.getDay() + 6) % 7
  const days = [...Array(offset).fill(null), ...Array.from({ length: lastDay.getDate() }, (_, i) => i + 1)]

  const isSelected = d => selected && selected.getFullYear() === view.year && selected.getMonth() === view.month && selected.getDate() === d
  const isToday = d => today.getFullYear() === view.year && today.getMonth() === view.month && today.getDate() === d
  const isPast = d => {
    if (!d) return false
    const date = new Date(view.year, view.month, d)
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return date < todayMidnight
  }

  const pick = d => {
    if (!d || isPast(d)) return
    const mm = String(view.month + 1).padStart(2, '0')
    const dd = String(d).padStart(2, '0')
    onChange(`${view.year}-${mm}-${dd}`)
    setOpen(false)
  }

  const displayValue = selected
    ? selected.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })
    : ''

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <div onClick={() => setOpen(o => !o)} style={{ ...fieldStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', color: value ? 'var(--text-primary)' : 'rgba(17,17,17,0.35)' }}>
        <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px' }}>{displayValue || 'jj / mm / aaaa'}</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'rgba(17,17,17,0.3)', flexShrink: 0 }}>
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      </div>
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.1)', boxShadow: '0 16px 40px rgba(17,17,17,0.1)', zIndex: 300, padding: '18px', minWidth: '260px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <button type="button" onClick={prevMonth} style={calNavBtn}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15,18 9,12 15,6"/></svg></button>
            <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, color: 'var(--text-primary)', letterSpacing: '0.04em' }}>{MOIS[view.month]} {view.year}</span>
            <button type="button" onClick={nextMonth} style={calNavBtn}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9,18 15,12 9,6"/></svg></button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px', marginBottom: '4px' }}>
            {JOURS.map((j, i) => <div key={i} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.08em', color: 'rgba(17,17,17,0.3)', textAlign: 'center', padding: '3px 0' }}>{j}</div>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px' }}>
            {days.map((d, i) => (
              <button key={i} type="button" onClick={() => pick(d)} disabled={!d || isPast(d)} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', borderRadius: '50%', border: 'none', background: isSelected(d) ? '#E0A126' : 'transparent', color: isSelected(d) ? '#FFF' : isPast(d) ? 'rgba(17,17,17,0.18)' : isToday(d) ? '#E0A126' : d ? 'var(--text-primary)' : 'transparent', cursor: d && !isPast(d) ? 'pointer' : 'default', outline: 'none', fontWeight: isSelected(d) ? 500 : 400, transition: 'background 0.15s', textDecoration: isPast(d) ? 'line-through' : 'none' }}
                onMouseEnter={e => { if (d && !isSelected(d) && !isPast(d)) e.currentTarget.style.background = 'rgba(224,161,38,0.1)' }}
                onMouseLeave={e => { if (d && !isSelected(d) && !isPast(d)) e.currentTarget.style.background = 'transparent' }}
              >{d || ''}</button>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(17,17,17,0.06)' }}>
            <button type="button" onClick={() => { onChange(''); setOpen(false) }} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.4)', background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}>Effacer</button>
            <button type="button" onClick={() => { const mm = String(today.getMonth()+1).padStart(2,'0'); const dd = String(today.getDate()).padStart(2,'0'); onChange(`${today.getFullYear()}-${mm}-${dd}`); setView({ year: today.getFullYear(), month: today.getMonth() }); setOpen(false) }} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: '#E0A126', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}>Aujourd'hui</button>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Progress bar ──────────────────────────────────────────────────────────────

function ProgressBar({ step, goTo }) {
  const total = 3
  return (
    <div className="devis-progress-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 32px', borderBottom: '1px solid rgba(17,17,17,0.08)' }}>
      <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '19px', fontWeight: 400, color: '#111111', flex: '0 0 auto' }}>
        L&apos;Écrin
      </span>
      <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', flex: '1 1 auto', textAlign: 'center' }}>
        Étape {step} sur {total}
      </span>
      <a href="/" aria-label="Fermer" style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', color: 'rgba(17,17,17,0.5)', textDecoration: 'none' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </a>
    </div>
  )
}

// ── Step 1 ────────────────────────────────────────────────────────────────────

function Step1({ data, setData, onSelect }) {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '10px' }}>
          Pour quelle occasion ?
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReviewsBadge />
        </div>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11.5px', letterSpacing: '0.02em', color: 'var(--text-secondary)', marginTop: '8px' }}>
          Commande minimum 50&nbsp;€ HT · Livraison 29&nbsp;€ HT à Paris · Devis sous 24h
        </p>
      </div>

      <div className="step1-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
        {prestations.map(p => {
          const active = data.prestation === p.id
          return (
            <div
              key={p.id}
              onClick={() => { setData(d => ({ ...d, prestation: p.id })); onSelect() }}
              style={{
                background: active ? '#111111' : '#FFFFFF',
                border: `1px solid ${active ? '#111111' : 'rgba(17,17,17,0.18)'}`,
                padding: '26px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.25s ease, border-color 0.25s ease, transform 0.2s ease',
                transform: active ? 'translateY(-2px)' : 'translateY(0)',
              }}
              onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)' } }}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.18)'; e.currentTarget.style.transform = 'translateY(0)' } }}
            >
              <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '17px', fontWeight: 400, color: active ? '#FFFFFF' : '#111111', lineHeight: 1.2, transition: 'color 0.25s ease', textAlign: 'center' }}>{p.titre}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── CityAutocomplete ──────────────────────────────────────────────────────────

function CityAutocomplete({ value, onChange, hasError }) {
  const [suggestions, setSuggestions] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const ref = useRef(null)
  const timer = useRef(null)

  useEffect(() => {
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  const handleChange = (e) => {
    const v = e.target.value
    onChange(v)
    clearTimeout(timer.current)
    if (v.length < 2) { setSuggestions([]); setOpen(false); return }
    setLoading(true)
    timer.current = setTimeout(async () => {
      try {
        let results = []
        if (/^\d+$/.test(v)) {
          if (v.length >= 5) {
            // Code postal complet : correspondance exacte
            const res = await fetch(`https://geo.api.gouv.fr/communes?codePostal=${v}&fields=nom,codesPostaux&boost=population&limit=6`)
            const raw = await res.json()
            // Si la commune a plusieurs codes (ex: Paris), ajouter le label d'arrondissement
            results = raw.map(c => {
              if ((c.codesPostaux?.length || 0) > 1) {
                const n = parseInt(v.slice(-2), 10)
                const arr = n ? ` ${n}${n === 1 ? 'er' : 'e'} arr.` : ''
                return { nom: `${c.nom}${arr}`, rawNom: c.nom, codesPostaux: [v] }
              }
              return { nom: c.nom, rawNom: c.nom, codesPostaux: c.codesPostaux }
            })
          } else {
            // Code postal partiel : on cherche par département puis on filtre
            const dept = v.substring(0, 2)
            const res = await fetch(`https://geo.api.gouv.fr/communes?codeDepartement=${dept}&fields=nom,codesPostaux&boost=population&limit=100`)
            const all = await res.json()
            // Éclater les communes avec plusieurs codes postaux (ex: Paris → 75001, 75002…)
            const expanded = []
            all.forEach(c => {
              const matching = (c.codesPostaux || []).filter(cp => cp.startsWith(v))
              if (matching.length === 0) return
              if (matching.length === 1) {
                expanded.push({ nom: c.nom, codesPostaux: matching })
              } else {
                matching.forEach(cp => {
                  const n = parseInt(cp.slice(-2), 10)
                  const arrLabel = n ? ` ${n}${n === 1 ? 'er' : 'e'} arr.` : ''
                  expanded.push({ nom: `${c.nom}${arrLabel}`, rawNom: c.nom, codesPostaux: [cp] })
                })
              }
            })
            results = expanded.slice(0, 6)
          }
        } else {
          // Nom de ville
          const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(v)}&fields=nom,codesPostaux&boost=population&limit=6`)
          results = await res.json()
        }
        setSuggestions(results)
        setOpen(results.length > 0)
      } catch {}
      setLoading(false)
    }, 250)
  }

  const pick = (city) => {
    onChange(city.rawNom || city.nom)
    setSuggestions([])
    setOpen(false)
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <input
        value={value}
        onChange={handleChange}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        placeholder="Ex : Paris, 92150, Suresnes..."
        autoComplete="postal-code"
        style={{ ...fieldStyle, borderColor: hasError ? 'rgba(192,57,43,0.5)' : 'rgba(17,17,17,0.1)' }}
      />
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: loading ? '#E0A126' : 'rgba(17,17,17,0.3)', pointerEvents: 'none', transition: 'color 0.2s' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 2px)', left: 0, right: 0, background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.1)', boxShadow: '0 8px 24px rgba(17,17,17,0.08)', zIndex: 200 }}>
          {suggestions.map((city, i) => (
            <div
              key={i}
              onMouseDown={() => pick(city)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', cursor: 'pointer', borderBottom: i < suggestions.length - 1 ? '1px solid rgba(17,17,17,0.05)' : 'none', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-secondary)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-primary)' }}>{city.nom}</span>
              <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.35)' }}>{city.codesPostaux?.[0]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Step 2 ────────────────────────────────────────────────────────────────────

function Step2({ data, setData, showErrors }) {
  const set = (k, v) => setData(d => ({ ...d, [k]: v }))
  const err = (k) => showErrors && !data[k]?.trim()
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => { setIsMobile(window.innerWidth <= 768) }, [])

  return (
    <div className="step2-inner" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '10px' }}>
          Parlez-nous de votre projet
        </h2>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Ces informations nous permettent de vous proposer le devis le plus adapté à vos besoins.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="step2-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={labelStyle}>Date souhaitée <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', letterSpacing: '0.08em', color: 'rgba(17,17,17,0.35)', textTransform: 'none', fontWeight: 400 }}>(facultatif)</span></label>
            <DatePicker value={data.date} onChange={v => set('date', v)} />
          </div>
          <div>
            <label style={labelStyle}>Nombre de convives <span style={{ color: '#E0A126' }}>*</span></label>
            <div style={{ position: 'relative' }}>
              <input inputMode="numeric" pattern="[0-9]*" value={data.convives} onChange={e => set('convives', e.target.value)} placeholder="Ex : 30 personnes" style={{ ...fieldStyle, borderColor: err('convives') ? 'rgba(192,57,43,0.5)' : 'rgba(17,17,17,0.1)' }} />
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(17,17,17,0.3)', pointerEvents: 'none' }}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            {err('convives') && <p className="step2-error" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', color: '#c0392b', marginTop: '4px' }}>Champ requis</p>}
          </div>
        </div>
        <div className="step2-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={labelStyle}>Ville ou code postal <span style={{ color: '#E0A126' }}>*</span></label>
            <CityAutocomplete value={data.ville} onChange={v => set('ville', v)} hasError={err('ville')} />
            {err('ville') && <p className="step2-error" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', color: '#c0392b', marginTop: '4px' }}>Champ requis</p>}
          </div>
          <div>
            <label style={labelStyle}>Budget estimé <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', letterSpacing: '0.08em', color: 'rgba(17,17,17,0.35)', textTransform: 'none', fontWeight: 400 }}>(facultatif)</span></label>
            <div style={{ position: 'relative' }}>
              <input inputMode="numeric" pattern="[0-9]*" value={data.budget} onChange={e => set('budget', e.target.value)} placeholder="Ex : 1000 € à 2000 €" style={fieldStyle} />
              <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'rgba(17,17,17,0.3)' }}>€</span>
            </div>
          </div>
        </div>
        <div>
          <label style={labelStyle}>Détails de votre projet <span style={{ color: '#E0A126' }}>*</span></label>
          <textarea
            value={data.message}
            onChange={e => set('message', e.target.value)}
            placeholder={isMobile ? "Décrivez votre événement, vos contraintes alimentaires ou toute information utile…" : "Décrivez votre événement, vos contraintes alimentaires ou toute information utile…\nPlus nous en savons, plus notre proposition sera adaptée à vos besoins."}
            rows={6}
            style={{ ...fieldStyle, height: 'auto', resize: 'none', lineHeight: 1.7, borderColor: err('message') ? 'rgba(192,57,43,0.5)' : 'rgba(17,17,17,0.1)' }}
          />
          {err('message') && <p className="step2-error" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', color: '#c0392b', marginTop: '4px' }}>Champ requis</p>}
        </div>
      </div>
    </div>
  )
}

// ── Step 3 ────────────────────────────────────────────────────────────────────

function Step3({ data, setData, onEdit }) {
  const set = (k, v) => setData(d => ({ ...d, [k]: v }))

  const prestationLabel = prestations.find(p => p.id === data.prestation)?.titre || 'Non renseigné'
  const dateLabel = data.date ? new Date(data.date + 'T00:00:00').toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }) : 'Non renseigné'

  const recap = [
    { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, label: 'Date souhaitée', value: dateLabel },
    { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>, label: 'Nombre de convives', value: data.convives || 'Non renseigné' },
    { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Ville', value: data.ville || 'Non renseigné' },
    { icon: <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'currentColor', lineHeight: 1 }}>€</span>, label: 'Budget estimé', value: data.budget || 'Non renseigné' },
    { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>, label: 'Détails de votre projet', value: data.message || 'Non renseigné' },
  ]

  return (
    <div className="step3-grid" style={{ maxWidth: '960px', margin: '0 auto', padding: '20px 24px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>

      {/* Left, coordonnées */}
      <div>
        <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '8px' }}>
          Vos coordonnées
        </h2>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
          Afin de vous recontacter rapidement et de vous envoyer une proposition personnalisée.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>
            <label style={labelStyle}>Nom complet <span style={{ color: '#E0A126' }}>*</span></label>
            <input value={data.nom} onChange={e => set('nom', e.target.value)} placeholder="Ex : Marie Dupont" style={fieldStyle} required />
          </div>
          <div>
            <label style={labelStyle}>Société <span style={{ color: '#E0A126' }}>*</span></label>
            <input value={data.societe} onChange={e => set('societe', e.target.value)} placeholder="Ex : Entreprise SAS" style={fieldStyle} required />
          </div>
          <div>
            <label style={labelStyle}>Email professionnel <span style={{ color: '#E0A126' }}>*</span></label>
            <input type="email" value={data.email} onChange={e => set('email', e.target.value)} placeholder="Ex : marie@entreprise.com" style={fieldStyle} required />
          </div>
          <div>
            <label style={labelStyle}>Téléphone <span style={{ color: '#E0A126' }}>*</span></label>
            <input type="tel" value={data.telephone} onChange={e => set('telephone', e.target.value)} placeholder="Ex : 06 12 34 56 78" style={fieldStyle} required />
          </div>
        </div>
      </div>

      {/* Right, récap */}
      <div style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(17,17,17,0.08)', padding: '20px 20px' }}>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '20px' }}>
          Récapitulatif de votre projet
        </p>
        <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '16px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>
          {prestationLabel}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {recap.map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ color: '#E0A126', marginTop: '1px', flexShrink: 0 }}>{r.icon}</div>
              <div>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', marginBottom: '2px' }}>{r.label}</p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-primary)', lineHeight: 1.5 }}>{r.value}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={onEdit}
          style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid rgba(17,17,17,0.07)', fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', letterSpacing: '0.08em', color: 'rgba(17,17,17,0.4)', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 0 0', outline: 'none', display: 'block', textDecoration: 'underline', textUnderlineOffset: '3px' }}
        >
          Modifier les informations
        </button>
      </div>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function Contact() {
  const [step, setStep] = useState(1)
  const [submitStatus, setSubmitStatus] = useState('idle') // idle | loading | success | error
  const [showStep2Errors, setShowStep2Errors] = useState(false)
  const [bottomNavHidden, setBottomNavHidden] = useState(false)
  const [showLogo, setShowLogo] = useState(true)
  const logosRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const atBottom = document.body.scrollHeight - window.scrollY - window.innerHeight < 80
      setBottomNavHidden(atBottom)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const [data, setData] = useState({
    prestation: '', date: '', convives: '', ville: '', budget: '', message: '',
    nom: '', societe: '', email: '', telephone: '',
  })

  // Sauvegarde auto des données en background (debounced)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.values(data).some(v => v)) {
        fetch('/api/devis/draft', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, source: 'devis-draft', timestamp: new Date().toISOString() }),
        }).catch(() => {})
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [data])

  // Capture on unload (client ferme l'onglet/quitte)
  useEffect(() => {
    const handleUnload = () => {
      if (Object.values(data).some(v => v) && submitStatus === 'idle') {
        navigator.sendBeacon('/api/devis/draft', JSON.stringify({ ...data, source: 'devis-unload', timestamp: new Date().toISOString() }))
      }
    }
    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [data, submitStatus])

  const step2Valid = () => !!(data.convives?.trim() && data.ville?.trim() && data.message?.trim())

  const canNext = () => {
    if (step === 1) return !!data.prestation
    if (step === 2) return step2Valid()
    return true
  }

  const next = () => {
    if (step === 2) {
      if (!step2Valid()) {
        setShowStep2Errors(true)
        // Scroll vers le premier champ vide
        setTimeout(() => {
          const el = document.querySelector('.step2-error')
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 50)
        return
      }
      setShowStep2Errors(false)
    }
    if (step < 3) {
      setStep(s => s + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  const prev = () => { if (step > 1) setStep(s => s - 1) }

  // Écoute le bouton MobileCTA sur /devis
  const nextRef = useRef(next)
  const stepRef = useRef(step)
  useEffect(() => { nextRef.current = next; stepRef.current = step }, [next, step])
  useEffect(() => {
    const handler = () => {
      if (stepRef.current === 3) {
        // Soumet le formulaire à l'étape 3
        const form = document.querySelector('form')
        if (form) form.requestSubmit()
      } else {
        nextRef.current()
      }
    }
    const prevHandler = () => { if (stepRef.current > 1) setStep(s => s - 1) }
    window.addEventListener('devis-next', handler)
    window.addEventListener('devis-prev', prevHandler)
    return () => {
      window.removeEventListener('devis-next', handler)
      window.removeEventListener('devis-prev', prevHandler)
    }
  }, [])

  // Cache la MobileCTA à l'étape 1 + informe MobileCTA de l'étape courante
  useEffect(() => {
    if (step === 1) {
      document.body.classList.add('devis-step-1')
    } else {
      document.body.classList.remove('devis-step-1')
    }
    window.dispatchEvent(new CustomEvent('devis-step-change', { detail: step }))
    return () => document.body.classList.remove('devis-step-1')
  }, [step])

  const submit = async e => {
    e.preventDefault()
    setSubmitStatus('loading')
    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitStatus('success')
        window.dataLayer?.push({ event: 'devis_submit', form_location: 'page_devis' })
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <>
      <main className="devis-main" style={{ background: '#FFFFFF', minHeight: '100vh', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', position: 'relative' }}>

        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
          Demander un devis traiteur d&apos;entreprise à Paris &amp; Île-de-France
        </h1>

        {/* Logo splash screen */}
        {showLogo && (
          <div style={{
            position: 'fixed', inset: 0, background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
            animation: `fadeInOut 1.5s ease-in-out forwards`,
          }}>
            <style>{`
              @keyframes fadeInOut {
                0% { opacity: 1 }
                60% { opacity: 1 }
                100% { opacity: 0 }
              }
            `}</style>
            <div style={{ textAlign: 'center' }}>
              <img src="/logo-footer.svg" alt="L'Écrin Traiteur" style={{ height: '72px', width: 'auto', display: 'block', margin: '0 auto 20px' }} />
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', letterSpacing: '0.1em', color: '#9B9590' }}>
                Devis personnalisé en cours…
              </p>
            </div>
          </div>
        )}

        {/* Form content avec fade in */}
        <div style={{ opacity: showLogo ? 0 : 1, transition: 'opacity 0.5s ease-in 0.3s', pointerEvents: showLogo ? 'none' : 'auto', flex: 1, display: 'flex', flexDirection: 'column' }}>

        {submitStatus === 'success' ? (
          /* ── Success screen ── */
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 24px', gap: '20px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(224,161,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E0A126" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg>
            </div>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.1, margin: 0 }}>
              Demande bien reçue.
            </h2>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '360px', margin: 0 }}>
              Merci pour votre confiance. Nous vous recontactons sous 24h avec une proposition personnalisée.
            </p>
            <a href="/" style={{ marginTop: '8px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', borderBottom: '1px solid rgba(17,17,17,0.25)', paddingBottom: '3px', textDecoration: 'none' }}>
              Retour à l'accueil
            </a>
          </div>
        ) : (
          <form onSubmit={submit} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '24px 24px', maxWidth: '100%', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>

            <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', background: '#FFFFFF', borderRadius: '16px', boxShadow: '0 4px 20px rgba(17,17,17,0.08)' }}>

              <ProgressBar step={step} goTo={setStep} />

              {/* Step content */}
              <div className="devis-content" style={{ paddingBottom: '110px', paddingTop: '24px', paddingLeft: '40px', paddingRight: '40px' }}>
                {step === 1 && <Step1 data={data} setData={setData} onSelect={next} />}
                {step === 2 && <Step2 data={data} setData={setData} showErrors={showStep2Errors} />}
                {step === 3 && <Step3 data={data} setData={setData} onEdit={() => setStep(2)} />}
              </div>

            </div>

            {/* Bottom nav bar */}
            <div className="devis-bottom-nav" style={{
              position: 'fixed',
              bottom: 0, left: 0, right: 0,
              background: '#FFFFFF',
              borderTop: '1px solid rgba(17,17,17,0.08)',
              padding: '16px 72px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 50,
              opacity: bottomNavHidden ? 0 : 1,
              pointerEvents: bottomNavHidden ? 'none' : 'auto',
              transition: 'opacity 0.3s ease',
            }}>
              {/* Prev */}
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prev}
                  className="devis-nav-prev"
                  style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,17,17,0.55)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    outline: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  ← Précédent
                </button>
              ) : (
                <div style={{ width: '90px' }} />
              )}

              {/* Messages d'erreur */}
              <div className="nav-indicator" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                {submitStatus === 'error' && (
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: '#c0392b', margin: 0 }}>
                    Erreur d'envoi. Réessayez ou appelez-nous.
                  </p>
                )}
                {step === 2 && showStep2Errors && !step2Valid() && (
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: '#c0392b', margin: 0, textAlign: 'center' }}>
                    Remplissez les champs obligatoires ↑
                  </p>
                )}
              </div>

              {/* Next / Submit */}
              {step === 1 ? (
                <div style={{ width: '120px' }} />
              ) : step < 3 ? (
                <button
                  type="button"
                  onClick={next}
                  className="devis-nav-next"
                  style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    background: '#E0A126',
                    border: 'none',
                    padding: '12px 28px',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s ease',
                    outline: 'none',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Suivant →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="devis-nav-next"
                  style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    background: '#E0A126',
                    border: 'none',
                    padding: '12px 28px',
                    cursor: submitStatus === 'loading' ? 'default' : 'pointer',
                    opacity: submitStatus === 'loading' ? 0.65 : 1,
                    transition: 'opacity 0.3s ease',
                    outline: 'none',
                  }}
                  onMouseEnter={e => { if (submitStatus !== 'loading') e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={e => { if (submitStatus !== 'loading') e.currentTarget.style.opacity = '1' }}
                >
                  {submitStatus === 'loading' ? 'Envoi…' : 'Envoyer ma demande →'}
                </button>
              )}
            </div>

          </form>
        )}
        </div>
      </main>

      <LogosSection
        subtitle="Et pourquoi pas vous ?"
        style={{ paddingBottom: '56px' }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageLd('/devis', 'Demander un devis, L\'Écrin Traiteur')) }}
      />

      <div ref={logosRef}>
        <Footer />
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        input::placeholder, textarea::placeholder { color: rgba(17,17,17,0.55); }
        input:focus, textarea:focus, select:focus { outline: none; border-color: rgba(224,161,38,0.45) !important; }
        select option { color: #111111; }
        @media (max-width: 768px) {
          .devis-main { height: auto !important; min-height: auto !important; padding-top: 0 !important; padding-bottom: 32px !important; }
          .devis-main form { overflow: visible !important; display: block !important; }
          .devis-content { padding-bottom: 4px !important; padding-top: 28px !important; padding-left: 20px !important; padding-right: 20px !important; }
          .devis-bottom-nav { position: relative !important; bottom: auto !important; padding: 14px 16px 20px !important; flex-wrap: wrap !important; gap: 0 !important; border-top: none !important; }
          .devis-nav-prev { order: 1 !important; display: flex !important; }
          .devis-nav-next { order: 2 !important; display: flex !important; }
          .nav-indicator { order: 3 !important; width: 100% !important; justify-content: center !important; padding-top: 12px !important; margin-top: 8px !important; border-top: none !important; border-bottom: none !important; }
          .devis-progress-bar { padding: 10px 24px 0 !important; }
          .progress-label { display: none !important; }
          .progress-line { margin: 0 12px !important; width: 40px !important; }
          .step1-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr) !important; gap: 8px !important; padding: 0 !important; }
          .step1-grid > div { padding: 14px 12px !important; gap: 8px !important; }
          .step1-grid p { font-size: 14px !important; }
          .step2-inner { padding: 0 16px !important; max-width: 100% !important; }
          .step2-row { grid-template-columns: 1fr !important; }
          .step3-grid { grid-template-columns: 1fr !important; gap: 16px !important; padding: 0 16px !important; max-width: 100% !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .step2-inner { max-width: 100% !important; padding: 0 40px !important; }
          .step3-grid { grid-template-columns: 1fr !important; max-width: 680px !important; }
        }
      ` }} />
    </>
  )
}

// ── Shared styles ─────────────────────────────────────────────────────────────

const fieldStyle = {
  width: '100%',
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '13px',
  color: 'var(--text-primary)',
  background: '#FFFFFF',
  border: '1px solid #111111',
  padding: '14px 16px',
  height: '50px',
  outline: 'none',
  boxSizing: 'border-box',
  appearance: 'none',
  transition: 'border-color 0.25s ease',
}

const labelStyle = {
  display: 'block',
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '10px',
  fontWeight: 500,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#111111',
  marginBottom: '6px',
}

const calNavBtn = {
  background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--text-primary)', borderRadius: '50%', outline: 'none',
}
