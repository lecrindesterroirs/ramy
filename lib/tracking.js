// Un clic sur un lien tel: déclenche une navigation quasi instantanée (ouverture
// du dialer), alors que GTM se charge en différé (cf. DeferredGTM) sur la 1ʳᵉ
// interaction — si CE clic est la 1ʳᵉ interaction, la page peut déjà avoir
// quitté le contexte avant que le script GTM n'ait fini de charger, et la
// conversion "Contact téléphone" n'est jamais envoyée à Google Ads.
// On intercepte le clic, pousse l'événement dans le dataLayer (la queue
// existe même avant que GTM ne soit chargé), puis on laisse un court délai
// au tag pour partir avant de naviguer vers tel:.
/*
  Mesure des appels et des messages WhatsApp. Le dataLayer sert Google Ads (conversion
  « Contact téléphone »). PostHog reçoit en plus un événement `appel_clic` ou
  `whatsapp_clic` avec l'endroit du clic (`emplacement`, lu sur l'attribut
  data-emplacement du lien) et l'appareil : c'est ce qui permet de comparer mobile et
  ordinateur, que GA4 ne reçoit pas (aucun événement phone_click ni whatsapp_click
  dans GA4 sur les 56 jours relevés le 19/10/2026).
*/
function appareil() {
  const w = window.innerWidth
  return w < 768 ? 'mobile' : w < 1024 ? 'tablette' : 'ordinateur'
}

function capturePostHog(nom, proprietes) {
  try { window.posthog?.capture?.(nom, { ...proprietes, appareil: appareil() }) } catch (e) {}
}

export function trackPhoneClick(e) {
  const href = e.currentTarget.getAttribute('href')
  if (typeof window === 'undefined' || !href) return
  e.preventDefault()
  ;(window.dataLayer = window.dataLayer || []).push({ event: 'phone_click', phone_number: href.replace('tel:', '') })
  capturePostHog('appel_clic', { emplacement: e.currentTarget.getAttribute('data-emplacement') || 'autre', page: window.location.pathname })
  setTimeout(() => { window.location.href = href }, 300)
}

/** WhatsApp s'ouvre dans un nouvel onglet : pas de navigation à retenir, le clic part tout de suite. */
export function trackWhatsappClick(emplacement) {
  if (typeof window === 'undefined') return
  ;(window.dataLayer = window.dataLayer || []).push({ event: 'whatsapp_click', form_location: emplacement })
  capturePostHog('whatsapp_clic', { emplacement, page: window.location.pathname })
}
