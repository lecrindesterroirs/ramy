import Image from 'next/image'
import { PDJ_DES, PLATEAU_DES, euroFr, euroEn } from '../lib/prixEntree'

const creations = [
  {
    label: "Petit-déjeuner d'entreprise",
    description: `Livraison dès 6h30 à Paris : viennoiseries, jus, café et fruits, dès ${euroFr(PDJ_DES)} HT par personne.`,
    img: '/hero-petitdej.webp',
    href: '/creations/petits-dejeuners-et-pauses',
  },
  {
    label: 'Pause Goûter',
    description: 'Madeleines, cookies, cakes et fruits frais pour rythmer vos pauses et goûters d\'équipe.',
    img: '/prod-cake-marbre-large.webp',
    href: '/creations/pauses-gourmandes',
  },
  {
    label: 'Cocktails',
    description: 'Gougères au fromage, brochettes de poulet tandoori, mini cheeseburgers : 8, 12 ou 16 pièces par personne.',
    img: '/cocktail-celebration-doux.webp',
    href: '/creations/cocktails',
  },
  {
    label: 'Buffet à partager',
    description: 'Houmous, taboulé, caviar d\'aubergine et planches à partager, posés au centre de la table.',
    img: '/hero-a-partager.webp',
    href: '/creations/a-partager',
  },
  {
    label: 'Plateaux repas',
    description: `Filet de poulet, saumon ou falafels, entrée et dessert compris, dès ${euroFr(PLATEAU_DES)} HT par personne.`,
    img: '/plateau-mediterraneen.webp',
    href: '/creations/plateaux-repas',
  },
  {
    label: 'Boissons',
    description: "Jus Alain Milliat, thés Mariage Frères, café bio en thermos.",
    img: '/creations-boissons.webp',
    href: '/creations/boissons',
  },
]

/* Textes anglais, par href : les images et les liens restent les mêmes. */
const EN_CREATIONS = {
  '/creations/petits-dejeuners-et-pauses': {
    label: 'Corporate breakfast',
    description: `Delivered from 6:30 am in Paris: pastries, juice, coffee and fresh fruit, from ${euroEn(PDJ_DES)} excl. VAT per person.`,
  },
  '/creations/pauses-gourmandes': {
    label: 'Afternoon treats',
    description: 'Madeleines, cookies, loaf cakes and fresh fruit to give your team breaks a shape.',
  },
  '/creations/cocktails': {
    label: 'Cocktail receptions',
    description: 'Cheese gougères, tandoori chicken skewers, mini cheeseburgers: 8, 12 or 16 canapés per person.',
  },
  '/creations/a-partager': {
    label: 'Sharing buffet',
    description: 'Hummus, tabbouleh, aubergine caviar and sharing boards, set down in the middle of the table.',
  },
  '/creations/plateaux-repas': {
    label: 'Lunch trays',
    description: `Chicken, salmon or falafel, starter and dessert included, from ${euroEn(PLATEAU_DES)} excl. VAT per person.`,
  },
  '/creations/boissons': {
    label: 'Drinks',
    description: 'Juices, soft drinks, coffee and tea worth putting on the table.',
  },
}

const T_CREATIONS = {
  fr: {
    eyebrow: 'Notre carte',
    titre: 'Pour tous les moments de la journée',
    corps: 'Des instants gourmands, pensés avec passion pour sublimer vos journées.',
  },
  en: {
    eyebrow: 'Our menu',
    titre: 'For every moment of the working day',
    corps: 'Breakfasts, lunches, breaks and receptions, each built for the moment it serves.',
  },
}

function Card({ item, lang = 'fr' }) {
  const en = lang === 'en' ? EN_CREATIONS[item.href] : null
  item = en ? { ...item, ...en, href: `/en${item.href}` } : item
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
        <p style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: '19px', fontWeight: 400, color: '#111111', marginBottom: '6px', margin: '0 0 6px' }}>
          {item.label}
        </p>
        {item.description && (
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '12px', fontWeight: 400, lineHeight: 1.5, color: '#767068', margin: 0 }}>
            {item.description}
          </p>
        )}
      </div>
    </a>
  )
}

export default function CreationsSection({ lang = 'fr' }) {
  const T = T_CREATIONS[lang] || T_CREATIONS.fr
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
        <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '14px' }}>
          {T.eyebrow}
        </p>
        <h2 style={{ fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif", fontSize: 'clamp(28px, 3.2vw, 44px)', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '14px' }}>
          {T.titre}
        </h2>
        <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto' }}>
          {T.corps}
        </p>
      </div>

      <div className="reveal creations-grid-wrap" style={{ padding: '0 72px' }}>
        <div className="creations-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', maxWidth: '1280px', margin: '0 auto' }}>
          {creations.map((item) => (
            <div key={item.label} style={{ overflow: 'hidden' }}>
              <Card item={item} lang={lang} />
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
