/*
  Préparation des pages « Événements saisonniers », CÔTÉ SERVEUR.
  Réunit textes (FR ou EN), date calculée, prix calculés, liens produit,
  guides et occasions liés. Les vues (components/evenements/*) ne font que
  mettre en page ce qui sort d'ici.
*/
import { evenements } from '../app/creations/evenements-saisonniers/evenementsData'
import { EN_EVENEMENTS, traductionComplete } from './en/pages/evenements'
import { prochaineOccurrence, libelleOccurrence, conseilOccurrence, dateLongue, aujourdhui } from './evenementsCalendrier'
import { PRESTATIONS, prixDes, prixHT, exemplesEvenement, LIV, MINIMUM } from './evenementsPrix'
import { resoudreProduits } from './evenementsLiens'
import { articles } from './journalData'
import { enArticle } from './en/journal'
import { OCCASIONS } from './occasionsData'
import { enOccasion } from './en/pages/occasions'
import { lienLocalise } from './i18n'

export const BASE = 'https://www.lecrin-traiteur.fr'
export const CHEMIN = '/creations/evenements-saisonniers'

/* Événement fusionné dans la langue demandée, ou null (slug inconnu, ou pas de traduction complète). */
export function evenementPour(slug, en = false) {
  const fr = evenements.find(e => e.slug === slug)
  if (!fr) return null
  if (!en) return fr
  if (!traductionComplete(slug)) return null
  return { ...fr, ...EN_EVENEMENTS[slug] }
}

/* Événements publiés dans une langue. */
export const evenementsPublies = (en = false) => (en ? evenements.filter(e => traductionComplete(e.slug)) : evenements)

/* Date de la prochaine édition, en toutes lettres. */
export function contexteDate(ev, lang = 'fr', auj = aujourdhui()) {
  const occ = prochaineOccurrence(ev.date, auj)
  return {
    occ,
    date: libelleOccurrence(occ, ev.date, lang),
    conseil: conseilOccurrence(occ, lang),
    annee: occ ? occ.annee : auj.getUTCFullYear(),
    enCours: !!occ && occ.debut <= auj,
  }
}

/* {{date}}, {{conseil}}, {{annee}} → valeurs calculées. */
export function remplir(texte, ctx) {
  if (typeof texte !== 'string') return texte
  return texte
    .replace(/\{\{date\}\}/g, ctx.date)
    .replace(/\{\{conseil\}\}/g, ctx.conseil || ctx.date)
    .replace(/\{\{annee\}\}/g, String(ctx.annee))
}

/* Prix « dès » d'un événement, formaté. */
export const prixDesTexte = (ev, lang = 'fr') => prixHT(prixDes(ev.prestations), lang)

/* Exemples chiffrés formatés pour l'affichage. */
export function exemplesFormates(ev, lang = 'fr') {
  return exemplesEvenement(ev.exemples, lang).map(x => ({
    ...x,
    totalTexte: prixHT(x.total, lang),
    parPersonneTexte: prixHT(x.parPersonne, lang),
  }))
}

/* Guides du Journal liés : en anglais, seulement ceux qui ont une version anglaise. */
export function guidesLies(ev, en = false) {
  return (ev.articles || []).map(slug => {
    if (en) {
      const a = enArticle(slug)
      return a && { href: `/en/journal/${slug}`, titre: a.metaTitle || a.titre }
    }
    const a = articles.find(x => x.slug === slug)
    return a && { href: `/journal/${slug}`, titre: a.metaTitle || a.titre }
  }).filter(Boolean)
}

/* Occasions liées (pages /occasions). */
export function occasionsLiees(ev, en = false) {
  return (ev.occasions || []).map(slug => {
    const o = OCCASIONS.find(x => x.slug === slug)
    if (!o) return null
    const nomEn = enOccasion(slug)?.name
    if (en && !nomEn) return null
    return { href: en ? lienLocalise(`/occasions/${slug}`, 'en') : `/occasions/${slug}`, titre: en ? nomEn : o.name }
  }).filter(Boolean)
}

/* Événements voisins dans le calendrier : les quatre suivants après celui-ci. */
export function voisins(ev, en = false, auj = aujourdhui()) {
  const lang = en ? 'en' : 'fr'
  const liste = evenementsPublies(en)
    .map(e => ({ e, occ: prochaineOccurrence(e.date, auj) }))
    .sort((a, b) => a.occ.debut - b.occ.debut)
  const i = liste.findIndex(x => x.e.slug === ev.slug)
  const suite = [...liste.slice(i + 1), ...liste.slice(0, i)].slice(0, 4)
  return suite.map(({ e, occ }) => {
    const t = en ? { ...e, ...EN_EVENEMENTS[e.slug] } : e
    return {
      href: `${en ? '/en' : ''}${CHEMIN}/${e.slug}`,
      nom: t.nom,
      date: libelleOccurrence(occ, e.date, lang),
      descCourt: t.descCourt,
      img: e.img,
      des: prixDesTexte(e, lang),
    }
  })
}

export function produitsDe(ev, en = false) {
  return resoudreProduits(ev.produits, en ? 'en' : 'fr', ev.slug)
}

export const majTexte = (ev, lang = 'fr') => {
  const [y, m, d] = ev.maj.split('-').map(Number)
  return dateLongue(new Date(Date.UTC(y, m - 1, d)), lang).replace(/^\S+\s/, '')
}

export { PRESTATIONS, prixHT, LIV, MINIMUM }
