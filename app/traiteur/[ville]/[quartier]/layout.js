import { CITIES } from '../../../../lib/citiesData'

export async function generateMetadata({ params }) {
  const { ville, quartier } = await params
  const city = CITIES.find(c => c.slug === ville)
  if (!city?.quartiers) return {}
  const q = city.quartiers.find(q => q.slug === quartier)
  if (!q) return {}

  return {
    title: `${q.seoTitle} | L'Écrin Traiteur`,
    description: q.seoDescription,
    openGraph: {
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
      title: q.seoTitle,
      description: q.seoDescription,
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: {
      canonical: `/traiteur/${ville}/${quartier}`,
    },
  }
}

export default function QuartierLayout({ children }) {
  return children
}
