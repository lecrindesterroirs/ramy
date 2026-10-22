/*
  Calendrier des événements saisonniers : la prochaine date de chaque
  événement, calculée, jamais écrite à la main.

  Une règle par événement (champ `date` de evenementsIndex.js) :
  - { type: 'fixe', mois, jour }                    Halloween, Chandeleur…
  - { type: 'epiphanie' }                           dimanche entre le 2 et le 8 janvier
  - { type: 'paques' }                              dimanche de Pâques (algorithme de Meeus)
  - { type: 'nieme', mois, jourSemaine, rang }      Thanksgiving : 4e jeudi de novembre
  - { type: 'periode', debut: 'MM-JJ', fin: 'MM-JJ' }  Movember, Octobre Rose, rentrée…
  - { type: 'table', dates: { 2027: ['AAAA-MM-JJ', 'AAAA-MM-JJ'?] }, approx }
                                                    fêtes lunaires : dates publiées, année par année

  Fichier sans texte d'article ni donnée lourde : importable partout.
  Toutes les dates sont en UTC (minuit), pour qu'un build à Paris ou sur
  Vercel donne le même jour.
*/

const D = (y, m, d) => new Date(Date.UTC(y, m - 1, d))
const iso = (s) => { const [y, m, d] = s.split('-').map(Number); return D(y, m, d) }
const plusJours = (date, n) => new Date(date.getTime() + n * 86400000)

/* Dimanche de Pâques, algorithme de Meeus (calendrier grégorien). */
function paques(y) {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100
  const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const mois = Math.floor((h + l - 7 * m + 114) / 31)
  const jour = ((h + l - 7 * m + 114) % 31) + 1
  return D(y, mois, jour)
}

/* Début et fin de l'événement pour l'année y, ou null si la table n'a pas l'année. */
function datesPour(regle, y) {
  switch (regle.type) {
    case 'fixe': { const d = D(y, regle.mois, regle.jour); return { debut: d, fin: d, jour: true } }
    case 'epiphanie': {
      const d2 = D(y, 1, 2)
      const d = plusJours(d2, (7 - d2.getUTCDay()) % 7)
      return { debut: d, fin: d, jour: true }
    }
    case 'paques': { const d = paques(y); return { debut: d, fin: d, jour: true } }
    case 'nieme': {
      const premier = D(y, regle.mois, 1)
      const decalage = (regle.jourSemaine - premier.getUTCDay() + 7) % 7
      const d = plusJours(premier, decalage + 7 * (regle.rang - 1))
      return { debut: d, fin: d, jour: true }
    }
    case 'periode': {
      const [m1, j1] = regle.debut.split('-').map(Number)
      const [m2, j2] = regle.fin.split('-').map(Number)
      return { debut: D(y, m1, j1), fin: D(y, m2, j2), jour: false }
    }
    case 'table': {
      const t = regle.dates[y]
      if (!t) return null
      const debut = iso(t[0])
      const fin = t[1] ? iso(t[1]) : debut
      return { debut, fin, jour: !t[1] }
    }
    default: return null
  }
}

/* Aujourd'hui à minuit UTC. */
export function aujourdhui(d = new Date()) {
  return D(d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate())
}

/*
  Prochaine occurrence : la première dont la fin n'est pas passée.
  Renvoie { debut, fin, jour, annee, approx } ou null.
*/
export function prochaineOccurrence(regle, auj = aujourdhui()) {
  if (!regle) return null
  const y0 = auj.getUTCFullYear()
  for (const y of [y0, y0 + 1, y0 + 2]) {
    let r = datesPour(regle, y)
    // `duree` : un jour qui se fête encore les jours suivants (la galette, tout janvier).
    if (r && regle.duree) r = { ...r, fin: plusJours(r.debut, regle.duree) }
    if (r && r.fin >= auj) return { ...r, annee: y, approx: !!regle.approx, sansConseil: !!regle.sansConseil }
  }
  return null
}

/*
  Jour ouvré conseillé pour un événement d'un jour : un samedi ou un dimanche
  se fête le vendredi qui précède. Un jour de semaine reste ce jour-là.
*/
export function jourConseille(date) {
  const j = date.getUTCDay()
  if (j === 6) return plusJours(date, -1)
  if (j === 0) return plusJours(date, -2)
  return date
}

const FMT = {
  fr: new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }),
  frSansAn: new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }),
  frCourt: new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', timeZone: 'UTC' }),
  frMois: new Intl.DateTimeFormat('fr-FR', { month: 'long', timeZone: 'UTC' }),
  en: new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }),
  enSansAn: new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }),
  enCourt: new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', timeZone: 'UTC' }),
  enMois: new Intl.DateTimeFormat('en-GB', { month: 'long', timeZone: 'UTC' }),
}

/* « samedi 31 octobre 2026 » / « Saturday 31 October 2026 » (1er pour le premier du mois). */
export function dateLongue(date, lang = 'fr', avecAnnee = true) {
  const s = FMT[(lang === 'en' ? 'en' : 'fr') + (avecAnnee ? '' : 'SansAn')].format(date)
  return lang === 'en' ? s.replace(',', '') : s.replace(/ 1 /, ' 1er ')
}
export const dateCourte = (date, lang = 'fr') => {
  const s = FMT[lang === 'en' ? 'enCourt' : 'frCourt'].format(date)
  return lang === 'en' ? s : s.replace(/^1 /, '1er ')
}
export const moisDe = (date, lang = 'fr') => FMT[lang === 'en' ? 'enMois' : 'frMois'].format(date)

/*
  Libellé de la prochaine édition, pour le héros, le calendrier et le texte.
  - un jour : « samedi 31 octobre 2026 »
  - une période : « du 1er au 30 novembre 2026 », sauf libellé propre à
    l'événement (`regle.libelle`, fonction (occ, lang) => texte)
  - une date lunaire approchée : « vers le lundi 8 février 2027 »
*/
export function libelleOccurrence(occ, regle, lang = 'fr') {
  if (!occ) return ''
  if (regle?.libelle) return regle.libelle(occ, lang)
  const en = lang === 'en'
  if (occ.jour) {
    const d = dateLongue(occ.debut, lang)
    return occ.approx ? (en ? `around ${d}` : `vers le ${d}`) : d
  }
  const memeMois = occ.debut.getUTCMonth() === occ.fin.getUTCMonth()
  const a = occ.fin.getUTCFullYear()
  if (en) {
    const fin = `${dateCourte(occ.fin, 'en')} ${a}`
    return `${occ.approx ? 'around ' : ''}${memeMois ? occ.debut.getUTCDate() : dateCourte(occ.debut, 'en')} to ${fin}`
  }
  const debut = memeMois ? (occ.debut.getUTCDate() === 1 ? '1er' : String(occ.debut.getUTCDate())) : dateCourte(occ.debut, 'fr')
  return `${occ.approx ? 'environ ' : ''}du ${debut} au ${dateCourte(occ.fin, 'fr')} ${a}`
}

/*
  Jour conseillé, en toutes lettres, pour un événement d'un jour qui tombe un
  week-end : « vendredi 30 octobre ». Null si le jour est ouvré ou si
  l'événement dure plusieurs jours.
*/
export function conseilOccurrence(occ, lang = 'fr') {
  if (!occ || !occ.jour || occ.sansConseil) return null
  const c = jourConseille(occ.debut)
  if (c.getTime() === occ.debut.getTime()) return null
  return dateLongue(c, lang, false)
}

/* Trie des événements (avec leur règle `date`) par prochaine édition. */
export function trierParProchaine(liste, auj = aujourdhui()) {
  return liste
    .map(ev => ({ ev, occ: prochaineOccurrence(ev.date, auj) }))
    .sort((a, b) => (a.occ?.debut ?? Infinity) - (b.occ?.debut ?? Infinity))
}
