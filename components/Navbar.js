'use client'

import { useState, useEffect, useRef } from 'react'

const dropdowns = {
  creations: [
    { label: 'Petits-Déjeuners & Pauses', href: '/creations/petits-dejeuners-et-pauses' },
    { label: 'Plateaux Repas', href: '/creations/plateaux-repas' },
    { label: 'Cocktails & Buffets', href: '/creations/cocktails-et-buffets' },
    { label: 'Boissons', href: '/creations/boissons' },
    { label: 'Événements Saisonniers', href: '/creations/evenements-saisonniers' },
  ],
  univers: [
    { label: 'Notre Maison', href: '/univers/notre-maison' },
    { label: 'Nos Artisans', href: '/univers/nos-artisans' },
    { label: 'Nos Engagements', href: '/univers/nos-engagements' },
    { type: 'separator', label: 'Pour vos événements' },
    { label: 'CODIR, COMEX & Direction', href: '/occasions/petit-dejeuner-codir' },
    { label: 'Séminaires d\'entreprise', href: '/occasions/seminaire-entreprise' },
    { label: 'Accueil & Réception client', href: '/occasions/accueil-client' },
    { label: 'Journées de formation', href: '/occasions/journee-formation' },
    { label: 'Team Building & Cohésion', href: '/occasions/team-building' },
    { label: 'Goûter d\'entreprise', href: '/occasions/gouter-entreprise' },
  ],
}

const allLinks = [
  { label: 'Nos Créations', href: '/creations/petits-dejeuners-et-pauses' },
  { label: "L'Univers", href: '/univers/notre-maison' },
  { label: 'Le Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },

]

export default function Navbar({ showBanner = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Bandeau défilant (page produit uniquement) ── */}
      {showBanner && <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 101,
        height: 'var(--banner-h)',
        background: 'var(--accent)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <div className="banner-sole" style={{
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          whiteSpace: 'nowrap',
          position: 'absolute',
        }}>
          Commandez jusqu'à la veille avant 14h &nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp; Livraison dès 6h30 &nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp; Paris & Île-de-France
        </div>
        <style suppressHydrationWarning>{`
          .banner-sole {
            animation: bannerOne 38s linear infinite;
          }
          @keyframes bannerOne {
            0%   { transform: translateX(110vw); }
            100% { transform: translateX(-110vw); }
          }
        `}</style>
      </div>}

      <nav
        className={scrolled ? 'nav-bar' : 'nav-bar nav-bar-hero'}
        style={{
          position: 'fixed',
          top: showBanner ? 'var(--banner-h)' : 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'var(--bg-primary)' : 'transparent',
          padding: scrolled ? '16px 80px' : '26px 80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.6s ease, padding 0.4s ease',
          borderBottom: scrolled ? '1px solid rgba(17,17,17,0.06)' : 'none',
        }}
      >
        {/* Left nav */}
        <div className="nav-left" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {[
            { key: 'creations', label: 'Nos Créations' },
            { key: 'univers', label: "L'Univers" },
          ].map(({ key, label }) => (
            <div
              key={key}
              style={{ position: 'relative' }}
              onMouseEnter={() => { clearTimeout(closeTimer.current); setActiveDropdown(key) }}
              onMouseLeave={() => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 180) }}
            >
              <button
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  color: '#111111',
                  background: 'none',
                  border: 'none',
                                    display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'color 0.4s ease',
                  padding: 0,
                }}
              >
                {label}
                <span style={{ fontSize: '10px', opacity: 0.7 }}>▾</span>
              </button>

              {activeDropdown === key && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 16px)',
                    left: 0,
                    background: '#FFFFFF',
                    borderTop: '1px solid rgba(17,17,17,0.08)',
                    padding: '28px 36px',
                    minWidth: '230px',
                    boxShadow: '0 24px 48px rgba(17,17,17,0.06)',
                    animation: 'dropdownReveal 0.25s ease',
                  }}
                >
                  {dropdowns[key].map((item, idx) => {
                    if (item.type === 'separator') {
                      return (
                        <div key={idx} style={{ marginTop: '14px', marginBottom: '8px', paddingTop: '14px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
                          <p style={{
                            fontFamily: "'Neue Montreal', sans-serif",
                            fontSize: '9px',
                            fontWeight: 600,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'rgba(17,17,17,0.3)',
                            marginBottom: '4px',
                          }}>
                            {item.label}
                          </p>
                        </div>
                      )
                    }
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        style={{
                          fontFamily: "'Neue Montreal', sans-serif",
                          fontSize: '12px',
                          fontWeight: 400,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#111111',
                          padding: '9px 0',
                          display: 'block',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.target.style.color = '#111111'}
                      >
                        {item.label}
                      </a>
                    )
                  })}
                </div>
              )}
            </div>
          ))}

          {/* Le Journal — lien simple à côté de L'Univers */}
          <a
            href="/journal"
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.01em',
              color: '#111111',
              textDecoration: 'none',
              transition: 'color 0.4s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = '#111111'}
          >
            Le Journal
          </a>
        </div>

        {/* Logo center */}
        <a
          href="/"
          className={scrolled ? 'nav-logo' : 'nav-logo nav-logo-hero'}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            textDecoration: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.querySelectorAll('span').forEach(s => s.style.color = 'var(--accent)') }}
          onMouseLeave={e => { e.currentTarget.querySelectorAll('span').forEach(s => s.style.color = '#111111') }}
        >
          <span
            style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: '24px',
              fontWeight: 400,
              letterSpacing: '0.12em',
              color: '#111111',
              transition: 'color 0.4s ease',
              lineHeight: 1,
            }}
          >
            L'ÉCRIN
          </span>
          <span
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '9.5px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#111111',
              transition: 'color 0.4s ease',
            }}
          >
            TRAITEUR
          </span>
        </a>

        {/* Right nav */}
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>


          <a
            href="/contact"
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '9px 18px',
              border: '1px solid rgba(17,17,17,0.2)',
              color: 'rgba(17,17,17,0.65)',
              background: 'transparent',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              textDecoration: 'none',
              transition: 'border-color 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.5)'; e.currentTarget.style.color = '#111111' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.2)'; e.currentTarget.style.color = 'rgba(17,17,17,0.65)' }}
          >
            Contact <span>→</span>
          </a>

          <a
            href="/devis"
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              background: 'var(--accent)',
              border: '1px solid var(--accent)',
              padding: '9px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              transition: 'opacity 0.35s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Demande de devis <span>→</span>
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            zIndex: 200,
            position: 'relative',
            marginLeft: 'auto',
          }}
        >
          {mobileOpen ? (
            <span style={{ fontSize: '22px', lineHeight: 1, color: '#111111', fontWeight: 300 }}>✕</span>
          ) : (
            <>
              <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#111111' }} />
              <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#111111' }} />
              <span style={{ display: 'block', width: '16px', height: '1.5px', background: '#111111' }} />
            </>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'var(--bg-primary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '100px 40px 60px',
            animation: 'mobileMenuIn 0.32s ease',
            overflowY: 'auto',
          }}
        >
          {/* Liens */}
          <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '320px', marginTop: '8px' }}>

            {/* Nos Créations — avec sous-menu */}
            <div style={{ width: '100%', borderBottom: '1px solid rgba(17,17,17,0.06)' }}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'creations' ? null : 'creations')}
                style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: '26px',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#111111',
                  textAlign: 'center',
                  padding: '18px 0',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                Nos Créations
                <span style={{ fontSize: '16px', color: 'var(--accent)', transition: 'transform 0.25s ease', transform: mobileExpanded === 'creations' ? 'rotate(90deg)' : 'rotate(0deg)', display: 'inline-block' }}>›</span>
              </button>
              {mobileExpanded === 'creations' && (
                <div style={{ paddingBottom: '12px' }}>
                  {dropdowns.creations.map(item => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                      style={{
                        fontFamily: "'Neue Montreal', sans-serif",
                        fontSize: '13px',
                        fontWeight: 400,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'rgba(17,17,17,0.65)',
                        padding: '10px 0',
                        display: 'block',
                        textAlign: 'center',
                        textDecoration: 'none',
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* L'Univers — avec sous-menu */}
            <div style={{ width: '100%', borderBottom: '1px solid rgba(17,17,17,0.06)' }}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'univers' ? null : 'univers')}
                style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: '26px',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#111111',
                  textAlign: 'center',
                  padding: '18px 0',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                L'Univers
                <span style={{ fontSize: '16px', color: 'var(--accent)', transition: 'transform 0.25s ease', transform: mobileExpanded === 'univers' ? 'rotate(90deg)' : 'rotate(0deg)', display: 'inline-block' }}>›</span>
              </button>
              {mobileExpanded === 'univers' && (
                <div style={{ paddingBottom: '12px' }}>
                  {dropdowns.univers.map((item, idx) => {
                    if (item.type === 'separator') {
                      return (
                        <p key={idx} style={{
                          fontFamily: "'Neue Montreal', sans-serif",
                          fontSize: '9px',
                          fontWeight: 600,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: 'rgba(17,17,17,0.3)',
                          textAlign: 'center',
                          padding: '12px 0 4px',
                          borderTop: '1px solid rgba(17,17,17,0.06)',
                          marginTop: '8px',
                        }}>
                          {item.label}
                        </p>
                      )
                    }
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                        style={{
                          fontFamily: "'Neue Montreal', sans-serif",
                          fontSize: '13px',
                          fontWeight: 400,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'rgba(17,17,17,0.65)',
                          padding: '10px 0',
                          display: 'block',
                          textAlign: 'center',
                          textDecoration: 'none',
                        }}
                      >
                        {item.label}
                      </a>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Le Journal, Contact */}
            {[
              { label: 'Le Journal', href: '/journal' },
              { label: 'Contact', href: '/contact' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: '26px',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#111111',
                  textAlign: 'center',
                  padding: '18px 0',
                  borderBottom: '1px solid rgba(17,17,17,0.06)',
                  width: '100%',
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="/devis"
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: '40px',
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                background: 'var(--accent)',
                padding: '14px 36px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Demande de devis <span>→</span>
            </a>
          </nav>
        </div>
      )}

      <style suppressHydrationWarning>{`
        @keyframes dropdownReveal {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobileMenuIn {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .nav-left  { display: none !important; }
          .nav-right { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-logo-hero { top: 48px !important; transform: translateX(-50%) !important; }
          .nav-bar-hero .nav-hamburger { align-self: flex-start; margin-top: 22px; }
          .nav-banner-text { display: none !important; }
          .nav-banner-short { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </>
  )
}
