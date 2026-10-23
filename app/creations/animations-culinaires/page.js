import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { categorieAnimations } from '../../../lib/categoriesVue'

/*
  Animations culinaires. Les cartes sans photo sont les animations dont l'image générée portait « L'ÉCRIN TRAITEURS » (retirée le 23/10/2026).
  Page rendue côté serveur (refonte du 23/10/2026, audit design chantier 5) :
  formules et tableau calculés en tête, carte par sections avec filtres
  collants, texte replié dans « Bien choisir », une seule FAQ affichée et
  balisée. Données et prix : lib/categoriesVue.js.
*/
const SEO_ARTICLE = `
  <h2>Animations culinaires en entreprise à Paris : l'événement dont on parle</h2>
  <p>Une <strong>animation culinaire en entreprise</strong> transforme une prestation traiteur en moment mémorable : un stand qui s'installe, un artisan qui prépare devant vos équipes, une file d'attente qui devient un lieu de conversation. L'Écrin Traiteur organise vos animations à Paris et en Île-de-France, de la mise en place au dernier service.</p>

  <h2>Crêpes, bars à jus, stands gourmands : du spectacle et du goût</h2>
  <p>Nos animations mettent le geste au centre : crêpes préparées à la minute, bars à boissons fraîches, stands de douceurs dressés sous les yeux de vos invités. La différence avec un buffet classique est immédiate, on ne se sert pas, on assiste, on choisit, on échange avec la personne qui prépare. C'est ce supplément d'humain qui reste en mémoire.</p>

  <h2>Pour quels événements d'entreprise ?</h2>
  <p>Les animations culinaires trouvent leur place partout où l'on veut marquer le coup : <strong>fête de fin d'année</strong>, <strong>inauguration de locaux</strong>, <strong>journée collaborateurs</strong>, salon interne, semaine QVT. Elles s'adaptent au lieu et au flux : un stand pour 40 personnes en continu, plusieurs points d'animation pour un événement de plusieurs centaines d'invités.</p>

  <h2>Organiser votre animation culinaire à Paris</h2>
  <p>Chaque animation se construit sur devis : date, lieu, nombre d'invités, durée et contraintes techniques (accès, électricité, espace). Notre équipe vous répond sous <strong>24h</strong> avec une proposition détaillée, installation et démontage inclus. Facturation entreprise avec TVA. Pour vous inspirer, notre article <a href="/journal/animation-culinaire-entreprise-paris">idées d'animations culinaires pour vos événements</a> détaille les formats les plus demandés.</p>
`

export default function AnimationsCulinaires() {
  const c = categorieAnimations(false)
  const FAQ = [
    { q: 'Combien coûte une animation culinaire ?', a: c.essentiel },
    { q: "Combien de temps à l'avance réserver ?", a: "Au moins une semaine avant : nous vérifions l'accès, le point d'eau et l'électricité, et nous réservons le chef ou le barista. Le devis arrive sous 24h." },
    { q: "Peut-on combiner une animation et un cocktail ?", a: "Oui. Une animation s'ajoute à une formule cocktail ou à un buffet dans le même devis ; voir la page Événement sur mesure." },
  ]
  return (
    <ProductsPageTemplate
      heroImg="/prod-atelier-crepes.webp"
      heroAlt="Atelier crêpes animé en direct pour un événement d'entreprise"
      surtitre="Animations culinaires"
      heroTitle="Animations culinaires en entreprise"
      heroSubtitle="Barista, crêpes, pasta, bars à jus : un chef ou un barista prépare devant vos invités, à Paris et en Île-de-France."
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={SEO_ARTICLE}
      faq={FAQ}
      basePath="/creations/animations-culinaires"
      devisPrestation="Événement sur mesure"
      devisTitre={{ fr: 'Une animation à organiser ?', en: 'A live station to organise?' }}
      nomJsonLd="Animations culinaires"
    />
  )
}

