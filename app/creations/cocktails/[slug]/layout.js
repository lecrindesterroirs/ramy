/* Métadonnées SEO par formule — table locale (les données vivent dans la page 'use client',
   non importable côté serveur ; on garde une source légère ici). */
const META = {
  classique: { label: 'Apéro', pieces: 8, accroche: 'La formule apéritive équilibrée pour vos afterworks et pauses conviviales.', img: '/cocktail-classique.webp' },
  signature: { label: 'Signature', pieces: 12, accroche: 'Une sélection raffinée de pièces généreuses, entre terre et mer.', img: '/cocktail-signature.webp' },
  prestige: { label: 'Prestige', pieces: 16, accroche: "L'excellence gastronomique pour vos réceptions les plus soignées.", img: '/cocktail-prestige.webp' },
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const f = META[slug]
  if (!f) return { title: "Cocktail introuvable | L'Écrin Traiteur" }
  return {
    title: `Cocktail ${f.label} — ${f.pieces} pièces par personne | L'Écrin Traiteur`,
    description: `${f.accroche} Cocktail ${f.label} (${f.pieces} pièces/pers.), pièces artisanales livrées prêtes à servir à Paris et en Île-de-France. Devis personnalisé sous 24h.`,
    openGraph: {
      title: `Cocktail ${f.label} | L'Écrin Traiteur`,
      description: f.accroche,
      images: [{ url: f.img, width: 1200, height: 800, alt: `Cocktail ${f.label}` }],
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: { canonical: `/creations/cocktails/${slug}` },
  }
}

export default function Layout({ children }) {
  return children
}
