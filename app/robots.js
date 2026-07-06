export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/panier',
        '/commande-confirmee',
      ],
    },
    sitemap: 'https://www.lecrin-traiteur.fr/sitemap.xml',
  }
}
