'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

const artisans = [
  {
    nom: 'Mado Paris',
    specialite: 'Madeleines',
    description: "Les madeleines Mado Paris sont notre produit signature. Moelleuses, dorées, reconnaissables au premier goût. Un incontournable de nos petits-déjeuners d'entreprise.",
    tags: ['Fabrication artisanale', 'Produit signature', 'Paris'],
    img: '/creations-1.png',
  },
  {
    nom: 'Maison Marques',
    specialite: 'Viennoiseries',
    description: "Mini-viennoiseries confectionnées chaque matin avec des farines françaises sélectionnées. Un classique du petit-déjeuner, toujours régulier, toujours bon.",
    tags: ['Farines françaises', 'Fabrication quotidienne', 'Île-de-France'],
    img: '/creations-2.png',
  },
  {
    nom: 'Pierre Morel',
    specialite: 'Macarons',
    description: "Des macarons précis, aux saveurs nettes et bien définies. Pierre Morel livre une pâtisserie qui tient ses promesses à chaque dégustation.",
    tags: ['Pâtisserie française', 'Saveurs nettes', 'Fait maison'],
    img: '/selection-chef.png',
  },
  {
    nom: 'Laura Todd',
    specialite: 'Cookies',
    description: "Les cookies Laura Todd sont devenus une référence à Paris. Croustillants dehors, fondants dedans. Ils disparaissent toujours en premier sur nos plateaux.",
    tags: ['Référence parisienne', 'Recette signature', 'Fait maison'],
    img: '/creations-featured.webp',
  },
  {
    nom: 'Alain Milliat',
    specialite: 'Jus & Nectars',
    description: "La référence française des jus et nectars premium. Des fruits entiers, aucun ajout, une intensité de goût rare. Un choix qui change tout à l'heure du petit-déjeuner.",
    tags: ['Fruits entiers', 'Sans ajout', 'Premium'],
    img: '/pause-orange.webp',
  },
  {
    nom: 'Les Vergers de Plaisirs',
    specialite: 'Jus de fruits frais',
    description: "Des jus pressés avec des fruits soigneusement sélectionnés. Une fraîcheur naturelle et une générosité de goût qui s'intègrent parfaitement dans nos prestations.",
    tags: ['Fruits frais', 'Pressé à froid', 'Naturel'],
    img: '/buffet-sale.webp',
  },
  {
    nom: 'Dammann Frères',
    specialite: 'Thés & Infusions',
    description: "Maison de thé parisienne avec plus de trois siècles d'histoire. Des assemblages précis, des arômes définis, une constance de qualité adaptée aux pauses en entreprise.",
    tags: ['Maison parisienne', 'Assemblages précis', 'Grande maison'],
    img: '/cocktail.webp',
  },
  {
    nom: "D'un Passage à l'Autre",
    specialite: 'Boulangerie · Cakes & Crêpes',
    description: "Une boulangerie artisanale boulonnaise qui travaille chaque jour avec des produits frais. Leurs cakes et crêpes apportent une vraie touche maison à nos prestations.",
    tags: ['Artisan local', 'Boulogne-Billancourt', 'Fait maison'],
    img: '/buffet.webp',
  },
]

export default function NosArtisans() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: '72px' }}>

        {/* ── Header ── */}
        <div
          className="artisans-header"
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
            marginBottom: '24px',
          }}>
            Nos Artisans
          </p>
          <h1 style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(32px, 5vw, 68px)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            marginBottom: '28px',
          }}>
            Des artisans choisis<br />pour ce qu'ils font vraiment.
          </h1>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '15px',
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            maxWidth: '540px',
            margin: '0 auto',
          }}>
            Mado Paris, Alain Milliat, Dammann Frères, Laura Todd... Chaque partenaire a été choisi pour une raison simple : la qualité de ce qu'il produit, sa régularité et son engagement artisanal.
          </p>
        </div>

        {/* ── Grille artisans ── */}
        <div
          className="artisans-grid"
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '64px 72px 120px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
          }}
        >
          {artisans.map((a, i) => (
            <div key={i} style={{ background: 'var(--bg-secondary)' }}>

              {/* Photo */}
              <div style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                <img
                  src={a.img}
                  alt={a.nom}
                  className="artisan-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                  }}
                />
              </div>

              {/* Cercle portrait */}
              <div style={{ position: 'relative', height: 0 }}>
                <img
                  src={a.img}
                  alt={a.nom}
                  className="artisan-avatar"
                />
              </div>

              {/* Contenu */}
              <div style={{ padding: '28px 24px 36px' }}>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '8px',
                }}>
                  {a.specialite}
                </p>
                <h3 style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: '22px',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  lineHeight: 1.2,
                }}>
                  {a.nom}
                </h3>
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '13px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                }}>
                  {a.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {a.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontFamily: "'Neue Montreal', sans-serif",
                      fontSize: '9px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-secondary)',
                      border: '1px solid rgba(17,17,17,0.15)',
                      padding: '4px 8px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          className="artisans-cta"
          style={{
            borderTop: '1px solid rgba(17,17,17,0.08)',
            padding: '40px 72px',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            Vous êtes artisan et souhaitez rejoindre notre réseau ?
            <a
              href="mailto:contact@lecrindesterroirs.fr"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                borderBottom: '1px solid currentColor',
                paddingBottom: '1px',
              }}
            >
              Contactez-nous →
            </a>
          </p>
        </div>

      </main>

      <style suppressHydrationWarning>{`
        .artisan-img:hover { transform: scale(1.04); }
        .artisan-avatar {
          position: absolute;
          top: -28px;
          left: 16px;
          width: 56px;
          height: 56px;
          border-radius: 50% !important;
          object-fit: cover;
          object-position: center top;
          border: 2px solid #FFFFFF;
          box-shadow: 0 2px 8px rgba(0,0,0,0.18);
          display: block;
        }
        @media (max-width: 768px) {
          .artisans-header { padding: 60px 24px 48px !important; }
          .artisans-grid { grid-template-columns: 1fr !important; padding: 40px 24px 80px !important; }
          .artisans-cta { padding: 32px 24px !important; }
          .artisans-cta p { flex-direction: column; gap: 12px; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .artisans-header { padding: 80px 40px 60px !important; }
          .artisans-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 48px 40px 80px !important; }
          .artisans-cta { padding: 32px 40px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
