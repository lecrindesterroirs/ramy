import { CITIES } from '../../../lib/citiesData'

export function generateStaticParams() {
  return CITIES.map(c => ({ ville: c.slug }))
}

export async function generateMetadata({ params }) {
  const { ville } = await params
  const city = CITIES.find(c => c.slug === ville)
  if (!city) {
    return { title: 'Traiteur Île-de-France | L\'Écrin Traiteur' }
  }
  // metaTitle / metaDescription : override par ville (titre absolu, marque incluse
  // si elle tient sous ~60 car.). Sans override, on garde le gabarit historique.
  const title = city.metaTitle || `${city.seoTitle} | L'Écrin Traiteur`
  const description = city.metaDescription
    || `Traiteur d'entreprise à ${city.name} : petits-déjeuners, plateaux repas, cocktails et buffets livrés dès 6h30. Artisans sélectionnés, devis sous 24h.`

  return {
    title: { absolute: title },
    description,
    openGraph: {
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, traiteur d'entreprise à Paris & Île-de-France" }],
      title,
      description,
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
