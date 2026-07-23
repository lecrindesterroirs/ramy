#!/usr/bin/env node
// Soumet des URLs à IndexNow (Bing, Yandex…) pour un crawl quasi-instantané.
//
// Usage :
//   node scripts/indexnow-submit.mjs                         → ping la home (freshness)
//   node scripts/indexnow-submit.mjs /journal/mon-article    → ping des URLs ciblées
//   node scripts/indexnow-submit.mjs --all                   → soumet TOUTES les URLs du sitemap
//
// Robustesse : ce script n'échoue JAMAIS le build (toujours exit 0). Il est
// appelé en postbuild uniquement en prod (voir package.json).

const HOST = 'www.lecrin-traiteur.fr'
const KEY = '07e4de1e2e68c09888d57ce7738ee16d'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`
const SITEMAP = `https://${HOST}/sitemap.xml`

// Récupère toutes les <loc> du sitemap. IndexNow accepte jusqu'à 10 000 URLs
// par requête, largement au-dessus de la taille du site.
async function sitemapUrls() {
  const res = await fetch(SITEMAP)
  if (!res.ok) throw new Error(`sitemap ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map(m => m[1])
}

async function main() {
  const args = process.argv.slice(2)
  let urlList
  if (args.includes('--all') || args.includes('--sitemap')) {
    urlList = await sitemapUrls()
  } else {
    const paths = args.length ? args : ['/']
    urlList = paths.map(p => (p.startsWith('http') ? p : `https://${HOST}${p.startsWith('/') ? '' : '/'}${p}`))
  }

  if (!urlList.length) {
    console.warn('[indexnow] aucune URL à soumettre')
    return
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  })
  console.log(`[indexnow] ${res.status} ${res.statusText} — ${urlList.length} URL(s) soumise(s)`)
}

main().catch(err => {
  console.warn('[indexnow] soumission ignorée:', err?.message || err)
  process.exit(0)
})
