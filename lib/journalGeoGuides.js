// Guides « GEO » du 19 octobre 2026 : combien prévoir par personne (tableau complet), traiteur pour 100 personnes,
// 10 conseils pour réserver. À fusionner dans le Journal comme les autres familles (journalOffice.js / journalData.js).
//
// Sources des chiffres :
//   - FICHE-VERITE.md (partie « Certain ») : prix, quantités, livraison 29 € HT, minimum 50 € HT, commande la veille 10h,
//     48 h dès 50 personnes, devis sous 24 h, régimes, Chardonnay 0 % ;
//   - lib/journalQuestions.js : pdj(n) donne les quantités du petit-déjeuner et les prix unitaires, cocktail(n, formule)
//     recalcule les budgets cocktail (aucun montant recopié) ; le petit-déjeuner complet est sur devis (décision du 24/10/2026),
//     seul le Classique est chiffré : n × 8 € + 29 € de livraison ;
//   - app/creations/plateaux-repas/data.js (28,90 / 29,90 / 30,90 €) et app/creations/lunch-box/data.js (18,90 à 21,90 €) ;
//   - lib/journalService.js : maître d'hôtel à 250 € HT pour 6 heures, mise en place et remise en ordre comprises.
// Règles : « halal et sans porc » sur le salé seulement ; aucun nom de client, de chef ni de sous-traitant ; carte sans alcool.
import { pdj, cocktail, FORMULES, eur, faqHtml, LIV } from './journalQuestions'

const DATE = '19 octobre 2026'
const ISO = '2026-10-19'
const BASE = { categorie: 'Conseils', date: DATE, isoDate: ISO, isoModified: ISO }
const e2 = (x) => eur(x, true)
const SIGNATURE = `<p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes. Livraison 29 € HT à Paris et dans les communes proches, autres zones sur devis. Minimum de commande 50 € HT.</em></p>`

/* ───────────── Prix de base (catalogue, octobre 2026) ───────────── */
const PLATEAU = { vege: 28.9, poulet: 29.9, poisson: 30.9 } // app/creations/plateaux-repas/data.js
const LUNCH = { min: 18.9, max: 21.9 } // app/creations/lunch-box/data.js
const CLASSIQUE = 8 // petit-déjeuner Classique, par personne
const PAUSE = 6 // pause gourmande, dès, par personne
const MH = 250 // maître d'hôtel, 6 heures

/* ───────────── Calculs ───────────── */
const p10 = pdj(10)
const p20 = pdj(20)
const p100 = pdj(100)
const cla = (n) => n * CLASSIQUE + LIV // petit-déjeuner Classique livré, en € HT
const pu = (r, debut) => r.lignes.find(l => l.label.startsWith(debut)).pu
const PU_THERMOS = pu(p20, 'Thermos de café')
const PU_JUS = pu(p20, "Jus d'orange")
const PU_PLATEAU30 = pu(p20, 'Plateau de 30')

const inv100 = cocktail(100, FORMULES.invitation)
const rec100 = cocktail(100, FORMULES.reception)
const cel100 = cocktail(100, FORMULES.celebration)
const PU_EAU = rec100.b.coutEau / rec100.b.eau
const PU_CHARD = rec100.b.coutChard / rec100.b.chard
const boissonsCocktailParPers = (rec100.b.coutJus + rec100.b.coutEau) / 100

// Plateaux repas et lunch box pour 100 personnes, une livraison
const plat100 = (prix) => 100 * prix + LIV
const plat110 = (prix) => 110 * prix + LIV
// Répartition par défaut : 2 plateaux au poulet pour 1 végétarien (sur 100 : 67 poulet, 33 végétariens)
const mix100 = 67 * PLATEAU.poulet + 33 * PLATEAU.vege + LIV

// Journée de séminaire pour 100 : accueil Classique, deux pauses, plateau au poulet, deux livraisons
const SEM_PERS = CLASSIQUE + 2 * PAUSE + PLATEAU.poulet
const sem100 = 100 * SEM_PERS + 2 * LIV

/* ═════════════════════ 1 : combien prévoir par personne ═════════════════════ */
const FAQ_PAR_PERSONNE = [
  { q: "Combien prévoir par personne pour un petit-déjeuner d'entreprise ?", a: `2 mini-viennoiseries (3 jusqu'à 10 personnes), 1 mignardise, 1 verre de jus de 20 cl, 1 brochette de fruits au-delà de 15 personnes et 1 thermos d'1 litre pour 6. Chez L'Écrin Traiteur, comptez ${eur(CLASSIQUE)} HT par personne en formule Classique, le petit-déjeuner complet sur devis, plus la livraison.` },
  { q: 'Combien de pièces cocktail par personne ?', a: `6 à 8 pièces pour un apéritif, 12 à 14 pour un cocktail déjeunatoire et 16 à 18 pour un cocktail dînatoire. Les formules de L'Écrin Traiteur comptent 8, 12 et 16 pièces, à ${e2(FORMULES.invitation.prix)}, ${e2(FORMULES.reception.prix)} et ${e2(FORMULES.celebration.prix)} HT par personne.` },
  { q: 'Combien de plateaux repas commander ?', a: `Chez L'Écrin Traiteur, un plateau par personne présente, plus 10 % si la liste n'est pas nominative. Un plateau coûte de ${e2(PLATEAU.vege)} à ${e2(PLATEAU.poisson)} HT et comprend entrée, plat, dessert, pain, couverts et serviettes.` },
  { q: 'Combien de boissons par personne ?', a: `En réunion, L'Écrin Traiteur compte 1 boisson chaude par personne, soit 1 thermos d'1 litre pour 6. Au petit-déjeuner, 1 verre de jus de 20 cl. En cocktail, 1 litre de jus pour 4 personnes et 1 bouteille d'eau de 75 cl pour 5, soit environ ${e2(boissonsCocktailParPers)} HT par personne.` },
  { q: 'Combien de desserts par personne ?', a: "Chez L'Écrin Traiteur, 1,5 à 2 pièces sucrées pour une pause, 2 à 3 pour un buffet, 4 pour un cocktail dînatoire. Dans les formules cocktail, le sucré est compris : 2, 3 ou 4 pièces selon la formule." },
  { q: 'Faut-il commander plus que l\'effectif ?', a: 'Ajoutez 10 % quand la liste est approximative ou que des invités externes sont attendus. Avec une liste nominative confirmée la veille, commandez l\'effectif exact.' },
  { q: "Quelles quantités et quel budget pour un petit-déjeuner de 10, 20 ou 100 personnes ?", a: "Pour 10 personnes : 30 mini-viennoiseries, 2 L de jus et 2 thermos, soit 109 € HT en formule Classique livraison comprise. Pour 20 : 40 mini-viennoiseries, 4 L, 4 thermos, 189 € HT. Pour 100 : 200 mini-viennoiseries, 20 L, 17 thermos, 829 € HT." },
  { q: "Combien prévoir par personne pour une pause gourmande ?", a: "Comptez 1,5 à 2 pièces sucrées et 1 boisson par personne, dès 6 € HT par personne. Pour 20 personnes, cela fait 149 € HT livraison comprise (20 × 6 € + 29 €)." },
  { q: "Combien coûte une lunch box pour 20 personnes ?", a: "Une lunch box par personne, de 18,90 à 21,90 € HT. Pour 20 personnes, le budget va de 407 € à 467 € HT livraison comprise (20 × 18,90 € + 29 €, ou 20 × 21,90 € + 29 €)." },
  { q: "Quelles quantités pour un buffet froid de 20 personnes ?", a: "Comptez 6 pièces salées par personne si des salades accompagnent, 9 si les pièces sont le seul plat, plus 2 à 3 pièces sucrées. Pour 20 personnes : 120 pièces salées avec salades ou 180 sans, et 40 à 60 pièces sucrées. Un buffet froid se chiffre sur devis." },
  { q: "Combien coûte un cocktail pour 100 personnes ?", a: "Pour 100 personnes, jus, eau et livraison compris : 3 352,50 € HT en L'Invitation (8 pièces), 4 452,50 € HT en La Réception (12 pièces) et 5 552,50 € HT en La Célébration (16 pièces)." },
  { q: "Combien de pièces salées et sucrées dans une formule cocktail ?", a: "Le sucré est déjà compté : 2 pièces sucrées sur 8, 3 sur 12 et 4 sur 16, soit 6, 9 et 12 pièces salées. Comptez deux tiers à trois quarts de salé, le reste en sucré." },
  { q: "Combien coûtent les boissons d'un cocktail ?", a: "Un litre de jus coûte 9,50 € HT et une bouteille d'eau de 75 cl 4,80 € HT, à raison de 1 L de jus pour 4 personnes et 1 bouteille d'eau pour 5. Cela représente environ 3,34 € HT par personne, sans le Chardonnay 0 % à 16,90 € HT la bouteille." },
  { q: "Jusqu'à quand confirmer les quantités et modifier la commande ?", a: "Les quantités se confirment jusqu'à la veille à 10h, et 48 h avant à partir de 50 personnes. L'annulation est sans frais jusqu'à 2 jours ouvrés avant la livraison, avant 10h." },
]

const CONTENU_PAR_PERSONNE = `
      <p>Pour un traiteur d'entreprise, comptez par personne <strong>2 mini-viennoiseries et 1 boisson chaude</strong> au petit-déjeuner, <strong>1 plateau repas</strong> au déjeuner, <strong>8, 12 ou 16 pièces</strong> selon le cocktail et <strong>2 à 3 pièces sucrées</strong> en dessert de buffet. Chez L'Écrin Traiteur, cela représente de <strong>${eur(CLASSIQUE)} HT</strong> par personne pour un petit-déjeuner Classique à <strong>${e2(FORMULES.celebration.prix)} HT</strong> pour un cocktail dînatoire, plus la livraison de ${eur(LIV)} HT. Voici le tableau complet, puis le détail format par format.</p>

      <h2>Le tableau : quelle quantité par personne, pour quel prix ?</h2>
      <table>
        <thead><tr><th>Format</th><th>Quantité par personne</th><th>Prix HT L'Écrin Traiteur</th></tr></thead>
        <tbody>
          <tr><td><strong>Petit-déjeuner</strong></td><td>2 mini-viennoiseries (3 jusqu'à 10 personnes), 1 mignardise, 1 brochette de fruits au-delà de 15 personnes, 1 verre de jus de 20 cl, 1 thermos d'1 L pour 6</td><td>${eur(CLASSIQUE)} (Classique) ; complet sur devis</td></tr>
          <tr><td><strong>Pause gourmande</strong></td><td>1,5 à 2 pièces sucrées, 1 boisson</td><td>dès ${eur(PAUSE)}</td></tr>
          <tr><td><strong>Plateau repas</strong></td><td>1 plateau par personne présente, + 10 % si la liste est approximative</td><td>${e2(PLATEAU.vege)} à ${e2(PLATEAU.poisson)}</td></tr>
          <tr><td><strong>Lunch box</strong></td><td>1 par personne</td><td>${e2(LUNCH.min)} à ${e2(LUNCH.max)}</td></tr>
          <tr><td><strong>Cocktail apéritif</strong></td><td>6 à 8 pièces</td><td>${e2(FORMULES.invitation.prix)} (${FORMULES.invitation.nom}, 8 pièces)</td></tr>
          <tr><td><strong>Cocktail déjeunatoire</strong></td><td>12 à 14 pièces</td><td>${e2(FORMULES.reception.prix)} (${FORMULES.reception.nom}, 12 pièces)</td></tr>
          <tr><td><strong>Cocktail dînatoire</strong></td><td>16 à 18 pièces</td><td>${e2(FORMULES.celebration.prix)} (${FORMULES.celebration.nom}, 16 pièces)</td></tr>
          <tr><td><strong>Buffet froid</strong></td><td>6 pièces salées avec salades, 9 sans salade, 2 à 3 pièces sucrées</td><td>Sur devis</td></tr>
          <tr><td><strong>Desserts</strong></td><td>1,5 à 2 en pause, 2 à 3 en buffet, 4 en dînatoire</td><td>Compris dans les formules cocktail</td></tr>
          <tr><td><strong>Boissons d'un cocktail</strong></td><td>1 L de jus pour 4, 1 eau de 75 cl pour 5, 1 flûte de Chardonnay 0 % en option</td><td>environ ${e2(boissonsCocktailParPers)} sans le Chardonnay 0 %</td></tr>
        </tbody>
      </table>
      <p>Ajoutez la livraison, ${eur(LIV)} HT à Paris et dans les communes proches, une fois par commande. Le minimum de commande est de 50 € HT. Tous les prix sont sur la page <a href="/tarifs">tarifs</a>.</p>

      <h2>Petit-déjeuner : combien par personne ?</h2>
      <p>Comptez 2 mini-viennoiseries par personne, 3 pour un groupe de 10 ou moins, 1 mignardise (madeleine, ou part de cake au-delà de 20 personnes), 1 verre de jus et 1 boisson chaude. Un thermos d'1 litre sert 6 tasses ; on prévoit 4 thermos de café pour 1 de thé. La brochette de fruits frais s'ajoute au-delà de 15 personnes.</p>
      <table>
        <thead><tr><th>Effectif</th><th>Mini-viennoiseries</th><th>Jus</th><th>Thermos</th><th>Classique HT, livraison comprise</th></tr></thead>
        <tbody>
          <tr><td>10 personnes</td><td>${p10.vienn}</td><td>${p10.litres} L</td><td>${p10.thermos}</td><td>${e2(cla(10))}</td></tr>
          <tr><td>20 personnes</td><td>${p20.vienn}</td><td>${p20.litres} L</td><td>${p20.thermos}</td><td>${e2(cla(20))}</td></tr>
          <tr><td>100 personnes</td><td>${p100.vienn}</td><td>${p100.litres} L</td><td>${p100.thermos}</td><td>${e2(cla(100))}</td></tr>
        </tbody>
      </table>
      <p>Le Classique (viennoiseries, jus, café, fruits) coûte ${eur(CLASSIQUE)} HT par personne ; le petit-déjeuner complet est sur devis. Les mini-viennoiseries arrivent en plateaux de 30 à ${e2(PU_PLATEAU30)} HT. Le détail est dans <a href="/journal/combien-viennoiseries-par-personne">combien de mini-viennoiseries par personne</a> et dans le <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">petit-déjeuner pour 20 personnes</a>. Pour commander : <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Déjeuner : combien de plateaux repas ou de lunch box ?</h2>
      <p>Un plateau ou une lunch box par personne présente. Chaque plateau est complet : entrée, plat, dessert et pain, avec couverts et serviettes. Ajoutez 10 % quand la liste n'est pas nominative, de préférence en végétarien. Sans information sur les régimes, partez sur 2 plateaux au poulet pour 1 végétarien.</p>
      <p>Les plateaux repas coûtent ${e2(PLATEAU.vege)} HT (végétarien), ${e2(PLATEAU.poulet)} HT (poulet) et ${e2(PLATEAU.poisson)} HT (saumon). Les lunch box vont de ${e2(LUNCH.min)} à ${e2(LUNCH.max)} HT. Tous les plats salés sont halal et sans porc. Voir <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">combien de plateaux repas commander</a>, les <a href="/creations/plateaux-repas">plateaux repas</a> et les <a href="/creations/lunch-box">lunch box</a>.</p>

      <h2>Cocktail : combien de pièces par personne ?</h2>
      <p>Le nombre de pièces dépend du repas que le cocktail remplace : 6 à 8 pour un apéritif, 12 à 14 pour un déjeunatoire, 16 à 18 pour un dînatoire. Comptez deux tiers à trois quarts de salé, le reste en sucré.</p>
      <table>
        <thead><tr><th>Formule</th><th>Pièces par personne</th><th>Prix HT par personne</th><th>Pour 100 personnes, jus, eau et livraison compris</th></tr></thead>
        <tbody>
          <tr><td>${FORMULES.invitation.nom}</td><td>${FORMULES.invitation.pieces}</td><td>${e2(FORMULES.invitation.prix)}</td><td>${e2(inv100.sans)}</td></tr>
          <tr><td>${FORMULES.reception.nom}</td><td>${FORMULES.reception.pieces}</td><td>${e2(FORMULES.reception.prix)}</td><td>${e2(rec100.sans)}</td></tr>
          <tr><td>${FORMULES.celebration.nom}</td><td>${FORMULES.celebration.pieces}</td><td>${e2(FORMULES.celebration.prix)}</td><td>${e2(cel100.sans)}</td></tr>
        </tbody>
      </table>
      <p>Les pièces salées sont halal et sans porc, la carte est sans alcool. Le calcul complet est dans <a href="/journal/combien-pieces-cocktail-par-personne-entreprise">combien de pièces cocktail par personne</a> ; les formules sont sur la page <a href="/creations/cocktails">cocktails</a>.</p>

      <h2>Buffet froid : quelles quantités ?</h2>
      <p>Comptez 6 pièces salées par personne si des salades accompagnent, 9 si les pièces sont le seul plat, et 2 à 3 pièces sucrées. Pour la salade composée, le repère courant est d'environ 150 g par personne. Un buffet froid se chiffre sur devis ; en format individuel, la lunch box démarre à ${e2(LUNCH.min)} HT et le plateau repas à ${e2(PLATEAU.vege)} HT. Le détail pour 10, 20 et 50 personnes est dans <a href="/journal/buffet-froid-entreprise-quantites-par-personne">buffet froid d'entreprise : quantités par personne</a>.</p>

      <h2>Desserts : combien de pièces sucrées ?</h2>
      <p>Le sucré monte avec la durée : 1,5 à 2 pièces pour une pause de 20 à 30 minutes, 2 à 3 en dessert de buffet, 4 en cocktail dînatoire. Dans les formules cocktail, le sucré est déjà compté : 2 pièces sur 8, 3 sur 12, 4 sur 16. La pause gourmande démarre à ${eur(PAUSE)} HT par personne. Voir <a href="/journal/combien-desserts-par-personne-buffet-cocktail-gouter">combien de desserts par personne</a>.</p>

      <h2>Boissons : combien par personne ?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Repère</th><th>Prix HT de l'unité</th></tr></thead>
        <tbody>
          <tr><td>Réunion, petit-déjeuner</td><td>1 thermos d'1 L pour 6 personnes, 4 café pour 1 thé</td><td>${e2(PU_THERMOS)} le thermos</td></tr>
          <tr><td>Petit-déjeuner</td><td>1 verre de jus de 20 cl par personne, 1 L pour 5</td><td>${e2(PU_JUS)} le litre</td></tr>
          <tr><td>Cocktail de 2 heures</td><td>1 L de jus pour 4, 1 bouteille d'eau de 75 cl pour 5</td><td>${e2(PU_JUS)} le litre de jus, ${e2(PU_EAU)} l'eau</td></tr>
          <tr><td>Pour trinquer</td><td>1 flûte par personne, 6 flûtes par bouteille</td><td>${e2(PU_CHARD)} le Chardonnay 0 %</td></tr>
        </tbody>
      </table>
      <p>La carte est entièrement sans alcool. Le détail par durée est dans <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">combien de boissons par personne</a>.</p>

      <h2>Quelle marge prévoir ?</h2>
      <p>Commandez l'effectif exact si la liste est nominative et confirmée la veille. Ajoutez 10 % si des invités externes sont attendus ou si la liste bouge encore. Les quantités se confirment jusqu'à la veille à 10h, 48 h avant à partir de 50 personnes.</p>

      <h2>Comment commander ?</h2>
      <p>Donnez la date, l'adresse, l'heure et l'effectif : L'Écrin Traiteur envoie un <a href="/devis">devis</a> sous 24 h, avec une facture entreprise et la TVA. Livraison dès 6h30 à Paris et en Île-de-France. Pour un grand groupe, voir <a href="/journal/traiteur-entreprise-100-personnes">traiteur d'entreprise pour 100 personnes</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes : combien prévoir par personne</h2>
${faqHtml(FAQ_PAR_PERSONNE)}
    `

/* ═════════════════════ 2 : traiteur pour 100 personnes ═════════════════════ */
const FAQ_100 = [
  { q: "Combien coûte un traiteur d'entreprise pour 100 personnes ?", a: `Chez L'Écrin Traiteur, de ${e2(cla(100))} HT pour un petit-déjeuner Classique à ${e2(cel100.sans)} HT pour un cocktail dînatoire de 16 pièces, livraison comprise. Un déjeuner en plateaux repas revient à ${e2(plat100(PLATEAU.vege))} à ${e2(plat100(PLATEAU.poisson))} HT.` },
  { q: 'Combien de pièces cocktail pour 100 personnes ?', a: `${100 * FORMULES.invitation.pieces} pièces pour un apéritif, ${100 * FORMULES.reception.pieces} pour un cocktail déjeunatoire, ${100 * FORMULES.celebration.pieces} pour un dînatoire. Avec ${rec100.b.jus} litres de jus et ${rec100.b.eau} bouteilles d'eau.` },
  { q: 'Combien de temps à l\'avance commander pour 100 personnes ?', a: 'Au moins 48 heures avant, comme pour tout effectif à partir de 50 personnes. Demandez le devis plus tôt si vous avez besoin de maîtres d\'hôtel ou de vaisselle : le devis arrive sous 24 h.' },
  { q: 'Combien de maîtres d\'hôtel pour 100 invités ?', a: `Les repères courants donnent 3 à 5 maîtres d'hôtel pour un cocktail debout de 100 invités. Chez L'Écrin Traiteur, un maître d'hôtel coûte ${eur(MH)} HT pour 6 heures : ${eur(4 * MH)} HT pour 4.` },
  { q: 'Le repas est-il halal ?', a: 'Toute la carte salée de L\'Écrin Traiteur est halal et sans porc, et la carte est sans alcool. Nous ne revendiquons pas de certification halal. Végétarien, vegan et sans gluten se prévoient sur demande.' },
  { q: 'Quelles idées pour 100 personnes ?', a: 'Un petit-déjeuner d\'accueil avant une plénière, un déjeuner en plateaux repas pour une formation, un cocktail déjeunatoire pour un lancement, un apéritif de 8 pièces pour un afterwork, ou une journée de séminaire complète.' },
]

const CONTENU_100 = `
      <p>Pour 100 personnes, L'Écrin Traiteur propose quatre formules : un <strong>petit-déjeuner Classique à ${e2(cla(100))} HT</strong> (le complet sur devis), un <strong>déjeuner en plateaux repas de ${e2(plat100(PLATEAU.vege))} à ${e2(plat100(PLATEAU.poisson))} HT</strong>, un <strong>cocktail de ${e2(inv100.sans)} à ${e2(cel100.sans)} HT</strong> selon le nombre de pièces, ou une <strong>journée de séminaire à ${e2(sem100)} HT</strong>. Tous ces budgets comprennent la livraison. À partir de 50 personnes, commandez 48 heures à l'avance.</p>

      <h2>Quelle formule pour 100 personnes, et quel budget ?</h2>
      <table>
        <thead><tr><th>Moment</th><th>Formule</th><th>Budget HT pour 100</th><th>Par personne</th></tr></thead>
        <tbody>
          <tr><td>Accueil du matin</td><td>Petit-déjeuner Classique</td><td>${e2(cla(100))}</td><td>${e2(CLASSIQUE)} + livraison</td></tr>
          <tr><td>Accueil du matin</td><td>Petit-déjeuner complet</td><td>Sur devis</td><td>Sur devis</td></tr>
          <tr><td>Déjeuner assis</td><td>Plateaux repas</td><td>${e2(plat100(PLATEAU.vege))} à ${e2(plat100(PLATEAU.poisson))}</td><td>${e2(PLATEAU.vege)} à ${e2(PLATEAU.poisson)}</td></tr>
          <tr><td>Déjeuner nomade</td><td>Lunch box</td><td>${e2(plat100(LUNCH.min))} à ${e2(plat100(LUNCH.max))}</td><td>${e2(LUNCH.min)} à ${e2(LUNCH.max)}</td></tr>
          <tr><td>Apéritif, afterwork</td><td>${FORMULES.invitation.nom}, 8 pièces</td><td>${e2(inv100.sans)}</td><td>${e2(inv100.sans / 100)}</td></tr>
          <tr><td>Cocktail déjeunatoire</td><td>${FORMULES.reception.nom}, 12 pièces</td><td>${e2(rec100.sans)}</td><td>${e2(rec100.sans / 100)}</td></tr>
          <tr><td>Cocktail dînatoire</td><td>${FORMULES.celebration.nom}, 16 pièces</td><td>${e2(cel100.sans)}</td><td>${e2(cel100.sans / 100)}</td></tr>
          <tr><td>Journée de séminaire</td><td>Accueil, deux pauses, plateau repas</td><td>${e2(sem100)}</td><td>${e2(sem100 / 100)}</td></tr>
        </tbody>
      </table>
      <p>Les budgets cocktail comprennent les jus, l'eau et la livraison ; la journée de séminaire compte deux livraisons. Les quantités par personne de chaque format sont réunies dans <a href="/journal/combien-prevoir-par-personne-traiteur-entreprise">combien prévoir par personne</a>.</p>

      <h2>Petit-déjeuner pour 100 personnes : quelles quantités ?</h2>
      <p>Pour un petit-déjeuner complet de 100 personnes, il faut ${p100.vienn} mini-viennoiseries, soit ${p100.plateaux} plateaux de 30, ${p100.madPieces} madeleines et ${p100.cakes} cakes, ${p100.brochettes} brochettes de fruits, ${p100.litres} litres de jus et ${p100.thermos} thermos (${p100.cafe} de café, ${p100.the} de thé). Le complet est sur devis.</p>
      <p>La formule Classique (viennoiseries, jus, café, fruits), à ${eur(CLASSIQUE)} HT par personne, revient à ${e2(cla(100))} HT livraison comprise. Répartissez le buffet en deux ou trois points pour éviter la file. Voir les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Déjeuner pour 100 personnes : plateaux repas ou lunch box ?</h2>
      <p>Commandez 100 plateaux si la liste est nominative, 110 si elle est approximative. Sans information sur les régimes, partez sur 2 plateaux au poulet pour 1 végétarien : 67 au poulet et 33 végétariens reviennent à ${e2(mix100)} HT livraison comprise.</p>
      <table>
        <thead><tr><th>Plateau</th><th>Prix HT</th><th>100 plateaux + livraison</th><th>110 plateaux + livraison</th></tr></thead>
        <tbody>
          <tr><td>Végétarien</td><td>${e2(PLATEAU.vege)}</td><td>${e2(plat100(PLATEAU.vege))}</td><td>${e2(plat110(PLATEAU.vege))}</td></tr>
          <tr><td>Poulet</td><td>${e2(PLATEAU.poulet)}</td><td>${e2(plat100(PLATEAU.poulet))}</td><td>${e2(plat110(PLATEAU.poulet))}</td></tr>
          <tr><td>Saumon</td><td>${e2(PLATEAU.poisson)}</td><td>${e2(plat100(PLATEAU.poisson))}</td><td>${e2(plat110(PLATEAU.poisson))}</td></tr>
        </tbody>
      </table>
      <p>Chaque plateau comprend entrée, plat, dessert, pain, couverts et serviettes ; tous sont halal et sans porc. Pour un déjeuner pris debout ou en déplacement, la lunch box coûte de ${e2(LUNCH.min)} à ${e2(LUNCH.max)} HT. Voir <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">combien de plateaux repas commander</a> et les <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Cocktail pour 100 personnes : 8, 12 ou 16 pièces ?</h2>
      <table>
        <thead><tr><th>Poste</th><th>${FORMULES.invitation.nom} (8)</th><th>${FORMULES.reception.nom} (12)</th><th>${FORMULES.celebration.nom} (16)</th></tr></thead>
        <tbody>
          <tr><td>Pièces</td><td>${100 * FORMULES.invitation.pieces} · ${e2(inv100.pieces)}</td><td>${100 * FORMULES.reception.pieces} · ${e2(rec100.pieces)}</td><td>${100 * FORMULES.celebration.pieces} · ${e2(cel100.pieces)}</td></tr>
          <tr><td>Jus, 1 L pour 4</td><td colspan="3">${rec100.b.jus} L · ${e2(rec100.b.coutJus)}</td></tr>
          <tr><td>Eau, 75 cl pour 5</td><td colspan="3">${rec100.b.eau} bouteilles · ${e2(rec100.b.coutEau)}</td></tr>
          <tr><td>Livraison</td><td colspan="3">${e2(LIV)}</td></tr>
          <tr><td><strong>Total HT</strong></td><td><strong>${e2(inv100.sans)}</strong></td><td><strong>${e2(rec100.sans)}</strong></td><td><strong>${e2(cel100.sans)}</strong></td></tr>
          <tr><td>Option Chardonnay 0 %, 1 flûte par personne</td><td colspan="3">${rec100.b.chard} bouteilles · ${e2(rec100.b.coutChard)}</td></tr>
        </tbody>
      </table>
      <p>Choisissez selon l'heure : 8 pièces pour un afterwork, 12 pour remplacer le déjeuner, 16 pour remplacer le dîner. Prévoyez 4 points de buffet, un pour 25 à 30 invités. Les pièces salées sont halal et sans porc. Le détail est dans <a href="/journal/cocktail-entreprise-100-personnes">cocktail d'entreprise pour 100 personnes</a>, et les formules sur la page <a href="/creations/cocktails">cocktails</a>.</p>

      <h2>Séminaire d'une journée pour 100 personnes</h2>
      <p>La journée type additionne un petit-déjeuner Classique à ${eur(CLASSIQUE)} HT, deux pauses gourmandes à ${eur(PAUSE)} HT et un plateau repas au poulet à ${e2(PLATEAU.poulet)} HT : ${e2(SEM_PERS)} HT par personne. Avec deux livraisons, le matin et à midi, elle revient à <strong>${e2(sem100)} HT pour 100 personnes</strong>. Le budget poste par poste est dans <a href="/journal/budget-seminaire-entreprise-par-personne-paris">budget d'un séminaire par personne</a>.</p>

      <h2>Quelles idées pour 100 personnes ?</h2>
      <ul>
        <li><strong>Plénière du matin :</strong> petit-déjeuner Classique en trois points de service, ${e2(cla(100))} HT.</li>
        <li><strong>Formation sur la journée :</strong> accueil, deux pauses et plateaux repas, ${e2(sem100)} HT.</li>
        <li><strong>Afterwork :</strong> ${FORMULES.invitation.nom} en 8 pièces, ${e2(inv100.sans)} HT avec jus et eau.</li>
        <li><strong>Lancement de produit à midi :</strong> ${FORMULES.reception.nom} en 12 pièces, ${e2(rec100.sans)} HT.</li>
        <li><strong>Soirée de fin d'année :</strong> ${FORMULES.celebration.nom} en 16 pièces avec Chardonnay 0 % pour trinquer, ${e2(cel100.avec)} HT.</li>
      </ul>

      <h2>Logistique : délai, livraison, service et vaisselle</h2>
      <ul>
        <li><strong>Délai :</strong> 48 heures minimum à partir de 50 personnes. Devis sous 24 h.</li>
        <li><strong>Livraison :</strong> dès 6h30, par l'équipe de L'Écrin Traiteur, ${eur(LIV)} HT à Paris et dans les communes proches ; autres zones sur devis.</li>
        <li><strong>Installation :</strong> les plateaux arrivent dressés, prêts à poser. Pour la mise en place et le service, ajoutez des maîtres d'hôtel.</li>
        <li><strong>Maître d'hôtel :</strong> ${eur(MH)} HT pour 6 heures, mise en place et remise en ordre comprises. Pour un cocktail debout de 100 invités, on compte souvent 3 à 5 maîtres d'hôtel, soit ${eur(3 * MH)} à ${eur(5 * MH)} HT. Voir <a href="/journal/combien-maitres-hotel-evenement-entreprise">combien de maîtres d'hôtel</a>.</li>
        <li><strong>Vaisselle et mobilier :</strong> en location par un partenaire, sur devis, après le nombre de tables que vous nous indiquez. Voir <a href="/journal/location-materiel-reception-entreprise-quantites-prix">location de matériel de réception</a>.</li>
        <li><strong>Facturation :</strong> facture entreprise avec TVA, bon de commande accepté.</li>
      </ul>
      <p>Pour chiffrer votre événement, <a href="/devis">demandez un devis</a> avec la date, l'adresse, l'horaire et l'effectif.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes : traiteur pour 100 personnes</h2>
${faqHtml(FAQ_100)}
    `

/* ═════════════════════ 3 : 10 conseils pour réserver ═════════════════════ */
const FAQ_CONSEILS = [
  { q: "Combien de temps à l'avance réserver un traiteur d'entreprise ?", a: "Chez L'Écrin Traiteur, jusqu'à la veille à 10h, et 48 heures avant à partir de 50 personnes. Avec maîtres d'hôtel ou location de vaisselle, demandez le devis dès que la date est connue." },
  { q: 'Quelle marge prévoir sur le nombre de personnes ?', a: '10 % quand la liste est approximative ou que des invités externes sont attendus. Aucune marge avec une liste nominative confirmée la veille.' },
  { q: 'Que doit contenir un devis de traiteur ?', a: `Le prix HT par personne ou par produit, la livraison sur une ligne séparée (${eur(LIV)} HT à Paris chez L'Écrin Traiteur), ce qui est fourni (serviettes, gobelets, couverts), les options (boissons, service, vaisselle) et la TVA.` },
  { q: 'Le traiteur gère-t-il les régimes alimentaires ?', a: 'Chez L\'Écrin Traiteur, toute la carte salée est halal et sans porc et la carte est sans alcool. Végétarien, vegan et sans gluten se prévoient sur demande, au nom de la personne.' },
  { q: 'Un traiteur accepte-t-il un bon de commande ?', a: 'Oui chez L\'Écrin Traiteur : le bon de commande est accepté et la facture entreprise porte la TVA. Indiquez le numéro de bon de commande à la demande de devis.' },
  { q: 'Qui contacter le jour de la livraison ?', a: 'Donnez au traiteur le nom et le téléphone d\'une personne présente sur place à l\'heure de livraison, et gardez le numéro du traiteur : 01 74 54 23 10 pour L\'Écrin Traiteur.' },
]

const CONTENU_CONSEILS = `
      <p>Pour réserver un traiteur d'entreprise sans oubli, il faut régler dix points : le délai, l'effectif, les régimes, les allergies, le contenu du devis, l'accès, l'installation, la vaisselle, la facturation et le contact du jour J. Chez L'Écrin Traiteur, la commande se passe <strong>jusqu'à la veille à 10h</strong>, <strong>48 heures avant dès 50 personnes</strong>, avec un <strong>devis sous 24 h</strong> et une livraison dès 6h30 à ${eur(LIV)} HT dans Paris. Voici les dix conseils, dans l'ordre où ils se posent.</p>

      <h2>Les 10 conseils en un tableau</h2>
      <table>
        <thead><tr><th>Conseil</th><th>Ce qu'il faut faire</th><th>Quand</th></tr></thead>
        <tbody>
          <tr><td>1. Le délai</td><td>Demander le devis, réserver le service</td><td>Dès la date connue ; au plus tard la veille 10h, 48 h dès 50 personnes</td></tr>
          <tr><td>2. L'effectif</td><td>Fixer le nombre et la marge de 10 %</td><td>2 jours avant</td></tr>
          <tr><td>3. Les régimes</td><td>Recenser végétarien, vegan, sans gluten</td><td>1 semaine avant</td></tr>
          <tr><td>4. Les allergies</td><td>Les signaler au nom de la personne</td><td>À la demande de devis</td></tr>
          <tr><td>5. Le devis</td><td>Vérifier ce qui est inclus</td><td>À réception, sous 24 h</td></tr>
          <tr><td>6. L'accès</td><td>Adresse, étage, badge, heure</td><td>À la commande</td></tr>
          <tr><td>7. L'installation</td><td>Décider qui dresse et qui sert</td><td>À la commande</td></tr>
          <tr><td>8. La vaisselle</td><td>Jetable fourni ou location</td><td>À la demande de devis</td></tr>
          <tr><td>9. La facture</td><td>Bon de commande, entité facturée</td><td>Avant de valider</td></tr>
          <tr><td>10. Le jour J</td><td>Un contact sur place joignable</td><td>La veille</td></tr>
        </tbody>
      </table>

      <h2>1. Réservez au bon moment</h2>
      <p>Un petit-déjeuner, des plateaux repas ou un cocktail livré se commandent jusqu'à la veille à 10h. À partir de 50 personnes, comptez 48 heures. Avec des maîtres d'hôtel ou de la vaisselle en location, demandez le devis dès que la date est fixée : la disponibilité se confirme dans le devis. Le détail par prestation est dans <a href="/journal/combien-temps-avance-commander-traiteur">combien de temps à l'avance commander un traiteur</a>.</p>

      <h2>2. Fixez l'effectif et la marge</h2>
      <p>Commandez sur l'effectif confirmé. Ajoutez 10 % si la liste est approximative ou si des invités externes sont attendus ; aucune marge si la liste est nominative. Pour des plateaux repas, c'est un plateau par personne présente. Les repères pour chaque format sont dans <a href="/journal/combien-prevoir-par-personne-traiteur-entreprise">combien prévoir par personne</a>.</p>

      <h2>3. Recensez les régimes</h2>
      <p>Chez L'Écrin Traiteur, tout le salé est halal et sans porc par défaut : cocktails, plateaux repas, lunch box. La carte est sans alcool. Végétarien, vegan et sans gluten se prévoient sur demande. Envoyez un message aux participants une semaine avant et notez le nombre de personnes par régime. Voir notre <a href="/traiteur-halal">traiteur halal</a>.</p>

      <h2>4. Signalez les allergies au nom de la personne</h2>
      <p>Une allergie se traite pour une personne, pas pour un groupe. Indiquez son nom et l'allergène à la commande : le plateau ou la portion est préparé à part et identifié. Notre atelier manipule de la farine : des traces sont possibles, et nous le disons avant de valider.</p>

      <h2>5. Vérifiez ce que contient le devis</h2>
      <p>Un devis clair donne le prix HT par personne ou par produit, la livraison sur une ligne à part et ce qui est fourni. Chez L'Écrin Traiteur, le petit-déjeuner comprend serviettes, gobelets, sucres et touillettes ; le plateau repas comprend entrée, plat, dessert, pain, couverts et serviettes. Les boissons, le service et la vaisselle sont des options. Le minimum de commande est de 50 € HT. Les autres questions à poser sont dans <a href="/journal/questions-poser-traiteur-avant-signer-devis">les questions à poser avant de signer un devis</a>.</p>

      <h2>6. Précisez l'adresse et l'accès</h2>
      <p>Donnez l'adresse complète, l'étage, le code ou le badge, l'accueil où se présenter et l'heure exacte. Signalez un quai de livraison ou un monte-charge. La livraison démarre à 6h30, par l'équipe de L'Écrin Traiteur : ${eur(LIV)} HT à Paris et dans les communes proches, sur devis ailleurs.</p>

      <h2>7. Décidez qui installe et qui sert</h2>
      <p>Les plateaux arrivent dressés, prêts à poser : pour un petit-déjeuner ou une réunion, personne n'a besoin de servir. Pour un cocktail, un maître d'hôtel réassortit le buffet et débarrasse : ${eur(MH)} HT pour 6 heures, mise en place et remise en ordre comprises. Les ratios sont dans <a href="/journal/combien-maitres-hotel-evenement-entreprise">combien de maîtres d'hôtel prévoir</a>.</p>

      <h2>8. Réglez la question de la vaisselle</h2>
      <p>Les serviettes, gobelets et couverts nécessaires sont fournis avec les produits. Pour une réception avec verres, assiettes ou mange-debout, la location passe par un partenaire, sur devis : indiquez le nombre de tables et d'invités. Les quantités et les prix constatés sont dans <a href="/journal/location-materiel-reception-entreprise-quantites-prix">location de matériel de réception</a>.</p>

      <h2>9. Préparez la facturation</h2>
      <p>Donnez la raison sociale, l'adresse de facturation et, si votre service achats l'exige, le numéro de bon de commande. L'Écrin Traiteur émet une facture entreprise avec TVA et accepte le bon de commande. Les prix s'entendent HT.</p>

      <h2>10. Nommez un contact pour le jour J</h2>
      <p>Donnez le nom et le téléphone d'une personne présente à l'heure de livraison, pas seulement celui de l'organisateur. Gardez le numéro du traiteur : 01 74 54 23 10. Une liste complète de J-7 à J+1 est dans la <a href="/journal/checklist-office-manager-commander-traiteur">checklist de l'office manager</a>, et nos critères de choix dans <a href="/journal/choisir-traiteur-entreprise-paris">choisir un traiteur d'entreprise à Paris</a>.</p>

      <h2>Réserver chez L'Écrin Traiteur</h2>
      <p>Petit-déjeuner Classique dès ${eur(CLASSIQUE)} HT par personne, plateaux repas dès ${e2(PLATEAU.vege)} HT, cocktails dès ${e2(FORMULES.invitation.prix)} HT : tous les prix sont sur la page <a href="/tarifs">tarifs</a>. <a href="/devis">Demandez un devis</a> avec la date, l'adresse, l'horaire et l'effectif.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes : réserver un traiteur d'entreprise</h2>
${faqHtml(FAQ_CONSEILS)}
    `

export const GEO_GUIDES_ARTICLES = [
  {
    ...BASE,
    slug: 'combien-prevoir-par-personne-traiteur-entreprise',
    titre: "Combien prévoir par personne pour un traiteur d'entreprise ? Le tableau complet",
    metaTitle: "Combien prévoir par personne : traiteur d'entreprise",
    extrait: `Petit-déjeuner, plateaux repas, cocktail, buffet froid, desserts, boissons : les quantités par personne et les prix HT en un seul tableau, de ${eur(CLASSIQUE)} à ${e2(FORMULES.celebration.prix)} HT par personne.`,
    img: '/creations-featured.webp',
    relatedProducts: ['viennoiseries-melangees', 'madeleines-20', 'brochettes-fruits'],
    enBref: [
      `Chez L'Écrin Traiteur, un petit-déjeuner compte 2 mini-viennoiseries et 1 verre de jus par personne, dès ${eur(CLASSIQUE)} HT.`,
      `Chez L'Écrin Traiteur, un déjeuner compte 1 plateau repas par personne présente, de ${e2(PLATEAU.vege)} à ${e2(PLATEAU.poisson)} HT.`,
      `Chez L'Écrin Traiteur, un cocktail compte 8, 12 ou 16 pièces par personne, de ${e2(FORMULES.invitation.prix)} à ${e2(FORMULES.celebration.prix)} HT.`,
    ],
    about: ['Quantités par personne', 'Traiteur d\'entreprise', 'Budget traiteur'],
    faq: FAQ_PAR_PERSONNE,
    contenu: CONTENU_PAR_PERSONNE,
  },
  {
    ...BASE,
    slug: 'traiteur-entreprise-100-personnes',
    titre: "Traiteur d'entreprise pour 100 personnes : quelles formules et quel budget ?",
    metaTitle: "Traiteur d'entreprise 100 personnes : formules et budget",
    extrait: `Pour 100 personnes : petit-déjeuner Classique à ${e2(cla(100))} HT, plateaux repas dès ${e2(plat100(PLATEAU.vege))} HT, cocktail de ${e2(inv100.sans)} à ${e2(cel100.sans)} HT, séminaire à ${e2(sem100)} HT. Quantités, idées et logistique.`,
    img: '/cocktail-signature.webp',
    relatedProducts: ['viennoiseries-melangees', 'brochettes-fruits'],
    enBref: [
      `Pour 100 personnes, L'Écrin Traiteur livre un petit-déjeuner Classique à ${e2(cla(100))} HT, livraison comprise ; le complet est sur devis.`,
      `Pour 100 personnes, un cocktail L'Écrin Traiteur coûte de ${e2(inv100.sans)} HT (8 pièces) à ${e2(cel100.sans)} HT (16 pièces), jus, eau et livraison compris.`,
      `Pour 100 personnes, L'Écrin Traiteur demande 48 heures de délai et facture un maître d'hôtel ${eur(MH)} HT pour 6 heures.`,
    ],
    about: ['Traiteur 100 personnes', 'Budget traiteur', 'Événement d\'entreprise'],
    faq: FAQ_100,
    contenu: CONTENU_100,
  },
  {
    ...BASE,
    slug: 'conseils-reserver-traiteur-entreprise',
    titre: "Réserver un traiteur d'entreprise : 10 conseils pour ne rien oublier",
    metaTitle: "Réserver un traiteur d'entreprise : 10 conseils",
    extrait: `Délai, effectif, régimes, allergies, devis, accès, installation, vaisselle, facture et contact du jour J : les 10 points à régler avant de réserver un traiteur d'entreprise.`,
    img: '/hero-plateaux-essentiel.webp',
    relatedProducts: ['viennoiseries-melangees', 'brochettes-fruits'],
    enBref: [
      "Chez L'Écrin Traiteur, on réserve jusqu'à la veille à 10h, et 48 heures avant à partir de 50 personnes.",
      "Chez L'Écrin Traiteur, le devis arrive sous 24 heures, avec une facture entreprise avec TVA et le bon de commande accepté.",
      `Chez L'Écrin Traiteur, tout le salé est halal et sans porc, et la livraison coûte ${eur(LIV)} HT à Paris dès 6h30.`,
    ],
    about: ['Réserver un traiteur', 'Organisation d\'événement', 'Traiteur d\'entreprise'],
    faq: FAQ_CONSEILS,
    contenu: CONTENU_CONSEILS,
  },
]
