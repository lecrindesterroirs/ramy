'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

const engagements = [
  {
    num: '01',
    titre: 'Une sélection sans compromis',
    desc: "Chaque produit que vous trouvez chez L'Écrin a été choisi, testé, remis en question. Pas de référencement automatique, pas de catalogue imposé. Nous travaillons avec des artisans parce qu'ils font quelque chose de mieux que les autres, et pour aucune autre raison.",
    details: ['Dégustation avant référencement', 'Réévaluation régulière', 'Refus des produits standardisés'],
    img: '/laura-todd.webp',
  },
  {
    num: '02',
    titre: 'Des ingrédients qu\'on peut nommer',
    desc: "Farines françaises rigoureusement sélectionnées, ingrédients biologiques, sans huile de palme, chocolat pur origine 64%, fruits entiers, zéro arôme artificiel. Ce que vous mangez a une provenance, et on la connaît.",
    details: ['Madeleines Mado Paris : ingrédients bio, sans huile de palme', 'Macarons Pierre Morel : zéro arôme artificiel', 'Jus Alain Milliat : fruits entiers, sans sucre ajouté', 'Les Vergers de Plaisir : circuit direct, sans intermédiaire'],
    img: '/creations-featured.webp',
  },
  {
    num: '03',
    titre: 'Circuit court quand ça sert le produit',
    desc: "Nous choisissons des producteurs locaux quand la proximité améliore réellement le produit, pas comme argument marketing. Le verger des Yvelines pour le jus de pomme, La Ferme de Viltain à Jouy-en-Josas pour ses yaourts au lait de leur troupeau de 350 vaches à 17 km de Paris. La boulangerie de Boulogne parce qu'elle fait ses cakes chaque matin.",
    details: ['Les Vergers de Plaisir · Yvelines', "D'un Passage à l'Autre · Boulogne-Billancourt", 'La Ferme de Viltain · Yaourts · Jouy-en-Josas', 'Maison Marques · Île-de-France'],
    img: '/verger-plaisir.avif',
  },
  {
    num: '04',
    titre: 'Une livraison qui fait partie du service',
    desc: "Nos livreurs ne sont pas des prestataires exterens, ils font partie de notre équipe et de l'expérience que nous proposons. Présents dès 6h30, formés à nos standards, ils installent les prestations comme nous le ferions nous-mêmes.",
    details: ['Livraison dès 6h30, lundi–vendredi', 'Paris et Île-de-France', 'Installation soignée incluse', 'Équipe interne, pas de sous-traitance'],
    img: '/creations-1.webp',
  },
]

const chiffres = [
  { val: '8', unit: 'artisans', desc: 'sélectionnés avec exigence' },
  { val: '6h30', unit: '', desc: 'dès 6h30 le matin' },
  { val: '100%', unit: '', desc: 'livraison par notre équipe' },
  { val: '0', unit: 'arôme', desc: 'artificiel dans nos produits signature' },
]

export default function NosEngagements() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* Hero texte */}
        <div className="eng-hero" style={{ background: 'var(--bg-secondary)', padding: '100px 72px 80px', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '24px' }}>
              Nos Engagements
            </p>
            <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 5vw, 68px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginBottom: '28px' }}>
              Ce qui est vrai<br />dans ce qu'on fait.
            </h1>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto' }}>
              Ces engagements ne sont pas une charte de communication. Ce sont les critères réels qui guident chacun de nos choix : artisans, produits, logistique, service.
            </p>
        </div>

        {/* Détail des engagements */}
        <div className="eng-list" style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 72px 120px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {engagements.map((e, i) => (
            <div
              key={i}
              className="eng-item"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                direction: i % 2 !== 0 ? 'rtl' : 'ltr',
              }}
            >
              {/* Image */}
              <div style={{ overflow: 'hidden', direction: 'ltr' }}>
                <img loading="lazy" src={e.img} alt={e.titre} style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }} />
              </div>

              {/* Texte */}
              <div style={{ background: 'var(--bg-secondary)', padding: '60px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', direction: 'ltr' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '48px', fontWeight: 700, letterSpacing: '-0.02em', color: 'rgba(224,161,38,0.15)', lineHeight: 1, marginBottom: '20px' }}>
                  {e.num}
                </p>
                <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: 1.15 }}>
                  {e.titre}
                </h2>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '28px' }}>
                  {e.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {e.details.map((d, j) => (
                    <p key={j} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>—</span>
                      {d}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Citation finale */}
        <div className="eng-quote" style={{ background: 'var(--bg-secondary)', padding: '100px 72px', textAlign: 'center' }}>
          <div style={{ width: '1px', height: '56px', background: 'var(--accent)', margin: '0 auto 40px' }} />
          <blockquote style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(20px, 2.5vw, 34px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.4, color: 'var(--text-primary)', maxWidth: '640px', margin: '0 auto 24px', letterSpacing: '-0.01em' }}>
            "Ce n'est pas le prix qui fait la qualité. C'est l'attention portée à chaque détail."
          </blockquote>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            L'Écrin Traiteur, Paris
          </p>
          <div style={{ width: '1px', height: '56px', background: 'var(--accent)', margin: '40px auto 0' }} />
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .eng-hero { padding: 64px 24px 56px !important; }
          .eng-chiffres { padding: 0 0 !important; }
          .eng-chiffres > div { grid-template-columns: 1fr 1fr !important; }
          .eng-chiffres > div > div { padding: 28px 20px !important; }
          .eng-list { padding: 40px 16px 80px !important; }
          .eng-item { grid-template-columns: 1fr !important; direction: ltr !important; }
          .eng-item > div:first-child img { height: 260px !important; }
          .eng-item > div:last-child { padding: 32px 24px !important; }
          .eng-quote { padding: 64px 24px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .eng-hero { padding: 80px 40px 64px !important; }
          .eng-chiffres { padding: 0 40px !important; }
          .eng-list { padding: 64px 40px 100px !important; }
          .eng-item > div:last-child { padding: 40px 36px !important; }
          .eng-quote { padding: 80px 40px !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
