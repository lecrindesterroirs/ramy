// JSON-LD réutilisable pour les pages catégories : fil d'Ariane + liste d'items.
// Rendu côté serveur (SSR) même dans une page 'use client'.
import { CATEGORY_FAQ } from '../lib/categoryFaq'

const SITE = 'https://www.lecrin-traiteur.fr'

export default function CategoryJsonLd({ name, path, items, serviceType }) {
  const graph = [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${path}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE },
        { '@type': 'ListItem', position: 2, name, item: `${SITE}${path}` },
      ],
    },
    {
      // Prestation traiteur, renforce la pertinence "traiteur d'entreprise"
      '@type': 'Service',
      '@id': `${SITE}${path}#service`,
      name: `${name}, traiteur d'entreprise`,
      serviceType: serviceType || `Traiteur ${name}`,
      provider: { '@id': `${SITE}/#business` },
      areaServed: { '@type': 'State', name: 'Île-de-France' },
      url: `${SITE}${path}`,
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

  // FAQ logistique (faits citables par les IA — cohérents avec /traiteur et la home)
  graph.push({
    '@type': 'FAQPage',
    '@id': `${SITE}${path}#faq`,
    mainEntity: CATEGORY_FAQ.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  )
}
