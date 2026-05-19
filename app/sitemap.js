import { evenements } from './creations/evenements-saisonniers/evenementsData'
import { articles } from '../lib/journalData'

const BASE_URL = 'https://www.lecrindesterroirs.fr'

export default function sitemap() {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/devis`, priority: 0.95, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/creations/petits-dejeuners-et-pauses`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/creations/cocktails-et-buffets`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/creations/plateaux-repas`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/creations/boissons`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/creations/evenements-saisonniers`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/univers/notre-maison`, priority: 0.75, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/univers/nos-artisans`, priority: 0.75, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/journal`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/mentions-legales`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/cgv`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/confidentialite`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/cookies`, priority: 0.3, changeFrequency: 'yearly' },
  ]

  const eventPages = evenements.map(ev => ({
    url: `${BASE_URL}/creations/evenements-saisonniers/${ev.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly',
  }))

  const journalPages = articles.map(a => ({
    url: `${BASE_URL}/journal/${a.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
  }))

  return [...staticPages, ...eventPages, ...journalPages]
}
