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

const ENGAGEMENTS = [
  {
    titre: 'Une sélection sans compromis',
    texte: "ne référencer que ce que nous avons goûté, testé et remis en question. Jamais un catalogue imposé. Un artisan entre chez nous parce qu'il fait mieux que les autres, pour aucune autre raison.",
  },
  {
    titre: "Des ingrédients qu'on peut nommer",
    texte: "pouvoir nommer chaque ingrédient : farines françaises, produits biologiques, sans huile de palme, chocolat pur origine, fruits entiers, zéro arôme artificiel.",
  },
  {
    titre: 'Le circuit court, quand il sert le produit',
    texte: "privilégier les producteurs locaux quand la proximité améliore vraiment le produit : le verger des Yvelines, la Ferme de Viltain, la boulangerie de Boulogne. Pas comme argument, comme réalité.",
  },
  {
    titre: 'Une livraison qui fait partie du service',
    texte: "livraison à partir de 6h30 par notre équipe interne, formée à nos standards, avec mise en place sur demande. Jamais de sous-traitance. Le dernier geste compte autant que le premier.",
  },
]

export default function NosEngagements() {
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
            <span style={{ position: 'absolute', inset: '18px', border: '1px solid rgba(169,128,59,0.25)', pointerEvents: 'none' }} />

            <p style={{ fontFamily: "'Cormorant SC', 'Baskerville Display PT', serif", fontSize: '13px', fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: GOLD, marginBottom: '22px' }}>
              L'Écrin · Nos Engagements
            </p>

            <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 400, lineHeight: 1.08, color: '#2A2013', marginBottom: '10px' }}>
              Chez L'Écrin,<br />on s'engage à…
            </h1>

            <Sprig />

            {/* Liste des engagements */}
            <div style={{ maxWidth: '560px', margin: '30px auto 0', textAlign: 'left' }}>
              {ENGAGEMENTS.map((e, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '18px',
                    padding: i === 0 ? '0 0 24px' : '24px 0',
                    borderTop: i === 0 ? 'none' : '1px solid rgba(169,128,59,0.2)',
                  }}
                >
                  <div>
                    <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(17px, 1.9vw, 21px)', fontWeight: 400, color: '#2A2013', marginBottom: '8px' }}>
                      {e.titre}
                    </h2>
                    <p className="eng-texte" style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(16px, 1.9vw, 19px)', lineHeight: 1.6, color: 'rgba(42,32,19,0.86)' }}>
                      {e.texte}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '38px' }}>
              <Sprig />
              <img loading="lazy" src="/logo-footer.svg" alt="L'Écrin" style={{ height: '38px', width: 'auto', margin: '18px auto 8px', opacity: 0.85, display: 'block' }} />
              <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontStyle: 'italic', fontSize: '15px', color: GOLD }}>
                L'Écrin Traiteur · Paris
              </p>
            </div>
          </article>

        </div>
      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .eng-texte::first-letter {
          float: left;
          color: ${GOLD};
          font-family: 'Baskerville Display PT', Georgia, serif;
          font-style: normal;
          font-weight: 400;
          font-size: 3.3em;
          line-height: 0.82;
          margin: 0.04em 0.1em 0 0;
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .pm-wrap { padding: 48px 18px 72px !important; }
          .pm-scroll { padding: 52px 26px 48px !important; }
        }
      ` }} />

      <BusinessJsonLd />
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', path: '' },
        { name: 'Nos engagements', path: '/univers/nos-engagements' },
      ]} />

      <Footer />
    </>
  )
}
