'use client'

import ProductsPageTemplate from '../../../components/ProductsPageTemplate'

const fallback = [
  { name: 'Jardin Méditerranéen', label: "L'Écrin Traiteur", img: '/creations-4.png', imgPosition: 'center 70%' },
  { name: 'Riviera',             label: "L'Écrin Traiteur", img: '/creations-4.png', imgPosition: 'center 70%' },
  { name: 'Signature',           label: "L'Écrin Traiteur", img: '/creations-4.png', imgPosition: 'center 70%' },
  { name: 'Toscane',             label: "L'Écrin Traiteur", img: '/creations-4.png', imgPosition: 'center 70%' },
]

const SEO_ARTICLE = `
  <h2>Plateaux repas d'entreprise à Paris — livrés pour votre déjeuner de travail</h2>
  <p>Le <strong>plateau repas d'entreprise</strong> est devenu le standard des réunions de travail parisiennes. Pratique, individuel, facile à gérer : c'est le format idéal pour les journées de formation, les déjeuners de travail et les séminaires. L'Écrin Traiteur livre vos plateaux à Paris et en Île-de-France, à l'heure que vous choisissez.</p>

  <h2>Composition d'un plateau repas d'entreprise équilibré</h2>
  <p>Un plateau complet comprend une entrée (salade ou verrines), un plat principal avec accompagnement, un dessert et une boisson. La qualité des ingrédients est ce qui distingue un plateau repas artisanal d'un repas de cantine industriel. Nos plateaux sont préparés avec des produits frais, en circuits courts quand c'est possible.</p>

  <h2>Régimes alimentaires et allergènes — tout est prévu</h2>
  <p>Végétarien, vegan, sans gluten, halal : précisez vos contraintes lors de la commande. Nous proposons des alternatives pour chaque régime. La liste des allergènes est disponible sur demande pour chaque produit. Idéalement, recensez les régimes de vos équipes avant la commande — pas le jour de la livraison.</p>

  <h2>Commander vos plateaux repas d'entreprise à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong>. Pour les réunions importantes ou les volumes de plus de 20 personnes, anticipez 48h à l'avance. Budget indicatif : <strong>12€ à 25€ par personne HT</strong> selon la composition. Facturation entreprise avec TVA disponible. Devis personnalisé sous 24h pour les groupes.</p>
`

export default function PlateauxRepas() {
  return (
    <ProductsPageTemplate
      heroImg="/creations-4.png"
      heroImgPosition="center 70%"
      heroTitle="Plateaux Repas"
      heroSubtitle="Des plateaux équilibrés et généreux pour vos déjeuners d'équipe et réunions."
      breadcrumb="Nos Créations — Plateaux Repas"
      categorieSlug="plateaux-repas"
      fallbackProducts={fallback}
      seoArticle={SEO_ARTICLE}
    />
  )
}
