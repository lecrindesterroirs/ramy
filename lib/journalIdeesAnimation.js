// Guide pilier « Idées d'animation en entreprise » (29/10/2026), fusionné via lib/journalOffice.js.
// Demande de Ramy du 28/10/2026 : un grand article GEO sur « quelle animation faire en entreprise », au-delà
// des trois articles d'animations culinaires (10 idées, idées et budget, quel traiteur), qui répondent à des
// questions plus étroites. Celui-ci couvre la question large : occasion, effectif, budget, culinaire ou non.
//
// Sources des chiffres :
//   - L'Écrin Traiteur (aucun montant écrit à la main) : lib/prixEntree.js (ANIMATION_DES, PDJ_DES, PAUSE_DES,
//     MINIMUM), lib/calculsPrix.js (cocktail, FORMULES, LIV), app/creations/animations-culinaires/data.js ;
//   - noms courts des animations que L'Écrin Traiteur ne vend pas : lib/animationsMarche.js. Les prix du marché
//     relevés (ANIMATIONS-PRIX-MARCHE-2026.md) ne sont PAS publiés : choix de Ramy du 29/10/2026.
// Règles : FICHE-VERITE.md. Aucun nom de client, aucune recommandation d'alcool, aucun concurrent traiteur cité.
// Surcouche anglaise : lib/en/journal/journalIdeesAnimation.js.

import { LIV, FORMULES, cocktail } from './calculsPrix'
import { eur, faqHtml } from './journalQuestions'
import { ANIMATIONS, slugAnim, prixDesAnimation } from '../app/creations/animations-culinaires/data'
import { MINIMUM, PDJ_DES, PAUSE_DES, ANIMATION_DES } from './prixEntree'
import { MARCHE } from './animationsMarche'

const DATE = '29 octobre 2026'
const ISO = '2026-10-29'
export const SLUG_IDEES_ANIMATION = 'idees-animation-entreprise'

const AVEC_PLANCHER = ANIMATIONS.filter(a => prixDesAnimation(a) !== null)
const parId = (id) => ANIMATIONS.find(a => a.id === id)
const lien = (id) => { const a = parId(id); return `<a href="/creations/animations-culinaires/${slugAnim(a.nom)}">${a.nom}</a>` }
const liens = (ids) => ids.map(lien).join(', ')

/* Occasions : animations du catalogue conseillées, autres animations courantes (voir MARCHE), page utile. */
export const OCCASIONS = [
  { cle: 'seminaire', nom: 'Séminaire, journée de formation', moment: "Accueil du matin et pauses", ids: ['b1', 'b3', 'b5', 'b9'], autres: ['quiz', 'atelier'], page: '/occasions/seminaire-entreprise', pageNom: 'séminaire' },
  { cle: 'teambuilding', nom: 'Team building', moment: 'Après-midi', ids: ['b6', 'd1', 's3'], autres: ['cuisine', 'escape', 'rallye'], page: '/occasions/team-building', pageNom: 'team building' },
  { cle: 'afterwork', nom: "Afterwork, soirée d'équipe", moment: 'Fin de journée', ids: ['s3', 's6', 's9', 'ba1'], autres: ['quiz', 'karaoke', 'dj'], page: '/occasions/afterwork-entreprise', pageNom: 'afterwork' },
  { cle: 'fin', nom: "Fête de fin d'année", moment: 'Soirée', ids: ['d3', 'd7', 'do1', 'ba1'], autres: ['dj', 'photobooth', 'casino', 'magicien'], page: '/creations/evenements-saisonniers/fete-de-fin-dannee', pageNom: "fête de fin d'année" },
  { cle: 'noel', nom: 'Arbre de Noël, fête des familles', moment: 'Après-midi', ids: ['do7', 'do6', 'do5', 'b6'], autres: ['magicien', 'caricaturiste', 'photobooth'], page: '/creations/evenements-saisonniers/noel', pageNom: 'Noël' },
  { cle: 'qvt', nom: 'Semaine QVT, journée bien-être', moment: 'Pause du matin ou de l\'après-midi', ids: ['b3', 'b9', 'do4', 'ba3'], autres: ['bienetre', 'atelier'], page: '/creations/evenements-saisonniers/semaine-qvt', pageNom: 'semaine QVT' },
  { cle: 'integration', nom: "Matinée d'intégration, journée d'accueil", moment: 'Matin', ids: ['b1', 'b6', 'b7'], autres: ['quiz', 'rallye'], page: '/occasions/petit-dejeuner-entreprise', pageNom: "petit-déjeuner d'entreprise" },
  { cle: 'inauguration', nom: 'Inauguration, soirée clients, salon', moment: 'Fin de journée', ids: ['d3', 'd5', 'd2', 'ba1'], autres: ['photobooth', 'magicien', 'caricaturiste'], page: '/creations/cocktails', pageNom: "cocktail d'entreprise" },
  { cle: 'chandeleur', nom: 'Chandeleur, temps forts de l\'année', moment: 'Pause', ids: ['b6', 'b7', 'do2'], autres: ['atelier'], page: '/creations/evenements-saisonniers/chandeleur', pageNom: 'Chandeleur' },
]

/* Effectifs : le plancher divisé par l'effectif, et ce qui marche à cette taille. */
const EFFECTIFS = [
  { n: 15, lib: 'Moins de 20 personnes', conseil: "Une animation de divertissement courte (quiz, atelier créatif) ou une pause livrée plus soignée : à cette taille, une animation culinaire coûte plus cher par personne qu'un cocktail de 8 pièces.", ids: [] },
  { n: 30, lib: '20 à 50 personnes', conseil: 'Une animation culinaire unique, placée au moment fort : barista à l\'accueil, crêpes à la pause, mini burgers à l\'afterwork.', ids: ['b1', 'b6', 's3'] },
  { n: 80, lib: '50 à 150 personnes', conseil: 'Une animation culinaire et une animation de divertissement, ou deux postes culinaires pour éviter l\'attente : un salé et un sucré.', ids: ['d3', 'do1'] },
  { n: 200, lib: 'Plus de 150 personnes', conseil: 'Plusieurs postes répartis dans la salle, un par univers, et un cocktail livré en complément : le service ne repose pas sur un seul poste.', ids: ['d3', 'd7', 's3', 'ba1'] },
]

/* Exemples de budget combinés, calculés. */
const pdj30 = 30 * PDJ_DES + LIV
const ex1 = pdj30 + ANIMATION_DES
const ck50 = cocktail(50, FORMULES.invitation)
const ex2 = ck50.sans + ANIMATION_DES
const pause50 = 50 * PAUSE_DES + LIV
const ex3 = pause50 + ANIMATION_DES

const nomMarche = (cle) => (MARCHE.find(m => m.cle === cle)?.court) || cle

const FAQ_IDEES = [
  { q: "Quelle animation faire en entreprise ?", a: `Choisissez selon l'occasion et l'effectif : un barista ou un bar à jus pour un séminaire, des mini burgers ou un bar à mocktails pour un afterwork, une découpe de saumon ou un bar à glaces pour une fête de fin d'année, une barbe à papa pour un arbre de Noël. L'Écrin Traiteur propose ${AVEC_PLANCHER.length} animations culinaires dès ${eur(ANIMATION_DES)} HT à Paris et en Île-de-France.` },
  { q: "Quelle animation pour un petit groupe de moins de 20 personnes ?", a: `Une animation courte et peu équipée, comme un quiz ou un atelier créatif, ou une pause livrée plus soignée. Une animation culinaire au plancher de ${eur(ANIMATION_DES)} HT revient à ${eur(ANIMATION_DES / 15, true)} HT par personne pour 15 invités, plus qu'un cocktail de 8 pièces à ${eur(FORMULES.invitation.prix, true)} HT.` },
  { q: "Combien coûte une animation d'entreprise ?", a: `Cela dépend du format. Chez L'Écrin Traiteur, une animation culinaire part de ${eur(ANIMATION_DES)} HT, soit au minimum ${eur(ANIMATION_DES / 50)} HT par personne pour 50 invités. Les animations de divertissement (quiz, DJ, borne photo) se chiffrent à part, au forfait ou par personne, chez des prestataires spécialisés.` },
  { q: "Quelle animation pour un séminaire d'entreprise ?", a: "Le matin, un barista, un bar à jus pressés ou des œufs brouillés minute pour l'accueil ; pendant les pauses, un bar à yaourts et granola ou un bar à fruits frais. L'animation se place au moment où tout le monde est là, pas pendant les sessions de travail." },
  { q: "Quelle animation pour un afterwork ?", a: "Les formats debout et rapides : mini burgers, tacos gourmet, loaded fries ou bar à mocktails, 100 % sans alcool. Côté divertissement, un quiz ou un blind test d'une heure fonctionne bien jusqu'à une cinquantaine de personnes." },
  { q: "Quelle animation pour une fête de fin d'année d'entreprise ?", a: "Un poste salé qui se voit, comme la découpe de saumon frais ou un atelier sushi, un poste sucré comme le bar à glaces, et une animation de divertissement (DJ, borne photo, magicien). Au-delà de 150 invités, prévoyez plusieurs postes pour éviter la file." },
  { q: "Quelle animation pour un arbre de Noël d'entreprise ?", a: "Des animations sucrées que les enfants regardent se préparer : barbe à papa, pop corn sucré, fontaine au chocolat, crêpes. Elles se complètent bien par un magicien ou un caricaturiste." },
  { q: "Combien de temps à l'avance réserver une animation ?", a: `Au moins une semaine pour une animation culinaire chez L'Écrin Traiteur, plus tôt en décembre. Le devis est remis sous 24 h ; à partir de 50 personnes, la commande ferme se passe 48 h avant pour la partie livrée.` },
  { q: "Que faut-il prévoir sur place pour une animation ?", a: "Un espace près du passage, un accès électrique pour les ateliers chauds (crêpes, gaufres, œufs, pasta, burgers), l'horaire d'installation et l'accès au lieu. Ces informations se donnent dès la demande de devis." },
  { q: "Les animations culinaires conviennent-elles à tous les régimes ?", a: "Chez L'Écrin Traiteur, les viandes des animations sont halal (charcuterie, burgers, tacos, wraps, baguettes). Les mini burgers (steak végétal sur demande), les tacos et les wraps (falafel) ont une option végétarienne ; le sans gluten se précise à la commande." },
]

export const ARTICLE_IDEES_ANIMATION = {
  slug: SLUG_IDEES_ANIMATION,
  titre: "Idées d'animation en entreprise : laquelle choisir selon l'occasion, l'effectif et le budget (2026)",
  metaTitle: "Idées d'animation en entreprise : laquelle choisir en 2026",
  categorie: 'Conseils',
  date: DATE,
  isoDate: ISO,
  isoModified: ISO,
  img: '/hero-animations.webp',
  relatedProducts: ['crepes', 'brochettes-fruits', 'macarons'],
  about: ["Animation d'entreprise", 'Animation culinaire', "Événement d'entreprise", 'Team building'],
  extrait: `Quelle animation faire en entreprise : idées par occasion (séminaire, afterwork, fin d'année, arbre de Noël, QVT), par effectif, budget et ${AVEC_PLANCHER.length} animations culinaires dès ${eur(ANIMATION_DES)} HT.`,
  enBref: [
    "Choisissez l'animation dans cet ordre : l'occasion, puis l'effectif, puis le budget. Le moment de la journée fixe le format, l'effectif fixe le nombre de postes.",
    `Une animation culinaire chez L'Écrin Traiteur part de ${eur(ANIMATION_DES)} HT : au minimum ${eur(ANIMATION_DES / 50)} HT par personne pour 50 invités et ${eur(ANIMATION_DES / 100)} HT pour 100.`,
    "En dessous de 20 personnes, une animation de divertissement courte ou une pause soignée coûte moins cher par personne qu'une animation culinaire.",
    "Une animation culinaire remplace une partie du buffet ou du cocktail : elle se combine avec une prestation livrée plutôt que de s'y ajouter.",
  ],
  faq: FAQ_IDEES,
  contenu: `
      <p>La bonne animation d'entreprise dépend d'abord de l'<strong>occasion</strong>, puis de l'<strong>effectif</strong>, puis du <strong>budget</strong>. Le matin, on mise sur le chaud et le liquide (barista, bar à jus) ; à la pause, sur le sucré (crêpes, gaufres) ; le soir, sur les formats debout (mini burgers, bar à mocktails) et le divertissement (quiz, DJ, borne photo). Chez L'Écrin Traiteur, une animation culinaire part de <strong>${eur(ANIMATION_DES)} HT</strong>, soit au minimum ${eur(ANIMATION_DES / 50)} HT par personne pour 50 invités. Ce guide classe les idées par occasion et par effectif, et montre comment combiner animation et traiteur.</p>

      <h2>Quelle animation choisir selon l'occasion ?</h2>
      <p>Le tableau associe chaque occasion courante en entreprise à des animations culinaires de notre catalogue et aux animations de divertissement qu'on y voit le plus souvent.</p>
      <table>
        <thead><tr><th>Occasion</th><th>Moment</th><th>Animations culinaires</th><th>Autres animations courantes</th></tr></thead>
        <tbody>
${OCCASIONS.map(o => `          <tr><td><strong><a href="${o.page}">${o.nom}</a></strong></td><td>${o.moment}</td><td>${liens(o.ids)}</td><td>${o.autres.map(nomMarche).join(', ')}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Le catalogue complet est sur la page <a href="/creations/animations-culinaires">animations culinaires</a> : ${ANIMATIONS.length} animations en cinq univers, petit-déjeuner et brunch, déjeuner, street food, douceurs et bars.</p>

      <h2>Quelle animation selon le nombre de participants ?</h2>
      <p>L'effectif décide du nombre de postes, et du poids d'une animation dans le budget par personne. Le coût minimum ci-dessous est le plancher d'une animation culinaire chez L'Écrin Traiteur divisé par l'effectif.</p>
      <table>
        <thead><tr><th>Effectif</th><th>Exemple</th><th>Animation culinaire, minimum par personne</th><th>Ce qui fonctionne</th></tr></thead>
        <tbody>
${EFFECTIFS.map(e => `          <tr><td><strong>${e.lib}</strong></td><td>${e.n} personnes</td><td>${eur(ANIMATION_DES / e.n, true)} HT</td><td>${e.conseil}${e.ids.length ? ` Exemples : ${liens(e.ids)}.` : ''}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Repère utile : un cocktail de 8 pièces coûte ${eur(FORMULES.invitation.prix, true)} HT par personne. Tant que le plancher par personne dépasse ce montant, une animation culinaire seule n'est pas la meilleure dépense.</p>

      <h2>Combien coûte une animation d'entreprise ?</h2>
      <p>Une animation culinaire se chiffre en deux postes, la mise en place et les portions. Chez L'Écrin Traiteur, le plancher est de ${eur(ANIMATION_DES)} HT, installation et démontage compris, et le prix exact est fixé sur devis selon la date, le lieu, l'effectif, la durée et l'accès.</p>

      <h2>Animation culinaire ou animation de divertissement ?</h2>
      <ul>
        <li><strong>Une animation culinaire</strong> nourrit en même temps qu'elle anime : elle remplace une partie du buffet ou du cocktail, et tout le monde y passe, même ceux qui ne veulent pas participer à un jeu.</li>
        <li><strong>Une animation de divertissement</strong> (quiz, escape game, DJ, borne photo) crée un moment collectif, mais ne nourrit pas : il faut une prestation traiteur à côté.</li>
        <li><strong>Un atelier où les invités cuisinent</strong> est un team building : il demande une cuisine équipée ou un lieu dédié, et une durée de deux à trois heures. Nos animations, elles, sont préparées devant les invités par un intervenant, sans les faire cuisiner.</li>
        <li><strong>Les deux ensemble</strong> fonctionnent au-delà de 50 personnes : un poste culinaire pendant que le quiz ou le DJ tient le reste de la salle.</li>
      </ul>

      <h2>Idées d'animations culinaires par moment de la journée</h2>
      <ul>
        <li><strong>Accueil du matin</strong> : ${liens(['b1', 'b3', 'b5', 'b9', 'b8'])}. Pour le café sans intervenant, la ${lien('b2')}.</li>
        <li><strong>Pause</strong> : ${liens(['b6', 'b7', 'do4', 'do6', 'do2'])}.</li>
        <li><strong>Déjeuner</strong> : ${liens(['d1', 'd2', 's7', 's5', 'b4'])}.</li>
        <li><strong>Cocktail et soirée</strong> : ${liens(['d3', 'd5', 'd6', 'd7', 's2'])}.</li>
        <li><strong>Afterwork</strong> : ${liens(['s3', 's6', 's9', 'ba1'])}.</li>
        <li><strong>Fêtes et enfants</strong> : ${liens(['do1', 'do5', 'do7'])}.</li>
      </ul>
      <p>La charcuterie est halal (bœuf séché, dinde fumée, bresaola), comme toutes les viandes des animations. Pour les temps forts du calendrier, voir la <a href="/creations/evenements-saisonniers/chandeleur">Chandeleur</a>, la <a href="/creations/evenements-saisonniers/semaine-qvt">semaine QVT</a>, <a href="/creations/evenements-saisonniers/halloween">Halloween</a> et la <a href="/creations/evenements-saisonniers/fete-de-fin-dannee">fête de fin d'année</a>.</p>

      <h2>Combien budgéter une animation avec le traiteur ?</h2>
      <p>Trois exemples calculés au plancher de ${eur(ANIMATION_DES)} HT, avec le prix catalogue du reste et une livraison de ${LIV} € HT. Le prix réel de l'animation est fixé sur devis.</p>
      <table>
        <thead><tr><th>Occasion</th><th>Prestation livrée</th><th>Animation</th><th>Total minimum HT</th><th>Par personne</th></tr></thead>
        <tbody>
          <tr><td><strong>Accueil de séminaire, 30 personnes</strong></td><td>Petit-déjeuner Classique : ${eur(pdj30)}</td><td>${lien('b1')} : ${eur(ANIMATION_DES)}</td><td>${eur(ex1)}</td><td>${eur(ex1 / 30, true)}</td></tr>
          <tr><td><strong>Afterwork, 50 personnes</strong></td><td>Cocktail ${FORMULES.invitation.pieces} pièces, jus et eau : ${eur(ck50.sans, true)}</td><td>${lien('s3')} : ${eur(ANIMATION_DES)}</td><td>${eur(ex2, true)}</td><td>${eur(ex2 / 50, true)}</td></tr>
          <tr><td><strong>Fête des collaborateurs, 50 personnes</strong></td><td>Pause gourmande : ${eur(pause50)}</td><td>${lien('do1')} : ${eur(ANIMATION_DES)}</td><td>${eur(ex3)}</td><td>${eur(ex3 / 50, true)}</td></tr>
        </tbody>
      </table>
      <p>Pour aller plus loin sur le budget : <a href="/journal/animations-culinaires-entreprise-idees-budget">animations culinaires, idées et budget</a> et <a href="/journal/quel-traiteur-animation-culinaire-evenement-paris">quel traiteur pour une animation culinaire</a>.</p>

      <h2>Organiser une animation : la liste à vérifier</h2>
      <ol>
        <li><strong>Fixez l'occasion et l'heure</strong> : l'animation se place quand tout le monde est là, à l'accueil, à la pause ou en début de soirée.</li>
        <li><strong>Confirmez l'effectif</strong> : il décide du nombre de postes et des quantités.</li>
        <li><strong>Vérifiez le lieu</strong> : espace près du passage, prise électrique pour les ateliers chauds, horaire d'installation, accès et ascenseur.</li>
        <li><strong>Recensez les régimes</strong> : végétarien, sans gluten, allergies, à donner avec la commande.</li>
        <li><strong>Réservez tôt</strong> : au moins une semaine pour une animation culinaire, davantage en décembre.</li>
        <li><strong>Ajustez le reste</strong> : retirez du buffet ou du cocktail ce que l'animation sert déjà.</li>
      </ol>

      <h2>Les erreurs fréquentes</h2>
      <ul>
        <li><strong>Choisir l'animation avant l'effectif</strong> : sous 20 personnes, une animation culinaire pèse plus de ${eur(ANIMATION_DES / 20)} HT par personne.</li>
        <li><strong>Un seul poste pour 200 personnes</strong> : la file d'attente tue l'ambiance, prévoyez plusieurs postes.</li>
        <li><strong>Une animation sans rien à manger</strong> : un quiz ou un DJ demande un traiteur à côté.</li>
        <li><strong>Placer l'animation au fond de la salle</strong> : un poste loin du passage reste vide.</li>
        <li><strong>Oublier l'électricité</strong> : crêpes, gaufres, burgers et pasta ont besoin d'une prise.</li>
      </ul>

      <h2>Questions fréquentes sur les animations d'entreprise</h2>
${faqHtml(FAQ_IDEES)}

      <h2>Demander un devis d'animation</h2>
      <p>Indiquez la date, le lieu, l'effectif, la durée et l'accès : L'Écrin Traiteur répond sous 24 h, avec facture entreprise et TVA. <a href="/devis">Demander un devis</a>. Voir aussi les <a href="/journal/animation-culinaire-entreprise-paris">10 idées d'animations culinaires</a>.</p>
      <p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes, livraison de ${LIV} € HT à Paris et communes proches, minimum de commande ${MINIMUM} € HT.</em></p>
    `,
}

export const IDEES_ANIMATION = [ARTICLE_IDEES_ANIMATION]

/* Valeurs calculées, reprises par la surcouche anglaise (aucun montant recopié). */
export const IDEES_ANIMATION_VALEURS = { AVEC_PLANCHER, OCCASIONS, EFFECTIFS, pdj30, ex1, ck50, ex2, pause50, ex3 }
