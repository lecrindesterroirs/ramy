'use client'

import { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

const CATS = [
  { label: 'Petits-déjeuners & Pauses', href: '/creations/petits-dejeuners-et-pauses' },
  { label: 'Plateaux repas',            href: '/creations/plateaux-repas' },
  { label: 'Cocktails & Buffets',       href: '/creations/cocktails-et-buffets' },
  { label: 'Coffrets cadeaux',          href: '/creations/coffrets-cadeaux' },
]

const PLATEAUX_ITEMS = [
  {
    id: 'essentiel',
    nom: 'Menu Essentiel',
    prix: 28.90,
    img: '/creations-4.png',
    description: 'Entrée + Plat + Dessert au choix',
  },
  {
    id: 'signature',
    nom: 'Menu Signature',
    prix: 33.90,
    img: '/creations-4.png',
    description: 'Sélection gourmande avec options premium',
  },
  {
    id: 'prestige',
    nom: 'Option Prestige',
    prix: 9.90,
    img: '/creations-4.png',
    description: 'Upgrade avec fromages et présentation premium',
  },
]

const LUNCHBOX_ITEMS = [
  {
    id: 'menu-rapide',
    nom: 'Menu à 19,90€',
    prix: 19.90,
    img: '/creations-4.png',
    description: 'Entrée + Plat (Sandwich ou Salade) + Dessert',
  },
  {
    id: 'sandwichs',
    nom: 'Sandwichs & Clubs',
    prix: null,
    img: '/creations-4.png',
    description: 'Sélection de 6 formules variées',
  },
  {
    id: 'salades',
    nom: 'Salades',
    prix: null,
    img: '/creations-4.png',
    description: '5 bases + 12 déclinaisons',
  },
]

export default function PlateauxRepas() {
  const [activeTab, setActiveTab] = useState('plateaux')
  const [hovered, setHovered] = useState(null)

  const items = activeTab === 'plateaux' ? PLATEAUX_ITEMS : LUNCHBOX_ITEMS

  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* Hero */}
        <div className="page-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <div className="page-hero" style={{ position: 'relative', width: '100%', height: '68vh', minHeight: '420px', overflow: 'hidden' }}>
            <img
              src="/creations-4.png"
              alt="Plateaux Repas"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <div className="page-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '600px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                Nos Créations — Déjeuners
              </p>
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                Menus & Formules
              </h1>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '340px' }}>
                Plateaux pour événements ou lunch box pour déjeuners rapides.
              </p>
            </div>
          </div>
        </div>

        {/* Onglets */}
        <div className="products-filter-bar" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(17,17,17,0.08)' }}>
          <div className="filter-cats" style={{ display: 'flex', alignItems: 'center' }}>
            {[
              { key: 'plateaux', label: 'Plateaux Repas' },
              { key: 'lunchbox', label: 'Lunch Box' },
            ].map(tab => {
              const active = tab.key === activeTab
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
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
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderBottomColor = 'rgba(17,17,17,0.2)' } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'rgba(17,17,17,0.42)'; e.currentTarget.style.borderBottomColor = 'transparent' } }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
          <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)' }}>
            {items.length} menu{items.length > 1 ? 's' : ''}
          </span>
        </div>

        {/* Grille de cartes */}
        <div className="products-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '48px 72px 120px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {items.map(item => (
            <MenuCard
              key={item.id}
              item={item}
              hovered={hovered === item.id}
              onHover={() => setHovered(item.id)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>

        {/* CTA */}
        <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(17,17,17,0.07)', textAlign: 'center', padding: '80px 40px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            Besoin d'une formule personnalisée ?
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '16px' }}>
            Des produits qui ont du goût.<br />Un service qui tient ses promesses.
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '40px' }}>
            Devis personnalisé sous 24h.
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
          .products-filter-bar { padding: 0 16px !important; flex-wrap: wrap !important; }
          .filter-cats { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; flex-shrink: 1; min-width: 0; }
          .filter-cats::-webkit-scrollbar { display: none; }
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 32px 16px 80px !important; gap: 2px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .page-hero-wrapper { padding: 24px 40px 0 !important; }
          .products-filter-bar { padding: 0 40px !important; }
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 40px 40px 100px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}

function MenuCard({ item, hovered, onHover, onLeave }) {
  return (
    <div
      style={{ cursor: 'pointer' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <a href="#" style={{ display: 'block', textDecoration: 'none', position: 'relative' }} onClick={e => e.preventDefault()}>
        <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#F8F5EF' }}>
          <img
            src={item.img}
            alt={item.nom}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
          />
        </div>
      </a>

      <div style={{ padding: '14px 4px 10px', display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: hovered ? 'var(--accent)' : 'var(--text-primary)', marginBottom: '4px', transition: 'color 0.25s ease' }}>
          {item.nom}
        </p>
        {item.prix && (
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.06em', color: 'rgba(17,17,17,0.38)', marginBottom: '8px' }}>
            Dès {item.prix.toFixed(2).replace('.', ',')} € HT
          </p>
        )}
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.06em', color: 'rgba(17,17,17,0.5)', marginBottom: '12px', lineHeight: 1.4 }}>
          {item.description}
        </p>

        <button
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
            background: 'none',
            cursor: 'pointer',
          }}
        >
          Voir le menu →
        </button>
      </div>
    </div>
  )
}
