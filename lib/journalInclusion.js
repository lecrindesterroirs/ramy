// Guide « Ramadan et inclusion alimentaire au bureau » du 25 octobre 2026.
// Dates du ramadan 2027 : prévisions relevées le 25/10/2026 (Calendriergratuit, Pleine-Lune), alignées sur le guide
// iftar-entreprise-ramadan-organiser (lib/journalService.js) ; elles se confirment à la Nuit du doute.
// Prix : lib/calculsPrix.js (LIV, FORMULES, cocktail) et lib/prixEntree.js (Classique, minimum). Aucun prix recopié.
// Règles : ton neutre, pas prosélyte ; L'Écrin Traiteur ne fait PAS de casher, on le dit ; aucune certification halal
// revendiquée ; pas de total pour le petit-déjeuner complet. Surcouche anglaise : lib/en/journal/journalInclusion.js.

import { LIV, FORMULES, cocktail } from './calculsPrix'
import { PDJ_DES, MINIMUM, euroFr as eur } from './prixEntree'

const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

const CEL = FORMULES.celebration
const IFTAR_N = 20
const IFTAR = cocktail(IFTAR_N, CEL) // jus, eau et livraison compris

const DATE = '25 octobre 2026'
const ISO = '2026-10-25'

// Repères du ramadan 2027 (prévisions, à confirmer), partagés avec la surcouche anglaise
export const RAMADAN_2027 = {
  debut: '2027-02-08', // premier jour de jeûne prévu (lundi)
  fin: ['2027-03-08', '2027-03-09'], // dernier jour de jeûne prévu
  aid: ['2027-03-09', '2027-03-10'], // Aïd el-Fitr prévu
  ruptureDebut: '17h59', // Paris, début février
  ruptureFin: '18h45', // Paris, début mars
}

export const INCLUSION_VALEURS = { LIV, PDJ_DES, MINIMUM, CEL, IFTAR_N, IFTAR }

/* ════════════════════ Ramadan et inclusion alimentaire au bureau ════════════════════ */
const FAQ = [
  { q: 'Quand a lieu le ramadan 2027 ?', a: "Il est prévu du lundi 8 février 2027 environ au 8 ou 9 mars 2027, avec l'Aïd el-Fitr le 9 ou le 10 mars. Ces dates sont des prévisions, à confirmer lors de la Nuit du doute, quelques jours avant le début." },
  { q: 'Faut-il annuler les petits-déjeuners d\'équipe pendant le ramadan ?', a: "Non. Maintenez-les, mais sans en faire un rendez-vous obligatoire, et prévoyez de quoi emporter pour ceux qui jeûnent : ils pourront prendre leur part pour le soir. Placez plutôt le moment convivial du mois à l'heure de la rupture du jeûne, ou après le ramadan." },
  { q: 'Peut-on demander aux salariés s\'ils font le ramadan ?', a: "Mieux vaut ne pas poser la question en public. Le jeûne est une pratique personnelle, et tous les musulmans ne jeûnent pas (santé, grossesse, voyage, choix). Proposez à tous les mêmes options et laissez chacun choisir, sans commentaire." },
  { q: 'Quelle est la différence entre halal et casher ?', a: "Ce sont deux règles religieuses distinctes : la viande halal n'est pas casher, et inversement. Le casher impose aussi, par exemple, de séparer lait et viande et une supervision rabbinique. L'Écrin Traiteur propose une carte salée halal et sans porc, mais ne fait pas de casher : pour des convives qui mangent casher, adressez-vous à un traiteur casher certifié." },
  { q: 'Comment gérer les allergies dans un buffet d\'entreprise ?', a: "Recensez-les à l'inscription, transmettez au traiteur le nombre de personnes concernées et l'allergène, et demandez la liste des 14 allergènes réglementaires pour chaque produit. Étiquetez le buffet. Chez L'Écrin Traiteur, l'atelier manipule de la farine : des traces de gluten restent possibles dans les préparations sans gluten." },
  { q: 'Quel format pour un iftar d\'équipe ?', a: `Un buffet ou un cocktail dînatoire, prêt un quart d'heure avant la rupture du jeûne, ouvert à tous, jeûneurs ou non. Chez L'Écrin Traiteur, La Célébration (${CEL.pieces} pièces à ${eur(CEL.prix)} HT par personne) revient à ${eur(IFTAR.sans)} HT pour ${IFTAR_N} personnes, jus, eau et livraison compris.` },
]

const RAMADAN = {
  slug: 'ramadan-inclusion-alimentaire-bureau-guide',
  enBref: [
    "Le ramadan 2027 est prévu du 8 février au 8 ou 9 mars 2027 environ, dates à confirmer lors de la Nuit du doute ; à Paris, le jeûne se rompt vers 17h59 début février et vers 18h45 début mars.",
    "Pendant le ramadan, maintenez réunions et petits-déjeuners sans les rendre obligatoires, prévoyez de quoi emporter et placez les moments conviviaux à l'heure de la rupture du jeûne ou après le mois.",
    "L'Écrin Traiteur livre une carte salée halal et sans porc, sans alcool, avec options végétarien, vegan et sans gluten ; il ne fait pas de casher.",
  ],
  titre: 'Ramadan et inclusion alimentaire au bureau : le guide pratique',
  metaTitle: 'Ramadan et inclusion alimentaire au bureau : le guide',
  categorie: 'Régimes',
  date: DATE,
  isoDate: ISO,
  extrait: "Réunions, petits-déjeuners, pots et séminaires pendant le ramadan 2027 (dates prévues, à confirmer), repères halal, casher, vegan, sans gluten et allergènes, et une checklist à imprimer.",
  img: '/hero-petitdej.webp',
  about: ['Ramadan', 'Inclusion alimentaire', 'Régimes alimentaires au bureau'],
  relatedProducts: [],
  contenu: `
      <p>Le <strong>ramadan 2027</strong> est prévu du <strong>lundi 8 février au 8 ou 9 mars 2027</strong> environ, dates à confirmer. Pendant un mois, une partie de vos collègues ne mange ni ne boit entre l'aube et le coucher du soleil. Inutile de tout réorganiser : quelques réglages sur les horaires, les formats et la manière d'inviter suffisent pour que chacun trouve sa place. Ce guide couvre aussi les autres régimes que l'on croise au bureau : halal, casher, végétarien, vegan, sans gluten et allergies.</p>

      <h2>Quand a lieu le ramadan 2027 ?</h2>
      <table>
        <thead>
          <tr><th>Repère</th><th>Date prévue (à confirmer)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Premier jour de jeûne</strong></td><td>Vers le lundi 8 février 2027</td></tr>
          <tr><td><strong>Dernier jour de jeûne</strong></td><td>Lundi 8 ou mardi 9 mars 2027</td></tr>
          <tr><td><strong>Aïd el-Fitr</strong></td><td>Mardi 9 ou mercredi 10 mars 2027</td></tr>
          <tr><td><strong>Rupture du jeûne à Paris</strong></td><td>Vers 17h59 début février, vers 18h45 début mars</td></tr>
        </tbody>
      </table>
      <p>Ces dates sont des prévisions astronomiques : elles se confirment lors de la Nuit du doute, quelques jours avant le début, et peuvent varier d'un jour. L'heure de rupture avance d'environ une minute et demie par jour ; vérifiez celle du jour de votre événement. Le jour de l'Aïd, certains collègues poseront un congé : évitez d'y placer une réunion importante.</p>

      <h2>Réunions et petits-déjeuners : que changer ?</h2>
      <ul>
        <li><strong>Gardez les petits-déjeuners d'équipe</strong>, mais ne les rendez pas obligatoires et n'y placez pas une décision importante. Ceux qui jeûnent viennent pour l'échange, pas pour manger.</li>
        <li><strong>Prévoyez de quoi emporter</strong> : quelques boîtes ou sachets pour que chacun puisse prendre sa part et la manger le soir.</li>
        <li><strong>Placez les réunions exigeantes le matin</strong>, quand l'énergie est la meilleure, et évitez les réunions tardives autour de l'heure de rupture.</li>
        <li><strong>Évitez le déjeuner de travail obligatoire</strong> : un déjeuner client ou un repas d'équipe se décale souvent sans difficulté après le ramadan.</li>
        <li><strong>Laissez de l'eau à disposition</strong> dans la salle comme d'habitude : personne n'a besoin qu'on la retire.</li>
      </ul>
      <p>Pour le petit-déjeuner, L'Écrin Traiteur livre dès 6h30 ; la formule Classique démarre à ${eur(PDJ_DES)} HT par personne, le petit-déjeuner complet se chiffre sur devis. Les quantités pour votre effectif sont dans notre <a href="/calculateur-quantites">calculateur de quantités</a>.</p>

      <h2>Pots, anniversaires et afterworks</h2>
      <p>Un pot de départ à 12 h 30 ou un goûter d'anniversaire à 16 h tombent en plein jeûne. Trois options, à choisir selon l'équipe :</p>
      <ul>
        <li><strong>Décaler après le ramadan</strong> : le plus simple quand la date n'est pas contrainte.</li>
        <li><strong>Maintenir avec une part à emporter</strong> pour ceux qui jeûnent.</li>
        <li><strong>Faire coïncider avec la rupture du jeûne</strong> : le pot devient un iftar d'équipe, ouvert à tous.</li>
      </ul>

      <h2>L'iftar d'équipe : un moment ouvert à tous</h2>
      <p>Un iftar d'entreprise réunit l'équipe à l'heure de la rupture du jeûne. Il fonctionne quand il est <strong>ouvert à tous</strong>, jeûneurs ou non, et <strong>facultatif</strong>. Le buffet doit être prêt un quart d'heure avant la rupture, avec de l'eau, des jus et des dattes dès la première minute, puis du salé rassasiant et des douceurs. Prévoyez un espace calme pour ceux qui souhaitent prier.</p>
      <p>Chez L'Écrin Traiteur, un cocktail dînatoire La Célébration (${CEL.pieces} pièces à ${eur(CEL.prix)} HT par personne) revient à <strong>${eur(IFTAR.sans)} HT pour ${IFTAR_N} personnes</strong>, ${IFTAR.b.jus} litres de jus, ${IFTAR.b.eau} bouteilles d'eau et livraison de ${eur(LIV)} HT compris. La livraison est calée à l'heure demandée. Le détail des horaires et du menu est dans notre guide <a href="/journal/iftar-entreprise-ramadan-organiser">organiser un iftar d'entreprise</a>.</p>

      <h2>Séminaires et formations pendant le ramadan</h2>
      <ul>
        <li><strong>Raccourcissez la journée</strong> si possible, ou terminez avant l'heure de rupture.</li>
        <li><strong>Ne retirez pas les pauses</strong> : ceux qui jeûnent en profitent pour souffler, les autres pour manger.</li>
        <li><strong>Au déjeuner, gardez la salle ouverte</strong> à ceux qui ne mangent pas mais veulent rester avec le groupe, et ne commandez pas pour eux par défaut : demandez l'effectif réel des déjeuners.</li>
        <li><strong>Pour un séminaire résidentiel</strong>, placez le dîner après la rupture du jeûne et prévoyez un petit-déjeuner très tôt pour ceux qui le souhaitent, à voir avec le lieu.</li>
      </ul>

      <h2>Ne pas imposer : la bonne posture</h2>
      <ul>
        <li><strong>Ne demandez pas en public qui jeûne.</strong> C'est une pratique personnelle.</li>
        <li><strong>Ne présumez rien</strong> : tous les musulmans ne jeûnent pas (santé, grossesse, voyage, choix), et des collègues d'autres confessions ou sans religion peuvent avoir leurs propres contraintes.</li>
        <li><strong>Invitez tout le monde de la même façon</strong> et laissez chacun prendre ce qu'il veut, sans commentaire sur l'assiette de personne.</li>
        <li><strong>Ne transformez pas le mois en exception</strong> : l'objectif est que les habitudes de l'équipe conviennent à tous, pas de créer un régime à part.</li>
      </ul>

      <h2>Halal, casher, vegan, sans gluten : les repères</h2>
      <table>
        <thead>
          <tr><th>Régime</th><th>Ce que cela veut dire</th><th>Chez L'Écrin Traiteur</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Halal</strong></td><td>Viande issue d'un abattage rituel, ni porc ni alcool</td><td>Salé halal et sans porc par défaut, sans alcool, sans supplément. Aucune certification revendiquée.</td></tr>
          <tr><td><strong>Casher</strong></td><td>Règles alimentaires juives : animaux autorisés, abattage rituel, séparation du lait et de la viande, supervision rabbinique</td><td><strong>Non proposé.</strong> Halal et casher ne sont pas équivalents : pour des convives qui mangent casher, adressez-vous à un traiteur casher certifié.</td></tr>
          <tr><td><strong>Végétarien</strong></td><td>Ni viande ni poisson</td><td>Plateaux et pièces végétariens à la carte</td></tr>
          <tr><td><strong>Vegan</strong></td><td>Aucun produit d'origine animale (ni œuf, ni lait, ni miel)</td><td>Sur demande, au devis, avec le nombre de personnes</td></tr>
          <tr><td><strong>Sans gluten</strong></td><td>Ni blé, ni seigle, ni orge</td><td>Sur demande ; l'atelier manipule de la farine, des traces restent possibles</td></tr>
          <tr><td><strong>Allergies</strong></td><td>14 allergènes à déclarer (règlement européen n° 1169/2011)</td><td>À signaler à la commande ; tableau des 14 allergènes joint au devis et au bon de livraison</td></tr>
        </tbody>
      </table>
      <p>Notre page <a href="/traiteur-halal">traiteur halal</a> détaille la carte, et le guide du <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif en entreprise</a> donne les proportions à prévoir. Pour les obligations sur les allergènes, voir <a href="/journal/allergenes-traiteur-buffet-plateaux-obligations">allergènes : ce que doit fournir le traiteur</a>.</p>

      <h2>Comment recenser les régimes sans mettre personne mal à l'aise ?</h2>
      <p>Ajoutez une question facultative au formulaire d'inscription, avec des cases : végétarien, vegan, halal, sans gluten, allergie (à préciser), autre. Ne publiez pas les réponses nominatives : transmettez au traiteur un nombre par régime, et le nom seulement pour une allergie sévère. Sans inscription, comptez au moins une option végétarienne pour trois personnes. Notre guide <a href="/journal/traiteur-regimes-halal-vegetarien-vegan-sans-gluten-paris">traiteur pour les régimes halal, végétarien, vegan et sans gluten</a> détaille la commande.</p>

      <h2>La checklist à imprimer</h2>
      <p>Pour l'imprimer : Ctrl + P (Cmd + P sur Mac).</p>
      <table>
        <thead>
          <tr><th>✓</th><th>Quand</th><th>À faire</th></tr>
        </thead>
        <tbody>
          <tr><td>☐</td><td>Janvier</td><td>Noter les dates prévues du ramadan (vers le 8 février – 9 mars 2027) et de l'Aïd dans l'agenda d'équipe</td></tr>
          <tr><td>☐</td><td>Janvier</td><td>Repérer les déjeuners, pots et séminaires qui tombent pendant le mois ; décaler ceux qui peuvent l'être</td></tr>
          <tr><td>☐</td><td>À l'inscription</td><td>Ajouter une question facultative sur les régimes et les allergies</td></tr>
          <tr><td>☐</td><td>À la commande</td><td>Donner au traiteur un nombre par régime et chaque allergie signalée</td></tr>
          <tr><td>☐</td><td>À la commande</td><td>Demander des boîtes ou sachets pour emporter</td></tr>
          <tr><td>☐</td><td>À la commande</td><td>Pour un iftar : donner l'heure de rupture du jour, livraison un quart d'heure avant</td></tr>
          <tr><td>☐</td><td>À la commande</td><td>Convives qui mangent casher : prévoir un traiteur casher certifié</td></tr>
          <tr><td>☐</td><td>La veille</td><td>Confirmer l'effectif avant 14h</td></tr>
          <tr><td>☐</td><td>Le jour J</td><td>Étiqueter le buffet : halal, végétarien, vegan, sans gluten, allergènes</td></tr>
          <tr><td>☐</td><td>Le jour J</td><td>Prévoir un espace calme pour un iftar ; eau et dattes dès la rupture</td></tr>
          <tr><td>☐</td><td>Le jour J</td><td>Inviter tout le monde de la même façon, sans demander qui jeûne</td></tr>
        </tbody>
      </table>

      <h2>Commander auprès de L'Écrin Traiteur</h2>
      <p>Commande jusqu'à la veille avant 14h (48 h à partir de 50 personnes), livraison dès 6h30 à Paris et en Île-de-France, ${eur(LIV)} HT à Paris et dans les communes proches, minimum de commande de ${eur(MINIMUM)} HT. Indiquez les régimes et, pour un iftar, l'heure de rupture du jeûne dans votre <a href="/devis">demande de devis</a> : réponse sous 24 h.</p>

      <h2>Sources</h2>
      <ul>
        <li>Dates prévues du ramadan 2027 : <a href="https://www.calendriergratuit.fr/ramadan.html" rel="noopener">Calendriergratuit</a> et <a href="https://www.pleine-lune.org/calendrier-ramadan" rel="noopener">Pleine-Lune</a>, consultés le 25 octobre 2026. Dates à confirmer lors de la Nuit du doute.</li>
        <li>Allergènes : règlement (UE) n° 1169/2011 concernant l'information des consommateurs sur les denrées alimentaires, annexe II.</li>
      </ul>

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ)}
    `,
  faq: FAQ,
}

export const INCLUSION_ARTICLES = [RAMADAN]
