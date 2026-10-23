import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { categoriePartage } from '../../../lib/categoriesVue'

/*
  Vue partagée par /creations/a-partager et /en/creations/a-partager, rendue côté serveur
  (refonte du 23/10/2026, audit design chantier 5). Avant, une page client
  lisait sa langue dans le chemin ; la langue passe maintenant en paramètre.
  Données et prix : lib/categoriesVue.js.
*/
const SEO_FR = `
  <h2>Menus à partager pour vos déjeuners d'équipe à Paris</h2>
  <p>Certains déjeuners d'entreprise n'ont pas besoin d'un format codifié, ils ont besoin d'un <strong>grand menu généreux à partager au centre de la table</strong>. Point d'équipe, accueil d'un partenaire, déjeuner de service : nos menus à partager mêlent salades, planches et pièces cocktail, dressés prêts à servir à Paris et en Île-de-France.</p>

  <h2>Le partage, un rituel d'équipe sous-estimé</h2>
  <p>Un menu posé au centre change la dynamique d'une salle : on se sert, on fait passer, on commente. Chaque menu équilibre pièces salées et douceurs, pour circuler de main en main, généreux, beau à regarder et pensé pour tous les goûts.</p>

  <h2>Choisir le bon menu</h2>
  <p>Comptez un menu pour 8 à 12 personnes en le complétant selon l'appétit et l'horaire. Méditerranéen, Parisien ou Jardin (100 % végétarien) : nos équipes vous aident à composer et à dimensionner selon le nombre de convives.</p>

  <h2>Commander vos menus à partager à Paris</h2>
  <p>Commande avant <strong>14h la veille</strong>, livraison à l'heure choisie partout à Paris et en Île-de-France. Les menus arrivent dressés, prêts à poser sur table. Facturation entreprise avec TVA, et pour les moments récurrents, un devis cadre simplifie tout.</p>
  <p>Pour un format plus large avec plusieurs stands, notre <a href="/journal/buffet-entreprise-guide-complet-paris">guide complet du buffet d'entreprise</a> détaille budget, dressage et choix du traiteur.</p>
`

const SEO_EN = `
  <h2>Sharing menus for your team lunches in Paris</h2>
  <p>Some company lunches do not need a set format, they need <strong>one generous menu to share in the middle of the table</strong>. A team catch-up, welcoming a partner, a department lunch: our sharing menus bring together salads, boards and canapés, delivered at the time you choose anywhere in Paris and the Paris region. The menus arrive plated, ready to set down on the table.</p>

  <h2>Sharing, an underrated team ritual</h2>
  <p>A menu set down in the middle changes the dynamic of a room: people help themselves, pass things along, comment. Each menu balances savoury pieces and sweet ones, made to travel from hand to hand, generous, and easy to eat standing or seated.</p>

  <h2>Choosing the right menu</h2>
  <p>Allow one menu for 8 to 12 people, topping it up according to appetite and the hour. Le Méditerranéen, Le Parisien or Le Jardin (100% vegetarian): our team helps you compose and size the order.</p>

  <h2>Ordering your sharing menus in Paris</h2>
  <p>Order before <strong>2 pm the day before</strong>, delivered at the time you choose anywhere in Paris and the Paris region. The menus arrive plated, ready to set down. Company invoice with VAT.</p>
  <p>For a larger format with several stations, our <a href="/journal/buffet-entreprise-guide-complet-paris">complete guide to the company buffet</a> covers budget, presentation and choosing a caterer.</p>
`

export default function VuePartage({ en = false }) {
  const c = categoriePartage(en)
  const FAQ = en ? [
      { q: 'How much does a sharing buffet cost?', a: c.essentiel },
      { q: 'How many people is a menu for?', a: 'Each menu is ordered per person, from the minimum order. Salads and boards arrive in large format to set in the middle of the table; give us the headcount and dietary needs in the quote.' },
    ] : [
      { q: 'Combien coûte un buffet à partager ?', a: c.essentiel },
      { q: 'Pour combien de personnes est prévu un menu ?', a: "Chaque menu se commande à la personne, à partir du minimum de commande. Les salades et planches arrivent en grand format, à poser au centre de la table ; précisez l'effectif et les régimes au devis." },
    ]
  return (
    <ProductsPageTemplate
      lang={en ? 'en' : 'fr'}
      heroImg="/hero-a-partager.webp"
      heroAlt={en ? "L'Écrin Traiteur sharing menu: pasta salad and bread" : "Menu à partager L'Écrin Traiteur : salade de pâtes et pain"}
      surtitre={en ? "Sharing lunch" : "Déjeuner à partager"}
      heroTitle={en ? "Sharing buffets for companies" : "Buffet à partager pour l'entreprise"}
      heroSubtitle={en ? "Three menus of plated salads, boards and sweet things, set in the middle of the table for team lunches across Paris and Île-de-France." : "Trois menus de salades dressées, planches et douceurs, posés au centre de la table pour vos déjeuners d'équipe à Paris et en Île-de-France."}
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={en ? SEO_EN : SEO_FR}
      faq={FAQ}
      basePath="/creations/a-partager"
      devisPrestation="Plateaux repas"
      devisTitre={{ fr: "Un déjeuner à partager ?", en: "A sharing lunch to organise?" }}
      nomJsonLd={en ? "Sharing buffet" : "Buffet à partager"}
    />
  )
}
