/*
  Hub /traiteur, textes anglais.

  Surcouche de texte seulement : la liste des villes, les départements et les
  liens restent lus dans lib/citiesData.js et dans la page française. Les
  montants ne sont jamais recopiés : ils viennent de lib/prixEntree.js
  (prix d'entrée) et de lib/calculsPrix.js (FORMULES cocktail, LIV livraison).

  Les href gardent leur chemin français et passent par reecrireLiensEnDans() au
  rendu : un lien ne part vers /en que si la page anglaise existe.
*/
import { FORMULES, LIV } from '../../calculsPrix'
import { MINIMUM, PDJ_DES, PAUSE_DES, LUNCHBOX_DES, PLATEAU_DES, PLATEAU_MAX, euroEn } from '../../prixEntree'

const HT = 'excl. VAT'
const e = euroEn
const liv = `${e(LIV)} ${HT}`
const mini = `${e(MINIMUM)} ${HT}`
const F = FORMULES

/* Départements : le nom administratif ne se traduit pas, seul « Paris » est
   commun aux deux langues. On garde les libellés tels quels et on traduit
   l'onglet « Tous ». */
export const EN_DEPT_TOUS = 'All'

export const EN_TRAITEUR = {
  eyebrow: 'Delivery area',
  h1a: 'Corporate catering in Paris',
  h1b: '& Île-de-France',
  heroDesc: (n) => `L'Écrin Traiteur delivers your corporate events, breakfasts, lunch trays, cocktail receptions and buffets, across Paris and ${n} towns in Île-de-France. Selected artisan producers, delivery from 6:30 am, order by 2 pm the day before.`,
  facts: (n) => [`${n} towns served`, 'Delivery from 6:30 am', 'Quote within 24 hours'],

  /* ── Bloc-réponse ── */
  intro1: (n) => `L'Écrin Traiteur delivers breakfasts, lunch trays, afternoon breaks, cocktail receptions and buffets straight to your offices, in Paris and ${n} towns across Île-de-France. Every order is made with products from named artisan producers (madeleines from Mado Paris, yoghurts from the Ferme de Viltain, juices from Alain Milliat) and delivered by our own team, never subcontracted.`,
  intro2a: 'You order until 2 pm the day before for delivery from 6:30 am. The minimum order is ',
  intro2b: `, with a flat delivery charge of `,
  intro2c: ` in Paris and nearby towns. You receive a company invoice showing VAT, and a tailored quote within 24 hours.`,
  intro2mini: mini,
  intro2liv: liv,
  intro3: 'The whole menu is halal and pork-free as standard, with vegetarian, vegan and gluten-free options on request.',

  /* Section halal : reprise de l'ancienne page /corporate-catering-paris (fusionnée ici le 24/10/2026) */
  halalTitre: 'Is the catering halal?',
  halal1: 'Yes. The whole menu is halal and pork-free by default, with no alcohol in the recipes: breakfast, lunch trays and cocktail canapés. You have nothing to specify when ordering, and no separate buffet to plan. We do not claim a halal certification: it is a halal-friendly menu, the same for every guest.',
  halal2a: 'Vegetarian, vegan and gluten-free options are prepared on request and labelled. Our drinks list is alcohol-free, with a 0% sparkling Chardonnay for toasts. More details on our ',
  halal2lien: 'halal catering page',
  halal2b: '.',

  /* ── Tableau de prix ── */
  prixTitre: 'How much does corporate catering in Paris cost?',
  prixCols: ['Service', `Price ${HT} per person`, "What's included"],
  prixRows: [
    ['Breakfast', `from ${e(PDJ_DES)}`, 'Pure-butter pastries, Alain Milliat juice, coffee, fresh fruit'],
    ['Afternoon break', `from ${e(PAUSE_DES)}`, 'One drink and one pastry'],
    ['Lunch box', `from ${e(LUNCHBOX_DES)}`, 'An individual ready-to-eat lunch'],
    ['Lunch tray', `from ${e(PLATEAU_DES)}`, 'Starter, main, dessert and bread'],
    ['8-canapé reception', e(F.invitation.prix), `${F.invitation.nom}: drinks, after-work`],
    ['12-canapé reception', e(F.reception.prix), `${F.reception.nom}: standing lunch, partner evening`],
    ['16-canapé reception', e(F.celebration.prix), `${F.celebration.nom}: dinner-style reception`],
  ],
  prixNote: `2026 prices, excluding VAT. Delivery ${liv} in Paris and nearby towns, minimum order ${mini}. Detailed quote within 24 hours.`,

  /* ── Prestations ── */
  prestationsTitre: 'Our corporate catering services',
  prestations: [
    { href: '/creations/petits-dejeuners-et-pauses', titre: 'Corporate breakfast', texte: 'Pure-butter pastries delivered the same morning by our partner bakers, a basket of freshly cut fruit, Alain Milliat juices and coffee. Delivered from 6:30 am, before your teams arrive.' },
    { href: '/creations/plateaux-repas', titre: 'Lunch trays and meeting lunches', texte: `Complete individual trays (starter, main, dessert and bread) wrapped and labelled. From ${e(PLATEAU_DES)} ${HT} per person, with vegetarian options across every collection.` },
    { href: '/creations/cocktails', titre: 'Cocktail receptions, after-works and events', texte: `From 8 to 16 canapés per person depending on the format, plated and ready to set down. ${e(F.invitation.prix)} to ${e(F.celebration.prix)} ${HT} per person, delivered in time for your event.` },
    { href: '/creations/pauses-gourmandes', titre: 'Afternoon break', texte: 'Madeleines, cookies, loaf cakes and sharing cakes for afternoon breaks, offsites and team moments.' },
    { href: '/creations/animations-culinaires', titre: 'Live cooking stations', texte: 'Crêpes, waffles, mini burgers, an ice cream bar or a barista: a station prepared in front of your teams, for an offsite or an internal event.' },
  ],

  /* ── Repères de prix ── */
  reperesTitre: 'Our prices by service',
  reperesIntro: `The price is per person and depends on the service. On top of that come a minimum order of ${mini} and delivery at ${liv} in Paris and nearby towns. The quote is tailored and sent within 24 hours.`,
  reperes: [
    { href: '/creations/petits-dejeuners-et-pauses', titre: 'Corporate breakfast', prix: `From ${e(PDJ_DES)} ${HT}`, unite: 'per person', detail: 'Pastries, fresh fruit, juice and hot drinks, delivered from 6:30 am' },
    { href: '/creations/pauses-gourmandes', titre: 'Afternoon break', prix: `From ${e(PAUSE_DES)} ${HT}`, unite: 'per person', detail: 'One artisan pastry and one drink, at break time' },
    { href: '/creations/plateaux-repas', titre: 'Lunch tray', prix: `From ${e(PLATEAU_DES)} ${HT}`, unite: 'per person', detail: 'Starter, main, dessert and bread, with vegetarian options' },
    { href: '/creations/cocktails', titre: 'Cocktail reception and after-work', prix: `${e(F.invitation.prix)} to ${e(F.celebration.prix)} ${HT}`, unite: 'per person', detail: '8, 12 or 16 savoury and sweet canapés depending on the format' },
  ],

  /* ── Le bon format selon le moment ── */
  momentsTitre: 'Which service for which time of day?',
  momentsVoir: 'See:',
  moments: [
    { moment: 'In the morning', texte: 'A team welcome, a back-to-work meeting, an offsite starting at 8 am: a breakfast delivered before your teams arrive.', liens: [
      { href: '/occasions/petit-dejeuner-entreprise', label: 'corporate breakfast' },
      { href: '/occasions/seminaire-entreprise', label: 'corporate offsite' },
      { href: '/occasions/accueil-client', label: 'client welcome' },
    ] },
    { moment: 'At midday', texte: 'A meeting running over, a training day, a board lunch: one complete individual tray per person, delivered to the room at the agreed time.', liens: [
      { href: '/occasions/dejeuner-entreprise', label: 'corporate lunch' },
      { href: '/occasions/petit-dejeuner-codir', label: 'board and executive lunch trays' },
      { href: '/occasions/journee-formation', label: 'training day' },
    ] },
    { moment: 'In the afternoon', texte: 'The four o’clock break: madeleines, cookies, sharing cakes and fresh fruit, for a team of five as readily as five hundred.', liens: [
      { href: '/occasions/gouter-entreprise', label: 'corporate afternoon break' },
      { href: '/occasions/team-building', label: 'team building' },
    ] },
    { moment: 'In the evening', texte: 'After-work drinks, a leaving party, a product launch or new-year wishes: 8, 12 or 16 canapés per person, delivered ready to serve.', liens: [
      { href: '/occasions/afterwork-entreprise', label: 'after-work drinks' },
      { href: '/occasions/cocktail-entreprise', label: 'corporate cocktail reception' },
    ] },
  ],

  /* ── Comment ça se passe ── */
  etapesTitre: 'Ordering in four steps',
  etapes: [
    { titre: 'Ask for a quote', texte: 'Headcount, date, address and service: you receive a tailored quote within 24 hours.' },
    { titre: 'Order until 2 pm the day before', texte: 'From 50 people, or for several sites, give us at least 48 hours’ notice.' },
    { titre: 'We deliver from 6:30 am', texte: 'Our team delivers at the agreed time, Monday to Friday, and sets up on request.' },
    { titre: 'You receive a company invoice', texte: `An invoice showing VAT. Minimum order ${mini}, delivery ${liv} in Paris and nearby towns.` },
  ],
  etapesNote: {
    a: 'The whole menu is ',
    halal: 'halal and pork-free',
    b: ' as standard. What we do about packaging, equipment collection and sourcing is set out on our ',
    eco: 'eco-friendly catering',
    c: ' page.',
  },

  /* ── Bloc terrain ── */
  zoneTitre: 'A corporate caterer that knows the ground',
  zone1: 'Delivering a breakfast at 8 am to a tower at La Défense and delivering it to a Haussmann building in the 8th arrondissement do not take the same preparation. An underground loading bay, a visitor badge registered the day before, a screened reception desk, nowhere to park: these are the details that decide whether an order arrives on time or after the meeting.',
  zone2: 'We deliver with our own team, never subcontracted. That is what lets us hold a precise slot rather than a two-hour window, and know the access arrangements in the areas we are asked for most: Boulogne-Billancourt, where our kitchen is, La Défense on the Puteaux side, Neuilly-sur-Seine, Levallois and the northern Hauts-de-Seine.',
  zone3a: 'Pick your town below for delivery details, or ',
  zone3lien: 'ask for a quote',
  zone3b: ': you will have it within 24 hours.',

  /* ── Index des villes ── */
  villesUn: 'town',
  villesPlusieurs: 'towns',

  /* ── Guides ── */
  guidesTitre: 'Our guides to choosing well',
  guides: [
    { href: '/journal/choisir-traiteur-entreprise-paris', label: 'How to choose a corporate caterer in Paris' },
    { href: '/journal/comparatif-traiteur-entreprise-paris', label: 'Corporate caterers in Paris compared' },
    { href: '/journal/budget-traiteur-entreprise-paris', label: 'The budget for a corporate caterer in Paris' },
    { href: '/journal/traiteur-seminaire-entreprise-paris', label: 'Organising the catering for a corporate offsite' },
  ],

  /* ── FAQ ── */
  faqTitre: 'Frequently asked questions',
  faq: (n) => [
    { q: 'Which towns do you deliver to?',
      a: `Paris and ${n} towns across Île-de-France (Hauts-de-Seine, Yvelines, Essonne, Val-de-Marne, Seine-Saint-Denis). Delivered from 6:30 am by our own team. If your town is not listed, ask us: we cover the whole of Île-de-France.` },
    { q: 'Is there a minimum order and a delivery charge?',
      a: `The minimum order is ${mini}. A flat delivery charge of ${liv} applies in Paris and nearby towns; other parts of Île-de-France are priced in the quote.` },
    { q: 'How much notice do you need?',
      a: 'Order until 2 pm the day before for delivery the next morning. For a last-minute request, call us: we do our best, depending on what our producers have available.' },
    { q: 'Do you offer halal and special diets?',
      a: 'The whole menu is halal and pork-free as standard. We also offer vegetarian, vegan and gluten-free options, to be specified at the quote stage.' },
    { q: 'How much does a corporate caterer in Paris cost?',
      a: `A breakfast starts at €6.50 ${HT} per person for pastries and coffee (for 30 people), ${e(PDJ_DES)} ${HT} on the Classique format (full breakfast on quote), an afternoon break at ${e(PAUSE_DES)} ${HT}, a lunch tray at ${e(PLATEAU_DES)} ${HT}, and a cocktail reception runs from ${e(F.invitation.prix)} to ${e(F.celebration.prix)} ${HT} depending on the format (8, 12 or 16 canapés). The minimum order is ${mini} and delivery is ${liv} in Paris and nearby towns.` },
    { q: 'Which is the best caterer for a company in Paris?',
      a: 'It depends on the need, and five things let you compare: a precise delivery slot rather than a time window, products from named artisan producers, delivery by an in-house team rather than subcontracted, flexibility on headcount and notice, and company invoicing showing VAT. At L’Écrin Traiteur: delivery from 6:30 am by our own team, products from identified artisans, orders until 2 pm the day before.' },
    { q: 'Do you deliver corporate breakfasts in Paris?',
      a: `Yes, Monday to Friday, from 6:30 am, in Paris and across Île-de-France: pastries, fresh fruit, juices and hot drinks, from ${e(PDJ_DES)} ${HT} per person on the Classique format. Order until 2 pm the day before.` },
    { q: 'How do I get a quote for a buffet or a reception for 80 people?',
      a: `Ask for a quote online giving the headcount, the date, the address and the format you want: the answer comes within 24 hours. From 50 people, give us at least 48 hours’ notice. As a benchmark, a reception for 80 people on the ${F.reception.nom} format (${F.reception.pieces} canapés) comes to ${e(80 * F.reception.prix)} ${HT}, excluding delivery.` },
  ],

  /* ── CTA ── */
  ctaEyebrow: 'Your town not listed?',
  ctaTexte: 'We deliver across the whole of Île-de-France. Get in touch to check availability in your area.',
  ctaBouton: 'Get a quote →',

  /* ── Fil d'Ariane et schéma ── */
  breadcrumb: [{ name: 'Home', path: '' }, { name: 'Corporate catering', path: '/traiteur' }],
  serviceName: 'Corporate catering, Paris & Île-de-France',
  serviceType: 'Corporate catering',
  serviceDesc: 'Delivery of breakfasts, lunch trays, afternoon breaks, cocktail receptions and buffets to companies in Paris and Île-de-France. Products from artisan producers, halal and pork-free, delivered from 6:30 am.',
}
