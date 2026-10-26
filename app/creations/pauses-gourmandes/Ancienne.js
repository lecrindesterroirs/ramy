'use client'

import Image from 'next/image'
import { useState, Fragment } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import CategoryJsonLd from '../../../components/CategoryJsonLd'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'
import CategoryTabs, { sortItems, priceFromLabel, DEFAULT_SORTS } from '../../../components/CategoryTabs'
import ParallaxImage from '../../../components/ParallaxImage'
import Breadcrumb from '../../../components/Breadcrumb'
import CrossSellBanner from '../../../components/CrossSellBanner'
import { FAQ_PAUSES } from './faq'
import BlocReponse, { CadreBlocReponse } from '../../../components/BlocReponse'

const SEO_ARTICLE = `
  <h2>Livraison de goûter d'entreprise à Paris : comment ça marche</h2>
  <p>Vous choisissez les douceurs, le nombre de personnes et l'heure de votre pause : nous livrons du lundi au vendredi, à Paris et en Île-de-France, à 15h30, 16h ou plus tard dans l'après-midi. Commande jusqu'à <strong>14h la veille</strong>, minimum de commande 50 € HT, livraison 29 € HT à Paris et dans les communes proches, facturation entreprise avec TVA, devis sous 24h. Pour les séminaires et les commandes régulières, un devis personnalisé est possible. Notre page <a href="/occasions/gouter-entreprise">goûter d'entreprise</a> détaille les formats et les produits les plus choisis, et la page <a href="/traiteur">traiteur entreprise Paris et Île-de-France</a> liste les villes desservies.</p>

  <h2>Traiteur pause gourmande et goûter d'entreprise à Paris</h2>
  <p>La <strong>pause gourmande d'entreprise</strong> est le moment le plus attendu de l'après-midi : entre deux sessions de séminaire, à la fin d'une formation ou pour célébrer une bonne nouvelle d'équipe. L'Écrin Traiteur livre vos goûters partout à Paris et en Île-de-France, avec des douceurs artisanales préparées le jour même.</p>

  <h2>Madeleines, cookies, tartelettes : une carte sucrée artisanale</h2>
  <p>Notre carte des pauses réunit les madeleines <strong>Mado Paris</strong>, réputées comme les meilleures de Paris, les choux signés par <strong>Philippe Urraca</strong>, Meilleur Ouvrier de France, des cookies généreux, des cakes tranchés, des tartelettes citron ou praliné et des brochettes de fruits frais. Une sélection qui alterne le réconfortant et le léger, pour que chacun y trouve son plaisir, y compris les becs peu sucrés.</p>

  <h2>Quelle quantité prévoir pour une pause d'équipe ?</h2>
  <p>Comptez <strong>1,5 à 2 pièces sucrées par personne</strong> pour une pause de 20 à 30 minutes. Pour un après-midi complet de séminaire avec deux pauses, passez à 3 pièces en variant les familles : un cake tranché en début d'après-midi, madeleines et fruits frais vers 16h30. Ajoutez café, thé et jus pour une pause complète.</p>

  <h2>Combien coûte un goûter d'entreprise ?</h2>
  <p>Comptez entre <strong>6 € et 15 € HT par personne</strong> selon les produits choisis. Un goûter simple (cookies ou madeleines + boisson) tourne autour de 6 à 8 € ; un goûter premium (macarons, tartelettes, fruits frais et boissons chaudes) monte à 12-15 €. Pour des commandes régulières, un tarif préférentiel est possible sur devis.</p>

  <h2>Quel goûter pour quel moment ?</h2>
  <div class="tbl-wrap"><table>
    <thead><tr><th>Moment</th><th>Quantité</th><th>Ce qui fonctionne</th><th>Budget HT</th></tr></thead>
    <tbody>
      <tr><td><strong>Pause café de 20 à 30 minutes</strong></td><td>1,5 à 2 pièces par personne</td><td>Madeleines, cookies, brochettes de fruits</td><td>6 à 8 € par personne</td></tr>
      <tr><td><strong>Goûter premium</strong></td><td>Une sélection variée par personne et une boisson</td><td>Macarons, tartelettes, fruits frais, boissons chaudes</td><td>12 à 15 € par personne</td></tr>
      <tr><td><strong>Après-midi de séminaire, deux pauses</strong></td><td>3 pièces par personne, variées</td><td>Un cake tranché en début d'après-midi, madeleines et fruits frais vers 16h30</td><td>Sur devis</td></tr>
      <tr><td><strong>Anniversaire, pot de départ</strong></td><td>Un gâteau à partager pour 6 à 12 personnes</td><td>Tarte aux framboises, fraisier, praliné noisette, tarte au citron meringuée</td><td>De 44,90 à 69,90 € le gâteau</td></tr>
    </tbody>
  </table></div>
  <p>Pour un pot de départ ou un afterwork en fin de journée, des plateaux salés et sucrés existent aussi : voir notre page <a href="/occasions/afterwork-entreprise">traiteur afterwork d'entreprise</a> et nos <a href="/creations/cocktails">formules cocktail livrées</a>. Pour accompagner la pause, <a href="/creations/boissons">nos boissons</a> (jus Alain Milliat, thés Mariage Frères, thermos de café) se commandent dans le même devis.</p>

  <h2>Goûter d'anniversaire ou de team building : nos guides dédiés</h2>
  <p>Certaines occasions méritent une sélection pensée pour elles : voir notre guide <a href="/journal/gouter-anniversaire-entreprise-paris">goûter d'anniversaire en entreprise</a> pour fêter un collaborateur, ou <a href="/journal/gouter-entreprise-bureau">goûter d'entreprise au bureau</a> pour transformer une pause ordinaire en vrai moment d'équipe.</p>

  <h2>Commander votre goûter d'entreprise à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong> et recevez votre pause gourmande à l'heure exacte de votre programme. Conditionnement prêt à servir, facturation entreprise avec TVA. Pour les séminaires multi-jours ou les commandes récurrentes, demandez un devis personnalisé, réponse sous 24h.</p>

  <p>En octobre, découvrez aussi notre sélection dédiée pour <a href="/journal/octobre-rose-entreprise-paris">Octobre Rose en entreprise</a> : macarons et madeleines aux teintes roses pour marquer le mois de sensibilisation.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */

const HERO = {
  label: 'Goûter d\'entreprise : livraison à Paris',
  description: 'La touche sucrée de l\'après-midi · pâtisseries, biscuits et fruits frais préparés le jour même, livrés à Paris et en Île-de-France pour rythmer vos pauses et goûters d\'entreprise.',
  hero: '/hero-pauses-gourmandes.webp',
}

/* Coffrets, tailles disponibles, même logique que les Madeleines
   sur la page Petit-déjeuner (FORMATS avec prix + « le plus choisi »). */
export { COFFRETS_MADELEINES, COFFRETS_MACARONS, PAUSES } from './data'
import { COFFRETS_MADELEINES, COFFRETS_MACARONS, PAUSES } from './data'
import EncartDevisMobile from '../../../components/EncartDevisMobile'


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
            fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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
        <h3 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '18px', fontWeight: 400, lineHeight: 1.2, color: hovered ? '#E0A126' : '#111111', marginBottom: '8px', transition: 'color 0.25s ease', flex: 1 }}>
          {produit.nom}
        </h3>
        {(() => {
          if (!produit.prix) return (
            <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '12px', color: '#9B9590' }}>À partager · sur devis</p>
          )
          const parts = produit.prix.split(', ')
          const hasUnit = parts.length === 2
          return (
            <>
              <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', color: '#111111' }}>
                {hasUnit ? parts[1] : parts[0]}
                <span style={{ color: 'rgba(17,17,17,0.28)', fontSize: '11px', marginLeft: '4px' }}>HT</span>
              </p>
              {hasUnit && (
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.4)', marginTop: '4px' }}>{parts[0]}</p>
              )}
            </>
          )
        })()}
      </div>
    </Link>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

const GATEAUX_LABEL = 'Gâteaux à partager'
const SORTS = [...DEFAULT_SORTS, GATEAUX_LABEL]

const ANSWER_BLOCK = (
  <BlocReponse
    titre="Un goûter d'entreprise livré à partir de 6 € HT par personne"
    plusTitre="Quantités à prévoir, livraison et minimum de commande"
    plus={<>Comptez 1,5 à 2 pièces sucrées par personne pour une pause de 20 à 30 minutes, soit 6 à 15 € HT par personne selon les produits. Livraison 29 € HT à Paris et dans les communes proches, minimum de commande 50 € HT. Pour comparer les formats, voir notre page <a href="/occasions/gouter-entreprise">goûter d'entreprise</a>.</>}
  >
    Une pâtisserie artisanale et une boisson, livrées du lundi au vendredi à l'heure de votre pause : 15h30, 16h ou plus tard. Commande avant <strong>14h la veille</strong>, à Paris et en Île-de-France.
  </BlocReponse>
)

export default function PausesGourmandes({ bas }) {
  const [sortLabel, setSortLabel] = useState('En vedette')
  const pausesAffichees = sortLabel === GATEAUX_LABEL
    ? PAUSES.filter(p => p.section === 'gateaux-a-partager')
    : sortItems(PAUSES, sortLabel, p => priceFromLabel(p.prix))
  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero ── */}
        <div className="pg-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="pg-hero" style={{ position: 'relative', width: '100%', height: '54vh', minHeight: '420px', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src={HERO.hero} alt="Pause Goûter L'Écrin" strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="pg-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '640px' }}>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  Petit-déjeuner & Pauses
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(30px, 3.6vw, 54px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                  {HERO.label}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '420px' }}>
                  {HERO.description}
                </p>
              </div>
            </Reveal>
          </header>
        </div>

        <Breadcrumb maxWidth="1440px" items={[{ label: 'Accueil', href: '/' }, { label: 'Pause Goûter' }]} jsonLd={false} />

        {/* ── Réponse immédiate : l'essentiel visible, l'opératoire replié ── */}
        <CadreBlocReponse>{ANSWER_BLOCK}</CadreBlocReponse>

        <CategoryTabs sort={sortLabel} onSort={setSortLabel} count={pausesAffichees.length} sorts={SORTS} />

        {/* ── Grille des douceurs ── */}
        <div className="pg-shell pg-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '48px 72px 104px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 24px' }}>
          {pausesAffichees.map((p, i) => (
            <Fragment key={p.id}>
              {p.sectionTitle && (
                <div style={{ gridColumn: '1 / -1', marginBottom: '0', paddingTop: '16px', paddingBottom: '8px' }}>
                  <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '24px', fontWeight: 400, letterSpacing: '-0.01em', color: '#1a1a1a', margin: 0 }}>
                    {p.sectionTitle}
                  </h2>
                </div>
              )}
              <Reveal delay={(i % 4) * 90}>
                <PauseCard produit={p} />
              </Reveal>
              {i === Math.min(3, pausesAffichees.length - 1) && <EncartDevisMobile />}
            </Fragment>
          ))}
        </div>

        <CrossSellBanner
          title="Complétez votre Pause Goûter avec nos boissons"
          body="Jus artisanaux Alain Milliat, thés Mariage Frères, thermos de café et de chocolat chaud : de quoi accompagner chaque pause."
          buttonLabel="Découvrir nos boissons"
          href="/creations/boissons"
          products={[
            { id: 'thermos-cafe', name: 'Thermos de Café Bio', img: '/bois-thermos-cafe.webp', price: '19,50€' },
            { id: 'jus-orange', name: "Jus d'Orange Alain Milliat", img: '/bois-jus-orange.webp', price: '9,50€' },
            { id: 'jus-pomme', name: 'Jus de Pomme Alain Milliat', img: '/bois-jus-pomme.webp', price: '9,50€' },
          ]}
        />

        {/* ── FAQ visible (même contenu que le FAQPage du layout) ── */}
        <section className="pg-shell" style={{ maxWidth: '820px', margin: '0 auto', padding: '72px 40px 96px' }}>
          <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 400, lineHeight: 1.15, color: '#111111', textAlign: 'center', marginBottom: '36px' }}>
            Goûter d'entreprise : vos questions
          </h2>
          {FAQ_PAUSES.map((f, i) => (
            <div key={i} style={{ padding: '24px 0', borderTop: '1px solid rgba(17,17,17,0.1)' }}>
              <h3 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '20px', fontWeight: 400, color: '#111111', marginBottom: '10px', lineHeight: 1.25 }}>
                {f.name}
              </h3>
              <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', lineHeight: 1.75, color: '#6E675F' }}>
                {f.answer}
              </p>
            </div>
          ))}
        </section>

      </main>

      <CategoryClosing bas={bas}
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
        name="Pause Goûter"
        path="/creations/pauses-gourmandes"
        includeFaq={false}
        items={PAUSES.map(p => ({ name: p.nom, url: `/creations/pauses-gourmandes/${p.id}` }))}
      />
      <Footer />
    </>
  )
}
