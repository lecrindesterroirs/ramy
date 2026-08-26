'use client'

/*
  Section témoignages, reproduction fidèle de la maquette :
  header + bandeau stats · bloc vedette (photo + citation) · 2 cartes photo+citation · barre logos.
*/

const FEATURED = {
  company: 'Le Monde',
  logo: '/logos/lemonde.png',
  context: 'Petit-déjeuner presse',
  quote: "Je n'ai eu que d'excellents retours sur tous les produits, yaourts, viennoiseries, jus de fruits, avec une mention spéciale pour les madeleines qui étaient succulentes, ainsi que le nectar de fraise qui a énormément plu.",
  author: 'Claire Renard',
  role: 'Office Manager, Direction numérique · Le Monde',
  img: '/temoignage-le-monde.webp',
}

const CARDS = [
  {
    company: 'SIA Partners',
    context: "Séminaire d'entreprise",
    quote: "Les madeleines sont très bonnes, grand choix de parfums, viennoiseries, jus, et le service au top. Le livreur nous a même aidé à tout installer.",
    author: 'Rose Jean',
    role: 'Office Manager · SIA Partners',
    img: '/creations-1.webp',
  },
  {
    company: 'Stellantis',
    context: 'Journées portes ouvertes',
    quote: "Pour nos événements clients et nos journées portes ouvertes, j'ai fait appel à L'Écrin à plusieurs reprises et l'expérience est toujours parfaite.",
    author: 'Sara Molto',
    role: 'Responsable marketing · Stellantis',
    img: '/petit-dejeuner-ds-stellantis.webp',
  },
]

// Mêmes fichiers que le bandeau logos en haut de la home (LogosSection).
// Hauteurs calées pour un poids visuel équilibré : wordmarks larges plus bas,
// emblèmes compacts plus hauts.
const CLIENT_LOGOS = [
  { name: 'Le Monde', src: '/logos/lemonde.png', height: '30px' },
  { name: 'SNCF', src: '/logos/sncf.png', height: '34px' },
  { name: 'DS Automobiles', src: '/logos/ds.png', height: '58px', opacity: 0.85 },
  { name: 'Carglass', src: '/logos/carglass.svg', height: '30px' },
  { name: 'Wella Company', src: '/logos/wella.jpg', height: '40px' },
  { name: 'Coyote', src: '/logos/coyote.png', height: '34px' },
  { name: 'TotalEnergies', src: '/logos/totalenergies.png', height: '42px' },
  { name: 'Talan', src: '/logos/talan.png', height: '30px' },
  { name: 'SIA', src: '/logos/sia-v2.png', height: '56px', opacity: 0.85 },
]

function QuoteMark({ size = 34 }) {
  return <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: `${size}px`, lineHeight: 1, color: 'var(--accent-deep)', display: 'block' }}>❝</span>
}

export default function TestimonialsSection() {
  // NB : pas de JSON-LD Review/AggregateRating ici, les avis auto-attribués
  // sur sa propre entité sont contraires aux règles Google (risque de flag).
  // Les vraies notes proviennent de la fiche Google Business Profile (5,0★ / 18 avis).
  return (
    <section className="ts-section" style={{ background: 'var(--bg-secondary)', padding: 'calc(var(--header-h) + 56px) 0 0' }}>

      <div className="ts-inner" style={{ maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0 72px 64px' }}>

        {/* ── Header ── */}
        <div className="ts-top reveal" style={{ marginBottom: '44px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
            Ils nous font confiance
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(34px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.02, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginBottom: '18px' }}>
            Ils parlent de leurs événements.
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'rgba(17,17,17,0.66)' }}>
            Des prestations pensées pour les entreprises qui recherchent plus qu'un simple traiteur.
          </p>
        </div>

        {/* ── Témoignages ── */}
        <div className="ts-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '14px', alignItems: 'stretch' }}>

          {/* Vedette, photo + carte texte côte à côte */}
          <div className="ts-featured" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', border: '1px solid rgba(17,17,17,0.10)', background: '#FFFFFF', overflow: 'hidden' }}>
            <div className="ts-featured-img" style={{ overflow: 'hidden', background: 'var(--bg-secondary)' }}>
              <img loading="lazy" src={FEATURED.img} alt={`Événement ${FEATURED.company}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ padding: '34px 38px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img loading="lazy" src={FEATURED.logo} alt={FEATURED.company} style={{ height: '24px', width: 'auto', marginBottom: '14px', filter: 'grayscale(1)', alignSelf: 'flex-start' }} />
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>{FEATURED.context}</p>
              <QuoteMark size={34} />
              <blockquote style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(16px, 1.5vw, 21px)', fontWeight: 400, lineHeight: 1.32, color: 'var(--text-primary)', fontStyle: 'italic', margin: '10px 0 24px' }}>
                {FEATURED.quote}
              </blockquote>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--text-primary)', marginBottom: '3px' }}>{FEATURED.author}</p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.66)' }}>{FEATURED.role}</p>
            </div>
          </div>

          {/* Deux cartes photo + texte */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {CARDS.map(t => (
              <div key={t.company} className="ts-card" style={{ display: 'grid', gridTemplateColumns: '0.62fr 1fr', border: '1px solid rgba(17,17,17,0.10)', background: '#FFFFFF', overflow: 'hidden', flex: 1 }}>
                <div className="ts-card-img" style={{ overflow: 'hidden', background: 'var(--bg-secondary)' }}>
                  <img loading="lazy" src={t.img} alt={`Événement ${t.company}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '6px' }}>{t.company}</p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '14px' }}>{t.context}</p>
                  <QuoteMark size={26} />
                  <blockquote style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(13px, 1.15vw, 16px)', fontWeight: 400, lineHeight: 1.36, color: 'var(--text-primary)', fontStyle: 'italic', margin: '8px 0 18px' }}>
                    {t.quote}
                  </blockquote>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--text-primary)', marginBottom: '2px' }}>{t.author}</p>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.66)' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Barre logos ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)', marginTop: '56px', paddingTop: '40px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.66)', textAlign: 'center', marginBottom: '28px' }}>
            Ils nous font confiance
          </p>
          <div className="ts-logos" style={{ display: 'grid', gridTemplateColumns: `repeat(${CLIENT_LOGOS.length}, 1fr)`, alignItems: 'center', justifyItems: 'center', gap: '24px' }}>
            {CLIENT_LOGOS.map(logo => (
              <img loading="lazy" key={logo.name} src={logo.src} alt={logo.name} style={{ height: logo.height || '30px', width: 'auto', maxWidth: '100%', objectFit: 'contain', filter: 'grayscale(1)', opacity: logo.opacity || 0.6, mixBlendMode: 'multiply' }} />
            ))}
          </div>
        </div>

      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .ts-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .ts-logos { grid-template-columns: repeat(3, 1fr) !important; gap: 32px 24px !important; }
        }
        @media (max-width: 768px) {
          .ts-inner { padding: 0 24px 48px !important; }
          .ts-featured, .ts-card { grid-template-columns: 1fr !important; }
          .ts-featured-img, .ts-card-img { aspect-ratio: 16/10; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .ts-inner { padding: 0 40px 56px !important; }
        }
      ` }} />
    </section>
  )
}
