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
import ParallaxImage from '../../../components/ParallaxImage'
import Breadcrumb from '../../../components/Breadcrumb'

const SEO_ARTICLE = `
  <h2>Commander une formule cocktail livrée à Paris et en Île-de-France</h2>
  <p>Cette page présente les trois formules cocktail de L'Écrin Traiteur, livrées prêtes à servir : <strong>L'Invitation</strong> (8 pièces, 29,90 € HT par personne), <strong>La Réception</strong> (12 pièces, 40,90 € HT) et <strong>La Célébration</strong> (16 pièces, 51,90 € HT). Chaque formule est un plateau complet de pièces salées et sucrées façonnées à la main : vous choisissez le nombre de personnes, nous composons et livrons. Pour savoir comment dimensionner votre événement, comparer les budgets pour 20 ou 50 personnes ou choisir selon l'occasion, voir notre page <a href="/occasions/cocktail-entreprise">cocktail d'entreprise à Paris</a>.</p>

  <h2>Quelle formule pour quel moment ?</h2>
  <p>L'Invitation est la formule apéritive : un afterwork, un pot de départ, un accueil avant un événement, pour une heure et demie à deux heures. La Réception, la plus choisie, associe terre et mer pour un cocktail déjeunatoire, une soirée partenaires ou une inauguration. La Célébration remplace le dîner : elle est pensée pour un cocktail dînatoire de deux heures et demie à trois heures. Pour un pot en fin de journée, voir aussi notre page <a href="/occasions/afterwork-entreprise">traiteur afterwork d'entreprise</a> et le <a href="/journal/traiteur-afterwork-pot-depart-entreprise-paris">guide pour organiser un afterwork ou un pot de départ</a>.</p>

  <h2>Un équilibre salé-sucré, sans régime laissé de côté</h2>
  <p>Nos assortiments alternent pièces froides, bouchées végétariennes et mignardises signées par nos artisans partenaires. Toute la carte est halal et sans porc par défaut ; les options végétariennes, véganes et sans gluten se précisent au devis. Pour un format plus large avec plusieurs stands, voir notre <a href="/journal/buffet-entreprise-guide-complet-paris">guide du buffet d'entreprise</a>.</p>

  <h2>Préparer votre cocktail : nos guides</h2>
  <p>Pour dimensionner votre réception : le <a href="/journal/cocktail-dinatoire-entreprise-paris">cocktail dînatoire d'entreprise</a>, les quantités et le budget pour <a href="/journal/cocktail-entreprise-50-personnes">50 personnes</a> et pour <a href="/journal/cocktail-entreprise-100-personnes">100 personnes</a>, nos <a href="/journal/idees-pieces-cocktail-entreprise">idées de pièces cocktail</a>, le <a href="/journal/cocktail-entreprise-sans-alcool">cocktail sans alcool</a>, le <a href="/journal/cocktail-entreprise-halal-paris">cocktail halal</a> et le <a href="/journal/cocktail-inauguration-entreprise">cocktail d'inauguration</a>.</p>

  <h2>Délais, livraison et facturation</h2>
  <p>Commande jusqu'à <strong>14h la veille</strong> pour une livraison le lendemain, à l'heure exacte de votre événement, présentation prête à disposer. Minimum de commande 50 € HT, livraison 29 € HT à Paris et dans les communes proches, facturation entreprise avec TVA, devis sous 24h. Pour 50 personnes et plus, prévenez au moins 48h avant. Le calcul des quantités est détaillé dans notre guide <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */

import { FORMULES, FAQ_CATALOGUE } from './data'
import BlocReponse, { CadreBlocReponse } from '../../../components/BlocReponse'
import EncartDevisMobile from '../../../components/EncartDevisMobile'
export { FORMULES }

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
        <Image fill src={f.img}
          alt={`Cocktail ${f.label}`}
          sizes="(max-width: 860px) 100vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.7s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
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
          {f.occasion || 'Cocktail'}
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

      {/* CTA, la carte entière ouvre la fiche formule */}
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

const ANSWER_BLOCK = (
  <BlocReponse
    titre="Cocktail d'entreprise à Paris : prix par personne"
    plusTitre="Combien de pièces prévoir, livraison et minimum"
    plus={<>Comptez 8 pièces par personne pour un pot d'une heure, 12 pièces pour remplacer un déjeuner, 16 pièces pour un dîner debout. Livraison 29 € HT à Paris et dans les communes proches, minimum de commande 50 € HT. <a href="/devis">Demandez un devis sous 24h</a>.</>}
  >
    Une formule cocktail se compte en pièces par personne : <strong>29,90 € HT</strong> pour 8 pièces, <strong>40,90 € HT</strong> pour 12 pièces, <strong>51,90 € HT</strong> pour 16 pièces. Le prix par personne reste le même quel que soit l'effectif. Commande avant <strong>14h la veille</strong>, livraison à Paris et en Île-de-France.
  </BlocReponse>
)

export default function Cocktails() {
  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero ── */}
        <div className="ck-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="ck-hero" style={{ position: 'relative', width: '100%', height: '52vh', minHeight: '420px', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src="/hero-cocktail.webp" alt="Cocktail L'Écrin" strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
            <div className="ck-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '620px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                Cocktail
              </p>
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                Formules cocktail livrées à Paris
              </h1>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '400px' }}>
                Trois formules de 8, 12 ou 16 pièces salées et sucrées par personne, façonnées à la main et livrées prêtes à servir, de l&apos;afterwork à la réception d&apos;exception.
              </p>
            </div>
            </Reveal>
          </header>
        </div>

        <Breadcrumb maxWidth="1440px" items={[{ label: 'Accueil', href: '/' }, { label: 'Cocktails' }]} jsonLd={false} />



        <CadreBlocReponse>{ANSWER_BLOCK}</CadreBlocReponse>
        <CategoryTabs />

        {/* ── Intro ── */}
        <div className="ck-shell" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '12px' }}>
            Trois formules
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.15, color: '#111111', marginBottom: '14px' }}>
            Choisissez votre cocktail
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: '#6E675F', maxWidth: '560px', margin: '0 auto' }}>
            Trois volumes de pièces selon le moment : L&apos;Invitation pour un pot, La Réception pour remplacer un déjeuner, La Célébration pour un dîner debout. Pièces salées et sucrées façonnées à la main, halal et sans porc, livrées prêtes à servir.
          </p>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: '#6E675F', maxWidth: '560px', margin: '14px auto 0' }}>
            Pour dimensionner votre événement et comparer les budgets pour 20 ou 50 personnes, voir notre page{' '}
            <a href="/occasions/cocktail-entreprise" style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>cocktail d&apos;entreprise à Paris</a>.
            Pour un pot en fin de journée, voir notre{' '}
            <a href="/occasions/afterwork-entreprise" style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>traiteur afterwork d&apos;entreprise</a>.
          </p>
        </div>

        {/* ── 3 cartes formules ── */}
        <div className="ck-shell ck-cards" style={{ maxWidth: '1320px', margin: '0 auto', padding: '48px 72px 110px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'stretch' }}>
          {FORMULES.map((f, i) => [
            <Reveal key={f.key} delay={i * 90}>
              <FormuleCard f={f} />
            </Reveal>,
            i === Math.min(3, FORMULES.length - 1) && <EncartDevisMobile key="encart-devis" />,
          ])}
        </div>

        {/* ── FAQ visible (même contenu que le FAQPage du layout) ── */}
        <section className="ck-shell" style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px 96px' }}>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 400, lineHeight: 1.15, color: '#111111', textAlign: 'center', marginBottom: '36px' }}>
            Questions sur les formules cocktail
          </h2>
          {FAQ_CATALOGUE.map((f, i) => (
            <div key={i} style={{ padding: '24px 0', borderTop: '1px solid rgba(17,17,17,0.1)' }}>
              <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '20px', fontWeight: 400, color: '#111111', marginBottom: '10px', lineHeight: 1.25 }}>
                {f.name}
              </h3>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: '#6E675F' }}>
                {f.answer}
              </p>
            </div>
          ))}
        </section>

      </main>

      <CategoryClosing
        eyebrow="Pensé pour vos réceptions"
        title={'Des pièces qui impressionnent.\nUn moment qui rassemble.'}
        body="Lancement, célébration, vœux d'équipe : le cocktail est la vitrine de votre événement. Pièces salées raffinées et mignardises d'artisans, livrées prêtes à servir, il ne vous reste que l'essentiel : vos invités."
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

      <CategoryJsonLd
        name="Cocktails"
        path="/creations/cocktails"
        includeFaq={false}
        items={FORMULES.map(f => ({ name: `Cocktail ${f.label}`, url: `/creations/cocktails/${f.key}` }))}
      />
      <Footer />
    </>
  )
}
