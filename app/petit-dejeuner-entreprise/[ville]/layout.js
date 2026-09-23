import { PDJ_VILLES } from '../../../lib/pdjVillesData'

export function generateStaticParams() {
  return PDJ_VILLES.map(c => ({ ville: c.slug }))
}

export async function generateMetadata({ params }) {
  const { ville } = await params
  const city = PDJ_VILLES.find(c => c.slug === ville)
  if (!city) {
    return { title: "Petit-déjeuner d'entreprise | L'Écrin Traiteur" }
  }

  return {
    title: { absolute: `${city.metaTitle} | L'Écrin Traiteur` },
    description: city.metaDescription,
    openGraph: {
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
      title: `${city.metaTitle} | L'Écrin Traiteur`,
      description: city.metaDescription,
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: {
      canonical: `/petit-dejeuner-entreprise/${city.slug}`,
    },
  }
}

export default function PdjVilleLayout({ children }) {
  return children
}
