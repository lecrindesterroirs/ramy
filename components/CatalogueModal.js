'use client'

import { useEffect, useState } from 'react'

const CATALOGUE_URL = '/catalogue-lecrin-2026.pdf'

export default function CatalogueModal({ open, onClose }) {
  const [form, setForm] = useState({ email: '', website: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/catalogue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) window.dataLayer?.push({ event: 'catalogue_lead', form_location: 'hero' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(23,19,16,0.55)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Recevoir le catalogue 2026"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '440px',
          background: '#F9F6EF',
          padding: '44px 40px 40px',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '32px',
            height: '32px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'rgba(17,17,17,0.45)',
            fontSize: '18px',
            lineHeight: 1,
          }}
        >
          ×
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{ width: '44px', height: '44px', margin: '0 auto 18px', background: 'rgba(58,124,58,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3a7c3a" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
            </div>
            <p style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: '24px',
              fontWeight: 400,
              color: '#171310',
              marginBottom: '10px',
              lineHeight: 1.25,
            }}>
              Votre catalogue est prêt.
            </p>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'rgba(17,17,17,0.55)', lineHeight: 1.65, marginBottom: '26px' }}>
              Nous venons aussi de vous l'envoyer par email à {form.email}.
            </p>
            <a
              href={CATALOGUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#1A1A18',
                background: 'var(--accent)',
                padding: '14px 34px',
                display: 'inline-block',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Ouvrir le catalogue →
            </a>
          </div>
        ) : (
          <>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '12px',
            }}>
              Catalogue 2026
            </p>
            <p style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: '26px',
              fontWeight: 400,
              color: '#171310',
              lineHeight: 1.25,
              marginBottom: '10px',
            }}>
              Recevez notre catalogue.
            </p>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'rgba(17,17,17,0.55)', lineHeight: 1.65, marginBottom: '28px' }}>
              Petits-déjeuners, plateaux repas, buffets, cocktails : toutes nos créations 2026, avec prix et compositions.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Honeypot anti-spam */}
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

              <div>
                <label style={labelStyle}>Email professionnel *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                  placeholder="marie@entreprise.com"
                  style={fieldStyle}
                  autoComplete="email"
                  required
                />
              </div>

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
                  padding: '15px 32px',
                  marginTop: '8px',
                  cursor: status === 'loading' ? 'default' : 'pointer',
                  opacity: status === 'loading' ? 0.65 : 1,
                  transition: 'opacity 0.3s ease',
                  outline: 'none',
                }}
                onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.opacity = '0.82' }}
                onMouseLeave={e => { if (status !== 'loading') e.currentTarget.style.opacity = '1' }}
              >
                {status === 'loading' ? 'Envoi…' : 'Recevoir le catalogue →'}
              </button>

              {status === 'error' && (
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: '#c0392b' }}>
                  Erreur d'envoi. Réessayez ou écrivez-nous à commercial@lecrin-traiteur.fr
                </p>
              )}

              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10.5px', color: 'rgba(17,17,17,0.4)', lineHeight: 1.6, margin: 0 }}>
                Vos coordonnées servent uniquement à vous envoyer le catalogue et à vous recontacter. Jamais de spam.
              </p>
            </form>

            <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
              input::placeholder { color: rgba(17,17,17,0.35); }
              input:focus { outline: none; border-color: rgba(224,161,38,0.45) !important; }
            ` }} />
          </>
        )}
      </div>
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
