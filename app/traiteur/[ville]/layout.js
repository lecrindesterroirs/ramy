import { CITIES } from '../../../lib/citiesData'

export async function generateMetadata({ params }) {
  const { ville } = await params
  const city = CITIES.find(c => c.slug === ville)
  if (!city) {
    return { title: 'Traiteur Île-de-France | L\'Écrin Traiteur' }
  }
  return {
    title: city.seoTitle,
    description: `Traiteur d'entreprise à ${city.name} : petits-déjeuners, plateaux repas, cocktails et buffets livrés dès 6h30. Artisans sélectionnés, devis sous 24h.`,
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
