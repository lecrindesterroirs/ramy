'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ArticleCard from './ArticleCard'
import { articles } from '../../lib/journalData'

const CATEGORIES = ['Tous', 'Conseils', 'Inspirations', 'QCVT']

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous'
    ? articles
    : articles.filter(a => a.categorie === activeCategory)

  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero ── */}
        <div
          className="journal-hero"
          style={{
            background: 'var(--bg-secondary)',
            padding: '100px 72px 80px',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '20px',
          }}>
            L'Écrin Traiteur
          </p>
          <h1 style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}>
            Le Journal
          </h1>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Actualités, coulisses, inspirations et conseils de notre maison traiteur.
          </p>
        </div>

        {/* ── Filtres catégories ── */}
        <div
          className="journal-filters"
          style={{
            borderBottom: '1px solid rgba(17,17,17,0.08)',
            background: '#FFFFFF',
          }}
        >
          <div
            style={{
              maxWidth: '1440px',
              margin: '0 auto',
              padding: '0 72px',
              display: 'flex',
              gap: '0',
              overflowX: 'auto',
            }}
          >
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat
              const count = cat === 'Tous' ? articles.length : articles.filter(a => a.categorie === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: "'Neue Montreal', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--text-primary)' : 'rgba(17,17,17,0.38)',
                    background: 'none',
                    border: 'none',
                    borderBottom: isActive ? '2px solid var(--text-primary)' : '2px solid transparent',
                    padding: '18px 20px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.15s, border-color 0.15s',
                  }}
                >
                  {cat}
                  <span style={{
                    marginLeft: '6px',
                    fontSize: '10px',
                    color: isActive ? 'var(--accent)' : 'rgba(17,17,17,0.25)',
                  }}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Grille articles ── */}
        <div
          className="journal-grid-wrapper"
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '80px 72px 120px',
          }}
        >
          <div
            className="journal-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '48px 32px',
            }}
          >
            {filtered.map((a, i) => (
              <ArticleCard key={a.slug || i} article={a} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '15px',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              padding: '80px 0',
            }}>
              Aucun article dans cette catégorie.
            </p>
          )}
        </div>

      </main>

      <style suppressHydrationWarning>{`
        .journal-filters button:hover {
          color: var(--text-primary) !important;
        }
        @media (max-width: 768px) {
          .journal-hero { padding: 80px 24px 60px !important; }
          .journal-filters > div { padding: 0 16px !important; }
          .journal-grid-wrapper { padding: 48px 24px 80px !important; }
          .journal-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .journal-hero { padding: 80px 40px 60px !important; }
          .journal-filters > div { padding: 0 40px !important; }
          .journal-grid-wrapper { padding: 60px 40px 80px !important; }
          .journal-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
