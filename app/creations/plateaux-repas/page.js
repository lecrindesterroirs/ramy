import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { categoriePlateaux } from '../../../lib/categoriesVue'

/*
  Plateaux repas.
  Page rendue côté serveur (refonte du 23/10/2026, audit design chantier 5) :
  formules et tableau calculés en tête, carte par sections avec filtres
  collants, texte replié dans « Bien choisir », une seule FAQ affichée et
  balisée. Données et prix : lib/categoriesVue.js.
*/
const SEO_ARTICLE = `
  <h2>Plateaux repas d'entreprise livrés à Paris : frais, individuels, équilibrés</h2>
  <p>Le <strong>plateau repas d'entreprise</strong> résout l'équation des déjeuners de réunion : un repas complet, individuel et soigné, servi directement en salle sans interrompre les échanges. Conseils d'administration, formations, réunions qui débordent sur la pause déjeuner, L'Écrin Traiteur livre vos plateaux à Paris et en Île-de-France, préparés le matin même.</p>

  <h2>Des recettes de saison, pensées comme au restaurant</h2>
  <p>Chaque plateau se compose d'une entrée, d'un plat, d'un dessert et de pain, construits autour de recettes de saison : filet de poulet et pommes de terre rôties, dés de saumon poêlés, quinoa et falafels, pâtes au pesto et mozzarella. Les recettes suivent la saison et sont dressées avec le soin d'une assiette de restaurant, dans un coffret élégant qui tient la comparaison face aux clients les plus exigeants.</p>

  <h2>Régimes et contraintes alimentaires : tout le monde à la même table</h2>
  <p>Végétarien, vegan, sans gluten, allergies spécifiques : indiquez les contraintes de vos convives à la commande et nous composons des plateaux équivalents en qualité et en générosité. Notre carte est par ailleurs pensée sans porc et halal, pour être partagée par toutes vos équipes. Personne ne doit se contenter d'une salade par défaut pendant que les autres déjeunent bien, c'est un principe non négociable de notre carte. Le détail de notre approche est dans notre guide <a href="/journal/traiteur-vegan-vegetarien-entreprise-paris">traiteur végan et végétarien en entreprise</a>.</p>

  <h2>Commander vos plateaux repas pour une réunion à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong> en précisant l'adresse, l'heure de livraison et la répartition des menus. Les plateaux arrivent prêts à poser sur table, avec couverts et serviettes. Facturation entreprise avec TVA, devis personnalisé sous 24h pour les volumes importants ou les commandes récurrentes.</p>
`

export default function PlateauxRepas() {
  const c = categoriePlateaux(false)
  const FAQ = [
    { q: "Combien coûte un plateau repas d'entreprise ?", a: c.essentiel },
    { q: 'Combien de plateaux végétariens prévoir ?', a: "Comptez environ un tiers de plateaux végétariens sur une équipe dont vous ne connaissez pas les préférences, puis indiquez à la commande l'effectif de chaque menu. Les plateaux sont filmés et étiquetés." },
    { q: 'Peut-on mélanger plusieurs plateaux dans une commande ?', a: 'Oui : végétarien, poulet et poisson se mélangent librement ; précisez la répartition à la commande.' },
    { q: "Livrez-vous à une heure précise pour le déjeuner ?", a: "Oui, à l'heure convenue, directement en salle de réunion ou en espace de restauration, plateaux prêts à poser devant chaque participant." },
  ]
  return (
    <ProductsPageTemplate
      heroImg="/hero-plateau-signature.webp"
      heroAlt="Plateau repas L'Écrin Traiteur : saumon, pommes de terre et dessert"
      surtitre="Déjeuner d'entreprise"
      heroTitle="Plateaux repas d'entreprise à Paris"
      heroSubtitle="Entrée, plat, dessert et pain dans un plateau individuel, livré à l'heure du déjeuner à Paris et en Île-de-France."
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={SEO_ARTICLE}
      faq={FAQ}
      basePath="/creations/plateaux-repas"
      devisPrestation="Plateaux repas"
      devisTitre={{ fr: 'Un déjeuner à organiser ?', en: 'A lunch to organise?' }}
      nomJsonLd="Plateaux repas"
    />
  )
}

