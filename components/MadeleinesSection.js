'use client'

const COFFRETS = [
  {
    id: 'madeleines-10',
    label: '× 10 pièces',
    desc: 'Pour 4 à 6 personnes',
    price: '24,90 €',
    href: '/creations/petits-dejeuners-et-pauses/madeleines-10',
  },
  {
    id: 'madeleines-20',
    label: '× 20 pièces',
    desc: 'Pour 8 à 12 personnes',
    price: '49,00 €',
    href: '/creations/petits-dejeuners-et-pauses/madeleines-20',
  },
  {
    id: 'madeleines-50',
    label: '× 50 pièces',
    desc: 'Pour 25 à 30 personnes',
    price: '119,00 €',
    href: '/creations/petits-dejeuners-et-pauses/madeleines-50',
  },
]

export default function MadeleinesSection() {
  return (
    <section className="madeleine-section" style={{ background: '#FFFFFF' }}>
      <div
        className="madeleine-inner"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '640px',
        }}
      >

        {/* ── Image gauche ── */}
        <div
          className="madeleine-img-col"
          style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}
        >
          <img
            src="/madeleine-home.jpg"
            alt="Madeleines artisanales Mado Paris — L'Écrin Traiteur"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </div>

        {/* ── Contenu droite ── */}
        <div
          className="madeleine-content"
          style={{
            background: 'var(--bg-secondary)',
            padding: '72px 72px 72px 64px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Eyebrow */}
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '10px',
          }}>
            Produit signature
          </p>
          <span className="accent-line" style={{ marginBottom: '28px' }} />

          {/* Titre */}
          <h2 style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(30px, 3.2vw, 50px)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}>
            La madeleine<br />
            Mado Paris
          </h2>

          {/* Corps */}
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '14px',
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            maxWidth: '440px',
          }}>
            Derrière leur texture moelleuse et leur bosse généreuse, nos madeleines déclinent des saveurs comme la pistache, la fleur d'oranger ou l'ananas coco passion, devenues au fil des prestations l'un des grands classiques de la maison.
          </p>

          {/* Coffrets */}
          <div style={{ marginBottom: '36px' }}>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(17,17,17,0.4)',
              marginBottom: '16px',
            }}>
              Choisissez votre format
            </p>
            <div className="madeleine-coffrets" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {COFFRETS.map((c) => (
                <a
                  key={c.id}
                  href={c.href}
                  className="madeleine-coffret-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    background: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#EDE8DE'}
                  onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
                >
                  <div>
                    <span style={{
                      fontFamily: "'Baskerville Display PT', Georgia, serif",
                      fontSize: '17px',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      display: 'block',
                      lineHeight: 1.2,
                    }}>
                      Coffret {c.label}
                    </span>
                    <span style={{
                      fontFamily: "'Neue Montreal', sans-serif",
                      fontSize: '11px',
                      color: 'rgba(17,17,17,0.45)',
                      letterSpacing: '0.03em',
                    }}>
                      {c.desc}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(17,17,17,0.35)',
                  }}>
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Saveurs */}
          <div style={{ marginBottom: '0' }}>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '8px',
            }}>
              Nos saveurs
            </p>
            <span style={{ display: 'block', width: '28px', height: '1px', background: 'var(--accent)', marginBottom: '14px' }} />
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '12px',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              marginBottom: '20px',
            }}>
              Des recettes raffinées, élaborées avec des ingrédients d'exception.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { nom: 'Nature' },
                { nom: 'Citron' },
                { nom: 'Fleur d\'oranger' },
                { nom: 'Pistache framboise', best: true },
                { nom: 'Chocolat noir' },
                { nom: 'Chocolat au lait', best: true },
                { nom: 'Ananas coco passion', best: true },
                { nom: 'Rose violette' },
                { nom: 'Thé vert matcha griotte' },
              ].map(s => (
                <span key={s.nom} style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  color: 'var(--text-primary)',
                  background: '#FFFFFF',
                  padding: '7px 14px',
                  boxShadow: '0 1px 4px rgba(17,17,17,0.07)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                }}>
                  {s.nom}
                  {s.best && (
                    <span style={{
                      fontFamily: "'Neue Montreal', sans-serif",
                      fontSize: '7px',
                      fontWeight: 500,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      border: '1px solid var(--accent)',
                      padding: '2px 6px',
                      whiteSpace: 'nowrap',
                    }}>
                      Best-seller
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .madeleine-inner { grid-template-columns: 1fr !important; }
          .madeleine-img-col { min-height: 280px !important; }
          .madeleine-content { padding: 48px 24px !important; }
          .madeleine-coffret-row { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .madeleine-content { padding: 52px 40px !important; }
        }
      `}</style>
    </section>
  )
}
