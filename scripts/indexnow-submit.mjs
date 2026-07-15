#!/usr/bin/env node
// Soumet des URLs à IndexNow (Bing, Yandex…) pour un crawl quasi-instantané.
//
// Usage :
//   node scripts/indexnow-submit.mjs                         → ping la home (freshness)
//   node scripts/indexnow-submit.mjs /journal/mon-article    → ping des URLs ciblées
//
// Robustesse : ce script n'échoue JAMAIS le build (toujours exit 0). Il est
// appelé en postbuild uniquement en prod (voir package.json).

const HOST = 'www.lecrin-traiteur.fr'
const KEY = '07e4de1e2e68c09888d57ce7738ee16d'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

async function main() {
  const args = process.argv.slice(2)
  const paths = args.length ? args : ['/']
  const urlList = paths.map(p => (p.startsWith('http') ? p : `https://${HOST}${p.startsWith('/') ? '' : '/'}${p}`))

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
