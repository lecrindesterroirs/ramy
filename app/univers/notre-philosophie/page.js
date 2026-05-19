'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

const valeurs = [
  {
    mot: 'Justesse',
    desc: "Chaque geste, chaque ingrédient, chaque présentation est le fruit d'un équilibre minutieusement trouvé. Ni trop, ni trop peu.",
  },
  {
    mot: 'Précision',
    desc: "La rigueur est au cœur de notre approche. Les recettes sont calibrées, les temps respectés, les détails jamais négligés.",
  },
  {
    mot: 'Cohérence',
    desc: "De la première conversation à la dernière bouchée, l'expérience L'Écrin reste homogène, fiable, à la hauteur de nos engagements.",
  },
]

export default function NotrePhilosophie() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero ── */}
        <div
          className="univ-hero"
          style={{
            position: 'relative',
            width: '100%',
            height: '70vh',
            minHeight: '460px',
            overflow: 'hidden',
          }}
        >
          <img
            src="/detail-bg.png"
            alt="Notre Philosophie — L'Écrin Traiteur"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)',
          }} />
          <div
            className="univ-hero-text"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '0 40px',
            }}
          >
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '18px',
            }}>
              L'Univers — Notre Philosophie
            </p>
            <h1 style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              color: '#FFFFFF',
            }}>
              Notre Philosophie
            </h1>
          </div>
        </div>


        {/* ── Nos valeurs ── */}
        <div
          className="univ-valeurs"
          style={{
            background: 'var(--bg-secondary)',
            padding: '100px 72px',
          }}
        >
          <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '72px' }}>
              <p style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '16px',
              }}>
                Nos valeurs fondatrices
              </p>
              <h2 style={{
                fontFamily: "'Baskerville Display PT', Georgia, serif",
                fontSize: 'clamp(28px, 3vw, 48px)',
                fontWeight: 400,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
              }}>
                Ce en quoi nous croyons
              </h2>
            </div>

            <div
              className="univ-valeurs-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2px',
              }}
            >
              {valeurs.map((v, i) => (
                <div
                  key={i}
                  style={{
                    background: '#FFFFFF',
                    padding: '56px 44px',
                    borderTop: '2px solid var(--accent)',
                  }}
                >
                  <p style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: '20px',
                  }}>
                    0{i + 1}
                  </p>
                  <h3 style={{
                    fontFamily: "'Baskerville Display PT', Georgia, serif",
                    fontSize: '32px',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    marginBottom: '20px',
                    lineHeight: 1.1,
                  }}>
                    {v.mot}
                  </h3>
                  <p style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '15px',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                  }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Texte de clôture ── */}
        <div
          className="univ-closing"
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '100px 72px',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '17px',
            lineHeight: 1.85,
            color: 'var(--text-secondary)',
          }}>
            Cette philosophie guide chacune de nos décisions, du choix d'un fournisseur à la façon dont nous répondons à un e-mail. Elle n'est pas affichée, elle se ressent dans chaque assiette, chaque échange, chaque prestation.
          </p>
        </div>

      </main>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .univ-hero { height: 55vh !important; min-height: 360px !important; }
          .univ-hero-text { padding: 0 24px !important; }
          .univ-quote { padding: 80px 24px !important; }
          .univ-valeurs { padding: 60px 24px !important; }
          .univ-valeurs-grid { grid-template-columns: 1fr !important; }
          .univ-closing { padding: 60px 24px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .univ-quote { padding: 80px 40px !important; }
          .univ-valeurs { padding: 80px 40px !important; }
          .univ-valeurs-grid { grid-template-columns: 1fr !important; }
          .univ-closing { padding: 80px 40px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
