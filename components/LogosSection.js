'use client'

import { usePathname } from 'next/navigation'
import { estAnglais } from '../lib/i18nBase'
import { t } from '../lib/en/interface'

// fonce : logo en couleur claire (turquoise, vert, rouge, dégradé) qui devenait
// gris pâle une fois passé en niveaux de gris. On le ramène à une silhouette
// sombre, au même poids que les logos déjà noirs. Réservé aux fichiers à fond
// transparent : sur un fond blanc opaque, le filtre donnerait un rectangle noir
// (vinci-v3.png est la version détourée de vinci-v2.png). opacite : dosage par
// logo quand la silhouette est trop massive (lettres grasses de SIA).
const logos = [
  // Hauteurs calibrées sur la « masse d'encre » de chaque logo (surface
  // sombre réellement couverte au rendu), pour un poids visuel homogène.
  { name: 'Coyote',           src: '/logos/coyote.png', height: '53px', fonce: true },
  { name: 'Wella Company',    src: '/logos/wella.jpg', height: '47px' },
  { name: 'SNCF',             src: '/logos/sncf.png', height: '30px' },
  { name: 'VINCI',            src: '/logos/vinci-v3.png', height: '40px', maxWidth: '153px', fonce: true },
  { name: 'Le Monde',         src: '/logos/lemonde.png', height: '30px', maxWidth: '122px' },
  { name: 'H&M',              src: '/logos/hm.svg', height: '40px', fonce: true },
  { name: 'Carglass',         src: '/logos/carglass.svg', height: '36px' },
  { name: 'Chanel',           src: '/logos/chanel.svg', height: '22px', maxWidth: '140px' },
  { name: 'TotalEnergies',    src: '/logos/totalenergies.png', height: '45px', fonce: true },
  { name: 'Talan',            src: '/logos/talan.png', height: '35px' },
  { name: 'SIA',              src: '/logos/sia-v3.svg', height: '36px', fonce: true },
  { name: 'Ringover',         src: '/logos/ringover-v3.svg', height: '30px', fonce: true },
  { name: 'DS Automobiles',   src: '/logos/ds-v2.svg', height: '62px' },
]

// On duplique pour le défilement infini
const track = [...logos, ...logos, ...logos]

export default function LogosSection({ subtitle, subtitleEn, style: extraStyle, label, labelEn }) {
  // Même règle que DevisRapide : sur /en, un libellé français passé en prop
  // ne doit pas écraser l'anglais.
  const langue = estAnglais(usePathname() || '/') ? 'en' : 'fr'
  label = (langue === 'en' ? labelEn : label) || t('logos.label', langue)
  subtitle = langue === 'en' ? subtitleEn : subtitle
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
        fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'rgba(17,17,17,0.38)',
        textAlign: 'center',
        marginBottom: subtitle ? '10px' : '24px',
      }}>
        {label}
      </p>

      {subtitle && (
        <p style={{
          fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif",
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
                filter: logo.fonce ? 'brightness(0)' : 'grayscale(1)',
                opacity: logo.fonce ? (logo.opacite || 0.84) : 1,
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
