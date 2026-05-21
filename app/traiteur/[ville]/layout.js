import { CITIES } from '../../../lib/citiesData'

export async function generateMetadata({ params }) {
  const { ville } = await params
  const city = CITIES.find(c => c.slug === ville)
  if (!city) {
    return { title: 'Traiteur Île-de-France | L\'Écrin Traiteur' }
  }
  return {
    title: city.seoTitle,
    description: `L'Écrin Traiteur livre à ${city.name} — petits-déjeuners artisanaux, pauses gourmandes et coffrets pour vos événements d'entreprise. Livraison dès 6h30, commande avant 14h la veille.`,
    openGraph: {
      title: `Traiteur ${city.name} | L'Écrin Traiteur`,
      description: `Petits-déjeuners et pauses d'entreprise livrés à ${city.name}. Artisans sélectionnés, livraison dès 6h30.`,
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: {
      canonical: `/traiteur/${city.slug}`,
    },
  }
}

export default function CityLayout({ children }) {
  return children
}
