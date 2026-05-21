'use client'

import { useState } from 'react'
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

const etapes = [
  {
    num: '01',
    titre: 'Écoute & Conception',
    desc: [
      "Chaque prestation débute par une compréhension attentive de vos besoins et du moment que vous souhaitez créer.",
      "Formats, produits, contraintes alimentaires, horaires ou demandes spécifiques : nous concevons des prestations sur mesure, pensées pour s'adapter naturellement à chaque entreprise.",
    ],
    img: '/petit-dejeuner-ds.jpg',
  },
  {
    num: '02',
    titre: 'Une sélection qui a du sens',
    desc: [
      "La sélection est au cœur de L'Écrin. Chaque produit, artisan et maison est choisi pour la justesse de son savoir-faire, la qualité de son exécution et l'émotion qu'il crée à la dégustation.",
      "Produits artisanaux, maisons reconnues, circuits courts quand ça sert vraiment le produit. Rien n'est sélectionné au hasard.",
      "Parce qu'au final, ce sont toujours les détails et le goût dont les équipes se souviennent.",
    ],
    img: '/selection-chef.png',
  },
  {
    num: '03',
    titre: 'Fabrication artisanale',
    desc: [
      "Nous travaillons avec des maisons et artisans sélectionnés pour la maîtrise de leur savoir-faire et la constance de leur qualité.",
    ],
    img: '/creations-featured.webp',
  },
  {
    num: '04',
    titre: 'Livraison & Installation',
    desc: [
      "Une expérience premium ne repose pas uniquement sur le produit, mais aussi sur la précision de son exécution. C'est pourquoi chaque livreur fait pleinement partie de nos équipes et de l'expérience que nous proposons.",
      "Présents dès 6h30, nous assurons des livraisons ponctuelles, soignées et pensées pour s'intégrer naturellement au rythme des entreprises.",
    ],
    img: '/livraison-installation.webp',
  },
]

export default function NotreMaison() {
  const [openEtape, setOpenEtape] = useState(null)
  const toggleEtape = (i) => setOpenEtape(openEtape === i ? null : i)

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
            src="/hero-bg2.png"
            alt="Notre Maison — L'Écrin Traiteur"
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
              L'Univers — Notre Maison
            </p>
            <h1 style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              color: '#FFFFFF',
            }}>
              Notre Maison
            </h1>
          </div>
        </div>

        {/* ── Notre histoire ── */}
        <div
          className="univ-split"
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '100px 72px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          <div>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '24px',
            }}>
              Notre histoire
            </p>
            <h2 style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(28px, 3vw, 46px)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '32px',
            }}>
              Nés d'une conviction simple : les pauses d'entreprise méritent mieux.
            </h2>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              marginBottom: '24px',
            }}>
              L'Écrin est né d'une conviction simple : les moments partagés en entreprise méritent mieux que des prestations standardisées.
            </p>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              marginBottom: '24px',
            }}>
              Fondée à Paris, notre maison s'est construite autour d'une sélection exigeante de produits, d'un sens du détail constant et d'une volonté de réinventer l'expérience traiteur en entreprise.
            </p>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
            }}>
              Des artisans choisis pour ce qu'ils font vraiment, des produits sélectionnés pour leur qualité réelle, une logistique pensée pour le rythme des entreprises. C'est ça, L'Écrin.
            </p>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <img
              src="/creations-featured.webp"
              alt="L'atelier L'Écrin Traiteur"
              style={{ width: '100%', height: '560px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        {/* ── Citation ── */}
        <div
          className="univ-quote"
          style={{
            background: 'var(--bg-secondary)',
            padding: '120px 72px',
            textAlign: 'center',
          }}
        >
          <div style={{
            width: '1px',
            height: '60px',
            background: 'var(--accent)',
            margin: '0 auto 48px',
          }} />
          <blockquote style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(22px, 3vw, 38px)',
            fontWeight: 400,
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            fontStyle: 'italic',
            marginBottom: '32px',
          }}>
            "Ce n'est pas le prix qui fait la qualité. C'est l'attention portée à chaque détail."
          </blockquote>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
          }}>
            — L'Écrin Traiteur, Paris
          </p>
          <div style={{
            width: '1px',
            height: '60px',
            background: 'var(--accent)',
            margin: '48px auto 0',
          }} />
        </div>

        {/* ── Notre savoir-faire ── */}
        <div
          className="univ-intro"
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '100px 72px 80px',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '24px',
          }}>
            Notre processus
          </p>
          <h2 style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(28px, 3vw, 46px)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: 'var(--text-primary)',
            marginBottom: '28px',
          }}>
            De la conception à la dégustation
          </h2>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '16px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
          }}>
            Notre savoir-faire repose sur un processus rigoureux et attentif, où chaque étape compte autant que la suivante.
          </p>
        </div>

        {/* ── Étapes ── */}
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px 120px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {etapes.map((e, i) => (
            <div
              key={i}
              className="univ-etape"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                direction: i % 2 !== 0 ? 'rtl' : 'ltr',
              }}
            >
              <div style={{ overflow: 'hidden', direction: 'ltr' }}>
                <img
                  src={e.img}
                  alt={e.titre}
                  style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div
                style={{
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '64px 72px',
                  direction: 'ltr',
                }}
              >
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '48px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'rgba(224,161,38,0.18)',
                  lineHeight: 1,
                  marginBottom: '24px',
                }}>
                  {e.num}
                </p>

                {/* Titre + chevron mobile */}
                <button
                  className="etape-toggle"
                  onClick={() => toggleEtape(i)}
                  style={{
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    marginBottom: '0',
                    width: '100%',
                    textAlign: 'left',
                  }}
                >
                  <h3 style={{
                    fontFamily: "'Baskerville Display PT', Georgia, serif",
                    fontSize: 'clamp(22px, 5vw, 30px)',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    lineHeight: 1.15,
                    margin: 0,
                  }}>
                    {e.titre}
                  </h3>
                  <span style={{
                    fontSize: '22px',
                    color: 'var(--accent)',
                    transition: 'transform 0.25s ease',
                    transform: openEtape === i ? 'rotate(90deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                    marginLeft: '12px',
                    flexShrink: 0,
                  }}>›</span>
                </button>

                {/* Titre desktop */}
                <h3 className="etape-titre-desktop" style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                  lineHeight: 1.15,
                }}>
                  {e.titre}
                </h3>

                {/* Description — toujours visible desktop, toggle mobile */}
                <div className={`etape-desc${openEtape === i ? ' etape-desc-open' : ''}`}>
                  {e.desc.map((para, j) => (
                    <p key={j} style={{
                      fontFamily: "'Neue Montreal', sans-serif",
                      fontSize: '15px',
                      lineHeight: 1.8,
                      color: 'var(--text-secondary)',
                      marginBottom: j < e.desc.length - 1 ? '16px' : 0,
                    }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Texte de clôture ── */}
        <div
          className="univ-closing"
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '0 72px 120px',
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
          .univ-split { grid-template-columns: 1fr !important; padding: 60px 24px !important; gap: 40px !important; }
          .univ-quote { padding: 80px 24px !important; }
          .univ-intro { padding: 60px 24px 40px !important; }
          .univ-etape { grid-template-columns: 1fr !important; direction: ltr !important; }
          .univ-etape > div:first-child img { height: 280px !important; }
          .univ-etape > div:last-child { padding: 32px 14px !important; }
          .etape-toggle { display: flex !important; margin-bottom: 0 !important; }
          .etape-titre-desktop { display: none !important; }
          .etape-desc { display: none; margin-top: 16px; }
          .etape-desc-open { display: block !important; }
          .univ-closing { padding: 0 24px 80px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .univ-split { padding: 80px 40px !important; gap: 48px !important; }
          .univ-quote { padding: 80px 40px !important; }
          .univ-intro { padding: 80px 40px 60px !important; }
          .univ-etape > div:last-child { padding: 48px 40px !important; }
          .univ-closing { padding: 0 40px 100px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
