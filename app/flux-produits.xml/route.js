import { PRODUCTS } from '../../lib/productsData'

// Flux produit Google Merchant Center, périmètre : Petits-déjeuners & Pauses.
// Format RSS 2.0 + namespace Google Shopping. Fetché par Merchant Center à l'URL /flux-produits.xml
const SITE = 'https://www.lecrin-traiteur.fr'
const CATEGORY_PATH = '/creations/petits-dejeuners-et-pauses'

const esc = (s = '') => String(s).replace(/[&<>"']/g, c => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
))

export const dynamic = 'force-static'
export const revalidate = 3600

export async function GET() {
  const items = PRODUCTS
    .filter(p => p.price != null && p.price !== '')
    .map(p => {
      const url = `${SITE}${CATEGORY_PATH}/${p.id}`
      const img = String(p.img || '').startsWith('http') ? p.img : `${SITE}${p.img}`
      const price = Number(String(p.price).replace(',', '.')).toFixed(2)
      const description = p.description || p.ingredients || p.name
      return `
    <item>
      <g:id>${esc(p.id)}</g:id>
      <g:title>${esc(p.name)}</g:title>
      <g:description>${esc(description)}</g:description>
      <g:link>${esc(url)}</g:link>
      <g:image_link>${esc(img)}</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>${price} EUR</g:price>
      <g:brand>L'Écrin Traiteur</g:brand>
      <g:condition>new</g:condition>
      <g:identifier_exists>no</g:identifier_exists>
      <g:google_product_category>Food, Beverages &amp; Tobacco &gt; Food Items &gt; Prepared Foods</g:google_product_category>
      <g:product_type>${esc(p.categoryLabel || 'Petits-déjeuners &amp; Pauses')}</g:product_type>
    </item>`
    })
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>L'Écrin Traiteur, Petits-déjeuners &amp; Pauses</title>
    <link>${SITE}</link>
    <description>Produits traiteur d'entreprise, petits-déjeuners et pauses gourmandes livrés à Paris &amp; Île-de-France.</description>${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
