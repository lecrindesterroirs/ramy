/*
  Socle de la version anglaise du site.

  Trois principes, posés avec la session GEO le 17 octobre 2026 :

  1. Une seule source pour les prix et les quantités. Les fichiers anglais ne
     portent que du texte ; tout le reste (prix, images, dates, allergènes)
     est lu depuis les données françaises. Un prix ne doit jamais se corriger
     à deux endroits.
  2. Les adresses anglaises reprennent les adresses françaises sous /en.
     /creations/plateaux-repas → /en/creations/plateaux-repas. Les slugs ne
     sont pas traduits : la correspondance hreflang reste triviale et aucun
     lien ne peut casser.
  3. Une page n'existe en anglais que si elle est traduite. Pas de repli
     silencieux vers le français : une page à moitié traduite est pire que
     pas de page du tout.
*/

export const BASE = 'https://www.lecrin-traiteur.fr'
export const LANGUES = ['fr', 'en']

/** '/creations/plateaux-repas' → '/en/creations/plateaux-repas' */
export function versEn(chemin) {
  const c = normaliser(chemin)
  return c === '/' ? '/en' : `/en${c}`
}

/** '/en/creations/plateaux-repas' → '/creations/plateaux-repas' */
export function versFr(chemin) {
  const c = normaliser(chemin)
  if (c === '/en') return '/'
  return c.startsWith('/en/') ? c.slice(3) : c
}

export function estAnglais(chemin) {
  const c = normaliser(chemin)
  return c === '/en' || c.startsWith('/en/')
}

export function langueDe(chemin) {
  return estAnglais(chemin) ? 'en' : 'fr'
}

function normaliser(chemin) {
  if (!chemin) return '/'
  let c = String(chemin).split('?')[0].split('#')[0]
  if (!c.startsWith('/')) c = '/' + c
  if (c.length > 1 && c.endsWith('/')) c = c.slice(0, -1)
  return c
}

/*
  Bloc `alternates` à poser dans generateMetadata. On ne déclare hreflang que
  si la page existe VRAIMENT dans les deux langues : un hreflang qui pointe
  vers une 404 est pire que pas de hreflang.

    alternatesPour('/creations/plateaux-repas', { en: true })
*/
export function alternatesPour(cheminFr, { en = false } = {}) {
  const fr = normaliser(cheminFr)
  const canonical = fr
  if (!en) return { canonical }
  return {
    canonical,
    languages: {
      'fr-FR': `${BASE}${fr}`,
      'en': `${BASE}${versEn(fr)}`,
      'x-default': `${BASE}${fr}`,
    },
  }
}

/** Même chose, pour la page anglaise elle-même. */
export function alternatesPourEn(cheminFr) {
  const fr = normaliser(cheminFr)
  return {
    canonical: versEn(fr),
    languages: {
      'fr-FR': `${BASE}${fr}`,
      'en': `${BASE}${versEn(fr)}`,
      'x-default': `${BASE}${fr}`,
    },
  }
}

/* ───────────────────────────────────────────────────────────────────────────
   Quelles pages existent en anglais, et réécriture des liens.

   Les surcouches du Journal gardent les liens français (c'est le contrat
   passé avec la session GEO : elle n'a aucune carte de correspondance à
   tenir). La réécriture se fait ici, au rendu : un lien ne part vers /en que
   si la page anglaise existe vraiment, sinon il reste en français. Aucun lien
   ne peut donc casser, et les pages traduites plus tard seront prises en
   compte sans rien retoucher dans les surcouches.
   ─────────────────────────────────────────────────────────────────────────── */

/*
  Chemins français qui ont une page anglaise hors Journal. Tenue ici parce que
  lib/enPages.js est la source : on en dérive la liste, on ne la recopie pas.
*/
import { EN_PAGES } from './enPages'
import { slugsLunchBoxEn } from './en/produits/lunchBox'
import { slugsPlateauxRepasEn } from './en/produits/plateauxRepas'
import { slugsPetitsDejeunersEn } from './en/produits/petitsDejeuners'
import { slugsPausesEn } from './en/produits/pausesGourmandes'
import { slugsBoissonsEn } from './en/produits/boissons'
import { slugsPlateauxAperitifsEn } from './en/produits/plateauxAperitifs'
import { cheminsAnimationsEn } from './en/produits/animationsChemins'
import { clesCocktailsEn } from './en/produits/cocktails'
import { cheminsVillesEn } from './en/villes'

/* Pages qui existent en anglais sans passer par enPages : les formulaires,
   servis par la même route dans les deux langues (app/en/contact, app/en/devis).
   À compléter au fil des traductions. */
/* Index de famille traduits : une page anglaise à part entière, pas un repli. */
export const INDEX_FAMILLES_EN = [
  '/creations/pauses-gourmandes',
  '/creations/boissons',
  '/creations/plateaux-aperitifs',
  '/creations/animations-culinaires',
  '/creations/lunch-box',
]

export const CHEMINS_TRADUITS = [
  '/',          // l'accueil anglais, app/en/page.js
  '/contact',
  '/devis',
  ...INDEX_FAMILLES_EN,
  ...slugsLunchBoxEn().map(id => `/creations/lunch-box/${id}`),
  ...slugsPlateauxRepasEn().map(id => `/creations/plateaux-repas/${id}`),
  ...slugsPetitsDejeunersEn().map(id => `/creations/petits-dejeuners-et-pauses/${id}`),
  ...slugsPausesEn().map(id => `/creations/pauses-gourmandes/${id}`),
  ...slugsBoissonsEn().map(id => `/creations/boissons/${id}`),
  ...slugsPlateauxAperitifsEn().map(id => `/creations/plateaux-aperitifs/${id}`),
  ...cheminsAnimationsEn(),
  ...clesCocktailsEn().map(k => `/creations/cocktails/${k}`),
  // Pages ville, traduites par la session GEO : traiteur, petit-déjeuner et
  // plateaux repas par ville et par quartier.
  ...cheminsVillesEn(),
]

export const CHEMINS_AVEC_EN = [
  ...Object.values(EN_PAGES).map(p => p.fr),
  ...CHEMINS_TRADUITS,
]

/**
 * Équivalent anglais d'un chemin français, ou null s'il n'y en a pas.
 * @param {string} cheminFr
 * @param {string[]} slugsJournalEn slugs du Journal traduits (lib/en/journal → enSlugs())
 */
export function equivalentEn(cheminFr, slugsJournalEn = []) {
  const c = normaliser(cheminFr)
  if (CHEMINS_AVEC_EN.includes(c)) return versEn(c)
  if (c === '/journal') return '/en/journal'
  const m = /^\/journal\/([^/]+)$/.exec(c)
  if (m && slugsJournalEn.includes(m[1])) return `/en/journal/${m[1]}`
  return null
}

/**
 * Réécrit les liens internes d'un fragment HTML vers leur version anglaise,
 * quand elle existe. Les liens externes, les ancres, les mailto et les tel
 * ne sont pas touchés, ni les liens déjà en /en.
 */
export function reecrireLiensEn(html, slugsJournalEn = []) {
  if (!html) return html
  return String(html).replace(/href="(\/[^"#]*)"/g, (tout, chemin) => {
    if (chemin.startsWith('/en/') || chemin === '/en') return tout
    const en = equivalentEn(chemin, slugsJournalEn)
    return en ? `href="${en}"` : tout
  })
}

/*
  Lien de navigation dans la bonne langue.

  Règle absolue : on ne renvoie JAMAIS vers une adresse qui n'existe pas.
  Depuis une page anglaise, un lien part vers sa version anglaise si elle
  existe, et reste en français sinon. Le visiteur change alors de langue en
  cours de route, ce qui est désagréable — mais infiniment moins qu'une 404.
*/
export function lienLocalise(href, langue, slugsJournalEn = []) {
  if (langue !== 'en' || !href || !href.startsWith('/')) return href
  if (href.startsWith('/en/') || href === '/en') return href
  const [chemin, suite] = href.split(/(?=[?#])/)
  const en = equivalentEn(chemin, slugsJournalEn)
  return en ? en + (suite || '') : href
}
