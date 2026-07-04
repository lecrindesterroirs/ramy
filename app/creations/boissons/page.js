'use client'

import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { BOISSONS } from '../../../lib/boissonsData'

const SEO_ARTICLE = `
  <h2>Boissons artisanales pour vos événements d'entreprise à Paris</h2>
  <p>La boisson est souvent le détail le plus remarqué — et le plus négligé. Un jus <strong>Alain Milliat</strong> sur la table dit quelque chose de votre exigence. Un thé <strong>Mariage Frères</strong> en réunion crée une atmosphère différente d'un sachet de supermarché. L'Écrin Traiteur sélectionne des boissons artisanales pour tous vos événements d'entreprise à Paris.</p>

  <h2>Notre sélection : Alain Milliat, Mariage Frères, Vergers de Plaisir</h2>
  <p>Nos jus artisanaux sont issus de fruits entiers, sans concentré, sans sucre ajouté. Les jus <strong>Alain Milliat</strong> (nectar de fraise, poire Williams, pur jus d'orange) sont reconnus des connaisseurs. Les jus du <strong>Verger de Plaisir</strong> (Yvelines) sont produits en circuit ultra-court. Les thés <strong>Mariage Frères</strong> et nos thermoses de café ou chocolat chaud complètent une offre pensée pour tous les moments de la journée.</p>

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
      heroSubtitle="Jus Alain Milliat, thés Mariage Frères, cafés et eaux. Des boissons choisies pour leur qualité."
      breadcrumb="Nos Créations — Boissons"
      categorieSlug="boissons"
      fallbackProducts={BOISSONS}
      basePath="/creations/boissons"
      seoArticle={SEO_ARTICLE}
      editorial={{
        eyebrow: 'Pensé pour accompagner chaque moment',
        title: 'Des boissons choisies.\nJamais par défaut.',
        body: "Jus de fruits entiers Alain Milliat, thés Mariage Frères, cafés servis en thermose : la boisson est le détail que vos invités remarquent. Nous la choisissons avec la même exigence que le reste de la table.",
      }}
    />
  )
}
