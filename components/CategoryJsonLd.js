'use client'

// JSON-LD réutilisable pour les pages catégories : fil d'Ariane + liste d'items.
// Rendu avec la page, y compris côté serveur : les dix pages qui l'appellent
// sont toutes des composants client, donc lire le chemin ici ne bascule rien
// en rendu à la demande.
//
// La langue vient du chemin : sur /en/… le fil d'Ariane, le nom du service, la
// FAQ et les URL partaient en français, c'est-à-dire que les neuf pages
// anglaises de catégorie décrivaient aux machines la page française.
// nameEn : le nom de la catégorie en anglais, quand l'appelant l'a.
import { usePathname } from 'next/navigation'
import { estAnglais } from '../lib/i18nBase'
import { CATEGORY_FAQ, CATEGORY_FAQ_EN } from '../lib/categoryFaq'

const SITE = 'https://www.lecrin-traiteur.fr'

// includeFaq={false} : la page porte déjà son propre FAQPage (layout.js) ; éviter deux FAQPage concurrents.
export default function CategoryJsonLd({ name, nameEn, path, items, serviceType, includeFaq = true }) {
  const en = estAnglais(usePathname() || '/')
  const racine = en ? `${SITE}/en` : SITE
  // Certaines pages bilingues (coffrets-cadeaux) passent déjà un path préfixé :
  // on ne le préfixe pas deux fois.
  const chemin = path && path.startsWith('/en') ? path.slice(3) : path
  const url = `${racine}${chemin}`
  const nom = (en && nameEn) || name
  const graph = [
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: en ? 'Home' : 'Accueil', item: racine },
        { '@type': 'ListItem', position: 2, name: nom, item: url },
      ],
    },
    {
      // Prestation traiteur, renforce la pertinence "traiteur d'entreprise"
      '@type': 'Service',
      '@id': `${url}#service`,
      name: en ? `${nom}, corporate catering` : `${nom}, traiteur d'entreprise`,
      serviceType: serviceType || (en ? `${nom} catering` : `Traiteur ${nom}`),
      provider: { '@id': `${SITE}/#business` },
      areaServed: { '@type': 'State', name: 'Île-de-France' },
      url,
      inLanguage: en ? 'en' : 'fr',
    },
  ]

  if (items && items.length) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#itemlist`,
      name: nom,
      numberOfItems: items.length,
      itemListElement: items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        url: `${racine}${it.url.startsWith('/en') ? it.url.slice(3) : it.url}`,
      })),
    })
  }

  // FAQ logistique (faits citables par les IA — cohérents avec /traiteur et la home)
  if (includeFaq) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: en ? 'en' : 'fr',
      mainEntity: (en ? CATEGORY_FAQ_EN : CATEGORY_FAQ).map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
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
