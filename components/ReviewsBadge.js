'use client'

import { GBP_URL, GBP_RATING_LABEL, GBP_REVIEWS } from '../lib/site'

// Badge preuve sociale "5,0★ · Avis Google", cliquable vers la fiche GBP.
// variant   : 'light' (fond clair, texte foncé) | 'onImage' (sur photo/scrim, texte foncé chaud)
// showCount : afficher le nombre d'avis (par défaut non, juste les étoiles + note)
export default function ReviewsBadge({ variant = 'light', showCount = false, style = {} }) {
  const isOnImage = variant === 'onImage'
  const textColor = isOnImage ? 'rgba(24,18,16,0.9)' : 'var(--text-secondary)'
  // L'aria-label doit CONTENIR le texte visible (WCAG 2.5.3), visible = "5,0 · [N ]Avis Google"
  const ariaLabel = showCount
    ? `${GBP_RATING_LABEL} · ${GBP_REVIEWS} avis Google, note ${GBP_RATING_LABEL} sur 5, voir la fiche`
    : `${GBP_RATING_LABEL} · Avis Google, note ${GBP_RATING_LABEL} sur 5, voir la fiche`

  return (
    <a
      href={GBP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '9px',
        textDecoration: 'none',
        fontFamily: "'Neue Montreal', sans-serif",
        transition: 'opacity 0.25s ease',
        ...style,
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
    >
      <span aria-hidden="true" style={{ display: 'inline-flex', gap: '1px' }}>
        {[0, 1, 2, 3, 4].map(i => (
          <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#E0A126" style={{ display: 'block' }}>
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
          </svg>
        ))}
      </span>
      <span style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.01em', color: textColor, whiteSpace: 'nowrap' }}>
        <strong style={{ fontWeight: 600, color: isOnImage ? '#171310' : 'var(--text-primary)' }}>{GBP_RATING_LABEL}</strong>
        {' · '}{showCount ? `${GBP_REVIEWS} avis Google` : 'Avis Google'}
      </span>
    </a>
  )
}
