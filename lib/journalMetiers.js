// Guides « par métier » (19 octobre 2026) : cabinet d'avocats, cabinet de conseil, ESN / tech, agence événementielle.
//
// Sources des chiffres :
//   - FICHE-VERITE.md (partie « Certain ») : livraison 29 € HT, minimum 50 € HT, commande la veille 14h, 48 h dès 50 personnes,
//     devis sous 24 h, dès 6h30, Classique 8 € HT, complet sur devis, pause goûter dès 6 € HT, cocktail 29,90 / 40,90 / 51,90 € HT ;
//   - lib/journalQuestions.js : pdj(n) et cocktail(n, FORMULES.x) recalculent les budgets (aucun montant recopié) ;
//   - app/creations/plateaux-repas/data.js et app/creations/lunch-box/data.js : prix des plateaux et des lunch box ;
//   - lib/journalService.js : maître d'hôtel à 250 € HT pour 6 heures, vaisselle Options, ratios de service.
// Clients nommés : Bain & Company et Sia Partners seulement, sans aucun chiffre (règle du 17/10/2026).
// « Halal et sans porc » seulement sur le salé.
import { pdj, fr, eur, faqHtml, LIV, FORMULES, cocktail } from './journalQuestions'
import { PRIX as PRIX_PLATEAUX } from '../app/creations/plateaux-repas/data'
import { BOXES } from '../app/creations/lunch-box/data'

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
  completMin: 12, completMax: 16, // petit-déjeuner complet, par personne (FICHE-VERITE)
  gouter: 6, // pause goûter, dès, par personne (FICHE-VERITE)
  mh: 250, // maître d'hôtel, service de 6 heures (lib/journalService.js)
}
const P = PX_METIERS
const { invitation: INV, reception: REC, celebration: CEL } = FORMULES

const DATE = '19 octobre 2026'
const ISO = '2026-10-19'
const BASE = { categorie: 'Conseils', date: DATE, isoDate: ISO, isoModified: ISO }
const SIGNATURE = `<p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes. Livraison 29 € HT à Paris et dans les communes proches. Minimum de commande 50 € HT.</em></p>`

const prixCocktails = `${eur(INV.prix, true)}, ${eur(REC.prix, true)} ou ${eur(CEL.prix, true)}`

/* ═════════════════════ 1. Cabinet d'avocats ═════════════════════ */
const av10 = pdj(10)
const av20 = pdj(20)
const avCk = cocktail(50, INV)
const avCkRec = cocktail(50, REC)
const avPlateaux10 = 10 * P.plateauMin + LIV

const FAQ_AVOCATS = [
  { q: "Combien coûte un petit-déjeuner pour une réunion client de 10 personnes ?", a: `Chez L'Écrin Traiteur, ${eur(10 * P.classique + LIV, true)} HT en Classique (8 € HT par personne plus la livraison de 29 € HT), ou ${eur(av10.total, true)} HT pour le petit-déjeuner complet livré : 3 mini-viennoiseries par personne, madeleines, jus et café en thermos.` },
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
    `Un petit-déjeuner complet pour 20 personnes revient à ${eur(av20.total, true)} HT livraison comprise chez L'Écrin Traiteur, et ${eur(av20.total + P.mh, true)} HT avec un maître d'hôtel pendant 6 heures.`,
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
        <thead><tr><th>Effectif</th><th>Classique, livraison comprise</th><th>Petit-déjeuner complet, livraison comprise</th></tr></thead>
        <tbody>
          <tr><td><strong>10 personnes</strong></td><td>${eur(10 * P.classique + LIV, true)}</td><td>${eur(av10.total, true)}</td></tr>
          <tr><td><strong>20 personnes</strong></td><td>${eur(20 * P.classique + LIV, true)}</td><td>${eur(av20.total, true)}</td></tr>
        </tbody>
      </table>
      <p>Au-delà de 15 personnes, le petit-déjeuner complet ajoute une brochette de fruits frais par personne. Le détail est sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Le petit-déjeuner de prestige, en porcelaine</h2>
      <p>Pour recevoir les associés d'un autre cabinet, un client important ou un conseil d'administration, les produits restent les mêmes. Ce qui change, c'est la présentation : viennoiseries posées sur des plateaux de bois, tasses en porcelaine, nappe, et un maître d'hôtel qui accueille et sert le café.</p>
      <p>Chez L'Écrin Traiteur, un maître d'hôtel coûte <strong>${eur(P.mh)} HT pour un service de 6 heures</strong>, mise en place et remise en ordre comprises. Pour 20 personnes, le petit-déjeuner complet et le maître d'hôtel reviennent à <strong>${eur(av20.total + P.mh, true)} HT</strong>. La porcelaine et le nappage viennent de chez Options, sur devis. Un seul maître d'hôtel suffit jusqu'à une cinquantaine de personnes : voir <a href="/journal/combien-maitres-hotel-evenement-entreprise">combien de maîtres d'hôtel pour un événement</a> et notre guide du <a href="/journal/petit-dejeuner-prestige-entreprise-paris">petit-déjeuner de prestige</a>.</p>

      <h2>Le déjeuner de travail en salle de réunion</h2>
      <p>Quand une réunion se prolonge sur le midi, le plateau repas individuel évite de quitter la table : entrée, plat et dessert dans un même plateau. Nos six menus coûtent ${eur(P.plateauMin, true)} HT en végétarien, ${eur(P.plateauPoulet, true)} HT au poulet et ${eur(P.plateauMax, true)} HT au poisson. Pour 10 personnes, comptez ${eur(avPlateaux10, true)} HT livraison comprise avec des plateaux végétariens.</p>
      <p>Pour un format plus léger, la lunch box (sandwich, entrée et dessert) démarre à ${eur(P.lunchMin, true)} HT. Les menus sont sur les pages <a href="/creations/plateaux-repas">plateaux repas</a> et <a href="/creations/lunch-box">lunch box</a>. Un closing dont l'heure n'est pas connue se commande comme le reste : jusqu'à la veille à 14h.</p>

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
const co15 = pdj(15)
const co30 = pdj(30)
const co50 = pdj(50)
const coJour = co30.produits / 30 + P.plateauMin + P.gouter
const coAfter = cocktail(40, INV)
const coComite12 = 12 * P.plateauMin + LIV
const coComite12Max = 12 * P.plateauMax + LIV

const FAQ_CONSEIL = [
  { q: "Quels cabinets de conseil L'Écrin Traiteur livre-t-il ?", a: "Bain & Company et Sia Partners font partie de nos clients réguliers, surtout pour des petits-déjeuners de réunion et des matinées d'équipe. Leurs cas sont décrits sur la page cas clients." },
  { q: "Combien coûte un petit-déjeuner d'équipe pour 30 personnes ?", a: `${eur(co30.total, true)} HT livraison comprise pour le petit-déjeuner complet, soit ${eur(co30.produits / 30, true)} HT par personne hors livraison. En Classique, ${eur(30 * P.classique + LIV, true)} HT.` },
  { q: "Quel budget par personne pour un séminaire d'une journée ?", a: `Environ ${eur(coJour, true)} HT par personne hors livraison pour 30 personnes : petit-déjeuner complet, plateau repas végétarien à ${eur(P.plateauMin, true)} et pause goûter dès ${eur(P.gouter)}. Ajoutez 29 € HT par livraison.` },
  { q: "Peut-on garder la même commande d'une semaine sur l'autre ?", a: "Oui : même horaire, mêmes quantités, sans tout redemander. Il suffit de confirmer l'effectif avant la veille à 14h." },
  { q: "Quel délai pour un petit-déjeuner de 50 personnes ?", a: `48 h à l'avance à partir de 50 personnes. Le petit-déjeuner complet pour 50 revient à ${eur(co50.total, true)} HT livraison comprise.` },
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
    `Chez L'Écrin Traiteur, un petit-déjeuner complet pour 30 personnes coûte ${eur(co30.total, true)} HT livraison comprise ; le Classique démarre à ${eur(P.classique)} HT par personne.`,
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
        <thead><tr><th>Effectif</th><th>Petit-déjeuner complet, livraison comprise</th><th>Par personne, hors livraison</th></tr></thead>
        <tbody>
${[co15, co30, co50].map(r => `          <tr><td><strong>${r.n} personnes</strong></td><td>${eur(r.total, true)}</td><td>${eur(r.produits / r.n, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Le petit-déjeuner complet compte 2 mini-viennoiseries par personne, des madeleines (et un cake au-delà de 20 personnes), une brochette de fruits au-delà de 15, un verre de jus et un thermos de café ou de thé pour 6. À partir de 50 personnes, la commande se passe 48 h à l'avance. Voir le guide du <a href="/journal/petit-dejeuner-recurrent-hebdomadaire-entreprise-prix">petit-déjeuner récurrent</a> et la page <a href="/univers/cas-clients">cas clients</a>.</p>

      <h2>Les plateaux repas pour un comité</h2>
      <p>Un comité de pilotage se tient souvent sur le temps du déjeuner, autour de la table. Le plateau individuel (entrée, plat, dessert) permet de manger sans interrompre la réunion. Pour 12 participants, comptez ${eur(coComite12, true)} à ${eur(coComite12Max, true)} HT livraison comprise, selon les menus. Trois de nos six menus sont végétariens ; les plats salés sont halal et sans porc. Voir les <a href="/creations/plateaux-repas">plateaux repas</a> et <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">combien de plateaux commander</a>.</p>

      <h2>La formation interne en lunch box</h2>
      <p>Pour une demi-journée de formation, la lunch box se mange dans la salle, sans longue pause : un sandwich, une entrée et un dessert, serviette et couverts inclus. Elle coûte de ${eur(P.lunchMin, true)} à ${eur(P.lunchMax, true)} HT ; pour 20 participants, comptez dès ${eur(20 * P.lunchMin + LIV, true)} HT livraison comprise. Voir la page <a href="/creations/lunch-box">lunch box</a>.</p>

      <h2>Le séminaire d'une journée</h2>
      <p>Pour 30 participants sur une journée, le budget se construit moment par moment :</p>
      <table>
        <thead><tr><th>Moment</th><th>Format</th><th>Par personne HT</th></tr></thead>
        <tbody>
          <tr><td><strong>Accueil</strong></td><td>Petit-déjeuner complet</td><td>${eur(co30.produits / 30, true)}</td></tr>
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
const te12 = pdj(12)
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
      <p>Voir la page <a href="/creations/lunch-box">lunch box</a> et notre guide <a href="/journal/traiteur-rentree-onboarding-entreprise-paris">rentrée et onboarding</a>.</p>

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
      <p>Un lancement de sprint ou une rétrospective du matin réunit souvent une dizaine de personnes. Pour 12 personnes, le Classique revient à ${eur(12 * P.classique + LIV, true)} HT et le petit-déjeuner complet à ${eur(te12.total, true)} HT, livraison comprise. La livraison commence à 6h30. Voir les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners</a>.</p>

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

export const METIERS_ARTICLES = [AVOCATS, CONSEIL, TECH, AGENCE]
