'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'

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

/* Tag court + couleur par univers. */
export const UNIVERS = {
  brunch:     { tag: 'Brunch',      color: '#C08A3E' },
  dejeuner:   { tag: 'Déjeuner',    color: '#5A7247' },
  streetfood: { tag: 'Street Food', color: '#8A3A3A' },
  douceurs:   { tag: 'Douceurs',    color: '#C4756B' },
  bars:       { tag: 'Bars',        color: '#B07D10' },
}

/* Libellé long par univers (pour breadcrumb / SEO des fiches détail). */
export const UNIVERS_LABEL = {
  brunch:     'Petit-déjeuner & Brunch',
  dejeuner:   'Déjeuner Gourmet',
  streetfood: 'Street Food',
  douceurs:   'Douceurs',
  bars:       'Bars & Boissons',
}

/* Slug URL déterministe à partir du nom (accents/esperluette gérés). */
export const slugAnim = (nom) =>
  nom.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/&/g, 'et')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

/* Animations : description sur la carte, composition stockée pour la
   fiche produit. Photos placeholder. */
export const ANIMATIONS = [
  // ── Petit-déjeuner & Brunch ──
  { id: 'b1', univers: 'brunch', nom: 'Barista', img: '/prod-cafe.webp',
    description: 'Préparation de cafés de spécialité à la demande.',
    compo: ['Espresso', 'Cappuccino', 'Latte', 'Flat White', 'Chocolat chaud', 'Thés premium'] },
  { id: 'b3', univers: 'brunch', nom: 'Bar à Jus Pressés', img: '/prod-bar-jus.webp',
    description: 'Jus de fruits et légumes préparés devant les invités.',
    compo: ['Orange', 'Pamplemousse', 'Citronnade fraîche', 'Pomme', 'Carotte, Orange & Gingembre', 'Betterave, Pomme & Citron', 'Concombre, Menthe & Citron Vert'] },
  { id: 'b4', univers: 'brunch', nom: 'Brunch Gourmand', img: '/prod-brunch-gourmand.webp',
    description: 'Une animation complète de brunch servie en continu.',
    compo: ['Viennoiseries artisanales', 'Pain & brioches', 'Beurre & confitures', 'Fruits frais', 'Yaourts & granola', 'Jus frais', 'Café & thé'] },
  { id: 'b5', univers: 'brunch', nom: 'Atelier Œufs', img: '/prod-atelier-oeufs.webp',
    description: 'Œufs préparés minute selon les envies.',
    compo: ['Œufs brouillés', 'Œufs au plat', 'Omelettes', 'Œufs aux fines herbes', 'Bacon (option)', 'Saumon fumé (option)'] },
  { id: 'b6', univers: 'brunch', nom: 'Atelier Crêpes & Pancakes', img: '/prod-atelier-crepes.webp',
    description: 'Crêpes et pancakes préparés et dressés à la demande.',
    compo: ['Sirop d\'érable', 'Chocolat', 'Caramel beurre salé', 'Citron', 'Sucre', 'Fruits frais', 'Chantilly', 'Pistaches'] },
  { id: 'b7', univers: 'brunch', nom: 'Atelier Gaufres Belges', img: '/prod-atelier-gaufres.webp',
    description: 'Gaufres servies chaudes avec un large choix de toppings.',
    compo: [] },
  { id: 'b8', univers: 'brunch', nom: 'Atelier Bagels', img: '/prod-atelier-bagels.webp',
    description: 'Bagels garnis devant les invités.',
    compo: ['Saumon & Cream Cheese', 'Poulet César', 'Pastrami', 'Avocat & Feta', 'Burrata & Pesto'] },
  { id: 'b9', univers: 'brunch', nom: 'Bar à Yaourts & Granola', img: '/prod-bar-yaourts.webp',
    description: 'Création de bols personnalisés.',
    compo: ['Skyr', 'Yaourt grec', 'Granola maison', 'Fruits frais', 'Fruits secs', 'Miel', 'Coulis'] },

  // ── Déjeuner Gourmet ──
  { id: 'd1', univers: 'dejeuner', nom: 'Atelier Pasta', img: '/prod-atelier-pasta.webp',
    description: 'Préparation minute de pâtes fraîches.',
    compo: ['Trofie au pesto', 'Parmesan', 'Burrata', 'Tomates confites'] },
  { id: 'd2', univers: 'dejeuner', nom: 'Atelier Focaccia & Burrata', img: '/prod-atelier-focaccia.webp',
    description: 'Focaccias artisanales et burrata crémeuse dressées devant les invités.',
    compo: ['Focaccia', 'Burrata crémeuse', 'Jambon cru', 'Mortadelle', 'Tomates anciennes', 'Légumes grillés', 'Pesto', 'Basilic', 'Huile d\'olive'] },
  { id: 'd3', univers: 'dejeuner', nom: 'Atelier Saumon', img: '/prod-atelier-saumon.webp',
    description: 'Découpe et dressage de saumon fumé & gravlax.',
    compo: ['Blinis', 'Crème citron-aneth', 'Câpres', 'Oignons rouges'] },
  { id: 'd5', univers: 'dejeuner', nom: 'Atelier Fromages Affinés', img: '/prod-atelier-fromages.webp',
    description: 'Découpe et présentation de fromages AOP, pains artisanaux, fruits frais et fruits secs.',
    compo: [] },
  { id: 'd6', univers: 'dejeuner', nom: 'Atelier Charcuterie Artisanale', img: '/prod-atelier-charcuterie.webp',
    description: 'Découpe minute de charcuteries halal, sans porc.',
    compo: ['Bœuf séché', 'Dinde fumée', 'Poulet fumé', 'Bresaola', 'Viande des Grisons'] },
  { id: 'd7', univers: 'dejeuner', nom: 'Atelier Sushi & Maki', img: '/prod-atelier-sushi.webp',
    description: 'Préparation ou dressage de bouchées japonaises.',
    compo: ['Makis', 'California Rolls', 'Nigiris', 'Gyozas'] },

  // ── Street Food Premium ──
  { id: 's2', univers: 'streetfood', nom: 'Atelier Lobster Roll', img: '/prod-atelier-lobster.webp',
    description: 'Le grand classique new-yorkais, servi dans un pain brioché toasté.',
    compo: ['Homard', 'Crevettes', 'Crabe', 'Saumon fumé'] },
  { id: 's3', univers: 'streetfood', nom: 'Atelier Mini Burgers', img: '/prod-atelier-burgers.webp',
    description: 'Montage minute de mini burgers.',
    compo: ['Cheeseburger', 'Chicken Crispy', 'Pulled Beef BBQ', 'Truffe & Comté', 'Halloumi'] },
  { id: 's5', univers: 'streetfood', nom: 'Atelier Mini Baguettes', img: '/prod-atelier-baguettes.webp',
    description: 'Découpe et dressage de mini baguettes artisanales.',
    compo: ['Jambon Beurre', 'Poulet César', 'Thon Ciboulette', 'Burrata', 'Pastrami'] },
  { id: 's6', univers: 'streetfood', nom: 'Atelier Tacos Gourmet', img: '/prod-atelier-tacos.webp',
    description: 'Mini tacos dressés à la minute.',
    compo: ['Poulet mariné', 'Bœuf effiloché', 'Crevettes', 'Falafel'] },
  { id: 's7', univers: 'streetfood', nom: 'Atelier Libanais Wrap & Pita', img: '/prod-atelier-libanais.webp',
    description: 'Wraps et pains pita libanais garnis à la minute, produits frais.',
    compo: ['Chawarma poulet', 'Chawarma bœuf', 'Falafel', 'Houmous', 'Taboulé'] },
  { id: 's9', univers: 'streetfood', nom: 'Atelier Loaded Fries', img: '/prod-atelier-loaded-fries.webp',
    description: 'Pommes de terre croustillantes garnies.',
    compo: ['Cheddar & Bacon', 'Pulled Beef', 'Chicken Crispy', 'Truffe & Parmesan'] },

  // ── Douceurs ──
  { id: 'do1', univers: 'douceurs', nom: 'Bar à Glaces Artisanales', img: '/prod-bar-glaces.webp',
    description: 'Une animation parfaite pour l\'été — parfums et toppings au choix.',
    compo: ['Vanille', 'Chocolat', 'Pistache', 'Fraise', 'Citron', 'Café', 'Toppings : coulis, caramel beurre salé, fruits rouges, pistaches, cookies émiettés, chantilly'] },
  { id: 'do2', univers: 'douceurs', nom: 'Atelier Desserts', img: '/prod-atelier-desserts.webp',
    description: 'Dressage de pâtisseries individuelles et mignardises.',
    compo: ['Tartelettes', 'Choux', 'Financiers', 'Madeleines', 'Mini desserts Signature'] },
  { id: 'do4', univers: 'douceurs', nom: 'Bar à Fruits Frais', img: '/prod-bar-fruits.webp',
    description: 'Découpe et dressage de fruits de saison.', compo: [] },
  { id: 'do5', univers: 'douceurs', nom: 'Fontaine au Chocolat', img: '/prod-fontaine-chocolat.webp',
    description: 'Fontaine de chocolat chaud et fruits à tremper.', compo: [] },

  // ── Bars & Boissons (100 % sans alcool) ──
  { id: 'ba1', univers: 'bars', nom: 'Bar à Mocktails', img: '/prod-bar-mocktails.webp',
    description: 'Cocktails sans alcool préparés à la minute.', compo: [] },
  { id: 'ba3', univers: 'bars', nom: 'Eaux Infusées', img: '/prod-eaux-infusees.webp',
    description: 'Eaux infusées aux fruits et herbes fraîches.', compo: [] },
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
        <img loading="lazy" src={produit.img}
          alt={produit.nom}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.7s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
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
            <img loading="eager" src={HERO.hero} alt="Animations culinaires L'Écrin" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
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

      <Footer />
    </>
  )
}
