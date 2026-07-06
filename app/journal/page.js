'use client'

import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import ArticleCard from './ArticleCard'
import { articles } from '../../lib/journalData'

const CATEGORIES = ['Tous', 'Conseils', 'Inspirations', 'QCVT']

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const cat = params.get('categorie')
    if (cat && CATEGORIES.includes(cat)) setActiveCategory(cat)
  }, [])

  const filtered = activeCategory === 'Tous'
    ? articles
    : articles.filter(a => a.categorie === activeCategory)

  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* ── Hero ── */}
        <div className="journal-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="journal-hero" style={{ position: 'relative', width: '100%', height: '58vh', minHeight: '440px', overflow: 'hidden' }}>
            <img loading="eager" src="/hero-journal.webp" alt="Le Journal L'Écrin Traiteur" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="journal-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '560px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  L'Écrin Traiteur
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(40px, 5vw, 70px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                  Le Journal
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '420px' }}>
                  Actualités, coulisses, inspirations et conseils de notre maison traiteur.
                </p>
              </div>
            </Reveal>
          </header>
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

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .journal-hero { border-radius: 2px !important; }
        .journal-filters button:hover {
          color: var(--text-primary) !important;
        }
        @media (max-width: 768px) {
          .cat-hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.5) 100%) !important; }
          .journal-hero-wrapper { padding: 20px 20px 0 !important; }
          .journal-hero         { min-height: 380px !important; height: 42vh !important; }
          .journal-hero-text    { padding: 0 28px !important; max-width: 100% !important; }
          .journal-filters > div { padding: 0 16px !important; }
          .journal-grid-wrapper { padding: 48px 24px 80px !important; }
          .journal-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 1100px) and (min-width: 769px) {
          .journal-hero-wrapper { padding-left: 48px !important; padding-right: 48px !important; }
          .journal-hero-text    { padding-left: 48px !important; padding-right: 48px !important; }
          .journal-filters > div { padding: 0 40px !important; }
          .journal-grid-wrapper { padding: 60px 40px 80px !important; }
          .journal-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
