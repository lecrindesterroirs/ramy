/** @type {import('next').NextConfig} */

// CSP en ENFORCE (validé sans violation en Report-Only, GTM/GA/Ads inclus).
// 'unsafe-inline' requis (styles inline React + blocs <style>/JSON-LD, hydratation
// Next). Whitelist : Vercel analytics + googletagmanager/google-analytics/
// analytics.google.com + doubleclick/googleadservices/google.com/.fr (Ads).
// ⚠️ Ajouter tout nouveau service tiers ici avant de le brancher, sinon il sera bloqué.
const GA_GTM = 'https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com'
const ADS = 'https://*.g.doubleclick.net https://*.googleadservices.com https://www.google.com https://www.google.fr'
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com ${GA_GTM} https://www.googleadservices.com`,
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
