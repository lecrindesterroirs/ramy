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
const ADS = 'https://*.doubleclick.net https://*.googleadservices.com https://www.google.com https://www.google.fr'
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com ${GA_GTM} ${ADS}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: https://images.unsplash.com https://*.googleusercontent.com ${GA_GTM} ${ADS}`,
  "font-src 'self' data:",
  `connect-src 'self' https://vitals.vercel-insights.com ${GA_GTM} ${ADS}`,
  `frame-src https://www.googletagmanager.com https://td.doubleclick.net https://*.doubleclick.net https://www.google.com`,
  "frame-ancestors 'self'",
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
      // Ancienne section « Cocktails & Buffets » supprimée → redirigée vers /creations/cocktails
      { source: '/creations/cocktails-et-buffets', destination: '/creations/cocktails', permanent: true },
      { source: '/creations/cocktails-et-buffets/:slug*', destination: '/creations/cocktails', permanent: true },
      // Animations renommées → anciennes URLs redirigées vers les nouveaux slugs
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
