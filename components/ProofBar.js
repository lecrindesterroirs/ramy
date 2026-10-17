import { GBP_RATING_LABEL, GBP_REVIEWS, GBP_URL, PROOF } from '../lib/site'

// Bandeau de chiffres de confiance (modèle Prémices / Biux). Source unique : PROOF
// et la note Google dans lib/site.js. Texte visible, pas de balisage d'étoiles.
const SANS = "'Neue Montreal', sans-serif"
const SERIF = "'Baskerville Display PT', Georgia, serif"

export default function ProofBar({ lang = 'fr' }) {
  const en = lang === 'en'
  const items = en
    ? [
        [`${GBP_RATING_LABEL.replace(',', '.')}/5`, `${GBP_REVIEWS} Google reviews`, GBP_URL],
        [PROOF.personnes.en, 'people served'],
        [PROOF.entreprises.en, 'companies'],
        ['Bain, Chanel, AbbVie', 'among our clients'],
        ['6:30 am', 'first deliveries'],
      ]
    : [
        [`${GBP_RATING_LABEL}/5`, `${GBP_REVIEWS} avis Google`, GBP_URL],
        [PROOF.personnes.fr, 'personnes servies'],
        [PROOF.entreprises.fr, 'entreprises clientes'],
        ['Bain, Chanel, AbbVie', 'parmi nos clients'],
        ['6h30', 'premières livraisons'],
      ]
  return (
    <div className="proof-bar" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '18px 40px', padding: '26px 24px', borderTop: '1px solid rgba(17,17,17,0.08)', borderBottom: '1px solid rgba(17,17,17,0.08)', background: '#FFFFFF' }}>
      {items.map(([big, small, href]) => {
        const inner = (
          <>
            <span style={{ display: 'block', fontFamily: SERIF, fontSize: '26px', lineHeight: 1.1, color: 'var(--text-primary)' }}>{big}</span>
            <span style={{ display: 'block', fontFamily: SANS, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: '6px' }}>{small}</span>
          </>
        )
        return (
          <div key={small} style={{ textAlign: 'center', minWidth: '120px' }}>
            {href ? <a href={href} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>{inner}</a> : inner}
          </div>
        )
      })}
    </div>
  )
}
