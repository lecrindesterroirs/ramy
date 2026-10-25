// Guides « cocktail de fin d'année » (24 octobre 2026) : 50 et 80 personnes en dînatoire, cocktail de Noël.
// Contexte : les premières demandes venues de ChatGPT (octobre 2026) sont des cocktails d'entreprise
// de fin novembre et début décembre.
//
// Sources des chiffres :
//   - lib/calculsPrix.js : FORMULES (29,90 / 40,90 / 51,90 € HT), cocktail(n, f) (.sans = pièces + jus + eau
//     + livraison ; .avec = + Chardonnay 0 %), LIV (29 € HT) ;
//   - app/creations/cocktails/data.js : composition des formules (pièces salées et sucrées) ;
//   - FICHE-VERITE.md (partie « Certain ») : commande la veille 14h, 48 h à partir de 50 personnes, minimum 50 € HT,
//     tout halal et sans porc sur le salé, sans alcool ; Options (vaisselle) autorisé le 17/10/2026 ;
//   - lib/journalBesoins.js et lib/journalService.js : maître d'hôtel 250 € HT pour 6 heures, 1 pour 20 à 40 invités debout.
// Aucun montant n'est recopié : tout est calculé ci-dessous. Aucun nom de client, de chef ni de sous-traitant cuisine.

import { LIV, FORMULES, cocktail } from './calculsPrix'
import { eur, fr, faqHtml } from './journalQuestions'
import { FORMULES as CARTE } from '../app/creations/cocktails/data'
import { MINIMUM } from './prixEntree'

const DATE = '24 octobre 2026'
const ISO = '2026-10-24'
const BASE = { categorie: 'Conseils', date: DATE, isoDate: ISO, isoModified: ISO }

const MH = 250 // maître d'hôtel : 250 € HT pour 6 heures (même valeur que lib/journalBesoins.js)

const SIGNATURE = `<p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes. Calcul : pièces, jus, eau et une livraison de ${LIV} € HT, Paris et communes proches. Minimum de commande ${MINIMUM} € HT.</em></p>`

/* Composition des formules, lue dans le catalogue (clé du catalogue → clé de calculsPrix). */
const CLES = { invitation: 'classique', reception: 'signature', celebration: 'prestige' }
const carte = (k) => CARTE.find(f => f.key === CLES[k])
const nbSale = (k) => carte(k).sale.length
const nbSucre = (k) => carte(k).sucre.length
const propre = (s) => s.charAt(0) + s.slice(1).toLowerCase().replace(/ & /g, ' et ')
const listeMenu = (arr) => arr.map(propre).join(' ; ')

const prixChard = (c) => c.b.coutChard / c.b.chard
const K3 = ['invitation', 'reception', 'celebration']

/* Tableau détaillé d'un cocktail (même présentation que les guides 20 et 30 personnes). */
const tableCocktail = (c) => `
      <table>
        <thead><tr><th>Poste</th><th>Quantité</th><th>Total HT</th></tr></thead>
        <tbody>
          <tr><td>${c.f.nom}, ${c.f.pieces} pièces à ${eur(c.f.prix, true)} par personne</td><td>${c.n} personnes</td><td>${eur(c.pieces, true)}</td></tr>
          <tr><td>Jus (orange et pomme), 1 L pour 4 personnes</td><td>${c.b.jus} L</td><td>${eur(c.b.coutJus, true)}</td></tr>
          <tr><td>Eau, 1 bouteille de 75 cl pour 5 personnes</td><td>${c.b.eau}</td><td>${eur(c.b.coutEau, true)}</td></tr>
          <tr><td>Livraison</td><td>1</td><td>${eur(LIV, true)}</td></tr>
          <tr><td><strong>Total sans Chardonnay 0 %</strong></td><td></td><td><strong>${eur(c.sans, true)}</strong></td></tr>
          <tr><td>Option : Chardonnay 0 %, 1 flûte par personne (bouteille de 75 cl à ${eur(prixChard(c), true)})</td><td>${c.b.chard} bouteilles</td><td>${eur(c.b.coutChard, true)}</td></tr>
          <tr><td><strong>Total avec Chardonnay 0 %</strong></td><td></td><td><strong>${eur(c.avec, true)}</strong></td></tr>
        </tbody>
      </table>`

/* Tableau des trois formules pour un effectif : pièces, salé / sucré, total livré, par personne. */
const tableTroisFormules = (n) => `
      <table>
        <thead><tr><th>Formule</th><th>Pièces</th><th>Salées / sucrées</th><th>Total livré HT</th><th>Par personne HT</th></tr></thead>
        <tbody>
${K3.map(k => { const c = cocktail(n, FORMULES[k]); return `          <tr><td><strong>${c.f.nom}</strong> (${c.f.pieces} par personne)</td><td>${fr(n * c.f.pieces)}</td><td>${fr(n * nbSale(k))} / ${fr(n * nbSucre(k))}</td><td>${eur(c.sans, true)}</td><td>${eur(c.sans / n, true)}</td></tr>` }).join('\n')}
        </tbody>
      </table>`

/* ═════════════════════ 1 : cocktail dînatoire pour 50 personnes ═════════════════════ */
const d50 = cocktail(50, FORMULES.celebration)
const d55 = cocktail(55, FORMULES.celebration)
const d45 = cocktail(45, FORMULES.celebration)
const r50 = cocktail(50, FORMULES.reception)
const i50 = cocktail(50, FORMULES.invitation)

const FAQ_50 = [
  { q: 'Combien de pièces pour un cocktail dînatoire de 50 personnes ?', a: `Chez L'Écrin Traiteur, 16 à 18 pièces par personne, soit 800 à 900 pièces. La Célébration en compte 16 par personne : ${fr(50 * 16)} pièces, dont ${fr(50 * nbSale('celebration'))} salées et ${50 * nbSucre('celebration')} sucrées.` },
  { q: 'Quel budget pour un cocktail dînatoire de 50 personnes ?', a: `Chez L'Écrin Traiteur, ${eur(d50.sans, true)} HT en La Célébration avec jus, eau et livraison, soit ${eur(d50.sans / 50, true)} HT par personne. Avec un Chardonnay 0 % pour trinquer : ${eur(d50.avec, true)} HT.` },
  { q: 'Combien de boissons pour 50 personnes ?', a: `${d50.b.jus} litres de jus, ${d50.b.eau} bouteilles d'eau de 75 cl et, en option, ${d50.b.chard} bouteilles de Chardonnay 0 %, soit une flûte par personne. La carte est sans alcool.` },
  { q: 'Combien de temps à l\'avance commander pour 50 personnes ?', a: 'À partir de 50 personnes, la commande est ferme 48 h avant la livraison. Demandez le devis deux à trois semaines avant pour valider la formule et les régimes.' },
  { q: 'Faut-il un maître d\'hôtel pour 50 personnes ?', a: `Ce n'est pas obligatoire : les pièces arrivent dressées. Pour réapprovisionner et débarrasser, comptez 1 à 2 maîtres d'hôtel, à ${eur(MH)} HT chacun pour 6 heures.` },
]

/* ═════════════════════ 2 : cocktail dînatoire pour 80 personnes ═════════════════════ */
const d80 = cocktail(80, FORMULES.celebration)
const d90 = cocktail(90, FORMULES.celebration)
const r80 = cocktail(80, FORMULES.reception)
const mh80 = [Math.ceil(80 / 40), Math.ceil(80 / 20)] // 1 maître d'hôtel pour 20 à 40 invités debout
const d80Service = d80.sans + mh80[0] * MH
const menuSale = carte('celebration').sale
const menuSucre = carte('celebration').sucre

const FAQ_80 = [
  { q: 'Quel est le prix par personne d\'un cocktail dînatoire pour 80 personnes à Paris ?', a: `Chez L'Écrin Traiteur, ${eur(d80.sans / 80, true)} HT par personne en La Célébration (16 pièces), jus, eau et livraison compris, soit ${eur(d80.sans, true)} HT au total. En 12 pièces, La Réception revient à ${eur(r80.sans / 80, true)} HT par personne.` },
  { q: 'Combien de pièces pour 80 personnes ?', a: `16 à 18 pièces par personne pour un dînatoire, soit 1 280 à 1 440 pièces. La Célébration livre ${fr(80 * 16)} pièces : ${fr(80 * nbSale('celebration'))} salées et ${80 * nbSucre('celebration')} sucrées.` },
  { q: 'Combien de maîtres d\'hôtel pour 80 invités ?', a: `Pour un cocktail debout, 1 maître d'hôtel pour 20 à 40 invités : ${mh80[0]} à ${mh80[1]} pour 80 personnes. À ${eur(MH)} HT les 6 heures, cela représente ${eur(mh80[0] * MH)} à ${eur(mh80[1] * MH)} HT.` },
  { q: 'Quand commander un cocktail pour 80 personnes ?', a: 'La commande est ferme 48 h avant la livraison à partir de 50 personnes. Pour une date de fin novembre ou de décembre, demandez le devis trois à quatre semaines avant.' },
  { q: 'Le cocktail est-il halal et sans alcool ?', a: 'Les pièces salées sont halal et sans porc, la carte est sans alcool, sans supplément. Nous ne revendiquons pas de certification halal délivrée par un organisme.' },
]

/* ═════════════════════ 3 : cocktail de Noël ═════════════════════ */
const EFF = [30, 50, 100]
const noel = (n, k) => cocktail(n, FORMULES[k])
const c30 = noel(30, 'reception')
const c50 = noel(50, 'reception')
const c100 = noel(100, 'reception')

const FAQ_NOEL = [
  { q: 'Quel budget pour un cocktail de Noël d\'entreprise ?', a: `Chez L'Écrin Traiteur, de ${eur(noel(30, 'invitation').sans / 30, true)} à ${eur(noel(30, 'celebration').sans / 30, true)} HT par personne pour 30 personnes, jus, eau et livraison compris. Pour 50 personnes en La Réception (12 pièces) : ${eur(c50.sans, true)} HT.` },
  { q: 'Combien de pièces par personne pour un cocktail de Noël ?', a: '8 pièces pour un pot de fin de journée, 12 si le cocktail remplace le déjeuner ou ouvre une soirée courte, 16 pour un dînatoire qui remplace le dîner.' },
  { q: 'Quand commander le cocktail de Noël de l\'entreprise ?', a: 'Réservez la date en novembre. La commande devient ferme la veille à 14h en dessous de 50 personnes, et 48 h avant à partir de 50 personnes.' },
  { q: 'Que servir pour trinquer sans alcool ?', a: `Un Chardonnay Blanc de Blancs 0 % à ${eur(prixChard(c50), true)} HT la bouteille de 75 cl, une flûte par personne : ${c50.b.chard} bouteilles pour 50 personnes. Toute la carte est sans alcool.` },
  { q: 'Le cocktail de Noël est-il halal ?', a: 'Les pièces salées sont halal et sans porc, sans supplément. Nous ne revendiquons pas de certification halal délivrée par un organisme. Les options végétariennes, vegan et sans gluten se précisent au devis.' },
]

export const COCKTAIL_FIN_ARTICLES = [
  /* ───────── 1 ───────── */
  {
    ...BASE,
    slug: 'cocktail-dinatoire-50-personnes-quantites-budget',
    titre: 'Cocktail dînatoire pour 50 personnes : combien de pièces et quel budget ?',
    metaTitle: 'Cocktail dînatoire pour 50 personnes : pièces et budget',
    extrait: `Pour 50 personnes : 16 à 18 pièces chacune, soit 800 à 900. La Célébration revient à ${eur(d50.sans, true)} HT avec boissons et livraison chez L'Écrin Traiteur.`,
    img: '/cocktail-celebration.webp',
    relatedProducts: ['brochettes-fruits'],
    about: ['Cocktail dînatoire', 'Apéritif dînatoire', 'Cocktail d\'entreprise'],
    enBref: [
      `Chez L'Écrin Traiteur, un cocktail dînatoire pour 50 personnes compte 16 pièces par personne, soit ${fr(50 * 16)} pièces en La Célébration.`,
      `L'Écrin Traiteur le livre pour ${eur(d50.sans, true)} HT avec jus, eau et livraison, soit ${eur(d50.sans / 50, true)} HT par personne.`,
      `Chez L'Écrin Traiteur, la commande d'un cocktail de 50 personnes est ferme 48 h avant, et les pièces salées sont halal et sans porc.`,
    ],
    faq: FAQ_50,
    contenu: `
      <p>Chez L'Écrin Traiteur, un cocktail dînatoire pour 50 personnes demande <strong>16 à 18 pièces par personne, soit 800 à 900 pièces</strong>. La formule La Célébration de L'Écrin Traiteur, de 16 pièces à ${eur(FORMULES.celebration.prix, true)} HT par personne, revient à <strong>${eur(d50.sans, true)} HT</strong> avec jus, eau et livraison, soit ${eur(d50.sans / 50, true)} HT par personne.</p>

      <h2>Combien de pièces pour un cocktail dînatoire de 50 personnes ?</h2>
      <p>Le dînatoire remplace le dîner : comptez 16 pièces par personne au minimum, 18 si la soirée dépasse trois heures. Pour 50 invités, cela fait ${fr(50 * 16)} pièces. La Célébration en compte ${nbSale('celebration')} salées et ${nbSucre('celebration')} sucrées par personne, soit ${fr(50 * nbSale('celebration'))} pièces salées et ${50 * nbSucre('celebration')} sucrées. Le salé part d'abord, le sucré clôt la soirée.</p>

      <h2>Combien de temps dure un cocktail dînatoire ?</h2>
      <p>Comptez deux heures et demie à trois heures. Les 16 pièces de La Célébration sont calibrées pour cette durée : environ une pièce toutes les dix minutes, avec un pic dans la première heure. Au-delà de trois heures, passez à 18 pièces par personne en ajoutant des pièces salées au devis.</p>

      <h2>Quel budget selon la formule ?</h2>
      <p>Le tableau compte les pièces, les boissons sans alcool (1 litre de jus pour 4 personnes, 1 bouteille d'eau de 75 cl pour 5) et une livraison de ${LIV} € HT.</p>${tableTroisFormules(50)}
      <p>L'Invitation, à 8 pièces, convient à un pot d'une heure et demie, pas à un dîner. La Réception, à 12 pièces, tient pour une soirée courte qui suit un déjeuner : ${eur(d50.sans - r50.sans, true)} de moins qu'en La Célébration. Pour comparer avec un groupe plus petit, voir le <a href="/journal/cocktail-dinatoire-pour-30-personnes-quantites-budget">cocktail dînatoire pour 30 personnes</a>.</p>

      <h2>Le détail du budget en La Célébration</h2>${tableCocktail(d50)}
      <p>Le prix par personne de la formule ne change pas avec l'effectif. Seules la livraison et les bouteilles entamées se répartissent mieux quand le groupe grandit.</p>

      <h2>Et si l'effectif bouge ?</h2>
      <p>Chaque invité ajoute ${eur(FORMULES.celebration.prix, true)} HT de pièces, et les boissons suivent par paliers. À 45 personnes, le même cocktail revient à ${eur(d45.sans, true)} HT ; à 55 personnes, à ${eur(d55.sans, true)} HT. Confirmez l'effectif deux jours avant, en ajoutant 10 % si des invités de dernière minute sont possibles.</p>

      <h2>Quelles boissons prévoir pour 50 personnes ?</h2>
      <p>Prévoyez ${d50.b.jus} litres de jus (orange et pomme), ${d50.b.eau} bouteilles d'eau de 75 cl et, en option, ${d50.b.chard} bouteilles de Chardonnay 0 % pour trinquer, à raison d'une flûte par personne. La carte est sans alcool. Le guide <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">combien de boissons par personne</a> détaille les règles.</p>

      <h2>Comment organiser le service pour 50 personnes ?</h2>
      <ul>
        <li><strong>Deux points de buffet</strong> plutôt qu'un : à 50, une seule table crée une file.</li>
        <li><strong>Le salé en deux temps</strong> : la moitié à l'ouverture, le reste trente à quarante minutes plus tard.</li>
        <li><strong>Le sucré dans la dernière heure</strong>, avec le café si vous en servez.</li>
        <li><strong>Un ou deux maîtres d'hôtel</strong>, sur devis, pour réapprovisionner et débarrasser : ${eur(MH)} HT chacun pour 6 heures. Voir <a href="/journal/combien-maitres-hotel-evenement-entreprise">combien de maîtres d'hôtel pour un événement</a>.</li>
      </ul>

      <h2>Le cocktail est-il halal et sans alcool ?</h2>
      <p>Les pièces salées sont halal et sans porc, et la carte est sans alcool, sans supplément. Nous ne revendiquons pas de certification halal délivrée par un organisme. La composition des formules est fixe : précisez les besoins végétariens, vegan ou sans gluten à la demande de devis.</p>

      <h2>Comment réduire le budget ?</h2>
      <p>Confirmez l'effectif réel deux jours avant plutôt que d'arrondir large, et choisissez la formule selon l'horaire, pas selon l'effectif. Les autres leviers sont dans le guide <a href="/journal/cocktail-dinatoire-pas-cher-entreprise-budget">cocktail dînatoire pas cher</a>. Pour un cocktail de 50 personnes au déjeuner, voir <a href="/journal/cocktail-entreprise-50-personnes">cocktail d'entreprise pour 50 personnes</a>.</p>

      <h2>Comment commander ?</h2>
      <p>À partir de 50 personnes, la commande est ferme 48 h avant la livraison. Demandez un <a href="/devis">devis</a> sous 24 h, ou découvrez la formule <a href="/creations/cocktails/prestige">La Célébration</a> et les autres <a href="/creations/cocktails">formules cocktail</a>. Livraison à Paris et en Île-de-France, facture entreprise avec TVA. Pour un groupe plus grand, voir le <a href="/journal/cocktail-dinatoire-80-personnes-entreprise-paris">cocktail dînatoire pour 80 personnes</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le cocktail dînatoire pour 50 personnes</h2>
${faqHtml(FAQ_50)}
    `,
  },

  /* ───────── 2 ───────── */
  {
    ...BASE,
    slug: 'cocktail-dinatoire-80-personnes-entreprise-paris',
    titre: "Cocktail dînatoire d'entreprise pour 80 personnes à Paris : prix par personne, menu et organisation",
    metaTitle: 'Cocktail dînatoire 80 personnes à Paris : prix et menu',
    extrait: `Pour 80 personnes, un cocktail dînatoire livré au bureau revient à ${eur(d80.sans / 80, true)} HT par personne chez L'Écrin Traiteur, boissons et livraison comprises. Menu, quantités et service.`,
    img: '/cocktail-prestige.webp',
    relatedProducts: ['brochettes-fruits'],
    about: ['Cocktail dînatoire', 'Cocktail d\'entreprise', 'Traiteur Paris'],
    enBref: [
      `Chez L'Écrin Traiteur, un cocktail dînatoire de 16 pièces pour 80 personnes revient à ${eur(d80.sans / 80, true)} HT par personne, jus, eau et livraison compris.`,
      `L'Écrin Traiteur livre ${fr(80 * 16)} pièces au bureau pour ${eur(d80.sans, true)} HT, sur commande ferme 48 h avant.`,
      `Avec ${mh80[0]} maîtres d'hôtel à ${eur(MH)} HT chacun pour 6 heures, le cocktail de L'Écrin Traiteur pour 80 personnes atteint ${eur(d80Service, true)} HT.`,
    ],
    faq: FAQ_80,
    contenu: `
      <p>Chez L'Écrin Traiteur, un cocktail dînatoire d'entreprise pour 80 personnes à Paris revient à <strong>${eur(d80.sans / 80, true)} HT par personne</strong>, soit <strong>${eur(d80.sans, true)} HT</strong> livré au bureau, jus, eau et livraison compris. C'est la formule La Célébration : 16 pièces par personne, ${fr(80 * 16)} pièces au total, dressées et prêtes à servir.</p>

      <h2>Quel prix par personne pour 80 invités ?</h2>
      <p>Le prix par personne de la formule est fixe. Les boissons et la livraison ajoutent quelques euros par invité. Voici les trois formules pour 80 personnes, livraison et boissons sans alcool comprises.</p>${tableTroisFormules(80)}
      <p>Pour un dîner debout, prenez La Célébration. La Réception, à 12 pièces, convient si le cocktail dure moins de deux heures ou s'il suit un repas : ${eur(r80.sans, true)} HT, soit ${eur(d80.sans - r80.sans, true)} de moins.</p>

      <h2>Le budget ligne par ligne</h2>${tableCocktail(d80)}
      <p>Les boissons suivent nos règles de devis : 1 litre de jus pour 4 personnes, 1 bouteille d'eau de 75 cl pour 5, une flûte de Chardonnay 0 % par personne si vous trinquez. Pour les grilles complètes, voir le <a href="/journal/budget-cocktail-entreprise-paris">budget d'un cocktail d'entreprise à Paris</a>.</p>

      <h2>Quel menu pour un cocktail dînatoire de 80 personnes ?</h2>
      <p>La Célébration compte ${nbSale('celebration')} pièces salées et ${nbSucre('celebration')} sucrées par personne, soit ${fr(80 * nbSale('celebration'))} pièces salées et ${80 * nbSucre('celebration')} sucrées pour 80 invités.</p>
      <ul>
        <li><strong>Salé (${menuSale.length} pièces)</strong> : ${listeMenu(menuSale)}.</li>
        <li><strong>Sucré (${menuSucre.length} pièces)</strong> : ${listeMenu(menuSucre)}.</li>
      </ul>
      <p>Toutes les pièces salées sont halal et sans porc, sans alcool dans les recettes. Huit des douze pièces salées sont sans viande ni poisson : elles conviennent aux végétariens. Pour d'autres idées, voir <a href="/journal/idees-pieces-cocktail-entreprise">idées de pièces cocktail</a> et le guide <a href="/journal/cocktail-entreprise-halal-paris">cocktail d'entreprise halal</a>.</p>

      <h2>Comment se passe la livraison au bureau ?</h2>
      <ul>
        <li><strong>Délai</strong> : à partir de 50 personnes, la commande est ferme 48 h avant la livraison. Le devis arrive sous 24 h.</li>
        <li><strong>Livraison</strong> : par l'équipe de L'Écrin, ${LIV} € HT à Paris et dans les communes proches. Ailleurs en Île-de-France, le devis précise le tarif.</li>
        <li><strong>Installation</strong> : les plateaux arrivent dressés ; si besoin, nous les installons sur vos tables.</li>
        <li><strong>Vaisselle</strong> : porcelaine, verres et nappes via notre partenaire Options, sur devis. Voir <a href="/journal/vaisselle-jetable-reutilisable-traiteur-loi">vaisselle jetable ou réutilisable</a>.</li>
      </ul>

      <h2>Faut-il des maîtres d'hôtel pour 80 personnes ?</h2>
      <p>À 80, oui, c'est recommandé : quelqu'un réapprovisionne les buffets, débarrasse les verres et garde les tables nettes. Comptez 1 maître d'hôtel pour 20 à 40 invités debout, soit ${mh80[0]} à ${mh80[1]}. Chez L'Écrin Traiteur, un maître d'hôtel coûte ${eur(MH)} HT pour 6 heures, mise en place et remise en ordre comprises.</p>
      <table>
        <thead><tr><th>Poste</th><th>Total HT</th><th>Par personne HT</th></tr></thead>
        <tbody>
          <tr><td>La Célébration, boissons et livraison</td><td>${eur(d80.sans, true)}</td><td>${eur(d80.sans / 80, true)}</td></tr>
          <tr><td>${mh80[0]} maîtres d'hôtel, 6 heures</td><td>${eur(mh80[0] * MH, true)}</td><td>${eur(mh80[0] * MH / 80, true)}</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>${eur(d80Service, true)}</strong></td><td><strong>${eur(d80Service / 80, true)}</strong></td></tr>
        </tbody>
      </table>
      <p>Le détail des ratios est dans le guide <a href="/journal/combien-maitres-hotel-evenement-entreprise">combien de maîtres d'hôtel pour un événement d'entreprise</a>.</p>

      <h2>Comment organiser la soirée ?</h2>
      <p>Prévoyez trois points de buffet pour 80 personnes, éloignés de l'entrée. Servez la moitié du salé à l'ouverture, le reste après le discours, puis le sucré dans la dernière heure. Gardez les eaux et les jus sur une table à part pour libérer les buffets. Une soirée dînatoire dure deux heures et demie à trois heures. Si l'effectif monte à 90, le même cocktail revient à ${eur(d90.sans, true)} HT : confirmez le nombre définitif avant la commande ferme, 48 h avant. Pour 50 ou 100 invités, voir le <a href="/journal/cocktail-dinatoire-50-personnes-quantites-budget">cocktail dînatoire pour 50 personnes</a> et le <a href="/journal/cocktail-entreprise-100-personnes">cocktail d'entreprise pour 100 personnes</a>.</p>

      <h2>Comment commander ?</h2>
      <p>Donnez la date, l'adresse, l'horaire et l'effectif : nous envoyons un <a href="/devis">devis</a> sous 24 h, avec facture entreprise et TVA. La formule est décrite sur la page <a href="/creations/cocktails/prestige">La Célébration</a>, avec les autres <a href="/creations/cocktails">formules cocktail</a>. Pour le format en général, voir le <a href="/journal/cocktail-dinatoire-entreprise-paris">cocktail dînatoire d'entreprise à Paris</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le cocktail dînatoire pour 80 personnes</h2>
${faqHtml(FAQ_80)}
    `,
  },

  /* ───────── 3 ───────── */
  {
    ...BASE,
    slug: 'cocktail-noel-entreprise-paris',
    titre: "Cocktail de Noël d'entreprise à Paris : menu, quantités et budget pour 30, 50 et 100 personnes",
    metaTitle: "Cocktail de Noël d'entreprise à Paris : menu et budget",
    extrait: `Cocktail de Noël pour 30, 50 ou 100 personnes : pièces, boissons sans alcool et budget livré. Chez L'Écrin Traiteur, ${eur(c50.sans, true)} HT pour 50 personnes en 12 pièces.`,
    img: '/arbre-de-noel-hero.webp',
    relatedProducts: ['brochettes-fruits'],
    about: ['Cocktail de Noël', 'Fin d\'année en entreprise', 'Cocktail d\'entreprise'],
    enBref: [
      `Chez L'Écrin Traiteur, un cocktail de Noël de 12 pièces pour 50 personnes revient à ${eur(c50.sans, true)} HT, jus, eau et livraison compris.`,
      `L'Écrin Traiteur propose trois formules de 8, 12 et 16 pièces, de ${eur(FORMULES.invitation.prix, true)} à ${eur(FORMULES.celebration.prix, true)} HT par personne.`,
      `Pour décembre, L'Écrin Traiteur conseille de réserver en novembre ; à partir de 50 personnes, la commande est ferme 48 h avant.`,
    ],
    faq: FAQ_NOEL,
    contenu: `
      <p>Chez L'Écrin Traiteur, un cocktail de Noël d'entreprise coûte <strong>de ${eur(FORMULES.invitation.prix, true)} à ${eur(FORMULES.celebration.prix, true)} HT par personne</strong> selon la formule, plus les boissons et la livraison. Pour 50 personnes en 12 pièces, comptez <strong>${eur(c50.sans, true)} HT</strong> livré, jus et eau compris, soit ${eur(c50.sans / 50, true)} HT par personne.</p>

      <h2>Quel budget pour 30, 50 et 100 personnes ?</h2>
      <p>Chaque case donne le total livré : pièces, jus (1 litre pour 4 personnes), eau (1 bouteille de 75 cl pour 5) et une livraison de ${LIV} € HT à Paris et dans les communes proches.</p>
      <table>
        <thead><tr><th>Effectif</th><th>L'Invitation, 8 pièces</th><th>La Réception, 12 pièces</th><th>La Célébration, 16 pièces</th></tr></thead>
        <tbody>
${EFF.map(n => `          <tr><td><strong>${n} personnes</strong></td>${K3.map(k => { const c = noel(n, k); return `<td>${fr(n * c.f.pieces)} pièces · ${eur(c.sans, true)}</td>` }).join('')}</tr>`).join('\n')}
        </tbody>
      </table>
      <p>Par personne, cela va de ${eur(noel(100, 'invitation').sans / 100, true)} HT (100 personnes en L'Invitation) à ${eur(noel(30, 'celebration').sans / 30, true)} HT (30 personnes en La Célébration). Les détails par effectif sont dans les guides <a href="/journal/cocktail-dinatoire-pour-30-personnes-quantites-budget">30 personnes</a>, <a href="/journal/cocktail-dinatoire-50-personnes-quantites-budget">50 personnes</a> et <a href="/journal/cocktail-entreprise-100-personnes">100 personnes</a>.</p>

      <h2>Quel menu pour un cocktail de Noël ?</h2>
      <p>La Réception, la formule de 12 pièces, couvre un cocktail de fin d'après-midi ou une soirée courte. Elle compte ${nbSale('reception')} pièces salées et ${nbSucre('reception')} sucrées par personne :</p>
      <ul>
        <li><strong>Salé</strong> : ${listeMenu(carte('reception').sale)}.</li>
        <li><strong>Sucré</strong> : ${listeMenu(carte('reception').sucre)}.</li>
      </ul>
      <p>Pour 50 personnes, cela fait ${fr(50 * nbSale('reception'))} pièces salées et ${fr(50 * nbSucre('reception'))} sucrées. La Célébration ajoute quatre pièces par personne, dont la tartelette avocat et feta et la tartelette aux myrtilles : voir le <a href="/journal/cocktail-dinatoire-80-personnes-entreprise-paris">menu complet en 16 pièces</a>.</p>

      <h2>Quelle formule selon l'horaire ?</h2>
      <ul>
        <li><strong>Pot de fin de journée, 1 h 30</strong> : L'Invitation, 8 pièces par personne.</li>
        <li><strong>Cocktail déjeunatoire ou soirée courte</strong> : La Réception, 12 pièces.</li>
        <li><strong>Soirée qui remplace le dîner</strong> : La Célébration, 16 pièces.</li>
      </ul>
      <p>Les pièces salées sont halal et sans porc, sans alcool dans les recettes. Pour une touche de fêtes, l'offre <a href="/creations/evenements-saisonniers/noel">Noël en entreprise</a> ajoute sur devis un plateau de saumon ou un panettone à partager.</p>

      <h2>Quand commander pour décembre ?</h2>
      <table>
        <thead><tr><th>Quand</th><th>Ce qu'il faut faire</th></tr></thead>
        <tbody>
          <tr><td><strong>En novembre</strong></td><td>Réserver la date : les dates de décembre se remplissent vite. Fixer l'effectif estimé et demander un devis.</td></tr>
          <tr><td><strong>3 semaines avant</strong></td><td>Choisir la formule selon l'horaire ; ajouter maîtres d'hôtel et vaisselle si besoin.</td></tr>
          <tr><td><strong>1 semaine avant</strong></td><td>Recenser les régimes : végétarien, vegan, sans gluten, allergies.</td></tr>
          <tr><td><strong>48 h avant</strong></td><td>Commande ferme à partir de 50 personnes : effectif et quantités définitifs.</td></tr>
          <tr><td><strong>La veille, 14h</strong></td><td>Dernier délai en dessous de 50 personnes.</td></tr>
        </tbody>
      </table>
      <p>Exemple : pour un cocktail de 50 personnes le jeudi 17 décembre 2026, la commande est ferme le mardi 15 décembre. Pour 30 personnes le même jour, vous pouvez commander jusqu'au mercredi 16 décembre à 14h. Si votre date est déjà fixée, demandez le devis dès maintenant. Le <a href="/journal/retroplanning-soiree-fin-annee-entreprise">rétroplanning d'une soirée de fin d'année</a> détaille chaque étape.</p>

      <h2>Quelles boissons sans alcool servir ?</h2>
      <p>Toute la carte est sans alcool. Pour trinquer, le Chardonnay Blanc de Blancs 0 % est en option, à ${eur(prixChard(c50), true)} HT la bouteille de 75 cl, une flûte par personne.</p>
      <table>
        <thead><tr><th>Effectif</th><th>Jus</th><th>Eau 75 cl</th><th>Chardonnay 0 % (option)</th><th>Coût de l'option HT</th></tr></thead>
        <tbody>
${[c30, c50, c100].map(c => `          <tr><td>${c.n} personnes</td><td>${c.b.jus} L</td><td>${c.b.eau}</td><td>${c.b.chard} bouteilles</td><td>${eur(c.b.coutChard, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Le guide <a href="/journal/cocktail-sans-alcool-entreprise-fin-annee">soirée de fin d'année sans alcool</a> présente les jus, infusions et eaux de la carte.</p>

      <h2>Faut-il du personnel ?</h2>
      <p>Les pièces arrivent dressées et prêtes à servir. À partir d'une cinquantaine d'invités, un maître d'hôtel aide à réapprovisionner et débarrasser : ${eur(MH)} HT pour 6 heures. La vaisselle en porcelaine vient de notre partenaire Options, sur devis.</p>

      <h2>Et les autres formats de fin d'année ?</h2>
      <p>Pour comparer cocktail, buffet et plateaux repas, voir <a href="/journal/menu-noel-livre-entreprise-paris">menu de Noël livré au bureau</a>, <a href="/journal/soiree-fin-annee-entreprise-paris">soirée de fin d'année en entreprise</a> et le <a href="/journal/fetes-fin-annee-entreprise-guide-chiffre-2026">guide chiffré des fêtes de fin d'année 2026</a>.</p>

      <h2>Comment commander ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h avec la date, l'adresse et l'effectif, ou découvrez les <a href="/creations/cocktails">formules cocktail</a>. Livraison à Paris et en Île-de-France, facture entreprise avec TVA, minimum de commande ${MINIMUM} € HT.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le cocktail de Noël d'entreprise</h2>
${faqHtml(FAQ_NOEL)}
    `,
  },
]
