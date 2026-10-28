'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { isOctobreRoseActive, OCTOBRE_ROSE_ACCENT } from '../lib/campagneOctobreRose'
import SelecteurLangue from './SelecteurLangue'
import { estAnglais, lienLocaliseDans } from '../lib/i18nBase'
import { useEnSlugs, useEnChemins } from './EnSlugsProvider'
import { t } from '../lib/en/interface'

const MOMENTS = {
  petitDej: {
    label: 'Petits-déjeuners & Pauses', labelEn: 'Breakfast & Breaks',
    key: 'petitDej',
    cards: [
      { title: 'Petit-déjeuner', titleEn: 'Office breakfast', href: '/creations/petits-dejeuners-et-pauses', img: '/hero-petitdej.webp' },
      { title: 'Pause Goûter', titleEn: 'Afternoon break', href: '/creations/pauses-gourmandes', img: '/hero-pauses-gourmandes.webp' },
      { title: 'Boissons', titleEn: 'Drinks', href: '/creations/boissons', img: '/bois-jus-orange.webp' },
    ],
  },
  dejeuner: {
    label: 'Déjeuners', labelEn: 'Lunch',
    key: 'dejeuner',
    cards: [
      { title: 'Plateaux repas', titleEn: 'Lunch trays', href: '/creations/plateaux-repas', img: '/plateau-mediterraneen.webp' },
      { title: 'Lunch Box', titleEn: 'Lunch boxes', href: '/creations/lunch-box', img: '/hero-lunch-box.webp' },
      { title: 'Buffet à partager', titleEn: 'Sharing buffet', href: '/creations/a-partager', img: '/hero-a-partager.webp' },
    ],
  },
  cocktail: {
    label: 'Cocktails', labelEn: 'Cocktails',
    key: 'cocktail',
    cards: [
      { title: 'Cocktails', titleEn: 'Cocktail receptions', href: '/creations/cocktails', img: '/hero-cocktail-reception.webp' },
      { title: 'Plateaux Apéritifs', titleEn: 'Canapé platters', href: '/creations/plateaux-aperitifs', img: '/plateau-burgers-menu.webp' },
      { title: 'Animations Culinaires', titleEn: 'Live food stations', href: '/creations/animations-culinaires', img: '/hero-animations.webp' },
      { title: 'Boissons', titleEn: 'Drinks', href: '/creations/boissons', img: '/bois-jus-orange.webp' },
    ],
  },
}

const UNIVERS_ITEMS = [
  { label: 'Notre Maison', labelEn: 'Our story', href: '/univers/notre-maison' },
  { label: 'Nos Artisans', labelEn: 'Our makers', href: '/univers/nos-artisans' },
  { label: 'Nos Engagements', labelEn: 'Our commitments', href: '/univers/nos-engagements' },
  { label: 'Nous contacter', labelEn: 'Contact us', href: '/contact' },
]

const JOURNAL_ITEMS = {
  main: [
    { label: 'Le Journal', labelEn: 'The Journal', href: '/journal' },
    { label: 'Tous les articles', labelEn: 'All articles', href: '/journal' },
  ],
  categories: [
    { label: 'QCVT', labelEn: 'Workplace wellbeing', href: '/journal?categorie=QCVT' },
    { label: 'Conseils', labelEn: 'Advice', href: '/journal?categorie=Conseils' },
    { label: 'Inspirations', labelEn: 'Inspiration', href: '/journal?categorie=Inspirations' },
  ],
  occasions: [
    { label: 'Déjeuner CODIR & COMEX', labelEn: 'Board & exec lunches', href: '/occasions/plateau-repas-codir' },
    { label: 'Petit-déjeuner CODIR', labelEn: 'Board & exec breakfasts', href: '/occasions/petit-dejeuner-codir' },
    { label: 'Séminaires d\'entreprise', labelEn: 'Company offsites', href: '/occasions/seminaire-entreprise' },
    { label: 'Accueil & Réception client', labelEn: 'Client welcome', href: '/occasions/accueil-client' },
    { label: 'Journées de formation', labelEn: 'Training days', href: '/occasions/journee-formation' },
    { label: 'Team Building', labelEn: 'Team building', href: '/occasions/team-building' },
    { label: 'Petit-déjeuner d\'entreprise', labelEn: 'Corporate breakfast', href: '/occasions/petit-dejeuner-entreprise' },
    { label: 'Déjeuner d\'entreprise', labelEn: 'Corporate lunch', href: '/occasions/dejeuner-entreprise' },
    { label: 'Cocktail d\'entreprise', labelEn: 'Corporate cocktail', href: '/creations/cocktails' },
    { label: 'Goûter d\'entreprise', labelEn: 'Corporate afternoon break', href: '/occasions/gouter-entreprise' },
    { label: 'Afterwork', labelEn: 'Afterwork', href: '/occasions/afterwork-entreprise' },
    // Calendrier des événements saisonniers : simple lien, aucune donnée d'événement ici.
    { label: 'Événements saisonniers', labelEn: 'Seasonal events', href: '/creations/evenements-saisonniers' },
  ],
}

export default function Navbar({ showBanner = false, forceScrolled = false, sansBandeau = false }) {
  const pathname = usePathname()
  /* Langue de la page courante. Les libellés basculent en anglais, et chaque
     lien part vers sa version anglaise quand elle existe — sinon il reste en
     français : on ne renvoie jamais vers une adresse qui n'existe pas. */
  const langue = estAnglais(pathname || '/') ? 'en' : 'fr'
  const slugsEn = useEnSlugs()
  const chemins = useEnChemins()
  const lien = (href) => lienLocaliseDans(chemins, href, langue, slugsEn)
  const mot = (o, champ = 'label') => (langue === 'en' && o[champ + 'En']) || o[champ]
  const alwaysScrolled = forceScrolled || pathname !== '/'
  const devisAccent = isOctobreRoseActive() ? OCTOBRE_ROSE_ACCENT : 'var(--accent)'

  const [scrolled, setScrolled] = useState(alwaysScrolled)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const closeTimer = useRef(null)
  // Clic sur un intitulé du menu (Petit-déjeuner, Déjeuner, Cocktail, L'Univers,
  // Le Journal) : il menait nulle part, le menu ne s'ouvrait qu'au survol
  // (clics sans effet relevés par PostHog, 25/10/2026). Le clic mène désormais
  // à la page principale de la rubrique. Au doigt (tablette), le premier
  // toucher ouvre le menu, le second suit le lien.
  const pointeur = useRef({ type: 'mouse', ouvert: false })
  const clicRubrique = (cle, href) => ({
    onPointerDown: e => { pointeur.current = { type: e.pointerType, ouvert: activeDropdown === cle } },
    onClick: () => {
      if (pointeur.current.type === 'touch' && !pointeur.current.ouvert) { setActiveDropdown(cle); return }
      window.location.href = lien(href)
    },
  })

  useEffect(() => {
    if (alwaysScrolled) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [alwaysScrolled])

  // Menu ouvert : on bloque le défilement, et la classe `menu-ouvert` permet
  // à la barre d'action du bas de s'effacer. Sans ça, son bouton « Devis en
  // 30 s » doublait celui du menu, deux boutons dorés l'un sous l'autre
  // (signalé par Ramy le 28/10/2026).
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('menu-ouvert')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('menu-ouvert')
    }
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('menu-ouvert')
    }
  }, [mobileOpen])

  return (
    <>
      {/* Pages sans bandeau : le contenu se cale sur la nav seule (--banner-h à 0 dès le rendu serveur, sans décalage) */}
      {sansBandeau && <style>{'html{--banner-h:0px !important}'}</style>}
      {/* ── Bandeau défilant (page produit uniquement) ── */}
      {showBanner && <div style={{
        position: 'fixed',
        top: 'var(--promo-h)',
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
          fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#1A1A18',
          whiteSpace: 'nowrap',
          position: 'absolute',
        }}>
          {t('nav.bandeau', langue)} &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; {t('nav.bandeau.livraison', langue)} &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Paris &amp; Île-de-France
        </div>
      </div>}

      <nav
        className={scrolled ? 'nav-bar' : 'nav-bar nav-bar-hero'}
        style={{
          position: 'fixed',
          top: showBanner ? 'calc(var(--promo-h) + var(--banner-h))' : 'var(--promo-h)',
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'var(--bg-primary)' : 'transparent',
          padding: scrolled ? '16px var(--retrait)' : '26px var(--retrait)',
          display: 'grid',
          // Logo au centre, avec exactement le même espace de chaque côté
          // (28/10/2026). Les deux colonnes latérales valent 1fr, donc la
          // colonne du logo tombe sur l'axe ; columnGap fixe l'écart des deux
          // côtés. C'était impossible tant que « Contact » occupait la droite.
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          columnGap: '88px',
          transition: 'background 0.6s ease, padding 0.4s ease',
          borderBottom: scrolled ? '1px solid rgba(17,17,17,0.06)' : 'none',
        }}
      >
        {/* LEFT NAV, Moments */}
        <div
          className="nav-left"
          style={{ display: 'flex', alignItems: 'center', gap: '36px', position: 'relative', justifySelf: 'end' }}
          onMouseLeave={() => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 180) }}
        >
          {Object.values(MOMENTS).map(moment => {
            const hasDropdown = moment.cards
            const active = activeDropdown === moment.key

            if (!hasDropdown) {
              return (
                <a
                  key={moment.key}
                  href={lien(moment.href)}
                  className="nav-moment-item"
                  style={{
                    fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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
                  {mot(moment)}
                </a>
              )
            }

            return (
              <button
                key={moment.key}
                className="nav-moment-item"
                {...clicRubrique(moment.key, moment.cards[0].href)}
                onMouseEnter={() => { clearTimeout(closeTimer.current); setActiveDropdown(moment.key) }}
                style={{
                  fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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
                {mot(moment)}
                <span aria-hidden="true" style={{ fontSize: '10px', opacity: 0.7 }}>▾</span>
              </button>
            )
          })}

          {/* Panneaux dropdown, toujours rendus (liens dans le HTML serveur = crawlables),
              masqués en CSS et révélés au survol. */}
          {Object.values(MOMENTS).filter(m => m.cards).map(moment => {
            const active = activeDropdown === moment.key
            return (
              <div
                key={moment.key}
                className="nav-mega-dropdown"
                aria-hidden={!active}
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
                  zIndex: 99,
                  width: `${moment.cards.length * 320 + (moment.cards.length - 1) * 18 + 44}px`,
                  maxWidth: 'calc(100vw - 260px)',   // 166 px d'ancrage à gauche + la gouttière de droite
                  opacity: active ? 1 : 0,
                  visibility: active ? 'visible' : 'hidden',
                  pointerEvents: active ? 'auto' : 'none',
                  transform: active ? 'translateY(0)' : 'translateY(-6px)',
                  transition: 'opacity 0.22s ease, transform 0.22s ease, visibility 0.22s',
                }}
              >
                <div className="nav-mega-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${moment.cards.length}, minmax(0, 1fr))`, gap: '18px' }}>
                  {moment.cards.map(card => (
                    <a
                      key={mot(card, 'title')}
                      href={lien(card.href)}
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
                          alt={mot(card, 'title')}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', display: 'block' }}
                        />
                      </div>
                      <p style={{
                        fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif",
                        fontSize: '17px',
                        fontWeight: 400,
                        letterSpacing: '0.02em',
                        color: '#111111',
                        margin: '4px 0 0 0',
                        lineHeight: 1.3,
                        textAlign: 'center',
                      }}>
                        {mot(card, 'title')}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* LOGO — au centre de la barre, deuxième colonne de la grille. */}
        <a
          href={lien('/')}
          className={scrolled ? 'nav-logo' : 'nav-logo nav-logo-hero'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            textDecoration: 'none',
            flexShrink: 0,
          }}
          onMouseEnter={e => { e.currentTarget.querySelectorAll('span').forEach(s => s.style.color = 'var(--accent)') }}
          onMouseLeave={e => { e.currentTarget.querySelectorAll('span').forEach(s => s.style.color = '#111111') }}
        >
          <span style={{
            fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif",
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
            fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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

        {/* RIGHT NAV, L'Univers, Le Journal, Contact, CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '36px' }}>
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>

          {/* L'Univers */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => { clearTimeout(closeTimer.current); setActiveDropdown('univers') }}
            onMouseLeave={() => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 180) }}
          >
            <button
              {...clicRubrique('univers', '/univers/notre-maison')}
              className="nav-util-btn"
              style={{
                fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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
              {t('nav.univers', langue)}
              <span aria-hidden="true" style={{ fontSize: '10px', opacity: 0.7 }}>▾</span>
            </button>

            <div
                aria-hidden={activeDropdown !== 'univers'}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 16px)',
                  left: 0,
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '20px 28px',
                  minWidth: '220px',
                  boxShadow: '0 24px 70px rgba(17,17,17,0.10), 0 8px 28px rgba(17,17,17,0.05)',
                  opacity: activeDropdown === 'univers' ? 1 : 0,
                  visibility: activeDropdown === 'univers' ? 'visible' : 'hidden',
                  pointerEvents: activeDropdown === 'univers' ? 'auto' : 'none',
                  transform: activeDropdown === 'univers' ? 'translateY(0)' : 'translateY(-6px)',
                  transition: 'opacity 0.22s ease, transform 0.22s ease, visibility 0.22s',
                }}
              >
                {UNIVERS_ITEMS.map(item => (
                  <a
                    key={mot(item)}
                    href={lien(item.href)}
                    style={{
                      fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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
                    {mot(item)}
                  </a>
                ))}
              </div>
          </div>

          {/* Le Journal */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => { clearTimeout(closeTimer.current); setActiveDropdown('journal') }}
            onMouseLeave={() => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 180) }}
          >
            <button
              {...clicRubrique('journal', '/journal')}
              className="nav-util-btn"
              style={{
                fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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
              {t('nav.journal', langue)}
              <span aria-hidden="true" style={{ fontSize: '10px', opacity: 0.7 }}>▾</span>
            </button>

            <div
                aria-hidden={activeDropdown !== 'journal'}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 16px)',
                  left: 0,
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '20px 28px',
                  minWidth: '260px',
                  boxShadow: '0 24px 70px rgba(17,17,17,0.10), 0 8px 28px rgba(17,17,17,0.05)',
                  opacity: activeDropdown === 'journal' ? 1 : 0,
                  visibility: activeDropdown === 'journal' ? 'visible' : 'hidden',
                  pointerEvents: activeDropdown === 'journal' ? 'auto' : 'none',
                  transform: activeDropdown === 'journal' ? 'translateY(0)' : 'translateY(-6px)',
                  transition: 'opacity 0.22s ease, transform 0.22s ease, visibility 0.22s',
                }}
              >
                {JOURNAL_ITEMS.main.map(item => (
                  <a
                    key={mot(item)}
                    href={lien(item.href)}
                    style={{
                      fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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
                    {mot(item)}
                  </a>
                ))}

                <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)', marginTop: '8px', paddingTop: '8px' }}>
                  <p style={{
                    fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                    fontSize: '9px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,17,17,0.35)',
                    marginBottom: '6px',
                    margin: '0 0 6px 0',
                  }}>
                    {t('nav.categories', langue)}
                  </p>
                  {JOURNAL_ITEMS.categories.map(item => (
                    <a
                      key={mot(item)}
                      href={lien(item.href)}
                      style={{
                        fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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
                      {mot(item)}
                    </a>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)', marginTop: '8px', paddingTop: '8px' }}>
                  <p style={{
                    fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                    fontSize: '9px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,17,17,0.35)',
                    marginBottom: '6px',
                    margin: '0 0 6px 0',
                  }}>
                    {t('nav.occasions', langue)}
                  </p>
                  {JOURNAL_ITEMS.occasions.map(item => (
                    <a
                      key={mot(item)}
                      href={lien(item.href)}
                      style={{
                        fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
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
                      {mot(item)}
                    </a>
                  ))}
                </div>
              </div>
          </div>

        </div>

        {/* CTA Devis — même colonne que L'Écrin / Journal, poussé à droite */}
        <a
          href={lien('/devis')}
          className="nav-cta-link"
          style={{
            justifySelf: 'end',
            fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#1A1A18',
            background: devisAccent,
            border: `1px solid ${devisAccent}`,
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
          {t('nav.devis', langue)} <span>→</span>
        </a>
        </div>

        {/* Hamburger, mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            minWidth: '44px',
            minHeight: '44px',
            boxSizing: 'border-box',
            zIndex: 200,
            // Sur tablette, le hamburger tombait sur le costume noir du maître
            // d'hôtel et disparaissait (signalé par Ramy le 28/10/2026). Le halo
            // clair le détoure sur fond sombre et ne se voit pas sur fond clair.
            filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.95)) drop-shadow(0 1px 3px rgba(255,255,255,0.7))',
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
            top: showBanner ? 'calc(var(--promo-h) + var(--banner-h) + 58px)' : 'calc(var(--promo-h) + 58px)',
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
                  href={lien(moment.href)}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: 'block', fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '22px', fontWeight: 400, color: '#111111', textDecoration: 'none', padding: '18px 0', borderBottom: '1px solid rgba(17,17,17,0.08)' }}
                >
                  {mot(moment)}
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
                  <span style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '22px', fontWeight: 400, color: open ? 'var(--accent)' : '#111111' }}>{mot(moment)}</span>
                  <span style={{ fontSize: '18px', color: 'var(--accent-deep)', display: 'inline-block', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }} aria-hidden="true">›</span>
                </button>
                {open && (
                  <div style={{ paddingBottom: '14px' }}>
                    {moment.cards.map(card => (
                      <a
                        key={mot(card, 'title')}
                        href={lien(card.href)}
                        onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                        style={{ display: 'block', fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.6)', textDecoration: 'none', padding: '11px 0 11px 16px' }}
                      >
                        {mot(card, 'title')}
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
              <span style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '22px', fontWeight: 400, color: mobileExpanded === 'univers' ? 'var(--accent)' : '#111111' }}>{t('nav.univers', langue)}</span>
              <span style={{ fontSize: '18px', color: 'var(--accent-deep)', display: 'inline-block', transform: mobileExpanded === 'univers' ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }} aria-hidden="true">›</span>
            </button>
            {mobileExpanded === 'univers' && (
              <div style={{ paddingBottom: '14px' }}>
                {UNIVERS_ITEMS.filter(item => item.href !== '/contact').map(item => (
                  <a
                    key={mot(item)}
                    href={lien(item.href)}
                    onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                    style={{ display: 'block', fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.6)', textDecoration: 'none', padding: '11px 0 11px 16px' }}
                  >
                    {mot(item)}
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
              <span style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '22px', fontWeight: 400, color: mobileExpanded === 'journal' ? 'var(--accent)' : '#111111' }}>{t('nav.journal', langue)}</span>
              <span style={{ fontSize: '18px', color: 'var(--accent-deep)', display: 'inline-block', transform: mobileExpanded === 'journal' ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }} aria-hidden="true">›</span>
            </button>
            {mobileExpanded === 'journal' && (
              <div style={{ paddingBottom: '14px' }}>
                {[...JOURNAL_ITEMS.main, ...JOURNAL_ITEMS.categories, JOURNAL_ITEMS.occasions[JOURNAL_ITEMS.occasions.length - 1]].map(item => (
                  <a
                    key={mot(item)}
                    href={lien(item.href)}
                    onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                    style={{ display: 'block', fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.6)', textDecoration: 'none', padding: '11px 0 11px 16px' }}
                  >
                    {mot(item)}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Contact + Devis */}
          <a
            href={lien('/contact')}
            onClick={() => setMobileOpen(false)}
            style={{ display: 'block', fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '22px', fontWeight: 400, color: '#111111', textDecoration: 'none', padding: '18px 0', borderBottom: '1px solid rgba(17,17,17,0.08)' }}
          >
            Contact
          </a>

          <a
            href={lien('/devis')}
            onClick={() => setMobileOpen(false)}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A1A18', background: devisAccent, padding: '16px', textDecoration: 'none', marginTop: '28px' }}
          >
            {t('nav.devis', langue)} <span>→</span>
          </a>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <SelecteurLangue compact />
          </div>
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
        /* Rétrécissement en paliers fixes, comme un site "normal", pas de
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
          /* Sous 960 px la barre n'a plus que le logo et le hamburger : la
             grille à trois colonnes du grand écran (28/10/2026) envoyait le
             hamburger, quatrième enfant, dans une colonne fantôme hors écran. */
          .nav-bar, .nav-bar-hero {
            display: flex !important;
            justify-content: space-between !important;
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
          /* Le bouton « devis » est sorti de .nav-right lors de la refonte du
             28/10/2026 : il n'était donc plus masqué sur téléphone et poussait
             le hamburger hors de l'écran. La barre fixe du bas porte déjà
             « Devis en 30 s », celui de la barre haute est redondant. */
          .nav-cta-link { display: none !important; }
          .nav-hamburger {
            display: flex !important;
            margin-left: auto;
          }
          .nav-logo { margin-top: 0 !important; }
        }
        @media (min-width: 960px) {
          .nav-hamburger { display: none !important; }
        }
      ` }} />
    </>
  )
}
