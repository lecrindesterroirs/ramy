'use client'

import { usePathname } from 'next/navigation'
import { estAnglais, reecrireLiensEnDans } from '../../../lib/i18nBase'
import { enHalal, EN_LIENS_UTILES } from '../../../lib/en/pages/halal'
import { useEnSlugs, useEnChemins } from '../../../components/EnSlugsProvider'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import Breadcrumb from '../../../components/Breadcrumb'
import CategoryClosing from '../../../components/CategoryClosing'
import ParallaxImage from '../../../components/ParallaxImage'
import { FAQSchema } from '../../../components/FAQSchema'
import { HALAL_PAGES } from '../../../lib/halalPagesData'
import { PRODUITS, prixMenu } from '../../creations/plateaux-repas/data'
import { enPlateauRepas } from '../../../lib/en/produits/plateauxRepas'
import { businessNode, BUSINESS_ID } from '../../../lib/site'

const BASE = 'https://www.lecrin-traiteur.fr'

// Arguments de clôture : uniquement des faits validés (offre halal-friendly, sans certification).
// Même contenu en anglais : ce sont des arguments d'interface, pas de la donnée produit.
const ARGS_EN = [
  { icon: 'quality',  titre: 'Halal and pork-free',  desc: 'The whole menu, by default, with no alcohol in the recipes and at no extra cost. No halal certification is claimed.' },
  { icon: 'custom',   titre: 'Options on request',   desc: 'Vegetarian, vegan and gluten-free are set when ordering, with the number of guests concerned.' },
  { icon: 'delivery', titre: 'Delivery from 6:30 am', desc: 'Monday to Friday, in Paris and across the Paris region. Order until 2 pm the day before.' },
  { icon: 'support',  titre: 'Quote within 24 hours', desc: 'Company invoice with VAT, purchase orders accepted, €50 excl. VAT minimum order.' },
]

const ARGS = [
  { icon: 'quality',  titre: 'Halal et sans porc',   desc: "Toute la carte, par défaut, sans alcool dans les recettes et sans supplément. Aucune certification halal n'est revendiquée." },
  { icon: 'custom',   titre: 'Options sur demande',  desc: "Végétarien, vegan et sans gluten se précisent à la commande, avec le nombre de personnes concernées." },
  { icon: 'delivery', titre: 'Livraison dès 6h30',   desc: "Du lundi au vendredi, à Paris et en Île-de-France. Commande jusqu'à la veille 14h." },
  { icon: 'support',  titre: 'Devis sous 24h',       desc: "Facture entreprise avec TVA, bon de commande accepté, minimum de commande de 50 € HT." },
]

const T_HALAL = {
  fr: {
    devis: 'Obtenir un devis →',
    tout: "Tout le halal d'entreprise",
    fil: ['Accueil', 'Traiteur halal'],
    carte: 'La carte complète',
    sixPlateaux: 'Les six plateaux, tous halal et sans porc',
    repond: (nom) => `${nom}, on vous répond`,
    aussi: 'Aussi en halal et sans porc',
    toutePage: "Traiteur halal d'entreprise, Paris et Île-de-France",
    aLire: 'À lire aussi',
    faqEyebrow: 'Questions fréquentes',
    retour: "← Traiteur halal d'entreprise",
  },
  en: {
    devis: 'Get a quote →',
    tout: 'All our halal corporate catering',
    fil: ['Home', 'Halal catering'],
    carte: 'The full menu',
    sixPlateaux: 'The six trays, all halal and pork-free',
    repond: (nom) => `${nom}: your questions answered`,
    aussi: 'Also halal and pork-free',
    toutePage: 'Halal corporate catering, Paris and Île-de-France',
    aLire: 'Also worth reading',
    faqEyebrow: 'Frequently asked questions',
    retour: '← Halal corporate catering',
  },
}

export default function TraiteurHalalSousPage() {
  const { slug } = useParams()
  const pageFr = HALAL_PAGES.find(p => p.slug === slug)
  const en = estAnglais(usePathname() || '/')
  const slugsEn = useEnSlugs()
  const chemins = useEnChemins()
  const T = en ? T_HALAL.en : T_HALAL.fr
  const surcouche = pageFr && en ? enHalal(slug) : null
  if (!pageFr || (en && !surcouche)) notFound()
  // Surcouche de texte : photo et zone desservie restent FR. La sélection
  // garde ses ids (les produits sont lus dans la donnée FR) ; seules les
  // notes sont traduites par la surcouche.
  const page = surcouche ? { ...pageFr, ...surcouche } : pageFr
  const lien = (href) => (en ? `/en${href}` : href)
  const article = en ? reecrireLiensEnDans(chemins, page.seoArticle, slugsEn) : page.seoArticle

  const otherPages = HALAL_PAGES.filter(p => p.slug !== page.slug)
  const pageUrl = `${BASE}${en ? '/en' : ''}/traiteur-halal/${page.slug}`

  // Plateaux mis en avant : ids de la carte réelle (app/creations/plateaux-repas/data.js).
  // En anglais, le nom et les trois plats viennent de la surcouche
  // lib/en/produits/plateauxRepas.js : elle existait, mais cette page lisait
  // le français, donc la section affichait des plats français.
  const selection = (page.selection || [])
    .map(s => {
      const produit = PRODUITS.find(p => p.id === s.id)
      return { ...s, produit: produit && en ? { ...produit, ...(enPlateauRepas(produit.id) || {}) } : produit }
    })
    .filter(s => s.produit)
  // « 29,90 € HT par personne » / « €29.90 excl. VAT per person »
  const prixPlateau = (p) => {
    const v = String(prixMenu(p))
    return en ? `€${v.replace(',', '.')} excl. VAT per person` : `${v} € HT par personne`
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: T.fil[0], item: `${BASE}${en ? '/en' : ''}` },
      { '@type': 'ListItem', position: 2, name: 'Traiteur halal & inclusif', item: `${BASE}/traiteur-halal` },
      { '@type': 'ListItem', position: 3, name: page.breadcrumbLabel, item: pageUrl },
    ],
  }

  // Service rattaché à l'entité #business (même @id partout), pas un second LocalBusiness.
  const serviceLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: page.serviceName,
        serviceType: page.serviceType,
        description: page.metaDescription,
        url: pageUrl,
        areaServed: page.areaServed,
        provider: { '@id': BUSINESS_ID },
      },
      businessNode(),
    ],
  }

  const eyebrowStyle = { fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }
  const h2Style = { fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)' }
  const linkStyle = { fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }

  return (
    <>
      <Navbar showBanner={true} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <FAQSchema faqs={page.faq} pageTitle={page.metaTitle} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero image pleine largeur ── */}
        <div className="hls-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="hls-hero" style={{ position: 'relative', width: '100%', height: 'clamp(420px, 50vw, 560px)', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src={page.heroImg} alt={page.heroAlt} strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,12,9,0.88) 0%, rgba(16,12,9,0.68) 44%, rgba(16,12,9,0.28) 72%, rgba(16,12,9,0) 92%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="hls-hero-text" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '640px' }}>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                  {page.eyebrow}
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(32px, 4.2vw, 58px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.015em', color: '#FFFFFF', marginBottom: '22px' }}>
                  {page.h1}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', maxWidth: '480px', marginBottom: '32px' }}>
                  {page.heroDescription}
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href={lien('/devis')}
                    style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: '#FFFFFF', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                  >
                    {T.devis}
                  </a>
                  <a
                    href={lien('/traiteur-halal')}
                    style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.5)', padding: '15px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                  >
                    {T.tout}
                  </a>
                </div>
              </div>
            </Reveal>
          </header>
        </div>

        <Breadcrumb maxWidth="1440px" items={[{ label: T.fil[0], href: en ? '/en' : '/' }, { label: T.fil[1], href: lien('/traiteur-halal') }, { label: page.breadcrumbLabel }]} jsonLd={false} />

        {/* ── Bloc-réponse : la question posée en clair (SEO + GEO) ── */}
        <section style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px 0' }}>
          <h2 style={{ ...h2Style, fontSize: 'clamp(24px, 2.6vw, 32px)', marginBottom: '22px' }}>
            {page.reponseQ}
          </h2>
          {page.reponse.map((para, i) => (
            <p key={i} style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: i < page.reponse.length - 1 ? '22px' : 0 }}>
              {para}
            </p>
          ))}
        </section>

        {/* ── Formules & tarifs ── */}
        <div className="hls-formules" style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 72px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <p style={eyebrowStyle}>{page.formulesEyebrow}</p>
            <h2 style={{ ...h2Style, fontSize: 'clamp(24px, 2.6vw, 34px)' }}>{page.formulesTitle}</h2>
          </div>
          <div className="hls-formules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {page.formules.map((f, i) => (
              <Reveal key={f.nom} delay={i * 90}>
                <div style={{ background: 'var(--bg-secondary)', padding: '32px 28px', border: '1px solid rgba(17,17,17,0.08)', height: '100%' }}>
                  <p style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    {f.nom}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '15px', fontWeight: 600, color: 'var(--accent-deep)', marginBottom: '14px' }}>
                    {f.prix}
                  </p>
                  <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Plateaux : composition réelle de la carte ── */}
        {selection.length > 0 && (
          <div className="hls-selection" style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 72px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p style={eyebrowStyle}>{T.carte}</p>
              <h2 style={{ ...h2Style, fontSize: 'clamp(24px, 2.6vw, 34px)' }}>{T.sixPlateaux}</h2>
            </div>
            <div className="hls-selection-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {selection.map(({ id, note, produit }, i) => (
                <Reveal key={id} delay={(i % 3) * 90}>
                  <a
                    href={lien(`/creations/plateaux-repas/${id}`)}
                    style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', overflow: 'hidden', boxShadow: '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)', height: '100%' }}
                  >
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: '#F8F5EF' }}>
                      <Image fill sizes="(max-width: 768px) 100vw, 33vw" src={produit.img} alt={en ? `${produit.nom}, halal corporate lunch tray` : `${produit.nom}, plateau repas halal d'entreprise`} style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '22px 22px 26px' }}>
                      <p style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        {produit.nom}
                      </p>
                      <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', fontWeight: 600, color: 'var(--accent-deep)', marginBottom: '12px' }}>
                        {prixPlateau(produit)}
                      </p>
                      <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '12px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '12px' }}>
                        {produit.entree} · {produit.plat} · {produit.dessert}
                      </p>
                      {note && (
                        <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'var(--text-primary)' }}>
                          {note}
                        </p>
                      )}
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* ── Éditorial + article SEO ── */}
      <CategoryClosing
        eyebrow={page.closingEyebrow}
        title={page.closingTitle}
        body={page.closingBody}
        args={en ? ARGS_EN : ARGS}
        ctaQuestion={page.ctaQuestion}
        lang={en ? 'en' : 'fr'}
        seoArticle={article}
      />

      {/* ── FAQ visible (même contenu que le FAQPage JSON-LD) ── */}
      <div style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
        <div className="hls-faq" style={{ maxWidth: '820px', margin: '0 auto', padding: '72px 40px 56px' }}>
          <p style={{ ...eyebrowStyle, textAlign: 'center' }}>{T.faqEyebrow}</p>
          <h2 style={{ ...h2Style, fontSize: 'clamp(24px, 2.6vw, 34px)', textAlign: 'center', marginBottom: '40px' }}>
            {T.repond(page.name)}
          </h2>
          <div>
            {page.faq.map((f, i) => (
              <div key={f.name} style={{ padding: '26px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(17,17,17,0.1)' }}>
                <h3 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px', lineHeight: 1.25 }}>
                  {f.name}
                </h3>
                <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Maillage : autres pages halal + guides liés ── */}
      <nav aria-label={en ? 'Other halal corporate catering pages' : "Autres pages traiteur halal d'entreprise"} style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px 40px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', marginBottom: '16px' }}>
          {T.aussi}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 22px', marginBottom: '28px' }}>
          {otherPages.map(p => (
            <a key={p.slug} href={lien(`/traiteur-halal/${p.slug}`)} style={linkStyle}>
              {(en && enHalal(p.slug)?.name) || p.name}
            </a>
          ))}
          <a href={lien('/traiteur-halal')} style={linkStyle}>{T.toutePage}</a>
        </div>
        {page.liensUtiles?.length > 0 && (
          <>
            <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', marginBottom: '16px' }}>
              {T.aLire}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 22px' }}>
              {page.liensUtiles.map(l => (
                <a key={l.href} href={en ? (reecrireLiensEnDans(chemins, `href="${l.href}"`, slugsEn).match(/href="([^"]*)"/) || [, l.href])[1] : l.href} style={linkStyle}>{(en && EN_LIENS_UTILES[l.href]) || l.label}</a>
              ))}
            </div>
          </>
        )}
      </nav>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px 64px', textAlign: 'center' }}>
        <a
          href={lien('/traiteur-halal')}
          style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}
        >
          {T.retour}
        </a>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .hls-hero-wrapper { padding: 20px 20px 0 !important; }
          .hls-hero { min-height: 480px !important; height: 68vh !important; }
          .hls-hero-text { padding: 0 28px !important; max-width: 100% !important; }
          .hls-formules { padding: 48px 24px 0 !important; }
          .hls-selection { padding: 48px 24px 0 !important; }
          .hls-formules-grid, .hls-selection-grid { grid-template-columns: 1fr !important; }
          .hls-faq { padding: 56px 24px 40px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .hls-hero-wrapper { padding: 32px 40px 0 !important; }
          .hls-hero-text { padding: 0 40px !important; }
          .hls-formules { padding: 56px 40px 0 !important; }
          .hls-selection { padding: 56px 40px 0 !important; }
          .hls-selection-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
