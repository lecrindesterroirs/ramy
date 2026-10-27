// Calculs de prix du Journal (recette du petit-déjeuner de l'OS, formules cocktail, boissons).
// Fichier léger, sans texte d'article : importable par une page client (règle du 19/10/2026 :
// pas de données lourdes côté client). lib/journalQuestions.js le réexporte.
export const LIV = 29

/* ───────────── Petit-déjeuner : recette de l'OS reproduite ───────────── */
const PX = {
  plateau30: 48.9, // plateau de 30 mini-viennoiseries pur beurre
  thermos: 19.5, // thermos d'1 L, café bio ou thé
  jusL: 9.5, // jus d'orange ou de pomme, 1 L
  mad10: 24.9, mad20: 49, mad50: 119, // coffrets de madeleines
  cake: 13.9, // cake maison, 5 à 6 parts
  brochette: 2.45, // brochette de fruits frais, à la pièce
}
const packMadeleines = (cible) => {
  const out = { 50: 0, 20: 0, 10: 0 }
  let t = Math.max(0, Math.round(cible))
  while (t >= 50) { out[50]++; t -= 50 }
  if (t > 0) {
    if (t <= 10) out[10]++
    else if (t <= 20) out[20]++
    else if (t <= 30) { out[20]++; out[10]++ }
    else if (t <= 40) out[20] += 2
    else out[50]++
  }
  return out
}
// Retourne les lignes d'un petit-déjeuner complet pour n personnes
const pdj = (n) => {
  const vienn = n * (n <= 10 ? 3 : 2)
  const plateaux = Math.ceil(vienn / 30)
  const cakes = n > 20 ? (n > 40 ? 2 : 1) : 0
  const mad = packMadeleines(n - cakes * 5)
  const madPieces = mad[50] * 50 + mad[20] * 20 + mad[10] * 10
  const brochettes = n > 15 ? n : 0
  const litres = Math.ceil(n / 5)
  const orange = Math.ceil(litres / 2)
  const pomme = litres - orange
  const thermos = Math.max(1, Math.ceil(n / 6))
  const the = Math.round(thermos * 0.2)
  const cafe = thermos - the
  const lignes = []
  const add = (label, qte, pu, detail = '') => { if (qte > 0) lignes.push({ label, qte, pu, total: qte * pu, detail }) }
  add('Plateau de 30 mini-viennoiseries pur beurre', plateaux, PX.plateau30, `${vienn} pièces nécessaires, ${plateaux * 30} livrées`)
  add('Coffret de 50 madeleines', mad[50], PX.mad50)
  add('Coffret de 20 madeleines', mad[20], PX.mad20)
  add('Coffret de 10 madeleines', mad[10], PX.mad10)
  add('Cake maison (5 à 6 parts)', cakes, PX.cake)
  add('Brochette de fruits frais', brochettes, PX.brochette)
  add("Jus d'orange (1 L)", orange, PX.jusL)
  add('Jus de pomme (1 L)', pomme, PX.jusL)
  add('Thermos de café bio (1 L)', cafe, PX.thermos)
  add('Thermos de thé (1 L)', the, PX.thermos)
  const produits = lignes.reduce((s, l) => s + l.total, 0)
  return { n, vienn, plateaux, cakes, madPieces, brochettes, litres, thermos, cafe, the, lignes, produits, total: produits + LIV }
}

/* ───────────── Cocktail : formules et boissons ───────────── */
const FORMULES = {
  invitation: { nom: "L'Invitation", pieces: 8, prix: 29.9 },
  reception: { nom: 'La Réception', pieces: 12, prix: 40.9 },
  celebration: { nom: 'La Célébration', pieces: 16, prix: 51.9 },
  // L'Afterwork : 10 pièces de plateau (burgers, navettes, clubs, wraps) au
  // lieu de bouchées, plus une planche de fromages et des chips à partager.
  // 35,90 € ≈ 10 × 2,90 € (prix à la pièce déduit des plateaux apéritifs :
  // burgers 74,40/24, clubs 64,90/24, wraps 69,80/24, douceurs 86,90/30)
  // + 6,30 € de fromages (plateau DES-031 à 69 € pour 10 à 12 personnes)
  // + 0,70 € de chips. Arbitrage de Ramy du 28/10/2026 : il trouvait la
  // formule légère à côté de l'afterwork à partager, qui a déjà les planches.
  afterwork: { nom: "L'Afterwork", pieces: 10, prix: 35.9 },
}
const boissons = (n) => {
  const jus = Math.ceil(n / 4)
  const eau = Math.ceil(n / 5)
  const chard = Math.ceil(n / 6)
  return { jus, eau, chard, coutJus: jus * 9.5, coutEau: eau * 4.8, coutChard: chard * 16.9 }
}
const cocktail = (n, f) => {
  const b = boissons(n)
  const pieces = n * f.prix
  const sans = pieces + b.coutJus + b.coutEau + LIV
  return { n, f, b, pieces, sans, avec: sans + b.coutChard }
}

export { pdj, FORMULES, boissons, cocktail }
