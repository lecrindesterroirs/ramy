// JSON-LD réutilisable pour les pages catégories : fil d'Ariane + liste d'items.
// Rendu côté serveur (SSR) même dans une page 'use client'.
const SITE = 'https://www.lecrin-traiteur.fr'

export default function CategoryJsonLd({ name, path, items }) {
  const graph = [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${path}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE },
        { '@type': 'ListItem', position: 2, name, item: `${SITE}${path}` },
      ],
    },
  ]

  if (items && items.length) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${SITE}${path}#itemlist`,
      name,
      numberOfItems: items.length,
      itemListElement: items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        url: `${SITE}${it.url}`,
      })),
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  )
}
