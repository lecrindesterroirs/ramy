import { OCCASIONS } from '../../../lib/occasionsData'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const o = OCCASIONS.find(o => o.slug === slug)
  if (!o) return {}

  return {
    title: `${o.seoTitle} | L'Écrin Traiteur`,
    description: o.seoDescription,
    openGraph: {
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
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
