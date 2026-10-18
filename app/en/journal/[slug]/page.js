import { notFound } from 'next/navigation'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import ParallaxImage from '../../../../components/ParallaxImage'
import { founderNode } from '../../../../lib/site'
import { ogImages } from '../../../../lib/og'
import { enArticle, enSlugs, dateEn } from '../../../../lib/en/journal'
import { reecrireLiensEn } from '../../../../lib/i18n'

/*
  Guides du Journal en anglais (/en/journal/<slug FR>). Texte : surcouches
  lib/en/journal/*.js ; image, dates et auteur : article français.
  Les href internes restent ceux du français ; la session Site les réécrit
  en /en quand la page anglaise existe (helper à brancher ici).
*/

const BASE = 'https://www.lecrin-traiteur.fr'
const SANS = "'Neue Montreal', 'Neue Montreal Fallback', sans-serif"
const SERIF = "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif"
const isoDateTime = (d) => (d && /^\d{4}-\d{2}-\d{2}$/.test(d)) ? `${d}T09:00:00+02:00` : d

export const dynamicParams = false

export function generateStaticParams() {
  return enSlugs().map(slug => ({ slug }))
}

export function generateMetadata({ params }) {
  const a = enArticle(params.slug)
  if (!a) return {}
  const title = a.metaTitle && a.metaTitle.length <= 60 ? a.metaTitle : a.titre
  return {
    title: { absolute: `${title} | L'Écrin Traiteur` },
    description: a.extrait,
    alternates: {
      canonical: `/en/journal/${a.slug}`,
      languages: { en: `/en/journal/${a.slug}`, fr: `/journal/${a.slug}`, 'x-default': `/journal/${a.slug}` },
    },
    openGraph: {
      images: ogImages(a.img),
      title: `${a.titre} | L'Écrin Traiteur`,
      description: a.extrait,
      locale: 'en_GB',
      type: 'article',
    },
  }
}

export default function EnArticlePage({ params }) {
  const a = enArticle(params.slug)
  if (!a) notFound()
  const url = `${BASE}/en/journal/${a.slug}`
  const img = a.img?.startsWith('http') ? a.img : `${BASE}${a.img}`
  const showFaq = a.faq.length > 0 && !/faq-block|Frequently asked questions/i.test(a.contenu)

  return (
    <>
      <Navbar />
      <main lang="en" style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>
        <div className="article-hero" style={{ position: 'relative', width: '100%', height: '520px', overflow: 'hidden' }}>
          <ParallaxImage priority sizes="100vw" src={a.img} alt={a.titre} strength={0.05}
            style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: a.imgPosition || 'center' }} />
        </div>

        <div className="article-page-content" style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 120px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '24px', fontFamily: SANS, fontSize: '11px', color: 'rgba(17,17,17,0.55)' }}>
            <nav aria-label="Breadcrumb">
              <a href="/corporate-catering-paris" style={{ color: 'inherit' }}>Home</a> › <a href="/en/journal" style={{ color: 'inherit' }}>Journal</a>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-deep)' }}>{a.categorie}</span>
              <span style={{ color: 'rgba(17,17,17,0.25)' }}>·</span>
              <time dateTime={a.isoDate}>{dateEn(a.isoDate)}</time>
              <span style={{ color: 'rgba(17,17,17,0.25)' }}>·</span>
              <span>By <strong style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{a.author.name}</strong></span>
            </div>
          </div>

          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginBottom: '28px' }}>
            {a.titre}
          </h1>

          <p style={{ fontFamily: SANS, fontSize: '17px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(17,17,17,0.08)' }}>
            {a.extrait}
          </p>

          {a.enBref.length > 0 && (
            <aside aria-label="In brief" style={{ margin: '0 0 40px', padding: '24px 28px', background: 'var(--bg-secondary)', borderLeft: '3px solid var(--accent)' }}>
              <p style={{ fontFamily: SANS, fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-deep)', margin: '0 0 12px' }}>In brief</p>
              <ul style={{ margin: 0, paddingLeft: '18px', fontFamily: SANS, fontSize: '14px', lineHeight: 1.7, color: 'var(--text-primary)' }}>
                {a.enBref.map((f, i) => <li key={i} style={{ marginBottom: '4px' }}>{f}</li>)}
              </ul>
            </aside>
          )}

          {/* Les surcouches gardent les liens français : on les bascule ici vers
              leur version anglaise quand elle existe, sinon on laisse le lien
              français. Aucun lien ne peut casser, et les pages traduites plus
              tard seront prises en compte sans rien retoucher. */}
          <div className="article-body" dangerouslySetInnerHTML={{ __html: reecrireLiensEn(a.contenu, enSlugs()) }} />

          {showFaq && (
            <div className="article-body">
              <h2>Frequently asked questions</h2>
              <div className="faq-block">
                {a.faq.map(f => (
                  <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: '56px', padding: '36px 40px', background: 'var(--bg-secondary)', borderLeft: '3px solid var(--accent)' }}>
            <p style={{ fontFamily: SERIF, fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.3 }}>
              An event in Paris or Île-de-France?
            </p>
            <p style={{ fontFamily: SANS, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
              Tell us about your event and receive a tailored quote within 24 hours.
            </p>
            <a href="/devis" style={{ fontFamily: SANS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', padding: '12px 28px', display: 'inline-block', textDecoration: 'none' }}>
              Request a quote →
            </a>
          </div>

          <p style={{ fontFamily: SANS, fontSize: '12px', color: 'var(--text-secondary)', marginTop: '32px' }}>
            <a href="/en/journal" style={{ color: 'inherit' }}>← All guides in English</a> · <a href={`/journal/${a.slug}`} hrefLang="fr" style={{ color: 'inherit' }}>Lire en français</a>
          </p>
        </div>
      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .article-body p { font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 15px; line-height: 1.8; color: var(--text-secondary); margin-bottom: 20px; }
        .article-body h2 { font-family: 'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif; font-size: 26px; font-weight: 400; color: var(--text-primary); margin: 40px 0 16px; }
        .article-body h3 { font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 14px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-primary); margin: 32px 0 12px; }
        .article-body ul, .article-body ol { font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 15px; line-height: 1.8; color: var(--text-secondary); padding-left: 24px; margin-bottom: 20px; }
        .article-body strong { color: var(--text-primary); font-weight: 500; }
        .article-body blockquote { border-left: 2px solid var(--accent); padding: 8px 0 8px 24px; margin: 32px 0; font-style: italic; color: var(--text-secondary); }
        .article-body table { width: 100%; border-collapse: collapse; margin: 32px 0; font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 13px; }
        .article-body th { background: var(--bg-secondary); color: var(--text-primary); font-weight: 500; text-align: left; padding: 12px 16px; border-bottom: 2px solid var(--accent); letter-spacing: 0.03em; font-size: 11px; text-transform: uppercase; }
        .article-body td { padding: 12px 16px; border-bottom: 1px solid rgba(17,17,17,0.07); color: var(--text-secondary); line-height: 1.55; vertical-align: top; }
        .article-body tr:last-child td { border-bottom: none; }
        .article-body tr:nth-child(even) td { background: rgba(17,17,17,0.015); }
        .article-body td strong { color: var(--accent); font-weight: 500; }
        .article-body .faq-block details { border-bottom: 1px solid rgba(17,17,17,0.08); padding: 14px 0; }
        .article-body .faq-block details:first-child { border-top: 1px solid rgba(17,17,17,0.08); }
        .article-body .faq-block summary { cursor: pointer; font-family: 'Neue Montreal', 'Neue Montreal Fallback', sans-serif; font-size: 14px; color: var(--text-primary); list-style: none; display: flex; justify-content: space-between; align-items: center; }
        .article-body .faq-block summary::after { content: '+'; font-size: 18px; color: var(--accent); flex-shrink: 0; margin-left: 12px; }
        .article-body .faq-block details[open] summary::after { content: '−'; }
        .article-body .faq-block details p { margin-top: 10px; margin-bottom: 0; font-size: 14px; line-height: 1.7; }
        @media (max-width: 768px) {
          .article-page-content { padding: 48px 24px 80px !important; }
          .article-hero { height: 240px !important; }
          .article-body table { font-size: 12px; }
          .article-body th, .article-body td { padding: 10px 10px; }
        }
      ` }} />

      {a.faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'inLanguage': 'en',
          'mainEntity': a.faq.map(({ q, a: ans }) => ({ '@type': 'Question', 'name': q, 'acceptedAnswer': { '@type': 'Answer', 'text': ans } })),
        }) }} />
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${url}#article`,
        'headline': a.titre,
        'description': a.extrait,
        ...(a.enBref.length ? { 'abstract': a.enBref.join(' ') } : {}),
        'inLanguage': 'en',
        'datePublished': isoDateTime(a.isoDate),
        'dateModified': isoDateTime(a.isoModified || a.isoDate),
        'author': a.author.isPerson ? founderNode() : { '@type': 'Organization', '@id': `${BASE}/#business`, 'name': "L'Écrin Traiteur", 'url': BASE },
        'publisher': { '@type': 'Organization', '@id': `${BASE}/#business`, 'name': "L'Écrin Traiteur", 'url': BASE, 'logo': { '@type': 'ImageObject', 'url': `${BASE}/icon-512.png`, 'width': 512, 'height': 512 } },
        'image': img,
        'url': url,
        'isPartOf': { '@type': 'WebSite', '@id': `${BASE}/#website` },
        'translationOfWork': { '@id': `${BASE}/journal/${a.slug}#article` },
        'mainEntityOfPage': { '@type': 'WebPage', '@id': url },
        'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE}/corporate-catering-paris` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Journal', 'item': `${BASE}/en/journal` },
          { '@type': 'ListItem', 'position': 3, 'name': a.titre, 'item': url },
        ] },
      }) }} />

      <Footer />
    </>
  )
}
