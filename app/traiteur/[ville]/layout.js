import { alternatesPour } from '../../../lib/i18n'
import { cheminsVillesEn } from '../../../lib/en/villes'
import { ogImages } from '../../../lib/og'
import { CITIES } from '../../../lib/citiesData'

export function generateStaticParams() {
  return CITIES.map(c => ({ ville: c.slug }))
}

/* Metas écrites à la main : les textes de lib/citiesData.js dépassent la taille
   d'un résultat Google (titre ~60 car., description ~155 car.). Une entrée ici
   prime sur citiesData.js, sans toucher à ce fichier. */
const META_OVERRIDES = {
  'paris': { title: "Traiteur Paris par arrondissement : livraison dès 6h30" },
  'boulogne-billancourt': { title: "Traiteur d'entreprise Boulogne-Billancourt, livré dès 6h30" },
  "versailles": { description: "Traiteur d'entreprise à Versailles et dans les Yvelines (78) : petits-déjeuners, plateaux repas, buffets et cocktails livrés dès 6h30. Devis sous 24h." },
  "saint-denis": { description: "Traiteur d'entreprise à Saint-Denis (93) : petits-déjeuners, plateaux repas, buffets cocktail dès 6h30, à Pleyel et au Stade de France. Devis sous 24h." },
  "clichy": { description: "Traiteur d'entreprise à Clichy (92) : petits-déjeuners, plateaux repas et buffets cocktail livrés dès 6h30. Commande avant 14h la veille, devis sous 24h." },
}

export async function generateMetadata({ params }) {
  const { ville } = await params
  const city = CITIES.find(c => c.slug === ville)
  if (!city) {
    return { title: 'Traiteur Île-de-France | L\'Écrin Traiteur' }
  }
  // metaTitle / metaDescription : override par ville (titre absolu, marque incluse
  // si elle tient sous ~60 car.). Sans override, on garde le gabarit historique.
  const over = META_OVERRIDES[city.slug] || {}
  const title = over.title || city.metaTitle || `${city.seoTitle} | L'Écrin Traiteur`
  const brute = over.description || city.metaDescription
    || `Traiteur d'entreprise à ${city.name} : petits-déjeuners, plateaux repas, cocktails et buffets livrés dès 6h30. Artisans sélectionnés, devis sous 24h.`
  // Noms de ville longs (Issy-les-Moulineaux, Vélizy-Villacoublay) : on retire « livrés » pour tenir en 155 caractères.
  const description = brute.length > 155 ? brute.replace(' livrés dès 6h30', ' dès 6h30') : brute

  return {
    title: { absolute: title },
    description,
    openGraph: {
      images: ogImages('/hero-bg.webp'),
      title,
      description,
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: alternatesPour(`/traiteur/${city.slug}`, { en: cheminsVillesEn().includes(`/traiteur/${city.slug}`) }),
  }
}

export default function CityLayout({ children }) {
  return children
}
