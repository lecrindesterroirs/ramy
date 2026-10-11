/*
  Mesure d'audience et de publicité : active par défaut, sans bandeau
  (choix de Ramy, octobre 2026). Le visiteur peut la refuser depuis la page
  « Politique de cookies » ; son refus est conservé et pilote :
  - Google (GA4 + Ads, via GTM) par le Consent Mode v2 ;
  - PostHog (cookies et enregistrement de sessions).
*/
export const CONSENT_KEY = 'lecrin-consent'
export const CONSENT_EVENT = 'lecrin:consent'

// 'denied' si le visiteur a refusé, sinon null (mesure active).
export function readConsent() {
  try {
    const c = JSON.parse(window.localStorage.getItem(CONSENT_KEY) || 'null')
    return c?.choice === 'denied' ? 'denied' : null
  } catch (e) {
    return null
  }
}

export function googleConsent(choice) {
  const v = choice === 'denied' ? 'denied' : 'granted'
  return { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v }
}

// Au refus, on retire les cookies de mesure déjà posés.
function supprimerCookiesDeMesure() {
  try {
    const hote = window.location.hostname
    const domaines = ['', hote, '.' + hote, '.' + hote.split('.').slice(-2).join('.')]
    document.cookie.split(';').forEach(c => {
      const nom = c.split('=')[0].trim()
      if (!/^(_ga|_gid|_gat|_gcl|ph_)/.test(nom)) return
      domaines.forEach(d => {
        document.cookie = `${nom}=; Max-Age=0; path=/` + (d ? `; domain=${d}` : '')
      })
    })
  } catch (e) { /* noop */ }
}

// choice : 'denied' (refuser la mesure) ou 'granted' (la réactiver).
export function writeConsent(choice) {
  try {
    if (choice === 'denied') {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, at: new Date().toISOString() }))
    } else {
      window.localStorage.removeItem(CONSENT_KEY)
    }
  } catch (e) { /* mode privé : le choix vaut pour la page en cours */ }
  if (choice === 'denied') supprimerCookiesDeMesure()
  window.dataLayer = window.dataLayer || []
  // Même forme que gtag() : GTM attend l'objet arguments, pas un tableau.
  function gtag() { window.dataLayer.push(arguments) }
  gtag('consent', 'update', googleConsent(choice))
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }))
}

/*
  Script en ligne, placé AVANT le chargement de GTM : ne fait rien pour la
  plupart des visiteurs (Google mesure comme avant) ; pose le refus si le
  visiteur a refusé la mesure sur la page Cookies.
*/
export const CONSENT_DEFAULT_SCRIPT = `(function(){
try{var c=JSON.parse(localStorage.getItem('${CONSENT_KEY}')||'null');
if(c&&c.choice==='denied'){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'})}}catch(e){}
})();`
