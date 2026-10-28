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
/* 24/10/2026 : Boulogne, Puteaux, Nanterre et Courbevoie laissent la requête « petit déjeuner » à leur page /petit-dejeuner-entreprise/<ville>
   (mieux classée quand Google la montre : 3e à Nanterre, 4e à Puteaux). Les 7 autres villes gardent « petit déjeuner dès 6,50 € HT » :
   elles servent de témoins. Comparer les positions et les clics vers le 20/11/2026. */
const META_OVERRIDES = {
  'boulogne-billancourt': { title: "Traiteur Boulogne-Billancourt : plateaux repas dès 28,90 € HT", description: "Traiteur d'entreprise à Boulogne-Billancourt : plateaux repas dès 28,90 € HT, cocktails dès 29,90 € HT, livrés dès 6h30. Petit-déjeuner : page dédiée." },
  'versailles': { title: "Traiteur entreprise Versailles : buffets, plateaux repas", description: "Traiteur d'entreprise à Versailles : buffets et cocktails dès 29,90 € HT, plateaux repas dès 28,90 € HT, livrés dès 6h30. 5,0/5 sur Google, devis 24h." },
  'puteaux': { title: "Traiteur Puteaux, La Défense : plateaux repas dès 28,90 € HT", description: "Traiteur d'entreprise à Puteaux et La Défense : plateaux repas dès 28,90 € HT, cocktails dès 29,90 € HT, livrés dès 6h30. Petit-déjeuner : page dédiée." },
  'neuilly-sur-seine': { title: "Traiteur entreprise Neuilly : petit déjeuner dès 6,50 € HT", description: "Traiteur d'entreprise à Neuilly-sur-Seine : petit déjeuner entreprise dès 6,50 € HT, plateaux repas entreprise dès 28,90 € HT, livrés dès 6h30." },
  'nanterre': { title: "Traiteur entreprise Nanterre : plateaux repas dès 28,90 € HT", description: "Traiteur d'entreprise à Nanterre : plateaux repas dès 28,90 € HT, cocktails dès 29,90 € HT, livrés dès 6h30. Petit-déjeuner : page dédiée." },
  'levallois-perret': { title: "Traiteur entreprise Levallois : petit déjeuner dès 6,50 € HT", description: "Traiteur d'entreprise à Levallois-Perret : petit déjeuner entreprise dès 6,50 € HT, plateaux repas entreprise dès 28,90 € HT, livrés dès 6h30." },
  'asnieres-sur-seine': { title: "Traiteur entreprise Asnières : petit déjeuner dès 6,50 € HT", description: "Traiteur d'entreprise à Asnières-sur-Seine : petit déjeuner entreprise dès 6,50 € HT, plateaux repas entreprise dès 28,90 € HT, livrés dès 6h30." },
  'courbevoie': { title: "Traiteur Courbevoie, La Défense : plateaux et cocktails", description: "Traiteur d'entreprise à Courbevoie et La Défense : plateaux repas dès 28,90 € HT, cocktails dès 29,90 € HT, livrés dès 6h30. Petit-déjeuner : page dédiée." },
  'suresnes': { title: "Traiteur entreprise Suresnes : petit déjeuner dès 6,50 € HT", description: "Traiteur d'entreprise à Suresnes : petit déjeuner entreprise dès 6,50 € HT (viennoiseries et café), plateaux repas entreprise dès 28,90 € HT. Dès 6h30." },
  'gennevilliers': { title: "Traiteur entreprise Gennevilliers : petit déjeuner dès 6,50 € HT", description: "Traiteur d'entreprise à Gennevilliers : petit déjeuner entreprise dès 6,50 € HT, plateaux repas entreprise dès 28,90 € HT, livrés dès 6h30." },
  'rueil-malmaison': { title: "Traiteur Rueil-Malmaison : petit déjeuner dès 6,50 € HT", description: "Traiteur d'entreprise à Rueil-Malmaison : petit déjeuner entreprise dès 6,50 € HT, plateaux repas entreprise dès 28,90 € HT, livrés dès 6h30." },
  'paris': { title: "Traiteur Paris par arrondissement : livraison dès 6h30" },
  'saint-denis': { title: "Traiteur Saint-Denis (93) : petit déjeuner dès 6,50 € HT", description: "Traiteur d'entreprise à Saint-Denis (93) : petit déjeuner entreprise dès 6,50 € HT, plateaux repas entreprise dès 28,90 € HT, livrés dès 6h30." },
  "clichy": { description: "Traiteur d'entreprise à Clichy (92) : petits-déjeuners, plateaux repas et buffets cocktail livrés dès 6h30. Commande avant 10h la veille, devis sous 24h." },
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
