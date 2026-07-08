// JSON-LD fil d'Ariane pur (BreadcrumbList) — INVISIBLE, pour Google uniquement.
// Aucun rendu visuel : ne remplace pas le fil d'Ariane visible (réservé aux fiches
// produit). items: [{ name, path }] du plus haut au plus bas ; le dernier = page courante.
// path '' = racine du site. Rendu côté serveur même dans une page 'use client'.
const SITE = 'https://www.lecrin-traiteur.fr'

export default function BreadcrumbJsonLd({ items = [] }) {
  if (!items.length) return null
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path || ''}`,
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
