export async function generateMetadata({ params }) {
  const { FORMULES } = await import('../formulesData')
  const formule = FORMULES.find(f => f.slug === params.slug)
  if (!formule) return {}
  return {
    title: formule.seoTitle,
    description: formule.descCourt,
    openGraph: {
      title: formule.seoTitle,
      description: formule.descCourt,
      images: [{ url: formule.img }],
    },
  }
}

export default function Layout({ children }) {
  return children
}
