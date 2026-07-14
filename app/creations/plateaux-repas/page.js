'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'
import CategoryJsonLd from '../../../components/CategoryJsonLd'
import CategoryTabs, { sortItems, priceFromLabel } from '../../../components/CategoryTabs'
import { COLLECTIONS, PRIX, prixMenu, PRODUITS } from './data'
import ParallaxImage from '../../../components/ParallaxImage'

const SEO_ARTICLE = `
  <h2>Plateaux repas d'entreprise livrés à Paris : frais, individuels, équilibrés</h2>
  <p>Le <strong>plateau repas d'entreprise</strong> résout l'équation des déjeuners de réunion : un repas complet, individuel et soigné, servi directement en salle sans interrompre les échanges. Conseils d'administration, formations, réunions qui débordent sur la pause déjeuner, L'Écrin Traiteur livre vos plateaux à Paris et en Île-de-France, préparés le matin même.</p>

  <h2>Des recettes de saison, pensées comme au restaurant</h2>
  <p>Chaque plateau se compose d'une entrée, d'un plat, d'un dessert et de pain, construits autour de recettes signées : saumon confit, bœuf mariné, césar revisitée, saveurs méditerranéennes ou thaïes. Nous travaillons des produits frais et de saison, dressés avec le soin d'une assiette de restaurant, dans un coffret élégant qui tient la comparaison face aux clients les plus exigeants.</p>

  <h2>Régimes et contraintes alimentaires : tout le monde à la même table</h2>
  <p>Végétarien, vegan, sans gluten, allergies spécifiques : indiquez les contraintes de vos convives à la commande et nous composons des plateaux équivalents en qualité et en générosité. Notre carte est par ailleurs pensée sans porc et halal, pour être partagée par toutes vos équipes. Personne ne doit se contenter d'une salade par défaut pendant que les autres déjeunent bien, c'est un principe non négociable de notre carte.</p>

  <h2>Commander vos plateaux repas pour une réunion à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong> en précisant l'adresse, l'heure de livraison et la répartition des menus. Les plateaux arrivent prêts à poser sur table, avec couverts et serviettes. Facturation entreprise avec TVA, devis personnalisé sous 24h pour les volumes importants ou les commandes récurrentes.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */



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

/* Prix HT par gamme × catégorie (par personne). Le poisson et la viande
   (Tataki) partagent le même tarif. Source de vérité unique. */

/* Prix : explicite sur le menu (Lunch Box) sinon dérivé de la table. */


/* Options du coffret Prestige (upgrade d'un menu Signature). */
const PRESTIGE_OPTIONS = [
  'Coffret premium L\'Écrin',
  'Vaisselle & couverts premium',
  'Serviette en tissu',
  'Petit pain artisanal',
  'Sélection de 2 fromages affinés',
  'Dessert Signature du Chef',
  'Mignardise',
]

/* Menus, composition (entrée / plat / dessert) stockée pour la fiche
   produit ; la grille n'affiche que nom · catégorie · prix.
   Photos : plats uniquement (le coffret se découvre sur la fiche). */


/* ─── Carte menu ─────────────────────────────────────────────────── */

function MenuCard({ produit }) {
  const [hovered, setHovered] = useState(false)
  const catColor = CATEGORIE_COLORS[produit.categorie] ?? '#6E675F'
  const catLabel = FILTRES.find(f => f.key === produit.categorie)?.label ?? ''
  return (
    <Link
      href={`/creations/plateaux-repas/${produit.id}`}
      className="pr-card"
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
      {/* Photo du plat, pleine largeur dans la carte, overlay "Découvrir" au survol */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', background: produit.img ? '#F8F5EF' : 'radial-gradient(ellipse at 50% 40%, #F8F4EC 0%, #F1EBDF 100%)', overflow: 'hidden' }}>
        {produit.img && (
          <Image fill sizes="(max-width: 768px) 100vw, 33vw" src={produit.img}
            alt={produit.nom}
            style={{
              objectFit: 'cover', objectPosition: 'center',
              transition: 'transform 0.7s ease',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        )}
        {/* Overlay au survol */}
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

      {/* Contenu, nom, catégorie, prix */}
      <div style={{ padding: '16px 16px 16px' }}>
        <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, lineHeight: 1.2, color: hovered ? '#E0A126' : '#111111', marginBottom: '9px', transition: 'color 0.25s ease' }}>
          {produit.nom}
        </h3>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: catColor, marginBottom: '12px' }}>
          {catLabel}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: '#111111' }}>
          À partir de {prixMenu(produit)} €<span style={{ color: 'rgba(17,17,17,0.3)', fontSize: '11px', marginLeft: '3px' }}>HT</span>
        </p>
      </div>
    </Link>
  )
}

/* ─── Lien texte souligné (nav collections & filtres) ────────────── */

function TextTab({ label, active, onClick, size = '16px', gap = '10px', underline = '28px' }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: size,
        fontWeight: 400,
        color: active ? '#111111' : hovered ? '#4A453F' : '#B4AFA8',
        background: 'none',
        border: 'none',
        padding: `0 0 ${gap}`,
        cursor: 'pointer',
        position: 'relative',
        transition: 'color 0.2s ease',
        whiteSpace: 'nowrap',
        letterSpacing: '0.005em',
      }}
    >
      {label}
      <span style={{
        position: 'absolute', left: 0, bottom: 0, width: underline, height: '1.5px',
        background: '#111111',
        opacity: active ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }} />
    </button>
  )
}

/* ─── Page principale ────────────────────────────────────────────── */

export default function PlateauxRepas() {
  const [activeCollection, setActiveCollection] = useState('essentiel')
  const [activeFiltre, setActiveFiltre] = useState('tous')
  const [sortLabel, setSortLabel] = useState('En vedette')

  const col = COLLECTIONS.find(c => c.key === activeCollection)

  const produitsCollection = PRODUITS.filter(p => p.collection === activeCollection)

  // Filtres affichés = uniquement les catégories réellement présentes
  // dans la collection active (ex : pas de « Viande » en Essentiel).
  const categoriesDispo = new Set(produitsCollection.map(p => p.categorie))
  const filtresDispo = FILTRES.filter(f => f.key === 'tous' || categoriesDispo.has(f.key))

  const produitsFiltres = produitsCollection.filter(p =>
    activeFiltre === 'tous' ? true : p.categorie === activeFiltre
  )
  const produitsAffiches = sortItems(produitsFiltres, sortLabel, p => priceFromLabel(prixMenu(p)))

  function handleCollectionChange(key) {
    setActiveCollection(key)
    setActiveFiltre('tous')
  }

  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero, contenu + immersif, aligné sur petit-déjeuner ── */}
        <div className="pr-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="pr-hero" style={{ position: 'relative', width: '100%', height: '58vh', minHeight: '440px', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" key={`hero-img-${col.key}`}
              src={col.hero}
              alt={`Plateaux repas ${col.label}`}
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }}
            />
            {/* Dégradé sombre gauche pour la lisibilité du texte blanc */}
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />

            {/* Texte overlay, aligné à gauche, centré verticalement, fade-up au montage, rejoué à chaque changement de collection */}
            <Reveal key={`hero-text-${col.key}`} mode="mount" y={16}>
              <div className="pr-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '600px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  Collection {col.label}
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                  {col.label}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '340px', marginBottom: '20px' }}>
                  {col.description}
                </p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', letterSpacing: '0.04em', color: 'rgba(255,255,255,0.9)' }}>
                  À partir de <span style={{ fontSize: '15px' }}>{col.prix} €</span> HT · par personne
                </p>
              </div>
            </Reveal>
          </header>
        </div>

        <CategoryTabs sort={sortLabel} onSort={setSortLabel} count={produitsAffiches.length} />

        {/* ── Navigation légère, deux niveaux de texte ─────────── */}
        <div className="pr-shell" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          {/* Niveau 1 : collections, barre pleine largeur, trait coloré sous l'actif */}
          <div className="pr-scroll" style={{ display: 'flex', borderBottom: '1px solid rgba(17,17,17,0.1)', marginBottom: '20px' }}>
            {COLLECTIONS.map((c, i) => {
              const active = c.key === activeCollection
              return (
                <button
                  key={c.key}
                  onClick={() => handleCollectionChange(c.key)}
                  style={{
                    fontFamily: "'Baskerville Display PT', Georgia, serif",
                    fontSize: '19px',
                    fontWeight: 400,
                    color: active ? '#111111' : '#A7A29B',
                    padding: '0 28px 14px',
                    paddingLeft: i === 0 ? 0 : '28px',
                    marginBottom: '-1px',
                    background: 'none',
                    border: 'none',
                    boxShadow: active ? 'inset 0 -2.5px 0 #111111' : 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease, box-shadow 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#4A453F' }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#A7A29B' }}
                >
                  {c.label}
                </button>
              )
            })}
          </div>

        </div>

        {/* ── Corps : filtres à gauche + grille 3 colonnes à droite ── */}
        <div className="pr-shell pr-body" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 72px', display: 'grid', gridTemplateColumns: '168px 1fr', gap: '52px', alignItems: 'start' }}>

          {/* Filtres verticaux */}
          <aside className="pr-filters" style={{ position: 'sticky', top: '104px' }}>
            <p className="pr-filters-label" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '16px' }}>
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

          {/* Grille 3 colonnes */}
          <div className="pr-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 24px' }}>
            {produitsAffiches.length === 0 ? (
              <div style={{ gridColumn: '1/-1', padding: '48px 0' }}>
                <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '20px', color: '#111111', marginBottom: '10px' }}>
                  Aucun menu dans cette catégorie
                </p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: '#6E675F' }}>
                  Sélectionnez un autre filtre pour parcourir la collection.
                </p>
              </div>
            ) : (
              produitsAffiches.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 90}>
                  <MenuCard produit={p} />
                </Reveal>
              ))
            )}
          </div>
        </div>

        {/* ── Option Prestige, upgrade d'un menu Signature ─────── */}
        {activeCollection === 'signature' && (
          <div className="pr-shell" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px 120px' }}>
            <div style={{ background: '#F5F1E8', padding: '48px 56px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center' }} className="pr-prestige">
              <div>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#B07D10', marginBottom: '14px' }}>
                  Option Prestige
                </p>
                <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '28px', fontWeight: 400, lineHeight: 1.15, color: '#111111', marginBottom: '14px' }}>
                  Transformez votre menu Signature en coffret Prestige
                </h2>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: '#5A544C' }}>
                  Le même menu, sublimé dans un écrin d'exception, vaisselle premium, fromages affinés et attentions du Chef pour vos réceptions les plus soignées.
                </p>
              </div>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 32px' }} className="pr-prestige-list">
                {PRESTIGE_OPTIONS.map(opt => (
                  <li key={opt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '13.5px', lineHeight: 1.5, color: '#111111' }}>
                    <span style={{ color: '#E0A126', flexShrink: 0, marginTop: '1px' }}>◆</span>
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </main>

      <CategoryClosing
        eyebrow="Pensé pour vos déjeuners de réunion"
        title={'Un déjeuner soigné.\nUne réunion qui avance.'}
        body="Le plateau repas transforme la contrainte du déjeuner en moment apprécié : un repas complet et individuel, dressé avec soin, servi en salle sans logistique. Vos équipes déjeunent bien, votre réunion ne s'arrête pas."
        seoArticle={SEO_ARTICLE}
      />

      {/* ── Radius (override du reset global border-radius:0 !important) + responsive ── */}
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .pr-hero { border-radius: 2px !important; }
        .pr-card { border-radius: 4px !important; }
        @media (max-width: 1100px) {
          .pr-hero-wrapper { padding-left: 48px !important; padding-right: 48px !important; }
          .pr-hero-text    { padding-left: 48px !important; padding-right: 48px !important; }
          .pr-shell { padding-left: 48px !important; padding-right: 48px !important; }
          .pr-body { grid-template-columns: 150px 1fr !important; gap: 36px !important; }
          .pr-grid  { grid-template-columns: repeat(2,1fr) !important; }
          .pr-prestige { grid-template-columns: 1fr !important; gap: 28px !important; padding: 40px !important; }
        }
        @media (max-width: 560px) {
          .pr-prestige-list { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          /* Filtres repassent en rangée horizontale au-dessus de la grille */
          .pr-body { grid-template-columns: 1fr !important; gap: 24px !important; }
          .pr-filters { position: static !important; display: flex; gap: 22px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; border-bottom: 1px solid rgba(17,17,17,0.08); }
          .pr-filters::-webkit-scrollbar { display: none; }
          .pr-filters-label { display: none !important; }
          .pr-filters button { width: auto !important; padding: 0 0 12px !important; box-shadow: none !important; }
        }
        @media (max-width: 768px) {
          .cat-hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.5) 100%) !important; }
          .pr-hero-wrapper { padding: 20px 20px 0 !important; }
          .pr-hero         { min-height: 380px !important; height: 42vh !important; }
          .pr-hero-text    { padding: 0 28px !important; max-width: 100% !important; }
          .pr-shell { padding-left: 24px !important; padding-right: 24px !important; }
          .pr-grid  { grid-template-columns: repeat(2,1fr) !important; gap: 20px 14px !important; }
          .pr-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
          .pr-scroll::-webkit-scrollbar { display: none; }
        }
      ` }} />

      <CategoryJsonLd
        name="Plateaux repas"
        path="/creations/plateaux-repas"
        items={PRODUITS.map(p => ({ name: p.nom, url: `/creations/plateaux-repas/${p.id}` }))}
      />
      <Footer />
    </>
  )
}
