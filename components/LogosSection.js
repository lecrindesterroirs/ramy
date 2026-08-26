'use client'

const logos = [
  { name: 'Le Monde',         src: '/logos/lemonde.png', height: '40px' },
  { name: 'SNCF',             src: '/logos/sncf.png' },
  { name: 'DS Automobiles',   src: '/logos/ds.png', height: '56px' },
  { name: 'Carglass',         src: '/logos/carglass.svg' },
  { name: 'Wella Company',    src: '/logos/wella.jpg' },
  { name: 'Coyote',           src: '/logos/coyote.png' },
  { name: 'TotalEnergies',    src: '/logos/totalenergies.png' },
  { name: 'Talan',            src: '/logos/talan.png' },
  { name: 'SIA',              src: '/logos/sia.png', height: '46px' },
  { name: 'Ringover',         src: '/logos/ringover.png', height: '56px' },
  { name: 'VINCI',            src: '/logos/vinci.png', height: '46px', maxWidth: '200px' },
]

// On duplique pour le défilement infini
const track = [...logos, ...logos, ...logos]

export default function LogosSection({ subtitle, style: extraStyle }) {
  return (
    <section
      style={{
        background: 'var(--bg-primary)',
        padding: '28px 0',
        borderBottom: '1px solid rgba(17,17,17,0.06)',
        overflow: 'hidden',
        ...extraStyle,
      }}
    >
      <p style={{
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'rgba(17,17,17,0.38)',
        textAlign: 'center',
        marginBottom: subtitle ? '10px' : '24px',
      }}>
        Ils nous font confiance
      </p>

      {subtitle && (
        <p style={{
          fontFamily: "'Baskerville Display PT', Georgia, serif",
          fontSize: 'clamp(20px, 2vw, 28px)',
          fontWeight: 400,
          color: 'var(--text-primary)',
          textAlign: 'center',
          marginBottom: '32px',
          letterSpacing: '-0.005em',
          lineHeight: 1.2,
        }}>
          {subtitle}
        </p>
      )}

      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 22s linear infinite',
        }}
      >
        {track.map((logo, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 64px',
              flexShrink: 0,
            }}
          >
            <img loading="lazy" src={logo.src}
              alt={logo.name}
              style={{
                height: logo.height || '36px',
                width: 'auto',
                maxWidth: logo.maxWidth || '150px',
                objectFit: 'contain',
                filter: 'grayscale(1)',
                mixBlendMode: 'multiply',
              }}
            />
          </div>
        ))}
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none; }
        }
      ` }} />
    </section>
  )
}
