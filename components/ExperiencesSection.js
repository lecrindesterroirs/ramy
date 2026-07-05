'use client'

export default function ExperiencesSection() {
  return (
    <section
      className="experiences-section"
      style={{
        background: 'var(--bg-secondary)',
        height: '100vh',
        paddingTop: 'var(--header-h)',
        display: 'flex',
        alignItems: 'center',
        padding: '72px 40px 0 clamp(80px, 8vw, 140px)',
        gap: 'clamp(60px, 6vw, 100px)',
      }}
    >

      {/* ── Bloc texte ── */}
      <div
        className="reveal experiences-text"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '520px',
        }}
      >
        <p className="label" style={{ marginBottom: '28px' }}>
          L'Écrin Traiteur
        </p>

        <h2
          style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(30px, 3.2vw, 50px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '0.01em',
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}
        >
          Des moments qui font<br />
          du bien au bureau.
        </h2>

        <p
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            maxWidth: '360px',
            marginBottom: '48px',
          }}
        >
          Du petit-déjeuner de rentrée au cocktail de fin d'année,<br />
          en passant par la pause du mardi matin,<br />
          on s'adapte à votre rythme.
        </p>

        <a
          href="/creations/petits-dejeuners-et-pauses"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
            borderBottom: '1px solid rgba(17,17,17,0.3)',
            paddingBottom: '5px',
            width: 'fit-content',
            transition: 'opacity 0.35s ease',
                      }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.45'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Découvrir nos créations <span style={{ fontSize: '15px' }}>→</span>
        </a>
      </div>

      {/* ── Image ── */}
      <div
        className="reveal img-zoom experiences-image"
        style={{
          flexShrink: 0,
          width: 'clamp(300px, 44vw, 620px)',
          height: 'min(680px, calc(100vh - 72px - 80px))',
          overflow: 'hidden',
        }}
      >
        <img
          src="/creations-1.png"
          alt="Réception L'Écrin Traiteur"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .experiences-section {
            height: auto !important;
            flex-direction: column-reverse !important;
            padding: 48px 24px 64px !important;
            gap: 40px !important;
            align-items: flex-start !important;
          }
          .experiences-image {
            width: 100% !important;
            height: 280px !important;
            flex-shrink: unset !important;
          }
          .experiences-text {
            max-width: 100% !important;
          }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .experiences-section {
            height: auto !important;
            padding: 72px 40px 80px !important;
          }
        }
      ` }} />

    </section>
  )
}
