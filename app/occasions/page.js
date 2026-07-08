'use client'

import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { OCCASIONS } from '../../lib/occasionsData'

export default function OccasionsListing() {
  return (
    <>
      <Navbar showBanner />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        <div className="occ-hero" style={{ background: 'var(--bg-secondary)', padding: '100px 72px 80px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '24px' }}>
            Pour votre entreprise
          </p>
          <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginBottom: '24px' }}>
            Un traiteur pour chaque moment de votre entreprise
          </h1>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto' }}>
            CODIR, séminaire, accueil client, formation, team building — chaque occasion a ses propres besoins. Découvrez nos recommandations selon votre événement.
          </p>
        </div>

        <div className="occ-grid" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 72px 120px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {OCCASIONS.map(o => (
            <Link
              key={o.slug}
              href={`/occasions/${o.slug}`}
              className="occ-card"
              style={{ textDecoration: 'none', display: 'block', background: 'var(--bg-secondary)', padding: '32px 28px', transition: 'background 0.2s ease' }}
            >
              <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px', lineHeight: 1.25 }}>
                {o.navLabel}
              </p>
              <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-deep)' }}>
                Découvrir →
              </span>
            </Link>
          ))}
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .occ-card:hover { background: #EDE8DE !important; }
        @media (max-width: 900px) {
          .occ-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .occ-hero { padding: 72px 24px 56px !important; }
          .occ-grid { padding: 56px 24px 88px !important; }
        }
      ` }} />

      <BreadcrumbJsonLd items={[
        { name: 'Accueil', path: '' },
        { name: 'Occasions', path: '/occasions' },
      ]} />

      <Footer />
    </>
  )
}
