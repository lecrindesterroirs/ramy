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
    { label: 'Boissons chaudes et froides', href: '/creations/boissons' },
    { label: 'Pauses gourmandes', href: '/creations/pauses-gourmandes' },
    { label: 'Budget petit-déjeuner par effectif', href: '/journal/budget-petit-dejeuner-equipe-personnes' },
  ],
  pause: [
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
const ACCOMPAGNE = {
  pdj: "Pour un petit-déjeuner, comptez un thermos d'1 litre de café ou de thé pour 6 personnes et un verre de jus de 20 cl par personne ; nous les livrons dans la même commande, avec gobelets et serviettes.",
  pause: "Pour une pause, ajoutez une boisson : un thermos d'1 litre de café ou de thé pour 6 personnes, ou du jus ; tout arrive dans la même livraison.",
  cocktail: "Pour deux heures de cocktail, comptez 1 litre de jus pour 4 personnes, 1 bouteille d'eau de 75 cl pour 5 et, pour trinquer, une flûte de Chardonnay 0 % par personne : tout est sans alcool et livré avec les pièces.",
  plateau: "Un plateau repas se complète d'une boisson (eau, jus) et, si besoin, d'un café en thermos pour la fin du repas, commandés avec lui pour une seule livraison.",
  lunch: "La lunch box se complète d'une boisson (eau, jus) et d'un café en thermos si besoin, commandés avec elle pour une seule livraison.",
  aperitif: "Un plateau se compte à 6 pièces par personne pour un afterwork ; ajoutez 1 litre de jus pour 4 personnes et 1 bouteille d'eau de 75 cl pour 5, et pensez aux pièces sucrées si le moment dure plus de deux heures.",
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
export function enrichir({ kind, nom, seed, prix, parPersonne = false, unite = 'format', personnes = null, detail = '', contenu = '', dietary = [], allergens = [] }) {
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

  if (prix) {
    let a
    if (parPersonne) {
      a = `Le prix est de ${eur(prix)} € HT par personne. La livraison s'ajoute : ${LIV} € HT à Paris et dans les communes proches, et le minimum de commande est de ${MINIMUM} € HT. Pour 20 personnes, comptez ${eur(20 * prix + LIV)} € HT livraison comprise.`
    } else {
      const parP = personnes ? (personnes.min === personnes.max ? `, soit ${eur(prix / personnes.min)} € HT par personne` : `, soit de ${eur(prix / personnes.max)} à ${eur(prix / personnes.min)} € HT par personne`) : ''
      a = `Le prix est de ${eur(prix)} € HT le ${unite}${parP}. La livraison s'ajoute : ${LIV} € HT à Paris et dans les communes proches, minimum de commande ${MINIMUM} € HT.`
    }
    faq.push({ q: `Quel est le prix de « ${nom} » ?`, a })
  }

  if (!parPersonne && personnes) {
    const pers = personnes.min === personnes.max ? `${personnes.min} personnes` : `${personnes.min} à ${personnes.max} personnes`
    const q20 = quantite(20, personnes.max), q50 = quantite(50, personnes.max)
    faq.push({
      q: `Pour combien de personnes prévoir « ${nom} » ?`,
      a: `Un ${unite} est prévu pour ${pers}${detail ? ` : ${detail}` : ''}. Pour 20 personnes, comptez ${q20} ${q20 > 1 ? plur(unite) : unite} ; pour 50 personnes, ${q50}.`,
    })
  }

  if (contenu) {
    faq.push({ q: `Que contient « ${nom} » ?`, a: `${contenu}${/[.!?]$/.test(contenu) ? '' : '.'} Tout est livré prêt à servir.` })
  }
  if (ACCOMPAGNE[kind]) {
    faq.push({ q: `Que commander avec « ${nom} » ?`, a: ACCOMPAGNE[kind] })
  }

  faq.push({
    q: `Quel délai pour commander « ${nom} » ?`,
    a: pick([
      `La commande est possible jusqu'à 14h la veille pour une livraison dès 6h30 le lendemain. À partir de 50 personnes ou pour plusieurs sites, prévenez 48 h à l'avance. Le devis arrive sous 24 h.`,
      `Commandez avant 14h la veille : la livraison commence dès 6h30. Pour 50 personnes et plus, ou plusieurs sites, mieux vaut commander 48 h avant. Nous répondons à toute demande de devis sous 24 h.`,
    ], s + 'd'),
  })

  const regimes = []
  if (dietary?.length) regimes.push(`Mentions déclarées pour ce produit : ${dietary.map((d) => String(d).toLowerCase()).join(', ')}.`)
  if (allergens?.length) regimes.push(`Allergènes déclarés : ${allergens.map((x) => String(x).toLowerCase()).join(', ')}.`)
  // Sucré (petit-déjeuner, pauses) : pas d'insistance sur le halal (décision de Ramy, 17/10/2026).
  const sucre = kind === 'pdj' || kind === 'pause'
  faq.push({
    q: sucre ? `« ${nom} » : quels régimes alimentaires et quels allergènes ?` : `« ${nom} » : est-ce halal, et quels régimes sont possibles ?`,
    a: (sucre
      ? `${regimes.join(' ')} Les options végétariennes, vegan et sans gluten se précisent au devis, avec le nombre de personnes concernées ; l'atelier manipule de la farine, des traces sont possibles.`
      : `Toute la carte de L'Écrin Traiteur est halal et sans porc, sans alcool et sans supplément de prix (aucune certification halal n'est revendiquée). ${regimes.join(' ')} Les options végétariennes, vegan et sans gluten se précisent au devis, avec le nombre de personnes concernées ; l'atelier manipule de la farine, des traces sont possibles.`
    ).replace(/\s+/g, ' ').trim(),
  })

  faq.push({
    q: `« ${nom} » : où est-ce livré, et par qui ?`,
    a: `${pick(NOMS_LIVRAISON, s + 'l')} Nous livrons Paris, les Hauts-de-Seine (La Défense, Boulogne-Billancourt, Neuilly, Levallois, Issy…) et le reste de l'Île-de-France, les zones plus éloignées étant chiffrées au devis. Avec la reprise de la vaisselle réutilisable, livraison et reprise font 39 € HT à Paris, dans le 92 et le 94.`,
  })

  faq.push({
    q: `Peut-on payer sur facture avec un bon de commande ?`,
    a: `Oui. La facture est une facture d'entreprise avec TVA ; si votre société fonctionne avec des bons de commande, indiquez le numéro dans la demande de devis, il figurera sur la facture.`,
  })

  out.faq = faq
  return out
}
