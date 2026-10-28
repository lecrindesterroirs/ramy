/*
  Encadré « En pratique » et questions fréquentes des fiches animations, et blocs
  du bas de la page catalogue (créé le 29/10/2026, chantier GEO).

  Rien n'est écrit à la main fiche par fiche : tout est calculé depuis
  app/creations/animations-culinaires/data.js (nom, univers, compo, article),
  lib/en/produits/animations.js (textes anglais) et lib/prixEntree.js (plancher).
  Seule table tenue à la main : le moment conseillé par univers (MOMENTS).

  Faits utilisés, et seulement eux : prix dès ANIMATION_DES (sauf b2 et ba3, sur
  devis) ; coût minimum par personne = plancher ÷ effectif ; recommandé à partir
  de 20 invités ; réserver au moins une semaine avant ; devis sous 24 h,
  facturation entreprise avec TVA ; installation et démontage compris (b2 :
  livraison, installation et reprise de la machine) ; intervenant sur place
  (sauf b2 et ba3) ; accès électrique pour la liste ELEC ; halal, sans porc,
  sans alcool ; ce qui est servi = compo ; Paris et Île-de-France.
  Jamais de durée, de nombre de portions, d'intervenants ni de poids.

  Module léger (pas de journal, pas de catalogue entier) : importable par les
  fiches, qui sont des composants client.
*/
import { ANIMATIONS, UNIVERS_LABEL, slugAnim, prixDesAnimation } from '../app/creations/animations-culinaires/data'
import { enAnimation, UNIVERS_EN } from './en/produits/animations'
import { ANIMATION_DES, euroFr, euroEn } from './prixEntree'
import { ANIM_SANS_HALAL } from './animationsRegles'

export const INVITES_MIN = 20
const EFFECTIFS_FICHE = [20, 50, 100]
export const EFFECTIFS_CATALOGUE = [20, 30, 50, 100]

/* Ateliers qui demandent un accès électrique (liste arrêtée le 29/10/2026). */
const ELEC = new Set(['b6', 'b7', 'b5', 'd1', 's3', 's6', 's9', 'b1', 'do5', 'do6', 'do7'])
/* Sans personne sur place : location de machine, eaux infusées. */
const SANS_INTERVENANT = new Set(['b2', 'ba3'])
const LOCATION = 'b2'

/* Occasions, et moment conseillé par univers (seule table écrite à la main). */
const OCCASIONS = {
  accueil:     ["Petit-déjeuner d'accueil", 'Welcome breakfast'],
  seminaire:   ['Séminaire', 'Offsite or seminar'],
  integration: ["Matinée d'intégration", 'Induction morning'],
  dejeuner:    ["Déjeuner d'équipe", 'Team lunch'],
  cocktailDej: ['Cocktail déjeunatoire', 'Lunchtime reception'],
  inauguration:['Inauguration', 'Opening or launch'],
  afterwork:   ['Afterwork', 'Afterwork'],
  soiree:      ["Soirée d'équipe", 'Team evening'],
  fete:        ['Fête des collaborateurs', 'Staff party'],
  pause:       ["Pause de l'après-midi", 'Afternoon break'],
  qvt:         ['Semaine QVT', 'Wellbeing week'],
  noel:        ['Arbre de Noël', "Children's Christmas party"],
  cocktail:    ['Cocktail', 'Cocktail reception'],
  sansAlcool:  ['Soirée sans alcool', 'Alcohol-free evening'],
}
const MOMENTS = {
  brunch:     ['accueil', 'seminaire', 'integration'],
  dejeuner:   ['dejeuner', 'cocktailDej', 'inauguration'],
  streetfood: ['afterwork', 'soiree', 'fete'],
  douceurs:   ['pause', 'qvt', 'noel', 'fete'],
  bars:       ['afterwork', 'cocktail', 'sansAlcool'],
}

export const GUIDE = {
  fr: { href: '/journal/idees-animation-entreprise', label: "Idées d'animation en entreprise : laquelle choisir" },
  en: { href: '/en/journal/idees-animation-entreprise', label: 'Corporate event activity ideas: which one to choose' },
}

const occ = (k, en) => OCCASIONS[k][en ? 1 : 0]
const ht = (x, en) => (en ? `${euroEn(x)} excl. VAT` : `${euroFr(x)} HT`)
const parPers = (n) => Math.round((ANIMATION_DES / n) * 100) / 100
const minuscule = (s) => s.charAt(0).toLowerCase() + s.slice(1)
const maj = (s) => s.charAt(0).toUpperCase() + s.slice(1)
const liste = (arr, en) => (arr.length < 2 ? arr.join('') : `${arr.slice(0, -1).join(', ')} ${en ? 'and' : 'et'} ${arr[arr.length - 1]}`)
const momentsDe = (a, en) => (MOMENTS[a.univers] || []).map(k => occ(k, en))

/* Ce que la fiche montre côté végétarien : les lignes de la compo qui le disent
   (steak végétal, falafel). Sinon rien. */
function vegetarien(a, en) {
  const t = en ? enAnimation(a.id) : a
  const compo = (t?.compo || []).filter(x => (en ? /vegetarian|plant|veggie|falafel/i : /végétal|végétarien|falafel/i).test(x))
  // Il faut une ligne de la compo à citer (l'article seul ne suffit pas) : sinon, pas de question.
  return compo.length ? compo.map(x => minuscule(x)) : null
}

/* « l'animation « Atelier Mini Burgers » », « la location de machine expresso… ». */
function sujet(a, en) {
  const nom = en ? enAnimation(a.id)?.nom || a.nom : a.nom
  if (a.id === LOCATION) return en ? `the ${nom.toLowerCase()}` : `la ${nom.toLowerCase()}`
  if (SANS_INTERVENANT.has(a.id)) return en ? `the “${nom}” service` : `la prestation « ${nom} »`
  // « Mini Burger Station » porte déjà le mot : pas de « the “Mini Burger Station” station ».
  return en ? (/station|bar\b|barista|fountain/i.test(nom) ? `the “${nom}”` : `the “${nom}” station`) : `l'animation « ${nom} »`
}

/* ───────────────────────── Fiche (FR et EN) ───────────────────────── */

export function pratiqueAnimation(a, lang = 'fr') {
  const en = lang === 'en'
  if (!a) return null
  const t = en ? enAnimation(a.id) : a
  if (!t) return null
  const des = prixDesAnimation(a)
  const s = sujet(a, en)
  const S = maj(s)
  const location = a.id === LOCATION
  const sansPersonne = SANS_INTERVENANT.has(a.id)
  const elec = ELEC.has(a.id)
  const halal = !ANIM_SANS_HALAL.has(a.id)
  const compo = t.compo || []
  const veg = vegetarien(a, en)
  const moments = momentsDe(a, en)
  const minis = EFFECTIFS_FICHE.map(n => [n, parPers(n)])

  // ── Encadré ──
  const items = []
  if (en) {
    items.push({ label: 'Price', text: des ? `from ${ht(des, true)} per station, set-up and clear-down included.` : (location ? 'on quote; delivery, installation and collection of the machine included.' : 'on quote, set-up and clear-down included.') })
    if (des) items.push({ label: 'Per person', text: `at least ${ht(minis[0][1], true)} for ${minis[0][0]} guests, ${ht(minis[1][1], true)} for ${minis[1][0]}, ${ht(minis[2][1], true)} for ${minis[2][0]}.` })
    items.push({ label: 'Guests', text: `recommended from ${INVITES_MIN} guests.` })
    if (moments.length) items.push({ label: 'Best for', text: `${liste(moments.map(minuscule), true)}.` })
    items.push({ label: 'On site', text: sansPersonne ? `no staff on site.${elec ? ' Allow a power socket and some space.' : ' Allow some space.'}` : `a member of our team prepares in front of your guests. ${elec ? 'Allow a power socket and some space.' : 'Allow some space for the station.'}` })
    items.push({ label: 'Booking', text: 'at least one week ahead; quote within 24 hours, company invoice showing VAT.' })
    if (halal) items.push({ label: 'Halal', text: 'everything is halal and pork-free, with no alcohol.' })
    items.push({ label: 'Area', text: 'Paris and Île-de-France.' })
  } else {
    items.push({ label: 'Prix', text: des ? `dès ${ht(des)} par animation, installation et démontage compris.` : (location ? 'sur devis ; livraison, installation et reprise de la machine comprises.' : 'sur devis, installation et démontage compris.') })
    if (des) items.push({ label: 'Par personne', text: `au minimum ${ht(minis[0][1])} pour ${minis[0][0]} invités, ${ht(minis[1][1])} pour ${minis[1][0]}, ${ht(minis[2][1])} pour ${minis[2][0]}.` })
    items.push({ label: 'Invités', text: `recommandé à partir de ${INVITES_MIN} invités.` })
    if (moments.length) items.push({ label: 'Moment conseillé', text: `${liste(moments.map(minuscule))}.` })
    items.push({ label: 'Sur place', text: sansPersonne ? `personne sur place.${elec ? ' Prévoyez un accès électrique et un espace.' : ' Prévoyez un espace.'}` : `un intervenant prépare devant vos invités. ${elec ? 'Prévoyez un accès électrique et un espace.' : "Prévoyez un espace pour l'installer."}` })
    items.push({ label: 'Réservation', text: 'au moins une semaine à l\'avance ; devis sous 24 h, facturation entreprise avec TVA.' })
    if (halal) items.push({ label: 'Halal', text: 'tout est halal et sans porc, sans alcool.' })
    items.push({ label: 'Zone', text: 'Paris et Île-de-France.' })
  }

  // ── Questions fréquentes ──
  const faq = []
  if (en) {
    faq.push({
      q: `How much does ${s} cost for a company event?`,
      a: des
        ? `At L'Écrin Traiteur, ${s} costs from ${ht(des, true)}, set-up and clear-down included. For ${minis[1][0]} guests that is at least ${ht(minis[1][1], true)} per person. The exact price comes with the quote, within 24 hours.`
        : `${S} is priced on quote, with no published minimum. ${location ? 'Delivery, installation and collection of the machine are included.' : 'Set-up and clear-down are included.'} L'Écrin Traiteur sends the quote within 24 hours.`,
    })
    faq.push({
      q: `How many guests is ${s} for?`,
      a: des
        ? `It is recommended from ${INVITES_MIN} guests. With the ${ht(des, true)} minimum, the cost per person is at least ${ht(minis[0][1], true)} for ${minis[0][0]} guests, ${ht(minis[1][1], true)} for ${minis[1][0]} and ${ht(minis[2][1], true)} for ${minis[2][0]}.`
        : `It is recommended from ${INVITES_MIN} guests. The price follows your headcount and is set out in the quote.`,
    })
    faq.push({
      q: `How far ahead should I book ${s}?`,
      a: `Book at least one week ahead. L'Écrin Traiteur answers within 24 hours with a quote and a company invoice showing VAT, for Paris and Île-de-France.`,
    })
    faq.push({
      q: `What do we need to provide on site for ${s}?`,
      a: location
        ? `Allow some space for the machine. Delivery, installation and collection of the machine are included; there is no staff on site.`
        : sansPersonne
          ? `Allow some space for the station. Set-up and clear-down are included; there is no staff on site.`
          : `${elec ? 'Allow a power socket and some space for the station.' : 'Allow some space for the station.'} Set-up and clear-down are included, and a member of our team prepares in front of your guests.`,
    })
    if (compo.length) faq.push({ q: location ? `What comes with ${s}?` : `What is served at ${s}?`, a: `${location ? 'The hire includes' : 'On the station'}: ${liste(compo.map(minuscule), true)}.` })
    if (halal) faq.push({
      q: veg ? `Is ${s} halal, and is there a vegetarian option?` : `Is ${s} halal?`,
      a: `Yes: everything L'Écrin Traiteur serves is halal and pork-free, with no alcohol.${veg ? ` For vegetarians: ${liste(veg, true)}.` : ''}`,
    })
  } else {
    faq.push({
      q: `Combien coûte ${s} en entreprise ?`.replace(/en entreprise en entreprise/, 'en entreprise'),
      a: des
        ? `Chez L'Écrin Traiteur, ${s} coûte dès ${ht(des)}, installation et démontage compris. Pour ${minis[1][0]} invités, cela fait au minimum ${ht(minis[1][1])} par personne. Le prix exact arrive avec le devis, sous 24 h.`
        : `${S} se chiffre sur devis, sans prix plancher affiché. ${location ? 'Livraison, installation et reprise de la machine sont comprises.' : 'Installation et démontage sont compris.'} L'Écrin Traiteur envoie le devis sous 24 h.`,
    })
    faq.push({
      q: `Pour combien d'invités prévoir ${s} ?`,
      a: des
        ? `Elle est recommandée à partir de ${INVITES_MIN} invités. Avec le plancher de ${ht(des)}, le coût minimum par personne est de ${ht(minis[0][1])} pour ${minis[0][0]} invités, ${ht(minis[1][1])} pour ${minis[1][0]} et ${ht(minis[2][1])} pour ${minis[2][0]}.`
        : `Elle est recommandée à partir de ${INVITES_MIN} invités. Le prix suit votre effectif et figure au devis.`,
    })
    faq.push({
      q: `Quand réserver ${s} ?`,
      a: `Réservez au moins une semaine à l'avance. L'Écrin Traiteur répond sous 24 h avec un devis et une facturation entreprise avec TVA, à Paris et en Île-de-France.`,
    })
    faq.push({
      q: `Que faut-il prévoir sur place pour ${s} ?`,
      a: location
        ? `Prévoyez un espace pour la machine. Livraison, installation et reprise de la machine sont comprises ; il n'y a personne sur place.`
        : sansPersonne
          ? `Prévoyez un espace pour l'installation. Installation et démontage sont compris ; il n'y a personne sur place.`
          : `${elec ? 'Prévoyez un accès électrique et un espace pour le stand.' : 'Prévoyez un espace pour le stand.'} Installation et démontage sont compris, et un intervenant prépare devant vos invités.`,
    })
    if (compo.length) faq.push({ q: `Qu'est-ce qui est servi ${location ? 'avec' : 'à'} ${s} ?`, a: `${location ? 'La location comprend' : 'Au choix'} : ${liste(compo.map(minuscule))}.` })
    if (halal) faq.push({
      q: veg ? `${S} est-elle halal, et y a-t-il une option végétarienne ?` : `${S} est-elle halal ?`,
      a: `Oui : tout ce que sert L'Écrin Traiteur est halal et sans porc, et sans alcool.${veg ? ` Côté végétarien : ${liste(veg)}.` : ''}`,
    })
  }

  return {
    titre: en ? 'In practice' : 'En pratique',
    items,
    faq,
    guide: GUIDE[en ? 'en' : 'fr'],
  }
}

/* ───────────────────────── Page catalogue ───────────────────────── */

export function catalogueAnimations(en = false) {
  const base = en ? '/en/creations/animations-culinaires' : '/creations/animations-culinaires'
  const liste_ = ANIMATIONS.filter(a => !en || enAnimation(a.id))
  const nom = (a) => (en ? enAnimation(a.id).nom : a.nom)
  const lien = (a) => ({ nom: nom(a), href: `${base}/${slugAnim(a.nom)}` })
  const nomU = (u) => (en ? UNIVERS_EN[u] : UNIVERS_LABEL[u]) || u
  const sansPlancher = liste_.filter(a => !prixDesAnimation(a)).map(a => (en ? `“${nom(a)}”` : `« ${nom(a)} »`))
  const elec = liste_.filter(a => ELEC.has(a.id)).map(nom)
  const veg = liste_.filter(a => vegetarien(a, en)).map(nom)

  // Occasion → animations, dans l'ordre des univers.
  const cles = []
  for (const u of Object.keys(MOMENTS)) for (const k of MOMENTS[u]) if (!cles.includes(k)) cles.push(k)
  const occasions = {
    titre: en ? 'Which station for which occasion' : 'Quelle animation pour quelle occasion',
    entetes: en ? ['Occasion', 'Stations'] : ['Occasion', 'Animations'],
    lignes: cles.map(k => ({
      occasion: occ(k, en),
      animations: liste_.filter(a => (MOMENTS[a.univers] || []).includes(k)).map(lien),
    })).filter(l => l.animations.length),
  }

  const cout = {
    titre: en ? 'Minimum cost per person' : 'Coût minimum par personne',
    entetes: en ? ['Guests', 'One station', 'Minimum per person'] : ['Invités', 'Une animation', 'Minimum par personne'],
    lignes: EFFECTIFS_CATALOGUE.map(n => [en ? `${n} guests` : `${n} invités`, `${en ? 'from' : 'dès'} ${ht(ANIMATION_DES, en)}`, ht(parPers(n), en)]),
    note: en
      ? `Minimum ${ht(ANIMATION_DES, true)} divided by the number of guests. ${maj(liste(sansPlancher, true))} are priced on quote.`
      : `Plancher de ${ht(ANIMATION_DES)} divisé par le nombre d'invités. ${maj(liste(sansPlancher))} se chiffrent au devis.`,
  }

  // Deux occasions par univers, sans reprendre une occasion déjà citée (afterwork).
  const dejaCitees = new Set()
  const parUnivers = Object.keys(MOMENTS)
    .map(u => ({ u, occ: MOMENTS[u].filter(k => !dejaCitees.has(k)).slice(0, 2).map(k => (dejaCitees.add(k), occ(k, en))), noms: liste_.filter(a => a.univers === u).filter(a => !SANS_INTERVENANT.has(a.id)).slice(0, 3).map(nom) }))
    .filter(x => x.noms.length)
  const m = EFFECTIFS_CATALOGUE.map(n => [n, parPers(n)])

  const faq = en ? [
    {
      q: 'How much does a live food station cost for a company event?',
      a: `At L'Écrin Traiteur, a live food station costs from ${ht(ANIMATION_DES, true)}, set-up and clear-down included, in Paris and Île-de-France. For ${m[2][0]} guests that is at least ${ht(m[2][1], true)} per person. ${maj(liste(sansPlancher, true))} are priced on quote.`,
    },
    {
      q: 'How many guests is a live food station for?',
      a: `We recommend a station from ${INVITES_MIN} guests. The minimum cost per person is ${ht(m[0][1], true)} for ${m[0][0]} guests, ${ht(m[1][1], true)} for ${m[1][0]}, ${ht(m[2][1], true)} for ${m[2][0]} and ${ht(m[3][1], true)} for ${m[3][0]}.`,
    },
    {
      q: 'How far ahead should I book a live food station?',
      a: 'Book at least one week ahead. L\'Écrin Traiteur answers within 24 hours with a quote and a company invoice showing VAT.',
    },
    {
      q: 'Which live food station should I choose for my event?',
      a: parUnivers.map(x => `${maj(liste(x.occ.map(minuscule), true))}: ${liste(x.noms, true)}.`).join(' '),
    },
    {
      q: 'What do we need to provide on site?',
      a: `Some space for the station, and a power socket for ${liste(elec, true)}. Set-up and clear-down are included, and a member of our team prepares in front of your guests, except for ${liste(sansPlancher, true)}, which run without staff.`,
    },
    {
      q: 'Are the live food stations halal?',
      a: `Yes: everything L'Écrin Traiteur serves is halal and pork-free, with no alcohol.${veg.length ? ` Vegetarian options appear on ${liste(veg, true)}.` : ''}`,
    },
  ] : [
    {
      q: 'Combien coûte une animation culinaire en entreprise ?',
      a: `Chez L'Écrin Traiteur, une animation culinaire coûte dès ${ht(ANIMATION_DES)}, installation et démontage compris, à Paris et en Île-de-France. Pour ${m[2][0]} invités, cela fait au minimum ${ht(m[2][1])} par personne. ${maj(liste(sansPlancher))} se chiffrent au devis.`,
    },
    {
      q: "Pour combien d'invités prévoir une animation culinaire ?",
      a: `Nous la recommandons à partir de ${INVITES_MIN} invités. Le coût minimum par personne est de ${ht(m[0][1])} pour ${m[0][0]} invités, ${ht(m[1][1])} pour ${m[1][0]}, ${ht(m[2][1])} pour ${m[2][0]} et ${ht(m[3][1])} pour ${m[3][0]}.`,
    },
    {
      q: 'Combien de temps à l\'avance réserver une animation culinaire ?',
      a: 'Réservez au moins une semaine à l\'avance. L\'Écrin Traiteur répond sous 24 h avec un devis et une facturation entreprise avec TVA.',
    },
    {
      q: 'Quelle animation culinaire choisir selon l\'occasion ?',
      a: parUnivers.map(x => `${maj(liste(x.occ.map(minuscule)))} : ${liste(x.noms)}.`).join(' '),
    },
    {
      q: 'Que faut-il prévoir sur place pour une animation culinaire ?',
      a: `Un espace pour le stand, et un accès électrique pour ${liste(elec)}. Installation et démontage sont compris, et un intervenant prépare devant vos invités, sauf pour ${liste(sansPlancher)}, sans personne sur place.`,
    },
    {
      q: 'Les animations culinaires sont-elles halal ?',
      a: `Oui : tout ce que sert L'Écrin Traiteur est halal et sans porc, et sans alcool.${veg.length ? ` Des options végétariennes figurent sur ${liste(veg)}.` : ''}`,
    },
  ]

  return {
    occasions,
    cout,
    faq,
    guide: GUIDE[en ? 'en' : 'fr'],
    itemList: liste_.map(a => ({ name: nom(a), url: `${base}/${slugAnim(a.nom)}` })),
  }
}
