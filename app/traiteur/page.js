'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { CITIES } from '../../lib/citiesData'
import { businessNode } from '../../lib/site'

const DEPARTEMENTS = ['Paris', 'Hauts-de-Seine (92)', 'Yvelines (78)', 'Essonne (91)', 'Val-de-Marne (94)', 'Seine-Saint-Denis (93)']

// FAQ logistique (rendue visible + FAQPage JSON-LD ci-dessous)
const TRAITEUR_FAQ = [
  {
    q: 'Dans quelles villes livrez-vous ?',
    a: `Paris et ${CITIES.length} villes d'Île-de-France (Hauts-de-Seine, Yvelines, Essonne, Val-de-Marne, Seine-Saint-Denis). Livraison dès 6h30 par notre équipe. Si votre commune n'est pas listée, demandez-nous, nous couvrons toute l'Île-de-France.`,
  },
  {
    q: 'Y a-t-il un minimum de commande et des frais de livraison ?',
    a: "Le minimum de commande est de 50 € HT. Un forfait de livraison de 29 € HT s'applique à Paris et dans les communes proches ; les autres zones d'Île-de-France sont chiffrées au devis.",
  },
  {
    q: 'Quel délai faut-il pour commander ?',
    a: "Commande jusqu'à la veille 14h pour une livraison le lendemain matin. Pour une demande de dernière minute, appelez-nous : nous faisons au mieux selon la disponibilité des artisans.",
  },
  {
    q: 'Proposez-vous du halal et des régimes particuliers ?',
    a: "Toute la carte est halal et sans porc par défaut. Nous proposons aussi des options végétariennes, vegan et sans gluten, à préciser lors du devis.",
  },
]

// Rattache une ville à son département (le champ region peut porter un suffixe «, La Défense »)
const deptOf = city => DEPARTEMENTS.find(d => city.region.includes(d)) || city.region

// Sépare « Hauts-de-Seine (92) » → { name: 'Hauts-de-Seine', code: '92' }
const parseDept = dept => {
  const m = dept.match(/^(.*?)\s*\((\d+)\)\s*$/)
  return m ? { name: m[1], code: m[2] } : { name: dept, code: null }
}

// Localité mise en avant après le tiret (ex. « La Défense »)
const localityOf = city => (city.region.includes('·') ? city.region.split('·')[1].trim() : null)

export default function TraiteurPage() {
  const [activeRegion, setActiveRegion] = useState('Tous')

  const groups = DEPARTEMENTS
    .map(d => ({ dept: d, cities: CITIES.filter(c => deptOf(c) === d) }))
    .filter(g => g.cities.length > 0)

  const visibleGroups = activeRegion === 'Tous' ? groups : groups.filter(g => g.dept === activeRegion)

  return (
    <>
      <Navbar />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero ── */}
        <div className="traiteur-hero" style={{ background: 'var(--bg-secondary)', padding: '90px 72px 78px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
            Zone de livraison
          </p>
          <span style={{ display: 'block', width: '38px', height: '1px', background: 'var(--accent)', opacity: 0.6, margin: '0 auto 26px' }} />
          <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(36px, 5vw, 68px)', fontWeight: 400, lineHeight: 1.06, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.015em' }}>
            Traiteur entreprise Paris<br />& Île-de-France
          </h1>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 44px' }}>
            L'Écrin Traiteur livre vos événements d'entreprise, petits-déjeuners, plateaux repas, cocktails et réceptions, dans {CITIES.length} villes d'Île-de-France. Artisans sélectionnés, livraison dès 6h30, commande avant 14h la veille.
          </p>

          {/* Ligne sobre, points clés séparés par des puces dorées */}
          <div className="traiteur-facts" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 16px' }}>
            {[`${CITIES.length} villes desservies`, 'Livraison dès 6h30', 'Devis sous 24h'].map((fact, i) => (
              <span key={fact} style={{ display: 'inline-flex', alignItems: 'center', gap: '16px' }}>
                {i > 0 && <span style={{ color: 'var(--accent-deep)', fontSize: '12px', lineHeight: 1 }}>·</span>}
                <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '0.04em', color: 'var(--text-secondary)' }}>
                  {fact}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Bloc-réponse : le service en clair (SEO + GEO) ── */}
        <section className="traiteur-intro" style={{ maxWidth: '760px', margin: '0 auto', padding: '72px 40px 8px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '22px' }}>
            L'Écrin Traiteur livre petits-déjeuners, plateaux repas, pauses gourmandes, cocktails et buffets directement dans vos bureaux, à Paris et dans {CITIES.length} villes d'Île-de-France. Chaque commande est préparée à partir de produits d'artisans identifiés — les madeleines de Mado Paris, les yaourts de la Ferme de Viltain, les jus d'Alain Milliat — et livrée par notre propre équipe, jamais en sous-traitance.
          </p>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '22px' }}>
            Vous commandez jusqu'à la veille 14h pour une livraison dès 6h30. Le minimum de commande est de <strong style={{ fontWeight: 500 }}>50 € HT</strong>, avec un forfait de livraison de <strong style={{ fontWeight: 500 }}>29 € HT</strong> à Paris et dans les communes proches. Vous recevez une facture entreprise avec TVA et un devis personnalisé sous 24h.
          </p>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)' }}>
            Toute la carte est halal et sans porc par défaut, avec des options végétariennes, vegan et sans gluten sur demande.
          </p>
        </section>

        {/* ── Filtre région, onglets soulignés ── */}
        <div style={{ borderBottom: '1px solid rgba(17,17,17,0.08)', background: '#FFFFFF', position: 'sticky', top: 'var(--header-h)', zIndex: 10 }}>
          <div className="traiteur-filter" style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 72px', display: 'flex', alignItems: 'stretch', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Tous', ...DEPARTEMENTS].map(r => {
              const isActive = activeRegion === r
              const label = r === 'Tous' ? 'Tous' : parseDept(r).name
              return (
                <button
                  key={r}
                  onClick={() => setActiveRegion(r)}
                  style={{
                    fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: isActive ? 'var(--text-primary)' : 'rgba(17,17,17,0.4)',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    padding: '20px 0', position: 'relative',
                    borderBottom: `2px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
                    marginBottom: '-1px', transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-primary)' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(17,17,17,0.4)' }}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Index des villes par département ── */}
        <div className="traiteur-index" style={{ maxWidth: '1160px', margin: '0 auto', padding: '72px 72px 40px' }}>
          {visibleGroups.map(({ dept, cities }) => {
            const { name, code } = parseDept(dept)
            return (
              <section key={dept} className="dept-group" style={{ marginBottom: '64px' }}>

                {/* En-tête département : nom + filet + compteur */}
                <div className="dept-head" style={{ display: 'flex', alignItems: 'baseline', gap: '24px', marginBottom: '30px' }}>
                  <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1, whiteSpace: 'nowrap' }}>
                    {name}
                    {code && <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 400, color: 'var(--accent-deep)', marginLeft: '10px', letterSpacing: '0.02em' }}>{code}</span>}
                  </h2>
                  <span style={{ flex: 1, height: '1px', background: 'rgba(17,17,17,0.12)' }} />
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.38)', whiteSpace: 'nowrap' }}>
                    {cities.length} {cities.length > 1 ? 'villes' : 'ville'}
                  </span>
                </div>

                {/* Grille de villes, cartes hairline */}
                <div className="dept-cities" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '48px' }}>
                  {cities.map(city => {
                    const locality = localityOf(city)
                    return (
                      <a
                        key={city.slug}
                        href={`/traiteur/${city.slug}`}
                        className="city-row"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          textDecoration: 'none', padding: '18px 2px',
                          borderBottom: '1px solid rgba(17,17,17,0.09)',
                          transition: 'border-color 0.25s ease',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderBottomColor = 'var(--accent)'
                          e.currentTarget.querySelector('.city-name').style.color = 'var(--accent)'
                          e.currentTarget.querySelector('.city-arrow').style.opacity = '1'
                          e.currentTarget.querySelector('.city-arrow').style.transform = 'translateX(0)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderBottomColor = 'rgba(17,17,17,0.09)'
                          e.currentTarget.querySelector('.city-name').style.color = 'var(--text-primary)'
                          e.currentTarget.querySelector('.city-arrow').style.opacity = '0'
                          e.currentTarget.querySelector('.city-arrow').style.transform = 'translateX(-6px)'
                        }}
                      >
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <span className="city-name" style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '19px', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.15, transition: 'color 0.25s ease' }}>
                            {city.name}
                          </span>
                          {locality && (
                            <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontStyle: 'italic', fontSize: '13px', color: 'rgba(17,17,17,0.42)', lineHeight: 1.2 }}>
                              {locality}
                            </span>
                          )}
                        </span>
                        <span className="city-arrow" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', color: 'var(--accent-deep)', opacity: 0, transform: 'translateX(-6px)', transition: 'opacity 0.25s ease, transform 0.25s ease', flexShrink: 0, marginLeft: '12px' }}>
                          →
                        </span>
                      </a>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        {/* ── FAQ logistique ── */}
        <section className="traiteur-faq" style={{ maxWidth: '760px', margin: '0 auto', padding: '24px 40px 8px', borderTop: '1px solid rgba(17,17,17,0.08)' }}>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, color: 'var(--text-primary)', margin: '48px 0 28px' }}>
            Questions fréquentes
          </h2>
          {TRAITEUR_FAQ.map((f, i) => (
            <div key={i} style={{ padding: '22px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(17,17,17,0.08)' }}>
              <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '19px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px' }}>
                {f.q}
              </h3>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                {f.a}
              </p>
            </div>
          ))}
        </section>

        {/* ── CTA ── */}
        <div style={{ textAlign: 'center', padding: '48px 40px 96px' }}>
          <div style={{ maxWidth: '560px', margin: '0 auto', paddingTop: '32px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginTop: '64px', marginBottom: '16px' }}>
              Votre ville n'est pas listée ?
            </p>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '28px' }}>
              Nous livrons dans toute l'Île-de-France. Contactez-nous pour vérifier la disponibilité dans votre commune.
            </p>
            <a
              href="/devis"
              style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1A1A18', background: 'var(--accent)', padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Obtenir un devis →
            </a>
          </div>
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) and (min-width: 769px) {
          .traiteur-hero { padding: 68px 40px 60px !important; }
          .traiteur-filter { padding: 0 40px !important; gap: 22px !important; }
          .traiteur-index { padding: 60px 40px 32px !important; }
          .dept-cities { grid-template-columns: repeat(2, 1fr) !important; column-gap: 36px !important; }
        }
        @media (max-width: 768px) {
          .traiteur-hero { padding: 56px 24px 48px !important; }
          .traiteur-intro { padding: 48px 24px 8px !important; }
          .traiteur-faq { padding: 24px 24px 8px !important; }
          .traiteur-filter { padding: 0 16px !important; gap: 18px !important; overflow-x: auto; justify-content: flex-start !important; }
          .traiteur-filter button { padding: 16px 0 !important; white-space: nowrap; }
          .traiteur-index { padding: 48px 24px 24px !important; }
          .dept-cities { grid-template-columns: 1fr !important; }
          .dept-head { gap: 16px !important; }
        }
      ` }} />

      <BreadcrumbJsonLd items={[
        { name: 'Accueil', path: '' },
        { name: 'Traiteur en entreprise', path: '/traiteur' },
      ]} />

      {/* Service + FAQPage, rattachés à l'entité #business consolidée */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': 'https://www.lecrin-traiteur.fr/traiteur#service',
              'name': "Traiteur d'entreprise Paris & Île-de-France",
              'serviceType': "Traiteur d'entreprise",
              'provider': { '@id': 'https://www.lecrin-traiteur.fr/#business' },
              'areaServed': { '@type': 'State', 'name': 'Île-de-France' },
              'url': 'https://www.lecrin-traiteur.fr/traiteur',
              'description': "Livraison de petits-déjeuners, plateaux repas, pauses gourmandes, cocktails et buffets en entreprise, à Paris et en Île-de-France. Produits d'artisans, halal et sans porc, livraison dès 6h30.",
            },
            {
              '@type': 'FAQPage',
              '@id': 'https://www.lecrin-traiteur.fr/traiteur#faq',
              'mainEntity': TRAITEUR_FAQ.map(f => ({
                '@type': 'Question',
                'name': f.q,
                'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
              })),
            },
            businessNode(),
          ],
        }) }}
      />

      <Footer />
    </>
  )
}
