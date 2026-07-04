'use client'

import { useState } from 'react'

const args = [
  {
    num: '01',
    title: 'Artisans sélectionnés',
    body: 'Mado Paris, Maison Marques, Alain Milliat, Mariage Frères... Chaque produit vient d\'un artisan choisi pour ce qu\'il sait faire, pas pour son prix.',
  },
  {
    num: '02',
    title: 'Le goût de l\'artisanat',
    body: 'Derrière chaque création se cache le savoir-faire d\'un artisan qui privilégie la qualité des ingrédients, la précision du geste et le plaisir de la dégustation.',
  },
  {
    num: '03',
    title: 'Ancré en Île-de-France',
    body: 'La plupart de nos artisans travaillent à Paris ou en proche banlieue. Moins de distance, plus de fraîcheur, un lien direct avec ceux qui produisent.',
  },
]

export default function SelectionSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="selection-section" style={{ background: 'var(--bg-secondary)', padding: '120px 0' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px' }}>

        <div
          className="selection-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >

          {/* ── Colonne droite : image ── */}
          <div
            className="reveal img-zoom selection-img-wrap"
            style={{ overflow: 'hidden' }}
          >
            <img
              className="selection-img"
              src="/selection-artisans.jpg"
              alt="L'art de la sélection — L'Écrin Traiteur"
              style={{
                width: '100%',
                height: '680px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* ── Colonne gauche : texte + arguments ── */}
          <div className="reveal">

            {/* Label + trait */}
            <p
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '12px',
              }}
            >
              Notre Approche
            </p>
            <span className="accent-line" style={{ marginBottom: '36px' }} />

            {/* Titre */}
            <h2
              style={{
                fontFamily: "'Baskerville Display PT', Georgia, serif",
                fontSize: 'clamp(48px, 4.8vw, 74px)',
                lineHeight: 0.97,
                letterSpacing: '-0.02em',
                fontWeight: 400,
                color: '#151515',
                marginBottom: '28px',
              }}
            >
              L'art de<br />
              la sélection.
            </h2>

            {/* Corps */}
            <p
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '15px',
                lineHeight: 1.75,
                color: 'rgba(17,17,17,0.62)',
                maxWidth: '400px',
                marginBottom: '52px',
              }}
            >
              Des madeleines Mado Paris aux jus Alain Milliat, des viennoiseries Maison Marques au thé Mariage Frères. Chaque produit est choisi pour sa qualité, sa régularité et le plaisir qu'il apporte.
            </p>

            {/* 3 arguments — desktop */}
            <div
              className="selection-args-desktop"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
              }}
            >
              {args.map((item, i) => (
                <div
                  key={item.num}
                  style={{
                    background: '#FFFFFF',
                    padding: '20px 20px 20px',
                  }}
                >
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#151515', marginBottom: '10px', lineHeight: 1.5 }}>
                    {item.title}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.65, color: 'rgba(17,17,17,0.58)' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* 3 arguments — mobile accordion */}
            <div className="selection-args-mobile">
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

        </div>
      </div>

      <style suppressHydrationWarning>{`
        .selection-args-mobile { display: none; }
        @media (max-width: 768px) {
          .selection-section { padding: 48px 0 8px !important; }
          .selection-section > div { padding: 0 24px !important; }
          .selection-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .selection-img { height: 300px !important; }
          .selection-args-desktop { display: none !important; }
          .selection-args-mobile { display: block !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .selection-section > div { padding: 0 40px !important; }
          .selection-grid { gap: 48px !important; }
          .selection-img { height: 480px !important; }
        }
      `}</style>
    </section>
  )
}
