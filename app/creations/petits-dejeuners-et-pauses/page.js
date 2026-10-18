'use client'

import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { PRODUCTS } from '../../../lib/productsData'
import BlocReponse from '../../../components/BlocReponse'

const SEO_ARTICLE = `
  <h2>Livraison de petit-déjeuner d'entreprise à Paris, artisanal, dès 6h30</h2>
  <p>Le <strong>petit-déjeuner d'entreprise</strong> est le format le plus commandé en restauration B2B parisienne. CODIR, accueil client, onboarding, réunion de rentrée : c'est souvent la première impression que vous construisez. L'Écrin Traiteur livre vos sélections artisanales dès <strong>6h30</strong>, du lundi au vendredi, dans tout Paris et l'Île-de-France.</p>

  <h2>Meilleur traiteur de petit-déjeuner à Paris : sur quels critères choisir ?</h2>
  <p>Il n'existe pas de classement officiel : le <strong>meilleur traiteur de petit-déjeuner à Paris</strong> est celui qui tient sept engagements vérifiables. Chez L'Écrin Traiteur : livraison <strong>dès 6h30</strong> à l'heure choisie, prix publiés (<strong>dès 8 € HT par personne</strong>, 12 à 16 € HT en complet, livraison 29 € HT), produits d'artisans nommés, commande jusqu'à la veille <strong>14h</strong>, régimes sur demande, minimum de 50 € HT et une note Google de <strong>5,0/5</strong>. Le détail des sept critères est dans <a href="/journal/meilleur-traiteur-petit-dejeuner-paris-comment-choisir">meilleur traiteur petit-déjeuner à Paris : 7 critères pour choisir</a>, et les grandes familles de prestataires sont comparées dans le <a href="/journal/comparatif-traiteur-entreprise-paris">comparatif des traiteurs d'entreprise à Paris</a>.</p>

  <h2>Viennoiseries, pâtisseries et jus : des artisans que vos équipes reconnaissent</h2>
  <p>Notre sélection est construite autour de maisons identifiées : viennoiseries pur beurre, madeleines artisanales <strong>Mado Paris</strong>, jus artisanaux <strong>Alain Milliat</strong>, yaourts <strong>La Ferme de Viltain</strong>. Des produits qui portent un nom et une histoire. La différence entre un plateau qui passe inaperçu et une sélection dont vos équipes parlent encore le lendemain.</p>

  <h2>Combien de pièces par personne ?</h2>
  <p>Règle de base : <strong>2 viennoiseries par personne</strong> pour un plateau classique. Avec pâtisseries et yaourts : 1,5 pièce. Pour un séminaire avec pause longue : 2,5 à 3 pièces. Pour un CODIR de 10 personnes : 20 viennoiseries + 10 madeleines + 2 bouteilles de jus. Prévoyez toujours 10 % de marge pour les imprévus.</p>

  <h2>Petit-déjeuner buffet ou plateaux individuels : quel format choisir ?</h2>
  <p>Le <strong>buffet petit-déjeuner</strong> convient aux grands effectifs et aux espaces de convivialité : viennoiseries, pâtisseries et fruits dressés sur table, chacun se sert à son rythme. Les <strong>plateaux individuels</strong> sont préférés pour les réunions restreintes ou les accueils clients, où chaque participant a sa propre sélection sans se lever. Les deux formats se commandent avec la même sélection de produits ; précisez votre préférence au moment du devis, nous adaptons le conditionnement.</p>

  <h2>Combien coûte un petit-déjeuner d'entreprise ?</h2>
  <p>Nos viennoiseries et notre café démarrent à <strong>6,50 € HT par personne</strong> pour 30 personnes, hors livraison. Notre formule Classique est à <strong>8 € HT par personne</strong> (viennoiseries, jus, café, fruits). Le budget varie ensuite selon le nombre de pièces, la part de pâtisseries artisanales et les boissons choisies. Pas de prix affiché produit par produit sur commande complexe : nous établissons un devis clair sous 24h, sans ligne cachée sur la livraison.</p>

  <h2>Petit-déjeuner d'entreprise dans Paris et les principales villes d'Île-de-France</h2>
  <p>Nous livrons chaque matin dans tous les arrondissements de Paris, des quartiers d'affaires du <strong>8e</strong> et du <strong>9e</strong> aux sièges sociaux du <strong>13e</strong> et du <strong>15e</strong>, avec les mêmes délais et la même qualité qu'à La Défense. En dehors de la capitale, nous couvrons les principales villes d'entreprise d'Île-de-France : <a href="/petit-dejeuner-entreprise/boulogne-billancourt">Boulogne-Billancourt</a>, <a href="/traiteur/versailles">Versailles</a>, <a href="/traiteur/puteaux">Puteaux</a>, <a href="/petit-dejeuner-entreprise/gennevilliers">Gennevilliers</a>, <a href="/traiteur/issy-les-moulineaux">Issy-les-Moulineaux</a> ou encore <a href="/traiteur/neuilly-sur-seine">Neuilly-sur-Seine</a>. Chaque secteur a ses propres contraintes d'accès (badges, quais de livraison, horaires de réception) que nous anticipons dès la prise de commande.</p>

  <h2>Commander votre petit-déjeuner d'équipe à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong>. Précisez votre adresse exacte, votre heure de livraison souhaitée (disponible dès 6h30) et le nombre de personnes. Facturation entreprise avec TVA disponible. Devis personnalisé sous 24h pour les groupes de plus de 20 personnes ou les commandes récurrentes.</p>

  <h2>Questions fréquentes sur la livraison de petit-déjeuner en entreprise</h2>
  <div class="faq-block">
    <details>
      <summary><strong>Combien coûte un petit-déjeuner d'entreprise livré à Paris ?</strong></summary>
      <p>Viennoiseries et café reviennent dès 6,50 € HT par personne pour 30 personnes, hors livraison. La formule Classique est à 8 € HT par personne (viennoiseries, jus, café, fruits) et le petit-déjeuner complet coûte 12 à 16 € HT par personne, plus 29 € HT de livraison. Le minimum de commande est de 50 € HT. Pour 20 personnes, le petit-déjeuner complet revient à 340,80 € HT livraison comprise.</p>
    </details>
    <details>
      <summary><strong>À quelle heure livrez-vous et jusqu'à quand commander ?</strong></summary>
      <p>La livraison commence à 6h30, à l'heure choisie, du lundi au vendredi. La commande se passe jusqu'à la veille à 14h, et 48 h à l'avance à partir de 50 personnes.</p>
    </details>
    <details>
      <summary><strong>Combien de viennoiseries par personne ?</strong></summary>
      <p>Comptez 2 mini-viennoiseries par personne (3 jusqu'à 10 personnes), 1 mignardise, 1 verre de jus et 1 boisson chaude, avec 1 thermos d'1 litre pour 6 personnes. Un plateau de 30 mini-viennoiseries coûte 48,90 € HT.</p>
    </details>
    <details>
      <summary><strong>Quel est le meilleur traiteur pour un petit-déjeuner d'entreprise à Paris ?</strong></summary>
      <p>Il n'existe pas de classement officiel : le meilleur traiteur est celui qui tient sept engagements vérifiables (heure de livraison, prix publiés, produits nommés, délai de commande, régimes, minimum, avis). L'Écrin Traiteur livre dès 6h30, publie ses prix dès 8 € HT par personne, nomme ses artisans et affiche 5,0/5 sur Google.</p>
    </details>
    <details>
      <summary><strong>Proposez-vous des options végétariennes, vegan ou sans gluten ?</strong></summary>
      <p>Oui, sur demande : les brochettes de fruits frais sont vegan et sans gluten, et le banana bread est sans gluten (26,90 € HT pour 6 à 8 personnes). Précisez les régimes à la demande de devis.</p>
    </details>
    <details>
      <summary><strong>Livrez-vous dans toute l'Île-de-France ?</strong></summary>
      <p>Oui, nous livrons à Paris et en Île-de-France. La livraison est à 29 € HT à Paris et dans les communes proches, avec un créneau choisi par le client dès 6h30.</p>
    </details>
  </div>

  <p>En octobre, retrouvez notre sélection dédiée pour <a href="/journal/octobre-rose-entreprise-paris">Octobre Rose en entreprise</a> : macarons et madeleines parfum framboise pour marquer le mois de sensibilisation.</p>

  <p style="font-size: 13px; color: rgba(17,17,17,0.5); margin-top: 24px;">Petit-déjeuner de réunion, café croissant au bureau, brunch d'entreprise, plateau d'accueil client, petit-déjeuner de séminaire : quel que soit le nom que vous lui donnez, c'est le même savoir-faire artisanal livré à Paris dès 6h30.</p>
`

const ANSWER_BLOCK = (
  <BlocReponse
    titre="Livraison de petit-déjeuner à Paris : prix, délai, commande"
    plusTitre="Tarifs de livraison, minimum de commande et quantités"
    plus={<>Livraison 29 € HT à Paris et dans les communes proches, minimum de commande 50 € HT. Pour calibrer les quantités selon votre effectif, voir notre <a href="/journal/budget-petit-dejeuner-equipe-personnes">guide budget par nombre de personnes</a>, ou <a href="/devis">demandez un devis sous 24h</a>.</>}
  >
    Un petit-déjeuner d'entreprise commence à <strong>6,50 € HT par personne</strong> (viennoiseries et café, pour 30 personnes), <strong>8 € HT</strong> en formule Classique (viennoiseries, jus, café, fruits), et de <strong>12 à 16 € HT</strong> pour un petit-déjeuner complet. Livraison dès <strong>6h30</strong>, du lundi au vendredi, à Paris et en Île-de-France, sur commande avant <strong>14h la veille</strong>.
  </BlocReponse>
)

export default function PetitsDejeuners() {
  return (
    <>
      <ProductsPageTemplate
      heroImg="/hero-petitdej.webp"
      heroTitle={"Petit-déjeuner d'entreprise\nà Paris"}
      heroSubtitle="Viennoiseries d'artisans, jus Alain Milliat et café, livrés dès 6h30 à Paris et en Île-de-France. Viennoiseries et café dès 6,50 € HT par personne, commande jusqu'à la veille 14h."
      breadcrumb="Nos Créations, Petits-Déjeuners & Pauses"
      categorieSlug="petits-dejeuners"
      fallbackProducts={PRODUCTS}
      seoArticle={SEO_ARTICLE}
      answerBlock={ANSWER_BLOCK}
      sectionFilterLabel="Petit Déjeuner Salé"
      sectionFilterKey="petit-dejeuner-sale"
      crossSell={{
        title: 'Complétez vos petits-déjeuners avec nos boissons',
        body: "Jus artisanaux Alain Milliat, thés Mariage Frères, thermos de café et de chocolat chaud : de quoi accompagner chaque plateau.",
        buttonLabel: 'Découvrir nos boissons',
        href: '/creations/boissons',
        products: [
          { id: 'thermos-cafe', name: 'Thermos de Café Bio', img: '/bois-thermos-cafe.webp', price: '19,50€' },
          { id: 'jus-orange', name: "Jus d'Orange Alain Milliat", img: '/bois-jus-orange.webp', price: '9,50€' },
          { id: 'jus-pomme', name: 'Jus de Pomme Alain Milliat', img: '/bois-jus-pomme.webp', price: '9,50€' },
        ],
      }}
    />
    </>
  )
}
