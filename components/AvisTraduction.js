'use client'

/*
  Encart en tête des pages légales anglaises.

  Les CGV, les mentions légales et la politique de confidentialité sont régies
  par le droit français et rédigées en français : la version anglaise est une
  traduction de courtoisie, sans valeur contractuelle. Cet encart le dit
  explicitement, pour qu'un client ne puisse pas s'appuyer sur une nuance de
  la traduction en cas de litige.
*/
export default function AvisTraduction({ lien }) {
  return (
    <div style={{
      fontFamily: "'Neue Montreal', sans-serif",
      fontSize: '13px',
      lineHeight: 1.75,
      color: 'var(--text-secondary)',
      marginBottom: '48px',
      padding: '20px 24px',
      background: 'var(--bg-secondary)',
      borderLeft: '2px solid var(--accent)',
    }}>
      This is a courtesy translation, provided for information only.{' '}
      <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Only the French version has contractual force</strong>{' '}
      and prevails in the event of any discrepancy or dispute.{' '}
      <a href={lien} style={{ color: 'var(--accent-deep)', textDecoration: 'none' }}>Read the French version</a>.
    </div>
  )
}
