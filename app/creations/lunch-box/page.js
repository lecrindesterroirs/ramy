'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'

const SEO_ARTICLE = `
  <h2>Lunch box entreprise à Paris : le déjeuner individuel, pratique et gourmand</h2>
  <p>La <strong>lunch box d'entreprise</strong> répond à un besoin simple : nourrir bien, individuellement et sans installation. Formations, journées d'étude, équipes en déplacement, tournages — chaque convive reçoit sa boîte complète, prête à emporter ou à ouvrir sur place. L'Écrin Traiteur livre vos lunch box à Paris et en Île-de-France, préparées le matin même.</p>

  <h2>Une boîte complète, composée comme un vrai repas</h2>
  <p>Chaque lunch box associe un plat travaillé, un accompagnement et une touche sucrée, dans un contenant soigné et facile à transporter. Ce n'est pas un sandwich de dépannage : c'est un déjeuner pensé, avec des produits frais et des recettes qui changent — de quoi faire d'une journée de formation un souvenir un peu meilleur.</p>

  <h2>Le bon format pour les journées contraintes</h2>
  <p>La lunch box brille là où le plateau repas est trop formel et le buffet impossible : horaires serrés, salles sans office, groupes qui se déplacent entre deux sites. Distribution en quelques minutes, zéro vaisselle, tri des emballages simplifié. Indiquez les régimes spécifiques (végétarien, sans gluten) à la commande : chacun reçoit une boîte équivalente.</p>

  <h2>Commander vos lunch box pour votre événement à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong> en précisant le nombre de convives et la répartition des menus. Livraison à l'heure souhaitée, dès 6h30 si votre journée démarre tôt. Facturation entreprise avec TVA, devis sous 24h pour les gros volumes.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */

const HERO = {
  label: 'Lunch Box',
  description: 'Une entrée, un sandwich Signature, Club ou Wrap, un dessert artisanal, serviette & couverts. Boisson en option.',
  prix: '22,90',
  hero: '/hero-plateaux-essentiel.png',
}

const FILTRES = [
  { key: 'tous',       label: 'Tous' },
  { key: 'vegetarien', label: 'Végétarien' },
  { key: 'poulet',     label: 'Poulet' },
  { key: 'viande',     label: 'Viande' },
  { key: 'poisson',    label: 'Poisson' },
]

const CATEGORIE_COLORS = {
  vegetarien: '#5A7247',
  poulet:     '#C08A3E',
  viande:     '#8A3A3A',
  poisson:    '#C4756B',
}

/* Chaque box : entrée / sandwich / dessert stockés pour la fiche produit ;
   la grille n'affiche que nom · catégorie · prix. Photos placeholder. */
export const BOXES = [
  {
    id: 'lb1', categorie: 'viande', nom: 'La Parisienne', prix: '22,90', img: '/plat-boeuf.png',
    sousTitre: 'Baguette Signature · Jambon Beurre',
    entree: 'Salade de tomates anciennes & basilic',
    plat: 'Baguette Jambon Beurre',
    dessert: 'Cookie Signature',
  },
  {
    id: 'lb2', categorie: 'poulet', nom: 'La César', prix: '23,90', img: '/plat-cesar.png',
    sousTitre: 'Club Poulet César',
    entree: 'Houmous, huile d\'olive & pain grillé',
    plat: 'Club Poulet César',
    dessert: 'Brownie',
  },
  {
    id: 'lb3', categorie: 'vegetarien', nom: 'La Méditerranéenne', prix: '22,90', img: '/plat-grec.png',
    sousTitre: 'Wrap Falafel & Houmous',
    entree: 'Caviar d\'aubergine & focaccia romarin',
    plat: 'Wrap Falafel & Houmous',
    dessert: 'Panna Cotta fruits rouges',
  },
  {
    id: 'lb4', categorie: 'poisson', nom: 'La Nordique', prix: '24,90', img: '/plat-saumon.png',
    sousTitre: 'Baguette Saumon & Cream Cheese',
    entree: 'Salade de concombre au yaourt, menthe & aneth',
    plat: 'Baguette Saumon & Cream Cheese',
    dessert: 'Cookie Signature',
  },
  {
    id: 'lb5', categorie: 'poisson', nom: 'La Marine', prix: '23,90', img: '/plat-saumon.png',
    sousTitre: 'Club Thon',
    entree: 'Salade de tomates anciennes & basilic',
    plat: 'Club Thon',
    dessert: 'Brownie',
  },
  {
    id: 'lb6', categorie: 'viande', nom: 'La Deli', prix: '24,90', img: '/plat-fusion.png',
    sousTitre: 'Baguette Pastrami Pickles',
    entree: 'Part de pissaladière & jeunes pousses',
    plat: 'Baguette Pastrami Pickles',
    dessert: 'Cookie Signature',
  },
  {
    id: 'lb7', categorie: 'vegetarien', nom: 'La Burrata', prix: '23,90', img: '/plat-mediterraneen.png',
    sousTitre: 'Wrap Burrata & Légumes grillés',
    entree: 'Salade de tomates anciennes & basilic',
    plat: 'Wrap Burrata & Légumes grillés',
    dessert: 'Compote pomme & fève tonka',
  },
  {
    id: 'lb8', categorie: 'poulet', nom: 'La César Baguette', prix: '23,90', img: '/plat-cesar.png',
    sousTitre: 'Baguette Poulet César',
    entree: 'Houmous, huile d\'olive & pain grillé',
    plat: 'Baguette Poulet César',
    dessert: 'Brownie',
  },
  {
    id: 'lb9', categorie: 'poisson', nom: 'La Thon Ciboulette', prix: '23,90', img: '/plat-saumon.png',
    sousTitre: 'Baguette Thon Ciboulette',
    entree: 'Salade de concombre au yaourt, menthe & aneth',
    plat: 'Baguette Thon Ciboulette',
    dessert: 'Cookie Signature',
  },
]

/* ─── Carte menu ─────────────────────────────────────────────────── */

function MenuCard({ produit }) {
  const [hovered, setHovered] = useState(false)
  const catColor = CATEGORIE_COLORS[produit.categorie] ?? '#6E675F'
  const catLabel = FILTRES.find(f => f.key === produit.categorie)?.label ?? ''
  return (
    <Link
      href={`/creations/lunch-box/${produit.id}`}
      className="lb-card"
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
        <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, lineHeight: 1.2, color: hovered ? '#E0A126' : '#111111', marginBottom: '6px', transition: 'color 0.25s ease' }}>
          {produit.nom}
        </h3>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: '#9B9590', marginBottom: '10px' }}>
          {produit.sousTitre}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: catColor, marginBottom: '12px' }}>
          {catLabel}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: '#111111' }}>
          À partir de {produit.prix} €<span style={{ color: 'rgba(17,17,17,0.3)', fontSize: '11px', marginLeft: '3px' }}>HT</span>
        </p>
      </div>
    </Link>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function LunchBox() {
  const [activeFiltre, setActiveFiltre] = useState('tous')

  const categoriesDispo = new Set(BOXES.map(b => b.categorie))
  const filtresDispo = FILTRES.filter(f => f.key === 'tous' || categoriesDispo.has(f.key))

  const boxesFiltres = BOXES.filter(b =>
    activeFiltre === 'tous' ? true : b.categorie === activeFiltre
  )

  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero — contenu + immersif, aligné sur les autres pages ── */}
        <div className="lb-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="lb-hero" style={{ position: 'relative', width: '100%', height: '58vh', minHeight: '440px', overflow: 'hidden' }}>
            <img
              src={HERO.hero}
              alt="Lunch Box L'Écrin"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="lb-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '600px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  Déjeuner
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                  {HERO.label}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '360px', marginBottom: '20px' }}>
                  {HERO.description}
                </p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', letterSpacing: '0.04em', color: 'rgba(255,255,255,0.9)' }}>
                  À partir de <span style={{ fontSize: '15px' }}>{HERO.prix} €</span> HT · par personne
                </p>
              </div>
            </Reveal>
          </header>
        </div>

        {/* ── Fil d'Ariane ──────────────────────────────────────── */}
        <div className="lb-shell" style={{ maxWidth: '1440px', margin: '0 auto', padding: '28px 72px 0' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: '#9B9590' }}>
            <Link href="/" style={{ color: '#9B9590' }}>Accueil</Link>
            <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
            <span>Déjeuner</span>
            <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
            <span style={{ color: '#111111' }}>Lunch Box</span>
          </nav>
        </div>

        {/* ── Corps : filtres à gauche + grille 3 colonnes à droite ── */}
        <div className="lb-shell lb-body" style={{ maxWidth: '1440px', margin: '0 auto', padding: '32px 72px 72px', display: 'grid', gridTemplateColumns: '168px 1fr', gap: '52px', alignItems: 'start' }}>

          <aside className="lb-filters" style={{ position: 'sticky', top: '104px' }}>
            <p className="lb-filters-label" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '16px' }}>
              Filtrer
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

          <div className="lb-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 24px' }}>
            {boxesFiltres.length === 0 ? (
              <div style={{ gridColumn: '1/-1', padding: '48px 0' }}>
                <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '20px', color: '#111111', marginBottom: '10px' }}>
                  Aucune box dans cette catégorie
                </p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: '#6E675F' }}>
                  Sélectionnez un autre filtre pour parcourir la sélection.
                </p>
              </div>
            ) : (
              boxesFiltres.map((b, i) => (
                <Reveal key={b.id} delay={(i % 3) * 90}>
                  <MenuCard produit={b} />
                </Reveal>
              ))
            )}
          </div>
        </div>

      </main>

      <CategoryClosing
        eyebrow="Pensé pour les formats individuels"
        title={'Un déjeuner complet.\nZéro installation.'}
        body="Formations, séminaires itinérants, équipes en déplacement : la lunch box livre un vrai repas dans une boîte soignée. Distribution immédiate, aucun office nécessaire — la qualité L'Écrin, format nomade."
        seoArticle={SEO_ARTICLE}
      />

      {/* ── Radius (override du reset global) + responsive ── */}
      <style suppressHydrationWarning>{`
        .lb-hero { border-radius: 2px !important; }
        .lb-card { border-radius: 4px !important; }
        @media (max-width: 1100px) {
          .lb-hero-wrapper { padding-left: 48px !important; padding-right: 48px !important; }
          .lb-hero-text    { padding-left: 48px !important; padding-right: 48px !important; }
          .lb-shell { padding-left: 48px !important; padding-right: 48px !important; }
          .lb-body  { grid-template-columns: 150px 1fr !important; gap: 36px !important; }
          .lb-grid  { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 900px) {
          .lb-body { grid-template-columns: 1fr !important; gap: 24px !important; }
          .lb-filters { position: static !important; display: flex; gap: 22px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; border-bottom: 1px solid rgba(17,17,17,0.08); }
          .lb-filters::-webkit-scrollbar { display: none; }
          .lb-filters-label { display: none !important; }
          .lb-filters button { width: auto !important; padding: 0 0 12px !important; box-shadow: none !important; }
        }
        @media (max-width: 768px) {
          .lb-hero-wrapper { padding: 20px 20px 0 !important; }
          .lb-hero         { min-height: 380px !important; height: 42vh !important; }
          .lb-hero-text    { padding: 0 28px !important; max-width: 100% !important; }
          .lb-shell { padding-left: 24px !important; padding-right: 24px !important; }
          .lb-grid  { grid-template-columns: repeat(2,1fr) !important; gap: 20px 14px !important; }
        }
        @media (max-width: 480px) {
          .lb-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
