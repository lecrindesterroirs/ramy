/*
  Buffet de petit-déjeuner d'entreprise (28/10/2026), replié en bas de la page
  /creations/petits-dejeuners-et-pauses (components/BlocsSeoBas.js, prop extraHtml). La page ressort
  surtout sur « buffet petit déjeuner entreprise » (position 46) sans y répondre : ce bloc la dit en
  clair. Aucun prix du petit-déjeuner complet (sur devis, décision de Ramy du 24/10/2026). Quantités
  tirées de la recette de l'OS (lib/calculsPrix.js, pdj), prix de lib/prixEntree.js : rien n'est
  recopié à la main. Composant serveur seulement.
*/
import { pdj, LIV } from './calculsPrix'
import { PDJ_DES, PDJ_LEGER, MINIMUM, euroFr } from './prixEntree'

const ht = (x) => `${euroFr(x)} HT`
const effectifs = [10, 20, 30, 50, 100]

const ligne = (n) => {
  const p = pdj(n)
  const sucre = [`${p.madPieces} madeleines`, p.cakes ? `${p.cakes} cake${p.cakes > 1 ? 's' : ''}` : null].filter(Boolean).join(' et ')
  return `<tr><td><strong>${n} personnes</strong></td><td>${p.vienn} (${p.plateaux * 30} livrées)</td><td>${sucre}</td><td>${p.brochettes || 'aucune'}</td><td>${p.litres} L</td><td>${p.thermos} (${p.cafe} café${p.the ? `, ${p.the} thé` : ''})</td></tr>`
}

export const BUFFET_PDJ_FR = `
  <h2>Buffet de petit-déjeuner d'entreprise : formules et prix</h2>
  <p>Un buffet de petit-déjeuner livré par L'Écrin Traiteur démarre à <strong>${ht(PDJ_LEGER)} par personne</strong> en viennoiseries et café (pour 30 personnes, hors livraison) et à <strong>${ht(PDJ_DES)} par personne</strong> en formule Classique ; le petit-déjeuner complet est chiffré sur devis. La livraison est de ${ht(LIV)} à Paris et dans les communes proches, dès 6h30, du lundi au vendredi ; le minimum de commande est de ${ht(MINIMUM)}. Gobelets, serviettes et couverts jetables sont fournis sans supplément.</p>
  <p>En formule Classique, une équipe de 20 personnes revient à ${ht(20 * PDJ_DES + LIV)} livré, 30 personnes à ${ht(30 * PDJ_DES + LIV)}, 50 personnes à ${ht(50 * PDJ_DES + LIV)} et 100 personnes à ${ht(100 * PDJ_DES + LIV)}.</p>

  <h2>Quelles quantités pour un buffet de petit-déjeuner de 10 à 100 personnes ?</h2>
  <p>Les mêmes règles s'appliquent à chaque devis : 2 mini-viennoiseries par personne (3 jusqu'à 10 personnes), une mignardise, une brochette de fruits frais au-delà de 15 personnes, un verre de jus de 20 cl par personne (1 litre pour 5 personnes) et 1 thermos d'1 litre pour 6 personnes, avec 1 thermos de thé pour 4 de café. Pour le petit-déjeuner complet :</p>
  <div class="bas-seo-table">
    <table>
      <thead><tr><th>Effectif</th><th>Mini-viennoiseries</th><th>Madeleines et cakes</th><th>Brochettes de fruits</th><th>Jus</th><th>Thermos d'1 L</th></tr></thead>
      <tbody>${effectifs.map(ligne).join('')}</tbody>
    </table>
  </div>
  <p>Les mini-viennoiseries se vendent en plateaux de 30, d'où l'écart entre les pièces nécessaires et les pièces livrées. Le détail pour chaque effectif est dans les guides <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">petit-déjeuner pour 20 personnes</a>, <a href="/journal/petit-dejeuner-pour-30-personnes-quantites-budget">pour 30</a>, <a href="/journal/petit-dejeuner-pour-50-personnes-quantites-budget">pour 50</a> et <a href="/journal/petit-dejeuner-pour-100-personnes-quantites-budget">pour 100 personnes</a>.</p>

  <h2>Questions sur le buffet de petit-déjeuner d'entreprise</h2>
  <p><strong>À quelle heure servir le petit-déjeuner ?</strong><br>Entre 8h30 et 9h30, 15 à 20 minutes avant la réunion. La livraison commence à 6h30, à l'heure que vous choisissez.</p>
  <p><strong>Peut-on commander pour le lendemain ?</strong><br>Oui, jusqu'à la veille à 14h. À partir de 50 personnes, ou pour plusieurs sites, un préavis de 48 heures est recommandé. La commande reste modifiable jusqu'à la veille à 14h.</p>
  <p><strong>Que prévoir pour les régimes alimentaires ?</strong><br>Les brochettes de fruits frais sont vegan et sans gluten, et un banana bread sans gluten existe ; l'atelier manipule de la farine, des traces restent possibles. Indiquez le nombre de personnes concernées à la commande.</p>
  <p><strong>Combien de boissons chaudes et de jus ?</strong><br>Un thermos d'1 litre sert 6 personnes et un litre de jus remplit 5 verres. Le détail est dans les guides <a href="/journal/combien-de-thermos-cafe-the-10-20-50-100-personnes">thermos de café et de thé</a> et <a href="/journal/boissons-petit-dejeuner-entreprise">boissons du petit-déjeuner</a>.</p>
  <p>Pour comparer les budgets, voir <a href="/journal/budget-petit-dejeuner-equipe-personnes">le budget d'un petit-déjeuner d'équipe</a>, <a href="/journal/combien-viennoiseries-par-personne">combien de viennoiseries par personne</a> et <a href="/journal/idees-petit-dejeuner-bureau-par-budget">les idées de petit-déjeuner classées par budget</a>. <a href="/devis">Demandez votre devis</a> : réponse sous 24h.</p>
`
