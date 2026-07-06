import { evenements } from './creations/evenements-saisonniers/evenementsData'
import { articles } from '../lib/journalData'
import { PRODUCTS } from '../lib/productsData'
import { CITIES } from '../lib/citiesData'
import { OCCASIONS } from '../lib/occasionsData'
import { FORMULES } from './creations/cocktails-et-buffets/formulesData'

const BASE_URL = 'https://www.lecrin-traiteur.fr'
const NOW = new Date().toISOString()

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
    url('/creations/cocktails-et-buffets',                0.80, 'monthly'),
    url('/creations/boissons',                            0.78, 'monthly'),
    url('/creations/personnalisation',                    0.72, 'monthly'),
    url('/creations/coffrets-cadeaux',                    0.70, 'monthly'),
    url('/creations/receptions-sur-mesure',               0.78, 'monthly'),
    url('/creations/evenements-saisonniers',              0.88, 'monthly'),

    // L'Univers
    url('/univers/notre-maison',                          0.72, 'monthly'),
    url('/univers/notre-savoir-faire',                    0.68, 'monthly'),
    url('/univers/nos-artisans',                          0.72, 'monthly'),
    url('/univers/nos-engagements',                       0.68, 'monthly'),
    url('/univers/notre-philosophie',                     0.66, 'monthly'),

    // À propos
    url('/a-propos',                                      0.70, 'monthly'),

    // Journal
    url('/journal',                                       0.70, 'weekly'),

    // SEO local — hub
    url('/traiteur',                                      0.88, 'monthly'),

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

  // ── Formules cocktails & buffets ──────────────────────────────────
  const formulePages = FORMULES.map(f => url(
    `/creations/cocktails-et-buffets/${f.slug}`,
    0.85, 'monthly'
  ))

  // ── Événements saisonniers ────────────────────────────────────────
  const eventPages = evenements.map(ev => url(
    `/creations/evenements-saisonniers/${ev.slug}`,
    0.82, 'monthly'
  ))

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

  // ── SEO local — villes ────────────────────────────────────────────
  const cityPages = CITIES.map(c => url(
    `/traiteur/${c.slug}`,
    0.85, 'monthly'
  ))

  // ── SEO local — quartiers ─────────────────────────────────────────
  const quartierPages = CITIES.flatMap(c =>
    (c.quartiers ?? []).map(q => url(
      `/traiteur/${c.slug}/${q.slug}`,
      0.80, 'monthly'
    ))
  )

  return [
    ...staticPages,
    ...productPages,
    ...formulePages,
    ...eventPages,
    ...occasionPages,
    ...journalPages,
    ...cityPages,
    ...quartierPages,
  ]
}
