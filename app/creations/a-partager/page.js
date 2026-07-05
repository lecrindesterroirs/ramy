'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'

const SEO_ARTICLE = `
  <h2>Plateaux à partager pour vos moments d'équipe à Paris</h2>
  <p>Certains moments d'entreprise n'ont pas besoin d'un format codifié — ils ont besoin d'un <strong>plateau généreux au centre de la table</strong>. Brainstorming qui s'éternise, point d'équipe du vendredi, accueil improvisé d'un partenaire : nos plateaux à partager livrent de la convivialité prête à servir, à Paris et en Île-de-France.</p>

  <h2>Le partage, un rituel d'équipe sous-estimé</h2>
  <p>Un plateau posé au centre change la dynamique d'une salle : on se sert, on fait passer, on commente. C'est le team building le moins cher et le plus naturel qui existe. Nos formats — corbeilles de fruits frais, assortiments sucrés, plateaux salés — sont pensés pour circuler de main en main, pas pour rester intacts en bout de table.</p>

  <h2>Composer le bon assortiment</h2>
  <p>Pour une pause partagée, comptez l'équivalent de <strong>2 pièces par personne</strong> en mélangeant les familles : un plateau sucré pour 8 à 10 personnes, une corbeille de fruits pour compléter, des boissons artisanales pour accompagner. Nos équipes vous aident à dimensionner selon la durée et l'horaire de votre moment d'équipe.</p>

  <h2>Commander vos plateaux à partager à Paris</h2>
  <p>Commande avant <strong>14h la veille</strong>, livraison à l'heure choisie partout à Paris et en Île-de-France. Les plateaux arrivent dressés, prêts à poser sur table. Facturation entreprise avec TVA — et pour les moments récurrents, un devis cadre simplifie tout.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */

const HERO = {
  label: 'À Partager',
  description: 'De grandes salades généreuses à partager, pensées par base — vertes, pâtes, pommes de terre, lentilles ou céréales. Composées le matin avec des produits de saison.',
  hero: '/hero-a-partager.png',
}

/* Filtres = les bases de salade. */
export const FILTRES = [
  { key: 'tous',      label: 'Toutes' },
  { key: 'vertes',    label: 'Bases vertes' },
  { key: 'pates',     label: 'Pâtes' },
  { key: 'pdt',       label: 'Pommes de terre' },
  { key: 'lentilles', label: 'Lentilles' },
  { key: 'cereales',  label: 'Céréales' },
]

const CATEGORIE_COLORS = {
  vertes:    '#5A7247',
  pates:     '#C08A3E',
  pdt:       '#A0764A',
  lentilles: '#6B7A3A',
  cereales:  '#B8945A',
}

/* Salades par base. Photos placeholder (bols de saison). */
export const SALADES = [
  // ── Bases vertes ──
  { id: 'v1', categorie: 'vertes', nom: 'La César',        img: '/partager-cesar.png' },
  { id: 'v2', categorie: 'vertes', nom: 'La Grecque',      img: '/partager-grecque.png' },
  { id: 'v3', categorie: 'vertes', nom: 'La Burrata',      img: '/partager-burrata.png' },
  { id: 'v4', categorie: 'vertes', nom: 'Le Saumon Gravlax', img: '/partager-gravlax.png' },
  // ── Salades de pâtes ──
  { id: 'p1', categorie: 'pates', nom: 'Pesto, Mozzarella & Tomates Confites', img: '/plat-grec.png' },
  { id: 'p2', categorie: 'pates', nom: 'Poulet César',    img: '/plat-cesar.png' },
  { id: 'p3', categorie: 'pates', nom: 'Thon',            img: '/plat-saumon.png' },
  { id: 'p4', categorie: 'pates', nom: 'Légumes Grillés', img: '/plat-mediterraneen.png' },
  // ── Salades de pommes de terre ──
  { id: 'd1', categorie: 'pdt', nom: 'Saumon & Crème Citronnée', img: '/plat-saumon.png' },
  { id: 'd2', categorie: 'pdt', nom: 'Moutarde à l\'Ancienne',   img: '/plat-roti.png' },
  { id: 'd3', categorie: 'pdt', nom: 'Herbes fraîches',          img: '/plat-grec.png' },
  { id: 'd4', categorie: 'pdt', nom: 'Poulet rôti',              img: '/plat-cesar.png' },
  // ── Salades de lentilles ──
  { id: 'l1', categorie: 'lentilles', nom: 'Feta',          img: '/plat-grec.png' },
  { id: 'l2', categorie: 'lentilles', nom: 'Saumon fumé',   img: '/plat-saumon.png' },
  { id: 'l3', categorie: 'lentilles', nom: 'Légumes rôtis', img: '/plat-fusion.png' },
  // ── Salades de céréales ──
  { id: 'c1', categorie: 'cereales', nom: 'Quinoa Méditerranéen', img: '/plat-mediterraneen.png' },
  { id: 'c2', categorie: 'cereales', nom: 'Boulgour Oriental',    img: '/plat-fusion.png' },
  { id: 'c3', categorie: 'cereales', nom: 'Épeautre & Légumes',   img: '/plat-grec.png' },
]

/* ─── Carte salade ───────────────────────────────────────────────── */

function SaladeCard({ produit }) {
  const [hovered, setHovered] = useState(false)
  const catColor = CATEGORIE_COLORS[produit.categorie] ?? '#6E675F'
  const catLabel = FILTRES.find(f => f.key === produit.categorie)?.label ?? ''
  return (
    <Link
      href={`/creations/a-partager/${produit.id}`}
      className="ap-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block', textDecoration: 'none',
        background: '#FFFFFF',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 2px 6px rgba(17,17,17,0.04), 0 16px 40px rgba(17,17,17,0.09)'
          : '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'box-shadow 0.35s ease, transform 0.35s ease',
      }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', background: produit.img ? '#F8F5EF' : 'radial-gradient(ellipse at 50% 40%, #F8F4EC 0%, #F1EBDF 100%)', overflow: 'hidden' }}>
        {produit.img && (
          <img
            src={produit.img}
            alt={produit.nom}
            style={{
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center',
              transition: 'transform 0.7s ease',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        )}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(20,16,12,0.30)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}>
          <span style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.7)', padding: '10px 24px',
            transform: hovered ? 'translateY(0)' : 'translateY(6px)',
            transition: 'transform 0.4s ease',
          }}>
            Découvrir
          </span>
        </div>
      </div>

      <div style={{ padding: '16px 16px 16px' }}>
        <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, lineHeight: 1.2, color: hovered ? '#E0A126' : '#111111', marginBottom: '10px', transition: 'color 0.25s ease' }}>
          {produit.nom}
        </h3>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: catColor, marginBottom: '12px' }}>
          {catLabel}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: '#6E675F' }}>
          Grand format à partager · sur devis
        </p>
      </div>
    </Link>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function APartager() {
  const [activeFiltre, setActiveFiltre] = useState('tous')

  const categoriesDispo = new Set(SALADES.map(s => s.categorie))
  const filtresDispo = FILTRES.filter(f => f.key === 'tous' || categoriesDispo.has(f.key))

  const saladesFiltres = SALADES.filter(s =>
    activeFiltre === 'tous' ? true : s.categorie === activeFiltre
  )

  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero ── */}
        <div className="ap-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="ap-hero" style={{ position: 'relative', width: '100%', height: '58vh', minHeight: '440px', overflow: 'hidden' }}>
            <img src={HERO.hero} alt="Salades à partager L'Écrin" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="ap-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '620px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  Déjeuner
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                  {HERO.label}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '400px' }}>
                  {HERO.description}
                </p>
              </div>
            </Reveal>
          </header>
        </div>

        {/* ── Fil d'Ariane ── */}
        <div className="ap-shell" style={{ maxWidth: '1440px', margin: '0 auto', padding: '28px 72px 0' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: '#9B9590' }}>
            <Link href="/" style={{ color: '#9B9590' }}>Accueil</Link>
            <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
            <span>Déjeuner</span>
            <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
            <span style={{ color: '#111111' }}>À Partager</span>
          </nav>
        </div>

        {/* ── Corps : bases à gauche + grille 3 colonnes ── */}
        <div className="ap-shell ap-body" style={{ maxWidth: '1440px', margin: '0 auto', padding: '32px 72px 72px', display: 'grid', gridTemplateColumns: '190px 1fr', gap: '52px', alignItems: 'start' }}>

          <aside className="ap-filters" style={{ position: 'sticky', top: '104px' }}>
            <p className="ap-filters-label" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '16px' }}>
              Par base
            </p>
            {filtresDispo.map(f => {
              const active = f.key === activeFiltre
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFiltre(f.key)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '13.5px',
                    fontWeight: active ? 500 : 400,
                    color: active ? '#111111' : '#9B9590',
                    padding: '9px 0 9px 14px',
                    background: 'none',
                    border: 'none',
                    boxShadow: active ? 'inset 2px 0 0 #E0A126' : 'inset 2px 0 0 transparent',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease, box-shadow 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#4A453F' }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#9B9590' }}
                >
                  {f.label}
                </button>
              )
            })}
          </aside>

          <div className="ap-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 24px' }}>
            {saladesFiltres.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 90}>
                <SaladeCard produit={s} />
              </Reveal>
            ))}
          </div>
        </div>

      </main>

      <CategoryClosing
        eyebrow="Pensé pour les moments collectifs"
        title={'Des plateaux généreux.\nPensés pour rassembler.'}
        body="Un plateau au centre de la table vaut mieux qu'un long discours d'équipe. Fruits frais, douceurs artisanales, pièces salées : des formats à faire circuler, livrés prêts à servir pour vos moments partagés."
        seoArticle={SEO_ARTICLE}
      />

      <style suppressHydrationWarning>{`
        .ap-hero { border-radius: 2px !important; }
        .ap-card { border-radius: 4px !important; }
        @media (max-width: 1100px) {
          .ap-hero-wrapper { padding-left: 48px !important; padding-right: 48px !important; }
          .ap-hero-text    { padding-left: 48px !important; padding-right: 48px !important; }
          .ap-shell { padding-left: 48px !important; padding-right: 48px !important; }
          .ap-body  { grid-template-columns: 160px 1fr !important; gap: 36px !important; }
          .ap-grid  { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 900px) {
          .ap-body { grid-template-columns: 1fr !important; gap: 24px !important; }
          .ap-filters { position: static !important; display: flex; gap: 20px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; border-bottom: 1px solid rgba(17,17,17,0.08); }
          .ap-filters::-webkit-scrollbar { display: none; }
          .ap-filters-label { display: none !important; }
          .ap-filters button { width: auto !important; padding: 0 0 12px !important; box-shadow: none !important; }
        }
        @media (max-width: 768px) {
          .ap-hero-wrapper { padding: 20px 20px 0 !important; }
          .ap-hero         { min-height: 380px !important; height: 42vh !important; }
          .ap-hero-text    { padding: 0 28px !important; max-width: 100% !important; }
          .ap-shell { padding-left: 24px !important; padding-right: 24px !important; }
          .ap-grid  { grid-template-columns: repeat(2,1fr) !important; gap: 20px 14px !important; }
        }
        @media (max-width: 480px) {
          .ap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
