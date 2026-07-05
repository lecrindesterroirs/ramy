'use client'

import { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'

const SEO_ARTICLE = `
  <h2>Coffrets cadeaux d'entreprise gourmands, livrés à Paris</h2>
  <p>Le <strong>coffret cadeau d'entreprise</strong> est le geste qui reste : remerciement d'un client fidèle, félicitations à une équipe, attention de fin d'année pour vos partenaires. Là où un e-mail s'oublie, un coffret gourmand se déballe, se partage et se raconte. L'Écrin Traiteur livre vos coffrets à Paris et en Île-de-France, ou les prépare pour une distribution lors de votre événement.</p>

  <h2>Tous nos coffrets sont personnalisables</h2>
  <p>Chaque coffret peut être adapté à votre image : <strong>assortiment ajusté</strong>, nombre de pièces, rubans et emballages à vos couleurs, message personnalisé, intégration de votre logo. Pour un lancement de produit ou un cadeau client premium, nous concevons des coffrets entièrement sur mesure — parlez-nous de votre projet, nous nous chargeons du reste.</p>

  <h2>Madeleines, macarons, cookies, chocolats : des artisans identifiés</h2>
  <p>Un coffret L'Écrin ne contient pas de produits anonymes : madeleines <strong>Mado Paris</strong> — réputées comme les meilleures de Paris —, macarons <strong>Pierre Morel</strong>, cookies <strong>Laura Todd</strong>, chocolats artisanaux. Des noms qui parlent aux connaisseurs et donnent au cadeau une histoire à raconter, bien au-delà de la boîte de chocolats générique.</p>

  <h2>Offrir un coffret gourmand à ses clients ou ses équipes</h2>
  <p>Commandez avant <strong>14h la veille</strong> pour une livraison à l'adresse de votre choix. Pour les envois multiples (cadeaux clients de fin d'année, distribution multi-sites), notre équipe organise la logistique complète sur devis — réponse sous 24h, facturation entreprise avec TVA.</p>
`

const HERO = {
  label: 'Coffrets Cadeaux',
  description: 'Des coffrets gourmands prêts à offrir — madeleines Mado Paris, macarons Pierre Morel, cookies Laura Todd, cakes maison. Idéal pour remercier un client ou marquer un moment d\'équipe.',
  hero: '/hero-plateaux-essentiel.webp',
}

const COFFRETS = [
  { id: 'madeleines-20', nom: 'Coffret de madeleines', sousTitre: '20 madeleines Mado Paris', prix: '49,00', img: '/prod-madeleines-20.webp' },
  { id: 'macarons', nom: 'Coffret de macarons', sousTitre: '24 macarons Pierre Morel', prix: '64,00', img: '/prod-macarons.webp' },
  { id: 'cookies', nom: 'Coffret de cookies', sousTitre: '6 cookies Laura Todd', prix: '17,90', img: '/prod-cookies.webp' },
  { id: 'chocolat', nom: 'Coffret de chocolats', sousTitre: 'Sélection de chocolats artisanaux', prix: '34,90', img: '/prod-panna-cotta.webp' },
]

function CoffretCard({ produit }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={`/creations/petits-dejeuners-et-pauses/${produit.id}`}
      className="cf-card"
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
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#F8F5EF' }}>
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

      <div style={{ padding: '16px 16px 16px' }}>
        <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, lineHeight: 1.25, color: hovered ? 'var(--accent)' : 'var(--text-primary)', marginBottom: '4px', transition: 'color 0.25s ease' }}>
          {produit.nom}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
          {produit.sousTitre}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-primary)' }}>
          {produit.prix} €<span style={{ color: 'rgba(17,17,17,0.28)', fontSize: '11px', marginLeft: '4px' }}>HT</span>
        </p>
      </div>
    </a>
  )
}

export default function CoffretsCadeaux() {
  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero ── */}
        <div className="cc-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="cc-hero" style={{ position: 'relative', width: '100%', height: '58vh', minHeight: '440px', overflow: 'hidden' }}>
            <img loading="eager" src={HERO.hero} alt="Coffrets cadeaux L'Écrin" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="cc-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '620px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  Créations
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

        {/* ── Grille des coffrets ── */}
        <div className="cc-shell cc-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '48px 72px 0', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 24px' }}>
          {COFFRETS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 90}>
              <CoffretCard produit={p} />
            </Reveal>
          ))}
        </div>

      </main>

      <CategoryClosing
        eyebrow="Pensé pour remercier"
        title={'Un cadeau qui a du goût.\nUne attention qui reste.'}
        body="Remercier un client, féliciter une équipe, marquer une fin d'année : nos coffrets gourmands portent les noms de nos artisans et peuvent être entièrement personnalisés à votre image — jusqu'au ruban."
        seoArticle={SEO_ARTICLE}
      />

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .cc-hero { border-radius: 2px !important; }
        .cf-card { border-radius: 4px !important; }
        @media (max-width: 1100px) {
          .cc-hero-wrapper { padding-left: 48px !important; padding-right: 48px !important; }
          .cc-hero-text    { padding-left: 48px !important; padding-right: 48px !important; }
          .cc-shell { padding-left: 48px !important; padding-right: 48px !important; }
          .cc-grid  { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 768px) {
          .cat-hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.5) 100%) !important; }
          .cc-hero-wrapper { padding: 20px 20px 0 !important; }
          .cc-hero         { min-height: 380px !important; height: 42vh !important; }
          .cc-hero-text    { padding: 0 28px !important; max-width: 100% !important; }
          .cc-shell { padding-left: 24px !important; padding-right: 24px !important; }
          .cc-grid  { grid-template-columns: repeat(2,1fr) !important; gap: 20px 14px !important; }
        }
        @media (max-width: 480px) {
          .cc-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
