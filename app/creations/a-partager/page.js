'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'

const SEO_ARTICLE = `
  <h2>Menus à partager pour vos déjeuners d'équipe à Paris</h2>
  <p>Certains déjeuners d'entreprise n'ont pas besoin d'un format codifié — ils ont besoin d'un <strong>grand menu généreux à partager au centre de la table</strong>. Point d'équipe, accueil d'un partenaire, déjeuner de service : nos menus à partager mêlent salades, planches et pièces cocktail, dressés prêts à servir à Paris et en Île-de-France.</p>

  <h2>Le partage, un rituel d'équipe sous-estimé</h2>
  <p>Un menu posé au centre change la dynamique d'une salle : on se sert, on fait passer, on commente. Chaque menu équilibre pièces salées et douceurs, pour circuler de main en main — généreux, beau à regarder et pensé pour tous les goûts.</p>

  <h2>Choisir le bon menu</h2>
  <p>Comptez un menu pour 8 à 12 personnes en le complétant selon l'appétit et l'horaire. Signature, Méditerranéen, Parisien ou Jardin (100 % végétarien) : nos équipes vous aident à composer et à dimensionner selon le nombre de convives.</p>

  <h2>Commander vos menus à partager à Paris</h2>
  <p>Commande avant <strong>14h la veille</strong>, livraison à l'heure choisie partout à Paris et en Île-de-France. Les menus arrivent dressés, prêts à poser sur table. Facturation entreprise avec TVA — et pour les moments récurrents, un devis cadre simplifie tout.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */

const HERO = {
  label: 'À Partager',
  description: 'Des menus généreux à partager — salades dressées, planches gourmandes et pièces cocktail, en grand format. Composés le matin avec des produits de saison.',
  hero: '/hero-a-partager.webp',
}

/* Menus à partager : chacun équilibré (recettes salées + sucrées),
   dressé en salades ou en verrines. Photos = visuels maison L'Écrin. */
export const MENUS = [
  {
    key: 'mediterraneen',
    nom: 'Le Méditerranéen',
    accroche: 'Le soleil au centre de la table : fraîcheur, herbes et huile d\'olive.',
    img: '/prod-atelier-libanais.webp',
    featured: false,
    salees: [
      "Houmous, huile d'olive & pain grillé",
      "Caviar d'aubergine & focaccia romarin",
      'Salade grecque',
      'Wrap falafel & houmous',
      'Bruschetta tomates confites',
      'Mini bun tomates confites & mozzarella',
    ],
    sucrees: [
      'Panna cotta fruits rouges',
      'Verrine citron & lemon curd',
    ],
  },
  {
    key: 'parisien',
    nom: 'Le Parisien',
    accroche: 'Les classiques du bistrot, en pièces à partager.',
    img: '/prod-atelier-saumon.webp',
    featured: false,
    salees: [
      'Salade César au poulet rôti',
      'Club sandwich poulet César',
      'Mini baguette jambon beurre',
      "Pomme de terre rôtie, crème d'Isigny & saumon fumé",
      'Mini bun saumon gravlax & mousse aux herbes',
      "Bruschetta caviar d'aubergine",
    ],
    sucrees: [
      'Brownie signature',
      'Tartelette citron',
    ],
  },
  {
    key: 'jardin',
    nom: 'Le Jardin',
    accroche: '100 % végétarien, sans concession sur la gourmandise.',
    img: '/prod-atelier-focaccia.webp',
    featured: false,
    salees: [
      'Samoussa curry végétarien',
      'Verrine houmous méditerranéen',
      'Quinoa gourmand, falafels & sauce tahini',
      'Wrap burrata & légumes grillés',
      'Salade de lentilles, feta & légumes rôtis',
      'Bruschetta tomates confites',
    ],
    sucrees: [
      'Madeleines',
      'Fruits frais de saison',
    ],
  },
]

/* Exports conservés pour compatibilité avec l'ancienne fiche détail [slug]. */
export const SALADES = []
export const FILTRES = []

/* ─── Liste de recettes (Salé / Sucré) ───────────────────────────── */

function Liste({ titre, items, accent }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: accent, marginBottom: '12px' }}>
        {titre} · {items.length}
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', padding: 0, margin: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.45, color: '#3A352F' }}>
            <span style={{ color: accent, flexShrink: 0, fontSize: '7px', marginTop: '5px' }}>◆</span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─── Grande carte menu ──────────────────────────────────────────── */

function MenuCard({ m }) {
  const [hovered, setHovered] = useState(false)
  const featured = m.featured
  return (
    <article
      className="ap-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: featured ? '#FBF7EE' : '#FFFFFF',
        border: featured ? '1px solid rgba(224,161,38,0.4)' : '1px solid rgba(17,17,17,0.07)',
        boxShadow: hovered
          ? '0 4px 10px rgba(17,17,17,0.05), 0 24px 50px rgba(17,17,17,0.10)'
          : '0 1px 3px rgba(17,17,17,0.04), 0 8px 24px rgba(17,17,17,0.05)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'box-shadow 0.35s ease, transform 0.35s ease',
      }}
    >
      {/* Photo */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#F8F5EF' }}>
        <img loading="lazy" src={m.img} alt={m.nom}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.7s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {featured && (
          <span style={{ position: 'absolute', top: '14px', left: '14px', background: '#E0A126', color: '#FFFFFF', fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '6px 14px', whiteSpace: 'nowrap' }}>
            Le plus choisi
          </span>
        )}
      </div>
      {featured && <div style={{ height: '3px', background: '#E0A126' }} />}

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '30px 34px 34px' }}>
        {/* En-tête */}
        <div style={{ textAlign: 'center', paddingBottom: '22px', borderBottom: '1px solid rgba(17,17,17,0.09)', marginBottom: '24px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '10px' }}>
            Menu à partager
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '30px', fontWeight: 400, color: '#111111', marginBottom: '12px' }}>
            {m.nom}
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.55, color: '#6E675F', maxWidth: '340px', margin: '0 auto 6px' }}>
            {m.accroche}
          </p>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.4)' }}>
            {m.salees.length} recettes salées · {m.sucrees.length} sucrées — dressé en salades ou en verrines
          </p>
        </div>

        {/* Composition */}
        <div style={{ flex: 1 }}>
          <Liste titre="Salé" items={m.salees} accent="#5A7247" />
          <Liste titre="Sucré" items={m.sucrees} accent="#C08A3E" />
        </div>

        {/* CTA */}
        <a
          href="/devis"
          style={{
            marginTop: '24px', display: 'block', textAlign: 'center',
            fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '14px 20px', textDecoration: 'none',
            color: featured ? '#FFFFFF' : (hovered ? '#FFFFFF' : '#111111'),
            background: featured ? '#E0A126' : (hovered ? '#111111' : 'transparent'),
            border: featured ? '1px solid #E0A126' : (hovered ? '1px solid #111111' : '1px solid rgba(17,17,17,0.25)'),
            transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
          }}
        >
          Demande de devis →
        </a>
      </div>
    </article>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function APartager() {
  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero ── */}
        <div className="ap-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="ap-hero" style={{ position: 'relative', width: '100%', height: '52vh', minHeight: '420px', overflow: 'hidden' }}>
            <img loading="eager" src={HERO.hero} alt="Menus à partager L'Écrin" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="ap-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '620px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  Déjeuner
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                  {HERO.label}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '420px' }}>
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

        {/* ── Intro ── */}
        <div className="ap-shell" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '12px' }}>
            Quatre menus
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.15, color: '#111111', marginBottom: '14px' }}>
            Choisissez votre menu à partager
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: '#6E675F', maxWidth: '560px', margin: '0 auto' }}>
            Chaque menu mêle salades, planches et pièces cocktail, dans un équilibre pensé pour toute l'équipe. Personnalisable selon vos effectifs et régimes.
          </p>
        </div>

        {/* ── Grille menus (2 colonnes, grand format) ── */}
        <div className="ap-shell ap-cards" style={{ maxWidth: '1180px', margin: '0 auto', padding: '48px 72px 110px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px', alignItems: 'stretch' }}>
          {MENUS.map((m, i) => {
            const centered = i === MENUS.length - 1 && MENUS.length % 2 === 1
            return centered ? (
              <div key={m.key} className="ap-center">
                <Reveal delay={(i % 2) * 90}>
                  <MenuCard m={m} />
                </Reveal>
              </div>
            ) : (
              <Reveal key={m.key} delay={(i % 2) * 90}>
                <MenuCard m={m} />
              </Reveal>
            )
          })}
        </div>

      </main>

      <CategoryClosing
        eyebrow="Pensé pour les moments collectifs"
        title={'Des menus généreux.\nPensés pour rassembler.'}
        body="Un menu au centre de la table vaut mieux qu'un long discours d'équipe. Salades, planches, pièces cocktail et douceurs : des formats à faire circuler, livrés prêts à servir pour vos déjeuners partagés."
        seoArticle={SEO_ARTICLE}
      />

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .ap-hero { border-radius: 2px !important; }
        .ap-card { border-radius: 6px !important; }
        .ap-center { grid-column: 1 / -1; display: flex; justify-content: center; }
        .ap-center > * { width: calc(50% - 14px); }
        @media (max-width: 1100px) {
          .ap-hero-wrapper { padding-left: 48px !important; padding-right: 48px !important; }
          .ap-hero-text    { padding-left: 48px !important; padding-right: 48px !important; }
          .ap-shell { padding-left: 48px !important; padding-right: 48px !important; }
          .ap-cards { padding-left: 48px !important; padding-right: 48px !important; gap: 20px !important; }
        }
        @media (max-width: 860px) {
          .ap-cards { grid-template-columns: 1fr !important; max-width: 520px !important; gap: 40px !important; }
          .ap-center > * { width: 100% !important; }
        }
        @media (max-width: 768px) {
          .cat-hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.5) 100%) !important; }
          .ap-hero-wrapper { padding: 20px 20px 0 !important; }
          .ap-hero         { min-height: 360px !important; height: 40vh !important; }
          .ap-hero-text    { padding: 0 28px !important; max-width: 100% !important; }
          .ap-shell { padding-left: 24px !important; padding-right: 24px !important; }
          .ap-cards { padding-left: 24px !important; padding-right: 24px !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
