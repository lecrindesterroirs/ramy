import { ogImages } from '../../../../lib/og'
import { CITIES } from '../../../../lib/citiesData'

export function generateStaticParams() {
  return CITIES.flatMap(c => (c.quartiers ?? []).map(q => ({ ville: c.slug, quartier: q.slug })))
}

/* Descriptions écrites à la main (clé ville/quartier) : celles de lib/citiesData.js
   dépassent ~155 caractères et sont coupées dans Google. Prime sur citiesData.js. */
const DESCRIPTION_OVERRIDES = {
  "paris/14e-arrondissement": "Plateaux repas, lunch box, pauses et petits-déjeuners livrés dans le 14e : Tour Montparnasse, Alésia, Denfert. Devis sous 24h, livraison dès 6h30.",
  "paris/6e-arrondissement": "Plateaux repas, réceptions, cocktails et petits-déjeuners livrés dans le 6e : Saint-Germain-des-Prés, édition, avocats, luxe. Devis sous 24h, dès 6h30.",
  "paris/13e-arrondissement": "Plateaux repas, lunch box, pauses et petits-déjeuners livrés dans le 13e : Paris Rive Gauche, BNF, Tolbiac, Austerlitz. Options vegan, livraison dès 6h30.",
  "paris/16e-arrondissement": "Réceptions, cocktails, plateaux repas et petits-déjeuners d'entreprise dans le 16e : Trocadéro, Victor Hugo, Passy, La Muette. Livraison dès 6h30.",
  "paris/1er-arrondissement": "Cocktails, réceptions, plateaux repas et petits-déjeuners d'entreprise dans le 1er : Palais-Royal, Châtelet, Louvre, Vendôme. Devis sous 24h, dès 6h30.",
  "paris/17e-arrondissement": "Plateaux repas, lunch box, pauses et petits-déjeuners d'entreprise dans le 17e : Batignolles, Wagram, Ternes, Pereire. Devis sous 24h, livraison dès 6h30.",
  "paris/8e-arrondissement": "Cocktails, réceptions, plateaux repas et petits-déjeuners d'entreprise dans le 8e : Champs-Élysées, Triangle d'or, Madeleine. Devis sous 24h, dès 6h30.",
  "paris/9e-arrondissement": "Petits-déjeuners, pauses, plateaux repas et lunch box livrés dans le 9e : Opéra, Grands Boulevards, Notre-Dame-de-Lorette. Devis sous 24h, dès 6h30.",
  "paris/3e-arrondissement": "Cocktails, plateaux apéritifs, pauses et petits-déjeuners pour press days et agences du 3e : Haut-Marais, Carreau du Temple. Devis sous 24h, dès 6h30.",
  "paris/12e-arrondissement": "Plateaux repas, lunch box, pauses et petits-déjeuners livrés dans le 12e : Bercy, Nation, Gare de Lyon. Entreprises et administrations, dès 6h30.",
  "paris/7e-arrondissement": "Plateaux repas, réceptions et petits-déjeuners de travail dans le 7e : Invalides, ministères, ambassades, organisations internationales. Dès 6h30.",
  "paris/2e-arrondissement": "Petits-déjeuners, pauses, lunch box et plateaux repas livrés dans le 2e : Silicon Sentier, Bourse, Grands Boulevards. Startups et grands groupes, dès 6h30.",
  "paris/15e-arrondissement": "Plateaux repas, buffets de séminaire, cocktails et petits-déjeuners dans le 15e : Front-de-Seine, Beaugrenelle, Montparnasse. Devis sous 24h, dès 6h30.",
  "boulogne-billancourt/trapeze": "Plateaux repas, pauses, cocktails et petits-déjeuners d'entreprise dans le Trapèze à Boulogne-Billancourt : Pont-de-Sèvres, Île Seguin. Dès 6h30.",
  "saint-denis/pleyel": "Quartier d'affaires Pleyel à Saint-Denis (93) : petits-déjeuners, plateaux repas, cocktails et buffets. Village Olympique, ZAC Landy France. Dès 6h30.",
  "la-defense/tours": "Toutes les tours de La Défense : Tour First, CB21, Total Énergies, Ariane, Aurore, Eqho. Petits-déjeuners, plateaux repas, cocktails et réceptions.",
  "issy-les-moulineaux/val-de-seine": "Petits-déjeuners livrés dans le Val-de-Seine à Issy-les-Moulineaux : Microsoft, Canal+, Bouygues Telecom. Livraison dès 6h30, produits artisanaux.",
}

export async function generateMetadata({ params }) {
  const { ville, quartier } = await params
  const city = CITIES.find(c => c.slug === ville)
  if (!city?.quartiers) return {}
  const q = city.quartiers.find(q => q.slug === quartier)
  if (!q) return {}

  const description = DESCRIPTION_OVERRIDES[`${ville}/${quartier}`] || q.seoDescription

  return {
    title: `${q.seoTitle} | L'Écrin Traiteur`,
    description,
    openGraph: {
      images: ogImages('/hero-bg2.webp'),
      title: q.seoTitle,
      description,
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
