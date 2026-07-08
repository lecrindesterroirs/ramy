/**
 * L'Écrin Traiteur, WordPress REST API client
 */

const WP_URL = process.env.NEXT_PUBLIC_WP_URL || 'http://ecrin.local'
const API = `${WP_URL}/wp-json/wp/v2`
const REVALIDATE = 60

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function stripHtml(html = '') {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&').replace(/&#038;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#039;/g, "'")
    .replace(/&#8216;/g, '‘').replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“').replace(/&#8221;/g, '”')
    .replace(/&#8211;/g, '-').replace(/&#8212;/g, ', ')
    .replace(/&nbsp;/g, ' ')
    .trim()
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

function featuredImg(post, fallback = '/creations-featured.webp') {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || fallback
}

async function wpFetch(url) {
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE } })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

// ─── Articles (Journal) ───────────────────────────────────────────────────────

export async function getArticles({ perPage = 12 } = {}) {
  const posts = await wpFetch(`${API}/posts?per_page=${perPage}&_embed&status=publish`)
  if (!Array.isArray(posts) || posts.length === 0) return []
  return posts.map(p => ({
    id: p.id,
    slug: p.slug,
    titre: stripHtml(p.title?.rendered || ''),
    extrait: stripHtml(p.excerpt?.rendered || ''),
    contenu: p.content?.rendered || '',
    date: formatDate(p.date),
    categorie: p._embedded?.['wp:term']?.[0]?.[0]?.name || 'Actualités',
    img: p.image_url || featuredImg(p, '/hero-petits-dejeuners.webp'),
  }))
}

// ─── Produits ─────────────────────────────────────────────────────────────────

export async function getProduits() {
  const items = await wpFetch(`${API}/produit?per_page=50&_embed&status=publish`)
  if (!Array.isArray(items) || items.length === 0) return []
  return items.map(p => ({
    id: p.id,
    slug: p.slug,
    name: stripHtml(p.title?.rendered || ''),
    label: "L'Écrin Paris",
    img: featuredImg(p),
    description: stripHtml(p.excerpt?.rendered || ''),
    prix: p.prix || '',
    soustitre: p.sous_titre || '',
    categories: p._embedded?.['wp:term']?.[0]?.map(t => t.slug) || [],
  }))
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export async function getFAQ() {
  const items = await wpFetch(`${API}/faq?per_page=20&orderby=menu_order&order=asc`)
  if (!Array.isArray(items) || items.length === 0) return []
  return items.map(p => ({
    id: p.id,
    question: stripHtml(p.title?.rendered || ''),
    reponse: stripHtml(p.content?.rendered || ''),
  }))
}

// ─── Témoignages ─────────────────────────────────────────────────────────────

export async function getTemoignages() {
  const items = await wpFetch(`${API}/temoignage?per_page=10&status=publish`)
  if (!Array.isArray(items) || items.length === 0) return []
  return items.map(p => ({
    id: p.id,
    quote: stripHtml(p.content?.rendered || ''),
    auteur: p.auteur || '',
    entreprise: p.entreprise || '',
    poste: p.poste || '',
  }))
}

// ─── Équipe ──────────────────────────────────────────────────────────────────

export async function getEquipe() {
  const items = await wpFetch(`${API}/equipe?per_page=10&_embed&status=publish`)
  if (!Array.isArray(items) || items.length === 0) return []
  return items.map(p => ({
    id: p.id,
    prenom: p.prenom || stripHtml(p.title?.rendered || ''),
    nom: p.nom || '',
    role: p.role || '',
    bio: p.bio || stripHtml(p.content?.rendered || ''),
    img: featuredImg(p, '/creations-featured.webp'),
  }))
}
