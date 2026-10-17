/*
  Pages ville en anglais : surcouches de texte (contrat avec la session Site,
  17/10/2026). Prix, zones, linkedZones, images, liens entre villes : lus dans
  les données françaises. Un slug absent = pas de page anglaise.

  Format des surcouches (clé = slug FR, à l'identique) :
  - citiesData.js / citiesExtra.js : EN_VILLES = { '<ville>': { name, subtitle,
      heroDescription, businessContext, seoTitle, seoDescription, metaTitle,
      metaDescription, seoArticle, faq: [{ q, a }], quartiers: { '<quartier>':
      { name, heroDescription, seoTitle, seoDescription, metaTitle,
      metaDescription, seoArticle, faq: [{ q, a }] } } } }
    (citiesExtra.js porte aussi les quartiers de Paris ajoutés par
    PARIS_QUARTIERS_EXTRA, sous EN_VILLES.paris.quartiers.)
  - pdjVillesData.js : EN_VILLES = { '<ville>': { name, metaTitle,
      metaDescription, heroDescription, formules: [{ desc }] (même ordre que le
      FR, sans prix ni nom), seoArticle, faq: [{ q, a }] } }
  - plateauxVillesData.js : idem + selection: [{ id, pourquoi }] (même ordre).
*/
import { CITIES } from '../../citiesData'
import { PDJ_VILLES } from '../../pdjVillesData'
import { PLATEAUX_VILLES } from '../../plateauxVillesData'
import { EN_VILLES as EN_CITIES } from './citiesData'
import { EN_VILLES as EN_CITIES_EXTRA } from './citiesExtra'
import { EN_VILLES as EN_PDJ } from './pdjVillesData'
import { EN_VILLES as EN_PLATEAUX } from './plateauxVillesData'

// Fusion des deux familles de villes (les quartiers se cumulent).
const VILLES = {}
for (const fam of [EN_CITIES, EN_CITIES_EXTRA]) {
  for (const [slug, v] of Object.entries(fam || {})) {
    const prev = VILLES[slug] || {}
    VILLES[slug] = { ...prev, ...v, quartiers: { ...(prev.quartiers || {}), ...(v.quartiers || {}) } }
  }
}
const aTexte = (v) => v && v.heroDescription && v.seoArticle

/** Ville traduite : objet FR complet + textes anglais, ou null. */
export function enCity(slug) {
  const fr = CITIES.find(c => c.slug === slug)
  const en = VILLES[slug]
  if (!fr || !aTexte(en)) return null
  const { quartiers: qEn = {}, ...texte } = en
  return {
    ...fr,
    ...texte,
    quartiers: (fr.quartiers || []).filter(q => aTexte(qEn[q.slug])).map(q => ({ ...q, ...qEn[q.slug] })),
  }
}

export function enQuartier(villeSlug, quartierSlug) {
  const ville = CITIES.find(c => c.slug === villeSlug)
  const q = ville?.quartiers?.find(x => x.slug === quartierSlug)
  const en = VILLES[villeSlug]?.quartiers?.[quartierSlug]
  if (!q || !aTexte(en) || !enCity(villeSlug)) return null
  return { ...q, ...en }
}

const fusionListe = (fr = [], en = []) => fr.map((x, i) => ({ ...x, ...(en[i] || {}) }))

export function enPdjVille(slug) {
  const fr = PDJ_VILLES.find(v => v.slug === slug)
  const en = EN_PDJ[slug]
  if (!fr || !aTexte(en)) return null
  return { ...fr, ...en, formules: fusionListe(fr.formules, (en.formules || []).map(f => ({ desc: f.desc }))) }
}

export function enPlateauxVille(slug) {
  const fr = PLATEAUX_VILLES.find(v => v.slug === slug)
  const en = EN_PLATEAUX[slug]
  if (!fr || !aTexte(en)) return null
  return {
    ...fr, ...en,
    formules: fusionListe(fr.formules, (en.formules || []).map(f => ({ desc: f.desc }))),
    selection: fusionListe(fr.selection, (en.selection || []).map(s => ({ pourquoi: s.pourquoi }))),
  }
}

export const slugsVillesEn = () => CITIES.filter(c => enCity(c.slug)).map(c => c.slug)
export const quartiersEn = () => CITIES.flatMap(c => (enCity(c.slug)?.quartiers || []).map(q => ({ ville: c.slug, quartier: q.slug })))
export const slugsPdjVillesEn = () => PDJ_VILLES.filter(v => enPdjVille(v.slug)).map(v => v.slug)
export const slugsPlateauxVillesEn = () => PLATEAUX_VILLES.filter(v => enPlateauxVille(v.slug)).map(v => v.slug)

/** Chemins FR qui ont une page anglaise (pour lib/i18n.js CHEMINS_TRADUITS et le sitemap). */
export function cheminsVillesEn() {
  return [
    ...slugsVillesEn().map(s => `/traiteur/${s}`),
    ...quartiersEn().map(({ ville, quartier }) => `/traiteur/${ville}/${quartier}`),
    ...slugsPdjVillesEn().map(s => `/petit-dejeuner-entreprise/${s}`),
    ...slugsPlateauxVillesEn().map(s => `/plateaux-repas-entreprise/${s}`),
  ]
}
