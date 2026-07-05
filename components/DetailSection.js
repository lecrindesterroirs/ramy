'use client'

import { useState } from 'react'

const args = [
  {
    num: '01.',
    title: 'Ponctualité garantie',
    body: 'Livraison dès 6h30, à l\'heure souhaitée, pour que vos réunions commencent sans stress et sans attente.',
  },
  {
    num: '02.',
    title: 'Zéro charge mentale',
    body: 'Devis sous 24h, facturation adaptée aux entreprises, gestion des demandes particulières. De la commande à la mise en place, vous n\'avez rien à prévoir.',
  },
  {
    num: '03.',
    title: 'Fait maison & local',
    body: 'Boulangers artisanaux, fruits de saison, producteurs locaux choisis. Des produits qui ont vraiment du goût.',
  },
]

export default function DetailSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="detail-section" style={{ background: 'var(--bg-secondary)', padding: '80px 0 0' }}>
      <div className="detail-inner" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px' }}>

        {/* ── Image pleine largeur avec texte superposé ── */}
        <div
          className="reveal"
          style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <img
            className="detail-img"
            src="/detail-bg.png"
            alt="Le détail fait la différence — L'Écrin Traiteur"
            style={{
              width: '100%',
              height: '580px',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* Gradient sombre sur la gauche */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0) 75%)',
            }}
          />

          {/* Texte superposé */}
          <div
            className="detail-overlay-text"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '52%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 0 0 64px',
            }}
          >
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>
              Notre Signature
            </p>
            <span style={{ width: '32px', height: '1px', background: 'var(--accent)', display: 'block', marginBottom: '32px' }} />
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(42px, 4.8vw, 72px)', lineHeight: 1.0, letterSpacing: '-0.01em', fontWeight: 400, color: '#FFFFFF', marginBottom: '24px' }}>
              Le détail<br />
              fait la différence.
            </h2>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', maxWidth: '360px', marginBottom: '40px' }}>
              La différence se joue dans les détails.<br />
              Toujours.
            </p>
            <a
              href="/univers/notre-maison"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFFFFF', borderBottom: '1px solid rgba(255,255,255,0.45)', paddingBottom: '4px', width: 'fit-content', transition: 'opacity 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Découvrir notre approche <span style={{ fontSize: '14px' }}>→</span>
            </a>
          </div>
        </div>

        {/* ── 3 arguments bas — desktop ── */}
        <div
          className="reveal detail-args-desktop"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            padding: '56px 0 80px',
          }}
        >
          {args.map((item, i) => (
            <div
              key={item.num}
              style={{
                borderLeft: i > 0 ? '1px solid rgba(17,17,17,0.10)' : 'none',
                paddingLeft: i > 0 ? '48px' : '0',
                paddingRight: i < 2 ? '48px' : '0',
              }}
            >
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#151515', marginBottom: '12px' }}>
                {item.title}
              </p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'rgba(17,17,17,0.58)' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── 3 arguments bas — mobile accordion ── */}
        <div className="detail-args-mobile" style={{ padding: '32px 24px 32px' }}>
          {args.map((item, i) => (
            <div
              key={item.num}
              style={{ borderBottom: '1px solid rgba(17,17,17,0.08)' }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#151515' }}>
                    {item.title}
                  </span>
                </div>
                <span style={{ fontSize: '18px', color: 'var(--accent)', transition: 'transform 0.25s ease', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block' }}>
                  ›
                </span>
              </button>
              {openIndex === i && (
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'rgba(17,17,17,0.58)', paddingBottom: '16px' }}>
                  {item.body}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .detail-args-mobile { display: none; }
        @media (max-width: 768px) {
          .detail-section { padding: 48px 0 0 !important; }
          .detail-inner { padding: 0 !important; }
          .detail-img { height: 320px !important; }
          .detail-overlay-text {
            position: relative !important;
            top: auto !important; left: auto !important; bottom: auto !important;
            width: 100% !important;
            padding: 36px 24px 40px !important;
            background: #1a1a1a;
            justify-content: flex-start !important;
          }
          .detail-args-desktop { display: none !important; }
          .detail-args-mobile { display: block !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .detail-inner { padding: 0 40px !important; }
          .detail-overlay-text { width: 65% !important; padding-left: 40px !important; }
        }
      ` }} />
    </section>
  )
}
