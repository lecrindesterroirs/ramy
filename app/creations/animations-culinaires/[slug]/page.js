'use client'

import { useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import DevisRapide from '../../../../components/DevisRapide'
import RelatedLinks from '../../../../components/RelatedLinks'
import BusinessJsonLd from '../../../../components/BusinessJsonLd'
import { ANIMATIONS, UNIVERS, UNIVERS_LABEL, slugAnim } from '../data'

export default function AnimationDetail() {
  const { slug } = useParams()
  const anim = ANIMATIONS.find(a => slugAnim(a.nom) === slug)
  if (!anim) notFound()

  const universLabel = UNIVERS_LABEL[anim.univers] ?? 'Animation culinaire'

  const related = [...ANIMATIONS].filter(a => a.id !== anim.id)
    .sort((a, b) => (b.univers === anim.univers) - (a.univers === anim.univers))
    .slice(0, 4)
    .map(a => ({ href: `/creations/animations-culinaires/${slugAnim(a.nom)}`, title: a.nom, meta: UNIVERS_LABEL[a.univers] || 'Animation', img: a.img }))

  const breadcrumb = [
    { label: 'Accueil', href: '/' },
    { label: 'Animations Culinaires', href: '/creations/animations-culinaires' },
    { label: anim.nom },
  ]

  const BASE = 'https://www.lecrin-traiteur.fr'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((c, i) => ({
          '@type': 'ListItem', position: i + 1, name: c.label,
          ...(c.href ? { item: `${BASE}${c.href}` } : {}),
        })),
      },
      // Pas de Product : animation sur devis (pas de prix). Un Product sans offer,
      // review ni aggregateRating est rejeté par Google (extrait produit invalide).
    ],
  }

  const nomLc = anim.nom.toLowerCase()
  const seoArticle = anim.article || `
    <h2>${anim.nom} : l'animation culinaire live pour vos événements d'entreprise à Paris</h2>
    <p>${anim.description} L'Écrin Traiteur installe cette animation dans vos locaux ou votre lieu d'événement, partout à Paris et en Île-de-France : un artisan prépare devant vos invités, pour un moment aussi beau à regarder qu'agréable à déguster.</p>

    <h2>Pourquoi choisir une animation live plutôt qu'un buffet classique ?</h2>
    <p>L'animation met le geste au centre. Vos invités choisissent, échangent avec la personne qui prépare et repartent avec un souvenir. C'est ce supplément d'humain et de spectacle qui transforme une prestation traiteur en moment mémorable, idéal pour une fête de fin d'année, une inauguration, une journée collaborateurs ou une semaine QVT.</p>

    <h2>Organiser votre ${nomLc} à Paris et en Île-de-France</h2>
    <p>Chaque animation se construit sur devis : date, lieu, nombre d'invités, durée et contraintes techniques (accès, électricité, espace). Notre équipe vous répond sous <strong>24h</strong> avec une proposition détaillée, installation et démontage inclus. Facturation entreprise avec TVA.</p>
  `

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BusinessJsonLd />
      <Navbar showBanner={true} />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Breadcrumb ── */}
        <div className="fiche-breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 72px 0' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {breadcrumb.map((crumb, i, arr) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {crumb.href ? (
                  <a href={crumb.href} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(17,17,17,0.42)', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.42)'}
                  >{crumb.label}</a>
                ) : (
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(17,17,17,0.75)' }}>{crumb.label}</span>
                )}
                {i < arr.length - 1 && <span style={{ color: 'rgba(17,17,17,0.2)', fontSize: '10px' }}>›</span>}
              </span>
            ))}
          </nav>
        </div>

        {/* ── Fiche galerie (même structure que petit-déjeuner) ── */}
        <AnimGalleryFiche anim={anim} universLabel={universLabel} />

        {/* ── Séparateur ── */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 72px' }}>
          <div style={{ width: '100%', height: '1px', background: 'rgba(17,17,17,0.07)' }} />
        </div>

        {/* ── Article SEO + devis rapide ── */}
        <section className="fiche-seo" style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 72px 96px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '20px' }}>
            Animations Culinaires
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '40px' }}>
            {anim.nom}, animation traiteur à Paris
          </h2>
          <div className="fiche-article-body" dangerouslySetInnerHTML={{ __html: seoArticle }} />
          <DevisRapide
            defaultPrestation="Cocktail / Buffet"
            titre="Une animation pour votre événement d'entreprise ?"
            sousTitre="Répondez en 30 secondes, devis personnalisé sous 24h."
          />
          <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
            <a href="/creations/animations-culinaires" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              ← Retour aux animations
            </a>
          </div>
        </section>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .fiche-article-body p { font-family: 'Neue Montreal', sans-serif; font-size: 15px; line-height: 1.85; color: var(--text-secondary); margin-bottom: 18px; }
        .fiche-article-body h2 { font-family: 'Baskerville Display PT', Georgia, serif; font-size: clamp(20px, 2vw, 28px); font-weight: 400; color: var(--text-primary); margin: 40px 0 14px; line-height: 1.15; }
        .fiche-article-body strong { color: var(--text-primary); font-weight: 500; }
        @media (max-width: 768px) {
          .fiche-breadcrumb { padding: 20px 24px 0 !important; }
          .gallery-fiche { grid-template-columns: 1fr !important; gap: 32px !important; padding: 24px 24px 60px !important; }
          .gallery-info { padding-left: 0 !important; }
          .fiche-seo { padding: 48px 24px 72px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .fiche-breadcrumb { padding: 20px 40px 0 !important; }
          .gallery-fiche { padding: 24px 40px 60px !important; gap: 40px !important; }
          .fiche-seo { padding: 60px 40px 80px !important; }
        }
      ` }} />

      <RelatedLinks eyebrow="Animations similaires" title="D'autres animations culinaires" items={related} columns={4} />

      <Footer />
    </>
  )
}

// ── Fiche galerie animation (structure identique aux fiches petit-déjeuner) ──
function AnimGalleryFiche({ anim, universLabel }) {
  const gallery = [anim.img]
  const [active, setActive] = useState(0)
  const thumbSlots = 4

  return (
    <div className="gallery-fiche" style={{ maxWidth: '1280px', margin: '0 auto', padding: '28px 72px 64px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '52px', alignItems: 'center', minHeight: 'calc(100vh - var(--banner-h) - var(--nav-h))' }}>

      {/* ── Colonne gauche : galerie ── */}
      <div className="gallery-col">
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: '4px', background: '#F8F5EF', boxShadow: '0 16px 40px rgba(17,17,17,0.10)' }}>
          <Image fill priority sizes="(max-width: 768px) 100vw, 55vw" src={gallery[active]} alt={anim.nom} style={{ objectFit: 'cover' }} />
        </div>

        {/* Miniatures */}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${thumbSlots}, 1fr)`, gap: '16px', marginTop: '18px' }}>
          {Array.from({ length: thumbSlots }).map((_, i) => {
            const hasImg = i < gallery.length
            const isActive = i === active
            return hasImg ? (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Photo ${i + 1}`}
                style={{ position: 'relative', padding: 0, border: 'none', cursor: 'pointer', width: '100%', aspectRatio: '16 / 10', overflow: 'hidden', borderRadius: '3px', background: '#F8F5EF', outline: isActive ? '2px solid var(--accent)' : '2px solid transparent', outlineOffset: '2px', transition: 'outline-color 0.2s ease' }}
              >
                <Image fill sizes="160px" src={gallery[i]} alt="" style={{ objectFit: 'cover', opacity: isActive ? 1 : 0.72, transition: 'opacity 0.2s ease' }} />
              </button>
            ) : (
              <button
                key={i}
                type="button"
                aria-label="Photo à venir"
                style={{ padding: 0, cursor: 'pointer', width: '100%', aspectRatio: '16 / 10', borderRadius: '3px', background: '#F4F1EA', border: '1px solid transparent', outline: '2px solid transparent', outlineOffset: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'outline-color 0.2s ease, background 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.outlineColor = 'rgba(224,161,38,0.4)'; e.currentTarget.style.background = '#EFEBE1' }}
                onMouseLeave={e => { e.currentTarget.style.outlineColor = 'transparent'; e.currentTarget.style.background = '#F4F1EA' }}
              >
                <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.28)', textAlign: 'center', lineHeight: 1.4 }}>Photo<br />à venir</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Colonne droite : infos ── */}
      <div className="gallery-info" style={{ paddingLeft: '28px' }}>
        {/* En-tête centré */}
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <img loading="lazy" src="/logo-footer.svg" alt="L'Écrin" style={{ height: '32px', width: 'auto', margin: '0 auto 12px', opacity: 0.9 }} />
          <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '8px' }}>
            {anim.nom}
          </h1>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '9px' }}>
            {universLabel}
          </p>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'rgba(17,17,17,0.45)', letterSpacing: '0.03em' }}>
            Animation live, préparée devant vos invités
          </p>
        </div>

        {/* Description */}
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '22px' }}>
          {anim.description}
        </p>

        {/* Au choix (composition) */}
        {anim.compo?.length > 0 && (
          <div style={{ marginBottom: '22px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '9px' }}>Au choix</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {anim.compo.map(item => (
                <li key={item} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.4, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Séparateur */}
        <div style={{ height: '1px', background: 'rgba(17,17,17,0.08)', marginBottom: '20px' }} />

        {/* Bloc action centré : sur devis + CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '16px' }}>
            Sur devis
          </p>

          <a
            href="/devis"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10.5px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-deep)', background: 'transparent', border: '1px solid var(--accent)', padding: '11px 28px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', justifyContent: 'center', transition: 'background 0.3s ease, color 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#FFFFFF' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
          >
            Obtenir un devis →
          </a>
        </div>
      </div>
    </div>
  )
}
