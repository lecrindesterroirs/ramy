'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

// Liste canonique des catégories créations affichées dans la barre d'onglets.
// Source unique, réutilisée partout pour une barre identique.
export const CATEGORIES = [
  { label: 'Petits-déjeuners',   href: '/creations/petits-dejeuners-et-pauses' },
  { label: 'Pauses gourmandes',  href: '/creations/pauses-gourmandes' },
  { label: 'Plateaux repas',     href: '/creations/plateaux-repas' },
  { label: 'Lunch Box',          href: '/creations/lunch-box' },
  { label: 'À partager',         href: '/creations/a-partager' },
  { label: 'Cocktails',          href: '/creations/cocktails' },
  { label: 'Plateaux apéritifs', href: '/creations/plateaux-aperitifs' },
  { label: 'Boissons',           href: '/creations/boissons' },
]

export const DEFAULT_SORTS = ['En vedette', 'Nouveautés', 'Prix croissant', 'Prix décroissant']

// Extrait un prix numérique d'un label type « 5/6 pers, 14,90€ » ou « 28,90 ».
export function priceFromLabel(label = '') {
  const s = String(label)
  // Nombre juste avant le « € » en priorité (ex. « 24 pièces, 64,00 € » → 64),
  // sinon premier nombre (ex. « 28,90 »).
  const m = s.match(/(\d+[.,]?\d*)\s*€/) || s.match(/(\d+[.,]?\d*)/)
  return m ? parseFloat(m[1].replace(',', '.')) : 0
}

// Tri générique, getPrice(item) fournit le prix pour le tri par prix.
export function sortItems(list, value, getPrice = () => 0) {
  const arr = [...list]
  if (value === 'Prix croissant')  return arr.sort((a, b) => getPrice(a) - getPrice(b))
  if (value === 'Prix décroissant') return arr.sort((a, b) => getPrice(b) - getPrice(a))
  if (value === 'Nouveautés')      return arr.reverse()
  return arr // En vedette = ordre d'origine
}

function tabStyle(active) {
  return {
    fontFamily: "'Neue Montreal', sans-serif",
    fontSize: '11px',
    fontWeight: active ? 500 : 400,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: active ? 'var(--text-primary)' : 'rgba(17,17,17,0.42)',
    textDecoration: 'none',
    padding: '20px 18px',
    borderBottom: active ? '2px solid var(--text-primary)' : '2px solid transparent',
    transition: 'color 0.2s ease, border-color 0.2s ease',
    whiteSpace: 'nowrap',
    display: 'inline-block',
  }
}

// Barre d'onglets catégories. Optionnellement, tri + compteur à droite (même
// ligne) quand on passe sort/onSort/count, reproduit exactement la barre de
// la page petit-déjeuner (ProductsPageTemplate).
export default function CategoryTabs({ sort, onSort, count, sorts = DEFAULT_SORTS }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const showSort = sort != null && typeof onSort === 'function'

  return (
    <div className="cat-tabs" style={{ background: '#FFFFFF' }}>
      <div className="cat-tabs-inner" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', borderBottom: '1px solid rgba(17,17,17,0.08)' }}>

        {/* Onglets catégories, défilables horizontalement */}
        <nav className="cat-tabs-links" aria-label="Catégories" style={{ display: 'flex', alignItems: 'center', overflowX: 'auto', minWidth: 0 }}>
          {CATEGORIES.map(cat => {
            const active = pathname === cat.href
            return (
              <a
                key={cat.href}
                href={cat.href}
                style={tabStyle(active)}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderBottomColor = 'rgba(17,17,17,0.2)' } }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'rgba(17,17,17,0.42)'; e.currentTarget.style.borderBottomColor = 'transparent' } }}
              >
                {cat.label}
              </a>
            )
          })}
        </nav>

        {/* Tri + compteur, même ligne, à droite */}
        {showSort && (
          <div className="cat-tabs-sort" style={{ display: 'flex', alignItems: 'center', gap: '28px', flexShrink: 0 }}>
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setOpen(!open)}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-primary)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', outline: 'none' }}
              >
                {sort}
                <span style={{ fontSize: '9px', opacity: 0.5 }}>▾</span>
              </button>
              {open && (
                <div style={{ position: 'absolute', top: 'calc(100% + 12px)', right: 0, background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.08)', padding: '8px 0', minWidth: '180px', boxShadow: '0 16px 32px rgba(17,17,17,0.06)', zIndex: 10 }}>
                  {sorts.map(s => (
                    <button
                      key={s}
                      onClick={() => { onSort(s); setOpen(false) }}
                      style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 20px', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', letterSpacing: '0.06em', color: s === sort ? 'var(--accent)' : 'var(--text-primary)', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {count != null && (
              <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', whiteSpace: 'nowrap' }}>
                {count} produit{count > 1 ? 's' : ''}
              </span>
            )}
          </div>
        )}
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .cat-tabs-links::-webkit-scrollbar { display: none; }
        .cat-tabs-links { scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        @media (max-width: 1024px) { .cat-tabs-inner { padding: 0 40px !important; } }
        @media (max-width: 768px)  { .cat-tabs-inner { padding: 0 16px !important; gap: 12px !important; } }
      ` }} />
    </div>
  )
}
