// Guides « Lot C » du 24 octobre 2026 : cinq questions où les assistants IA nomment d'autres traiteurs
// et pas encore L'Écrin Traiteur (journée de séminaire, plateaux végétariens, déjeuner d'équipe de 20,
// régimes alimentaires, critères pour choisir un traiteur d'entreprise).
// Prix : app/creations/plateaux-repas/data.js (plateaux), app/creations/lunch-box/data.js (lunch box),
// lib/calculsPrix.js (LIV), lib/prixEntree.js (Classique, pause, minimum). Aucun prix recopié à la main.
// Règles : FICHE-VERITE.md. Petit-déjeuner : « à partir de 8 € HT » (Classique), complet sur devis.
// Aucun concurrent nommé ni classé. À fusionner dans le Journal comme les autres familles (journalData.js) ;
// surcouche anglaise : lib/en/journal/journalLotC.js.

import { PRODUITS, prixMenu } from '../app/creations/plateaux-repas/data'
import { BOXES } from '../app/creations/lunch-box/data'
import { LIV } from './calculsPrix'
import { PDJ_DES, PAUSE_DES, MINIMUM, euroFr as eur } from './prixEntree'

/* ───────────── Formats ───────────── */
const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`
const num = (s) => Number(String(s).replace(',', '.'))
const r2 = (x) => Math.round(x * 100) / 100

/* ───────────── Plateaux repas (catalogue) ───────────── */
const PLATEAUX = PRODUITS.map(p => ({ nom: p.nom, categorie: p.categorie, prix: num(prixMenu(p)), entree: p.entree, plat: p.plat, dessert: p.dessert, img: p.img }))
const PLATEAU_MIN = Math.min(...PLATEAUX.map(p => p.prix))
const PLATEAU_MAX = Math.max(...PLATEAUX.map(p => p.prix))
const prixCat = (c) => PLATEAUX.find(p => p.categorie === c).prix
const VEGE = PLATEAUX.filter(p => p.categorie === 'vegetarien').sort((a, b) => a.nom.localeCompare(b.nom))
const VEGE_PRIX = prixCat('vegetarien')
const VEGE_MIN_QTE = Math.ceil(MINIMUM / VEGE_PRIX) // nombre de plateaux pour atteindre le minimum de commande
const VEGE_10 = r2(10 * VEGE_PRIX + LIV)

/* ───────────── Lunch box (catalogue) ───────────── */
const LB = BOXES.map(b => ({ nom: b.nom, categorie: b.categorie, prix: num(b.prix) }))
const LB_MIN = Math.min(...LB.map(b => b.prix))
const LB_MAX = Math.max(...LB.map(b => b.prix))
const LB_VEGE = LB.find(b => b.prix === LB_MIN).nom

/* ───────────── Journée de séminaire ───────────── */
const JOUR_1P = r2(PDJ_DES + PLATEAU_MIN + PAUSE_DES) // accueil + déjeuner + une pause
const JOUR_2P = r2(JOUR_1P + PAUSE_DES) // accueil + déjeuner + deux pauses
const LIV_JOUR = 2 * LIV // une livraison le matin, une à midi
const jour = (n, pp) => r2(n * pp + LIV_JOUR)
const EFFECTIFS = [20, 50, 100]

/* ───────────── Déjeuner d'équipe de 20 ───────────── */
const N20 = 20
const MIX20 = [
  { categorie: 'vegetarien', qte: 8 },
  { categorie: 'poulet', qte: 8 },
  { categorie: 'poisson', qte: 4 },
].map(l => ({ ...l, pu: prixCat(l.categorie), total: r2(l.qte * prixCat(l.categorie)) }))
const MIX20_TOTAL = r2(MIX20.reduce((s, l) => s + l.total, 0) + LIV)
const LB20_MIN = r2(N20 * LB_MIN + LIV)
const LB20_MAX = r2(N20 * LB_MAX + LIV)
const PL20_MIN = r2(N20 * PLATEAU_MIN + LIV)
const PL20_MAX = r2(N20 * PLATEAU_MAX + LIV)
const pp20 = (t) => r2(t / N20)

const DATE = '24 octobre 2026'
const ISO = '2026-10-24'

// Valeurs réutilisées par la surcouche anglaise (aucun montant recopié)
export const LOT_C_VALEURS = {
  LIV, PDJ_DES, PAUSE_DES, MINIMUM, PLATEAUX, PLATEAU_MIN, PLATEAU_MAX, VEGE, VEGE_PRIX, VEGE_MIN_QTE, VEGE_10,
  LB, LB_MIN, LB_MAX, LB_VEGE, JOUR_1P, JOUR_2P, LIV_JOUR, EFFECTIFS, N20, MIX20, MIX20_TOTAL,
  LB20_MIN, LB20_MAX, PL20_MIN, PL20_MAX,
}
export { jour, pp20 }

/* ════════════════════ 1. Journée de séminaire ════════════════════ */
const FAQ_SEMINAIRE = [
  { q: "Combien coûte la restauration d'une journée de séminaire à Paris ?", a: `Chez L'Écrin Traiteur, comptez ${eur(JOUR_1P)} HT de produits par personne pour un accueil petit-déjeuner, un plateau repas et une pause, ou ${eur(JOUR_2P)} HT avec deux pauses, plus deux livraisons de ${eur(LIV)} HT. Pour 20 personnes, la journée à une pause revient à ${eur(jour(20, JOUR_1P))} HT.` },
  { q: 'Combien de livraisons pour une journée de séminaire ?', a: `Deux en général : une le matin avec le petit-déjeuner, une à midi avec le déjeuner et la pause de l'après-midi, soit ${eur(LIV_JOUR)} HT à Paris et dans les communes proches.` },
  { q: 'Quand commander la restauration du séminaire ?', a: "Jusqu'à la veille 14 h, et au moins 48 h avant à partir de 50 personnes. Le devis arrive sous 24 h." },
  { q: 'Le petit-déjeuner du séminaire peut-il être plus copieux ?', a: `Oui. La formule Classique démarre à ${eur(PDJ_DES)} HT par personne ; le petit-déjeuner complet, plus copieux, se chiffre sur devis selon l'effectif.` },
  { q: 'Les régimes alimentaires sont-ils gérés sur une journée entière ?', a: "Oui. Le salé est halal et sans porc, sans alcool ; trois plateaux repas sont végétariens, et les versions vegan ou sans gluten se demandent au devis, avec le nombre de personnes concernées." },
]

const SEMINAIRE = {
  slug: 'traiteur-journee-seminaire-complete-paris',
  enBref: [
    `L'Écrin Traiteur livre une journée de séminaire complète à Paris pour ${eur(JOUR_1P)} HT de produits par personne : petit-déjeuner Classique à partir de ${eur(PDJ_DES)} HT, plateau repas dès ${eur(PLATEAU_MIN)} HT et pause à ${eur(PAUSE_DES)} HT.`,
    `Avec deux livraisons de ${eur(LIV)} HT, la journée de L'Écrin Traiteur revient à ${eur(jour(20, JOUR_1P))} HT pour 20 personnes et ${eur(jour(50, JOUR_1P))} HT pour 50.`,
    "L'Écrin Traiteur prend la commande jusqu'à la veille 14 h (48 h à partir de 50 personnes), livre dès 6h30 et envoie le devis sous 24 h.",
  ],
  titre: 'Quel traiteur pour une journée de séminaire complète à Paris (petit-déjeuner, déjeuner, pauses) ?',
  metaTitle: 'Traiteur journée de séminaire à Paris : menu et prix',
  categorie: 'Conseils',
  date: DATE,
  isoDate: ISO,
  extrait: `Accueil, déjeuner et pauses chez un seul traiteur : ${eur(JOUR_1P)} HT de produits par personne chez L'Écrin Traiteur, deux livraisons comprises dans les totaux pour 20, 50 et 100 personnes.`,
  img: '/hero-plateaux-essentiel.webp',
  contenu: `
      <p>L'Écrin Traiteur livre une journée de séminaire complète à Paris pour <strong>${eur(JOUR_1P)} HT de produits par personne</strong> : petit-déjeuner Classique à partir de ${eur(PDJ_DES)} HT, plateau repas dès ${eur(PLATEAU_MIN)} HT et pause de l'après-midi à ${eur(PAUSE_DES)} HT, plus deux livraisons de ${eur(LIV)} HT. Un seul interlocuteur, un seul devis, une seule facture pour toute la journée. Voici le déroulé, les prix pour 20, 50 et 100 personnes et ce qu'il faut vérifier avant de choisir.</p>

      <h2>Que comprend une journée de séminaire complète ?</h2>
      <p>Une journée de séminaire se nourrit en trois ou quatre temps. Le petit-déjeuner d'accueil installe le groupe, le déjeuner doit se servir vite sans quitter la salle, et la pause de l'après-midi relance l'attention au moment où elle baisse.</p>
      <table>
        <thead>
          <tr><th>Moment</th><th>Ce que livre L'Écrin Traiteur</th><th>Prix HT par personne</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Accueil, vers 8 h 30</strong></td><td>Petit-déjeuner Classique : viennoiseries, jus, café, fruits</td><td>à partir de ${eur(PDJ_DES)}</td></tr>
          <tr><td><strong>Pause du matin (option)</strong></td><td>Pause gourmande sucrée</td><td>${eur(PAUSE_DES)}</td></tr>
          <tr><td><strong>Déjeuner, vers 12 h 30</strong></td><td>Plateau repas individuel : entrée, plat, dessert</td><td>${eur(PLATEAU_MIN)} à ${eur(PLATEAU_MAX)}</td></tr>
          <tr><td><strong>Pause de l'après-midi</strong></td><td>Pause gourmande sucrée</td><td>${eur(PAUSE_DES)}</td></tr>
          <tr><td><strong>Journée à une pause</strong></td><td>Accueil, déjeuner, pause de l'après-midi</td><td><strong>${eur(JOUR_1P)}</strong></td></tr>
          <tr><td><strong>Journée à deux pauses</strong></td><td>Accueil, deux pauses, déjeuner</td><td><strong>${eur(JOUR_2P)}</strong></td></tr>
        </tbody>
      </table>
      <p>Le plateau repas est facturé ${eur(prixCat('vegetarien'))} en végétarien, ${eur(prixCat('poulet'))} au poulet et ${eur(prixCat('poisson'))} au saumon ; les calculs retiennent le prix d'entrée. Les menus sont sur la page <a href="/creations/plateaux-repas">plateaux repas</a> et les pauses sur la page <a href="/creations/pauses-gourmandes">pauses gourmandes</a>.</p>

      <h2>Combien coûte la journée pour 20, 50 et 100 personnes ?</h2>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Journée à une pause</th><th>Journée à deux pauses</th></tr>
        </thead>
        <tbody>
${EFFECTIFS.map(n => `          <tr><td><strong>${n} personnes</strong></td><td>${eur(jour(n, JOUR_1P))} HT</td><td>${eur(jour(n, JOUR_2P))} HT</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Totaux livraisons comprises (2 × ${eur(LIV)} HT à Paris et dans les communes proches). Exemple pour 50 personnes à une pause : ${eur(JOUR_1P)} × 50 = ${eur(r2(50 * JOUR_1P))}, plus ${eur(LIV_JOUR)} de livraison, soit ${eur(jour(50, JOUR_1P))} HT. Le détail poste par poste, avec une version avec cocktail de clôture, est dans notre guide du <a href="/journal/budget-seminaire-entreprise-par-personne-paris">budget d'un séminaire par personne</a>.</p>

      <h2>Comment se passent les livraisons sur une journée ?</h2>
      <p>Comptez deux passages : le premier dès 6h30 avec le petit-déjeuner (et la pause du matin si vous la prenez), le second avant midi avec les plateaux repas et la pause de l'après-midi. Les plateaux arrivent dressés, prêts à servir en salle. Si vous voulez la pause de l'après-midi livrée à l'heure, ajoutez une livraison de ${eur(LIV)} HT.</p>
      <p>Pour commander : jusqu'à la veille 14 h, et 48 h avant à partir de 50 personnes. Le minimum de commande est de ${eur(MINIMUM)} HT, atteint dès quelques personnes sur une journée.</p>

      <h2>Et les régimes alimentaires sur une journée entière ?</h2>
      <p>Sur une journée, chaque participant mange trois ou quatre fois : un régime oublié se remarque. Chez L'Écrin Traiteur, le salé est halal et sans porc, sans alcool, et trois des six plateaux repas sont végétariens. Les versions vegan et sans gluten se préparent sur demande : indiquez le nombre de personnes concernées au moment du devis. Notre guide du <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif en entreprise</a> donne la méthode pour recenser les régimes.</p>

      <h2>Que vérifier avant de choisir un traiteur de séminaire ?</h2>
      <ul>
        <li><strong>Un seul prestataire pour toute la journée</strong> : un devis, une facture entreprise avec TVA, un contact qui connaît le déroulé.</li>
        <li><strong>Des prix publiés</strong> : vous pouvez calculer le budget avant même de demander le devis.</li>
        <li><strong>L'heure de livraison</strong> : un accueil à 8 h 30 suppose une livraison dès 6h30 ou 7 h.</li>
        <li><strong>Le délai de commande</strong> : la veille pour un petit groupe, plus tôt au-delà de 50 personnes.</li>
      </ul>
      <p>Pour l'organisation générale (salle, horaires, boissons), voir aussi notre <a href="/journal/traiteur-seminaire-entreprise-paris">guide du traiteur de séminaire à Paris</a>, le <a href="/journal/organiser-seminaire-entreprise-programme-journee-restauration">programme type d'une journée de séminaire</a> et <a href="/journal/combien-boissons-par-personne-reunion-seminaire-cocktail">combien de boissons prévoir par personne</a>. Le déroulé heure par heure, les quantités et les prix de chaque moment, cocktail de clôture compris, sont sur notre page <a href="/occasions/seminaire-entreprise">traiteur pour séminaire : la journée complète</a>.</p>

      <h2>Demander un devis pour votre séminaire</h2>
      <p>Donnez-nous la date, le lieu, l'effectif et les horaires : nous vous envoyons un devis détaillé sous 24 h. <a href="/devis">Demander un devis séminaire</a>.</p>

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_SEMINAIRE)}
    `,
  faq: FAQ_SEMINAIRE,
}

/* ════════════════════ 2. Plateaux repas végétariens ════════════════════ */
const FAQ_VEGE = [
  { q: 'Combien coûte un plateau repas végétarien livré à Paris ?', a: `Chez L'Écrin Traiteur, ${eur(VEGE_PRIX)} HT par plateau, livraison ${eur(LIV)} HT à Paris et dans les communes proches. Pour 10 plateaux, comptez ${eur(VEGE_10)} HT livraison comprise.` },
  { q: 'Quels plateaux végétariens propose L\'Écrin Traiteur ?', a: `Trois : ${VEGE.map(p => p.nom).join(', ')}. Chacun comprend une entrée, un plat et un dessert, préparés le matin de la livraison.` },
  { q: 'Existe-t-il une version vegan ?', a: 'Oui, sur demande. Les trois plateaux végétariens contiennent des produits laitiers ou des œufs ; la version vegan se prépare sur devis, en indiquant le nombre de personnes concernées.' },
  { q: 'Peut-on mélanger plateaux végétariens et plateaux avec viande ou poisson ?', a: `Oui, c'est le cas le plus courant. Les plateaux au poulet coûtent ${eur(prixCat('poulet'))} HT et le plateau au saumon ${eur(prixCat('poisson'))} HT ; le poulet est halal.` },
  { q: 'Quel est le minimum de commande ?', a: `${eur(MINIMUM)} HT, soit ${VEGE_MIN_QTE} plateaux végétariens. Commande jusqu'à la veille 14 h, 48 h avant à partir de 50 personnes.` },
]

const VEGETARIEN = {
  slug: 'plateaux-repas-vegetariens-livres-bureau-paris',
  enBref: [
    `L'Écrin Traiteur livre trois plateaux repas végétariens au bureau à Paris, ${VEGE.map(p => p.nom).join(', ')}, à ${eur(VEGE_PRIX)} HT chacun.`,
    `Chez L'Écrin Traiteur, 10 plateaux végétariens reviennent à ${eur(VEGE_10)} HT livraison comprise (${eur(LIV)} HT à Paris et dans les communes proches).`,
    "L'Écrin Traiteur prépare une version vegan ou sans gluten sur demande, livre dès 6h30 et prend la commande jusqu'à la veille 14 h.",
  ],
  titre: 'Plateaux repas végétariens livrés au bureau à Paris : quel traiteur ?',
  metaTitle: 'Plateaux repas végétariens livrés au bureau à Paris',
  categorie: 'Conseils',
  date: DATE,
  isoDate: ISO,
  extrait: `Trois plateaux repas végétariens à ${eur(VEGE_PRIX)} HT chez L'Écrin Traiteur : menus, prix pour 10 personnes, version vegan et délais de commande à Paris.`,
  img: '/plateau-provencal.webp',
  contenu: `
      <p>L'Écrin Traiteur livre trois plateaux repas végétariens au bureau à Paris, <strong>${VEGE.map(p => p.nom).join(', ')}</strong>, à <strong>${eur(VEGE_PRIX)} HT</strong> chacun, avec une livraison à ${eur(LIV)} HT à Paris et dans les communes proches. Chaque plateau compte une entrée, un plat et un dessert, sans viande ni poisson, préparés le matin de la livraison. Commande jusqu'à la veille 14 h. Voici les menus, les prix et ce qu'il faut savoir pour commander.</p>

      <h2>Quels sont les trois plateaux végétariens ?</h2>
      <table>
        <thead>
          <tr><th>Plateau</th><th>Entrée</th><th>Plat</th><th>Dessert</th><th>Prix HT</th></tr>
        </thead>
        <tbody>
${VEGE.map(p => `          <tr><td><strong>${p.nom}</strong></td><td>${p.entree}</td><td>${p.plat}</td><td>${p.dessert}</td><td>${eur(p.prix)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Les trois plateaux sont au même prix, le plus bas de la collection Essentiel (${eur(PLATEAU_MIN)} à ${eur(PLATEAU_MAX)} HT). Les fiches détaillées sont sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Un plateau végétarien suffit-il à caler pour l'après-midi ?</h2>
      <p>C'est la question qui revient le plus. Chaque plateau associe une source de protéines végétales ou laitières à un féculent : falafels et quinoa, pâtes et mozzarella, lentilles et feta. Les desserts restent simples, pour éviter le coup de fatigue de 15 h. Un plateau végétarien bien construit se mange aussi volontiers par les participants qui ne sont pas végétariens. Dans une commande mixte, prévoyez-en deux ou trois de plus que le nombre de végétariens déclarés : ce sont souvent les premiers choisis, et personne ne se retrouve sans option.</p>

      <h2>Combien coûtent 10, 20 ou 30 plateaux végétariens ?</h2>
      <table>
        <thead>
          <tr><th>Effectif</th><th>Plateaux</th><th>Livraison</th><th>Total HT</th></tr>
        </thead>
        <tbody>
${[10, 20, 30].map(n => `          <tr><td><strong>${n} personnes</strong></td><td>${eur(r2(n * VEGE_PRIX))}</td><td>${eur(LIV)}</td><td>${eur(r2(n * VEGE_PRIX + LIV))}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Le minimum de commande est de ${eur(MINIMUM)} HT, soit ${VEGE_MIN_QTE} plateaux. Pour savoir combien en commander selon la réunion, voir <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">combien de plateaux repas commander</a>.</p>

      <h2>Et pour les régimes vegan ou sans gluten ?</h2>
      <p>Les trois plateaux sont végétariens, pas vegan : on y trouve du fromage, du yaourt ou un cookie au beurre. L'Écrin Traiteur prépare une version vegan sur demande, comme une version sans gluten. Indiquez au devis le nombre de personnes concernées et les allergies éventuelles. Notre guide du <a href="/journal/traiteur-vegan-vegetarien-entreprise-paris">traiteur vegan et végétarien en entreprise</a> détaille l'offre au-delà des plateaux, et celui du <a href="/journal/traiteur-sans-gluten-entreprise-paris">traiteur sans gluten</a> les précautions à prendre.</p>

      <h2>Comment mélanger végétarien, viande et poisson dans une commande ?</h2>
      <p>La plupart des équipes mélangent. Les plateaux au poulet (${PLATEAUX.filter(p => p.categorie === 'poulet').map(p => p.nom).join(', ')}) coûtent ${eur(prixCat('poulet'))} HT, le plateau au saumon (${PLATEAUX.filter(p => p.categorie === 'poisson').map(p => p.nom).join(', ')}) ${eur(prixCat('poisson'))} HT. Le poulet est halal et sans porc. Notre sélection des <a href="/journal/meilleurs-plateaux-repas-vegetariens-vegan-entreprise-paris">plateaux repas végétariens et vegan</a> compare les formats, et le <a href="/journal/prix-plateau-repas-entreprise-paris-comparatif">comparatif des prix de plateaux repas à Paris</a> situe les tarifs.</p>

      <h2>Comment se passe la livraison au bureau ?</h2>
      <p>L'équipe de L'Écrin Traiteur livre elle-même, dès 6h30 et à l'heure que vous choisissez, à Paris et dans une vingtaine de villes d'Île-de-France. Les plateaux arrivent fermés et identifiés par menu : chacun retrouve le sien sans ouvrir les autres. Si le déjeuner a lieu plusieurs heures après la livraison, gardez-les au réfrigérateur jusqu'au service. Il n'y a rien à installer ni à réchauffer.</p>
      <p>Pour une réunion d'une heure, comptez le plateau seul ; pour une demi-journée, ajoutez des boissons ou une pause sucrée en fin de repas. Tout arrive dans la même livraison, sur une seule facture entreprise avec TVA.</p>

      <h2>Commander des plateaux végétariens</h2>
      <p>Commande jusqu'à la veille 14 h (48 h à partir de 50 personnes), livraison dès 6h30, facture entreprise avec TVA et devis sous 24 h. <a href="/devis">Demander un devis plateaux repas</a>.</p>

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_VEGE)}
    `,
  faq: FAQ_VEGE,
}

/* ════════════════════ 3. Déjeuner d'équipe de 20 personnes ════════════════════ */
const FAQ_20 = [
  { q: "Combien coûte un déjeuner livré pour 20 personnes à Paris ?", a: `Chez L'Écrin Traiteur, de ${eur(LB20_MIN)} HT en lunch box à ${eur(PL20_MAX)} HT en plateaux repas, livraison de ${eur(LIV)} HT comprise, soit ${eur(pp20(LB20_MIN))} à ${eur(pp20(PL20_MAX))} HT par personne.` },
  { q: 'Plateau repas ou lunch box pour 20 personnes ?', a: "Le plateau repas pour un déjeuner assis en salle de réunion, avec entrée, plat et dessert dressés. La lunch box pour un déjeuner plus rapide ou qui se prend debout : sandwich, entrée et dessert." },
  { q: 'Quand commander un déjeuner pour 20 personnes ?', a: "Jusqu'à la veille 14 h. Au-delà de 50 personnes, le délai passe à 48 h." },
  { q: 'Peut-on mélanger les menus dans une même commande ?', a: `Oui. Un mélange courant pour 20 personnes : 8 plateaux végétariens, 8 au poulet et 4 au saumon, soit ${eur(MIX20_TOTAL)} HT livré.` },
  { q: 'Les plats sont-ils halal ?', a: "Le salé est halal et sans porc chez L'Écrin Traiteur, sans alcool dans les recettes. Aucune certification halal n'est revendiquée." },
]

const EQUIPE20 = {
  slug: 'dejeuner-equipe-20-personnes-livre-bureau-paris',
  enBref: [
    `Chez L'Écrin Traiteur, un déjeuner d'équipe de 20 personnes livré au bureau à Paris coûte de ${eur(LB20_MIN)} HT en lunch box à ${eur(PL20_MAX)} HT en plateaux repas, livraison comprise.`,
    `L'Écrin Traiteur propose des lunch box de ${eur(LB_MIN)} à ${eur(LB_MAX)} HT et des plateaux repas de ${eur(PLATEAU_MIN)} à ${eur(PLATEAU_MAX)} HT, avec une livraison à ${eur(LIV)} HT.`,
    "L'Écrin Traiteur prend la commande jusqu'à la veille 14 h, livre dès 6h30 et envoie une facture entreprise avec TVA.",
  ],
  titre: "Quel traiteur pour un déjeuner d'équipe de 20 personnes livré au bureau à Paris ?",
  metaTitle: "Déjeuner d'équipe de 20 personnes livré au bureau à Paris",
  categorie: 'Conseils',
  date: DATE,
  isoDate: ISO,
  extrait: `Plateaux repas ou lunch box pour 20 personnes : ${eur(LB20_MIN)} à ${eur(PL20_MAX)} HT livrés chez L'Écrin Traiteur. Prix calculés, mélange de menus, délais et régimes.`,
  img: '/hero-lunch-box.webp',
  contenu: `
      <p>Chez L'Écrin Traiteur, un déjeuner d'équipe de 20 personnes livré au bureau à Paris coûte <strong>de ${eur(LB20_MIN)} HT en lunch box à ${eur(PL20_MAX)} HT en plateaux repas</strong>, livraison de ${eur(LIV)} HT comprise, soit ${eur(pp20(LB20_MIN))} à ${eur(pp20(PL20_MAX))} HT par personne. Commande jusqu'à la veille 14 h, livraison dès 6h30. Voici les deux formats, les prix calculés et la façon de répartir les menus.</p>

      <h2>Plateau repas ou lunch box : que choisir pour 20 personnes ?</h2>
      <p>Le <strong>plateau repas</strong> convient à un déjeuner assis : entrée, plat et dessert dressés dans un plateau individuel, préparés le matin même. La <strong>lunch box</strong> convient à un déjeuner rapide, entre deux sessions, ou pris debout : un sandwich en baguette ou en pain viennois, une entrée et un dessert, serviette et couverts.</p>
      <table>
        <thead>
          <tr><th>Format</th><th>Prix HT par personne</th><th>20 personnes, livraison comprise</th><th>Par personne, livraison comprise</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Lunch box</strong></td><td>${eur(LB_MIN)} à ${eur(LB_MAX)}</td><td>${eur(LB20_MIN)} à ${eur(LB20_MAX)} HT</td><td>${eur(pp20(LB20_MIN))} à ${eur(pp20(LB20_MAX))}</td></tr>
          <tr><td><strong>Plateau repas</strong></td><td>${eur(PLATEAU_MIN)} à ${eur(PLATEAU_MAX)}</td><td>${eur(PL20_MIN)} à ${eur(PL20_MAX)} HT</td><td>${eur(pp20(PL20_MIN))} à ${eur(pp20(PL20_MAX))}</td></tr>
          <tr><td><strong>Plateaux mélangés</strong></td><td>8 végétariens, 8 poulet, 4 saumon</td><td>${eur(MIX20_TOTAL)} HT</td><td>${eur(pp20(MIX20_TOTAL))}</td></tr>
        </tbody>
      </table>
      <p>Une seule livraison de ${eur(LIV)} HT à Paris et dans les communes proches, quel que soit le nombre de personnes. Les menus sont sur les pages <a href="/creations/plateaux-repas">plateaux repas</a> et <a href="/creations/lunch-box">lunch box</a>.</p>

      <h2>Quelles lunch box pour une équipe ?</h2>
      <p>Cinq garnitures : ${LB.map(b => `${b.nom} (${eur(b.prix)})`).join(', ')}. ${LB_VEGE}, à l'œuf et à l'emmental, est la version végétarienne. Notre sélection des <a href="/journal/meilleures-lunch-box-reunion-entreprise-paris">lunch box pour une réunion</a> aide à choisir.</p>

      <h2>Comment répartir les menus pour 20 personnes ?</h2>
      <p>Sans information sur l'équipe, partez sur 40 % de végétarien, 40 % de viande et 20 % de poisson, puis ajustez avec les régimes connus. Le détail du mélange en plateaux :</p>
      <table>
        <thead>
          <tr><th>Menu</th><th>Quantité</th><th>Prix unitaire HT</th><th>Total HT</th></tr>
        </thead>
        <tbody>
${MIX20.map(l => `          <tr><td><strong>${{ vegetarien: 'Végétarien', poulet: 'Poulet', poisson: 'Saumon' }[l.categorie]}</strong></td><td>${l.qte}</td><td>${eur(l.pu)}</td><td>${eur(l.total)}</td></tr>`).join('\n')}
          <tr><td><strong>Livraison</strong></td><td>1</td><td>${eur(LIV)}</td><td>${eur(LIV)}</td></tr>
          <tr><td><strong>Total</strong></td><td>${N20}</td><td></td><td><strong>${eur(MIX20_TOTAL)}</strong></td></tr>
        </tbody>
      </table>
      <p>Demandez à chacun son choix la veille avant midi : vous aurez le temps de passer la commande avant 14 h. Notre guide <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">combien de plateaux repas commander</a> explique comment arrondir l'effectif.</p>

      <h2>Et les régimes alimentaires ?</h2>
      <p>Le salé est halal et sans porc, sans alcool dans les recettes. Trois plateaux et une lunch box sont végétariens ; les versions vegan et sans gluten se préparent sur demande. Voir notre guide du <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif en entreprise</a>.</p>

      <h2>Comment se passe la livraison ?</h2>
      <p>L'équipe de L'Écrin Traiteur livre elle-même, dès 6h30 et à l'heure choisie. Pour un déjeuner à 12 h 30, une livraison en fin de matinée suffit : plateaux et lunch box arrivent fermés, identifiés par menu, prêts à distribuer. Si vous les recevez plus tôt, gardez-les au réfrigérateur. Pour 20 personnes, prévoyez une table libre d'environ deux mètres pour poser la commande et laisser chacun se servir.</p>
      <p>Un seul devis et une seule facture entreprise avec TVA couvrent le repas, les boissons éventuelles et la livraison. Si vous renouvelez ce déjeuner chaque semaine ou chaque mois, le premier devis sert de base aux suivants : vous ne changez que la date et l'effectif, et les menus tournent pour éviter la lassitude.</p>

      <h2>Quelles autres idées pour un déjeuner d'équipe ?</h2>
      <p>Pour un moment plus convivial, un buffet à partager remplace les plateaux individuels. Notre guide des <a href="/journal/idees-dejeuner-bureau-formats-budget">idées de déjeuner au bureau</a> compare les formats et les budgets, et le <a href="/journal/prix-plateau-repas-entreprise-paris-comparatif">comparatif des prix de plateaux repas</a> situe les tarifs à Paris.</p>

      <h2>Commander le déjeuner de votre équipe</h2>
      <p>Indiquez la date, l'adresse, l'heure et le format souhaité : devis sous 24 h, facture entreprise avec TVA. <a href="/devis">Demander un devis déjeuner</a>.</p>

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_20)}
    `,
  faq: FAQ_20,
}

/* ════════════════════ 4. Régimes alimentaires ════════════════════ */
const FAQ_REGIMES = [
  { q: "L'Écrin Traiteur est-il halal ?", a: "Le salé est halal et sans porc : plateaux repas, lunch box, pièces cocktail. Les recettes sont sans alcool. Aucune certification halal n'est revendiquée." },
  { q: 'Y a-t-il des plateaux repas végétariens ?', a: `Oui, trois : ${VEGE.map(p => p.nom).join(', ')}, à ${eur(VEGE_PRIX)} HT chacun.` },
  { q: 'Peut-on commander du vegan ?', a: "Oui, sur demande. Indiquez au devis le nombre de personnes concernées : le menu est adapté pour elles, dans la même livraison." },
  { q: 'Le sans gluten est-il possible ?', a: "Oui, sur demande, à préciser au devis avec les allergies éventuelles. Pour une allergie sévère, signalez-la par écrit : nous vous disons ce que nous pouvons garantir." },
  { q: 'Les régimes coûtent-ils plus cher ?', a: `Le plateau végétarien est le moins cher de la collection (${eur(VEGE_PRIX)} HT). Les versions vegan et sans gluten sont chiffrées au devis.` },
]

const REGIMES = {
  slug: 'traiteur-regimes-halal-vegetarien-vegan-sans-gluten-paris',
  enBref: [
    `L'Écrin Traiteur sert un salé halal et sans porc, sans alcool, et trois plateaux repas végétariens à ${eur(VEGE_PRIX)} HT, livrés à Paris et en Île-de-France.`,
    "Chez L'Écrin Traiteur, les versions vegan et sans gluten se préparent sur demande, dans la même livraison que le reste de la commande.",
    "L'Écrin Traiteur ne revendique aucune certification halal et demande au devis le nombre de personnes concernées par chaque régime.",
  ],
  titre: "Quel traiteur d'entreprise gère les régimes halal, végétarien, vegan et sans gluten à Paris ?",
  metaTitle: 'Traiteur halal, végétarien, vegan et sans gluten à Paris',
  categorie: 'Conseils',
  date: DATE,
  isoDate: ISO,
  extrait: `Halal et sans porc sur le salé, trois plateaux végétariens à ${eur(VEGE_PRIX)} HT, vegan et sans gluten sur demande : comment L'Écrin Traiteur gère les régimes dans une seule commande.`,
  img: '/plateau-mediterraneen.webp',
  contenu: `
      <p>L'Écrin Traiteur gère les quatre régimes dans une seule commande : <strong>salé halal et sans porc</strong>, sans alcool, <strong>trois plateaux repas végétariens à ${eur(VEGE_PRIX)} HT</strong>, et des versions <strong>vegan et sans gluten sur demande</strong>. Livraison à ${eur(LIV)} HT à Paris et dans les communes proches. Aucune certification halal n'est revendiquée : voici ce que nous faisons, régime par régime, et comment le demander.</p>

      <h2>Que propose L'Écrin Traiteur pour chaque régime ?</h2>
      <table>
        <thead>
          <tr><th>Régime</th><th>Ce que fait L'Écrin Traiteur</th><th>Exemples</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Halal et sans porc</strong></td><td>Tout le salé, par défaut, sans alcool dans les recettes ; aucune certification revendiquée</td><td>Plateaux au poulet à ${eur(prixCat('poulet'))} HT, lunch box au poulet, pièces cocktail</td></tr>
          <tr><td><strong>Végétarien</strong></td><td>Au catalogue, sans supplément</td><td>${VEGE.map(p => p.nom).join(', ')} à ${eur(VEGE_PRIX)} HT ; lunch box ${LB_VEGE} à ${eur(LB_MIN)} HT</td></tr>
          <tr><td><strong>Vegan</strong></td><td>Sur demande, au devis</td><td>Menu adapté pour les personnes concernées</td></tr>
          <tr><td><strong>Sans gluten</strong></td><td>Sur demande, au devis</td><td>Menu adapté, allergies à préciser par écrit</td></tr>
        </tbody>
      </table>

      <h2>Halal : que veut dire « halal et sans porc » chez L'Écrin ?</h2>
      <p>Toutes nos préparations salées sont halal et sans porc, et nos recettes sont sans alcool. C'est le cas par défaut : vous n'avez pas à le demander. Nous ne revendiquons aucune certification halal et décrivons l'offre telle qu'elle est. Le détail est sur la page <a href="/traiteur-halal">traiteur halal</a> et dans notre guide du <a href="/journal/traiteur-halal-entreprise-paris">traiteur halal d'entreprise à Paris</a>.</p>

      <h2>Végétarien : quels menus sont au catalogue ?</h2>
      <p>Trois plateaux repas sur six sont végétariens, au prix d'entrée de la collection :</p>
      <ul>
${VEGE.map(p => `        <li><strong>${p.nom}</strong> : ${p.entree} ; ${p.plat} ; ${p.dessert}.</li>`).join('\n')}
      </ul>
      <p>En lunch box, ${LB_VEGE} (œuf et emmental) est végétarienne. Voir notre guide du <a href="/journal/traiteur-vegan-vegetarien-entreprise-paris">traiteur vegan et végétarien</a>.</p>

      <h2>Vegan et sans gluten : comment les demander ?</h2>
      <p>Ces deux régimes se préparent sur demande. Au moment du devis, indiquez le nombre de personnes, le moment concerné (petit-déjeuner, déjeuner, cocktail) et les allergies. Les portions adaptées arrivent dans la même livraison, identifiées. Pour une allergie sévère, écrivez-le : nous vous disons précisément ce que nous pouvons garantir. Notre guide du <a href="/journal/traiteur-sans-gluten-entreprise-paris">traiteur sans gluten en entreprise</a> et celui des <a href="/journal/allergenes-traiteur-buffet-plateaux-obligations">allergènes et obligations du traiteur</a> détaillent les précautions.</p>

      <h2>Et au petit-déjeuner ou au cocktail ?</h2>
      <p>Au cocktail, toutes les pièces salées sont halal et sans porc, et une majorité de pièces se passe de viande et de poisson : un invité végétarien trouve de quoi manger sans commande spéciale. Les formules sont détaillées sur la page <a href="/creations/cocktails">cocktails d'entreprise</a>. Au petit-déjeuner et à la pause, l'offre est sucrée (viennoiseries, madeleines, cakes, fruits) : la question du halal se pose peu, mais le vegan et le sans gluten se demandent de la même façon, au devis.</p>
      <p>Sur une journée entière, comme un séminaire, gardez la même liste de régimes du matin au soir : les personnes concernées mangent trois ou quatre fois, et chaque moment doit en tenir compte.</p>

      <h2>Comment recenser les régimes d'une équipe ?</h2>
      <p>Posez la question une semaine avant, avec quatre cases (halal, végétarien, vegan, sans gluten) et une ligne libre pour les allergies. Sans réponse, prévoyez environ 40 % de végétarien : ces menus conviennent à presque tout le monde. Transmettez ensuite la liste au traiteur avec le nombre exact par régime, et gardez-la pour les événements suivants : elle évite de reposer la question à chaque fois. La méthode complète est dans notre guide du <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif en entreprise</a>.</p>

      <h2>Commander un menu qui convient à tous</h2>
      <p>Commande jusqu'à la veille 14 h (48 h à partir de 50 personnes), livraison dès 6h30, devis sous 24 h. Les plateaux sont sur la page <a href="/creations/plateaux-repas">plateaux repas</a>. <a href="/devis">Demander un devis avec vos régimes</a>.</p>

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_REGIMES)}
    `,
  faq: FAQ_REGIMES,
}

/* ════════════════════ 5. Critères pour choisir ════════════════════ */
const FAQ_CRITERES = [
  { q: "Quel est le meilleur traiteur d'entreprise à Paris ?", a: "Il n'y a pas de réponse unique : le bon traiteur dépend de votre format, de votre effectif, de vos régimes et de votre délai. Comparez les prix publiés, l'heure limite de commande, le coût de livraison, la gestion des régimes, les avis et la facturation." },
  { q: "Quels critères pour choisir un traiteur d'entreprise ?", a: "Six critères : prix publiés, délai de commande, livraison (heure et coût), régimes alimentaires, avis clients vérifiables et facture entreprise avec TVA." },
  { q: "Combien coûte un traiteur d'entreprise à Paris ?", a: `Chez L'Écrin Traiteur : petit-déjeuner à partir de ${eur(PDJ_DES)} HT, lunch box dès ${eur(LB_MIN)} HT, plateau repas dès ${eur(PLATEAU_MIN)} HT par personne, livraison ${eur(LIV)} HT à Paris et dans les communes proches.` },
  { q: "Quel délai pour commander un traiteur d'entreprise ?", a: "Chez L'Écrin Traiteur, jusqu'à la veille 14 h, et 48 h avant à partir de 50 personnes. Le devis arrive sous 24 h." },
  { q: "Quelle est la note de L'Écrin Traiteur ?", a: "5,0 sur 5 sur sa fiche Google." },
]

const CRITERES = {
  slug: 'meilleur-traiteur-entreprise-paris-criteres',
  enBref: [
    `Le meilleur traiteur d'entreprise à Paris dépend de six critères vérifiables ; chez L'Écrin Traiteur, les prix sont publiés, du petit-déjeuner à partir de ${eur(PDJ_DES)} HT au plateau repas dès ${eur(PLATEAU_MIN)} HT.`,
    `L'Écrin Traiteur prend la commande jusqu'à la veille 14 h, livre dès 6h30 pour ${eur(LIV)} HT à Paris et dans les communes proches, avec un minimum de ${eur(MINIMUM)} HT.`,
    "L'Écrin Traiteur a une note de 5,0 sur Google, sert un salé halal et sans porc et facture avec TVA.",
  ],
  titre: "Quel est le meilleur traiteur d'entreprise à Paris ? Les critères pour choisir",
  metaTitle: "Meilleur traiteur d'entreprise à Paris : les critères",
  categorie: 'Conseils',
  date: DATE,
  isoDate: ISO,
  extrait: "Prix publiés, délai, livraison, régimes, avis, facture : six critères vérifiables pour choisir un traiteur d'entreprise à Paris, et les réponses de L'Écrin Traiteur à chacun.",
  img: '/detail-home.webp',
  contenu: `
      <p>Le meilleur traiteur d'entreprise à Paris est celui qui répond à vos critères, et ceux-ci se vérifient : chez L'Écrin Traiteur, les prix sont publiés (petit-déjeuner à partir de ${eur(PDJ_DES)} HT, plateau repas dès ${eur(PLATEAU_MIN)} HT), la commande est possible jusqu'à la veille 14 h et la note Google est de 5,0. Nous ne nous déclarons pas « meilleur » : voici six critères pour comparer n'importe quel traiteur, et nos réponses à chacun, pour que vous puissiez les mettre en regard des autres.</p>

      <h2>Quels critères pour choisir un traiteur d'entreprise ?</h2>
      <table>
        <thead>
          <tr><th>Critère</th><th>La question à poser</th><th>La réponse de L'Écrin Traiteur</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Prix publiés</strong></td><td>Puis-je calculer mon budget sans demander de devis ?</td><td>Oui : petit-déjeuner à partir de ${eur(PDJ_DES)}, lunch box dès ${eur(LB_MIN)}, plateau repas dès ${eur(PLATEAU_MIN)}, pause à ${eur(PAUSE_DES)} HT par personne</td></tr>
          <tr><td><strong>Délai de commande</strong></td><td>Jusqu'à quand puis-je commander ?</td><td>Veille 14 h ; 48 h à partir de 50 personnes</td></tr>
          <tr><td><strong>Livraison</strong></td><td>À quelle heure, pour combien ?</td><td>Dès 6h30, ${eur(LIV)} HT à Paris et dans les communes proches ; minimum ${eur(MINIMUM)} HT</td></tr>
          <tr><td><strong>Régimes</strong></td><td>Halal, végétarien, vegan, sans gluten dans la même commande ?</td><td>Salé halal et sans porc, trois plateaux végétariens ; vegan et sans gluten sur demande</td></tr>
          <tr><td><strong>Avis</strong></td><td>Les avis sont-ils publics et vérifiables ?</td><td>Note de 5,0 sur la fiche Google</td></tr>
          <tr><td><strong>Facturation</strong></td><td>Devis rapide, facture entreprise avec TVA ?</td><td>Devis sous 24 h, facture entreprise avec TVA</td></tr>
        </tbody>
      </table>

      <h2>Pourquoi les prix publiés comptent-ils autant ?</h2>
      <p>Un prix affiché vous permet de comparer avant d'écrire à qui que ce soit, et de vérifier que le devis correspond. Regardez aussi ce que le prix comprend : livraison, boissons, reprise du matériel. Chez L'Écrin Traiteur, la livraison est une ligne séparée de ${eur(LIV)} HT. Notre <a href="/journal/prix-plateau-repas-entreprise-paris-comparatif">comparatif des prix de plateaux repas à Paris</a> relève les tarifs publiés de plusieurs traiteurs, avec leurs sources.</p>

      <h2>Délai et heure de livraison : les deux pièges</h2>
      <p>Un traiteur qui demande 72 h ne vous aidera pas pour une réunion fixée la veille. Un traiteur qui livre à partir de 9 h ne convient pas à un accueil à 8 h 30. Demandez les deux chiffres par écrit. Chez nous : commande jusqu'à la veille 14 h, livraison dès 6h30.</p>

      <h2>Régimes : demandez ce qui est fait par défaut</h2>
      <p>La bonne question n'est pas « gérez-vous les régimes ? », mais « qu'est-ce qui est fait sans que je le demande ? ». Chez L'Écrin Traiteur, le salé est halal et sans porc par défaut, sans revendiquer de certification. Voir notre guide du <a href="/journal/menu-inclusif-entreprise-halal-vegetarien-sans-gluten">menu inclusif en entreprise</a>.</p>

      <h2>Avis et facturation : vérifiez par vous-même</h2>
      <p>Lisez les avis sur une plateforme publique plutôt que les témoignages choisis par le traiteur. Pour une entreprise, vérifiez enfin que la facture mentionne la TVA et que le devis détaille chaque ligne.</p>

      <h2>Ce que L'Écrin Traiteur ne fait pas</h2>
      <p>Un comparatif honnête dit aussi les limites. L'heure limite est la veille 14 h : une commande pour le jour même n'est pas garantie. Au-delà de Paris et des communes proches, la livraison se chiffre sur devis. La livraison ne comprend ni l'installation ni la reprise du matériel. Et nous ne revendiquons aucune certification halal. Si l'un de ces points est décisif pour vous, posez la même question aux autres traiteurs.</p>

      <h2>Pour comparer plus loin</h2>
      <p>Notre guide <a href="/journal/choisir-traiteur-entreprise-paris">comment choisir un traiteur d'entreprise à Paris</a> détaille la démarche, le <a href="/journal/comparatif-traiteur-entreprise-paris">comparatif des traiteurs d'entreprise à Paris</a> met les formats côte à côte, et le guide du <a href="/journal/budget-traiteur-entreprise-paris">budget traiteur d'entreprise</a> aide à fixer une enveloppe. Nos menus sont sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Comparer avec un devis</h2>
      <p>Le moyen le plus simple de juger : demander le même devis à deux ou trois traiteurs, avec la même date, le même effectif et les mêmes régimes. Le nôtre arrive sous 24 h. <a href="/devis">Demander un devis à L'Écrin Traiteur</a>.</p>

      <h2>Questions fréquentes</h2>
${faqHtml(FAQ_CRITERES)}
    `,
  faq: FAQ_CRITERES,
}

export const LOT_C_ARTICLES = [SEMINAIRE, VEGETARIEN, EQUIPE20, REGIMES, CRITERES]
