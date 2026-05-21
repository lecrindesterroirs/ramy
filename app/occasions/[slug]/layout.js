import { OCCASIONS } from '../../../lib/occasionsData'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const o = OCCASIONS.find(o => o.slug === slug)
  if (!o) return {}

  return {
    title: `${o.seoTitle} | L'Écrin Traiteur`,
    description: o.seoDescription,
    openGraph: {
      title: o.seoTitle,
      description: o.seoDescription,
      locale: 'fr_FR',
      type: 'article',
    },
    alternates: {
      canonical: `/occasions/${slug}`,
    },
  }
}

export default function OccasionLayout({ children }) {
  return children
}
