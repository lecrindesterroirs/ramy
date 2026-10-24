// Articles « questions » (octobre 2026) : petit-déjeuner par effectif, composition, mini-viennoiseries,
// cocktail déjeunatoire / dînatoire par effectif, différences de formats. Fusionnés via lib/journalOffice.js.
//
// Sources des chiffres :
//   - FICHE-VERITE.md (13 et 17/10/2026) : prix, quantités, livraison 29 € HT, minimum 50 € HT, commande jusqu'à la veille 14h,
//     48 h à partir de 50 personnes ; cocktail 29,90 / 40,90 / 51,90 € HT ; boissons d'un cocktail (1 L de jus pour 4,
//     1 Evian 75 cl pour 5, Chardonnay 0 % en option, 1 flûte par personne) ;
//   - /Users/ramy/Desktop/lecrin-os/lib/devis-recipes.ts (recette du petit-déjeuner), reproduite ci-dessous : elle redonne
//     160,80 € HT pour 10 personnes et 340,80 € HT pour 20, comme la fiche de vérité ;
//   - lib/productsData.js et lib/boissonsData.js pour les prix unitaires (HT, octobre 2026).
// Règle du 17/10/2026 : « halal et sans porc » seulement sur le salé (cocktails), jamais sur le sucré (petit-déjeuner).
// Aucun nom de fournisseur ni de client. Tous les budgets comptent une seule livraison de 29 € HT.

import { LIV, pdj, FORMULES, boissons, cocktail } from './calculsPrix'

const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

const fr = (x, deuxDecimales = false) => {
  const r = Math.round(x * 100) / 100
  const s = deuxDecimales || !Number.isInteger(r) ? r.toFixed(2) : String(r)
  const [entier, dec] = s.split('.')
  const groupe = entier.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return dec ? `${groupe},${dec}` : groupe
}
const eur = (x, deuxDecimales = false) => `${fr(x, deuxDecimales)} €`

const DATE = '18 octobre 2026'
const ISO = '2026-10-18'
const SIGNATURE = `<p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes. Calcul : produits + une livraison de 29 € HT, Paris et communes proches. Minimum de commande 50 € HT.</em></p>`

const tableLignes = (r) => `
      <table>
        <thead><tr><th>Produit</th><th>Quantité</th><th>Prix unitaire HT</th><th>Total HT</th></tr></thead>
        <tbody>
${r.lignes.map(l => `          <tr><td>${l.label}</td><td>${l.qte}</td><td>${eur(l.pu, true)}</td><td>${eur(l.total, true)}</td></tr>`).join('\n')}
          <tr><td>Livraison</td><td>1</td><td>${eur(LIV, true)}</td><td>${eur(LIV, true)}</td></tr>
          <tr><td><strong>Total</strong></td><td></td><td></td><td><strong>${eur(r.total, true)}</strong></td></tr>
        </tbody>
      </table>`

const tableCocktail = (c) => `
      <table>
        <thead><tr><th>Poste</th><th>Quantité</th><th>Total HT</th></tr></thead>
        <tbody>
          <tr><td>${c.f.nom}, ${c.f.pieces} pièces à ${eur(c.f.prix, true)} par personne</td><td>${c.n} personnes</td><td>${eur(c.pieces, true)}</td></tr>
          <tr><td>Jus (orange et pomme), 1 L pour 4 personnes</td><td>${c.b.jus} L</td><td>${eur(c.b.coutJus, true)}</td></tr>
          <tr><td>Eau, 1 bouteille de 75 cl pour 5 personnes</td><td>${c.b.eau}</td><td>${eur(c.b.coutEau, true)}</td></tr>
          <tr><td>Livraison</td><td>1</td><td>${eur(LIV, true)}</td></tr>
          <tr><td><strong>Total sans Chardonnay 0 %</strong></td><td></td><td><strong>${eur(c.sans, true)}</strong></td></tr>
          <tr><td>Option : Chardonnay 0 %, 1 flûte par personne (bouteille de 75 cl à 16,90 €)</td><td>${c.b.chard} bouteilles</td><td>${eur(c.b.coutChard, true)}</td></tr>
          <tr><td><strong>Total avec Chardonnay 0 %</strong></td><td></td><td><strong>${eur(c.avec, true)}</strong></td></tr>
        </tbody>
      </table>`

export { pdj, fr, eur, faqHtml, LIV, FORMULES, cocktail }

const BASE = {
  categorie: 'Conseils',
  date: DATE,
  isoDate: ISO,
  isoModified: ISO,
}

/* ═════════════════════ 1-3 : petit-déjeuner par effectif ═════════════════════ */
const pdj20 = pdj(20)
const pdj30 = pdj(30)
const pdj50 = pdj(50)

const FAQ_PDJ20 = [
  { q: 'Combien de viennoiseries pour 20 personnes ?', a: `40 mini-viennoiseries, à raison de 2 par personne, soit 2 plateaux de 30. Les 20 pièces en plus servent de marge.` },
  { q: 'Combien de café et de thé pour 20 personnes ?', a: `${pdj20.thermos} thermos d'1 litre : ${pdj20.cafe} de café et ${pdj20.the} de thé, à raison d'un thermos pour 6 personnes, avec 4 café pour 1 thé.` },
  { q: 'Combien coûte un petit-déjeuner pour 20 personnes ?', a: `${eur(pdj20.total, true)} HT livraison comprise pour le petit-déjeuner complet, soit ${eur(pdj20.produits / 20, true)} HT par personne hors livraison. La formule Classique revient à ${eur(20 * 8 + LIV)} HT (20 × 8 € + 29 € de livraison).` },
  { q: 'Jusqu\'à quand commander pour 20 personnes ?', a: 'Jusqu\'à la veille à 14h, avec une livraison dès 6h30. Le 48 h d\'avance ne s\'impose qu\'à partir de 50 personnes.' },
  { q: 'Que prévoir pour un participant vegan ou sans gluten ?', a: 'Les brochettes de fruits frais sont vegan et sans gluten, et le banana bread sans gluten est à 26,90 € HT pour 6 à 8 personnes. Précisez le nombre de personnes concernées à la demande de devis.' },
  { q: 'Faut-il commander plus que 20 portions ?', a: 'Ajoutez 10 % de marge si des invités de dernière minute sont possibles. Pour 20 personnes confirmées, les quantités ci-dessus suffisent : les 2 plateaux livrent déjà 20 mini-viennoiseries de plus que nécessaire.' },
]

const FAQ_PDJ30 = [
  { q: 'Combien de viennoiseries pour 30 personnes ?', a: '60 mini-viennoiseries, à raison de 2 par personne, soit exactement 2 plateaux de 30. Il n\'y a donc pas de marge : ajoutez un troisième plateau si des invités peuvent s\'ajouter.' },
  { q: 'Pourquoi un cake apparaît-il à partir de 21 personnes ?', a: 'Au-delà de 20 personnes, nous remplaçons 5 madeleines par un cake maison de 5 à 6 parts pour varier le sucré. À 30 personnes : 30 madeleines et 1 cake.' },
  { q: 'Combien de thermos pour 30 personnes ?', a: `${pdj30.thermos} thermos d'1 litre : ${pdj30.cafe} de café et ${pdj30.the} de thé.` },
  { q: 'Combien coûte un petit-déjeuner pour 30 personnes ?', a: `${eur(pdj30.total, true)} HT livraison comprise, soit ${eur(pdj30.produits / 30, true)} HT par personne hors livraison. La formule Classique revient à ${eur(30 * 8 + LIV)} HT.` },
  { q: 'Quelle différence avec un petit-déjeuner pour 20 personnes ?', a: `À 30 personnes, le même schéma s'applique avec ${pdj30.vienn / 30} plateaux, ${pdj30.litres} litres de jus et ${pdj30.thermos} thermos. Le budget passe de ${eur(pdj20.total, true)} à ${eur(pdj30.total, true)} HT : ${eur(pdj30.total - pdj20.total, true)} de plus pour 10 personnes de plus.` },
  { q: 'Peut-on livrer avant 8h ?', a: 'Oui, la livraison démarre à 6h30, à l\'heure choisie par le client.' },
]

const FAQ_PDJ50 = [
  { q: 'Combien de viennoiseries pour 50 personnes ?', a: '100 mini-viennoiseries nécessaires, soit 4 plateaux de 30 (120 pièces livrées).' },
  { q: 'Faut-il commander plus tôt pour 50 personnes ?', a: 'Oui : à partir de 50 personnes, prévoyez 48 h. La commande reste possible jusqu\'à la veille à 14h en dessous de ce seuil.' },
  { q: 'Combien de thermos pour 50 personnes ?', a: `${pdj50.thermos} thermos d'1 litre : ${pdj50.cafe} de café et ${pdj50.the} de thé, à raison d'un thermos pour 6 personnes.` },
  { q: 'Combien coûte un petit-déjeuner pour 50 personnes ?', a: `${eur(pdj50.total, true)} HT livraison comprise, soit ${eur(pdj50.produits / 50, true)} HT par personne hors livraison. La formule Classique revient à ${eur(50 * 8 + LIV)} HT.` },
  { q: 'Combien de cakes pour 50 personnes ?', a: 'Au-delà de 40 personnes, nous prévoyons 2 cakes maison de 5 à 6 parts, avec 40 madeleines, pour varier le sucré.' },
  { q: 'Comment éviter la file d\'attente à 50 personnes ?', a: 'Répartissez le buffet en deux points de service, avec un thermos de café et un de jus à chaque bout de table, et laissez les mini-viennoiseries en libre-service plutôt que servies à l\'assiette.' },
]

/* ═════════════════════ 4 : composition ═════════════════════ */
const FAQ_COMPO = [
  { q: 'De quoi se compose un petit-déjeuner d\'entreprise complet ?', a: 'De 2 mini-viennoiseries, 1 mignardise sucrée (madeleine ou part de cake), 1 verre de jus et 1 boisson chaude par personne, avec 1 brochette de fruits au-delà de 15 personnes. Les gobelets, serviettes, sucres et touillettes sont compris.' },
  { q: 'Les gobelets et serviettes sont-ils compris ?', a: 'Oui, avec un petit-déjeuner : serviettes, gobelets, sucres et touillettes sont compris.' },
  { q: 'Quelle boisson chaude prévoir ?', a: 'Un thermos d\'1 litre pour 6 personnes, avec 4 thermos de café pour 1 de thé.' },
  { q: 'Quelle est la différence entre la formule Classique et le petit-déjeuner complet ?', a: 'La formule Classique démarre à 8 € HT par personne ; le petit-déjeuner complet est sur devis, plus la livraison de 29 € HT.' },
  { q: 'Peut-on ajouter du salé ?', a: 'Oui, du salé se commande en complément, sur devis.' },
  { q: 'Que prévoir pour les régimes alimentaires ?', a: 'Des brochettes de fruits frais, vegan et sans gluten, et un banana bread sans gluten à 26,90 € HT pour 6 à 8 personnes. Précisez les régimes à la demande de devis.' },
]

/* ═════════════════════ 5 : pourquoi mini-viennoiseries ═════════════════════ */
const FAQ_MINI = [
  { q: 'Pourquoi des mini-viennoiseries plutôt que des grandes ?', a: 'Elles se mangent en deux bouchées, debout, sans assiette ni couteau, et chacun peut en goûter plusieurs variétés. Les quantités se règlent aussi plus finement : 2 par personne, 3 jusqu\'à 10 personnes.' },
  { q: 'Combien de mini-viennoiseries par personne ?', a: '2 par personne, et 3 pour un groupe de 10 personnes ou moins.' },
  { q: 'Combien coûte une mini-viennoiserie ?', a: 'Un plateau de 30 mini-viennoiseries pur beurre coûte 48,90 € HT, soit 1,63 € HT la pièce. Deux par personne représentent 3,26 € HT.' },
  { q: 'Quelles mini-viennoiseries sont dans un plateau ?', a: 'Des mini croissants, des mini pains au chocolat et des mini pains aux raisins, mélangés dans un plateau de 30 pièces.' },
  { q: 'Les mini-viennoiseries conviennent-elles à un petit-déjeuner de direction ?', a: 'Oui, mais pour un accueil client ou un CODIR, on les complète par des pâtisseries, des yaourts et des fruits, sur devis.' },
  { q: 'Et pour un goûter de l\'après-midi ?', a: 'Le goûter se compose plutôt de mignardises sucrées : madeleines, cookies, cakes et brochettes de fruits, dès 6 € HT par personne.' },
]

/* ═════════════════════ 6 : cocktail déjeunatoire ═════════════════════ */
const dej20 = cocktail(20, FORMULES.reception)
const dej50 = cocktail(50, FORMULES.reception)
const dej100 = cocktail(100, FORMULES.reception)
const FAQ_DEJ = [
  { q: 'Qu\'est-ce qu\'un cocktail déjeunatoire ?', a: 'Un cocktail déjeunatoire remplace le déjeuner : des pièces salées et sucrées servies debout, de 12 à 14 pièces par personne.' },
  { q: 'Combien de pièces par personne pour un cocktail déjeunatoire ?', a: '12 à 14 pièces par personne. La formule La Réception compte 12 pièces (9 salées et 3 sucrées) à 40,90 € HT par personne.' },
  { q: 'Quelle est la différence avec un cocktail dînatoire ?', a: 'Le dînatoire remplace le dîner avec 16 à 18 pièces par personne, contre 12 à 14 pour le déjeunatoire. La Célébration, 16 pièces, est à 51,90 € HT par personne.' },
  { q: 'Combien coûte un cocktail déjeunatoire pour 50 personnes ?', a: `${eur(dej50.sans, true)} HT en La Réception avec jus, eau et livraison, soit ${eur(dej50.sans / 50, true)} HT par personne. Avec un Chardonnay 0 % pour trinquer : ${eur(dej50.avec, true)} HT.` },
  { q: 'Le cocktail déjeunatoire est-il halal et sans alcool ?', a: 'Oui : toute la carte salée est halal et sans porc, et la carte est sans alcool. Nous ne revendiquons pas de certification halal.' },
  { q: 'Jusqu\'à quand commander ?', a: 'Jusqu\'à la veille à 14h, ou 48 h à l\'avance à partir de 50 personnes, avec une livraison dès 6h30.' },
]

/* ═════════════════════ 7-8 : cocktail dînatoire 20 / 30 ═════════════════════ */
const din20 = cocktail(20, FORMULES.celebration)
const din30 = cocktail(30, FORMULES.celebration)
const din20Reception = cocktail(20, FORMULES.reception)
const din20Invitation = cocktail(20, FORMULES.invitation)
const din30Reception = cocktail(30, FORMULES.reception)

const FAQ_DIN20 = [
  { q: 'Combien de pièces pour un cocktail dînatoire de 20 personnes ?', a: '16 à 18 pièces par personne, soit 320 à 360 pièces au total. La formule La Célébration compte 16 pièces par personne, 320 pièces pour 20 invités.' },
  { q: 'Combien coûte un cocktail dînatoire pour 20 personnes ?', a: `${eur(din20.sans, true)} HT en La Célébration avec jus, eau et livraison, soit ${eur(din20.sans / 20, true)} HT par personne. Avec un Chardonnay 0 % : ${eur(din20.avec, true)} HT.` },
  { q: 'Peut-on faire un apéritif dînatoire pour 20 personnes moins cher ?', a: `Oui, en La Réception à 12 pièces : ${eur(din20Reception.sans, true)} HT avec jus, eau et livraison, soit ${eur(din20Reception.sans / 20, true)} HT par personne. Pour un format plus court, L'Invitation à 8 pièces coûte 29,90 € HT par personne.` },
  { q: 'Quelles boissons prévoir pour 20 personnes ?', a: `${din20.b.jus} litres de jus, ${din20.b.eau} bouteilles d'eau de 75 cl et, en option, ${din20.b.chard} bouteilles de Chardonnay 0 % (6 flûtes par bouteille).` },
  { q: 'Le cocktail est-il halal et sans alcool ?', a: 'Oui : les pièces salées sont halal et sans porc, et la carte est sans alcool. Les options végétariennes, vegan et sans gluten se précisent au devis.' },
  { q: 'Quel est le prix d\'un traiteur pour un apéritif dînatoire de 20 personnes ?', a: `Chez L'Écrin Traiteur, avec jus, eau et livraison : ${eur(din20Invitation.sans, true)} HT en L'Invitation (8 pièces), ${eur(din20Reception.sans, true)} HT en La Réception (12 pièces) et ${eur(din20.sans, true)} HT en La Célébration (16 pièces), le vrai dînatoire. La formule de 8 pièces est le cocktail le moins cher pour 20 personnes.` },
  { q: 'Peut-on modifier les pièces ?', a: 'Non, la composition des formules est fixe. Précisez les régimes à la demande de devis.' },
]

const FAQ_DIN30 = [
  { q: 'Combien de pièces pour un cocktail dînatoire de 30 personnes ?', a: '16 à 18 pièces par personne, soit 480 à 540 pièces. La Célébration compte 16 pièces par personne, 480 pièces pour 30 invités.' },
  { q: 'Combien coûte un cocktail dînatoire pour 30 personnes ?', a: `${eur(din30.sans, true)} HT en La Célébration avec jus, eau et livraison, soit ${eur(din30.sans / 30, true)} HT par personne. Avec un Chardonnay 0 % : ${eur(din30.avec, true)} HT.` },
  { q: 'Quel budget pour un apéritif dînatoire de 30 personnes plus court ?', a: `En La Réception à 12 pièces : ${eur(din30Reception.sans, true)} HT avec jus, eau et livraison, soit ${eur(din30Reception.sans / 30, true)} HT par personne.` },
  { q: 'Combien de boissons pour 30 personnes ?', a: `${din30.b.jus} litres de jus, ${din30.b.eau} bouteilles d'eau de 75 cl et, en option, ${din30.b.chard} bouteilles de Chardonnay 0 %.` },
  { q: 'Jusqu\'à quand commander ?', a: 'Jusqu\'à la veille à 14h, avec une livraison dès 6h30. À partir de 50 personnes, il faut 48 h.' },
  { q: 'Faut-il prévoir du personnel ?', a: 'Les pièces sont livrées dressées et prêtes à servir. Un maître d\'hôtel peut s\'ajouter, sur devis, pour réapprovisionner et débarrasser.' },
]

/* ═════════════════════ 9 : différences de formats ═════════════════════ */
const FAQ_DIFF = [
  { q: 'Quelle est la différence entre un cocktail et un apéritif dînatoire ?', a: 'Aucune dans la pratique : « apéritif dînatoire » est le terme courant pour un cocktail dînatoire, un repas debout fait de pièces individuelles. Ce qui change, c\'est le nombre de pièces : 6 à 8 pour un apéritif, 16 à 18 pour un dînatoire.' },
  { q: 'Combien de pièces pour un cocktail, un déjeunatoire et un dînatoire ?', a: '6 à 8 pièces par personne pour un apéritif, 12 à 14 pour un déjeunatoire, 16 à 18 pour un dînatoire.' },
  { q: 'Que choisir entre un buffet à partager et un cocktail ?', a: 'Le cocktail se mange debout, pièce par pièce, et laisse les invités circuler ; le buffet à partager convient à une équipe assise ou à un déjeuner de travail.' },
  { q: 'Combien coûte un cocktail par personne ?', a: 'De 29,90 € HT pour 8 pièces à 51,90 € HT pour 16 pièces, plus la livraison de 29 € HT.' },
  { q: 'Combien coûte un buffet à partager par personne ?', a: 'De 34,90 à 37,90 € HT par personne, pour un menu calibré pour 8 à 12 convives, plus la livraison.' },
  { q: 'Qu\'est-ce qu\'un buffet déjeunatoire ?', a: 'Un déjeuner servi en buffet qui remplace le repas de midi. Debout, c\'est un cocktail déjeunatoire de 12 à 14 pièces par personne, La Réception à 40,90 € HT chez L\'Écrin Traiteur ; assis, un buffet à partager servi en plats, de 34,90 à 37,90 € HT par personne.' },
  { q: 'Combien coûte un buffet déjeunatoire pour 20 personnes ?', a: `Chez L'Écrin Traiteur, ${eur(dej20.sans, true)} HT en cocktail déjeunatoire de 12 pièces avec jus, eau et livraison, ou ${eur(20 * 34.9 + LIV)} à ${eur(20 * 37.9 + LIV)} HT en buffet à partager, livraison comprise et boissons en plus.` },
  { q: 'Cocktail, buffet ou plateaux repas pour une réunion ?', a: 'Pour une réunion assise de travail, les plateaux repas à partir de 28,90 € HT ; pour un moment debout et convivial, le cocktail.' },
]

export const QUESTIONS = [
  /* ───────── 1 ───────── */
  {
    ...BASE,
    slug: 'petit-dejeuner-pour-20-personnes-quantites-budget',
    titre: 'Petit-déjeuner pour 20 personnes : quantités exactes et budget',
    metaTitle: 'Petit-déjeuner pour 20 personnes : quantités et budget',
    extrait: `Pour 20 personnes : 40 mini-viennoiseries, 20 madeleines, 20 brochettes, 4 L de jus, 4 thermos. ${eur(pdj20.total, true)} HT livraison comprise.`,
    img: '/hero-petitdej.webp',
    relatedProducts: ['viennoiseries-melangees', 'madeleines-20', 'brochettes-fruits'],
    enBref: [
      '40 mini-viennoiseries (2 plateaux de 30), 20 madeleines, 20 brochettes de fruits, 20 verres de jus (4 L) et 4 thermos (3 de café, 1 de thé).',
      `Budget : ${eur(pdj20.total, true)} HT livraison comprise, soit ${eur(pdj20.produits / 20, true)} HT par personne hors livraison.`,
      `Formule Classique : ${eur(20 * 8 + LIV)} HT (20 × 8 € + 29 € de livraison).`,
      'Commande jusqu\'à la veille à 14h, livraison dès 6h30.',
    ],
    about: ['Petit-déjeuner d\'entreprise', 'Quantités par personne', 'Budget traiteur'],
    faq: FAQ_PDJ20,
    contenu: `
      <p>Un petit-déjeuner pour 20 personnes demande <strong>40 mini-viennoiseries, 20 madeleines, 20 brochettes de fruits, 4 litres de jus et 4 thermos</strong>. Il coûte <strong>${eur(pdj20.total, true)} HT livraison comprise</strong>, soit ${eur(pdj20.produits / 20, true)} HT par personne hors livraison. Voici le détail, le budget et l'organisation.</p>

      <h2>Quelles quantités pour un petit-déjeuner de 20 personnes ?</h2>
      <p>Comptez 2 mini-viennoiseries, 1 mignardise, 1 brochette de fruits et 1 verre de jus par personne, avec 1 thermos d'1 litre pour 6 personnes.</p>
      <table>
        <thead><tr><th>Produit</th><th>Règle</th><th>Pour 20 personnes</th></tr></thead>
        <tbody>
          <tr><td>Mini-viennoiseries</td><td>2 par personne</td><td>40 pièces, soit 2 plateaux de 30</td></tr>
          <tr><td>Madeleines</td><td>1 par personne</td><td>20 pièces, soit 1 coffret de 20</td></tr>
          <tr><td>Brochettes de fruits frais</td><td>1 par personne, au-delà de 15 personnes</td><td>20 brochettes</td></tr>
          <tr><td>Jus</td><td>1 verre de 20 cl par personne</td><td>${pdj20.litres} litres (2 d'orange, 2 de pomme)</td></tr>
          <tr><td>Café et thé</td><td>1 thermos pour 6 personnes, 4 café pour 1 thé</td><td>${pdj20.thermos} thermos (${pdj20.cafe} café, ${pdj20.the} thé)</td></tr>
        </tbody>
      </table>
      <p>Pour comprendre la règle des mini-viennoiseries, voir le guide <a href="/journal/combien-viennoiseries-par-personne">combien de mini-viennoiseries par personne</a>.</p>

      <h2>Combien coûte un petit-déjeuner pour 20 personnes ?</h2>
      <p>Le petit-déjeuner complet revient à <strong>${eur(pdj20.total, true)} HT livraison comprise</strong>. La formule Classique, à 8 € HT par personne, revient à <strong>${eur(20 * 8 + LIV)} HT</strong> livraison comprise.</p>${tableLignes(pdj20)}
      <p>Pour comparer les formats et leurs prix selon l'effectif, voir <a href="/journal/budget-petit-dejeuner-equipe-personnes">combien coûte un petit-déjeuner d'entreprise</a>.</p>

      <h2>Comment organiser ce petit-déjeuner, de la commande à 8h ?</h2>
      <ol>
        <li><strong>La veille avant 14h :</strong> confirmez l'effectif, l'adresse et l'heure de livraison, avec le contact sur place.</li>
        <li><strong>Dès 6h30 le jour J :</strong> la livraison est possible à l'heure choisie, avant l'arrivée de l'équipe.</li>
        <li><strong>Sur la table :</strong> mini-viennoiseries et madeleines en libre-service, jus et thermos à portée de main, serviettes et gobelets compris.</li>
      </ol>

      <h2>Que changer pour une équipe plus ou moins gourmande ?</h2>
      <p>Ajoutez 10 % de marge si des invités peuvent s'ajouter au dernier moment : les 2 plateaux livrent déjà 60 mini-viennoiseries pour 40 nécessaires. Pour un point d'équipe de 30 minutes, 2 mini-viennoiseries et un café suffisent ; pour un séminaire matinal, gardez le sucré et les fruits.</p>

      <h2>Et pour les régimes alimentaires ?</h2>
      <p>Les mini-viennoiseries pur beurre conviennent aux végétariens. Les brochettes de fruits frais sont vegan et sans gluten, et le banana bread sans gluten est à 26,90 € HT pour 6 à 8 personnes. Précisez le nombre de personnes concernées à la demande de devis.</p>

      <h2>Comment commander ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h, ou composez le petit-déjeuner dans les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>. Commande jusqu'à la veille à 14h, livraison dès 6h30 à Paris et en Île-de-France, facturation entreprise avec TVA. Pour 30 ou 50 personnes, voir <a href="/journal/petit-dejeuner-pour-30-personnes-quantites-budget">30 personnes</a> et <a href="/journal/petit-dejeuner-pour-50-personnes-quantites-budget">50 personnes</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le petit-déjeuner pour 20 personnes</h2>
${faqHtml(FAQ_PDJ20)}
    `,
  },

  /* ───────── 2 ───────── */
  {
    ...BASE,
    slug: 'petit-dejeuner-pour-30-personnes-quantites-budget',
    titre: 'Petit-déjeuner pour 30 personnes : quantités exactes et budget',
    metaTitle: 'Petit-déjeuner pour 30 personnes : quantités et budget',
    extrait: `Pour 30 personnes : 60 mini-viennoiseries, 30 madeleines et 1 cake, 30 brochettes, 6 L de jus, 5 thermos. ${eur(pdj30.total, true)} HT livraison comprise.`,
    img: '/prod-cake-marbre.webp',
    relatedProducts: ['viennoiseries-melangees', 'madeleines-20', 'cake-marbre'],
    enBref: [
      '60 mini-viennoiseries (2 plateaux de 30), 30 madeleines, 1 cake, 30 brochettes de fruits, 30 verres de jus (6 L) et 5 thermos.',
      `Budget : ${eur(pdj30.total, true)} HT livraison comprise, soit ${eur(pdj30.produits / 30, true)} HT par personne hors livraison.`,
      `Formule Classique : ${eur(30 * 8 + LIV)} HT (30 × 8 € + 29 € de livraison).`,
      'Le premier cake apparaît à 21 personnes ; il y en a 2 au-delà de 40.',
    ],
    about: ['Petit-déjeuner d\'entreprise', 'Quantités par personne', 'Budget traiteur'],
    faq: FAQ_PDJ30,
    contenu: `
      <p>Un petit-déjeuner pour 30 personnes demande <strong>60 mini-viennoiseries, 30 madeleines et 1 cake, 30 brochettes de fruits, 6 litres de jus et 5 thermos</strong>. Il coûte <strong>${eur(pdj30.total, true)} HT livraison comprise</strong>, soit ${eur(pdj30.produits / 30, true)} HT par personne hors livraison.</p>

      <h2>Quelles quantités pour un petit-déjeuner de 30 personnes ?</h2>
      <p>La règle reste de 2 mini-viennoiseries par personne : 30 personnes tiennent donc dans 2 plateaux de 30 pièces, sans marge. À partir de 21 personnes, un cake maison s'ajoute pour varier le sucré.</p>
      <table>
        <thead><tr><th>Produit</th><th>Règle</th><th>Pour 30 personnes</th></tr></thead>
        <tbody>
          <tr><td>Mini-viennoiseries</td><td>2 par personne</td><td>60 pièces, soit 2 plateaux de 30</td></tr>
          <tr><td>Madeleines</td><td>1 par personne, moins 5 par cake</td><td>30 pièces (1 coffret de 20 et 1 de 10)</td></tr>
          <tr><td>Cake maison</td><td>1 au-delà de 20 personnes, 2 au-delà de 40</td><td>1 cake de 5 à 6 parts</td></tr>
          <tr><td>Brochettes de fruits frais</td><td>1 par personne</td><td>30 brochettes</td></tr>
          <tr><td>Jus</td><td>1 verre de 20 cl par personne</td><td>${pdj30.litres} litres (3 d'orange, 3 de pomme)</td></tr>
          <tr><td>Café et thé</td><td>1 thermos pour 6 personnes, 4 café pour 1 thé</td><td>${pdj30.thermos} thermos (${pdj30.cafe} café, ${pdj30.the} thé)</td></tr>
        </tbody>
      </table>

      <h2>Combien coûte un petit-déjeuner pour 30 personnes ?</h2>
      <p>Le petit-déjeuner complet revient à <strong>${eur(pdj30.total, true)} HT livraison comprise</strong>. La formule Classique, à 8 € HT par personne, revient à <strong>${eur(30 * 8 + LIV)} HT</strong>.</p>${tableLignes(pdj30)}
      <p>Comparé à 20 personnes (${eur(pdj20.total, true)} HT), le budget augmente de ${eur(pdj30.total - pdj20.total, true)} pour 10 personnes de plus : la livraison de 29 € HT se partage sur davantage de convives. Voir aussi <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">20 personnes</a>.</p>

      <h2>Comment organiser un petit-déjeuner de 30 personnes ?</h2>
      <p>Choisissez un lieu de service accessible à toute l'équipe, avec la boisson chaude à un bout de table et les jus à l'autre pour étaler le passage. Commandez jusqu'à la veille à 14h, avec une livraison dès 6h30 : 30 personnes restent sous le seuil de 48 h d'avance, qui s'applique à partir de 50.</p>

      <h2>Faut-il prévoir une marge pour 30 personnes ?</h2>
      <p>Oui si l'effectif peut bouger : 60 mini-viennoiseries correspondent exactement à 2 par personne. Ajoutez un troisième plateau de 30 pièces (48,90 € HT) pour absorber les imprévus, soit ${eur(pdj30.total + 48.9, true)} HT au total.</p>

      <h2>Quels régimes prévoir ?</h2>
      <p>Les brochettes de fruits sont vegan et sans gluten, et les mini-viennoiseries pur beurre conviennent aux végétariens. Le banana bread sans gluten est à 26,90 € HT pour 6 à 8 personnes. Le nombre de personnes concernées se précise à la demande de devis.</p>

      <h2>Comment commander ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h, ou composez le petit-déjeuner dans les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>. Livraison à Paris et en Île-de-France, facturation entreprise avec TVA. Pour plus de monde, voir le <a href="/journal/petit-dejeuner-pour-50-personnes-quantites-budget">petit-déjeuner pour 50 personnes</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le petit-déjeuner pour 30 personnes</h2>
${faqHtml(FAQ_PDJ30)}
    `,
  },

  /* ───────── 3 ───────── */
  {
    ...BASE,
    slug: 'petit-dejeuner-pour-50-personnes-quantites-budget',
    titre: 'Petit-déjeuner pour 50 personnes : quantités exactes, budget et délai',
    metaTitle: 'Petit-déjeuner pour 50 personnes : quantités et budget',
    extrait: `Pour 50 personnes : 100 mini-viennoiseries, 40 madeleines et 2 cakes, 50 brochettes, 10 L de jus, 9 thermos. ${eur(pdj50.total, true)} HT livraison comprise.`,
    img: '/prod-viennoiseries.webp',
    relatedProducts: ['viennoiseries-melangees', 'madeleines-50', 'cake-marbre'],
    enBref: [
      '100 mini-viennoiseries (4 plateaux de 30), 40 madeleines, 2 cakes, 50 brochettes de fruits, 50 verres de jus (10 L) et 9 thermos.',
      `Budget : ${eur(pdj50.total, true)} HT livraison comprise, soit ${eur(pdj50.produits / 50, true)} HT par personne hors livraison.`,
      `Formule Classique : ${eur(50 * 8 + LIV)} HT (50 × 8 € + 29 € de livraison).`,
      'À partir de 50 personnes, commandez 48 h à l\'avance.',
    ],
    about: ['Petit-déjeuner d\'entreprise', 'Quantités par personne', 'Budget traiteur'],
    faq: FAQ_PDJ50,
    contenu: `
      <p>Un petit-déjeuner pour 50 personnes demande <strong>100 mini-viennoiseries, 40 madeleines et 2 cakes, 50 brochettes de fruits, 10 litres de jus et 9 thermos</strong>. Il coûte <strong>${eur(pdj50.total, true)} HT livraison comprise</strong>, soit ${eur(pdj50.produits / 50, true)} HT par personne hors livraison. À cette taille, la commande se fait <strong>48 h à l'avance</strong>.</p>

      <h2>Quelles quantités pour un petit-déjeuner de 50 personnes ?</h2>
      <p>La règle reste de 2 mini-viennoiseries par personne : 100 pièces sont nécessaires, soit 4 plateaux de 30 (120 pièces livrées). Au-delà de 40 personnes, 2 cakes maison remplacent 10 madeleines.</p>
      <table>
        <thead><tr><th>Produit</th><th>Règle</th><th>Pour 50 personnes</th></tr></thead>
        <tbody>
          <tr><td>Mini-viennoiseries</td><td>2 par personne</td><td>100 pièces, soit 4 plateaux de 30</td></tr>
          <tr><td>Madeleines</td><td>1 par personne, moins 5 par cake</td><td>40 pièces (2 coffrets de 20)</td></tr>
          <tr><td>Cakes maison</td><td>2 au-delà de 40 personnes</td><td>2 cakes de 5 à 6 parts</td></tr>
          <tr><td>Brochettes de fruits frais</td><td>1 par personne</td><td>50 brochettes</td></tr>
          <tr><td>Jus</td><td>1 verre de 20 cl par personne</td><td>${pdj50.litres} litres (5 d'orange, 5 de pomme)</td></tr>
          <tr><td>Café et thé</td><td>1 thermos pour 6 personnes, 4 café pour 1 thé</td><td>${pdj50.thermos} thermos (${pdj50.cafe} café, ${pdj50.the} thé)</td></tr>
        </tbody>
      </table>

      <h2>Combien coûte un petit-déjeuner pour 50 personnes ?</h2>
      <p>Le petit-déjeuner complet revient à <strong>${eur(pdj50.total, true)} HT livraison comprise</strong>. La formule Classique, à 8 € HT par personne, revient à <strong>${eur(50 * 8 + LIV)} HT</strong>.</p>${tableLignes(pdj50)}
      <p>Le prix par personne baisse avec l'effectif : ${eur(pdj20.total / 20, true)} HT à 20 personnes, ${eur(pdj50.total / 50, true)} HT à 50, livraison comprise, parce que la livraison de 29 € HT se répartit sur davantage de convives.</p>

      <h2>Pourquoi commander 48 h à l'avance ?</h2>
      <p>À partir de 50 personnes, les quantités de produits frais à préparer et à livrer justifient 48 h de préavis, contre la veille avant 14h pour les effectifs plus petits. Confirmez l'effectif, l'adresse et l'heure de livraison à ce moment-là.</p>

      <h2>Comment éviter la file d'attente à 50 personnes ?</h2>
      <p>Répartissez le buffet en deux points de service : un thermos de café et un de jus à chaque bout de table, avec les mini-viennoiseries en libre-service. Une table unique de 50 personnes crée la file, deux points la divisent par deux.</p>

      <h2>Quels régimes prévoir ?</h2>
      <p>Les brochettes de fruits sont vegan et sans gluten, les mini-viennoiseries pur beurre conviennent aux végétariens, et le banana bread sans gluten est à 26,90 € HT pour 6 à 8 personnes. Précisez le nombre de personnes concernées à la demande de devis.</p>

      <h2>Comment commander ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h, en indiquant l'effectif, la date et l'adresse. Livraison dès 6h30 à Paris et en Île-de-France, facturation entreprise avec TVA. Pour 100 personnes, un exemple chiffré figure dans le guide <a href="/journal/budget-petit-dejeuner-equipe-personnes">combien coûte un petit-déjeuner d'entreprise</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le petit-déjeuner pour 50 personnes</h2>
${faqHtml(FAQ_PDJ50)}
    `,
  },

  /* ───────── 4 ───────── */
  {
    ...BASE,
    slug: 'de-quoi-se-compose-petit-dejeuner-entreprise',
    titre: "De quoi se compose un petit-déjeuner d'entreprise ? Les cinq éléments et leurs quantités",
    metaTitle: "De quoi se compose un petit-déjeuner d'entreprise ?",
    extrait: "Un petit-déjeuner d'entreprise se compose de viennoiseries, d'un sucré, de fruits, de jus et d'une boisson chaude : quantités par personne et prix.",
    img: '/prod-cake-marbre.webp',
    relatedProducts: ['viennoiseries-melangees', 'madeleines-20', 'brochettes-fruits'],
    enBref: [
      '5 éléments : viennoiseries, mignardise sucrée, fruits, jus et boisson chaude.',
      'Par personne : 2 mini-viennoiseries, 1 madeleine ou part de cake, 1 brochette de fruits (au-delà de 15 personnes), 1 verre de jus.',
      'Boissons chaudes : 1 thermos d\'1 L pour 6 personnes, 4 café pour 1 thé.',
      'Gobelets, serviettes, sucres et touillettes sont compris ; formule Classique dès 8 € HT, complet sur devis.',
    ],
    about: ['Petit-déjeuner d\'entreprise', 'Composition', 'Formules'],
    faq: FAQ_COMPO,
    contenu: `
      <p>Un petit-déjeuner d'entreprise complet se compose de <strong>cinq éléments : des viennoiseries, un sucré, des fruits, un jus et une boisson chaude</strong>. Par personne, comptez 2 mini-viennoiseries, 1 mignardise, 1 brochette de fruits au-delà de 15 personnes, 1 verre de jus et 1 boisson chaude. Les gobelets, serviettes, sucres et touillettes sont compris.</p>

      <h2>Quels sont les cinq éléments d'un petit-déjeuner d'entreprise ?</h2>
      <table>
        <thead><tr><th>Élément</th><th>Quantité par personne</th><th>Rôle</th></tr></thead>
        <tbody>
          <tr><td><strong>Viennoiseries</strong></td><td>2 mini-viennoiseries (3 jusqu'à 10 personnes)</td><td>Le socle : se mangent debout, sans assiette</td></tr>
          <tr><td><strong>Sucré</strong></td><td>1 madeleine ; au-delà de 20 personnes, 1 à 2 cakes de 5 à 6 parts en complément</td><td>Varier les goûts</td></tr>
          <tr><td><strong>Fruits</strong></td><td>1 brochette de fruits frais, au-delà de 15 personnes</td><td>L'option fraîche, vegan et sans gluten</td></tr>
          <tr><td><strong>Jus</strong></td><td>1 verre de 20 cl, orange et pomme (1 L pour 5)</td><td>Boisson froide</td></tr>
          <tr><td><strong>Boisson chaude</strong></td><td>1 thermos d'1 L pour 6 personnes, 4 café pour 1 thé</td><td>Le point de rassemblement</td></tr>
        </tbody>
      </table>

      <h2>Qu'est-ce qui est compris avec le petit-déjeuner ?</h2>
      <p>Avec un petit-déjeuner, sont compris les serviettes, les gobelets, les sucres et les touillettes. La livraison de 29 € HT s'ajoute, avec un minimum de commande de 50 € HT.</p>

      <h2>Quelle différence entre la formule Classique et le petit-déjeuner complet ?</h2>
      <table>
        <thead><tr><th>Format</th><th>Prix par personne HT</th><th>Pour quelle occasion</th></tr></thead>
        <tbody>
          <tr><td>Viennoiseries et café</td><td>environ 6,50 €</td><td>Point d'équipe de 30 minutes</td></tr>
          <tr><td>Formule Classique</td><td>à partir de 8 €</td><td>Réunion interne, onboarding</td></tr>
          <tr><td>Petit-déjeuner complet</td><td>sur devis</td><td>Séminaire, réunion d'équipe élargie</td></tr>
          <tr><td>Sur mesure</td><td>sur devis</td><td>CODIR, accueil client</td></tr>
        </tbody>
      </table>
      <p>Pour le détail du budget selon l'effectif, voir <a href="/journal/budget-petit-dejeuner-equipe-personnes">combien coûte un petit-déjeuner d'entreprise</a>.</p>

      <h2>À quoi ressemble un petit-déjeuner pour 20 personnes ?</h2>
      <p>Pour 20 personnes : 40 mini-viennoiseries (2 plateaux de 30), 20 madeleines, 20 brochettes de fruits, 4 litres de jus et 4 thermos, soit ${eur(pdj20.total, true)} HT livraison comprise. Le détail est dans le guide <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">petit-déjeuner pour 20 personnes</a>.</p>

      <h2>Peut-on ajouter du salé ou adapter aux régimes ?</h2>
      <p>Oui : du salé se commande en complément, sur devis (voir le guide <a href="/journal/petit-dejeuner-sale-entreprise-pains-brioches-paris">petit-déjeuner salé</a>). Pour les régimes, les brochettes de fruits sont vegan et sans gluten, et le banana bread sans gluten est à 26,90 € HT pour 6 à 8 personnes.</p>

      <h2>Pourquoi des mini-viennoiseries ?</h2>
      <p>Elles se mangent en deux bouchées, sans assiette, et chacun peut goûter plusieurs variétés : voir <a href="/journal/pourquoi-mini-viennoiseries-petit-dejeuner-entreprise">pourquoi des mini-viennoiseries au petit-déjeuner d'entreprise</a>.</p>

      <h2>Comment commander ?</h2>
      <p>Composez le petit-déjeuner dans les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a> ou demandez un <a href="/devis">devis</a> sous 24 h. Commande jusqu'à la veille à 14h, livraison dès 6h30 à Paris et en Île-de-France.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur la composition d'un petit-déjeuner</h2>
${faqHtml(FAQ_COMPO)}
    `,
  },

  /* ───────── 5 ───────── */
  {
    ...BASE,
    slug: 'pourquoi-mini-viennoiseries-petit-dejeuner-entreprise',
    titre: "Pourquoi des mini-viennoiseries pour un petit-déjeuner d'entreprise ? Cinq raisons",
    metaTitle: 'Pourquoi des mini-viennoiseries au petit-déjeuner ?',
    extrait: "Pourquoi on préfère les mini-viennoiseries au petit-déjeuner d'entreprise : cinq raisons, 2 par personne, 1,63 € HT la pièce.",
    img: '/prod-viennoiseries.webp',
    relatedProducts: ['viennoiseries-melangees', 'viennoiseries-duo', 'madeleines-20'],
    enBref: [
      'On préfère les mini-viennoiseries parce qu\'elles se mangent en deux bouchées, debout, sans assiette ni couteau.',
      'Quantité : 2 par personne, 3 jusqu\'à 10 personnes ; un plateau de 30 sert 10 à 15 personnes.',
      'Prix : 48,90 € HT le plateau de 30, soit 1,63 € HT la pièce et 3,26 € HT pour 2.',
      'Pour l\'après-midi, le goûter se compose de mignardises sucrées, dès 6 € HT par personne.',
    ],
    about: ['Mini-viennoiseries', 'Petit-déjeuner d\'entreprise', 'Quantités par personne'],
    faq: FAQ_MINI,
    contenu: `
      <p>On préfère les mini-viennoiseries au petit-déjeuner d'entreprise parce qu'elles <strong>se mangent en deux bouchées, debout, sans assiette ni couteau</strong>, et qu'elles permettent de goûter plusieurs variétés. À raison de 2 par personne, un plateau de 30 coûte 48,90 € HT, soit 1,63 € HT la pièce.</p>

      <h2>Pourquoi les mini-viennoiseries conviennent-elles au petit-déjeuner d'entreprise ?</h2>
      <ol>
        <li><strong>Elles se mangent debout.</strong> Un petit-déjeuner d'équipe se tient autour d'une table haute ou d'un coin café : une pièce en deux bouchées évite l'assiette, le couteau et les miettes sur le clavier.</li>
        <li><strong>Elles permettent de goûter plusieurs variétés.</strong> Un plateau mêle mini croissants, mini pains au chocolat et mini pains aux raisins : chacun prend ce qu'il aime, sans entamer une grande viennoiserie qu'il ne finira pas.</li>
        <li><strong>Elles règlent mieux les quantités.</strong> Avec des pièces petites, on compte 2 par personne, et 3 pour un groupe de 10 personnes ou moins. L'ajustement se fait à la pièce, pas à la viennoiserie entière.</li>
        <li><strong>Elles s'adaptent aux plateaux.</strong> Un plateau de 30 mini-viennoiseries sert 10 à 15 personnes : pour 20 personnes, 2 plateaux livrent 60 pièces, dont 20 de marge.</li>
        <li><strong>Elles laissent de la place au reste.</strong> Avec une madeleine, des fruits et un jus, deux petites pièces suffisent : l'ensemble reste équilibré sans que chacun se sente obligé de tout finir.</li>
      </ol>

      <h2>Combien de mini-viennoiseries par personne ?</h2>
      <p>Comptez <strong>2 mini-viennoiseries par personne</strong>, et <strong>3 jusqu'à 10 personnes</strong>. Le tableau donne le nombre de plateaux de 30 pièces.</p>
      <table>
        <thead><tr><th>Personnes</th><th>Mini-viennoiseries</th><th>Plateaux de 30</th><th>Prix HT</th></tr></thead>
        <tbody>
${[10, 20, 30, 50, 100].map(n => { const v = n * (n <= 10 ? 3 : 2); const p = Math.ceil(v / 30); return `          <tr><td>${n}</td><td>${v}</td><td>${p}</td><td>${eur(p * 48.9, true)}</td></tr>` }).join('\n')}
        </tbody>
      </table>
      <p>Le détail par contexte (réunion, séminaire, accueil) est dans le guide <a href="/journal/combien-viennoiseries-par-personne">combien de mini-viennoiseries par personne</a>.</p>

      <h2>Combien coûte une mini-viennoiserie ?</h2>
      <p>Un plateau de 30 mini-viennoiseries pur beurre coûte <strong>48,90 € HT</strong>, soit <strong>1,63 € HT la pièce</strong>. Deux pièces par personne représentent 3,26 € HT, et trois pièces 4,89 € HT.</p>

      <h2>Quand préférer des viennoiseries classiques ?</h2>
      <p>Pour un petit-déjeuner de direction, un accueil client ou un brunch, on complète ou on remplace les mini-viennoiseries par une sélection élargie (pâtisseries, yaourts, salé), sur devis. Voir le guide <a href="/journal/petit-dejeuner-prestige-entreprise-paris">petit-déjeuner de prestige</a>.</p>

      <h2>Et pour un goûter l'après-midi ?</h2>
      <p>Le goûter se compose plutôt de mignardises sucrées (madeleines, cookies, cakes, brochettes de fruits). Voir les <a href="/creations/pauses-gourmandes">pauses gourmandes</a>, dès 6 € HT par personne.</p>

      <h2>Comment commander ?</h2>
      <p>Composez votre petit-déjeuner dans les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a> ou demandez un <a href="/devis">devis</a> sous 24 h. Commande jusqu'à la veille à 14h, livraison dès 6h30 à Paris et en Île-de-France. Pour voir la composition complète, lisez <a href="/journal/de-quoi-se-compose-petit-dejeuner-entreprise">de quoi se compose un petit-déjeuner d'entreprise</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur les mini-viennoiseries</h2>
${faqHtml(FAQ_MINI)}
    `,
  },

  /* ───────── 6 ───────── */
  {
    ...BASE,
    slug: 'cocktail-dejeunatoire-entreprise-pieces-par-personne-budget',
    titre: 'Cocktail déjeunatoire : combien de pièces par personne et quel budget en entreprise ?',
    metaTitle: 'Cocktail déjeunatoire : pièces par personne et budget',
    extrait: `Cocktail déjeunatoire : 12 à 14 pièces par personne, 40,90 € HT en La Réception. Budget pour 20, 50 et 100 personnes.`,
    img: '/cocktail-dinatoire.webp',
    relatedProducts: ['macarons', 'brochettes-fruits'],
    enBref: [
      'Un cocktail déjeunatoire remplace le déjeuner : 12 à 14 pièces par personne, servies debout.',
      'La Réception : 12 pièces (9 salées, 3 sucrées) à 40,90 € HT par personne, plus la livraison de 29 € HT.',
      `Budget avec jus, eau et livraison : ${eur(dej20.sans, true)} HT pour 20 personnes, ${eur(dej50.sans, true)} HT pour 50, ${eur(dej100.sans, true)} HT pour 100.`,
      'Salé halal et sans porc, carte sans alcool ; commande jusqu\'à la veille à 14h.',
    ],
    about: ['Cocktail déjeunatoire', 'Cocktail d\'entreprise', 'Nombre de pièces par personne'],
    faq: FAQ_DEJ,
    contenu: `
      <p>Un cocktail déjeunatoire remplace le déjeuner : comptez <strong>12 à 14 pièces par personne</strong>, servies debout. La formule La Réception compte 12 pièces (9 salées, 3 sucrées) à <strong>40,90 € HT par personne</strong>, soit ${eur(dej50.sans, true)} HT pour 50 personnes avec jus, eau et livraison.</p>

      <h2>Qu'est-ce qu'un cocktail déjeunatoire ?</h2>
      <p>Un cocktail déjeunatoire est un repas debout composé de pièces individuelles, salées puis sucrées, servi à l'heure du déjeuner. Il remplace un déjeuner assis : les invités circulent, échangent et se servent à leur rythme, sans plateau repas ni service à table.</p>

      <h2>Combien de pièces par personne pour un cocktail déjeunatoire ?</h2>
      <p>Comptez <strong>12 à 14 pièces par personne</strong> pour un déjeunatoire, contre 6 à 8 pour un simple apéritif et 16 à 18 pour un dînatoire.</p>
      <table>
        <thead><tr><th>Format</th><th>Pièces par personne</th><th>Formule L'Écrin</th><th>Prix par personne HT</th></tr></thead>
        <tbody>
          <tr><td>Apéritif</td><td>6 à 8</td><td>L'Invitation, 8 pièces</td><td>29,90 €</td></tr>
          <tr><td><strong>Déjeunatoire</strong></td><td><strong>12 à 14</strong></td><td><strong>La Réception, 12 pièces</strong></td><td><strong>40,90 €</strong></td></tr>
          <tr><td>Dînatoire</td><td>16 à 18</td><td>La Célébration, 16 pièces</td><td>51,90 €</td></tr>
        </tbody>
      </table>
      <p>Pour le détail des formats, voir le guide <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>.</p>

      <h2>Combien coûte un cocktail déjeunatoire pour 20, 50 ou 100 personnes ?</h2>
      <p>Le tableau compte La Réception à 40,90 € HT par personne, plus les boissons sans alcool (1 litre de jus pour 4 personnes, 1 bouteille d'eau de 75 cl pour 5) et la livraison de 29 € HT.</p>
      <table>
        <thead><tr><th>Personnes</th><th>La Réception</th><th>Jus et eau</th><th>Livraison</th><th>Total HT</th><th>Par personne</th></tr></thead>
        <tbody>
${[dej20, dej50, dej100].map(c => `          <tr><td>${c.n}</td><td>${eur(c.pieces, true)}</td><td>${eur(c.b.coutJus + c.b.coutEau, true)}</td><td>${eur(LIV, true)}</td><td><strong>${eur(c.sans, true)}</strong></td><td>${eur(c.sans / c.n, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Un Chardonnay 0 % pour trinquer (1 flûte par personne, 6 flûtes par bouteille de 75 cl à 16,90 € HT) ajoute ${eur(dej20.b.coutChard, true)} pour 20 personnes, ${eur(dej50.b.coutChard, true)} pour 50 et ${eur(dej100.b.coutChard, true)} pour 100.</p>

      <h2>Quelle différence entre un cocktail déjeunatoire et un cocktail dînatoire ?</h2>
      <p>Le nombre de pièces. Le déjeunatoire, de 12 à 14 pièces, remplace le déjeuner ; le dînatoire, de 16 à 18, remplace le dîner. Pour une soirée, voir <a href="/journal/cocktail-dinatoire-pour-20-personnes-quantites-budget">cocktail dînatoire pour 20 personnes</a> et <a href="/journal/cocktail-aperitif-dinatoire-buffet-difference-que-choisir">cocktail, apéritif dînatoire ou buffet</a>.</p>

      <h2>Le cocktail est-il halal et sans alcool ?</h2>
      <p>Les pièces salées sont halal et sans porc, et la carte est sans alcool, sans supplément. Nous ne revendiquons pas de certification halal délivrée par un organisme. Les options végétariennes, vegan et sans gluten se précisent à la demande de devis, car la composition des formules est fixe.</p>

      <h2>Comment commander un cocktail déjeunatoire ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h, ou découvrez les <a href="/creations/cocktails">formules cocktail</a>. Les pièces sont livrées dressées et prêtes à servir. Commande jusqu'à la veille à 14h, ou 48 h à l'avance à partir de 50 personnes, avec une livraison dès 6h30.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le cocktail déjeunatoire</h2>
${faqHtml(FAQ_DEJ)}
    `,
  },

  /* ───────── 7 ───────── */
  {
    ...BASE,
    isoModified: '2026-10-24',
    slug: 'cocktail-dinatoire-pour-20-personnes-quantites-budget',
    titre: 'Cocktail dînatoire pour 20 personnes : combien de pièces et quel budget ?',
    metaTitle: 'Cocktail dînatoire pour 20 personnes : pièces et budget',
    extrait: `Pour 20 personnes : 16 à 18 pièces chacune, soit 320 à 360. La Célébration revient à ${eur(din20.sans, true)} HT avec boissons et livraison.`,
    img: '/cocktail-dinatoire.webp',
    relatedProducts: ['macarons', 'brochettes-fruits'],
    enBref: [
      "Chez L'Écrin Traiteur, un cocktail dînatoire pour 20 personnes compte 16 à 18 pièces par personne, soit 320 à 360 pièces ; La Célébration en compte 16 (12 salées, 4 sucrées).",
      `Chez L'Écrin Traiteur, le budget est de ${eur(din20.sans, true)} HT avec jus, eau et livraison, soit ${eur(din20.sans / 20, true)} HT par personne, ou ${eur(din20.avec, true)} HT avec un Chardonnay 0 %.`,
      `Version plus courte chez L'Écrin Traiteur, en La Réception (12 pièces) : ${eur(din20Reception.sans, true)} HT.`,
      `Boissons prévues par L'Écrin Traiteur pour 20 personnes : ${din20.b.jus} L de jus et ${din20.b.eau} bouteilles d'eau de 75 cl ; salé halal et sans porc, carte sans alcool.`,
    ],
    about: ['Cocktail dînatoire', 'Apéritif dînatoire', 'Cocktail d\'entreprise'],
    faq: FAQ_DIN20,
    contenu: `
      <p>Chez L'Écrin Traiteur, un apéritif dînatoire pour 20 personnes coûte de <strong>${eur(din20Invitation.sans, true)} à ${eur(din20.sans, true)} HT</strong> avec jus, eau et livraison, selon que vous servez 8 ou 16 pièces par personne. Le cocktail dînatoire de L'Écrin Traiteur pour 20 personnes compte <strong>16 à 18 pièces par personne, soit 320 à 360 pièces</strong>. La formule La Célébration de L'Écrin Traiteur, de 16 pièces à 51,90 € HT par personne, revient à <strong>${eur(din20.sans, true)} HT</strong> avec jus, eau et livraison, soit ${eur(din20.sans / 20, true)} HT par personne.</p>

      <h2>Combien de pièces pour un cocktail dînatoire de 20 personnes ?</h2>
      <p>Comptez 16 à 18 pièces par personne, car le dînatoire remplace le dîner : 320 pièces au minimum pour 20 invités. La Célébration compte 16 pièces par personne, dont 12 salées et 4 sucrées, dressées et livrées prêtes à servir.</p>

      <h2>Combien coûte un cocktail dînatoire pour 20 personnes ?</h2>${tableCocktail(din20)}
      <p>Les boissons suivent la règle de 1 litre de jus pour 4 personnes et 1 bouteille d'eau de 75 cl pour 5. Le détail des formules est sur la page <a href="/creations/cocktails">cocktails</a>.</p>

      <h2>Comment faire un cocktail ou un apéritif dînatoire pas cher pour 20 personnes ?</h2>
      <p>Choisissez La Réception, de 12 pièces à 40,90 € HT par personne : <strong>${eur(din20Reception.sans, true)} HT</strong> avec jus, eau et livraison, soit ${eur(din20Reception.sans / 20, true)} HT par personne, ${eur(din20.sans - din20Reception.sans, true)} de moins qu'en La Célébration. Cette formule convient à un moment qui dure moins longtemps ou qui suit un déjeuner. Pour les budgets serrés, voir <a href="/journal/cocktail-dinatoire-pas-cher-entreprise-budget">cocktail dînatoire pas cher</a>.</p>
      <table>
        <thead><tr><th>Formule</th><th>Pièces par personne</th><th>Total HT avec jus, eau et livraison</th><th>Par personne</th></tr></thead>
        <tbody>
${[din20Invitation, din20Reception, din20].map(c => `          <tr><td>${c.f.nom}</td><td>${c.f.pieces}</td><td>${eur(c.sans, true)}</td><td>${eur(c.sans / 20, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>L'Invitation, à 8 pièces, convient à un apéritif d'une heure et demie à deux heures, pas à un dîner. Pour choisir, voir <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>, nos <a href="/journal/idees-pieces-cocktail-entreprise">idées de pièces cocktail</a> et le guide de l'<a href="/journal/traiteur-afterwork-pot-depart-entreprise-paris">afterwork et du pot de départ</a>.</p>

      <h2>Quelles boissons prévoir pour 20 personnes ?</h2>
      <p>Prévoyez ${din20.b.jus} litres de jus (orange et pomme), ${din20.b.eau} bouteilles d'eau de 75 cl et, en option, ${din20.b.chard} bouteilles de Chardonnay 0 % pour trinquer. Toute la carte est sans alcool. Voir le guide <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">combien de boissons par personne</a>.</p>

      <h2>Le cocktail est-il halal ?</h2>
      <p>Les pièces salées sont halal et sans porc, et la carte est sans alcool, sans supplément. Nous ne revendiquons pas de certification halal délivrée par un organisme. La composition des formules est fixe : précisez les besoins végétariens, vegan ou sans gluten à la demande de devis.</p>

      <h2>Comment commander ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h. Commande jusqu'à la veille à 14h, livraison dès 6h30 à Paris et en Île-de-France, facturation entreprise avec TVA. Pour 30 personnes, voir <a href="/journal/cocktail-dinatoire-pour-30-personnes-quantites-budget">cocktail dînatoire pour 30 personnes</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le cocktail dînatoire pour 20 personnes</h2>
${faqHtml(FAQ_DIN20)}
    `,
  },

  /* ───────── 8 ───────── */
  {
    ...BASE,
    slug: 'cocktail-dinatoire-pour-30-personnes-quantites-budget',
    titre: 'Cocktail dînatoire pour 30 personnes : combien de pièces et quel budget ?',
    metaTitle: 'Cocktail dînatoire pour 30 personnes : pièces et budget',
    extrait: `Pour 30 personnes : 16 à 18 pièces chacune, soit 480 à 540. La Célébration revient à ${eur(din30.sans, true)} HT avec boissons et livraison.`,
    img: '/cocktail-prestige.webp',
    relatedProducts: ['macarons', 'brochettes-fruits'],
    enBref: [
      "Chez L'Écrin Traiteur, un cocktail dînatoire pour 30 personnes compte 16 à 18 pièces par personne, soit 480 à 540 pièces ; La Célébration en compte 16 (12 salées, 4 sucrées).",
      `Chez L'Écrin Traiteur, le budget est de ${eur(din30.sans, true)} HT avec jus, eau et livraison, soit ${eur(din30.sans / 30, true)} HT par personne, ou ${eur(din30.avec, true)} HT avec un Chardonnay 0 %.`,
      `Version plus courte chez L'Écrin Traiteur, en La Réception (12 pièces) : ${eur(din30Reception.sans, true)} HT.`,
      `Boissons prévues par L'Écrin Traiteur pour 30 personnes : ${din30.b.jus} L de jus et ${din30.b.eau} bouteilles d'eau de 75 cl ; salé halal et sans porc, carte sans alcool.`,
    ],
    about: ['Cocktail dînatoire', 'Apéritif dînatoire', 'Cocktail d\'entreprise'],
    faq: FAQ_DIN30,
    contenu: `
      <p>Chez L'Écrin Traiteur, un cocktail dînatoire pour 30 personnes demande <strong>16 à 18 pièces par personne, soit 480 à 540 pièces</strong>. La formule La Célébration de L'Écrin Traiteur revient à <strong>${eur(din30.sans, true)} HT</strong> avec jus, eau et livraison, soit ${eur(din30.sans / 30, true)} HT par personne.</p>

      <h2>Combien de pièces pour un cocktail dînatoire de 30 personnes ?</h2>
      <p>Comptez 16 à 18 pièces par personne : 480 pièces au minimum pour 30 invités. La Célébration compte 16 pièces par personne, dont 12 salées et 4 sucrées, soit 360 pièces salées et 120 sucrées.</p>

      <h2>Combien coûte un cocktail dînatoire pour 30 personnes ?</h2>${tableCocktail(din30)}
      <p>Comparé à 20 personnes (${eur(din20.sans, true)} HT), le budget augmente de ${eur(din30.sans - din20.sans, true)} : le prix par personne baisse légèrement, de ${eur(din20.sans / 20, true)} à ${eur(din30.sans / 30, true)} HT, parce que la livraison de 29 € HT se répartit sur plus de convives.</p>

      <h2>Quel budget pour un apéritif dînatoire de 30 personnes plus court ?</h2>
      <p>En La Réception (12 pièces à 40,90 € HT par personne) : <strong>${eur(din30Reception.sans, true)} HT</strong> avec jus, eau et livraison, soit ${eur(din30Reception.sans / 30, true)} HT par personne. Pour comparer les formats, voir <a href="/journal/cocktail-dejeunatoire-entreprise-pieces-par-personne-budget">cocktail déjeunatoire</a>.</p>

      <h2>Quelles boissons prévoir pour 30 personnes ?</h2>
      <p>Prévoyez ${din30.b.jus} litres de jus (orange et pomme), ${din30.b.eau} bouteilles d'eau de 75 cl et, en option, ${din30.b.chard} bouteilles de Chardonnay 0 % pour trinquer. La carte est sans alcool.</p>

      <h2>Faut-il prévoir du personnel de service ?</h2>
      <p>Les pièces sont livrées dressées et prêtes à servir. Un maître d'hôtel peut s'ajouter, sur devis, pour réapprovisionner et débarrasser. Voir le guide <a href="/journal/combien-maitres-hotel-evenement-entreprise">combien de maîtres d'hôtel pour un événement d'entreprise</a>.</p>

      <h2>Le cocktail est-il halal ?</h2>
      <p>Les pièces salées sont halal et sans porc, et la carte est sans alcool. Nous ne revendiquons pas de certification halal délivrée par un organisme. Les options végétariennes, vegan et sans gluten se précisent à la demande de devis.</p>

      <h2>Comment commander ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h, ou découvrez les <a href="/creations/cocktails">formules cocktail</a>. Commande jusqu'à la veille à 14h, livraison dès 6h30. Pour 50 personnes, voir <a href="/journal/cocktail-entreprise-50-personnes">cocktail d'entreprise pour 50 personnes</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le cocktail dînatoire pour 30 personnes</h2>
${faqHtml(FAQ_DIN30)}
    `,
  },

  /* ───────── 9 ───────── */
  {
    ...BASE,
    isoModified: '2026-10-24',
    slug: 'cocktail-aperitif-dinatoire-buffet-difference-que-choisir',
    titre: 'Cocktail, apéritif dînatoire ou buffet : quelle différence et que choisir en entreprise ?',
    metaTitle: 'Cocktail, apéritif dînatoire ou buffet : que choisir ?',
    extrait: 'Cocktail ou apéritif dînatoire : même format, pas le même nombre de pièces. Buffet à partager, plateaux repas : le tableau pour choisir, avec les prix.',
    img: '/cocktail-signature.webp',
    relatedProducts: ['macarons'],
    enBref: [
      'Cocktail dînatoire et apéritif dînatoire désignent le même format : un repas debout fait de pièces individuelles.',
      'Pièces par personne : 6 à 8 (apéritif), 12 à 14 (déjeunatoire), 16 à 18 (dînatoire).',
      'Prix HT par personne : cocktail de 29,90 à 51,90 €, buffet à partager de 34,90 à 37,90 €, plateaux repas dès 28,90 €.',
      'Cocktail debout et convivial, buffet à partager pour une équipe assise, plateaux repas pour une réunion de travail.',
    ],
    about: ['Cocktail dînatoire', 'Buffet d\'entreprise', 'Choisir un format'],
    faq: FAQ_DIFF,
    contenu: `
      <p>Chez L'Écrin Traiteur, un cocktail coûte de 29,90 à 51,90 € HT par personne (8 à 16 pièces), un buffet à partager de 34,90 à 37,90 € HT et un plateau repas dès 28,90 € HT ; pour un <strong>buffet déjeunatoire</strong> servi debout, comptez 12 à 14 pièces par personne. Un <strong>cocktail dînatoire</strong> et un <strong>apéritif dînatoire</strong> désignent le même format : un repas debout fait de pièces individuelles. Ce qui change, c'est le nombre de pièces : 6 à 8 par personne pour un apéritif, 12 à 14 pour un déjeunatoire, 16 à 18 pour un dînatoire. Le buffet à partager, lui, se sert en plats à table.</p>

      <h2>Quelle est la différence entre un cocktail et un apéritif dînatoire ?</h2>
      <p>Dans le langage courant, « apéritif dînatoire » est le terme que l'on tape le plus souvent pour désigner un cocktail dînatoire. Les deux remplacent un dîner debout, avec des pièces individuelles salées puis sucrées. Pour l'entreprise, on parle plutôt de cocktail : le terme précise le format et le nombre de pièces.</p>

      <h2>Combien de pièces pour un apéritif, un déjeunatoire et un dînatoire ?</h2>
      <table>
        <thead><tr><th>Format</th><th>Moment</th><th>Pièces par personne</th><th>Formule L'Écrin</th><th>Prix par personne HT</th></tr></thead>
        <tbody>
          <tr><td>Apéritif</td><td>Avant ou après une réunion</td><td>6 à 8</td><td>L'Invitation, 8 pièces</td><td>29,90 €</td></tr>
          <tr><td>Déjeunatoire</td><td>À l'heure du déjeuner</td><td>12 à 14</td><td>La Réception, 12 pièces</td><td>40,90 €</td></tr>
          <tr><td>Dînatoire</td><td>En soirée</td><td>16 à 18</td><td>La Célébration, 16 pièces</td><td>51,90 €</td></tr>
        </tbody>
      </table>
      <p>Les budgets détaillés sont dans les guides <a href="/journal/cocktail-dejeunatoire-entreprise-pieces-par-personne-budget">cocktail déjeunatoire</a> et <a href="/journal/cocktail-dinatoire-pour-20-personnes-quantites-budget">cocktail dînatoire pour 20 personnes</a>.</p>

      <h2>Qu'est-ce qu'un buffet déjeunatoire, et combien coûte-t-il ?</h2>
      <p>Un buffet déjeunatoire est un déjeuner servi en buffet qui remplace le repas de midi. Debout, c'est un cocktail déjeunatoire de 12 à 14 pièces par personne ; assis, un buffet à partager servi en plats. Le tableau donne le prix pour 20 personnes, avec une livraison de 29 € HT.</p>
      <table>
        <thead><tr><th>Format</th><th>Prix par personne HT</th><th>Pour 20 personnes HT</th></tr></thead>
        <tbody>
          <tr><td>Cocktail déjeunatoire, La Réception (12 pièces)</td><td>40,90 €</td><td>${eur(dej20.sans, true)}, jus, eau et livraison compris</td></tr>
          <tr><td>Buffet à partager</td><td>34,90 à 37,90 €</td><td>${eur(20 * 34.9 + LIV)} à ${eur(20 * 37.9 + LIV)}, livraison comprise, boissons en plus</td></tr>
          <tr><td>Plateaux repas</td><td>dès 28,90 €</td><td>dès ${eur(20 * 28.9 + LIV)}, livraison comprise</td></tr>
        </tbody>
      </table>
      <p>Pour les quantités d'un buffet servi froid, voir <a href="/journal/buffet-froid-entreprise-quantites-par-personne">buffet froid : quantités par personne</a> ; pour l'organisation complète, notre <a href="/journal/buffet-entreprise-guide-complet-paris">guide du buffet d'entreprise</a> ; et la carte des <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Cocktail, buffet à partager ou plateaux repas : lequel choisir ?</h2>
      <table>
        <thead><tr><th>Format</th><th>Comment on mange</th><th>Prix par personne HT</th><th>Idéal pour</th></tr></thead>
        <tbody>
          <tr><td><strong>Cocktail</strong></td><td>Debout, pièce par pièce, en circulant</td><td>29,90 à 51,90 €</td><td>Inauguration, afterwork, soirée, pot</td></tr>
          <tr><td><strong>Buffet à partager</strong></td><td>Plats et salades à partager, assis ou mixte</td><td>34,90 à 37,90 €</td><td>Équipe qui reste assise, déjeuner de travail</td></tr>
          <tr><td><strong>Plateaux repas</strong></td><td>Un plateau individuel</td><td>dès 28,90 €</td><td>Réunion de travail, formation</td></tr>
        </tbody>
      </table>
      <p>Le buffet à partager est calibré pour 8 à 12 convives par menu. Pour trancher entre les deux, lisez <a href="/journal/buffet-a-partager-ou-cocktail-entreprise-paris">buffet à partager ou cocktail d'entreprise</a>.</p>

      <h2>Quel est le meilleur format selon l'occasion ?</h2>
      <ul>
        <li><strong>Une inauguration ou une réception :</strong> un cocktail, de 12 à 16 pièces selon la durée. Voir <a href="/journal/organiser-inauguration-entreprise-deroule-budget-traiteur">organiser une inauguration</a>.</li>
        <li><strong>Un afterwork :</strong> le cocktail de 8 pièces, 29,90 € HT par personne. Voir <a href="/journal/idees-afterwork-entreprise-formats-budget">idées d'afterwork</a>.</li>
        <li><strong>Un déjeuner d'équipe :</strong> un plateau repas ou un buffet à partager. Voir <a href="/journal/idees-dejeuner-bureau-formats-budget">idées de déjeuner au bureau</a>.</li>
      </ul>

      <h2>Les formats sont-ils halal et sans alcool ?</h2>
      <p>Les pièces salées sont halal et sans porc, et la carte est sans alcool, sans supplément. Nous ne revendiquons pas de certification halal délivrée par un organisme.</p>

      <h2>Comment commander ?</h2>
      <p>Les trois formats se composent sur la page <a href="/creations/cocktails">cocktails et buffets</a> : <a href="/creations/cocktails/classique">L'Invitation</a> à 8 pièces pour un apéritif, <a href="/creations/cocktails/signature">La Réception</a> à 12 pièces en déjeunatoire, <a href="/creations/cocktails/prestige">La Célébration</a> à 16 pièces en dînatoire. Demandez un <a href="/devis">devis</a> sous 24 h. Commande jusqu'à la veille à 14h, livraison dès 6h30 à Paris et en Île-de-France, avec 29 € HT de livraison et un minimum de commande de 50 € HT.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur les formats de cocktail et de buffet</h2>
${faqHtml(FAQ_DIFF)}
    `,
  },
]
