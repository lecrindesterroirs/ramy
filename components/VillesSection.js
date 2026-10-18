'use client'

import { CITIES } from '../lib/citiesData'

const T_VILLES = {
  fr: {
    eyebrow: 'Livraison Paris & Île-de-France',
    t1: 'Nous livrons dès 6h30', t2: "dans toute l'IDF",
    toutes: 'Voir toutes les villes →',
    points: ['Commandez avant 14h la veille', 'Livraison dès 6h30', 'Adresse exacte au bureau'],
  },
  en: {
    eyebrow: 'Delivery across Paris & Île-de-France',
    t1: 'Delivered from 6:30 am', t2: 'anywhere in Île-de-France',
    toutes: 'See every town →',
    points: ['Order until 2 pm the day before', 'Delivered from 6:30 am', 'To the exact office address'],
  },
}

export default function VillesSection({ lang = 'fr' }) {
  const T = T_VILLES[lang] || T_VILLES.fr
  const en = lang === 'en'
  return (
    <section style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid rgba(17,17,17,0.07)',
      padding: '80px 0',
    }}>
      <div className="container">

        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '52px',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent-deep)',
              marginBottom: '14px',
            }}>
              {T.eyebrow}
            </p>
            <h2 style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(28px, 3.2vw, 46px)',
              fontWeight: 400,
              lineHeight: 1.08,
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}>
              {T.t1}<br />{T.t2}
            </h2>
          </div>
          <a
            href={en ? '/en/traiteur' : '/traiteur'}
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(17,17,17,0.25)',
              paddingBottom: '3px',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'color 0.25s ease, border-color 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'rgba(17,17,17,0.25)' }}
          >
            {T.toutes}
          </a>
        </div>

        {/* Grille villes */}
        <div className="villes-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '2px',
        }}>
          {CITIES.map(city => (
            <a
              key={city.slug}
              href={`${en ? '/en' : ''}/traiteur/${city.slug}`}
              className="ville-card"
              style={{
                background: '#FFFFFF',
                padding: '20px 20px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
                borderTop: '2px solid transparent',
                transition: 'border-color 0.2s ease, background 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderTopColor = 'var(--accent)'
                e.currentTarget.style.background = 'var(--bg-secondary)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderTopColor = 'transparent'
                e.currentTarget.style.background = '#FFFFFF'
              }}
            >
              <div>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.01em',
                  marginBottom: '3px',
                }}>
                  {city.name}
                </p>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '10px',
                  fontWeight: 400,
                  color: 'rgba(17,17,17,0.62)',
                  letterSpacing: '0.04em',
                }}>
                  {city.region.split(' ')[0] === city.region.split('(')[0].trim()
                    ? city.region
                    : city.region.match(/\(([^)]+)\)/)?.[1] || city.region}
                </p>
              </div>
              <span style={{
                fontSize: '12px',
                color: 'var(--accent-deep)',
                opacity: 0.6,
                flexShrink: 0,
              }}>→</span>
            </a>
          ))}
        </div>

        {/* Bas : info commande */}
        <div style={{
          marginTop: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
        }}>
          {T.points.map(text => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 400,
                color: 'rgba(17,17,17,0.62)',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
              }}>
                {text}
              </span>
            </div>
          ))}
        </div>

      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .villes-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .villes-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      ` }} />
    </section>
  )
}
