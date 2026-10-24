/** @type {import('next').NextConfig} */

// CSP en ENFORCE (validé sans violation en Report-Only, GTM/GA/Ads inclus).
// 'unsafe-inline' requis (styles inline React + blocs <style>/JSON-LD, hydratation
// Next). Whitelist : Vercel analytics + googletagmanager/google-analytics/
// analytics.google.com + doubleclick/googleadservices/google.com/.fr (Ads).
// ⚠️ Ajouter tout nouveau service tiers ici avant de le brancher, sinon il sera bloqué.
// ⚠️ analytics.google.com EN PLUS de *.analytics.google.com : GA4 envoie /g/collect au domaine NU
// (le wildcard *.analytics.google.com ne matche PAS l'apex) → sinon page_view bloqué par le CSP.
const GA_GTM = 'https://www.googletagmanager.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com'
// ADS doit aussi être dans script-src : le pixel de conversion charge un SCRIPT depuis googleads.g.doubleclick.net
// pagead2.googlesyndication.com : pings sans cookie du Consent Mode quand le visiteur refuse (bandeau cookies).
const ADS = 'https://*.doubleclick.net https://*.googleadservices.com https://www.google.com https://www.google.fr https://pagead2.googlesyndication.com'
// PostHog, hébergement Europe : script depuis eu-assets, événements vers eu.i.posthog.com.
const POSTHOG = 'https://eu.i.posthog.com https://eu-assets.i.posthog.com'
// Interface PostHog : la barre d'outils (cartes de chaleur) lit ses données sur eu.posthog.com,
// et la page « Heatmaps » de PostHog affiche le site dans un cadre.
const POSTHOG_UI = 'https://eu.posthog.com'
// Identification des entreprises visiteuses : Leadfeeder et Leadinfo (components/DeferredEntreprises.js).
// cdn.ldnfrpl.com est le CDN que Leadfeeder sert aujourd'hui : sans lui, son
// script est bloqué par la CSP et l'outil ne remonte rien (constaté le 17/10/2026).
const LEADS = 'https://*.lfeeder.com https://*.leadfeeder.com https://cdn.ldnfrpl.com https://*.ldnfrpl.com https://*.leadinfo.net https://*.leadinfo.com'
// Calendly (prise de rendez-vous /contact/rendez-vous) : widget.js depuis assets.calendly.com,
// styles injectés depuis assets.calendly.com, iframe de réservation depuis calendly.com, avatars/images *.calendly.com
const CALENDLY = 'https://assets.calendly.com https://*.calendly.com'
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://assets.calendly.com https://lecrin-analytics.vercel.app ${GA_GTM} ${ADS} ${POSTHOG} ${LEADS}`,
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
  `img-src 'self' data: blob: https://images.unsplash.com https://*.googleusercontent.com ${CALENDLY} ${GA_GTM} ${ADS} ${LEADS}`,
  "font-src 'self' data:",
  `connect-src 'self' https://vitals.vercel-insights.com https://lecrin-analytics.vercel.app ${CALENDLY} ${GA_GTM} ${ADS} ${POSTHOG} ${POSTHOG_UI} ${LEADS}`,
  // L'enregistrement de sessions PostHog compresse dans un worker créé depuis un blob.
  "worker-src 'self' blob:",
  `frame-src https://calendly.com https://www.googletagmanager.com https://td.doubleclick.net https://*.doubleclick.net https://www.google.com`,
  `frame-ancestors 'self' ${POSTHOG_UI}`,
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy', value: csp },
]

const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 828, 1080, 1200, 1600, 1920],
    imageSizes: [48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2678400, // 31 jours de cache sur /_next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      /* Version anglaise : un seul schéma d'adresses, /en suivi du chemin
         français (décision de Ramy, 17 octobre 2026). Les cinq adresses sur
         mesure d'origine étaient déjà dans le sitemap et dans llms.txt : on
         les redirige plutôt que de les laisser tomber en 404. */
      // Fusion des deux pages anglaises concurrentes (24 oct. 2026) : /en/traiteur garde tout
      // Cocktail d'entreprise : le guide est fusionné dans la carte (décision de Ramy, 24 oct. 2026)
      { source: '/occasions/cocktail-entreprise', destination: '/creations/cocktails', permanent: true },
      { source: '/en/occasions/cocktail-entreprise', destination: '/en/creations/cocktails', permanent: true },
      { source: '/corporate-catering-paris', destination: '/en/traiteur', permanent: true },
      { source: '/en/pricing', destination: '/en/tarifs', permanent: true },
      { source: '/en/office-breakfast-paris', destination: '/en/creations/petits-dejeuners-et-pauses', permanent: true },
      { source: '/en/office-lunch-paris', destination: '/en/creations/plateaux-repas', permanent: true },
      { source: '/en/cocktail-reception-paris', destination: '/en/creations/cocktails', permanent: true },
      { source: '/en/halal-catering-paris', destination: '/en/traiteur-halal', permanent: true },
      // Ancienne section « Cocktails & Buffets » supprimée → redirigée vers /creations/cocktails
      { source: '/creations/cocktails-et-buffets', destination: '/creations/cocktails', permanent: true },
      { source: '/creations/cocktails-et-buffets/:slug*', destination: '/creations/cocktails', permanent: true },
      // Fiche artisan retirée (décision de Ramy, 22 oct. 2026 : fournisseur non nommé publiquement)
      { source: '/univers/nos-artisans/un-passage-a-lautre', destination: '/univers/nos-artisans', permanent: true },
      { source: '/en/univers/nos-artisans/un-passage-a-lautre', destination: '/en/univers/nos-artisans', permanent: true },
      // Animations renommées → anciennes URLs redirigées vers les nouveaux slugs
      // Formule cocktail du Chef Stuart retirée du site (oct. 2026)
      { source: '/creations/cocktails/chef-stuart', destination: '/creations/cocktails', permanent: true },
      // Lunch box La Croustillante retirée de la carte (sept. 2026)
      { source: '/creations/lunch-box/lb8', destination: '/creations/lunch-box', permanent: true },
      // Gamme des coffrets Signature lunch box retirée (sept. 2026)
      { source: '/creations/lunch-box/lb:n(5|7|10)', destination: '/creations/lunch-box', permanent: true },
      // Coffret La Piémontaise retiré de la carte (sept. 2026)
      { source: '/creations/lunch-box/lb6', destination: '/creations/lunch-box', permanent: true },
      // Citronnade JOMO retirée de la carte (sept. 2026) → infusion citron vert & gingembre
      { source: '/creations/boissons/citronnade-gingembre', destination: '/creations/boissons/infusion-gingembre-1l', permanent: true },
      // Gamme Signature des plateaux repas supprimée (sept. 2026) → collection Essentiel
      { source: '/creations/plateaux-repas/s:n(\\d+)', destination: '/creations/plateaux-repas', permanent: true },
      // Plateau de fruits frais retiré de la carte (sept. 2026) → brochettes
      { source: '/creations/pauses-gourmandes/plateau-fruits-frais', destination: '/creations/pauses-gourmandes/brochettes-fruits', permanent: true },
      { source: '/creations/petits-dejeuners-et-pauses/plateau-fruits-frais', destination: '/creations/petits-dejeuners-et-pauses/brochettes-fruits', permanent: true },
      { source: '/creations/animations-culinaires/atelier-ufs', destination: '/creations/animations-culinaires/oeufs-brouilles-minute', permanent: true },
      { source: '/creations/animations-culinaires/atelier-saumon', destination: '/creations/animations-culinaires/decoupe-de-saumon-frais', permanent: true },
      { source: '/creations/animations-culinaires/atelier-pasta', destination: '/creations/animations-culinaires/pasta-italienne-minute', permanent: true },
      { source: '/creations/animations-culinaires/atelier-bagels', destination: '/creations/animations-culinaires/atelier-bagels-de-new-york', permanent: true },
      // Pages supprimées → redirigées vers /univers/notre-maison
      { source: '/a-propos', destination: '/univers/notre-maison', permanent: true },
      { source: '/univers/notre-savoir-faire', destination: '/univers/notre-maison', permanent: true },
      { source: '/univers/notre-philosophie', destination: '/univers/notre-maison', permanent: true },
      // Ancienne boutique en ligne archivée (modèle passé au devis B2B) → accueil
      { source: '/boutique', destination: '/', permanent: true },
      { source: '/boutique/:path*', destination: '/', permanent: true },
      // Variante racine de l'ancienne section cocktails & buffets → /creations/cocktails
      { source: '/cocktails-et-buffets', destination: '/creations/cocktails', permanent: true },
      { source: '/cocktails-et-buffets/:slug*', destination: '/creations/cocktails', permanent: true },
      // Ancien hub /creations (pas de page d'index) → catégorie principale
      { source: '/creations', destination: '/creations/petits-dejeuners-et-pauses', permanent: true },
    ]
  },
  async headers() {
    return [
      // En-têtes de sécurité sur toutes les routes
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Cache long et immuable sur les polices (noms de fichiers stables)
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // Cache long sur les images/assets statiques de /public
      {
        source: '/:path*.(jpg|jpeg|png|gif|webp|avif|svg|ico)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

export default nextConfig
