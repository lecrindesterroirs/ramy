'use client'

import { useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import DevisRapide from '../../../../components/DevisRapide'
import GalleryFiche from '../../../../components/GalleryFiche'
import { PAUSES } from '../page'

const SEO_HTML = `
  <p>La <strong>pause gourmande</strong> est un moment fédérateur dans la journée de travail : un goûter d'équipe, une réunion de l'après-midi ou une attention pour marquer un événement. Quelques douceurs artisanales suffisent à transformer une pause en instant convivial.</p>
  <h2>Des pièces préparées par nos artisans pâtissiers</h2>
  <p>Madeleines, macarons, tartelettes, choux, cakes, cookies ou brownies : chaque pièce est façonnée avec des <strong>produits de qualité</strong> et cuite au plus près de la livraison. Nous complétons volontiers l'assortiment de fruits frais découpés et de desserts individuels pour un équilibre entre gourmandise et fraîcheur.</p>
  <h2>Livraison à Paris et en Île-de-France dès 6h30</h2>
  <p>Effectif, format, allergènes : nous composons la sélection idéale pour votre pause et vous adressons un devis personnalisé sous 24h. Commandez avant 14h la veille, livraison directe dans vos bureaux.</p>
`

/* ── Fiche coffret — même logique que les Madeleines sur Petit-déjeuner :
   sélection de taille (pièces + prix), puis SEO + devis. ── */
function CoffretDetail({ produit }) {
  const [format, setFormat] = useState(produit.coffrets.find(f => f.popular) ?? produit.coffrets[0])

  return (
    <>
      <Navbar showBanner={true} />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* Breadcrumb */}
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '24px 72px 0' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.42)', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ color: 'rgba(17,17,17,0.2)', fontSize: '10px' }}>›</span>
            <Link href="/creations/pauses-gourmandes" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.42)', textDecoration: 'none' }}>Pauses Gourmandes</Link>
            <span style={{ color: 'rgba(17,17,17,0.2)', fontSize: '10px' }}>›</span>
            <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.75)' }}>{produit.nom}</span>
          </nav>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '32px 72px 80px' }}>

          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '12px' }}>
            Pause Gourmande · Coffret
          </p>
          <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text-primary)', letterSpacing: '-0.01em', marginBottom: '16px' }}>
            {produit.nom}
          </h1>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '28px' }}>
            {produit.description}
          </p>

          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', background: '#F8F5EF', marginBottom: '32px' }}>
            <Image fill sizes="(max-width: 768px) 100vw, 720px" src={produit.img} alt={produit.nom} style={{ objectFit: 'cover' }} />
          </div>

          {/* Formats disponibles */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', marginBottom: '10px' }}>
              Taille du coffret
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
              {produit.coffrets.map(fmt => {
                const active = format.id === fmt.id
                return (
                  <button
                    key={fmt.id}
                    onClick={() => setFormat(fmt)}
                    style={{
                      padding: '14px 10px', textAlign: 'left', position: 'relative', cursor: 'pointer',
                      background: active ? 'rgba(224,161,38,0.10)' : 'var(--bg-secondary)',
                      border: active ? '1px solid var(--accent)' : '1px solid transparent',
                    }}
                  >
                    {fmt.popular && (
                      <span style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: '#1A1A18', fontFamily: "'Neue Montreal', sans-serif", fontSize: '8px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '2px 8px', whiteSpace: 'nowrap' }}>
                        Le plus choisi
                      </span>
                    )}
                    <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '2px', lineHeight: 1 }}>
                      {fmt.label}
                    </p>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', color: 'rgba(17,17,17,0.45)', marginBottom: '5px' }}>
                      {fmt.sub}
                    </p>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--accent-deep)' }}>
                      {fmt.price.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(17,17,17,0.07)', marginBottom: '28px' }} />

          {/* CTA devis */}
          <a
            href="/devis"
            style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A1A18', background: 'var(--accent)', border: '1px solid var(--accent)', padding: '18px 36px', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', justifyContent: 'center', width: '100%', transition: 'opacity 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Obtenir un devis — {format.label} →
          </a>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {['Livraison dès 6h30 — Paris & Île-de-France', 'Commandez avant 14h la veille', 'Facturation entreprise disponible'].map(t => (
              <p key={t} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.45)', letterSpacing: '0.02em' }}>{t}</p>
            ))}
          </div>
        </div>

        {/* Séparateur + article SEO + devis (même structure que les autres fiches) */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 72px' }}>
          <div style={{ width: '100%', height: '1px', background: 'rgba(17,17,17,0.07)' }} />
        </div>
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 72px 20px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '20px' }}>
            Pauses Gourmandes · Traiteur entreprise
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '40px' }}>
            La pause gourmande qui réunit vos équipes l&apos;après-midi
          </h2>
          <div className="cf-article-body" dangerouslySetInnerHTML={{ __html: SEO_HTML }} />
        </section>
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '20px 72px 96px' }}>
          <DevisRapide defaultPrestation="Goûter" titre="Une pause gourmande à organiser ?" sousTitre="Répondez en 30 secondes — devis personnalisé sous 24h." />
          <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
            <Link href="/creations/pauses-gourmandes" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              ← Retour aux pauses gourmandes
            </Link>
          </div>
        </section>
      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .cf-article-body p { font-family: 'Neue Montreal', sans-serif; font-size: 15px; line-height: 1.85; color: var(--text-secondary); margin-bottom: 18px; }
        .cf-article-body h2 { font-family: 'Baskerville Display PT', Georgia, serif; font-size: clamp(20px, 2vw, 28px); font-weight: 400; color: var(--text-primary); margin: 40px 0 14px; line-height: 1.15; }
        .cf-article-body strong { color: var(--text-primary); font-weight: 500; }
        @media (max-width: 768px) {
          div[style*="max-width: 720px"] { padding-left: 24px !important; padding-right: 24px !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}

export default function PauseDetail() {
  const { slug } = useParams()
  const produit = PAUSES.find(p => p.id === slug)
  if (!produit) notFound()

  if (produit.coffrets) {
    return <CoffretDetail produit={produit} />
  }

  return (
    <GalleryFiche
      title={produit.nom}
      subtitle="Pause Gourmande · L'après-midi"
      img={produit.img}
      price={null}
      description={`${produit.description} Format à partager, idéal pour vos pauses, goûters d'équipe et réunions de l'après-midi. Tarif au format et à l'effectif — sur devis.`}
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Pauses Gourmandes', href: '/creations/pauses-gourmandes' },
        { label: produit.nom },
      ]}
      backHref="/creations/pauses-gourmandes"
      backLabel="Retour aux pauses gourmandes"
      seoEyebrow="Pauses Gourmandes · Traiteur entreprise"
      seoTitle="La pause gourmande qui réunit vos équipes l'après-midi"
      seoHtml={SEO_HTML}
      devisPrestation="Goûter"
      devisTitre="Une pause gourmande à organiser ?"
      devisSousTitre="Répondez en 30 secondes — devis personnalisé sous 24h."
    />
  )
}
