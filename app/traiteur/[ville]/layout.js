import { CITIES } from '../../../lib/citiesData'

export async function generateMetadata({ params }) {
  const { ville } = await params
  const city = CITIES.find(c => c.slug === ville)
  if (!city) {
    return { title: 'Traiteur Île-de-France | L\'Écrin Traiteur' }
  }
  return {
    title: city.seoTitle,
    description: `L'Écrin Traiteur livre à ${city.name} — petits-déjeuners, plateaux repas, cocktails, buffets et animations culinaires pour vos événements d'entreprise. Livraison dès 6h30, commande avant 14h la veille.`,
    openGraph: {
      title: `Traiteur ${city.name} | L'Écrin Traiteur`,
      description: `Traiteur d'entreprise à ${city.name} : petits-déjeuners, plateaux repas, cocktails et réceptions. Artisans sélectionnés, livraison dès 6h30.`,
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
