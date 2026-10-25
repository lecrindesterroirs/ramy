// Réglages du bandeau de campagne qui pilotent la mise en page : dates, id, pages exclues.
// Ils sont lus à deux endroits : components/PromoBanner.js (affichage du bandeau) et le petit
// script de app/layout.js, qui pose les classes `promo-on` et `ads-mobile-epure` sur <html>
// AVANT le premier affichage. Sans ce script, les classes étaient posées après l'hydratation
// du JavaScript et toute la page descendait de 44 px d'un coup (décalage de mise en page,
// CLS 0,27 sur la page petit-déjeuner et 0,06 sur les villes en test mobile du 19/10/2026).
// Pour changer de campagne : modifier ici l'id et les dates, et le texte dans PromoBanner.js.
export const PROMO = {
  id: 'octobre-rose-2026',                 // change d'id = bandeau réaffiché à tous
  debut: '2026-09-25',                     // affiché à partir de (inclus)
  fin: '2026-11-01',                       // masqué à partir de (exclu)
  exclus: ['/devis', '/calculateur-quantites/embed', '/en/calculateur-quantites/embed'],                      // pages sans navbar : pas de bandeau
  // Pages d'atterrissage Google Ads : sur téléphone, ni ce bandeau ni le défilant
  pagesAdsMobile: ['/creations/petits-dejeuners-et-pauses'],
}

export const PROMO_PRELOAD_SCRIPT = `(function(){try{var P=${JSON.stringify(PROMO)},d=document.documentElement,p=location.pathname,w=window.innerWidth;var ex=P.exclus.some(function(x){return p===x||p.indexOf(x+'/')===0});var epure=w<=768&&P.pagesAdsMobile.indexOf(p)>-1;if(epure)d.classList.add('ads-mobile-epure');if(ex||epure)return;var n=new Date();if(!(n>=new Date(P.debut+'T00:00:00')&&n<new Date(P.fin+'T00:00:00')))return;try{if(localStorage.getItem('promo-dismissed')===P.id)return}catch(e){}d.classList.add('promo-on')}catch(e){}})()`
