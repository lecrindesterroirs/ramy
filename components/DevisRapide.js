'use client'

import { useState } from 'react'

const PRESTATIONS = [
  'Petit-déjeuner',
  'Plateaux repas',
  'Cocktail / Buffet',
  'Goûter',
  'Séminaire',
  'Personnalisation',
  'Événement sur mesure',
]

export default function DevisRapide({ defaultPrestation = '', titre, sousTitre }) {
  const [form, setForm] = useState({
    prestation: defaultPrestation,
    convives: '',
    date: '',
    email: '',
    website: '', // honeypot anti-spam (doit rester vide)
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.email || !form.prestation) return
    setStatus('loading')
    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'devis-rapide' }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) window.dataLayer?.push({ event: 'devis_submit', form_location: 'devis_rapide' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        marginTop: '56px',
        padding: '36px 40px',
        background: 'rgba(58,124,58,0.05)',
        border: '1px solid rgba(58,124,58,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        <div style={{ width: '40px', height: '40px', background: 'rgba(58,124,58,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3a7c3a" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
        </div>
        <div>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', fontWeight: 500, color: '#3a7c3a', marginBottom: '4px' }}>
            Demande envoyée avec succès.
          </p>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.5)', lineHeight: 1.6 }}>
            Nous vous recontactons sous 24h avec une proposition personnalisée.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      marginTop: '56px',
      padding: '40px 40px',
      background: 'var(--bg-secondary)',
      borderLeft: '3px solid var(--accent)',
    }}>
      {/* Header */}
      <p style={{
        fontFamily: "'Baskerville Display PT', Georgia, serif",
        fontSize: '22px',
        fontWeight: 400,
        color: 'var(--text-primary)',
        marginBottom: '6px',
        lineHeight: 1.2,
      }}>
        {titre || 'Un projet à Paris ou en Île-de-France ?'}
      </p>
      <p style={{
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: '13px',
        color: 'var(--text-secondary)',
        lineHeight: 1.65,
        marginBottom: '28px',
      }}>
        {sousTitre || 'Répondez en 30 secondes — devis personnalisé sous 24h.'}
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

        {/* Honeypot anti-spam — invisible aux humains, rempli par les bots */}
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={e => set('website', e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
        />

        {/* Row 1 — Prestation + Date */}
        <div className="dr-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={labelStyle}>Type de prestation</label>
            <div style={{ position: 'relative' }}>
              <select
                value={form.prestation}
                onChange={e => set('prestation', e.target.value)}
                style={{ ...fieldStyle, paddingRight: '32px', cursor: 'pointer' }}
                required
              >
                <option value="">Choisir…</option>
                {PRESTATIONS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(17,17,17,0.35)', pointerEvents: 'none' }}><polyline points="6,9 12,15 18,9"/></svg>
            </div>
          </div>
          <div>
            <label style={labelStyle}>Nombre de personnes</label>
            <input
              value={form.convives}
              onChange={e => set('convives', e.target.value)}
              placeholder="Ex : 25 personnes"
              style={fieldStyle}
            />
          </div>
        </div>

        {/* Row 2 — Date + Email */}
        <div className="dr-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={labelStyle}>Date souhaitée</label>
            <input
              type="date"
              value={form.date}
              onChange={e => set('date', e.target.value)}
              style={{ ...fieldStyle, colorScheme: 'light' }}
            />
          </div>
          <div>
            <label style={labelStyle}>Email professionnel *</label>
            <input
              type="email"
              value={form.email}
              onChange={e => set('email', e.target.value)}
              placeholder="marie@entreprise.com"
              style={fieldStyle}
              required
            />
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '4px', flexWrap: 'wrap' }}>
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#1A1A18',
              background: 'var(--accent)',
              border: 'none',
              padding: '13px 32px',
              cursor: status === 'loading' ? 'default' : 'pointer',
              opacity: status === 'loading' ? 0.65 : 1,
              transition: 'opacity 0.3s ease',
              outline: 'none',
            }}
            onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.opacity = '0.82' }}
            onMouseLeave={e => { if (status !== 'loading') e.currentTarget.style.opacity = '1' }}
          >
            {status === 'loading' ? 'Envoi…' : 'Recevoir un devis →'}
          </button>
          <a
            href="/devis"
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.06em',
              color: 'rgba(17,17,17,0.4)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(17,17,17,0.15)',
              paddingBottom: '1px',
            }}
          >
            Formulaire détaillé →
          </a>
        </div>

        {status === 'error' && (
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: '#c0392b', marginTop: '4px' }}>
            Erreur d'envoi. Réessayez ou écrivez-nous à commercial@lecrin-traiteur.fr
          </p>
        )}
      </form>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        input[type="date"]::-webkit-calendar-picker-indicator { opacity: 0.3; cursor: pointer; }
        input::placeholder { color: rgba(17,17,17,0.35); }
        input:focus, select:focus { outline: none; border-color: rgba(224,161,38,0.45) !important; }
        @media (max-width: 600px) {
          .dr-row { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </div>
  )
}

const fieldStyle = {
  width: '100%',
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '13px',
  color: 'var(--text-primary)',
  background: '#FFFFFF',
  border: '1px solid rgba(17,17,17,0.1)',
  padding: '10px 14px',
  height: '46px',
  outline: 'none',
  boxSizing: 'border-box',
  appearance: 'none',
  WebkitAppearance: 'none',
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
