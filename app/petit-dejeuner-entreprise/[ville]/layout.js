import { ogImages } from '../../../lib/og'
import { PDJ_VILLES } from '../../../lib/pdjVillesData'

export function generateStaticParams() {
  return PDJ_VILLES.map(c => ({ ville: c.slug }))
}

/* Titres raccourcis (<= 60 car.) quand le metaTitle de lib/pdjVillesData.js est trop long. */
const TITRES_COURTS = {
  'boulogne-billancourt': "Petit-déjeuner d'entreprise à Boulogne-Billancourt dès 6h30",
}

export async function generateMetadata({ params }) {
  const { ville } = await params
  const city = PDJ_VILLES.find(c => c.slug === ville)
  if (!city) {
    return { title: "Petit-déjeuner d'entreprise | L'Écrin Traiteur" }
  }

  // Marque ajoutée seulement si le titre reste sous ~60 caractères : au-delà,
  // Google tronque et la fin (marque) ne sert à rien, autant garder le mot-clé entier.
  const withBrand = `${city.metaTitle} | L'Écrin Traiteur`
  const metaTitle = TITRES_COURTS[city.slug] && city.metaTitle.length > 60 ? TITRES_COURTS[city.slug] : city.metaTitle
  const title = withBrand.length <= 60 ? withBrand : metaTitle

  return {
    title: { absolute: title },
    description: city.metaDescription,
    openGraph: {
      images: ogImages('/hero-petitdej.webp'),
      title,
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
