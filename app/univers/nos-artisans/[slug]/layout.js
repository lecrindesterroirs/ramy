import { getArtisanBySlug, ARTISANS } from '../../../../lib/artisansData'

export function generateStaticParams() {
  return ARTISANS.map(a => ({ slug: a.slug }))
}

/* Description raccourcie à ~155 caractères : phrases entières tant que ça tient,
   sinon coupe au dernier mot avec une ellipse. */
const courte = (texte, max = 155) => {
  const t = String(texte || '').trim()
  if (t.length <= max) return t
  let out = ''
  for (const phrase of t.split(/(?<=[.!?])\s+/)) {
    const essai = out ? `${out} ${phrase}` : phrase
    if (essai.length > max) break
    out = essai
  }
  if (out.length >= 90) return out
  const base = out ? `${out} ` : ''
  const reste = t.slice(base.length)
  const coupe = reste.slice(0, max - base.length - 1)
  const fin = Math.max(coupe.lastIndexOf(','), coupe.lastIndexOf(' '))
  return `${base}${coupe.slice(0, fin > 0 ? fin : coupe.length).replace(/[,;:\s]+$/, '')}…`
}

/* « Mado » ne figure ni dans un titre ni dans une meta. */
const SANS_MADO = {
  'mado-paris': {
    title: "Madeleines d'exception, notre produit signature",
    description: "Nos madeleines d'exception, notre produit signature : fabriquées dans un atelier parisien, sans huile de palme. Moelleuses, dorées, reconnaissables.",
  },
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const artisan = getArtisanBySlug(slug)
  if (!artisan) {
    return {
      title: 'Artisan introuvable | L\'Écrin Traiteur',
    }
  }
  const over = SANS_MADO[artisan.slug] || {}
  const court = `${artisan.nom}, ${artisan.specialite}`
  const avecMarque = `${court} | L'Écrin Traiteur`
  // Marque ajoutée seulement si le titre reste sous 60 caractères.
  const title = over.title || (avecMarque.length <= 60 ? avecMarque : court)
  const description = over.description || courte(artisan.description)
  return {
    title: { absolute: title },
    description,
    openGraph: {
      title: over.title ? `${over.title} | L'Écrin Traiteur` : `${artisan.nom} | Nos Artisans, L'Écrin Traiteur`,
      description,
      images: [{ url: artisan.img, width: 800, height: 800, alt: artisan.nom }],
      locale: 'fr_FR',
      type: 'website',
    },
    alternates: {
      canonical: `/univers/nos-artisans/${artisan.slug}`,
    },
  }
}

export default function ArtisanLayout({ children }) {
  return children
}
