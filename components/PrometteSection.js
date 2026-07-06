/* Grain fin pour donner de la matière au fond (évite l'aplat "cheap"). */
const GRAIN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
  <filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/>
  <feColorMatrix type='saturate' values='0'/></filter>
  <rect width='100%' height='100%' filter='url(#g)' opacity='0.35'/>
</svg>`
const GRAIN = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`

export default function PrometteSection() {
  return (
    <section
      className="promette-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '160px 0',
        background: 'radial-gradient(ellipse 80% 70% at 50% 42%, #FCF8F1 0%, #F4EDDF 58%, #EEE5D3 100%)',
      }}
    >
      {/* Voile de grain — matière subtile */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: GRAIN,
          backgroundSize: '260px',
          opacity: 0.5,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />
      {/* Filets dorés très fins, haut & bas */}
      <div aria-hidden style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 'min(560px, 60%)', height: '1px', background: 'linear-gradient(to right, transparent, rgba(169,128,59,0.35), transparent)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 'min(560px, 60%)', height: '1px', background: 'linear-gradient(to right, transparent, rgba(169,128,59,0.35), transparent)' }} />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
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
          Chaque détail compte.
        </h2>

        <p
          className="body reveal"
          style={{
            marginTop: '36px',
            maxWidth: '460px',
            textAlign: 'center',
          }}
        >
          Recevoir en entreprise mérite mieux qu'un simple café.<br />
          Mado Paris, Maison Marques, Mariage Frères...
        </p>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .promette-section { padding: 80px 0 !important; }
          .promette-section .container { padding: 0 24px !important; }
          .promette-section h2 { font-size: clamp(28px, 7vw, 40px) !important; }
        }
      ` }} />
    </section>
  )
}
