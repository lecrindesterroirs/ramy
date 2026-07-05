'use client'

import { useMemo } from 'react'
import { MADELEINE_FLAVORS } from '../lib/productsData'

const V = 320
const CX = V / 2
const CY = V / 2

function buildPositions(maxPieces) {
  const rings =
    maxPieces === 10 ? [{ n: 10, r: 108 }]
    : maxPieces === 20 ? [{ n: 12, r: 118 }, { n: 8, r: 72 }]
    : [{ n: 18, r: 124 }, { n: 14, r: 92 }, { n: 10, r: 60 }, { n: 8, r: 28 }]

  const positions = []
  for (const { n, r } of rings) {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2
      positions.push({ x: CX + r * Math.cos(a), y: CY + r * Math.sin(a), rot: a * 180 / Math.PI + 90 })
    }
  }
  return positions
}

function madSize(maxPieces) {
  return maxPieces === 10 ? { rx: 10, ry: 18 }
       : maxPieces === 20 ? { rx: 8,  ry: 14 }
       :                    { rx: 6,  ry: 11 }
}

function computeSlots(total, composition) {
  const empty = new Array(total).fill(null)
  if (!composition) return empty
  let seq = []
  if (composition.mode === 'flavors') {
    const { selected } = composition
    if (!selected?.length) return empty
    seq = Array.from({ length: total }, (_, i) => selected[i % selected.length])
  } else {
    const qs = composition.quantities || {}
    const entries = Object.entries(qs).filter(([, v]) => v > 0)
    if (!entries.length) return empty
    const state = entries.map(([id, n]) => ({ id, rem: n }))
    const count = Math.min(entries.reduce((s, [, v]) => s + v, 0), total)
    for (let i = 0; i < count; i++) {
      const best = state.filter(s => s.rem > 0).sort((a, b) => b.rem - a.rem)[0]
      if (!best) break
      seq.push(best.id)
      best.rem--
    }
  }
  return Array.from({ length: total }, (_, i) => seq[i] || null)
}

export default function MadeleineCoffretViz({ maxPieces, composition }) {
  const positions = useMemo(() => buildPositions(maxPieces), [maxPieces])
  const slots     = useMemo(() => computeSlots(positions.length, composition), [positions.length, composition])
  const { rx, ry } = madSize(maxPieces)

  const boxR   = V / 2 - 6
  const innerR = boxR - 7
  const placed = slots.filter(Boolean).length

  // Calcule les patterns nécessaires (une par saveur active, pas par slot)
  const activeFlavors = useMemo(() => {
    const ids = [...new Set(slots.filter(Boolean))]
    return ids.map(id => MADELEINE_FLAVORS.find(f => f.id === id)).filter(Boolean)
  }, [slots])

  return (
    <div style={{ position: 'sticky', top: 'calc(var(--banner-h) + var(--nav-h) + 24px)' }}>

      <div style={{ width: '100%', aspectRatio: '1/1', position: 'relative' }}>
        <svg
          viewBox={`0 0 ${V} ${V}`}
          style={{ width: '100%', height: '100%', display: 'block' }}
          aria-label={`Coffret de ${maxPieces} madeleines — ${placed} sélectionnée${placed > 1 ? 's' : ''}`}
        >
          <defs>
            <radialGradient id="cvBoxBg" cx="38%" cy="32%" r="72%">
              <stop offset="0%"   stopColor="#F8F3E8" />
              <stop offset="100%" stopColor="#E6D8BC" />
            </radialGradient>
            <radialGradient id="cvRimShad" cx="50%" cy="50%" r="50%">
              <stop offset="68%" stopColor="transparent" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.20)" />
            </radialGradient>
            <radialGradient id="cvRimLight" cx="35%" cy="28%" r="55%">
              <stop offset="0%"   stopColor="rgba(255,255,255,0.20)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter id="cvShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#000" floodOpacity="0.14" />
            </filter>

            {/*
              Un pattern par saveur active.
              patternUnits="userSpaceOnUse" → les coords x/y/width/height sont dans
              le système local de l'ellipse qui référence le pattern.
              L'image couvre exactement la zone (-rx,-ry) → (+rx,+ry).
            */}
            {activeFlavors.map(f => (
              <pattern
                key={f.id}
                id={`mad-pat-${f.id}`}
                patternUnits="userSpaceOnUse"
                x={-rx} y={-ry}
                width={rx * 2} height={ry * 2}
              >
                <image
                  href={f.img}
                  x={0} y={0}
                  width={rx * 2} height={ry * 2}
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            ))}
          </defs>

          {/* Ombre portée */}
          <ellipse cx={CX} cy={CY + 10} rx={boxR} ry={boxR * 0.92} fill="rgba(0,0,0,0.10)" />
          {/* Rebord */}
          <circle cx={CX} cy={CY} r={boxR} fill="#C4B490" filter="url(#cvShadow)" />
          {/* Intérieur */}
          <circle cx={CX} cy={CY} r={innerR} fill="url(#cvBoxBg)" />
          {/* Lumière rebord */}
          <circle cx={CX} cy={CY} r={boxR} fill="url(#cvRimLight)" />
          {/* Ombre intérieure */}
          <circle cx={CX} cy={CY} r={boxR} fill="url(#cvRimShad)" />

          {/* ── Madeleines ── */}
          {positions.map((pos, i) => {
            const flavorId = slots[i]
            const flavor   = flavorId ? MADELEINE_FLAVORS.find(f => f.id === flavorId) : null
            const isActive = !!flavor
            const delay    = `${(i % 8) * 0.045}s`
            const trans    = `transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}, opacity 0.38s ease ${delay}`

            return (
              <g key={i} transform={`translate(${pos.x},${pos.y}) rotate(${pos.rot})`}>

                {/* Ombre portée de la madeleine */}
                <ellipse cx={1.5} cy={2.2} rx={rx} ry={ry} fill="rgba(0,0,0,0.16)"
                  style={{
                    opacity: isActive ? 1 : 0.25,
                    transform: `scale(${isActive ? 1 : 0.80})`,
                    transformBox: 'fill-box', transformOrigin: 'center',
                    transition: trans,
                  }}
                />

                {isActive && flavor?.img ? (
                  /* ── Madeleine avec photo ── */
                  <g style={{
                    opacity: 1,
                    transform: 'scale(1)',
                    transformBox: 'fill-box', transformOrigin: 'center',
                    transition: trans,
                  }}>
                    {/* Corps = ellipse remplie avec la photo via pattern */}
                    <ellipse cx={0} cy={0} rx={rx} ry={ry}
                      fill={`url(#mad-pat-${flavor.id})`}
                    />
                    {/* Contour fin */}
                    <ellipse cx={0} cy={0} rx={rx} ry={ry}
                      fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5"
                    />
                    {/* Reflet bosse */}
                    <ellipse cx={0} cy={-ry * 0.22} rx={rx * 0.46} ry={ry * 0.32}
                      fill="rgba(255,255,255,0.22)"
                    />
                    {/* Stries caractéristiques */}
                    {[-rx * 0.35, 0, rx * 0.35].map((lx, j) => (
                      <line key={j}
                        x1={lx} y1={-ry * 0.70}
                        x2={lx} y2={ry * 0.70}
                        stroke="rgba(0,0,0,0.10)"
                        strokeWidth="0.7"
                      />
                    ))}
                  </g>

                ) : (
                  /* ── Slot vide ── */
                  <ellipse cx={0} cy={0} rx={rx} ry={ry}
                    fill="rgba(185,172,148,0.30)"
                    style={{
                      transform: 'scale(0.78)',
                      transformBox: 'fill-box', transformOrigin: 'center',
                      transition: trans,
                    }}
                  />
                )}
              </g>
            )
          })}
        </svg>

        {/* Badge */}
        {placed > 0 && (
          <div style={{
            position: 'absolute', bottom: '12px', right: '12px',
            background: 'var(--accent)', color: '#fff',
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em',
            padding: '6px 12px',
          }}>
            {placed} / {maxPieces}
          </div>
        )}
      </div>

      {/* ── Légende avec miniatures photo ── */}
      {placed > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '12px' }}>
          {MADELEINE_FLAVORS
            .filter(f => slots.includes(f.id))
            .map(f => {
              const count = slots.filter(s => s === f.id).length
              return (
                <span key={f.id} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500,
                  letterSpacing: '0.06em', color: f.color, background: f.bg,
                  padding: '4px 10px 4px 5px',
                }}>
                  {/* Miniature photo ronde */}
                  <span style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    overflow: 'hidden', flexShrink: 0,
                    border: `1.5px solid ${f.color}55`,
                  }}>
                    <img loading="lazy" src={f.img} alt={f.label}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </span>
                  {count} × {f.label}
                </span>
              )
            })
          }
        </div>
      )}

      {placed === 0 && (
        <p style={{
          fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontStyle: 'italic',
          color: 'rgba(17,17,17,0.35)', textAlign: 'center', marginTop: '16px',
        }}>
          Sélectionnez vos saveurs pour composer votre coffret
        </p>
      )}
    </div>
  )
}
