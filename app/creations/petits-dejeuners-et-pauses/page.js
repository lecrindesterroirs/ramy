'use client'

import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { PRODUCTS } from '../../../lib/productsData'

const SEO_ARTICLE = `
  <h2>Traiteur petits-déjeuners d'entreprise à Paris, artisanal, livré dès 6h30</h2>
  <p>Le <strong>petit-déjeuner d'entreprise</strong> est le format le plus commandé en restauration B2B parisienne. CODIR, accueil client, onboarding, réunion de rentrée : c'est souvent la première impression que vous construisez. L'Écrin Traiteur livre vos sélections artisanales dès <strong>6h30</strong>, du lundi au vendredi, dans tout Paris et l'Île-de-France.</p>

  <h2>Viennoiseries, pâtisseries et jus : des artisans que vos équipes reconnaissent</h2>
  <p>Notre sélection est construite autour de maisons identifiées : viennoiseries pur beurre, madeleines artisanales <strong>Mado Paris</strong>, jus artisanaux <strong>Alain Milliat</strong>, yaourts <strong>La Ferme de Viltain</strong>. Des produits qui portent un nom et une histoire. La différence entre un plateau qui passe inaperçu et une sélection dont vos équipes parlent encore le lendemain.</p>

  <h2>Combien de pièces par personne ?</h2>
  <p>Règle de base : <strong>2 viennoiseries par personne</strong> pour un plateau classique. Avec pâtisseries et yaourts : 1,5 pièce. Pour un séminaire avec pause longue : 2,5 à 3 pièces. Pour un CODIR de 10 personnes : 20 viennoiseries + 10 madeleines + 2 bouteilles de jus. Prévoyez toujours 10 % de marge pour les imprévus.</p>

  <h2>Petit-déjeuner d'entreprise dans Paris et les principales villes d'Île-de-France</h2>
  <p>Nous livrons chaque matin dans tous les arrondissements de Paris, des quartiers d'affaires du <strong>8e</strong> et du <strong>9e</strong> aux sièges sociaux du <strong>13e</strong> et du <strong>15e</strong>, avec les mêmes délais et la même qualité qu'à La Défense. En dehors de la capitale, nous couvrons les principales villes d'entreprise d'Île-de-France : <a href="/petit-dejeuner-entreprise/boulogne-billancourt">Boulogne-Billancourt</a>, <a href="/traiteur/versailles">Versailles</a>, <a href="/traiteur/puteaux">Puteaux</a>, <a href="/petit-dejeuner-entreprise/gennevilliers">Gennevilliers</a>, <a href="/traiteur/issy-les-moulineaux">Issy-les-Moulineaux</a> ou encore <a href="/traiteur/neuilly-sur-seine">Neuilly-sur-Seine</a>. Chaque secteur a ses propres contraintes d'accès (badges, quais de livraison, horaires de réception) que nous anticipons dès la prise de commande.</p>

  <h2>Commander votre petit-déjeuner d'équipe à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong>. Précisez votre adresse exacte, votre heure de livraison souhaitée (disponible dès 6h30) et le nombre de personnes. Facturation entreprise avec TVA disponible. Devis personnalisé sous 24h pour les groupes de plus de 20 personnes ou les commandes récurrentes.</p>

  <p>En octobre, retrouvez notre sélection dédiée pour <a href="/journal/octobre-rose-entreprise-paris">Octobre Rose en entreprise</a> : macarons et madeleines parfum framboise pour marquer le mois de sensibilisation.</p>

  <p style="font-size: 13px; color: rgba(17,17,17,0.5); margin-top: 24px;">Petit-déjeuner de réunion, café croissant au bureau, brunch d'entreprise, plateau d'accueil client, petit-déjeuner de séminaire : quel que soit le nom que vous lui donnez, c'est le même savoir-faire artisanal livré à Paris dès 6h30.</p>
`

export default function PetitsDejeuners() {
  return (
    <>
      <ProductsPageTemplate
      heroImg="/hero-petitdej.webp"
      heroTitle={"Petits-Déjeuners & Pauses\nà Paris"}
      heroSubtitle="Des créations pensées pour les réunions, accueils et moments de partage."
      breadcrumb="Nos Créations, Petits-Déjeuners & Pauses"
      categorieSlug="petits-dejeuners"
      fallbackProducts={PRODUCTS}
      seoArticle={SEO_ARTICLE}
      sectionFilterLabel="Petit Déjeuner Salé"
      sectionFilterKey="petit-dejeuner-sale"
    />
    </>
  )
}
