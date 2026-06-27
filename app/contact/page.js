'use client'

import { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const typesEvenement = [
  'Petit-déjeuner',
  'Pause gourmande',
  'Cocktail & Buffet',
  'Plateau repas',
  'Réception sur-mesure',
  'Séminaire & Réunion',
  "Soirée d'entreprise",
  'Autre',
]

const MOIS = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
const JOURS = ['L','M','M','J','V','S','D']

function DatePicker({ value, onChange, required }) {
  const today = new Date()
  const [open, setOpen] = useState(false)
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() })
  const ref = useRef(null)

  useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
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

  const displayValue = selected ? selected.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }) : ''

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <input type="hidden" name="date" value={value} required={required} />
      <div
        onClick={() => setOpen(o => !o)}
        style={{ ...inputStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', userSelect: 'none', color: value ? 'var(--text-primary)' : 'rgba(17,17,17,0.38)' }}
      >
        <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px' }}>{displayValue || "Date de l'événement *"}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'rgba(17,17,17,0.38)', flexShrink: 0 }}>
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      </div>
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.12)', boxShadow: '0 16px 40px rgba(17,17,17,0.12)', zIndex: 200, padding: '20px', minWidth: '260px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <button type="button" onClick={prevMonth} style={navBtn}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15,18 9,12 15,6"/></svg></button>
            <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em', color: 'var(--text-primary)' }}>{MOIS[view.month]} {view.year}</span>
            <button type="button" onClick={nextMonth} style={navBtn}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9,18 15,12 9,6"/></svg></button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '6px' }}>
            {JOURS.map((j, i) => <div key={i} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', color: 'rgba(17,17,17,0.35)', textAlign: 'center', padding: '4px 0' }}>{j}</div>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
            {days.map((d, i) => (
              <button key={i} type="button" onClick={() => pick(d)} disabled={!d}
                style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: isSelected(d) ? 500 : 400, width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', borderRadius: '50%', border: 'none', background: isSelected(d) ? '#E0A126' : 'transparent', color: isSelected(d) ? '#FFF' : isToday(d) ? '#E0A126' : d ? 'var(--text-primary)' : 'transparent', cursor: d ? 'pointer' : 'default', outline: 'none', transition: 'background 0.15s ease' }}
                onMouseEnter={e => { if (d && !isSelected(d)) e.currentTarget.style.background = 'rgba(224,161,38,0.1)' }}
                onMouseLeave={e => { if (d && !isSelected(d)) e.currentTarget.style.background = 'transparent' }}
              >{d || ''}</button>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
            <button type="button" onClick={() => { onChange(''); setOpen(false) }} style={footerBtn}>Effacer</button>
            <button type="button" onClick={() => { const mm = String(today.getMonth()+1).padStart(2,'0'); const dd = String(today.getDate()).padStart(2,'0'); onChange(`${today.getFullYear()}-${mm}-${dd}`); setView({ year: today.getFullYear(), month: today.getMonth() }); setOpen(false) }} style={{ ...footerBtn, color: '#E0A126', fontWeight: 500 }}>Aujourd'hui</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    nom: '', societe: '', email: '', telephone: '',
    type: '', personnes: '', date: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const setDate = v => setForm(f => ({ ...f, date: v }))

  const submit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />

      <main style={{ background: 'var(--bg-secondary)', height: '100vh', paddingTop: 'var(--header-h)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        <div
          className="contact-wrap"
          style={{
            flex: 1,
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '40px 72px',
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '80px',
            alignItems: 'stretch',
            boxSizing: 'border-box',
          }}
        >
          {/* ── Colonne gauche ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '24px' }}>
              Contactez-nous
            </p>
            <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '24px' }}>
              Un échange simple<br />et rapide.
            </h1>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Notre équipe vous répond avec attention pour concevoir une prestation sur mesure, adaptée à vos besoins et à vos contraintes.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={iconBox}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <p style={labelStyle}>Téléphone</p>
                  <a href="tel:+33760169620" style={infoStyle}>07 60 16 96 20</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={iconBox}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p style={labelStyle}>Email</p>
                  <a href="mailto:commercial@lecrin-traiteur.fr" style={infoStyle}>commercial@lecrin-traiteur.fr</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={iconBox}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p style={labelStyle}>Zone desservie</p>
                  <p style={{ ...infoStyle, cursor: 'default' }}>Toute Île-de-France</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(17,17,17,0.08)' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px' }}>Réponse sous 24h</p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-secondary)' }}>Livraison dès 6h30</p>
            </div>
          </div>

          {/* ── Colonne droite — Formulaire ── */}
          <div style={{ background: '#FFFFFF', padding: '36px 40px 32px', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
              Parlez-nous de votre projet
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.5vw, 38px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '24px' }}>
              Envoyez-nous votre demande.
            </h2>

            {status === 'success' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '16px', padding: '32px 0' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(224,161,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E0A126" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg>
                </div>
                <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.2 }}>Demande bien reçue.</p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '300px' }}>
                  Nous vous répondons sous 24h avec une proposition personnalisée.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <input name="nom" value={form.nom} onChange={handle} placeholder="Nom complet *" required style={inputStyle} />
                  <input name="societe" value={form.societe} onChange={handle} placeholder="Société *" required style={inputStyle} />
                </div>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email professionnel *" required style={inputStyle} />
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <input name="telephone" value={form.telephone} onChange={handle} placeholder="Téléphone *" required style={inputStyle} />
                  <div style={{ position: 'relative' }}>
                    <select name="type" value={form.type} onChange={handle} required style={{ ...inputStyle, color: form.type ? 'var(--text-primary)' : 'rgba(17,17,17,0.38)', paddingRight: '36px' }}>
                      <option value="" disabled>Type d'événement *</option>
                      {typesEvenement.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'rgba(17,17,17,0.38)' }}><polyline points="6,9 12,15 18,9"/></svg>
                  </div>
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <input name="personnes" type="number" value={form.personnes} onChange={handle} placeholder="Nombre de personnes *" required style={inputStyle} />
                  <DatePicker value={form.date} onChange={setDate} required />
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  placeholder="Votre message. Décrivez votre projet, vos envies, vos contraintes..."
                  style={{ ...inputStyle, resize: 'none', lineHeight: 1.6, flex: 1, minHeight: '80px' }}
                />
                {status === 'error' && (
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: '#c0392b', textAlign: 'center', margin: '0' }}>
                    Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{ width: '100%', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', border: 'none', padding: '18px 32px', cursor: status === 'loading' ? 'default' : 'pointer', opacity: status === 'loading' ? 0.65 : 1, transition: 'opacity 0.3s ease', marginTop: '4px' }}
                  onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={e => { if (status !== 'loading') e.currentTarget.style.opacity = '1' }}
                >
                  {status === 'loading' ? 'Envoi en cours…' : 'Envoyer la demande →'}
                </button>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.35)', textAlign: 'center' }}>
                  Vos données restent privées et ne sont jamais partagées.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>

      <style suppressHydrationWarning>{`
        input::placeholder, textarea::placeholder { color: rgba(17,17,17,0.38); }
        select option { color: #111111; }
        input:focus, textarea:focus, select:focus { outline: none; border-color: rgba(224,161,38,0.5) !important; }
        @media (max-width: 768px) {
          main { height: auto !important; }
          .contact-wrap { grid-template-columns: 1fr !important; padding: 40px 24px 60px !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .args-grid { grid-template-columns: 1fr !important; padding: 0 24px !important; }
          section { padding: 60px 24px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          main { height: auto !important; }
          .contact-wrap { grid-template-columns: 1fr !important; padding: 40px 40px 60px !important; gap: 40px !important; }
          .args-grid { grid-template-columns: repeat(2, 1fr) !important; }
          section { padding: 60px 40px !important; }
        }
      `}</style>

      {/* ── Section arguments ── */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(17,17,17,0.07)', padding: '80px 72px' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
              Pensé pour les entreprises
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 44px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)' }}>
              Un service exigeant,<br />adapté à votre quotidien.
            </h2>
          </div>

          <div className="args-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {[
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>, titre: 'Réponse rapide', desc: "Nous vous répondons sous 24h pour toute demande de devis ou d'information." },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>, titre: 'Prestation sur mesure', desc: 'Des offres adaptées à vos envies, à votre budget et aux besoins de votre entreprise.' },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>, titre: 'Livraison ponctuelle', desc: "Livraison dès 6h30 en Île-de-France, avec le respect de vos impératifs horaires." },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>, titre: 'Installation soignée', desc: "Mise en place élégante et discrète pour un service prêt à l'heure souhaitée." },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, titre: 'Interlocuteur unique', desc: 'Un contact dédié pour vous accompagner à chaque étape de votre événement.' },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>, titre: 'Règlement à 30 jours', desc: 'Conditions de règlement adaptées aux entreprises, sans avance de frais.' },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}>
                <div style={{ color: 'var(--accent)', opacity: 0.85 }}>{item.icon}</div>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', letterSpacing: '0.01em' }}>{item.titre}</p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

const inputStyle = {
  width: '100%',
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '13px',
  color: 'var(--text-primary)',
  background: 'var(--bg-secondary)',
  border: '1px solid rgba(17,17,17,0.12)',
  padding: '13px 16px',
  outline: 'none',
  boxSizing: 'border-box',
  appearance: 'none',
}

const labelStyle = {
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '10px',
  fontWeight: 500,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: '4px',
}

const infoStyle = {
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '14px',
  color: 'var(--text-primary)',
  textDecoration: 'none',
  lineHeight: 1.6,
}

const iconBox = {
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  color: 'var(--accent)',
}

const navBtn = {
  background: 'none', border: 'none', cursor: 'pointer', padding: '6px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--text-primary)', borderRadius: '50%', outline: 'none',
}

const footerBtn = {
  fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400,
  letterSpacing: '0.06em', color: 'rgba(17,17,17,0.45)', background: 'none',
  border: 'none', cursor: 'pointer', padding: '4px 0', outline: 'none',
}
