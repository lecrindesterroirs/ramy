// Origine de la visite (clic Google Ads, UTM, site référent), mémorisée dans le
// navigateur puis jointe aux formulaires. Arrive dans l'OS sous raw.attribution
// (table demandes_entrantes) pour savoir d'où vient chaque demande.

const KEY = 'lecrin_attribution'
const PARAMS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

function read() {
  try { return JSON.parse(localStorage.getItem(KEY)) } catch { return null }
}

// À appeler à l'arrivée sur le site. Une visite avec gclid/UTM remplace l'origine
// mémorisée ; une visite sans paramètre ne l'écrase jamais.
export function captureAttribution() {
  try {
    const qs = new URLSearchParams(window.location.search)
    const tagged = {}
    for (const p of PARAMS) {
      const v = qs.get(p)
      if (v) tagged[p] = v.slice(0, 200)
    }
    const hasTag = Object.keys(tagged).length > 0
    if (!hasTag && read()) return

    let referrer = ''
    try {
      const host = document.referrer ? new URL(document.referrer).hostname : ''
      if (host && host !== window.location.hostname) referrer = host
    } catch {}

    localStorage.setItem(KEY, JSON.stringify({
      ...tagged,
      referrer,
      landing: window.location.pathname,
      at: new Date().toISOString(),
    }))
  } catch {}
}

export function getAttribution() {
  if (typeof window === 'undefined') return null
  return read()
}
