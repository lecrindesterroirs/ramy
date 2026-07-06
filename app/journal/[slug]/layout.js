import { articles } from '../../../lib/journalData'

export async function generateMetadata({ params }) {
  const article = articles.find(a => a.slug === params.slug)
  if (!article) return {}
  return {
    title: article.titre,
    description: article.extrait,
    alternates: { canonical: `/journal/${params.slug}` },
    openGraph: {
      title: `${article.titre} | L'Écrin Traiteur`,
      description: article.extrait,
    },
  }
}

export default function Layout({ children }) {
  return children
}
