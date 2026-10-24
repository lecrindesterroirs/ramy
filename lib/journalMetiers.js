// Guides « par métier » (19 octobre 2026) : cabinet d'avocats, cabinet de conseil, ESN / tech, agence événementielle.
//
// Sources des chiffres :
//   - FICHE-VERITE.md (partie « Certain ») : livraison 29 € HT, minimum 50 € HT, commande la veille 14h, 48 h dès 50 personnes,
//     devis sous 24 h, dès 6h30, Classique 8 € HT, complet sur devis, pause goûter dès 6 € HT, cocktail 29,90 / 40,90 / 51,90 € HT ;
//   - lib/journalQuestions.js : cocktail(n, FORMULES.x) recalcule les budgets (aucun montant recopié) ; le petit-déjeuner
//     complet est sur devis (décision du 24/10/2026), seul le Classique est chiffré : n × 8 € + 29 € de livraison ;
//   - app/creations/plateaux-repas/data.js et app/creations/lunch-box/data.js : prix des plateaux et des lunch box ;
//   - lib/journalService.js : maître d'hôtel à 250 € HT pour 6 heures, vaisselle Options, ratios de service.
// Clients nommés : Bain & Company et Sia Partners seulement, sans aucun chiffre (règle du 17/10/2026).
// « Halal et sans porc » seulement sur le salé.
import { fr, eur, faqHtml, LIV, FORMULES, cocktail } from './journalQuestions'
import { PRIX as PRIX_PLATEAUX } from '../app/creations/plateaux-repas/data'
import { BOXES } from '../app/creations/lunch-box/data'
import { LIV_RECUP_PROCHE } from './prixEntree'

const num = (s) => Number(String(s).replace(',', '.'))
const prixPlateaux = Object.values(PRIX_PLATEAUX.essentiel).map(num)
const prixBoxes = BOXES.map(b => num(b.prix)).filter(Number.isFinite)

/** Prix unitaires HT partagés avec la surcouche anglaise. */
export const PX_METIERS = {
  plateauMin: Math.min(...prixPlateaux),
  plateauMax: Math.max(...prixPlateaux),
  plateauPoulet: num(PRIX_PLATEAUX.essentiel.poulet),
  lunchMin: Math.min(...prixBoxes),
  lunchMax: Math.max(...prixBoxes),
  classique: 8, // petit-déjeuner Classique, par personne (FICHE-VERITE)
  gouter: 6, // pause goûter, dès, par personne (FICHE-VERITE)
  mh: 250, // maître d'hôtel, service de 6 heures (lib/journalService.js)
}
const P = PX_METIERS
const cla = (n) => n * P.classique + LIV // petit-déjeuner Classique livré, en € HT
const { invitation: INV, reception: REC, celebration: CEL } = FORMULES

const DATE = '19 octobre 2026'
const ISO = '2026-10-19'
const BASE = { categorie: 'Conseils', date: DATE, isoDate: ISO, isoModified: ISO }
const SIGNATURE = `<p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes. Livraison 29 € HT à Paris et dans les communes proches. Minimum de commande 50 € HT.</em></p>`

const prixCocktails = `${eur(INV.prix, true)}, ${eur(REC.prix, true)} ou ${eur(CEL.prix, true)}`

/* ═════════════════════ 1. Cabinet d'avocats ═════════════════════ */
const avCk = cocktail(50, INV)
const avCkRec = cocktail(50, REC)
const avPlateaux10 = 10 * P.plateauMin + LIV

const FAQ_AVOCATS = [
  { q: "Combien coûte un petit-déjeuner pour une réunion client de 10 personnes ?", a: `Chez L'Écrin Traiteur, ${eur(10 * P.classique + LIV, true)} HT en Classique (8 € HT par personne plus la livraison de 29 € HT) : viennoiseries, jus, café et fruits. Le petit-déjeuner complet, avec 3 mini-viennoiseries par personne, madeleines, jus et café en thermos, est sur devis.` },
  { q: "Faut-il un maître d'hôtel pour un petit-déjeuner de cabinet ?", a: `Pour un petit-déjeuner servi en porcelaine, oui : il accueille, sert le café et réassortit. Il coûte ${eur(P.mh)} HT pour un service de 6 heures, et un seul suffit jusqu'à une cinquantaine de personnes.` },
  { q: "Jusqu'à quand peut-on commander pour un déjeuner de travail ?", a: "Jusqu'à la veille à 14h, avec une livraison dès 6h30 à l'heure choisie. À partir de 50 personnes, il faut commander 48 h à l'avance." },
  { q: "La facture peut-elle reprendre notre numéro de bon de commande ?", a: "Oui : indiquez-le à la demande de devis. La facture est une facture entreprise avec TVA, et le devis arrive sous 24 h." },
  { q: "Les plats sont-ils halal ?", a: "Les plats salés sont halal et sans porc, et la carte est sans alcool. Nous ne revendiquons pas de certification halal. Les options végétariennes, vegan et sans gluten se précisent au devis." },
]

const AVOCATS = {
  ...BASE,
  slug: 'traiteur-cabinet-avocats-paris',
  titre: "Traiteur pour cabinet d'avocats à Paris : petits-déjeuners clients, déjeuners de travail, cocktails",
  metaTitle: "Traiteur cabinet d'avocats Paris : petit-déjeuner, déjeuner",
  extrait: `Petit-déjeuner client dès 8 € HT par personne, plateaux repas de ${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)} HT, cocktail dès ${eur(INV.prix, true)} HT : les formats d'un cabinet d'avocats, et leur prix.`,
  img: '/maitre-hotel-petit-dejeuner-salon.webp',
  relatedProducts: ['viennoiseries-melangees', 'madeleines-20'],
  enBref: [
    `L'Écrin Traiteur livre les cabinets d'avocats à Paris dès 6h30 : petit-déjeuner Classique à ${eur(P.classique)} HT par personne, petit-déjeuner complet sur devis.`,
    `Un petit-déjeuner Classique pour 20 personnes revient à ${eur(cla(20), true)} HT livraison comprise chez L'Écrin Traiteur, et ${eur(cla(20) + P.mh, true)} HT avec un maître d'hôtel pendant 6 heures ; le complet est sur devis.`,
    `Chez L'Écrin Traiteur, un déjeuner de travail en plateaux repas coûte ${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)} HT par personne, plus 29 € HT de livraison.`,
  ],
  about: ["Traiteur cabinet d'avocats", 'Petit-déjeuner client', 'Déjeuner de travail'],
  faq: FAQ_AVOCATS,
  contenu: `
      <p>Pour un cabinet d'avocats à Paris, L'Écrin Traiteur livre trois formats : le <strong>petit-déjeuner client</strong>, à ${eur(P.classique)} HT par personne en Classique, le complet étant sur devis ; le <strong>déjeuner de travail</strong> en plateaux repas, de ${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)} HT ; et le <strong>cocktail</strong>, dès ${eur(INV.prix, true)} HT par personne pour 8 pièces. La livraison coûte 29 € HT à Paris et dans les communes proches, dès 6h30, pour une commande passée jusqu'à la veille à 14h.</p>

      <h2>Quel format pour quel moment du cabinet ?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Prix HT</th></tr></thead>
        <tbody>
          <tr><td><strong>Réunion client à 8h</strong></td><td>Petit-déjeuner Classique ou complet</td><td>${eur(P.classique)} par personne (Classique), complet sur devis</td></tr>
          <tr><td><strong>Réception des associés ou d'un client important</strong></td><td>Petit-déjeuner complet en porcelaine, avec un maître d'hôtel</td><td>Sur devis + ${eur(P.mh)} les 6 h</td></tr>
          <tr><td><strong>Déjeuner de travail en salle de réunion</strong></td><td>Plateaux repas individuels</td><td>${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)} par plateau</td></tr>
          <tr><td><strong>Closing ou réunion qui déborde</strong></td><td>Lunch box ou plateaux repas</td><td>dès ${eur(P.lunchMin, true)} par lunch box</td></tr>
          <tr><td><strong>Soirée clients, arrivée d'un associé</strong></td><td>Cocktail de 8, 12 ou 16 pièces</td><td>${prixCocktails} par personne</td></tr>
        </tbody>
      </table>
      <p>Chaque commande ajoute une livraison de 29 € HT à Paris et dans les communes proches. Le minimum de commande est de 50 € HT.</p>

      <h2>Le petit-déjeuner de la réunion client</h2>
      <p>Une réunion client commence souvent à 8h ou 8h30. Nous livrons dès 6h30, à l'heure que vous fixez : le petit-déjeuner est en place avant l'arrivée des clients. Les quantités suivent une règle simple : 2 mini-viennoiseries par personne (3 jusqu'à 10 personnes), une madeleine, un verre de jus de 20 cl et un thermos d'1 litre de café ou de thé pour 6 personnes.</p>
      <table>
        <thead><tr><th>Effectif</th><th>Classique, livraison comprise</th><th>Petit-déjeuner complet</th></tr></thead>
        <tbody>
          <tr><td><strong>10 personnes</strong></td><td>${eur(cla(10), true)}</td><td>Sur devis</td></tr>
          <tr><td><strong>20 personnes</strong></td><td>${eur(cla(20), true)}</td><td>Sur devis</td></tr>
        </tbody>
      </table>
      <p>Au-delà de 15 personnes, le petit-déjeuner complet ajoute une brochette de fruits frais par personne. Le détail est sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Le petit-déjeuner de prestige, en porcelaine</h2>
      <p>Pour recevoir les associés d'un autre cabinet, un client important ou un conseil d'administration, les produits restent les mêmes. Ce qui change, c'est la présentation : viennoiseries posées sur des plateaux de bois, tasses en porcelaine, nappe, et un maître d'hôtel qui accueille et sert le café.</p>
      <p>Chez L'Écrin Traiteur, un maître d'hôtel coûte <strong>${eur(P.mh)} HT pour un service de 6 heures</strong>, mise en place et remise en ordre comprises. Pour 20 personnes, le petit-déjeuner Classique et le maître d'hôtel reviennent à <strong>${eur(cla(20) + P.mh, true)} HT</strong> ; le complet est sur devis. La porcelaine et le nappage viennent de chez Options, sur devis. Un seul maître d'hôtel suffit jusqu'à une cinquantaine de personnes : voir <a href="/journal/combien-maitres-hotel-evenement-entreprise">combien de maîtres d'hôtel pour un événement</a> et notre guide du <a href="/journal/petit-dejeuner-prestige-entreprise-paris">petit-déjeuner de prestige</a>.</p>

      <h2>Le déjeuner de travail en salle de réunion</h2>
      <p>Quand une réunion se prolonge sur le midi, le plateau repas individuel évite de quitter la table : entrée, plat et dessert dans un même plateau. Nos six menus coûtent ${eur(P.plateauMin, true)} HT en végétarien, ${eur(P.plateauPoulet, true)} HT au poulet et ${eur(P.plateauMax, true)} HT au poisson. Pour 10 personnes, comptez ${eur(avPlateaux10, true)} HT livraison comprise avec des plateaux végétariens.</p>
      <p>Pour un format plus léger, la lunch box (sandwich, entrée et dessert) démarre à ${eur(P.lunchMin, true)} HT. Les menus sont sur les pages <a href="/creations/plateaux-repas">plateaux repas</a> et <a href="/creations/lunch-box">lunch box livrées à Paris</a>. Un closing dont l'heure n'est pas connue se commande comme le reste : jusqu'à la veille à 14h.</p>

      <h2>Présentation et discrétion</h2>
      <p>Les livraisons sont faites par l'équipe de L'Écrin Traiteur. Donnez-nous à la commande le nom de la salle, l'heure de mise en place et un contact à l'accueil : la commande est déposée là où elle sera servie. Les plateaux de bois et la vaisselle en porcelaine se demandent au devis ; sans précision, le petit-déjeuner arrive avec gobelets, serviettes, sucre et touillettes.</p>

      <h2>Le cocktail du cabinet</h2>
      <p>Pour une soirée clients ou l'arrivée d'un associé, le cocktail de 8 pièces (L'Invitation, ${eur(INV.prix, true)} HT par personne) convient à un moment de deux heures en fin de journée. Pour 50 invités, il revient à <strong>${eur(avCk.sans, true)} HT</strong> avec jus, eau et livraison ; en 12 pièces (La Réception), ${eur(avCkRec.sans, true)} HT. Les pièces salées sont halal et sans porc, et la carte est sans alcool ; un Chardonnay 0 % pour trinquer ajoute ${eur(avCk.b.coutChard, true)} HT pour 50 personnes. Voir les <a href="/creations/cocktails">formules cocktail</a> et <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces par personne</a>.</p>

      <h2>Devis, facture et bon de commande</h2>
      <p>Le devis arrive sous 24 h. La facture est une facture entreprise avec TVA ; si le cabinet fonctionne avec des bons de commande, indiquez le numéro à la demande de devis. Commande jusqu'à la veille à 14h, 48 h à l'avance à partir de 50 personnes. Les prix sont sur la page <a href="/tarifs">tarifs</a> ; pour une demande, <a href="/devis">demandez un devis</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_AVOCATS)}
    `,
}

/* ═════════════════════ 2. Cabinet de conseil ═════════════════════ */
const coJour = P.classique + P.plateauMin + P.gouter
const coAfter = cocktail(40, INV)
const coComite12 = 12 * P.plateauMin + LIV
const coComite12Max = 12 * P.plateauMax + LIV

const FAQ_CONSEIL = [
  { q: "Quels cabinets de conseil L'Écrin Traiteur livre-t-il ?", a: "Bain & Company et Sia Partners font partie de nos clients réguliers, surtout pour des petits-déjeuners de réunion et des matinées d'équipe. Leurs cas sont décrits sur la page cas clients." },
  { q: "Combien coûte un petit-déjeuner d'équipe pour 30 personnes ?", a: `${eur(cla(30), true)} HT livraison comprise en Classique (viennoiseries, jus, café, fruits), soit ${eur(P.classique)} HT par personne hors livraison. Le petit-déjeuner complet est sur devis.` },
  { q: "Quel budget par personne pour un séminaire d'une journée ?", a: `Environ ${eur(coJour, true)} HT par personne hors livraison pour 30 personnes : petit-déjeuner Classique à ${eur(P.classique)}, plateau repas végétarien à ${eur(P.plateauMin, true)} et pause goûter dès ${eur(P.gouter)}. Ajoutez 29 € HT par livraison.` },
  { q: "Peut-on garder la même commande d'une semaine sur l'autre ?", a: "Oui : même horaire, mêmes quantités, sans tout redemander. Il suffit de confirmer l'effectif avant la veille à 14h." },
  { q: "Quel délai pour un petit-déjeuner de 50 personnes ?", a: `48 h à l'avance à partir de 50 personnes. Le petit-déjeuner Classique pour 50 revient à ${eur(cla(50), true)} HT livraison comprise ; le complet est sur devis.` },
]

const CONSEIL = {
  ...BASE,
  slug: 'traiteur-cabinet-conseil-paris',
  titre: "Traiteur pour cabinet de conseil à Paris : séminaires, comités, petits-déjeuners d'équipe",
  metaTitle: 'Traiteur cabinet de conseil Paris : séminaire, comité',
  extrait: `Petit-déjeuner d'équipe dès 8 € HT par personne, plateaux repas pour les comités, séminaire d'une journée autour de ${eur(Math.round(coJour))} HT par personne : les formats d'un cabinet de conseil.`,
  img: '/prod-viennoiseries.webp',
  relatedProducts: ['viennoiseries-melangees', 'brochettes-fruits'],
  enBref: [
    `L'Écrin Traiteur livre régulièrement des cabinets de conseil à Paris, dont Bain & Company et Sia Partners, dès 6h30.`,
    `Chez L'Écrin Traiteur, un petit-déjeuner Classique pour 30 personnes coûte ${eur(cla(30), true)} HT livraison comprise ; le complet est sur devis.`,
    `Une journée de séminaire chez L'Écrin Traiteur (petit-déjeuner, plateau repas, pause goûter) revient à environ ${eur(coJour, true)} HT par personne hors livraison.`,
  ],
  about: ['Traiteur cabinet de conseil', "Petit-déjeuner d'équipe", 'Séminaire'],
  faq: FAQ_CONSEIL,
  contenu: `
      <p>L'Écrin Traiteur livre les cabinets de conseil à Paris, dont <strong>Bain & Company</strong> et <strong>Sia Partners</strong>, clients réguliers. Les formats les plus demandés : le <strong>petit-déjeuner d'équipe</strong>, à ${eur(P.classique)} HT par personne en Classique, le complet étant sur devis ; les <strong>plateaux repas</strong> pour les comités, de ${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)} HT ; et le <strong>séminaire d'une journée</strong>, autour de ${eur(coJour, true)} HT par personne hors livraison.</p>

      <h2>Quel format pour quel moment du cabinet ?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Prix HT</th></tr></thead>
        <tbody>
          <tr><td><strong>Réunion d'équipe du matin</strong></td><td>Petit-déjeuner Classique ou complet, même commande à chaque fois</td><td>${eur(P.classique)} par personne (Classique), complet sur devis</td></tr>
          <tr><td><strong>Comité de pilotage, réunion avec le client</strong></td><td>Plateaux repas individuels</td><td>${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)} par plateau</td></tr>
          <tr><td><strong>Formation interne d'une demi-journée</strong></td><td>Lunch box</td><td>dès ${eur(P.lunchMin, true)}</td></tr>
          <tr><td><strong>Séminaire d'une journée</strong></td><td>Petit-déjeuner, déjeuner, pause goûter</td><td>environ ${eur(coJour, true)} par personne</td></tr>
          <tr><td><strong>Afterwork, fin de mission</strong></td><td>Cocktail L'Invitation, 8 pièces</td><td>${eur(INV.prix, true)} par personne</td></tr>
        </tbody>
      </table>
      <p>Chaque livraison coûte 29 € HT à Paris et dans les communes proches. Minimum de commande : 50 € HT.</p>

      <h2>Le petit-déjeuner d'équipe, chaque semaine</h2>
      <p>Bain & Company et Sia Partners nous confient régulièrement leurs petits-déjeuners de réunion et leurs matinées d'équipe. Ce qu'un cabinet attend d'un petit-déjeuner récurrent : le même horaire, les mêmes quantités, sans avoir à tout redemander. Nous gardons la commande type ; il suffit de confirmer l'effectif avant la veille à 14h.</p>
      <table>
        <thead><tr><th>Effectif</th><th>Petit-déjeuner Classique, livraison comprise</th><th>Par personne, hors livraison</th></tr></thead>
        <tbody>
${[15, 30, 50].map(n => `          <tr><td><strong>${n} personnes</strong></td><td>${eur(cla(n), true)}</td><td>${eur(P.classique)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Le Classique réunit viennoiseries, jus, café et fruits. Le petit-déjeuner complet, sur devis, compte 2 mini-viennoiseries par personne, des madeleines (et un cake au-delà de 20 personnes), une brochette de fruits au-delà de 15, un verre de jus et un thermos de café ou de thé pour 6. À partir de 50 personnes, la commande se passe 48 h à l'avance. Voir le guide du <a href="/journal/petit-dejeuner-recurrent-hebdomadaire-entreprise-prix">petit-déjeuner récurrent</a> et la page <a href="/univers/cas-clients">cas clients</a>.</p>

      <h2>Les plateaux repas pour un comité</h2>
      <p>Un comité de pilotage se tient souvent sur le temps du déjeuner, autour de la table. Le plateau individuel (entrée, plat, dessert) permet de manger sans interrompre la réunion. Pour 12 participants, comptez ${eur(coComite12, true)} à ${eur(coComite12Max, true)} HT livraison comprise, selon les menus. Trois de nos six menus sont végétariens ; les plats salés sont halal et sans porc. Voir les <a href="/creations/plateaux-repas">plateaux repas</a> et <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">combien de plateaux commander</a>.</p>

      <h2>La formation interne en lunch box</h2>
      <p>Pour une demi-journée de formation, la lunch box se mange dans la salle, sans longue pause : un sandwich, une entrée et un dessert, serviette et couverts inclus. Elle coûte de ${eur(P.lunchMin, true)} à ${eur(P.lunchMax, true)} HT ; pour 20 participants, comptez dès ${eur(20 * P.lunchMin + LIV, true)} HT livraison comprise. Voir notre <a href="/creations/lunch-box">livraison de lunch box au bureau</a>.</p>

      <h2>Le séminaire d'une journée</h2>
      <p>Pour 30 participants sur une journée, le budget se construit moment par moment :</p>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Par personne HT</th></tr></thead>
        <tbody>
          <tr><td><strong>Accueil</strong></td><td>Petit-déjeuner Classique</td><td>${eur(P.classique, true)}</td></tr>
          <tr><td><strong>Déjeuner</strong></td><td>Plateau repas végétarien (ou cocktail déjeunatoire La Réception à ${eur(REC.prix, true)})</td><td>${eur(P.plateauMin, true)}</td></tr>
          <tr><td><strong>Après-midi</strong></td><td>Pause goûter</td><td>dès ${eur(P.gouter)}</td></tr>
          <tr><td><strong>Total</strong></td><td>Hors livraison</td><td><strong>${eur(coJour, true)}</strong></td></tr>
        </tbody>
      </table>
      <p>Comptez 29 € HT par livraison à Paris et dans les communes proches. Le détail est dans nos guides <a href="/journal/budget-seminaire-entreprise-par-personne-paris">budget d'un séminaire par personne</a> et <a href="/journal/organiser-seminaire-entreprise-programme-journee-restauration">organiser la restauration d'un séminaire</a>.</p>

      <h2>L'afterwork de fin de mission</h2>
      <p>Pour un afterwork, le cocktail de 8 pièces suffit : c'est un moment de deux heures, pas un dîner. Pour 40 personnes, L'Invitation revient à <strong>${eur(coAfter.sans, true)} HT</strong> avec ${coAfter.b.jus} litres de jus, ${coAfter.b.eau} bouteilles d'eau et la livraison. La carte est sans alcool ; un Chardonnay 0 % pour trinquer ajoute ${eur(coAfter.b.coutChard, true)} HT. Voir les <a href="/creations/cocktails">formules cocktail</a>.</p>

      <h2>Régimes, devis et facture</h2>
      <p>Les plats salés sont halal et sans porc, sans supplément ; les options végétariennes, vegan et sans gluten se précisent au devis (voir <a href="/traiteur-halal">traiteur halal</a>). Le devis arrive sous 24 h et la facture est une facture entreprise avec TVA. <a href="/devis">Demander un devis</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_CONSEIL)}
    `,
}

/* ═════════════════════ 3. ESN / tech ═════════════════════ */
const teMeet = [30, 60, 100].map(n => cocktail(n, INV))
const te60 = teMeet[1]
const teOnb15 = 15 * P.lunchMin + LIV
const teOnb30 = 30 * P.lunchMin + LIV
const teMidi = cocktail(25, REC)

const FAQ_TECH = [
  { q: "Les plats sont-ils halal et sans porc ?", a: "Oui, tous les plats salés sont halal et sans porc par défaut, sans supplément, et la carte est sans alcool. Nous ne revendiquons pas de certification halal. Les options végétariennes, vegan et sans gluten se précisent au devis." },
  { q: "Combien coûte un déjeuner d'onboarding pour 15 nouveaux arrivants ?", a: `En lunch box, dès ${eur(teOnb15, true)} HT livraison comprise (${eur(P.lunchMin, true)} HT la lunch box, plus 29 € HT de livraison). En plateaux repas, de ${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)} HT par personne.` },
  { q: "Combien de pièces pour un meetup ?", a: "8 pièces par personne pour un meetup de deux heures en fin de journée. Au-delà, ou si le meetup remplace le dîner, passez à 12 ou 16 pièces." },
  { q: "Quel budget pour un meetup de 60 personnes ?", a: `${eur(te60.sans, true)} HT en L'Invitation (8 pièces) avec jus, eau et livraison, soit ${eur(te60.sans / 60, true)} HT par personne. Commande 48 h à l'avance à partir de 50 personnes.` },
  { q: "Comment indiquer les régimes de l'équipe ?", a: "Donnez le nombre de personnes végétariennes, vegan ou sans gluten à la demande de devis : les portions sont prévues à part." },
]

const TECH = {
  ...BASE,
  slug: 'traiteur-entreprise-tech-esn-paris',
  titre: 'Traiteur pour une ESN ou une entreprise tech à Paris : afterwork, onboarding, meetups',
  metaTitle: 'Traiteur ESN et entreprise tech Paris : afterwork, meetup',
  extrait: `Lunch box dès ${eur(P.lunchMin, true)} HT pour l'onboarding, cocktail 8 pièces à ${eur(INV.prix, true)} HT pour les meetups, salé halal et sans porc par défaut : les formats d'une ESN.`,
  img: '/hero-lunch-box.webp',
  relatedProducts: ['brochettes-fruits'],
  enBref: [
    `L'Écrin Traiteur livre les ESN et les entreprises tech à Paris dès 6h30, avec une carte salée halal et sans porc par défaut et des options végétariennes, vegan et sans gluten sur demande.`,
    `Chez L'Écrin Traiteur, un déjeuner d'onboarding pour 15 personnes en lunch box coûte dès ${eur(teOnb15, true)} HT livraison comprise.`,
    `Un meetup de 60 personnes en cocktail de 8 pièces revient à ${eur(te60.sans, true)} HT chez L'Écrin Traiteur, avec jus, eau et livraison.`,
  ],
  about: ['Traiteur ESN', 'Afterwork entreprise tech', 'Onboarding'],
  faq: FAQ_TECH,
  contenu: `
      <p>Pour une ESN ou une entreprise tech à Paris, L'Écrin Traiteur livre des <strong>lunch box dès ${eur(P.lunchMin, true)} HT</strong> pour les journées d'onboarding, des <strong>cocktails de 8 pièces à ${eur(INV.prix, true)} HT par personne</strong> pour les meetups et les afterworks, et des <strong>petits-déjeuners dès ${eur(P.classique)} HT par personne</strong> pour les débuts de sprint. Tout le salé est halal et sans porc ; végétarien, vegan et sans gluten sur demande.</p>

      <h2>Quel format pour quel moment ?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Prix HT</th></tr></thead>
        <tbody>
          <tr><td><strong>Onboarding, journée d'intégration</strong></td><td>Lunch box individuelle</td><td>${eur(P.lunchMin, true)} à ${eur(P.lunchMax, true)}</td></tr>
          <tr><td><strong>Début de sprint, rétrospective du matin</strong></td><td>Petit-déjeuner Classique ou complet</td><td>${eur(P.classique)} par personne (Classique), complet sur devis</td></tr>
          <tr><td><strong>Réunion d'équipe le midi, démo client</strong></td><td>Plateaux repas</td><td>${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)}</td></tr>
          <tr><td><strong>Meetup, afterwork</strong></td><td>Cocktail L'Invitation, 8 pièces</td><td>${eur(INV.prix, true)} par personne</td></tr>
          <tr><td><strong>Soirée d'entreprise</strong></td><td>Cocktail La Célébration, 16 pièces</td><td>${eur(CEL.prix, true)} par personne</td></tr>
        </tbody>
      </table>
      <p>Ajoutez 29 € HT de livraison à Paris et dans les communes proches. Minimum de commande : 50 € HT.</p>

      <h2>Des équipes aux régimes variés</h2>
      <p>Dans une équipe de 30 ou de 300 personnes, il y a des végétariens, des personnes qui ne mangent pas de porc, d'autres qui mangent halal, et quelques intolérances. Notre réponse : tout le salé est <strong>halal et sans porc par défaut</strong>, sans supplément, et la carte est sans alcool. Nous ne revendiquons pas de certification halal. Les options végétariennes, vegan et sans gluten se commandent en donnant le nombre de personnes concernées au devis. Trois de nos six plateaux repas sont végétariens, et La Fermière est la lunch box végétarienne. Voir <a href="/traiteur-halal">traiteur halal</a> et <a href="/journal/traiteur-vegan-vegetarien-entreprise-paris">traiteur vegan et végétarien</a>.</p>

      <h2>L'onboarding en lunch box</h2>
      <p>Une journée d'intégration se passe souvent entre deux salles, avec des présentations qui débordent. La lunch box se mange sur place ou s'emporte : un sandwich, une entrée, un dessert, serviette et couverts inclus. Nos lunch box coûtent de ${eur(P.lunchMin, true)} à ${eur(P.lunchMax, true)} HT.</p>
      <table>
        <thead><tr><th>Nouveaux arrivants</th><th>Lunch box, livraison comprise</th></tr></thead>
        <tbody>
          <tr><td><strong>15 personnes</strong></td><td>dès ${eur(teOnb15, true)}</td></tr>
          <tr><td><strong>30 personnes</strong></td><td>dès ${eur(teOnb30, true)}</td></tr>
        </tbody>
      </table>
      <p>Voir nos <a href="/creations/lunch-box">lunch box livrées en entreprise</a> et notre guide <a href="/journal/traiteur-rentree-onboarding-entreprise-paris">rentrée et onboarding</a>.</p>

      <h2>Meetups et afterworks : le cocktail de 8 pièces</h2>
      <p>Un meetup dure en général deux heures, après le travail : 8 pièces par personne suffisent. L'Invitation compte des pièces salées et sucrées, livrées dressées. Les boissons sont sans alcool : 1 litre de jus pour 4 personnes et une bouteille d'eau de 75 cl pour 5.</p>
      <table>
        <thead><tr><th>Participants</th><th>Pièces</th><th>Jus et eau</th><th>Total HT avec livraison</th><th>Par personne</th></tr></thead>
        <tbody>
${teMeet.map(c => `          <tr><td><strong>${c.n}</strong></td><td>${fr(c.n * INV.pieces)}</td><td>${c.b.jus} L de jus, ${c.b.eau} bouteilles d'eau</td><td>${eur(c.sans, true)}</td><td>${eur(c.sans / c.n, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Un Chardonnay 0 % pour trinquer est en option. Si le meetup remplace le dîner, passez à 12 ou 16 pièces : voir <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a>, <a href="/journal/idees-afterwork-entreprise-formats-budget">idées d'afterwork</a> et les <a href="/creations/cocktails">formules cocktail</a>.</p>

      <h2>La démo ou la réunion d'équipe du midi</h2>
      <p>Pour une réunion à l'heure du déjeuner, deux formats : les plateaux repas si l'équipe reste assise, le cocktail déjeunatoire si elle circule. Pour 25 personnes, comptez ${eur(25 * P.plateauMin + LIV, true)} HT en plateaux végétariens, livraison comprise, ou ${eur(teMidi.sans, true)} HT en La Réception (12 pièces) avec jus, eau et livraison. Voir les <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Les petits-déjeuners de sprint</h2>
      <p>Un lancement de sprint ou une rétrospective du matin réunit souvent une dizaine de personnes. Pour 12 personnes, le Classique revient à ${eur(cla(12), true)} HT livraison comprise ; le petit-déjeuner complet est sur devis. La livraison commence à 6h30. Voir les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners</a>.</p>

      <h2>Commander</h2>
      <p>Commande jusqu'à la veille à 14h, 48 h à l'avance à partir de 50 personnes. Devis sous 24 h, facture entreprise avec TVA. <a href="/devis">Demander un devis</a> ou consulter les <a href="/tarifs">tarifs</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_TECH)}
    `,
}

/* ═════════════════════ 4. Agence événementielle ═════════════════════ */
const AG_EFF = [100, 200]
const agRows = AG_EFF.flatMap(n => [INV, REC, CEL].map(f => cocktail(n, f)))
const ag100 = cocktail(100, REC)
const ag200 = cocktail(200, REC)
const agMh100 = 4 // dans la fourchette 3 à 5 du guide des maîtres d'hôtel
const agMh200 = 7 // dans la fourchette 5 à 8

const FAQ_AGENCE = [
  { q: "Quels formats L'Écrin Traiteur livre-t-il aux agences événementielles ?", a: `Des cocktails de 8, 12 ou 16 pièces (${prixCocktails} HT par personne), des animations culinaires, des maîtres d'hôtel à ${eur(P.mh)} HT pour 6 heures, et la vaisselle louée chez Options, sur devis.` },
  { q: "Combien coûte un cocktail pour 200 invités ?", a: `${eur(ag200.sans, true)} HT en La Réception (12 pièces) avec ${ag200.b.jus} litres de jus, ${ag200.b.eau} bouteilles d'eau et la livraison à Paris, soit ${eur(ag200.sans / 200, true)} HT par personne.` },
  { q: "Combien de maîtres d'hôtel pour 100 invités debout ?", a: `Les traiteurs comptent en général 3 à 5 maîtres d'hôtel pour 100 invités à un cocktail. Chez L'Écrin Traiteur, ${agMh100} maîtres d'hôtel coûtent ${eur(agMh100 * P.mh)} HT pour 6 heures.` },
  { q: "Quel délai pour un événement de plus de 50 personnes ?", a: "La commande se passe au moins 48 h à l'avance à partir de 50 personnes. Le devis arrive sous 24 h : envoyez la demande deux à trois semaines avant pour valider le menu, le service et le matériel." },
  { q: "Les pièces sont-elles halal ?", a: "Les pièces salées sont halal et sans porc, et la carte est sans alcool. Nous ne revendiquons pas de certification halal. Les options végétariennes, vegan et sans gluten se précisent au devis." },
]

const AGENCE = {
  ...BASE,
  slug: 'traiteur-agence-evenementielle-paris',
  titre: 'Traiteur partenaire pour agence événementielle à Paris : ce que nous livrons',
  metaTitle: 'Traiteur partenaire agence événementielle Paris',
  extrait: `Cocktails de 8, 12 ou 16 pièces, animations culinaires, maîtres d'hôtel, vaisselle : ce que L'Écrin Traiteur livre aux agences, avec un budget pour 100 et 200 invités.`,
  img: '/cocktail-prestige.webp',
  relatedProducts: ['brochettes-fruits'],
  enBref: [
    `L'Écrin Traiteur propose trois cocktails : 8 pièces à ${eur(INV.prix, true)}, 12 pièces à ${eur(REC.prix, true)} et 16 pièces à ${eur(CEL.prix, true)} HT par personne.`,
    `Chez L'Écrin Traiteur, un cocktail de 12 pièces pour 200 invités revient à ${eur(ag200.sans, true)} HT avec jus, eau et livraison.`,
    `Un maître d'hôtel de L'Écrin Traiteur coûte ${eur(P.mh)} HT pour un service de 6 heures ; le devis arrive sous 24 h.`,
  ],
  about: ['Traiteur agence événementielle', "Cocktail d'entreprise", "Maître d'hôtel"],
  faq: FAQ_AGENCE,
  contenu: `
      <p>L'Écrin Traiteur livre les agences événementielles à Paris et en Île-de-France : des <strong>cocktails de 8, 12 ou 16 pièces</strong>, de ${eur(INV.prix, true)} à ${eur(CEL.prix, true)} HT par personne, des <strong>animations culinaires</strong>, des <strong>maîtres d'hôtel à ${eur(P.mh)} HT</strong> pour 6 heures et de la vaisselle louée chez Options. Pour 100 invités, un cocktail de 12 pièces revient à <strong>${eur(ag100.sans, true)} HT</strong> avec jus, eau et livraison. Le devis arrive sous 24 h.</p>

      <h2>Quel format pour quel moment de l'événement ?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Prix HT</th></tr></thead>
        <tbody>
          <tr><td><strong>Lancement, vernissage, apéritif de deux heures</strong></td><td>L'Invitation, 8 pièces</td><td>${eur(INV.prix, true)} par personne</td></tr>
          <tr><td><strong>Conférence ou salon à l'heure du déjeuner</strong></td><td>La Réception, 12 pièces</td><td>${eur(REC.prix, true)} par personne</td></tr>
          <tr><td><strong>Soirée, dîner debout</strong></td><td>La Célébration, 16 pièces</td><td>${eur(CEL.prix, true)} par personne</td></tr>
          <tr><td><strong>Accueil du matin d'une conférence</strong></td><td>Petit-déjeuner Classique ou complet</td><td>${eur(P.classique)} par personne (Classique), complet sur devis</td></tr>
          <tr><td><strong>Déjeuner d'équipe ou de plénière, assis</strong></td><td>Plateaux repas</td><td>${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)}</td></tr>
          <tr><td><strong>Temps fort de la soirée</strong></td><td>Animation culinaire</td><td>sur devis</td></tr>
          <tr><td><strong>Service</strong></td><td>Maître d'hôtel</td><td>${eur(P.mh)} pour 6 heures</td></tr>
        </tbody>
      </table>

      <h2>Combien coûte un cocktail pour 100 ou 200 invités ?</h2>
      <p>Le tableau compte les pièces, les boissons sans alcool (1 litre de jus pour 4 invités, une bouteille d'eau de 75 cl pour 5) et une livraison de 29 € HT à Paris et dans les communes proches.</p>
      <table>
        <thead><tr><th>Invités</th><th>Formule</th><th>Pièces</th><th>Total HT</th><th>Par personne</th></tr></thead>
        <tbody>
${agRows.map(c => `          <tr><td><strong>${c.n}</strong></td><td>${c.f.nom}, ${c.f.pieces} pièces</td><td>${fr(c.n * c.f.pieces)}</td><td>${eur(c.sans, true)}</td><td>${eur(c.sans / c.n, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Pour 200 invités, cela représente ${ag200.b.jus} litres de jus et ${ag200.b.eau} bouteilles d'eau. Un Chardonnay 0 % pour trinquer (une flûte par personne) ajoute ${eur(ag100.b.coutChard, true)} HT pour 100 invités et ${eur(ag200.b.coutChard, true)} HT pour 200. Le détail d'un cocktail de 100 personnes est dans notre guide <a href="/journal/cocktail-entreprise-100-personnes">cocktail d'entreprise pour 100 personnes</a>.</p>

      <h2>Les maîtres d'hôtel</h2>
      <p>Pour un cocktail debout, les traiteurs comptent en général 3 à 5 maîtres d'hôtel pour 100 invités et 5 à 8 pour 200. Chez L'Écrin Traiteur, un maître d'hôtel coûte ${eur(P.mh)} HT pour un service de 6 heures, mise en place et remise en ordre comprises : ${agMh100} maîtres d'hôtel pour 100 invités reviennent à ${eur(agMh100 * P.mh)} HT, ${agMh200} pour 200 invités à ${eur(agMh200 * P.mh)} HT. Nos maîtres d'hôtel sont sélectionnés et formés par notre maison. Les ratios par format sont dans <a href="/journal/combien-maitres-hotel-evenement-entreprise">combien de maîtres d'hôtel pour un événement</a>.</p>

      <h2>La vaisselle et le matériel</h2>
      <p>La vaisselle, la verrerie et le nappage viennent de chez Options ; le mobilier (mange-debout, tables) passe par un loueur partenaire. Tout est sur devis et livré avec la commande. Nous demandons d'abord le nombre de tables et d'invités : nous ne le supposons jamais. Voir <a href="/journal/location-materiel-reception-entreprise-quantites-prix">location de matériel de réception</a>.</p>

      <h2>Les animations culinaires</h2>
      <p>Une animation remplace une partie des pièces et donne aux invités une raison de circuler : découpe de saumon frais, atelier mini burgers, atelier sushi et maki, bar à jus pressés, barista. Elles sont chiffrées sur devis et présentées sur la page <a href="/creations/animations-culinaires">animations culinaires</a>.</p>

      <h2>Délais et brief</h2>
      <p>Le devis arrive sous 24 h. À partir de 50 personnes, la commande se passe au moins 48 h à l'avance ; pour un événement de 100 ou 200 invités avec service et matériel, envoyez la demande deux à trois semaines avant. Pour chiffrer, nous avons besoin de la date, du lieu, de l'horaire, de l'effectif, des conditions d'accès pour la livraison, d'un contact sur place et du nombre de régimes particuliers (végétarien, vegan, sans gluten). Les pièces salées sont halal et sans porc, et la carte est sans alcool.</p>
      <p>La livraison commence à 6h30, à Paris et dans une vingtaine de villes d'Île-de-France ; elle coûte 29 € HT à Paris et dans les communes proches. La facture est une facture entreprise avec TVA. Voir aussi <a href="/journal/organiser-cocktail-entreprise">organiser un cocktail d'entreprise</a>, les <a href="/creations/cocktails">formules cocktail</a> et <a href="/devis">demander un devis</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_AGENCE)}
    `,
}

/* ══════════ Guides du 24 octobre 2026 : banque-finance, santé-medtech, immobilier-BTP ══════════
   Mêmes sources que ci-dessus ; livraison avec reprise du matériel (Paris, 92, 94) : LIV_RECUP_PROCHE (lib/prixEntree.js).
   Aucun client nommé, aucun chiffre de volume. Petit-déjeuner complet sur devis, jamais chiffré. */
const BASE_24 = { categorie: 'Conseils', date: '24 octobre 2026', isoDate: '2026-10-24', isoModified: '2026-10-24' }
const LIV_REPRISE = LIV_RECUP_PROCHE

/* ═════════════════════ 5. Banque, assurance, finance ═════════════════════ */
const baComite12 = 12 * P.plateauMin + LIV
const baCk60 = cocktail(60, REC)
const baCk60Inv = cocktail(60, INV)

const FAQ_BANQUE = [
  { q: "Combien coûte un petit-déjeuner de comité pour 12 personnes ?", a: `Chez L'Écrin Traiteur, ${eur(cla(12), true)} HT en Classique (${eur(P.classique)} HT par personne plus ${eur(LIV)} HT de livraison) : viennoiseries, jus, café et fruits. Le petit-déjeuner complet est sur devis.` },
  { q: "Livrez-vous dans les tours de La Défense ?", a: `Oui, dès 6h30, au même tarif qu'à Paris : ${eur(LIV)} HT. Donnez à la commande le nom de la tour, le point de livraison, l'étage et un contact qui peut faire préparer un badge visiteur.` },
  { q: "Peut-on avoir de la porcelaine et un maître d'hôtel ?", a: `Oui. La vaisselle se demande au devis, et un maître d'hôtel coûte ${eur(P.mh)} HT pour un service de 6 heures. Avec de la vaisselle à reprendre, la livraison passe à ${eur(LIV_REPRISE)} HT à Paris, dans les Hauts-de-Seine et le Val-de-Marne.` },
  { q: "La facture peut-elle porter notre numéro de bon de commande ?", a: "Oui : indiquez-le à la demande de devis. La facture est une facture entreprise avec TVA, et le devis arrive sous 24 h." },
  { q: "Jusqu'à quand commander pour un comité du lendemain ?", a: "Jusqu'à la veille à 14h. À partir de 50 personnes, la commande se passe 48 h à l'avance." },
]

const BANQUE = {
  ...BASE_24,
  slug: 'traiteur-banque-assurance-finance-paris',
  titre: 'Traiteur pour banque, assurance et finance à Paris : petits-déjeuners de réunion, comités, cocktails à La Défense',
  metaTitle: 'Traiteur banque, assurance, finance Paris et La Défense',
  extrait: `Petit-déjeuner de comité à partir de ${eur(P.classique)} HT par personne, plateaux de réunion de ${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)} HT, cocktail clients dès ${eur(INV.prix, true)} HT, livraison dans les tours de La Défense : les formats d'une banque ou d'un assureur.`,
  img: '/petit-dejeuner-prestige-salon.webp',
  relatedProducts: ['viennoiseries-melangees', 'madeleines-20'],
  enBref: [
    `L'Écrin Traiteur livre les banques, assureurs et sociétés de gestion à Paris et dans les tours de La Défense dès 6h30, pour ${eur(LIV)} HT de livraison.`,
    `Chez L'Écrin Traiteur, un petit-déjeuner de comité pour 12 personnes revient à ${eur(cla(12), true)} HT livraison comprise en Classique ; le complet est sur devis.`,
    `Un maître d'hôtel de L'Écrin Traiteur coûte ${eur(P.mh)} HT pour 6 heures, et la facture peut reprendre votre numéro de bon de commande.`,
  ],
  about: ['Traiteur banque et assurance', 'Petit-déjeuner de comité', 'Traiteur La Défense'],
  faq: FAQ_BANQUE,
  contenu: `
      <p>Pour une banque, un assureur ou une société de gestion, L'Écrin Traiteur livre un petit-déjeuner de comité <strong>à partir de ${eur(P.classique)} HT par personne</strong> : pour 12 personnes, ${eur(cla(12), true)} HT livraison comprise en Classique. Nous livrons dès 6h30 à Paris et dans les tours de La Défense, pour ${eur(LIV)} HT, avec des plateaux de réunion de ${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)} HT et des cocktails clients dès ${eur(INV.prix, true)} HT par personne.</p>

      <h2>Quel format pour quel moment, à quel prix HT ?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Prix HT</th></tr></thead>
        <tbody>
          <tr><td><strong>Comité ou réunion à 8h</strong></td><td>Petit-déjeuner Classique ou complet</td><td>${eur(P.classique)} par personne (Classique), complet sur devis</td></tr>
          <tr><td><strong>Conseil, comité d'investissement, client reçu</strong></td><td>Petit-déjeuner en porcelaine avec un maître d'hôtel</td><td>Sur devis + ${eur(P.mh)} les 6 h</td></tr>
          <tr><td><strong>Réunion qui se prolonge sur le midi</strong></td><td>Plateaux repas individuels</td><td>${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)} par plateau</td></tr>
          <tr><td><strong>Après-midi de travail</strong></td><td>Pause goûter</td><td>dès ${eur(P.gouter)} par personne</td></tr>
          <tr><td><strong>Soirée clients, résultats, départ</strong></td><td>Cocktail de 8, 12 ou 16 pièces</td><td>${prixCocktails} par personne</td></tr>
        </tbody>
      </table>
      <p>Chaque commande ajoute une livraison de ${eur(LIV)} HT à Paris et dans les communes proches, La Défense comprise, ou ${eur(LIV_REPRISE)} HT avec reprise du matériel à Paris, dans les Hauts-de-Seine et le Val-de-Marne. Le minimum de commande est de 50 € HT.</p>

      <h2>Livrer dans une tour de La Défense</h2>
      <p>Dans une tour, l'heure de mise en place dépend moins de la route que de l'accueil : contrôle à l'entrée, badge visiteur, quai de livraison, monte-charge, ascenseurs par tranche d'étages. Nous livrons à heure fixe, dès 6h30. Pour une réunion à 8h, une livraison vers 7h15 laisse le temps de passer l'accueil sécurité et de monter. À la commande, donnez-nous :</p>
      <ul>
        <li>le nom de la tour, l'adresse exacte et la commune (Courbevoie ou Puteaux) ;</li>
        <li>le point de livraison : accueil, quai ou accès piéton, et le monte-charge si la tour l'impose ;</li>
        <li>l'étage, le nom de la salle et l'heure de mise en place ;</li>
        <li>le nom et le téléphone d'un contact qui peut descendre ou faire préparer un badge.</li>
      </ul>
      <p>Le détail est dans notre guide <a href="/journal/quel-traiteur-petit-dejeuner-entreprise-la-defense">quel traiteur pour un petit-déjeuner à La Défense</a>, et sur les pages <a href="/traiteur/la-defense">traiteur à La Défense</a> et <a href="/petit-dejeuner-entreprise/la-defense">petit-déjeuner d'entreprise à La Défense</a>.</p>

      <h2>Le petit-déjeuner de comité</h2>
      <p>Les quantités suivent une règle simple : 2 mini-viennoiseries par personne (3 jusqu'à 10 personnes), une madeleine, un verre de jus de 20 cl et un thermos d'1 litre de café ou de thé pour 6 personnes.</p>
      <table>
        <thead><tr><th>Effectif</th><th>Classique, livraison comprise</th><th>Petit-déjeuner complet</th></tr></thead>
        <tbody>
          <tr><td><strong>12 personnes</strong></td><td>${eur(cla(12), true)}</td><td>Sur devis</td></tr>
          <tr><td><strong>25 personnes</strong></td><td>${eur(cla(25), true)}</td><td>Sur devis</td></tr>
        </tbody>
      </table>
      <p>Pour un conseil ou un client reçu, les produits restent les mêmes ; la présentation change : viennoiseries sur plateaux de bois, tasses en porcelaine, nappe, et un maître d'hôtel qui accueille et sert le café. Il coûte <strong>${eur(P.mh)} HT pour un service de 6 heures</strong>, mise en place et remise en ordre comprises : pour 12 personnes, Classique et maître d'hôtel reviennent à ${eur(cla(12) + P.mh, true)} HT. Voir le <a href="/journal/petit-dejeuner-prestige-entreprise-paris">petit-déjeuner de prestige</a> et la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Les plateaux de réunion</h2>
      <p>Quand un comité déborde sur le déjeuner, le plateau repas individuel évite de quitter la salle : entrée, plat et dessert sur un même plateau. Nos menus coûtent ${eur(P.plateauMin, true)} HT en végétarien, ${eur(P.plateauPoulet, true)} HT au poulet et ${eur(P.plateauMax, true)} HT au poisson. Pour 12 personnes, comptez ${eur(baComite12, true)} HT livraison comprise avec des plateaux végétariens. Les menus sont sur la page <a href="/creations/plateaux-repas">plateaux repas</a> ; pour les réunions de direction, voir aussi notre guide <a href="/journal/traiteur-codir-comex-dejeuner-reunion-direction-paris">déjeuner de codir et de comex</a>.</p>

      <h2>Le cocktail clients</h2>
      <p>Pour une soirée clients en fin de journée, le cocktail de 8 pièces (L'Invitation) convient à un moment de deux heures ; celui de 12 pièces (La Réception) remplace un dîner léger. Pour 60 invités, comptez <strong>${eur(baCk60Inv.sans, true)} HT</strong> en 8 pièces et <strong>${eur(baCk60.sans, true)} HT</strong> en 12 pièces, avec jus, eau et livraison. Les pièces salées sont halal et sans porc, et la carte est sans alcool ; un Chardonnay 0 % pour trinquer ajoute ${eur(baCk60.b.coutChard, true)} HT pour 60 personnes. Au-delà de 50 invités, comptez au moins un maître d'hôtel : voir <a href="/journal/combien-maitres-hotel-evenement-entreprise">combien de maîtres d'hôtel pour un événement</a> et les <a href="/creations/cocktails">formules cocktail</a>.</p>

      <h2>Devis, facture et bon de commande</h2>
      <p>Le devis arrive sous 24 h. La facture est une facture entreprise avec TVA ; si vos achats passent par un bon de commande, indiquez son numéro à la demande de devis pour qu'il figure sur la facture. Commande jusqu'à la veille à 14h, 48 h à l'avance à partir de 50 personnes. Les autres secteurs que nous livrons sont sur la page <a href="/metiers">par métier</a> ; pour une demande, <a href="/devis">demandez un devis</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_BANQUE)}
    `,
}

/* ═════════════════════ 6. Laboratoires, santé, medtech ═════════════════════ */
const saJour = P.classique + P.plateauMin + P.gouter
const saPlateaux25 = 25 * P.plateauMin + LIV
const saCk80 = cocktail(80, REC)

const FAQ_SANTE = [
  { q: "Peut-on être livré à 6h30 pour un staff du matin ?", a: `Oui. L'Écrin Traiteur livre dès 6h30, à l'heure que vous fixez. Un petit-déjeuner Classique pour 15 personnes revient à ${eur(cla(15), true)} HT livraison comprise ; le complet est sur devis.` },
  { q: "Quel budget par personne pour une journée de formation ?", a: `Environ ${eur(saJour, true)} HT par personne hors livraison : petit-déjeuner Classique à ${eur(P.classique)}, plateau repas végétarien à ${eur(P.plateauMin, true)} et pause goûter dès ${eur(P.gouter)}. Ajoutez ${eur(LIV)} HT par livraison.` },
  { q: "Comment gérer les régimes et les allergies ?", a: "Les plats salés sont halal et sans porc ; les options végétariennes, vegan et sans gluten se précisent au devis, avec le nombre de personnes concernées. Les allergies se signalent à la commande." },
  { q: "Y a-t-il des règles particulières pour un repas offert à des professionnels de santé ?", a: "Des règles peuvent s'appliquer selon les invités et le cadre de la réunion : renseignez-vous auprès de votre service conformité. Le devis et la facture détaillent ce qui est servi et le nombre de personnes." },
  { q: "Quel délai pour une journée scientifique de 80 personnes ?", a: "48 h à l'avance au minimum à partir de 50 personnes. Le devis arrive sous 24 h ; envoyez la demande deux à trois semaines avant si vous avez besoin de service ou de matériel." },
]

const SANTE = {
  ...BASE_24,
  slug: 'traiteur-sante-laboratoire-medtech-paris',
  titre: 'Traiteur pour laboratoires, santé et medtech à Paris : staffs du matin, formations, journées scientifiques',
  metaTitle: 'Traiteur laboratoire, santé, medtech Paris : staff, formation',
  extrait: `Petit-déjeuner de staff dès 6h30 à partir de ${eur(P.classique)} HT par personne, plateaux pour les formations, pauses et cocktail de journée scientifique, régimes précisés au devis : les formats d'un laboratoire ou d'une medtech.`,
  img: '/hero-petitdej.webp',
  relatedProducts: ['viennoiseries-melangees', 'brochettes-fruits'],
  enBref: [
    `L'Écrin Traiteur livre les laboratoires, entreprises de santé et medtech à Paris dès 6h30, avec un petit-déjeuner Classique à ${eur(P.classique)} HT par personne.`,
    `Chez L'Écrin Traiteur, une journée de formation (petit-déjeuner, plateau repas, pause) revient à environ ${eur(saJour, true)} HT par personne, hors livraison.`,
    `L'Écrin Traiteur sert un salé halal et sans porc, et précise au devis les options végétariennes, vegan et sans gluten.`,
  ],
  about: ['Traiteur laboratoire et santé', 'Petit-déjeuner de staff', 'Restauration de formation'],
  faq: FAQ_SANTE,
  contenu: `
      <p>Pour un laboratoire, une entreprise de santé ou une medtech à Paris, L'Écrin Traiteur livre le petit-déjeuner de staff <strong>dès 6h30</strong>, à partir de <strong>${eur(P.classique)} HT par personne</strong> en Classique : ${eur(cla(15), true)} HT livraison comprise pour 15 personnes. Une journée de formation revient à environ ${eur(saJour, true)} HT par personne hors livraison, et une journée scientifique se construit avec des pauses et un cocktail de 8, 12 ou 16 pièces.</p>

      <h2>Quel format pour quel moment, à quel prix HT ?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Prix HT</th></tr></thead>
        <tbody>
          <tr><td><strong>Staff ou réunion d'équipe tôt le matin</strong></td><td>Petit-déjeuner Classique ou complet</td><td>${eur(P.classique)} par personne (Classique), complet sur devis</td></tr>
          <tr><td><strong>Déjeuner d'une formation</strong></td><td>Plateaux repas individuels</td><td>${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)} par plateau</td></tr>
          <tr><td><strong>Formation sur le pouce</strong></td><td>Lunch box</td><td>dès ${eur(P.lunchMin, true)}</td></tr>
          <tr><td><strong>Pause d'une journée scientifique</strong></td><td>Pause goûter</td><td>dès ${eur(P.gouter)} par personne</td></tr>
          <tr><td><strong>Déjeuner debout d'une journée scientifique</strong></td><td>Cocktail de 12 pièces, La Réception</td><td>${eur(REC.prix, true)} par personne</td></tr>
        </tbody>
      </table>
      <p>Chaque commande ajoute une livraison de ${eur(LIV)} HT à Paris et dans les communes proches. Le minimum de commande est de 50 € HT.</p>

      <h2>Le petit-déjeuner de staff, tôt le matin</h2>
      <p>Un staff du matin commence parfois avant 8h. Nous livrons dès 6h30, à l'heure que vous fixez, pour que tout soit en place avant l'arrivée de l'équipe. Indiquez à la commande le bâtiment, l'étage, la salle et un contact joignable à l'heure de livraison. Les quantités : 2 mini-viennoiseries par personne (3 jusqu'à 10 personnes), une madeleine, un verre de jus de 20 cl et un thermos d'1 litre de café ou de thé pour 6 personnes.</p>
      <table>
        <thead><tr><th>Effectif</th><th>Classique, livraison comprise</th><th>Petit-déjeuner complet</th></tr></thead>
        <tbody>
          <tr><td><strong>10 personnes</strong></td><td>${eur(cla(10), true)}</td><td>Sur devis</td></tr>
          <tr><td><strong>15 personnes</strong></td><td>${eur(cla(15), true)}</td><td>Sur devis</td></tr>
          <tr><td><strong>30 personnes</strong></td><td>${eur(cla(30), true)}</td><td>Sur devis</td></tr>
        </tbody>
      </table>
      <p>Pour un staff qui revient chaque semaine, la même commande peut être reconduite : même horaire, mêmes quantités, effectif confirmé avant la veille à 14h. Le détail est sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>La journée de formation</h2>
      <p>Une formation d'une journée demande trois temps : l'accueil du matin, le déjeuner et la pause de l'après-midi. Petit-déjeuner Classique à ${eur(P.classique)} HT, plateau repas végétarien à ${eur(P.plateauMin, true)} HT et pause goûter dès ${eur(P.gouter)} HT font environ ${eur(saJour, true)} HT par personne, plus ${eur(LIV)} HT par livraison. Pour 25 participants, le déjeuner en plateaux végétariens revient à ${eur(saPlateaux25, true)} HT livraison comprise, et l'accueil du matin en Classique à ${eur(cla(25), true)} HT. Voir notre guide <a href="/journal/restauration-journee-formation-entreprise-budget-25-personnes">restauration d'une journée de formation</a> et les <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>La journée scientifique</h2>
      <p>Pour une journée scientifique ou un symposium interne, le déjeuner se prend souvent debout, entre deux sessions. Le cocktail de 12 pièces (La Réception) tient lieu de déjeuner : pour 80 personnes, il revient à <strong>${eur(saCk80.sans, true)} HT</strong> avec jus, eau et livraison. L'accueil du matin en Classique coûte ${eur(cla(80), true)} HT pour 80 personnes, et la pause de l'après-midi démarre à ${eur(P.gouter)} HT par personne. À partir de 50 personnes, la commande se passe 48 h à l'avance. Voir <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces par personne</a> et <a href="/journal/organiser-seminaire-entreprise-programme-journee-restauration">organiser la restauration d'une journée</a>.</p>

      <h2>Régimes et allergènes</h2>
      <p>Les plats salés sont halal et sans porc, et la carte est sans alcool ; nous ne revendiquons pas de certification halal. Les options végétariennes, vegan et sans gluten se précisent au devis, avec le nombre de personnes concernées. Les allergies se signalent à la commande : voir <a href="/journal/allergenes-traiteur-buffet-plateaux-obligations">allergènes : ce qu'un traiteur doit vous dire</a> et notre guide des <a href="/journal/traiteur-regimes-halal-vegetarien-vegan-sans-gluten-paris">régimes halal, végétarien, vegan et sans gluten</a>.</p>

      <h2>Invités extérieurs et conformité</h2>
      <p>Quand une réunion accueille des professionnels de santé extérieurs à l'entreprise, des règles internes ou légales peuvent encadrer le repas offert : renseignez-vous auprès de votre service conformité. De notre côté, le devis et la facture détaillent ce qui est servi, le nombre de personnes et le prix HT.</p>

      <h2>Devis et facture</h2>
      <p>Le devis arrive sous 24 h, la facture est une facture entreprise avec TVA, et un numéro de bon de commande peut y figurer. Les autres secteurs que nous livrons sont sur la page <a href="/metiers">par métier</a> ; pour une demande, <a href="/devis">demandez un devis</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_SANTE)}
    `,
}

/* ═════════════════════ 7. Immobilier, BTP ═════════════════════ */
const imCk = [INV, REC, CEL].map(f => cocktail(100, f))
const [imCkInv, imCkRec] = imCk
const imMh100 = 3
const imPorteOuverte30 = 30 * P.gouter + LIV

const FAQ_IMMO = [
  { q: "Combien coûte un cocktail d'inauguration pour 100 invités ?", a: `Chez L'Écrin Traiteur, ${eur(imCkInv.sans, true)} HT en 8 pièces (L'Invitation) et ${eur(imCkRec.sans, true)} HT en 12 pièces (La Réception), avec jus, eau et livraison à Paris.` },
  { q: "Livrez-vous un petit-déjeuner sur un chantier ?", a: `Oui, dès 6h30, à l'adresse et au contact indiqués à la commande. Un petit-déjeuner Classique pour 20 personnes revient à ${eur(cla(20), true)} HT livraison comprise à Paris et dans les communes proches.` },
  { q: "Livrez-vous hors de Paris ?", a: `Oui, à Paris et dans une vingtaine de villes d'Île-de-France. La livraison coûte ${eur(LIV)} HT à Paris et dans les communes proches ; pour un chantier ou un programme plus loin, elle est chiffrée sur devis.` },
  { q: "Faut-il des maîtres d'hôtel pour une inauguration ?", a: `Pour un cocktail debout, les traiteurs comptent en général 3 à 5 maîtres d'hôtel pour 100 invités. Chez L'Écrin Traiteur, un maître d'hôtel coûte ${eur(P.mh)} HT pour 6 heures.` },
  { q: "Quel délai pour une inauguration ?", a: "48 h à l'avance au minimum à partir de 50 personnes. Le devis arrive sous 24 h ; pour un événement avec service et matériel, envoyez la demande deux à trois semaines avant." },
]

const IMMO = {
  ...BASE_24,
  slug: 'traiteur-immobilier-btp-paris',
  titre: "Traiteur pour l'immobilier et le BTP en Île-de-France : inaugurations, petits-déjeuners de chantier, portes ouvertes",
  metaTitle: 'Traiteur immobilier et BTP Île-de-France : inauguration',
  extrait: `Cocktail d'inauguration de 8, 12 ou 16 pièces dès ${eur(INV.prix, true)} HT, petit-déjeuner de chantier dès 6h30 à partir de ${eur(P.classique)} HT par personne, pause pour les portes ouvertes : les formats d'un promoteur ou d'une entreprise du BTP.`,
  img: '/cocktail-celebration.webp',
  relatedProducts: ['viennoiseries-melangees', 'brochettes-fruits'],
  enBref: [
    `L'Écrin Traiteur livre les promoteurs, foncières et entreprises du BTP à Paris et en Île-de-France, dès 6h30.`,
    `Chez L'Écrin Traiteur, un cocktail d'inauguration de 8 pièces pour 100 invités revient à ${eur(imCkInv.sans, true)} HT avec jus, eau et livraison.`,
    `Un petit-déjeuner de chantier pour 20 personnes coûte ${eur(cla(20), true)} HT livraison comprise chez L'Écrin Traiteur ; hors des communes proches de Paris, la livraison est sur devis.`,
  ],
  about: ['Traiteur immobilier et BTP', "Cocktail d'inauguration", 'Petit-déjeuner de chantier'],
  faq: FAQ_IMMO,
  contenu: `
      <p>Pour un promoteur, une foncière ou une entreprise du BTP en Île-de-France, L'Écrin Traiteur livre le cocktail d'inauguration en 8, 12 ou 16 pièces, <strong>dès ${eur(INV.prix, true)} HT par personne</strong> : ${eur(imCkInv.sans, true)} HT pour 100 invités avec jus, eau et livraison. Le petit-déjeuner de chantier arrive dès 6h30, à partir de ${eur(P.classique)} HT par personne, et les portes ouvertes se servent avec une pause goûter dès ${eur(P.gouter)} HT par personne.</p>

      <h2>Quel format pour quel moment, à quel prix HT ?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Prix HT</th></tr></thead>
        <tbody>
          <tr><td><strong>Inauguration, livraison d'un programme</strong></td><td>Cocktail de 8, 12 ou 16 pièces</td><td>${prixCocktails} par personne</td></tr>
          <tr><td><strong>Réunion de chantier tôt le matin</strong></td><td>Petit-déjeuner Classique</td><td>${eur(P.classique)} par personne</td></tr>
          <tr><td><strong>Portes ouvertes, journée de vente</strong></td><td>Pause goûter</td><td>dès ${eur(P.gouter)} par personne</td></tr>
          <tr><td><strong>Réunion de lancement ou de réception de travaux</strong></td><td>Plateaux repas ou lunch box</td><td>${eur(P.plateauMin, true)} à ${eur(P.plateauMax, true)} par plateau, lunch box dès ${eur(P.lunchMin, true)}</td></tr>
          <tr><td><strong>Service d'une inauguration</strong></td><td>Maître d'hôtel</td><td>${eur(P.mh)} pour 6 heures</td></tr>
        </tbody>
      </table>
      <p>La livraison coûte ${eur(LIV)} HT à Paris et dans les communes proches, ou ${eur(LIV_REPRISE)} HT avec reprise du matériel à Paris, dans les Hauts-de-Seine et le Val-de-Marne. Plus loin en Île-de-France, elle est chiffrée sur devis. Le minimum de commande est de 50 € HT.</p>

      <h2>L'inauguration ou la livraison d'un programme</h2>
      <p>Une inauguration réunit élus, riverains, acquéreurs et partenaires pendant une heure ou deux. Le cocktail de 8 pièces suffit pour un moment court en fin de matinée ou en fin de journée ; 12 pièces remplacent un déjeuner, 16 pièces un dîner. Le tableau compte les pièces, les boissons sans alcool (1 litre de jus pour 4 invités, une bouteille d'eau de 75 cl pour 5) et une livraison à Paris.</p>
      <table>
        <thead><tr><th>Formule</th><th>Pièces par personne</th><th>100 invités, total HT</th></tr></thead>
        <tbody>
${imCk.map(c => `          <tr><td><strong>${c.f.nom}</strong></td><td>${c.f.pieces}</td><td>${eur(c.sans, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Les pièces salées sont halal et sans porc, et la carte est sans alcool ; un Chardonnay 0 % pour trinquer ajoute ${eur(imCkInv.b.coutChard, true)} HT pour 100 invités. Pour le service, ${imMh100} maîtres d'hôtel coûtent ${eur(imMh100 * P.mh)} HT pour 6 heures. Sur un site sans salle, précisez l'accès, l'électricité et l'abri prévu : nous demandons le nombre de tables avant de chiffrer le matériel. Voir <a href="/journal/organiser-inauguration-entreprise-deroule-budget-traiteur">organiser une inauguration</a>, <a href="/journal/cocktail-inauguration-entreprise">le cocktail d'inauguration</a> et les <a href="/creations/cocktails">formules cocktail</a>.</p>

      <h2>Le petit-déjeuner de chantier</h2>
      <p>Une réunion de chantier ou un accueil sécurité commence tôt. Nous livrons dès 6h30, à l'adresse et au contact indiqués : donnez l'entrée du chantier, le lieu de dépose (bungalow, salle de réunion, bureau de vente) et un téléphone joignable. Le petit-déjeuner arrive en emballages rigides et en thermos, faciles à porter et à poser sur une table, avec gobelets, serviettes, sucre et touillettes.</p>
      <table>
        <thead><tr><th>Effectif</th><th>Classique, livraison comprise</th></tr></thead>
        <tbody>
          <tr><td><strong>10 personnes</strong></td><td>${eur(cla(10), true)}</td></tr>
          <tr><td><strong>20 personnes</strong></td><td>${eur(cla(20), true)}</td></tr>
          <tr><td><strong>40 personnes</strong></td><td>${eur(cla(40), true)}</td></tr>
        </tbody>
      </table>
      <p>Ces totaux valent pour Paris et les communes proches ; pour un chantier plus loin, la livraison est sur devis. Le petit-déjeuner complet est aussi sur devis. Les quantités détaillées sont dans <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">petit-déjeuner pour 20 personnes</a>.</p>

      <h2>Portes ouvertes et journées de vente</h2>
      <p>Pour des portes ouvertes dans un bureau de vente ou un appartement témoin, la pause goûter se pose sur une table et se sert toute l'après-midi, sans service. Elle démarre à ${eur(P.gouter)} HT par personne : pour 30 visiteurs, à partir de ${eur(imPorteOuverte30, true)} HT livraison comprise. Voir la page <a href="/creations/pauses-gourmandes">pauses gourmandes</a>.</p>

      <h2>Délais et devis</h2>
      <p>Commande jusqu'à la veille à 14h, 48 h à l'avance à partir de 50 personnes. Le devis arrive sous 24 h, la facture est une facture entreprise avec TVA. Les autres secteurs que nous livrons sont sur la page <a href="/metiers">par métier</a> ; pour une demande, <a href="/devis">demandez un devis</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_IMMO)}
    `,
}

export const METIERS_ARTICLES = [AVOCATS, CONSEIL, TECH, AGENCE, BANQUE, SANTE, IMMO]
