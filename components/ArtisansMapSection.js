'use client'

import Link from 'next/link'
import Reveal from './Reveal'
import { ARTISANS } from '../lib/artisansData'

/* ─── Carte de France (silhouette réelle, public/france-map.svg) ─────── */

// Base de production L'Écrin Traiteur — Suresnes (Hauts-de-Seine, ouest de Paris)
const CUISINE = { x: 45, y: 30 }

// Texture mottled/grain (feTurbulence) — masquée sur la silhouette pour donner du relief (papier/pierre).
const TEXTURE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='0.035' numOctaves='3' stitchTiles='stitch' seed='7' />
    <feColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0' />
  </filter>
  <rect width='100%' height='100%' filter='url(#n)' />
</svg>`
const TEXTURE_BG = `url("data:image/svg+xml,${encodeURIComponent(TEXTURE_SVG)}")`

function FranceMap({ artisans }) {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', maxWidth: '480px', margin: '0 auto' }}>
      <div style={{ position: 'absolute', inset: '-10%', background: 'radial-gradient(closest-side, rgba(224,161,38,0.14), rgba(224,161,38,0) 72%)', pointerEvents: 'none' }} />
      <img
        src="/france-map.svg"
        alt="Carte de France"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'relative',
          filter: 'drop-shadow(0 4px 10px rgba(80,60,25,0.10)) drop-shadow(0 24px 48px rgba(80,60,25,0.16))',
        }}
      />
      {/* Texture grain/mottled, masquée sur la silhouette de la carte */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: TEXTURE_BG,
          backgroundSize: '260px 260px',
          mixBlendMode: 'soft-light',
          opacity: 0.7,
          maskImage: 'url(/france-map.svg)',
          WebkitMaskImage: 'url(/france-map.svg)',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          pointerEvents: 'none',
        }}
      />

      {artisans.map((a) => (
        <div key={a.slug} className="pin-wrap" style={{ position: 'absolute', left: `${a.map.x}%`, top: `${a.map.y}%`, transform: 'translate(-50%, -50%)' }}>
          <Link href={`/univers/nos-artisans/${a.slug}`} className="map-pin" aria-label={a.nom} style={{ display: 'block', width: '34px', height: '34px', borderRadius: '50%', border: '2px solid #FFFFFF', boxShadow: '0 2px 8px rgba(17,17,17,0.25)', overflow: 'hidden', background: 'var(--accent)' }}>
            <img src={a.avatar || a.img} alt={a.nom} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </Link>
          <span className="pin-label">{a.nom}</span>
        </div>
      ))}

      {/* Cuisine L'Écrin Traiteur — Suresnes (carré, distinct des artisans) */}
      <div className="pin-wrap" style={{ position: 'absolute', left: `${CUISINE.x}%`, top: `${CUISINE.y}%`, transform: 'translate(-50%, -50%)', zIndex: 6 }}>
        <Link href="/univers/notre-maison" className="map-pin ecrin-pin" aria-label="L'Écrin Traiteur — Suresnes" style={{ display: 'block', width: '10px', height: '10px', background: 'var(--accent)', boxShadow: '0 1px 3px rgba(17,17,17,0.2)' }} />
        <span className="pin-label">L'Écrin Traiteur · Suresnes</span>
      </div>
    </div>
  )
}

const AVANTAGES = [
  'Favorise le circuit court quand c\'est possible.',
  'Rassemble le meilleur pour vous offrir une offre clé en main.',
  'Tous les artisans sont sélectionnés avec soin par nos équipes.',
]

/* ─── Section réutilisable — page Nos Artisans + Accueil ──────────────── */

export default function ArtisansMapSection() {
  return (
    <section id="carte" className="amp-section" style={{ background: 'var(--bg-secondary)', padding: '96px 0' }}>
      <div className="amp-inner" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

        <Reveal>
          <div>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
              Notre réseau d'artisans
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginBottom: '18px' }}>
              Un réseau d'artisans<br />passionnés, proche de chez vous.
            </h2>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '420px', marginBottom: '24px' }}>
              Nous réunissons les meilleurs savoir-faire français au sein d'une seule maison, pour simplifier l'organisation de vos événements.
            </p>

            <Link href="/univers/nos-artisans" className="amp-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--text-primary)', paddingBottom: '4px', marginBottom: '36px', alignSelf: 'flex-start' }}>
              Découvrir nos artisans
              <span className="amp-arrow" style={{ display: 'inline-block', transition: 'transform 0.25s ease' }}>→</span>
            </Link>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', padding: 0, margin: 0, maxWidth: '440px' }}>
              {AVANTAGES.map((t, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ flexShrink: 0, color: 'var(--accent)', marginTop: '2px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <FranceMap artisans={ARTISANS} />
        </Reveal>

      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .pin-wrap { line-height: 0; }
        .pin-wrap:hover { z-index: 20 !important; }
        .map-pin { border-radius: 50% !important; transition: transform 0.25s ease; }
        .map-pin.ecrin-pin { border-radius: 0 !important; }
        .pin-wrap:hover .map-pin { transform: scale(1.15); }
        .pin-label {
          position: absolute;
          bottom: calc(100% + 9px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: #111111;
          color: #FFFFFF;
          font-family: 'Neue Montreal', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.02em;
          line-height: 1.2;
          padding: 6px 10px;
          border-radius: 5px !important;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(17,17,17,0.22);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .pin-wrap:hover .pin-label { opacity: 1; transform: translateX(-50%) translateY(0); }
        .amp-link:hover .amp-arrow { transform: translateX(4px); }
        .amp-link { transition: color 0.25s ease, border-color 0.25s ease; }
        .amp-link:hover { color: var(--accent); border-color: var(--accent); }
        @media (max-width: 900px) {
          .amp-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .amp-section { padding: 64px 0 !important; }
          .amp-inner { padding: 0 24px !important; }
        }
      ` }} />
    </section>
  )
}
