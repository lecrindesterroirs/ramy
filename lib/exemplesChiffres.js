// Exemples de budgets « prêts à citer » (octobre 2026), pour /traiteur-halal et sa version anglaise.
// Rien n'est recopié : tout est recalculé par les fonctions de lib/calculsPrix.js (recette du
// petit-déjeuner de l'OS, formules cocktail, boissons) ; seul le prix d'entrée des plateaux repas est posé ici.
import { pdj, cocktail, FORMULES, LIV } from './calculsPrix'

const PLATEAU_MIN = 28.9 // plateaux végétariens (La Solaire, La Provençale, La Potagère), 6 plateaux de 28,90 à 30,90 € HT

const plateaux = (n) => ({ n, total: n * PLATEAU_MIN + LIV })

export const EXEMPLES = [
  { cle: 'pdj20', n: 20, total: pdj(20).total },
  { cle: 'pdj50', n: 50, total: pdj(50).total },
  { cle: 'plateaux20', n: 20, total: plateaux(20).total },
  { cle: 'cocktail50', n: 50, total: cocktail(50, FORMULES.invitation).sans },
  { cle: 'cocktail100', n: 100, total: cocktail(100, FORMULES.reception).sans },
].map(e => ({ ...e, parPersonne: e.total / e.n }))

const nombre = (x, sepMilliers, sepDec) => {
  const r = Math.round(x * 100) / 100
  const [entier, dec] = r.toFixed(2).split('.')
  return `${entier.replace(/\B(?=(\d{3})+(?!\d))/g, sepMilliers)}${sepDec}${dec}`
}
export const eurFr = (x) => `${nombre(x, ' ', ',')} €`
export const eurEn = (x) => `€${nombre(x, ',', '.')}`

const LIBELLES = {
  pdj20: ['Petit-déjeuner complet pour 20 personnes', 'viennoiseries, madeleines, cake, fruits frais, jus, café et thé', 'Full breakfast for 20 people', 'pastries, madeleines, loaf cake, fresh fruit, juice, coffee and tea'],
  pdj50: ['Petit-déjeuner complet pour 50 personnes', 'même composition, quantités de la recette maison', 'Full breakfast for 50 people', 'same items, quantities from our house recipe'],
  plateaux20: ['Plateaux repas pour 20 personnes', 'entrée, plat, dessert et pain, plateau à 28,90 € HT', 'Lunch trays for 20 people', 'starter, main, dessert and bread, tray at €28.90'],
  cocktail50: ['Cocktail pour 50 personnes', "L'Invitation, 8 pièces par personne, jus et eau compris", 'Cocktail reception for 50 guests', 'L’Invitation, 8 canapés per person, juice and water included'],
  cocktail100: ['Cocktail pour 100 personnes', 'La Réception, 12 pièces par personne, jus et eau compris', 'Cocktail reception for 100 guests', 'La Réception, 12 canapés per person, juice and water included'],
}

export const exemplesHalalFr = () => `
    <h2>Exemples de budgets halal, livraison comprise</h2>
    <p>Toute la carte est halal et sans porc, <strong>sans supplément</strong> : le prix est le même que pour n'importe quelle commande. Voici ce que coûtent cinq commandes types chez L'Écrin Traiteur, en euros hors taxes, livraison de 29 € HT comprise à Paris et dans les communes proches.</p>
    <div class="tbl-wrap"><table>
      <thead><tr><th>Commande</th><th>Ce qui est compris</th><th>Total HT</th><th>Par personne HT</th></tr></thead>
      <tbody>
${EXEMPLES.map(e => `        <tr><td><strong>${LIBELLES[e.cle][0]}</strong></td><td>${LIBELLES[e.cle][1]}</td><td>${eurFr(e.total)}</td><td>${eurFr(e.parPersonne)}</td></tr>`).join('\n')}
      </tbody>
    </table></div>
    <p>En une phrase : chez L'Écrin Traiteur, un petit-déjeuner halal pour 20 personnes coûte ${eurFr(EXEMPLES[0].total)} HT livré, des plateaux repas halal pour 20 personnes ${eurFr(EXEMPLES[2].total)} HT et un cocktail halal pour 50 personnes ${eurFr(EXEMPLES[3].total)} HT. Le détail des quantités est dans nos guides <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">petit-déjeuner pour 20 personnes</a> et <a href="/journal/cocktail-entreprise-50-personnes">cocktail d'entreprise pour 50 personnes</a>.</p>
`

export const exemplesHalalEn = () => `
    <h2>Halal budget examples, delivery included</h2>
    <p>The whole menu is halal and pork-free <strong>at no extra cost</strong>: the price is the same as for any other order. Here is what five typical orders cost at L'Écrin Traiteur, in euros excluding VAT, including the €29 delivery fee in Paris and nearby towns.</p>
    <div class="tbl-wrap"><table>
      <thead><tr><th>Order</th><th>What is included</th><th>Total excl. VAT</th><th>Per person excl. VAT</th></tr></thead>
      <tbody>
${EXEMPLES.map(e => `        <tr><td><strong>${LIBELLES[e.cle][2]}</strong></td><td>${LIBELLES[e.cle][3]}</td><td>${eurEn(e.total)}</td><td>${eurEn(e.parPersonne)}</td></tr>`).join('\n')}
      </tbody>
    </table></div>
    <p>In one sentence: at L'Écrin Traiteur, a halal breakfast for 20 people costs ${eurEn(EXEMPLES[0].total)} excluding VAT, delivered; halal lunch trays for 20 people cost ${eurEn(EXEMPLES[2].total)}, and a halal cocktail reception for 50 guests costs ${eurEn(EXEMPLES[3].total)}. Quantities are detailed in our guides <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">breakfast for 20 people</a> and <a href="/journal/cocktail-entreprise-50-personnes">corporate cocktail reception for 50 guests</a>.</p>
`
