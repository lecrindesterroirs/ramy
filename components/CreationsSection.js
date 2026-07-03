const creations = [
  {
    label: 'Petits-Déjeuners',
    subtitle: 'Pauses Gourmandes',
    credit: "L'Écrin Traiteur",
    img: '/creations-1.png',
    imgPosition: 'center 75%',
    href: '/creations/petits-dejeuners-et-pauses',
  },
  {
    label: 'Plateaux Repas',
    subtitle: 'Des recettes fraîches et de saison',
    credit: "L'Écrin Traiteur",
    img: '/creations-4.png',
    imgPosition: 'center bottom',
    href: '/creations/plateaux-repas',
  },
  {
    label: 'Cocktails',
    subtitle: 'Afterworks',
    credit: "L'Écrin Traiteur",
    img: '/creations-3.png',
    href: '/creations/cocktails-et-buffets',
  },
  {
    label: 'Buffets',
    subtitle: 'Conviviaux et généreux',
    credit: "L'Écrin Traiteur",
    img: '/creations-2.png',
    href: '/creations/buffets',
  },
  {
    label: 'Boissons',
    subtitle: 'Jus, softs, cafés & thés d\'exception',
    credit: "L'Écrin Traiteur",
    img: '/creations-boissons.png',
    href: '/creations/boissons',
  },
  {
    label: 'Créations',
    subtitle: 'Saisonnières',
    credit: "L'Écrin Traiteur",
    img: '/creations-featured.webp',
    href: '/creations/evenements-saisonniers',
  },
]

function Card({ item }) {
  return (
    <a
      href={item.href}
      style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none', overflow: 'hidden', borderRadius: '4px' }}
    >
      <div
        className="img-zoom"
        style={{ position: 'relative', width: '100%', height: '65%', overflow: 'hidden' }}
      >
        <img
          src={item.img}
          alt={item.label}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.imgPosition || 'center center', display: 'block', transition: 'transform 0.6s ease' }}
        />
      </div>
      <div style={{ position: 'relative', width: '100%', height: '35%', background: '#F5F5F5', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 18px' }}>
        <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '20px', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#111111', marginBottom: '4px', margin: 0 }}>
          {item.label}
        </p>
        {item.subtitle && (
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#666666', marginBottom: 0, margin: 0 }}>
            {item.subtitle}
          </p>
        )}
      </div>
    </a>
  )
}

export default function CreationsSection() {
  return (
    <section
      className="creations-section"
      style={{
        background: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 'var(--header-h)',
        minHeight: 'auto',
      }}
    >

      {/* Title */}
      <div className="reveal creations-title-wrap" style={{ padding: '40px 72px 24px 72px', flexShrink: 0, textAlign: 'center' }}>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', marginBottom: '12px', margin: 0 }}>
          DÉCOUVREZ NOTRE CARTE POUR TOUS...
        </p>
        <h2
          style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(32px, 3.2vw, 52px)',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            lineHeight: 1.2,
            color: 'var(--text-primary)',
            marginBottom: '16px',
            margin: '0 0 16px 0',
          }}
        >
          LES MOMENTS DE LA JOURNÉE
        </h2>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '0.02em', lineHeight: 1.6, color: '#666666', maxWidth: '800px', margin: '0 auto' }}>
          Des instants gourmands, pensés avec passion pour sublimer vos journées
        </p>
      </div>

      {/* Grid 3x2 */}
      <div className="reveal creations-grid-wrap" style={{ padding: '48px 72px 48px 72px', flexShrink: 0 }}>
        <div className="creations-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', gridAutoRows: '340px', maxWidth: '1280px', margin: '0 auto' }}>
          {creations.map((item) => (
            <div key={item.label} style={{ overflow: 'hidden' }}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .creations-section { height: auto !important; padding-bottom: 48px; }
          .creations-title-wrap { padding: 32px 20px 24px 20px !important; text-align: center !important; }
          .creations-grid-wrap { padding: 24px 16px 48px 16px !important; flex: unset !important; overflow: visible !important; }
          .creations-grid { grid-template-columns: 1fr !important; height: auto !important; gap: 12px !important; grid-auto-rows: minmax(240px, auto) !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .creations-section { height: auto !important; padding-bottom: 48px; }
          .creations-title-wrap { padding: 32px 40px 24px 40px !important; }
          .creations-grid { grid-template-columns: 1fr 1fr !important; height: auto !important; gap: 16px !important; grid-auto-rows: minmax(280px, auto) !important; }
        }
      `}</style>

    </section>
  )
}
