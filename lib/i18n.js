/*
  Socle de la version anglaise du site, côté serveur.

  Les fonctions légères (versEn, versFr, estAnglais, alternatesPour…) sont dans
  lib/i18nBase.js et réexportées ici : le code serveur existant n'a rien à
  changer. Ce fichier-ci tire les données anglaises : ne JAMAIS l'importer
  depuis un composant 'use client' (voir lib/i18nBase.js).
*/
import { BASE, LANGUES, versEn, versFr, estAnglais, langueDe, normaliser, alternatesPour, alternatesPourEn, equivalentEnDans, lienLocaliseDans, reecrireLiensEnDans } from './i18nBase'
export { BASE, LANGUES, versEn, versFr, estAnglais, langueDe, alternatesPour, alternatesPourEn }

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
import { slugsArtisansEn } from './en/univers/artisans'
import { slugsOccasionsEn } from './en/pages/occasions'
import { slugsHalalEn } from './en/pages/halal'
import { cheminsVillesEn } from './en/villes'
import { MENUS as MENUS_A_PARTAGER } from '../app/creations/a-partager/data'
import { enMenu } from './en/produits/aPartager'
import { slugsEvenementsEn } from './en/pages/evenements'

/* Pages qui existent en anglais sans passer par enPages : les formulaires,
   servis par la même route dans les deux langues (app/en/contact, app/en/devis).
   À compléter au fil des traductions. */
/* Pages Univers traduites : les dix fiches artisans, leur index, Notre Maison. */
export const UNIVERS_EN = [
  '/univers/nos-artisans',
  '/univers/notre-maison',
  '/univers/nos-engagements',
  '/univers/notre-methode',
  '/univers/avis-clients',
  '/univers/cas-clients',
]

/* Index Occasions et index traiteur halal, traduits. */
export const INDEX_PAGES_EN = ['/occasions', '/traiteur-halal', '/traiteur', '/traiteur-eco-responsable', '/traiteur-healthy']

/* Index de famille traduits : une page anglaise à part entière, pas un repli. */
export const INDEX_FAMILLES_EN = [
  '/creations/a-partager',
  '/creations/coffrets-cadeaux',
  '/creations/receptions-sur-mesure',
  '/creations/pauses-gourmandes',
  '/creations/boissons',
  '/creations/plateaux-aperitifs',
  '/creations/animations-culinaires',
  '/creations/lunch-box',
  '/creations/personnalisation',
  '/creations/evenements-saisonniers',
]

export const CHEMINS_TRADUITS = [
  '/',          // l'accueil anglais, app/en/page.js
  '/contact',
  '/contact/rendez-vous',
  '/devis',
  // Pages légales : traductions de courtoisie, seule la version française
  // fait foi (encart components/AvisTraduction.js).
  '/mentions-legales',
  '/cgv',
  '/confidentialite',
  '/cookies',
  ...INDEX_FAMILLES_EN,
  ...UNIVERS_EN,
  ...slugsArtisansEn().map(s => `/univers/nos-artisans/${s}`),
  ...INDEX_PAGES_EN,
  ...slugsOccasionsEn().map(s => `/occasions/${s}`),
  ...slugsHalalEn().map(s => `/traiteur-halal/${s}`),
  ...slugsLunchBoxEn().map(id => `/creations/lunch-box/${id}`),
  ...slugsPlateauxRepasEn().map(id => `/creations/plateaux-repas/${id}`),
  ...slugsPetitsDejeunersEn().map(id => `/creations/petits-dejeuners-et-pauses/${id}`),
  ...slugsPausesEn().map(id => `/creations/pauses-gourmandes/${id}`),
  ...slugsBoissonsEn().map(id => `/creations/boissons/${id}`),
  ...slugsPlateauxAperitifsEn().map(id => `/creations/plateaux-aperitifs/${id}`),
  ...cheminsAnimationsEn(),
  ...MENUS_A_PARTAGER.filter(m => enMenu(m.key)).map(m => `/creations/a-partager/${m.key}`),
  ...clesCocktailsEn().map(k => `/creations/cocktails/${k}`),
  '/creations/cocktails/afterwork-partage', // fiche « Afterwork à partager » (lib/afterworkFiche.js)
  // Pages ville, traduites par la session GEO : traiteur, petit-déjeuner et
  // plateaux repas par ville et par quartier.
  ...cheminsVillesEn(),
  // Fiches événement saisonnier traduites en entier (lib/en/pages/evenements.js).
  ...slugsEvenementsEn().map(s => `/creations/evenements-saisonniers/${s}`),
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
  return equivalentEnDans(CHEMINS_AVEC_EN, cheminFr, slugsJournalEn)
}

/**
 * Réécrit les liens internes d'un fragment HTML vers leur version anglaise,
 * quand elle existe. Les liens externes, les ancres, les mailto et les tel
 * ne sont pas touchés, ni les liens déjà en /en.
 */
export function reecrireLiensEn(html, slugsJournalEn = []) {
  return reecrireLiensEnDans(CHEMINS_AVEC_EN, html, slugsJournalEn)
}

/*
  Lien de navigation dans la bonne langue (version serveur ; les composants
  client utilisent lienLocaliseDans de lib/i18nBase.js avec la liste du contexte).

  Règle absolue : on ne renvoie JAMAIS vers une adresse qui n'existe pas.
  Depuis une page anglaise, un lien part vers sa version anglaise si elle
  existe, et reste en français sinon. Le visiteur change alors de langue en
  cours de route, ce qui est désagréable — mais infiniment moins qu'une 404.
*/
export function lienLocalise(href, langue, slugsJournalEn = []) {
  return lienLocaliseDans(CHEMINS_AVEC_EN, href, langue, slugsJournalEn)
}
