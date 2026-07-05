'use client'

const linkStyle = {
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '13px',
  fontWeight: 400,
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  lineHeight: 1.5,
  transition: 'color 0.25s ease',
  display: 'block',
}

const colTitleStyle = {
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '10px',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.18em',
  color: 'var(--accent)',
  marginBottom: '22px',
  display: 'block',
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(17,17,17,0.07)' }}>

      {/* ── Main ── */}
      <div className="footer-main" style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 72px 64px' }}>
        <div className="footer-grid" style={{ display: 'flex', alignItems: 'flex-start', gap: '48px' }}>

          {/* Logo + tagline */}
          <div style={{ flexShrink: 0, width: '200px' }}>
            <a href="/" style={{ textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '24px' }}>
              <img loading="lazy" src="/logo-footer.svg" alt="L'Écrin Traiteur" style={{ height: '90px', width: 'auto', display: 'block', marginBottom: '6px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, letterSpacing: '0.12em', color: '#111111', lineHeight: 1 }}>L'ÉCRIN</span>
                <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#111111', marginTop: '4px' }}>TRAITEUR</span>
              </div>
            </a>
            <div style={{ width: '28px', height: '1px', background: 'var(--accent)', marginBottom: '16px' }} />
            <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '14px', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '200px' }}>
              Des expériences pensées<br />pour marquer les esprits.
            </p>
          </div>

          {/* 4 colonnes centrées */}
          <div className="footer-cols" style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '48px' }}>

            {/* La Carte — par moments */}
            <div>
              <span style={colTitleStyle}>La Carte</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {[
                  { label: 'Petit-déjeuner & Pauses', href: '/creations/petits-dejeuners-et-pauses' },
                  { label: 'Déjeuner', href: '/creations/plateaux-repas' },
                  { label: 'Cocktail', href: '/creations/cocktails' },
                  { label: 'Boissons', href: '/creations/boissons' },
                  { label: 'Personnalisation', href: '/creations/personnalisation' },
                  { label: 'Coffrets Cadeaux', href: '/creations/coffrets-cadeaux' },
                ].map(l => (
                  <a key={l.label} href={l.href} style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >{l.label}</a>
                ))}
              </div>
            </div>

            {/* L'Univers */}
            <div>
              <span style={colTitleStyle}>L'Univers</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {[
                  { label: 'Notre Maison', href: '/univers/notre-maison' },
                  { label: 'Nos Artisans', href: '/univers/nos-artisans' },
                  { label: 'Nos Engagements', href: '/univers/nos-engagements' },
                  { label: 'Le Journal', href: '/journal' },
                ].map(l => (
                  <a key={l.label} href={l.href} style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >{l.label}</a>
                ))}
              </div>
            </div>

            {/* Entreprise */}
            <div className="footer-col-entreprise">
              <span style={colTitleStyle}>Entreprise</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {[
                  { label: 'Nos occasions', href: '/occasions' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Demande de devis', href: '/devis' },
                ].map(l => (
                  <a key={l.label} href={l.href}
                    style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >{l.label}</a>
                ))}
              </div>
            </div>

            {/* Nous contacter */}
            <div className="footer-col-contact">
              <span style={colTitleStyle}>Nous contacter</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="tel:+33760169620" style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >07 60 16 96 20</a>
                <a href="mailto:commercial@lecrin-traiteur.fr" style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >commercial@lecrin-traiteur.fr</a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=63+bis+rue+de+Sèvres+92100+Boulogne-Billancourt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >63 bis rue de Sèvres,<br />92100 Boulogne-Billancourt</a>
              <span style={{ ...linkStyle, cursor: 'default' }}>Toute Île-de-France</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)' }}>
        <div className="footer-bottom" style={{ maxWidth: '1440px', margin: '0 auto', padding: '18px 72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Légal */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {[
              { label: 'Mentions légales', href: '/mentions-legales' },
              { label: 'CGV', href: '/cgv' },
              { label: 'Confidentialité', href: '/confidentialite' },
              { label: 'Cookies', href: '/cookies' },
            ].map(l => (
              <a key={l.label} href={l.href}
                style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.38)', textDecoration: 'none', letterSpacing: '0.03em', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.38)'}
              >{l.label}</a>
            ))}
          </div>

          {/* Droite */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.35)', letterSpacing: '0.03em' }}>
              © 2026 L'Écrin Traiteur
            </p>
          </div>

        </div>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .footer-main { padding: 60px 24px 48px !important; }
          .footer-grid { flex-direction: column !important; gap: 40px !important; }
          .footer-grid > div:first-child { width: 100% !important; }
          .footer-cols { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 32px 48px !important; }
          .footer-col-contact { order: 3 !important; }
          .footer-col-entreprise { order: 4 !important; }
          .footer-bottom { flex-direction: column !important; align-items: center !important; gap: 16px !important; padding: 20px 24px !important; }
          .footer-bottom > div:first-child { flex-wrap: wrap !important; gap: 12px 20px !important; justify-content: center !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .footer-main { padding: 60px 40px 48px !important; }
          .footer-cols { gap: 32px !important; flex-wrap: wrap !important; }
        }
      ` }} />

    </footer>
  )
}
