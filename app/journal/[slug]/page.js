'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { articles } from '../../../lib/journalData'
import { PRODUCTS } from '../../../lib/productsData'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)
  if (!article) notFound()

  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero image ── */}
        <div style={{ width: '100%', maxHeight: '520px', overflow: 'hidden' }}>
          <img
            src={article.img}
            alt={article.titre}
            style={{ width: '100%', height: '520px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>

        {/* ── Article content ── */}
        <div
          className="article-page-content"
          style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px 120px' }}
        >
          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}>
              {article.categorie}
            </span>
            <span style={{ color: 'rgba(17,17,17,0.25)', fontSize: '10px' }}>—</span>
            <span style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '11px',
              color: 'rgba(17,17,17,0.45)',
              letterSpacing: '0.04em',
            }}>
              {article.date}
            </span>
          </div>

          {/* Titre */}
          <h1 style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            marginBottom: '28px',
          }}>
            {article.titre}
          </h1>

          {/* Extrait */}
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(17,17,17,0.08)',
          }}>
            {article.extrait}
          </p>

          {/* Corps de l'article */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.contenu }}
          />

          {/* CTA devis */}
          <div style={{
            marginTop: '56px',
            padding: '36px 40px',
            background: 'var(--bg-secondary)',
            borderLeft: '3px solid var(--accent)',
          }}>
            <p style={{
              fontFamily: "'Baskerville Display PT', Georgia, serif",
              fontSize: '20px',
              fontWeight: 400,
              color: 'var(--text-primary)',
              marginBottom: '8px',
              lineHeight: 1.3,
            }}>
              Un projet à Paris ou en Île-de-France ?
            </p>
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '20px',
            }}>
              Décrivez votre événement et recevez un devis personnalisé sous 24h.
            </p>
            <a
              href="/devis"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                background: 'var(--accent)',
                padding: '12px 28px',
                display: 'inline-block',
                textDecoration: 'none',
              }}
            >
              Demander un devis →
            </a>
          </div>

          {/* Produits recommandés */}
          {article.relatedProducts?.length > 0 && (() => {
            const prods = article.relatedProducts.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean)
            if (!prods.length) return null
            return (
              <div style={{ marginTop: '56px', paddingTop: '48px', borderTop: '1px solid rgba(17,17,17,0.08)' }}>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '8px',
                }}>
                  Nos produits
                </p>
                <p style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: 'clamp(18px, 2.2vw, 26px)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  marginBottom: '28px',
                  lineHeight: 1.2,
                }}>
                  Commandez directement
                </p>
                <div className="article-products-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(prods.length, 3)}, 1fr)`, gap: '2px' }}>
                  {prods.map(product => (
                    <a
                      key={product.id}
                      href={`/creations/petits-dejeuners-et-pauses/${product.id}`}
                      style={{ background: 'var(--bg-secondary)', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#EDE8DE'}
                      onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-secondary)'}
                    >
                      {product.img && (
                        <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                          <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        </div>
                      )}
                      <div style={{ padding: '16px 18px 20px' }}>
                        <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '16px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '6px', lineHeight: 1.2 }}>
                          {product.name}
                        </p>
                        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '12px' }}>
                          {product.price?.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                        </p>
                        <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                          Commander →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })()}

          {/* Retour */}
          <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(17,17,17,0.08)' }}>
            <a
              href="/journal"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                borderBottom: '1px solid currentColor',
                paddingBottom: '2px',
              }}
            >
              ← Retour au journal
            </a>
          </div>
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .article-body p {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .article-body h2 {
          font-family: 'Baskerville Display PT', Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          color: var(--text-primary);
          margin: 40px 0 16px;
        }
        .article-body h3 {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-primary);
          margin: 32px 0 12px;
        }
        .article-body ul, .article-body ol {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-secondary);
          padding-left: 24px;
          margin-bottom: 20px;
        }
        .article-body strong {
          color: var(--text-primary);
          font-weight: 500;
        }
        .article-body blockquote {
          border-left: 2px solid var(--accent);
          padding: 8px 0 8px 24px;
          margin: 32px 0;
          font-style: italic;
          color: var(--text-secondary);
        }
        .article-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 32px 0;
          font-family: 'Neue Montreal', sans-serif;
          font-size: 13px;
        }
        .article-body th {
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-weight: 500;
          text-align: left;
          padding: 12px 16px;
          border-bottom: 2px solid var(--accent);
          letter-spacing: 0.03em;
          font-size: 11px;
          text-transform: uppercase;
        }
        .article-body td {
          padding: 12px 16px;
          border-bottom: 1px solid rgba(17,17,17,0.07);
          color: var(--text-secondary);
          line-height: 1.55;
          vertical-align: top;
        }
        .article-body tr:last-child td { border-bottom: none; }
        .article-body tr:nth-child(even) td { background: rgba(17,17,17,0.015); }
        .article-body td strong { color: var(--accent); font-weight: 500; }
        .article-body .faq-block details {
          border-bottom: 1px solid rgba(17,17,17,0.08);
          padding: 14px 0;
        }
        .article-body .faq-block details:first-child { border-top: 1px solid rgba(17,17,17,0.08); }
        .article-body .faq-block summary {
          cursor: pointer;
          font-family: 'Neue Montreal', sans-serif;
          font-size: 14px;
          color: var(--text-primary);
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .article-body .faq-block summary::after {
          content: '+';
          font-size: 18px;
          color: var(--accent);
          flex-shrink: 0;
          margin-left: 12px;
        }
        .article-body .faq-block details[open] summary::after { content: '−'; }
        .article-body .faq-block details p {
          margin-top: 10px;
          margin-bottom: 0;
          font-size: 14px;
          line-height: 1.7;
        }
        .article-products-grid a { transition: background 0.2s ease; }
        @media (max-width: 768px) {
          .article-page-content { padding: 48px 24px 80px !important; }
          .article-body table { font-size: 12px; }
          .article-body th, .article-body td { padding: 10px 10px; }
          .article-products-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .article-products-grid { grid-template-columns: 1fr 1fr !important; }
        }
      ` }} />

      {article.faq?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': article.faq.map(({ q, a }) => ({
              '@type': 'Question',
              'name': q,
              'acceptedAnswer': { '@type': 'Answer', 'text': a },
            })),
          }) }}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': article.titre,
          'description': article.extrait,
          'datePublished': article.isoDate || article.date,
          'author': {
            '@type': 'Organization',
            'name': "L'Écrin Traiteur",
            'url': 'https://www.lecrin-traiteur.fr',
          },
          'publisher': {
            '@type': 'Organization',
            'name': "L'Écrin Traiteur",
            'url': 'https://www.lecrin-traiteur.fr',
          },
          'image': article.img,
          'url': `https://www.lecrin-traiteur.fr/journal/${article.slug}`,
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `https://www.lecrin-traiteur.fr/journal/${article.slug}`,
          },
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Accueil', 'item': 'https://www.lecrin-traiteur.fr' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Journal', 'item': 'https://www.lecrin-traiteur.fr/journal' },
              { '@type': 'ListItem', 'position': 3, 'name': article.titre, 'item': `https://www.lecrin-traiteur.fr/journal/${article.slug}` },
            ],
          },
        }) }}
      />

      <Footer />
    </>
  )
}
