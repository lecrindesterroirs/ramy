'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import CategoryJsonLd from '../../../components/CategoryJsonLd'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'
import CategoryTabs, { sortItems } from '../../../components/CategoryTabs'

const SEO_ARTICLE = `
  <h2>Plateaux apéritifs pour entreprise : l'afterwork sans logistique</h2>
  <p>Le <strong>plateau apéritif d'entreprise</strong> est le format des fins de journée réussies : afterwork d'équipe, célébration d'un projet livré, pot informel entre deux services. Pas de traiteur en cuisine, pas de vaisselle, des plateaux généreux posés sur la table, et la convivialité fait le reste. L'Écrin Traiteur livre vos apéritifs à Paris et en Île-de-France.</p>

  <h2>Des planches pensées pour le partage</h2>
  <p>Nos plateaux réunissent le meilleur de nos artisans : bouchées salées, produits de caractère, douceurs à picorer. Le format « à partager » casse la distance entre collègues, on tend le plateau, on compare, on discute. C'est précisément ce qu'on attend d'un apéritif d'équipe, et c'est ce qui le distingue d'un buffet formel.</p>

  <h2>Quelles quantités pour un afterwork ?</h2>
  <p>Comptez <strong>4 à 6 pièces par personne et par heure</strong> pour un apéritif de fin de journée. Pour un afterwork qui se prolonge au-delà de deux heures ou qui remplace le dîner, passez à 10-12 pièces en ajoutant des bouchées plus consistantes. Pensez aux boissons : jus artisanaux et softs premium complètent naturellement la commande.</p>

  <h2>Commander vos plateaux apéritifs à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong> en indiquant l'heure exacte de livraison, vos plateaux arrivent prêts à servir, présentation soignée. Facturation entreprise avec TVA. Pour un événement plus ambitieux, notre équipe compose des formats sur mesure sur devis, réponse sous 24h.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */

const HERO = {
  label: 'Plateaux Apéritifs',
  description: 'De généreux plateaux à partager pour vos afterworks et réceptions · sandwichs, fromages & charcuteries, fraîcheur et créations signature.',
  hero: '/hero-plateaux-aperitifs-full.webp',
}

/* Filtres = familles de plateaux. */
export const FILTRES = [
  { key: 'tous',      label: 'Tous' },
  { key: 'sandwichs', label: 'Sandwichs' },
  { key: 'gourmands', label: 'Gourmands' },
  { key: 'fraicheur', label: 'Fraîcheur' },
  { key: 'signature', label: 'Signature' },
  { key: 'sucre',     label: 'Sucré' },
]

const CATEGORIE_COLORS = {
  sandwichs: '#C08A3E',
  gourmands: '#8A3A3A',
  fraicheur: '#5A7247',
  signature: '#B07D10',
}

/* Plateaux : description affichée sur la carte, recettes stockées pour
   la fiche produit. Photos placeholder. */
export const PLATEAUX = [
  // ── Sandwichs ──
  {
    seoTitle: `Plateau mini baguettes pour vos afterworks et réceptions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de mini baguettes artisanales garnies est le format qui rassure : des sandwichs francs, faciles à attraper debout, qui plaisent à tout le monde lors d'un afterwork ou d'un pot de départ. Posé au centre de la table, il se partage sans chichi et cale les petites faims de fin de journée.</p><h2>Un assortiment à partager, net à manger debout</h2><p>Mini baguettes garnies en assortiment varié, découpées pour picorer, avec des recettes qui mêlent viande, poisson et options végétariennes. On équilibre les garnitures pour que chacun trouve la sienne, et on ajuste les quantités à votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30 sur votre lieu de réception. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    id: 'sw1', famille: 'sandwichs', nom: 'Mini Baguettes Signature', img: '/plateau-baguettes.webp',
    description: 'Assortiment de mini baguettes artisanales garnies.',
    recettes: ['Jambon de Dinde', 'Poulet César', 'Saumon & Cream Cheese', 'Thon Ciboulette', 'Burrata & Pesto', 'Pastrami Pickles'],
  },
  {
    seoTitle: `Plateau club sandwichs pour vos afterworks et réunions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de clubs sandwichs moelleux, découpés en triangles, est un classique de l'apéritif d'entreprise qui ne déçoit jamais. Généreux et facile à partager, il accompagne un afterwork, un déjeuner de travail qui s'étire ou une réception, sans couverts ni logistique compliquée.</p><h2>Des clubs généreux, découpés à partager</h2><p>Assortiment de clubs moelleux aux garnitures variées, poulet, dinde et options végétariennes, découpés pour se servir d'une main. On mixe les recettes et on cale les quantités sur votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    id: 'sw2', famille: 'sandwichs', nom: 'Clubs Signature', img: '/plateau-clubs.webp',
    description: 'Assortiment de clubs sandwichs moelleux découpés.',
    recettes: ['Club Poulet César', 'Club Saumon & Cream Cheese', 'Club Thon', 'Club Jambon de Dinde'],
  },
  {
    seoTitle: `Plateau de wraps pour vos afterworks et pauses déjeuner d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de wraps découpés en bouchées apporte de la couleur et de la fraîcheur à un apéritif d'équipe. Roulés serrés, coupés net, les wraps se picorent facilement debout et offrent une alternative plus légère aux sandwichs classiques pour un afterwork ou une réunion de l'après-midi.</p><h2>Roulés, coupés, prêts à picorer</h2><p>Assortiment de wraps aux garnitures variées avec des options végétariennes, découpés en bouchées pour se partager sans effort. On équilibre les recettes et on ajuste les quantités à votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    id: 'sw3', famille: 'sandwichs', nom: 'Wraps Gourmands', img: '/plateau-wraps.webp',
    description: 'Assortiment de wraps découpés en bouchées.',
    recettes: ['César Poulet', 'Saumon & Cream Cheese', 'Falafel & Houmous', 'Burrata & Légumes grillés', 'Thon Ciboulette'],
  },
  {
    seoTitle: `Plateau de mini burgers pour vos afterworks et événements d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de mini burgers artisanaux met de l'ambiance sur un apéritif d'équipe. Format street food net à manger debout, il plaît à tous les âges et transforme un afterwork ou un pot de départ en moment convivial. Des bouchées généreuses, assemblées avec soin.</p><h2>Des mini burgers à partager</h2><p>Assortiment de mini burgers aux recettes variées, dont une option végétarienne, prêts à se servir d'une main. On mixe les garnitures et on cale les quantités sur votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    id: 'sw4', famille: 'sandwichs', nom: 'Mini Burgers', img: '/plateau-burgers.webp',
    description: 'Assortiment de mini burgers artisanaux.',
    recettes: ['Cheeseburger', 'Chicken Crispy', 'Steak Végétal'],
  },
  // ── Gourmands ──
  {
    seoTitle: `Plateau de fromages affinés pour vos apéritifs et réceptions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de fromages affinés, accompagné de fruits frais, de fruits secs et de pain artisanal, pose tout de suite le ton d'une réception soignée. Posé au centre de la table, il invite au partage et accompagne parfaitement un afterwork, une soirée partenaires ou un cocktail dînatoire.</p><h2>Une sélection à composer soi-même</h2><p>Fromages affinés variés, fruits frais, fruits secs et pain artisanal pour construire chaque bouchée. On adapte la taille du plateau et l'assortiment à votre effectif et à l'occasion.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    id: 'go1', famille: 'gourmands', nom: 'Fromages Affinés', img: '/plateau-fromages.webp',
    description: 'Sélection de fromages affinés accompagnés de fruits frais, fruits secs et pain artisanal.',
    recettes: [],
  },
  {
    seoTitle: `Plateau de charcuterie halal, sans porc, pour vos apéritifs d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de charcuteries est halal et sans porc : bœuf séché, bresaola, viande des Grisons, dinde fumée, poulet fumé, avec cornichons et condiments. Une planche généreuse qui n'exclut personne autour de la table, parfaite pour un afterwork, une inauguration ou une réception mixant les profils.</p><h2>Une planche généreuse, halal et sans porc</h2><p>Bœuf séché, bresaola, viande des Grisons, dinde fumée, poulet fumé, cornichons et condiments à partager, accompagnés de pain. On ajuste la taille du plateau à votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    id: 'go2', famille: 'gourmands', nom: 'Charcuteries Artisanales', img: '/plateau-charcuterie.webp',
    description: 'Bœuf séché, bresaola, viande des Grisons, dinde fumée, poulet fumé, cornichons & condiments · halal, sans porc.',
    recettes: [],
  },
  {
    seoTitle: `Plateau de saumon fumé et gravlax pour vos réceptions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de saumon réunit saumon fumé et gravlax, blinis, crème citron-aneth, câpres, oignons rouges et citron. Une bouchée nette et élégante qui pose le niveau d'un cocktail ou d'une réception, à monter soi-même au fil du service. Le genre de plateau qui se remarque sur un buffet.</p><h2>Saumon fumé, gravlax et accompagnements</h2><p>Saumon fumé et gravlax, blinis, crème citron-aneth, câpres et oignons rouges pour composer chaque bouchée. On adapte la taille du plateau à votre effectif et à l'occasion.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    id: 'go4', famille: 'gourmands', nom: 'Saumon', img: '/plateau-saumon.webp',
    description: 'Saumon fumé, saumon gravlax, blinis, crème citron-aneth, câpres, oignons rouges & citron.',
    recettes: [],
  },
  // ── Fraîcheur ──
  {
    seoTitle: `Plateau de crudités et dips pour vos apéritifs et pauses d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de crudités et dips joue la fraîcheur et la légèreté : carottes, concombre, radis, chou-fleur, tomates cerises, avec houmous, tzatziki et tapenade. L'option saine d'un apéritif d'équipe, qui équilibre un buffet plus riche et plaît à ceux qui veulent picorer léger.</p><h2>Frais, coloré, à tremper</h2><p>Légumes croquants de saison taillés pour tremper, avec houmous, tzatziki et tapenade. On ajuste les quantités à votre effectif et on complète volontiers un buffet plus copieux.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    id: 'fr1', famille: 'fraicheur', nom: 'Crudités & Dips', img: '/plateau-crudites.webp',
    description: 'Carottes, concombre, radis, chou-fleur, tomates cerises, houmous, tzatziki & tapenade.',
    recettes: [],
  },

  // ── Signature ──
  {
    seoTitle: `Plateau apéritif asiatique pour vos afterworks et réceptions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau d'inspiration asiatique change des classiques de l'apéritif : un assortiment de bouchées parfumées qui apporte du relief à un afterwork ou une réception. Le genre de plateau qui lance la conversation et sort du sandwich habituel.</p><h2>Des bouchées parfumées à partager</h2><p>Assortiment de bouchées d'inspiration asiatique, à picorer du bout des doigts, avec des sauces pour accompagner. On équilibre l'assortiment et on cale les quantités sur votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    id: 'si1', famille: 'signature', nom: 'Asiatique', img: '/plateau-asiatique.webp',
    description: 'Assortiment de bouchées d\'inspiration asiatique.',
    recettes: ['Makis', 'California Rolls', 'Spring Rolls', 'Gyozas', 'Brochettes Yakitori', 'Sauce soja, gingembre & wasabi'],
  },

  // ── Sucré ──
  {
    seoTitle: `Plateau de douceurs pour vos apéritifs et réceptions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de douceurs réunit une sélection de desserts artisanaux pour finir un afterwork ou une réception sur une note sucrée. Mignardises et petites pièces à picorer, il apporte la touche gourmande qui clôt agréablement un buffet salé.</p><h2>Des mignardises à partager</h2><p>Sélection de desserts artisanaux en petites pièces, à picorer sans couvert. On varie l'assortiment et on ajuste les quantités à votre effectif.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    id: 'si4', famille: 'sucre', nom: 'Douceurs', img: '/plateau-douceurs.webp',
    description: 'Sélection de desserts artisanaux.',
    recettes: ['Cookies Signature', 'Brownies', 'Madeleines', 'Tartelettes', 'Mignardises', 'Fruits frais'],
  },
  {
    seoTitle: `Plateau de fruits frais découpés pour vos apéritifs et pauses d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de fruits frais de saison, découpés et dressés, apporte fraîcheur et couleur à un apéritif ou une pause d'équipe. Plus pratique que les fruits entiers pour un buffet, il se pose au centre de la table et se sert sans effort, en complément d'un plateau plus riche.</p><h2>Des fruits de saison, prêts à partager</h2><p>Sélection de fruits frais de saison découpés, dressés pour se servir facilement. On adapte la taille du plateau à votre effectif et à l'occasion.</p><h2>Commander votre plateau à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    id: 'fr3', famille: 'sucre', nom: 'Fruits Frais', img: '/plateau-fruits.webp',
    description: 'Sélection de fruits frais de saison découpés.',
    recettes: [],
  },
]

/* ─── Carte plateau ──────────────────────────────────────────────── */

function PlateauCard({ produit }) {
  const [hovered, setHovered] = useState(false)
  const catColor = CATEGORIE_COLORS[produit.famille] ?? '#6E675F'
  const catLabel = FILTRES.find(f => f.key === produit.famille)?.label ?? ''
  return (
    <Link
      href={`/creations/plateaux-aperitifs/${produit.id}`}
      className="pa-card"
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
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', background: '#F8F5EF', overflow: 'hidden' }}>
        <Image fill src={produit.img}
          alt={`Plateau ${produit.nom} à partager, traiteur L'Écrin, Paris & Île-de-France`}
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
        <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, lineHeight: 1.2, color: hovered ? '#E0A126' : '#111111', marginBottom: '7px', transition: 'color 0.25s ease' }}>
          Plateau {produit.nom}
        </h3>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: catColor, marginBottom: '10px' }}>
          {catLabel}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.55, color: '#6E675F', flex: 1 }}>
          {produit.description}
        </p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: '#9B9590', marginTop: '14px' }}>
          À partager · sur devis
        </p>
      </div>
    </Link>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function PlateauxAperitifs() {
  const [activeFiltre, setActiveFiltre] = useState('tous')
  const [sortLabel, setSortLabel] = useState('En vedette')

  const famillesDispo = new Set(PLATEAUX.map(p => p.famille))
  const filtresDispo = FILTRES.filter(f => f.key === 'tous' || famillesDispo.has(f.key))

  const plateauxFiltres = PLATEAUX.filter(p =>
    activeFiltre === 'tous' ? true : p.famille === activeFiltre
  )
  const plateauxAffiches = sortItems(plateauxFiltres, sortLabel)

  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero ── */}
        <div className="pa-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="pa-hero" style={{ position: 'relative', width: '100%', height: '58vh', minHeight: '440px', overflow: 'hidden' }}>
            <Image fill priority sizes="100vw" src={HERO.hero} alt="Plateaux apéritifs L'Écrin" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="pa-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '640px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  Cocktail
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

        <CategoryTabs sort={sortLabel} onSort={setSortLabel} count={plateauxAffiches.length} sorts={['En vedette', 'Nouveautés']} />

        {/* ── Corps : familles à gauche + grille 3 colonnes ── */}
        <div className="pa-shell pa-body" style={{ maxWidth: '1440px', margin: '0 auto', padding: '32px 72px 96px', display: 'grid', gridTemplateColumns: '178px 1fr', gap: '52px', alignItems: 'start' }}>

          <aside className="pa-filters" style={{ position: 'sticky', top: '104px' }}>
            <p className="pa-filters-label" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9B9590', marginBottom: '16px' }}>
              Familles
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

          <div className="pa-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 24px' }}>
            {plateauxAffiches.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 90}>
                <PlateauCard produit={p} />
              </Reveal>
            ))}
          </div>
        </div>

      </main>

      <CategoryClosing
        eyebrow="Pensé pour vos afterworks"
        title={"L'apéritif qui fédère.\nZéro logistique pour vous."}
        body="Un projet livré, une recrue à fêter, une fin de semaine à marquer : nos plateaux apéritifs arrivent prêts à poser sur la table. Généreux, artisanaux, pensés pour le partage, vous n'avez plus qu'à trinquer."
        seoArticle={SEO_ARTICLE}
      />

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .pa-hero { border-radius: 2px !important; }
        .pa-card { border-radius: 4px !important; }
        @media (max-width: 1100px) {
          .pa-hero-wrapper { padding-left: 48px !important; padding-right: 48px !important; }
          .pa-hero-text    { padding-left: 48px !important; padding-right: 48px !important; }
          .pa-shell { padding-left: 48px !important; padding-right: 48px !important; }
          .pa-body  { grid-template-columns: 150px 1fr !important; gap: 36px !important; }
          .pa-grid  { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 900px) {
          .pa-body { grid-template-columns: 1fr !important; gap: 24px !important; }
          .pa-filters { position: static !important; display: flex; gap: 22px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; border-bottom: 1px solid rgba(17,17,17,0.08); }
          .pa-filters::-webkit-scrollbar { display: none; }
          .pa-filters-label { display: none !important; }
          .pa-filters button { width: auto !important; padding: 0 0 12px !important; box-shadow: none !important; }
        }
        @media (max-width: 768px) {
          .cat-hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.5) 100%) !important; }
          .pa-hero-wrapper { padding: 20px 20px 0 !important; }
          .pa-hero         { min-height: 380px !important; height: 42vh !important; }
          .pa-hero-text    { padding: 0 28px !important; max-width: 100% !important; }
          .pa-shell { padding-left: 24px !important; padding-right: 24px !important; }
          .pa-grid  { grid-template-columns: repeat(2,1fr) !important; gap: 20px 14px !important; }
        }
      ` }} />

      <CategoryJsonLd
        name="Plateaux apéritifs"
        path="/creations/plateaux-aperitifs"
        items={PLATEAUX.map(p => ({ name: p.nom, url: `/creations/plateaux-aperitifs/${p.id}` }))}
      />
      <Footer />
    </>
  )
}
