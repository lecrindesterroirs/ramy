'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd'
import BusinessJsonLd from '../../../components/BusinessJsonLd'

/* Fond papier (grain léger) pour l'effet parchemin. */
const GRAIN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
  <filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>
  <feColorMatrix type='saturate' values='0'/></filter>
  <rect width='100%' height='100%' filter='url(#g)' opacity='0.4'/>
</svg>`
const GRAIN = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`

const GOLD = '#A9803B'

function Sprig() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', margin: '8px 0' }}>
      <span style={{ width: '54px', height: '1px', background: 'rgba(169,128,59,0.5)' }} />
      <svg width="28" height="17" viewBox="0 0 26 16" fill="none" stroke={GOLD} strokeWidth="0.9">
        <path d="M13 15 C13 9 13 5 13 1" />
        <path d="M13 11 C9 10 7 8 6.5 5.5 C9.5 6 11.5 7.5 13 10.5 Z" fill={GOLD} fillOpacity="0.28" />
        <path d="M13 11 C17 10 19 8 19.5 5.5 C16.5 6 14.5 7.5 13 10.5 Z" fill={GOLD} fillOpacity="0.28" />
        <path d="M13 7 C10 6.5 8.5 5 8 3 C10.5 3.5 12 4.8 13 6.8 Z" fill={GOLD} fillOpacity="0.28" />
        <path d="M13 7 C16 6.5 17.5 5 18 3 C15.5 3.5 14 4.8 13 6.8 Z" fill={GOLD} fillOpacity="0.28" />
      </svg>
      <span style={{ width: '54px', height: '1px', background: 'rgba(169,128,59,0.5)' }} />
    </div>
  )
}

const MANIFESTE = [
  "L'Écrin est né d'une conviction simple : les moments partagés en entreprise méritent mieux que l'ordinaire.",
  "Nous sélectionnons les meilleurs. Chaque artisan, chaque produit, chaque geste est choisi pour la justesse de son savoir-faire et l'émotion qu'il crée à la dégustation.",
  "Un petit-déjeuner livré dès 6h30, un cocktail dressé à la minute, une pause qui rassemble : nous mettons le même soin dans chaque détail, car ce sont eux dont vos équipes se souviennent.",
  "Le luxe, pour nous, n'est pas froid. Il est vivant, chaleureux, humain. C'est tout l'art de recevoir.",
]

export default function NotreMaison() {
  return (
    <>
      <Navbar showBanner={true} />

      <main
        className="pm-main"
        style={{
          minHeight: '100vh',
          paddingTop: 'calc(var(--banner-h) + var(--nav-h))',
          background: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className="pm-wrap" style={{ width: '100%', maxWidth: '820px', padding: '80px 40px 110px' }}>

          {/* ── Parchemin ── */}
          <article
            className="pm-scroll"
            style={{
              position: 'relative',
              backgroundColor: '#FBF6EA',
              backgroundImage: GRAIN,
              backgroundSize: '300px',
              padding: '76px 72px 68px',
              boxShadow: '0 30px 70px -30px rgba(80,60,30,0.4), inset 0 0 0 1px rgba(169,128,59,0.18)',
              textAlign: 'center',
            }}
          >
            {/* Filet doré intérieur */}
            <span style={{ position: 'absolute', inset: '18px', border: '1px solid rgba(169,128,59,0.25)', pointerEvents: 'none' }} />

            <p style={{ fontFamily: "'Cormorant SC', 'Baskerville Display PT', serif", fontSize: '13px', fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: GOLD, marginBottom: '22px' }}>
              L'Écrin · Notre Maison
            </p>

            <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(38px, 6vw, 62px)', fontWeight: 400, lineHeight: 1.05, color: '#2A2013', marginBottom: '10px' }}>
              Qui sommes-nous
            </h1>

            <Sprig />

            <div style={{ maxWidth: '540px', margin: '26px auto 0' }}>
              {MANIFESTE.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Baskerville Display PT', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: 'clamp(17px, 2vw, 20px)',
                    lineHeight: 1.7,
                    color: 'rgba(42,32,19,0.86)',
                    marginBottom: i < MANIFESTE.length - 1 ? '22px' : '0',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            <div style={{ marginTop: '40px' }}>
              <Sprig />
              <img loading="lazy" src="/logo-footer.svg" alt="L'Écrin" style={{ height: '38px', width: 'auto', margin: '18px auto 8px', opacity: 0.85, display: 'block' }} />
              <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontStyle: 'italic', fontSize: '15px', color: GOLD }}>
                L'Écrin Traiteur · Paris
              </p>
            </div>
          </article>

          {/* ── Notre modèle (faits, E-E-A-T) ── */}
          <section className="nm-facts" style={{ maxWidth: '620px', margin: '80px auto 0', textAlign: 'left' }}>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 400, color: '#2A2013', marginBottom: '22px' }}>
              Notre modèle
            </h2>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '16px', lineHeight: 1.85, color: 'rgba(42,32,19,0.82)', marginBottom: '20px' }}>
              L'Écrin n'a pas de cuisine centrale qui standardise tout. Nous partons de commerçants et d'artisans que nous avons goûtés un par un, les madeleines de Mado Paris, les viennoiseries de la Maison Marques, les yaourts de la Ferme de Viltain à Jouy-en-Josas, les jus d'Alain Milliat, puis nous assurons la mise en place, la présentation et la logistique du froid jusqu'à vos bureaux.
            </p>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '16px', lineHeight: 1.85, color: 'rgba(42,32,19,0.82)', marginBottom: '20px' }}>
              Basés à Boulogne-Billancourt, nous livrons Paris et l'Île-de-France par notre propre équipe, dès 6h30, jamais en sous-traitance. Toute la carte est halal et sans porc par défaut, avec des options végétariennes, vegan et sans gluten. Le dernier geste, poser le plateau et aligner les verres, compte autant que le choix du producteur.
            </p>
          </section>

          {/* ── Le mot du fondateur ── */}
          <section className="nm-founder" style={{ maxWidth: '620px', margin: '48px auto 0', paddingTop: '40px', borderTop: '1px solid rgba(169,128,59,0.3)', textAlign: 'left' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD, marginBottom: '18px' }}>
              Le mot du fondateur
            </p>
            <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.7, color: '#2A2013', marginBottom: '20px' }}>
              « J'ai commencé par chercher les meilleurs producteurs avant de chercher des clients. Un petit-déjeuner d'entreprise, ce n'est pas une contrainte logistique : c'est un moment qu'on offre à ses équipes. Je voulais qu'il soit à la hauteur. »
            </p>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', color: 'rgba(42,32,19,0.7)' }}>
              <strong style={{ fontWeight: 500, color: '#2A2013' }}>Ramy Abdelaty</strong>, fondateur de L'Écrin Traiteur
            </p>
          </section>

        </div>
      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .pm-wrap { padding: 48px 18px 72px !important; }
          .pm-scroll { padding: 52px 28px 48px !important; }
        }
      ` }} />

      <BusinessJsonLd />
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', path: '' },
        { name: 'Notre maison', path: '/univers/notre-maison' },
      ]} />

      <Footer />
    </>
  )
}
