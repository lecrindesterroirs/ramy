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
  color: 'var(--accent-deep)',
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

          {/* Colonnes de liens — plan de site & maillage interne (présent sur toutes les pages) */}
          <div className="footer-cols" style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '40px' }}>
            {[
              { title: 'La Carte', links: [
                { label: 'Petits-déjeuners & Pauses', href: '/creations/petits-dejeuners-et-pauses' },
                { label: 'Pauses gourmandes', href: '/creations/pauses-gourmandes' },
                { label: 'Plateaux repas', href: '/creations/plateaux-repas' },
                { label: 'Lunch box', href: '/creations/lunch-box' },
                { label: 'Cocktails', href: '/creations/cocktails' },
                { label: 'Buffet à partager', href: '/creations/a-partager' },
                { label: 'Plateaux apéritifs', href: '/creations/plateaux-aperitifs' },
                { label: 'Animations culinaires', href: '/creations/animations-culinaires' },
                { label: 'Boissons', href: '/creations/boissons' },
                { label: 'Personnalisation', href: '/creations/personnalisation' },
                { label: 'Événements saisonniers', href: '/creations/evenements-saisonniers' },
                { label: 'Réceptions sur-mesure', href: '/creations/receptions-sur-mesure' },
                { label: 'Coffrets cadeaux', href: '/creations/coffrets-cadeaux' },
              ]},
              { title: 'Occasions', links: [
                { label: "Petit-déjeuner d'entreprise", href: '/occasions/petit-dejeuner-entreprise' },
                { label: 'Séminaire & réunion', href: '/occasions/seminaire-entreprise' },
                { label: "Cocktail d'entreprise", href: '/occasions/cocktail-entreprise' },
                { label: 'CODIR & COMEX', href: '/occasions/petit-dejeuner-codir' },
                { label: "Déjeuner d'entreprise", href: '/occasions/dejeuner-entreprise' },
                { label: 'Traiteur halal', href: '/traiteur-halal' },
                { label: 'Traiteur éco-responsable', href: '/traiteur-eco-responsable' },
                { label: 'Traiteur healthy', href: '/traiteur-healthy' },
                { label: 'Toutes les occasions', href: '/occasions' },
              ]},
              { title: 'Traiteur à Paris & IDF', links: [
                { label: 'Traiteur Paris', href: '/traiteur/paris' },
                { label: 'Traiteur La Défense', href: '/traiteur/la-defense' },
                { label: 'Traiteur Boulogne', href: '/traiteur/boulogne-billancourt' },
                { label: 'Traiteur Neuilly', href: '/traiteur/neuilly-sur-seine' },
                { label: 'Traiteur Levallois', href: '/traiteur/levallois-perret' },
                { label: 'Traiteur Issy', href: '/traiteur/issy-les-moulineaux' },
                { label: 'Toutes les zones', href: '/traiteur' },
              ]},
              { title: "L'Univers", links: [
                { label: 'Notre Maison', href: '/univers/notre-maison' },
                { label: 'Nos Artisans', href: '/univers/nos-artisans' },
                { label: 'Nos Engagements', href: '/univers/nos-engagements' },
                { label: 'Le Journal', href: '/journal' },
              ]},
              { title: 'Entreprise', links: [
                { label: 'Contact', href: '/contact' },
                { label: 'Obtenir un devis', href: '/devis' },
                { label: '01 74 54 23 10', href: 'tel:+33174542310' },
                { label: 'commercial@lecrin-traiteur.fr', href: 'mailto:commercial@lecrin-traiteur.fr' },
                { label: '63 bis rue de Sèvres, Boulogne-Billancourt', href: 'https://www.google.com/maps/search/?api=1&query=63+bis+rue+de+Sèvres+92100+Boulogne-Billancourt' },
              ]},
            ].map(col => (
              <div key={col.title}>
                <span style={colTitleStyle}>{col.title}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  {col.links.map(l => {
                    const ext = l.href.startsWith('http')
                    return (
                      <a key={l.label} href={l.href} style={linkStyle}
                        target={ext ? '_blank' : undefined} rel={ext ? 'noopener noreferrer' : undefined}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                      >{l.label}</a>
                    )
                  })}
                </div>
              </div>
            ))}
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
                style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.62)', textDecoration: 'none', letterSpacing: '0.03em', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.62)'}
              >{l.label}</a>
            ))}
          </div>

          {/* Droite */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.6)', letterSpacing: '0.03em' }}>
              © 2026 L'Écrin Traiteur — L'Écrin des Terroirs
            </p>
          </div>

        </div>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .footer-main { padding: 60px 24px 48px !important; }
          .footer-grid { flex-direction: column !important; gap: 40px !important; }
          .footer-grid > div:first-child { width: 100% !important; }
          .footer-cols { grid-template-columns: 1fr 1fr !important; gap: 32px 40px !important; }
          .footer-bottom { flex-direction: column !important; align-items: center !important; gap: 16px !important; padding: 20px 24px !important; }
          .footer-bottom > div:first-child { flex-wrap: wrap !important; gap: 12px 20px !important; justify-content: center !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .footer-main { padding: 60px 40px 48px !important; }
          .footer-cols { grid-template-columns: repeat(3, 1fr) !important; gap: 28px !important; }
        }
      ` }} />

    </footer>
  )
}
