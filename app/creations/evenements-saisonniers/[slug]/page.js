'use client'

import { useParams } from 'next/navigation'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import { evenements } from '../evenementsData'

export default function EvenementDetail() {
  const { slug } = useParams()
  const ev = evenements.find(e => e.slug === slug)

  if (!ev) {
    return (
      <>
        <Navbar showBanner={true} />
        <main style={{ paddingTop: 'calc(var(--banner-h) + var(--nav-h))', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', color: 'var(--text-secondary)' }}>
            Événement non trouvé.
          </p>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* Header */}
        <div
          className="ev-header"
          style={{
            background: 'var(--bg-secondary)',
            padding: '80px 72px 64px',
          }}
        >
          <div style={{ marginBottom: '36px' }}>
            <a
              href="/creations/evenements-saisonniers"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              ← Événements Saisonniers
            </a>
          </div>

          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '16px',
          }}>
            {ev.mois}
          </p>

          <h1 style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            marginBottom: '24px',
            maxWidth: '700px',
          }}>
            {ev.nom}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
            {ev.tags.map((tag, i) => (
              <span key={i} style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '9px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                border: '1px solid rgba(17,17,17,0.18)',
                padding: '5px 10px',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image pleine largeur */}
        <div style={{ width: '100%', height: '55vh', overflow: 'hidden', minHeight: '320px', maxHeight: '580px' }}>
          <img loading="lazy" src={ev.img}
            alt={ev.nom}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Contenu principal */}
        <div
          className="ev-content"
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '48px 72px 96px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          {/* Colonne gauche */}
          <div>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '20px',
            }}>
              L'événement
            </p>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '16px',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
              marginBottom: '48px',
            }}>
              {ev.desc}
            </p>

            <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '24px' }}>
              <p style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '9px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '10px',
              }}>
                {ev.differentiateur.label}
              </p>
              <p style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '14px',
                lineHeight: 1.75,
                color: 'var(--text-primary)',
              }}>
                {ev.differentiateur.text}
              </p>
            </div>
          </div>

          {/* Colonne droite */}
          <div style={{ background: 'var(--bg-secondary)', padding: '40px' }}>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '24px',
            }}>
              Au programme
            </p>

            <div style={{ marginBottom: '40px' }}>
              {ev.produits.map((prod, i) => (
                <div
                  key={i}
                  style={{
                    padding: '13px 0',
                    borderBottom: '1px solid rgba(17,17,17,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <span style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '13px',
                    color: 'var(--text-primary)',
                  }}>
                    {prod}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/devis"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                background: 'var(--accent)',
                padding: '15px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Organiser cet événement →
            </a>
          </div>
        </div>

        {/* ── Article SEO ── */}
        <div
          className="ev-article"
          style={{
            borderTop: '1px solid rgba(17,17,17,0.07)',
            background: '#FFFFFF',
          }}
        >
          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto',
              padding: '80px 40px 96px',
            }}
          >
            {/* Label article */}
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '20px',
            }}>
              Guide pratique
            </p>

            {/* Titre article */}
            <h2 style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: 'clamp(24px, 3vw, 42px)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '56px',
              letterSpacing: '-0.01em',
            }}>
              {ev.article.titre}
            </h2>

            {/* Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {ev.article.sections.map((section, i) => (
                <div key={i}>
                  <h3 style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    marginBottom: '16px',
                  }}>
                    {section.heading}
                  </h3>
                  <p style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '15px',
                    lineHeight: 1.9,
                    color: 'var(--text-secondary)',
                  }}>
                    {section.texte}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA inline article */}
            <div style={{
              marginTop: '64px',
              padding: '32px 36px',
              background: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}>
              <p style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '14px',
                lineHeight: 1.6,
                color: 'var(--text-primary)',
                maxWidth: '380px',
              }}>
                Vous organisez {ev.nom === 'Halloween' || ev.nom === 'Noël' || ev.nom === 'Pâques' ? ev.nom : `la ${ev.nom}`} pour votre entreprise ? On s'en occupe.
              </p>
              <a
                href="/devis"
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  background: 'var(--accent)',
                  padding: '13px 24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Obtenir un devis →
              </a>
            </div>
          </div>
        </div>

        {/* CTA bas */}
        <div
          className="ev-footer-cta"
          style={{
            background: 'var(--bg-secondary)',
            padding: '72px',
            textAlign: 'center',
            borderTop: '1px solid rgba(17,17,17,0.06)',
          }}
        >
          <p style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(22px, 2.8vw, 38px)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: '16px',
            lineHeight: 1.15,
          }}>
            D'autres événements à organiser ?
          </p>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '14px',
            color: 'var(--text-secondary)',
            maxWidth: '380px',
            margin: '0 auto 36px',
            lineHeight: 1.75,
          }}>
            Dites-nous votre contexte, votre date, votre effectif. Devis sous 24h.
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
            Obtenir un devis →
          </a>
        </div>

        {/* Retour */}
        <div
          className="ev-nav"
          style={{ padding: '40px 72px', display: 'flex', justifyContent: 'center' }}
        >
          <a
            href="/creations/evenements-saisonniers"
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            ← Voir tous les événements
          </a>
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .ev-header { padding: 48px 24px 40px !important; }
          .ev-content {
            grid-template-columns: 1fr !important;
            padding: 48px 24px 60px !important;
            gap: 40px !important;
          }
          .ev-article > div { padding: 56px 24px 72px !important; }
          .ev-footer-cta { padding: 48px 24px !important; }
          .ev-nav { padding: 32px 24px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .ev-header { padding: 64px 40px 48px !important; }
          .ev-content { padding: 60px 40px 80px !important; gap: 48px !important; }
          .ev-article > div { padding: 64px 40px 80px !important; }
          .ev-footer-cta { padding: 56px 40px !important; }
          .ev-nav { padding: 32px 40px !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
