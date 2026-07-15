import { getArtisanBySlug, ARTISANS } from '../../../../lib/artisansData'

export function generateStaticParams() {
  return ARTISANS.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const artisan = getArtisanBySlug(slug)
  if (!artisan) {
    return {
      title: 'Artisan introuvable | L\'Écrin Traiteur',
    }
  }
  return {
    title: `${artisan.nom}, ${artisan.specialite} | L'Écrin Traiteur`,
    description: artisan.description,
    openGraph: {
      title: `${artisan.nom} | Nos Artisans, L'Écrin Traiteur`,
      description: artisan.description,
      images: [{ url: artisan.img, width: 800, height: 800, alt: artisan.nom }],
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: {
      canonical: `/univers/nos-artisans/${artisan.slug}`,
    },
  }
}

export default function ArtisanLayout({ children }) {
  return children
}
