'use client'

import { useState, useEffect } from 'react'
import { MADELEINE_FLAVORS } from '../lib/productsData'

export default function MadeleineComposer({ maxPieces, onChange }) {
  const [selected, setSelected]     = useState([])
  const [customMode, setCustomMode] = useState(false)
  const [quantities, setQuantities] = useState({})

  const total     = customMode ? Object.values(quantities).reduce((s, v) => s + v, 0) : 0
  const remaining = maxPieces - total
  const isFull    = customMode && remaining <= 0

  useEffect(() => {
    if (selected.length === 0) { onChange(null); return }
    if (customMode) {
      const filled = selected.filter(id => (quantities[id] || 0) > 0)
      onChange(filled.length
        ? { mode: 'custom', quantities: Object.fromEntries(filled.map(id => [id, quantities[id]])) }
        : null
      )
    } else {
      onChange({ mode: 'flavors', selected })
    }
  }, [selected, customMode, quantities])

  const toggleFlavor = (id) => {
    if (customMode) return
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const adjustQty = (id, delta) => {
    setQuantities(prev => {
      const cur  = prev[id] || 0
      const next = cur + delta
      if (next <= 0) {
        setSelected(s => s.filter(x => x !== id))
        const n = { ...prev }; delete n[id]; return n
      }
      if (delta > 0 && remaining <= 0) return prev
      if (!selected.includes(id)) setSelected(s => [...s, id])
      return { ...prev, [id]: next }
    })
  }

  const enterCustomMode = () => {
    if (selected.length > 0) {
      const base  = Math.floor(maxPieces / selected.length)
      const extra = maxPieces % selected.length
      const init  = {}
      selected.forEach((id, i) => { init[id] = base + (i < extra ? 1 : 0) })
      setQuantities(init)
    }
    setCustomMode(true)
  }

  return (
    <div style={{ marginBottom: '28px' }}>

      {/* ── En-tête ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '18px' }}>
        <div>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '6px',
          }}>
            La sélection signature
          </p>
          <p style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(17px, 2vw, 22px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.1,
          }}>
            Composez votre assortiment
          </p>
        </div>
        {selected.length > 0 && (
          <div style={{ textAlign: 'right', flexShrink: 0, paddingLeft: '16px' }}>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500,
              letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.38)', marginBottom: '2px',
            }}>Votre sélection</p>
            <p style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: '32px', fontWeight: 400, color: 'var(--accent)', lineHeight: 1,
            }}>
              {customMode ? `${total} / ${maxPieces}` : `${selected.length} / ${MADELEINE_FLAVORS.length}`}
            </p>
            {customMode && remaining > 0 && (
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', color: 'rgba(17,17,17,0.38)', marginTop: '2px' }}>
                Encore {remaining} à attribuer
              </p>
            )}
            {customMode && remaining === 0 && (
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', color: '#3a7c3a', fontWeight: 500, marginTop: '2px' }}>
                Coffret complet
              </p>
            )}
          </div>
        )}
      </div>

      {/* ── Grille des saveurs ── */}
      <div className="mc-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', marginBottom: '14px' }}>
        {MADELEINE_FLAVORS.map(f => {
          const isOn = selected.includes(f.id)
          const qty  = quantities[f.id] || 0

          return (
            <div
              key={f.id}
              onClick={() => !customMode && toggleFlavor(f.id)}
              style={{
                display: 'flex', alignItems: 'stretch', gap: 0,
                background: isOn ? f.bg : '#FAFAF8',
                border: `1px solid ${isOn ? f.color + 'AA' : 'rgba(17,17,17,0.09)'}`,
                cursor: customMode ? 'default' : 'pointer',
                overflow: 'hidden',
                transition: 'background 0.2s, border-color 0.2s',
                minHeight: '88px',
              }}
              onMouseEnter={e => { if (!customMode && !isOn) e.currentTarget.style.borderColor = f.color + '55' }}
              onMouseLeave={e => { if (!customMode && !isOn) e.currentTarget.style.borderColor = 'rgba(17,17,17,0.09)' }}
            >
              {/* Photo de la madeleine */}
              <div style={{
                width: '72px', flexShrink: 0,
                background: f.bg,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <img loading="lazy" src={f.img}
                  alt={f.label}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    transition: 'transform 0.3s ease',
                    transform: isOn ? 'scale(1.06)' : 'scale(1)',
                  }}
                />
                {/* Voile de sélection */}
                {isOn && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: f.color + '22',
                    pointerEvents: 'none',
                  }} />
                )}
              </div>

              {/* Texte */}
              <div style={{ flex: 1, padding: '10px 10px 10px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: '14px', fontWeight: 400, fontStyle: 'italic',
                  color: isOn ? f.color : 'var(--text-primary)',
                  lineHeight: 1.15, marginBottom: '4px',
                  transition: 'color 0.2s',
                }}>
                  {f.label}
                </p>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '10px', color: 'rgba(17,17,17,0.45)', lineHeight: 1.5,
                }}>
                  {f.description}
                </p>
              </div>

              {/* Sélecteur ou contrôles qté */}
              <div style={{ padding: '0 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {!customMode ? (
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    border: `1.5px solid ${isOn ? f.color : 'rgba(17,17,17,0.22)'}`,
                    background: isOn ? f.color : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                  }}>
                    {isOn && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="1.5,5.2 4,7.5 8.5,2" />
                      </svg>
                    )}
                  </div>
                ) : (
                  <div
                    onClick={e => e.stopPropagation()}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}
                  >
                    <button
                      onClick={() => adjustQty(f.id, 1)}
                      disabled={isFull}
                      style={{
                        width: '26px', height: '26px',
                        background: isFull ? 'rgba(17,17,17,0.05)' : (isOn ? f.color : 'rgba(17,17,17,0.08)'),
                        border: 'none', cursor: isFull ? 'not-allowed' : 'pointer',
                        color: isFull ? 'rgba(17,17,17,0.2)' : (isOn ? '#fff' : 'rgba(17,17,17,0.5)'),
                        fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        lineHeight: 1, transition: 'background 0.15s',
                      }}
                    >+</button>
                    <span style={{
                      fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', fontWeight: 600,
                      color: isOn ? f.color : 'rgba(17,17,17,0.2)',
                      minWidth: '22px', textAlign: 'center', lineHeight: '20px',
                    }}>
                      {qty || 0}
                    </span>
                    <button
                      onClick={() => adjustQty(f.id, -1)}
                      disabled={!isOn}
                      style={{
                        width: '26px', height: '26px',
                        background: 'rgba(17,17,17,0.06)',
                        border: 'none', cursor: isOn ? 'pointer' : 'default',
                        color: isOn ? 'var(--text-primary)' : 'rgba(17,17,17,0.18)',
                        fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        lineHeight: 1,
                      }}
                    >−</button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Instruction + toggle ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        <p style={{
          fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontStyle: 'italic',
          color: 'rgba(17,17,17,0.35)', lineHeight: 1.5, flex: 1,
        }}>
          {!customMode
            ? selected.length > 0
              ? 'Nous répartirons vos madeleines équitablement entre les parfums choisis.'
              : 'Cliquez pour ajouter ou retirer un parfum.'
            : remaining < 0
              ? 'Trop de madeleines sélectionnées — retirez-en quelques-unes.'
              : 'Ajustez les quantités par parfum à votre guise.'
          }
        </p>
        <button
          onClick={customMode ? () => { setCustomMode(false); setQuantities({}) } : enterCustomMode}
          style={{
            fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: customMode ? 'rgba(17,17,17,0.38)' : 'var(--text-primary)',
            background: 'none', border: '1px solid currentColor',
            padding: '7px 12px', cursor: 'pointer', whiteSpace: 'nowrap',
            transition: 'opacity 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          {customMode ? 'Répartition libre' : 'Préciser les quantités'}
        </button>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 480px) {
          .mc-cards { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </div>
  )
}
