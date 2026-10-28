// Enrichissement des fiches produit (créé le 25/10/2026) : tableau de budget par
// effectif, questions fréquentes et liens vers les pages qui complètent le produit.
//
// Même règle que lib/ficheAsavoir.js : rien n'est inventé. Les montants sont des
// multiplications sur le prix de la fiche et la livraison publiée (29 € HT, minimum
// 50 € HT), les délais sont ceux du site, les régimes et allergènes sont ceux déclarés
// dans les données du produit. Si une donnée manque, la ligne ou la question n'est
// pas écrite. Formulations alternées de façon déterministe par identifiant.
//
// Sortie : { budget: { titre, head, rows, note } | null, faq: [{ q, a }], liens: [{ label, href }] }
// À fusionner dans l'objet « asavoir » (components/FicheAsavoir.js l'affiche).

import { MINIMUM } from './prixEntree'
import { LIV } from './calculsPrix'

const eur = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ','))
const hash = (s) => [...String(s)].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7)
const pick = (arr, seed) => arr[hash(seed) % arr.length]
const EFFECTIFS = [10, 20, 30, 50]
const plur = (u) => (/(s|x)$/.test(u) ? u : /au$/.test(u) ? `${u}x` : `${u}s`)
const maj = (s) => s.charAt(0).toUpperCase() + s.slice(1)

// Pages qui complètent chaque famille de produits (toutes existent dans le sitemap).
const LIENS = {
  pdj: [
    { label: 'Livraison de petit-déjeuner en entreprise à Paris', href: '/livraison-petit-dejeuner-entreprise-paris' },
    { label: 'Boissons chaudes et froides', href: '/creations/boissons' },
    { label: 'Budget petit-déjeuner par effectif', href: '/journal/budget-petit-dejeuner-equipe-personnes' },
  ],
  pause: [
    { label: "Livraison de goûter en entreprise à Paris", href: '/livraison-gouter-entreprise-paris' },
    { label: 'Boissons chaudes et froides', href: '/creations/boissons' },
    { label: 'Combien de desserts par personne', href: '/journal/combien-desserts-par-personne-buffet-cocktail-gouter' },
    { label: "Traiteur goûter d'entreprise", href: '/occasions/gouter-entreprise' },
  ],
  cocktail: [
    { label: 'Combien de pièces par personne', href: '/journal/combien-pieces-cocktail-par-personne-entreprise' },
    { label: 'Afterwork à partager', href: '/creations/cocktails/afterwork-partage' },
    { label: 'Boissons sans alcool', href: '/creations/boissons' },
  ],
  plateau: [
    { label: 'Comment choisir ses plateaux repas', href: '/journal/meilleurs-plateaux-repas-entreprise-paris' },
    { label: 'Boissons', href: '/creations/boissons' },
    { label: "Traiteur déjeuner d'entreprise", href: '/occasions/dejeuner-entreprise' },
  ],
  lunch: [
    { label: 'Comment choisir sa lunch box', href: '/journal/meilleures-lunch-box-reunion-entreprise-paris' },
    { label: 'Boissons', href: '/creations/boissons' },
    { label: "Traiteur déjeuner d'entreprise", href: '/occasions/dejeuner-entreprise' },
  ],
  aperitif: [
    { label: 'Afterwork à partager, dès 24,90 € HT', href: '/creations/cocktails/afterwork-partage' },
    { label: 'Clubs, mini baguettes, wraps : comment choisir', href: '/journal/meilleurs-sandwichs-reunion-afterwork-entreprise-paris' },
    { label: "Traiteur afterwork d'entreprise", href: '/occasions/afterwork-entreprise' },
  ],
}

// Règles de quantité publiées sur le site (guides boissons, page afterwork, devis).
/*
  Terme métier posé devant le nom du produit dans les questions fréquentes.
  « La Romaine » seul n'est cherché par personne et ne dit rien à un moteur de
  réponses ; « plateau repas La Romaine » porte la requête réelle et rend la
  réponse autoportante quand une IA la cite hors de son contexte (28/10/2026).

  Rien pour pdj et pause : leurs produits sont nommés par ce qu'ils sont
  (« Madeleines d'exception »), le préfixe serait faux.
*/
const TERME_EN = {
  plateau:  'lunch tray',
  lunch:    'lunch box',
  cocktail: 'cocktail menu',
  aperitif: 'canapé platter',
}

function nommeEn(kind, nom) {
  const mot = TERME_EN[kind]
  const deja = !mot || new RegExp(mot.split(' ')[0], 'i').test(nom)
  return { sujet: deja ? `“${nom}”` : `the ${mot} “${nom}”`, terme: deja ? null : mot }
}

const TERME = {
  plateau:  { art: 'le', mot: 'plateau repas',    de: 'du' },
  lunch:    { art: 'la', mot: 'lunch box',        de: 'de la' },
  cocktail: { art: 'le', mot: 'cocktail',         de: 'du' },
  aperitif: { art: 'le', mot: 'plateau apéritif', de: 'du' },
}

/* « La Romaine » → « le plateau repas « La Romaine » ».
   Si le nom porte déjà le terme (« Plateau de fromages »), on n'ajoute rien. */
function nomme(kind, nom) {
  const t = TERME[kind]
  const sansTerme = !t || new RegExp(t.mot.split(' ')[0], 'i').test(nom)
  return {
    sujet: sansTerme ? `« ${nom} »` : `${t.art} ${t.mot} « ${nom} »`,
    deSujet: sansTerme ? `de « ${nom} »` : `${t.de} ${t.mot} « ${nom} »`,
    terme: sansTerme ? null : `${t.art} ${t.mot}`,
  }
}

const ACCOMPAGNE = {
  pdj: "Pour un petit-déjeuner, comptez un thermos d'1 litre de café ou de thé pour 6 personnes et un verre de jus de 20 cl par personne ; nous les livrons dans la même commande, avec gobelets et serviettes.",
  pause: "Pour une pause, ajoutez une boisson : un thermos d'1 litre de café ou de thé pour 6 personnes, ou du jus ; tout arrive dans la même livraison.",
  cocktail: "Pour deux heures de cocktail, comptez 1 litre de jus pour 4 personnes, 1 bouteille d'eau de 75 cl pour 5 et, pour trinquer, une flûte de Chardonnay 0 % par personne : tout est sans alcool et livré avec les pièces.",
  plateau: "Un plateau repas se complète d'une boisson (eau, jus) et, si besoin, d'un café en thermos pour la fin du repas, commandés avec lui pour une seule livraison.",
  lunch: "La lunch box se complète d'une boisson (eau, jus) et d'un café en thermos si besoin, commandés avec elle pour une seule livraison.",
  aperitif: "Un plateau se compte à 6 pièces par personne pour un afterwork ; ajoutez 1 litre de jus pour 4 personnes et 1 bouteille d'eau de 75 cl pour 5, et pensez aux pièces sucrées si le moment dure plus de deux heures.",
}

const LIENS_EN = {
  pdj: [
    { label: 'Hot and cold drinks', href: '/en/creations/boissons' },
    { label: 'Afternoon breaks', href: '/en/creations/pauses-gourmandes' },
    { label: 'Breakfast budget by group size', href: '/en/journal/budget-petit-dejeuner-equipe-personnes' },
  ],
  pause: [
    { label: 'Hot and cold drinks', href: '/en/creations/boissons' },
    { label: 'How many desserts per person', href: '/en/journal/combien-desserts-par-personne-buffet-cocktail-gouter' },
    { label: 'Corporate afternoon break catering', href: '/en/occasions/gouter-entreprise' },
  ],
  cocktail: [
    { label: 'How many canapés per person', href: '/en/journal/combien-pieces-cocktail-par-personne-entreprise' },
    { label: 'Sharing afterwork', href: '/en/creations/cocktails/afterwork-partage' },
    { label: 'Alcohol-free drinks', href: '/en/creations/boissons' },
  ],
  plateau: [
    { label: 'How to choose lunch trays', href: '/en/journal/meilleurs-plateaux-repas-entreprise-paris' },
    { label: 'Drinks', href: '/en/creations/boissons' },
    { label: 'Corporate lunch catering', href: '/en/occasions/dejeuner-entreprise' },
  ],
  lunch: [
    { label: 'How to choose a lunch box', href: '/en/journal/meilleures-lunch-box-reunion-entreprise-paris' },
    { label: 'Drinks', href: '/en/creations/boissons' },
    { label: 'Corporate lunch catering', href: '/en/occasions/dejeuner-entreprise' },
  ],
  aperitif: [
    { label: 'Sharing afterwork, from €24.90 excl. VAT', href: '/en/creations/cocktails/afterwork-partage' },
    { label: 'Clubs, mini baguettes, wraps: how to choose', href: '/en/journal/meilleurs-sandwichs-reunion-afterwork-entreprise-paris' },
    { label: 'Afterwork catering', href: '/en/occasions/afterwork-entreprise' },
  ],
}

const ACCOMPAGNE_EN = {
  pdj: 'For a breakfast, allow one 1-litre flask of coffee or tea for 6 people and one 20 cl glass of juice per person; we deliver them in the same order, with cups and napkins.',
  pause: 'For a break, add a drink: one 1-litre flask of coffee or tea for 6 people, or juice; everything arrives in the same delivery.',
  cocktail: 'For two hours of cocktail, allow 1 litre of juice for 4 people, one 75 cl bottle of water for 5 and, for a toast, one glass of 0% Chardonnay per person: everything is alcohol-free and delivered with the pieces.',
  plateau: 'A lunch tray goes with a drink (water, juice) and, if needed, a flask of coffee for the end of the meal, ordered with it for a single delivery.',
  lunch: 'A lunch box goes with a drink (water, juice) and, if needed, a flask of coffee, ordered with it for a single delivery.',
  aperitif: 'Count 6 pieces per person for an afterwork; add 1 litre of juice for 4 people and one 75 cl bottle of water for 5, and think of sweet pieces if the moment lasts more than two hours.',
}

const NOMS_LIVRAISON = [
  'Nous livrons à Paris et dans les communes proches pour 29 € HT, dès 6h30, par notre équipe.',
  'La livraison coûte 29 € HT à Paris et dans les communes proches ; elle est faite par notre équipe, dès 6h30.',
  'Livraison par notre équipe dès 6h30 : 29 € HT à Paris et dans les communes proches.',
]

function quantite(nbPersonnes, servesMax) {
  return Math.max(1, Math.ceil(nbPersonnes / servesMax))
}

/*
  kind       : pdj | pause | cocktail | plateau | lunch | aperitif
  nom        : nom affiché du produit
  seed       : identifiant stable (alternance des formulations)
  prix       : prix HT (par personne si parPersonne, sinon par unité)
  parPersonne: true si le prix est déjà par personne (cocktail, plateau repas, lunch box)
  unite      : « plateau », « coffret », « format »… (si prix par unité)
  personnes  : { min, max } personnes servies par une unité (si prix par unité)
  detail     : phrase décrivant le contenu de l'unité (optionnel)
  dietary / allergens : tableaux déclarés dans les données (optionnel)
*/
export function enrichir({ kind, nom, seed, prix, parPersonne = false, unite = 'format', personnes = null, detail = '', contenu = '', dietary = [], allergens = [], lang = 'fr' }) {
  const E = lang === 'en'
  if (E) return enrichirEn({ kind, nom, seed, prix, parPersonne, unite, personnes, detail, contenu, dietary, allergens })
  const out = { budget: null, faq: [], liens: LIENS[kind] || [] }
  const s = seed || nom

  // ── Budget par effectif ────────────────────────────────────────────────
  if (prix && (parPersonne || personnes)) {
    const lignes = EFFECTIFS.map((n) => {
      if (parPersonne) {
        const total = n * prix
        return { n, qte: `${n}`, produits: total, total: total + LIV }
      }
      const q = quantite(n, personnes.max)
      const produits = q * prix
      return { n, qte: `${q}`, produits, total: produits + LIV }
    })
    out.budget = {
      titre: 'Budget pour votre équipe',
      head: parPersonne
        ? ['Effectif', 'Total HT (produits)', 'Livraison comprise']
        : ['Effectif', `${maj(plur(unite))} à prévoir`, 'Total HT (produits)', 'Livraison comprise'],
      rows: lignes.map((l) => (parPersonne
        ? [`${l.n} personnes`, `${eur(l.produits)} €`, `${eur(l.total)} €`]
        : [`${l.n} personnes`, l.qte, `${eur(l.produits)} €`, `${eur(l.total)} €`])),
      note: `Prix HT, livraison de ${LIV} € HT à Paris et dans les communes proches. Minimum de commande : ${MINIMUM} € HT.`,
    }
  }

  // ── Questions fréquentes ───────────────────────────────────────────────
  const faq = []
  const { sujet, deSujet, terme } = nomme(kind, nom)

  if (prix) {
    let a
    if (parPersonne) {
      a = `${terme ? maj(terme) + ' « ' + nom + ' » coûte' : 'Le prix est de'} ${eur(prix)} € HT par personne. La livraison s'ajoute : ${LIV} € HT à Paris et dans les communes proches, et le minimum de commande est de ${MINIMUM} € HT. Pour 20 personnes, comptez ${eur(20 * prix + LIV)} € HT livraison comprise.`
    } else {
      const parP = personnes ? (personnes.min === personnes.max ? `, soit ${eur(prix / personnes.min)} € HT par personne` : `, soit de ${eur(prix / personnes.max)} à ${eur(prix / personnes.min)} € HT par personne`) : ''
      a = `${terme ? maj(terme) + ' « ' + nom + ' » coûte' : 'Le prix est de'} ${eur(prix)} € HT le ${unite}${parP}. La livraison s'ajoute : ${LIV} € HT à Paris et dans les communes proches, minimum de commande ${MINIMUM} € HT.`
    }
    faq.push({ q: `Quel est le prix ${deSujet} ?`, a })
  }

  if (!parPersonne && personnes) {
    const pers = personnes.min === personnes.max ? `${personnes.min} personnes` : `${personnes.min} à ${personnes.max} personnes`
    const q20 = quantite(20, personnes.max), q50 = quantite(50, personnes.max)
    faq.push({
      q: `Pour combien de personnes prévoir ${sujet} ?`,
      a: `Un ${unite} est prévu pour ${pers}${detail ? ` : ${detail}` : ''}. Pour 20 personnes, comptez ${q20} ${q20 > 1 ? plur(unite) : unite} ; pour 50 personnes, ${q50}.`,
    })
  }

  if (contenu) {
    faq.push({ q: `Que contient ${sujet} ?`, a: `${contenu}${/[.!?]$/.test(contenu) ? '' : '.'} Tout est livré prêt à servir.` })
  }
  if (ACCOMPAGNE[kind]) {
    faq.push({ q: `Que commander avec ${sujet} ?`, a: ACCOMPAGNE[kind] })
  }

  faq.push({
    q: `Quel délai pour commander ${sujet} ?`,
    a: pick([
      `La commande est possible jusqu'à 10h la veille pour une livraison dès 6h30 le lendemain. À partir de 50 personnes ou pour plusieurs sites, prévenez 48 h à l'avance. Le devis arrive sous 24 h.`,
      `Commandez avant 10h la veille : la livraison commence dès 6h30. Pour 50 personnes et plus, ou plusieurs sites, mieux vaut commander 48 h avant. Nous répondons à toute demande de devis sous 24 h.`,
    ], s + 'd'),
  })

  const regimes = []
  if (dietary?.length) regimes.push(`Mentions déclarées pour ce produit : ${dietary.map((d) => String(d).toLowerCase()).join(', ')}.`)
  if (allergens?.length) regimes.push(`Allergènes déclarés : ${allergens.map((x) => String(x).toLowerCase()).join(', ')}.`)
  // Sucré et boissons (petit-déjeuner, pauses, boissons) : pas de halal (décisions de Ramy, 17/10 et 29/10/2026).
  const sucre = kind === 'pdj' || kind === 'pause' || kind === 'boisson'
  faq.push({
    q: sucre ? `${maj(sujet)} : quels régimes alimentaires et quels allergènes ?` : `${maj(sujet)} : est-ce halal, et quels régimes sont possibles ?`,
    a: (sucre
      ? `${regimes.join(' ')} Les options végétariennes, vegan et sans gluten se précisent au devis, avec le nombre de personnes concernées ; l'atelier manipule de la farine, des traces sont possibles.`
      : `Le salé de L'Écrin Traiteur (cocktails, plateaux, buffets) est halal et sans porc, sans alcool et sans supplément de prix (aucune certification halal n'est revendiquée). ${regimes.join(' ')} Les options végétariennes, vegan et sans gluten se précisent au devis, avec le nombre de personnes concernées ; l'atelier manipule de la farine, des traces sont possibles.`
    ).replace(/\s+/g, ' ').trim(),
  })

  faq.push({
    q: `${maj(sujet)} : où est-ce livré, et par qui ?`,
    a: `${pick(NOMS_LIVRAISON, s + 'l')} Nous livrons Paris, les Hauts-de-Seine (La Défense, Boulogne-Billancourt, Neuilly, Levallois, Issy…) et le reste de l'Île-de-France, les zones plus éloignées étant chiffrées au devis. Avec la reprise de la vaisselle réutilisable, livraison et reprise font 39 € HT à Paris, dans le 92 et le 94.`,
  })

  faq.push({
    q: `Peut-on payer sur facture avec un bon de commande ?`,
    a: `Oui. La facture est une facture d'entreprise avec TVA ; si votre société fonctionne avec des bons de commande, indiquez le numéro dans la demande de devis, il figurera sur la facture.`,
  })

  out.faq = faq
  return out
}

// ── Version anglaise ────────────────────────────────────────────────────────

const eurEn = (n) => `€${(Number.isInteger(n) ? String(n) : n.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
const UNITES_EN = { plateau: ['platter', 'platters'], coffret: ['box', 'boxes'], format: ['pack', 'packs'], thermos: ['flask', 'flasks'] }
const uni = (u, n = 2) => (UNITES_EN[u] || [u, `${u}s`])[n > 1 ? 1 : 0]

function enrichirEn({ kind, nom, seed, prix, parPersonne, unite, personnes, detail, contenu, dietary, allergens }) {
  const out = { budget: null, faq: [], liens: LIENS_EN[kind] || [] }
  const { sujet: sujetEn, terme: termeEn } = nommeEn(kind, nom)
  const s = seed || nom

  if (prix && (parPersonne || personnes)) {
    const lignes = EFFECTIFS.map((n) => {
      if (parPersonne) return { n, qte: `${n}`, produits: n * prix, total: n * prix + LIV }
      const q = quantite(n, personnes.max)
      return { n, qte: `${q}`, produits: q * prix, total: q * prix + LIV }
    })
    out.budget = {
      titre: 'Budget for your team',
      head: parPersonne
        ? ['Group size', 'Total excl. VAT (products)', 'Delivery included']
        : ['Group size', `${maj(uni(unite))} needed`, 'Total excl. VAT (products)', 'Delivery included'],
      rows: lignes.map((l) => (parPersonne
        ? [`${l.n} people`, eurEn(l.produits), eurEn(l.total)]
        : [`${l.n} people`, l.qte, eurEn(l.produits), eurEn(l.total)])),
      note: `Prices excl. VAT; delivery ${eurEn(LIV)} excl. VAT in Paris and nearby towns. Minimum order: ${eurEn(MINIMUM)} excl. VAT.`,
    }
  }

  const faq = []
  if (prix) {
    let a
    if (parPersonne) {
      a = `The price is ${eurEn(prix)} excl. VAT per person. Delivery is extra: ${eurEn(LIV)} excl. VAT in Paris and nearby towns, and the minimum order is ${eurEn(MINIMUM)} excl. VAT. For 20 people, allow ${eurEn(20 * prix + LIV)} excl. VAT with delivery.`
    } else {
      const parP = personnes ? (personnes.min === personnes.max ? `, or ${eurEn(prix / personnes.min)} excl. VAT per person` : `, or ${eurEn(prix / personnes.max)} to ${eurEn(prix / personnes.min)} excl. VAT per person`) : ''
      a = `The price is ${eurEn(prix)} excl. VAT per ${uni(unite, 1)}${parP}. Delivery is extra: ${eurEn(LIV)} excl. VAT in Paris and nearby towns, minimum order ${eurEn(MINIMUM)} excl. VAT.`
    }
    faq.push({ q: `How much ${termeEn ? 'is the ' + termeEn + ' “' + nom + '”' : 'is “' + nom + '”'}?`, a })
  }
  if (!parPersonne && personnes) {
    const pers = personnes.min === personnes.max ? `${personnes.min} people` : `${personnes.min} to ${personnes.max} people`
    const q20 = quantite(20, personnes.max), q50 = quantite(50, personnes.max)
    faq.push({
      q: `How many people does ${sujetEn} serve?`,
      a: `One ${uni(unite, 1)} is meant for ${pers}${detail ? ` (${detail})` : ''}. For 20 people, allow ${q20} ${uni(unite, q20)}; for 50 people, ${q50}.`,
    })
  }
  if (contenu) faq.push({ q: `What is in ${sujetEn}?`, a: `${contenu}${/[.!?]$/.test(contenu) ? '' : '.'} Everything is delivered ready to serve.` })
  if (ACCOMPAGNE_EN[kind]) faq.push({ q: `What should I order with ${sujetEn}?`, a: ACCOMPAGNE_EN[kind] })

  faq.push({
    q: `How much notice do you need for ${sujetEn}?`,
    a: pick([
      `Orders are taken until 10 am the day before, for delivery from 6:30 am the next day. From 50 people, or for several sites, give 48 hours' notice. The quote arrives within 24 hours.`,
      `Order before 10 am the day before: delivery starts from 6:30 am. For 50 people or more, or several sites, it is better to order 48 hours ahead. We answer every quote request within 24 hours.`,
    ], s + 'd'),
  })

  const sucre = kind === 'pdj' || kind === 'pause' || kind === 'boisson'
  const regimes = []
  if (dietary?.length) regimes.push(`Labels declared for this product: ${dietary.join(', ')}.`)
  if (allergens?.length) regimes.push(`Declared allergens: ${allergens.join(', ')}.`)
  faq.push({
    q: sucre ? `“${nom}”: which dietary needs and allergens?` : `“${nom}”: is it halal, and which dietary needs can you cover?`,
    a: (sucre
      ? `${regimes.join(' ')} Vegetarian, vegan and gluten-free options are set out in the quote, with the number of people concerned; our workshop handles flour, so traces are possible.`
      : `Savoury food at L'Écrin Traiteur (cocktail receptions, lunch trays, buffets) is halal and pork-free, with no alcohol and no extra charge (no halal certification is claimed). ${regimes.join(' ')} Vegetarian, vegan and gluten-free options are set out in the quote, with the number of people concerned; our workshop handles flour, so traces are possible.`
    ).replace(/\s+/g, ' ').trim(),
  })
  faq.push({
    q: `“${nom}”: where is it delivered, and by whom?`,
    a: `Delivery costs ${eurEn(LIV)} excl. VAT in Paris and nearby towns; it is done by our own team, from 6:30 am. We deliver Paris, the Hauts-de-Seine (La Défense, Boulogne-Billancourt, Neuilly, Levallois, Issy…) and the rest of the Paris region, with farther areas priced in the quote. With the return of reusable tableware, delivery and pick-up come to ${eurEn(39)} excl. VAT in Paris, the 92 and the 94.`,
  })
  faq.push({
    q: 'Can we pay on invoice with a purchase order?',
    a: 'Yes. The invoice is a company invoice showing VAT; if your company works with purchase orders, put the number in the quote request and it will appear on the invoice.',
  })
  out.faq = faq
  return out
}
