export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/panier',
        '/commande-confirmee',
        '/creations/coffrets-cadeaux',
      ],
    },
    sitemap: 'https://www.lecrin-traiteur.fr/sitemap.xml',
  }
}
