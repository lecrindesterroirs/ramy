'use client'

import { MADELEINE_FLAVORS } from '../lib/productsData'

const INFOS = [
  {
    title: 'Préparées chaque jour',
    text: "Nos madeleines sont confectionnées quotidiennement pour vous offrir un moelleux incomparable et une fraîcheur optimale.",
  },
  {
    title: 'Des saveurs qui surprennent',
    text: "Pistache framboise, ananas coco passion, fleur d'oranger, rose violette... Des recettes originales qui raviront tous les palais.",
  },
  {
    title: "Le best-seller de L'Écrin",
    text: "Le produit le plus demandé lors de nos petits-déjeuners, cocktails et événements d'entreprise.",
  },
]

export default function MadeleinesSection() {
  return (
    <section className="mad-section" style={{ background: 'var(--bg-secondary)' }}>

      {/* ── Haut : image + contenu ── */}
      <div className="mad-top" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr' }}>

        {/* Image */}
        <div className="mad-img-col" style={{ position: 'relative', overflow: 'hidden', minHeight: '680px' }}>
          <img
            src="/madeleine-home.jpg"
            alt="Madeleines artisanales — L'Écrin Traiteur"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>

        {/* Contenu */}
        <div className="mad-content" style={{ padding: '88px 88px 80px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
            Les incontournables
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(34px, 3.8vw, 56px)', fontWeight: 400, lineHeight: 1.06, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginBottom: '22px' }}>
            Madeleines artisanales
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '44px', maxWidth: '500px' }}>
            Derrière leur texture moelleuse et leur bosse généreuse, nos madeleines déclinent des saveurs originales et raffinées, pensées pour ravir tous les palais lors de vos événements.
          </p>

          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            Nos saveurs
          </p>

          <div className="mad-flavors" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '44px' }}>
            {MADELEINE_FLAVORS.map(f => (
              <div key={f.id} className="mad-flavor-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(17,17,17,0.08)', borderRadius: '6px', padding: '20px 12px 16px', textAlign: 'center' }}>
                <div style={{ height: '88px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <img src={f.img} alt={f.label} style={{ maxHeight: '88px', maxWidth: '85%', objectFit: 'contain', display: 'block' }} />
                </div>
                <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, color: '#3A342C', lineHeight: 1.3 }}>{f.label}</span>
              </div>
            ))}
          </div>

          <a href="/creations/petits-dejeuners-et-pauses/madeleines-20" className="mad-cta" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--text-primary)', paddingBottom: '4px', transition: 'color 0.25s ease, border-color 0.25s ease' }}>
            Découvrir les coffrets
            <span className="mad-arrow" style={{ display: 'inline-block', transition: 'transform 0.25s ease' }}>→</span>
          </a>
        </div>
      </div>

      {/* ── Bas : 3 colonnes d'infos ── */}
      <div className="mad-infos-wrap" style={{ borderTop: '1px solid rgba(17,17,17,0.08)', background: '#FFFFFF' }}>
        <div className="mad-infos" style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 72px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
          {INFOS.map(info => (
            <div key={info.title}>
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)', marginBottom: '16px' }} />
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '12px' }}>
                {info.title}
              </p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {info.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style suppressHydrationWarning>{`
        .mad-flavor-card { transition: transform 0.25s ease; }
        .mad-flavor-card:hover { transform: translateY(-3px); }
        .mad-cta:hover { color: var(--accent); border-color: var(--accent); }
        .mad-cta:hover .mad-arrow { transform: translateX(4px); }
        @media (max-width: 900px) {
          .mad-top { grid-template-columns: 1fr !important; }
          .mad-img-col { min-height: 300px !important; }
          .mad-content { padding: 48px 24px !important; }
          .mad-infos { grid-template-columns: 1fr !important; gap: 28px !important; padding: 40px 24px !important; }
        }
        @media (max-width: 1024px) and (min-width: 901px) {
          .mad-content { padding: 56px 40px !important; }
          .mad-infos { padding: 44px 40px !important; }
        }
      `}</style>
    </section>
  )
}
