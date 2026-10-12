import { PLATEAUX_VILLES } from '../../../lib/plateauxVillesData'

export function generateStaticParams() {
  return PLATEAUX_VILLES.map(c => ({ ville: c.slug }))
}

export async function generateMetadata({ params }) {
  const { ville } = await params
  const city = PLATEAUX_VILLES.find(c => c.slug === ville)
  if (!city) {
    return { title: "Plateaux repas d'entreprise | L'Écrin Traiteur" }
  }

  // Marque ajoutée seulement si le titre reste sous ~60 caractères : au-delà,
  // Google tronque et la fin (marque) ne sert à rien, autant garder le mot-clé entier.
  const withBrand = `${city.metaTitle} | L'Écrin Traiteur`
  const title = withBrand.length <= 60 ? withBrand : city.metaTitle

  return {
    title: { absolute: title },
    description: city.metaDescription,
    openGraph: {
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
      title,
      description: city.metaDescription,
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: {
      canonical: `/plateaux-repas-entreprise/${city.slug}`,
    },
  }
}

export default function PlateauxVilleLayout({ children }) {
  return children
}
