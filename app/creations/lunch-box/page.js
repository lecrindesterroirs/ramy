'use client'

import Image from 'next/image'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import CategoryJsonLd from '../../../components/CategoryJsonLd'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'
import CategoryTabs from '../../../components/CategoryTabs'
import ParallaxImage from '../../../components/ParallaxImage'
import Breadcrumb from '../../../components/Breadcrumb'

const SEO_ARTICLE = `
  <h2>Lunch box entreprise à Paris : le déjeuner individuel, pratique et gourmand</h2>
  <p>La <strong>lunch box d'entreprise</strong> répond à un besoin simple : nourrir bien, individuellement et sans installation. Formations, journées d'étude, équipes en déplacement, tournages, chaque convive reçoit sa boîte complète, prête à emporter ou à ouvrir sur place. L'Écrin Traiteur livre vos lunch box à Paris et en Île-de-France, préparées le matin même.</p>

  <h2>Une boîte complète, composée comme un vrai repas</h2>
  <p>Chaque lunch box associe un plat travaillé, un accompagnement et une touche sucrée, dans un contenant soigné et facile à transporter. Ce n'est pas un sandwich de dépannage : c'est un déjeuner pensé, avec des produits frais et des recettes qui changent, de quoi faire d'une journée de formation un souvenir un peu meilleur.</p>

  <h2>Le bon format pour les journées contraintes</h2>
  <p>La lunch box brille là où le plateau repas est trop formel et le buffet impossible : horaires serrés, salles sans office, groupes qui se déplacent entre deux sites. Distribution en quelques minutes, zéro vaisselle, tri des emballages simplifié. Indiquez les régimes spécifiques (végétarien, sans gluten) à la commande : chacun reçoit une boîte équivalente.</p>

  <h2>Commander vos lunch box pour votre événement à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong> en précisant le nombre de convives et la répartition des menus. Livraison à l'heure souhaitée, dès 6h30 si votre journée démarre tôt. Facturation entreprise avec TVA, devis sous 24h pour les gros volumes.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */

const HERO = {
  label: 'Lunch Box',
  description: 'Un sandwich en baguette ou pain viennois, une entrée et un dessert au choix, serviette & couverts inclus.',
  prix: '18,90',
  hero: '/hero-lunch-box.webp',
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

/* Box boulangerie de 18,90 à 22,90 € selon la garniture.
   Entrée / sandwich / dessert (+ boisson) alimentent la fiche produit. */
export const BOXES = [
  {
    seoTitle: `La Parisienne : la lunch box poulet mayonnaise pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>La Parisienne est notre lunch box la plus classique : un sandwich au poulet mayonnaise, simple et sûr, qui plaît à tout le monde. Le sandwich est préparé en baguette de notre boulanger partenaire ou en pain viennois, au choix, avec une salade de concombre à la ciboulette ou de tomate et mozzarella en entrée, et une part de cake ou une madeleine en dessert.</p><h2>Le grand classique du déjeuner</h2><p>Sandwich poulet mayonnaise, entrée et dessert au choix, serviette et couverts inclus. Préparée le matin même, prête à emporter en réunion ou à servir en salle.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: "lb1",
    categorie: "poulet",
    nom: "La Parisienne",
    prix: "19,90",
    img: "/sandwich-lb1-parisienne-v2.webp",
    imgDetoure: true,
    sousTitre: "Poulet Mayonnaise · Baguette ou viennois",
    entree: "Au choix :\nSalade de concombre à la ciboulette\nSalade de tomate & mozzarella",
    plat: "Poulet Mayonnaise, au choix :\nEn baguette\nEn pain viennois",
    dessert: "Au choix :\nPart de cake marbré\nMadeleine framboise",
    description: "Un sandwich en baguette ou pain viennois, une entrée et un dessert au choix, serviette & couverts. Boisson en option.",
  },
  {
    seoTitle: `L'Épicée : la lunch box poulet curry pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>L'Épicée réveille le déjeuner avec un sandwich au poulet curry, parfumé et généreux. Le sandwich est préparé en baguette de notre boulanger partenaire ou en pain viennois, au choix, avec une salade de concombre à la ciboulette ou de tomate et mozzarella en entrée, et une part de cake ou une madeleine en dessert.</p><h2>Du poulet, un peu d'épices</h2><p>Sandwich poulet curry, entrée et dessert au choix, serviette et couverts inclus. Préparée le matin même, prête à emporter en réunion ou à servir en salle.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: "lb2",
    categorie: "poulet",
    nom: "L'Épicée",
    prix: "19,90",
    img: "/sandwich-lb2-epicee.webp",
    imgDetoure: true,
    sousTitre: "Poulet Curry · Baguette ou viennois",
    entree: "Au choix :\nSalade de concombre à la ciboulette\nSalade de tomate & mozzarella",
    plat: "Poulet Curry, au choix :\nEn baguette\nEn pain viennois",
    dessert: "Au choix :\nPart de cake marbré\nMadeleine framboise",
    description: "Un sandwich en baguette ou pain viennois, une entrée et un dessert au choix, serviette & couverts. Boisson en option.",
  },
  {
    seoTitle: `La Fermière : la lunch box œuf & emmental pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>La Fermière est notre lunch box végétarienne : un sandwich œuf et emmental, simple, rassasiant et sans viande. Le sandwich est préparé en baguette de notre boulanger partenaire ou en pain viennois, au choix, avec une salade de concombre à la ciboulette ou de tomate et mozzarella en entrée, et une part de cake ou une madeleine en dessert.</p><h2>L'option végétarienne</h2><p>Sandwich œuf & emmental, entrée et dessert au choix, serviette et couverts inclus. Préparée le matin même, prête à emporter en réunion ou à servir en salle.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: "lb3",
    categorie: "vegetarien",
    nom: "La Fermière",
    prix: "18,90",
    img: "/sandwich-lb3-fermiere.webp",
    imgDetoure: true,
    sousTitre: "Œuf & Emmental · Baguette ou viennois",
    entree: "Au choix :\nSalade de concombre à la ciboulette\nSalade de tomate & mozzarella",
    plat: "Œuf & Emmental, au choix :\nEn baguette\nEn pain viennois",
    dessert: "Au choix :\nPart de cake marbré\nMadeleine framboise",
    description: "Un sandwich en baguette ou pain viennois, une entrée et un dessert au choix, serviette & couverts. Boisson en option.",
  },
  {
    seoTitle: `La Nordique : la lunch box saumon & avocat pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>La Nordique apporte une touche plus fine : un sandwich au saumon et à l'avocat, frais et léger. Le sandwich est préparé en baguette de notre boulanger partenaire ou en pain viennois, au choix, avec une salade de concombre à la ciboulette ou de tomate et mozzarella en entrée, et une part de cake ou une madeleine en dessert.</p><h2>Saumon et avocat, frais et léger</h2><p>Sandwich saumon & avocat, entrée et dessert au choix, serviette et couverts inclus. Préparée le matin même, prête à emporter en réunion ou à servir en salle.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: "lb4",
    categorie: "poisson",
    nom: "La Nordique",
    prix: "22,90",
    img: "/sandwich-lb4-nordique.webp",
    imgDetoure: true,
    sousTitre: "Saumon & Avocat · Baguette ou viennois",
    entree: "Au choix :\nSalade de concombre à la ciboulette\nSalade de tomate & mozzarella",
    plat: "Saumon & Avocat, au choix :\nEn baguette\nEn pain viennois",
    dessert: "Au choix :\nPart de cake marbré\nMadeleine framboise",
    description: "Un sandwich en baguette ou pain viennois, une entrée et un dessert au choix, serviette & couverts. Boisson en option.",
  },
  {
    seoTitle: `L'Océane : la lunch box thon mayonnaise pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>L'Océane joue la valeur sûre : un sandwich au thon mayonnaise, rassasiant et sans surprise. Le sandwich est préparé en baguette de notre boulanger partenaire ou en pain viennois, au choix, avec une salade de concombre à la ciboulette ou de tomate et mozzarella en entrée, et une part de cake ou une madeleine en dessert.</p><h2>Le thon mayonnaise, valeur sûre</h2><p>Sandwich thon mayonnaise, entrée et dessert au choix, serviette et couverts inclus. Préparée le matin même, prête à emporter en réunion ou à servir en salle.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: "lb9",
    categorie: "poisson",
    nom: "L'Océane",
    prix: "20,90",
    img: "/sandwich-lb9-oceane-v2.webp",
    imgDetoure: true,
    sousTitre: "Thon Mayonnaise · Baguette ou viennois",
    entree: "Au choix :\nSalade de concombre à la ciboulette\nSalade de tomate & mozzarella",
    plat: "Thon Mayonnaise, au choix :\nEn baguette\nEn pain viennois",
    dessert: "Au choix :\nPart de cake marbré\nMadeleine framboise",
    description: "Un sandwich en baguette ou pain viennois, une entrée et un dessert au choix, serviette & couverts. Boisson en option.",
  },
]

/* ─── Carte menu ─────────────────────────────────────────────────── */

/* Extrait les choix de "Au choix :\nA\nB" (ou "Titre, au choix :\nA\nB") → ['A', 'B']. */
function options(champ) {
  if (!champ) return []
  return champ.split('\n').map(l => l.trim()).filter(Boolean)
    .filter(l => !/au choix\s*:?$/i.test(l))
}

/* Un bloc « SALADE / DESSERT » du menu, filet doré puis intitulé puis contenu. */
function BlocMenu({ label, choix }) {
  if (!choix || choix.length === 0) return null
  return (
    <div style={{ marginTop: '16px' }}>
      <span style={{ display: 'block', width: '26px', height: '1px', background: 'rgba(169,128,59,0.45)', margin: '0 auto 14px' }} />
      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '6px' }}>
        {label}
      </p>
      {choix.map((c, i) => (
        <span key={i}>
          {i > 0 && (
            <span style={{ display: 'block', fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontStyle: 'normal', color: '#9B9590', margin: '2px 0' }}>
              ou
            </span>
          )}
          <span style={{ display: 'block', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12.5px', lineHeight: 1.5, color: '#5A544C' }}>
            {c}
          </span>
        </span>
      ))}
    </div>
  )
}

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
        display: 'flex', flexDirection: 'column', textDecoration: 'none',
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
      {/* Photo du sandwich */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', background: produit.imgDetoure ? '#F8F5EF' : (produit.img ? '#F8F5EF' : 'radial-gradient(ellipse at 50% 40%, #F8F4EC 0%, #F1EBDF 100%)'), overflow: 'hidden' }}>
        {produit.img && (
          <Image fill src={produit.img}
            alt={produit.nom}
            sizes="(max-width: 768px) 50vw, 33vw"
            style={{
              objectFit: produit.imgDetoure ? 'contain' : 'cover',
              objectPosition: 'center',
              padding: produit.imgDetoure ? '14px' : 0,
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

      {/* Menu complet, à la façon d'une carte imprimée */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '26px 24px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: catColor, marginBottom: '10px' }}>
          {catLabel}
        </p>

        <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '23px', fontWeight: 400, lineHeight: 1.15, color: hovered ? '#E0A126' : '#111111', marginBottom: '8px', transition: 'color 0.25s ease' }}>
          {produit.nom}
        </h3>

        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12.5px', lineHeight: 1.55, color: '#5A544C' }}>
          {produit.sousTitre}
        </p>

        <BlocMenu label="Salade" choix={options(produit.entree)} />
        <BlocMenu label="Dessert" choix={options(produit.dessert)} />

        <div style={{ flex: 1 }} />

        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: '#111111', marginTop: '22px', paddingTop: '16px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          {produit.prix} €<span style={{ color: 'rgba(17,17,17,0.35)', fontSize: '11px', marginLeft: '4px' }}>HT · par personne</span>
        </p>
      </div>
    </Link>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

function LunchBoxInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeFiltre, setActiveFiltre] = useState('tous')
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const filtre = searchParams.get('filtre') || 'tous'
    setActiveFiltre(filtre)
    setHydrated(true)
  }, [searchParams])

  function handleFilterChange(key) {
    setActiveFiltre(key)
    router.push(`/creations/lunch-box?filtre=${key}`)
  }

  if (!hydrated) return null

  const categoriesDispo = new Set(BOXES.map(b => b.categorie))
  const filtresDispo = FILTRES.filter(f => f.key === 'tous' || categoriesDispo.has(f.key))

  const boxesFiltres = BOXES.filter(b =>
    activeFiltre === 'tous' ? true : b.categorie === activeFiltre
  )

  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero, contenu + immersif, aligné sur les autres pages ── */}
        <div className="lb-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="lb-hero" style={{ position: 'relative', width: '100%', height: '58vh', minHeight: '440px', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src={HERO.hero}
              alt="Lunch Box L'Écrin"
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }}
            />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
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

        <Breadcrumb maxWidth="1440px" items={[{ label: 'Accueil', href: '/' }, { label: 'Lunch Box' }]} />

        <CategoryTabs />

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
                  onClick={() => handleFilterChange(f.key)}
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
        body="Formations, séminaires itinérants, équipes en déplacement : la lunch box livre un vrai repas dans une boîte soignée. Distribution immédiate, aucun office nécessaire, la qualité L'Écrin, format nomade."
        seoArticle={SEO_ARTICLE}
      />

      {/* ── Radius (override du reset global) + responsive ── */}
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
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
          .cat-hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.5) 100%) !important; }
          .lb-hero-wrapper { padding: 20px 20px 0 !important; }
          .lb-hero         { min-height: 380px !important; height: 42vh !important; }
          .lb-hero-text    { padding: 0 28px !important; max-width: 100% !important; }
          .lb-shell { padding-left: 24px !important; padding-right: 24px !important; }
          .lb-grid  { grid-template-columns: repeat(2,1fr) !important; gap: 20px 14px !important; }
        }
        @media (max-width: 620px) {
          /* La carte porte tout le menu : une colonne, sinon le texte se casse. */
          .lb-grid  { grid-template-columns: 1fr !important; gap: 24px !important; max-width: 420px; margin: 0 auto; }
        }
      ` }} />

      <CategoryJsonLd
        name="Lunch Box"
        path="/creations/lunch-box"
        items={BOXES.map(b => ({ name: b.nom, url: `/creations/lunch-box/${b.id}` }))}
      />
      <Footer />
    </>
  )
}

export default function LunchBox() {
  return (
    <Suspense fallback={null}>
      <LunchBoxInner />
    </Suspense>
  )
}
