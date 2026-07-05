'use client'

import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import Reveal from '../../../../components/Reveal'
import { ARTISANS, getArtisanBySlug } from '../../../../lib/artisansData'

export default function ArtisanDetail() {
  const { slug } = useParams()
  const artisan = getArtisanBySlug(slug)
  if (!artisan) notFound()

  const autres = ARTISANS.filter(a => a.slug !== artisan.slug).slice(0, 4)

  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Retour ── */}
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '32px 72px 0' }}>
          <Link href="/univers/nos-artisans" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="M11 18l-6-6 6-6" /></svg>
            Retour à la carte
          </Link>
        </div>

        {/* ── Hero ── */}
        <div className="art-detail-hero" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 96px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <Reveal mode="mount">
            <div>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
                {artisan.eyebrow}
              </p>
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginBottom: '6px' }}>
                {artisan.nom}
              </h1>
              <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontStyle: 'italic', fontSize: '20px', color: 'var(--accent)', marginBottom: '24px' }}>
                {artisan.ville}
              </p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '460px', marginBottom: '32px' }}>
                {artisan.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', marginBottom: '36px' }}>
                {artisan.tags.map((tag, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '140px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M12 2l2.4 6.5L21 11l-6.6 2.5L12 20l-2.4-6.5L3 11l6.6-2.5Z" />
                    </svg>
                    <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.02em', color: 'var(--text-secondary)', lineHeight: 1.35 }}>{tag}</span>
                  </div>
                ))}
              </div>

              <a href={artisan.creationsHref} style={{ display: 'inline-block', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', padding: '15px 28px', textDecoration: 'none' }}>
                Voir les produits
              </a>
            </div>
          </Reveal>

          <Reveal mode="mount" delay={120}>
            <div className="art-thumb" style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
              <img src={artisan.img} alt={artisan.nom} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </Reveal>
        </div>

        {/* ── Citation éditoriale ── */}
        <div className="art-quote" style={{ background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 72px', display: 'grid', gridTemplateColumns: '96px 1fr 200px', gap: '32px', alignItems: 'center' }}>
            <Reveal>
              <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '64px', lineHeight: 1, color: 'var(--accent)' }}>&ldquo;</span>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(18px, 2.2vw, 26px)', lineHeight: 1.5, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Le temps, la patience et l'exigence du travail bien fait — c'est ce qui distingue {artisan.nom}.
                </p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  — L'Écrin Traiteur
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="art-quote-img" style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '4px' }}>
                <img src={artisan.avatar || artisan.img} alt={artisan.nom} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Leurs créations dans nos prestations ── */}
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '96px 72px' }}>
          <Reveal>
            <p style={{ textAlign: 'center', fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '40px' }}>
              Leurs créations dans nos prestations
            </p>
          </Reveal>
          <div className="art-creations-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${artisan.creations.length}, 1fr)`, gap: '24px' }}>
            {artisan.creations.map((c, i) => (
              <Reveal key={c.id} delay={(i % 4) * 90}>
                <Link href={c.href} className="art-creation-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="art-thumb" style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
                    <img src={c.img} alt={c.nom} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }} />
                  </div>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-primary)', marginTop: '12px', textAlign: 'center' }}>{c.nom}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── CTA bas de page ── */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)', padding: '56px 72px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Découvrez tous nos artisans partenaires
          </p>
          <Link href="/univers/nos-artisans#carte" style={{ display: 'inline-block', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', border: '1px solid rgba(17,17,17,0.25)', padding: '15px 28px', textDecoration: 'none' }}>
            Retour à la carte des artisans
          </Link>
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .art-thumb { border-radius: 4px !important; }
        .art-quote-img { border-radius: 4px !important; }
        .art-creation-card:hover img { transform: scale(1.05); }
        @media (max-width: 1024px) {
          .art-detail-hero { grid-template-columns: 1fr !important; }
          .art-quote > div { grid-template-columns: 1fr !important; text-align: center; }
          .art-quote-img { max-width: 160px; margin: 0 auto; }
        }
        @media (max-width: 768px) {
          .art-detail-hero { padding: 24px 24px 56px !important; }
          .art-quote > div { padding: 48px 24px !important; }
          .art-creations-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
