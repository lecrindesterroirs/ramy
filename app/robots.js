export default function robots() {
  const disallow = ['/api/', '/panier', '/commande-confirmee']
  // Crawlers IA nommés : on garde explicitement l'accès ouvert (visibilité
  // ChatGPT / Perplexity / AI Overviews) pour qu'un futur blocage générique
  // ne le coupe pas par inadvertance.
  const aiBots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow },
      ...aiBots.map(userAgent => ({ userAgent, allow: '/', disallow })),
    ],
    sitemap: 'https://www.lecrin-traiteur.fr/sitemap.xml',
  }
}
