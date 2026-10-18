/*
  Socle anglais des articles « budget » du Journal.

  Les montants ne sont JAMAIS recopiés : ils sont recalculés par les fonctions
  françaises de lib/journalQuestions.js (pdj, LIV, les prix unitaires). Seuls
  le format et les libellés changent. Si un prix bouge dans la donnée
  française, les deux langues suivent — c'est la règle de tout lib/en/.
*/
import { pdj, LIV } from '../../journalQuestions'

/** « 1 234.50 » puis « €1,234.50 » : séparateur de milliers anglais. */
const en = (x, deuxDecimales = false) => {
  const r = Math.round(x * 100) / 100
  const s = deuxDecimales || !Number.isInteger(r) ? r.toFixed(2) : String(r)
  const [entier, dec] = s.split('.')
  const groupe = entier.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return dec ? `${groupe}.${dec}` : groupe
}
export const eurEn = (x, deuxDecimales = false) => `€${en(x, deuxDecimales)}`

export const faqHtmlEn = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

/* Libellés des lignes du petit-déjeuner, tels que pdj() les produit. */
const LIGNES_EN = {
  'Plateau de 30 mini-viennoiseries pur beurre': 'Tray of 30 pure butter mini pastries',
  'Coffret de 50 madeleines': 'Box of 50 madeleines',
  'Coffret de 20 madeleines': 'Box of 20 madeleines',
  'Coffret de 10 madeleines': 'Box of 10 madeleines',
  'Cake maison (5 à 6 parts)': 'Homemade loaf cake (5 to 6 slices)',
  'Brochette de fruits frais': 'Fresh fruit skewer',
  "Jus d'orange (1 L)": 'Orange juice (1 L)',
  'Jus de pomme (1 L)': 'Apple juice (1 L)',
  'Thermos de café bio (1 L)': 'Thermos of organic coffee (1 L)',
  'Thermos de thé (1 L)': 'Thermos of tea (1 L)',
}
const detailEn = (d) => d
  .replace(/(\d+) pièces nécessaires, (\d+) livrées/, '$1 pieces needed, $2 delivered')

/** Même objet que pdj(n), libellés traduits. */
export const pdjEn = (n) => {
  const r = pdj(n)
  return { ...r, lignes: r.lignes.map(l => ({ ...l, label: LIGNES_EN[l.label] || l.label, detail: detailEn(l.detail || '') })) }
}

/** Tableau détaillé d'un petit-déjeuner, en anglais. */
export const tableLignesEn = (r) => `
      <table>
        <thead><tr><th>Item</th><th>Quantity</th><th>Unit price excl. VAT</th><th>Total excl. VAT</th></tr></thead>
        <tbody>
${r.lignes.map(l => `          <tr><td>${l.label}</td><td>${l.qte}</td><td>${eurEn(l.pu, true)}</td><td>${eurEn(l.total, true)}</td></tr>`).join('\n')}
          <tr><td>Delivery</td><td>1</td><td>${eurEn(LIV, true)}</td><td>${eurEn(LIV, true)}</td></tr>
          <tr><td><strong>Total</strong></td><td></td><td></td><td><strong>${eurEn(r.total, true)}</strong></td></tr>
        </tbody>
      </table>`

/* ───────────── Cocktail ───────────── */
export const FORMULES_EN = {
  invitation: { nom: "L'Invitation", pieces: 8, prix: 29.9 },
  reception: { nom: 'La Réception', pieces: 12, prix: 40.9 },
  celebration: { nom: 'La Célébration', pieces: 16, prix: 51.9 },
}
const boissonsEn = (n) => {
  const jus = Math.ceil(n / 4)
  const eau = Math.ceil(n / 5)
  const chard = Math.ceil(n / 6)
  return { jus, eau, chard, coutJus: jus * 9.5, coutEau: eau * 4.8, coutChard: chard * 16.9 }
}
export const cocktailEn = (n, f) => {
  const b = boissonsEn(n)
  const pieces = n * f.prix
  const sans = pieces + b.coutJus + b.coutEau + LIV
  return { n, f, b, pieces, sans, avec: sans + b.coutChard }
}
export const tableCocktailEn = (c) => `
      <table>
        <thead><tr><th>Item</th><th>Quantity</th><th>Total excl. VAT</th></tr></thead>
        <tbody>
          <tr><td>${c.f.nom}, ${c.f.pieces} canapés at ${eurEn(c.f.prix, true)} per person</td><td>${c.n} people</td><td>${eurEn(c.pieces, true)}</td></tr>
          <tr><td>Juice (orange and apple), 1 L for 4 people</td><td>${c.b.jus} L</td><td>${eurEn(c.b.coutJus, true)}</td></tr>
          <tr><td>Water, one 75 cl bottle for 5 people</td><td>${c.b.eau}</td><td>${eurEn(c.b.coutEau, true)}</td></tr>
          <tr><td>Delivery</td><td>1</td><td>${eurEn(LIV, true)}</td></tr>
          <tr><td><strong>Total without 0% Chardonnay</strong></td><td></td><td><strong>${eurEn(c.sans, true)}</strong></td></tr>
          <tr><td>Option: 0% Chardonnay, 1 flute per person (75 cl bottle at €16.90)</td><td>${c.b.chard} bottles</td><td>${eurEn(c.b.coutChard, true)}</td></tr>
          <tr><td><strong>Total with 0% Chardonnay</strong></td><td></td><td><strong>${eurEn(c.avec, true)}</strong></td></tr>
        </tbody>
      </table>`

export const SIGNATURE_EN = `<p><em>L'Écrin Traiteur prices, October 2026, in euros excluding VAT. Calculation: products plus one delivery at €29 excl. VAT, Paris and nearby towns. Minimum order €50 excl. VAT.</em></p>`
export { LIV }
