import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { categoriePause, ht, livre } from '../../../lib/categoriesVue'
import { PAUSE_DES, MINIMUM } from '../../../lib/prixEntree'
import { LIV } from '../../../lib/calculsPrix'
import { PAUSES } from './data'

/*
  Page Pause goûter, rendue côté serveur (refonte du 23/10/2026, audit design
  chantier 5). Formules et tableau calculés en tête, carte par sections,
  texte replié dans « Bien choisir », une seule FAQ. Données : lib/categoriesVue.js.
*/
const prixGateaux = PAUSES.filter(p => p.section === 'gateaux-a-partager').map(p => Number(String(p.prix).match(/(\d+,\d{2})/)[1].replace(',', '.')))
const GATEAU_MIN = Math.min(...prixGateaux)
const GATEAU_MAX = Math.max(...prixGateaux)

const SEO_ARTICLE = `
  <h2>Livraison de goûter d'entreprise à Paris : comment ça marche</h2>
  <p>Vous choisissez les douceurs, le nombre de personnes et l'heure de votre pause : nous livrons du lundi au vendredi, à Paris et en Île-de-France, à 15h30, 16h ou plus tard dans l'après-midi. Commande jusqu'à <strong>14h la veille</strong>, minimum de commande ${ht(MINIMUM)}, livraison ${ht(LIV)} à Paris et dans les communes proches, facturation entreprise avec TVA, devis sous 24h. Pour les séminaires et les commandes régulières, un devis personnalisé est possible. Notre page <a href="/occasions/gouter-entreprise">goûter d'entreprise</a> détaille les formats et les produits les plus choisis, et la page <a href="/traiteur">traiteur entreprise Paris et Île-de-France</a> liste les villes desservies.</p>

  <h2>Traiteur pause gourmande et goûter d'entreprise à Paris</h2>
  <p>La <strong>pause gourmande d'entreprise</strong> est le moment le plus attendu de l'après-midi : entre deux sessions de séminaire, à la fin d'une formation ou pour célébrer une bonne nouvelle d'équipe. L'Écrin Traiteur livre vos goûters partout à Paris et en Île-de-France, avec des douceurs artisanales préparées le jour même.</p>

  <h2>Madeleines, cookies, tartelettes : une carte sucrée artisanale</h2>
  <p>Notre carte des pauses réunit les madeleines <strong>Mado Paris</strong> les choux signés par <strong>Philippe Urraca</strong>, Meilleur Ouvrier de France, des cookies généreux, des cakes tranchés, des tartelettes citron ou praliné et des brochettes de fruits frais. Une sélection qui alterne le réconfortant et le léger, pour que chacun y trouve son plaisir, y compris les becs peu sucrés.</p>

  <h2>Quelle quantité prévoir pour une pause d'équipe ?</h2>
  <p>Comptez <strong>1,5 à 2 pièces sucrées par personne</strong> pour une pause de 20 à 30 minutes. Pour un après-midi complet de séminaire avec deux pauses, passez à 3 pièces en variant les familles : un cake tranché en début d'après-midi, madeleines et fruits frais vers 16h30. Ajoutez café, thé et jus pour une pause complète.</p>

  <h2>Combien coûte un goûter d'entreprise ?</h2>
  <p>La pause gourmande démarre à <strong>${ht(PAUSE_DES)} par personne</strong>, une pâtisserie et une boisson. Le budget monte avec les macarons, les tartelettes, les fruits et le nombre de boissons : chaque produit affiche son prix sur la carte, et le devis détaille chaque ligne. Pour des commandes régulières, demandez un devis récurrent.</p>

  <h2>Quel goûter pour quel moment ?</h2>
  <div class="tbl-wrap"><table>
    <thead><tr><th>Moment</th><th>Quantité</th><th>Ce qui fonctionne</th><th>Budget HT</th></tr></thead>
    <tbody>
      <tr><td><strong>Pause café de 20 à 30 minutes</strong></td><td>1,5 à 2 pièces par personne</td><td>Madeleines, cookies, brochettes de fruits</td><td>dès ${ht(PAUSE_DES)} par personne</td></tr>
      <tr><td><strong>Goûter varié</strong></td><td>Une sélection variée par personne et une boisson</td><td>Macarons, tartelettes, fruits frais, boissons chaudes</td><td>Sur devis</td></tr>
      <tr><td><strong>Après-midi de séminaire, deux pauses</strong></td><td>3 pièces par personne, variées</td><td>Un cake tranché en début d'après-midi, madeleines et fruits frais vers 16h30</td><td>Sur devis</td></tr>
      <tr><td><strong>Anniversaire, pot de départ</strong></td><td>Un gâteau à partager pour 6 à 12 personnes</td><td>Tarte aux framboises, fraisier, praliné noisette, tarte au citron meringuée</td><td>De ${ht(GATEAU_MIN)} à ${ht(GATEAU_MAX)} le gâteau</td></tr>
    </tbody>
  </table></div>
  <p>Pour un pot de départ ou un afterwork en fin de journée, des plateaux salés et sucrés existent aussi : voir notre page <a href="/occasions/afterwork-entreprise">traiteur afterwork d'entreprise</a> et nos <a href="/creations/cocktails">formules cocktail livrées</a>. Pour accompagner la pause, <a href="/creations/boissons">nos boissons</a> (jus Alain Milliat, thés Mariage Frères, thermos de café) se commandent dans le même devis.</p>

  <h2>Goûter d'anniversaire ou de team building : nos guides dédiés</h2>
  <p>Certaines occasions méritent une sélection pensée pour elles : voir notre guide <a href="/journal/gouter-anniversaire-entreprise-paris">goûter d'anniversaire en entreprise</a> pour fêter un collaborateur, ou <a href="/journal/gouter-entreprise-bureau">goûter d'entreprise au bureau</a> pour transformer une pause ordinaire en vrai moment d'équipe.</p>

  <h2>Commander votre goûter d'entreprise à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong> et recevez votre pause gourmande à l'heure exacte de votre programme. Conditionnement prêt à servir, facturation entreprise avec TVA. Pour les séminaires multi-jours ou les commandes récurrentes, demandez un devis personnalisé, réponse sous 24h.</p>

  <p>En octobre, découvrez aussi notre sélection dédiée pour <a href="/journal/octobre-rose-entreprise-paris">Octobre Rose en entreprise</a> : macarons et madeleines aux teintes roses pour marquer le mois de sensibilisation.</p>
`

const FAQ = [
  { q: "Quel est le prix d'un goûter d'entreprise par personne ?", a: `À partir de ${ht(PAUSE_DES)} par personne, une pâtisserie et une boisson. Pour 20 personnes, comptez ${ht(livre(20, PAUSE_DES))} livraison comprise. Avec macarons, tartelettes ou fruits en plus, le devis détaille chaque ligne. La livraison est à ${ht(LIV)} à Paris et dans les communes proches, minimum de commande ${ht(MINIMUM)}.` },
  { q: "Livrez-vous le goûter à l'heure de la pause ?", a: "Oui, du lundi au vendredi, à Paris et en Île-de-France. Vous choisissez l'heure : 15h30, 16h ou plus tard dans l'après-midi. La commande se fait jusqu'à la veille 14h ; la livraison est possible dès 6h30 pour une pause du matin." },
  { q: "Quelle quantité prévoir pour une pause d'équipe ?", a: "Comptez 1,5 à 2 pièces sucrées par personne pour une pause de 20 à 30 minutes, et 3 pièces en les variant pour un après-midi de séminaire avec deux pauses." },
  { q: 'Peut-on commander un goûter chaque semaine ?', a: "Oui, plusieurs équipes ont un goûter hebdomadaire. Pour les commandes régulières, précisez la fréquence et l'effectif au moment de la demande : le devis en tient compte." },
  { q: 'Proposez-vous des goûters vegan ou sans gluten ?', a: 'Oui. Les brochettes et les corbeilles de fruits frais sont vegan et sans gluten, les compotes sont vegan et le banana bread est sans gluten. Précisez vos contraintes au moment du devis.' },
]

export default function PausesGourmandes() {
  const c = categoriePause(false)
  return (
    <ProductsPageTemplate
      heroImg="/hero-pauses-gourmandes.webp"
      heroAlt="Pause goûter d'entreprise L'Écrin Traiteur : choux, macarons et babka"
      surtitre="Goûter d'entreprise"
      heroTitle="Goûter d'entreprise livré à Paris"
      heroSubtitle="Madeleines, macarons, cakes, tartelettes et brochettes de fruits, livrés à l'heure de la pause à Paris et en Île-de-France."
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      basePath="/creations/pauses-gourmandes"
      seoArticle={SEO_ARTICLE}
      faq={FAQ}
      devisPrestation="Goûter"
      devisTitre={{ fr: 'Un goûter à organiser ?', en: 'An afternoon break to organise?' }}
      nomJsonLd="Goûter d'entreprise"
    />
  )
}
