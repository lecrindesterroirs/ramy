import { evenements } from './creations/evenements-saisonniers/evenementsData'
import { articles } from '../lib/journalData'
import { PRODUCTS } from '../lib/productsData'
import { CITIES } from '../lib/citiesData'
import { PDJ_VILLES } from '../lib/pdjVillesData'
import { PLATEAUX_VILLES } from '../lib/plateauxVillesData'
import { HALAL_PAGES } from '../lib/halalPagesData'
import { OCCASIONS } from '../lib/occasionsData'
import { BOISSONS } from '../lib/boissonsData'
import { PRODUITS as PLATEAUX_REPAS } from './creations/plateaux-repas/data'
import { SLUGS as LUNCHBOX_SLUGS } from './creations/lunch-box/[slug]/layout'
import { SLUGS as APERITIFS_SLUGS } from './creations/plateaux-aperitifs/[slug]/layout'
import { SLUGS as PAUSES_SLUGS } from './creations/pauses-gourmandes/[slug]/layout'
import { SLUGS as COCKTAILS_SLUGS } from './creations/cocktails/[slug]/layout'
import { ANIMATIONS, slugAnim } from './creations/animations-culinaires/data'
import { ARTISANS } from '../lib/artisansData'
import { enSlugs } from '../lib/en/journal'
import { slugsLunchBoxEn } from '../lib/en/produits/lunchBox'
import { slugsPlateauxRepasEn } from '../lib/en/produits/plateauxRepas'
import { slugsPetitsDejeunersEn } from '../lib/en/produits/petitsDejeuners'
import { slugsPausesEn } from '../lib/en/produits/pausesGourmandes'
import { slugsBoissonsEn } from '../lib/en/produits/boissons'
import { slugsPlateauxAperitifsEn } from '../lib/en/produits/plateauxAperitifs'
import { cheminsAnimationsEn } from '../lib/en/produits/animationsChemins'
import { clesCocktailsEn } from '../lib/en/produits/cocktails'
import { INDEX_FAMILLES_EN, UNIVERS_EN } from '../lib/i18n'
import { slugsArtisansEn } from '../lib/en/univers/artisans'
import { cheminsVillesEn } from '../lib/en/villes'
import { EN_PAGES } from '../lib/enPages'

const BASE_URL = 'https://www.lecrin-traiteur.fr'
// Date de dernière mise à jour éditoriale, figée volontairement (ne pas remettre
// new Date() : cela ferait croire à Google que tout change à chaque build).
// À bumper lors d'une vraie refonte de contenu.
const NOW = '2026-07-06T00:00:00.000Z'

function url(path, priority, changeFrequency) {
  return { url: `${BASE_URL}${path}`, lastModified: NOW, priority, changeFrequency }
}

export default function sitemap() {

  // ── Pages statiques ───────────────────────────────────────────────
  const staticPages = [
    url('/',                                              1.0,  'weekly'),
    url('/devis',                                         0.95, 'monthly'),
    url('/contact',                                       0.85, 'monthly'),

    // Créations
    url('/creations/petits-dejeuners-et-pauses',          0.92, 'weekly'),
    url('/creations/pauses-gourmandes',                   0.86, 'monthly'),
    url('/creations/plateaux-repas',                      0.88, 'monthly'),
    url('/creations/lunch-box',                           0.86, 'monthly'),
    url('/creations/a-partager',                          0.84, 'monthly'),
    url('/creations/cocktails',                           0.90, 'monthly'),
    url('/creations/cocktails/classique',                 0.82, 'monthly'),
    url('/creations/cocktails/signature',                 0.82, 'monthly'),
    url('/creations/cocktails/prestige',                  0.82, 'monthly'),
    url('/creations/plateaux-aperitifs',                  0.84, 'monthly'),
    url('/creations/animations-culinaires',               0.84, 'monthly'),
    url('/creations/boissons',                            0.78, 'monthly'),
    url('/creations/personnalisation',                    0.72, 'monthly'),
    url('/creations/coffrets-cadeaux',                    0.70, 'monthly'),
    url('/creations/receptions-sur-mesure',               0.78, 'monthly'),
    url('/creations/evenements-saisonniers',              0.88, 'monthly'),

    // L'Univers
    url('/univers/notre-maison',                          0.72, 'monthly'),
    url('/univers/nos-artisans',                          0.72, 'monthly'),
    url('/univers/nos-engagements',                       0.68, 'monthly'),
    url('/univers/notre-methode',                         0.50, 'yearly'),
    url('/univers/cas-clients',                           0.60, 'monthly'),
    url('/univers/avis-clients',                          0.60, 'monthly'),
    url('/tarifs',                                        0.80, 'monthly'),

    // À propos

    // Page en anglais (GEO)
    url('/corporate-catering-paris',                      0.70, 'monthly'),

    // Journal
    url('/journal',                                       0.70, 'weekly'),

    // Occasions, hub
    url('/occasions',                                     0.85, 'monthly'),

    // SEO local, hub
    url('/traiteur',                                      0.88, 'monthly'),

    // SEO thématique, traiteur halal & inclusif
    url('/traiteur-halal',                                0.90, 'monthly'),
    url('/traiteur-eco-responsable',                      0.88, 'monthly'),
    url('/traiteur-healthy',                              0.88, 'monthly'),

    // Pages légales
    url('/mentions-legales',                              0.2,  'yearly'),
    url('/cgv',                                           0.2,  'yearly'),
    url('/confidentialite',                               0.2,  'yearly'),
    url('/cookies',                                       0.2,  'yearly'),
  ]

  // ── Fiches produit petits-déjeuners ───────────────────────────────
  const productPages = PRODUCTS.map(p => url(
    `/creations/petits-dejeuners-et-pauses/${p.id}`,
    0.85, 'monthly'
  ))

  // ── Événements saisonniers ────────────────────────────────────────
  const eventPages = evenements.map(ev => url(
    `/creations/evenements-saisonniers/${ev.slug}`,
    0.82, 'monthly'
  ))

  // ── Fiches leaf boissons (données dans lib/, importables côté serveur) ─
  const leafPages = [
    ...BOISSONS.map(b => url(`/creations/boissons/${b.id}`, 0.72, 'monthly')),
    ...PLATEAUX_REPAS.map(p => url(`/creations/plateaux-repas/${p.id}`, 0.82, 'monthly')),
    ...LUNCHBOX_SLUGS.map(s => url(`/creations/lunch-box/${s}`, 0.80, 'monthly')),
    ...APERITIFS_SLUGS.map(s => url(`/creations/plateaux-aperitifs/${s}`, 0.78, 'monthly')),
    ...PAUSES_SLUGS.map(s => url(`/creations/pauses-gourmandes/${s}`, 0.80, 'monthly')),
    ...COCKTAILS_SLUGS.map(s => url(`/creations/cocktails/${s}`, 0.80, 'monthly')),
    ...ANIMATIONS.map(a => url(`/creations/animations-culinaires/${slugAnim(a.nom)}`, 0.78, 'monthly')),
    // Fiches artisans : fournisseurs nommés et vérifiables (un MOF parmi eux),
    // c'est le contenu que Google et les moteurs d'IA valorisent le plus. Elles
    // étaient en ligne et liées, mais absentes du sitemap.
    ...ARTISANS.map(a => url(`/univers/nos-artisans/${a.slug}`, 0.70, 'monthly')),
    url('/contact/rendez-vous', 0.60, 'monthly'),
  ]

  // ── Occasions / Pour vos événements ──────────────────────────────
  const occasionPages = OCCASIONS.map(o => url(
    `/occasions/${o.slug}`,
    0.82, 'monthly'
  ))

  // ── Articles du journal ───────────────────────────────────────────
  const journalPages = articles.map(a => ({
    url: `${BASE_URL}/journal/${a.slug}`,
    lastModified: a.isoDate ? new Date(a.isoDate).toISOString() : NOW,
    priority: 0.75,
    changeFrequency: 'yearly',
  }))

  // ── SEO local, villes ────────────────────────────────────────────
  const cityPages = CITIES.map(c => url(
    `/traiteur/${c.slug}`,
    0.85, 'monthly'
  ))

  // ── SEO local, quartiers ─────────────────────────────────────────
  const quartierPages = CITIES.flatMap(c =>
    (c.quartiers ?? []).map(q => url(
      `/traiteur/${c.slug}/${q.slug}`,
      0.80, 'monthly'
    ))
  )

  // ── SEO local, petit-déjeuner + ville ─────────────────────────────
  const pdjVillePages = PDJ_VILLES.map(c => url(
    `/petit-dejeuner-entreprise/${c.slug}`,
    0.85, 'monthly'
  ))

  // ── SEO local, plateaux repas d'entreprise + ville ────────────────
  const plateauxVillePages = PLATEAUX_VILLES.map(c => url(
    `/plateaux-repas-entreprise/${c.slug}`,
    0.85, 'monthly'
  ))

  // ── SEO thématique, sous-pages du traiteur halal (/traiteur-halal/[slug]) ──
  const halalPages = HALAL_PAGES.map(p => ({
    url: `${BASE_URL}/traiteur-halal/${p.slug}`,
    lastModified: '2026-10-13T00:00:00.000Z',
    priority: 0.88,
    changeFrequency: 'monthly',
  }))

  // ── Version anglaise ──────────────────────────────────────────────
  // Seules les pages réellement traduites entrent au sitemap : annoncer à
  // Google une adresse qui n'existe pas coûte plus cher que de l'omettre.
  const enPages = [
    ...Object.values(EN_PAGES).map(pg => url(`/en${pg.fr}`, 0.80, 'monthly')),
    ...slugsLunchBoxEn().map(id => url(`/en/creations/lunch-box/${id}`, 0.74, 'monthly')),
    ...slugsPlateauxRepasEn().map(id => url(`/en/creations/plateaux-repas/${id}`, 0.76, 'monthly')),
    ...slugsPetitsDejeunersEn().map(id => url(`/en/creations/petits-dejeuners-et-pauses/${id}`, 0.78, 'monthly')),
    ...slugsPausesEn().map(id => url(`/en/creations/pauses-gourmandes/${id}`, 0.74, 'monthly')),
    ...slugsBoissonsEn().map(id => url(`/en/creations/boissons/${id}`, 0.68, 'monthly')),
    ...slugsPlateauxAperitifsEn().map(id => url(`/en/creations/plateaux-aperitifs/${id}`, 0.74, 'monthly')),
    ...cheminsAnimationsEn().map(c => url(`/en${c}`, 0.72, 'monthly')),
    ...clesCocktailsEn().map(k => url(`/en/creations/cocktails/${k}`, 0.78, 'monthly')),
    url('/en', 0.90, 'weekly'),   // accueil anglais
    ...INDEX_FAMILLES_EN.map(c => url(`/en${c}`, 0.80, 'weekly')),
    ...UNIVERS_EN.map(c => url(`/en${c}`, 0.72, 'monthly')),
    ...slugsArtisansEn().map(s => url(`/en/univers/nos-artisans/${s}`, 0.68, 'monthly')),
    ...cheminsVillesEn().map(c => url(`/en${c}`, 0.70, 'monthly')),
    url('/en/contact', 0.60, 'monthly'),
    url('/en/devis', 0.70, 'monthly'),
    url('/en/journal', 0.76, 'weekly'),
    ...enSlugs().map(slug => url(`/en/journal/${slug}`, 0.70, 'monthly')),
  ]

  const all = [
    ...staticPages,
    ...productPages,
    ...eventPages,
    ...leafPages,
    ...occasionPages,
    ...journalPages,
    ...cityPages,
    ...quartierPages,
    ...pdjVillePages,
    ...plateauxVillePages,
    ...halalPages,
    ...enPages,
  ]

  // Dédup par URL : certaines pages (cocktails/classique·signature·prestige,
  // plateaux partagés) sont référencées à la fois en dur et via un slug généré.
  // On garde la première occurrence (priorité la plus haute, listée en premier).
  const seen = new Set()
  return all.filter(e => (seen.has(e.url) ? false : (seen.add(e.url), true)))
}
