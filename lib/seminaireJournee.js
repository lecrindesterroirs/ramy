/*
  « Traiteur pour séminaire : la journée complète », bloc de la page
  /occasions/seminaire-entreprise (FR et /en). Créé le 25/10/2026 (constat GEO :
  aux questions « quel traiteur pour une journée de séminaire complète à Paris »
  et « quel budget par personne pour un séminaire », les assistants IA ne
  citaient pas L'Écrin Traiteur).

  CÔTÉ SERVEUR uniquement (rendu par components/occasions/SeminaireJournee.js).

  Aucun montant écrit à la main :
    - petit-déjeuner Classique, pause, minimum, reprise du matériel, maître d'hôtel : lib/prixEntree.js
    - livraison, formules cocktail, boissons du cocktail, recette du petit-déjeuner : lib/calculsPrix.js
    - plateaux repas : app/creations/plateaux-repas/data.js
    - lunch box : app/creations/lunch-box/data.js
    - buffet à partager : app/creations/a-partager/data.js
  Ce qui n'a pas de prix dans le code est écrit « sur devis » (petit-déjeuner
  complet, mise en place, porcelaine, livraison hors Paris et communes proches).

  Ratios : ceux des guides du Journal et du calculateur (lib/calculateurQuantites.js).
  Règles : petit-déjeuner « à partir de 8 € HT » (Classique), jamais de total du
  petit-déjeuner complet ; la marque dans chaque réponse de la FAQ.
*/
import { LIV, pdj, FORMULES, cocktail } from './calculsPrix'
import { PDJ_DES, PAUSE_DES, LIV_RECUP_PROCHE, RECUP, MAITRE_HOTEL, MAITRE_HOTEL_HEURES, euroFr, euroEn } from './prixEntree'
import { PRODUITS as PLATEAUX, prixMenu } from '../app/creations/plateaux-repas/data'
import { BOXES } from '../app/creations/lunch-box/data'
import { MENUS as A_PARTAGER } from '../app/creations/a-partager/data'
import { reecrireLiensEn } from './i18n'
import { enSlugs } from './en/journal'

const num = (s) => { const m = String(s).match(/\d+(?:[.,]\d+)?/); return m ? Number(m[0].replace(',', '.')) : NaN } // « 37,50 € / pers. » → 37.5
const r2 = (x) => Math.round(x * 100) / 100
const min = (a) => Math.min(...a)
const max = (a) => Math.max(...a)

/* ───────────── Prix du catalogue ───────────── */
const PX_PLATEAUX = PLATEAUX.map(p => num(prixMenu(p))).filter(Boolean)
const PX_BOX = BOXES.map(b => num(b.prix)).filter(Boolean)
const PX_PARTAGER = A_PARTAGER.map(m => num(m.prix)).filter(Boolean)
const prixPlateau = (cat) => num(prixMenu(PLATEAUX.find(p => p.categorie === cat)))

export const PRIX = {
  pdj: PDJ_DES,
  pause: PAUSE_DES,
  plateauMin: min(PX_PLATEAUX), plateauMax: max(PX_PLATEAUX),
  veg: prixPlateau('vegetarien'), poulet: prixPlateau('poulet'), poisson: prixPlateau('poisson'),
  boxMin: min(PX_BOX), boxMax: max(PX_BOX),
  partagerMin: min(PX_PARTAGER), partagerMax: max(PX_PARTAGER),
  inv: FORMULES.invitation, rec: FORMULES.reception, cel: FORMULES.celebration,
  liv: LIV, livRecup: LIV_RECUP_PROCHE, recup: RECUP, mh: MAITRE_HOTEL, mhHeures: MAITRE_HOTEL_HEURES,
}

// Garde-fou : un prix du catalogue illisible casse le build plutôt que d'afficher « NaN € » ou « Infinity € ».
Object.entries(PRIX).forEach(([k, v]) => {
  if (typeof v === 'number' && !(Number.isFinite(v) && v > 0)) throw new Error(`seminaireJournee : prix ${k} illisible (${v})`)
})

/* ───────────── Journées types (produits par personne, prix d'entrée) ───────────── */
// Accueil Classique + pause du matin + déjeuner + pause de l'après-midi.
const base = PRIX.pdj + 2 * PRIX.pause
export const JOURNEES = {
  lunchbox: r2(base + PRIX.boxMin),
  plateaux: r2(base + PRIX.plateauMin),
  partager: r2(base + PRIX.partagerMin),
  cocktail: r2(base + PRIX.plateauMin + PRIX.inv.prix), // + cocktail de clôture L'Invitation, boissons en plus
}
const PASSAGES = 2 // un passage le matin (accueil + pause du matin), un avant midi (déjeuner + pause de l'après-midi)
export const EFFECTIFS = [20, 50, 100]

/* Totaux HT livrés : deux passages ; le cocktail ajoute un troisième passage et ses jus et eaux (cocktail(n).sans). */
export function exemple(n) {
  const livJour = PASSAGES * LIV
  const ck = cocktail(n, FORMULES.invitation)
  const lunchbox = r2(n * JOURNEES.lunchbox + livJour)
  const plateaux = r2(n * JOURNEES.plateaux + livJour)
  const avecCocktail = r2(plateaux + ck.sans)
  return { n, lunchbox, plateaux, avecCocktail, pp: { lunchbox: r2(lunchbox / n), plateaux: r2(plateaux / n), avecCocktail: r2(avecCocktail / n) } }
}

/* Quantités livrées pour n personnes (mêmes ratios que le calculateur). */
export function quantites(n) {
  const p = pdj(n)
  const ck = cocktail(n, FORMULES.invitation)
  return {
    n,
    vienn: p.vienn, plateaux30: p.plateaux, brochettes: p.brochettes, jusL: p.litres, thermos: p.thermos,
    pauseMin: Math.ceil(n * 1.5), pauseMax: n * 2, pauseJus: Math.ceil(n / 5),
    repas: n, repasVege: Math.ceil(n / 3),
    pieces: n * FORMULES.invitation.pieces, ckJus: ck.b.jus, ckEau: ck.b.eau,
    mhMin: n >= 40 ? Math.ceil(n / 40) : 0, mhMax: n >= 40 ? Math.ceil(n / 20) : 0,
  }
}

/* ───────────── Formats ───────────── */
const fmt = (lang) => {
  const en = lang === 'en'
  const e = (x) => (en ? euroEn(x) : euroFr(x))
  return {
    en,
    e,
    ht: (x) => (en ? `${euroEn(x)} excl. VAT` : `${euroFr(x)} HT`),
    n: (x) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, en ? ',' : ' '),
    fourchette: (a, b) => (a === b ? e(a) : en ? `${e(a)} to ${e(b)}` : `${e(a)} à ${e(b)}`),
  }
}

/* ───────────── Contenu ───────────── */
export function journeeSeminaire(en = false) {
  const lang = en ? 'en' : 'fr'
  const F = fmt(lang)
  const { e, ht, fourchette } = F
  const P = PRIX
  const ex = EFFECTIFS.map(exemple)
  const ex50 = ex.find(x => x.n === 50)
  const qs = EFFECTIFS.map(quantites)
  const liens = (html) => (en ? reecrireLiensEn(html, enSlugs()) : html)

  if (!en) {
    const bref = `Chez L'Écrin Traiteur, une journée de séminaire complète (accueil café, pause du matin, déjeuner en plateaux repas, pause de l'après-midi) coûte à partir de ${ht(JOURNEES.plateaux)} de produits par personne, livrée en deux passages de ${ht(LIV)} à Paris et dans les communes proches. Pour 50 personnes, comptez ${ht(ex50.plateaux)} livraisons comprises. Commande jusqu'à la veille 10h (48 h à partir de 50 personnes), livraison dès 6h30, devis sous 24 h.`

    const deroule = `
      <h2 class="ev-h2">Le déroulé d'une journée de séminaire, moment par moment</h2>
      <p>L'Écrin Traiteur livre la journée en deux passages : le premier dès 6h30 pour l'accueil et la pause du matin, le second avant midi pour le déjeuner et la pause de l'après-midi. Un troisième passage s'ajoute si la journée se termine par un cocktail. Voici ce que nous livrons à chaque moment, et en quelle quantité.</p>
      <h3 class="ev-h3">8h30 · Accueil café</h3>
      <p>Petit-déjeuner Classique : viennoiseries pur beurre, fruits frais, jus et café, <strong>à partir de ${ht(P.pdj)} par personne</strong>. Quantités : 2 mini-viennoiseries par personne (3 jusqu'à 10 personnes), un verre de jus de 20 cl, un thermos d'1 litre de café ou de thé pour 6 personnes (4 de café pour 1 de thé), une brochette de fruits au-delà de 15 personnes. Le petit-déjeuner complet, avec madeleines ou cakes, se chiffre sur devis. Voir nos <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners</a>.</p>
      <h3 class="ev-h3">10h30 · Pause du matin</h3>
      <p>Elle sert surtout à relancer le café. Pause gourmande <strong>dès ${ht(P.pause)} par personne</strong> : 1,5 à 2 pièces sucrées légères par personne, un thermos pour 6, 1 litre de jus pour 5. Ce n'est pas un second petit-déjeuner.</p>
      <h3 class="ev-h3">12h30 · Déjeuner</h3>
      <p>Trois formats, selon que les travaux continuent ou que vous voulez faire circuler les gens :</p>
      <ul>
        <li><strong>Plateaux repas</strong>, ${fourchette(P.plateauMin, P.plateauMax)} HT : entrée, plat, dessert et pain, ${e(P.veg)} en végétarien, ${e(P.poulet)} au poulet, ${e(P.poisson)} au saumon. Chacun mange à sa place. Voir nos <a href="/creations/plateaux-repas">plateaux repas</a>.</li>
        <li><strong>Lunch box</strong>, ${fourchette(P.boxMin, P.boxMax)} HT : sandwich, entrée et dessert, pour un déjeuner rapide. Voir nos <a href="/creations/lunch-box">lunch box</a>.</li>
        <li><strong>Buffet à partager</strong>, ${fourchette(P.partagerMin, P.partagerMax)} HT par personne : salades, planches et douceurs posées au centre de la table. Voir nos <a href="/creations/a-partager">menus à partager</a>.</li>
      </ul>
      <p>Quantités : un repas par personne présente, 10 % de plus si la liste n'est pas nominative ; sans information sur les régimes, un tiers de végétarien.</p>
      <h3 class="ev-h3">15h30 · Pause de l'après-midi</h3>
      <p>C'est le vrai creux de la journée. Madeleines, cookies, cakes et gâteaux à partager tiennent mieux que le salé : <strong>dès ${ht(P.pause)} par personne</strong>, 1,5 à 2 pièces sucrées, café et jus. Elle arrive avec le déjeuner ; pour l'avoir à l'heure exacte, comptez une livraison de plus (${ht(LIV)}). Voir nos <a href="/creations/pauses-gourmandes">pauses gourmandes</a>.</p>
      <h3 class="ev-h3">17h30 · Cocktail de clôture (en option)</h3>
      <p>8 pièces salées et sucrées par personne pour 1h30 à 2h : formule ${P.inv.nom} à <strong>${ht(P.inv.prix)}</strong>. ${P.rec.nom} (${P.rec.pieces} pièces) à ${ht(P.rec.prix)} et ${P.cel.nom} (${P.cel.pieces} pièces) à ${ht(P.cel.prix)} si la soirée remplace le dîner. Boissons en plus : 1 litre de jus pour 4 invités, une bouteille d'eau de 75 cl pour 5. Comptez un point de buffet pour 25 à 30 invités et un maître d'hôtel pour 20 à 40 invités debout. Voir nos <a href="/creations/cocktails">cocktails d'entreprise</a>.</p>`

    const budget = `
      <h2 class="ev-h2">Budget par personne pour un séminaire à Paris</h2>
      <p>Prix HT par personne de la carte de L'Écrin Traiteur, au 25 octobre 2026. La livraison s'ajoute par passage.</p>
      <div class="ev-table-wrap"><table class="ev-table">
        <thead><tr><th>Moment</th><th>Formule</th><th>Prix HT par personne</th></tr></thead>
        <tbody>
          <tr><td><strong>Accueil café</strong></td><td>Petit-déjeuner Classique</td><td class="ev-nowrap">à partir de ${e(P.pdj)}</td></tr>
          <tr><td><strong>Accueil café</strong></td><td>Petit-déjeuner complet</td><td class="ev-nowrap">sur devis</td></tr>
          <tr><td><strong>Pause du matin</strong></td><td>Pause gourmande</td><td class="ev-nowrap">dès ${e(P.pause)}</td></tr>
          <tr><td><strong>Déjeuner</strong></td><td>Lunch box</td><td class="ev-nowrap">${fourchette(P.boxMin, P.boxMax)}</td></tr>
          <tr><td><strong>Déjeuner</strong></td><td>Plateau repas</td><td class="ev-nowrap">${fourchette(P.plateauMin, P.plateauMax)}</td></tr>
          <tr><td><strong>Déjeuner</strong></td><td>Buffet à partager</td><td class="ev-nowrap">${fourchette(P.partagerMin, P.partagerMax)}</td></tr>
          <tr><td><strong>Pause de l'après-midi</strong></td><td>Pause gourmande</td><td class="ev-nowrap">dès ${e(P.pause)}</td></tr>
          <tr><td><strong>Cocktail de clôture</strong></td><td>${P.inv.nom}, ${P.inv.pieces} pièces, boissons en plus</td><td class="ev-nowrap">${e(P.inv.prix)}</td></tr>
          <tr><td><strong>Cocktail de clôture</strong></td><td>${P.rec.nom}, ${P.rec.pieces} pièces, boissons en plus</td><td class="ev-nowrap">${e(P.rec.prix)}</td></tr>
          <tr><td><strong>Cocktail de clôture</strong></td><td>${P.cel.nom}, ${P.cel.pieces} pièces, boissons en plus</td><td class="ev-nowrap">${e(P.cel.prix)}</td></tr>
        </tbody>
      </table></div>
      <h3 class="ev-h3">Livraison et service</h3>
      <div class="ev-table-wrap"><table class="ev-table">
        <thead><tr><th>Poste</th><th>Prix HT</th></tr></thead>
        <tbody>
          <tr><td>Livraison à Paris et dans les communes proches, par passage</td><td class="ev-nowrap">${e(LIV)}</td></tr>
          <tr><td>Livraison et reprise de la vaisselle réutilisable ou du matériel, en une ligne (Paris, 92, 94)</td><td class="ev-nowrap">${e(P.livRecup)}</td></tr>
          <tr><td>Livraison hors Paris et communes proches</td><td class="ev-nowrap">sur devis (reprise : + ${e(P.recup)})</td></tr>
          <tr><td>Maître d'hôtel, service de ${P.mhHeures} heures</td><td class="ev-nowrap">${e(P.mh)}</td></tr>
          <tr><td>Mise en place, porcelaine, nappage</td><td class="ev-nowrap">sur devis</td></tr>
        </tbody>
      </table></div>
      <h3 class="ev-h3">Trois journées types</h3>
      <div class="ev-table-wrap"><table class="ev-table">
        <thead><tr><th>Journée</th><th>Ce qui est compris</th><th>Produits HT par personne</th></tr></thead>
        <tbody>
          <tr><td><strong>Journée lunch box</strong></td><td>Accueil Classique, deux pauses, lunch box</td><td class="ev-nowrap">à partir de ${e(JOURNEES.lunchbox)}</td></tr>
          <tr><td><strong>Journée plateaux repas</strong></td><td>Accueil Classique, deux pauses, plateau repas</td><td class="ev-nowrap">à partir de ${e(JOURNEES.plateaux)}</td></tr>
          <tr><td><strong>Journée buffet à partager</strong></td><td>Accueil Classique, deux pauses, buffet à partager</td><td class="ev-nowrap">à partir de ${e(JOURNEES.partager)}</td></tr>
          <tr><td><strong>Journée plateaux repas et cocktail</strong></td><td>La journée plateaux repas, plus un cocktail de clôture ${P.inv.nom} (${P.inv.pieces} pièces), boissons en plus</td><td class="ev-nowrap">à partir de ${e(JOURNEES.cocktail)}</td></tr>
        </tbody>
      </table></div>
      <p class="ev-note">« À partir de » : petit-déjeuner Classique, lunch box et plateau repas au prix d'entrée. Le prix est le même en végétarien, vegan ou sans gluten, et le salé est halal sans supplément.</p>`

    const exemples = `
      <h2 class="ev-h2">Exemples chiffrés pour 20, 50 et 100 personnes</h2>
      <div class="ev-table-wrap"><table class="ev-table">
        <thead><tr><th>Effectif</th><th>Journée lunch box</th><th>Journée plateaux repas</th><th>Plateaux repas et cocktail de clôture</th></tr></thead>
        <tbody>
${ex.map(x => `          <tr><td><strong>${x.n} personnes</strong></td><td class="ev-nowrap">${e(x.lunchbox)}<br>soit ${e(x.pp.lunchbox)} / pers.</td><td class="ev-nowrap">${e(x.plateaux)}<br>soit ${e(x.pp.plateaux)} / pers.</td><td class="ev-nowrap">${e(x.avecCocktail)}<br>soit ${e(x.pp.avecCocktail)} / pers.</td></tr>`).join('\n')}
        </tbody>
      </table></div>
      <p class="ev-note">Totaux HT à partir de, livraisons comprises : deux passages de ${e(LIV)} à Paris et dans les communes proches, un troisième avec le cocktail, dont les jus et l'eau sont comptés. Exemple pour 50 personnes, journée plateaux repas : 50 × ${e(JOURNEES.plateaux)} + 2 × ${e(LIV)} = ${e(ex50.plateaux)}.</p>
      <h3 class="ev-h3">Ce que nous livrons</h3>
      <div class="ev-table-wrap"><table class="ev-table">
        <thead><tr><th>Moment</th>${qs.map(q => `<th>${q.n} personnes</th>`).join('')}</tr></thead>
        <tbody>
          <tr><td><strong>Accueil café</strong></td>${qs.map(q => `<td>${F.n(q.vienn)} mini-viennoiseries, ${q.jusL} L de jus, ${q.thermos} thermos${q.brochettes ? `, ${F.n(q.brochettes)} brochettes de fruits` : ''}</td>`).join('')}</tr>
          <tr><td><strong>Chaque pause</strong></td>${qs.map(q => `<td>${F.n(q.pauseMin)} à ${F.n(q.pauseMax)} pièces sucrées, ${q.thermos} thermos, ${q.pauseJus} L de jus</td>`).join('')}</tr>
          <tr><td><strong>Déjeuner</strong></td>${qs.map(q => `<td>${F.n(q.repas)} repas, dont ${F.n(q.repasVege)} végétariens</td>`).join('')}</tr>
          <tr><td><strong>Cocktail de clôture</strong></td>${qs.map(q => `<td>${F.n(q.pieces)} pièces, ${q.ckJus} L de jus, ${q.ckEau} bouteilles d'eau${q.mhMin ? `, ${q.mhMin} à ${q.mhMax} maîtres d'hôtel conseillés` : ''}</td>`).join('')}</tr>
        </tbody>
      </table></div>
      <p>Pour un autre effectif, notre <a href="/calculateur-quantites">calculateur de quantités</a> fait le calcul ; tous les prix sont sur la page <a href="/tarifs">tarifs</a>, et le détail poste par poste dans le guide du <a href="/journal/budget-seminaire-entreprise-par-personne-paris">budget d'un séminaire par personne</a>.</p>`

    const logistique = `
      <h2 class="ev-h2">Logistique et régimes</h2>
      <ul>
        <li><strong>Livraison dès 6h30</strong>, par l'équipe de L'Écrin Traiteur, à l'heure demandée, à Paris et en Île-de-France : hôtel, centre de conférence, locaux d'un client.</li>
        <li><strong>Commande</strong> jusqu'à la veille 10h, 48 h avant à partir de 50 personnes. Devis sous 24 h, une facture d'entreprise avec TVA pour toute la journée.</li>
        <li><strong>Mise en place</strong> sur demande. Vaisselle réutilisable : livraison et reprise ${ht(P.livRecup)} en une ligne à Paris, dans le 92 et le 94 ; ailleurs, prix de la zone plus ${ht(P.recup)}.</li>
        <li><strong>Maître d'hôtel</strong> sur demande : ${ht(P.mh)} pour ${P.mhHeures} heures de service, un pour 20 à 40 invités debout.</li>
        <li><strong>Régimes</strong> : tout le salé est halal et sans porc, sans alcool et sans supplément (voir notre page <a href="/traiteur-halal">traiteur halal</a>). Végétarien, vegan et sans gluten sur demande, avec le nombre de personnes concernées au devis.</li>
        <li><strong>Allergènes</strong> : signalez-les au devis ; la composition de chaque produit figure sur sa fiche.</li>
      </ul>`

    return { bref, html: deroule + budget + exemples + logistique, faq: faqFr(F, ex50) }
  }

  /* ───────── English ───────── */
  const bref = `At L'Écrin Traiteur, a full offsite day (welcome coffee, morning break, lunch trays, afternoon break) costs from ${ht(JOURNEES.plateaux)} of food per person, delivered in two drops at ${ht(LIV)} each in Paris and nearby towns. For 50 people, allow ${ht(ex50.plateaux)} with delivery. Order until 10 am the day before (48 hours for 50 people or more), delivered from 6:30 am, quote within 24 hours.`

  const deroule = `
      <h2 class="ev-h2">How an offsite day runs, moment by moment</h2>
      <p>L'Écrin Traiteur delivers the day in two drops: the first from 6:30 am for the welcome and the morning break, the second before noon for lunch and the afternoon break. A third drop is added if the day ends with a cocktail reception. Here is what we deliver at each moment, and how much.</p>
      <h3 class="ev-h3">8:30 am · Welcome coffee</h3>
      <p>Classique breakfast: butter pastries, fresh fruit, juice and coffee, <strong>from ${ht(P.pdj)} per person</strong>. Quantities: 2 mini pastries per person (3 up to 10 people), one 20 cl glass of juice, one 1-litre flask of coffee or tea per 6 people (4 coffee for 1 tea), a fruit skewer above 15 people. The full breakfast, with madeleines or cakes, is priced on quote. See our <a href="/creations/petits-dejeuners-et-pauses">breakfasts</a>.</p>
      <h3 class="ev-h3">10:30 am · Morning break</h3>
      <p>Mostly it exists to top up the coffee. Break <strong>from ${ht(P.pause)} per person</strong>: 1.5 to 2 light sweet bites per person, one flask per 6, 1 litre of juice per 5. It is not a second breakfast.</p>
      <h3 class="ev-h3">12:30 pm · Lunch</h3>
      <p>Three formats, depending on whether the work carries on or you want people to move around:</p>
      <ul>
        <li><strong>Lunch trays</strong>, ${fourchette(P.plateauMin, P.plateauMax)} excl. VAT: starter, main, dessert and bread, ${e(P.veg)} vegetarian, ${e(P.poulet)} chicken, ${e(P.poisson)} salmon. Everyone eats at their seat. See our <a href="/creations/plateaux-repas">lunch trays</a>.</li>
        <li><strong>Lunch boxes</strong>, ${fourchette(P.boxMin, P.boxMax)} excl. VAT: sandwich, starter and dessert, for a quick lunch. See our <a href="/creations/lunch-box">lunch boxes</a>.</li>
        <li><strong>Sharing buffet</strong>, ${fourchette(P.partagerMin, P.partagerMax)} excl. VAT per person: salads, boards and sweets set in the middle of the table. See our <a href="/creations/a-partager">sharing menus</a>.</li>
      </ul>
      <p>Quantities: one meal per person present, 10% more if the list is not confirmed by name; without dietary information, one third vegetarian.</p>
      <h3 class="ev-h3">3:30 pm · Afternoon break</h3>
      <p>This is the real dip in the day. Madeleines, cookies, loaf cakes and large cakes to share hold up better than anything savoury: <strong>from ${ht(P.pause)} per person</strong>, 1.5 to 2 sweet bites, coffee and juice. It arrives with lunch; to have it at the exact time, add one more delivery (${ht(LIV)}). See our <a href="/creations/pauses-gourmandes">afternoon breaks</a>.</p>
      <h3 class="ev-h3">5:30 pm · Closing reception (optional)</h3>
      <p>8 savoury and sweet canapés per person for 1.5 to 2 hours: ${P.inv.nom} at <strong>${ht(P.inv.prix)}</strong>. ${P.rec.nom} (${P.rec.pieces} canapés) at ${ht(P.rec.prix)} and ${P.cel.nom} (${P.cel.pieces} canapés) at ${ht(P.cel.prix)} if the evening replaces dinner. Drinks extra: 1 litre of juice per 4 guests, one 75 cl bottle of water per 5. Allow one buffet point per 25 to 30 guests and one waiter per 20 to 40 standing guests. See our <a href="/creations/cocktails">corporate cocktail receptions</a>.</p>`

  const budget = `
      <h2 class="ev-h2">Budget per person for an offsite in Paris</h2>
      <p>Prices per person excluding VAT from L'Écrin Traiteur's menu, as of 25 October 2026. Delivery is added per drop.</p>
      <div class="ev-table-wrap"><table class="ev-table">
        <thead><tr><th>Moment</th><th>Option</th><th>Price per person excl. VAT</th></tr></thead>
        <tbody>
          <tr><td><strong>Welcome coffee</strong></td><td>Classique breakfast</td><td class="ev-nowrap">from ${e(P.pdj)}</td></tr>
          <tr><td><strong>Welcome coffee</strong></td><td>Full breakfast</td><td class="ev-nowrap">on quote</td></tr>
          <tr><td><strong>Morning break</strong></td><td>Sweet break</td><td class="ev-nowrap">from ${e(P.pause)}</td></tr>
          <tr><td><strong>Lunch</strong></td><td>Lunch box</td><td class="ev-nowrap">${fourchette(P.boxMin, P.boxMax)}</td></tr>
          <tr><td><strong>Lunch</strong></td><td>Lunch tray</td><td class="ev-nowrap">${fourchette(P.plateauMin, P.plateauMax)}</td></tr>
          <tr><td><strong>Lunch</strong></td><td>Sharing buffet</td><td class="ev-nowrap">${fourchette(P.partagerMin, P.partagerMax)}</td></tr>
          <tr><td><strong>Afternoon break</strong></td><td>Sweet break</td><td class="ev-nowrap">from ${e(P.pause)}</td></tr>
          <tr><td><strong>Closing reception</strong></td><td>${P.inv.nom}, ${P.inv.pieces} canapés, drinks extra</td><td class="ev-nowrap">${e(P.inv.prix)}</td></tr>
          <tr><td><strong>Closing reception</strong></td><td>${P.rec.nom}, ${P.rec.pieces} canapés, drinks extra</td><td class="ev-nowrap">${e(P.rec.prix)}</td></tr>
          <tr><td><strong>Closing reception</strong></td><td>${P.cel.nom}, ${P.cel.pieces} canapés, drinks extra</td><td class="ev-nowrap">${e(P.cel.prix)}</td></tr>
        </tbody>
      </table></div>
      <h3 class="ev-h3">Delivery and service</h3>
      <div class="ev-table-wrap"><table class="ev-table">
        <thead><tr><th>Item</th><th>Price excl. VAT</th></tr></thead>
        <tbody>
          <tr><td>Delivery in Paris and nearby towns, per drop</td><td class="ev-nowrap">${e(LIV)}</td></tr>
          <tr><td>Delivery and collection of reusable tableware or equipment, one line (Paris, 92, 94)</td><td class="ev-nowrap">${e(P.livRecup)}</td></tr>
          <tr><td>Delivery outside Paris and nearby towns</td><td class="ev-nowrap">on quote (collection: + ${e(P.recup)})</td></tr>
          <tr><td>Waiter, ${P.mhHeures}-hour service</td><td class="ev-nowrap">${e(P.mh)}</td></tr>
          <tr><td>Setting up, china, table linen</td><td class="ev-nowrap">on quote</td></tr>
        </tbody>
      </table></div>
      <h3 class="ev-h3">Three typical days</h3>
      <div class="ev-table-wrap"><table class="ev-table">
        <thead><tr><th>Day</th><th>What is included</th><th>Food per person excl. VAT</th></tr></thead>
        <tbody>
          <tr><td><strong>Lunch box day</strong></td><td>Classique welcome, two breaks, lunch box</td><td class="ev-nowrap">from ${e(JOURNEES.lunchbox)}</td></tr>
          <tr><td><strong>Lunch tray day</strong></td><td>Classique welcome, two breaks, lunch tray</td><td class="ev-nowrap">from ${e(JOURNEES.plateaux)}</td></tr>
          <tr><td><strong>Sharing buffet day</strong></td><td>Classique welcome, two breaks, sharing buffet</td><td class="ev-nowrap">from ${e(JOURNEES.partager)}</td></tr>
          <tr><td><strong>Lunch tray day and reception</strong></td><td>The lunch tray day, plus a ${P.inv.nom} closing reception (${P.inv.pieces} canapés), drinks extra</td><td class="ev-nowrap">from ${e(JOURNEES.cocktail)}</td></tr>
        </tbody>
      </table></div>
      <p class="ev-note">"From": Classique breakfast, lunch box and lunch tray at their entry price. The price is the same for vegetarian, vegan or gluten-free, and savoury food is halal at no extra cost.</p>`

  const exemples = `
      <h2 class="ev-h2">Worked examples for 20, 50 and 100 people</h2>
      <div class="ev-table-wrap"><table class="ev-table">
        <thead><tr><th>Headcount</th><th>Lunch box day</th><th>Lunch tray day</th><th>Lunch trays and closing reception</th></tr></thead>
        <tbody>
${ex.map(x => `          <tr><td><strong>${x.n} people</strong></td><td class="ev-nowrap">${e(x.lunchbox)}<br>${e(x.pp.lunchbox)} per person</td><td class="ev-nowrap">${e(x.plateaux)}<br>${e(x.pp.plateaux)} per person</td><td class="ev-nowrap">${e(x.avecCocktail)}<br>${e(x.pp.avecCocktail)} per person</td></tr>`).join('\n')}
        </tbody>
      </table></div>
      <p class="ev-note">Totals from, excluding VAT, delivery included: two drops at ${e(LIV)} in Paris and nearby towns, a third with the reception, whose juice and water are counted. Example for 50 people, lunch tray day: 50 × ${e(JOURNEES.plateaux)} + 2 × ${e(LIV)} = ${e(ex50.plateaux)}.</p>
      <h3 class="ev-h3">What we deliver</h3>
      <div class="ev-table-wrap"><table class="ev-table">
        <thead><tr><th>Moment</th>${qs.map(q => `<th>${q.n} people</th>`).join('')}</tr></thead>
        <tbody>
          <tr><td><strong>Welcome coffee</strong></td>${qs.map(q => `<td>${F.n(q.vienn)} mini pastries, ${q.jusL} L of juice, ${q.thermos} flasks${q.brochettes ? `, ${F.n(q.brochettes)} fruit skewers` : ''}</td>`).join('')}</tr>
          <tr><td><strong>Each break</strong></td>${qs.map(q => `<td>${F.n(q.pauseMin)} to ${F.n(q.pauseMax)} sweet bites, ${q.thermos} flasks, ${q.pauseJus} L of juice</td>`).join('')}</tr>
          <tr><td><strong>Lunch</strong></td>${qs.map(q => `<td>${F.n(q.repas)} meals, ${F.n(q.repasVege)} of them vegetarian</td>`).join('')}</tr>
          <tr><td><strong>Closing reception</strong></td>${qs.map(q => `<td>${F.n(q.pieces)} canapés, ${q.ckJus} L of juice, ${q.ckEau} bottles of water${q.mhMin ? `, ${q.mhMin} to ${q.mhMax} waiters advised` : ''}</td>`).join('')}</tr>
        </tbody>
      </table></div>
      <p>For another headcount, our <a href="/calculateur-quantites">quantity calculator</a> does the maths; every price is on the <a href="/tarifs">pricing</a> page, and the item-by-item detail is in our guide to the <a href="/journal/budget-seminaire-entreprise-par-personne-paris">offsite budget per person</a>.</p>`

  const logistique = `
      <h2 class="ev-h2">Logistics and dietary needs</h2>
      <ul>
        <li><strong>Delivered from 6:30 am</strong> by L'Écrin Traiteur's own team, at the time you set, across Paris and Île-de-France: hotel, conference centre, a client's offices.</li>
        <li><strong>Ordering</strong>: until 10 am the day before, 48 hours ahead for 50 people or more. Quote within 24 hours, one company invoice with VAT for the whole day.</li>
        <li><strong>Setting up</strong> on request. Reusable tableware: delivery and collection ${ht(P.livRecup)} on one line in Paris, the 92 and the 94; elsewhere, the zone price plus ${ht(P.recup)}.</li>
        <li><strong>Waiters</strong> on request: ${ht(P.mh)} for ${P.mhHeures} hours of service, one per 20 to 40 standing guests.</li>
        <li><strong>Dietary needs</strong>: everything savoury is halal and pork-free, alcohol-free and at no extra cost (see our <a href="/traiteur-halal">halal catering</a> page). Vegetarian, vegan and gluten-free on request, with the number of people concerned on the quote.</li>
        <li><strong>Allergens</strong>: tell us on the quote; each product's ingredients are listed on its page.</li>
      </ul>`

  return { bref, html: liens(deroule + budget + exemples + logistique), faq: faqEn(F, ex50) }
}

/* ───────────── FAQ : six questions, la marque dans chaque réponse ───────────── */
function faqFr({ ht, e }, ex50) {
  const P = PRIX
  return [
    { q: 'Quel traiteur pour une journée de séminaire complète à Paris (petit-déjeuner, déjeuner, pauses) ?', a: `L'Écrin Traiteur livre toute la journée sur une seule commande : accueil café dès 6h30, pause du matin, déjeuner en plateaux repas, lunch box ou buffet à partager, pause de l'après-midi et, en option, cocktail de clôture. Un devis sous 24 h et une facture d'entreprise pour l'ensemble, à Paris et en Île-de-France, de 20 à 500 participants.` },
    { q: "Quel budget par personne pour un séminaire d'entreprise à Paris ?", a: `Chez L'Écrin Traiteur, pour un accueil café, deux pauses et le déjeuner, comptez à partir de ${ht(JOURNEES.lunchbox)} de produits par personne avec une lunch box, ${ht(JOURNEES.plateaux)} avec un plateau repas et ${ht(JOURNEES.partager)} avec un buffet à partager. Un cocktail de clôture ajoute ${ht(P.inv.prix)} par personne (${P.inv.pieces} pièces), boissons en plus. La livraison coûte ${ht(LIV)} par passage à Paris et dans les communes proches.` },
    { q: 'Combien coûte la restauration d\'un séminaire pour 50 personnes ?', a: `Chez L'Écrin Traiteur, la journée avec plateaux repas revient à partir de ${ht(ex50.plateaux)} pour 50 personnes, deux livraisons comprises, soit ${e(ex50.pp.plateaux)} par personne. Avec une lunch box : ${ht(ex50.lunchbox)}. Avec un cocktail de clôture ${P.inv.nom}, jus et eau compris : ${ht(ex50.avecCocktail)}.` },
    { q: 'Combien prévoir par personne sur une journée de séminaire ?', a: `L'Écrin Traiteur compte 2 mini-viennoiseries par personne à l'accueil, un verre de jus de 20 cl et un thermos d'1 litre de café pour 6 ; 1,5 à 2 pièces sucrées par pause ; un repas par personne présente au déjeuner, 10 % de plus si la liste n'est pas nominative ; ${P.inv.pieces} pièces par personne pour un cocktail de clôture d'1h30 à 2h. Le calculateur de quantités du site fait le calcul pour votre effectif.` },
    { q: 'Comment se passent les livraisons et le service sur une journée ?', a: `L'Écrin Traiteur livre dès 6h30 avec sa propre équipe, en deux passages : l'accueil et la pause du matin, puis le déjeuner et la pause de l'après-midi. La mise en place se fait sur demande ; livraison et reprise de la vaisselle réutilisable coûtent ${ht(P.livRecup)} à Paris, dans le 92 et le 94 ; un maître d'hôtel ${ht(P.mh)} pour ${P.mhHeures} heures. Commande jusqu'à la veille 10h, 48 h avant à partir de 50 personnes.` },
    { q: 'Les régimes alimentaires et les allergies sont-ils pris en compte ?', a: `Oui. Chez L'Écrin Traiteur, tout le salé est halal et sans porc, sans alcool et sans supplément. Les versions végétariennes, vegan et sans gluten se demandent au devis avec le nombre de personnes concernées ; signalez aussi les allergies, la composition de chaque produit figure sur sa fiche.` },
  ]
}

function faqEn({ ht, e }, ex50) {
  const P = PRIX
  return [
    { q: 'Which caterer for a full offsite day in Paris (breakfast, lunch, breaks)?', a: `L'Écrin Traiteur delivers the whole day in a single order: welcome coffee from 6:30 am, morning break, lunch as trays, lunch boxes or a sharing buffet, afternoon break and, optionally, a closing reception. One quote within 24 hours and one company invoice for everything, in Paris and Île-de-France, for 20 to 500 people.` },
    { q: 'What budget per person for a company offsite in Paris?', a: `At L'Écrin Traiteur, for a welcome coffee, two breaks and lunch, allow from ${ht(JOURNEES.lunchbox)} of food per person with a lunch box, ${ht(JOURNEES.plateaux)} with a lunch tray and ${ht(JOURNEES.partager)} with a sharing buffet. A closing reception adds ${ht(P.inv.prix)} per person (${P.inv.pieces} canapés), drinks extra. Delivery costs ${ht(LIV)} per drop in Paris and nearby towns.` },
    { q: 'How much does catering for a 50-person offsite cost?', a: `At L'Écrin Traiteur, the lunch tray day comes to ${ht(ex50.plateaux)} for 50 people, two deliveries included, which is ${e(ex50.pp.plateaux)} per person. With a lunch box: ${ht(ex50.lunchbox)}. With the ${P.inv.nom} closing reception, juice and water included: ${ht(ex50.avecCocktail)}.` },
    { q: 'How much food per person over an offsite day?', a: `L'Écrin Traiteur allows 2 mini pastries per person at the welcome, one 20 cl glass of juice and one 1-litre flask of coffee per 6; 1.5 to 2 sweet bites per break; one meal per person present at lunch, 10% more if the list is not confirmed by name; ${P.inv.pieces} canapés per person for a 1.5 to 2-hour closing reception. The quantity calculator on the site works it out for your headcount.` },
    { q: 'How do deliveries and service work over the day?', a: `L'Écrin Traiteur delivers from 6:30 am with its own team, in two drops: the welcome and morning break, then lunch and the afternoon break. Setting up is on request; delivery and collection of reusable tableware cost ${ht(P.livRecup)} in Paris, the 92 and the 94; a waiter ${ht(P.mh)} for ${P.mhHeures} hours. Order until 10 am the day before, 48 hours ahead for 50 people or more.` },
    { q: 'Are dietary needs and allergies taken into account?', a: `Yes. At L'Écrin Traiteur, everything savoury is halal and pork-free, alcohol-free and at no extra cost. Vegetarian, vegan and gluten-free versions are requested on the quote with the number of people concerned; tell us about allergies too, each product's ingredients are listed on its page.` },
  ]
}

/* Offres pour le balisage Service (prix « à partir de », par personne, HT). */
export function offresSeminaire(en = false) {
  const P = PRIX
  const L = en
    ? { lunchbox: 'Offsite day with lunch box', plateaux: 'Offsite day with lunch trays', partager: 'Offsite day with sharing buffet', cocktail: 'Offsite day with lunch trays and closing reception', pdj: 'Welcome coffee (Classique breakfast)', pause: 'Break', inv: `Closing reception ${P.inv.nom}` }
    : { lunchbox: 'Journée de séminaire avec lunch box', plateaux: 'Journée de séminaire avec plateaux repas', partager: 'Journée de séminaire avec buffet à partager', cocktail: 'Journée de séminaire avec plateaux repas et cocktail de clôture', pdj: 'Accueil café (petit-déjeuner Classique)', pause: 'Pause gourmande', inv: `Cocktail de clôture ${P.inv.nom}` }
  return [
    { name: L.pdj, price: P.pdj },
    { name: L.pause, price: P.pause },
    { name: L.lunchbox, price: JOURNEES.lunchbox },
    { name: L.plateaux, price: JOURNEES.plateaux },
    { name: L.partager, price: JOURNEES.partager },
    { name: L.cocktail, price: JOURNEES.cocktail },
    { name: L.inv, price: P.inv.prix },
  ]
}
