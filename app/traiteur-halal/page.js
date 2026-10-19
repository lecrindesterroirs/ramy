'use client'

import { usePathname } from 'next/navigation'
import { estAnglais, reecrireLiensEnDans } from '../../lib/i18nBase'
import { EN_HALAL_INDEX } from '../../lib/en/pages/halal'
import { useEnSlugs, useEnChemins } from '../../components/EnSlugsProvider'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import LogosSection from '../../components/LogosSection'
import RelatedLinks from '../../components/RelatedLinks'
import CategoryClosing from '../../components/CategoryClosing'
import ParallaxImage from '../../components/ParallaxImage'
import { businessNode, BUSINESS_ID } from '../../lib/site'
import { exemplesHalalFr, exemplesHalalEn, EXEMPLES, eurFr } from '../../lib/exemplesChiffres'

const BASE = 'https://www.lecrin-traiteur.fr'

/* Les 3 régimes couverts, 100% conformes à l'offre réelle. */
const REGIMES = [
  {
    label: 'Notre standard',
    titre: 'Tout halal, sans porc',
    desc: "Toute notre gamme est halal et sans porc, pas une option à part, mais notre référence par défaut. Vous commandez l'esprit tranquille pour toute votre équipe.",
  },
  {
    label: 'Pour chacun',
    titre: 'Végétarien & vegan',
    desc: "Petits-déjeuners, plateaux repas et buffets se déclinent en versions végétariennes et vegan, pensées pour être aussi généreuses que le reste de la carte.",
  },
  {
    label: 'Sur demande',
    titre: 'Sans gluten',
    desc: "Nous réalisons des adaptations sans gluten sur demande, pour que les contraintes alimentaires de vos collaborateurs ne soient jamais un frein.",
  },
]

const PRESTATIONS = [
  {
    label: 'Petits-Déjeuners & Pauses',
    desc: 'Viennoiseries, madeleines, corbeilles de fruits et boissons, halal, livrés dès 6h30.',
    href: '/creations/petits-dejeuners-et-pauses',
    img: '/creations-1.webp',
  },
  {
    label: 'Plateaux Repas',
    desc: 'Menus individuels complets pour vos déjeuners de travail, halal et sans porc.',
    href: '/creations/plateaux-repas',
    img: '/creations-4.webp',
  },
  {
    label: 'Cocktails & Buffets',
    desc: 'Pièces salées et sucrées pour vos réceptions, avec options végé, vegan et sans gluten.',
    href: '/creations/cocktails',
    img: '/creations-3.webp',
  },
]

/* Sous-pages /traiteur-halal/[slug] (lib/halalPagesData.js) : ancres descriptives. */
const SOUS_PAGES = [
  {
    href: '/traiteur-halal/paris',
    label: 'Traiteur halal à Paris',
    desc: "Petit-déjeuner dès 8 € HT, plateaux repas, cocktail : toute la carte halal et sans porc, livrée à Paris et en Île-de-France dès 6h30.",
  },
  {
    href: '/traiteur-halal/buffet-entreprise',
    label: "Buffet halal d'entreprise",
    desc: "Cocktail de 8, 12 ou 16 pièces dès 29,90 € HT par personne, ou menu à partager : un seul buffet pour tous les invités.",
  },
  {
    href: '/traiteur-halal/plateaux-repas',
    label: "Plateau repas halal d'entreprise",
    desc: "Six plateaux individuels, entrée, plat et dessert, de 28,90 à 30,90 € HT par personne, sans porc et sans alcool.",
  },
]

const FAQ = [
  {
    q: "Votre traiteur d'entreprise est-il halal ?",
    a: "Oui. Toute notre gamme est halal et sans porc, par défaut, c'est notre standard, pas une option à part. Vous pouvez commander l'esprit tranquille pour l'ensemble de vos collaborateurs.",
  },
  {
    q: 'Proposez-vous des options végétariennes, vegan et sans gluten ?',
    a: "Oui. Nos petits-déjeuners, plateaux repas et buffets se déclinent en versions végétariennes et vegan, et nous réalisons des adaptations sans gluten sur demande.",
  },
  {
    q: 'Livrez-vous dans les bureaux à Paris et en Île-de-France ?',
    a: "Oui, dès 6h30 et du lundi au vendredi, à Paris et dans toute l'Île-de-France, avec une équipe interne formée à nos standards.",
  },
  {
    q: 'Pour combien de personnes pouvez-vous livrer ?',
    a: "De 10 à 300 personnes et plus, petites équipes comme grands séminaires. Chaque commande est préparée le matin même.",
  },
  {
    q: 'Êtes-vous certifié halal ?',
    a: "Non, nous ne revendiquons pas de certification halal délivrée par un organisme. Toute la carte est halal et sans porc par défaut, sans alcool dans les recettes : c'est une offre halal-friendly, construite avec nos artisans. Pour les viandes, nous pouvons vous renseigner sur l'origine au moment du devis.",
  },
  {
    q: 'Le halal coûte-t-il plus cher chez L\'Écrin Traiteur ?',
    a: `Non. Toute la carte est halal et sans porc, au même prix que n'importe quelle commande : il n'y a pas de carte halal à part ni de supplément. Par exemple, un petit-déjeuner complet pour 20 personnes revient à ${eurFr(EXEMPLES[0].total)} HT livré, et des plateaux repas pour 20 personnes à ${eurFr(EXEMPLES[2].total)} HT livrés.`,
  },
  {
    q: 'Combien coûte un plateau repas halal ?',
    a: "Les plateaux repas démarrent à 28,90 € HT par personne, entrée, plat, dessert et pain compris, tous halal et sans porc. La livraison est à 29 € HT à Paris et dans les communes proches, minimum de commande 50 € HT.",
  },
  {
    q: 'Proposez-vous un cocktail ou un buffet halal pour une réception ?',
    a: "Oui. Les formules cocktail sont halal et sans porc par défaut : 8 pièces à 29,90 € HT par personne, 12 pièces à 40,90 € HT, 16 pièces à 51,90 € HT. Pour 50 personnes, comptez de 1 495 à 2 595 € HT hors livraison.",
  },
  {
    q: 'Y a-t-il de l\'alcool dans vos recettes ?',
    a: "Non. Nos recettes sont sans alcool et nous ne livrons que des boissons sans alcool : jus Alain Milliat, eaux et, pour trinquer, un Chardonnay Blanc de Blancs 0 %.",
  },
]

export default function TraiteurHalal() {
  const en = estAnglais(usePathname() || '/')
  const slugsEn = useEnSlugs()
  const chemins = useEnChemins()
  const E = en ? EN_HALAL_INDEX : null
  const lien = (href) => (en ? `/en${href}` : href)
  const REGIMES_L = en ? E.regimes : REGIMES
  const PRESTATIONS_L = en ? PRESTATIONS.map((p, i) => ({ ...p, ...E.prestations[i] })) : PRESTATIONS
  const SOUS_PAGES_L = en ? E.sousPages : SOUS_PAGES
  const FAQ_L = en ? E.faq : FAQ
  // Service rattaché à l'entité #business (même @id partout), pas un second
  // LocalBusiness : évite une entité dupliquée côté Google & IA/GEO.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${BASE}/traiteur-halal#service`,
        name: "Traiteur d'entreprise halal et sans porc",
        serviceType: "Traiteur d'entreprise",
        description: "Traiteur d'entreprise halal et sans porc à Paris et en Île-de-France, avec options végétariennes, vegan et sans gluten. Petits-déjeuners, plateaux repas et buffets livrés dès 6h30.",
        url: `${BASE}/traiteur-halal`,
        areaServed: { '@type': 'State', name: 'Île-de-France' },
        provider: { '@id': BUSINESS_ID },
      },
      businessNode(),
    ],
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Traiteur halal & inclusif', item: `${BASE}/traiteur-halal` },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_L.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const ARGS = en ? E.args : [
    { icon: 'quality',  titre: 'Halal par défaut',      desc: "Toute la gamme est halal et sans porc, pas une carte à part, mais notre standard sur chaque prestation." },
    { icon: 'custom',   titre: 'Options claires',        desc: "Végétarien, vegan, sans gluten : chaque contrainte alimentaire est prise en compte, sans supplément d'effort pour vous." },
    { icon: 'delivery', titre: 'Livraison dès 6h30',     desc: "Livré et installé par notre équipe à Paris et en Île-de-France, chaque matin en semaine." },
    { icon: 'support',  titre: 'Interlocuteur dédié',    desc: "Un contact unique pour composer vos menus, de 10 à 300 personnes, du devis à la livraison." },
  ]

  // Exemples chiffrés (lib/exemplesChiffres.js) glissés sous le tableau des prix, dans les deux langues.
  const MARQUE_EN = 'with a minimum order of €50 excl. VAT.</p>'
  const articleEn = en ? (E.seoArticle.includes(MARQUE_EN) ? E.seoArticle.replace(MARQUE_EN, MARQUE_EN + exemplesHalalEn()) : E.seoArticle + exemplesHalalEn()) : ''
  const seoArticle = en ? reecrireLiensEnDans(chemins, articleEn, slugsEn) : `
    <h2>Un traiteur d'entreprise halal, pensé pour toute l'équipe</h2>
    <p>Dans une entreprise, une pause gourmande ne devrait jamais exclure personne. Chez <strong>L'Écrin Traiteur</strong>, l'ensemble de notre gamme est <strong>halal et sans porc par défaut</strong> : petits-déjeuners, plateaux repas, cocktails et buffets. Ce n'est pas une option cachée dans un coin de la carte, c'est notre référence sur chaque commande livrée à Paris et en Île-de-France.</p>

    <h2>Ce que vous commandez en halal, et à quel prix</h2>
    <div class="tbl-wrap"><table>
      <thead><tr><th>Prestation</th><th>Ce que vous recevez</th><th>Prix HT</th></tr></thead>
      <tbody>
        <tr><td><strong><a href="/creations/petits-dejeuners-et-pauses">Petit-déjeuner d'entreprise</a></strong></td><td>Viennoiseries, madeleines, fruits frais, jus, boissons chaudes</td><td>Dès 8 € par personne</td></tr>
        <tr><td><strong><a href="/creations/pauses-gourmandes">Goûter et pause gourmande</a></strong></td><td>Madeleines, cookies, cakes, brochettes de fruits</td><td>Dès 6 € par personne</td></tr>
        <tr><td><strong><a href="/creations/plateaux-repas">Plateau repas</a></strong></td><td>Entrée, plat, dessert et pain, en versions poulet, saumon ou végétarienne</td><td>Dès 28,90 € par personne</td></tr>
        <tr><td><strong><a href="/creations/cocktails">Cocktail, afterwork, réception</a></strong></td><td>8, 12 ou 16 pièces salées et sucrées par personne</td><td>De 29,90 à 51,90 € par personne</td></tr>
      </tbody>
    </table></div>
    <p>La livraison est à 29 € HT à Paris et dans les communes proches, le minimum de commande est de 50 € HT, et la facture est une facture entreprise avec TVA.</p>
${exemplesHalalFr()}

    <h2>Halal, sans porc, sans alcool : ce que nous affirmons</h2>
    <p>Toute la carte est halal et sans porc par défaut, et nos recettes ne contiennent pas d'alcool. Nous ne revendiquons pas de certification halal délivrée par un organisme : notre offre est halal-friendly, construite avec nos artisans. Si l'origine d'une viande compte pour votre équipe, dites-le au moment du devis, nous pouvons vous renseigner sur le sourcing avant de valider la commande. Le détail est dans notre guide <a href="/journal/traiteur-halal-entreprise-paris">traiteur halal-friendly à Paris : options sans porc et sans alcool</a>.</p>

    <h2>Végétarien, vegan, sans gluten : chacun trouve sa place</h2>
    <p>Au-delà du halal, nous déclinons nos prestations en versions <strong>végétariennes et vegan</strong>, et réalisons des <strong>adaptations sans gluten sur demande</strong>. Vos collaborateurs, quelles que soient leurs habitudes alimentaires, partagent le même moment autour d'une table où personne n'est mis de côté.</p>
    <ul>
      <li><strong>Plateaux repas :</strong> La Solaire, La Provençale et La Potagère sont végétariens. Comptez environ un tiers de plateaux végétariens sur une équipe dont vous ne connaissez pas les préférences.</li>
      <li><strong>Pauses :</strong> les brochettes et les corbeilles de fruits frais sont vegan et sans gluten, les compotes sont vegan, et le banana bread est sans gluten.</li>
      <li><strong>Précision au devis :</strong> indiquez le nombre de personnes concernées par chaque régime, nous répartissons la commande en conséquence. Voir aussi nos guides <a href="/journal/traiteur-vegan-vegetarien-entreprise-paris">traiteur végétarien et vegan en entreprise</a> et <a href="/journal/traiteur-sans-gluten-entreprise-paris">traiteur sans gluten en entreprise</a>.</li>
    </ul>

    <h2>Halal pour un séminaire, un déjeuner ou un cocktail</h2>
    <ul>
      <li><strong>Séminaire :</strong> sur une journée qui réunit plusieurs équipes et des intervenants extérieurs, la carte halal par défaut évite de recenser les contraintes de chacun. Voir <a href="/occasions/seminaire-entreprise">traiteur séminaire d'entreprise</a>.</li>
      <li><strong>Déjeuner de réunion :</strong> un plateau individuel complet par personne, halal et sans porc. Voir <a href="/occasions/dejeuner-entreprise">déjeuner d'entreprise</a>.</li>
      <li><strong>Cocktail et afterwork :</strong> des pièces salées et sucrées sans porc ni alcool, avec des boissons sans alcool dans la même commande. Voir <a href="/occasions/cocktail-entreprise">cocktail d'entreprise à Paris</a> et <a href="/occasions/afterwork-entreprise">traiteur afterwork</a>.</li>
      <li><strong>Petit-déjeuner d'équipe :</strong> viennoiseries, madeleines, fruits et jus, sans aménagement particulier. Voir <a href="/occasions/petit-dejeuner-entreprise">petit-déjeuner d'entreprise</a>.</li>
    </ul>

    <h2>Livraison halal à Paris et en Île-de-France</h2>
    <p>Réunion matinale, séminaire, petit-déjeuner d'équipe ou pot de départ : nous livrons et installons dès 6h30, du lundi au vendredi, de 10 à 300 personnes, avec notre propre équipe. Nous desservons notamment <a href="/traiteur/paris">Paris</a>, <a href="/traiteur/la-defense">La Défense</a>, <a href="/traiteur/boulogne-billancourt">Boulogne-Billancourt</a>, <a href="/traiteur/neuilly-sur-seine">Neuilly-sur-Seine</a>, <a href="/traiteur/levallois-perret">Levallois-Perret</a>, <a href="/traiteur/nanterre">Nanterre</a> et <a href="/traiteur/versailles">Versailles</a>, soit <a href="/traiteur">toutes les villes d'Île-de-France</a> de notre zone de livraison. Les produits sont préparés le matin même, pour la fraîcheur, et notés 5/5 par nos clients sur Google.</p>
    <p>Commande jusqu'à la veille 14h pour une livraison le lendemain ; à partir de 50 personnes, prévenez au moins 48h avant. <a href="/devis">Demandez votre devis gratuit</a> et composez un menu qui régale toute votre équipe.</p>
  `

  return (
    <>
      <Navbar showBanner={true} />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero image pleine largeur ── */}
        <div className="hl-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="hl-hero" style={{ position: 'relative', width: '100%', height: 'clamp(440px, 52vw, 600px)', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src="/hero-bg.webp" alt="Traiteur d'entreprise halal et inclusif, L'Écrin Traiteur" strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,12,9,0.80) 0%, rgba(16,12,9,0.55) 42%, rgba(16,12,9,0.15) 70%, rgba(16,12,9,0) 88%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="hl-hero-text" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '660px' }}>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                  {en ? E.eyebrow : "Traiteur d'entreprise · Paris & Île-de-France"}
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.015em', color: '#FFFFFF', marginBottom: '22px' }}>
                  {en ? E.h1a : "Traiteur halal d'entreprise"}{' '}<br />{en ? E.h1b : 'Paris & Île-de-France'}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.80)', maxWidth: '480px', marginBottom: '32px' }}>
                  {en ? E.heroDescription : "Le traiteur d'entreprise qui régale toute l'équipe. Tout halal et sans porc, options végétariennes, vegan et sans gluten, livré dans vos bureaux dès 6h30."}
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
                  <a
                    href={lien('/devis')}
                    style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: '#FFFFFF', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {en ? E.devis : 'Obtenir un devis →'}
                  </a>
                  <a
                    href={lien('/creations/petits-dejeuners-et-pauses')}
                    style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.5)', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', background: 'transparent', transition: 'background 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    {en ? E.voirPdj : 'Voir nos petits déjeuners'}
                  </a>
                </div>

                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
                  {['Tout halal & sans porc', 'Végé, vegan, sans gluten', 'Livré dès 6h30', 'Noté 5/5 sur Google'].map(badge => (
                    <span key={badge} style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.28)', padding: '6px 12px' }}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </header>
        </div>

        {/* ── Bloc-réponse : la question posée en clair (SEO + GEO) ── */}
        <section style={{ maxWidth: '760px', margin: '0 auto', padding: '72px 24px 0' }}>
          <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '22px' }}>
            {en ? E.reponseQ : 'Vos prestations sont-elles halal ?'}
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '22px' }}>
            Oui. Toute la carte de L'Écrin Traiteur est halal et sans porc par défaut, sans alcool dans les recettes : petits-déjeuners, plateaux repas, pauses gourmandes, cocktails et buffets. Vous n'avez rien à préciser à la commande. Nous ne revendiquons pas de certification halal : c'est une offre halal-friendly, construite avec nos artisans.
          </p>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)' }}>
            Des versions végétariennes et vegan existent sur chaque prestation, et nous adaptons en sans gluten sur demande. Livraison dès 6h30 à Paris et en Île-de-France, commande jusqu'à la veille 14h, minimum <strong style={{ fontWeight: 500 }}>50 € HT</strong>, devis sous 24h.
          </p>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)', marginTop: '22px' }}>
            Repères de prix, tout en halal et sans porc : petit-déjeuner dès <strong style={{ fontWeight: 500 }}>8 € HT</strong> par personne, plateau repas dès <strong style={{ fontWeight: 500 }}>28,90 € HT</strong>, cocktail de <strong style={{ fontWeight: 500 }}>29,90 à 51,90 € HT</strong> selon la formule. La livraison est à 29 € HT à Paris et dans les communes proches.
          </p>
                  <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', margin: '48px 0 18px' }}>
            {en ? E.prixTitre : 'Combien coûte un traiteur halal pour une entreprise ?'}
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', color: 'var(--text-primary)' }}>
              <thead>
                <tr>
                  {(en ? E.prixEntetes : ['Prestation', 'Prix HT par personne', 'Ce qui est compris']).map(t => (
                    <th key={t} style={{ textAlign: 'left', padding: '12px 10px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', borderBottom: '1px solid rgba(17,17,17,0.35)' }}>{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Petit-déjeuner', 'dès 8 €', 'Viennoiseries pur beurre, jus Alain Milliat, café, fruits frais'],
                  ['Pause goûter', 'dès 6 €', 'Une boisson et une pâtisserie'],
                  ['Lunch box', 'dès 18,90 €', 'Déjeuner individuel prêt à manger'],
                  ['Plateau repas', 'dès 28,90 €', 'Entrée, plat, dessert et pain'],
                  ['Cocktail 8 pièces', '29,90 €', "L'Invitation : apéritif, afterwork"],
                  ['Cocktail 12 pièces', '40,90 €', 'La Réception : déjeunatoire, soirée partenaires'],
                  ['Cocktail 16 pièces', '51,90 €', 'La Célébration : cocktail dînatoire'],
                ].map(([a, b, c]) => (
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
            Prix 2026, hors taxes. Livraison 29 € HT à Paris et dans les communes proches, minimum de commande 50 € HT. Tout est halal et sans porc, sans supplément.
          </p>
        </section>

        {/* ── Régimes : une table pour toute l'équipe ── */}
        <div className="hl-regimes" style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
              {en ? E.regimesEyebrow : "Une table où personne n'est mis de côté"}
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 400, lineHeight: 1.12, color: 'var(--text-primary)' }}>
              {en ? E.regimesTitreA : 'Le même moment,'}{' '}<br />{en ? E.regimesTitreB : 'partagé par tous'}
            </h2>
          </div>
          <div className="hl-regimes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {REGIMES_L.map((r, i) => (
              <Reveal key={r.titre} delay={i * 90}>
                <div style={{ background: 'var(--bg-secondary)', padding: '40px 34px', height: '100%' }}>
                  <span className="accent-line" style={{ marginBottom: '22px' }} />
                  <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '12px' }}>
                    {r.label}
                  </p>
                  <p style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '14px', lineHeight: 1.1 }}>
                    {r.titre}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Nos prestations, 3 cartes illustrées ── */}
        <div className="hl-services" style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
              {en ? E.prestationsEyebrow : 'Nos prestations'}
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
              {en ? E.prestationsTitreA : 'Halal du petit-déjeuner'}{' '}<br />{en ? E.prestationsTitreB : 'au buffet'}
            </h2>
          </div>
          <div className="hl-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {PRESTATIONS_L.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <a
                  href={lien(s.href)}
                  className="hl-service-card"
                  style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', overflow: 'hidden', boxShadow: '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)', transition: 'box-shadow 0.35s ease, transform 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(17,17,17,0.04), 0 16px 40px rgba(17,17,17,0.09)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)' }}
                >
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#F8F5EF' }}>
                    <Image fill sizes="(max-width: 768px) 100vw, 33vw" src={s.img} alt={s.label} style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '22px 22px 26px' }}>
                    <p style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '19px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {s.label}
                    </p>
                    <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '14px' }}>
                      {s.desc}
                    </p>
                    <span style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-deep)' }}>
                      {en ? E.decouvrir : 'Découvrir →'}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Pages dédiées : Paris, buffet, plateaux repas ── */}
        <nav aria-label="Nos pages traiteur halal d'entreprise" className="hl-subpages" style={{ maxWidth: '1100px', margin: '0 auto', padding: '88px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
              {en ? E.sousPagesEyebrow : 'Le détail, prestation par prestation'}
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
              {en ? E.sousPagesTitre : 'Trois pages pour choisir votre menu halal'}
            </h2>
          </div>
          <div className="hl-subpages-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {SOUS_PAGES_L.map((s, i) => (
              <Reveal key={s.href} delay={i * 90}>
                <a
                  href={lien(s.href)}
                  style={{ display: 'block', textDecoration: 'none', background: 'var(--bg-secondary)', border: '1px solid rgba(17,17,17,0.08)', padding: '30px 26px', height: '100%' }}
                >
                  <p style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '21px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '12px', lineHeight: 1.2 }}>
                    {s.label}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '16px' }}>
                    {s.desc}
                  </p>
                  <span style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-deep)' }}>
                    {en ? E.voirPage : 'Voir la page →'}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </nav>

        {/* ── Ils nous font confiance ── */}
        <div style={{ marginTop: '88px' }}>
          <LogosSection />
        </div>

        {/* ── FAQ ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <div className="hl-faq" style={{ maxWidth: '820px', margin: '0 auto', padding: '80px 40px 88px' }}>
            <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px', textAlign: 'center' }}>
              {en ? E.faqEyebrow : 'Questions fréquentes'}
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 36px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', textAlign: 'center', marginBottom: '48px' }}>
              {en ? E.faqTitre : 'Traiteur halal, on vous répond'}
            </h2>
            <div>
              {FAQ_L.map((f, i) => (
                <div key={i} style={{ padding: '26px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(17,17,17,0.1)' }}>
                  <p style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px', lineHeight: 1.25 }}>
                    {f.q}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      <RelatedLinks
        eyebrow="Explorez nos prestations"
        title="Composez votre menu halal & inclusif"
        items={[
          { href: '/creations/petits-dejeuners-et-pauses', title: 'Petits-Déjeuners & Pauses', meta: 'Livrés dès 6h30' },
          { href: '/creations/plateaux-repas', title: 'Plateaux Repas', meta: 'Déjeuners de travail' },
          { href: '/creations/cocktails', title: 'Cocktails & Buffets', meta: 'Réceptions & afterworks' },
          { href: '/devis', title: 'Demander un devis', meta: 'Réponse rapide' },
        ]}
        columns={4}
      />

      {/* ── Éditorial + arguments + CTA + article SEO ── */}
      <CategoryClosing
        eyebrow="Traiteur halal & inclusif entreprise"
        title={"Le goût du partage,\nsans exclure personne."}
        body="Halal et sans porc par défaut, décliné en versions végétariennes, vegan et sans gluten sur demande : chaque prestation est pensée pour que toute votre équipe partage le même moment, à Paris et en Île-de-France."
        args={ARGS}
        ctaQuestion="Un menu qui régale toute l'équipe ?"
        seoArticle={seoArticle}
      />

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .hl-service-card { border-radius: 4px !important; }
        @media (max-width: 768px) {
          .hl-hero-wrapper { padding: 20px 20px 0 !important; }
          .hl-hero { min-height: 560px !important; height: 72vh !important; }
          .hl-hero-text { padding: 0 28px !important; max-width: 100% !important; }
          .hl-regimes { padding: 56px 24px 0 !important; }
          .hl-regimes-grid { grid-template-columns: 1fr !important; }
          .hl-services { padding: 56px 24px 0 !important; }
          .hl-services-grid { grid-template-columns: 1fr !important; }
          .hl-subpages { padding: 56px 24px 0 !important; }
          .hl-subpages-grid { grid-template-columns: 1fr !important; }
          .hl-faq { padding: 56px 24px 64px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .hl-hero-wrapper { padding: 32px 40px 0 !important; }
          .hl-hero-text { padding: 0 40px !important; }
          .hl-regimes { padding: 64px 40px 0 !important; }
          .hl-services { padding: 64px 40px 0 !important; }
          .hl-subpages { padding: 64px 40px 0 !important; }
          .hl-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
