export default function PrometteSection() {
  return (
    <section
      className="promette-section"
      style={{
        background: 'var(--bg-secondary)',
        padding: '160px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto',
        }}
      >
        <p className="label reveal" style={{ marginBottom: '24px' }}>
          L'Écrin Traiteur
        </p>

        <h2
          className="reveal"
          style={{
            maxWidth: '760px',
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(40px, 4vw, 64px)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.08,
            letterSpacing: '0.01em',
            color: 'var(--text-primary)',
          }}
        >
          Ce que vous servez dit quelque chose de vous.
        </h2>

        <p
          className="body reveal"
          style={{
            marginTop: '36px',
            maxWidth: '460px',
            textAlign: 'center',
          }}
        >
          La pause en entreprise mérite mieux qu'un simple café.<br />
          Mado Paris, Maison Marques, Mariage Frères...
        </p>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .promette-section { padding: 80px 0 !important; }
          .promette-section .container { padding: 0 24px !important; }
          .promette-section h2 { font-size: clamp(28px, 7vw, 40px) !important; }
        }
      `}</style>
    </section>
  )
}
