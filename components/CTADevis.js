export function CTADevis({ category = 'general', phone = '01 74 54 23 10' }) {
  return (
    <div style={{
      backgroundColor: '#E0A126',
      color: 'white',
      padding: '24px',
      borderRadius: '8px',
      textAlign: 'center',
      marginBottom: '40px',
      fontFamily: "'Neue Montreal', sans-serif"
    }}>
      <h2 style={{ margin: '0 0 12px 0', fontSize: '24px' }}>
        Demander un devis
      </h2>
      <p style={{ margin: '0 0 16px 0', fontSize: '16px' }}>
        Devis gratuit sous 24h. Livraison garantie à l'heure exacte.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a 
          href={`/devis?categorie=${category}`}
          style={{
            backgroundColor: 'white',
            color: '#E0A126',
            padding: '12px 24px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block'
          }}
        >
          Demander un devis
        </a>
        <a 
          href={`tel:${phone.replace(/\s/g, '')}`}
          style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block',
            border: '2px solid white'
          }}
        >
          Appeler : {phone}
        </a>
      </div>
    </div>
  )
}
