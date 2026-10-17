import { notFound } from 'next/navigation'
import InfoPage from '../../../components/InfoPage'
import { EN_PAGES } from '../../../lib/enPages'
import { businessNode, BUSINESS_ID } from '../../../lib/site'
import { ogImages } from '../../../lib/og'

// Chaque page anglaise reprend le hero de son équivalent français.
const EN_HEROS = {
  'office-breakfast-paris': '/hero-petitdej.webp',
  'office-lunch-paris': '/hero-plateaux-essentiel.webp',
  'cocktail-reception-paris': '/hero-cocktail.webp',
  'halal-catering-paris': '/hero-petitdej.webp',
  'pricing': '/hero-plateaux-essentiel.webp',
}

const BASE = 'https://www.lecrin-traiteur.fr'

export function generateStaticParams() {
  return Object.keys(EN_PAGES).map(slug => ({ slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }) {
  const pg = EN_PAGES[params.slug]
  if (!pg) return {}
  const path = `/en/${params.slug}`
  return {
    title: { absolute: pg.metaTitle },
    description: pg.description,
    alternates: { canonical: path, languages: { en: path, fr: pg.fr } },
    openGraph: {
      images: ogImages(EN_HEROS[params.slug] || '/hero-bg2.webp', "L'Écrin Traiteur, corporate caterer in Paris"),
      title: pg.metaTitle,
      description: pg.description,
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function EnPage({ params }) {
  const pg = EN_PAGES[params.slug]
  if (!pg) notFound()
  const path = `/en/${params.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${BASE}${path}#page`, url: `${BASE}${path}`, name: pg.title, inLanguage: 'en', dateModified: '2026-10-17', about: { '@id': BUSINESS_ID } },
      businessNode(),
    ],
  }
  return (
    <InfoPage
      lang="en"
      eyebrow={pg.eyebrow}
      title={pg.title}
      intro={pg.intro}
      sections={pg.sections}
      faq={pg.faq}
      jsonLd={jsonLd}
      breadcrumb={[{ name: 'Home', path: '' }, { name: 'Corporate catering in Paris', path: '/corporate-catering-paris' }, { name: pg.title, path }]}
    />
  )
}
