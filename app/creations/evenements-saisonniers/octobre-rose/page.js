'use client'

import Image from 'next/image'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import RelatedLinks from '../../../../components/RelatedLinks'
import Breadcrumb from '../../../../components/Breadcrumb'
import BreadcrumbJsonLd from '../../../../components/BreadcrumbJsonLd'
import { evenements } from '../evenementsData'
import { articles } from '../../../../lib/journalData'

const ev = evenements.find(e => e.slug === 'octobre-rose')

const ROSE = '#E27FA0'
const ROSE_PALE = '#F6E4EA'
const ENCRE = '#1A1A18'

const BADGES = [
  { icon: 'ruban', titre: '1 € par convive', sub: 'reversé à la recherche' },
  { icon: 'personnes', titre: 'Sur toutes nos commandes', sub: 'en octobre' },
  { icon: 'coeur', titre: 'Un moment gourmand', sub: 'et solidaire pour vos équipes' },
]

const PROGRAMME = [
  { img: '/prod-madeleines-octobre-rose.webp', label: 'Madeleines roses personnalisées' },
  { img: '/macarons-octobre-rose.webp', label: 'Plateau macarons et cakes fruits rouges' },
  { img: '/prod-tarte-framboise-partager.webp', label: 'Tartelettes framboise' },
  { img: '/bois-jus-framboise.webp', label: 'Jus pomme framboise' },
  { img: '/mariage-freres.webp', label: 'Thé Mariage Frères' },
  { img: '/emballages-octobre-rose.webp', label: 'Emballages avec ruban rose' },
]

function IconRuban({ color = ROSE }) {
  return (
    <svg width="18" height="24" viewBox="0 0 16 21" fill="none" aria-hidden="true">
      <path d="M8 1.8C11.6 5 11.6 8.6 8 11.2L5.6 20" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8 1.8C4.4 5 4.4 8.6 8 11.2L10.4 20" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}
function IconPersonnes({ color = ROSE }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke={color} strokeWidth="1.3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="17" cy="7" r="2.4" stroke={color} strokeWidth="1.3" />
      <path d="M15.5 12.3c2.8.4 5 2.7 5 5.7" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}
function IconCoeur({ color = ROSE }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20.5s-8-4.9-8-10.8C4 6.3 6.2 4 9 4c1.6 0 3 .8 3.9 2C13.8 4.8 15.2 4 16.8 4c2.8 0 5 2.3 5 5.7 0 5.9-8 10.8-8 10.8z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}
const ICONS = { ruban: IconRuban, personnes: IconPersonnes, coeur: IconCoeur }

export default function OctobreRosePage() {
  return (
    <>
      <Navbar showBanner={!ev.masquerBandeau} />

      <BreadcrumbJsonLd items={[
        { name: 'Accueil', path: '' },
        { name: 'Événements saisonniers', path: '/creations/evenements-saisonniers' },
        { name: ev.nom, path: `/creations/evenements-saisonniers/${ev.slug}` },
      ]} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: ev.masquerBandeau ? 'var(--nav-h)' : 'calc(var(--banner-h) + var(--nav-h))' }}>

        <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Événements saisonniers', href: '/creations/evenements-saisonniers' }, { label: ev.nom }]} />

        {/* ── Hero 2 colonnes ── */}
        <div className="or-hero" style={{ background: ROSE_PALE, position: 'relative', overflow: 'hidden' }}>
          <div className="or-hero-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '56px 72px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

            <div>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: ROSE, marginBottom: '18px' }}>
                Événement solidaire
              </p>
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(38px, 4.6vw, 66px)', fontWeight: 400, lineHeight: 1.02, letterSpacing: '-0.015em', color: ENCRE, marginBottom: '22px' }}>
                Octobre <span style={{ color: ROSE }}>Rose</span>
              </h1>
              <span style={{ display: 'block', width: '48px', height: '2px', background: ROSE, marginBottom: '26px' }} />
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '17px', lineHeight: 1.55, color: ENCRE, marginBottom: '20px', maxWidth: '440px' }}>
                Un moment gourmand et engagé pour sensibiliser vos équipes au dépistage du cancer du sein.
              </p>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.8, color: 'rgba(26,26,24,0.72)', marginBottom: '40px', maxWidth: '460px' }}>
                À travers une sélection de douceurs roses et de produits de saison, nous vous proposons une pause conviviale et solidaire. 1 € est reversé par convive à la recherche contre le cancer du sein, sur toutes nos commandes livrées en octobre.
              </p>

              <div className="or-badges" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {BADGES.map(b => {
                  const Icon = ICONS[b.icon]
                  return (
                    <div key={b.titre}>
                      <Icon />
                      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.03em', color: ENCRE, margin: '10px 0 3px', textTransform: 'uppercase' }}>
                        {b.titre}
                      </p>
                      <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(26,26,24,0.6)', lineHeight: 1.4 }}>
                        {b.sub}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="or-hero-img" style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
              <Image fill priority sizes="(max-width: 900px) 100vw, 50vw" src={ev.img} alt={ev.imgAlt || ev.nom} style={{ objectFit: 'cover', objectPosition: ev.imgPos || 'center' }} />
            </div>
          </div>
        </div>

        {/* ── Au programme : grille produits ── */}
        <div className="or-programme" style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 72px' }}>
          <div className="or-programme-head" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '48px', alignItems: 'start' }}>
            <div>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: ROSE, marginBottom: '16px' }}>
                Au programme
              </p>
              <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.15, color: ENCRE }}>
                Une sélection gourmande<br />aux couleurs d'Octobre Rose
              </h2>
            </div>
            <div style={{ borderLeft: `1px solid ${ROSE}`, paddingLeft: '28px', alignSelf: 'center' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.8, color: 'rgba(26,26,24,0.7)' }}>
                Des créations sucrées et fraîches, pensées spécialement pour l'occasion, alliant plaisir et engagement. Chaque commande contribue directement à la recherche contre le cancer du sein.
              </p>
            </div>
          </div>

          <div className="or-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '18px' }}>
            {PROGRAMME.map(p => (
              <div key={p.label}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden', background: ROSE_PALE, marginBottom: '12px' }}>
                  <Image fill sizes="(max-width: 900px) 33vw, 16vw" src={p.img} alt={p.label} style={{ objectFit: 'cover' }} />
                </div>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.4, color: ENCRE, textAlign: 'center' }}>
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bande engagement ── */}
        <div className="or-engagement" style={{ background: ROSE_PALE, padding: '0 72px' }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <IconRuban />
              <div>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: ROSE, marginBottom: '8px' }}>
                  Notre engagement
                </p>
                <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(22px, 2.2vw, 30px)', fontWeight: 400, color: ENCRE, lineHeight: 1.15 }}>
                  1 € reversé par convive<br />sur toutes nos commandes d'octobre.
                </p>
              </div>
            </div>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'rgba(26,26,24,0.65)', maxWidth: '220px' }}>
              Le montant total est publié en fin de mois.
            </p>
            <a
              href="/devis?theme=octobre-rose"
              style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFFFFF', background: ROSE, padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'opacity 0.3s ease', whiteSpace: 'nowrap' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Organiser cet événement →
            </a>
          </div>
        </div>

        {/* ── Article SEO (contenu existant conservé) ── */}
        <div className="or-article" style={{ borderTop: '1px solid rgba(17,17,17,0.07)', background: '#FFFFFF' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 40px 96px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: ROSE, marginBottom: '20px' }}>
              Guide pratique
            </p>
            <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 3vw, 42px)', fontWeight: 400, lineHeight: 1.1, color: ENCRE, marginBottom: '56px', letterSpacing: '-0.01em' }}>
              {ev.article.titre}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {ev.article.sections.map((section, i) => (
                <div key={i}>
                  <h3 style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: ENCRE, marginBottom: '16px' }}>
                    {section.heading}
                  </h3>
                  <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
                    {section.texte}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Retour */}
        <div style={{ padding: '0 72px 40px', display: 'flex', justifyContent: 'center' }}>
          <a
            href="/creations/evenements-saisonniers"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            ← Voir tous les événements
          </a>
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .or-hero-grid { grid-template-columns: 1fr !important; padding: 40px 24px !important; gap: 32px !important; }
          .or-hero-img { aspect-ratio: 16/10 !important; order: -1; }
          .or-badges { grid-template-columns: 1fr !important; gap: 16px !important; }
          .or-programme { padding: 48px 24px !important; }
          .or-programme-head { grid-template-columns: 1fr !important; gap: 20px !important; }
          .or-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .or-engagement { padding: 0 24px !important; }
        }
        @media (max-width: 1200px) and (min-width: 901px) {
          .or-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      ` }} />

      <RelatedLinks
        eyebrow="À découvrir aussi"
        title="Autres rendez-vous & lectures"
        items={[
          ...evenements.filter(e => e.slug !== ev.slug).slice(0, 2).map(e => ({ href: `/creations/evenements-saisonniers/${e.slug}`, title: e.nom, meta: 'Événement saisonnier' })),
          ...(ev.articles?.length
            ? ev.articles.map(slug => articles.find(a => a.slug === slug)).filter(Boolean)
            : articles.slice(0, 2)
          ).map(a => ({ href: `/journal/${a.slug}`, title: a.metaTitle || a.titre, meta: a.categorie })),
        ]}
        columns={4}
      />

      <Footer />
    </>
  )
}
