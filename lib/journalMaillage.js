// Maillage interne du journal : 6 liens « À lire aussi » par article (28/10/2026).
//
// Pourquoi : les 3 liens historiques (grappes de lib/guidesMaillage.js + même catégorie) retombent toujours sur
// les mêmes guides vitrine ; 121 articles sur 197 recevaient moins de 5 liens entrants (mesure du 28/10/2026).
// Ici : 3 liens historiques inchangés, puis 3 liens vers des articles proches par le sujet (mots rares du titre
// et de l'adresse, pondérés par leur rareté), attribués d'abord aux articles les moins liés : chacun reçoit des
// liens de ses voisins les plus proches jusqu'à 5 liens entrants, puis les places restantes vont aux plus proches.
// Aucun lien sans mot commun significatif : mieux vaut un lien de moins qu'un lien hors sujet.
// Le plan est calculé une fois pour tout le journal (même résultat à chaque rendu).

import { grappesCommunes, estGuide } from './guidesMaillage'

const normaliser = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

// Mots trop fréquents ou sans sujet : ignorés même s'ils sont longs.
const VIDES = new Set([
  'entreprise', 'entreprises', 'paris', 'traiteur', 'bureau', 'bureaux', 'france', 'guide', 'comment', 'combien',
  'quel', 'quels', 'quelle', 'quelles', 'pour', 'avec', 'dans', 'sans', 'plus', 'tout', 'tous', 'votre', 'vos',
  'cette', 'sont', 'leur', 'leurs', 'faire', 'avant', 'apres', 'idees', 'quoi', 'prix',
])

const mots = (a) => new Set(
  normaliser(`${a.slug.replace(/-/g, ' ')} ${a.titre || ''}`)
    .split(/[^a-z0-9]+/)
    .filter((m) => m.length >= 4 && !VIDES.has(m) && !/^\d+$/.test(m)),
)

const tirage = (a, b) => {
  let h = 5381
  const s = `${a}|${b}`
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0
  return h / 4294967296
}

const liensDuTexte = (a) => new Set([...(a.contenu || '').matchAll(/href="\/journal\/([a-z0-9-]+)"/g)].map((x) => x[1]))

// Les 3 liens historiques : grappes thématiques d'abord, puis même catégorie, guides vitrine en tête à poids égal.
export function liensHistoriques(article, articles) {
  const score = (a) => grappesCommunes(article.slug, a.slug) * 2 + (a.categorie === article.categorie ? 1 : 0) + (estGuide(a.slug) ? 1.5 : 0)
  return [...articles]
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => score(b) - score(a))
    .slice(0, 3)
}

const OBJECTIF = 5 // liens entrants visés pour chaque article
const SEUIL_CIBLE = 2.2 // proximité minimale pour un lien attribué à un article peu lié
const SEUIL_RESTE = 2 // proximité minimale pour les places restantes

let plan = null
function calculer(articles) {
  const bySlug = new Map(articles.map((a) => [a.slug, a]))
  const m = new Map()
  const df = new Map()
  for (const a of articles) {
    const w = mots(a)
    m.set(a.slug, w)
    for (const x of w) df.set(x, (df.get(x) || 0) + 1)
  }
  const N = articles.length
  const idf = (x) => Math.log(N / (df.get(x) || 1))
  const sim = (a, b) => {
    let s = 0
    const mb = m.get(b)
    for (const x of m.get(a)) if (mb.has(x)) s += idf(x)
    return s
  }

  // Liens déjà présents : dans les textes et dans les 3 liens historiques.
  const deja = new Map() // source -> Set(cibles)
  const recu = new Map() // cible -> nombre de liens entrants
  const noter = (src, cible) => {
    if (!deja.has(src)) deja.set(src, new Set())
    if (deja.get(src).has(cible) || src === cible) return false
    deja.get(src).add(cible)
    recu.set(cible, (recu.get(cible) || 0) + 1)
    return true
  }
  for (const a of articles) {
    for (const c of liensDuTexte(a)) if (bySlug.has(c)) noter(a.slug, c)
    for (const h of liensHistoriques(a, articles)) noter(a.slug, h.slug)
  }

  const extra = new Map(articles.map((a) => [a.slug, []]))
  const place = (src) => extra.get(src).length < 3

  // 1. Les articles peu liés reçoivent des liens de leurs voisins les plus proches.
  for (let tour = 0; tour < OBJECTIF; tour++) {
    const cibles = articles.map((a) => a.slug).filter((s) => (recu.get(s) || 0) < OBJECTIF).sort((x, y) => (recu.get(x) || 0) - (recu.get(y) || 0))
    let progres = false
    for (const cible of cibles) {
      if ((recu.get(cible) || 0) >= OBJECTIF) continue
      const source = articles
        .filter((a) => a.slug !== cible && place(a.slug) && !(deja.get(a.slug) || new Set()).has(cible))
        .map((a) => ({ a, s: sim(a.slug, cible) }))
        .filter((x) => x.s >= SEUIL_CIBLE)
        .sort((x, y) => (y.s + tirage(y.a.slug, cible) * 1.2) - (x.s + tirage(x.a.slug, cible) * 1.2))[0]
      if (!source) continue
      noter(source.a.slug, cible)
      extra.get(source.a.slug).push(cible)
      progres = true
    }
    if (!progres) break
  }

  // 2. Les places restantes : les articles les plus proches, en préférant ceux qui ont le moins de liens.
  for (const a of articles) {
    if (!place(a.slug)) continue
    const candidats = articles
      .filter((b) => b.slug !== a.slug && !deja.get(a.slug).has(b.slug))
      .map((b) => ({ b, s: sim(a.slug, b.slug) }))
      .filter((x) => x.s >= SEUIL_RESTE)
      .sort((x, y) => (y.s - (recu.get(y.b.slug) || 0) * 0.15 + tirage(a.slug, y.b.slug)) - (x.s - (recu.get(x.b.slug) || 0) * 0.15 + tirage(a.slug, x.b.slug)))
    for (const x of candidats) {
      if (!place(a.slug)) break
      noter(a.slug, x.b.slug)
      extra.get(a.slug).push(x.b.slug)
    }
  }
  return { n: N, extra, bySlug }
}

// Jusqu'à trois articles proches par le sujet à ajouter aux liens historiques de `article`.
export function articlesProches(article, articles) {
  if (!plan || plan.n !== articles.length) plan = calculer(articles)
  return (plan.extra.get(article.slug) || []).map((s) => plan.bySlug.get(s)).filter(Boolean)
}
