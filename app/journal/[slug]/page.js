'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { articles } from '../../../lib/journalData'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)
  if (!article) notFound()

  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: '72px' }}>

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

      <style suppressHydrationWarning>{`
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
        @media (max-width: 768px) {
          .article-page-content { padding: 48px 24px 80px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
