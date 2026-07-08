'use client'

import Image from 'next/image'

export default function ArticleCard({ article }) {
  return (
    <a
      href={article.slug && article.slug !== '#' ? `/journal/${article.slug}` : '#'}
      style={{ display: 'block', textDecoration: 'none' }}
    >
      {/* Image */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 10',
        overflow: 'hidden',
        marginBottom: '20px',
        background: 'var(--bg-secondary)',
      }}>
        <Image fill src={article.img}
          alt={article.titre}
          className="article-card-img"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            objectPosition: article.imgPosition || 'center',
            transition: 'transform 0.6s ease',
          }}
        />
      </div>

      {/* Meta */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '10px',
      }}>
        <span style={{
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--accent-deep)',
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
      <h2 style={{
        fontFamily: "'Baskerville Display PT', Georgia, serif",
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: 1.25,
        color: 'var(--text-primary)',
        marginBottom: '12px',
      }}>
        {article.titre}
      </h2>

      {/* Extrait */}
      <p style={{
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: '13px',
        lineHeight: 1.7,
        color: 'var(--text-secondary)',
        marginBottom: '16px',
      }}>
        {article.extrait}
      </p>

      {/* Lire */}
      <span style={{
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-primary)',
        borderBottom: '1px solid currentColor',
        paddingBottom: '2px',
      }}>
        Lire l'article →
      </span>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        a:hover .article-card-img { transform: scale(1.04); }
      ` }} />
    </a>
  )
}
