import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { categoriePartage } from '../../../lib/categoriesVue'
import { MENUS } from './data'
import { FORMULES, LIV } from '../../../lib/calculsPrix'
import { AFTERWORK_PARTAGE, PLATEAU_DES, euroFr, euroEn } from '../../../lib/prixEntree'

/*
  Blocs « Quel buffet choisir » et « Combien coûte un buffet d'entreprise » (26/10/2026) :
  la requête « buffet entreprise paris » est tenue par des pages qui comparent les formats
  de buffet ; la page n'avait que les trois menus. Tous les montants sont calculés :
  prix des menus (../data), formules cocktail (lib/calculsPrix), afterwork (lib/prixEntree),
  livraison de 29 € HT.
*/
const prixMenus = MENUS.map(m => Number(String(m.prix).replace(',', '.').match(/\d+(?:\.\d+)?/)[0]))
const MENU_MIN = Math.min(...prixMenus)
const MENU_MAX = Math.max(...prixMenus)
const tot = (n, p) => n * p + LIV
const fr = (x) => euroFr(x) + ' HT'
const en$ = (x) => euroEn(x) + ' excl. VAT'
const fourch = (n, f) => `${f(tot(n, MENU_MIN))} à ${f(tot(n, MENU_MAX))}`
const fourchEn = (n, f) => `${f(tot(n, MENU_MIN))} to ${f(tot(n, MENU_MAX))}`

const BUFFET_FR = `
  <h2>Quel buffet d'entreprise choisir à Paris ?</h2>
  <p>« Buffet » recouvre plusieurs formats. L'Écrin Traiteur les livre tous dressés et prêts à servir, dès 6h30, par son équipe :</p>
  <ul>
    <li><strong>Buffet à partager</strong> (cette page) : salades, planches et douceurs au centre de la table pour un déjeuner d'équipe, dès ${fr(MENU_MIN)} par personne.</li>
    <li><strong><a href="/creations/cocktails">Cocktail déjeunatoire ou dînatoire</a></strong> : 8, 12 ou 16 pièces par personne, de ${fr(FORMULES.invitation.prix)} à ${fr(FORMULES.celebration.prix)}, pour un buffet debout.</li>
    <li><strong><a href="/creations/cocktails/afterwork-partage">Afterwork à partager</a></strong> : deux planches (charcuteries halal, fromages) et 6 mini-sandwichs par personne, ${fr(AFTERWORK_PARTAGE)} par personne dès 10 personnes.</li>
    <li><strong><a href="/creations/plateaux-aperitifs">Plateaux apéritifs</a></strong> : mini burgers, clubs, mini wraps, fromages, à composer, dès 64,90 € HT le plateau de 24 pièces.</li>
    <li><strong><a href="/creations/plateaux-repas">Plateaux repas individuels</a></strong> : si chacun mange à son poste, dès ${fr(PLATEAU_DES)} par personne.</li>
  </ul>

  <h2>Combien coûte un buffet d'entreprise à Paris ?</h2>
  <p>Budget HT, livraison de ${fr(LIV)} comprise, sans les boissons :</p>
  <table>
    <thead><tr><th>Formule</th><th>20 personnes</th><th>50 personnes</th><th>100 personnes</th></tr></thead>
    <tbody>
      <tr><td><strong>Buffet à partager</strong></td><td>${fourch(20, fr)}</td><td>${fourch(50, fr)}</td><td>${fourch(100, fr)}</td></tr>
      <tr><td><strong>Afterwork à partager</strong></td><td>${fr(tot(20, AFTERWORK_PARTAGE))}</td><td>${fr(tot(50, AFTERWORK_PARTAGE))}</td><td>${fr(tot(100, AFTERWORK_PARTAGE))}</td></tr>
      <tr><td><strong>Cocktail ${FORMULES.invitation.nom} (8 pièces)</strong></td><td>${fr(tot(20, FORMULES.invitation.prix))}</td><td>${fr(tot(50, FORMULES.invitation.prix))}</td><td>${fr(tot(100, FORMULES.invitation.prix))}</td></tr>
      <tr><td><strong>Cocktail ${FORMULES.reception.nom} (12 pièces)</strong></td><td>${fr(tot(20, FORMULES.reception.prix))}</td><td>${fr(tot(50, FORMULES.reception.prix))}</td><td>${fr(tot(100, FORMULES.reception.prix))}</td></tr>
    </tbody>
  </table>
  <p>Pour un déjeuner assis, comptez un menu à partager par personne ; pour un buffet debout, 8 pièces par personne tiennent une heure et demie à deux heures, 12 pièces remplacent un déjeuner. Les quantités détaillées sont dans notre <a href="/journal/buffet-entreprise-guide-complet-paris">guide complet du buffet d'entreprise</a> et le <a href="/calculateur-quantites">calculateur de quantités</a>.</p>
`
const BUFFET_EN = `
  <h2>Which corporate buffet should you choose in Paris?</h2>
  <p>“Buffet” covers several formats. L'Écrin Traiteur delivers them all plated and ready to serve, from 6:30 am, by its own team:</p>
  <ul>
    <li><strong>Sharing buffet</strong> (this page): salads, boards and sweet pieces in the middle of the table for a team lunch, from ${en$(MENU_MIN)} per person.</li>
    <li><strong><a href="/en/creations/cocktails">Lunchtime or evening cocktail</a></strong>: 8, 12 or 16 pieces per person, from ${en$(FORMULES.invitation.prix)} to ${en$(FORMULES.celebration.prix)}, for a standing buffet.</li>
    <li><strong><a href="/en/creations/cocktails/afterwork-partage">Sharing afterwork</a></strong>: two boards (halal charcuterie, cheese) and 6 mini sandwiches per person, ${en$(AFTERWORK_PARTAGE)} per person from 10 people.</li>
    <li><strong><a href="/en/creations/plateaux-aperitifs">Aperitif platters</a></strong>: mini burgers, clubs, mini wraps, cheese, to mix and match, from €64.90 excl. VAT for a platter of 24 pieces.</li>
    <li><strong><a href="/en/creations/plateaux-repas">Individual lunch trays</a></strong>: when everyone eats at their desk, from ${en$(PLATEAU_DES)} per person.</li>
  </ul>

  <h2>How much does a corporate buffet cost in Paris?</h2>
  <p>Budget excluding VAT, with the ${en$(LIV)} delivery included, drinks not included:</p>
  <table>
    <thead><tr><th>Format</th><th>20 people</th><th>50 people</th><th>100 people</th></tr></thead>
    <tbody>
      <tr><td><strong>Sharing buffet</strong></td><td>${fourchEn(20, en$)}</td><td>${fourchEn(50, en$)}</td><td>${fourchEn(100, en$)}</td></tr>
      <tr><td><strong>Sharing afterwork</strong></td><td>${en$(tot(20, AFTERWORK_PARTAGE))}</td><td>${en$(tot(50, AFTERWORK_PARTAGE))}</td><td>${en$(tot(100, AFTERWORK_PARTAGE))}</td></tr>
      <tr><td><strong>${FORMULES.invitation.nom} cocktail (8 pieces)</strong></td><td>${en$(tot(20, FORMULES.invitation.prix))}</td><td>${en$(tot(50, FORMULES.invitation.prix))}</td><td>${en$(tot(100, FORMULES.invitation.prix))}</td></tr>
      <tr><td><strong>${FORMULES.reception.nom} cocktail (12 pieces)</strong></td><td>${en$(tot(20, FORMULES.reception.prix))}</td><td>${en$(tot(50, FORMULES.reception.prix))}</td><td>${en$(tot(100, FORMULES.reception.prix))}</td></tr>
    </tbody>
  </table>
  <p>For a seated lunch, allow one sharing menu per person; for a standing buffet, 8 pieces per person last an hour and a half to two hours, 12 pieces replace a lunch. Detailed quantities are in our <a href="/journal/buffet-entreprise-guide-complet-paris">complete guide to the company buffet</a> and the <a href="/en/calculateur-quantites">quantity calculator</a>.</p>
`


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
      heroTitle={en ? "Corporate buffet catering in Paris: sharing menus" : "Buffet d'entreprise à Paris : menus à partager"}
      heroSubtitle={en ? "Three menus of plated salads, boards and sweet things, set in the middle of the table for team lunches across Paris and Île-de-France." : "Trois menus de salades dressées, planches et douceurs, posés au centre de la table pour vos déjeuners d'équipe à Paris et en Île-de-France."}
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={en ? BUFFET_EN + SEO_EN : BUFFET_FR + SEO_FR}
      faq={FAQ}
      basePath="/creations/a-partager"
      devisPrestation="Plateaux repas"
      devisTitre={{ fr: "Un déjeuner à partager ?", en: "A sharing lunch to organise?" }}
      nomJsonLd={en ? "Sharing buffet" : "Buffet à partager"}
    />
  )
}
