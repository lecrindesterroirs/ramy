'use client'

import { useState, useMemo } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { COLLECTIONS, FILTRES } from '../../../lib/collectionsData'
import { DIETARY_COLORS } from '../../../lib/productsData'

const CATS = [
  { label: 'Petits-déjeuners & Pauses', href: '/creations/petits-dejeuners-et-pauses' },
  { label: 'Plateaux repas',            href: '/creations/plateaux-repas' },
  { label: 'Cocktails & Buffets',       href: '/creations/cocktails-et-buffets' },
  { label: 'Coffrets cadeaux',          href: '/creations/coffrets-cadeaux' },
]

export default function PlateauxRepas() {
  const [filtre, setFiltre]       = useState('tous')
  const [filtreOpen, setFiltreOpen] = useState(false)

  const collections = useMemo(() => {
    if (filtre === 'tous') return COLLECTIONS
    return COLLECTIONS.filter(c => c.proteines === filtre)
  }, [filtre])

  const filtreLabel = FILTRES.find(f => f.key === filtre)?.label || 'Filtrer'

  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* Hero */}
        <div className="page-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <div className="page-hero" style={{ position: 'relative', width: '100%', height: '68vh', minHeight: '420px', overflow: 'hidden' }}>
            <img
              src="/creations-4.png"
              alt="Nos Collections"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <div className="page-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '600px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                Nos Créations — Plateaux Repas
              </p>
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                Nos Collections
              </h1>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '340px' }}>
                Les plus belles cuisines du monde, imaginées pour l'entreprise.
              </p>
            </div>
          </div>
        </div>

        {/* Barre catégories + filtre */}
        <div className="products-filter-bar" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(17,17,17,0.08)' }}>

          {/* Onglets catégories */}
          <div className="filter-cats" style={{ display: 'flex', alignItems: 'center' }}>
            {CATS.map(cat => {
              const active = cat.href === '/creations/plateaux-repas'
              return (
                <a
                  key={cat.href}
                  href={cat.href}
                  style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '11px',
                    fontWeight: active ? 500 : 400,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: active ? 'var(--text-primary)' : 'rgba(17,17,17,0.42)',
                    textDecoration: 'none',
                    padding: '20px 18px',
                    borderBottom: active ? '2px solid var(--text-primary)' : '2px solid transparent',
                    whiteSpace: 'nowrap',
                    display: 'inline-block',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderBottomColor = 'rgba(17,17,17,0.2)' } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'rgba(17,17,17,0.42)'; e.currentTarget.style.borderBottomColor = 'transparent' } }}
                >
                  {cat.label}
                </a>
              )
            })}
          </div>

          {/* Filtre protéines + compteur */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexShrink: 0 }}>
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setFiltreOpen(!filtreOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-primary)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', outline: 'none' }}
              >
                {filtreLabel}
                <span style={{ fontSize: '9px', opacity: 0.5 }}>▾</span>
              </button>
              {filtreOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 12px)', right: 0, background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.08)', padding: '8px 0', minWidth: '180px', boxShadow: '0 16px 32px rgba(17,17,17,0.06)', zIndex: 10 }}>
                  {FILTRES.map(f => (
                    <button
                      key={f.key}
                      onClick={() => { setFiltre(f.key); setFiltreOpen(false) }}
                      style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 20px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', letterSpacing: '0.06em', color: f.key === filtre ? 'var(--accent)' : 'var(--text-primary)', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)' }}>
              {collections.length} collection{collections.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Grid collections — 4 colonnes comme petits-déjeuners */}
        <div className="products-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '48px 72px 120px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {collections.map(c => (
            <CollectionCard key={c.id} collection={c} />
          ))}
        </div>

        {/* Section Saison */}
        <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(17,17,17,0.07)', padding: '80px 72px' }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
            <div style={{ maxWidth: '560px', marginBottom: '48px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
                Nouveauté
              </p>
              <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '16px' }}>
                Les Collections de Saison
              </h2>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                Chaque trimestre, notre Chef imagine une nouvelle série de menus autour des meilleurs produits du moment. Des recettes exclusives, disponibles pour une durée limitée.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
              {[
                { label: 'Collection Été 2026', sub: 'Disponible jusqu\'au 21 septembre', active: true },
                { label: 'Collection Automne', sub: 'Dès le 22 septembre', active: false },
                { label: 'Collection Hiver', sub: 'Prochainement', active: false },
                { label: 'Collection Printemps', sub: 'Prochainement', active: false },
              ].map(s => (
                <div key={s.label} style={{ background: '#FFFFFF', padding: '28px 24px' }}>
                  {s.active && (
                    <span style={{ display: 'inline-block', fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid var(--accent)', padding: '3px 8px', marginBottom: '14px' }}>
                      En cours
                    </span>
                  )}
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '6px' }}>{s.label}</p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.45)' }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* L'expérience — carte dans chaque plateau */}
        <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 72px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
                L'expérience L'Écrin
              </p>
              <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '20px' }}>
                Une carte dans chaque plateau
              </h2>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                Chaque plateau est accompagné d'une carte présentant la Collection choisie. Une attention simple, pensée pour transformer un déjeuner d'entreprise en véritable expérience culinaire. Le collaborateur ne reçoit plus une boîte — il découvre une collection.
              </p>
            </div>
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.1)', padding: '36px 32px', maxWidth: '340px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '20px', marginBottom: '20px' }}>🇮🇹</p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>
                Collection Toscane
              </p>
              <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '14px', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '24px' }}>
                "Inspirée des collines italiennes, cette collection célèbre une cuisine généreuse où les herbes fraîches, le citron et les produits de caractère sont à l'honneur."
              </p>
              <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)', paddingTop: '20px', marginBottom: '20px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.38)', marginBottom: '6px' }}>
                  ⭐ Signature du menu
                </p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>
                  Poulet citron confit
                </p>
              </div>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.45)', marginBottom: '2px' }}>Bon déjeuner.</p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, color: 'var(--text-primary)' }}>L'équipe L'Écrin.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(17,17,17,0.07)', textAlign: 'center', padding: '80px 40px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            Composer votre déjeuner
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '16px' }}>
            Des produits qui ont du goût.<br />Un service qui tient ses promesses.
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '40px' }}>
            Besoin d'une prestation sur mesure ? Devis personnalisé sous 24h.
          </p>
          <a
            href="/devis"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', padding: '16px 40px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'opacity 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Demande de devis →
          </a>
        </section>

      </main>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .page-hero-wrapper { padding: 24px 16px 0 !important; }
          .page-hero { height: 50vh !important; min-height: 300px !important; }
          .page-hero-text { padding: 0 24px !important; }
          .products-filter-bar { padding: 0 0 0 16px !important; flex-wrap: nowrap !important; }
          .filter-cats { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; flex-shrink: 1; min-width: 0; }
          .filter-cats::-webkit-scrollbar { display: none; }
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 32px 16px 80px !important; gap: 2px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .page-hero-wrapper { padding: 24px 40px 0 !important; }
          .products-filter-bar { padding: 0 40px !important; }
          .products-grid { grid-template-columns: repeat(3, 1fr) !important; padding: 40px 40px 100px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}

function CollectionCard({ collection: c }) {
  const [hovered, setHovered] = useState(false)
  const href = `/creations/plateaux-repas/${c.id}`

  const proteineLabel = { volaille: 'Volaille', viande: 'Viande', poisson: 'Poisson', vegetarien: 'Végétarien', vegan: 'Végane' }
  const dietary = [proteineLabel[c.proteines]].filter(Boolean)

  return (
    <div
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={href} style={{ display: 'block', textDecoration: 'none', position: 'relative' }}>
        {c.bestseller && (
          <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 2, background: 'var(--accent)', color: '#fff', fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px' }}>
            ★ Bestseller
          </div>
        )}
        <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#F8F5EF' }}>
          {c.img
            ? <img src={c.img} alt={c.nom} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }} />
            : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.18)' }}>Photo à venir</div>
          }
        </div>
      </a>

      <div style={{ padding: '14px 4px 10px', display: 'flex', flexDirection: 'column' }}>
        <a href={href} style={{ textDecoration: 'none' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: hovered ? 'var(--accent)' : 'var(--text-primary)', marginBottom: '4px', transition: 'color 0.25s ease' }}>
            {c.nom}
          </p>
        </a>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.06em', color: 'rgba(17,17,17,0.38)', marginBottom: '8px' }}>
          Dès {c.prix.toFixed(2).replace('.', ',')} € HT
        </p>

        <div style={{ minHeight: '24px', display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px', alignItems: 'flex-start' }}>
          {dietary.map(tag => {
            const s = DIETARY_COLORS[tag] || { bg: 'rgba(17,17,17,0.05)', color: 'rgba(17,17,17,0.45)' }
            return (
              <span key={tag} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.color, background: s.bg, padding: '3px 6px' }}>
                {tag}
              </span>
            )
          })}
        </div>

        <a
          href={href}
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: hovered ? 'var(--accent)' : 'rgba(17,17,17,0.45)',
            border: `1px solid ${hovered ? 'var(--accent)' : 'rgba(17,17,17,0.15)'}`,
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
            justifyContent: 'center',
            transition: 'all 0.25s ease',
          }}
        >
          Découvrir le menu →
        </a>
      </div>
    </div>
  )
}
