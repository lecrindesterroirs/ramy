'use client'

import ProductsPageTemplate from '../../../components/ProductsPageTemplate'

const fallback = [
  { name: 'Jus de Pomme',                  label: '1 litre — 9,50€',   img: '/bois-jus-pomme.webp' },
  { name: "Jus d'Orange",                  label: '1 litre — 9,50€',   img: '/bois-jus-orange.webp' },
  { name: "Jus d'Abricot",                 label: '1 litre — 10,50€',  img: '/bois-jus-abricot.webp' },
  { name: 'Jus de Pêche',                  label: '1 litre — 10,50€',  img: '/bois-jus-peche.webp' },
  { name: 'Jus de Fraise',                 label: '1 litre — 10,50€',  img: '/bois-jus-fraise.webp' },
  { name: "Jus d'Orange Pressé Minute",    label: '1 litre — 9,90€',   img: '/bois-jus-orange-presse.webp' },
  { name: 'Jus de Pomme du Verger',        label: '1 litre — 9,50€',   img: '/bois-jus-verger.webp' },
  { name: 'Jus de Pomme-Framboise',        label: '1 litre — 9,50€',   img: '/bois-jus-framboise.webp' },
  { name: 'Citronnade Gingembre JOMO',     label: '1 litre — 9,50€',   img: '/bois-citronnade.webp' },
  { name: 'Thermos de Café Bio',           label: '1 litre — 19,50€',  img: '/bois-thermos-cafe.webp' },
  { name: 'Thermos de Thé Dammann Frères', label: '1 litre — 19,50€',  img: '/bois-thermos-cafe.webp' },
  { name: 'Thermos de Chocolat Chaud',     label: '1 litre — 19,50€',  img: '/bois-thermos-cafe.webp' },
  { name: 'Evian',                         label: '75 cl — 4,80€',     img: '/bois-evian-75.webp' },
  { name: 'Badoit',                        label: '75 cl — 4,80€',     img: '/bois-badoit.webp' },
  { name: 'Evian',                         label: '33 cl — 3,80€',     img: '/bois-evian-33.webp' },
]

const SEO_ARTICLE = `
  <h2>Boissons artisanales pour vos événements d'entreprise à Paris</h2>
  <p>La boisson est souvent le détail le plus remarqué — et le plus négligé. Un jus <strong>Alain Milliat</strong> sur la table dit quelque chose de votre exigence. Un thé <strong>Dammann Frères</strong> en réunion crée une atmosphère différente d'un sachet de supermarché. L'Écrin Traiteur sélectionne des boissons artisanales pour tous vos événements d'entreprise à Paris.</p>

  <h2>Notre sélection : Alain Milliat, Dammann Frères, Vergers de Plaisir</h2>
  <p>Nos jus artisanaux sont issus de fruits entiers, sans concentré, sans sucre ajouté. Les jus <strong>Alain Milliat</strong> (nectar de fraise, poire Williams, pur jus d'orange) sont reconnus des connaisseurs. Les jus du <strong>Verger de Plaisir</strong> (Yvelines) sont produits en circuit ultra-court. Les thés <strong>Dammann Frères</strong> et nos thermoses de café ou chocolat chaud complètent une offre pensée pour tous les moments de la journée.</p>

  <h2>Boissons froides et chaudes — du matin à l'après-midi</h2>
  <p>Pour un <strong>petit-déjeuner</strong> : jus froids + thermose de café ou thé. Pour une <strong>pause après-midi</strong> : boissons froides sans alcool — citronnade JOMO, jus de saison. Pour un <strong>cocktail</strong> : jus Alain Milliat premium + eaux pétillantes. Nos thermoses maintiennent vos boissons chaudes plusieurs heures après la livraison — pratique pour les séminaires de journée entière.</p>

  <h2>Commander vos boissons artisanales à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong>. Livraison dès <strong>6h30</strong>, du lundi au vendredi. Les boissons s'ajoutent facilement à une commande existante de viennoiseries ou de pâtisseries — une seule livraison, tout ensemble. Facturation entreprise avec TVA disponible.</p>
`

export default function Boissons() {
  return (
    <ProductsPageTemplate
      heroImg="/boissons-hero.webp"
      heroTitle={"Boissons"}
      heroSubtitle="Jus Alain Milliat, thés Dammann Frères, cafés et eaux. Des boissons choisies pour leur qualité."
      breadcrumb="Nos Créations — Boissons"
      categorieSlug="boissons"
      fallbackProducts={fallback}
      seoArticle={SEO_ARTICLE}
    />
  )
}
