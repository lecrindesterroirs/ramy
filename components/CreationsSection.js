import Image from 'next/image'

const creations = [
  {
    label: 'Petit-déjeuner & Pause',
    description: 'Commencez la journée en douceur avec des produits frais et gourmands.',
    img: '/hero-petitdej.webp',
    href: '/creations/petits-dejeuners-et-pauses',
  },
  {
    label: 'Plateaux repas',
    description: 'Des recettes fraîches, de saison et équilibrées pour des déjeuners savoureux et responsables.',
    img: '/plateau-mediterraneen.webp',
    href: '/creations/plateaux-repas',
  },
  {
    label: 'Cocktails',
    description: 'Des pièces salées et sucrées raffinées pour sublimer tous vos événements.',
    img: '/cocktail-signature.webp',
    href: '/creations/cocktails-et-buffets',
  },
  {
    label: 'Buffet à partager',
    description: 'Des buffets conviviaux et généreux pensés pour rassembler et marquer les esprits.',
    img: '/hero-a-partager.webp',
    href: '/creations/plateaux-aperitifs',
  },
  {
    label: 'Boissons',
    description: "Jus, softs, cafés et thés d'exception pour accompagner chaque moment.",
    img: '/creations-boissons.webp',
    href: '/creations/boissons',
  },
  {
    label: 'Créations',
    description: 'Des recettes de saison et des créations uniques imaginées pour éveiller les papilles.',
    img: '/prod-tartes-fines.webp',
    href: '/creations/evenements-saisonniers',
  },
]

function Card({ item }) {
  return (
    <a
      href={item.href}
      style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', textDecoration: 'none' }}
    >
      <div
        className="img-zoom"
        style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', flexShrink: 0 }}
      >
        <Image fill src={item.img}
          alt={item.label}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: item.imgPosition || 'center center', transition: 'transform 0.6s ease' }}
        />
      </div>
      <div style={{ background: '#F5F5F0', padding: '18px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '19px', fontWeight: 400, color: '#111111', marginBottom: '6px', margin: '0 0 6px' }}>
          {item.label}
        </p>
        {item.description && (
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 400, lineHeight: 1.5, color: '#767068', margin: 0 }}>
            {item.description}
          </p>
        )}
      </div>
    </a>
  )
}

export default function CreationsSection() {
  return (
    <section
      className="creations-section"
      style={{
        background: 'var(--bg-primary)',
        paddingTop: '112px',
        paddingBottom: '56px',
      }}
    >
      <div className="reveal creations-title-wrap" style={{ padding: '0 72px 40px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
          Notre carte
        </p>
        <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(28px, 3.2vw, 44px)', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '14px' }}>
          Pour tous les moments de la journée
        </h2>
        <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto' }}>
          Des instants gourmands, pensés avec passion pour sublimer vos journées.
        </p>
      </div>

      <div className="reveal creations-grid-wrap" style={{ padding: '0 72px' }}>
        <div className="creations-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', maxWidth: '1280px', margin: '0 auto' }}>
          {creations.map((item) => (
            <div key={item.label} style={{ overflow: 'hidden' }}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .creations-section { padding-top: 40px !important; padding-bottom: 40px !important; }
          .creations-title-wrap { padding: 0 20px 28px !important; }
          .creations-grid-wrap { padding: 0 16px !important; }
          .creations-grid { grid-template-columns: 1fr !important; gap: 6px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .creations-title-wrap { padding: 0 40px 32px !important; }
          .creations-grid-wrap { padding: 0 40px !important; }
          .creations-grid { grid-template-columns: 1fr 1fr !important; }
        }
      ` }} />

    </section>
  )
}
