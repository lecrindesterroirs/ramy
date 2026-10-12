// Bloc « À savoir » des fiches produit.
//
// Tout est dérivé des champs DÉJÀ présents dans les données (productsData,
// boissonsData, PAUSES, FORMULES cocktails) : format, prix, contenu, régimes,
// allergènes, nombre de personnes. Rien n'est inventé : si un champ manque (ou si
// la donnée se contredit entre deux champs de la même fiche), la ligne
// correspondante n'est tout simplement pas écrite.
//
// Les règles de livraison, de délai et de halal sont celles déjà publiées sur le
// site (CGV, FAQ, lib/categoryFaq.js) : commande avant 14h la veille, livraison
// dès 6h30, 29 € HT à Paris et communes proches, minimum 50 € HT, carte halal et
// sans porc. Plusieurs formulations équivalentes alternent d'une fiche à l'autre
// (choix déterministe par identifiant) pour ne pas coller le même texte partout.
//
// Sortie : { titre, items: [{ label, text }], cta, more } à passer à
// components/FicheAsavoir.js (composant sans état, rendu côté serveur).

import { PRODUCTS } from './productsData'

// ── Utilitaires ─────────────────────────────────────────────────────────────

const eur = (n) => n.toFixed(2).replace('.', ',')
const fin = (s) => { const t = String(s).trim(); return /[.!?…]$/.test(t) ? t : `${t}.` }
const hash = (s) => [...String(s)].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7)
const pick = (arr, seed) => arr[hash(seed) % arr.length]

// Mots à conserver en majuscule quand on passe un libellé de donnée en minuscules.
const PROPRES = new Set([
  'Alain', 'Milliat', 'Mariage', 'Frères', 'Valrhona', 'Laura', 'Todd', 'Pierre', 'Morel',
  'Philippe', 'Urraca', 'Viltain', 'Plaisir', 'Yvelines', 'Evian', 'Évian', 'Badoit',
  'Chardonnay', 'Paris', 'Charentes-Poitou', 'Grisons', 'New', 'York', 'César', 'BBQ', 'Octobre', 'Rose', 'Ferme',
])
export const minuscules = (s) =>
  String(s)
    .replace(/[A-ZÀ-ÝŒ][\p{L}'’-]*/gu, (w) => (PROPRES.has(w) ? w : w.toLowerCase()))
    .replace(/\bcoeur\b/gi, 'cœur')
    .trim()

const plages = (txt) => {
  const out = []
  const re = /(\d+)\s*(?:à|\/|-|–)\s*(\d+)\s*(?:pers|personnes|convives)/gi
  for (const m of String(txt || '').replace(/<[^>]+>/g, ' ').matchAll(re)) out.push([+m[1], +m[2]])
  return out
}

// Nombre de personnes : champ structuré (qty) puis texte de présentation. Si
// l'article de la fiche annonce une autre fourchette, la donnée est ambiguë et on
// s'abstient plutôt que d'afficher deux chiffres contradictoires.
export function personnes(p) {
  const struct = plages(p.qty)[0] || plages(p.ingredients)[0] || null
  if (!struct) return null
  const [a, b] = struct
  const art = plages(p.seoArticle || p.seoHtml)
  if (art.some(([x, y]) => x !== a || y !== b)) return null
  return { min: Math.min(a, b), max: Math.max(a, b) }
}

// ── Formulations alternées (sens identique, mots différents) ─────────────────

const COMMANDE = {
  pdj: [
    'avant 14h la veille, pour une livraison dès 6h30 le lendemain.',
    "jusqu'à 14h la veille ; la livraison commence dès 6h30.",
    'à passer avant 14h la veille, livraison possible dès 6h30.',
  ],
  pause: [
    "avant 14h la veille ; la livraison se cale sur l'heure de votre pause, dès 6h30.",
    "jusqu'à 14h la veille, avec livraison à l'heure de votre programme.",
    "avant 14h la veille, livraison dans vos locaux à l'heure choisie.",
  ],
  boisson: [
    'avant 14h la veille, en même temps que le reste de votre commande.',
    "jusqu'à 14h la veille, avec le reste de votre commande ; livraison dès 6h30.",
    'à joindre à votre commande avant 14h la veille.',
  ],
  cocktail: [
    "avant 14h la veille, livraison à l'heure de votre réception.",
    "jusqu'à 14h la veille ; nous livrons à l'heure de votre programme.",
    'à passer avant 14h la veille, avec livraison dès 6h30 si besoin.',
  ],
  plateau: [
    'avant 14h la veille, livraison dès 6h30 le lendemain. Prévoyez 48 h de préavis à partir de 50 personnes ou pour plusieurs sites.',
    "jusqu'à 14h la veille ; la livraison commence dès 6h30. Pour 50 personnes et plus ou plusieurs sites, 48 h de préavis sont recommandées.",
    'à passer avant 14h la veille, livraison possible dès 6h30. À partir de 50 personnes ou pour plusieurs sites, mieux vaut commander 48 h avant.',
  ],
  aperitif: [
    "avant 14h la veille, livraison à l'heure de votre réception. Prévoyez 48 h de préavis à partir de 50 personnes ou pour plusieurs sites.",
    "jusqu'à 14h la veille ; nous livrons à l'heure de votre programme. Pour 50 personnes et plus ou plusieurs sites, 48 h de préavis sont recommandées.",
    'à passer avant 14h la veille, avec livraison dès 6h30 si besoin. À partir de 50 personnes ou pour plusieurs sites, mieux vaut commander 48 h avant.',
  ],
}

// Régimes sur demande et traces : formulations validées (fiche de faits du
// 13 octobre 2026). Aucune promesse sur la gélatine, les additifs ou l'abattage.
const REGIMES = [
  "végétarien, vegan et sans gluten possibles sur demande. L'atelier manipule de la farine : des traces sont possibles.",
  "options végétarien, vegan et sans gluten sur demande. L'atelier travaille la farine, des traces restent possibles.",
  "végétarien, vegan ou sans gluten sur demande ; l'atelier manipule de la farine, des traces sont donc possibles.",
]

// Halal des nouvelles familles : « par défaut », sans certification revendiquée.
const HALAL_DEFAUT = [
  'tout est halal et sans porc par défaut, sans alcool et sans supplément.',
  'la carte est halal et sans porc par défaut, sans alcool, sans supplément de prix.',
  'sans porc ni alcool, sans supplément : tout est halal par défaut.',
]

const LIVRAISON = [
  'Paris et Île-de-France, dès 6h30. Forfait de 29 € HT à Paris et dans les communes proches, autres zones chiffrées au devis. Minimum de commande : 50 € HT.',
  'dès 6h30 à Paris et en Île-de-France. 29 € HT à Paris et communes proches, sur devis ailleurs. Commande minimum : 50 € HT.',
  "dès 6h30 sur Paris et l'Île-de-France, avec un forfait de 29 € HT à Paris et dans les communes proches (autres zones chiffrées au devis). Minimum de commande : 50 € HT.",
]

const HALAL = [
  'toute la carte est halal et sans porc, ce produit compris.',
  'ce produit est halal et sans porc, comme le reste de la carte.',
  'oui, et sans porc, comme toute la carte.',
]

const CTA = [
  { before: 'Une autre quantité, un régime à respecter ? ', link: 'Demandez un devis', after: ', réponse sous 24h.' },
  { before: 'Besoin d\'ajuster les quantités ? ', link: 'Demandez un devis', after: ', réponse sous 24h.' },
  { before: 'Effectif ou contrainte particulière ? Précisez-les dans votre ', link: 'demande de devis', after: ', réponse sous 24h.' },
]

const MORE = {
  pdj: { label: 'Voir tous les petits-déjeuners et pauses', href: '/creations/petits-dejeuners-et-pauses' },
  pause: { label: 'Voir toutes les pauses gourmandes', href: '/creations/pauses-gourmandes' },
  boisson: { label: 'Voir toutes les boissons', href: '/creations/boissons' },
  cocktail: { label: 'Voir tous les cocktails', href: '/creations/cocktails' },
  plateau: { label: 'Voir tous les plateaux repas', href: '/creations/plateaux-repas' },
  lunch: { label: 'Voir toutes les lunch box', href: '/creations/lunch-box' },
  aperitif: { label: 'Voir tous les plateaux apéritifs', href: '/creations/plateaux-aperitifs' },
  animation: { label: 'Voir toutes les animations culinaires', href: '/creations/animations-culinaires' },
}

const titreDe = (name) =>
  /mado|professionnel/i.test(name) || String(name).length > 50
    ? "Ce qu'il faut savoir avant de commander"
    : `${name} : ce qu'il faut savoir`

function logistique(kind, seed, { halal = true } = {}) {
  return [
    { label: 'Commande', text: pick(COMMANDE[kind], seed + 'c') },
    { label: 'Livraison', text: pick(LIVRAISON, seed + 'l') },
    halal && { label: 'Halal', text: pick(HALAL, seed + 'h') },
  ].filter(Boolean)
}

const sansDoublon = (items) => items.filter(Boolean)

// ── Produits (petits-déjeuners, boissons, pauses ayant la même fiche) ─────────

function lignesContenu(p, kind) {
  const out = []
  if (p.included?.length) {
    out.push({ label: 'Inclus', text: fin(p.included.map(minuscules).join(', ')) })
  }
  const d = String(p.description || '').trim()
  if (!d) return out
  const parts = d.split(/\s*·\s*/)
  const nomNorm = minuscules(p.name || '')

  // Boissons : la première partie est le volume (déjà dans le format).
  if (kind === 'boisson') {
    if (parts.length > 1) {
      // Le contenant et le nombre de tasses sont déjà dans la ligne « Format ».
      const t = minuscules(parts.slice(1).join(', '))
        .replace(/^(?:bouteille en verre|jarre),\s*/i, '')
        .replace(/,?\s*(?:environ\s+)?\d+\s*à\s*\d+\s*tasses/i, '')
        .trim()
      if (t && t !== 'jarre') out.push({ label: 'Produit', text: fin(t) })
    }
    return out
  }

  // Description réduite à un nombre de personnes (« 5 à 6 personnes ») : rien à ajouter.
  if (/^\d+\s*(?:à|\/|-)?\s*\d*\s*pers/i.test(parts[0])) return out
  // « 30 pièces · Croustillantes et dorées » : le format est déjà donné, le reste est de l'ambiance.
  if (/^\d+\s*pièces?$/i.test(parts[0])) return out

  // Composition chiffrée : « 8 mini croissants, 8 mini pains au chocolat ».
  if (/^\d/.test(parts[0])) {
    const txt = minuscules(parts.join(', '))
    // Description déjà contenue dans le nom du produit : redondant.
    if (nomNorm.includes(txt)) return out
    out.push({ label: 'Contenu', text: fin(txt) })
    return out
  }

  // Liste de parfums (macarons, cookies) : plusieurs éléments séparés par des
  // virgules, aucune phrase.
  if (!/[.!]/.test(d) && (d.match(/,/g) || []).length >= 2) {
    out.push({ label: 'Parfums', text: fin(minuscules(d)) })
  }
  return out
}

export function asavoirProduit(p, { kind = 'pdj', nom } = {}) {
  const name = nom || p.name
  const seed = p.id || name
  const items = []

  const pers = personnes(p)
  const qty = String(p.qty || '').trim()
  const qtyDonnee = qty && !/^à partager$/i.test(qty)
  const pieces = (qty.match(/^(\d+)\s*(?:pièces?|brochettes?|crêpes?)\b/i) || [])[1]
  const litres = (qty.match(/(\d+(?:[.,]\d+)?)\s*litres?\b/i) || [])[1]
  const tasses = (qty.match(/(\d+)\s*(?:à|-)\s*(\d+)\s*tasses/i) || []).slice(1).map(Number)

  // Format
  if (qtyDonnee) {
    let f = qty.replace(/(\d+)\s*\/\s*(\d+)\s*pers\.?/i, '$1 à $2 personnes').replace(/\s*·\s*/g, ', ')
    if (pers && !/personnes/i.test(f)) {
      f += pers.min === pers.max ? `, pour ${pers.min} personnes` : `, pour ${pers.min} à ${pers.max} personnes`
    }
    items.push({ label: 'Format', text: fin(f) })
  }

  // Prix
  if (typeof p.price === 'number' && p.price > 0) {
    const extras = []
    const n = pieces ? Number(pieces) : 0
    if (n > 1) extras.push(`environ ${eur(p.price / n)} € HT la pièce`)
    const l = litres ? parseFloat(litres.replace(',', '.')) : 0
    if (l > 1) extras.push(`${eur(p.price / l)} € HT le litre`)
    if (tasses.length === 2) {
      extras.push(`de ${eur(p.price / Math.max(...tasses))} à ${eur(p.price / Math.min(...tasses))} € HT la tasse`)
    }
    if (pers) {
      extras.push(
        pers.min === pers.max
          ? `${eur(p.price / pers.min)} € HT par personne`
          : `de ${eur(p.price / pers.max)} à ${eur(p.price / pers.min)} € HT par personne`,
      )
    }
    items.push({ label: 'Prix', text: fin(`${eur(p.price)} € HT${extras.length ? `, soit ${extras.join(' et ')}` : ''}`) })
  } else if (p.price === 0) {
    items.push({ label: 'Prix', text: 'sur devis.' })
  }

  // Contenu / inclus / parfums
  items.push(...lignesContenu(p, kind))

  // Régimes et allergènes, tels que déclarés dans les données
  if (p.dietary?.length) {
    items.push({ label: 'Mentions', text: fin(p.dietary.map((d) => d.toLowerCase()).join(', ')) })
  }
  if (p.allergens?.length) {
    items.push({ label: 'Allergènes déclarés', text: fin(p.allergens.map((a) => a.toLowerCase()).join(', ')) })
  }

  // Quantités à prévoir (arithmétique sur le nombre de personnes ou de tasses)
  const base = pers || (tasses.length === 2 ? { min: Math.min(...tasses), max: Math.max(...tasses) } : null)
  if (base) {
    const N = base.max <= 15 ? 20 : 50
    const bas = Math.ceil(N / base.max)
    const haut = Math.ceil(N / base.min)
    const plage = bas === haut ? `${bas}` : `${bas} à ${haut}`
    const nom2 = tasses.length === 2 && !pers ? 'thermos' : (haut > 1 ? 'formats' : 'format')
    items.push({
      label: `Pour ${N} personnes`,
      text: fin(`comptez ${plage} ${nom2}${nom2 === 'thermos' ? ', à une tasse chacune' : ''}`),
    })
  }

  // Pas de ligne « halal » sur l'eau en bouteille.
  items.push(...logistique(kind, seed, { halal: p.category !== 'eau' }))

  return {
    titre: titreDe(name),
    items: sansDoublon(items),
    cta: pick(CTA, seed + 'x'),
    more: MORE[kind],
  }
}

// ── Pauses gourmandes ───────────────────────────────────────────────────────

const euros = (s) => {
  const m = String(s || '').match(/(\d+),(\d{2})\s*€/)
  return m ? Number(`${m[1]}.${m[2]}`) : null
}

export function asavoirPause(pause) {
  const seed = pause.id

  // Coffrets à tailles multiples (madeleines)
  if (pause.coffrets?.length) {
    const formats = pause.coffrets
    const ref = PRODUCTS.find((x) => x.id === formats[0].id) || null
    const items = []
    items.push({
      label: 'Formats',
      text: fin(
        formats
          .map((f) => `${f.label} (${String(f.sub).replace(/pers\.?/i, 'personnes')}) à ${eur(f.price)} € HT`)
          .join(' ; '),
      ),
    })
    const unitaires = formats.filter((f) => f.pieces > 0).map((f) => f.price / f.pieces)
    if (unitaires.length) {
      const a = Math.min(...unitaires)
      const b = Math.max(...unitaires)
      items.push({
        label: 'À la pièce',
        text: fin(a.toFixed(2) === b.toFixed(2) ? `${eur(a)} € HT` : `de ${eur(a)} à ${eur(b)} € HT selon le format`),
      })
    }
    const pop = formats.find((f) => f.popular)
    if (pop) items.push({ label: 'Le plus choisi', text: fin(`le coffret de ${pop.label}`) })
    if (ref?.dietary?.length) items.push({ label: 'Mentions', text: fin(ref.dietary.map((d) => d.toLowerCase()).join(', ')) })
    if (ref?.allergens?.length) items.push({ label: 'Allergènes déclarés', text: fin(ref.allergens.map((a) => a.toLowerCase()).join(', ')) })
    items.push(...logistique('pause', seed))
    return { titre: titreDe(pause.nom), items, cta: pick(CTA, seed + 'x'), more: MORE.pause }
  }

  const prix = euros(pause.prix)
  const ref = PRODUCTS.find((x) => x.id === pause.id)
  // Même produit que dans les petits-déjeuners, même prix : on réutilise sa fiche de données.
  if (ref && prix != null && Math.abs(ref.price - prix) < 0.005) {
    return asavoirProduit(ref, { kind: 'pause', nom: pause.nom })
  }

  // Produit propre aux pauses : « 6 pièces, 17,90 € », « 5/6 pers, 13,90 € »…
  const qty = ((String(pause.prix || '').match(/^(?:dès\s+)?(.*?),\s*\d+,\d{2}\s*€\s*$/) || [])[1] || '').trim()
  const synth = {
    id: pause.id,
    name: pause.nom,
    qty: qty.replace(/(\d+)\s*[-/]\s*(\d+)\s*pers\.?/i, '$1 à $2 personnes'),
    price: prix ?? undefined,
    seoHtml: pause.seoHtml,
  }
  // Le nombre de pièces est parfois seulement dans le nom (« Coffret de 10 madeleines »).
  const dansNom = String(pause.nom).match(/\b(\d+)\s+madeleines\b/i)
  if (!/^\d/.test(synth.qty) && dansNom) synth.qty = `${dansNom[1]} pièces`
  // « 20 brochettes », « 20 crêpes » : le décompte reste lisible tel quel.
  return asavoirProduit(synth, { kind: 'pause', nom: pause.nom })
}

// ── Cocktails ───────────────────────────────────────────────────────────────

export function asavoirCocktail(f) {
  const seed = `cocktail-${f.key}`
  const nom = `Cocktail ${f.label}`
  const prix = Number(String(f.prix).replace(',', '.'))
  const items = []

  if (f.occasion) items.push({ label: 'Type', text: fin(`cocktail ${f.occasion.toLowerCase()}`) })

  const sale = f.sale?.length || 0
  const sucre = f.sucre?.length || 0
  if (f.pieces) {
    const detail = sale + sucre === f.pieces ? `, dont ${sale} salées et ${sucre} sucrées` : ''
    items.push({ label: 'Pièces', text: fin(`${f.pieces} par personne${detail}`) })
  }
  if (prix > 0) {
    items.push({
      label: 'Prix',
      text: fin(`${eur(prix)} € HT par personne${f.pieces ? `, soit environ ${eur(prix / f.pieces)} € HT la pièce` : ''}`),
    })
  }
  if (f.pieces) {
    items.push({ label: 'Pour 30 personnes', text: fin(`comptez ${30 * f.pieces} pièces`) })
  }
  items.push(...logistique('cocktail', seed))

  return { titre: titreDe(nom), items, cta: pick(CTA, seed + 'x'), more: MORE.cocktail }
}

// ── Plateaux repas, lunch box, plateaux apéritifs, animations ───────────────
//
// Mêmes principes : uniquement les champs présents dans les données de la fiche.
// Les prix par personne viennent des données ; le calcul « pour 20 personnes »
// n'est qu'une multiplication + le forfait de livraison de 29 € HT publié.

const num = (s) => {
  const n = Number(String(s ?? '').replace(',', '.'))
  return Number.isFinite(n) && n > 0 ? n : null
}
const euroRond = (n) => (Number.isInteger(n) ? String(n) : eur(n))
const sansEsperluette = (s) => String(s).replace(/\s*&\s*/g, ' et ')
const premiereMinuscule = (s) => {
  const t = String(s).trim()
  const mot = (t.match(/^[\p{L}'’-]+/u) || [''])[0]
  return PROPRES.has(mot) ? t : t.charAt(0).toLowerCase() + t.slice(1)
}
const liste = (items) => {
  const propres = items.map((x) => sansEsperluette(minuscules(x)))
  return propres.join(propres.some((x) => x.includes(',')) ? ' ; ' : ', ')
}

// « Au choix :\nA\nB » → { tete: '', options: ['a', 'b'] } ;
// « Poulet Mayonnaise, au choix :\nEn baguette\nEn pain viennois » → { tete: 'poulet mayonnaise', options: [...] }.
function decouperChoix(str) {
  const lignes = String(str || '').split('\n').map((l) => l.trim()).filter(Boolean)
  if (!lignes.length) return null
  const m = lignes[0].match(/^(.*?),?\s*au choix\s*:?\s*$/i)
  if (!m) return { tete: sansEsperluette(minuscules(lignes.join(', '))), options: [] }
  return {
    tete: m[1].trim() ? sansEsperluette(minuscules(m[1])) : '',
    options: lignes.slice(1).map((l) => sansEsperluette(minuscules(l))),
  }
}

function ligneChoix(label, str) {
  const c = decouperChoix(str)
  if (!c) return null
  if (!c.options.length) return c.tete ? { label, text: fin(c.tete) } : null
  const ou = c.options.join(' ou ')
  return c.tete
    ? { label, text: fin(`${c.tete}, ${ou}`) }
    : { label: `${label} au choix`, text: fin(ou) }
}

function lignesPrixParPersonne(prix, complement) {
  if (!prix) return []
  return [
    { label: 'Prix', text: fin(`${eur(prix)} € HT par personne${complement ? `, ${complement}` : ''}`) },
    {
      label: 'Pour 20 personnes',
      text: fin(`${euroRond(prix * 20)} € HT, plus 29 € HT de livraison à Paris et dans les communes proches`),
    },
  ]
}

export function asavoirPlateauRepas(p, { prix, collection } = {}) {
  const seed = p.id || p.nom
  const montant = num(prix)
  const items = []

  const col = collection ? ` de la collection ${collection}` : ''
  items.push({ label: 'Format', text: fin(`plateau individuel${col}, préparé le matin même : entrée, plat et dessert`) })
  items.push(...lignesPrixParPersonne(montant, 'entrée, plat et dessert compris'))

  const menu = [p.entree, p.plat, p.dessert].filter(Boolean)
  if (menu.length === 3) {
    items.push({
      label: 'Au menu',
      text: fin(`${liste([p.entree])} en entrée, ${liste([p.plat])} en plat, ${liste([p.dessert])} en dessert`),
    })
  }
  if (p.categorie === 'vegetarien') items.push({ label: 'Mentions', text: 'végétarien.' })

  items.push(...logistique('plateau', seed, { halal: false }))
  items.push({ label: 'Halal', text: pick(HALAL_DEFAUT, seed + 'h') })
  items.push({ label: 'Régimes', text: pick(REGIMES, seed + 'r') })

  return { titre: titreDe(p.nom), items, cta: pick(CTA, seed + 'x'), more: MORE.plateau }
}

export function asavoirLunchBox(b) {
  const seed = b.id || b.nom
  const items = []

  items.push({
    label: 'Format',
    text: 'box individuelle, préparée le matin même : un sandwich, une entrée et un dessert.',
  })
  items.push(...lignesPrixParPersonne(num(b.prix), 'sandwich, entrée et dessert compris'))

  for (const l of [
    ligneChoix('Sandwich', b.plat),
    ligneChoix('Entrée', b.entree),
    ligneChoix('Dessert', b.dessert),
    b.boisson ? ligneChoix('Boisson', b.boisson) : null,
  ]) if (l) items.push(l)

  const desc = String(b.description || '')
  if (/serviette/i.test(desc)) {
    items.push({
      label: 'Inclus',
      text: /boisson en option/i.test(desc) ? 'serviette et couverts. La boisson est en option.' : 'serviette et couverts.',
    })
  }
  if (b.categorie === 'vegetarien') items.push({ label: 'Mentions', text: 'végétarien.' })

  items.push(...logistique('plateau', seed, { halal: false }))
  items.push({ label: 'Halal', text: pick(HALAL_DEFAUT, seed + 'h') })
  items.push({ label: 'Régimes', text: pick(REGIMES, seed + 'r') })

  return { titre: titreDe(b.nom), items, cta: pick(CTA, seed + 'x'), more: MORE.lunch }
}

export function asavoirPlateauAperitif(p) {
  const seed = p.id || p.nom
  const items = []
  const desc = String(p.description || '').trim()

  items.push({ label: 'Format', text: 'plateau à partager, pour vos afterworks et réceptions.' })

  // Composition : la description sans la mention « · halal, sans porc » ni « Vegan et sans gluten »
  const compo = desc
    .split(/\s*·\s*/)[0]
    .replace(/\s*\.?\s*Vegan et sans gluten\.?$/i, '')
    .trim()
  if (compo) items.push({ label: 'Composition', text: fin(premiereMinuscule(sansEsperluette(compo))) })

  if (p.recettes?.length) items.push({ label: 'Recettes', text: fin(liste(p.recettes)) })

  if (/vegan et sans gluten/i.test(desc)) items.push({ label: 'Mentions', text: 'vegan et sans gluten.' })

  items.push({ label: 'Prix', text: "sur devis, le tarif dépend du format et de l'effectif." })

  items.push(...logistique('aperitif', seed, { halal: false }))
  items.push({ label: 'Halal', text: pick(HALAL_DEFAUT, seed + 'h') })
  items.push({ label: 'Régimes', text: pick(REGIMES, seed + 'r') })

  return { titre: titreDe(`Plateau ${p.nom}`), items, cta: pick(CTA, seed + 'x'), more: MORE.aperitif }
}

// Animations : aucun prix dans les données de la fiche (prestation sur devis),
// donc aucun montant n'est écrit ici. Le plancher de 600 € HT n'est pas publié
// dans les données du site.
const ANIM_SANS_HALAL = new Set(['b1', 'b2', 'b3', 'ba3', 'do5']) // cafés, jus, eaux ; guimauves (fontaine)

export function asavoirAnimation(a) {
  const seed = a.id || a.nom
  const items = []

  items.push({
    label: 'Format',
    text: "animation live, préparée devant vos invités, dans vos locaux ou sur votre lieu d'événement, à Paris et en Île-de-France.",
  })
  // Location de machine : la liste mêle capsules et consommables, ce n'est pas un choix.
  if (a.compo?.length) items.push({ label: a.id === 'b2' ? 'Composition' : 'Au choix', text: fin(liste(a.compo)) })

  items.push({
    label: 'Prix',
    text: "sur devis, selon la date, le lieu, le nombre d'invités, la durée et les contraintes techniques (accès, électricité, espace).",
  })
  items.push({ label: 'Installation', text: 'installation et démontage compris dans la prestation.' })
  items.push({
    label: 'Devis',
    text: 'réponse sous 24h avec une proposition détaillée. Facturation entreprise avec TVA.',
  })

  if (!ANIM_SANS_HALAL.has(a.id)) items.push({ label: 'Halal', text: pick(HALAL_DEFAUT, seed + 'h') })
  items.push({ label: 'Régimes', text: pick(REGIMES, seed + 'r') })

  return { titre: titreDe(a.nom), items, cta: pick(CTA, seed + 'x'), more: MORE.animation }
}
