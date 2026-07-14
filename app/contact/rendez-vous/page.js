'use client'

import { useEffect, useRef, useState } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

// ────────────────────────────────────────────────────────────────
// ⬇️  COLLE TON LIEN CALENDLY ICI  (ex : 'https://calendly.com/lecrin-traiteur/15min')
//     Tant que c'est vide, la page affiche un repli propre (téléphone + devis).
const CALENDLY_URL = 'https://calendly.com/contact-lecrindesterroirs/30min'
// ────────────────────────────────────────────────────────────────

const reassurances = [
  { titre: '15 minutes', desc: 'Un point court et efficace, calé quand ça vous arrange.' },
  { titre: 'Sans engagement', desc: 'On cadre votre besoin, on répond à vos questions. Rien de plus.' },
  { titre: "Avec l'équipe", desc: 'Un échange direct avec la personne qui suivra votre projet.' },
]

// Charge le widget Calendly seulement quand il entre dans le viewport (perf).
function CalendlyEmbed({ url }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) return
    const s = document.createElement('script')
    s.src = 'https://assets.calendly.com/assets/external/widget.js'
    s.async = true
    document.body.appendChild(s)
  }, [visible])

  return (
    <div ref={ref} style={{ width: '100%', minHeight: '700px' }}>
      {visible && (
        <div
          className="calendly-inline-widget"
          data-url={`${url}?hide_gdpr_banner=1&primary_color=e0a126`}
          style={{ minWidth: '320px', height: '700px' }}
        />
      )}
    </div>
  )
}

export default function PrendreRendezVous() {
  return (
    <>
      <Navbar />

      <main style={{ background: 'var(--bg-secondary)', paddingTop: 'var(--header-h)' }}>
        {/* ── Hero ── */}
        <section style={{ padding: '72px 72px 48px' }} className="rdv-hero">
          <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '24px' }}>
              Un échange direct
            </p>
            <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '640px' }}>
              Prendre 15 min<br />avec nous.
            </h1>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '480px' }}>
              Un échange sans engagement pour cadrer votre besoin, répondre à vos questions et voir comment nous pouvons vous accompagner. Choisissez le créneau qui vous convient.
            </p>
          </div>
        </section>

        {/* ── Réassurances ── */}
        <section style={{ padding: '0 72px 48px' }} className="rdv-reassure">
          <div className="rdv-reassure-grid" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {reassurances.map((item, i) => (
              <div key={i} style={{ background: '#FFFFFF', padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', letterSpacing: '0.01em' }}>{item.titre}</p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Calendly ── */}
        <section style={{ padding: '0 72px 96px' }} className="rdv-embed">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <CalendlyEmbed url={CALENDLY_URL} />
          </div>
        </section>
      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .rdv-hero { padding: 48px 24px 32px !important; }
          .rdv-reassure { padding: 0 24px 32px !important; }
          .rdv-reassure-grid { grid-template-columns: 1fr !important; }
          .rdv-embed { padding: 0 24px 64px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .rdv-hero { padding: 56px 40px 40px !important; }
          .rdv-reassure { padding: 0 40px 40px !important; }
          .rdv-embed { padding: 0 40px 72px !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
