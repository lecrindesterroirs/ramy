// Un clic sur un lien tel: déclenche une navigation quasi instantanée (ouverture
// du dialer), alors que GTM se charge en différé (cf. DeferredGTM) sur la 1ʳᵉ
// interaction — si CE clic est la 1ʳᵉ interaction, la page peut déjà avoir
// quitté le contexte avant que le script GTM n'ait fini de charger, et la
// conversion "Contact téléphone" n'est jamais envoyée à Google Ads.
// On intercepte le clic, pousse l'événement dans le dataLayer (la queue
// existe même avant que GTM ne soit chargé), puis on laisse un court délai
// au tag pour partir avant de naviguer vers tel:.
export function trackPhoneClick(e) {
  const href = e.currentTarget.getAttribute('href')
  if (typeof window === 'undefined' || !href) return
  e.preventDefault()
  ;(window.dataLayer = window.dataLayer || []).push({ event: 'phone_click', phone_number: href.replace('tel:', '') })
  setTimeout(() => { window.location.href = href }, 300)
}
