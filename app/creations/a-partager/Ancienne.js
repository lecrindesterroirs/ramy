'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'
import CategoryTabs from '../../../components/CategoryTabs'
import CategoryJsonLd from '../../../components/CategoryJsonLd'
import ParallaxImage from '../../../components/ParallaxImage'
import Breadcrumb from '../../../components/Breadcrumb'
import DevisRapide from '../../../components/DevisRapide'
import { usePathname } from 'next/navigation'
import { estAnglais } from '../../../lib/i18nBase'
import { enMenu, prixMenuEn } from '../../../lib/en/produits/aPartager'

/*
  Page bilingue : le même composant sert /creations/a-partager et
  /en/creations/a-partager. Les noms de menus (Le Méditerranéen, Le Parisien,
  Le Jardin) ne se traduisent pas ; les recettes passent par la surcouche
  lib/en/produits/aPartager.js.
*/
const T_PARTAGER = {
  fr: {
    accueil: 'Accueil', fil: 'Buffet à partager',
    eyebrowHero: 'Déjeuner', label: 'À Partager',
    description: 'Des menus généreux à partager · salades dressées, planches gourmandes et pièces cocktail, en grand format. Composés le matin avec des produits de saison.',
    introEyebrow: 'Trois menus',
    introTitre: 'Choisissez votre menu à partager',
    introTexte: "Chaque menu mêle salades, planches et pièces cocktail, dans un équilibre pensé pour toute l'équipe. Personnalisable selon vos effectifs et régimes.",
    plusChoisi: 'Le plus choisi',
    recettes: (sa, su) => `${sa} recettes salées · ${su} sucrées`,
    sale: 'Salé', sucre: 'Sucré',
    devis: 'Obtenir un devis →',
    devisTitre: 'Un buffet à organiser ?',
    devisSous: "Répondez en 30 secondes, devis détaillé sous 24h, livraison dans toute l'Île-de-France.",
    closeEyebrow: 'Pensé pour les moments collectifs',
    closeTitre: 'Des menus généreux.\nPensés pour rassembler.',
    closeBody: "Un menu au centre de la table vaut mieux qu'un long discours d'équipe. Salades, planches, pièces cocktail et douceurs : des formats à faire circuler, livrés prêts à servir pour vos déjeuners partagés.",
  },
  en: {
    accueil: 'Home', fil: 'Sharing buffet',
    eyebrowHero: 'Lunch', label: 'To Share',
    description: 'Generous menus to share · plated salads, gourmet boards and canapés, in large format. Made in the morning with seasonal produce.',
    introEyebrow: 'Three menus',
    introTitre: 'Choose your sharing menu',
    introTexte: 'Each menu brings together salads, boards and canapés, balanced for the whole team. Adaptable to your headcount and dietary needs.',
    plusChoisi: 'Most chosen',
    recettes: (sa, su) => `${sa} savoury recipes · ${su} sweet`,
    sale: 'Savoury', sucre: 'Sweet',
    devis: 'Get a quote →',
    devisTitre: 'A buffet to organise?',
    devisSous: 'Answer in 30 seconds, a detailed quote within 24 hours, delivery across the Paris region.',
    closeEyebrow: 'Made for collective moments',
    closeTitre: 'Generous menus.\nMade to bring people together.',
    closeBody: 'A menu in the middle of the table says more than a long team speech. Salads, boards, canapés and sweet bites: formats made to be passed around, eaten standing or seated.',
  },
}

const SEO_EN = `
  <h2>Sharing menus for your team lunches in Paris</h2>
  <p>Some company lunches do not need a set format, they need <strong>one generous menu to share in the middle of the table</strong>. A team catch-up, welcoming a partner, a department lunch: our sharing menus bring together salads, boards and canapés, delivered at the time you choose anywhere in Paris and the Paris region. The menus arrive plated, ready to set down on the table.</p>

  <h2>Sharing, an underrated team ritual</h2>
  <p>A menu set down in the middle changes the dynamic of a room: people help themselves, pass things along, comment. Each menu balances savoury pieces and sweet ones, made to travel from hand to hand, generous, and easy to eat standing or seated.</p>

  <h2>Choosing the right menu</h2>
  <p>Allow one menu for 8 to 12 people, topping it up according to appetite and the hour. Le Méditerranéen, Le Parisien or Le Jardin (100% vegetarian): our team helps you compose and size the order.</p>

  <h2>Ordering your sharing menus in Paris</h2>
  <p>Order before <strong>10 am the day before</strong>, delivered at the time you choose anywhere in Paris and the Paris region. The menus arrive plated, ready to set down. Company invoice with VAT.</p>
  <p>For a larger format with several stations, our <a href="/journal/buffet-entreprise-guide-complet-paris">complete guide to the company buffet</a> covers budget, presentation and choosing a caterer.</p>
`

const SEO_ARTICLE = `
  <h2>Menus à partager pour vos déjeuners d'équipe à Paris</h2>
  <p>Certains déjeuners d'entreprise n'ont pas besoin d'un format codifié, ils ont besoin d'un <strong>grand menu généreux à partager au centre de la table</strong>. Point d'équipe, accueil d'un partenaire, déjeuner de service : nos menus à partager mêlent salades, planches et pièces cocktail, dressés prêts à servir à Paris et en Île-de-France.</p>

  <h2>Le partage, un rituel d'équipe sous-estimé</h2>
  <p>Un menu posé au centre change la dynamique d'une salle : on se sert, on fait passer, on commente. Chaque menu équilibre pièces salées et douceurs, pour circuler de main en main, généreux, beau à regarder et pensé pour tous les goûts.</p>

  <h2>Choisir le bon menu</h2>
  <p>Comptez un menu pour 8 à 12 personnes en le complétant selon l'appétit et l'horaire. Méditerranéen, Parisien ou Jardin (100 % végétarien) : nos équipes vous aident à composer et à dimensionner selon le nombre de convives.</p>

  <h2>Commander vos menus à partager à Paris</h2>
  <p>Commande avant <strong>10h la veille</strong>, livraison à l'heure choisie partout à Paris et en Île-de-France. Les menus arrivent dressés, prêts à poser sur table. Facturation entreprise avec TVA, et pour les moments récurrents, un devis cadre simplifie tout.</p>
  <p>Pour un format plus large avec plusieurs stands, notre <a href="/journal/buffet-entreprise-guide-complet-paris">guide complet du buffet d'entreprise</a> détaille budget, dressage et choix du traiteur.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */

const HERO = {
  label: 'À Partager',
  description: 'Des menus généreux à partager · salades dressées, planches gourmandes et pièces cocktail, en grand format. Composés le matin avec des produits de saison.',
  hero: '/hero-a-partager.webp',
}

/* Menus à partager : chacun équilibré (recettes salées + sucrées),
   dressé en salades ou en verrines. Photos = visuels maison L'Écrin. */
import { MENUS, SALADES, FILTRES } from './data'
import BlocReponse, { CadreBlocReponse } from '../../../components/BlocReponse'
export { MENUS, SALADES, FILTRES }

/* ─── Liste de recettes (Salé / Sucré) ───────────────────────────── */

function Liste({ titre, items, accent }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: accent, marginBottom: '12px' }}>
        {titre} · {items.length}
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', padding: 0, margin: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.45, color: '#3A352F' }}>
            <span style={{ color: accent, flexShrink: 0, fontSize: '7px', marginTop: '5px' }}>◆</span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─── Grande carte menu ──────────────────────────────────────────── */

function MenuCard({ m, T, en }) {
  const tr = en ? enMenu(m.key) : null
  const accroche = tr ? tr.accroche : m.accroche
  const salees = tr ? tr.salees : m.salees
  const sucrees = tr ? tr.sucrees : m.sucrees
  const prix = en ? prixMenuEn(m.prix) : m.prix
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
        <Image fill src={m.img} alt={m.nom}
          sizes="(max-width: 860px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.7s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {featured && (
          <span style={{ position: 'absolute', top: '14px', left: '14px', background: '#E0A126', color: '#FFFFFF', fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '6px 14px', whiteSpace: 'nowrap' }}>
            {T.plusChoisi}
          </span>
        )}
      </div>
      {featured && <div style={{ height: '3px', background: '#E0A126' }} />}

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '30px 34px 34px' }}>
        {/* En-tête */}
        <div style={{ textAlign: 'center', paddingBottom: '22px', borderBottom: '1px solid rgba(17,17,17,0.09)', marginBottom: '24px' }}>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '10px' }}>
            Menu à partager
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '30px', fontWeight: 400, color: '#111111', marginBottom: '12px' }}>
            {m.nom}
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.55, color: '#6E675F', maxWidth: '340px', margin: '0 auto 6px' }}>
            {accroche}
          </p>
          {m.prix && (
            <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', fontWeight: 500, color: '#111111', margin: '10px 0 0' }}>
              {prix}
            </p>
          )}
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.4)' }}>
            {T.recettes(salees.length, sucrees.length)}
          </p>
        </div>

        {/* Composition */}
        <div style={{ flex: 1 }}>
          <Liste titre={T.sale} items={salees} accent="#5A7247" />
          <Liste titre={T.sucre} items={sucrees} accent="#C08A3E" />
        </div>

        {/* CTA */}
        <a
          href={en ? '/en/devis' : '/devis'}
          style={{
            marginTop: '24px', display: 'block', textAlign: 'center',
            fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '14px 20px', textDecoration: 'none',
            color: featured ? '#FFFFFF' : (hovered ? '#FFFFFF' : '#111111'),
            background: featured ? '#E0A126' : (hovered ? '#111111' : 'transparent'),
            border: featured ? '1px solid #E0A126' : (hovered ? '1px solid #111111' : '1px solid rgba(17,17,17,0.25)'),
            transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
          }}
        >
          {T.devis}
        </a>
      </div>
    </article>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

/* Le bloc-réponse dépend de la langue : il était écrit en dur et restait
   français sur /en/creations/a-partager, prix au format français compris. */
const ANSWER_BLOCK = (en) => en ? (
  <BlocReponse
    titre="Sharing buffets for companies: prices, lead time, ordering"
    plusTitre="Delivery, minimum order and presentation"
    plus={<>Delivery €29 excl. VAT in Paris and nearby towns, minimum order €50 excl. VAT. Served on wooden boards with reusable tableware, nothing disposable, collected after your event. <a href="/en/devis">Ask for a quote within 24 hours</a>.</>}
  >
    A sharing buffet starts at <strong>€34.90 excl. VAT per person</strong> and goes up to €37.90 depending on the menu: several cold dishes set down in the middle of the table for everyone to help themselves. Delivered Monday to Friday across Paris and Île-de-France, ordered by <strong>10 am the day before</strong>.
  </BlocReponse>
) : (
  <BlocReponse
    titre="Buffet à partager en entreprise : prix, délai, commande"
    plusTitre="Livraison, minimum de commande et présentation"
    plus={<>Livraison 29 € HT à Paris et dans les communes proches, minimum de commande 50 € HT. Présentation sur planches de bois et vaisselle réutilisable, sans jetable, récupérée après votre événement. <a href="/devis">Demandez un devis sous 24h</a>.</>}
  >
    Un buffet à partager démarre à <strong>34,90 € HT par personne</strong> et monte à 37,90 € selon le menu : plusieurs plats froids posés au centre de la table, que chacun se sert. Livraison du lundi au vendredi à Paris et en Île-de-France, sur commande avant <strong>10h la veille</strong>.
  </BlocReponse>
)

export default function APartager({ bas }) {
  const en = estAnglais(usePathname() || '/')
  const T = en ? T_PARTAGER.en : T_PARTAGER.fr
  return (
    <>
      <Navbar sansBandeau />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero ── */}
        <div className="ap-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 0 0' }}>
          <header className="ap-hero" style={{ position: 'relative', width: '100%', height: '52vh', minHeight: '420px', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src={HERO.hero} alt="Menus à partager L'Écrin" strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="ap-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 var(--retrait)', maxWidth: '620px' }}>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  {T.eyebrowHero}
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                  {T.label}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '420px' }}>
                  {T.description}
                </p>
              </div>
            </Reveal>
          </header>
        </div>

        <Breadcrumb maxWidth="1440px" items={[{ label: T.accueil, href: en ? '/en' : '/' }, { label: T.fil }]} jsonLd={false} />



        <CadreBlocReponse>{ANSWER_BLOCK(en)}</CadreBlocReponse>
        <CategoryTabs />

        {/* ── Intro ── */}
        <div className="ap-shell" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '12px' }}>
            {T.introEyebrow}
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.15, color: '#111111', marginBottom: '14px' }}>
            {T.introTitre}
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', lineHeight: 1.7, color: '#6E675F', maxWidth: '560px', margin: '0 auto' }}>
            {T.introTexte}
          </p>
        </div>

        {/* ── Grille menus (2 colonnes, grand format) ── */}
        <div className="ap-shell ap-cards" style={{ maxWidth: '1180px', margin: '0 auto', padding: '48px 72px 110px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px', alignItems: 'stretch' }}>
          {MENUS.map((m, i) => {
            const centered = i === MENUS.length - 1 && MENUS.length % 2 === 1
            return [centered ? (
              <div key={m.key} className="ap-center">
                <Reveal delay={(i % 2) * 90}>
                  <MenuCard m={m} T={T} en={en} />
                </Reveal>
              </div>
            ) : (
              <Reveal key={m.key} delay={(i % 2) * 90}>
                <MenuCard m={m} T={T} en={en} />
              </Reveal>
            )]
          })}
        </div>

        {/* Formulaire rapide juste sous les menus (28/10/2026) : le visiteur vient de choisir, il demande le devis tout de suite. */}
        <section id="devis" className="ev-devis" style={{ marginTop: 0 }}>
          <div className="ev-devis-inner">
            <DevisRapide defaultPrestation="Cocktail / Buffet" titre={T.devisTitre} titreEn={T.devisTitre} sousTitre={T.devisSous} sousTitreEn={T.devisSous} />
          </div>
        </section>

      </main>

      <CategoryClosing bas={bas}
        eyebrow={T.closeEyebrow}
        title={T.closeTitre}
        body={T.closeBody}
        seoArticle={en ? SEO_EN : SEO_ARTICLE}
        lang={en ? 'en' : 'fr'}
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

      <CategoryJsonLd name="À partager" nameEn="Sharing buffet" path="/creations/a-partager" />

      <Footer />
    </>
  )
}
