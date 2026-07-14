'use client'

import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import LogosSection from '../../components/LogosSection'
import RelatedLinks from '../../components/RelatedLinks'
import CategoryClosing from '../../components/CategoryClosing'
import ParallaxImage from '../../components/ParallaxImage'

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
]

export default function TraiteurHalal() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FoodEstablishment'],
    name: "L'Écrin Traiteur",
    description: "Traiteur d'entreprise halal et sans porc à Paris et en Île-de-France, avec options végétariennes, vegan et sans gluten. Petits-déjeuners, plateaux repas et buffets livrés dès 6h30.",
    url: `${BASE}/traiteur-halal`,
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
    servesCuisine: ['Halal', 'Française artisanale', 'Végétarienne'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:30',
      closes: '14:00',
    },
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
    mainEntity: FAQ.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const ARGS = [
    { icon: 'quality',  titre: 'Halal par défaut',      desc: "Toute la gamme est halal et sans porc, pas une carte à part, mais notre standard sur chaque prestation." },
    { icon: 'custom',   titre: 'Options claires',        desc: "Végétarien, vegan, sans gluten : chaque contrainte alimentaire est prise en compte, sans supplément d'effort pour vous." },
    { icon: 'delivery', titre: 'Livraison dès 6h30',     desc: "Livré et installé par notre équipe à Paris et en Île-de-France, chaque matin en semaine." },
    { icon: 'support',  titre: 'Interlocuteur dédié',    desc: "Un contact unique pour composer vos menus, de 10 à 300 personnes, du devis à la livraison." },
  ]

  const seoArticle = `
    <h2>Un traiteur d'entreprise halal, pensé pour toute l'équipe</h2>
    <p>Dans une entreprise, une pause gourmande ne devrait jamais exclure personne. Chez <strong>L'Écrin Traiteur</strong>, l'ensemble de notre gamme est <strong>halal et sans porc par défaut</strong> : petits-déjeuners, plateaux repas, cocktails et buffets. Ce n'est pas une option cachée dans un coin de la carte, c'est notre référence sur chaque commande livrée à Paris et en Île-de-France.</p>
    <h2>Végétarien, vegan, sans gluten : chacun trouve sa place</h2>
    <p>Au-delà du halal, nous déclinons nos prestations en versions <strong>végétariennes et vegan</strong>, et réalisons des <strong>adaptations sans gluten sur demande</strong>. Vos collaborateurs, quelles que soient leurs habitudes alimentaires, partagent le même moment autour d'une table où personne n'est mis de côté.</p>
    <h2>Livré dans vos bureaux dès 6h30</h2>
    <p>Réunion matinale, séminaire, petit-déjeuner d'équipe ou pot de départ : nous livrons et installons dès 6h30, du lundi au vendredi, de 10 à 300 personnes. Les produits sont préparés le matin même, pour la fraîcheur, et notés 5/5 par nos clients sur Google. <a href="/devis">Demandez votre devis gratuit</a> et composez un menu qui régale toute votre équipe.</p>
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
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                  Traiteur d'entreprise · Paris & Île-de-France
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.015em', color: '#FFFFFF', marginBottom: '22px' }}>
                  Traiteur Halal<br />& Inclusif
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.80)', maxWidth: '480px', marginBottom: '32px' }}>
                  Le traiteur d'entreprise qui régale <em>toute</em> l'équipe. Tout halal et sans porc, options végétariennes, vegan et sans gluten, livré dans vos bureaux dès 6h30.
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
                  {['Tout halal & sans porc', 'Végé, vegan, sans gluten', 'Livré dès 6h30', 'Noté 5/5 sur Google'].map(badge => (
                    <span key={badge} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.28)', padding: '6px 12px' }}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </header>
        </div>

        {/* ── Régimes : une table pour toute l'équipe ── */}
        <div className="hl-regimes" style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
              Une table où personne n'est mis de côté
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 400, lineHeight: 1.12, color: 'var(--text-primary)' }}>
              Le même moment,<br />partagé par tous
            </h2>
          </div>
          <div className="hl-regimes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {REGIMES.map((r, i) => (
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

        {/* ── Nos prestations, 3 cartes illustrées ── */}
        <div className="hl-services" style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
              Nos prestations
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }}>
              Halal du petit-déjeuner<br />au buffet
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
              Traiteur halal, on vous répond
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
