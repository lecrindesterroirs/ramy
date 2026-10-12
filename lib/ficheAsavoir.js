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
  'Chardonnay', 'Paris', 'Charentes-Poitou',
])
const minuscules = (s) =>
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
function personnes(p) {
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
}

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
}

const titreDe = (name) =>
  /mado/i.test(name) ? "Ce qu'il faut savoir avant de commander" : `${name} : ce qu'il faut savoir`

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
