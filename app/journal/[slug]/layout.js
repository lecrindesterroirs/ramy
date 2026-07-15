import { articles } from '../../../lib/journalData'

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const article = articles.find(a => a.slug === params.slug)
  if (!article) return {}
  return {
    title: article.titre,
    description: article.extrait,
    alternates: { canonical: `/journal/${params.slug}` },
    openGraph: {
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
      title: `${article.titre} | L'Écrin Traiteur`,
      description: article.extrait,
    },
  }
}

export default function Layout({ children }) {
  return children
}
