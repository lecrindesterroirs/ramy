'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

const categories = [
  {
    titre: 'Boulangerie & Viennoiseries',
    artisans: [
      {
        nom: 'Maison Marques',
        specialite: 'Viennoiseries',
        description: "On travaille avec Maison Marques depuis le début. Référencée Gault & Millau, leurs viennoiseries sont confectionnées chaque matin avec des farines françaises rigoureusement sélectionnées. C'est le genre de partenaire qui ne déçoit jamais — régulier, précis, toujours bon.",
        tags: ['Gault & Millau', 'Fabrication quotidienne', 'Île-de-France'],
        img: '/creations-2.png',
      },
      {
        nom: "D'un Passage à l'Autre",
        specialite: 'Boulangerie · Cakes & Crêpes',
        description: "Une boulangerie artisanale boulonnaise que peu de gens connaissent et qu'on est fiers de faire découvrir. Deux adresses rue Galliéni et rue Paul Bert à Boulogne, dont une gamme certifiée bio. Leurs cakes et crêpes apportent une vraie touche maison à nos prestations.",
        tags: ['Boulogne-Billancourt', 'Gamme bio certifiée', 'Fait maison'],
        img: '/buffet.webp',
      },
    ],
  },
  {
    titre: 'Pâtisserie',
    artisans: [
      {
        nom: 'Mado Paris',
        specialite: 'Madeleines',
        description: "Les madeleines Mado Paris sont notre produit signature. Fabriquées dans leur atelier parisien avec des ingrédients biologiques français, sans huile de palme. Moelleuses, dorées, reconnaissables au premier goût — nos clients les reconnaissent avant même de lire l'étiquette.",
        tags: ['Ingrédients biologiques', 'Sans huile de palme', 'Paris'],
        img: '/creations-1.png',
      },
      {
        nom: 'Laura Todd',
        specialite: 'Cookies',
        description: "Installés à Paris depuis 1985, pionniers du cookie en France. Leur recette, primée à Chicago en 1933, est produite chaque jour dans leur atelier du 18e. Les cookies Laura Todd disparaissent toujours en premier sur nos plateaux. Une adresse qu'on garde précieusement.",
        tags: ['Paris depuis 1985', 'Recette signature', 'Production quotidienne'],
        img: '/creations-featured.webp',
      },
      {
        nom: 'Pierre Morel',
        specialite: 'Macarons',
        description: "Formé auprès d'un Meilleur Ouvrier de France, Pierre Morel fabrique ses macarons depuis 2013 selon une technique exigeante. Meringue italienne signature, zéro arôme artificiel, ganaches au chocolat pur origine 64%. Des macarons d'une précision et d'une régularité rarissimes.",
        tags: ['Meringue italienne', 'Formé par un MOF', 'Chocolat pur origine'],
        img: '/selection-chef.png',
      },
    ],
  },
  {
    titre: 'Produits laitiers',
    artisans: [
      {
        nom: 'La Ferme de Viltain',
        specialite: 'Yaourts & Produits laitiers',
        description: "À Jouy-en-Josas, à 17 km de Paris, la Ferme de Viltain fabrique ses yaourts depuis 1954. Leur troupeau de 350 vaches fournit le lait que leur laiterie transforme directement — yaourts natures, aux fruits, de dessert. Un circuit en direct qui se sent dans l'onctuosité : pas de transport long, pas d'intermédiaire, un produit frais qui arrive dans nos plateaux petit-déjeuner le lendemain matin.",
        tags: ['Jouy-en-Josas · 17 km de Paris', 'Depuis 1954 · 350 vaches', 'Laiterie en circuit direct'],
        img: '/buffet.webp',
      },
    ],
  },
  {
    titre: 'Boissons',
    artisans: [
      {
        nom: 'Alain Milliat',
        specialite: 'Jus & Nectars',
        description: "Fondée en 1997 à Valence, dans la Drôme. 38 références, fruits entiers, aucun sucre ajouté, aucun additif. La moitié des fruits vient de producteurs français. Quand on pose un jus Alain Milliat sur une table, les gens le remarquent. C'est ça, un produit qui se justifie seul.",
        tags: ['Fruits entiers', 'Sans sucre ajouté', 'Drôme · 1997'],
        img: '/pause-orange.webp',
      },
      {
        nom: 'Les Vergers de Plaisirs',
        specialite: 'Jus de pomme artisanal',
        description: "Verger familial planté en 1982 à Plaisir, dans les Yvelines. 10 variétés de pommes sélectionnées pour le goût. Leur jus de pomme artisanal, sans aucun ajout, est l'un de nos produits les plus appréciés en pause. Local, direct, sans intermédiaire.",
        tags: ['Verger depuis 1982', 'Yvelines', 'Sans ajout'],
        img: '/buffet-sale.webp',
      },
      {
        nom: 'Dammann Frères',
        specialite: 'Thés & Infusions',
        description: "Privilège royal accordé par Louis XIV en 1692. Boutique historique place des Vosges, Paris. Inventeurs du thé aromatisé moderne. Dammann Frères, c'est le choix qu'on fait quand on veut que la pause thé soit aussi soignée que le reste de la prestation.",
        tags: ['Depuis 1692', 'Place des Vosges', 'Grande maison'],
        img: '/cocktail.webp',
      },
    ],
  },
]

export default function NosArtisans() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

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

        {/* ── Catégories ── */}
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 72px 120px' }}>
          {categories.map((cat, ci) => (
            <div key={ci} style={{ marginBottom: ci < categories.length - 1 ? '96px' : 0 }}>

              {/* Titre catégorie */}
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  lineHeight: 1,
                }}>
                  {cat.titre}
                </h2>
                <div style={{ width: '40px', height: '2px', background: 'var(--accent)' }} />
              </div>

              {/* Grille 2 colonnes */}
              <div
                className="artisans-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '10px',
                }}
              >
                {cat.artisans.map((a, i) => (
                  <div key={i} style={{ background: 'var(--bg-secondary)' }}>

                    {/* Photo */}
                    <div style={{ width: '100%', aspectRatio: '16 / 9', overflow: 'hidden' }}>
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
                    <div className="artisan-card-body" style={{ padding: '36px 32px 40px' }}>
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
                      <h3 className="artisan-card-title" style={{
                        fontFamily: "'Baskerville Display PT', Georgia, serif",
                        fontSize: '26px',
                        fontWeight: 400,
                        color: 'var(--text-primary)',
                        marginBottom: '16px',
                        lineHeight: 1.2,
                      }}>
                        {a.nom}
                      </h3>
                      <p className="artisan-card-desc" style={{
                        fontFamily: "'Neue Montreal', sans-serif",
                        fontSize: '14px',
                        lineHeight: 1.75,
                        color: 'var(--text-secondary)',
                        marginBottom: '24px',
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
          left: 20px;
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
          .artisans-grid { grid-template-columns: 1fr !important; }
          .artisans-cta { padding: 32px 24px !important; }
          .artisans-cta p { flex-direction: column; gap: 12px; }
          .artisan-card-title { font-size: 18px !important; }
          .artisan-card-desc { font-size: 12px !important; }
          .artisan-card-body { padding: 28px 20px 32px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .artisans-header { padding: 80px 40px 60px !important; }
          .artisans-cta { padding: 32px 40px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
