'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import ArtisansMapSection from '../../../components/ArtisansMapSection'
import { ARTISANS } from '../../../lib/artisansData'

/* ─── Icônes ─────────────────────────────────────────────────────────── */

function Icon({ name, size = 20, color = 'currentColor' }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (name === 'wheat') return (
    <svg {...common}><path d="M12 21V9" /><path d="M12 9c-2-1-3-3-3-5 2 0 4 1 3 5Z" /><path d="M12 9c2-1 3-3 3-5-2 0-4 1-3 5Z" /><path d="M12 13c-2-1-3-3-3-5 2 0 4 1 3 5Z" /><path d="M12 13c2-1 3-3 3-5-2 0-4 1-3 5Z" /><path d="M12 17c-2-1-3-3-3-5 2 0 4 1 3 5Z" /><path d="M12 17c2-1 3-3 3-5-2 0-4 1-3 5Z" /></svg>
  )
  if (name === 'cake') return (
    <svg {...common}><path d="M4 21v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7" /><path d="M4 21h16" /><path d="M8 12V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" /><path d="M12 6V3" /><path d="M12 3c.7 0 1-.5 1-1" /></svg>
  )
  if (name === 'bottle') return (
    <svg {...common}><path d="M10 2h4" /><path d="M10 2v4.5L7 10a3 3 0 0 0-1 2.2V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7.8a3 3 0 0 0-1-2.2l-3-3.5V2" /><path d="M7.5 14h9" /></svg>
  )
  if (name === 'leaf') return (
    <svg {...common}><path d="M12 4Q19 8 19 14Q19 20 12 20Q5 20 5 14Q5 8 12 4Z" /><path d="M12 20V9" /></svg>
  )
  if (name === 'craft') return (
    <svg {...common}><circle cx="12" cy="9" r="6" /><path d="M8.5 14L6.5 21l5.5-3 5.5 3-2-7" /></svg>
  )
  if (name === 'truck') return (
    <svg {...common}><rect x="2" y="8" width="12" height="9" rx="1" /><path d="M14 11h3.2c.4 0 .8.2 1 .5l2 3v3.5h-6" /><circle cx="6.5" cy="19" r="1.6" /><circle cx="16.5" cy="19" r="1.6" /></svg>
  )
  if (name === 'arrow-left') return (<svg {...common}><path d="M19 12H5" /><path d="M11 18l-6-6 6-6" /></svg>)
  if (name === 'arrow-right') return (<svg {...common}><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>)
  return null
}

/* ─── Carte artisan (carrousel) ──────────────────────────────────────── */

function ArtisanCard({ a }) {
  return (
    <Link href={`/univers/nos-artisans/${a.slug}`} className="artisan-mini-card" style={{ textDecoration: 'none', display: 'block', flex: '0 0 auto', width: '260px', background: '#FFFFFF' }}>
      <div className="art-thumb" style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
        <img loading="lazy" src={a.img} alt={a.nom} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ padding: '18px 4px 4px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '6px' }}>{a.specialite}</p>
        <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, color: 'var(--text-primary)' }}>{a.nom}</p>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>{a.ville}</p>
      </div>
    </Link>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function NosArtisans() {
  const scrollerRef = useRef(null)

  const scrollBy = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Intro ── */}
        <div className="art-intro" style={{ maxWidth: '1440px', margin: '0 auto', padding: '96px 72px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <Reveal mode="mount">
            <div>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '24px' }}>
                Nos Artisans
              </p>
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginBottom: '24px' }}>
                Des artisans d'exception,<br />
                <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>des produits d'exception.</span>
              </h1>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '440px', marginBottom: '32px' }}>
                Nous sélectionnons chaque artisan pour son savoir-faire, la qualité irréprochable de ses produits et son exigence du détail.
              </p>
              <a href="#carte" style={{ display: 'inline-block', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', border: '1px solid rgba(17,17,17,0.25)', padding: '15px 28px', textDecoration: 'none' }}>
                Découvrir nos artisans
              </a>
            </div>
          </Reveal>
          <Reveal mode="mount" delay={120}>
            <div className="art-thumb" style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
              <img loading="lazy" src="/selection-artisans.webp" alt="Nos artisans partenaires" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </Reveal>
        </div>

        {/* ── Carte de France ── */}
        <ArtisansMapSection />

        {/* ── Carrousel artisans partenaires ── */}
        <div className="art-carousel-section" style={{ maxWidth: '1440px', margin: '0 auto', padding: '96px 72px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', gap: '24px' }}>
            <Reveal>
              <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 400, color: 'var(--text-primary)' }}>
                Nos artisans partenaires
              </h2>
            </Reveal>
            <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
              <button aria-label="Précédent" onClick={() => scrollBy(-1)} className="carousel-btn" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(17,17,17,0.2)', background: '#FFFFFF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                <Icon name="arrow-left" size={16} />
              </button>
              <button aria-label="Suivant" onClick={() => scrollBy(1)} className="carousel-btn" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(17,17,17,0.2)', background: '#FFFFFF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                <Icon name="arrow-right" size={16} />
              </button>
            </div>
          </div>
          <div ref={scrollerRef} className="art-scroller" style={{ display: 'flex', gap: '24px', overflowX: 'auto', overflowY: 'hidden', scrollSnapType: 'x mandatory', paddingBottom: '8px' }}>
            {ARTISANS.map((a, i) => (
              <div key={a.slug} style={{ scrollSnapAlign: 'start' }}>
                <Reveal delay={(i % 4) * 90}>
                  <ArtisanCard a={a} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* ── Notre engagement ── */}
        <div className="art-engagement" style={{ borderTop: '1px solid rgba(17,17,17,0.08)', maxWidth: '1440px', margin: '0 auto', padding: '72px 72px', display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: '32px', alignItems: 'center' }}>
          <Reveal>
            <div className="art-avatar-round" style={{ width: '96px', height: '96px', overflow: 'hidden', flexShrink: 0 }}>
              <img loading="lazy" src="/maison-marques.avif" alt="Notre engagement" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>Notre engagement</p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '480px' }}>
                En travaillant main dans la main avec ces artisans, nous soutenons l'excellence française et vous garantissons des produits authentiques, responsables et pleins de sens.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="engagement-icons" style={{ display: 'flex', gap: '28px' }}>
              {[
                { icon: 'leaf', label: 'Produits frais et de saison' },
                { icon: 'craft', label: 'Savoir-faire artisanal' },
                { icon: 'truck', label: 'Circuits courts et responsables' },
              ].map((it, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100px', textAlign: 'center' }}>
                  <Icon name={it.icon} size={22} color="var(--accent)" />
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.06em', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{it.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── CTA contact ── */}
        <div className="artisans-cta" style={{ borderTop: '1px solid rgba(17,17,17,0.08)', padding: '40px 72px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '16px' }}>
            Vous êtes artisan et souhaitez rejoindre notre réseau ?
            <a href="mailto:commercial@lecrin-traiteur.fr" style={{ color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '1px' }}>
              Contactez-nous →
            </a>
          </p>
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .art-scroller::-webkit-scrollbar { display: none; }
        .art-scroller { scrollbar-width: none; }
        .art-avatar-round { border-radius: 50% !important; }
        .carousel-btn { border-radius: 50% !important; }
        .carousel-btn:hover { background: var(--accent) !important; border-color: var(--accent) !important; color: #FFFFFF !important; }
        .art-thumb { border-radius: 4px !important; }
        .artisan-mini-card img { transition: transform 0.6s ease; }
        .artisan-mini-card:hover img { transform: scale(1.05); }
        @media (max-width: 1024px) {
          .art-intro, .art-map > div { grid-template-columns: 1fr !important; }
          .art-engagement { grid-template-columns: 1fr !important; text-align: center; }
          .art-engagement > div:first-child { margin: 0 auto; }
          .engagement-icons { justify-content: center !important; }
        }
        @media (max-width: 768px) {
          .art-intro, .art-carousel-section, .artisans-cta { padding-left: 24px !important; padding-right: 24px !important; }
          .art-map > div { padding-left: 24px !important; padding-right: 24px !important; }
          .art-engagement { padding: 56px 24px !important; }
          .artisans-cta p { flex-direction: column; gap: 12px; }
        }
      ` }} />

      <Footer />
    </>
  )
}
