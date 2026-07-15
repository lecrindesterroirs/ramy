/* Métadonnées SEO par formule, table locale (les données vivent dans la page 'use client',
   non importable côté serveur ; on garde une source légère ici). */
const META = {
  classique: { nom: "L'Invitation", kw: 'apéritif', pieces: 8, accroche: 'La formule apéritive équilibrée pour vos afterworks et pauses conviviales.', img: '/cocktail-classique.webp' },
  signature: { nom: 'La Réception', kw: 'dînatoire', pieces: 12, accroche: 'Une sélection raffinée de pièces généreuses, entre terre et mer.', img: '/cocktail-signature.webp' },
  prestige: { nom: 'La Célébration', kw: 'prestige', pieces: 16, accroche: "L'excellence gastronomique pour vos réceptions les plus soignées.", img: '/cocktail-prestige.webp' },
}

export const SLUGS = Object.keys(META)

export function generateStaticParams() {
  return SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const f = META[slug]
  if (!f) return { title: "Cocktail introuvable | L'Écrin Traiteur" }
  return {
    title: { absolute: `Cocktail ${f.nom}, ${f.kw} Paris | L'Écrin Traiteur` },
    description: `${f.accroche} Cocktail ${f.kw} (${f.pieces} pièces/pers.), pièces artisanales livrées prêtes à servir à Paris et en Île-de-France. Devis sous 24h.`,
    openGraph: {
      title: `Cocktail ${f.nom} | L'Écrin Traiteur`,
      description: f.accroche,
      images: [{ url: f.img, width: 1200, height: 800, alt: `Cocktail ${f.nom}` }],
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: { canonical: `/creations/cocktails/${slug}` },
  }
}

export default function Layout({ children }) {
  return children
}
