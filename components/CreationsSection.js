const creations = [
  {
    label: 'Événements Saisonniers',
    subtitle: 'Noël, Halloween, Galette des Rois...',
    credit: "L'Écrin Traiteur",
    img: '/creations-featured.webp',
    href: '/creations/evenements-saisonniers',
    featured: true,
  },
  {
    label: 'Petits-Déjeuners',
    credit: "L'Écrin Traiteur",
    img: '/creations-1.png',
    imgPosition: 'center 75%',
    href: '/creations/petits-dejeuners-et-pauses',
  },
  {
    label: 'Pauses Gourmandes',
    credit: "L'Écrin Traiteur",
    img: '/creations-2.png',
    href: '/creations/petits-dejeuners-et-pauses',
  },
  {
    label: 'Cocktails & Buffets',
    credit: "L'Écrin Traiteur",
    img: '/creations-3.png',
    href: '/creations/cocktails-et-buffets',
  },
  {
    label: 'Plateaux Repas',
    credit: "L'Écrin Traiteur",
    img: '/creations-4.png',
    imgPosition: 'center bottom',
    href: '/creations/plateaux-repas',
  },
]

function Card({ item }) {
  return (
    <a
      href={item.href}
      style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}
    >
      <div
        className="img-zoom"
        style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}
      >
        <img
          src={item.img}
          alt={item.label}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.imgPosition || 'center center', display: 'block', transition: 'transform 0.6s ease' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0) 52%)' }} />
        <div style={{ position: 'absolute', bottom: '22px', left: '22px', right: '22px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#FFFFFF', marginBottom: item.subtitle ? '5px' : '6px' }}>
            {item.label}
          </p>
          {item.subtitle && (
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: '8px' }}>
              {item.subtitle}
            </p>
          )}
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}>
            {item.credit}
          </p>
        </div>
      </div>
    </a>
  )
}

export default function CreationsSection() {
  const [featured, ...rest] = creations

  return (
    <section
      className="creations-section"
      style={{
        background: 'var(--bg-primary)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 'var(--header-h)',
      }}
    >

      {/* Title */}
      <div className="reveal creations-title-wrap" style={{ padding: '32px 40px 68px 72px', flexShrink: 0 }}>
        <h2
          style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(24px, 2.6vw, 38px)',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            lineHeight: 1.15,
            color: 'var(--text-primary)',
          }}
        >
          Nos créations pensées<br />
          pour marquer les esprits
        </h2>
      </div>

      {/* Grid */}
      <div className="reveal creations-grid-wrap" style={{ flex: 1, padding: '0 40px 48px', minHeight: 0 }}>
        <div className="creations-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '10px', height: '100%', minHeight: 0 }}>

          <div className="creations-featured" style={{ minHeight: 0, overflow: 'hidden' }}>
            <Card item={featured} />
          </div>

          <div className="creations-sub-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '10px', minHeight: 0, height: '100%' }}>
            {rest.map((item) => (
              <div key={item.label} style={{ minHeight: 0, overflow: 'hidden' }}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .creations-section { height: auto !important; padding-bottom: 48px; }
          .creations-title-wrap { padding: 32px 24px 40px !important; }
          .creations-grid-wrap { padding: 0 16px 0 !important; flex: unset !important; overflow: visible !important; }
          .creations-grid { grid-template-columns: 1fr !important; height: auto !important; gap: 8px !important; }
          .creations-featured { height: 300px; }
          .creations-sub-grid { grid-template-columns: 1fr 1fr !important; grid-template-rows: 180px 180px !important; height: auto !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .creations-section { height: auto !important; padding-bottom: 48px; }
          .creations-grid { height: auto !important; min-height: 600px; }
        }
      `}</style>

    </section>
  )
}
