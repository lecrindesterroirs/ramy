'use client'

import { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import LogosSection from '../../components/LogosSection'

// ── Data ──────────────────────────────────────────────────────────────────────

const prestations = [
  {
    id: 'petit-dejeuner',
    titre: 'Petit-déjeuner',
    desc: 'Viennoiseries, jus frais, pâtisseries artisanales, fruits et douceurs.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 22h8M12 11v11M3 3h18l-3 7H6L3 3z"/>
      </svg>
    ),
  },
  {
    id: 'gouter',
    titre: 'Goûter',
    desc: 'Pâtisseries, gâteaux, boissons chaudes, moments sucrés et joyeux.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>
    ),
  },
  {
    id: 'autre',
    titre: 'Autre demande',
    desc: 'Une demande spécifique ? Décrivez-la, nous nous adaptons.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
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

  const pick = d => {
    if (!d) return
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
              <button key={i} type="button" onClick={() => pick(d)} disabled={!d} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', borderRadius: '50%', border: 'none', background: isSelected(d) ? '#E0A126' : 'transparent', color: isSelected(d) ? '#FFF' : isToday(d) ? '#E0A126' : d ? 'var(--text-primary)' : 'transparent', cursor: d ? 'pointer' : 'default', outline: 'none', fontWeight: isSelected(d) ? 500 : 400, transition: 'background 0.15s' }}
                onMouseEnter={e => { if (d && !isSelected(d)) e.currentTarget.style.background = 'rgba(224,161,38,0.1)' }}
                onMouseLeave={e => { if (d && !isSelected(d)) e.currentTarget.style.background = 'transparent' }}
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
  const steps = ['Prestation', 'Votre projet', 'Vos coordonnées']
  return (
    <div className="devis-progress-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '72px 48px 0', maxWidth: '640px', margin: '0 auto', width: '100%' }}>
      {steps.map((label, i) => {
        const idx = i + 1
        const clickable = idx < step
        const active = idx === step
        const done = idx < step
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? '1' : '0' }}>
            <div
              onClick={() => clickable && goTo(idx)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px', cursor: clickable ? 'pointer' : 'default', flexShrink: 0 }}
            >
              <span style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0.08em',
                color: active ? '#E0A126' : done ? 'rgba(17,17,17,0.35)' : 'rgba(17,17,17,0.28)',
                transition: 'color 0.3s ease',
                userSelect: 'none',
              }}>
                {String(idx).padStart(2, '0')}
              </span>
              <span className="progress-label" style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '10px',
                fontWeight: active ? 500 : 400,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: active ? 'var(--text-primary)' : 'rgba(17,17,17,0.35)',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap',
              }}>{label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="progress-line" style={{
                flex: 1,
                height: '1px',
                background: done ? 'rgba(17,17,17,0.2)' : 'rgba(17,17,17,0.1)',
                margin: '0 20px 24px',
                transition: 'background 0.4s ease',
              }} />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ── Step 1 ────────────────────────────────────────────────────────────────────

function Step1({ data, setData, onSelect }) {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '10px' }}>
          Quel type de prestation souhaitez-vous organiser ?
        </h2>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Sélectionnez l'expérience qui correspond le mieux à votre événement.
        </p>
      </div>

      <div className="step1-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
        {prestations.map(p => {
          const active = data.prestation === p.id
          return (
            <div
              key={p.id}
              onClick={() => { setData(d => ({ ...d, prestation: p.id })); onSelect() }}
              style={{
                background: active ? 'rgba(224,161,38,0.06)' : 'var(--bg-secondary)',
                border: `1px solid ${active ? '#E0A126' : 'rgba(17,17,17,0.1)'}`,
                padding: '28px 26px',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease, background 0.3s ease, transform 0.2s ease',
                transform: active ? 'translateY(-2px)' : 'translateY(0)',
              }}
              onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = 'rgba(224,161,38,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)' } }}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.1)'; e.currentTarget.style.transform = 'translateY(0)' } }}
            >
              <div style={{ color: active ? '#E0A126' : 'rgba(17,17,17,0.4)', marginBottom: '14px', transition: 'color 0.3s ease' }}>{p.icon}</div>
              <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '7px', lineHeight: 1.2 }}>{p.titre}</p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>{p.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Step 2 ────────────────────────────────────────────────────────────────────

function Step2({ data, setData, showErrors }) {
  const set = (k, v) => setData(d => ({ ...d, [k]: v }))
  const err = (k) => showErrors && !data[k]?.trim()

  return (
    <div className="step2-inner" style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '10px' }}>
          Parlez-nous de votre projet
        </h2>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Ces informations nous permettent de vous proposer le devis le plus adapté à vos besoins.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div className="step2-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={labelStyle}>Date souhaitée <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', letterSpacing: '0.08em', color: 'rgba(17,17,17,0.35)', textTransform: 'none', fontWeight: 400 }}>(facultatif)</span></label>
            <DatePicker value={data.date} onChange={v => set('date', v)} />
          </div>
          <div>
            <label style={labelStyle}>Nombre de convives <span style={{ color: '#E0A126' }}>*</span></label>
            <div style={{ position: 'relative' }}>
              <input value={data.convives} onChange={e => set('convives', e.target.value)} placeholder="Ex : 30 personnes" style={{ ...fieldStyle, borderColor: err('convives') ? 'rgba(192,57,43,0.5)' : 'rgba(17,17,17,0.1)' }} />
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(17,17,17,0.3)', pointerEvents: 'none' }}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            {err('convives') && <p className="step2-error" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', color: '#c0392b', marginTop: '4px' }}>Champ requis</p>}
          </div>
        </div>
        <div className="step2-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={labelStyle}>Ville <span style={{ color: '#E0A126' }}>*</span></label>
            <div style={{ position: 'relative' }}>
              <input value={data.ville} onChange={e => set('ville', e.target.value)} placeholder="Ex : Paris, Suresnes, Boulogne..." style={{ ...fieldStyle, borderColor: err('ville') ? 'rgba(192,57,43,0.5)' : 'rgba(17,17,17,0.1)' }} />
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(17,17,17,0.3)', pointerEvents: 'none' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            {err('ville') && <p className="step2-error" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', color: '#c0392b', marginTop: '4px' }}>Champ requis</p>}
          </div>
          <div>
            <label style={labelStyle}>Budget estimé <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', letterSpacing: '0.08em', color: 'rgba(17,17,17,0.35)', textTransform: 'none', fontWeight: 400 }}>(facultatif)</span></label>
            <div style={{ position: 'relative' }}>
              <input value={data.budget} onChange={e => set('budget', e.target.value)} placeholder="Ex : 1000 € – 2000 €" style={fieldStyle} />
              <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'rgba(17,17,17,0.3)' }}>€</span>
            </div>
          </div>
        </div>
        <div>
          <label style={labelStyle}>Détails de votre projet <span style={{ color: '#E0A126' }}>*</span></label>
          <textarea
            value={data.message}
            onChange={e => set('message', e.target.value)}
            placeholder={"Décrivez votre événement, vos contraintes alimentaires ou toute information utile…\nPlus nous en savons, plus notre proposition sera adaptée à vos besoins."}
            rows={3}
            style={{ ...fieldStyle, resize: 'none', lineHeight: 1.7, borderColor: err('message') ? 'rgba(192,57,43,0.5)' : 'rgba(17,17,17,0.1)' }}
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

  const prestationLabel = prestations.find(p => p.id === data.prestation)?.titre || '—'
  const dateLabel = data.date ? new Date(data.date + 'T00:00:00').toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }) : '—'

  const recap = [
    { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, label: 'Date souhaitée', value: dateLabel },
    { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>, label: 'Nombre de convives', value: data.convives || '—' },
    { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Ville', value: data.ville || '—' },
    { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>, label: 'Budget estimé', value: data.budget || '—' },
    { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>, label: 'Détails de votre projet', value: data.message || '—' },
  ]

  return (
    <div className="step3-grid" style={{ maxWidth: '960px', margin: '0 auto', padding: '20px 24px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>

      {/* Left — coordonnées */}
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
            <input value={data.telephone} onChange={e => set('telephone', e.target.value)} placeholder="Ex : 06 12 34 56 78" style={fieldStyle} required />
          </div>
        </div>
      </div>

      {/* Right — récap */}
      <div style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(17,17,17,0.08)', padding: '20px 20px' }}>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
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
  const [data, setData] = useState({
    prestation: '', date: '', convives: '', ville: '', budget: '', message: '',
    nom: '', societe: '', email: '', telephone: '',
  })

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
    if (step < 3) setStep(s => s + 1)
  }
  const prev = () => { if (step > 1) setStep(s => s - 1) }

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
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <>
      <Navbar />

      <main className="devis-main" style={{ background: '#FFFFFF', height: '100vh', paddingTop: 'var(--header-h)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

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
          <form onSubmit={submit} style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

            <ProgressBar step={step} goTo={setStep} />

            {/* Step content */}
            <div style={{ flex: 1, paddingBottom: '80px', paddingTop: '32px', overflowY: 'auto' }}>
              {step === 1 && <Step1 data={data} setData={setData} onSelect={next} />}
              {step === 2 && <Step2 data={data} setData={setData} showErrors={showStep2Errors} />}
              {step === 3 && <Step3 data={data} setData={setData} onEdit={() => setStep(2)} />}
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
            }}>
              {/* Prev */}
              <button
                type="button"
                onClick={prev}
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: step === 1 ? 'rgba(17,17,17,0.2)' : 'rgba(17,17,17,0.55)',
                  background: 'none',
                  border: 'none',
                  cursor: step === 1 ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  outline: 'none',
                  transition: 'color 0.3s ease',
                }}
                disabled={step === 1}
              >
                ← Précédent
              </button>

              {/* Step indicator + error message */}
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {[1,2,3].map(i => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{
                        fontFamily: "'Neue Montreal', sans-serif",
                        fontSize: '11px',
                        fontWeight: 400,
                        letterSpacing: '0.08em',
                        color: i === step ? '#E0A126' : 'rgba(17,17,17,0.28)',
                        transition: 'color 0.3s ease',
                      }}>
                        {String(i).padStart(2, '0')}
                      </span>
                      {i < 3 && (
                        <div style={{
                          width: '32px',
                          height: '1px',
                          background: i < step ? 'rgba(17,17,17,0.2)' : 'rgba(17,17,17,0.1)',
                          margin: '0 8px',
                          transition: 'background 0.4s ease',
                        }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Next / Submit */}
              {step === 1 ? (
                <div style={{ width: '120px' }} />
              ) : step < 3 ? (
                <button
                  type="button"
                  onClick={next}
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
      </main>

      <LogosSection
        subtitle="Et pourquoi pas vous ?"
        style={{ paddingBottom: '56px' }}
      />

      <Footer />

      <style suppressHydrationWarning>{`
        input::placeholder, textarea::placeholder { color: rgba(17,17,17,0.35); }
        input:focus, textarea:focus, select:focus { outline: none; border-color: rgba(224,161,38,0.45) !important; }
        select option { color: #111111; }
        @media (max-width: 768px) {
          .devis-main { height: auto !important; min-height: 100vh !important; }
          .devis-main form { overflow: visible !important; display: block !important; }
          .devis-bottom-nav { position: relative !important; bottom: auto !important; padding: 14px 16px 24px !important; flex-wrap: wrap !important; gap: 8px !important; border-top: 1px solid rgba(17,17,17,0.08) !important; }
          .nav-indicator { order: -1 !important; width: 100% !important; padding-bottom: 8px !important; border-bottom: 1px solid rgba(17,17,17,0.06) !important; justify-content: center !important; }
          .devis-progress-bar { padding: 48px 24px 0 !important; }
          .step1-grid { grid-template-columns: 1fr 1fr !important; gap: 8px !important; padding: 0 16px !important; }
          .step2-inner { padding: 0 16px !important; max-width: 100% !important; }
          .step2-row { grid-template-columns: 1fr !important; }
          .step3-grid { grid-template-columns: 1fr !important; gap: 16px !important; padding: 0 16px !important; max-width: 100% !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .step2-inner { max-width: 100% !important; padding: 0 40px !important; }
          .step3-grid { grid-template-columns: 1fr !important; max-width: 680px !important; }
        }
      `}</style>
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
  border: '1px solid rgba(17,17,17,0.1)',
  padding: '10px 14px',
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
  color: 'rgba(17,17,17,0.45)',
  marginBottom: '6px',
}

const calNavBtn = {
  background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--text-primary)', borderRadius: '50%', outline: 'none',
}
