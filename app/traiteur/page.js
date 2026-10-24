'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { estAnglais, lienLocaliseDans } from '../../lib/i18nBase'
import { useEnSlugs, useEnChemins } from '../../components/EnSlugsProvider'
import { EN_TRAITEUR, EN_DEPT_TOUS } from '../../lib/en/pages/traiteur'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { CITIES } from '../../lib/citiesData'
import { businessNode } from '../../lib/site'
import { FORMULES, LIV } from '../../lib/calculsPrix'
import { MINIMUM, PDJ_DES, PAUSE_DES, LUNCHBOX_DES, PLATEAU_DES, euroFr } from '../../lib/prixEntree'

const DEPARTEMENTS = ['Paris', 'Hauts-de-Seine (92)', 'Yvelines (78)', 'Essonne (91)', 'Val-de-Marne (94)', 'Seine-Saint-Denis (93)']

// FAQ logistique (rendue visible + FAQPage JSON-LD ci-dessous)
const TRAITEUR_FAQ = [
  {
    q: 'Dans quelles villes livrez-vous ?',
    a: `Paris et ${CITIES.length} villes d'Île-de-France (Hauts-de-Seine, Yvelines, Essonne, Val-de-Marne, Seine-Saint-Denis). Livraison dès 6h30 par notre équipe. Si votre commune n'est pas listée, demandez-nous, nous couvrons toute l'Île-de-France.`,
  },
  {
    q: 'Y a-t-il un minimum de commande et des frais de livraison ?',
    a: "Le minimum de commande est de 50 € HT. Un forfait de livraison de 29 € HT s'applique à Paris et dans les communes proches ; les autres zones d'Île-de-France sont chiffrées au devis.",
  },
  {
    q: 'Quel délai faut-il pour commander ?',
    a: "Commande jusqu'à la veille 14h pour une livraison le lendemain matin. Pour une demande de dernière minute, appelez-nous : nous faisons au mieux selon la disponibilité des artisans.",
  },
  {
    q: 'Proposez-vous du halal et des régimes particuliers ?',
    a: "Toute la carte est halal et sans porc par défaut. Nous proposons aussi des options végétariennes, vegan et sans gluten, à préciser lors du devis.",
  },
  {
    q: "Combien coûte un traiteur d'entreprise à Paris ?",
    a: "Un petit-déjeuner démarre à 6,50 € HT par personne en viennoiseries et café (pour 30 personnes), 8 € HT en formule Classique (formule complète sur devis), un goûter à 6 € HT, un plateau repas à 28,90 € HT et un cocktail va de 29,90 à 51,90 € HT selon la formule (8, 12 ou 16 pièces). Le minimum de commande est de 50 € HT et la livraison de 29 € HT à Paris et dans les communes proches.",
  },
  {
    q: "Quel est le meilleur traiteur pour une entreprise à Paris ?",
    a: "Cela dépend du besoin, et cinq critères permettent de comparer : un créneau de livraison précis plutôt qu'une plage horaire, des produits d'artisans nommés, une livraison par une équipe interne plutôt qu'en sous-traitance, de la souplesse sur les effectifs et les délais, et une facturation entreprise avec TVA. Chez L'Écrin Traiteur : livraison dès 6h30 par notre propre équipe, produits d'artisans identifiés, commande jusqu'à la veille 14h.",
  },
  {
    q: "Livrez-vous un petit-déjeuner d'entreprise à Paris ?",
    a: "Oui, du lundi au vendredi, dès 6h30, à Paris et en Île-de-France : viennoiseries, fruits frais, jus et boissons chaudes, à partir de 8 € HT par personne en formule Classique. Commande jusqu'à la veille 14h.",
  },
  {
    q: "Comment obtenir un devis pour un buffet ou un cocktail de 80 personnes ?",
    a: "Demandez un devis en ligne en indiquant l'effectif, la date, l'adresse et le format souhaité : la réponse arrive sous 24h. À partir de 50 personnes, prévenez au moins 48h avant la livraison. À titre de repère, un cocktail de 80 personnes en formule La Réception (12 pièces) revient à 3 272 € HT, hors livraison.",
  },
]

// Repères de prix : une ligne par prestation (mêmes montants que les pages prestation).
const PRIX = [
  { href: '/creations/petits-dejeuners-et-pauses', titre: "Petit-déjeuner d'entreprise", prix: 'Dès 8 € HT', unite: 'par personne', detail: "Viennoiseries, fruits frais, jus et boissons chaudes, livrés dès 6h30" },
  { href: '/creations/pauses-gourmandes', titre: "Goûter d'entreprise", prix: 'Dès 6 € HT', unite: 'par personne', detail: "Une pâtisserie artisanale et une boisson, à l'heure de la pause" },
  { href: '/creations/plateaux-repas', titre: 'Plateau repas', prix: 'Dès 28,90 € HT', unite: 'par personne', detail: 'Entrée, plat, dessert et pain, avec options végétariennes' },
  { href: '/creations/cocktails', titre: 'Cocktail et afterwork', prix: 'De 29,90 à 51,90 € HT', unite: 'par personne', detail: '8, 12 ou 16 pièces salées et sucrées selon la formule' },
]

// Le bon format selon le moment de la journée : liens contextuels vers les pages occasion.
const MOMENTS = [
  { moment: 'Le matin', texte: "Accueil d'équipe, réunion de rentrée, séminaire dès 8h : un petit-déjeuner livré avant l'arrivée des équipes.", liens: [
    { href: '/occasions/petit-dejeuner-entreprise', label: "petit-déjeuner d'entreprise" },
    { href: '/occasions/seminaire-entreprise', label: "séminaire d'entreprise" },
    { href: '/occasions/accueil-client', label: 'accueil client' },
  ] },
  { moment: 'Le midi', texte: "Une réunion qui déborde, une formation, un CODIR : un plateau individuel complet par personne, livré en salle à l'heure fixée.", liens: [
    { href: '/occasions/dejeuner-entreprise', label: "déjeuner d'entreprise" },
    { href: '/occasions/petit-dejeuner-codir', label: 'plateau repas CODIR et COMEX' },
    { href: '/occasions/journee-formation', label: 'journée de formation' },
  ] },
  { moment: "L'après-midi", texte: "La pause de 16h : madeleines, cookies, gâteaux à partager et fruits frais, pour une équipe de cinq comme de cinq cents.", liens: [
    { href: '/occasions/gouter-entreprise', label: "goûter d'entreprise" },
    { href: '/occasions/team-building', label: 'team building' },
  ] },
  { moment: 'Le soir', texte: "Afterwork, pot de départ, lancement de produit ou vœux : 8, 12 ou 16 pièces par personne, livrées prêtes à servir.", liens: [
    { href: '/occasions/afterwork-entreprise', label: 'afterwork' },
    { href: '/occasions/cocktail-entreprise', label: "cocktail d'entreprise" },
  ] },
]

const ETAPES = [
  { titre: 'Demandez un devis', texte: "Effectif, date, adresse et prestation : vous recevez un devis personnalisé sous 24h." },
  { titre: "Commandez jusqu'à la veille 14h", texte: "À partir de 50 personnes ou pour plusieurs sites, prévenez au moins 48h avant." },
  { titre: 'Nous livrons dès 6h30', texte: "Notre équipe livre à l'heure fixée, du lundi au vendredi, et met en place sur demande." },
  { titre: 'Vous recevez une facture entreprise', texte: "Facture avec TVA. Minimum de commande 50 € HT, livraison 29 € HT à Paris et dans les communes proches." },
]

// Guides utiles pour choisir (maillage vers le journal).
const GUIDES = [
  { href: '/journal/choisir-traiteur-entreprise-paris', label: "Comment choisir un traiteur d'entreprise à Paris" },
  { href: '/journal/comparatif-traiteur-entreprise-paris', label: "Comparatif des traiteurs d'entreprise à Paris" },
  { href: '/journal/budget-traiteur-entreprise-paris', label: "Budget d'un traiteur d'entreprise à Paris" },
  { href: '/journal/traiteur-seminaire-entreprise-paris', label: "Organiser la restauration d'un séminaire d'entreprise" },
]

// Prestations : le hub ne liait que les villes, jamais les pages produit.
// Ces liens en font un vrai pivot et couvrent les requêtes « traiteur entreprise + format ».
const PRESTATIONS = [
  {
    href: '/creations/petits-dejeuners-et-pauses',
    titre: "Petit-déjeuner d'entreprise",
    texte: "Viennoiseries pur beurre livrées le matin même par nos boulangers partenaires, corbeille de fruits frais découpés, jus Alain Milliat et café. Livraison dès 6h30, avant l'arrivée des équipes.",
  },
  {
    href: '/creations/plateaux-repas',
    titre: 'Plateaux repas et déjeuners de réunion',
    texte: "Plateaux individuels complets, entrée, plat, dessert et pain, filmés et étiquetés. À partir de 28,90 € HT par personne, options végétariennes sur toutes les collections.",
  },
  {
    href: '/creations/cocktails',
    titre: 'Cocktails, afterworks et réceptions',
    texte: "De 8 à 16 pièces par personne selon le format, dressées et prêtes à poser. De 29,90 à 51,90 € HT par personne, livrées à l'heure de votre événement.",
  },
  {
    href: '/creations/pauses-gourmandes',
    titre: 'Pause Goûter',
    texte: "Madeleines, cookies, cakes et gâteaux à partager pour les pauses de l'après-midi, les séminaires et les moments d'équipe.",
  },
  {
    href: '/creations/animations-culinaires',
    titre: 'Animations culinaires en direct',
    texte: "Atelier crêpes, gaufres, mini burgers, bar à glaces ou barista : une animation préparée devant vos équipes, pour un séminaire ou un événement interne.",
  },
]

// Rattache une ville à son département (le champ region peut porter un suffixe «, La Défense »)
const deptOf = city => DEPARTEMENTS.find(d => city.region.includes(d)) || city.region

// Sépare « Hauts-de-Seine (92) » → { name: 'Hauts-de-Seine', code: '92' }
const parseDept = dept => {
  const m = dept.match(/^(.*?)\s*\((\d+)\)\s*$/)
  return m ? { name: m[1], code: m[2] } : { name: dept, code: null }
}

// Localité mise en avant après le tiret (ex. « La Défense »)
const localityOf = city => (city.region.includes('·') ? city.region.split('·')[1].trim() : null)

export default function TraiteurPage() {
  const [activeRegion, setActiveRegion] = useState('Tous')
  const en = estAnglais(usePathname() || '/')
  const E = en ? EN_TRAITEUR : null
  // Un lien ne part vers /en que si la page anglaise existe (sinon il reste
  // en français : changer de langue en route vaut mieux qu'une 404).
  const slugsEn = useEnSlugs()
  const cheminsEn = useEnChemins()
  const L = (href) => lienLocaliseDans(cheminsEn, href, en ? 'en' : 'fr', slugsEn)
  const nVilles = CITIES.length
  const FAQ = en ? E.faq(nVilles) : TRAITEUR_FAQ
  const BASE_URL = 'https://www.lecrin-traiteur.fr'
  const URL_PAGE = en ? `${BASE_URL}/en/traiteur` : `${BASE_URL}/traiteur`

  const groups = DEPARTEMENTS
    .map(d => ({ dept: d, cities: CITIES.filter(c => deptOf(c) === d) }))
    .filter(g => g.cities.length > 0)

  const visibleGroups = activeRegion === 'Tous' ? groups : groups.filter(g => g.dept === activeRegion)

  return (
    <>
      <Navbar />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero ── */}
        <div className="traiteur-hero" style={{ background: 'var(--bg-secondary)', padding: '90px 72px 78px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
            {en ? E.eyebrow : 'Zone de livraison'}
          </p>
          <span style={{ display: 'block', width: '38px', height: '1px', background: 'var(--accent)', opacity: 0.6, margin: '0 auto 26px' }} />
          <h1 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(36px, 5vw, 68px)', fontWeight: 400, lineHeight: 1.06, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.015em' }}>
            {en ? <>{E.h1a}{' '}<br />{E.h1b}</> : <>Traiteur entreprise Paris{' '}<br />& Île-de-France</>}
          </h1>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 44px' }}>
            {en ? E.heroDesc(nVilles) : `L'Écrin Traiteur livre vos événements d'entreprise, petits-déjeuners, plateaux repas, cocktails et réceptions, dans ${nVilles} villes d'Île-de-France. Artisans sélectionnés, livraison dès 6h30, commande avant 14h la veille.`}
          </p>

          {/* Ligne sobre, points clés séparés par des puces dorées */}
          <div className="traiteur-facts" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 16px' }}>
            {(en ? E.facts(nVilles) : [`${nVilles} villes desservies`, 'Livraison dès 6h30', 'Devis sous 24h']).map((fact, i) => (
              <span key={fact} style={{ display: 'inline-flex', alignItems: 'center', gap: '16px' }}>
                {i > 0 && <span style={{ color: 'var(--accent-deep)', fontSize: '12px', lineHeight: 1 }}>·</span>}
                <span style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '0.04em', color: 'var(--text-secondary)' }}>
                  {fact}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Bloc-réponse : le service en clair (SEO + GEO) ── */}
        <section className="traiteur-intro" style={{ maxWidth: '760px', margin: '0 auto', padding: '72px 40px 8px' }}>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '22px' }}>
            {en ? E.intro1(nVilles) : `L'Écrin Traiteur livre petits-déjeuners, plateaux repas, pauses gourmandes, cocktails et buffets directement dans vos bureaux, à Paris et dans ${nVilles} villes d'Île-de-France. Chaque commande est préparée à partir de produits d'artisans identifiés, comme les madeleines de Mado Paris, les yaourts de la Ferme de Viltain ou les jus d'Alain Milliat, et livrée par notre propre équipe, jamais en sous-traitance.`}
          </p>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '22px' }}>
            {en ? <>{E.intro2a}<strong style={{ fontWeight: 500 }}>{E.intro2mini}</strong>{E.intro2b}<strong style={{ fontWeight: 500 }}>{E.intro2liv}</strong>{E.intro2c}</>
              : <>Vous commandez jusqu'à la veille 14h pour une livraison dès 6h30. Le minimum de commande est de <strong style={{ fontWeight: 500 }}>{euroFr(MINIMUM)} HT</strong>, avec un forfait de livraison de <strong style={{ fontWeight: 500 }}>{euroFr(LIV)} HT</strong> à Paris et dans les communes proches. Vous recevez une facture entreprise avec TVA et un devis personnalisé sous 24h.</>}
          </p>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)' }}>
            {en ? E.intro3 : 'Toute la carte est halal et sans porc par défaut, avec des options végétariennes, vegan et sans gluten sur demande.'}
          </p>
                  <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', margin: '48px 0 18px' }}>
            {en ? E.prixTitre : "Combien coûte un traiteur d'entreprise à Paris ?"}
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', color: 'var(--text-primary)' }}>
              <thead>
                <tr>
                  {(en ? E.prixCols : ['Prestation', 'Prix HT par personne', 'Ce qui est compris']).map(t => (
                    <th key={t} style={{ textAlign: 'left', padding: '12px 10px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', borderBottom: '1px solid rgba(17,17,17,0.35)' }}>{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(en ? E.prixRows : [
                  ['Petit-déjeuner', `dès ${euroFr(PDJ_DES)}`, 'Viennoiseries pur beurre, jus Alain Milliat, café, fruits frais'],
                  ['Pause goûter', `dès ${euroFr(PAUSE_DES)}`, 'Une boisson et une pâtisserie'],
                  ['Lunch box', `dès ${euroFr(LUNCHBOX_DES)}`, 'Déjeuner individuel prêt à manger'],
                  ['Plateau repas', `dès ${euroFr(PLATEAU_DES)}`, 'Entrée, plat, dessert et pain'],
                  ['Cocktail 8 pièces', euroFr(FORMULES.invitation.prix), "L'Invitation : apéritif, afterwork"],
                  ['Cocktail 12 pièces', euroFr(FORMULES.reception.prix), 'La Réception : déjeunatoire, soirée partenaires'],
                  ['Cocktail 16 pièces', euroFr(FORMULES.celebration.prix), 'La Célébration : cocktail dînatoire'],
                ]).map(([a, b, c]) => (
                  <tr key={a}>
                    <td style={{ padding: '12px 10px', borderBottom: '1px solid rgba(17,17,17,0.1)', fontWeight: 500 }}>{a}</td>
                    <td style={{ padding: '12px 10px', borderBottom: '1px solid rgba(17,17,17,0.1)', whiteSpace: 'nowrap' }}>{b}</td>
                    <td style={{ padding: '12px 10px', borderBottom: '1px solid rgba(17,17,17,0.1)' }}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', marginTop: '14px' }}>
            {en ? E.prixNote : `Prix 2026, hors taxes. Livraison ${euroFr(LIV)} HT à Paris et dans les communes proches, minimum de commande ${euroFr(MINIMUM)} HT. Devis détaillé sous 24h.`}
          </p>
          {/* Section halal, reprise de l'ancienne page anglaise /corporate-catering-paris (fusionnée le 24/10/2026) */}
          {en && (
            <>
              <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', margin: '48px 0 18px' }}>
                {E.halalTitre}
              </h2>
              <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '16px' }}>{E.halal1}</p>
              <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '8px' }}>
                {E.halal2a}<a href={L('/traiteur-halal')} style={{ color: 'var(--text-primary)' }}>{E.halal2lien}</a>{E.halal2b}
              </p>
            </>
          )}
        </section>

        {/* ── Prestations : hub → pages produit ── */}
        <section className="traiteur-prestations" style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 40px 8px' }}>
          <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '28px' }}>
            {en ? E.prestationsTitre : "Nos prestations de traiteur d'entreprise"}
          </h2>
          {(en ? E.prestations : PRESTATIONS).map((p, i) => (
            <a
              key={p.href}
              href={L(p.href)}
              className="presta-row"
              style={{
                display: 'block', textDecoration: 'none', padding: '22px 0',
                borderTop: i === 0 ? '1px solid rgba(17,17,17,0.08)' : '1px solid rgba(17,17,17,0.08)',
              }}
            >
              <h3 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '8px' }}>
                {p.titre}
              </h3>
              <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)', margin: 0 }}>
                {p.texte}
              </p>
            </a>
          ))}
        </section>

        {/* ── Repères de prix ── */}
        <section className="traiteur-prix" style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 40px 8px' }}>
          <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '18px' }}>
            {en ? E.reperesTitre : 'Nos prix par prestation'}
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '24px' }}>
            {en ? E.reperesIntro : `Le prix se compte par personne et dépend de la prestation. À cela s'ajoutent un minimum de commande de ${euroFr(MINIMUM)} HT et une livraison à ${euroFr(LIV)} HT à Paris et dans les communes proches. Le devis, personnalisé, est envoyé sous 24h.`}
          </p>
          {(en ? E.reperes : PRIX).map((p, i) => (
            <a
              key={p.href}
              href={L(p.href)}
              className="prix-row"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '24px', textDecoration: 'none', padding: '18px 0', borderTop: '1px solid rgba(17,17,17,0.08)', borderBottom: i === (en ? E.reperes : PRIX).length - 1 ? '1px solid rgba(17,17,17,0.08)' : 'none' }}
            >
              <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '19px', color: 'var(--text-primary)' }}>{p.titre}</span>
                <span style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{p.detail}</span>
              </span>
              <span style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', color: 'var(--text-primary)', textAlign: 'right', whiteSpace: 'nowrap' }}>
                {p.prix}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)' }}>{p.unite}</span>
              </span>
            </a>
          ))}
        </section>

        {/* ── Le bon format selon le moment ── */}
        <section className="traiteur-moments" style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 40px 8px' }}>
          <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '24px' }}>
            {en ? E.momentsTitre : 'Quel traiteur pour quel moment de la journée ?'}
          </h2>
          {(en ? E.moments : MOMENTS).map((m, i) => (
            <div key={m.moment} style={{ padding: '20px 0', borderTop: '1px solid rgba(17,17,17,0.08)', borderBottom: i === (en ? E.moments : MOMENTS).length - 1 ? '1px solid rgba(17,17,17,0.08)' : 'none' }}>
              <h3 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '8px' }}>
                {m.moment}
              </h3>
              <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                {m.texte}
              </p>
              <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {en ? E.momentsVoir : 'Voir :'}{' '}
                {m.liens.map((l, k) => (
                  <span key={l.href}>
                    {k > 0 && ', '}
                    <a href={L(l.href)} style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{l.label}</a>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </section>

        {/* ── Comment ça se passe ── */}
        <section className="traiteur-etapes" style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 40px 8px' }}>
          <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '24px' }}>
            {en ? E.etapesTitre : 'Commander en quatre étapes'}
          </h2>
          {(en ? E.etapes : ETAPES).map((e, i) => (
            <div key={e.titre} style={{ display: 'flex', gap: '20px', padding: '16px 0', borderTop: '1px solid rgba(17,17,17,0.08)' }}>
              <span style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.16em', color: 'var(--accent-deep)', paddingTop: '4px', flexShrink: 0 }}>0{i + 1}</span>
              <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)', margin: 0 }}>
                <strong style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{e.titre}.</strong> {e.texte}
              </p>
            </div>
          ))}
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', marginTop: '20px' }}>
            {en
              ? <>{E.etapesNote.a}<a href={L('/traiteur-halal')} style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{E.etapesNote.halal}</a>{E.etapesNote.b}<a href={L('/traiteur-eco-responsable')} style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{E.etapesNote.eco}</a>{E.etapesNote.c}</>
              : <>Toute la carte est <a href="/traiteur-halal" style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>halal et sans porc</a> par défaut. Notre démarche sur les contenants, la reprise du matériel et les produits est détaillée sur la page{' '}
            <a href="/traiteur-eco-responsable" style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>traiteur éco-responsable</a>.</>}
          </p>
        </section>

        {/* ── Bloc Paris / IDF ── */}
        <section className="traiteur-zone" style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 40px 8px' }}>
          <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '22px' }}>
            {en ? E.zoneTitre : "Un traiteur d'entreprise qui connaît le terrain"}
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '18px' }}>
            {en ? E.zone1 : "Livrer un petit-déjeuner à 8h dans une tour de La Défense et le livrer dans un immeuble haussmannien du 8e arrondissement ne demandent pas la même préparation. Quai de livraison en sous-sol, badge visiteur déclaré la veille, accueil filtré, stationnement impossible : ce sont ces détails qui font qu'une commande arrive à l'heure ou après la réunion."}
          </p>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '18px' }}>
            {en ? E.zone2 : "Nous livrons avec notre propre équipe, jamais en sous-traitance. C'est ce qui nous permet de tenir un créneau précis plutôt qu'une plage de deux heures, et de connaître les accès de nos secteurs les plus demandés : Boulogne-Billancourt, où se trouve notre atelier, La Défense côté Puteaux, Neuilly-sur-Seine, Levallois et les Hauts-de-Seine nord."}
          </p>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            {en
              ? <>{E.zone3a}<a href={L('/devis')} style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{E.zone3lien}</a>{E.zone3b}</>
              : <>Choisissez votre commune ci-dessous pour les détails de livraison, ou <a href="/devis" style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>demandez un devis</a> : vous l'avez sous 24h.</>}
          </p>
        </section>

        {/* ── Filtre région, onglets soulignés ── */}
        <div style={{ borderBottom: '1px solid rgba(17,17,17,0.08)', background: '#FFFFFF', position: 'sticky', top: 'var(--header-h)', zIndex: 10 }}>
          <div className="traiteur-filter" style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 72px', display: 'flex', alignItems: 'stretch', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Tous', ...DEPARTEMENTS].map(r => {
              const isActive = activeRegion === r
              const label = r === 'Tous' ? (en ? EN_DEPT_TOUS : 'Tous') : parseDept(r).name
              return (
                <button
                  key={r}
                  onClick={() => setActiveRegion(r)}
                  style={{
                    fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: isActive ? 'var(--text-primary)' : 'rgba(17,17,17,0.4)',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    padding: '20px 0', position: 'relative',
                    borderBottom: `2px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
                    marginBottom: '-1px', transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-primary)' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(17,17,17,0.4)' }}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Index des villes par département ── */}
        <div className="traiteur-index" style={{ maxWidth: '1160px', margin: '0 auto', padding: '72px 72px 40px' }}>
          {visibleGroups.map(({ dept, cities }) => {
            const { name, code } = parseDept(dept)
            return (
              <section key={dept} className="dept-group" style={{ marginBottom: '64px' }}>

                {/* En-tête département : nom + filet + compteur */}
                <div className="dept-head" style={{ display: 'flex', alignItems: 'baseline', gap: '24px', marginBottom: '30px' }}>
                  <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1, whiteSpace: 'nowrap' }}>
                    {name}
                    {code && <span style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', fontWeight: 400, color: 'var(--accent-deep)', marginLeft: '10px', letterSpacing: '0.02em' }}>{code}</span>}
                  </h2>
                  <span style={{ flex: 1, height: '1px', background: 'rgba(17,17,17,0.12)' }} />
                  <span style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.38)', whiteSpace: 'nowrap' }}>
                    {cities.length} {en ? (cities.length > 1 ? E.villesPlusieurs : E.villesUn) : (cities.length > 1 ? 'villes' : 'ville')}
                  </span>
                </div>

                {/* Grille de villes, cartes hairline */}
                <div className="dept-cities" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '48px' }}>
                  {cities.map(city => {
                    const locality = localityOf(city)
                    return (
                      <a
                        key={city.slug}
                        href={L(`/traiteur/${city.slug}`)}
                        className="city-row"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          textDecoration: 'none', padding: '18px 2px',
                          borderBottom: '1px solid rgba(17,17,17,0.09)',
                          transition: 'border-color 0.25s ease',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderBottomColor = 'var(--accent)'
                          e.currentTarget.querySelector('.city-name').style.color = 'var(--accent)'
                          e.currentTarget.querySelector('.city-arrow').style.opacity = '1'
                          e.currentTarget.querySelector('.city-arrow').style.transform = 'translateX(0)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderBottomColor = 'rgba(17,17,17,0.09)'
                          e.currentTarget.querySelector('.city-name').style.color = 'var(--text-primary)'
                          e.currentTarget.querySelector('.city-arrow').style.opacity = '0'
                          e.currentTarget.querySelector('.city-arrow').style.transform = 'translateX(-6px)'
                        }}
                      >
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <span className="city-name" style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '19px', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.15, transition: 'color 0.25s ease' }}>
                            {city.name}
                          </span>
                          {locality && (
                            <span style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontStyle: 'italic', fontSize: '13px', color: 'rgba(17,17,17,0.42)', lineHeight: 1.2 }}>
                              {locality}
                            </span>
                          )}
                        </span>
                        <span className="city-arrow" style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', color: 'var(--accent-deep)', opacity: 0, transform: 'translateX(-6px)', transition: 'opacity 0.25s ease, transform 0.25s ease', flexShrink: 0, marginLeft: '12px' }}>
                          →
                        </span>
                      </a>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        {/* ── Guides pour choisir ── */}
        <section className="traiteur-guides" style={{ maxWidth: '760px', margin: '0 auto', padding: '8px 40px 8px' }}>
          <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, color: 'var(--text-primary)', margin: '40px 0 20px' }}>
            {en ? E.guidesTitre : 'Nos guides pour bien choisir'}
          </h2>
          <ul style={{ margin: 0, paddingLeft: '22px', fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
            {(en ? E.guides : GUIDES).map(g => (
              <li key={g.href}>
                <a href={L(g.href)} style={{ color: 'var(--accent-deep)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{g.label}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* ── FAQ logistique ── */}
        <section className="traiteur-faq" style={{ maxWidth: '760px', margin: '0 auto', padding: '24px 40px 8px', borderTop: '1px solid rgba(17,17,17,0.08)' }}>
          <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, color: 'var(--text-primary)', margin: '48px 0 28px' }}>
            {en ? E.faqTitre : 'Questions fréquentes'}
          </h2>
          {FAQ.map((f, i) => (
            <div key={i} style={{ padding: '22px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(17,17,17,0.08)' }}>
              <h3 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '19px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px' }}>
                {f.q}
              </h3>
              <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                {f.a}
              </p>
            </div>
          ))}
        </section>

        {/* ── CTA ── */}
        <div style={{ textAlign: 'center', padding: '48px 40px 96px' }}>
          <div style={{ maxWidth: '560px', margin: '0 auto', paddingTop: '32px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
            <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginTop: '64px', marginBottom: '16px' }}>
              {en ? E.ctaEyebrow : "Votre ville n'est pas listée ?"}
            </p>
            <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '28px' }}>
              {en ? E.ctaTexte : "Nous livrons dans toute l'Île-de-France. Contactez-nous pour vérifier la disponibilité dans votre commune."}
            </p>
            <a
              href={L('/devis')}
              style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1A1A18', background: 'var(--accent)', padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {en ? E.ctaBouton : 'Obtenir un devis →'}
            </a>
          </div>
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) and (min-width: 769px) {
          .traiteur-hero { padding: 68px 40px 60px !important; }
          .traiteur-filter { padding: 0 40px !important; gap: 22px !important; }
          .traiteur-index { padding: 60px 40px 32px !important; }
          .dept-cities { grid-template-columns: repeat(2, 1fr) !important; column-gap: 36px !important; }
        }
        @media (max-width: 768px) {
          .traiteur-hero { padding: 56px 24px 48px !important; }
          .traiteur-intro { padding: 48px 24px 8px !important; }
          .traiteur-faq { padding: 24px 24px 8px !important; }
          .traiteur-prix, .traiteur-moments, .traiteur-etapes, .traiteur-guides { padding-left: 24px !important; padding-right: 24px !important; }
          .prix-row { flex-direction: column !important; gap: 6px !important; }
          .prix-row > span:last-child { text-align: left !important; }
          .traiteur-filter { padding: 0 16px !important; gap: 18px !important; overflow-x: auto; justify-content: flex-start !important; }
          .traiteur-filter button { padding: 16px 0 !important; white-space: nowrap; }
          .traiteur-index { padding: 48px 24px 24px !important; }
          .dept-cities { grid-template-columns: 1fr !important; }
          .dept-head { gap: 16px !important; }
        }
      ` }} />

      <BreadcrumbJsonLd items={en ? E.breadcrumb : [
        { name: 'Accueil', path: '' },
        { name: 'Traiteur en entreprise', path: '/traiteur' },
      ]} />

      {/* Service + FAQPage, rattachés à l'entité #business consolidée */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': `${URL_PAGE}#service`,
              'name': en ? E.serviceName : "Traiteur d'entreprise Paris & Île-de-France",
              'serviceType': en ? E.serviceType : "Traiteur d'entreprise",
              'provider': { '@id': `${BASE_URL}/#business` },
              'areaServed': { '@type': 'State', 'name': 'Île-de-France' },
              'url': URL_PAGE,
              'inLanguage': en ? 'en' : 'fr',
              'description': en ? E.serviceDesc : "Livraison de petits-déjeuners, plateaux repas, pauses gourmandes, cocktails et buffets en entreprise, à Paris et en Île-de-France. Produits d'artisans, halal et sans porc, livraison dès 6h30.",
            },
            {
              '@type': 'FAQPage',
              '@id': `${URL_PAGE}#faq`,
              'inLanguage': en ? 'en' : 'fr',
              'mainEntity': FAQ.map(f => ({
                '@type': 'Question',
                'name': f.q,
                'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
              })),
            },
            businessNode(),
          ],
        }) }}
      />

      <Footer />
    </>
  )
}
