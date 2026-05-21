'use client'

import ProductsPageTemplate from '../../../components/ProductsPageTemplate'

const fallback = [
  { name: 'Plateau cocktail dînatoire',     label: "L'Écrin Paris", img: '/cocktail.webp' },
  { name: 'Verrines gourmandes',            label: "L'Écrin Paris", img: '/buffet.webp' },
  { name: 'Buffet froid prestige',          label: "L'Écrin Paris", img: '/mini-cookies.webp' },
  { name: 'Mini-bouchées sucrées-salées',   label: "L'Écrin Paris", img: '/creations-2.png' },
  { name: 'Plateau charcuterie & fromages', label: "L'Écrin Paris", img: '/buffet-sale.webp' },
  { name: 'Buffet cocktail premium',        label: "L'Écrin Paris", img: '/chou.webp' },
  { name: 'Corbeille de mignardises',       label: "L'Écrin Paris", img: '/creations-4.png' },
  { name: 'Sélection de canapés',           label: "L'Écrin Paris", img: '/navette.webp' },
]

const SEO_ARTICLE = `
  <h2>Traiteur cocktails et buffets d'entreprise à Paris</h2>
  <p>Le <strong>cocktail d'entreprise</strong> est le format événementiel le plus polyvalent. Plus détendu qu'un repas assis, plus généreux qu'un simple buffet : c'est l'événement qui favorise les échanges naturels entre collaborateurs, clients et partenaires. L'Écrin Traiteur livre vos cocktails et buffets à Paris et en Île-de-France, à l'heure souhaitée.</p>

  <h2>Cocktail apéritif ou cocktail dînatoire — quelle différence ?</h2>
  <p>Le <strong>cocktail apéritif</strong> (1h30 à 2h) est léger — bouchées et boissons, sans vocation à remplacer un repas. Le <strong>cocktail dînatoire</strong> (2h30 à 3h) est plus généreux : les convives doivent pouvoir se nourrir correctement. Pour les événements d'entreprise, le format dînatoire est le plus courant — il offre de la flexibilité sur l'heure et évite la contrainte du service à table.</p>

  <h2>Combien de pièces par personne pour un cocktail d'entreprise ?</h2>
  <p>Pour un <strong>cocktail apéritif</strong> : 6 à 8 pièces par personne. Pour un <strong>cocktail dînatoire</strong> : 12 à 15 pièces, dont un tiers de pièces chaudes. Équilibre recommandé : 60 % de pièces froides (verrines, tartines, bouchées), 40 % de pièces chaudes (mini-quiches, feuilletés, bouchées chaudes). Prévoyez toujours 10 à 15 % de plus que le nombre confirmé.</p>

  <h2>Organiser votre cocktail d'entreprise à Paris</h2>
  <p>Commandez au minimum <strong>48 à 72h à l'avance</strong> pour les cocktails et buffets. L'Écrin Traiteur livre dans vos locaux, chez un partenaire ou dans un espace événementiel, partout en Île-de-France. Créneaux idéaux : 18h–20h30 ou 19h–21h30. Devis personnalisé sous 24h — précisez le format, le nombre de convives et vos préférences.</p>
`

export default function CocktailsEtBuffets() {
  return (
    <ProductsPageTemplate
      heroImg="/creations-3.png"
      heroTitle={"Cocktails\n& Buffets"}
      heroSubtitle="Des buffets et cocktails pensés pour vos événements d'entreprise, de la pause au dîner debout."
      breadcrumb="Nos Créations — Cocktails & Buffets"
      categorieSlug="cocktails-buffets"
      fallbackProducts={fallback}
      seoArticle={SEO_ARTICLE}
    />
  )
}
