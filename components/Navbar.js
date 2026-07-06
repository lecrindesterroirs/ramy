'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const MOMENTS = {
  petitDej: {
    label: 'Petit-déjeuner & Pauses',
    key: 'petitDej',
    cards: [
      { title: 'Petit-déjeuner', href: '/creations/petits-dejeuners-et-pauses', img: '/hero-petitdej.webp' },
      { title: 'Pauses Gourmandes', href: '/creations/pauses-gourmandes', img: '/hero-pauses-gourmandes.webp' },
      { title: 'Personnalisation', href: '/creations/personnalisation', img: '/perso-number-cake.webp' },
    ],
  },
  dejeuner: {
    label: 'Déjeuner',
    key: 'dejeuner',
    cards: [
      { title: 'Plateaux repas', href: '/creations/plateaux-repas', img: '/plateau-mediterraneen.webp' },
      { title: 'Lunch Box', href: '/creations/lunch-box', img: '/hero-lunch-box.webp' },
      { title: 'À partager', href: '/creations/a-partager', img: '/hero-a-partager.webp' },
    ],
  },
  cocktail: {
    label: 'Cocktail',
    key: 'cocktail',
    cards: [
      { title: 'Cocktails', href: '/creations/cocktails', img: '/hero-cocktail.webp' },
      { title: 'Plateaux Apéritifs', href: '/creations/plateaux-aperitifs', img: '/creations-3.webp' },
      { title: 'Animations Culinaires', href: '/creations/animations-culinaires', img: '/hero-animations.webp' },
    ],
  },
  boissons: {
    label: 'Boissons',
    key: 'boissons',
    href: '/creations/boissons',
  },
}

const UNIVERS_ITEMS = [
  { label: 'Notre Maison', href: '/univers/notre-maison' },
  { label: 'Nos Artisans', href: '/univers/nos-artisans' },
  { label: 'Nos Engagements', href: '/univers/nos-engagements' },
]

const JOURNAL_ITEMS = {
  main: [
    { label: 'Le Journal', href: '/journal' },
    { label: 'Tous les articles', href: '/journal' },
  ],
  categories: [
    { label: 'QCVT', href: '/journal?categorie=QCVT' },
    { label: 'Conseils', href: '/journal?categorie=Conseils' },
    { label: 'Inspirations', href: '/journal?categorie=Inspirations' },
  ],
  occasions: [
    { label: 'CODIR & COMEX', href: '/occasions/petit-dejeuner-codir' },
    { label: 'Séminaires d\'entreprise', href: '/occasions/seminaire-entreprise' },
    { label: 'Accueil & Réception client', href: '/occasions/accueil-client' },
    { label: 'Journées de formation', href: '/occasions/journee-formation' },
    { label: 'Team Building', href: '/occasions/team-building' },
    { label: 'Petit-déjeuner d\'entreprise', href: '/occasions/petit-dejeuner-entreprise' },
    { label: 'Déjeuner d\'entreprise', href: '/occasions/dejeuner-entreprise' },
    { label: 'Cocktail d\'entreprise', href: '/occasions/cocktail-entreprise' },
    { label: 'Goûter d\'entreprise', href: '/occasions/gouter-entreprise' },
    { label: 'Afterwork', href: '/occasions/afterwork-entreprise' },
  ],
}

export default function Navbar({ showBanner = false, forceScrolled = false }) {
  const pathname = usePathname()
  const alwaysScrolled = forceScrolled || pathname !== '/'

  const [scrolled, setScrolled] = useState(alwaysScrolled)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    if (alwaysScrolled) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [alwaysScrolled])

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
          Commandez jusqu'à la veille avant 14h &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Livraison dès 6h30 &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Paris &amp; Île-de-France
        </div>
        <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
          .banner-sole {
            animation: bannerScroll 22s linear infinite;
          }
          @keyframes bannerScroll {
            from { transform: translateX(100vw); }
            to   { transform: translateX(-100%); }
          }
        ` }} />
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
        {/* LEFT NAV — Moments */}
        <div
          className="nav-left"
          style={{ display: 'flex', alignItems: 'center', gap: '36px', position: 'relative' }}
          onMouseLeave={() => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 180) }}
        >
          {Object.values(MOMENTS).map(moment => {
            const hasDropdown = moment.cards
            const active = activeDropdown === moment.key

            if (!hasDropdown) {
              return (
                <a
                  key={moment.key}
                  href={moment.href}
                  className="nav-moment-item"
                  style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '15px',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    color: '#111111',
                    textDecoration: 'none',
                    transition: 'color 0.4s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { clearTimeout(closeTimer.current); setActiveDropdown(null); e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => e.currentTarget.style.color = '#111111'}
                >
                  {moment.label}
                </a>
              )
            }

            return (
              <button
                key={moment.key}
                className="nav-moment-item"
                onMouseEnter={() => { clearTimeout(closeTimer.current); setActiveDropdown(moment.key) }}
                style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '15px',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  color: active ? 'var(--accent)' : '#111111',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'color 0.2s ease',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                {moment.label}
                <span style={{ fontSize: '10px', opacity: 0.7 }}>▾</span>
              </button>
            )
          })}

          {/* Panneau dropdown partagé — ancré au bord gauche de nav-left (= marge de page) */}
          {Object.values(MOMENTS).filter(m => m.cards).map(moment => (
            activeDropdown === moment.key && (
              <div
                key={moment.key}
                className="nav-mega-dropdown"
                onMouseEnter={() => clearTimeout(closeTimer.current)}
                onMouseLeave={() => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 180) }}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 20px)',
                  left: 0,
                  background: 'var(--bg-primary)',
                  borderRadius: '14px',
                  padding: '22px 22px 26px',
                  boxShadow: '0 24px 70px rgba(17,17,17,0.10), 0 8px 28px rgba(17,17,17,0.05)',
                  animation: 'dropdownReveal 0.22s ease',
                  zIndex: 99,
                  width: `${moment.cards.length * 320 + (moment.cards.length - 1) * 18 + 44}px`,
                  maxWidth: 'calc(100vw - 48px)',
                }}
              >
                <div className="nav-mega-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${moment.cards.length}, 320px)`, gap: '18px' }}>
                  {moment.cards.map(card => (
                    <a
                      key={card.title}
                      href={card.href}
                      style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.querySelector('img').style.transform = 'scale(1.06)'
                        e.currentTarget.querySelector('.card-img').style.boxShadow = '0 18px 40px rgba(17,17,17,0.16)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.querySelector('img').style.transform = 'scale(1)'
                        e.currentTarget.querySelector('.card-img').style.boxShadow = '0 10px 28px rgba(17,17,17,0.10)'
                      }}
                    >
                      <div className="card-img" style={{ width: '100%', height: '240px', overflow: 'hidden', borderRadius: '10px', background: '#F8F5EF', boxShadow: '0 10px 28px rgba(17,17,17,0.10)', transition: 'box-shadow 0.4s ease' }}>
                        <img loading="lazy" src={card.img}
                          alt={card.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', display: 'block' }}
                        />
                      </div>
                      <p style={{
                        fontFamily: "'Baskerville Display PT', Georgia, serif",
                        fontSize: '17px',
                        fontWeight: 400,
                        letterSpacing: '0.02em',
                        color: '#111111',
                        margin: '4px 0 0 0',
                        lineHeight: 1.3,
                        textAlign: 'center',
                      }}>
                        {card.title}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* LOGO CENTER */}
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
          <span style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: '24px',
            fontWeight: 400,
            letterSpacing: '0.12em',
            color: '#111111',
            transition: 'color 0.4s ease',
            lineHeight: 1,
          }}>
            L'ÉCRIN
          </span>
          <span style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '9.5px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#111111',
            transition: 'color 0.4s ease',
          }}>
            TRAITEUR
          </span>
        </a>

        {/* RIGHT NAV — L'Univers, Le Journal, Contact, CTA */}
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>

          {/* L'Univers */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => { clearTimeout(closeTimer.current); setActiveDropdown('univers') }}
            onMouseLeave={() => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 180) }}
          >
            <button
              className="nav-util-btn"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '15px',
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
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = '#111111'}
            >
              L'Univers
              <span style={{ fontSize: '10px', opacity: 0.7 }}>▾</span>
            </button>

            {activeDropdown === 'univers' && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 16px)',
                  left: 0,
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '20px 28px',
                  minWidth: '220px',
                  boxShadow: '0 24px 70px rgba(17,17,17,0.10), 0 8px 28px rgba(17,17,17,0.05)',
                  animation: 'dropdownReveal 0.25s ease',
                }}
              >
                {UNIVERS_ITEMS.map(item => (
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
                      padding: '8px 0',
                      display: 'block',
                      transition: 'color 0.2s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = '#111111'}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Le Journal */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => { clearTimeout(closeTimer.current); setActiveDropdown('journal') }}
            onMouseLeave={() => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 180) }}
          >
            <button
              className="nav-util-btn"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '15px',
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
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = '#111111'}
            >
              Le Journal
              <span style={{ fontSize: '10px', opacity: 0.7 }}>▾</span>
            </button>

            {activeDropdown === 'journal' && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 16px)',
                  left: 0,
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '20px 28px',
                  minWidth: '260px',
                  boxShadow: '0 24px 70px rgba(17,17,17,0.10), 0 8px 28px rgba(17,17,17,0.05)',
                  animation: 'dropdownReveal 0.25s ease',
                }}
              >
                {JOURNAL_ITEMS.main.map(item => (
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
                      padding: '8px 0',
                      display: 'block',
                      transition: 'color 0.2s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = '#111111'}
                  >
                    {item.label}
                  </a>
                ))}

                <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)', marginTop: '8px', paddingTop: '8px' }}>
                  <p style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '9px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,17,17,0.35)',
                    marginBottom: '6px',
                    margin: '0 0 6px 0',
                  }}>
                    Catégories
                  </p>
                  {JOURNAL_ITEMS.categories.map(item => (
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
                        padding: '6px 0',
                        display: 'block',
                        transition: 'color 0.2s ease',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = '#111111'}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)', marginTop: '8px', paddingTop: '8px' }}>
                  <p style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '9px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,17,17,0.35)',
                    marginBottom: '6px',
                    margin: '0 0 6px 0',
                  }}>
                    Pour vos événements
                  </p>
                  {JOURNAL_ITEMS.occasions.map(item => (
                    <a
                      key={item.label}
                      href={item.href}
                      style={{
                        fontFamily: "'Neue Montreal', sans-serif",
                        fontSize: '11px',
                        fontWeight: 400,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#111111',
                        padding: '4px 0',
                        display: 'block',
                        transition: 'color 0.2s ease',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = '#111111'}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact */}
          <a
            href="/contact"
            className="nav-contact-link"
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '12px',
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
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.5)'; e.currentTarget.style.color = '#111111' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.2)'; e.currentTarget.style.color = 'rgba(17,17,17,0.65)' }}
          >
            Contact <span>→</span>
          </a>

          {/* CTA Devis */}
          <a
            href="/devis"
            className="nav-cta-link"
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '12px',
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
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Obtenir un devis <span>→</span>
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
            alignItems: 'flex-end',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            zIndex: 200,
          }}
        >
          {mobileOpen ? (
            <span style={{ fontSize: '26px', lineHeight: 1, color: '#111111', marginTop: '-4px' }}>×</span>
          ) : (
            <>
              <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#111111' }} />
              <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#111111' }} />
              <span style={{ display: 'block', width: '16px', height: '1.5px', background: '#111111' }} />
            </>
          )}
        </button>
      </nav>

      {/* ── Menu mobile ── */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: showBanner ? 'calc(var(--banner-h) + 58px)' : '58px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--bg-primary)',
            zIndex: 95,
            overflowY: 'auto',
            padding: '20px 24px 48px',
            animation: 'mobileMenuIn 0.3s ease',
          }}
        >
          {/* Moments */}
          {Object.values(MOMENTS).map(moment => {
            if (!moment.cards) {
              return (
                <a
                  key={moment.key}
                  href={moment.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: 'block', fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, color: '#111111', textDecoration: 'none', padding: '18px 0', borderBottom: '1px solid rgba(17,17,17,0.08)' }}
                >
                  {moment.label}
                </a>
              )
            }
            const open = mobileExpanded === moment.key
            return (
              <div key={moment.key} style={{ borderBottom: '1px solid rgba(17,17,17,0.08)' }}>
                <button
                  onClick={() => setMobileExpanded(open ? null : moment.key)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '18px 0', cursor: 'pointer' }}
                >
                  <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, color: open ? 'var(--accent)' : '#111111' }}>{moment.label}</span>
                  <span style={{ fontSize: '18px', color: 'var(--accent)', display: 'inline-block', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>›</span>
                </button>
                {open && (
                  <div style={{ paddingBottom: '14px' }}>
                    {moment.cards.map(card => (
                      <a
                        key={card.title}
                        href={card.href}
                        onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                        style={{ display: 'block', fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.6)', textDecoration: 'none', padding: '11px 0 11px 16px' }}
                      >
                        {card.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          {/* L'Univers */}
          <div style={{ borderBottom: '1px solid rgba(17,17,17,0.08)' }}>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'univers' ? null : 'univers')}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '18px 0', cursor: 'pointer' }}
            >
              <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, color: mobileExpanded === 'univers' ? 'var(--accent)' : '#111111' }}>L'Univers</span>
              <span style={{ fontSize: '18px', color: 'var(--accent)', display: 'inline-block', transform: mobileExpanded === 'univers' ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>›</span>
            </button>
            {mobileExpanded === 'univers' && (
              <div style={{ paddingBottom: '14px' }}>
                {UNIVERS_ITEMS.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                    style={{ display: 'block', fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.6)', textDecoration: 'none', padding: '11px 0 11px 16px' }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Le Journal */}
          <div style={{ borderBottom: '1px solid rgba(17,17,17,0.08)' }}>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'journal' ? null : 'journal')}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '18px 0', cursor: 'pointer' }}
            >
              <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, color: mobileExpanded === 'journal' ? 'var(--accent)' : '#111111' }}>Le Journal</span>
              <span style={{ fontSize: '18px', color: 'var(--accent)', display: 'inline-block', transform: mobileExpanded === 'journal' ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>›</span>
            </button>
            {mobileExpanded === 'journal' && (
              <div style={{ paddingBottom: '14px' }}>
                {[...JOURNAL_ITEMS.main, ...JOURNAL_ITEMS.categories].map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                    style={{ display: 'block', fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.6)', textDecoration: 'none', padding: '11px 0 11px 16px' }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Contact + Devis */}
          <a
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{ display: 'block', fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, color: '#111111', textDecoration: 'none', padding: '18px 0', borderBottom: '1px solid rgba(17,17,17,0.08)' }}
          >
            Contact
          </a>

          <a
            href="/devis"
            onClick={() => setMobileOpen(false)}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', padding: '16px', textDecoration: 'none', marginTop: '28px' }}
          >
            Obtenir un devis <span>→</span>
          </a>
        </div>
      )}

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .card-img { border-radius: 4px !important; }
        @keyframes dropdownReveal {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobileMenuIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        /* Rétrécissement en paliers fixes, comme un site "normal" — pas de
           calc(vw) continu (ça fait "rebondir" le texte pendant le drag de
           redimensionnement à cause des arrondis de sous-pixel). Chaque palier
           a des valeurs figées, stables tant qu'on reste dans sa plage :
           1) 1440→1200 : espaces resserrés, texte encore à taille normale
           2) 1199→960  : espaces au minimum, c'est le texte qui rétrécit
           3) <960      : hamburger */
        @media (max-width: 1439px) and (min-width: 1200px) {
          .nav-bar, .nav-bar-hero { padding-left: 32px !important; padding-right: 32px !important; }
          .nav-left  { gap: 14px !important; }
          .nav-right { gap: 12px !important; }
          .nav-contact-link, .nav-cta-link { padding: 8px 14px !important; }
          .nav-mega-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important; gap: 14px !important; }
          .nav-mega-dropdown .card-img { height: 190px !important; }
        }
        @media (max-width: 1199px) and (min-width: 960px) {
          .nav-bar, .nav-bar-hero { padding-left: 28px !important; padding-right: 28px !important; }
          .nav-left  { gap: 12px !important; }
          .nav-right { gap: 10px !important; }
          .nav-moment-item, .nav-util-btn { font-size: 12.5px !important; }
          .nav-contact-link, .nav-cta-link { font-size: 10.5px !important; padding: 7px 12px !important; }
          .nav-logo span:first-child { font-size: 19px !important; }
          .nav-logo span:last-child { font-size: 7.5px !important; }
          .nav-mega-grid { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)) !important; gap: 10px !important; }
          .nav-mega-dropdown .card-img { height: 150px !important; }
        }
        @media (max-width: 959px) {
          .nav-bar, .nav-bar-hero {
            padding: 16px 24px !important;
          }
          .nav-left, .nav-right {
            display: none !important;
          }
          .nav-logo span:first-child {
            font-size: 18px !important;
          }
          .nav-logo span:last-child {
            font-size: 7px !important;
          }
          .nav-hamburger {
            display: flex !important;
            margin-left: auto;
          }
        }
        @media (min-width: 960px) {
          .nav-hamburger { display: none !important; }
        }
      ` }} />
    </>
  )
}
