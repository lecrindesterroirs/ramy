'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import CategoryJsonLd from '../../../components/CategoryJsonLd'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'
import CategoryTabs, { sortItems, priceFromLabel } from '../../../components/CategoryTabs'

const SEO_ARTICLE = `
  <h2>Traiteur pause gourmande et goûter d'entreprise à Paris</h2>
  <p>La <strong>pause gourmande d'entreprise</strong> est le moment le plus attendu de l'après-midi : entre deux sessions de séminaire, à la fin d'une formation ou pour célébrer une bonne nouvelle d'équipe. L'Écrin Traiteur livre vos goûters partout à Paris et en Île-de-France, avec des douceurs artisanales préparées le jour même.</p>

  <h2>Madeleines, cookies, tartelettes : une carte sucrée artisanale</h2>
  <p>Notre carte des pauses réunit les madeleines <strong>Mado Paris</strong> — réputées comme les meilleures de Paris —, des cookies généreux, des cakes maison tranchés, des tartelettes citron ou praliné et des brochettes de fruits frais. Une sélection qui alterne le réconfortant et le léger, pour que chacun y trouve son plaisir, y compris les becs peu sucrés.</p>

  <h2>Quelle quantité prévoir pour une pause d'équipe ?</h2>
  <p>Comptez <strong>1,5 à 2 pièces sucrées par personne</strong> pour une pause de 20 à 30 minutes. Pour un après-midi complet de séminaire avec deux pauses, passez à 3 pièces en variant les familles : un cake tranché en début d'après-midi, madeleines et fruits frais vers 16h30. Ajoutez café, thé et jus pour une pause complète.</p>

  <h2>Commander votre goûter d'entreprise à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong> et recevez votre pause gourmande à l'heure exacte de votre programme. Conditionnement prêt à servir, facturation entreprise avec TVA. Pour les séminaires multi-jours ou les commandes récurrentes, demandez un devis personnalisé — réponse sous 24h.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */

const HERO = {
  label: 'Pauses Gourmandes',
  description: 'La touche sucrée de l\'après-midi — pâtisseries, biscuits et fruits frais préparés le jour même pour rythmer vos pauses et goûters d\'entreprise.',
  hero: '/hero-pauses-gourmandes.webp',
}

/* Coffrets — tailles disponibles, même logique que les Madeleines
   sur la page Petit-déjeuner (FORMATS avec prix + « le plus choisi »). */
const COFFRETS_MADELEINES = [
  { id: 'madeleines-10', pieces: 10, price: 24.90, label: '10 pièces', sub: '4 à 6 pers.' },
  { id: 'madeleines-20', pieces: 20, price: 49.00, label: '20 pièces', sub: '8 à 12 pers.', popular: true },
  { id: 'madeleines-50', pieces: 50, price: 119.00, label: '50 pièces', sub: '25 à 30 pers.' },
]
const COFFRETS_MACARONS = [
  { id: 'macarons-12', pieces: 12, price: 29.90, label: '12 pièces', sub: '4 à 6 pers.' },
  { id: 'macarons-24', pieces: 24, price: 54.90, label: '24 pièces', sub: '8 à 12 pers.', popular: true },
  { id: 'macarons-48', pieces: 48, price: 99.90, label: '48 pièces', sub: '20 à 24 pers.' },
]

/* Douceurs — images partagées avec Petit-déjeuner quand le produit existe déjà,
   sinon visuels générés dans la DA du site (planche bois, lumière naturelle). */
export const PAUSES = [
  { id: 'madeleines',    nom: 'Madeleines Mado Paris',                  img: '/prod-madeleines-50.webp', prix: 'dès 24,90 €', description: 'Madeleines moelleuses cuites du jour, nature ou parfumées.', coffrets: COFFRETS_MADELEINES },
  { id: 'macarons',      nom: 'Macarons d\'exception',                    img: '/prod-macarons.webp',       prix: '24 pièces, 64,00 €', description: 'Macarons aux ganaches délicates, assortiment de saveurs.' },
  { id: 'brownie',       nom: 'Brownie fondant maison',                     img: '/prod-brownie.webp', prix: '6 pièces, 19,90 €',        description: 'Brownie fondant au chocolat intense, servi à couper.' },
  { id: 'carrot-cake',   nom: 'Carrot Cake',           img: '/prod-carrot-cake.webp', prix: '5/6 pers, 14,90 €',    description: 'Carrot cake moelleux aux épices, servi à couper.' },
  { id: 'cake-citron',   nom: 'Cake Citron Pavot',           img: '/prod-cake-citron-pavot.webp', prix: '5/6 pers, 14,90 €', description: 'Cake maison au citron et graines de pavot, tranché.' },
  { id: 'cake-marbre',   nom: 'Cake Marbré',                 img: '/prod-cake-marbre.webp',    prix: '5/6 pers, 14,90 €', description: 'Cake marbré chocolat-vanille, tranché.' },
  { id: 'cookie',        nom: 'Cookie Signature',            img: '/prod-cookies.webp',        prix: '6 pièces, 17,90 €', description: 'Cookie généreux aux pépites de chocolat.' },
  { id: 'tartelette-citron', nom: 'Tartelette Citron',        img: '/prod-tartelette-citron.webp', prix: '6 pièces, 17,90 €', description: 'Tartelette au citron meringuée, crémeux acidulé.' },
  { id: 'tartelette-praline', nom: 'Tartelette Praliné',      img: '/prod-tartelette-praline.webp', prix: '6 pièces, 17,90 €', description: 'Tartelette au praliné maison, croustillant noisette.' },
  { id: 'mousse-chocolat', nom: 'Mousse au chocolat maison',           img: '/prod-mousse-chocolat.webp', prix: '6 pièces, 18,90 €', description: 'Mousse au chocolat intense, texture aérienne.' },
  { id: 'panna-cotta',   nom: 'Panna cotta maison',                 img: '/prod-panna-cotta.webp',    prix: '6 pièces, 16,90 €', description: 'Panna cotta vanille, dressée en verrine individuelle.' },
  { id: 'verrine-citron', nom: 'Verrine Citron / Lemon Curd', img: '/prod-verrine-citron.webp', prix: '6 pièces, 16,90 €', description: 'Verrine lemon curd, fraîcheur acidulée en fin de repas.' },
  { id: 'choux',         nom: 'Choux',                       img: '/prod-choux.webp', prix: '24 pièces, 64,00 €',          description: 'Choux garnis assortis, glaçages et crèmes aux parfums variés.' },
  { id: 'babka',         nom: 'Babka',                       img: '/prod-babka.webp', prix: '5/6 pers, 24,90 €',          description: 'Babka briochée roulée au chocolat, tranchée.' },
  { id: 'tartes-fines',  nom: 'Tartes Fines',                img: '/prod-tartes-fines.webp', prix: '6 pièces, 24,90 €',   description: 'Tartes fines aux fruits de saison, à partager.' },
  { id: 'yaourt-fruits', nom: 'Yaourt Fermier',                img: '/prod-yaourt-fruits.webp', prix: '6 pièces, 14,90 €',  description: 'Yaourt aux fruits de la Ferme de Viltain, au lait de leurs vaches.' },
  { id: 'compote-pomme', nom: 'Compote du verger',                img: '/prod-compote.webp',        prix: '6 pièces, 16,90 €', description: 'Compote de pomme nature, sans sucres ajoutés.' },
  { id: 'compote-pomme-fraise', nom: 'Compote Pomme Fraise',  img: '/prod-compote-fraise.webp', prix: '6 pièces, 16,90 €', description: 'Compote pomme et fraise, fraîche et gourmande.' },
  { id: 'compote-pomme-tonka', nom: 'Compote Pomme Fève Tonka', img: '/prod-compote-tonka.webp', prix: '6 pièces, 16,90 €', description: 'Compote pomme parfumée à la fève tonka.' },
  { id: 'brochettes-fruits', nom: 'Brochettes de Fruits',    img: '/prod-brochettes.webp',    prix: '20 brochettes, 48,90 €', description: 'Brochettes de fruits frais de saison, à picorer.' },
  { id: 'corbeilles-fruits', nom: 'Corbeilles de Fruits',    img: '/prod-corbeille.webp',     prix: '10-12 fruits, 38,90 €', description: 'Corbeilles de fruits frais de saison, à partager.' },
  { id: 'plateau-fruits-frais', nom: 'Plateau de Fruits Frais', img: '/plateau-fruits.webp',   prix: '15-20 pers, 48,90 €', description: 'Sélection de fruits frais de saison découpés, à partager.' },
  { id: 'crepes',        nom: 'Crêpes',                      img: '/prod-crepes.webp',         prix: '20 crêpes, 58,90 €', description: 'Crêpes sucrées préparées le jour même, garnitures au choix.' },
]

/* ─── Carte douceur ──────────────────────────────────────────────── */

function PauseCard({ produit }) {
  const [hovered, setHovered] = useState(false)
  const href = produit.id === 'madeleines'
    ? '/creations/petits-dejeuners-et-pauses/madeleines-20'
    : `/creations/pauses-gourmandes/${produit.id}`
  return (
    <Link
      href={href}
      className="pg-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: 'none',
        display: 'flex', flexDirection: 'column',
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
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', background: '#F8F5EF', overflow: 'hidden' }}>
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
        <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, lineHeight: 1.2, color: hovered ? '#E0A126' : '#111111', marginBottom: '8px', transition: 'color 0.25s ease', flex: 1 }}>
          {produit.nom}
        </h3>
        {(() => {
          if (!produit.prix) return (
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: '#9B9590' }}>À partager · sur devis</p>
          )
          const parts = produit.prix.split(', ')
          const hasUnit = parts.length === 2
          return (
            <>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: '#111111' }}>
                {hasUnit ? parts[1] : parts[0]}
                <span style={{ color: 'rgba(17,17,17,0.28)', fontSize: '11px', marginLeft: '4px' }}>HT</span>
              </p>
              {hasUnit && (
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.4)', marginTop: '4px' }}>{parts[0]}</p>
              )}
            </>
          )
        })()}
      </div>
    </Link>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function PausesGourmandes() {
  const [sortLabel, setSortLabel] = useState('En vedette')
  const pausesAffichees = sortItems(PAUSES, sortLabel, p => priceFromLabel(p.prix))
  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero ── */}
        <div className="pg-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="pg-hero" style={{ position: 'relative', width: '100%', height: '54vh', minHeight: '420px', overflow: 'hidden' }}>
            <Image fill priority sizes="100vw" src={HERO.hero} alt="Pauses gourmandes L'Écrin" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="pg-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '640px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  Petit-déjeuner & Pauses
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(30px, 3.6vw, 54px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                  {HERO.label}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '420px' }}>
                  {HERO.description}
                </p>
              </div>
            </Reveal>
          </header>
        </div>

        <CategoryTabs sort={sortLabel} onSort={setSortLabel} count={pausesAffichees.length} />

        {/* ── Grille des douceurs ── */}
        <div className="pg-shell pg-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '48px 72px 104px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 24px' }}>
          {pausesAffichees.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 90}>
              <PauseCard produit={p} />
            </Reveal>
          ))}
        </div>

      </main>

      <CategoryClosing
        eyebrow="Pensé pour les pauses d'équipe"
        title={'La pause qui remotive.\nLe goût qui rassemble.'}
        body="Une pause réussie change le rythme d'une journée de travail. Madeleines, cookies, fruits frais : des douceurs artisanales livrées prêtes à servir, pour transformer un quart d'heure de battement en vrai moment d'équipe."
        seoArticle={SEO_ARTICLE}
      />

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .pg-hero { border-radius: 2px !important; }
        .pg-card { border-radius: 4px !important; }
        @media (max-width: 1100px) {
          .pg-hero-wrapper { padding-left: 48px !important; padding-right: 48px !important; }
          .pg-hero-text    { padding-left: 48px !important; padding-right: 48px !important; }
          .pg-shell { padding-left: 48px !important; padding-right: 48px !important; }
          .pg-grid  { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 768px) {
          .cat-hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.5) 100%) !important; }
          .pg-hero-wrapper { padding: 20px 20px 0 !important; }
          .pg-hero         { min-height: 360px !important; height: 40vh !important; }
          .pg-hero-text    { padding: 0 28px !important; max-width: 100% !important; }
          .pg-shell { padding-left: 24px !important; padding-right: 24px !important; }
          .pg-grid  { grid-template-columns: repeat(2,1fr) !important; gap: 20px 14px !important; }
        }
      ` }} />

      <CategoryJsonLd
        name="Pauses gourmandes"
        path="/creations/pauses-gourmandes"
        items={PAUSES.map(p => ({ name: p.nom, url: `/creations/pauses-gourmandes/${p.id}` }))}
      />
      <Footer />
    </>
  )
}
