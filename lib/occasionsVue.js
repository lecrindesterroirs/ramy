/*
  Préparation des pages Occasions (/occasions et /occasions/<slug>, FR et /en),
  CÔTÉ SERVEUR. Refonte du 23/10/2026 (audit design, chantier 2), sur le
  modèle des événements saisonniers (lib/evenementsVue.js).

  - Prix : jamais écrits à la main. Les textes de lib/occasionsData.js et de
    lib/en/pages/occasions.js portent des marqueurs ({{ht:veg}},
    {{htn:inv:20}}…) remplacés ici par les montants de lib/prixEntree.js,
    lib/calculsPrix.js et des fiches plateaux repas.
  - Produits : cartes lues dans les catalogues (lib/evenementsLiens.js) :
    nom, photo et prix de la fiche.
  - Les vues (components/occasions/*) ne font que mettre en page.
*/
import { OCCASIONS, FAQ_DERNIERE_MINUTE } from './occasionsData'
import { enOccasion, FAQ_DERNIERE_MINUTE_EN } from './en/pages/occasions'
import { PRESTATIONS, prixHT, euro, exemplesEvenement, LIV, MINIMUM } from './evenementsPrix'
import { FORMULES, cocktail } from './calculsPrix'
import { PLATEAU_DES, PLATEAU_MAX, RECUP, LIV_RECUP_PROCHE } from './prixEntree'
import { PRIX as PRIX_PLATEAUX } from '../app/creations/plateaux-repas/data'
import { resoudreProduits } from './evenementsLiens'
import { CITIES } from './citiesData'
import { evenements } from '../app/creations/evenements-saisonniers/evenementsData'
import { EN_EVENEMENTS, traductionComplete } from './en/pages/evenements'
import { reecrireLiensEn } from './i18n'
import { enSlugs } from './en/journal'

export const BASE = 'https://www.lecrin-traiteur.fr'
export const CHEMIN = '/occasions'

const num = (s) => Number(String(s).replace(',', '.'))

/* Valeurs que les textes peuvent citer, par clé de marqueur. */
const VAL = {
  veg: num(PRIX_PLATEAUX.essentiel.vegetarien) || PLATEAU_DES,
  poulet: num(PRIX_PLATEAUX.essentiel.poulet),
  poisson: num(PRIX_PLATEAUX.essentiel.poisson) || PLATEAU_MAX,
  pdj: PRESTATIONS.pdj.prix,
  pause: PRESTATIONS.pause.prix,
  lunchbox: PRESTATIONS.lunchbox.prix,
  inv: FORMULES.invitation.prix,
  rec: FORMULES.reception.prix,
  cel: FORMULES.celebration.prix,
  liv: LIV,
  min: MINIMUM,
  recup: RECUP,
  livrecup: LIV_RECUP_PROCHE, // livraison + reprise du matériel en une ligne, Paris, 92 et 94
}
const PIECES = { inv: FORMULES.invitation.pieces, rec: FORMULES.reception.pieces, cel: FORMULES.celebration.pieces }
const F = { inv: FORMULES.invitation, rec: FORMULES.reception, cel: FORMULES.celebration }
const entier = (x, en) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, en ? ',' : ' ')

/*
  Marqueurs :
  {{ht:K}}        28,90 € HT          {{e:K}}        28,90 €
  {{htn:K:n}}     n × K, HT           {{en:K:n}}     n × K, sans « HT »
  {{htl:K:n}}     n × K + livraison   {{pc:K:n}}     n × pièces de la formule K
  {{cka:K:n}}     cocktail K pour n, boissons (jus, eau, Chardonnay 0 %) et livraison comprises
  {{ckap:K:n}}    le même, par personne
*/
export function remplirPrix(texte, en = false) {
  if (typeof texte !== 'string') return texte
  const lang = en ? 'en' : 'fr'
  return texte.replace(/\{\{(ht|e|htn|en|htl|pc|cka|ckap):(\w+)(?::(\d+))?\}\}/g, (m, op, k, n) => {
    const v = VAL[k]
    const q = Number(n)
    switch (op) {
      case 'ht': return prixHT(v, lang)
      case 'e': return euro(v, lang)
      case 'htn': return prixHT(q * v, lang)
      case 'en': return euro(q * v, lang)
      case 'htl': return prixHT(q * v + LIV, lang)
      case 'pc': return entier(q * PIECES[k], en)
      case 'cka': return prixHT(cocktail(q, F[k]).avec, lang)
      case 'ckap': return prixHT(Math.round(cocktail(q, F[k]).avec / q * 100) / 100, lang)
      default: return m
    }
  })
}

/*
  Réglages par occasion : prestations (prix « dès »), exemples du tableau
  « Combien prévoir », valeur du formulaire de devis, et une phrase courte
  et concrète pour la liste et l'en-tête.
*/
const REGLAGES = {
  'petit-dejeuner-codir': {
    cta: "votre repas de CODIR ou de COMEX", ctaEn: "your board lunch",
    prestations: ['plateau'], exemples: [{ p: 'plateau', n: 8 }, { p: 'plateau', n: 12 }, { p: 'plateau', n: 15 }], devis: 'Plateaux repas',
    court: "Plateaux repas individuels, entrée, plat, dessert et pain, servis en salle à l'heure fixée.",
    courtEn: 'Individual lunch trays, starter, main, dessert and bread, set out in the room at the time you set.',
  },
  'seminaire-entreprise': {
    cta: "votre séminaire", ctaEn: "your offsite",
    prestations: ['pdj', 'pause', 'plateau'], exemples: [{ p: 'pdj', n: 30 }, { p: 'pause', n: 30 }, { p: 'plateau', n: 30 }], devis: 'Séminaire',
    court: "Accueil café, pauses, déjeuner et cocktail de clôture sur une seule commande, de 20 à 500 participants.",
    courtEn: 'Welcome coffee, breaks, lunch and a closing reception in a single order, for 20 to 500 people.',
  },
  'accueil-client': {
    cta: "votre accueil client", ctaEn: "your client welcome",
    prestations: ['pdj', 'pause'], exemples: [{ p: 'pdj', n: 8 }, { p: 'pdj', n: 20 }], devis: 'Petit-déjeuner',
    court: 'Macarons, viennoiseries pur beurre et jus Alain Milliat pour recevoir un client, de 2 à 20 personnes.',
    courtEn: 'Macarons, butter pastries and Alain Milliat juices to welcome a client, for 2 to 20 people.',
  },
  'journee-formation': {
    cta: "votre journée de formation", ctaEn: "your training day",
    prestations: ['pdj', 'pause'], exemples: [{ p: 'pdj', n: 15 }, { p: 'pause', n: 15 }], devis: 'Petit-déjeuner',
    court: "Pause du matin et pause de l'après-midi, livrées ensemble ou séparément, étiquetées.",
    courtEn: 'Morning and afternoon breaks, delivered together or separately, labelled.',
  },
  'team-building': {
    cta: "votre team building", ctaEn: "your team day",
    prestations: ['pdj', 'pause', 'cocktail8'], exemples: [{ p: 'pdj', n: 20 }, { p: 'pause', n: 20 }, { p: 'cocktail8', n: 20 }], devis: 'Petit-déjeuner',
    court: "Chouquettes, crêpes, brochettes de fruits et cookies à partager, livrés sur le lieu de l'activité en Île-de-France.",
    courtEn: 'Chouquettes, crêpes, fruit skewers and cookies to share, delivered to the venue anywhere in Île-de-France.',
  },
  'gouter-entreprise': {
    cta: "le goûter de l'équipe", ctaEn: "the team's afternoon break",
    prestations: ['pause'], exemples: [{ p: 'pause', n: 10 }, { p: 'pause', n: 20 }, { p: 'pause', n: 50 }], devis: 'Goûter',
    court: "Madeleines, cookies, macarons et brochettes de fruits livrés à l'heure de la pause, 15h30 ou 16h.",
    courtEn: 'Madeleines, cookies, macarons and fruit skewers delivered at break time, 3:30 or 4 pm.',
  },
  'petit-dejeuner-entreprise': {
    cta: "le petit-déjeuner de l'équipe", ctaEn: "the team breakfast",
    prestations: ['pdj'], exemples: [{ p: 'pdj', n: 10 }, { p: 'pdj', n: 20 }, { p: 'pdj', n: 50 }], devis: 'Petit-déjeuner',
    court: 'Viennoiseries pur beurre, madeleines, jus et café livrés dès 6h30, en commande ponctuelle ou chaque semaine.',
    courtEn: 'Butter pastries, madeleines, juice and coffee delivered from 6:30 am, as a one-off or every week.',
  },
  'dejeuner-entreprise': {
    cta: "votre déjeuner d'équipe", ctaEn: "your team lunch",
    prestations: ['lunchbox', 'plateau'], exemples: [{ p: 'plateau', n: 10 }, { p: 'plateau', n: 20 }, { p: 'lunchbox', n: 20 }], devis: 'Plateaux repas',
    court: "Plateaux repas et lunch box individuels, livrés à l'heure du déjeuner, avec un tiers de végétarien conseillé.",
    courtEn: 'Individual lunch trays and lunch boxes, delivered at lunchtime, with a third vegetarian as a rule of thumb.',
  },
  'cocktail-entreprise': {
    cta: "votre cocktail d'entreprise", ctaEn: "your corporate cocktail reception",
    prestations: ['cocktail8', 'cocktail12', 'cocktail16'], exemples: [{ p: 'cocktail8', n: 30 }, { p: 'cocktail12', n: 50 }, { p: 'cocktail16', n: 50 }], devis: 'Cocktail / Buffet',
    court: '8, 12 ou 16 pièces salées et sucrées par personne, livrées dressées pour un pot, un lancement ou une soirée.',
    courtEn: '8, 12 or 16 savoury and sweet pieces per person, delivered arranged for drinks, a launch or an evening.',
  },
  'afterwork-entreprise': {
    cta: "votre afterwork", ctaEn: "your afterwork",
    prestations: ['cocktail8', 'cocktail12'], exemples: [{ p: 'cocktail8', n: 20 }, { p: 'cocktail8', n: 30 }, { p: 'cocktail12', n: 30 }], devis: 'Cocktail / Buffet',
    court: "Pièces à picorer livrées juste avant le pot, sans minimum de participants.",
    courtEn: 'Pieces to pick at, delivered just before the drinks, with no minimum headcount.',
  },
}

export const reglages = (slug) => REGLAGES[slug]

/* Occasion fusionnée dans la langue demandée, textes remplis, ou null. */
export function occasionPour(slug, en = false) {
  const fr = OCCASIONS.find(o => o.slug === slug)
  if (!fr) return null
  const sur = en ? enOccasion(slug) : null
  if (en && !sur) return null
  const o = sur ? { ...fr, ...sur } : fr
  const R = REGLAGES[slug]
  const article = remplirPrix(en ? reecrireLiensEn(o.seoArticle, enSlugs()) : o.seoArticle, en)
  return {
    ...o,
    nomFr: fr.name,
    court: en ? R.courtEn : R.court,
    cta: en ? R.ctaEn : R.cta,
    ctaFr: R.cta,
    article,
    faqData: (o.faq || []).map(f => ({ q: remplirPrix(f.q, en), a: remplirPrix(f.a, en) })),
    seoTitle: remplirPrix(fr.seoTitle, false),
    seoDescription: remplirPrix(fr.seoDescription, false),
    reglages: R,
  }
}

export const prixDesOccasion = (slug) => Math.min(...REGLAGES[slug].prestations.map(k => PRESTATIONS[k].prix))

export function exemplesOccasion(slug, en = false) {
  const lang = en ? 'en' : 'fr'
  return exemplesEvenement(REGLAGES[slug].exemples, lang).map(x => ({
    ...x, totalTexte: prixHT(x.total, lang), parPersonneTexte: prixHT(x.parPersonne, lang),
  }))
}

/* Cartes produit de la sélection. */
const ROUTE = { 'plateaux-repas': 'plateaux-repas', cocktails: 'cocktails' }
export function produitsOccasion(o, en = false) {
  const route = ROUTE[o.productCategory] || 'petits-dejeuners-et-pauses'
  return resoudreProduits(o.linkedProducts.map(id => `/creations/${route}/${id}`), en ? 'en' : 'fr', o.slug)
}

export const villesOccasion = (o) => o.linkedCities.map(s => CITIES.find(c => c.slug === s)).filter(Boolean).map(c => ({ slug: c.slug, nom: c.name }))

/* Événements saisonniers qui renvoient vers cette occasion. */
export const evenementsOccasion = (slug, en = false) => evenements
  .filter(e => (e.occasions || []).includes(slug) && (!en || traductionComplete(e.slug)))
  .map(e => ({ href: `${en ? '/en' : ''}/creations/evenements-saisonniers/${e.slug}`, nom: en ? EN_EVENEMENTS[e.slug].nom : e.nom }))

export const faqDerniereMinute = (en) => (en ? FAQ_DERNIERE_MINUTE_EN : FAQ_DERNIERE_MINUTE)

/* Liste de l'index : toutes les occasions, avec prix d'entrée et photo. */
export function listeOccasions(en = false) {
  const lang = en ? 'en' : 'fr'
  return OCCASIONS
    .map(fr => {
      const o = occasionPour(fr.slug, en)
      if (!o) return null
      const ex = exemplesOccasion(fr.slug, en)[0]
      return {
        slug: fr.slug,
        href: `${en ? '/en' : ''}${CHEMIN}/${fr.slug}`,
        nom: o.name,
        court: o.court,
        img: fr.heroImg,
        desNum: prixDesOccasion(fr.slug),
        des: prixHT(prixDesOccasion(fr.slug), lang),
        ex,
        format: REGLAGES[fr.slug].prestations.map(k => PRESTATIONS[k][lang]),
      }
    })
    .filter(Boolean)
}

export { PRESTATIONS, prixHT, LIV, MINIMUM }
