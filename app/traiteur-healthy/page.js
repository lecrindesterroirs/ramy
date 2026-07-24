'use client'

import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import LogosSection from '../../components/LogosSection'
import RelatedLinks from '../../components/RelatedLinks'
import CategoryClosing from '../../components/CategoryClosing'
import ParallaxImage from '../../components/ParallaxImage'
import BusinessJsonLd from '../../components/BusinessJsonLd'

const BASE = 'https://www.lecrin-traiteur.fr'

/* Les 3 piliers healthy, 100% conformes à l'offre réelle. */
const PILIERS = [
  {
    label: 'Le frais',
    titre: 'Frais & de saison',
    desc: "Fruits de saison découpés, corbeilles, yaourts fermiers de la Ferme de Viltain : des produits qui changent avec la saison et gardent leur vraie fraîcheur, préparés au plus près de la livraison.",
  },
  {
    label: "L'équilibre",
    titre: 'Léger, sans sacrifier le goût',
    desc: "Jus pressés Alain Milliat, compotes sans sucres ajoutés, alternatives plus légères aux viennoiseries : de quoi composer une pause qui fait du bien sans être fade ni triste.",
  },
  {
    label: 'Pour chacun',
    titre: 'Végé, vegan, sans gluten',
    desc: "Petits-déjeuners, plateaux repas et buffets se déclinent en versions végétariennes et vegan, avec des adaptations sans gluten sur demande. Personne n'est laissé de côté.",
  },
]

const PRESTATIONS = [
  {
    label: 'Petits-Déjeuners & Pauses',
    desc: 'Fruits de saison, yaourts fermiers, jus pressés et viennoiseries légères, livrés dès 6h30.',
    href: '/creations/petits-dejeuners-et-pauses',
    img: '/creations-1.webp',
  },
  {
    label: 'Plateaux Repas',
    desc: 'Déjeuners de travail équilibrés, avec des options végétariennes et vegan sur chaque menu.',
    href: '/creations/plateaux-repas',
    img: '/creations-4.webp',
  },
  {
    label: 'Boissons & Jus',
    desc: 'Jus et nectars Alain Milliat, eaux et boissons chaudes pour accompagner vos pauses.',
    href: '/creations/boissons',
    img: '/creations-boissons.webp',
  },
]

const FAQ = [
  {
    q: 'Proposez-vous des options healthy et équilibrées ?',
    a: "Oui : fruits de saison découpés, yaourts fermiers de la Ferme de Viltain, jus pressés Alain Milliat, compotes sans sucres ajoutés et viennoiseries plus légères. De quoi composer une pause qui fait du bien à vos équipes.",
  },
  {
    q: 'Peut-on composer un petit-déjeuner équilibré au bureau ?',
    a: "Bien sûr. Nous adaptons la sélection pour alléger le sucré et faire la part belle au frais : fruits, laitiers, jus et pains complets, selon vos envies et votre effectif.",
  },
  {
    q: 'Gérez-vous les régimes végétariens, vegan et sans gluten ?',
    a: "Oui. Nos prestations se déclinent en versions végétariennes et vegan, et nous réalisons des adaptations sans gluten sur demande, pour que chacun trouve sa place à table.",
  },
  {
    q: "D'où viennent vos produits frais ?",
    a: "De producteurs identifiés : les yaourts de la Ferme de Viltain, les jus d'Alain Milliat, des fruits de saison. Nous privilégions le circuit court quand la proximité améliore vraiment le produit.",
  },
]

export default function TraiteurHealthy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FoodEstablishment'],
    name: "L'Écrin Traiteur",
    description: "Traiteur d'entreprise healthy à Paris et en Île-de-France : fruits de saison, yaourts fermiers, jus pressés, options végétariennes, vegan et sans gluten. Petits-déjeuners équilibrés livrés dès 6h30.",
    url: `${BASE}/traiteur-healthy`,
    telephone: '+33174542310',
    email: 'commercial@lecrin-traiteur.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '63 bis rue de Sèvres',
      addressLocality: 'Boulogne-Billancourt',
      postalCode: '92100',
      addressCountry: 'FR',
    },
    areaServed: { '@type': 'State', name: 'Île-de-France' },
    priceRange: '€€',
    servesCuisine: ['Française artisanale', 'Végétarienne', 'Vegan'],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '06:00', closes: '22:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '09:00', closes: '21:00' },
    ],
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Traiteur healthy', item: `${BASE}/traiteur-healthy` },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const ARGS = [
    { icon: 'quality',  titre: 'Frais & de saison',        desc: "Fruits découpés, yaourts fermiers, produits qui suivent la saison et gardent leur fraîcheur." },
    { icon: 'custom',   titre: 'Léger, pas fade',          desc: "Jus pressés, compotes sans sucres ajoutés, alternatives plus légères qui ont vraiment du goût." },
    { icon: 'support',  titre: 'Tous les régimes',         desc: "Végétarien, vegan, sans gluten sur demande : chacun trouve sa place à table." },
    { icon: 'delivery', titre: 'Livraison dès 6h30',       desc: "Livré et installé par notre équipe à Paris et en Île-de-France, chaque matin en semaine." },
  ]

  const seoArticle = `
    <h2>Un traiteur d'entreprise healthy, sans renoncer au plaisir</h2>
    <p>Manger équilibré au bureau ne devrait pas rimer avec ennui. Chez <strong>L'Écrin Traiteur</strong>, la version healthy, c'est du <strong>frais et de saison</strong> qui a du goût : fruits découpés, yaourts fermiers de la Ferme de Viltain, jus pressés Alain Milliat, compotes sans sucres ajoutés. On allège le sucré, on garde le plaisir.</p>
    <h2>Frais, de saison, sourcé chez des producteurs identifiés</h2>
    <p>Nos produits frais viennent de producteurs que nous nommons, en circuit court quand la proximité améliore vraiment le produit. Les fruits changent avec la saison, les laitiers sont fermiers, les jus sont pressés : une pause qui fait du bien à vos équipes sans passer par l'industriel.</p>
    <h2>Traiteur vegan et végétarien, adapté à chaque régime</h2>
    <p>Au-delà du frais, nos prestations se déclinent en versions <strong>végétariennes et vegan</strong>, avec des adaptations <strong>sans gluten sur demande</strong>. Réunion matinale, petit-déjeuner d'équipe ou déjeuner de travail, de 10 à 300 personnes, livrés dès 6h30 à Paris et en Île-de-France. <a href="/devis">Demandez votre devis gratuit</a> et composez une pause saine et gourmande.</p>
  `

  return (
    <>
      <Navbar showBanner={true} />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <BusinessJsonLd />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero image pleine largeur ── */}
        <div className="hl-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="hl-hero" style={{ position: 'relative', width: '100%', height: 'clamp(440px, 52vw, 600px)', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src="/plateau-fruits.webp" alt="Traiteur d'entreprise healthy, plateau de fruits frais de saison, L'Écrin Traiteur" strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,12,9,0.80) 0%, rgba(16,12,9,0.55) 42%, rgba(16,12,9,0.15) 70%, rgba(16,12,9,0) 88%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="hl-hero-text" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '660px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                  Traiteur d'entreprise · Paris & Île-de-France
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(30px, 4.2vw, 58px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.015em', color: '#FFFFFF', marginBottom: '22px' }}>
                  Traiteur Healthy<br />Vegan & Végétarien
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.80)', maxWidth: '480px', marginBottom: '32px' }}>
                  Un traiteur d'entreprise qui fait du bien : fruits de saison, yaourts fermiers, jus pressés et options légères, sans jamais sacrifier le plaisir. Livré dans vos bureaux dès 6h30.
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
                  <a
                    href="/devis"
                    style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: '#FFFFFF', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    Obtenir un devis →
                  </a>
                  <a
                    href="/creations/petits-dejeuners-et-pauses"
                    style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.5)', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', background: 'transparent', transition: 'background 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    Voir nos petits déjeuners
                  </a>
                </div>

                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
                  {['Frais & de saison', 'Végé, vegan, sans gluten', 'Jus & yaourts d\'artisans', 'Noté 5/5 sur Google'].map(badge => (
                    <span key={badge} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.28)', padding: '6px 12px' }}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </header>
        </div>

        {/* ── Les 3 piliers ── */}
        <div className="hl-regimes" style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
              Sain sans être triste
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 400, lineHeight: 1.12, color: 'var(--text-primary)' }}>
              Du frais qui fait<br />vraiment plaisir
            </h2>
          </div>
          <div className="hl-regimes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {PILIERS.map((r, i) => (
              <Reveal key={r.titre} delay={i * 90}>
                <div style={{ background: 'var(--bg-secondary)', padding: '40px 34px', height: '100%' }}>
                  <span className="accent-line" style={{ marginBottom: '22px' }} />
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '12px' }}>
                    {r.label}
                  </p>
                  <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '14px', lineHeight: 1.1 }}>
                    {r.titre}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Nos prestations ── */}
        <div className="hl-services" style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
              Nos prestations
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
              Le frais, du matin<br />au déjeuner
            </h2>
          </div>
          <div className="hl-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {PRESTATIONS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <a
                  href={s.href}
                  className="hl-service-card"
                  style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', overflow: 'hidden', boxShadow: '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)', transition: 'box-shadow 0.35s ease, transform 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(17,17,17,0.04), 0 16px 40px rgba(17,17,17,0.09)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)' }}
                >
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#F8F5EF' }}>
                    <Image fill sizes="(max-width: 768px) 100vw, 33vw" src={s.img} alt={s.label} style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '22px 22px 26px' }}>
                    <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '19px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {s.label}
                    </p>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '14px' }}>
                      {s.desc}
                    </p>
                    <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-deep)' }}>
                      Découvrir →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Ils nous font confiance ── */}
        <div style={{ marginTop: '88px' }}>
          <LogosSection />
        </div>

        {/* ── FAQ ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <div className="hl-faq" style={{ maxWidth: '820px', margin: '0 auto', padding: '80px 40px 88px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px', textAlign: 'center' }}>
              Questions fréquentes
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 36px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', textAlign: 'center', marginBottom: '48px' }}>
              Traiteur healthy, on vous répond
            </h2>
            <div>
              {FAQ.map((f, i) => (
                <div key={i} style={{ padding: '26px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(17,17,17,0.1)' }}>
                  <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px', lineHeight: 1.25 }}>
                    {f.q}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
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
        title="Composez une pause saine et gourmande"
        items={[
          { href: '/creations/petits-dejeuners-et-pauses', title: 'Petits-Déjeuners & Pauses', meta: 'Livrés dès 6h30' },
          { href: '/creations/boissons', title: 'Boissons & Jus', meta: 'Jus Alain Milliat' },
          { href: '/creations/plateaux-repas', title: 'Plateaux Repas', meta: 'Déjeuners de travail' },
          { href: '/devis', title: 'Demander un devis', meta: 'Réponse rapide' },
        ]}
        columns={4}
      />

      {/* ── Éditorial + arguments + CTA + article SEO ── */}
      <CategoryClosing
        eyebrow="Traiteur healthy entreprise"
        title={"Du frais qui fait\nvraiment plaisir."}
        body="Fruits de saison, yaourts fermiers, jus pressés et options légères, déclinés en versions végétariennes, vegan et sans gluten : chaque prestation fait du bien à vos équipes sans jamais sacrifier le goût, à Paris et en Île-de-France."
        args={ARGS}
        ctaQuestion="Une pause saine à organiser ?"
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
          .hl-faq { padding: 56px 24px 64px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .hl-hero-wrapper { padding: 32px 40px 0 !important; }
          .hl-hero-text { padding: 0 40px !important; }
          .hl-regimes { padding: 64px 40px 0 !important; }
          .hl-services { padding: 64px 40px 0 !important; }
          .hl-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
