'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'

const SEO_ARTICLE = `
  <h2>Traiteur cocktail d'entreprise à Paris : pièces salées et sucrées artisanales</h2>
  <p>Le <strong>cocktail d'entreprise</strong> est le format des moments qui comptent : lancement de produit, signature de partenariat, départ d'un collaborateur, vœux de début d'année. Debout, verre à la main, vos invités circulent et échangent — et chaque pièce servie parle de votre niveau d'exigence. L'Écrin Traiteur compose des cocktails livrés prêts à servir à Paris et en Île-de-France.</p>

  <h2>Combien de pièces par personne pour un cocktail ?</h2>
  <p>Tout dépend de l'horaire et de ce que le cocktail remplace. Pour un <strong>cocktail apéritif</strong> avant un dîner : 6 à 8 pièces par personne. Pour un <strong>cocktail déjeunatoire</strong> qui remplace le déjeuner : 12 à 14 pièces. Pour un <strong>cocktail dînatoire</strong> en soirée : 16 à 18 pièces, en incluant des pièces plus consistantes et un tiers de sucré en fin de parcours.</p>

  <h2>Un équilibre salé-sucré qui raconte quelque chose</h2>
  <p>Nos assortiments alternent pièces froides raffinées, bouchées végétariennes et mignardises signées par nos artisans partenaires. L'objectif : que vos invités remarquent la différence dès la première bouchée, sans qu'aucun régime alimentaire ne soit laissé de côté. Chaque cocktail est équilibré pour tenir la durée réelle de votre événement.</p>

  <h2>Organiser votre cocktail d'entreprise à Paris</h2>
  <p>Transmettez-nous la date, le nombre d'invités et le format souhaité : nous vous proposons un assortiment détaillé sous 24h. Livraison à l'heure exacte, présentation soignée prête à disposer. Commande avant <strong>14h la veille</strong>, facturation entreprise avec TVA.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */

export const FORMULES = [
  {
    key: 'classique',
    label: 'Apéro',
    pieces: 8,
    prix: '29,90',
    accroche: 'La formule apéritive équilibrée pour vos afterworks et pauses conviviales.',
    featured: false,
    img: '/cocktail-classique.webp',
    sale: [
      'Samoussa Curry Végétarien',
      'Mini Quiche de Saison',
      'Bruschetta Tomates Confites',
      'Verrine Houmous Méditerranéen',
      'Brochette Poulet Yakitori',
      'Mini Bun Tomates Confites & Mozzarella',
    ],
    sucre: [
      'Brownie Signature',
      'Tartelette Citron',
    ],
  },
  {
    key: 'signature',
    label: 'Signature',
    pieces: 12,
    prix: '39,90',
    accroche: 'Une sélection raffinée de pièces généreuses, entre terre et mer.',
    featured: true,
    img: '/cocktail-signature.webp',
    sale: [
      'Samoussa Poulet Curry',
      'Mini Tarte Pissaladière',
      'Bruschetta Caviar d\'Aubergine',
      'Verrine Salade Grecque',
      'Tartare de Saumon Méditerranéen',
      'Brochette Tataki de Bœuf',
      'Brochette Crevettes Miso & Œufs de Truite',
      'Mini Bun Saumon Gravlax & Mousse aux Herbes',
      'Pomme de Terre Rôtie, Crème d\'Isigny & Saumon Fumé',
    ],
    sucre: [
      'Tartelette Praliné',
      'Cookie Signature',
      'Verrine Citron / Lemon Curd',
    ],
  },
  {
    key: 'prestige',
    label: 'Prestige',
    pieces: 16,
    prix: '51,90',
    accroche: 'L\'excellence gastronomique pour vos réceptions les plus soignées.',
    featured: false,
    img: '/cocktail-prestige.webp',
    sale: [
      'Samoussa Curry Végétarien',
      'Samoussa Poulet Curry',
      'Mini Tarte Pissaladière',
      'Mini Quiche de Saison',
      'Verrine Salade Grecque',
      'Verrine Houmous Méditerranéen',
      'Bruschetta Caviar d\'Aubergine',
      'Mini Bun Saumon Gravlax & Mousse aux Herbes',
      'Brochette Tataki de Bœuf',
      'Brochette Crevettes Miso & Œufs de Truite',
      'Sashimi de Saumon Gravlax aux Trois Agrumes',
      'Pop-Corn de Poulet Frit à la Coréenne',
    ],
    sucre: [
      'Tartelette Citron',
      'Tartelette Praliné',
      'Mousse Chocolat',
      'Carrot Cake',
    ],
  },
]

/* ─── Liste de pièces (Salé / Sucré) ─────────────────────────────── */

function Liste({ titre, items, accent }) {
  return (
    <div style={{ marginBottom: '22px' }}>
      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: accent, marginBottom: '12px' }}>
        {titre} · {items.length}
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.4, color: '#3A352F' }}>
            <span style={{ color: accent, flexShrink: 0, fontSize: '7px', marginTop: '5px' }}>◆</span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─── Grande carte formule ───────────────────────────────────────── */

function FormuleCard({ f }) {
  const [hovered, setHovered] = useState(false)
  const featured = f.featured
  return (
    <Link
      href={`/creations/cocktails/${f.key}`}
      className="ck-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: 'none',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: featured ? '#FBF7EE' : '#FFFFFF',
        border: featured ? '1px solid rgba(224,161,38,0.4)' : '1px solid rgba(17,17,17,0.07)',
        boxShadow: hovered
          ? '0 4px 10px rgba(17,17,17,0.05), 0 24px 50px rgba(17,17,17,0.10)'
          : featured
            ? '0 2px 6px rgba(17,17,17,0.04), 0 14px 36px rgba(224,161,38,0.10)'
            : '0 1px 3px rgba(17,17,17,0.04), 0 8px 24px rgba(17,17,17,0.05)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'box-shadow 0.35s ease, transform 0.35s ease',
      }}
    >
      {/* Photo de la formule */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#F8F5EF' }}>
        <img loading="lazy" src={f.img}
          alt={`Cocktail ${f.label}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.7s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {featured && (
          <span style={{ position: 'absolute', top: '14px', left: '14px', background: '#E0A126', color: '#FFFFFF', fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '6px 14px', whiteSpace: 'nowrap' }}>
            Le plus choisi
          </span>
        )}
      </div>

      {/* Liseré doré sous la photo pour la formule mise en avant */}
      {featured && <div style={{ height: '3px', background: '#E0A126' }} />}

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '30px 34px 34px' }}>

      {/* En-tête */}
      <div style={{ textAlign: 'center', paddingBottom: '24px', borderBottom: '1px solid rgba(17,17,17,0.09)', marginBottom: '26px' }}>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '10px' }}>
          Cocktail
        </p>
        <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '30px', fontWeight: 400, color: '#111111', marginBottom: '14px' }}>
          {f.label}
        </h2>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: '#6E675F', marginBottom: '18px' }}>
          {f.pieces} pièces par personne
        </p>
        <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '34px', fontWeight: 400, color: '#111111', lineHeight: 1 }}>
          {f.prix} €
          <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.4)', marginLeft: '6px' }}>HT / pers.</span>
        </p>
      </div>

      {/* Composition */}
      <div style={{ flex: 1 }}>
        <Liste titre="Salé" items={f.sale} accent="#5A7247" />
        <Liste titre="Sucré" items={f.sucre} accent="#C08A3E" />
      </div>

      {/* CTA — la carte entière ouvre la fiche formule */}
      <span
        style={{
          marginTop: '26px',
          display: 'block', textAlign: 'center',
          fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '14px 20px',
          color: featured ? '#FFFFFF' : '#111111',
          background: featured ? '#E0A126' : (hovered ? '#111111' : 'transparent'),
          border: featured ? '1px solid #E0A126' : (hovered ? '1px solid #111111' : '1px solid rgba(17,17,17,0.25)'),
          transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
        }}
      >
        Découvrir la formule →
      </span>
      </div>
    </Link>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Cocktails() {
  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero ── */}
        <div className="ck-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="ck-hero" style={{ position: 'relative', width: '100%', height: '52vh', minHeight: '420px', overflow: 'hidden' }}>
            <img loading="eager" src="/hero-cocktail.webp" alt="Cocktail L'Écrin" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
            <div className="ck-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '620px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                Cocktail
              </p>
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                Cocktails
              </h1>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '400px' }}>
                Des bouchées salées et sucrées façonnées à la main, servies par personne — de l&apos;afterwork décontracté à la réception d&apos;exception.
              </p>
            </div>
            </Reveal>
          </header>
        </div>

        {/* ── Fil d'Ariane ── */}
        <div className="ck-shell" style={{ maxWidth: '1440px', margin: '0 auto', padding: '28px 72px 0' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: '#9B9590' }}>
            <Link href="/" style={{ color: '#9B9590' }}>Accueil</Link>
            <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
            <span>Cocktail</span>
            <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
            <span style={{ color: '#111111' }}>Cocktails</span>
          </nav>
        </div>

        {/* ── Intro ── */}
        <div className="ck-shell" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '12px' }}>
            Trois formules
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.15, color: '#111111', marginBottom: '14px' }}>
            Choisissez votre cocktail
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: '#6E675F', maxWidth: '560px', margin: '0 auto' }}>
            Un nombre de pièces par personne pensé pour chaque moment. Chaque formule se personnalise selon vos effectifs et régimes.
          </p>
        </div>

        {/* ── 3 cartes formules ── */}
        <div className="ck-shell ck-cards" style={{ maxWidth: '1320px', margin: '0 auto', padding: '48px 72px 110px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'stretch' }}>
          {FORMULES.map((f, i) => (
            <Reveal key={f.key} delay={i * 90}>
              <FormuleCard f={f} />
            </Reveal>
          ))}
        </div>

      </main>

      <CategoryClosing
        eyebrow="Pensé pour vos réceptions"
        title={'Des pièces qui impressionnent.\nUn moment qui rassemble.'}
        body="Lancement, célébration, vœux d'équipe : le cocktail est la vitrine de votre événement. Pièces salées raffinées et mignardises d'artisans, livrées prêtes à servir — il ne vous reste que l'essentiel : vos invités."
        seoArticle={SEO_ARTICLE}
      />

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .ck-hero { border-radius: 2px !important; }
        .ck-card { border-radius: 6px !important; }
        .ck-gallery-item { border-radius: 4px !important; }
        .ck-gallery-item:hover img { transform: scale(1.05); }
        @media (max-width: 900px) {
          .ck-gallery { columns: 2 !important; padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 560px) {
          .ck-gallery { columns: 1 !important; padding-left: 24px !important; padding-right: 24px !important; }
        }
        @media (max-width: 1100px) {
          .ck-hero-wrapper { padding-left: 48px !important; padding-right: 48px !important; }
          .ck-hero-text    { padding-left: 48px !important; padding-right: 48px !important; }
          .ck-shell { padding-left: 48px !important; padding-right: 48px !important; }
          .ck-cards { padding-left: 48px !important; padding-right: 48px !important; gap: 20px !important; }
        }
        @media (max-width: 860px) {
          .ck-cards { grid-template-columns: 1fr !important; max-width: 520px !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .cat-hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.5) 100%) !important; }
          .ck-hero-wrapper { padding: 20px 20px 0 !important; }
          .ck-hero         { min-height: 360px !important; height: 40vh !important; }
          .ck-hero-text    { padding: 0 28px !important; max-width: 100% !important; }
          .ck-shell { padding-left: 24px !important; padding-right: 24px !important; }
          .ck-cards { padding-left: 24px !important; padding-right: 24px !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
