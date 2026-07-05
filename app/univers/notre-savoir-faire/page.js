'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

const etapes = [
  {
    num: '01',
    titre: 'Écoute & Conception',
    desc: "Chaque prestation commence par une conversation. Nous prenons le temps de comprendre vos besoins, vos envies, vos contraintes, pour concevoir une proposition sur-mesure.",
    img: '/petit-dejeuner-ds.webp',
  },
  {
    num: '02',
    titre: 'Sélection des produits',
    desc: "Nous travaillons avec un réseau de producteurs et artisans sélectionnés pour la qualité constante de leurs produits. Fraîcheur, saisonnalité et traçabilité sont nos exigences.",
    img: '/selection-chef.webp',
  },
  {
    num: '03',
    titre: 'Fabrication artisanale',
    desc: "Nous ne fabriquons pas tout nous-mêmes, et c'est précisément notre force. Chaque produit vient d'un artisan choisi pour ce qu'il sait faire. Mado Paris, Maison Marques, Pierre Morel... des mains expertes, au service de votre prestation.",
    img: '/creations-featured.webp',
  },
  {
    num: '04',
    titre: 'Livraison & Service',
    desc: "La prestation ne s'arrête pas à la livraison. Nos équipes assurent le dressage, la mise en place et, si besoin, le service sur place pour une expérience sans faille.",
    img: '/buffet.webp',
  },
]

export default function NotreSavoirFaire() {
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
          <img loading="eager" src="/selection-chef.webp"
            alt="Notre Savoir-Faire — L'Écrin Traiteur"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
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
              L'Univers, Notre Savoir-Faire
            </p>
            <h1 style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              color: '#FFFFFF',
            }}>
              Notre Savoir-Faire
            </h1>
          </div>
        </div>

        {/* ── Intro ── */}
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
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px 120px' }}>
          {etapes.map((e, i) => (
            <div
              key={i}
              className={`univ-etape univ-etape-${i % 2 === 0 ? 'normal' : 'reverse'}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2px',
                marginBottom: '2px',
                direction: i % 2 !== 0 ? 'rtl' : 'ltr',
              }}
            >
              <div style={{ overflow: 'hidden', direction: 'ltr' }}>
                <img loading="lazy" src={e.img}
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
                <h3 style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                  lineHeight: 1.15,
                }}>
                  {e.titre}
                </h3>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                }}>
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .univ-hero { height: 55vh !important; min-height: 360px !important; }
          .univ-hero-text { padding: 0 24px !important; }
          .univ-intro { padding: 60px 24px 40px !important; }
          .univ-etape { grid-template-columns: 1fr !important; direction: ltr !important; }
          .univ-etape > div:first-child img { height: 280px !important; }
          .univ-etape > div:last-child { padding: 40px 24px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .univ-intro { padding: 80px 40px 60px !important; }
          .univ-etape { grid-template-columns: 1fr 1fr !important; }
          .univ-etape > div:last-child { padding: 48px 40px !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
