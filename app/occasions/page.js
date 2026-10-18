'use client'

import { usePathname } from 'next/navigation'
import { estAnglais } from '../../lib/i18n'
import { enOccasion } from '../../lib/en/pages/occasions'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { OCCASIONS } from '../../lib/occasionsData'

/* Habillage par langue. Les navLabel anglais viennent de la surcouche. */
const T_LISTE = {
  fr: {
    eyebrow: 'Pour votre entreprise',
    titre: 'Un traiteur pour chaque moment de votre entreprise',
    corps: "CODIR, séminaire, accueil client, formation, team building, chaque occasion a ses propres besoins. Découvrez nos recommandations selon votre événement.",
    decouvrir: 'Découvrir →',
  },
  en: {
    eyebrow: 'For your company',
    titre: 'A caterer for every moment of your working year',
    corps: 'A board meeting, an offsite, a client welcome, a training day, a team day: each one has its own needs. Here is what we recommend for yours.',
    decouvrir: 'Discover →',
  },
}

export default function OccasionsListing() {
  const en = estAnglais(usePathname() || '/')
  const T = en ? T_LISTE.en : T_LISTE.fr
  return (
    <>
      <Navbar showBanner />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        <div className="occ-hero" style={{ background: 'var(--bg-secondary)', padding: '100px 72px 80px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '24px' }}>
            {T.eyebrow}
          </p>
          <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginBottom: '24px' }}>
            {T.titre}
          </h1>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto' }}>
            {T.corps}
          </p>
        </div>

        <div className="occ-grid" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 72px 120px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {OCCASIONS.map(o => (
            <Link
              key={o.slug}
              href={`${en ? "/en" : ""}/occasions/${o.slug}`}
              className="occ-card"
              style={{ textDecoration: 'none', display: 'block', background: 'var(--bg-secondary)', padding: '32px 28px', transition: 'background 0.2s ease' }}
            >
              <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px', lineHeight: 1.25 }}>
                {(en && enOccasion(o.slug)?.name) || o.navLabel}
              </p>
              <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-deep)' }}>
                {T.decouvrir}
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
