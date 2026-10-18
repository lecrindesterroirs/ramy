const T_MANIFESTO = {
  fr: {
    l1: 'Nous préférons dix produits remarquables',
    l2: 'à cent produits oubliables.',
    tagline: "L'art de recevoir, avec justesse",
  },
  en: {
    l1: 'We would rather have ten products worth remembering',
    l2: 'than a hundred nobody mentions.',
    tagline: 'The art of hosting, done right',
  },
}

export default function ManifestoSection({ lang = 'fr' }) {
  const T = T_MANIFESTO[lang] || T_MANIFESTO.fr
  return (
    <section
      className="manifesto-section"
      style={{
        background: 'var(--bg-secondary)',
        padding: '140px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="reveal"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '700px',
          padding: '0 40px',
        }}
      >
        {/* Trait doré centré */}
        <span
          style={{
            width: '32px',
            height: '1px',
            background: 'var(--accent)',
            display: 'block',
            marginBottom: '52px',
          }}
        />

        {/* Citation */}
        <blockquote
          style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(28px, 3.6vw, 52px)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            margin: 0,
            marginBottom: '52px',
          }}
        >
          {T.l1}<br />
          {T.l2}
        </blockquote>

        {/* Monogramme L'Écrin */}
        <img loading="lazy" src="/logo-footer.svg"
          alt="L'Écrin"
          style={{
            height: '56px',
            width: 'auto',
            marginBottom: '20px',
            opacity: 0.85,
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--accent-deep)',
            margin: 0,
          }}
        >
          {T.tagline}
        </p>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .manifesto-section { padding: 80px 0 !important; }
          .manifesto-section > div { padding: 0 24px !important; }
        }
      ` }} />
    </section>
  )
}
