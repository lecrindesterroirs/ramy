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

/* Les 3 piliers éco, 100% conformes aux pratiques réelles. */
const PILIERS = [
  {
    label: 'Le sourcing',
    titre: 'Circuit court, artisans identifiés',
    desc: "Nous partons de producteurs et d'artisans que nous nommons : la Ferme de Viltain, le verger des Yvelines, des farines françaises, zéro arôme artificiel. Moins d'intermédiaires, des produits qu'on peut tracer.",
  },
  {
    label: 'La vaisselle',
    titre: 'Bois, carton, pulpe de canne',
    desc: "Nous dressons dans une vaisselle en bois, carton et pulpe de canne, compostable, plutôt que du plastique jetable. La présentation reste soignée, l'empreinte s'allège.",
  },
  {
    label: 'La boucle fermée',
    titre: 'Récupération vaisselle & thermos',
    desc: "Nous récupérons la vaisselle réutilisable et les thermos après votre événement. C'est notre équipe interne qui livre et qui reprend : rien ne part à la benne pour rien.",
  },
]

const PRESTATIONS = [
  {
    label: 'Petits-Déjeuners & Pauses',
    desc: 'Fruits de saison, yaourts fermiers et viennoiseries, dressés en vaisselle compostable, livrés dès 6h30.',
    href: '/creations/petits-dejeuners-et-pauses',
    img: '/creations-1.webp',
  },
  {
    label: 'Plateaux Repas',
    desc: 'Menus individuels pour vos déjeuners de travail, contenants recyclables et récupérés après le service.',
    href: '/creations/plateaux-repas',
    img: '/creations-4.webp',
  },
  {
    label: 'Cocktails & Buffets',
    desc: 'Réceptions dressées avec soin, vaisselle en bois et pulpe de canne, thermos et matériel repris ensuite.',
    href: '/creations/cocktails',
    img: '/creations-3.webp',
  },
]

const FAQ = [
  {
    q: "Votre traiteur d'entreprise est-il vraiment éco-responsable ?",
    a: "Concrètement, oui, et sans label acheté : circuit court avec des artisans et producteurs identifiés, vaisselle compostable en bois et pulpe de canne, récupération de la vaisselle réutilisable et des thermos, livraison assurée par notre équipe interne sans sous-traitance.",
  },
  {
    q: 'Quelle vaisselle utilisez-vous ?',
    a: "De la vaisselle en bois, carton et pulpe de canne, compostable, plutôt que du plastique jetable. Le dressage reste soigné pour vos réceptions comme pour vos petits-déjeuners.",
  },
  {
    q: 'Récupérez-vous la vaisselle et les thermos après la prestation ?',
    a: "Oui. Notre équipe reprend la vaisselle réutilisable et les thermos après votre événement, dans le cadre d'une boucle fermée qui limite les déchets.",
  },
  {
    q: "D'où viennent vos produits ?",
    a: "D'artisans et de producteurs identifiés en Île-de-France et en France : la Ferme de Viltain, le verger des Yvelines, des farines françaises, zéro arôme artificiel. Nous privilégions le circuit court quand la proximité améliore vraiment le produit.",
  },
]

export default function TraiteurEcoResponsable() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FoodEstablishment'],
    name: "L'Écrin Traiteur",
    description: "Traiteur d'entreprise éco-responsable à Paris et en Île-de-France : circuit court, artisans identifiés, vaisselle compostable en bois et pulpe de canne, récupération de la vaisselle et des thermos. Livré dès 6h30.",
    url: `${BASE}/traiteur-eco-responsable`,
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
    servesCuisine: 'Française artisanale',
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
      { '@type': 'ListItem', position: 2, name: 'Traiteur éco-responsable', item: `${BASE}/traiteur-eco-responsable` },
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
    { icon: 'quality',  titre: 'Circuit court',            desc: "Producteurs et artisans identifiés, farines françaises, zéro arôme artificiel. On nomme, on trace." },
    { icon: 'custom',   titre: 'Vaisselle compostable',    desc: "Bois, carton et pulpe de canne plutôt que du plastique jetable, sans rien perdre en présentation." },
    { icon: 'support',  titre: 'Boucle fermée',            desc: "Récupération de la vaisselle réutilisable et des thermos après votre événement." },
    { icon: 'delivery', titre: 'Livré par notre équipe',   desc: "Pas de sous-traitance : la même équipe livre et reprend, à Paris et en Île-de-France." },
  ]

  const seoArticle = `
    <h2>Un traiteur d'entreprise éco-responsable, concret</h2>
    <p>Chez <strong>L'Écrin Traiteur</strong>, l'éco-responsabilité n'est pas un label affiché en bas de page : c'est une manière de travailler. Nous partons d'artisans et de producteurs identifiés, en circuit court quand la proximité améliore vraiment le produit : la Ferme de Viltain, le verger des Yvelines, des farines françaises, zéro arôme artificiel. Nommer nos sources, c'est déjà pouvoir en répondre.</p>
    <h2>Vaisselle compostable, vaisselle et thermos récupérés</h2>
    <p>Nous dressons vos petits-déjeuners, plateaux repas et buffets dans une <strong>vaisselle en bois, carton et pulpe de canne</strong>, compostable, plutôt que du plastique jetable. Et pour ce qui est réutilisable, nous fonctionnons en boucle fermée : <strong>notre équipe récupère la vaisselle et les thermos</strong> après votre événement, pour que la fête ne finisse pas à la benne.</p>
    <h2>Livré et repris par notre équipe</h2>
    <p>De la commande à la reprise du matériel, tout passe par notre équipe interne, jamais par de la sous-traitance. Nous livrons dès 6h30 à Paris et en Île-de-France, de 10 à 300 personnes. <a href="/devis">Demandez votre devis gratuit</a> et composez une prestation qui régale vos équipes sans gaspiller. Retrouvez aussi le détail de <a href="/univers/nos-engagements">nos engagements</a>.</p>
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
            <ParallaxImage priority sizes="100vw" src="/buffet-garden-party.webp" alt="Traiteur d'entreprise éco-responsable, L'Écrin Traiteur" strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,12,9,0.80) 0%, rgba(16,12,9,0.55) 42%, rgba(16,12,9,0.15) 70%, rgba(16,12,9,0) 88%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="hl-hero-text" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '660px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                  Traiteur d'entreprise · Paris & Île-de-France
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(34px, 4.6vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.015em', color: '#FFFFFF', marginBottom: '22px' }}>
                  Traiteur<br />Éco-Responsable
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.80)', maxWidth: '480px', marginBottom: '32px' }}>
                  Un traiteur d'entreprise qui régale sans gaspiller : circuit court, vaisselle compostable en bois et pulpe de canne, récupération de la vaisselle et des thermos, livré dans vos bureaux dès 6h30.
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
                    href="/univers/nos-engagements"
                    style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.5)', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', background: 'transparent', transition: 'background 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    Nos engagements
                  </a>
                </div>

                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
                  {['Circuit court', 'Vaisselle bois & pulpe de canne', 'Vaisselle & thermos récupérés', 'Noté 5/5 sur Google'].map(badge => (
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
              Une démarche concrète, pas un logo
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 400, lineHeight: 1.12, color: 'var(--text-primary)' }}>
              Bien recevoir,<br />sans gaspiller
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
              Du petit-déjeuner<br />au buffet
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
              Traiteur éco-responsable, on vous répond
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
        title="Composez une prestation responsable"
        items={[
          { href: '/creations/petits-dejeuners-et-pauses', title: 'Petits-Déjeuners & Pauses', meta: 'Livrés dès 6h30' },
          { href: '/creations/plateaux-repas', title: 'Plateaux Repas', meta: 'Déjeuners de travail' },
          { href: '/univers/nos-engagements', title: 'Nos engagements', meta: 'Notre démarche' },
          { href: '/devis', title: 'Demander un devis', meta: 'Réponse rapide' },
        ]}
        columns={4}
      />

      {/* ── Éditorial + arguments + CTA + article SEO ── */}
      <CategoryClosing
        eyebrow="Traiteur éco-responsable entreprise"
        title={"Bien recevoir,\nsans gaspiller."}
        body="Circuit court, vaisselle compostable en bois et pulpe de canne, récupération de la vaisselle et des thermos, livraison par notre propre équipe : chaque prestation est pensée pour régaler vos équipes en limitant les déchets, à Paris et en Île-de-France."
        args={ARGS}
        ctaQuestion="Une prestation responsable à organiser ?"
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
