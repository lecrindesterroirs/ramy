// Articles « besoins réels » (18 octobre 2026), tirés des demandes de devis reçues par le site et par mail
// (juillet à octobre 2026) : maître d'hôtel (dîner assis, buffet), accueil café presse, stand de salon,
// journée de formation, petit-déjeuner récurrent, pot de départ en petit-déjeuner.
//
// Règles : aucun nom de client, aucun volume de livraison ; les situations sont décrites de façon générique.
// Chiffres : FICHE-VERITE.md (dès 6h30, commande jusqu'à la veille 14h, 48 h à partir de 50 personnes, minimum 50 € HT,
// livraison 29 € HT, Classique 8 € HT, complet sur devis, pause goûter dès 6 € HT, plateaux repas 28,90 à 30,90 € HT,
// lunch box 18,90 à 21,90 € HT, maître d'hôtel 250 € HT pour 6 heures, livraison avec reprise du matériel 39 € HT à Paris, 92 et 94) ;
// quantités du petit-déjeuner tirées de la recette de l'OS (lib/journalQuestions.js) ; seul le Classique est chiffré
// (n × 8 € + 29 €), le complet étant sur devis (décision de Ramy du 24/10/2026) ; ratios de service tirés du guide
// « combien de maîtres d'hôtel » (sources du 17 octobre 2026).
import { pdj, eur, faqHtml, LIV, cocktail, FORMULES } from './journalQuestions'
import { PDJ_DES } from './prixEntree'

const DATE = '18 octobre 2026'
const ISO = '2026-10-18'
const BASE = { categorie: 'Conseils', date: DATE, isoDate: ISO, isoModified: ISO }
const SIGNATURE = `<p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes. Livraison de 29 € HT par livraison, Paris et communes proches. Minimum de commande 50 € HT.</em></p>`
const MH = 250 // maître d'hôtel : 250 € HT pour 6 heures
const cla = (n) => n * PDJ_DES + LIV // petit-déjeuner Classique livré, € HT (le complet est sur devis)

/* ───────────── 1. Maître d'hôtel : dîner assis ───────────── */
const FAQ_ASSIS = [
  { q: "Combien de maîtres d'hôtel pour un dîner assis de 50 personnes ?", a: `3 à 5 personnes de service, selon le nombre de plats et la vaisselle. Au tarif de ${eur(MH)} HT par maître d'hôtel pour 6 heures, cela représente ${eur(3 * MH)} à ${eur(5 * MH)} HT.` },
  { q: "Quel ratio pour un repas assis à plusieurs plats ?", a: "1 maître d'hôtel pour 10 à 15 convives pour un repas complet à plusieurs plats, et 1 pour 10 à 25 convives de façon générale. Plus il y a de plats, de vaisselle en dur et de service à l'assiette, plus il faut de monde." },
  { q: "Combien coûte un maître d'hôtel pour un dîner ?", a: `À Paris, le service se facture en général 30 à 50 € de l'heure. Chez L'Écrin Traiteur, un maître d'hôtel coûte ${eur(MH)} HT pour un service de 6 heures, mise en place et remise en ordre comprises.` },
  { q: "Quelle différence entre un maître d'hôtel et un serveur ?", a: "Le serveur exécute le service ; le maître d'hôtel coordonne l'équipe, tient le timing et fait le lien avec la cuisine et l'organisateur. Beaucoup de traiteurs appellent « maître d'hôtel » tout le personnel de service : regardez ce que recouvre l'intitulé sur le devis." },
  { q: "Faut-il compter l'installation dans les heures de service ?", a: "Oui. Comptez la mise en place avant l'arrivée des convives et le rangement après le dîner. Une soirée de trois heures demande souvent six heures de présence." },
  { q: "Que prévoir de mon côté pour un dîner assis ?", a: "Un plan de table, un espace pour dresser les plats, un point d'eau ou un accès à une cuisine d'appoint si possible, et la liste des régimes. Précisez ces points à la demande de devis." },
]

/* ───────────── 2. Maître d'hôtel : buffet ───────────── */
const FAQ_BUFFET = [
  { q: "Combien de maîtres d'hôtel pour un buffet de 100 personnes ?", a: `3 à 5 pour un buffet debout, selon la vaisselle et les plats chauds, soit ${eur(3 * MH)} à ${eur(5 * MH)} HT au tarif de ${eur(MH)} HT par maître d'hôtel pour 6 heures.` },
  { q: "Faut-il un maître d'hôtel pour un buffet livré ?", a: "Pas obligatoirement. Un buffet livré prêt à servir, en vaisselle jetable, peut se gérer sans service ; le maître d'hôtel se justifie pour réassortir, débarrasser, dresser les plats chauds et tenir le timing, surtout à partir d'une quarantaine de convives." },
  { q: "Quel ratio pour un buffet ?", a: "1 maître d'hôtel pour 20 à 40 invités, plutôt 1 pour 30 avec un buffet chaud et de la vaisselle en dur. Pour un cocktail dînatoire : 1 pour 25 à 30 invités." },
  { q: "Combien coûte un maître d'hôtel pour un buffet ?", a: `Chez L'Écrin Traiteur, ${eur(MH)} HT pour un service de 6 heures, installation et rangement compris. Pour un buffet de 100 personnes avec 4 maîtres d'hôtel, le service revient à ${eur(4 * MH)} HT, soit ${eur(4 * MH / 100, true)} HT par personne.` },
  { q: "Et pour un petit-déjeuner ?", a: "Le ratio descend à 1 maître d'hôtel pour 50 à 80 invités pour un petit-déjeuner ou une pause, 1 pour 50 avec de la vaisselle en dur. Pour 20 personnes en libre-service, il n'est pas indispensable : il sert surtout à l'installation, au réassort et au rangement." },
  { q: "Que préciser à la demande de devis ?", a: "Le nombre d'invités, le format (debout ou assis), la durée avec l'installation et le rangement, le type de vaisselle, le nombre d'espaces et l'accès au lieu. Le nombre de maîtres d'hôtel est alors proposé sur mesure." },
]

/* ───────────── 3. Accueil café presse ───────────── */
const P15 = pdj(15), P35 = pdj(35), P45 = pdj(45)
const FAQ_PRESSE = [
  { q: "Que servir à un petit-déjeuner presse ?", a: "Des mini-viennoiseries, des madeleines, des brochettes de fruits frais (vegan et sans gluten), du café, du thé, du jus de fruit et de l'eau. Des petites pièces sucrées se mangent debout, en parlant, sans assiette." },
  { q: "Combien de personnes prévoir pour un accueil presse ?", a: "Comptez les journalistes confirmés plus l'équipe qui les accueille, avec 10 % de marge. Pour 35 personnes, il faut 70 mini-viennoiseries (3 plateaux de 30) et 6 thermos." },
  { q: "À quelle heure faire livrer ?", a: "Une heure avant l'accueil : la livraison commence à 6h30, à l'heure choisie. Pour un accueil à 9h30, une livraison à 8h45 laisse le temps de dresser la table." },
  { q: "Les gobelets et serviettes sont-ils compris ?", a: "Oui, avec un petit-déjeuner : serviettes, gobelets, sucres et touillettes sont compris. Pour des tasses et des verres réutilisables, la vaisselle se chiffre sur devis, et la livraison avec reprise du matériel coûte 39 € HT à Paris, dans le 92 et le 94, et le prix de la zone plus 19 € HT ailleurs." },
  { q: "Combien coûte un petit-déjeuner presse ?", a: `En formule Classique, livraison comprise : ${eur(cla(15))} HT pour 15 personnes, ${eur(cla(35))} HT pour 35 et ${eur(cla(45))} HT pour 45. Le petit-déjeuner complet, avec madeleines, brochettes, thé et eau, se chiffre sur devis.` },
  { q: "Jusqu'à quand commander ?", a: "Jusqu'à la veille à 14h, ou 48 h à l'avance à partir de 50 personnes. Pour un lancement de produit, précisez l'adresse exacte, l'étage et le contact sur place." },
]

/* ───────────── 4. Stand de salon ───────────── */
const LB_BAS = 18.9, LB_HAUT = 21.9
const stand = (n, p) => n * p + LIV
const FAQ_SALON = [
  { q: "Combien de lunch box commander par jour pour un stand de salon ?", a: "Une par personne présente sur le stand à l'heure du déjeuner, avec 10 % de marge. Pour 40 personnes, commandez 44 lunch box." },
  { q: "Combien coûte une lunch box d'entreprise ?", a: `De ${eur(LB_BAS, true)} à ${eur(LB_HAUT, true)} HT par personne (entrée, sandwich, dessert, couverts inclus), plus ${eur(LIV)} HT de livraison par livraison.` },
  { q: "Peut-on être livré chaque jour du salon ?", a: "Oui : une livraison par jour, à l'heure choisie dès 6h30, avec une commande jusqu'à la veille à 14h (48 h à l'avance à partir de 50 personnes). Chaque livraison est facturée 29 € HT." },
  { q: "Que prévoir pour un accès de livraison en salon ?", a: "Demandez à l'organisateur l'accès livreurs, l'horaire autorisé et le nom du stand. Précisez-les à la commande, avec un contact joignable sur place." },
  { q: "Les lunch box conviennent-elles aux régimes ?", a: "Oui, les options végétariennes, vegan et sans gluten se précisent à la commande, avec le nombre de personnes concernées." },
  { q: "Et un plateau salé et sucré pour les visiteurs ?", a: "Un plateau apéritif et un plateau de mignardises se commandent en plus des lunch box, sur devis selon le nombre de visiteurs attendus." },
]

/* ───────────── 5. Formation ───────────── */
const journee = (n, plateau) => {
  const accueil = n * 8
  const dej = n * plateau
  const pause = n * 6
  return { accueil, dej, pause, une: accueil + dej + pause + LIV, trois: accueil + dej + pause + 3 * LIV }
}
const F12 = journee(12, 29.9), F25 = journee(25, 29.9), F50 = journee(50, 29.9)
const FAQ_FORMATION = [
  { q: "Combien coûte la restauration d'une journée de formation pour 25 personnes ?", a: `${eur(F25.une, true)} HT avec une seule livraison (accueil café, déjeuner en plateaux repas, pause sucrée), ou ${eur(F25.trois, true)} HT avec trois livraisons à des heures différentes.` },
  { q: "Faut-il trois livraisons dans la journée ?", a: "Pas obligatoirement. Une livraison unique le matin, avec la pause sucrée gardée à température ambiante, économise 58 € HT. Trois livraisons garantissent des produits livrés à l'heure de chaque temps." },
  { q: "Quel plateau repas choisir pour une formation ?", a: "Le plateau poulet à 29,90 € HT est le choix par défaut ; le végétarien à 28,90 € HT pour ceux qui l'ont signalé ; le saumon à 30,90 € HT sur demande. Un plateau par personne, plus 10 % si la liste n'est pas nominative." },
  { q: "Combien coûte l'accueil café d'une formation ?", a: "La formule Classique à 8 € HT par personne (viennoiseries, jus, café, fruits). Pour un accueil plus léger, des viennoiseries et du café reviennent à environ 6,50 € HT par personne." },
  { q: "Peut-on commander pour plusieurs jours de formation ?", a: "Oui, en une seule demande de devis : indiquez les dates, l'effectif par jour et l'adresse. Une formation de 3 jours à 25 personnes représente trois fois le budget d'une journée." },
  { q: "Et si l'effectif varie d'un jour à l'autre ?", a: "Précisez l'effectif de chaque jour dans la demande. Un ajustement reste possible jusqu'à la veille à 14h pour le lendemain." },
]

/* ───────────── 6. Petit-déjeuner récurrent ───────────── */
const R10 = 10 * 8 + LIV, R20 = 20 * 8 + LIV
const FAQ_RECURRENT = [
  { q: "Peut-on commander un petit-déjeuner chaque semaine ?", a: "Oui. La commande se répète chaque semaine ou à la demande, avec la même qualité à chaque livraison, et un tarif préférentiel est possible sur devis pour des commandes régulières." },
  { q: "Combien coûte un petit-déjeuner hebdomadaire pour 10 personnes ?", a: `${eur(R10)} HT par livraison en formule Classique (10 × 8 € + 29 € de livraison), soit ${eur(4 * R10)} HT pour quatre semaines.` },
  { q: "Combien pour 20 personnes chaque semaine ?", a: `${eur(R20)} HT par livraison en formule Classique, soit ${eur(4 * R20)} HT pour quatre semaines.` },
  { q: "Faut-il un engagement ?", a: "Non, il n'y a pas d'engagement : chaque commande se passe jusqu'à la veille à 14h, et la livraison commence à 6h30." },
  { q: "Comment organiser un petit-déjeuner récurrent ?", a: "Fixez un jour et une heure de livraison, un contact sur place et une adresse précise. Gardez la liste des régimes à jour, et prévoyez 10 % de marge si l'effectif varie." },
  { q: "Un petit-déjeuner récurrent convient-il aux formations ?", a: "Oui, c'est le cas courant des sièges qui reçoivent des collaborateurs plusieurs fois par mois : un accueil café livré à l'heure, sans rien à gérer sur place." },
]

/* ───────────── 7. Pot de départ en petit-déjeuner ───────────── */
const D12 = pdj(12), D20 = pdj(20), D35 = pdj(35)
const FAQ_DEPART_PDJ = [
  { q: "Peut-on organiser un pot de départ au petit-déjeuner ?", a: "Oui, c'est un format courant : de 10h à 11h, avec des viennoiseries, des fruits, du jus et une boisson chaude. Il évite l'apéritif en fin de journée et convient à tous les invités." },
  { q: "Combien coûte un pot de départ au petit-déjeuner pour 20 personnes ?", a: `${eur(cla(20))} HT en formule Classique (20 × 8 € + 29 € de livraison). Le petit-déjeuner complet se chiffre sur devis, avec ou sans boissons chaudes.` },
  { q: "Peut-on supprimer les boissons chaudes ?", a: `Oui : il suffit de retirer les thermos du devis. Les fruits et les jus restent au menu.` },
  { q: "Combien de viennoiseries pour un pot de départ ?", a: "2 mini-viennoiseries par personne (3 jusqu'à 10 personnes), 1 mignardise, 1 verre de jus. Ajoutez 10 % si les collègues d'autres services peuvent passer." },
  { q: "Et pour les cadeaux et la cagnotte ?", a: "Le budget du petit-déjeuner se divise par le nombre de participants ; le cadeau se finance à part. Le guide du pot de départ à la retraite détaille le calcul." },
  { q: "Jusqu'à quand commander ?", a: "Jusqu'à la veille à 14h, avec une livraison dès 6h30 ; 48 h à l'avance à partir de 50 personnes." },
]

export const BESOINS = [
  /* ───────── 1 ───────── */
  {
    ...BASE,
    slug: 'maitre-d-hotel-diner-assis-entreprise-combien-prix',
    titre: "Maître d'hôtel pour un dîner assis d'entreprise : combien, quel rôle, quel prix ?",
    metaTitle: "Maître d'hôtel pour un dîner assis : combien et quel prix",
    extrait: "Dîner assis d'entreprise : 1 maître d'hôtel pour 10 à 25 convives. Ratios par effectif, rôle de chacun, 250 € HT les 6 heures chez L'Écrin Traiteur.",
    img: '/maitre-hotel-petit-dejeuner-salon.webp',
    relatedProducts: [],
    enBref: [
      "Pour un dîner assis, comptez 1 maître d'hôtel pour 10 à 25 convives, et 1 pour 10 à 15 pour un repas à plusieurs plats.",
      "50 convives assis demandent 3 à 5 personnes de service ; 100 convives, 4 à 10.",
      `Chez L'Écrin Traiteur, un maître d'hôtel coûte ${eur(MH)} HT pour un service de 6 heures, installation et rangement compris.`,
      "Le service s'ajoute à un menu à partager, à un cocktail ou à une réception sur mesure, sur devis.",
    ],
    about: ["Maître d'hôtel", "Dîner assis d'entreprise", "Service traiteur"],
    faq: FAQ_ASSIS,
    contenu: `
      <p>Pour un <strong>dîner assis d'entreprise</strong>, comptez <strong>1 maître d'hôtel pour 10 à 25 convives</strong>, et 1 pour 10 à 15 si le repas compte plusieurs plats servis à l'assiette. Chez L'Écrin Traiteur, un maître d'hôtel coûte <strong>${eur(MH)} HT pour 6 heures</strong>, mise en place et rangement compris. Voici comment calculer le nombre de personnes et le budget.</p>

      <h2>Combien de maîtres d'hôtel pour un dîner assis ?</h2>
      <table>
        <thead><tr><th>Convives assis</th><th>Personnes de service</th><th>Budget service HT (${eur(MH)} les 6 h)</th><th>Par convive</th></tr></thead>
        <tbody>
          <tr><td><strong>30</strong></td><td>2 à 3</td><td>${eur(2 * MH)} à ${eur(3 * MH)}</td><td>${eur(2 * MH / 30, true)} à ${eur(3 * MH / 30, true)}</td></tr>
          <tr><td><strong>50</strong></td><td>3 à 5</td><td>${eur(3 * MH)} à ${eur(5 * MH)}</td><td>${eur(3 * MH / 50, true)} à ${eur(5 * MH / 50, true)}</td></tr>
          <tr><td><strong>100</strong></td><td>4 à 10</td><td>${eur(4 * MH)} à ${eur(10 * MH)}</td><td>${eur(4 * MH / 100, true)} à ${eur(10 * MH / 100, true)}</td></tr>
        </tbody>
      </table>
      <p>Ces repères viennent de traiteurs et d'agences de service. Ils donnent un ordre de grandeur que votre traiteur ajuste à votre lieu. Prévoyez toujours au moins deux personnes : l'une sert, l'autre dresse et débarrasse. Le guide <a href="/journal/combien-maitres-hotel-evenement-entreprise">combien de maîtres d'hôtel pour un événement d'entreprise</a> détaille les ratios pour les cocktails et les buffets.</p>

      <h2>Qu'est-ce qui fait varier le nombre de personnes de service ?</h2>
      <ul>
        <li><strong>Le nombre de plats :</strong> un repas à trois plats demande plus de passages qu'un plat unique, d'où la fourchette de 1 pour 10 à 15.</li>
        <li><strong>La vaisselle :</strong> la vaisselle en dur se dresse et se débarrasse ; la vaisselle jetable allège le service.</li>
        <li><strong>Le service :</strong> à l'assiette, à table ou en plat à partager ne mobilise pas le même nombre de bras.</li>
        <li><strong>Le lieu :</strong> deux niveaux, un long trajet depuis la cuisine ou un seul ascenseur augmentent les besoins.</li>
        <li><strong>La durée :</strong> comptez l'installation avant l'arrivée des convives et le rangement après le dîner.</li>
      </ul>

      <h2>Quel est le rôle du maître d'hôtel pendant le dîner ?</h2>
      <ol>
        <li><strong>Avant :</strong> il vérifie la mise en place, le plan de table et l'accès à la cuisine, puis répartit l'équipe.</li>
        <li><strong>Pendant :</strong> il tient le timing entre les plats, fait le lien avec la cuisine et gère les imprévus (régimes, retardataires).</li>
        <li><strong>Après :</strong> il organise le débarrassage, le rangement et la remise en ordre du lieu.</li>
      </ol>
      <p>Le serveur exécute ; le maître d'hôtel coordonne. Beaucoup de traiteurs appellent « maître d'hôtel » tout le personnel de service : regardez sur le devis ce que recouvre l'intitulé et combien d'heures sont comptées.</p>

      <h2>Combien coûte le service d'un dîner assis ?</h2>
      <p>À Paris, le service se facture en général 30 à 50 € de l'heure, souvent avec un minimum de 3 ou 4 heures. Chez L'Écrin Traiteur, un maître d'hôtel coûte <strong>${eur(MH)} HT pour 6 heures</strong>. Pour 40 convives avec 3 personnes de service, le service revient à ${eur(3 * MH)} HT, soit ${eur(3 * MH / 40, true)} HT par convive, à ajouter au menu.</p>

      <h2>Que proposer à table chez L'Écrin Traiteur ?</h2>
      <p>Le service s'ajoute à un <a href="/creations/a-partager">menu à partager</a>, à un cocktail ou à une <a href="/creations/receptions-sur-mesure">réception sur mesure</a>. Indiquez dans votre demande de <a href="/devis">devis</a> le nombre de convives, le format et la durée : nous proposons le nombre de maîtres d'hôtel adapté, sous 24 h.</p>
      ${SIGNATURE}
      <p><em>Ratios : traiteurs et agences de service (Acteur Fête, Bonnaire Traiteur, Firmin Traiteur, RS Traiteur, MyTraiteur), consultés le 17 octobre 2026.</em></p>

      <h2>Questions fréquentes sur le maître d'hôtel pour un dîner assis</h2>
${faqHtml(FAQ_ASSIS)}
    `,
  },

  /* ───────── 2 ───────── */
  {
    ...BASE,
    slug: 'maitre-d-hotel-buffet-entreprise-combien-prix',
    titre: "Maître d'hôtel pour un buffet d'entreprise : combien, que fait-il, quel budget ?",
    metaTitle: "Maître d'hôtel pour un buffet : combien et quel budget",
    extrait: "Buffet d'entreprise : 1 maître d'hôtel pour 20 à 40 invités. Budget pour 50, 100 et 150 personnes, et cas du petit-déjeuner, à 250 € HT les 6 heures.",
    img: '/maitre-hotel-petit-dejeuner-salon.webp',
    relatedProducts: [],
    enBref: [
      "Buffet debout : 1 maître d'hôtel pour 20 à 40 invités, plutôt 1 pour 30 avec un buffet chaud et de la vaisselle en dur.",
      "Petit-déjeuner ou pause : 1 pour 50 à 80 invités, et le service n'est pas indispensable pour 20 personnes en libre-service.",
      `Chez L'Écrin Traiteur : ${eur(MH)} HT pour un maître d'hôtel pendant 6 heures, soit ${eur(4 * MH)} HT pour 4 maîtres d'hôtel à 100 invités.`,
      "Le nombre se précise à la demande de devis : invités, format, durée, vaisselle, lieu.",
    ],
    about: ["Maître d'hôtel", "Buffet d'entreprise", "Service traiteur"],
    faq: FAQ_BUFFET,
    contenu: `
      <p>Pour un <strong>buffet d'entreprise</strong>, comptez <strong>1 maître d'hôtel pour 20 à 40 invités</strong>, plutôt 1 pour 30 avec un buffet chaud et de la vaisselle en dur. Chez L'Écrin Traiteur, un maître d'hôtel coûte <strong>${eur(MH)} HT pour 6 heures</strong> : 4 maîtres d'hôtel pour un buffet de 100 personnes représentent ${eur(4 * MH)} HT.</p>

      <h2>Combien de maîtres d'hôtel selon le nombre d'invités ?</h2>
      <table>
        <thead><tr><th>Invités</th><th>Maîtres d'hôtel</th><th>Budget service HT</th><th>Par invité</th></tr></thead>
        <tbody>
          <tr><td><strong>50</strong></td><td>2</td><td>${eur(2 * MH)}</td><td>${eur(2 * MH / 50, true)}</td></tr>
          <tr><td><strong>100</strong></td><td>3 à 5</td><td>${eur(3 * MH)} à ${eur(5 * MH)}</td><td>${eur(3 * MH / 100, true)} à ${eur(5 * MH / 100, true)}</td></tr>
          <tr><td><strong>150</strong></td><td>4 à 7</td><td>${eur(4 * MH)} à ${eur(7 * MH)}</td><td>${eur(4 * MH / 150, true)} à ${eur(7 * MH / 150, true)}</td></tr>
        </tbody>
      </table>
      <p>Pour un cocktail dînatoire, comptez 1 maître d'hôtel pour 25 à 30 invités ; pour un cocktail simple en vaisselle jetable, 1 pour 50 à 80. Le détail par format est dans <a href="/journal/combien-maitres-hotel-evenement-entreprise">combien de maîtres d'hôtel pour un événement d'entreprise</a>.</p>

      <h2>Que fait le maître d'hôtel sur un buffet ?</h2>
      <ul>
        <li><strong>Installe</strong> le buffet : dressage des plats, des plateaux et des boissons avant l'arrivée des invités.</li>
        <li><strong>Réassortit</strong> les pièces et les boissons pendant le service.</li>
        <li><strong>Débarrasse</strong> les assiettes et les verres, et garde la table propre.</li>
        <li><strong>Tient le timing</strong> avec l'organisateur : ouverture du buffet, desserts, fin du service.</li>
        <li><strong>Range</strong> et remet le lieu en ordre à la fin.</li>
      </ul>

      <h2>Faut-il un maître d'hôtel pour un buffet livré ?</h2>
      <p>Pas obligatoirement. Un buffet livré prêt à servir, en vaisselle jetable, peut se gérer sans service. Le maître d'hôtel se justifie quand le buffet est long, quand il y a des plats chauds ou de la vaisselle en dur, et à partir d'une quarantaine de convives. En dessous, votre équipe peut réassortir.</p>

      <h2>Et pour un petit-déjeuner d'entreprise ?</h2>
      <p>Pour un petit-déjeuner ou une pause, le ratio est de <strong>1 maître d'hôtel pour 50 à 80 invités</strong>, 1 pour 50 avec de la vaisselle en dur. Pour 20 personnes en libre-service, il n'est pas indispensable. Il devient utile si vous voulez que quelqu'un installe, réassortisse et range pendant la matinée : précisez-le à la demande de devis, avec l'horaire de la prestation, par exemple de 9h à 10h. Le petit-déjeuner Classique pour 20 personnes revient à ${eur(cla(20))} HT livraison comprise, le complet étant sur devis (voir <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">petit-déjeuner pour 20 personnes</a>).</p>

      <h2>Combien coûte un maître d'hôtel ?</h2>
      <p>À Paris, le service se facture en général 30 à 50 € de l'heure, avec un minimum de 3 ou 4 heures. Chez L'Écrin Traiteur : <strong>${eur(MH)} HT pour 6 heures</strong>, installation et rangement compris. Les maîtres d'hôtel sont sélectionnés et formés par notre maison.</p>

      <h2>Comment commander ?</h2>
      <p>Indiquez dans votre demande de <a href="/devis">devis</a> le nombre d'invités, le format, la durée avec l'installation et le rangement, le type de vaisselle et l'accès au lieu. Le service s'ajoute à un <a href="/creations/cocktails">cocktail</a>, à un <a href="/creations/a-partager">buffet à partager</a> ou à une <a href="/creations/animations-culinaires">animation culinaire</a>. Pour un dîner assis, voir <a href="/journal/maitre-d-hotel-diner-assis-entreprise-combien-prix">maître d'hôtel pour un dîner assis</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le maître d'hôtel pour un buffet</h2>
${faqHtml(FAQ_BUFFET)}
    `,
  },

  /* ───────── 3 ───────── */
  {
    ...BASE,
    slug: 'petit-dejeuner-presse-accueil-cafe-lancement-produit',
    titre: "Petit-déjeuner presse et accueil café : quoi servir, quelles quantités, quel budget ?",
    metaTitle: "Petit-déjeuner presse : quoi servir, quantités, budget",
    extrait: `Accueil presse ou lancement de produit : quoi servir, quelles quantités et quel budget pour 15, 35 ou 45 personnes (${eur(cla(15))} HT pour 15 en Classique).`,
    img: '/prod-cake-marbre.webp',
    relatedProducts: ['viennoiseries-melangees', 'madeleines-20', 'brochettes-fruits'],
    enBref: [
      "Pour un petit-déjeuner presse : mini-viennoiseries, madeleines, brochettes de fruits, café, thé, jus et eau, livrés une heure avant l'accueil.",
      `Formule Classique, livraison comprise : ${eur(cla(15))} HT pour 15 personnes, ${eur(cla(35))} HT pour 35, ${eur(cla(45))} HT pour 45 ; le petit-déjeuner complet est sur devis.`,
      "Gobelets, serviettes, sucres et touillettes sont compris ; tasses et verres réutilisables sur devis.",
      "Commande jusqu'à la veille 14h, livraison dès 6h30 ; 48 h à l'avance à partir de 50 personnes.",
    ],
    about: ["Petit-déjeuner presse", "Accueil café", "Lancement de produit"],
    faq: FAQ_PRESSE,
    contenu: `
      <p>Pour un <strong>petit-déjeuner presse</strong> ou un accueil café de lancement de produit, servez des petites pièces sucrées qui se mangent debout, du café, du thé, du jus et de l'eau, livrés une heure avant l'arrivée. En formule Classique, le budget est de <strong>${eur(cla(15))} HT pour 15 personnes</strong>, <strong>${eur(cla(35))} HT pour 35</strong> et <strong>${eur(cla(45))} HT pour 45</strong>, livraison comprise ; le petit-déjeuner complet se chiffre sur devis.</p>

      <h2>Que servir à un accueil presse ?</h2>
      <ul>
        <li><strong>Des mini-viennoiseries pur beurre :</strong> 2 par personne, en deux bouchées, sans assiette ni couteau.</li>
        <li><strong>Des madeleines et des cakes :</strong> pour varier les goûts, sans miettes sur les tablettes des journalistes.</li>
        <li><strong>Des brochettes de fruits frais :</strong> vegan et sans gluten, elles couvrent les régimes.</li>
        <li><strong>Du café, du thé, du jus et de l'eau :</strong> 1 thermos d'1 litre pour 6 personnes, 1 verre de jus par personne.</li>
      </ul>
      <p>Un accueil presse se joue sur le soin de la présentation et la ponctualité : tout doit être prêt avant l'arrivée du premier invité.</p>

      <h2>Combien commander pour 15, 35 ou 45 personnes ?</h2>
      <table>
        <thead><tr><th>Personnes</th><th>Mini-viennoiseries</th><th>Madeleines et cakes</th><th>Jus</th><th>Thermos</th><th>Classique HT livraison comprise</th></tr></thead>
        <tbody>
${[P15, P35, P45].map((r) => `          <tr><td><strong>${r.n}</strong></td><td>${r.vienn}</td><td>${r.madPieces}${r.cakes ? ` + ${r.cakes} cake${r.cakes > 1 ? 's' : ''}` : ''}</td><td>${r.litres} L</td><td>${r.thermos}</td><td><strong>${eur(cla(r.n))}</strong></td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Les quantités sont celles du petit-déjeuner complet, qui se chiffre sur devis ; la dernière colonne donne le budget de la formule Classique (viennoiseries, jus, café, fruits). Comptez les journalistes confirmés plus l'équipe qui les accueille, avec 10 % de marge. Le détail des quantités est dans <a href="/journal/de-quoi-se-compose-petit-dejeuner-entreprise">de quoi se compose un petit-déjeuner d'entreprise</a>.</p>

      <h2>À quelle heure faire livrer un accueil presse ?</h2>
      <p>Une heure avant l'accueil : pour un accueil à 9h30, une livraison à 8h45 laisse le temps de dresser la table. La livraison commence à 6h30, à l'heure que vous choisissez. Précisez l'adresse exacte, l'étage et un contact joignable sur place.</p>

      <h2>Quel matériel est compris ?</h2>
      <p>Avec un petit-déjeuner, sont compris les serviettes, les gobelets, les sucres et les touillettes. Pour des tasses et des verres réutilisables, la vaisselle se chiffre sur devis, et la livraison avec reprise du matériel coûte 39 € HT à Paris, dans le 92 et le 94, et le prix de la zone plus 19 € HT ailleurs.</p>

      <h2>Comment commander ?</h2>
      <p>Composez le petit-déjeuner dans les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a> ou demandez un <a href="/devis">devis</a> sous 24 h. Commande jusqu'à la veille à 14h, 48 h à l'avance à partir de 50 personnes. Pour un autre format de réception, voir <a href="/journal/organiser-inauguration-entreprise-deroule-budget-traiteur">organiser une inauguration d'entreprise</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le petit-déjeuner presse</h2>
${faqHtml(FAQ_PRESSE)}
    `,
  },

  /* ───────── 4 ───────── */
  {
    ...BASE,
    slug: 'restauration-stand-salon-professionnel-lunch-box-plateaux',
    titre: "Restauration d'un stand de salon professionnel : lunch box, plateaux et budget par jour",
    metaTitle: "Restauration stand de salon : lunch box et budget par jour",
    extrait: `Exposant en salon : 1 lunch box par personne et par jour, de ${eur(LB_BAS, true)} à ${eur(LB_HAUT, true)} HT. Budget pour 40 personnes et 4 jours.`,
    img: '/hero-bg2.webp',
    relatedProducts: [],
    enBref: [
      "Pour un stand de salon : 1 lunch box par personne présente à midi, plus 10 % de marge, livrée chaque jour.",
      `Lunch box : de ${eur(LB_BAS, true)} à ${eur(LB_HAUT, true)} HT par personne, entrée, sandwich, dessert et couverts inclus ; livraison ${eur(LIV)} HT par jour.`,
      `Pour 40 personnes : ${eur(stand(40, LB_BAS), true)} à ${eur(stand(40, LB_HAUT), true)} HT par jour, soit ${eur(4 * stand(40, LB_BAS), true)} à ${eur(4 * stand(40, LB_HAUT), true)} HT pour 4 jours.`,
      "Commande jusqu'à la veille 14h ; précisez l'accès livreurs du salon.",
    ],
    about: ["Stand de salon", "Lunch box", "Restauration d'exposant"],
    faq: FAQ_SALON,
    contenu: `
      <p>Pour la restauration d'un <strong>stand de salon professionnel</strong>, commandez <strong>1 lunch box par personne présente à midi</strong>, plus 10 % de marge, livrée chaque jour du salon. Une lunch box coûte <strong>de ${eur(LB_BAS, true)} à ${eur(LB_HAUT, true)} HT</strong> (entrée, sandwich, dessert, couverts inclus), plus ${eur(LIV)} HT de livraison. Pour 40 personnes, comptez ${eur(stand(40, LB_BAS), true)} à ${eur(stand(40, LB_HAUT), true)} HT par jour.</p>

      <h2>Combien coûte la restauration d'un stand pendant un salon ?</h2>
      <table>
        <thead><tr><th>Personnes sur le stand</th><th>Lunch box à commander</th><th>Budget par jour HT</th><th>Pour 4 jours HT</th></tr></thead>
        <tbody>
${[10, 20, 40].map((n) => { const c = Math.ceil(n * 1.1); return `          <tr><td><strong>${n}</strong></td><td>${c}</td><td>${eur(stand(c, LB_BAS), true)} à ${eur(stand(c, LB_HAUT), true)}</td><td>${eur(4 * stand(c, LB_BAS), true)} à ${eur(4 * stand(c, LB_HAUT), true)}</td></tr>` }).join('\n')}
        </tbody>
      </table>
      <p>Le calcul inclut 10 % de marge (arrondie à l'unité supérieure) et une livraison de ${eur(LIV)} HT par jour. Les prix des lunch box varient selon la formule choisie ; le détail est sur la page <a href="/creations/lunch-box">lunch box</a>.</p>

      <h2>Comment organiser les livraisons sur un salon ?</h2>
      <ol>
        <li><strong>Une livraison par jour,</strong> à l'heure choisie dès 6h30, avant l'ouverture du salon ou avant l'heure du déjeuner.</li>
        <li><strong>L'accès livreurs :</strong> demandez à l'organisateur l'horaire autorisé, le quai ou la porte d'accès et le nom du stand, puis indiquez-les à la commande.</li>
        <li><strong>Un contact joignable sur place,</strong> car les halls sont grands et les stands difficiles à repérer.</li>
        <li><strong>L'effectif de chaque jour :</strong> il peut varier ; précisez-le dans la demande, ajustable jusqu'à la veille à 14h.</li>
      </ol>

      <h2>Que commander en plus des lunch box ?</h2>
      <p>Pour accueillir des visiteurs, ajoutez un plateau salé et un plateau sucré par jour : un plateau apéritif et des mignardises, sur devis selon le nombre de visiteurs attendus. Pour le matin, un petit-déjeuner d'équipe avant l'ouverture : <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Les lunch box conviennent-elles à tous les régimes ?</h2>
      <p>Oui : les options végétariennes, vegan et sans gluten se précisent à la commande avec le nombre de personnes concernées. Pour les allergies, voir <a href="/journal/allergenes-traiteur-buffet-plateaux-obligations">allergènes : ce qu'un traiteur doit vous dire</a>.</p>

      <h2>Comment commander ?</h2>
      <p>Demandez un <a href="/devis">devis</a> sous 24 h, en indiquant les dates du salon, l'effectif par jour et l'adresse de livraison. Commande jusqu'à la veille à 14h, 48 h à l'avance à partir de 50 personnes. Facturation entreprise avec TVA.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur la restauration d'un stand de salon</h2>
${faqHtml(FAQ_SALON)}
    `,
  },

  /* ───────── 5 ───────── */
  {
    ...BASE,
    slug: 'restauration-journee-formation-entreprise-budget-25-personnes',
    titre: "Restauration d'une journée de formation : accueil café, déjeuner et pause, avec le budget",
    metaTitle: "Restauration d'une journée de formation : budget",
    extrait: `Accueil café, plateaux repas et pause sucrée : ${eur(F25.une, true)} HT par jour pour 25 personnes, livraison comprise. Budget pour 12, 25 et 50 personnes.`,
    img: '/hero-plateaux-essentiel.webp',
    relatedProducts: ['viennoiseries-melangees'],
    enBref: [
      "Une journée de formation se restaure en trois temps : accueil café, déjeuner en plateaux repas, pause sucrée.",
      `Pour 25 personnes : ${eur(F25.une, true)} HT par jour avec une livraison, ${eur(F25.trois, true)} HT avec trois livraisons.`,
      "Accueil café à 8 € HT par personne, plateau repas de 28,90 à 30,90 € HT, pause sucrée dès 6 € HT.",
      "Commande jusqu'à la veille 14h ; plusieurs jours de formation dans une seule demande de devis.",
    ],
    about: ["Journée de formation", "Restauration d'entreprise", "Plateaux repas"],
    faq: FAQ_FORMATION,
    contenu: `
      <p>Une <strong>journée de formation</strong> se restaure en trois temps : un accueil café, un déjeuner en plateaux repas et une pause sucrée. Pour 25 personnes, comptez <strong>${eur(F25.une, true)} HT par jour</strong> avec une seule livraison, ou ${eur(F25.trois, true)} HT avec trois livraisons à des heures différentes.</p>

      <h2>Combien coûte la restauration d'une journée de formation ?</h2>
      <p>Le calcul retient l'accueil café en formule Classique à 8 € HT par personne, le plateau repas poulet à 29,90 € HT et la pause sucrée à 6 € HT par personne.</p>
      <table>
        <thead><tr><th>Personnes</th><th>Accueil café</th><th>Déjeuner (plateaux)</th><th>Pause sucrée</th><th>Total avec 1 livraison</th><th>Total avec 3 livraisons</th></tr></thead>
        <tbody>
${[[12, F12], [25, F25], [50, F50]].map(([n, f]) => `          <tr><td><strong>${n}</strong></td><td>${eur(f.accueil, true)}</td><td>${eur(f.dej, true)}</td><td>${eur(f.pause, true)}</td><td><strong>${eur(f.une, true)}</strong></td><td>${eur(f.trois, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Pour une formation de 3 jours à 25 personnes, le budget représente trois fois une journée : ${eur(3 * F25.une, true)} HT avec une livraison par jour. Les prix des plateaux repas varient de 28,90 € HT (végétarien) à 30,90 € HT (saumon) : voir <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">combien de plateaux repas commander pour une réunion</a>.</p>

      <h2>Faut-il livrer trois fois dans la journée ?</h2>
      <p>Pas obligatoirement. Une livraison unique le matin, avec la pause sucrée gardée à température ambiante, économise 58 € HT par jour. Trois livraisons garantissent des produits livrés à l'heure de chaque temps : accueil à 8h30, déjeuner à 12h30, pause à 15h30. À 50 personnes ou plus, prévoyez 48 h d'avance.</p>

      <h2>Quel accueil café pour une formation ?</h2>
      <p>La formule Classique (viennoiseries, jus, café, fruits) à 8 € HT par personne convient à un accueil complet. Pour un accueil plus léger, des viennoiseries et du café reviennent à environ 6,50 € HT par personne. Les quantités sont dans <a href="/journal/combien-viennoiseries-par-personne">combien de mini-viennoiseries par personne</a>.</p>

      <h2>Comment organiser les régimes et les allergies ?</h2>
      <p>Demandez la liste des régimes à l'inscription : le plateau végétarien à 28,90 € HT, les options vegan et sans gluten sur demande, avec le nombre de personnes concernées. Les allergies précises (fruits de mer, courgettes, fruits à coque) se signalent à la commande : voir <a href="/journal/allergenes-traiteur-buffet-plateaux-obligations">allergènes : ce qu'un traiteur doit vous dire</a>.</p>

      <h2>Comment commander pour plusieurs jours ?</h2>
      <p>Faites une seule demande de <a href="/devis">devis</a> avec les dates, l'effectif par jour, l'adresse et les heures de livraison. Pour le programme complet d'une journée, voir <a href="/journal/organiser-seminaire-entreprise-programme-journee-restauration">organiser un séminaire : le programme d'une journée avec la restauration</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur la restauration d'une formation</h2>
${faqHtml(FAQ_FORMATION)}
    `,
  },

  /* ───────── 6 ───────── */
  {
    ...BASE,
    slug: 'petit-dejeuner-recurrent-hebdomadaire-entreprise-prix',
    titre: "Petit-déjeuner récurrent au bureau : commande hebdomadaire, prix et organisation",
    metaTitle: "Petit-déjeuner hebdomadaire au bureau : prix et mode d'emploi",
    extrait: `Un petit-déjeuner chaque semaine : ${eur(R10)} HT pour 10 personnes, ${eur(R20)} HT pour 20, sans engagement. Mode d'emploi pour un rituel d'équipe.`,
    img: '/prod-cake-marbre.webp',
    relatedProducts: ['viennoiseries-melangees'],
    enBref: [
      "Un petit-déjeuner récurrent se commande chaque semaine, sans engagement, avec la même qualité à chaque livraison.",
      `Formule Classique : ${eur(R10)} HT pour 10 personnes et ${eur(R20)} HT pour 20 par livraison, livraison de 29 € HT comprise.`,
      `Soit ${eur(4 * R10)} HT et ${eur(4 * R20)} HT pour quatre semaines ; un tarif préférentiel est possible sur devis.`,
      "Commande jusqu'à la veille 14h, livraison dès 6h30.",
    ],
    about: ["Petit-déjeuner récurrent", "Livraison hebdomadaire", "Rituel d'équipe"],
    faq: FAQ_RECURRENT,
    contenu: `
      <p>Un <strong>petit-déjeuner récurrent au bureau</strong> se commande chaque semaine, <strong>sans engagement</strong>, avec la même qualité à chaque livraison. En formule Classique, comptez <strong>${eur(R10)} HT par livraison pour 10 personnes</strong> et <strong>${eur(R20)} HT pour 20</strong>, livraison de 29 € HT comprise. Un tarif préférentiel est possible sur devis pour des commandes régulières.</p>

      <h2>Combien coûte un petit-déjeuner chaque semaine ?</h2>
      <table>
        <thead><tr><th>Effectif</th><th>Par livraison HT</th><th>Pour 4 semaines HT</th><th>Calcul</th></tr></thead>
        <tbody>
          <tr><td><strong>10 personnes</strong></td><td>${eur(R10)}</td><td>${eur(4 * R10)}</td><td>10 × 8 € + 29 €</td></tr>
          <tr><td><strong>20 personnes</strong></td><td>${eur(R20)}</td><td>${eur(4 * R20)}</td><td>20 × 8 € + 29 €</td></tr>
          <tr><td><strong>30 personnes</strong></td><td>${eur(30 * 8 + LIV)}</td><td>${eur(4 * (30 * 8 + LIV))}</td><td>30 × 8 € + 29 €</td></tr>
        </tbody>
      </table>
      <p>La formule Classique comprend viennoiseries, jus, café et fruits. Le petit-déjeuner complet, sur devis, ajoute plus de variété : budget pour 20 personnes dans <a href="/journal/petit-dejeuner-pour-20-personnes-quantites-budget">petit-déjeuner pour 20 personnes</a>.</p>

      <h2>Comment mettre en place un petit-déjeuner récurrent ?</h2>
      <ol>
        <li><strong>Choisissez un jour et une heure :</strong> la livraison commence à 6h30, à l'heure que vous fixez.</li>
        <li><strong>Désignez un contact sur place</strong> et indiquez l'adresse exacte, l'étage et l'accès.</li>
        <li><strong>Tenez la liste des régimes à jour :</strong> végétarien, vegan, sans gluten, précisés à chaque commande.</li>
        <li><strong>Ajustez l'effectif :</strong> commande jusqu'à la veille à 14h ; ajoutez 10 % si le nombre de présents varie.</li>
      </ol>

      <h2>Pour quels besoins un petit-déjeuner récurrent ?</h2>
      <p>Il convient aux sièges qui reçoivent des collaborateurs plusieurs fois par mois pour des formations, aux équipes qui se retrouvent chaque lundi, et aux accueils réguliers de clients. Il remplace la corvée de courses par un rituel prévisible. Pour varier d'une semaine à l'autre, voir <a href="/journal/idees-petit-dejeuner-bureau-par-budget">15 idées de petit-déjeuner par budget</a>.</p>

      <h2>Comment demander un tarif régulier ?</h2>
      <p>Faites une demande de <a href="/devis">devis</a> en indiquant la fréquence, l'effectif, le jour et l'adresse. Le tarif préférentiel pour des commandes régulières est proposé sur devis, sous 24 h. Pour composer une première commande, voir les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le petit-déjeuner récurrent</h2>
${faqHtml(FAQ_RECURRENT)}
    `,
  },

  /* ───────── 7 ───────── */
  {
    ...BASE,
    slug: 'pot-de-depart-petit-dejeuner-entreprise-budget',
    titre: "Pot de départ au petit-déjeuner : idée, quantités et budget pour 12, 20 ou 35 personnes",
    metaTitle: "Pot de départ au petit-déjeuner : budget et quantités",
    extrait: `Un pot de départ de 10h à 11h : ${eur(cla(20))} HT en Classique pour 20 personnes, livraison comprise, le complet sur devis. Quantités et variante sans boissons chaudes.`,
    img: '/hero-petitdej.webp',
    relatedProducts: ['viennoiseries-melangees', 'madeleines-20', 'brochettes-fruits'],
    enBref: [
      "Un pot de départ au petit-déjeuner se tient de 10h à 11h : viennoiseries, fruits, jus et boisson chaude, sans apéritif en fin de journée.",
      `Pour 20 personnes : ${eur(cla(20))} HT en formule Classique, livraison comprise ; le petit-déjeuner complet se chiffre sur devis, avec ou sans boissons chaudes.`,
      `Pour 12 personnes : ${eur(cla(12))} HT en Classique ; pour 35 : ${eur(cla(35))} HT.`,
      "Commande jusqu'à la veille 14h, livraison dès 6h30.",
    ],
    about: ["Pot de départ", "Petit-déjeuner d'entreprise", "Départ à la retraite"],
    faq: FAQ_DEPART_PDJ,
    contenu: `
      <p>Un <strong>pot de départ au petit-déjeuner</strong> se tient le plus souvent de 10h à 11h : des viennoiseries, des fruits, du jus et une boisson chaude, sans apéritif en fin de journée. Pour 20 personnes, comptez <strong>${eur(cla(20))} HT en formule Classique</strong>, livraison comprise ; le petit-déjeuner complet se chiffre sur devis.</p>

      <h2>Combien coûte un pot de départ au petit-déjeuner ?</h2>
      <table>
        <thead><tr><th>Personnes</th><th>Formule Classique</th><th>Mini-viennoiseries du complet</th><th>Thermos du complet</th><th>Petit-déjeuner complet</th></tr></thead>
        <tbody>
${[[12, D12], [20, D20], [35, D35]].map(([n, r]) => `          <tr><td><strong>${n}</strong></td><td>${eur(cla(n))}</td><td>${r.vienn}</td><td>${r.thermos}</td><td>sur devis</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Montants hors taxes, livraison de 29 € HT comprise. La formule Classique comprend viennoiseries, jus, café et fruits. Le complet, sur devis, suit nos quantités : 2 mini-viennoiseries par personne (3 jusqu'à 10 personnes), 1 mignardise, 1 brochette de fruits au-delà de 15 personnes, 1 verre de jus, 1 thermos d'1 litre pour 6 personnes.</p>

      <h2>Pourquoi un pot de départ au petit-déjeuner ?</h2>
      <ul>
        <li><strong>C'est plus simple :</strong> pas d'alcool ni de fin de journée à gérer, tout le monde peut venir.</li>
        <li><strong>C'est moins cher :</strong> ${eur(cla(20))} HT pour 20 personnes en Classique, contre ${eur(cocktail(20, FORMULES.invitation).avec, true)} HT pour un cocktail de 8 pièces avec boissons.</li>
        <li><strong>C'est convivial :</strong> une heure en milieu de matinée, avec un discours court et une photo.</li>
      </ul>

      <h2>Peut-on supprimer les boissons chaudes ?</h2>
      <p>Oui : il suffit de retirer les thermos du devis du petit-déjeuner complet. Les fruits (brochettes vegan et sans gluten) et les jus restent au menu.</p>

      <h2>Quel déroulé pour un pot de départ de 10h à 11h ?</h2>
      <ol>
        <li><strong>9h30 :</strong> livraison et mise en place du buffet dans la salle choisie.</li>
        <li><strong>10h :</strong> accueil des collègues, café et viennoiseries.</li>
        <li><strong>10h20 :</strong> prise de parole courte, remise du cadeau.</li>
        <li><strong>10h30 à 11h :</strong> moment libre, photo de groupe, retour au poste.</li>
      </ol>

      <h2>Et le cadeau, la cagnotte, l'invitation ?</h2>
      <p>Le budget du petit-déjeuner se divise par le nombre de participants, le cadeau se finance à part : voir <a href="/journal/pot-de-depart-retraite-buffet-budget-cagnotte">pot de départ à la retraite : buffet, budget et part de cagnotte</a>. Pour d'autres formats, <a href="/journal/organiser-pot-de-depart-entreprise-budget-quantites">organiser un pot de départ en entreprise</a> et le <a href="/journal/modeles-invitation-pot-petit-dejeuner-afterwork-entreprise">modèle d'invitation à copier</a>.</p>

      <h2>Comment commander ?</h2>
      <p>Composez votre petit-déjeuner dans les <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a> ou demandez un <a href="/devis">devis</a> sous 24 h. Commande jusqu'à la veille à 14h, livraison dès 6h30 à Paris et en Île-de-France.</p>
      ${SIGNATURE}

      <h2>Questions fréquentes sur le pot de départ au petit-déjeuner</h2>
${faqHtml(FAQ_DEPART_PDJ)}
    `,
  },
]
