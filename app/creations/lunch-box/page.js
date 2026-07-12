'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import CategoryJsonLd from '../../../components/CategoryJsonLd'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'
import CategoryTabs from '../../../components/CategoryTabs'

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
  description: 'Une entrée, un sandwich Signature ou Club, un dessert artisanal, serviette & couverts. Boisson en option.',
  prix: '22,90',
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

/* Chaque box : entrée / sandwich / dessert stockés pour la fiche produit ;
   la grille n'affiche que nom · catégorie · prix. Photos placeholder. */
export const BOXES = [
  {
    seoTitle: `La Parisienne : la lunch box baguette jambon de dinde pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>La Parisienne est notre lunch box la plus simple et la plus sûre : une baguette Signature au jambon de dinde, précédée d'une salade de tomates anciennes et basilic, suivie d'un cookie Signature. Un déjeuner complet dans un format compact, prêt à emporter en réunion ou à servir en salle.</p><h2>Un déjeuner complet en boîte individuelle</h2><p>Salade de tomates anciennes et basilic, baguette jambon de dinde, cookie Signature, avec serviette et couverts inclus. Tout est monté le matin même, pour un déjeuner net sans logistique de votre côté.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: 'lb1', categorie: 'viande', nom: 'La Parisienne', prix: '22,90', img: '/lunchbox-parisienne.webp',
    sousTitre: 'Baguette Signature · Jambon de Dinde',
    entree: 'Salade de tomates anciennes & basilic',
    plat: 'Baguette Jambon de Dinde',
    dessert: 'Cookie Signature',
  },
  {
    seoTitle: `L'Impératrice : la lunch box club poulet César pour vos déjeuners de réunion à Paris`,
    seoHtml: `<p>L'Impératrice mise sur un grand classique : un club sandwich au poulet César, avec houmous, huile d'olive et pain grillé en entrée, et un brownie en dessert. Une lunch box généreuse et rassasiante, parfaite pour une réunion qui déborde sur le déjeuner ou une journée de séminaire.</p><h2>Un club généreux en format individuel</h2><p>Houmous et pain grillé, club poulet César, brownie, avec serviette et couverts inclus. Monté le matin même, prêt à manger sans couverts compliqués ni service en salle.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous 24h.</p>`,
    id: 'lb2', categorie: 'poulet', nom: "L'Impératrice", prix: '23,90', img: '/lunchbox-cesar.webp',
    sousTitre: 'Club Poulet César',
    entree: 'Houmous, huile d\'olive & pain grillé',
    plat: 'Club Poulet César',
    dessert: 'Brownie',
  },
  {
    seoTitle: `La Nordique : la lunch box baguette saumon pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>La Nordique apporte une touche plus fine : une baguette au saumon et cream cheese, précédée d'une salade de concombre au yaourt, menthe et aneth, terminée par un cookie Signature. Une lunch box fraîche et élégante, pour un déjeuner de travail qui sort du sandwich classique.</p><h2>Fraîche et raffinée</h2><p>Salade de concombre au yaourt et herbes, baguette saumon et cream cheese, cookie Signature, avec serviette et couverts inclus. Montée le matin même, prête à emporter.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: 'lb4', categorie: 'poisson', nom: 'La Nordique', prix: '24,90', img: '/lunchbox-nordique.webp',
    sousTitre: 'Baguette Saumon & Cream Cheese',
    entree: 'Salade de concombre au yaourt, menthe & aneth',
    plat: 'Baguette Saumon & Cream Cheese',
    dessert: 'Cookie Signature',
  },
  {
    seoTitle: `La Marine : la lunch box club thon pour vos déjeuners de réunion à Paris`,
    seoHtml: `<p>La Marine joue la valeur sûre du club au thon : un sandwich moelleux et généreux, avec une salade de tomates anciennes et basilic en entrée et un brownie en dessert. Une lunch box rassasiante et sans surprise, idéale pour un déjeuner d'équipe ou une réunion de travail.</p><h2>Le club thon, simple et rassasiant</h2><p>Salade de tomates anciennes et basilic, club thon, brownie, avec serviette et couverts inclus. Monté le matin même, prêt à manger debout ou en salle.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous 24h.</p>`,
    id: 'lb5', categorie: 'poisson', nom: 'La Marine', prix: '23,90', img: '/lunchbox-marine.webp',
    sousTitre: 'Club Thon',
    entree: 'Salade de tomates anciennes & basilic',
    plat: 'Club Thon',
    dessert: 'Brownie',
  },
  {
    seoTitle: `La New-Yorkaise : la lunch box baguette pastrami pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>La New-Yorkaise a du caractère : une baguette au pastrami et pickles, précédée d'une part de pissaladière et jeunes pousses, suivie d'un cookie Signature. Une lunch box qui change du sandwich habituel et réveille un déjeuner de travail avec un peu de mordant.</p><h2>Du caractère en format individuel</h2><p>Part de pissaladière et jeunes pousses, baguette pastrami pickles, cookie Signature, avec serviette et couverts inclus. Montée le matin même, prête à emporter en réunion.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: 'lb6', categorie: 'viande', nom: 'La New-Yorkaise', prix: '24,90', img: '/lunchbox-deli.webp',
    sousTitre: 'Baguette Pastrami Pickles',
    entree: 'Part de pissaladière & jeunes pousses',
    plat: 'Baguette Pastrami Pickles',
    dessert: 'Cookie Signature',
  },
  {
    seoTitle: `La Croustillante : la lunch box baguette poulet César pour vos déjeuners de réunion à Paris`,
    seoHtml: `<p>La Croustillante décline le poulet César en version baguette : plus nomade que le club, avec houmous, huile d'olive et pain grillé en entrée, et un brownie en dessert. Une lunch box franche et généreuse, facile à manger d'une main en réunion ou en déplacement.</p><h2>Le poulet César, version baguette</h2><p>Houmous et pain grillé, baguette poulet César, brownie, avec serviette et couverts inclus. Montée le matin même, pensée pour un déjeuner net et rapide.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis sous 24h.</p>`,
    id: 'lb8', categorie: 'poulet', nom: 'La Croustillante', prix: '23,90', img: '/lunchbox-cesar-baguette.webp',
    sousTitre: 'Baguette Poulet César',
    entree: 'Houmous, huile d\'olive & pain grillé',
    plat: 'Baguette Poulet César',
    dessert: 'Brownie',
  },
  {
    seoTitle: `L'Océane : la lunch box baguette thon ciboulette pour vos déjeuners d'entreprise à Paris`,
    seoHtml: `<p>L'Océane mise sur la fraîcheur : une baguette au thon et à la ciboulette, précédée d'une salade de concombre au yaourt, menthe et aneth, terminée par un cookie Signature. Une lunch box légère et parfumée, pour un déjeuner de travail sans lourdeur.</p><h2>Légère et parfumée</h2><p>Salade de concombre au yaourt et herbes, baguette thon ciboulette, cookie Signature, avec serviette et couverts inclus. Montée le matin même, prête à emporter.</p><h2>Commander vos lunch box à Paris et en Île-de-France</h2><p>Commande avant 14h la veille, livraison dès 6h30 sur site. Effectifs variables, régimes particuliers, facturation entreprise avec TVA. Devis personnalisé sous 24h.</p>`,
    id: 'lb9', categorie: 'poisson', nom: "L'Océane", prix: '23,90', img: '/lunchbox-thon.webp',
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
          <Image fill src={produit.img}
            alt={produit.nom}
            sizes="(max-width: 768px) 50vw, 33vw"
            style={{
              objectFit: 'cover', objectPosition: 'center',
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

        {/* ── Hero, contenu + immersif, aligné sur les autres pages ── */}
        <div className="lb-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="lb-hero" style={{ position: 'relative', width: '100%', height: '58vh', minHeight: '440px', overflow: 'hidden' }}>
            <Image fill priority sizes="100vw" src={HERO.hero}
              alt="Lunch Box L'Écrin"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
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
