'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'
import CategoryJsonLd from '../../../components/CategoryJsonLd'
import { UNIVERS, UNIVERS_LABEL, slugAnim, ANIMATIONS } from './data'

const SEO_ARTICLE = `
  <h2>Animations culinaires en entreprise à Paris : l'événement dont on parle</h2>
  <p>Une <strong>animation culinaire en entreprise</strong> transforme une prestation traiteur en moment mémorable : un stand qui s'installe, un artisan qui prépare devant vos équipes, une file d'attente qui devient un lieu de conversation. L'Écrin Traiteur organise vos animations à Paris et en Île-de-France, de la mise en place au dernier service.</p>

  <h2>Crêpes, bars à jus, stands gourmands : du spectacle et du goût</h2>
  <p>Nos animations mettent le geste au centre : crêpes préparées à la minute, bars à boissons fraîches, stands de douceurs dressés sous les yeux de vos invités. La différence avec un buffet classique est immédiate — on ne se sert pas, on assiste, on choisit, on échange avec la personne qui prépare. C'est ce supplément d'humain qui reste en mémoire.</p>

  <h2>Pour quels événements d'entreprise ?</h2>
  <p>Les animations culinaires trouvent leur place partout où l'on veut marquer le coup : <strong>fête de fin d'année</strong>, <strong>inauguration de locaux</strong>, <strong>journée collaborateurs</strong>, salon interne, semaine QVT. Elles s'adaptent au lieu et au flux : un stand pour 40 personnes en continu, plusieurs points d'animation pour un événement de plusieurs centaines d'invités.</p>

  <h2>Organiser votre animation culinaire à Paris</h2>
  <p>Chaque animation se construit sur devis : date, lieu, nombre d'invités, durée et contraintes techniques (accès, électricité, espace). Notre équipe vous répond sous <strong>24h</strong> avec une proposition détaillée, installation et démontage inclus. Facturation entreprise avec TVA.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */

const HERO = {
  label: 'Animations Culinaires',
  description: 'Des ateliers et bars animés en direct par nos chefs et baristas — l\'expérience gourmande qui donne du relief à vos événements.',
  hero: '/hero-animations.webp',
}

/* Filtres = les 5 univers d'animation. */
const FILTRES = [
  { key: 'tous',       label: 'Toutes' },
  { key: 'brunch',     label: 'Petit-déjeuner & Brunch' },
  { key: 'dejeuner',   label: 'Déjeuner Gourmet' },
  { key: 'streetfood', label: 'Street Food' },
  { key: 'douceurs',   label: 'Douceurs' },
  { key: 'bars',       label: 'Bars & Boissons' },
]


/* ─── Carte animation ────────────────────────────────────────────── */

function AnimationCard({ produit }) {
  const [hovered, setHovered] = useState(false)
  const u = UNIVERS[produit.univers] ?? { tag: '', color: '#6E675F' }
  return (
    <Link
      href={`/creations/animations-culinaires/${slugAnim(produit.nom)}`}
      className="aa-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: '#FFFFFF',
        overflow: 'hidden',
        cursor: 'pointer',
        textDecoration: 'none',
        boxShadow: hovered
          ? '0 2px 6px rgba(17,17,17,0.04), 0 16px 40px rgba(17,17,17,0.09)'
          : '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'box-shadow 0.35s ease, transform 0.35s ease',
      }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', background: '#F8F5EF', overflow: 'hidden' }}>
        <Image fill src={produit.img}
          alt={produit.nom}
          sizes="(max-width: 900px) 50vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.7s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
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

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '16px 16px 16px' }}>
        <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, lineHeight: 1.2, color: hovered ? '#E0A126' : '#111111', marginBottom: '7px', transition: 'color 0.25s ease' }}>
          {produit.nom}
        </h3>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: u.color, marginBottom: '10px' }}>
          {u.tag}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.55, color: '#6E675F', flex: 1 }}>
          {produit.description}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: '#9B9590', marginTop: '14px' }}>
          Animation live · sur devis
        </p>
      </div>
    </Link>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function AnimationsCulinaires() {
  const [activeFiltre, setActiveFiltre] = useState('tous')

  const universDispo = new Set(ANIMATIONS.map(a => a.univers))
  const filtresDispo = FILTRES.filter(f => f.key === 'tous' || universDispo.has(f.key))

  const animationsFiltres = ANIMATIONS.filter(a =>
    activeFiltre === 'tous' ? true : a.univers === activeFiltre
  )

  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero ── */}
        <div className="aa-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="aa-hero" style={{ position: 'relative', width: '100%', height: '58vh', minHeight: '440px', overflow: 'hidden' }}>
            <Image fill priority sizes="100vw" src={HERO.hero} alt="Animations culinaires L'Écrin" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="aa-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '640px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  Cocktail
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(30px, 3.6vw, 54px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                  {HERO.label}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '440px' }}>
                  {HERO.description}
                </p>
              </div>
            </Reveal>
          </header>
        </div>

        {/* ── Fil d'Ariane ── */}
        <div className="aa-shell" style={{ maxWidth: '1440px', margin: '0 auto', padding: '28px 72px 0' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: '#9B9590' }}>
            <Link href="/" style={{ color: '#9B9590' }}>Accueil</Link>
            <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
            <span>Cocktail</span>
            <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
            <span style={{ color: '#111111' }}>Animations Culinaires</span>
          </nav>
        </div>

        {/* ── Corps : univers à gauche + grille 3 colonnes ── */}
        <div className="aa-shell aa-body" style={{ maxWidth: '1440px', margin: '0 auto', padding: '32px 72px 96px', display: 'grid', gridTemplateColumns: '196px 1fr', gap: '52px', alignItems: 'start' }}>

          <aside className="aa-filters" style={{ position: 'sticky', top: '104px' }}>
            <p className="aa-filters-label" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '16px' }}>
              Univers
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
                    lineHeight: 1.3,
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#4A453F' }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#9B9590' }}
                >
                  {f.label}
                </button>
              )
            })}
          </aside>

          <div className="aa-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 24px' }}>
            {animationsFiltres.map((a, i) => (
              <Reveal key={a.id} delay={(i % 3) * 90}>
                <AnimationCard produit={a} />
              </Reveal>
            ))}
          </div>
        </div>

      </main>

      <CategoryClosing
        eyebrow="Pensé pour marquer les esprits"
        title={"Plus qu'un traiteur.\nUne expérience en direct."}
        body="Un stand qui s'installe, un artisan qui prépare devant vos équipes : l'animation culinaire transforme votre événement en souvenir partagé. Nous gérons tout — installation, service, démontage."
        seoArticle={SEO_ARTICLE}
      />

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .aa-hero { border-radius: 2px !important; }
        .aa-card { border-radius: 4px !important; }
        @media (max-width: 1100px) {
          .aa-hero-wrapper { padding-left: 48px !important; padding-right: 48px !important; }
          .aa-hero-text    { padding-left: 48px !important; padding-right: 48px !important; }
          .aa-shell { padding-left: 48px !important; padding-right: 48px !important; }
          .aa-body  { grid-template-columns: 170px 1fr !important; gap: 36px !important; }
          .aa-grid  { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 900px) {
          .aa-body { grid-template-columns: 1fr !important; gap: 24px !important; }
          .aa-filters { position: static !important; display: flex; gap: 22px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; border-bottom: 1px solid rgba(17,17,17,0.08); }
          .aa-filters::-webkit-scrollbar { display: none; }
          .aa-filters-label { display: none !important; }
          .aa-filters button { width: auto !important; padding: 0 0 12px !important; box-shadow: none !important; white-space: nowrap; }
        }
        @media (max-width: 768px) {
          .cat-hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.5) 100%) !important; }
          .aa-hero-wrapper { padding: 20px 20px 0 !important; }
          .aa-hero         { min-height: 380px !important; height: 42vh !important; }
          .aa-hero-text    { padding: 0 28px !important; max-width: 100% !important; }
          .aa-shell { padding-left: 24px !important; padding-right: 24px !important; }
          .aa-grid  { grid-template-columns: repeat(2,1fr) !important; gap: 20px 14px !important; }
        }
        @media (max-width: 480px) {
          .aa-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />

      <CategoryJsonLd
        name="Animations culinaires"
        path="/creations/animations-culinaires"
        items={ANIMATIONS.map(a => ({ name: a.nom, url: `/creations/animations-culinaires/${slugAnim(a.nom)}` }))}
      />
      <Footer />
    </>
  )
}
