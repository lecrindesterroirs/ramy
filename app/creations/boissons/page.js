import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { categorieBoissons } from '../../../lib/categoriesVue'

/*
  Boissons.
  Page rendue côté serveur (refonte du 23/10/2026, audit design chantier 5) :
  formules et tableau calculés en tête, carte par sections avec filtres
  collants, texte replié dans « Bien choisir », une seule FAQ affichée et
  balisée. Données et prix : lib/categoriesVue.js.
*/
const SEO_ARTICLE = `
  <h2>Boissons artisanales pour vos événements d'entreprise à Paris</h2>
  <p>Jus Alain Milliat, thés Mariage Frères, café en thermos : les boissons arrivent avec la commande, avec les gobelets. L'Écrin Traiteur les livre pour vos réunions et événements d'entreprise à Paris et en Île-de-France.</p>

  <h2>Notre sélection : Alain Milliat, Mariage Frères</h2>
  <p>Nos jus et nectars viennent d'<strong>Alain Milliat</strong> : orange, pomme, abricot, pêche, fraise, mangue, passion. Les thés <strong>Mariage Frères</strong>, le café en thermos et les infusions complètent la carte, du matin à l'après-midi. Pour trinquer sans alcool, un Chardonnay Blanc de Blancs 0 %.</p>

  <h2>Boissons froides et chaudes, du matin à l'après-midi</h2>
  <p>Pour un <strong>petit-déjeuner</strong> : jus froids + thermos de café ou thé. Pour une <strong>pause après-midi</strong> : boissons froides sans alcool, infusions bio, jus de saison. Pour un <strong>cocktail</strong> : nectars Alain Milliat + eaux pétillantes. Nos thermos maintiennent vos boissons chaudes plusieurs heures après la livraison, pratique pour les séminaires de journée entière.</p>

  <h2>Commander vos boissons artisanales à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong>. Livraison dès <strong>6h30</strong>, du lundi au vendredi. Jus et boissons froides sont livrés <strong>avec gobelets</strong>, vous n'avez rien à prévoir. Les boissons s'ajoutent facilement à une commande existante de viennoiseries ou de pâtisseries, une seule livraison, tout ensemble. Facturation entreprise avec TVA disponible.</p>
`

export default function Boissons() {
  const c = categorieBoissons(false)
  const FAQ = [
    { q: 'Combien de boissons prévoir ?', a: c.essentiel },
    { q: 'Les boissons sont-elles livrées avec des gobelets ?', a: "Oui, jus et boissons froides arrivent avec les gobelets ; les thermos gardent le café et le thé chauds plusieurs heures." },
    { q: 'Proposez-vous des boissons alcoolisées ?', a: "Non, toute la carte est sans alcool. Pour trinquer, nous livrons un Chardonnay Blanc de Blancs 0 %." },
  ]
  return (
    <ProductsPageTemplate
      heroImg="/creations-boissons.webp"
      heroAlt="Jus Alain Milliat et thermos de café L'Écrin Traiteur"
      surtitre="Boissons"
      heroTitle="Boissons pour l'entreprise"
      heroSubtitle="Jus Alain Milliat, thés Mariage Frères, café en thermos et eaux, livrés avec votre commande à Paris et en Île-de-France."
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={SEO_ARTICLE}
      faq={FAQ}
      basePath="/creations/boissons"
      devisPrestation="Petit-déjeuner"
      devisTitre={{ fr: 'Des boissons à commander ?', en: 'Drinks to order?' }}
      nomJsonLd="Boissons"
    />
  )
}

