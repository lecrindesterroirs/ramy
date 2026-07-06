'use client'

import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

// Faits vérifiables uniquement (aucun chiffre inventé)
const stats = [
  { chiffre: '5,0★', label: 'note Google · 18 avis' },
  { chiffre: '6h30', label: 'livraison au plus tôt' },
  { chiffre: '24h', label: 'devis personnalisé' },
]

// Notre modèle réel : sélection d'artisans → préparation → livraison
const piliers = [
  {
    titre: 'La sélection',
    label: 'Des artisans, pas des industriels',
    bio: "Nous ne cuisinons pas tout, nous sélectionnons. Chaque maison est choisie pour son savoir-faire — Mado Paris, Mariage Frères, Alain Milliat, Laura Todd. Des produits qui portent un nom.",
    img: '/selection-chef.webp',
  },
  {
    titre: 'La préparation',
    label: 'Assemblé et dressé avec soin',
    bio: "Thermos de café, mise en boîte soignée, dressage à la minute pour les cocktails : chaque commande est préparée le jour même, prête à servir.",
    img: '/creations-featured.webp',
  },
  {
    titre: 'La livraison',
    label: 'Dès 6h30, prêt à servir',
    bio: "Livraison en entreprise dès 6h30, du lundi au vendredi, à Paris et en Île-de-France. C'est notre différence — et ce dont vos équipes se souviennent.",
    img: '/creations-2.webp',
  },
]

export default function APropos() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero ── */}
        <div
          className="apropos-hero"
          style={{
            position: 'relative',
            width: '100%',
            height: '70vh',
            minHeight: '460px',
            overflow: 'hidden',
          }}
        >
          <Image fill priority sizes="100vw" src="/hero-bg2.webp"
            alt="À Propos — L'Écrin Traiteur"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)',
          }} />
          <div
            className="apropos-hero-text"
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
              L'Écrin Traiteur, Paris &amp; Île-de-France
            </p>
            <h1 style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(48px, 7vw, 96px)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              color: '#FFFFFF',
            }}>
              À Propos
            </h1>
          </div>
        </div>

        {/* ── Notre histoire ── */}
        <div
          className="apropos-histoire"
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
              Une maison parisienne née d'une passion pour le partage.
            </h2>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '16px',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
              marginBottom: '22px',
            }}>
              L'Écrin Traiteur est né d'une conviction simple : les moments partagés en entreprise méritent mieux que l'ordinaire. Nous concevons des petits-déjeuners, plateaux repas, cocktails et pauses gourmandes pour les entreprises de Paris et d'Île-de-France.
            </p>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '16px',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
              marginBottom: '22px',
            }}>
              Notre parti pris : nous ne cuisinons pas tout, nous sélectionnons. Chaque produit vient d'un artisan choisi pour son savoir-faire — Mado Paris pour les madeleines, Mariage Frères pour les thés, Alain Milliat pour les jus — que nous rassemblons, dressons et livrons avec le même soin.
            </p>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '16px',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
            }}>
              Nous ne transigeons jamais sur l'essentiel : la qualité des produits, le soin de la présentation et la fiabilité du service, livré prêt à servir dès 6h30.
            </p>
          </div>

          <div style={{ position: 'relative', height: '580px', overflow: 'hidden' }}>
            <Image fill sizes="(max-width: 768px) 100vw, 50vw" src="/img-reception.webp"
              alt="L'Écrin Traiteur — notre histoire"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* ── Chiffres clés ── */}
        <div
          className="apropos-stats"
          style={{
            background: 'var(--bg-secondary)',
            padding: '100px 72px',
          }}
        >
          <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '16px',
              }}>
                En chiffres
              </p>
              <h2 style={{
                fontFamily: "'Baskerville Display PT', Georgia, serif",
                fontSize: 'clamp(28px, 3vw, 48px)',
                fontWeight: 400,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
              }}>
                L'Écrin en quelques faits
              </h2>
            </div>

            <div
              className="apropos-stats-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: '#FFFFFF',
                    padding: '56px 40px',
                    textAlign: 'center',
                  }}
                >
                  <p style={{
                    fontFamily: "'Baskerville Display PT', Georgia, serif",
                    fontSize: 'clamp(48px, 5vw, 72px)',
                    fontWeight: 400,
                    lineHeight: 1,
                    color: 'var(--accent)',
                    marginBottom: '12px',
                  }}>
                    {s.chiffre}
                  </p>
                  <p style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '13px',
                    fontWeight: 400,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                  }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── L'équipe ── */}
        <div
          className="apropos-equipe"
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '100px 72px 120px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '16px',
            }}>
              Notre approche
            </p>
            <h2 style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(28px, 3vw, 48px)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
            }}>
              Comment nous travaillons
            </h2>
          </div>

          <div
            className="apropos-equipe-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
            }}
          >
            {piliers.map((p, i) => (
              <div key={i} style={{ background: 'var(--bg-secondary)' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 4', overflow: 'hidden' }}>
                  <Image fill sizes="(max-width: 768px) 50vw, 25vw" src={p.img}
                    alt={p.titre}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '28px 28px 40px' }}>
                  <h3 style={{
                    fontFamily: "'Baskerville Display PT', Georgia, serif",
                    fontSize: '22px',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                    lineHeight: 1.2,
                  }}>
                    {p.titre}
                  </h3>
                  <p style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: '16px',
                  }}>
                    {p.label}
                  </p>
                  <p style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '14px',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                  }}>
                    {p.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .apropos-hero { height: 55vh !important; min-height: 360px !important; }
          .apropos-hero-text { padding: 0 24px !important; }
          .apropos-histoire { grid-template-columns: 1fr !important; padding: 60px 24px !important; gap: 40px !important; }
          .apropos-stats { padding: 60px 24px !important; }
          .apropos-stats-grid { grid-template-columns: 1fr !important; }
          .apropos-equipe { padding: 60px 24px 80px !important; }
          .apropos-equipe-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .apropos-histoire { padding: 80px 40px !important; gap: 48px !important; }
          .apropos-stats { padding: 80px 40px !important; }
          .apropos-equipe { padding: 80px 40px 100px !important; }
          .apropos-equipe-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
