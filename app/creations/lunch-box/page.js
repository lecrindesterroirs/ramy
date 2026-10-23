import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { categorieLunchBox } from '../../../lib/categoriesVue'

/*
  Lunch box.
  Page rendue côté serveur (refonte du 23/10/2026, audit design chantier 5) :
  formules et tableau calculés en tête, carte par sections avec filtres
  collants, texte replié dans « Bien choisir », une seule FAQ affichée et
  balisée. Données et prix : lib/categoriesVue.js.
*/
const SEO_ARTICLE = `
  <h2>Lunch box entreprise à Paris : le déjeuner individuel, pratique et gourmand</h2>
  <p>La <strong>lunch box d'entreprise</strong> répond à un besoin simple : nourrir bien, individuellement et sans installation. Formations, journées d'étude, équipes en déplacement, tournages, chaque convive reçoit sa boîte complète, prête à emporter ou à ouvrir sur place. L'Écrin Traiteur livre vos lunch box à Paris et en Île-de-France, préparées le matin même.</p>

  <h2>Une boîte complète, composée comme un vrai repas</h2>
  <p>Chaque lunch box associe un plat travaillé, un accompagnement et une touche sucrée, dans un contenant soigné et facile à transporter. Ce n'est pas un sandwich de dépannage : c'est un déjeuner pensé, préparé le matin même, avec des recettes qui changent, de quoi faire d'une journée de formation un souvenir un peu meilleur.</p>

  <h2>Le bon format pour les journées contraintes</h2>
  <p>La lunch box brille là où le plateau repas est trop formel et le buffet impossible : horaires serrés, salles sans office, groupes qui se déplacent entre deux sites. Distribution en quelques minutes, zéro vaisselle, tri des emballages simplifié. Indiquez les régimes spécifiques (végétarien, sans gluten) à la commande : chacun reçoit une boîte équivalente.</p>

  <h2>Commander vos lunch box pour votre événement à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong> en précisant le nombre de convives et la répartition des menus. Livraison à l'heure souhaitée, dès 6h30 si votre journée démarre tôt. Facturation entreprise avec TVA, devis sous 24h pour les gros volumes.</p>
`

export default function LunchBox() {
  const c = categorieLunchBox(false)
  const FAQ = [
    { q: "Combien coûte une lunch box d'entreprise ?", a: c.essentiel },
    { q: "Quelle différence avec un plateau repas ?", a: "La lunch box se mange sans table, à son poste ou en déplacement : un sandwich, une entrée et un dessert. Le plateau repas est un repas assis complet, entrée, plat, dessert et pain." },
    { q: 'Peut-on choisir le pain ?', a: 'Oui : chaque sandwich se prépare en baguette ou en pain viennois, au choix, à préciser à la commande.' },
  ]
  return (
    <ProductsPageTemplate
      heroImg="/hero-lunch-box.webp"
      heroAlt="Lunch box L'Écrin Traiteur : sandwich en baguette et sac kraft"
      surtitre="Lunch box"
      heroTitle="Lunch box d'entreprise à Paris"
      heroSubtitle="Un sandwich en baguette ou pain viennois, une entrée et un dessert, serviette et couverts compris, livrés à Paris et en Île-de-France."
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={SEO_ARTICLE}
      faq={FAQ}
      basePath="/creations/lunch-box"
      devisPrestation="Plateaux repas"
      devisTitre={{ fr: 'Des lunch box à commander ?', en: 'Lunch boxes to order?' }}
      nomJsonLd="Lunch box"
    />
  )
}

