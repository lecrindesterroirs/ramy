'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { CITIES } from '../../lib/citiesData'

const REGIONS = ['Tous', 'Paris', 'Hauts-de-Seine (92)', 'Yvelines (78)', 'Essonne (91)', 'Val-de-Marne (94)', 'Seine-Saint-Denis (93)']

export default function TraiteurPage() {
  const [activeRegion, setActiveRegion] = useState('Tous')

  const filtered = activeRegion === 'Tous'
    ? CITIES
    : CITIES.filter(c => c.region.includes(activeRegion.replace('Tous', '')))

  return (
    <>
      <Navbar />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero ── */}
        <div className="traiteur-hero" style={{ background: 'var(--bg-secondary)', padding: '80px 72px 72px', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '20px',
          }}>
            Zone de livraison
          </p>
          <h1 style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(36px, 5vw, 68px)',
            fontWeight: 400,
            lineHeight: 1.06,
            color: 'var(--text-primary)',
            marginBottom: '24px',
            letterSpacing: '-0.015em',
          }}>
            Traiteur Paris<br />& Île-de-France
          </h1>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            maxWidth: '520px',
            margin: '0 auto 40px',
          }}>
            L'Écrin Traiteur livre vos petits-déjeuners d'entreprise dans {CITIES.length} villes d'Île-de-France. Artisans sélectionnés, livraison dès 6h30, commande avant 14h la veille.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
            {[
              { num: `${CITIES.length}+`, label: 'villes desservies' },
              { num: '6h30', label: 'livraison dès' },
              { num: '24h', label: 'devis sous' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: '36px',
                  fontWeight: 400,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}>
                  {num}
                </p>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,17,17,0.4)',
                }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Filtre région ── */}
        <div style={{ borderBottom: '1px solid rgba(17,17,17,0.08)', background: '#FFFFFF' }}>
          <div className="traiteur-filter" style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 72px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {REGIONS.map(r => (
              <button
                key={r}
                onClick={() => setActiveRegion(r)}
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: activeRegion === r ? '#FFFFFF' : 'rgba(17,17,17,0.5)',
                  background: activeRegion === r ? 'var(--text-primary)' : 'transparent',
                  border: `1px solid ${activeRegion === r ? 'var(--text-primary)' : 'rgba(17,17,17,0.15)'}`,
                  padding: '7px 14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* ── Grille villes ── */}
        <div className="traiteur-grid-wrap" style={{ maxWidth: '1280px', margin: '0 auto', padding: '56px 72px 96px' }}>
          <div className="traiteur-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
            {filtered.map(city => (
              <a
                key={city.slug}
                href={`/traiteur/${city.slug}`}
                style={{
                  background: 'var(--bg-secondary)',
                  padding: '28px 24px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  transition: 'background 0.25s ease',
                  borderTop: '2px solid transparent',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#EDE8DE'; e.currentTarget.style.borderTopColor = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.borderTopColor = 'transparent' }}
              >
                <p style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: '20px',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                }}>
                  {city.name}
                </p>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,17,17,0.38)',
                }}>
                  {city.region}
                </p>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  color: 'var(--accent)',
                  marginTop: '4px',
                  letterSpacing: '0.04em',
                }}>
                  Voir la page →
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: 'center', padding: '0 40px 80px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <div style={{ maxWidth: '560px', margin: '0 auto', paddingTop: '64px' }}>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '16px',
            }}>
              Votre ville n'est pas listée ?
            </p>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '14px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              marginBottom: '28px',
            }}>
              Nous livrons dans toute l'Île-de-France. Contactez-nous pour vérifier la disponibilité dans votre commune.
            </p>
            <a
              href="/devis"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                background: 'var(--accent)',
                padding: '14px 32px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Demander un devis →
            </a>
          </div>
        </div>

      </main>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .traiteur-hero { padding: 56px 24px 48px !important; }
          .traiteur-filter { padding: 16px 24px !important; }
          .traiteur-grid-wrap { padding: 40px 24px 72px !important; }
          .traiteur-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .traiteur-hero { padding: 64px 40px 56px !important; }
          .traiteur-filter { padding: 16px 40px !important; }
          .traiteur-grid-wrap { padding: 48px 40px 80px !important; }
          .traiteur-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
