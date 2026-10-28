/*
  Règles de délai de la commande en ligne (29/10/2026).

  Deux horloges, décidées par Ramy :
  - petit-déjeuner, goûter, pause, boissons : commande jusqu'à la VEILLE 10h ;
  - cocktails, plateaux repas, buffets      : 48 heures à l'avance.
  La plus stricte gagne : un panier mixte passe entièrement à 48 h, parce
  qu'une commande ne se livre pas en deux fois.

  Livraison du lundi au vendredi (ce que le site annonce partout).

  ATTENTION AU FUSEAU. Le site se construit sur Vercel en UTC : une date
  calculée au build serait figée et fausse d'une heure ou d'un jour. Tout ce
  fichier raisonne en heure de Paris et doit être appelé à l'exécution,
  jamais pendant le build. C'est exactement le piège qui avait laissé les
  boutons Octobre Rose en rose un jour de trop.
*/

export const LIMITE_VEILLE_H = 10          // la veille, 10h00
export const PREAVIS_48H_JOURS = 2         // cocktails, plateaux repas, buffets

/*
  Le créneau. Arbitrage de Ramy du 29/10/2026 : la livraison s'annonce dans un
  créneau de 30 minutes. Le client qui veut une heure fixe, à la minute, paie
  un supplément ; celui qui accepte un créneau plus large nous aide et ne paie
  rien de plus. La charte de service du site annonce déjà « tolérance de
  30 minutes sur le créneau convenu » (lib/journalService.js) : les deux textes
  se tiennent, rien à réécrire sur le site.
*/
export const SUPPLEMENT_HEURE_FIXE = 15    // € HT
export const LARGEURS = [
  { id: 'souple', minutes: 60, label: 'Créneau d\'une heure', prix: 0 },
  { id: 'standard', minutes: 30, label: 'Créneau de 30 minutes', prix: 0 },
  { id: 'fixe', minutes: 0, label: 'Heure fixe', prix: SUPPLEMENT_HEURE_FIXE },
]
export const LARGEUR_DEFAUT = 'standard'
export const largeurDe = (id) => LARGEURS.find(l => l.id === id) || LARGEURS[1]

/* Familles qui demandent 48 h. La ligne de panier porte sa famille. */
export const FAMILLES_48H = new Set([
  'cocktail',
  'plateaux-repas',
  'buffet',
  'a-partager',
  'plateaux-aperitifs',
])

const MS_JOUR = 86400000

/* ---------------------------------------------------------------- Paris */

/* Les composants de date à Paris, quel que soit le fuseau du serveur. */
export function aParis(d = new Date()) {
  const p = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(d).reduce((o, x) => (o[x.type] = x.value, o), {})
  return {
    annee: +p.year, mois: +p.month, jour: +p.day,
    heure: +p.hour % 24, minute: +p.minute,
    iso: `${p.year}-${p.month}-${p.day}`,
  }
}

/* Une date « nue » (AAAA-MM-JJ) manipulable sans dérive de fuseau. */
const nue = (iso) => { const [a, m, j] = iso.split('-').map(Number); return Date.UTC(a, m - 1, j) }
export const isoDe = (ms) => new Date(ms).toISOString().slice(0, 10)
const jourSemaine = (iso) => new Date(nue(iso)).getUTCDay()   // 0 dimanche … 6 samedi

/*
  Jours fériés français, calculés (Pâques par l'algorithme de Butcher) plutôt
  que listés : une liste en dur se périme et personne ne s'en aperçoit avant
  qu'une commande soit acceptée pour le 1er mai.
*/
function paques(annee) {
  const a = annee % 19, b = Math.floor(annee / 100), c = annee % 100
  const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4), k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const mois = Math.floor((h + l - 7 * m + 114) / 31)
  const jour = ((h + l - 7 * m + 114) % 31) + 1
  return Date.UTC(annee, mois - 1, jour)
}
const cache = new Map()
export function joursFeries(annee) {
  if (cache.has(annee)) return cache.get(annee)
  const p = paques(annee)
  const set = new Set([
    `${annee}-01-01`, `${annee}-05-01`, `${annee}-05-08`, `${annee}-07-14`,
    `${annee}-08-15`, `${annee}-11-01`, `${annee}-11-11`, `${annee}-12-25`,
    isoDe(p + MS_JOUR),          // lundi de Pâques
    isoDe(p + 39 * MS_JOUR),     // Ascension
    isoDe(p + 50 * MS_JOUR),     // lundi de Pentecôte
  ])
  cache.set(annee, set)
  return set
}
export const estFerie = (iso) => joursFeries(+iso.slice(0, 4)).has(iso)

/* Jour livrable : lundi à vendredi, hors jours fériés. */
export const estOuvre = (iso) => {
  const j = jourSemaine(iso)
  return j >= 1 && j <= 5 && !estFerie(iso)
}

/* Avance de n jours ouvrés à partir d'une date (la date elle-même exclue). */
function plusJoursOuvres(iso, n) {
  let ms = nue(iso), reste = n
  while (reste > 0) { ms += MS_JOUR; if (estOuvre(isoDe(ms))) reste-- }
  return isoDe(ms)
}

/* ---------------------------------------------------------------- règles */

/* 'preavis' si une seule ligne demande 48 h, 'veille' sinon. */
export function regimeDuPanier(lignes = []) {
  return lignes.some(l => FAMILLES_48H.has(l?.famille)) ? 'preavis' : 'veille'
}

/*
  Première date livrable, en heure de Paris.
  - régime « veille » : demain si l'on commande avant 10h, après-demain sinon ;
  - régime « préavis » : J+2 jours ouvrés.
  Dans les deux cas on retombe sur le prochain jour ouvré.
*/
export function premiereDateLivrable(lignes = [], maintenant = new Date()) {
  const p = aParis(maintenant)
  if (regimeDuPanier(lignes) === 'preavis') {
    return plusJoursOuvres(p.iso, PREAVIS_48H_JOURS)
  }
  let ms = nue(p.iso) + MS_JOUR                       // demain
  if (p.heure >= LIMITE_VEILLE_H) ms += MS_JOUR       // trop tard pour demain
  let iso = isoDe(ms)
  while (!estOuvre(iso)) { ms += MS_JOUR; iso = isoDe(ms) }
  return iso
}

export function estLivrable(iso, lignes = [], maintenant = new Date()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso || '')) return false
  return estOuvre(iso) && nue(iso) >= nue(premiereDateLivrable(lignes, maintenant))
}

/*
  La phrase qui s'affiche sous le calendrier. Elle ne paraît que si une date
  a été fermée, et elle dit LAQUELLE des deux règles a joué : sans ça, le
  client croit à un bug et il appelle.
*/
export function raisonFermeture(lignes = [], maintenant = new Date()) {
  const premiere = premiereDateLivrable(lignes, maintenant)
  const p = aParis(maintenant)
  if (regimeDuPanier(lignes) === 'preavis') {
    return {
      regle: '48h',
      texte: 'Vos cocktails, plateaux repas et buffets demandent 48 heures de préparation.',
      premiere,
    }
  }
  if (p.heure >= LIMITE_VEILLE_H) {
    return {
      regle: 'veille',
      texte: `Il est passé ${LIMITE_VEILLE_H}h : la commande pour demain est close.`,
      premiere,
    }
  }
  return { regle: null, texte: null, premiere }
}

/* Limite de modification : la veille à 10h de la date retenue. */
export function limiteModification(iso) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso || '')) return null
  let ms = nue(iso) - MS_JOUR
  while (!estOuvre(isoDe(ms))) ms -= MS_JOUR
  return { date: isoDe(ms), heure: LIMITE_VEILLE_H }
}

/*
  Les heures proposées. La tournée du matin part tôt (le site annonce « dès
  6h30 » partout) ; l'après-midi sert les goûters et les pauses.

  À FAIRE CONFIRMER PAR RAMY : l'amplitude de l'après-midi. Le site ne promet
  des créneaux que de 6h30 à 10h ; 14h-17h est déduit des goûters livrés, pas
  d'un texte publié.
*/
function serie(debutH, debutM, finH, finM) {
  const out = []
  for (let t = debutH * 60 + debutM; t <= finH * 60 + finM; t += 30) {
    out.push(`${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`)
  }
  return out
}
export const CRENEAUX = [
  { id: 'matin', label: 'Matin', heures: serie(6, 30, 11, 0) },
  { id: 'apres-midi', label: 'Après-midi', heures: serie(14, 0, 17, 0) },
]
export const TOUTES_HEURES = CRENEAUX.flatMap(c => c.heures)

/* « 8h30 », « 8h30 – 9h00 », « 8h30 précises » selon la largeur choisie. */
export function libelleCreneau(heure, largeurId = LARGEUR_DEFAUT) {
  if (!heure) return ''
  const fr = (h) => h.replace(':', 'h')
  const l = largeurDe(largeurId)
  if (l.minutes === 0) return `${fr(heure)} précises`
  const [h, m] = heure.split(':').map(Number)
  const t = h * 60 + m + l.minutes
  const fin = `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`
  return `${fr(heure)} – ${fr(fin)}`
}
