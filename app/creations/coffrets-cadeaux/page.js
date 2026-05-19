'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { useCart } from '../../../context/CartContext'
import { useState } from 'react'

const coffrets = [
  {
    id: 'madeleines-10',
    name: 'Coffret Découverte',
    subtitle: '10 madeleines Mado Paris',
    price: 24.90,
    label: '24,90€',
    qty: '10 pièces',
    shortName: 'Madeleines × 10',
    description: "Notre coffret d'initiation. Dix madeleines aux parfums variés, confectionnées avec des ingrédients biologiques français, sans huile de palme. Pour offrir une première fois mémorable.",
    img: '/creations-3.png',
    tags: ['Bio', 'Sans huile de palme'],
    ideal: 'Idéal pour : accueil visiteur, cadeau de bienvenue',
  },
  {
    id: 'madeleines-20',
    name: 'Coffret Maison',
    subtitle: '20 madeleines Mado Paris',
    price: 49.00,
    label: '49,00€',
    qty: '20 pièces',
    shortName: 'Madeleines × 20',
    description: "Vingt madeleines pour partager. Le format privilégié des équipes et des réunions. Une sélection de parfums signature, dans un coffret soigné. Tout est dans les détails.",
    img: '/creations-4.png',
    tags: ['Bio', 'Sans huile de palme'],
    ideal: 'Idéal pour : réunion, séminaire, cadeau d\'équipe',
  },
  {
    id: 'madeleines-50',
    name: 'Grand Coffret',
    subtitle: '50 madeleines Mado Paris',
    price: 119.00,
    label: '119,00€',
    qty: '50 pièces',
    shortName: 'Madeleines × 50',
    description: "Le grand format pour les grandes occasions. Cinquante madeleines Mado Paris — le produit signature de L'Écrin — dans un coffret pensé pour l'événementiel d'entreprise de prestige.",
    img: '/creations-1.png',
    tags: ['Bio', 'Sans huile de palme', 'Format événementiel'],
    ideal: 'Idéal pour : fin d\'année, incentive, COMEX',
  },
  {
    id: 'macarons',
    name: 'Coffret Macarons',
    subtitle: '24 macarons Pierre Morel',
    price: 64.00,
    label: '64,00€',
    qty: '24 pièces',
    shortName: 'Macarons',
    description: "Vingt-quatre macarons confectionnés par Pierre Morel — formé auprès d'un Meilleur Ouvrier de France. Meringue italienne signature, ganaches au chocolat pur origine. Un coffret d'exception.",
    img: '/creations-1.png',
    tags: ['Sans gluten', 'Artisanal'],
    ideal: 'Idéal pour : cadeau client, moment de prestige',
  },
  {
    id: 'cookies',
    name: 'Coffret Cookies',
    subtitle: '6 cookies Laura Todd',
    price: 17.90,
    label: '17,90€',
    qty: '6 pièces',
    shortName: 'Cookies',
    description: "Six cookies Laura Todd — la maison parisienne qui a inventé le cookie artisanal en France en 1985. Une recette primée à Chicago, produite chaque jour dans leur laboratoire du 18e. Simple, authentique, inoubliable.",
    img: '/creations-2.png',
    tags: ['Recette signature', 'Paris depuis 1985'],
    ideal: 'Idéal pour : pause gourmande, accueil',
  },
]

function CoffretCard({ coffret }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const [qty, setQty] = useState(1)

  const handleAdd = () => {
    addItem(coffret, qty)
    setAdded(true)
    setQty(1)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div style={{ background: 'var(--bg-secondary)', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }} className="coffret-card">
      {/* Image */}
      <div style={{ overflow: 'hidden', aspectRatio: '1/1' }}>
        <img src={coffret.img} alt={coffret.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* Contenu */}
      <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '8px' }}>
            {coffret.subtitle}
          </p>
          <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(22px, 2vw, 32px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.1 }}>
            {coffret.name}
          </h3>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '16px' }}>
            {coffret.description}
          </p>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', marginBottom: '16px', fontStyle: 'italic' }}>
            {coffret.ideal}
          </p>
          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
            {coffret.tags.map(tag => (
              <span key={tag} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.5)', border: '1px solid rgba(17,17,17,0.12)', padding: '4px 8px' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '28px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '16px' }}>
            {coffret.label}
          </p>

          {/* Quantité */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(17,17,17,0.12)' }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: '32px', height: '32px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
              <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, minWidth: '28px', textAlign: 'center' }}>{qty}</span>
              <button onClick={() => setQty(q => q + 1)} style={{ width: '32px', height: '32px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
            </div>
          </div>

          <button
            onClick={handleAdd}
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: added ? '#FFFFFF' : '#FFFFFF',
              background: added ? 'rgba(17,17,17,0.7)' : 'var(--accent)',
              border: 'none',
              padding: '12px 24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.25s ease',
            }}
          >
            {added ? (
              <><svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg>Ajouté au panier</>
            ) : (
              <>Ajouter au panier →</>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CoffretsPage() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* Header */}
        <div className="coffrets-header" style={{ background: 'var(--bg-secondary)', padding: '80px 72px 72px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            Coffrets & Cadeaux
          </p>
          <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.05, color: 'var(--text-primary)', marginBottom: '24px' }}>
            Offrir ce qui a vraiment du goût.
          </h1>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 40px' }}>
            Séminaires, fins d'année, cadeaux clients, accueil de visiteurs — des coffrets artisanaux sélectionnés pour l'entreprise qui soigne ses relations.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            {[
              { icon: '📦', txt: 'Livraison dès 6h30' },
              { icon: '✦', txt: 'Artisans sélectionnés' },
              { icon: '📋', txt: 'Commande sur facture possible' },
            ].map(item => (
              <p key={item.txt} style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.45)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>{item.icon}</span> {item.txt}
              </p>
            ))}
          </div>
        </div>

        {/* Grille coffrets */}
        <div className="coffrets-list" style={{ maxWidth: '1440px', margin: '0 auto', padding: '64px 72px 120px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {coffrets.map(c => <CoffretCard key={c.id} coffret={c} />)}
        </div>

        {/* CTA devis grande quantité */}
        <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)', padding: '64px 72px', textAlign: 'center', background: 'var(--bg-secondary)' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            Grandes quantités
          </p>
          <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '16px' }}>
            Un projet événementiel ?
          </h2>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 32px' }}>
            Pour des commandes de 50 coffrets et plus, des créations personnalisées ou des besoins récurrents, contactez-nous directement.
          </p>
          <a href="/devis" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', padding: '14px 32px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'opacity 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Nous contacter →
          </a>
        </div>

      </main>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .coffrets-header { padding: 56px 24px 48px !important; }
          .coffrets-list { padding: 40px 16px 80px !important; }
          .coffret-card { grid-template-columns: 1fr !important; }
          .coffret-card > div:first-child { aspect-ratio: 16/9 !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .coffrets-header { padding: 64px 40px 56px !important; }
          .coffrets-list { padding: 48px 40px 100px !important; }
          .coffret-card > div:last-child { padding: 32px 28px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
