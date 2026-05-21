import { evenements } from './creations/evenements-saisonniers/evenementsData'
import { articles } from '../lib/journalData'
import { PRODUCTS } from '../lib/productsData'
import { CITIES } from '../lib/citiesData'
import { OCCASIONS } from '../lib/occasionsData'

const BASE_URL = 'https://www.lecrindesterroirs.fr'

export default function sitemap() {
  const staticPages = [
    // Pages prioritaires — conversion directe
    { url: BASE_URL,                                                     priority: 1.0,  changeFrequency: 'weekly'  },
    { url: `${BASE_URL}/devis`,                                          priority: 0.95, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`,                                        priority: 0.85, changeFrequency: 'monthly' },

    // Pages créations — cœur du catalogue
    { url: `${BASE_URL}/creations/petits-dejeuners-et-pauses`,          priority: 0.92, changeFrequency: 'weekly'  },
    { url: `${BASE_URL}/creations/cocktails-et-buffets`,                priority: 0.88, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/creations/plateaux-repas`,                      priority: 0.88, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/creations/boissons`,                            priority: 0.78, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/creations/evenements-saisonniers`,              priority: 0.88, changeFrequency: 'monthly' },

    // Pages univers — confiance & marque
    { url: `${BASE_URL}/univers/notre-maison`,                          priority: 0.72, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/univers/nos-artisans`,                          priority: 0.72, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/univers/nos-engagements`,                       priority: 0.68, changeFrequency: 'monthly' },

    // Journal — SEO longue traîne
    { url: `${BASE_URL}/journal`,                                        priority: 0.70, changeFrequency: 'weekly'  },

    // Pages légales — faible priorité, ne pas noindex
    { url: `${BASE_URL}/mentions-legales`,                               priority: 0.2,  changeFrequency: 'yearly'  },
    { url: `${BASE_URL}/cgv`,                                            priority: 0.2,  changeFrequency: 'yearly'  },
    { url: `${BASE_URL}/confidentialite`,                                priority: 0.2,  changeFrequency: 'yearly'  },
    { url: `${BASE_URL}/cookies`,                                        priority: 0.2,  changeFrequency: 'yearly'  },
  ]

  // Pages SEO local par ville — longue traîne géolocalisée
  const cityPages = [
    { url: `${BASE_URL}/traiteur`, priority: 0.88, changeFrequency: 'monthly' },
    ...CITIES.map(c => ({
      url: `${BASE_URL}/traiteur/${c.slug}`,
      priority: 0.85,
      changeFrequency: 'monthly',
    })),
  ]

  // Pages SEO quartier — longue traîne ultra-locale
  const quartierPages = CITIES.flatMap(c =>
    (c.quartiers ?? []).map(q => ({
      url: `${BASE_URL}/traiteur/${c.slug}/${q.slug}`,
      priority: 0.80,
      changeFrequency: 'monthly',
    }))
  )

  // Fiches produit individuelles — pages SEO longue traîne
  const productPages = PRODUCTS.map(p => ({
    url: `${BASE_URL}/creations/petits-dejeuners-et-pauses/${p.id}`,
    priority: 0.85,
    changeFrequency: 'monthly',
  }))

  // Pages événements saisonniers
  const eventPages = evenements.map(ev => ({
    url: `${BASE_URL}/creations/evenements-saisonniers/${ev.slug}`,
    priority: 0.82,
    changeFrequency: 'monthly',
  }))

  // Articles de journal
  const journalPages = articles.map(a => ({
    url: `${BASE_URL}/journal/${a.slug}`,
    priority: 0.75,
    changeFrequency: 'monthly',
  }))

  // Pages "Pour vos événements" — SEO longue traîne par usage
  const occasionPages = OCCASIONS.map(o => ({
    url: `${BASE_URL}/occasions/${o.slug}`,
    priority: 0.82,
    changeFrequency: 'monthly',
  }))

  return [...staticPages, ...cityPages, ...quartierPages, ...occasionPages, ...productPages, ...eventPages, ...journalPages]
}
